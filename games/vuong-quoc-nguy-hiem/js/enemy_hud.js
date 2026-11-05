function Enemy_HUD(owner)
{this.owner=owner;this.display=FT.create(this.owner.app.loader.getResult("Enemy_HUD.json"),this.owner.app.loader.getResult("Enemy_HUD.png"));this.display.x=0;this.display.y=-200;this.display.alpha=0;this.scale=Math.max(this.owner.app.scale,0.5);this.display.scale.x=this.display.scale.y=this.scale;}
Enemy_HUD.prototype.set=function(num)
{if(this.display.alpha==0)this.show();this.display.gotoAndStop(Math.round(num));};Enemy_HUD.prototype.show=function()
{gsap.to(this.display,.6,{alpha:1});};Enemy_HUD.prototype.hide=function()
{gsap.to(this.display,.6,{alpha:0});};Enemy_HUD.prototype.updateDirection=function()
{if(this.owner.direction==-1)
{this.display.scale.x=-this.scale;}
else
{this.display.scale.x=this.scale;}}
Enemy_HUD.prototype.reset=function(num)
{this.display.gotoAndStop(Math.round(num));this.display.alpha=0;this.updateDirection();}
Enemy_HUD.prototype.destroy=function()
{FT.remove(this.display);if(this.app)this.app=null;if(this.game)this.game=null;}