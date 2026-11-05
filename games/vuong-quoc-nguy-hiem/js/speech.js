function Speech(cinematic,data)
{this.cinematic=cinematic;this.level=cinematic.level;this.last=-1;this.current=-1;this.display=FT.create(data.json,data.img);this.bubbles=this.display.children.slice();for(var i=0;i<this.bubbles.length;i++)
{this.bubbles[i].offset={x:this.bubbles[i].x,y:this.bubbles[i].y};}
this.show=this.show.bind(this);this.onUpdate=this.onUpdate.bind(this);this.destroy=this.destroy.bind(this);}
Speech.prototype.show=function(num)
{this.last=this.current;this.current=num;if(this.last==this.current)return;if(this.current!=-1)
{this.bubbles[this.current].gotoAndPlay(1);}
else
{for(var i=0;i<this.bubbles.length;i++)
{this.bubbles[i].gotoAndStop(0);}}
if(this.last!=-1)
{this.bubbles[this.last].gotoAndStop(0);}}
Speech.prototype.onUpdate=function()
{if(this.current<0)return;var bubble=this.bubbles[this.current];var pos={x:bubble.target.worldTransform.tx,y:bubble.target.worldTransform.ty};var invScale=Math.min(1/this.level.scale,1);var scale=Math.max(this.level.scale,0.8);pos.x+=bubble.offset.x*this.level.scale*1.3;pos.y+=bubble.offset.y*this.level.scale*1.3;bubble.x=pos.x;bubble.y=pos.y;bubble.scale.x=bubble.scale.y=scale;}
Speech.prototype.destroy=function()
{FT.remove(this.display);}