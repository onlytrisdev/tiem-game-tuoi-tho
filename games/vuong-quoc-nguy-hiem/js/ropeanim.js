RopeAnim.prototype=Object.create(MapItem.prototype);RopeAnim.prototype.constructor=RopeAnim;function RopeAnim(display,map,data)
{MapItem.call(this,display,map);this.display.Rope_Long.mask=this.display.Rope_Mask;this.setAnimation=this.setAnimation.bind(this);this.level.addItem(this);}
RopeAnim.prototype.setAnimation=function(anim)
{if(anim)this.display.gotoAndPlay(anim);}
RopeAnim.prototype.destroy=function()
{FT.remove(this.display);}