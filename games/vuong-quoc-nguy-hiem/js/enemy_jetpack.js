Enemy_Jetpack.prototype=Object.create(NPC.prototype);Enemy_Jetpack.prototype.constructor=Enemy_Jetpack;function Enemy_Jetpack(display,map,data)
{NPC.call(this,display,map,data);this.audiosource=true;this.audiodata={id:"Enemy_Jetpack.ogg",min:1000*1000,max:3000*3000};this.audiodata.invDelta=1/(this.audiodata.max-this.audiodata.min);this.app=this.level.app;this.audio=this.level.game.audio;this.type=MAP_ITEM_TYPE.ENEMY;this.energy=4;var cnt=100;this.ATTACK_SHOOT=cnt++;this.ANIM={};this.ANIM.NONE=[0,0];this.ANIM.IDLE=["IDLE","IDLE"];this.ANIM.FLY=["FLY","FLY"];this.ANIM.BRAKE=["BRAKE","BRAKE"];this.ANIM.SHOOT=["SHOOT","SHOOT"];this.ANIM.HIT=["HIT","HIT"];this.ANIM.DIE=["DIE","DIE"];this.roamingStart=this.spawnPoint.slice();this.roamingDelta_Max=[500,500];this.roamingEnd_Max=2500;this.targetOffset=[0,-300];this.dist_Max=1500;this.dist_Action=600;this.dist_Min=300;this.attackCount_Max=60*33;this.attackCount_Cooldown=90*33;this.dieCount=0;this.dieCount_Max=5000;this.audioPlaying=false;this.body=new p2.Body
({type:p2.Body.DYNAMIC,mass:1,damping:0.1,angularDamping:0.1,gravityScale:0,collisionResponse:true,position:this.spawnPoint.slice(),fixedRotation:true});this.bodyShape=new p2.Capsule
({length:200,radius:40,material:this.physics.materials["Default"],collisionGroup:this.physics.CGROUP_JETPACK,collisionMask:this.physics.CMASK_JETPACK});this.body.addShape(this.bodyShape);this.bodyShape.angle=Math.PI*0.5;this.body.name=this.name;this.body.item=this;this.bullets=[];this.bulletCount=0;this.bulletCount_Max=1;var bullet;for(var i=0;i<2;i++)
{bullet=new Bullet(this.display.bullet_container.children[i],this.map)
this.bullets.push(bullet);}
this.particles=[];this.particlesActive=true;var ptex=this.display.body.Smoke.children[0].texture;var i;var p;for(i=0;i<20;i++)
{p=new PIXI.Sprite(ptex);p.anchor=new PIXI.Point(0.5,0.5);p.data={};this.setupParticleData(p.data);this.particles.push(p);}
this.hud=new Enemy_HUD(this);this.display.addChild(this.hud.display);this.audio.create("Enemy_Jetpack.ogg");this.audio.create("Enemy_Jetpack_Death.ogg");this.level.addItem(this);}
Enemy_Jetpack.prototype.onBeginContact=function(e)
{if(this.state!=this.HIT&&this.state!=this.HIT_START)
{if(e.other.type==MAP_ITEM_TYPE.WEAPON_1)
{if(e.other.lethal)
{this.energy-=0.5;this.hud.set(this.energy);this.hitDirection=this.getDirection(this.body.position,e.other.body.position);this.state=this.HIT_START;}}
else if(e.other.type==MAP_ITEM_TYPE.WEAPON_PLAYER)
{if(e.other.lethal)
{this.energy-=1;this.hud.set(this.energy);this.level.player.increaseSpinjitzuPower(0.5);this.hitDirection=this.getDirection(this.body.position,e.other.body.position);this.state=this.HIT_START;}}}
if(e.other.type==MAP_ITEM_TYPE.ENEMY)
{e.eq.restitution=1;}}
Enemy_Jetpack.prototype.onEndContact=function(e)
{if(e.other==this.contact_B)
{this.contact_B=false;}
if(e.other==this.contact_L_R)
{this.contact_L_R=false;}}
Enemy_Jetpack.prototype.onUpdate=function(time,deltaTime)
{if(this.energy<=0&&this.state<this.DIE_START)
{this.state=this.DIE_START;}
this.updateTarget();switch(this.state)
{case this.NONE:break;case this.IDLE_START:this.setAnimation(this.ANIM.IDLE);this.state=this.IDLE;break;case this.IDLE:this.updateTargetData();if(this.isAttacking)
{if(this.targetDist<this.dist_Min)
{this.state=this.MOVE_BACK_FROM_TARGET;}
else if(this.targetDist<this.dist_Action)
{this.state=this.ATTACK_START;}
else if(this.targetDist<this.dist_Max)
{this.state=this.MOVE_TO_TARGET_START;}
else
{this.state=this.ROAMING_START;}}
else
{if(this.targetDist<this.dist_Action)
{this.state=this.IDLE;}
else if(this.targetDist<this.dist_Max)
{this.state=this.MOVE_TO_TARGET_START;}}
break;case this.ROAMING_START:this.setAnimation(this.ANIM.FLY);this.state=this.ROAMING;this.contact_L_R=false;break;case this.ROAMING:this.updateTargetData();if(this.isAttacking)
{if(this.targetDist<this.dist_Max)
{this.state=this.MOVE_TO_TARGET_START;}}
this.setBodyVelocity(this.walkSpeed*this.direction,null);this.roamingDelta[0]=this.body.position[0]-this.roamingStart[0];this.roamingDelta[1]=this.body.position[1]-this.roamingStart[1];if(this.roamingDelta[0]*this.direction>this.roamingDelta_Max[0])
{this.roamingEndCount=0;this.state=this.ROAMING_PAUSE_START;}
if(this.contact_L_R)
{this.roamingEndCount=0;this.state=this.ROAMING_PAUSE_START;}
break;case this.ROAMING_PAUSE_START:this.setAnimation(this.ANIM.BRAKE);this.state=this.ROAMING_PAUSE;break;case this.ROAMING_PAUSE:this.updateTargetData();if(this.isAttacking)
{if(this.targetDist<this.dist_Max)
{this.state=this.MOVE_TO_TARGET_START;}}
this.roamingEndCount+=deltaTime;if(this.roamingEndCount>this.roamingEnd_Max)
{this.roamingEndCount=0;this.direction=-Math.sign(this.roamingDelta[0]);this.state=this.ROAMING_START;}
break;case this.MOVE_TO_TARGET_START:this.setAnimation(this.ANIM.FLY);this.state=this.MOVE_TO_TARGET;break;case this.MOVE_TO_TARGET:this.updateTargetData();if(this.isAttacking)
{if(this.targetDist<this.dist_Min)
{this.state=this.MOVE_BACK_FROM_TARGET_START;}
else if(this.targetDist<this.dist_Action)
{this.state=this.ATTACK_START;}
else if(this.targetDist>this.dist_Max)
{this.state=this.BRAKE;}}
else
{if(this.targetDist<this.dist_Min)
{this.state=this.BRAKE;}
else if(this.targetDist<this.dist_Action)
{this.state=this.BRAKE;}
else if(this.targetDist<this.dist_Max)
{this.state=this.MOVE_TO_TARGET;}
else if(this.targetDist>this.dist_Max)
{this.state=this.BRAKE;}}
this.setBodyVelocity
(this.runSpeed*this.targetDelta[0]/this.dist_Action,this.runSpeed*this.targetDelta[1]/this.dist_Action);break;case this.MOVE_BACK_FROM_TARGET_START:this.state=this.MOVE_BACK_FROM_TARGET;break;case this.MOVE_BACK_FROM_TARGET:this.updateTargetData();if(this.targetDist<this.dist_Min)
{this.state=this.MOVE_BACK_FROM_TARGET;}
else if(this.targetDist<this.dist_Action)
{this.state=this.ATTACK_START;}
else if(this.targetDist>this.dist_Max)
{this.state=this.BRAKE;}
this.setBodyVelocity
(-this.dist_Action/this.targetDelta[0]*2,-this.dist_Action/this.targetDelta[1]*2);break;case this.ATTACK_START:this.state=this.ATTACK_SHOOT;this.setAnimation(this.ANIM.SHOOT);this.attackCount=0;break;case this.ATTACK_SHOOT:this.getTargetDelta();if(this.targetDelta[1]<0)
{this.body.velocity[1]-=1;}
else
{this.body.velocity[1]+=1;}
this.attackCount+=deltaTime;if(this.display.lethal_weapon.visible)
{this.shootBullet();this.state=this.COOLDOWN;}
break;case this.COOLDOWN:this.getTargetDelta();if(this.targetDelta[1]<0)
{this.body.velocity[1]-=1;}
else
{this.body.velocity[1]+=1;}
this.attackCount+=deltaTime;if(this.attackCount>this.attackCount_Cooldown)
{this.attackCount=0;this.state=this.IDLE;}
break;case this.HIT_START:this.setBodyVelocity(-this.hitDirection*50,null);this.setAnimation(this.ANIM.HIT);this.state=this.HIT;break;case this.HIT:this.recoverCount+=deltaTime;if(this.recoverCount>this.recoverCount_Max)
{this.recoverCount=0;this.state=this.IDLE;}
break;case this.DIE_START:this.body.gravityScale=1;this.body.collisionResponse=true;this.setBodyVelocity(-this.hitDirection*80,-80);this.setAnimation(this.ANIM.HIT);this.state=this.DIE;this.audio.stop("Enemy_Jetpack.ogg");this.audio.play("Enemy_Jetpack_Death.ogg");this.hud.hide();break;case this.DIE:this.dieCount+=deltaTime;var sin=-Math.cos(this.dieCount*0.002)*this.direction;var speedX=Math.min(this.dieCount*0.5,100);var speedY=40-speedX*0.5;this.body.velocity[0]=sin*speedX;this.body.velocity[1]=speedY;this.body.angle=sin*speedX*0.02;if(this.dieCount>this.dieCount_Max)
{this.state=this.DEAD;this.disable();}
break;case this.DEAD:break;}
this.display.scale.x=this.direction;this.display.x=this.body.position[0];this.display.y=this.body.position[1];this.display.rotation=this.body.angle;this.updateParticles(time,deltaTime);this.hud.updateDirection();}
Enemy_Jetpack.prototype.updateTargetData=function()
{if(!this.currentTarget)
{this.targetDist=10000000;return;}
var targetPos=[this.currentTarget.body.position[0]+this.targetOffset[0],this.currentTarget.body.position[1]+this.targetOffset[1]];this.targetDelta=this.getDelta(this.body.position,targetPos);this.targetDist=this.getDistance(this.body.position,targetPos);this.direction=this.getDirection(this.body.position,targetPos);this.targetReached=(this.targetDist<this.dist_Action);}
Enemy_Jetpack.prototype.updateParticles=function(time,deltaTime)
{var i;var p;for(i=0;i<this.particles.length;i++)
{p=this.particles[i];p.data.time+=deltaTime;if(p.data.time>p.data.lifetime)
{this.setupParticleData(p.data);}
p.data.percent=(p.data.lifetime-p.data.time)/p.data.lifetime;p.data.x+=p.data.vx;p.data.y+=p.data.vy;p.x=p.data.x;p.y=p.data.y;p.scale.x=p.scale.y=(1-p.data.percent*0.5)*3;p.alpha=p.data.percent;}}
Enemy_Jetpack.prototype.setupParticleData=function(data)
{var pos=[80*Math.cos(this.display.body.skew.y)+60*Math.sin(this.display.body.skew.y),80*Math.sin(this.display.body.skew.y)-60*Math.cos(this.display.body.skew.y)]
data.time=0;data.lifetime=1000+Math.random()*500;data.percent=0;data.x=this.display.x-pos[0]*this.direction;data.y=this.display.y-pos[1];data.vx=Math.random()*2-1;data.vy=3+Math.random();}
Enemy_Jetpack.prototype.shootBullet=function()
{var vel=[35*this.direction,30];var pos=[this.display.lethal_weapon.x*this.display.scale.x+this.display.x,this.display.lethal_weapon.y+this.display.y];this.bullets[this.bulletCount].shoot(pos,vel);this.bulletCount++;if(this.bulletCount>this.bulletCount_Max)this.bulletCount=0;}
Enemy_Jetpack.prototype.updateAudio=function(pos)
{var dx=this.body.position[0]-pos[0];var dy=this.body.position[1]-pos[1];var d=dx*dx+dy*dy;if(d<this.audiodata.max)
{var vol=Math.max(d,this.audiodata.min)-this.audiodata.min;vol=1-vol*this.audiodata.invDelta;this.audio.setAudioSourceVolume(this.audiodata.id,vol);}}
Enemy_Jetpack.prototype.disable=function()
{console.log("disabled",this.name)
this.enabled=false;this.display.enabled=false;this.display.alpha=0;this.level.removeItem(this);for(var i=0;i<this.particles.length;i++)
{this.particles[i].visible=false;}
this.level.removeItem(this.bullets[0]);this.level.removeItem(this.bullets[1]);this.level.deathAnim.start({x:this.display.x,y:this.display.y},this.level.deathAnim.EXPLODE);}
Enemy_Jetpack.prototype.reset=function()
{if(this.enabled)
{this.targets=[];this.currentTarget=null;this.display.enabled=true;this.display.alpha=1;this.state=this.NONE;this.isArmed=0;this.isAttacking=false;this.energy=4;this.dieCount=0;this.setAnimation(this.ANIM.NONE);for(var i=0;i<this.particles.length;i++)
{this.particles[i].visible=true;}
this.onUpdate(0,0);this.audio.setAudioSourceVolume("Enemy_Jetpack.ogg",0);}}
Bullet.prototype=Object.create(MapItem.prototype);Bullet.prototype.constructor=Bullet;function Bullet(display,map)
{MapItem.call(this,display,map);this.type=MAP_ITEM_TYPE.WEAPON_1;this.name="Bullet";this.update=true;this.begincontact=true;this.lethal=true;this.display.visible=false;this.body=new p2.Body
({type:p2.Body.DYNAMIC,mass:1,damping:0,angularDamping:0,gravityScale:0,collisionResponse:false,position:[0,0],fixedRotation:true});this.shape=new p2.Circle
({radius:40,collisionGroup:this.physics.CGROUP_ENEMY,collisionMask:this.physics.CMASK_ENEMY});this.body.addShape(this.shape);this.body.name=this.name+" Bullet";this.body.item=this;this.level.addItem(this);}
Bullet.prototype.shoot=function(pos,vel)
{this.body.position=pos;this.body.velocity=vel;this.display.x=pos[0];this.display.y=pos[1];this.display.gotoAndPlay(1);this.display.visible=true;this.display.AABB=[-100,-100,100,100];this.physics.world.addBody(this.body);}
Bullet.prototype.onBeginContact=function(e)
{this.body.velocity=[0,0];this.display.gotoAndPlay("HIT");this.physics.world.removeBody(this.body);}
Bullet.prototype.onUpdate=function()
{this.display.x=this.body.position[0];this.display.y=this.body.position[1];}