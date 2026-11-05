/* Arcade Unity 2023 WebGL WASM transport guard.
   The source 49,046,159-byte WASM has an uncompressed 00 61 73 6D header;
   its original .wasm.br name was misleading. Do not touch IDBFS or cloud saves. */
(function(root){
  "use strict";
  var EXPECTED_BYTES=49046159;
  var VERSION="20261103r5";
  var PRIMARY="Build/9341c50746882c9e4b4e6816582df1fd.wasm";
  var LEGACY="Build/9341c50746882c9e4b4e6816582df1fd.wasm.br";
  function validHead(a){return a[0]===0&&a[1]===97&&a[2]===115&&a[3]===109&&
    a[4]===1&&a[5]===0&&a[6]===0&&a[7]===0;}
  async function request(url,attempt){
    var suffix=(url.indexOf("?")>=0?"&":"?")+"gvwasm="+VERSION+"-"+attempt+"-"+Date.now();
    var ctrl=typeof AbortController==="function"?new AbortController():null;
    var timer=setTimeout(function(){if(ctrl)ctrl.abort();},45000);
    try{
      var res=await fetch(url+suffix,{method:"GET",credentials:"same-origin",
        cache:"no-store",signal:ctrl?ctrl.signal:undefined});
      if(!res.ok)throw Error("HTTP "+res.status);
      var buffer=await res.arrayBuffer();
      var bytes=new Uint8Array(buffer);
      if(bytes.length!==EXPECTED_BYTES)
        throw Error("WASM byte length mismatch: got "+bytes.length+" / "+EXPECTED_BYTES);
      if(!validHead(bytes))throw Error("WASM magic/version mismatch");
      if(typeof WebAssembly!=="object"||!WebAssembly.validate(bytes))
        throw Error("WASM code failed browser validation");
      return bytes;
    }finally{clearTimeout(timer);}
  }
  async function load(){
    var urls=[PRIMARY,LEGACY],last=null;
    for(var i=0;i<urls.length;i++){
      for(var n=0;n<2;n++){
        try{
          var bytes=await request(urls[i],n);
          console.info("[Arcade] GV_WASM_VERIFIED",{
            source:i===0?"raw-wasm":"legacy-raw-wasm",
            bytes:bytes.length,attempt:n+1});
          return bytes;
        }catch(e){
          last=e;
          console.warn("[Arcade] GV_WASM_RETRY",{
            source:i===0?"raw-wasm":"legacy-raw-wasm",attempt:n+1,
            error:String(e&&e.message?e.message:e)});
        }
      }
    }
    throw Error("Không thể tải tệp Unity WebAssembly đầy đủ. "+
      "Kiểm tra bản deploy Build/*.wasm, CDN và Content-Encoding. "+
      String(last&&last.message||""));
  }
  root.ArcadeWasm={load:load,expectedBytes:EXPECTED_BYTES};
})(window);
