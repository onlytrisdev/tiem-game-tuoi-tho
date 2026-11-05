window.GV=function(){this.saveScore=function(s,cb){if(typeof cb==="function")cb();};};
window.GVAdBreak=function(cb){if(typeof cb==="function")cb();};
window.WebFont={load:function(cfg){if(cfg&&typeof cfg.active==="function")setTimeout(cfg.active,0);}};
window.ga=function(){};
window.gtag=function(){};
window.ID={init:function(){},getLoginStatus:function(cb){if(typeof cb==="function")cb({status:"not_connected"});},login:function(cb){if(typeof cb==="function")cb({});},register:function(cb){if(typeof cb==="function")cb({});},api:function(p,m,d,cb){if(typeof d==="function")d({});else if(typeof cb==="function")cb({});},ads:{init:function(cb){if(typeof cb==="function")cb();},display:function(cb){if(typeof cb==="function")cb();}},GameAPI:{init:function(a,b,cb){if(typeof cb==="function")cb();},Leaderboards:{list:function(){},save:function(){}},Achievements:{list:function(){},save:function(){}}}};
window.YaGames={init:function(){var sdk={adv:{showFullscreenAdv:function(o){if(o&&o.callbacks&&typeof o.callbacks.onClose==="function")o.callbacks.onClose(true);},showRewardedVideo:function(o){if(o&&o.callbacks){if(typeof o.callbacks.onOpen==="function")o.callbacks.onOpen();if(typeof o.callbacks.onRewarded==="function")o.callbacks.onRewarded();if(typeof o.callbacks.onClose==="function")o.callbacks.onClose(true);}}},auth:{openAuthDialog:function(){return Promise.resolve();}},deviceInfo:{type:"desktop",isMobile:function(){return false;},isDesktop:function(){return true;},isTablet:function(){return false;},isTV:function(){return false;}},environment:{i18n:{lang:"vi",tld:"com"},app:{id:"local"},browser:{lang:"vi"},payload:""},features:{LoadingAPI:{ready:function(){}}},getPlayer:function(){return Promise.resolve({getMode:function(){return"lite";},getName:function(){return"Player";},getPhoto:function(){return"";},getUniqueID:function(){return"local";},setData:function(){return Promise.resolve();},getData:function(){return Promise.resolve({});},setStats:function(){return Promise.resolve();},getStats:function(){return Promise.resolve({});}});},getLeaderboards:function(){return Promise.resolve({getLeaderboardDescription:function(){return Promise.resolve({});},setLeaderboardScore:function(){return Promise.resolve();},getLeaderboardEntries:function(){return Promise.resolve({entries:[]});}});},getStorage:function(){return Promise.resolve(window.localStorage);},clipboard:{writeText:function(){return Promise.resolve();}}};window.ysdk=sdk;return Promise.resolve(sdk);}};
window.h5api={progress:function(){},submitScore:function(s,cb){if(cb)cb();},getRank:function(cb){if(cb)cb();},canPlayAd:function(cb){if(cb)cb(false);},playAd:function(cb){if(cb)cb();},share:function(){},isLogin:function(){return false;},login:function(cb){if(cb)cb();},getUserAvatar:function(){return"";},getUserSmallAvatar:function(){return"";},getUserBigAvatar:function(){return"";},submitRanking:function(s,cb){if(cb)cb();},submitRankScore:function(r,s,cb){if(cb)cb();},getMyRanking:function(cb){if(cb)cb();},getRanking:function(cb){if(cb)cb();},showRanking:function(){},showRankList:function(){},getNearRanking:function(cb){if(cb)cb();},checkWord:function(w,cb){if(cb)cb();},showRecommend:function(){},save:function(){},gameMode:function(){},checkAPI:function(){}};
window.h5ads={AdType:{interstitial:"interstitial",rewarded:"rewarded"},AdEvents:{CONTENT_RESUMED:"CONTENT_RESUMED",CONTENT_PAUSED:"CONTENT_PAUSED",AD_REWARDED:"AD_REWARDED"},adWrapper:{_cbs:{},preloadAd:function(){},adAvailable:function(){return true;},on:function(ev,cb){this._cbs[ev]=cb;},showAd:function(t){var self=this;setTimeout(function(){if(t==="rewarded"&&typeof self._cbs.AD_REWARDED==="function")self._cbs.AD_REWARDED();if(typeof self._cbs.CONTENT_RESUMED==="function")self._cbs.CONTENT_RESUMED();},0);}}};
window.PokiSDK={init:function(){return Promise.resolve();},gameLoadingStart:function(){},gameLoadingFinished:function(){},gameLoadingProgress:function(){},gameplayStart:function(){},gameplayStop:function(){},commercialBreak:function(){return Promise.resolve();},rewardedBreak:function(){return Promise.resolve(true);},displayAd:function(){},destroyAd:function(){},happyTime:function(){},setDebug:function(){}};
window.LaggedAPI={init:function(){},APIAds:{show:function(cb){if(typeof cb==="function")cb();}},Achievements:{save:function(a,cb){if(typeof cb==="function")cb();}},HighScores:{save:function(a,cb){if(typeof cb==="function")cb();}}};
window.open=function(){return null;};
(function(){
  try{
    var st=document.createElement("style");
    st.textContent="#splash{background-image:none!important}#logo,.sMenu,a[target='_blank'],div[id*='moregame' i]{display:none!important;pointer-events:none!important}";
    (document.head||document.documentElement).appendChild(st);
  }catch(e){}
  if(typeof HTMLMediaElement!=="undefined"&&HTMLMediaElement.prototype&&typeof HTMLMediaElement.prototype.play==="function"){
    var origPlay=HTMLMediaElement.prototype.play;
    HTMLMediaElement.prototype.play=function(){
      try{
        var p=origPlay.apply(this,arguments);
        if(p&&typeof p.catch==="function")return p.catch(function(){});
        return p;
      }catch(e){
        return Promise.resolve();
      }
    };
  }
  function isExternalOrBlocked(u){
    if(typeof u!=="string"||!u)return false;
    if(/(?:\/init(?:$|\?)|\/events(?:$|\?)|gameanalytics|google-analytics|googletagmanager|googlesyndication|doubleclick|scorecardresearch|gamemonetize|gamedistribution|adinplay|poki\.com|spilgames|fbrq\.io|tunnl\.com|funtomic\.com|y8\.com|id\.net)/i.test(u))return true;
    if(/^(?:https?:)?\/\//i.test(u)){
      try{
        var parsed=new URL(u,window.location.href);
        if(parsed.hostname&&parsed.hostname!==window.location.hostname&&parsed.hostname!=="127.0.0.1"&&parsed.hostname!=="localhost")return true;
      }catch(e){}
    }
    return false;
  }
  function guardProp(proto,prop,fallback){
    if(!proto)return;
    var desc=Object.getOwnPropertyDescriptor(proto,prop);
    if(desc&&typeof desc.set==="function"){
      Object.defineProperty(proto,prop,{
        configurable:true,
        enumerable:desc.enumerable,
        get:desc.get,
        set:function(v){
          if(isExternalOrBlocked(v)){
            desc.set.call(this,fallback);
            var self=this;
            setTimeout(function(){if(typeof self.onload==="function")self.onload();},0);
            return;
          }
          desc.set.call(this,v);
        }
      });
    }
  }
  if(typeof HTMLScriptElement!=="undefined")guardProp(HTMLScriptElement.prototype,"src","data:text/javascript,");
  if(typeof HTMLIFrameElement!=="undefined")guardProp(HTMLIFrameElement.prototype,"src","about:blank");
  if(typeof HTMLLinkElement!=="undefined")guardProp(HTMLLinkElement.prototype,"href","data:text/css,");
  if(typeof HTMLImageElement!=="undefined")guardProp(HTMLImageElement.prototype,"src","data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7");
  if(typeof Element!=="undefined"&&Element.prototype.setAttribute){
    var origSetAttr=Element.prototype.setAttribute;
    Element.prototype.setAttribute=function(name,val){
      if(typeof name==="string"&&(name.toLowerCase()==="src"||name.toLowerCase()==="href")&&isExternalOrBlocked(val)){
        return;
      }
      return origSetAttr.apply(this,arguments);
    };
  }
  if(typeof XMLHttpRequest!=="undefined"){
    var origOpen=XMLHttpRequest.prototype.open;
    var origSend=XMLHttpRequest.prototype.send;
    XMLHttpRequest.prototype.open=function(method,url){
      this._gvBlocked=isExternalOrBlocked(url);
      if(this._gvBlocked){
        return origOpen.call(this,"GET","data:application/json,%7B%22enabled%22%3Afalse%7D",true);
      }
      return origOpen.apply(this,arguments);
    };
    XMLHttpRequest.prototype.send=function(body){
      if(this._gvBlocked){
        return origSend.call(this,null);
      }
      return origSend.apply(this,arguments);
    };
  }
  if(typeof window.fetch==="function"){
    var origFetch=window.fetch;
    window.fetch=function(input,init){
      var u=typeof input==="string"?input:(input&&input.url)||"";
      if(isExternalOrBlocked(u)){
        return Promise.resolve(new Response("{}",{status:200,headers:{"Content-Type":"application/json"}}));
      }
      return origFetch.apply(this,arguments);
    };
  }
})();
