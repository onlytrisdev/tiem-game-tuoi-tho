/* Arcade native save transport. Legacy gzip preserves exact file bytes.
 * Dictionary ES3 preserves exact native ES3 text and all other prefs;
 * only the gzip container is regenerated. Never restore a partial file.
 */
(function(w){"use strict"; if(w.ArcadeBinary)return;
  var MAX_UNCOMPRESSED=1024*1024,MAX_ENCODED=2*1024*1024;
  function bytes(input){
    if(input instanceof Uint8Array)return new Uint8Array(input);
    if(input instanceof ArrayBuffer)return new Uint8Array(input);
    if(ArrayBuffer.isView(input))return new Uint8Array(input.buffer,input.byteOffset,input.byteLength);
    throw new Error("Invalid binary input");
  }
  function checksum(buf){
    var x=bytes(buf),h=2166136261;
    for(var i=0;i<x.length;i++){h^=x[i];h=Math.imul(h,16777619)}
    return ("00000000"+(h>>>0).toString(16)).slice(-8);
  }
  function toB64(src){
    var v=bytes(src),out="";
    for(var i=0;i<v.length;i+=16384)
      out+=String.fromCharCode.apply(null,v.subarray(i,i+16384));
    return btoa(out);
  }
  function fromB64(b64){
    if(typeof b64!=="string" || b64.length>Math.ceil(MAX_ENCODED*4/3)+8 ||
       b64.length%4!==0 || !/^[A-Za-z0-9+/]*={0,2}$/.test(b64))
      throw new Error("Invalid cloud base64");
    var raw=atob(b64),result=new Uint8Array(raw.length);
    if(raw.length>MAX_ENCODED)throw new Error("Cloud file too large");
    for(var i=0;i<raw.length;i++)result[i]=raw.charCodeAt(i);
    return result;
  }
  async function consume(stream,limit){
    var reader=stream.getReader(),chunks=[],total=0;
    try{
      for(;;){
        var item=await reader.read();
        if(item.done)break;
        total+=item.value.length;
        if(total>limit)throw new Error("Decoded cloud file exceeds safe size");
        chunks.push(item.value);
      }
    }catch(err){try{await reader.cancel();}catch(_){}throw err;}
    finally{try{reader.releaseLock();}catch(_){}}
    var result=new Uint8Array(total),pos=0;
    chunks.forEach(function(b){result.set(b,pos);pos+=b.length;});
    return result;
  }
  async function encode(source){
    var original=bytes(source);
    if(original.length===0 || original.length>MAX_UNCOMPRESSED)
      throw new Error("Invalid native file size");
    var encoded=original,compression="none";
    if(typeof CompressionStream==="function" && typeof Blob==="function"){
      try {
        var stream=new Blob([original]).stream().pipeThrough(new CompressionStream("gzip"));
        var packed=await consume(stream,MAX_ENCODED);
        if(packed.length+48<original.length){
          encoded=packed;compression="gzip";
        }
      }catch(_){/* leave original intact; cloud size guard still applies */}
    }
    var result={d:toB64(encoded),compression:compression,rawBytes:original.length,check:checksum(original)};
    if(w.ArcadeCompact){
      var compact=await w.ArcadeCompact.encode(original);
      if(compact && compact.d.length<result.d.length)result=compact;
    }
    return result;
  }
  async function decode(record){
    if(!record || typeof record.d!=="string")throw new Error("Missing cloud file");
    var buffer=fromB64(record.d);
    if(record.compression==='es3-dictionary-v1'){
      if(!w.ArcadeCompact)throw new Error('Compact decoder unavailable');
      // ES3 text is SHA-256 verified; gzip is regenerated, so its byte-level
      // checksum and length can differ between browser implementations.
      return w.ArcadeCompact.decode(buffer);
    }
    if(record.compression==="gzip"){
      if(typeof DecompressionStream!=="function" || typeof Blob!=="function")
        throw new Error("Browser cannot decode gzip cloud save");
      var stream=new Blob([buffer]).stream().pipeThrough(new DecompressionStream("gzip"));
      buffer=await consume(stream,MAX_UNCOMPRESSED);
    }else if(record.compression && record.compression!=="none")
      throw new Error("Unsupported save compression");
    if(buffer.length>MAX_UNCOMPRESSED)throw new Error("Native file over safe limit");
    if(record.rawBytes!==undefined && buffer.length!==record.rawBytes)
      throw new Error("Cloud native file length mismatch");
    if(record.check!==undefined && checksum(buffer)!==record.check)
      throw new Error("Cloud native file checksum mismatch");
    return buffer;
  }
  w.ArcadeBinary={encode:encode,decode:decode,checksum:checksum,toB64:toB64,fromB64:fromB64};
})(window);
