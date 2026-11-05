Samurai.prototype=Object.create(MapItem.prototype);Samurai.prototype.constructor=Samurai;function Samurai(display,map,data)
{this.display=FT.create(data.json,data.img);this.display.x=display.x;this.display.y=display.y;MapItem.call(this,this.display,map);this.setAnimation=this.setAnimation.bind(this);this.destroy=this.destroy.bind(this);this.level.addItem(this);}
Samurai.prototype.setAnimation=function(anim,talkEnabled)
{if(anim)this.display.gotoAndPlay(anim);if(talkEnabled)
{this.display.head_2.gotoAndStop(0);this.display.head_3.gotoAndStop(0);this.display.head_4.gotoAndStop(0);}
else
{this.display.head_2.gotoAndStop(1);this.display.head_3.gotoAndStop(1);this.display.head_4.gotoAndStop(1);}}
Samurai.prototype.destroy=function()
{FT.remove(this.display);}