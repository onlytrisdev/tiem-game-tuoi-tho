function FullscreenHandler(game)
{this.game=game;this.app=game.app;this.display=AppUtils.createElement("div","invisible");AppUtils.setProps(this.display,{width:this.app.stageW+"px",height:this.app.stageH+"px",backgroundColor:"#000",opacity:"0",cursor:"pointer"});this.clicker=AppUtils.createElement("div","clicker");AppUtils.setProps(this.clicker,{width:"535px",height:"36px",cursor:"pointer",visibility:"hidden",pointerEvents:"none"});this.clicker.style.backgroundImage=this.app.locale.fullscreenClicker;this.game.audio.create("Silence.ogg");this.display.appendChild(this.clicker);if(!this.app.isMobile)
{this.display.addEventListener("click",this.onRequestFullscreen.bind(this),false);}
else
{this.display.addEventListener("touchmove",this.onTouchMove,false);this.display.addEventListener("touchend",this.onRequestFullscreen.bind(this),false);}}
FullscreenHandler.prototype.onTouchMove=function(e)
{e.preventDefault();}
FullscreenHandler.prototype.onRequestFullscreen=function(e)
{this.display.style.visibility="hidden";this.game.audio.play("Silence.ogg");if(!this.app.isIOS)
{if(document.documentElement.requestFullscreen)
{this.app.fscontainer.requestFullscreen();}
else if(document.documentElement.webkitRequestFullScreen)
{this.app.fscontainer.webkitRequestFullScreen();}
this.app.isFullscreen=true;}
if(this.app.isMobile&&!this.app.isIOS)
{screen.orientation.lock("landscape-primary").catch(function(error)
{console.log(error);});}
if(document.documentElement.requestFullscreen)
{document.addEventListener("fullscreenchange",this.onFullscreenChange.bind(this));}
else
{document.addEventListener("webkitfullscreenchange",this.onFullscreenChange.bind(this));}
if(this.game.state==this.game.SHOW_ENTER)setTimeout(this.game.showMenu.bind(this.game),500);}
FullscreenHandler.prototype.onFullscreenChange=function(e)
{if(document.fullscreenElement||document.mozFullScreenElement||document.webkitFullscreenElement)
{AppUtils.setProps(this.display,{opacity:"0",visibility:"hidden"});this.app.suspend(false);}
else
{AppUtils.setProps(this.display,{opacity:"0.7",visibility:"inherit"});AppUtils.setProps(this.clicker,{visibility:"inherit"});this.app.suspend(true);}}
FullscreenHandler.prototype.onResize=function()
{AppUtils.setProps(this.display,{width:window.innerWidth+"px",height:window.innerHeight+"px"});AppUtils.setProps(this.clicker,{left:(window.innerWidth*0.5-265*this.app.scale*2)+"px",top:(window.innerHeight*0.5-36*this.app.scale*2)+"px",transform:"scale( "+(this.app.scale*2)+" )"});}