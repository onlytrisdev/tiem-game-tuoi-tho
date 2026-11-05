function DeathAnim(level)
{var cnt=0;this.DISSOLVE=cnt++;this.EXPLODE=cnt++;this.level=level;this.audio=level.game.audio;this.type=this.DISSOLVE;this.enabled=false;this.display=new PIXI.Container();var pTex=new PIXI.Texture(this.level.textures["fxmap"],new PIXI.Rectangle(0,0,60,60));this.particles=[];var tmp;for(var i=0;i<50;i++)
{tmp=new PIXI.Sprite(pTex);tmp.blendMode=PIXI.BLEND_MODES.ADD;tmp.anchor.set(0.5,0.5);tmp.scale.set(0,0);tmp.visible=false;this.particles.push(tmp);this.display.addChild(tmp);}
this.audio.create("Death_Anim.ogg");}
DeathAnim.prototype.start=function(pos,type)
{this.type=type;this.enabled=true;for(var i=0;i<this.particles.length;i++)
{this.setupParticle(this.particles[i]);}
this.display.x=pos.x;this.display.y=pos.y;this.audio.play("Death_Anim.ogg");}
DeathAnim.prototype.onUpdate=function(time,deltaTime)
{if(!this.enabled)return;var sprite;var lifedelta;this.enabled=false;switch(this.type)
{case this.DISSOLVE:for(var i=0;i<this.particles.length;i++)
{sprite=this.particles[i];sprite.data.time+=deltaTime;if(sprite.data.time<sprite.data.lifestart)
{this.enabled=true;continue;}
if(sprite.data.dead)continue;sprite.data.lifetime+=deltaTime;if(sprite.data.lifetime<500)
{sprite.scale.x=sprite.scale.y=sprite.data.lifetime*0.004;}
if(sprite.data.lifetime>500)
{lifedelta=sprite.data.lifetime-500;sprite.scale.x=2-lifedelta*0.003;sprite.scale.y=2+lifedelta*0.001;sprite.y=sprite.data.y-lifedelta*lifedelta*0.002;}
if(sprite.y<-1000)
{sprite.data.dead=true;sprite.visible=false;}
else
{this.enabled=true;}}
break;case this.EXPLODE:for(var i=0;i<this.particles.length;i++)
{sprite=this.particles[i];if(sprite.data.dead)continue;sprite.data.lifetime+=deltaTime;lifedelta=1-sprite.data.lifetime/2000;sprite.data.vy+=2;sprite.data.x+=sprite.data.vx;sprite.data.y+=sprite.data.vy;sprite.x=sprite.data.x;sprite.y=sprite.data.y;sprite.scale.x=sprite.scale.y=lifedelta;sprite.rotation=sprite.data.vx*sprite.data.lifetime*0.01;if(lifedelta<0)
{sprite.data.dead=true;sprite.visible=false;}
else
{this.enabled=true;}}
break;}}
DeathAnim.prototype.setupParticle=function(sprite)
{sprite.data={};sprite.data.time=0;sprite.data.lifetime=0;sprite.data.lifestart=Math.random()*1000;sprite.data.dead=false;sprite.data.x=Math.random()*300-150;sprite.data.y=Math.random()*120-60;sprite.data.vx=Math.random()*50-25;sprite.data.vy=-Math.random()*40;sprite.data.alpha=0.5+Math.random()*0.5;sprite.scale.set(0,0);sprite.x=sprite.data.x;sprite.y=sprite.data.y;sprite.alpha=sprite.data.alpha;sprite.rotation=0;sprite.visible=true;}
DeathAnim.prototype.destroy=function()
{this.audio.remove("Death_Anim.ogg");}