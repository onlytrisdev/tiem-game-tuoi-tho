function Particles(level)
{this.level=level;this.num=50;this.maxRect={x:3200,y:2000};this.particles=[];this.display=new PIXI.Container();var baseTex=this.level.textures["fxmap"];var tex=new PIXI.Texture(baseTex,new PIXI.Rectangle(60,16,16,16));var i;var p;for(i=0;i<this.num;i++)
{p=new PIXI.Sprite(tex);p.data={};this.setupParticleData(p.data,i/this.num);this.particles.push(p);this.display.addChild(p);}}
Particles.prototype.setupParticleData=function(data,lifetime)
{data.lifetime=lifetime;data.x=this.level.player.display.x+(Math.random()-0.5)*this.maxRect.x;data.y=this.level.player.display.y+(Math.random()-0.5)*this.maxRect.y;data.vx=(Math.random()-0.5)*0.02;data.vy=(Math.random()-0.5)*0.02;data.scale=Math.random()+1;data.time=Math.random()*10;data.alpha=0.5+Math.random()*0.5;}
Particles.prototype.onUpdate=function(time,deltaTime)
{var sin;var cos;var pos;var p;var i;for(i=0;i<this.particles.length;i++)
{p=this.particles[i];p.data.time+=deltaTime*0.001;p.data.lifetime+=deltaTime*0.0003;sin=Math.sin(p.data.time)
cos=1-sin;p.data.x+=p.data.vx*deltaTime+sin*0.2;p.data.y+=p.data.vy*deltaTime+cos*0.2;p.x=p.data.x;p.y=p.data.y;p.scale.x=p.scale.y=p.data.scale;p.alpha=(Math.min(p.data.lifetime*2,1)-Math.max(p.data.lifetime-0.8,0)*5)*p.data.alpha;if(p.data.lifetime>1)
{this.setupParticleData(p.data,0);continue;}
pos=p.worldTransform;if(pos.tx<0||pos.tx>this.level.stageW||pos.ty<0||pos.ty>this.level.stageH)
{this.setupParticleData(p.data,0);}}}
Particles.prototype.destroy=function()
{if(this.app)this.app=null;if(this.game)this.game=null;}