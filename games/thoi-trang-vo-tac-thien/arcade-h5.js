/* Arcade H5 metadata bridge - Mylan Oriental Bride (CreateJS).
 * Saves permanent progress and best rounds, not a half-played matching board.
 */
(function (root) {
    "use strict";
    var GAME = "thoi-trang-vo-tac-thien";
    var API = "https://localhost/account/";
    var PREFIX = "gv_vo_tac_thien_v1:";
    var ACTIVE = PREFIX + "active";
    var SCHEMA = 2;
    // Actual CreateJS cards and time limits. These define every round's difficulty.
    var CARDS = [[4,6,6,8],[8,8,8,12],[10,12,14,16]];
    var LIMITS = [[30,60,90,120],[20,40,60,80],[30,40,50,60]];
    // Score = 6*pairs + ceil(60*pairs/limit) +
    // floor(3*pairs*max(0,1-elapsed/(8*pairs))).
    function baseScore(l,r) {
        var pairs=CARDS[l][r]/2, limit=LIMITS[l][r];
        return 6*pairs+Math.ceil(60*pairs/limit);
    }
    function scoreRound(l,r,elapsed) {
        if (l<0||l>=3||r<0||r>=4||!Number.isFinite(elapsed)||elapsed<0 ||
            elapsed>LIMITS[l][r]) return null;
        var pairs=CARDS[l][r]/2;
        return baseScore(l,r)+Math.floor(3*pairs*Math.max(0,1-elapsed/(8*pairs)));
    }
    function credentials() {
        var p = new URLSearchParams(root.location.search), gid = p.get("gid") || "", token = p.get("token") || "";
        if ((!gid || !token) && root.parent !== root) {
            try {
                var pp = new URLSearchParams(root.parent.location.search);
                gid = gid || pp.get("gid") || ""; token = token || pp.get("token") || "";
            } catch (_) {}
        }
        if ((!gid || !token) && root.document.referrer) {
            try {
                var rp = new URL(root.document.referrer).searchParams;
                gid = gid || rp.get("gid") || ""; token = token || rp.get("token") || "";
            } catch (_) {}
        }
        return {gid:gid, token:token};
    }
    var credentialsData = credentials(), gid = credentialsData.gid, token = credentialsData.token;
    // ?gid by itself is only a game ID (also used in ?ads=0 tests), not a player login.
    var authenticated = !!(gid && token);
    var storage = null;
    try { storage = root.localStorage; } catch (_) {}
    function read(k) { try { return storage ? storage.getItem(k) : null; } catch (_) { return null; } }
    function write(k,v) { try { if (storage) storage.setItem(k,v); } catch (_) {} }
    function drop(k) { try { if (storage) storage.removeItem(k); } catch (_) {} }
    function parse(v) { return typeof v === "string" ? JSON.parse(v) : v; }
    function int(v, lo, hi, fallback) {
        var n = Number(v);
        return Number.isSafeInteger(n) && n >= lo && n <= hi ? n : fallback;
    }
    function accountId() {
        if (!authenticated) return "guest";
        var claim = "";
        try {
            var encoded = token.split(".")[1].replace(/-/g, "+").replace(/_/g, "/");
            var payload = JSON.parse(root.atob(encoded));
            claim = String(payload.userid || payload.userId || payload.sub || payload.username || "");
        } catch (_) {}
        var input = gid + "|" + (claim || token), h = 2166136261;
        for (var i = 0; i < input.length; i++) h = Math.imul(h ^ input.charCodeAt(i), 16777619);
        return "user-" + (h >>> 0).toString(16);
    }
    var account = accountId(), cacheKey = PREFIX + "player:" + account;
    function defaults() {
        return {checkpoint:{location:1,round:1}, best:[[0,0,0,0],[0,0,0,0],[0,0,0,0]],
            bestTime:[[null,null,null,null],[null,null,null,null],[null,null,null,null]],
            run:0,tutorialSeen:false};
    }
    function normalize(raw, legacy) {
        if (!raw || typeof raw !== "object" || Array.isArray(raw)) throw new Error("Invalid H5 save");
        var d = defaults(), c = raw.checkpoint || {};
        d.tutorialSeen = raw.tutorialSeen === true;
        d.run = int(raw.run,0,1000000000,0);
        d.checkpoint.location = int(c.location,1,3,1);
        d.checkpoint.round = int(c.round,1,4,1);
        for (var l=0; l<3; l++) for(var r=0;r<4;r++) {
            var row = Array.isArray(raw.best) ? raw.best[l] : null;
            var maximum=baseScore(l,r)+3*(CARDS[l][r]/2);
            var points = Array.isArray(row) ? Number(row[r]) : 0;
            if (legacy) {
                var oldMaximum=l*4+r+1;
                points = Number.isSafeInteger(points) && points>0 && points<=oldMaximum ? baseScore(l,r) : 0;
            } else {
                points = Number.isSafeInteger(points) && points>=baseScore(l,r) && points<=maximum ? points : 0;
            }
            d.best[l][r]=points;
            var timeRow=Array.isArray(raw.bestTime) ? raw.bestTime[l] : null;
            var t=Array.isArray(timeRow) ? timeRow[r] : null;
            d.bestTime[l][r] = points>0 && !legacy && typeof t==="number" &&
                Number.isFinite(t) && t>=0 && t<=LIMITS[l][r] ? t : null;
        }
        return d;
    }
    function completed(d) {
        return d.best.reduce(function(n,row){return n+row.filter(function(v){return v>0;}).length;},0);
    }
    function total(d) {
        return d.best.reduce(function(n,row){return n+row.reduce(function(a,b){return a+b;},0);},0);
    }
    function checkpointIndex(c) {return (c.location-1)*4+c.round;}
    function merge(a,b) {
        var x=normalize(a), y=normalize(b), d=defaults();
        d.tutorialSeen=x.tutorialSeen || y.tutorialSeen;
        d.run=Math.max(x.run,y.run);
        for(var l=0;l<3;l++) for(var r=0;r<4;r++) {
            d.best[l][r]=Math.max(x.best[l][r],y.best[l][r]);
            var tx=x.bestTime[l][r], ty=y.bestTime[l][r];
            d.bestTime[l][r] = tx===null ? ty : ty===null ? tx : Math.min(tx,ty);
        }
        // Run counter distinguishes a finished challenge sequence from a new replay.
        var xc=checkpointIndex(x.checkpoint), yc=checkpointIndex(y.checkpoint);
        d.checkpoint = x.run>y.run ? x.checkpoint : y.run>x.run ? y.checkpoint :
            (xc>=yc ? x.checkpoint : y.checkpoint);
        return d;
    }
    function metadata(d, nonce) {
        var saved = normalize(d);
        var payload = JSON.stringify({checkpoint:saved.checkpoint,best:saved.best,
            bestTime:saved.bestTime,run:saved.run,tutorialSeen:saved.tutorialSeen});
        return {Game:GAME,SchemaVersion:SCHEMA,ResetNonce:nonce || "",
            CurrentLevel:completed(saved),CurrentStage:checkpointIndex(saved.checkpoint),
            TotalScore:total(saved),BestScore:total(saved),SavedAt:new Date().toISOString(),
            Record:{__version__:SCHEMA,localKeys:{"gv_vo_tac_thien_progress":payload}}};
    }
    function stamp(v) {return v && (v.updatedAt || v.UpdatedAt || v.NgaySua || v.ngaySua) || "";}
    function decode(body) {
        if (!body || typeof body!=="object" ||
            (body.Status!=null && Number(body.Status)!==1) ||
            body.success===false || body.Success===false) throw new Error("Rejected response");
        if (!Object.prototype.hasOwnProperty.call(body,"Data") &&
            !Object.prototype.hasOwnProperty.call(body,"data")) throw new Error("Missing Arcade history");
        var historyValue = Object.prototype.hasOwnProperty.call(body,"Data") ? body.Data : body.data;
        var hist = historyValue==="" || historyValue==null ? null : parse(historyValue);
        if (hist==null || hist==="" || (Array.isArray(hist)&&!hist.length))
            return {data:null,nonce:"",updatedAt:stamp(body)};
        if (typeof hist!=="object" || Array.isArray(hist)) throw new Error("Invalid history");
        var raw = hist.MetaData!==undefined ? hist.MetaData :
            hist.metaData!==undefined ? hist.metaData :
            hist.metadata!==undefined ? hist.metadata : hist.Metadata;
        if (raw===undefined) throw new Error("Missing metadata");
        var meta = raw ? parse(raw) : null;
        if (!meta || !Object.keys(meta).length) return {data:null,nonce:"",updatedAt:stamp(hist)||stamp(body)};
        var sourceSchema=Number(meta.SchemaVersion);
        if (meta.Game!==GAME || (sourceSchema!==1 && sourceSchema!==SCHEMA) ||
            !meta.Record || !meta.Record.localKeys ||
            !meta.Record.localKeys.gv_vo_tac_thien_progress)
            throw new Error("Unrecognized H5 save schema");
        var oldData=parse(meta.Record.localKeys.gv_vo_tac_thien_progress);
        var data=normalize(oldData, sourceSchema===1);
        if (sourceSchema===1) {
            var oldSum=0;
            for(var i=0;i<3;i++)for(var j=0;j<4;j++) {
                var oldRow=Array.isArray(oldData.best)?oldData.best[i]:null;
                oldSum+=oldRow&&Number.isSafeInteger(oldRow[j])&&oldRow[j]>0&&oldRow[j]<=i*4+j+1?i*4+j+1:0;
            }
            if(Number(meta.TotalScore)!==oldSum)throw new Error("Incorrect legacy score metadata");
        } else if(Number(meta.TotalScore)!==total(data))throw new Error("Incorrect score metadata");
        if (meta.ResetNonce!=null && typeof meta.ResetNonce!=="string") throw new Error("Invalid reset nonce");
        return {data:data,nonce:meta.ResetNonce||"",updatedAt:stamp(hist)||stamp(body),
            needsUpgrade:sourceSchema===1};
    }
    function request(method, params) {
        return new Promise(function(resolve,reject) {
            var xhr=new XMLHttpRequest();
            xhr.open("POST",API+method,true);
            xhr.withCredentials=true;
            xhr.timeout=6500;
            xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=UTF-8");
            xhr.onload=function() {
                if(xhr.status<200 || xhr.status>=300) {reject(new Error("HTTP "+xhr.status));return;}
                try {
                    var body=JSON.parse(xhr.responseText);
                    if (!body || (body.Status!=null && Number(body.Status)!==1) ||
                        body.success===false || body.Success===false) throw new Error("Server rejected write");
                    resolve(body);
                } catch(e){reject(e);}
            };
            xhr.onerror=xhr.ontimeout=function(){reject(new Error("Connection unavailable"));};
            xhr.send(new URLSearchParams(params).toString());
        });
    }
    function getCloud() {return request("GetHistoryGame",{gameId:gid,token:token}).then(decode);}
    function saveCloud(data,nonce,updatedAt) {
        var m=metadata(data,nonce), payload=JSON.stringify(m);
        var args={gameId:gid,token:token,metaData:payload,metadata:payload,
            CurrentLevel:String(m.CurrentLevel),TotalScore:String(m.TotalScore),score:String(m.TotalScore)};
        if(updatedAt) args.expectedUpdatedAt=updatedAt;
        return request("SaveHistoryGame",args);
    }
    function cacheSnapshot() {
        try {
            var v=parse(read(cacheKey));
            return v && v.data ? {data:normalize(v.data,v.schema!==SCHEMA),dirty:!!v.dirty,
                needsUpgrade:v.schema!==SCHEMA,
                nonce:typeof v.nonce==="string"?v.nonce:""} : null;
        } catch(_){return null;}
    }
    var current=defaults(), resetNonce="", dirty=false, ready=false, allowed=false;
    var initPromise=null, savePromise=null, timer=null, recovering=false, resetting=false;
    var popupOpen=false, pendingScore=null, popupTimer=null, watchdog=null, retryTime=0;
    function saveCache(){write(cacheKey,JSON.stringify({schema:SCHEMA,data:current,dirty:dirty,nonce:resetNonce}));}
    function mark(immediate) {
        if(!ready || resetting) return;
        dirty=true;saveCache();
        if(immediate) flush();
        else if(!timer) timer=root.setTimeout(function(){timer=null;flush();},500);
    }
    function init() {
        if(initPromise) return initPromise;
        initPromise=(async function(){
            var previous=read(ACTIVE), cached=cacheSnapshot();
            if (previous!==account) {
                // Isolate Arcade accounts: never reuse the previous player's checkpoint.
                write(ACTIVE,account);
            }
            if(cached){current=cached.data;dirty=cached.dirty||cached.needsUpgrade;resetNonce=cached.nonce;}
            else {current=defaults();dirty=false;resetNonce="";}
            if(authenticated){
                try {
                    var cloud=await getCloud();
                    if(cloud.data){
                        if(dirty && cloud.nonce===resetNonce) current=merge(current,cloud.data);
                        else {current=cloud.data;dirty=false;}
                        resetNonce=cloud.nonce;
                        if(cloud.needsUpgrade)dirty=true;
                    } else if(resetNonce) {
                        // Cloud was deleted: do not resurrect stale cached progress.
                        current=defaults();resetNonce="";dirty=false;
                    } else if(cached && (completed(current)>0 || checkpointIndex(current.checkpoint)>1 || current.tutorialSeen)) dirty=true;
                    allowed=true;
                } catch(e) {
                    allowed=false;
                    console.warn("[Arcade Bride] GET failed; cloud writes disabled:",e);
                }
            }
            ready=true;saveCache();
            if(dirty) mark(false);
            root.setInterval(function(){
                if(!ready || resetting || !authenticated) return;
                if(!allowed) recover();
                else if(dirty) flush();
            },9000);
            root.addEventListener("pagehide",function(){if(ready && dirty && allowed) flush();});
            return true;
        })();
        return initPromise;
    }
    async function recover() {
        if(!ready || !authenticated || allowed || recovering || resetting) return false;
        recovering=true;
        try{
            var cloud=await getCloud();
            if(cloud.data){
                if(dirty && resetNonce===cloud.nonce)current=merge(current,cloud.data);
                else {current=cloud.data;dirty=false;}
                resetNonce=cloud.nonce;
                if(cloud.needsUpgrade)dirty=true;
            } else if(resetNonce) {
                current=defaults();resetNonce="";dirty=false;
            } else if(completed(current)>0 || checkpointIndex(current.checkpoint)>1 || current.tutorialSeen) dirty=true;
            allowed=true;saveCache();if(dirty) mark(false);return true;
        }catch(e){console.warn("[Arcade Bride] Retry GET:",e);return false;}
        finally{recovering=false;}
    }
    async function flush() {
        if(!ready || !authenticated || !allowed || !dirty || resetting) return false;
        if(savePromise) return savePromise;
        savePromise=(async function(){
            try{
                var cloud=await getCloud();
                if(cloud.nonce!==resetNonce){
                    allowed=false;throw new Error("Reset nonce changed; refusing stale save");
                }
                var snapshot=JSON.stringify(current), next=cloud.data?merge(current,cloud.data):normalize(current);
                await saveCloud(next,resetNonce,cloud.updatedAt);
                var verified=await getCloud();
                if(!verified.data || verified.nonce!==resetNonce ||
                    total(verified.data)<total(next) ||
                    verified.data.run<next.run ||
                    (verified.data.run===next.run &&
                        checkpointIndex(verified.data.checkpoint)<checkpointIndex(next.checkpoint)) ||
                    (next.tutorialSeen && !verified.data.tutorialSeen))
                    throw new Error("SAVE verification failed");
                // Verify every per-round record and fastest time, not just total score.
                for(var l=0;l<3;l++)for(var r=0;r<4;r++) {
                    if(verified.data.best[l][r]<next.best[l][r] ||
                        (next.bestTime[l][r]!==null &&
                            (verified.data.bestTime[l][r]===null ||
                                verified.data.bestTime[l][r]>next.bestTime[l][r])))
                        throw new Error("Round record not confirmed by server");
                }
                var changed=JSON.stringify(current)!==snapshot;
                current=changed?merge(current,verified.data):normalize(verified.data);
                dirty=changed;saveCache();
                if(dirty)root.setTimeout(flush,700);
                return true;
            }catch(e){console.warn("[Arcade Bride] SAVE pending:",e);return false;}
        })();
        try{return await savePromise;}finally{savePromise=null;}
    }
    function checkpoint() {
        return {location:current.checkpoint.location,round:current.checkpoint.round};
    }
    function win(location,round,elapsedSeconds) {
        if(!ready || resetting) return false;
        var l=int(location,1,3,0),r=int(round,1,4,0);
        if(!l||!r || l!==current.checkpoint.location || r!==current.checkpoint.round) return false;
        var seconds=Number(elapsedSeconds);
        var points=scoreRound(l-1,r-1,seconds);
        if(points===null)return false;
        var currentBest=current.best[l-1][r-1], oldTime=current.bestTime[l-1][r-1];
        current.best[l-1][r-1]=Math.max(currentBest,points);
        if(oldTime===null || seconds<oldTime)current.bestTime[l-1][r-1]=seconds;
        if(r<4)current.checkpoint={location:l,round:r+1};
        else if(l<3)current.checkpoint={location:l+1,round:1};
        else {current.run=Math.min(1000000000,current.run+1);current.checkpoint={location:1,round:1};}
        mark(true);
        return true;
    }
    function tutorialSeen() {return current.tutorialSeen;}
    function markTutorialSeen() {
        if(!ready || resetting || current.tutorialSeen)return;
        current.tutorialSeen=true;mark(false);
    }
    // A failed matching round ends the active challenge. The CreateJS Loss
    // screen opens the native popup once its transition has completed; no bonus
    // points are awarded for failure and the last completed round stays saved.
    function loss() {
        return ready && !resetting;
    }
    function scoreSDK() {
        var frames=[root];
        try{if(root.parent!==root)frames.push(root.parent);}catch(_){}
        try{if(root.top!==root && root.top!==root.parent)frames.push(root.top);}catch(_){}
        for(var i=0;i<frames.length;i++)try{
            if(typeof frames[i].GV==="function")return frames[i].GV;
        }catch(_){}
        return null;
    }
    function liftPopup() {
        var n=0;
        function lift(){
            if(!popupOpen || n++>35)return;
            for(var i=0;i<2;i++)try{
                var frame=i===0?root:root.parent;
                var el=frame.document.getElementById("gv_savescore");
                if(el){el.style.setProperty("z-index","2147483647","important");return;}
            }catch(_){}
            root.setTimeout(lift,100);
        }
        lift();
    }
    function showScore(value) {
        if(resetting || popupOpen)return false;
        var score=int(value,0,99999999,0);
        pendingScore=score;
        var GV=scoreSDK();
        if(!GV){
            if(!popupTimer) {
                retryTime=Date.now();
                var retry=function(){
                    popupTimer=null;
                    if(popupOpen || pendingScore===null)return;
                    if(scoreSDK())showScore(pendingScore);
                    else if(Date.now()-retryTime<12000)popupTimer=root.setTimeout(retry,250);
                    else console.warn("[Arcade Bride] GV().saveScore unavailable; verify score.min.js and gid");
                };
                popupTimer=root.setTimeout(retry,250);
            }
            return false;
        }
        if(popupTimer)root.clearTimeout(popupTimer);
        popupTimer=null;pendingScore=null;popupOpen=true;
        var app=root.app;
        try{if(app && app.pauseForScoreFunc)app.pauseForScoreFunc();}catch(_){}
        function close(){
            if(watchdog)root.clearTimeout(watchdog);
            watchdog=null;popupOpen=false;
            try{if(app && app.resumeAfterScoreFunc)app.resumeAfterScoreFunc();}catch(_){}
        }
        try{
            var sdk=new GV();
            if(typeof sdk.saveScore!=="function")throw new Error("No Arcade score popup");
            sdk.saveScore(score,close);
            if(popupOpen) {
                liftPopup();
                watchdog=root.setTimeout(close,120000);
            }
            return true;
        }catch(e){
            close();console.warn("[Arcade Bride] Score popup failed:",e);return false;
        }
    }
    function clearLocal() {
        try {
            var keys=[];
            for(var i=0;storage && i<storage.length;i++){
                var k=storage.key(i);
                if(k && k.indexOf(PREFIX)===0)keys.push(k);
            }
            keys.forEach(drop);
        }catch(_){drop(ACTIVE);drop(cacheKey);}
    }
    async function reset() {
        if(!ready || resetting)return false;
        resetting=true;
        if(timer){root.clearTimeout(timer);timer=null;}
        try{
            if(savePromise)await savePromise;
            if(authenticated){
                if(!allowed)throw new Error("Must GET server history before reset");
                var cloud=await getCloud();
                if(cloud.nonce!==resetNonce)throw new Error("Cloud reset changed");
                var nonce="reset-"+Date.now().toString(36)+"-"+Math.random().toString(36).slice(2);
                await saveCloud(defaults(),nonce,cloud.updatedAt);
                var check=await getCloud();
                if(!check.data || check.nonce!==nonce || total(check.data)!==0 ||
                    checkpointIndex(check.data.checkpoint)!==1)throw new Error("Cloud deletion not confirmed");
            }
            clearLocal();
            root.location.reload();
            return true;
        }catch(e){
            resetting=false;
            console.warn("[Arcade Bride] Reset not applied:",e);
            return false;
        }
    }
    root.ArcadeBride={init:init,checkpoint:checkpoint,win:win,loss:loss,reset:reset,
        tutorialSeen:tutorialSeen,markTutorialSeen:markTutorialSeen,
        flush:flush,recover:recover,showScore:showScore,
        status:function(){return {ready:ready,authenticated:authenticated,cloudAllowed:allowed,
            pendingSave:dirty,checkpoint:checkpoint(),best:current.best,bestTime:current.bestTime,
            run:current.run,score:total(current),
            popupOpen:popupOpen, sdkReady:!!scoreSDK()};}};
})(window);
