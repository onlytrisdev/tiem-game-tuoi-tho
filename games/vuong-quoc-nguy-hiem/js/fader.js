function Fader(level)
{this.level=level;var baseTex=this.level.textures["fxmap"];var tex=new PIXI.Texture(baseTex,new PIXI.Rectangle(226,2,28,28));this.display=new PIXI.Sprite(tex);this.display.visible=false;}
Fader.prototype.show=function()
{this.display.alpha=0;this.display.visible=true;gsap.to(this.display,1,{ease:Linear.easeNone,alpha:1});}
Fader.prototype.hide=function()
{gsap.to(this.display,1,{ease:Linear.easeNone,alpha:0,onComplete:this.hideComplete.bind(this)});}
Fader.prototype.hideComplete=function()
{this.display.alpha=0;this.display.visible=false;}
Fader.prototype.onResize=function()
{this.display.scale.x=this.level.stageW/28;this.display.scale.y=this.level.stageH/28;}