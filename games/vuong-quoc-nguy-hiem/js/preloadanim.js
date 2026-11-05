'use strict';function PreloadAnim(app)
{this.app=app;this.progress=0;this.display=AppUtils.createElement("div","preload anim");AppUtils.setProps(this.display,{width:"0px",height:"0px",pointerEvents:"none"});this.container=AppUtils.createElement("div","container");AppUtils.setProps(this.container,{width:"0px",height:"0px",pointerEvents:"none"});this.bar=AppUtils.createElement("div","bar");AppUtils.setProps(this.bar,{position:"absolute",width:"400px",height:"4px",left:"-200px",top:"-3px",transformOrigin:"center",transform:"scale( 0, 1 )",backgroundColor:"#FFF",pointerEvents:"none"})
this.transparent=AppUtils.createElement("div","transparent");AppUtils.setProps(this.transparent,{position:"absolute",width:"400px",height:"4px",left:"-200px",top:"-3px",transformOrigin:"center",backgroundColor:"#FFF",opacity:"0.2",pointerEvents:"none"})
this.logo_lego=AppUtils.createElement("div","logo_lego");AppUtils.setProps(this.logo_lego,{position:"absolute",width:"260px",height:"113px",left:"-130px",top:"-104px",backgroundImage:"url( assets/misc/logo_lego.png )",pointerEvents:"none"})
this.logo_game=AppUtils.createElement("div","logo_game");AppUtils.setProps(this.logo_game,{position:"absolute",width:"484px",height:"138px",left:"-242px",top:"-20px",backgroundImage:"url( assets/misc/logo_game.png )",pointerEvents:"none"})
this.container.appendChild(this.transparent);this.container.appendChild(this.bar);this.container.appendChild(this.logo_lego);this.container.appendChild(this.logo_game);this.display.appendChild(this.container);}
PreloadAnim.prototype.show=function()
{this.onProgress(0);this.display.style.visibility="inherit";gsap.killTweensOf(this.display);gsap.to(this.display,0.2,{ease:Linear.easeNone,alpha:1});}
PreloadAnim.prototype.hide=function()
{gsap.killTweensOf(this.display);gsap.to(this.display,0.5,{ease:Linear.easeNone,alpha:0,onComplete:this.hideComplete.bind(this)});}
PreloadAnim.prototype.hideComplete=function()
{this.display.style.visibility="hidden";}
PreloadAnim.prototype.onProgress=function(p)
{AppUtils.setProps(this.bar,{transform:"scale( "+p+" , 1"});this.progress=p;}
PreloadAnim.prototype.onResize=function()
{AppUtils.setProps(this.display,{width:this.app.stageW+"px",height:this.app.stageH+"px"});AppUtils.setProps(this.container,{left:(this.app.stageW*0.5)+"px",top:(this.app.stageH*0.5)+"px",transform:"scale( "+this.app.scale+" )"});}