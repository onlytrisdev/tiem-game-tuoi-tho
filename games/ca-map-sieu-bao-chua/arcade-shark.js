/* Arcade H5 bridge for Construct 2 - no external Kiz10 dependency. */
(function (root) {
  "use strict";
  var GAME = "ca-map-sieu-bao-chua";
  var KEY = "gv_shark_progress:v2", ID = "gv_shark_identity:v2";
  var DIRTY = "gv_shark_dirty:v2", RESET = "gv_shark_reset:v2";
  var API = "https://localhost/account/";
  var query = new URLSearchParams(root.location.search);
  var gid = query.get("gid") || "", token = query.get("token") || "";
  var online = !!(gid && token);
  var identity = online ? "gv:" + gid + ":" + stableUser(token) : "guest";
  var runtime = null, ready = false, canSave = false, busy = null;
  var session=null, hooksInstalled=false, restoringVars=false;
  var dirty = false, resetting = false, resetNonce = "";
  var previous = "", resultPending = false, popupOpen = false;
  var remoteStamp = "", lastSync = 0;
  var persistNames = /^(Highscore|Coins|Level|Levelunlock|Levelunlocker|Levelnumer|globalStars|level\d+star|skin|bk|weapons|buy\d+|a\d+|endless)$/;
  var nativeKeys = ["tibucore"];
  var state = {vars:{},localKeys:{},best:0,level:1,wave:1,resetNonce:""};
  function tokenHash(s) { var h=2166136261; for(var i=0;i<s.length;i++) h=Math.imul(h ^ s.charCodeAt(i),16777619); return (h>>>0).toString(16); }
  function stableUser(value) {
    try {
      var part=value.split(".")[1].replace(/-/g,"+").replace(/_/g,"/");
      var claims=JSON.parse(root.atob(part));
      return String(claims.userid||claims.userId||claims.sub||claims.username||tokenHash(value));
    } catch(e){return tokenHash(value);}
  }
  function muteBloodAudio() {
    var audio=root.cr && root.cr.plugins_ && root.cr.plugins_.Audio;
    if(!audio || !audio.prototype.acts || audio.prototype.acts._gvBloodMuted)return;
    var acts=audio.prototype.acts,original=acts.PlayByName;
    if(typeof original!=="function")return;
    acts.PlayByName=function(){var args=Array.prototype.slice.call(arguments);
      if(args.some(function(x){return typeof x==="string" && /blood|bloody/i.test(x);}))return;
      return original.apply(this,arguments);
    };
    acts._gvBloodMuted=true;
  }
  // The original game draws blood through several C2 particle types, not only
  // the "rainblood" switch. Disable their rendering and emission at the plugin
  // boundary; this leaves water spray, bubbles and ordinary explosions intact.
  function muteBloodVisuals() {
    var ctor=root.cr && root.cr.plugins_ && root.cr.plugins_.Particles;
    if(!ctor || !ctor.prototype.Instance || !ctor.prototype.Instance.prototype)return;
    var proto=ctor.prototype.Instance.prototype;
    if(proto._gvBloodSuppressed)return;
    var BLOOD={
      "698012220406762":true, // red spray: images/particles4.png
      "959690636264220":true, // red droplets: images/particles31.png
      "232394469682827":true, // people hit: images/particles38.png
      "279090343260198":true  // red overlay: images/particles51.png
    };
    function red(inst){return !!(inst && inst.type && BLOOD[String(inst.type.sid)]);}
    function stop(inst){
      inst.spraying=false;
      inst.rate=0;
      inst.visible=false;
      if(inst.particles){
        inst.particles.forEach(function(p){p.active=false;});
        inst.particles.length=0;
      }
    }
    var originalCreate=proto.onCreate;
    proto.onCreate=function(){
      var result=originalCreate.apply(this,arguments);
      if(red(this))stop(this);
      return result;
    };
    ["tick","draw","drawGL"].forEach(function(method){
      var original=proto[method];
      if(typeof original!=="function")return;
      proto[method]=function(){
        if(red(this)){stop(this);return;}
        return original.apply(this,arguments);
      };
    });
    if(typeof proto.loadFromJSON==="function"){
      var load=proto.loadFromJSON;
      proto.loadFromJSON=function(){
        var result=load.apply(this,arguments);
        if(red(this))stop(this);
        return result;
      };
    }
    var acts=ctor.prototype.acts;
    if(acts && typeof acts.SetSpraying==="function"){
      var set=acts.SetSpraying;
      acts.SetSpraying=function(){
        if(red(this)){stop(this);return;}
        return set.apply(this,arguments);
      };
    }
    proto._gvBloodSuppressed=true;
  }
  // Never override window.open: Arcade's native score dialog may need it.
  // The guard only disables Construct 2's browser navigation plugin.
  function blockConstructOutboundNavigation() {
    var browser=root.cr && root.cr.plugins_ && root.cr.plugins_.Browser;
    if(!browser || !browser.prototype.acts)return;
    var acts=browser.prototype.acts;
    ["GoToURL","GoToURLWindow"].forEach(function(method){
      if(typeof acts[method]==="function")acts[method]=function(){};
    });
  }
  function n(v) { var x=Number(v); return Number.isFinite(x) && x>=0 ? Math.min(Math.floor(x),999999999) : 0; }
  function safeParse(s) { try { return typeof s==="string"?JSON.parse(s):s; } catch(e) {return null;} }
  function readStorage(k) { try {return root.localStorage.getItem(k);}catch(e){return null;} }
  function writeStorage(k,v) {try {root.localStorage.setItem(k,v);return true;}catch(e){return false;} }
  function removeStorage(k) {try {root.localStorage.removeItem(k);}catch(e){}}
  function localKeys() {var o={};nativeKeys.forEach(function(k){var v=readStorage(k);if(v!==null)o[k]=v;});return o;}
  function applyNative(o) {nativeKeys.forEach(function(k){if(o && typeof o[k]==="string" && o[k].length<10000)writeStorage(k,o[k]);else removeStorage(k);});}
  function getVar(name) {if(!runtime || !runtime.all_global_vars)return null;var v=runtime.all_global_vars.find(function(x){return x.name===name;});return v ? v.getValue() : null;}
  function getVars() {var o={};if(runtime && runtime.all_global_vars)runtime.all_global_vars.forEach(function(v){if(persistNames.test(v.name) && !v.is_constant) o[v.name]=v.getValue();});return o;}
  function applyVars(o) {if(!runtime || !o)return;runtime.all_global_vars.forEach(function(v){if(persistNames.test(v.name) && Object.prototype.hasOwnProperty.call(o,v.name) && !v.is_constant){var x=o[v.name];if(typeof x==="number" && Number.isFinite(x) && Math.abs(x)<1e9)v.setValue(x);}});}
  function snapshot() {
    var vars=getVars();
    if(Object.keys(vars).length) state.vars=vars;
    state.localKeys=localKeys();
    state.best=Math.max(n(state.best),n(vars.Highscore),n(vars.Score),n(getVar("Score")),n(readStorage("tibucore")));
    state.level=Math.max(n(state.level),n(vars.Level),1);
    state.wave=Math.max(n(state.wave),n(getVar("wave")),1);
    state.resetNonce=resetNonce;
    return state;
  }
  function mark() {dirty=true;writeStorage(DIRTY,"1");writeStorage(KEY,JSON.stringify(snapshot()));}
  function metadata() {
    snapshot();
    return {Game:GAME,SchemaVersion:2,ResetNonce:resetNonce,SavedAt:new Date().toISOString(),
      CurrentLevel:n(state.level),CurrentStage:n(state.wave),TotalScore:n(state.best),BestScore:n(state.best),
      NativeHighscore:n(state.best),ScoringVersion:2,
      Record:{vars:state.vars,localKeys:state.localKeys},
      ScorePolicy:"native-highscore",
      Stats:{Score:n(getVar("Score")),Kills:n(getVar("enemieskiller")),Headshots:n(getVar("headshots")),
        Coins:n(getVar("Coins")),Wave:n(getVar("wave")),Stars:n(getVar("globalStars")),
        Combos:n(getVar("Combos")),Shots:n(getVar("Disparos")),Deaths:n(getVar("deaths")),
        RemainingTime:n(getVar("Timeleft")),RemainingLife:n(getVar("Live")),
        LevelPoints:n(getVar("Levelpoints")),LevelStars:n(getVar("endstars")),
        Weapon:n(getVar("weapons")),SharkSkin:n(getVar("skin")),Mode:n(getVar("endless"))}};
  }
  function request(method, params) {
    return new Promise(function(resolve,reject) {
      var xhr = new XMLHttpRequest();
      xhr.open("POST",API+method,true);xhr.withCredentials=true;xhr.timeout=5000;
      xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=UTF-8");
      xhr.onload=function(){if(xhr.status<200||xhr.status>=300)return reject(new Error("HTTP "+xhr.status));
        var body=safeParse(xhr.responseText);
        if(!body || (body.Status!=null && Number(body.Status)!==1) || body.success===false || body.Success===false) return reject(new Error("Arcade rejected"));
        resolve(body);};
      xhr.onerror=xhr.ontimeout=function(){reject(new Error("Arcade network"));};
      xhr.send(new URLSearchParams(params).toString());
    });
  }
  function history() {
    return request("GetHistoryGame",{gameId:gid,token:token}).then(function(body){
      var data=safeParse(body.Data!==undefined?body.Data:body.data),raw;
      if(Array.isArray(data)&&!data.length)data=null;
      if(data && typeof data==="object")raw=data.MetaData!==undefined?data.MetaData:(data.metadata!==undefined?data.metadata:data.Metadata);
      raw=safeParse(raw);
      if(raw!=null && typeof raw==="object" && Object.keys(raw).length){
        if(raw.Game!==GAME || raw.SchemaVersion!==2 || !raw.Record || !raw.Record.vars ||
            typeof raw.ResetNonce!=="string")throw new Error("Incompatible H5 metadata");
      } else raw=null;
      return {meta:raw,stamp:String((data&&(data.updatedAt||data.UpdatedAt))||body.updatedAt||body.UpdatedAt||"")};
    });
  }
  function validate(raw) {
    if(!raw || !raw.Record || typeof raw.Record.vars!=="object" || Array.isArray(raw.Record.vars))throw new Error("Invalid save");
    var vars={};Object.keys(raw.Record.vars).forEach(function(k){var v=raw.Record.vars[k];if(persistNames.test(k)&&typeof v==="number"&&Number.isFinite(v)&&Math.abs(v)<1e9)vars[k]=v;});
    var keys={};nativeKeys.forEach(function(k){var v=raw.Record.localKeys&&raw.Record.localKeys[k];if(typeof v==="string" && v.length<10000)keys[k]=v;});
    // Upgrade old per-wave composite metadata without importing its unrelated
    // composite score (which is usually much lower than the game's Highscore).
    var composite=raw.ScorePolicy==="best-per-mode-level-wave";
    var nativeBest=Math.max(n(raw.NativeHighscore),n(vars.Highscore),n(keys.tibucore),
      composite?0:n(raw.BestScore));
    return {vars:vars,localKeys:keys,best:nativeBest,
      level:Math.max(1,n(raw.CurrentLevel)),wave:Math.max(1,n(raw.CurrentStage)),
      resetNonce:raw.ResetNonce};
  }
  function clearLocal(){[KEY,DIRTY,RESET].concat(nativeKeys).forEach(removeStorage);}
  function restore(saved){
    if(!saved)return;
    state=saved;delete state.total;delete state.records; // discard obsolete weighted-wave cache
    state.best=Math.max(n(saved.best),n(saved.vars&&saved.vars.Highscore));
    resetNonce=state.resetNonce||"";
    applyNative(state.localKeys);writeStorage(KEY,JSON.stringify(state));writeStorage(RESET,resetNonce);
  }
  function mergeBetter(remote) {
    if(!remote)return;
    var local=snapshot();var vars=Object.assign({},remote.vars);
    Object.keys(local.vars).forEach(function(k){
      if(/^(Highscore|Coins|Level|Levelunlock|Levelunlocker|globalStars|level\d+star|buy\d+|a\d+)$/.test(k))
        vars[k]=Math.max(n(vars[k]),n(local.vars[k]));
      else vars[k]=local.vars[k];
    });
    state={vars:vars,localKeys:Object.assign({},remote.localKeys,local.localKeys),
      best:Math.max(n(remote.best),n(local.best),n(vars.Highscore)),
      level:Math.max(n(remote.level),n(local.level)),wave:Math.max(1,n(local.wave)),
      resetNonce:resetNonce};
    writeStorage(KEY,JSON.stringify(state));
  }
  async function initialize() {
    var previousIdentity=readStorage(ID);
    if(previousIdentity!==null && previousIdentity!==identity)clearLocal();
    if(previousIdentity===null && online)clearLocal(); // never assign anonymous local data to another account
    writeStorage(ID,identity);
    var saved=safeParse(readStorage(KEY));
    if(saved && saved.vars && saved.localKeys)restore(saved);
    resetNonce=readStorage(RESET)||resetNonce;
    dirty=readStorage(DIRTY)==="1";
    if(online) {
      try {
        var result=await history();remoteStamp=result.stamp;
        if(result.meta) {
          var cloud=validate(result.meta);
          if(dirty && cloud.resetNonce===resetNonce)mergeBetter(cloud);
          else {restore(cloud);dirty=false;writeStorage(DIRTY,"0");}
        } else if(saved) {dirty=true;writeStorage(DIRTY,"1");}
        canSave=true;
      } catch(err) {console.warn("[Arcade H5] Chưa lấy được dữ liệu máy chủ; không ghi đè:",err);}
    }
    ready=true;
  }
  function begin(boot) {
    initialize().catch(function(err){console.warn("[Arcade H5] Startup:",err);ready=true;})
      .finally(function(){muteBloodAudio();muteBloodVisuals();blockConstructOutboundNavigation();installHooks();boot();});
  }
  async function flush() {
    if(!online || !canSave || !ready || !dirty || busy || resetting || popupOpen)return false;
    busy=(async function(){
      try {
        var remote=await history();
        if(remote.meta && remote.meta.ResetNonce!==resetNonce)throw new Error("Remote reset changed");
        if(remote.meta)mergeBetter(validate(remote.meta));
        var rev=JSON.stringify(snapshot()), meta=metadata();
        await request("SaveHistoryGame",{gameId:gid,token:token,metadata:JSON.stringify(meta),
          score:String(meta.BestScore),expectedUpdatedAt:remote.stamp});
        if(JSON.stringify(snapshot())===rev){dirty=false;writeStorage(DIRTY,"0");}
        lastSync=Date.now();
        return true;
      }catch(err){console.warn("[Arcade H5] Chưa đồng bộ:",err);return false;}
    })();
    try{return await busy;}finally{busy=null;}
  }
  async function resetAll() {
    if(resetting || popupOpen)return false;resetting=true;
    try {
      if(busy)await busy;
      var nonce="reset-"+Date.now().toString(36)+"-"+Math.random().toString(36).slice(2);
      if(online){
        if(!canSave)throw new Error("Server not verified");
        var current=await history();
        if(current.meta&&current.meta.ResetNonce!==resetNonce)throw new Error("Remote progress changed");
        var empty={Game:GAME,SchemaVersion:2,ResetNonce:nonce,SavedAt:new Date().toISOString(),
          CurrentLevel:1,CurrentStage:1,TotalScore:0,BestScore:0,NativeHighscore:0,
          ScoringVersion:2,Record:{vars:{},localKeys:{}},ScorePolicy:"native-highscore"};
        await request("SaveHistoryGame",{gameId:gid,token:token,metadata:JSON.stringify(empty),score:"0",expectedUpdatedAt:current.stamp});
        var verified=await history();
        if(!verified.meta||verified.meta.ResetNonce!==nonce||n(verified.meta.BestScore)!==0)throw new Error("Reset not confirmed");
      }
      clearLocal();writeStorage(RESET,nonce);writeStorage(ID,identity);root.location.reload();return true;
    }catch(err){console.warn("[Arcade H5] Không thể xóa:",err);resetting=false;return false;}
  }
  function showScore() {
    if(popupOpen || resetting)return;
    mark();flush();
    if(typeof root.GV!=="function")return;
    popupOpen=true;
    try {new root.GV().saveScore(n(state.best),function(){popupOpen=false;flush();});}
    catch(err){popupOpen=false;console.warn("[Arcade H5] saveScore:",err);}
  }
  // There is only one gameplay layout (Level1), which is replayed each time.
  // Capture the native record BEFORE the new round begins; Highscore is updated
  // during gameplay, so testing Highscore against itself at EndGame is incorrect.
  function newSession(rt) {
    runtime=rt;
    session={runtime:rt,recordBefore:Math.max(n(state.best),n(getVar("Highscore")),
      n(readStorage("tibucore"))),finished:false};
    resultPending=false;
  }
  function finishRound() {
    if(!session || session.finished || resultPending)return;
    var current=n(getVar("Score"));
    var oldRecord=session.recordBefore;
    var highscore=n(getVar("Highscore"));
    var improved=current>oldRecord;
    // Match the original Construct 2 Highscore instead of the custom per-wave sum.
    if(current>highscore && runtime && runtime.all_global_vars){
      var v=runtime.all_global_vars.find(function(entry){return entry.name==="Highscore";});
      if(v && !v.is_constant)v.setValue(current);
    }
    state.best=Math.max(n(state.best),highscore,current);
    session.finished=true;resultPending=true;session=null;
    mark();
    if(improved){
      root.setTimeout(function(){
        if(!resetting)showScore();
      },900);
    } else flush(); // Lower/equal replay: sync progress, but NEVER show Arcade popup.
  }
  function installHooks() {
    if(hooksInstalled || !root.cr || !root.cr.layout)return;
    var layoutProto=root.cr.layout.prototype;
    var actions=root.cr.system_object && root.cr.system_object.prototype.acts;
    if(!actions || !actions.GoToLayout)return;
    hooksInstalled=true;
    var originalStart=layoutProto.startRunning;
    layoutProto.startRunning=function(){
      var result=originalStart.apply(this,arguments);
      runtime=this.runtime;
      if(this.name==="Level1" && ready && !restoringVars)newSession(this.runtime);
      return result;
    };
    var originalGoto=actions.GoToLayout;
    actions.GoToLayout=function(target){
      runtime=this.runtime;
      if(ready && !resetting && this.runtime && this.runtime.running_layout &&
          this.runtime.running_layout.name==="Level1" && target && target.name==="EndGame" &&
          !this.runtime.changelayout)finishRound();
      return originalGoto.apply(this,arguments);
    };
  }
  function tick() {
    var canvas=document.getElementById("c2canvas");runtime=canvas&&canvas.c2runtime;
    if(!runtime || runtime.isloading || !runtime.running_layout)return;
    var layout=runtime.running_layout.name||"";
    if(!previous && layout==="Loading")return;
    if(!previous) {
      restoringVars=true;
      try {applyVars(state.vars);}finally{restoringVars=false;}
      previous=JSON.stringify(snapshot());
    }
    if(resetting)return;
    if(layout==="EndGame" && session && !resultPending)finishRound();
    var current=JSON.stringify(snapshot());
    if(current!==previous){previous=current;mark();}
    if(dirty && Date.now()-lastSync>4000)flush();
  }
  root.ArcadeShark={begin:begin,flush:flush,showScore:showScore,reset:resetAll,
    getMetadata:metadata,getBest:function(){return n(state.best);}};
  root.addEventListener("beforeunload",function(){if(ready && runtime && !resetting)mark();});
  document.addEventListener("visibilitychange",function(){if(document.hidden && dirty && !resetting)flush();});
  root.setInterval(tick,3000);
})(window);
