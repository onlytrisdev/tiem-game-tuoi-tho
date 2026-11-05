/* Arcade H5 bridge for Red Blue Stickman phiêu lưu 2 (Cocos Creator).
 * Native data stays in per-game localStorage keys and in structured H5 metadata.
 * Does not implement score submission: score rules require game-owner approval.
 */
(function(root) {
  "use strict";
  var GAME="red-blue-stickman-phieu-luu-2", SCHEMA=2;
  var API="https://localhost/account/", PREFIX="gv_rbsp2:";
  var nativeKeys=["currentLevel","levelRecord","gold","myPlayer","myGoOutId",
                  "signInfo","tili","TILITIME","GUIDED","IS_AGREE_PRIVACY_TREATY"];
  var known=Object.create(null);
  nativeKeys.forEach(function(k){known[k]=true;});
  var params=new URLSearchParams(root.location.search);
  var gid=params.get("gid")||"", token=params.get("token")||"";
  var online=!!(gid&&token), enabled=false, busy=false, resetting=false;
  var pending=false, revision=0, timer=null, inflight=null, baseline="", nonce="", ready=false;
  var storage=root.localStorage, button=null, dialog=null, menu=false, adBusy=false;
  var SCORE_KEY=PREFIX+"score:v1", DIRTY_KEY=PREFIX+"scoreDirty", scoreState={scoreVersion:1,bestByLevel:{}};
  function unsigned(n,maximum){
    return Number.isSafeInteger(n)&&n>=0&&n<=maximum;
  }
  function cleanStats(source){
    var out={scoreVersion:1,bestByLevel:{}}, levels=source&&source.bestByLevel;
    if(!levels||typeof levels!=="object"||Array.isArray(levels))return out;
    Object.keys(levels).forEach(function(key){
      if(!/^(?:[1-9]|[12][0-9]|30)$/.test(key))return;
      var entry=levels[key];
      if(!entry||!unsigned(entry.score,1000000))return;
      // Only previously verified bests are rehydrated; never sum arbitrary keys.
      var value={score:entry.score};
      ["stars","time","goldCollected","deaths","playerId"].forEach(function(k){
        if(unsigned(entry[k],1000000))value[k]=entry[k];
      });
      value.redDiamond=!!entry.redDiamond;
      value.blueDiamond=!!entry.blueDiamond;
      if(entry.breakdown&&typeof entry.breakdown==="object")value.breakdown=entry.breakdown;
      out.bestByLevel[key]=value;
    });
    return out;
  }
  function loadStats(input){
    scoreState=cleanStats(input);
    storage.setItem(SCORE_KEY,JSON.stringify(scoreState));
  }
  function scoreTotal(){
    return Object.keys(scoreState.bestByLevel).reduce(function(sum,key){
      return sum+scoreState.bestByLevel[key].score;
    },0);
  }
  function scoreFormula(record){
    if(!record||record.isSuccess!==true)return null;
    var level=Number(record.level),time=Number(record.time),gold=Number(record.gold),
        deaths=Number(record.deaths);
    if(!Number.isInteger(level)||level<1||level>30||
       !unsigned(time,86400)||!unsigned(gold,1000000)||!unsigned(deaths,100000))return null;
    var stars=time<=50?3:time<=110?2:1;
    var part={win:1,level:level*2,stars:stars*10,
      speed:time<=50?20:time<=110?10:0,
      gold:Math.floor(gold/10),redDiamond:record.redDiamond===true?5:0,
      blueDiamond:record.blueDiamond===true?5:0,noDeaths:deaths===0?10:0};
    var score=Object.keys(part).reduce(function(n,k){return n+part[k];},0);
    return {level:level,score:score,stars:stars,time:time,goldCollected:gold,
      redDiamond:record.redDiamond===true,blueDiamond:record.blueDiamond===true,
      deaths:deaths,playerId:Number(record.playerId)||1,breakdown:part};
  }
  function mergeStats(a,b){
    var x=cleanStats(a),y=cleanStats(b),best=x.bestByLevel;
    Object.keys(y.bestByLevel).forEach(function(k){
      if(!best[k]||y.bestByLevel[k].score>best[k].score)best[k]=y.bestByLevel[k];
    });
    return x;
  }
  // Only the native GV popup is allowed. Never synthesize a replacement dialog.
  function showScorePopup(total,onClose){
    var finished=false,paused=false;
    function close(){
      if(finished)return;finished=true;
      if(paused)try{root.cc.game.resume();}catch(_){}
      if(typeof onClose==="function")onClose();
    }
    if(typeof root.GV!=="function"){log("Native Arcade score popup unavailable");close();return false;}
    try{
      if(root.cc&&root.cc.game&&typeof root.cc.game.pause==="function"){
        var game=root.cc.game;
        if(!game.isPaused||!game.isPaused()){game.pause();paused=true;}
      }
      new root.GV().saveScore(total,close);
      return true;
    }catch(error){log("Native Arcade score popup failed:",error);close();return false;}
  }
  function completeLevel(record, options){
    var result=scoreFormula(record);
    if(!result)return null;
    var key=String(result.level),previous=scoreState.bestByLevel[key];
    if(!previous||result.score>previous.score){
      scoreState.bestByLevel[key]=result;
      storage.setItem(SCORE_KEY,JSON.stringify(scoreState));
      storage.setItem(DIRTY_KEY,"1");
      changed();
    }
    var total=scoreTotal();
    // Record the win immediately, even if the result animations are still running.
    // The Cocos settlement view requests the native popup only after ALL result
    // information has finished animating; legacy callers retain the old default.
    if(enabled&&pending)flush();
    if(!options||options.deferPopup!==true)showScorePopup(total);
    return {bestForLevel:scoreState.bestByLevel[key].score,totalScore:total,
      improved:!previous||result.score>previous.score,attempt:result};
  }
  function log(){if(root.console&&console.warn)console.warn.apply(console,["[Arcade H5]"].concat([].slice.call(arguments)));}
  function key(k){return PREFIX+"native:"+k;}
  function parse(v){if(typeof v!=="string")return v;try{return JSON.parse(v);}catch(_){return v;}}
  function has(k){return Object.prototype.hasOwnProperty.call(known,k);}
  function migrateLegacy(){
    if(storage.getItem(PREFIX+"migrated")==="1")return;
    nativeKeys.forEach(function(k){
      var old=storage.getItem(k);
      if(storage.getItem(key(k))===null&&old!==null)storage.setItem(key(k),old);
    });
    storage.setItem(PREFIX+"migrated","1");
  }
  function readNative(k,def){
    if(!has(k))return storage.getItem(k)||def;
    var value=storage.getItem(key(k));
    return value===null?def:value;
  }
  function writeNative(k,value){
    if(!has(k)){storage.setItem(k,String(value));return;}
    var v=String(value);
    if(storage.getItem(key(k))!==v){storage.setItem(key(k),v);changed();}
  }
  function snapshot(){
    var raw={};
    nativeKeys.forEach(function(k){var v=storage.getItem(key(k));if(v!==null)raw[k]=v;});
    return {Raw:raw};
  }
  function normalize(record){
    if(!record||typeof record!=="object"||Array.isArray(record)||!record.Raw||
       typeof record.Raw!=="object"||Array.isArray(record.Raw))throw Error("Invalid H5 progress");
    var raw={};
    Object.keys(record.Raw).forEach(function(k){
      if(!has(k))return;
      var v=record.Raw[k];
      if(typeof v!=="string"||v.length>10000)throw Error("Invalid save field "+k);
      var decoded=parse(v);
      if(k==="levelRecord"&&(!Array.isArray(decoded)||decoded.length>30||
          decoded.some(function(x){return !Number.isInteger(x)||x<0||x>3;})))
        throw Error("Invalid star records");
      if(k==="currentLevel"&&(!Number.isInteger(decoded)||decoded<1||decoded>30))
        throw Error("Invalid level");
      if(k==="myPlayer"&&(!Array.isArray(decoded)||decoded.length>6||
         decoded.some(function(x){return !Number.isInteger(x)||x<1||x>6;})))
        throw Error("Invalid owned characters");
      if(k==="myGoOutId"&&(!Number.isInteger(decoded)||decoded<1||decoded>6))
        throw Error("Invalid selected character");
      if(["gold","tili","TILITIME"].indexOf(k)!==-1&&
         (!Number.isFinite(decoded)||decoded<0||decoded>1e15))throw Error("Invalid numeric progress");
      if((k==="GUIDED"||k==="IS_AGREE_PRIVACY_TREATY")&&typeof decoded!=="boolean")
        throw Error("Invalid boolean progress");
      if(k==="signInfo"&&(!decoded||typeof decoded!=="object"||
          !Number.isInteger(decoded.dayNum)||decoded.dayNum<0||decoded.dayNum>7||
          !Number.isFinite(decoded.signTimestamp)))throw Error("Invalid daily rewards");
      raw[k]=v;
    });
    return {Raw:raw};
  }
  function apply(record){
    var p=normalize(record);
    nativeKeys.forEach(function(k){
      if(Object.prototype.hasOwnProperty.call(p.Raw,k))storage.setItem(key(k),p.Raw[k]);
      else storage.removeItem(key(k));
    });
  }
  function metadata(p,resetNonce){
    p=normalize(p);
    var lev=Math.max(1,Math.min(30,Number(parse(p.Raw.currentLevel||"1"))||1));
    var state=arguments.length>2&&arguments[2]===true?
      {scoreVersion:1,bestByLevel:{}}:cleanStats(scoreState);
    var total=Object.keys(state.bestByLevel).reduce(function(sum,k){
      return sum+state.bestByLevel[k].score;
    },0);
    return {Game:GAME,SchemaVersion:SCHEMA,CurrentLevel:lev,CurrentStage:0,
      TotalScore:total,BestScore:total,ResetNonce:resetNonce||"",
      SavedAt:new Date().toISOString(),ScoreStats:state,Progress:p};
  }
  function decode(response){
    var obj=parse(response);
    if(!obj||typeof obj!=="object"||
       (obj.Status!=null&&Number(obj.Status)!==1)||obj.success===false||
       obj.Success===false)throw Error("Arcade rejected history");
    if(!Object.prototype.hasOwnProperty.call(obj,"Data")&&
       !Object.prototype.hasOwnProperty.call(obj,"data"))throw Error("Missing history data envelope");
    var data=parse(Object.prototype.hasOwnProperty.call(obj,"Data")?obj.Data:obj.data);
    if(data==null||data===""||(Array.isArray(data)&&!data.length)||
       (typeof data==="object"&&!Array.isArray(data)&&!Object.keys(data).length))
      return {meta:null,progress:null,nonce:""};
    if(!data||typeof data!=="object")throw Error("Unrecognized history");
    var m=data;
    for(var i=0;i<4;i++){
      if(m.Game===GAME)break;
      var next=undefined;
      ["MetaData","Metadata","metadata","metaData","Data","data"].some(function(k){
        if(Object.prototype.hasOwnProperty.call(m,k)){next=parse(m[k]);return true;}return false;
      });
      if(next==null||next===""){
        if(m.Game===GAME)break;
        if(Object.keys(m).every(function(k){return ["MetaData","Metadata","metadata","metaData","Data","data","Score","score","NgaySua","ngaySua","UpdatedAt","updatedAt"].indexOf(k)!==-1;}))
          return {meta:null,progress:null,nonce:""};
        throw Error("Unsupported cloud save schema");
      }
      if(typeof next!=="object")throw Error("Malformed cloud metadata");
      m=next;
    }
    if(m.Game!==GAME||m.SchemaVersion!==SCHEMA)throw Error("Foreign H5 metadata");
    return {meta:m,progress:normalize(m.Progress),nonce:String(m.ResetNonce||"")};
  }
  function fingerprint(x){return x?JSON.stringify({nonce:String(x.ResetNonce||""),
    p:normalize(x.Progress),stats:cleanStats(x.ScoreStats)}):"empty";}
  function request(endpoint,body){
    var controller=typeof AbortController!=="undefined"?new AbortController():null;
    var timeout=setTimeout(function(){if(controller)controller.abort();},8000);
    return fetch(API+endpoint,{method:"POST",credentials:"include",
      headers:{"Content-Type":"application/x-www-form-urlencoded; charset=UTF-8"},
      body:new URLSearchParams(body).toString(),signal:controller?controller.signal:undefined})
      .then(function(res){if(!res.ok)throw Error("HTTP "+res.status);return res.text();})
      .then(function(txt){
        var obj=JSON.parse(txt);
        if(obj&&(obj.Status!=null&&Number(obj.Status)!==1||obj.success===false||obj.Success===false))
          throw Error("Arcade rejected request");
        return obj;
      }).finally(function(){clearTimeout(timeout);});
  }
  function load(){return request("GetHistoryGame",{gameId:gid,token:token}).then(decode);}
  function changed(){
    if(resetting)return;
    pending=true;revision++;
    schedule();
  }
  function schedule(){
    if(!ready||!enabled||!pending||timer||busy||resetting)return;
    timer=setTimeout(function(){timer=null;flush();},1600);
  }
  function flush(){
    if(busy)return inflight||Promise.resolve(false);
    if(!ready||!enabled||!pending||resetting)return Promise.resolve(false);
    busy=true;var version=revision,p=snapshot();
    inflight=load().then(function(remote){
      if(fingerprint(remote.meta)!==baseline){
        enabled=false;throw Error("Cloud was updated by another session; reload to sync");
      }
      var m=metadata(p,nonce);
      return request("SaveHistoryGame",{gameId:gid,token:token,
        metadata:JSON.stringify(m),score:String(m.TotalScore)})
        .then(function(){baseline=fingerprint(m);
          if(revision===version){pending=false;storage.removeItem(DIRTY_KEY);}
          return true;
        });
    }).catch(function(e){log("Save failed, native data retained:",e.message);return false;})
      .finally(function(){busy=false;inflight=null;if(pending&&enabled)schedule();});
    return inflight;
  }
  function initialize(){
    migrateLegacy();
    loadStats(parse(storage.getItem(SCORE_KEY)));
    if(!online){ready=true;return Promise.resolve();}
    return load().then(function(remote){
      baseline=fingerprint(remote.meta);
      var oldNonce=storage.getItem(PREFIX+"nonce")||"";
      if(remote.progress){
        var local=scoreState,dirty=storage.getItem(DIRTY_KEY)==="1";
        apply(remote.progress);
        nonce=remote.nonce;
        if(dirty&&nonce===oldNonce){
          loadStats(mergeStats(remote.meta.ScoreStats,local));
          pending=true;
        }else{
          loadStats(remote.meta.ScoreStats);
          storage.removeItem(DIRTY_KEY);
        }
        storage.setItem(PREFIX+"nonce",nonce);
      }else{
        nonce=oldNonce;
        pending=Object.keys(snapshot().Raw).length>0||scoreTotal()>0;
      }
      enabled=true;ready=true;schedule();
    }).catch(function(e){
      enabled=false;ready=true;
      log("Get failed; running with offline save, no unsafe upload:",e.message);
    });
  }
  function resetGame(){
    if(resetting)return Promise.resolve(false);
    resetting=true;
    function localClear(){
      nativeKeys.forEach(function(k){
        storage.removeItem(key(k));
        // Old non-namespaced save must not be imported after reset.
        storage.removeItem(k);
      });
      storage.removeItem(PREFIX+"nonce");
      storage.removeItem(SCORE_KEY);
      storage.removeItem(DIRTY_KEY);
      scoreState={scoreVersion:1,bestByLevel:{}};
      pending=false;revision++;
      root.location.reload();return true;
    }
    if(!online)return Promise.resolve(localClear());
    if(!enabled){resetting=false;return Promise.reject(Error("Không thể kết nối đồng bộ Arcade."));}
    var next="reset-"+Date.now().toString(36)+"-"+Math.random().toString(36).slice(2);
    return Promise.resolve(inflight).then(function(){return load();}).then(function(remote){
      if(fingerprint(remote.meta)!==baseline)throw Error("Dữ liệu đã thay đổi, hãy tải lại trò chơi.");
      var m=metadata({Raw:{}},next,true);
      return request("SaveHistoryGame",{gameId:gid,token:token,metadata:JSON.stringify(m),score:"0"});
    }).then(function(){return localClear();})
      .catch(function(e){resetting=false;throw e;});
  }
  function makeButton(){
    if(button||!document.body)return;
    button=document.createElement("button");button.id="gv-h5-reset-button";
    button.title="Xóa dữ liệu";button.setAttribute("aria-label","Xóa dữ liệu");
    button.style.cssText="display:none;position:fixed;z-index:2147483640;background:transparent;"+
      "padding:0;border:0;cursor:pointer;touch-action:manipulation;outline:none;";
    var img=document.createElement("img");img.src="xoa-data-gv.png";img.alt="Xóa dữ liệu";
    img.style.cssText="display:block;width:100%;height:100%;object-fit:contain;";
    button.appendChild(img);document.body.appendChild(button);
    button.addEventListener("click",function(ev){ev.preventDefault();showDialog();});
    root.addEventListener("resize",position);
    position();
  }
  function position(){
    if(!button)return;
    var canvas=document.getElementById("GameCanvas");
    var rect=canvas&&canvas.getBoundingClientRect();
    var width=rect&&rect.width>0?rect.width:root.innerWidth;
    var size=Math.max(32,Math.min(52,Math.round(width*.043)));
    var right=rect&&rect.width>0?rect.right:root.innerWidth;
    var top=rect&&rect.height>0?rect.top:0;
    button.style.width=size+"px";button.style.height=size+"px";
    button.style.left=Math.max(0,Math.min(root.innerWidth-size,right-size-12))+"px";
    button.style.top=Math.max(0,top+12)+"px";
  }
  function setMenuVisible(visible){
    menu=!!visible;makeButton();
    if(button){position();button.style.display=menu?"block":"none";}
  }
  function showDialog(){
    if(dialog)return;
    dialog=document.createElement("div");dialog.id="gv-h5-reset-dialog";
    dialog.setAttribute("role","dialog");dialog.setAttribute("aria-modal","true");
    dialog.style.cssText="position:fixed;inset:0;z-index:2147483646;background:rgba(0,0,0,.65);"+
      "display:flex;align-items:center;justify-content:center;font-family:Arial,sans-serif;";
    var panel=document.createElement("div");
    panel.style.cssText="max-width:92vw;width:380px;box-sizing:border-box;padding:25px 20px;"+
      "background:#fff0d2;border:3px solid #bc7a28;border-radius:15px;color:#493014;"+
      "box-shadow:0 14px 40px #0007;text-align:center;";
    var msg=document.createElement("div");
    msg.textContent="Bạn chắc chắn muốn xóa toàn bộ dữ liệu trò chơi?";
    msg.style.cssText="font-size:18px;line-height:1.5;font-weight:700;margin-bottom:20px;";
    var buttons=document.createElement("div");
    buttons.style.cssText="display:flex;gap:12px;justify-content:center;";
    function make(text,bg){var b=document.createElement("button");b.textContent=text;
      b.style.cssText="min-width:100px;padding:11px 20px;border:0;border-radius:9px;"+
        "background:"+bg+";color:#fff;font-size:17px;font-weight:bold;cursor:pointer;";
      buttons.appendChild(b);return b;}
    var cancel=make("Hủy","#777"),ok=make("OK","#2a9e35");
    cancel.onclick=function(){if(!resetting&&dialog){dialog.remove();dialog=null;}};
    ok.onclick=function(){
      cancel.disabled=ok.disabled=true;
      resetGame().catch(function(e){
        msg.textContent="Không thể xóa dữ liệu: "+(e.message||"Lỗi đồng bộ");
        cancel.disabled=false;ok.disabled=false;
      });
    };
    panel.appendChild(msg);panel.appendChild(buttons);dialog.appendChild(panel);document.body.appendChild(dialog);
    cancel.focus();
  }
  function resolveAd(){
    var hosts=[root];try{hosts.push(root.parent);}catch(_){}
    try{hosts.push(root.top);}catch(_){}
    for(var i=0;i<hosts.length;i++)try{
      if(hosts[i]&&typeof hosts[i].GVAdBreak==="function")return hosts[i].GVAdBreak.bind(hosts[i]);
    }catch(_){}
    return null;
  }
  function rewardedAd(start,fail,success){
    if(adBusy){if(typeof fail==="function")fail();return;}
    adBusy=true;
    var done=false,timerId=null,paused=false,volume=null;
    function finish(ok){
      if(done)return;done=true;clearTimeout(timerId);adBusy=false;
      if(paused&&root.cc&&cc.game){try{cc.game.resume();}catch(_){}}
      if(volume&&root.cc&&cc.audioEngine)try{
        cc.audioEngine.setMusicVolume(volume.music);
        cc.audioEngine.setEffectsVolume(volume.effects);
      }catch(_){}
      try{if(ok){if(typeof success==="function")success();}
           else if(typeof fail==="function")fail();}catch(e){log("Reward callback:",e);}
    }
    var fn=resolveAd();
    if(fn){
      try{
        if(typeof start==="function")start();
        if(root.cc&&cc.audioEngine) {
          volume={music:cc.audioEngine.getMusicVolume(),effects:cc.audioEngine.getEffectsVolume()};
          cc.audioEngine.setMusicVolume(0);cc.audioEngine.setEffectsVolume(0);
        }
        if(root.cc&&cc.game){cc.game.pause();paused=true;}
        timerId=setTimeout(function(){finish(false);},45000);
        fn(function(){finish(true);});
      }catch(e){log("GVAdBreak failed:",e);finish(false);}
    }else if(params.get("ads")==="0"&&/^(localhost|127\.0\.0\.1|test\.game)$/.test(root.location.hostname)){
      // Local-only simulation; the reward event still runs asynchronously.
      if(typeof start==="function")start();
      setTimeout(function(){finish(true);},0);
    }else{
      log("GVAdBreak unavailable: no reward granted");
      finish(false);
    }
  }
  root.ArcadeH5={ready:initialize(),readNative:readNative,writeNative:writeNative,
    showMenu:setMenuVisible,rewardedAd:rewardedAd,flush:flush,
    reset:resetGame,snapshot:snapshot,scoreFormula:scoreFormula,
    scoreTotal:scoreTotal,scoreStats:function(){return cleanStats(scoreState);},
    completeLevel:completeLevel,showScorePopup:showScorePopup};
  if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",makeButton);
  else makeButton();
})(window);
