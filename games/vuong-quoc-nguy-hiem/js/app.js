'use strict';const App={};App.startup=function()
{var cnt=0;this.INIT=cnt++;this.SUSPENDED=cnt++;this.RUNNING=cnt++;this.state=this.INIT;this.stage;this.stageW;this.stageH;this.aspectRatio;this.appStartTime=Date.now();this.time=0;this.lastTime=0;this.deltaTime=0;this.loopTime=0;this.isFullscreen=false;this.game={onResize:function(){},onUpdate:function(){}};this.locale="";this.language="";this.stats=false;this.fscontainer=document.getElementById("fscontainer");this.stage=document.getElementById("stage");this.isMobile=AppUtils.getNavigator();this.isIOS=(/iPad|iPhone|iPod/.test(navigator.platform)||(navigator.platform==='MacIntel'&&navigator.maxTouchPoints>1))&&!window.MSStream;if(this.isIOS)this.isMobile=true;this.isMacOS=navigator.platform==='MacIntel';if(this.isMacOS)this.isIOS=true;this.preloadAnim=new PreloadAnim(this);this.stage.appendChild(this.preloadAnim.display);this.onResize();this.loadLocale();}
App.loadLocale=function()
{this.loader=new createjs.LoadQueue();this.loader.stopOnError=true;this.loader.addEventListener("error",this.onLoadFail.bind(this));this.loader.addEventListener("fileerror",this.onLoadFail.bind(this));this.loader.addEventListener("complete",this.onLocaleLoaded.bind(this));var manifest=[{id:"Locale.json",src:"locale.json",type:"json"}];this.loader.loadManifest(manifest);}
App.onLocaleLoaded=function()
{this.locale=this.loader.getResult("Locale.json");this.language=this.getLanguage();this.switchLanguageFiles();if(this.isIOS)this.switchAudioFiles();this.stats=this.locale.stats;if(this.stats)this.setupStats();this.loader.removeAll();this.loader.removeAllEventListeners();window.addEventListener("resize",this.onResize.bind(this));window.addEventListener("visibilitychange",this.onVisibilityChange.bind(this));this.startLoading();}
App.startLoading=function()
{this.loader=new createjs.LoadQueue();this.loader.stopOnError=true;this.loader.addEventListener("error",this.onLoadFail.bind(this));this.loader.addEventListener("fileerror",this.onLoadFail.bind(this));this.loader.addEventListener("progress",this.onLoadProgress.bind(this));this.loader.addEventListener("complete",this.onLoadComplete.bind(this));var manifest=this.locale.preload;this.loader.loadManifest(manifest);}
App.onLoadFail=function(e)
{console.log("******************************","App","* Error","* Loading failed");console.log(e);console.log("******************************");}
App.onLoadProgress=function(e)
{this.preloadAnim.onProgress(e.loaded);}
App.onLoadComplete=function(e)
{console.log("******************************","App","* Status","* Loading complete");console.log("******************************");this.init();}
App.init=function()
{this.game=new Game(this);this.onResize();this.preloadAnim.hide();this.state=this.RUNNING;this.onUpdate=this.onUpdate.bind(this);window.requestAnimationFrame(this.onUpdate);setTimeout(this.game.init.bind(this.game),500);}
App.onUpdate=function()
{window.requestAnimationFrame(this.onUpdate);if(this.state==this.SUSPENDED)return;this.loopTime=Date.now();this.time=this.loopTime-this.appStartTime;this.deltaTime=this.time-this.lastTime;this.lastTime=this.time;this.time*=0.001;this.game.onUpdate(this.time,this.deltaTime);if(this.stats)
{this.loopTime=Date.now()-this.loopTime;this.debugDisplay.innerHTML="loop: "+this.loopTime+"</br> frame: "+this.deltaTime;}}
App.suspend=function(paused)
{if(paused)
{this.state=this.SUSPENDED;if(gsap.globalTimeline.isRunning)
{gsap.globalTimeline.pause();}}
else
{this.state=this.RUNNING;if(gsap.globalTimeline.paused())
{gsap.globalTimeline.pause();}
else
{gsap.globalTimeline.play();}
this.lastTime=Date.now()-this.appStartTime-16;}}
App.onResize=function()
{this.stageW=window.innerWidth;this.stageH=window.innerHeight;this.aspectRatio=this.stageW/this.stageH;if(this.aspectRatio<1.4)
{this.stageH=this.stageW/1.4;}
if(this.aspectRatio>2.1)
{this.stageW=this.stageH*2.1;}
this.scale=Math.min(this.stageW/1920,this.stageH/1080);this.inverseScale=1/this.scale;AppUtils.setProps(this.fscontainer,{width:window.innerWidth+"px",height:window.innerHeight+"px"});AppUtils.setProps(this.stage,{left:((window.innerWidth-this.stageW)*0.5)+"px",top:((window.innerHeight-this.stageH)*0.5)+"px",width:this.stageW+"px",height:this.stageH+"px"});this.game.onResize();this.preloadAnim.onResize();}
App.onVisibilityChange=function()
{if(document.hidden)
{this.suspend(true);}
else
{this.suspend(false);}}
App.switchLanguageFiles=function()
{var str;var replaceAt;var a;var b;var item;for(a=0;a<this.locale.preload.length;a++)
{item=this.locale.preload[a];if(item.id.indexOf("Startscreen.json")==0||item.id.indexOf("Startscreen.png")==0)
{str=item.src;replaceAt=str.lastIndexOf("/");str=str.substr(0,replaceAt)+"/"+this.language+str.substr(replaceAt);item.src=str;}
if(item.id.indexOf("Endscreen.json")==0||item.id.indexOf("Endscreen.png")==0)
{str=item.src;replaceAt=str.lastIndexOf("/");str=str.substr(0,replaceAt)+"/"+this.language+str.substr(replaceAt);item.src=str;}}
for(a=0;a<this.locale.levelDefaults.length;a++)
{item=this.locale.levelDefaults[a];if(item.id.indexOf("ArcadeMachine.json")==0||item.id.indexOf("ArcadeMachine.png")==0)
{str=item.src;replaceAt=str.lastIndexOf("/");str=str.substr(0,replaceAt)+"/"+this.language+str.substr(replaceAt);item.src=str;}}
for(a=0;a<this.locale.levels.length;a++)
{for(b=0;b<this.locale.levels[a].preload.length;b++)
{item=this.locale.levels[a].preload[b];if(item.id.indexOf("Speech.json")==0||item.id.indexOf("Speech.png")==0)
{str=item.src;replaceAt=str.lastIndexOf("/");str=str.substr(0,replaceAt)+"/"+this.language+str.substr(replaceAt);item.src=str;}}}
str=this.locale.fullscreenClicker;replaceAt=str.lastIndexOf("/");str=str.substr(0,replaceAt)+"/"+this.language+str.substr(replaceAt);this.locale.fullscreenClicker=str;}
App.switchAudioFiles=function()
{var a;var b;var item;var str;for(a=0;a<this.locale.preload.length;a++)
{str=this.locale.preload[a].src;if(str.indexOf("ogg")!=-1)
{str=str.replace(/ogg/,"mp3");this.locale.preload[a].src=str;this.locale.preload[a].type="binary";}}
for(a=0;a<this.locale.levelDefaults.length;a++)
{str=this.locale.levelDefaults[a].src;if(str.indexOf("ogg")!=-1)
{str=str.replace(/ogg/,"mp3");this.locale.levelDefaults[a].src=str;this.locale.levelDefaults[a].type="binary";}}
for(a=0;a<this.locale.levels.length;a++)
{for(b=0;b<this.locale.levels[a].preload.length;b++)
{str=this.locale.levels[a].preload[b].src;if(str.indexOf("ogg")!=-1)
{str=str.replace(/ogg/,"mp3");this.locale.levels[a].preload[b].src=str;this.locale.levels[a].preload[b].type="binary";}}}}
App.getLanguage=function()
{var location=document.location.href;var language=this.locale.defaultLang;return language;}
App.setupStats=function()
{this.debugDisplay=AppUtils.createElement("div","debugDisplay");AppUtils.setProps(this.debugDisplay,{width:"90px",height:"40px",paddingLeft:"5px",paddingTop:"5px",backgroundColor:"#555",color:"#FFF",fontFamily:"Arial",fontSize:"1em"});this.stage.appendChild(this.debugDisplay);}
window.onload=App.startup();