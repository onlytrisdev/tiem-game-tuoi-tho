function Camera(level)
{var cnt=0;this.pos={x:0,y:0};this.offset={x:0,y:0};this.defaultZoom=0.9;this.zoom=0.9;this.scale=1;this.dampen=0.1;this.hardReset=true;this.level=level;this.viewport=null;this.objectsToCull=null;this.m_offset={x:0,y:0};this.m_offset_sum={x:0,y:0};this.m_pos={x:0,y:0};this.m_scale=1;this.m_zoom=1;this.m_inverseZoom=1;this.target=null;this.cullingCount=0;this.cullingCount_Max=64;this.AABB=[0,0,0,0];this.cullingPos={x:0,y:0};this.cameraSettings=[];this.debugOffset={x:0,y:0};this.debugZoom=1;this.debug=level.game.app.locale.cameraDebug;if(this.debug)this.setupDebug();}
Camera.prototype.setViewport=function(display)
{this.viewport=display;var i;var child;this.objectsToCull=[];for(var i=0;i<this.viewport.children.length;i++)
{child=this.viewport.children[i];if(child!=this.level.player.display)
{this.createAABB(child);this.objectsToCull.push(child);}}}
Camera.prototype.resetViewport=function(pos)
{var i;var child;for(i=0;i<this.objectsToCull.length;i++)
{child=this.objectsToCull[i];child.visible=true;}}
Camera.prototype.setTarget=function(item)
{this.target=item;}
Camera.prototype.onUpdate=function(time,deltaTime)
{var i;this.m_offset_sum.x=this.m_offset.x;this.m_offset_sum.y=this.m_offset.y;this.m_zoom=this.zoom;if(this.debug)
{this.m_offset_sum.x+=this.debugOffset.x;this.m_offset_sum.y+=this.debugOffset.y;this.m_zoom*=this.debugZoom;this.debugDisplay_2.innerHTML="offset: "+AppUtils.roundToDigits(this.m_offset_sum.x,2)+" "+AppUtils.roundToDigits(this.m_offset_sum.y,2)+"</br>zoom: "+AppUtils.roundToDigits(this.m_zoom,2);}
this.m_totalScale=this.level.scale*this.m_zoom;this.m_inverseTotalScale=1/this.m_totalScale;this.m_offset_sum.x*=this.level.stageW*this.m_inverseTotalScale;this.m_offset_sum.y*=this.level.stageH*this.m_inverseTotalScale;if(this.target.state<this.target.DIE)
{this.m_pos.x=(-this.target.display.x-this.m_offset_sum.x)*this.m_zoom;this.m_pos.y=(-this.target.display.y-this.m_offset_sum.y)*this.m_zoom;this.m_scale=this.m_zoom;}
this.pos.x-=(this.pos.x-this.m_pos.x)*this.dampen;this.pos.y-=(this.pos.y-this.m_pos.y)*this.dampen;this.scale-=(this.scale-this.m_scale)*this.dampen;if(this.hardReset)
{this.pos.x=this.m_pos.x;this.pos.y=this.m_pos.y;this.scale=this.m_scale;}
this.cullingCount+=deltaTime;if(this.cullingCount>this.cullingCount_Max)
{if(this.target.state>=this.target.DIE)return;this.cullingCount=0;this.cullingPos.x=this.target.display.x+this.m_offset_sum.x;this.cullingPos.y=this.target.display.y+this.m_offset_sum.y;this.halfW=this.level.stageW*this.m_inverseTotalScale;this.halfH=this.level.stageH*this.m_inverseTotalScale;this.AABB[0]=this.cullingPos.x-this.halfW;this.AABB[1]=this.cullingPos.y-this.halfH;this.AABB[2]=this.cullingPos.x+this.halfW;this.AABB[3]=this.cullingPos.y+this.halfH;if(this.debug)
{var notculled=0;var visible;var child;for(i=0;i<this.objectsToCull.length;i++)
{child=this.objectsToCull[i];visible=this.isInViewport(child);child.visible=visible;if(visible)notculled++;}
this.debugDisplay.innerHTML="total: "+this.viewport.children.length+"</br>visible: "+notculled;this.debugDisplay_3.innerHTML="player x: "+Math.round(this.target.display.x)+"</br>player y: "+Math.round(this.target.display.y)+"</br>energy: "+this.level.player.energy;}
else
{for(i=0;i<this.objectsToCull.length;i++)
{child=this.objectsToCull[i];child.visible=this.isInViewport(child);}}
var dist={x:0,y:0};var outer=0;var inner=0;var distSQR=0;var set;var factor;this.m_offset.x=this.offset.x;this.m_offset.y=this.offset.y;for(i=0;i<this.cameraSettings.length;i++)
{set=this.cameraSettings[i];dist.x=this.cullingPos.x-set.pos.x;dist.y=this.cullingPos.y-set.pos.y;distSQR=dist.x*dist.x+dist.y*dist.y;if(distSQR<set.outer)
{factor=Math.max(distSQR-set.inner,0)*set.inverseDelta;this.zoom=this.lerp(set.zoom,this.defaultZoom,factor);this.m_offset.x=this.lerp(set.offset.x,this.offset.x,factor);this.m_offset.y=this.lerp(set.offset.y,this.offset.y,factor);break;}}
this.hardReset=false;}}
Camera.prototype.createAABB=function(display)
{if(display.AABB)return;display.getBounds();if(display._bounds.minX!=Infinity)
{display.AABB=[display._bounds.minX-display.x,display._bounds.minY-display.y,display._bounds.maxX-display.x,display._bounds.maxY-display.y];}
else
{display.AABB=[-500,-500,500,500];}}
Camera.prototype.isInViewport=function(display)
{var outside=(display.AABB[0]+display.x>this.AABB[2]||display.AABB[1]+display.y>this.AABB[3]||display.AABB[2]+display.x<this.AABB[0]||display.AABB[3]+display.y<this.AABB[1]);return!outside;}
Camera.prototype.lerp=function(from,to,percent)
{var linear=to*percent+from*(1-percent);return linear;}
Camera.prototype.destroy=function()
{this.level=null;this.viewport=null;this.objectsToCull=null;if(this.debug)
{window.removeEventListener("keydown",this.onKeyDown.bind(this),false);App.stage.removeChild(this.debugDisplay);App.stage.removeChild(this.debugDisplay_2);App.stage.removeChild(this.debugDisplay_3);}
if(this.app)this.app=null;if(this.game)this.game=null;}
Camera.prototype.setupDebug=function()
{this.debugDisplay=AppUtils.createElement("div","debugDisplay");AppUtils.setProps(this.debugDisplay,{left:"120px",width:"90px",height:"40px",paddingLeft:"5px",paddingTop:"5px",backgroundColor:"#252",color:"#FFF",fontFamily:"Arial",fontSize:"1em"});App.stage.appendChild(this.debugDisplay);this.debugDisplay_2=AppUtils.createElement("div","debugDisplay_2");AppUtils.setProps(this.debugDisplay_2,{left:"220px",width:"160px",height:"40px",paddingLeft:"5px",paddingTop:"5px",backgroundColor:"#252",color:"#FFF",fontFamily:"Arial",fontSize:"1em"});App.stage.appendChild(this.debugDisplay_2);this.debugDisplay_3=AppUtils.createElement("div","debugDisplay_2");AppUtils.setProps(this.debugDisplay_3,{left:"390px",width:"120px",height:"60px",paddingLeft:"5px",paddingTop:"5px",backgroundColor:"#225",color:"#FFF",fontFamily:"Arial",fontSize:"1em"});App.stage.appendChild(this.debugDisplay_3);window.addEventListener("keydown",this.onKeyDown.bind(this),false);}
Camera.prototype.onKeyDown=function(e)
{switch(event.code)
{case"Numpad0":this.debugOffset.x=0;this.debugOffset.y=0;this.debugZoom=1;break;case"Numpad6":this.debugOffset.x+=0.1;break;case"Numpad4":this.debugOffset.x-=0.1;break;case"Numpad2":this.debugOffset.y+=0.1;break;case"Numpad8":this.debugOffset.y-=0.1;break;case"NumpadAdd":this.debugZoom+=0.05;break;case"NumpadSubtract":this.debugZoom-=0.05;break;}}