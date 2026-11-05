(function(root) {
  "use strict";
  var GAME = "tu-tien-bat-tu";
  var API = "https://localhost/account/";
  var KEYS = ["GAME_MODEL","coin","level","exp","knock","SkillLevel","TaskData",
    "login","ExtraMerits","LeaveTime","burnerTime","GameDays","Merits",
    "isShowBGM","UnlockSpeed","isReward","MusicUnlock","Music","MusicVolume",
    "Sound","loginTime","NickNameData","RankData","RandomEventNumber",
    "avatarArray","lastMerits","taskID","taskMerits","taskTimeMax"];
  var tracked = new Set(KEYS);
  var params = new URLSearchParams(root.location.search);
  var gid = params.get("gid") || "";
  var token = params.get("token") || "";
  var authenticated = !!(gid && token);
  function userId(jwt) {
    try {
      var s = jwt.split(".")[1].replace(/-/g, "+").replace(/_/g, "/");
      var v = JSON.parse(decodeURIComponent(Array.from(atob(s), function(c) {
        return "%" + c.charCodeAt(0).toString(16).padStart(2,"0");
      }).join("")));
      return v.userid || v.userId || v.sub || v.username || "";
    } catch (_) { return ""; }
  }
  function tokenId(t) {
    var n = 2166136261;
    for (var i=0; i<t.length; ++i) n = Math.imul(n ^ t.charCodeAt(i),16777619);
    return (n>>>0).toString(36);
  }
  var account = authenticated ? (userId(token) || "token-" + tokenId(token)) : "guest";
  var prefix = "gv:tu-tien-bat-tu:v1:" + encodeURIComponent(gid) + ":" + encodeURIComponent(account) + ":";
  var storage, wrapped, memory = Object.create(null);
  var ready = false, allowed = false, dirty = false, busy = false, uploading = null, timer = null;
  var revision = 0, remoteStamp = "", best = 0, popupOpen = false, resetting = false, resetNonce = "";
  function log(s) { console.info("[Arcade Player] " + s); }
  function rawRead(k) { try { return storage.getItem(prefix+k); } catch (_) { return Object.prototype.hasOwnProperty.call(memory,k) ? memory[k] : null; } }
  function rawWrite(k,v) {
    memory[k] = v;
    try { if (v === null) storage.removeItem(prefix+k); else storage.setItem(prefix+k,v); } catch (_) {}
  }
  function read(k) { return Object.prototype.hasOwnProperty.call(memory,k) ? memory[k] : rawRead(k); }
  function store(k,v) {
    if (resetting) return;
    v=String(v);
    if (read(k)===v) return;
    rawWrite(k,v);
    if (tracked.has(k)) {
      dirty=true; revision++; rawWrite("$dirty","1");
      if (ready) schedule();
    }
  }
  function remove(k) {
    if (resetting) return;
    if (read(k)===null) return;
    rawWrite(k,null);
    if (tracked.has(k)) { dirty=true; revision++; rawWrite("$dirty","1"); if(ready)schedule(); }
  }
  function snapshot() {
    var x={};
    KEYS.forEach(function(k) { var v=read(k); if(typeof v==="string") x[k]=v; });
    return x;
  }
  function install() {
    wrapped = {
      getItem: function(k) { return read(String(k)); },
      setItem: function(k,v) { store(String(k),v); },
      removeItem: function(k) { remove(String(k)); },
      clear: function() { KEYS.forEach(remove); },
      key: function(i) { return Object.keys(snapshot())[i] || null; }
    };
    Object.defineProperty(wrapped,"length",{get:function(){return Object.keys(snapshot()).length;}});
    root.cc.sys.localStorage=wrapped;
    if(root.cc.sys.localStorage!==wrapped) throw new Error("Cannot install Arcade storage");
  }
  function parse(x) { return typeof x==="string" ? JSON.parse(x) : x; }
  function stamp(x) { return x && (x.updatedAt || x.UpdatedAt || x.NgaySua || x.ngaySua) || ""; }
  function response(x) {
    var r=parse(x);
    if (!r || typeof r!=="object" || (r.Status!=null && +r.Status!==1) || r.success===false || r.Success===false) throw new Error("Arcade history response rejected");
    return r;
  }
  function getMeta(r) {
    if(!Object.prototype.hasOwnProperty.call(r,"Data") && !Object.prototype.hasOwnProperty.call(r,"data")) throw Error("Missing history data");
    var v=parse(r.Data!==undefined?r.Data:r.data);
    if(v==null || v==="" || Array.isArray(v)&&!v.length) return null;
    if(typeof v!=="object") throw Error("Invalid history data");
    var m=v.MetaData!==undefined?v.MetaData:(v.metadata!==undefined?v.metadata:v.Metadata);
    if(m===undefined) throw Error("Missing metadata");
    m=parse(m);
    if(m==null || m==="") return null;
    if(m.Game!==GAME || m.SchemaVersion!==1 || !m.Record || !m.Record.localKeys ||
      typeof m.Record.localKeys!=="object" || Array.isArray(m.Record.localKeys)) throw Error("Foreign or incompatible game metadata");
    var out={};
    Object.keys(m.Record.localKeys).forEach(function(k) {
      if(tracked.has(k) && typeof m.Record.localKeys[k]==="string") out[k]=m.Record.localKeys[k];
    });
    return {keys:out, best:Number(m.ScoreVersion)===2?numeric(m.BestScore):0, resetNonce:typeof m.ResetNonce==="string"?m.ResetNonce:""};
  }
  function request(action, data) {
    return new Promise(function(resolve,reject) {
      var xhr=new XMLHttpRequest();
      xhr.open("POST",API+action,true);
      xhr.withCredentials=true; xhr.timeout=7000;
      xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=UTF-8");
      xhr.onload=function() {
        if(xhr.status<200||xhr.status>=300) return reject(Error("Arcade HTTP "+xhr.status));
        try {resolve(response(xhr.responseText));} catch(e) {reject(e);}
      };
      xhr.onerror=xhr.ontimeout=function(){reject(Error("Arcade history unavailable"));};
      xhr.send(new URLSearchParams(data).toString());
    });
  }
  async function cloudGet() {
    var r=await request("GetHistoryGame",{gameId:gid,token:token});
    var data=r.Data!==undefined?r.Data:r.data;
    return {record:getMeta(r),updatedAt:String(stamp(parse(data))||stamp(r)||"")};
  }
  function dataState() {
    try {return root.__require("Data").default;} catch (_) {return null;}
  }
  function numeric(x) { x=Number(x); return Number.isFinite(x)&&x>=0?Math.floor(x):0; }
  // Score v2: progression metrics, never raw multi-million-point Merits.
  function score() {
    var d=dataState();
    if(!d) return 0;
    var level=numeric(d.Level);
    var progress=0, states;
    try { states=root.__require("Game").State; } catch (_) {}
    var next=states && states[level+1] ? Number(states[level+1][1]) : Number(d.Exp);
    if(Number.isFinite(next) && next>0) progress=Math.min(9,Math.floor(numeric(d.Knock)/next*10));
    var skill=Array.isArray(d.SkillLevel)?d.SkillLevel.reduce(function(sum,v){return sum+numeric(v);},0):0;
    var avatars=0, raw=read("avatarArray");
    try {
      // Avatar unlocks are stored encrypted by the original game. The game
      // controller also exposes a live array after starting.
      var game=root.cc && root.cc.director && root.cc.director.getScene();
      var component=game && game.getComponentInChildren && game.getComponentInChildren("Game");
      var unlocked=component && component.avatarArray;
      if(Array.isArray(unlocked)) avatars=unlocked.filter(function(v){return Number(v)>0;}).length;
    } catch (_) {}
    // Logarithmic Merits allow long-term gains without huge score numbers.
    var merits=Math.floor(Math.log10(Math.max(1,numeric(d.Merits)))*8);
    var total=level*12+progress+skill*4+avatars*6+numeric(d.GameDays)+merits;
    return Math.min(99999,Math.max(0,Math.floor(total)));
  }
  function updateBest() {
    var current=score();
    if(current>best) {best=current;rawWrite("$best",String(best));}
    return best;
  }
  function metadata(keys) {
    var d=dataState(), total=updateBest();
    return {
      Game:GAME, SchemaVersion:1, ScoreVersion:2, ResetNonce:resetNonce,
      CurrentLevel:d?numeric(d.Level):0,
      CurrentStage:0,TotalScore:total,BestScore:total,
      SavedAt:new Date().toISOString(),
      Record:{__version__:1,localKeys:keys}
    };
  }
  function schedule() {
    if(!ready||!allowed||!dirty||popupOpen||resetting||timer) return;
    timer=setTimeout(function(){timer=null;flush();},1800);
  }
  async function doFlush() {
    if(!ready||!allowed||!dirty||busy||popupOpen||resetting) return false;
    busy=true;
    try {
      var cloud=await cloudGet();
      if(cloud.updatedAt!==remoteStamp || (cloud.record && cloud.record.resetNonce!==resetNonce)) {
        allowed=false;
        log("A newer cloud save exists; current tab will not overwrite it.");
        return false;
      }
      var rev=revision, meta=metadata(snapshot());
      var saved=await request("SaveHistoryGame",{
        gameId:gid,token:token,metadata:JSON.stringify(meta),score:String(meta.TotalScore),
        expectedUpdatedAt:remoteStamp
      });
      if(saved.Status==null && saved.success!==true && saved.Success!==true) throw Error("Unconfirmed history write");
      var check=await cloudGet();
      if(!check.record) throw Error("Saved metadata not returned");
      var a=JSON.stringify(check.record.keys), b=JSON.stringify(meta.Record.localKeys);
      if(a!==b) throw Error("Saved record differs from local progress");
      remoteStamp=check.updatedAt;rawWrite("$stamp",remoteStamp);
      if(check.record.resetNonce!==resetNonce) throw Error("Reset marker changed while saving");
      best=Math.max(best,check.record.best);
      if(revision===rev) {dirty=false;rawWrite("$dirty","0");}
      return true;
    } catch(e) {log("Cloud save postponed: "+e.message);return false;}
    finally {busy=false;if(dirty&&allowed) schedule();}
  }
  function flush() {
    if(uploading) return uploading;
    uploading=doFlush().finally(function(){uploading=null;});
    return uploading;
  }
  async function init() {
    storage=root.cc.sys.localStorage;
    dirty=rawRead("$dirty")==="1";
    remoteStamp=rawRead("$stamp")||"";
    best=numeric(rawRead("$best"));
    // One-time migration: the old score was raw Merits and could be millions.
    // Never carry that score into the new compact leaderboard formula.
    if(rawRead("$scoreVersion")!=="2") {
      best=0;rawWrite("$best","0");rawWrite("$scoreVersion","2");
    }
    resetNonce=rawRead("$resetNonce")||"";
    if(authenticated) {
      try {
        var cloud=await cloudGet();
        if(cloud.record) {
          var sameReset=resetNonce===cloud.record.resetNonce;
          if(!dirty || remoteStamp!==cloud.updatedAt || !sameReset) {
            KEYS.forEach(function(k){rawWrite(k,Object.prototype.hasOwnProperty.call(cloud.record.keys,k)?cloud.record.keys[k]:null);});
            dirty=false;rawWrite("$dirty","0");
            if(!sameReset) best=0;
          }
          resetNonce=cloud.record.resetNonce;
          rawWrite("$resetNonce",resetNonce);
          best=Math.max(best,cloud.record.best);
          rawWrite("$best",String(best));
        }
        remoteStamp=cloud.updatedAt;rawWrite("$stamp",remoteStamp);
        allowed=true;
        log("Cloud history connected");
      } catch(e) {log("Cloud read failed; local data kept; upload disabled: "+e.message);}
    } else if(!rawRead("$migrated")) {
      KEYS.forEach(function(k) {try{var v=storage.getItem(k); if(v!==null)rawWrite(k,v);}catch(_){}});
      rawWrite("$migrated","1");
    }
    install();ready=true;
    setInterval(function(){if(dirty)flush();},10000);
    root.addEventListener("pagehide",function(){if(dirty)flush();});
    root.document.addEventListener("visibilitychange",function(){if(root.document.hidden&&dirty)flush();});
    schedule();
  }
  function showScore() {
    if(popupOpen || resetting || typeof root.GV!=="function") return;
    var d=root.cc&&root.cc.director;
    if(!d) return;
    popupOpen=true;
    if(timer){clearTimeout(timer);timer=null;}
    var paused=false,closed=false;
    try {
      if(!d.isPaused || !d.isPaused()) {d.pause();paused=true;}
      function close() {
        if(closed)return;closed=true;
        if(paused)d.resume();
        popupOpen=false;
        if(dirty)schedule();
      }
      var achieved=updateBest();
      if(ready) {dirty=true;revision++;rawWrite("$dirty","1");}
      new root.GV().saveScore(achieved,close);
    } catch(e) {
      if(paused)d.resume();popupOpen=false;if(dirty)schedule();
      log("Arcade score popup failed: "+e.message);
    }
  }
  async function reset() {
    if(resetting || popupOpen || (authenticated && !allowed)) return false;
    resetting=true;
    if(timer){clearTimeout(timer);timer=null;}
    try {
      if(uploading) await uploading;
      var nonce="reset-"+Date.now().toString(36)+"-"+Math.random().toString(36).slice(2);
      if(authenticated) {
        var cloud=await cloudGet();
        if(cloud.record && cloud.record.resetNonce!==resetNonce) throw Error("Save was reset in another tab");
        var meta={Game:GAME,SchemaVersion:1,ScoreVersion:2,ResetNonce:nonce,
          CurrentLevel:0,CurrentStage:0,TotalScore:0,BestScore:0,
          SavedAt:new Date().toISOString(),Record:{__version__:1,localKeys:{}}};
        var saved=await request("SaveHistoryGame",{
          gameId:gid,token:token,metadata:JSON.stringify(meta),score:"0",
          expectedUpdatedAt:cloud.updatedAt
        });
        if(saved.Status==null && saved.success!==true && saved.Success!==true) throw Error("Server did not confirm deletion");
        var checked=await cloudGet();
        if(!checked.record || checked.record.resetNonce!==nonce ||
          checked.record.best!==0 || Object.keys(checked.record.keys).length!==0) {
          throw Error("Server deletion verification failed");
        }
      }
      // Clear only this game's account cache and its old unscoped H5 keys.
      var keys=[];
      try {
        for(var i=0;i<storage.length;i++) {
          var name=storage.key(i);
          if(name && name.indexOf(prefix)===0) keys.push(name);
        }
      } catch (_) {}
      KEYS.forEach(function(k){keys.push(k);keys.push(prefix+k);});
      ["$dirty","$stamp","$best","$scoreVersion","$resetNonce","$migrated"].forEach(function(k){keys.push(prefix+k);});
      keys.forEach(function(k){try{storage.removeItem(k);}catch(_){}});
      memory=Object.create(null);
      best=0;dirty=false;revision++;allowed=false;resetNonce=nonce;
      root.location.reload();
      return true;
    } catch(e) {
      log("Delete progress failed: "+e.message);
      return false;
    } finally {
      resetting=false;
      if(dirty&&allowed)schedule();
    }
  }
  function showResetDialog() {
    var cc=root.cc, director=cc&&cc.director,scene=director&&director.getScene();
    if(!scene || scene.getChildByName("ArcadeResetDialog")) return;
    var resolution=cc.view.getDesignResolutionSize(),width=resolution.width,height=resolution.height;
    var overlay=new cc.Node("ArcadeResetDialog");
    overlay.setContentSize(width,height);overlay.setPosition(width/2,height/2);
    overlay.zIndex=99999;overlay.addComponent(cc.BlockInputEvents);
    scene.addChild(overlay);
    var shade=overlay.addComponent(cc.Graphics);
    shade.fillColor=cc.color(0,0,0,170);shade.rect(-width/2,-height/2,width,height);shade.fill();
    var pw=Math.min(510,width-36),ph=265,panel=new cc.Node("Panel");
    panel.setContentSize(pw,ph);overlay.addChild(panel);
    var pg=panel.addComponent(cc.Graphics);
    pg.fillColor=cc.color(244,239,225,255);pg.roundRect(-pw/2,-ph/2,pw,ph,18);pg.fill();
    pg.lineWidth=4;pg.strokeColor=cc.color(153,120,79);pg.roundRect(-pw/2,-ph/2,pw,ph,18);pg.stroke();
    // Cocos 2.4 can leave runtime-created cc.Label nodes without a
    // usable font material. Draw Vietnamese text into a canvas-backed
    // cc.Sprite instead (the same rendering path as the image buttons).
    function label(parent,text,y,size,color) {
      var node=new cc.Node("ArcadeDialogText");
      var isButton=parent!==panel;
      var tw=isButton?144:pw-32, th=isButton?56:112;
      node.setContentSize(tw,th);
      node.setPosition(0,y);
      parent.addChild(node);
      var sprite=node.addComponent(cc.Sprite);
      sprite.sizeMode=cc.Sprite.SizeMode.CUSTOM;
      var content=text;
      function render(value) {
        var canvas=root.document.createElement("canvas");
        canvas.width=Math.round(tw*2);
        canvas.height=Math.round(th*2);
        var context=canvas.getContext("2d");
        if(!context) throw Error("Không thể hiển thị chữ của hộp thoại");
        context.scale(2,2);
        context.clearRect(0,0,tw,th);
        context.fillStyle=color;
        context.font="bold "+size+"px Arial, sans-serif";
        context.textAlign="center";
        context.textBaseline="middle";
        var lines=String(value).split("\n");
        var lineHeight=size+9;
        var firstY=th/2-(lines.length-1)*lineHeight/2;
        for(var i=0;i<lines.length;i++) {
          context.fillText(lines[i],tw/2,firstY+i*lineHeight,tw-8);
        }
        var texture=new cc.Texture2D();
        texture.initWithElement(canvas);
        if(typeof texture.handleLoadedTexture==="function") texture.handleLoadedTexture();
        sprite.spriteFrame=new cc.SpriteFrame(texture);
        node.setContentSize(tw,th);
      }
      render(content);
      return {
        get string() {return content;},
        set string(value) {content=String(value);render(content);}
      };
    }
    var message=label(panel,"Bạn chắc chắn muốn xóa toàn bộ\ndữ liệu trò chơi?",47,26,"#443326");
    var cancelNode=null,okNode=null,busy=false;
    function button(text,x,fill,action) {
      var n=new cc.Node(text);n.setContentSize(150,60);n.setPosition(x,-72);panel.addChild(n);
      var g=n.addComponent(cc.Graphics);
      g.fillColor=fill;g.roundRect(-75,-30,150,60,9);g.fill();
      label(n,text,0,24,"#ffffff");
      n.addComponent(cc.BlockInputEvents);
      n.on(cc.Node.EventType.TOUCH_END,function(ev){if(ev&&ev.stopPropagation)ev.stopPropagation();if(!busy)action();});
      return n;
    }
    cancelNode=button("Hủy",-pw/4,cc.color(117,127,139),function(){overlay.destroy();});
    okNode=button("Ok",pw/4,cc.color(198,137,61),async function(){
      busy=true;cancelNode.opacity=130;okNode.opacity=130;message.string="Đang xóa dữ liệu...";
      var ownPause=!(director.isPaused&&director.isPaused());
      if(ownPause) director.pause();
      var success=await reset();
      if(success)return;
      if(ownPause)director.resume();
      busy=false;cancelNode.opacity=255;okNode.opacity=255;
      message.string="Chưa thể xóa dữ liệu.\nHãy kiểm tra kết nối và thử lại.";
    });
    // Overlay intercepts all touches, including outside the dialog.
  }
  function addResetButton(ui) {
    var cc=root.cc;
    if(!ui || !cc || ui.getChildByName("ArcadeResetButton")) return;
    var node=new cc.Node("ArcadeResetButton");
    node.setContentSize(96,96);
    var sound=ui.getChildByName("sound");
    node.setPosition(0,sound?sound.y-100:-150);
    ui.addChild(node,9999);
    var sprite=node.addComponent(cc.Sprite);
    sprite.sizeMode=cc.Sprite.SizeMode.CUSTOM;
    node.addComponent(cc.BlockInputEvents);
    node.on(cc.Node.EventType.TOUCH_END,function(ev) {
      if(ev&&ev.stopPropagation)ev.stopPropagation();
      showResetDialog();
    });
    var image=new Image();
    image.onload=function() {
      if(!cc.isValid(node)) return;
      var texture=new cc.Texture2D();
      texture.initWithElement(image);
      if(typeof texture.handleLoadedTexture==="function") texture.handleLoadedTexture();
      sprite.spriteFrame=new cc.SpriteFrame(texture);
      node.setContentSize(96,96);
    };
    image.onerror=function(){log("Cannot load xoa-data-gv.png");};
    image.src="xoa-data-gv.png";
  }
  function addButton() {
    if(root.document.getElementById("arcade-score-button"))return;
    var button=root.document.createElement("img");
    button.id="arcade-score-button";
    button.src="gv-gui-diem.png";button.alt="Gửi điểm Arcade";button.title="Gửi điểm Arcade";
    button.style.cssText="position:fixed;z-index:2147482000;width:62px;height:auto;cursor:pointer;display:none;touch-action:manipulation;user-select:none;";
    button.draggable=false;
    button.addEventListener("click",function(e){e.preventDefault();e.stopPropagation();showScore();});
    button.addEventListener("pointerdown",function(e){e.stopPropagation();});
    root.document.body.appendChild(button);
    function place() {
      var canvas=root.document.getElementById("GameCanvas");
      var cc=root.cc,scene=cc&&cc.director&&cc.director.getScene();
      if(!canvas||!scene||scene.name!=="Game"){button.style.display="none";return;}
      var r=canvas.getBoundingClientRect();
      button.style.display="block";
      var w=Math.max(36,Math.min(62,r.width*0.15));
      button.style.width=w+"px";
      button.style.left=Math.max(0,r.right-w-12)+"px";
      button.style.top=Math.max(0,r.top+12)+"px";
    }
    root.addEventListener("resize",place);
    setInterval(place,500);
    place();
  }
  root.ArcadePlayer={init:init,showScore:showScore,addButton:addButton,flush:flush,reset:reset,showResetDialog:showResetDialog,addResetButton:addResetButton};
})(window);
