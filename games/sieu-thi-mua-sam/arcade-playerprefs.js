/* Read-only Unity WebGL PlayerPrefs inspector for Shopping Business.
 * Binary data is NEVER modified or reserialized. Validation is strict:
 * unknown layouts are reported, never guessed.
 * UnityPrf typed layout documentation: BinaryWebPlayerPrefs (Unity).
 */
(function (w) {
  "use strict";
  if (w.ArcadePlayerPrefs) return;
  var MAX_ENTRIES = 2048, MAX_BYTES = 2 * 1024 * 1024;
  function bytesOf(v) {
    if (v instanceof Uint8Array) return v;
    if (v instanceof ArrayBuffer) return new Uint8Array(v);
    if (ArrayBuffer.isView(v)) return new Uint8Array(v.buffer,v.byteOffset,v.byteLength);
    return null;
  }
  function parse(data) {
    var bytes=bytesOf(data);
    if(!bytes || bytes.length<16 || bytes.length>MAX_BYTES)
      return {ok:false,error:"missing or oversized PlayerPrefs file",items:[]};
    var magic="";
    for(var i=0;i<8;i++)magic+=String.fromCharCode(bytes[i]);
    if(magic!=="UnityPrf")
      return {ok:false,error:"unsupported signature",signature:magic.slice(0,8),items:[]};
    var view=new DataView(bytes.buffer,bytes.byteOffset,bytes.byteLength);
    var pos=16,items=[],decoder=new TextDecoder("utf-8",{fatal:false});
    function textAt(p,len) {
      if(len<0 || p<0 || p+len>bytes.length)throw new Error("out of bounds");
      return decoder.decode(bytes.subarray(p,p+len));
    }
    try {
      while(pos<bytes.length){
        if(items.length>=MAX_ENTRIES)throw new Error("too many prefs entries");
        var keyLen=bytes[pos++];
        if(!keyLen || keyLen>200 || pos+keyLen+1>bytes.length)
          throw new Error("invalid key length");
        var key=textAt(pos,keyLen);pos+=keyLen;
        if(!/^[^\x00-\x1f\x7f]{1,200}$/.test(key))throw new Error("invalid prefs key");
        var tag=bytes[pos++],type,value,valueOffset=null,lengthOffset=null;
        if(tag===0xFE){if(pos+4>bytes.length)throw new Error("truncated int");type="int";value=view.getInt32(pos,true);pos+=4;}
        else if(tag===0xFD){if(pos+4>bytes.length)throw new Error("truncated float");type="float";value=view.getFloat32(pos,true);pos+=4;}
        else if(tag<=0x80){
          var len=tag;
          if(tag===0x80){if(pos+4>bytes.length)throw new Error("truncated length");lengthOffset=pos;len=view.getUint32(pos,true);pos+=4;}
          if(len>MAX_BYTES || pos+len>bytes.length)throw new Error("invalid string length");
          type="string";valueOffset=pos;value=textAt(pos,len);pos+=len;
        }else throw new Error("unknown prefs value tag "+tag);
        items.push({key:key,type:type,value:value,valueOffset:valueOffset,lengthOffset:lengthOffset});
      }
    }catch(e){
      // A different WebGL build has been observed using .NET 7-bit lengths
      // for both key and string value. Try this ONLY after typed parsing
      // failed, and require the full input to validate. Never write it back.
      try {
        var next=16,other=[];
        function len7(){
          var n=0,shift=0;
          for(var j=0;j<5;j++){
            if(next>=bytes.length)throw new Error("truncated varint");
            var v=bytes[next++];
            n+=(v&0x7f)*Math.pow(2,shift);
            if(!(v&0x80))return n;
            shift+=7;
          }
          throw new Error("oversize varint");
        }
        while(next<bytes.length){
          if(other.length>=MAX_ENTRIES)throw new Error("too many varint entries");
          var kLen=len7();
          if(!kLen||kLen>200||next+kLen>bytes.length)throw new Error("invalid varint key");
          var name=textAt(next,kLen);next+=kLen;
          if(!/^[^\x00-\x1f\x7f]{1,200}$/.test(name))throw new Error("invalid varint key text");
          var vLen=len7();
          if(vLen>MAX_BYTES||next+vLen>bytes.length)throw new Error("invalid varint value");
          var val=textAt(next,vLen);next+=vLen;
          other.push({key:name,type:"string",value:val});
        }
        if(other.length) return {ok:true,layout:"len7",major:view.getUint32(8,true),minor:view.getUint32(12,true),items:other};
      }catch(_){}
      return {ok:false,error:"unsupported UnityPrf entries: "+e.message,items:[],major:view.getUint32(8,true),minor:view.getUint32(12,true)};
    }
    return {ok:true,layout:"typed",major:view.getUint32(8,true),minor:view.getUint32(12,true),items:items};
  }
  function json(value) {
    if(value && typeof value==="object")return value;
    if(typeof value!=="string")return null;
    for(var i=0;i<2;i++){
      if(typeof value!=="string")break;
      var trim=value.trim();
      if(trim[0]!=="{" && trim[0]!=="[")break;
      try{value=JSON.parse(trim);}catch(_){break;}
    }
    return value && typeof value==="object" ? value : null;
  }
  var MONEY=["money","Money","playerMoney","PlayerMoney","currentMoney","CurrentMoney",
    "cash","Cash","currentCash","CurrentCash","playerCash","PlayerCash",
    "balance","Balance","cashBalance","CashBalance","wallet","Wallet",
    "moneyCount","MoneyCount","cashAmount","CashAmount",
    "currency","Currency","dollars","Dollars"];
  var STAGES=["TutorialStage","tutorialStage","CurrentStage","currentStage","stage","Stage"];
  var LEVELS=["CurrentLevel","currentLevel","level","Level"];
  function pick(obj,keys) {
    if(!obj || typeof obj!=="object" || Array.isArray(obj))return null;
    for(var i=0;i<keys.length;i++){
      var k=keys[i],v=obj[k];
      if(!Object.prototype.hasOwnProperty.call(obj,k) ||
        (typeof v!=="number" && typeof v!=="string") ||
        (typeof v==="string" && !v.trim()))continue;
      var n=Number(v);
      if(Number.isFinite(n) && n>=0 && n<=Number.MAX_SAFE_INTEGER)return {key:k,value:Math.floor(n)};
    }
    return null;
  }
  function candidates(value){
    var obj=json(value),out=[],queue=[];
    if(!obj || Array.isArray(obj))return out;
    queue.push({name:"",data:obj,depth:0});
    while(queue.length && out.length<32){
      var node=queue.shift();out.push(node);
      if(node.depth>=4)continue;
      Object.keys(node.data).forEach(function(k){
        if(!/^(player|playerData|PlayerData|save|Save|saveData|savesData|gameData|GameData|state|State|profile|Profile|progress|Progress|wallet|Wallet|current|Current)$/i.test(k))return;
        if(/item|catalog|product|price|offer|market|shopItems/i.test(k))return;
        var child=json(node.data[k]);
        if(child && !Array.isArray(child))
          queue.push({name:node.name+k+".",data:child,depth:node.depth+1});
      });
    }
    return out;
  }
  // Build evidence: ES3Defaults and ES3AutoSaveMgr both use SaveFile.es3,
  // encryptionType=None, compressionType=Gzip. The native file is Base64
  // compressed ES3 JSON, not a second UnityPrf or a plaintext JSON string.
  var es3Cache=[], MAX_ES3_JSON=8*1024*1024;
  function es3Entry(raw) {
    return es3Cache.find(function(e){return e.raw===raw;});
  }
  function es3Bytes(raw) {
    if(typeof raw!=="string" || raw.length>MAX_BYTES*2)return null;
    var text=raw.trim().replace(/[\r\n]/g,"");
    if(!text || text.length%4===1 || !/^[A-Za-z0-9+/]*={0,2}$/.test(text))return null;
    while(text.length%4)text+="=";
    try{
      var decoded=w.atob(text),bytes=new Uint8Array(decoded.length);
      for(var i=0;i<decoded.length;i++)bytes[i]=decoded.charCodeAt(i);
      return bytes;
    }catch(_){return null;}
  }
  function plainES3(raw) {
    var obj=json(raw);
    if(obj)return obj;
    var bytes=es3Bytes(raw);
    if(!bytes || (bytes[0]===31 && bytes[1]===139))return null;
    try{return json(new TextDecoder("utf-8",{fatal:true}).decode(bytes));}
    catch(_){return null;}
  }
  function prepare(parsed) {
    var item=parsed && parsed.ok && parsed.items.find(function(it){return it.key==="SaveFile.es3" && it.type==="string";});
    if(!item)return Promise.resolve();
    var existing=es3Entry(item.value);if(existing)return existing.pending;
    var entry={raw:item.value,data:null,format:"unsupported",error:null};
    es3Cache.push(entry);if(es3Cache.length>3)es3Cache.shift();
    entry.pending=(async function(){
      try{
        var bytes=es3Bytes(item.value),obj;
        if(bytes && bytes[0]===31 && bytes[1]===139){
          entry.format="base64-gzip-json";
          if(typeof DecompressionStream!=="function" || typeof Blob!=="function")
            throw new Error("gzip decoder unavailable");
          var reader=new Blob([bytes]).stream().pipeThrough(new DecompressionStream("gzip")).getReader();
          var chunks=[],total=0;
          try{
            for(;;){
              var part=await reader.read();if(part.done)break;
              total+=part.value.length;
              if(total>MAX_ES3_JSON)throw new Error("ES3 decoded size limit");
              chunks.push(part.value);
            }
          }catch(err){try{await reader.cancel();}catch(_){}throw err;}
          finally{reader.releaseLock();}
          var unpacked=new Uint8Array(total),pos=0;
          chunks.forEach(function(c){unpacked.set(c,pos);pos+=c.length;});
          // ES3 emits non-finite floats as bare tokens. Normalize only the
          // inspection copy; native restore always preserves the original text.
          var inspectText=new TextDecoder("utf-8",{fatal:true}).decode(unpacked);
          inspectText=inspectText.replace(/"(?:[^"\\]|\\.)*"|\bNaN\b|-?Infinity\b/g,function(t){return t.charAt(0)==='"'?t:'null';});
          obj=json(inspectText);
        }else{
          obj=plainES3(item.value);entry.format=bytes?"base64-json":"json";
        }
        if(!obj || Array.isArray(obj))throw new Error("unsupported ES3 JSON");
        entry.data=obj;
      }catch(err){entry.error=err.message;}
    })();
    return entry.pending;
  }
  function extract(parsed){
    var result={money:null,moneySource:null,stage:null,level:null,progressKeys:[],keyNames:[]};
    if(!parsed || !parsed.ok)return result;
    var items=parsed.items||[];
    result.keyNames=items.map(function(i){return i.key;});
    function setFrom(obj,source){
      var m=pick(obj,MONEY),stage=pick(obj,STAGES),level=pick(obj,LEVELS);
      if(m && result.money===null){result.money=m.value;result.moneySource=source+m.key;}
      if(stage && result.stage===null)result.stage=stage.value;
      if(level && result.level===null)result.level=level.value;
    }
    // Top-level numeric PlayerPrefs fields first, without matching shop prices.
    var primitives={};
    items.forEach(function(it){
      if(it.type!=="string")primitives[it.key]=it.value;
      else if(/^[-+]?\d+(?:\.\d+)?$/.test(it.value.trim()) &&
        MONEY.concat(STAGES,LEVELS).indexOf(it.key)>=0)primitives[it.key]=it.value;
    });
    setFrom(primitives,"prefs.");
    var savedNames=/save|player|game.?data|state|progress|profile/i;
    items.forEach(function(it){
      if(it.key==="SaveFile.es3" && it.type==="string"){
        var cached=es3Entry(it.value),es3=cached?cached.data:plainES3(it.value);
        var encoding=cached?cached.format:"json";
        result.es3={format:encoding,decoded:!!es3,error:cached?cached.error:null,
          valueLength:it.value.length,base64Valid:!!es3Bytes(it.value),
          rootKind:es3?(Array.isArray(es3)?"array":"object"):"unavailable",
          rootMoneyPresent:!!(es3 && Object.prototype.hasOwnProperty.call(es3,"money")),
          rootMoneyKind:es3 && Object.prototype.hasOwnProperty.call(es3,"money")?typeof es3.money:"absent"};
        if(es3 && !Array.isArray(es3)){
          var players=[],tutorials=[];
          Object.keys(es3).forEach(function(k){
            var entry=es3[k];
            if(!entry || entry.__type!=="UnityEngine.GameObject[],UnityEngine.CoreModule" || !Array.isArray(entry.value))return;
            entry.value.forEach(function(go){
              (go && Array.isArray(go.components)?go.components:[]).forEach(function(c){
                if(c.__type==="StickmanController,Assembly-CSharp")players.push(c);
                if(c.__type==="TutorialHandler,Assembly-CSharp")tutorials.push(c);
              });
            });
          });
          if(players.length===1){
            var wallet=pick(players[0],["dollars"]);
            if(wallet){result.money=wallet.value;result.moneySource="prefs.SaveFile.es3.StickmanController.dollars";}
          }
          if(tutorials.length===1){var quest=pick(tutorials[0],["currentQuestID"]);if(quest)result.stage=quest.value;}
          var values=Object.create(null);
          Object.keys(es3).forEach(function(key){
            var entry=es3[key];
            if(entry && typeof entry==="object" && typeof entry.__type==="string" &&
               Object.prototype.hasOwnProperty.call(entry,"value"))values[key]=entry.value;
          });
          setFrom(values,"prefs.SaveFile.es3."+encoding+".");
          // Only named player-state containers; never recurse into products/prices.
          candidates(JSON.stringify(values)).forEach(function(c){
            setFrom(c.data,"prefs.SaveFile.es3."+encoding+"."+c.name);
          });
        }
      }
      if(it.type==="string" && savedNames.test(it.key)){
        var arr=candidates(it.value);
        arr.forEach(function(c){setFrom(c.data,"prefs."+it.key+"."+c.name);});
      }
      if(!/^unity[._:-]|^_internal/i.test(it.key) &&
         !/^(sound|music|audio|vibrat|quality|graphics|language|fps|resolution)/i.test(it.key) &&
         !/(?:price|cost|xp|experience)/i.test(it.key))result.progressKeys.push(it.key);
    });
    return result;
  }
  function credible(parsed) {
    if(!parsed || !parsed.ok || !parsed.items.length)return false;
    var r=extract(parsed);
    return r.money!==null || r.stage!==null || r.level!==null ||
      r.progressKeys.some(function(k){return /save|progress|player|currency|cash|money|unlock|inventory|build|quest|tutorial|zone|level|stage|upgrad|owned|purchase/i.test(k)});
  }
  function signature(input) {
    var data=bytesOf(input);if(!data)return "";
    // FNV-1a checksum is a change detector, not a cryptographic checksum.
    var h=2166136261;
    for(var i=0;i<data.length;i++){h^=data[i];h=Math.imul(h,16777619);}
    return data.length+":"+((h>>>0).toString(16));
  }
  w.ArcadePlayerPrefs={parse:parse,prepare:prepare,extract:extract,credible:credible,signature:signature,bytesOf:bytesOf};
})(window);
