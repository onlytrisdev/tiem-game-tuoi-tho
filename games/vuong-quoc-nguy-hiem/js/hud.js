function HUD(level)
{this.app=level.app;this.level=level;this.player=level.player;this.playerEnergy=5;this.spinjitzuPower=6;this.display=FT.create(this.app.loader.getResult("HUD.json"),this.app.loader.getResult("HUD.png"));this.display.spinjitzu.enabled=false;this.display.spinjitzu.visible=false;this.display.spinjitzu.alpha=0;this.display.energy.enabled=false;this.display.energy.visible=false;this.display.energy.alpha=0;this.updateEnergy();this.updateSpinjitzu();}
HUD.prototype.showSpinjitzu=function()
{this.display.spinjitzu.enabled=true;this.display.spinjitzu.visible=true;gsap.to(this.display.spinjitzu,1,{ease:Linear.easeNone,alpha:1});}
HUD.prototype.updateSpinjitzu=function()
{var num=Math.round(this.player.spinjitzuPower);this.display.spinjitzu.gotoAndStop(num);}
HUD.prototype.showEnergy=function()
{this.display.energy.enabled=true;this.display.energy.visible=true;gsap.to(this.display.energy,1,{ease:Linear.easeNone,alpha:1});}
HUD.prototype.updateEnergy=function()
{var num=Math.round(this.player.energy);this.display.energy.gotoAndStop(num);}
HUD.prototype.onResize=function()
{var scale=this.app.scale*1.3;this.display.energy.scale.x=this.display.energy.scale.y=scale;this.display.energy.x=this.app.scale*120;this.display.energy.y=this.app.scale*120;this.display.spinjitzu.scale.x=this.display.spinjitzu.scale.y=scale;this.display.spinjitzu.x=this.app.stageW-this.app.scale*140;this.display.spinjitzu.y=this.app.scale*120;}
HUD.prototype.destroy=function()
{FT.remove(this.display);if(this.app)this.app=null;if(this.game)this.game=null;}