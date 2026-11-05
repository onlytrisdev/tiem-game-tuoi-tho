function Endscreen(game)
{this.game=game;this.app=game.app;this.display=FT.create(this.app.loader.getResult("Endscreen.json"),this.app.loader.getResult("Endscreen.png"));this.game.audio.create("Endscreen.ogg");}
Endscreen.prototype.show=function()
{this.display.x=this.app.stageW*0.5;this.display.y=this.app.stageH*0.5;this.display.scale.x=this.display.scale.y=this.game.app.scale;this.display.gotoAndPlay(1);this.game.audio.play("Endscreen.ogg");}
Endscreen.prototype.hide=function()
{gsap.to(this.display,1,{ease:Linear.easeNone,alpha:0,onComplete:this.hideComplete.bind(this)});}
Endscreen.prototype.hideComplete=function()
{this.display.visible=false;}