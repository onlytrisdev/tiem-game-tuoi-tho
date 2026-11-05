/* Immutable dictionary transport. Every ES3 byte is restored, including NaN
 * and 64-bit IDs. The dictionary is never used as a default player save. */
(function(w){'use strict';
  var HASH='d266b115845d7fa6eda68026f461fc57c92a07ffab3a7ff42ecc4576793fe25f';
  var LIMIT=8*1024*1024, cached;
  var asset=new URL('arcade-es3-dictionary-v1.gz',document.currentScript.src).href;
  async function stream(data,mode){
    var reader=new Blob([data]).stream().pipeThrough(mode==='gzip'?new CompressionStream('gzip'):new DecompressionStream('gzip')).getReader();
    var parts=[],size=0;
    try{for(;;){var p=await reader.read();if(p.done)break;size+=p.value.length;if(size>LIMIT)throw new Error('Compact stream limit');parts.push(p.value);}}
    catch(e){await reader.cancel();throw e;}finally{reader.releaseLock();}
    var out=new Uint8Array(size),at=0;parts.forEach(function(p){out.set(p,at);at+=p.length;});return out;
  }
  async function sha(data){return Array.from(new Uint8Array(await crypto.subtle.digest('SHA-256',data))).map(function(n){return n.toString(16).padStart(2,'0');}).join('');}
  function hashAt(b,p){var h=2166136261;for(var i=0;i<16;i++)h=Math.imul(h^b[p+i],16777619);return h>>>0;}
  function dictionary(){
    if(!cached)cached=(async function(){
      var response=await fetch(asset,{cache:'force-cache',signal:AbortSignal.timeout(10000)});
      if(!response.ok)throw new Error('Save dictionary unavailable');
      var packed=new Uint8Array(await response.arrayBuffer());if(packed.length>LIMIT)throw new Error('Dictionary limit');
      var data=await stream(packed,'unzip');if(await sha(data)!==HASH)throw new Error('Save dictionary checksum mismatch');
      var index=new Map();for(var i=0;i+16<=data.length;i+=4){var key=hashAt(data,i),list=index.get(key)||[];if(list.length<12)list.push(i);index.set(key,list);}
      return {data:data,index:index};
    })().catch(function(e){cached=null;throw e;});
    return cached;
  }
  function delta(data,dict){
    var ops=[],start=0,p=0;
    while(p+16<=data.length){var candidates=dict.index.get(hashAt(data,p))||[],best=0,offset=0;
      candidates.forEach(function(at){var n=0;while(p+n<data.length && at+n<dict.data.length && data[p+n]===dict.data[at+n])n++;if(n>best){best=n;offset=at;}});
      if(best>=24){if(start<p)ops.push(w.ArcadeBinary.toB64(data.subarray(start,p)));ops.push([offset,best]);p+=best;start=p;}else p++;
    }
    if(start<data.length)ops.push(w.ArcadeBinary.toB64(data.subarray(start)));return ops;
  }
  async function expand(payload){
    if(payload.dictionary!==HASH || !Number.isInteger(payload.size) || payload.size<1 || payload.size>LIMIT || !Array.isArray(payload.ops) || payload.ops.length>100000)throw new Error('Invalid compact save');
    var dict=await dictionary(),out=new Uint8Array(payload.size),at=0;
    for(var op of payload.ops){var part;
      if(typeof op==='string')part=w.ArcadeBinary.fromB64(op);
      else if(Array.isArray(op)&&op.length===2&&Number.isInteger(op[0])&&Number.isInteger(op[1])&&op[0]>=0&&op[1]>0&&op[0]+op[1]<=dict.data.length)part=dict.data.subarray(op[0],op[0]+op[1]);
      else throw new Error('Invalid compact operation');
      if(at+part.length>out.length)throw new Error('Compact length overflow');out.set(part,at);at+=part.length;
    }
    if(at!==out.length || await sha(out)!==payload.sha256)throw new Error('Compact ES3 checksum mismatch');return out;
  }
  async function decode(data){
    var payload=JSON.parse(new TextDecoder('utf-8',{fatal:true}).decode(await stream(data,'unzip')));
    var es3=await expand(payload),prefix=w.ArcadeBinary.fromB64(payload.prefix),suffix=w.ArcadeBinary.fromB64(payload.suffix);
    var value=new TextEncoder().encode(w.ArcadeBinary.toB64(await stream(es3,'gzip')));
    var out=new Uint8Array(prefix.length+4+value.length+suffix.length);
    if(out.length>1024*1024)throw new Error('Restored PlayerPrefs limit');
    out.set(prefix);new DataView(out.buffer).setUint32(prefix.length,value.length,true);out.set(value,prefix.length+4);out.set(suffix,prefix.length+4+value.length);
    var parsed=w.ArcadePlayerPrefs.parse(out);if(!parsed.ok)throw new Error('Invalid restored PlayerPrefs');return out;
  }
  async function encode(source){
    var parsed=w.ArcadePlayerPrefs.parse(source),item=parsed.ok&&parsed.items.find(function(i){return i.key==='SaveFile.es3';});
    if(!item || item.lengthOffset===null || !Number.isInteger(item.lengthOffset))return null;
    var es3=await stream(w.ArcadeBinary.fromB64(item.value),'unzip'),dict=await dictionary();
    var payload={dictionary:HASH,size:es3.length,sha256:await sha(es3),
      prefix:w.ArcadeBinary.toB64(source.subarray(0,item.lengthOffset)),
      suffix:w.ArcadeBinary.toB64(source.subarray(item.valueOffset+new TextEncoder().encode(item.value).length)),ops:delta(es3,dict)};
    // Verify the exact original ES3 bytes before publishing a compact snapshot.
    await expand(payload);
    var packed=await stream(new TextEncoder().encode(JSON.stringify(payload)),'gzip');
    return {d:w.ArcadeBinary.toB64(packed),compression:'es3-dictionary-v1',rawBytes:source.length,check:w.ArcadeBinary.checksum(source)};
  }
  w.ArcadeCompact={encode:encode,decode:decode};
})(window);
