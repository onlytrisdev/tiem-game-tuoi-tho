function NPC(display,map,data)
{this.id=0;this.name=display.name;this.display=null;this.map=map;this.level=map.level;this.physics=map.level.physics;this.app=map.level.game.app;this.type=MAP_ITEM_TYPE.NPC;this.enabled=true;this.update=true;this.begincontact=true;this.endcontact=true;var cnt=0;this.NONE=cnt++;this.IDLE_START=cnt++;this.IDLE=cnt++;this.BRAKE=cnt++;this.WAIT_START=cnt++;this.WAIT=cnt++;this.ROAMING_START=cnt++;this.ROAMING=cnt++;this.ROAMING_PAUSE_START=cnt++;this.ROAMING_PAUSE=cnt++;this.MOVE_TO_TARGET_START=cnt++;this.MOVE_TO_TARGET=cnt++;this.MOVE_BACK_FROM_TARGET_START=cnt++;this.MOVE_BACK_FROM_TARGET=cnt++;this.TARGET_REACHED=cnt++;this.ATTACK_START=cnt++;this.ATTACK_STAND=cnt++;this.ATTACK_RUN=cnt++;this.COOLDOWN_START=cnt++;this.COOLDOWN=cnt++;this.JUMP_START=cnt++;this.JUMP=cnt++;this.JUMP_END_START=cnt++;this.JUMP_END=cnt++;this.HIT_START=cnt++;this.HIT=cnt++;this.RUN_START=cnt++;this.RUN=cnt++;this.SPINJITZU_START=cnt++;this.SPINJITZU=cnt++;this.DIE_START=cnt++;this.DIE=cnt++;this.DEAD=cnt++;this.state=this.NONE;this.defaultState=this.NONE;this.isArmed=0;this.isAttacking=false;this.ANIM={};this.ANIM.NONE=[0,0];this.contact_B=false;this.contact_L_R=false;this.energy=5;this.direction=1;this.hitDirection=1;this.spawnPoint=[display.x,display.y];this.walkSpeed=15;this.runSpeed=30;this.jumpSpeed=-100;this.roamingStart=[];this.roamingDelta=[];this.RoamingDelta_Max=[500,500];this.roamingEndCount=0;this.roamingEnd_Max=1500;this.targets=[];this.currentTarget=null;this.targetOffset=[0,0];this.targetDist=0;this.dist_Min=250;this.dist_Action=450;this.dist_Max=800;this.targetReached=false;this.preferredAttack=-1;this.currentAttack=-1;this.attackCount=0;this.attackCount_Max=40*33;this.attackCount_Cooldown=45*33;this.jumpEndCount=0;this.jumpEndCount_Max=300;this.recoverCount=0;this.recoverCount_Max=15*33;this.dieCount=0;this.dieCount_Max=5000;this.display=FT.create(data.json,data.img);this.display.AABB=[-1000,-1000,1000,1000];this.setAnimation=this.setAnimation.bind(this);this.setStateMachine=this.setStateMachine.bind(this);this.follow=this.follow.bind(this);this.attack=this.attack.bind(this);this.beam=this.beam.bind(this);this.setNone=this.setNone.bind(this);}
NPC.prototype.onBeginContact=function(e)
{if(this.state>this.DIE_START)return;if(e.other.type==MAP_ITEM_TYPE.DEADZONE)
{this.energy=0;this.updateEnergy();this.contact_B=e.other;return;}
if(e.other.type==MAP_ITEM_TYPE.INSTANT_DEATH)
{this.energy=0;this.updateEnergy();this.contact_B=e.other;return;}
if(e.normal[1]>0.4)
{this.contact_B=e.other;}
if(Math.abs(e.normal[0])>0.4)
{this.contact_L_R=e.other;}
if(this.state!=this.HIT_START&&this.state!=this.HIT)
{if(e.other.type==MAP_ITEM_TYPE.WEAPON_1)
{if(e.other.lethal)
{this.energy-=0.5;this.hud.set(this.energy);this.hitDirection=this.getDirection(this.body.position,e.other.body.position);this.state=this.HIT_START;}}
else if(e.other.type==MAP_ITEM_TYPE.WEAPON_PLAYER)
{if(e.other.lethal)
{this.level.player.increaseSpinjitzuPower(0.5);this.energy-=1;this.hud.set(this.energy);this.hitDirection=this.getDirection(this.body.position,e.other.body.position);this.state=this.HIT_START;}}
else if(e.other.type==MAP_ITEM_TYPE.PLAYER)
{if(this.level.player.state==this.level.player.SPINJITZU)
{this.energy-=1;this.hud.set(this.energy);this.hitDirection=this.getDirection(this.body.position,e.other.body.position);this.state=this.HIT_START;}}}}
NPC.prototype.onEndContact=function(e)
{if(this.state>this.DIE_START)return;if(e.other==this.contact_B)
{this.contact_B=false;}
if(e.other==this.contact_L_R)
{this.contact_L_R=false;}}
NPC.prototype.onUpdate=function(time,deltaTime)
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
break;case this.BRAKE:this.setAnimation(this.ANIM.BRAKE);this.state=this.IDLE;break;case this.WAIT_START:this.setAnimation(this.ANIM.BRAKE);this.state=this.WAIT;this.body.velocity=[0,0];break;case this.WAIT:this.updateTargetData();if(this.targetDelta[0]>0)
{this.state=this.IDLE_START;}
else
{this.body.velocity=[0,0];}
break;case this.ROAMING_START:this.setAnimation(this.ANIM.WALK);this.state=this.ROAMING;this.roamingStart=this.body.position.slice();this.contact_L_R=false;break;case this.ROAMING:this.updateTargetData();if(this.isAttacking)
{if(this.targetDist<this.dist_Max)
{this.state=this.MOVE_TO_TARGET_START;}}
this.setBodyVelocity(this.walkSpeed*this.direction,null);this.roamingDelta[0]=this.body.position[0]-this.roamingStart[0];this.roamingDelta[1]=this.body.position[1]-this.roamingStart[1];if(this.roamingDelta[0]*this.direction>this.RoamingDelta_Max[0])
{this.roamingEndCount=0;this.state=this.ROAMING_PAUSE_START;}
if(this.contact_L_R)
{this.roamingEndCount=0;this.state=this.ROAMING_PAUSE_START;}
break;case this.ROAMING_PAUSE_START:this.setAnimation(this.ANIM.BRAKE);this.state=this.ROAMING_PAUSE;break;case this.ROAMING_PAUSE:this.updateTargetData();if(this.isAttacking)
{if(this.targetDist<this.dist_Max)
{this.state=this.MOVE_TO_TARGET_START;}}
this.roamingEndCount+=deltaTime;if(this.roamingEndCount>this.roamingEnd_Max)
{this.roamingEndCount=0;this.direction=-Math.sign(this.roamingDelta[0]);this.state=this.ROAMING_START;}
break;case this.MOVE_TO_TARGET_START:this.setAnimation(this.ANIM.RUN);this.state=this.MOVE_TO_TARGET;break;case this.MOVE_TO_TARGET:this.updateTargetData();if(this.isAttacking)
{if(this.contact_L_R)
{if(this.contact_L_R.type==MAP_ITEM_TYPE.STATIC)
{this.contact_L_R=false;this.state=this.JUMP_START;break;}}
if(this.targetDist<this.dist_Min)
{this.state=this.MOVE_BACK_FROM_TARGET_START;}
else if(this.targetDist<this.dist_Action)
{this.state=this.ATTACK_START;}
else if(this.targetDist<this.dist_Max)
{this.state=this.MOVE_TO_TARGET;}
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
this.setBodyVelocity(this.runSpeed*this.direction,null);break;case this.MOVE_BACK_FROM_TARGET_START:this.setAnimation(this.ANIM.RUN);this.state=this.MOVE_BACK_FROM_TARGET;break;case this.MOVE_BACK_FROM_TARGET:this.updateTargetData();if(this.targetDist<this.dist_Min)
{this.state=this.MOVE_BACK_FROM_TARGET;}
else if(this.targetDist<this.dist_Action)
{this.state=this.ATTACK_START;}
else if(this.targetDist<this.dist_Max)
{this.state=this.MOVE_TO_TARGET_START;}
else if(this.targetDist>this.dist_Max)
{this.state=this.BRAKE;}
this.setBodyVelocity(this.runSpeed*this.direction* -1,null);break;case this.ATTACK_START:var rnd=Math.random();if(rnd>0.75)
{this.state=this.JUMP_START;this.setAnimation(this.ANIM.JUMP);}
else if(rnd>0.35)
{this.state=this.ATTACK_STAND;this.setAnimation(this.ANIM.ATTACK_STAND);this.attackCount=0;this.attackCount_Max=35*33;}
else
{this.state=this.ATTACK_RUN;this.setAnimation(this.ANIM.ATTACK_RUN);this.attackCount=0;this.attackCount_Max=35*33;}
break;case this.ATTACK_STAND:this.attackCount+=deltaTime;if(this.attackCount>this.attackCount_Max)
{this.state=this.COOLDOWN;}
break;case this.ATTACK_RUN:this.setBodyVelocity(this.runSpeed*this.direction,null);this.attackCount+=deltaTime;if(this.attackCount>this.attackCount_Max)
{this.state=this.COOLDOWN;this.setAnimation(this.ANIM.BRAKE);}
break;case this.COOLDOWN:this.attackCount+=deltaTime;if(this.attackCount>this.attackCount_Cooldown)
{this.attackCount=0;this.state=this.IDLE;}
break;case this.JUMP_START:this.state=this.JUMP;this.setAnimation(this.ANIM.JUMP);this.setBodyVelocity(null,this.jumpSpeed);break;case this.JUMP:this.setBodyVelocity(this.runSpeed*this.direction,null);if(this.contact_B)
{this.state=this.JUMP_END_START;this.jumpEndCount=0;}
break;case this.JUMP_END_START:this.setAnimation(this.ANIM.BRAKE);this.state=this.JUMP_END;break;case this.JUMP_END:this.jumpEndCount+=deltaTime;if(this.jumpEndCount>this.jumpEndCount_Max)
{this.jumpEndCount=0;this.state=this.IDLE;}
break;case this.HIT_START:this.setBodyVelocity(-this.hitDirection*50,null);this.setAnimation(this.ANIM.HIT);this.state=this.HIT;break;case this.HIT:this.recoverCount+=deltaTime;if(this.recoverCount>this.recoverCount_Max)
{this.recoverCount=0;this.state=this.IDLE;}
break;case this.RUN_START:this.setAnimation(this.ANIM.RUN);this.state=this.RUN;break;case this.RUN:this.setBodyVelocity(this.runSpeed*this.direction,null);break;case this.DIE_START:this.setBodyVelocity(-this.hitDirection*80,-80);this.setAnimation(this.ANIM.DIE);this.state=this.DIE;break;case this.DIE:var vel=Math.abs(this.body.velocity[0])+Math.abs(this.body.velocity[1]);if(vel<0.1)
{this.state=this.DEAD;this.disable();}
this.dieCount+=deltaTime;if(this.dieCount>this.dieCount_Max)
{this.state=this.DEAD;this.disable();}
break;case this.DEAD:break;}
this.display.scale.x=this.direction;this.display.x=this.body.position[0];this.display.y=this.body.position[1];if(this.weapon)this.updateWeapon();if(this.hud)this.hud.updateDirection();}
NPC.prototype.setStateMachine=function(data)
{if(data.hasOwnProperty("state"))this.state=data.state;if(data.hasOwnProperty("isArmed"))this.isArmed=data.isArmed;if(data.hasOwnProperty("defaultState"))this.defaultState=data.defaultState;if(data.hasOwnProperty("isAttackingTarget"))this.isAttacking=data.isAttackingTarget;if(data.hasOwnProperty("direction"))this.direction=data.direction;}
NPC.prototype.setAnimation=function(state,play=true)
{if(play)
{this.display.gotoAndPlay(state[this.isArmed]);}
else
{this.display.gotoAndStop(state[this.isArmed]);}}
NPC.prototype.addTarget=function(target)
{var add=true;for(var i=0;i<this.targets.length;i++)
{if(this.targets[i]==target)
{add=false;break;}}
if(add)this.targets.push(target);}
NPC.prototype.removeTarget=function(target)
{for(var i=0;i<this.targets.length;i++)
{if(this.targets[i]==target)
{this.targets.splice(i,1);break;}}}
NPC.prototype.updateTarget=function()
{if(this.targets.length==0)
{this.currentTarget=null;return;}
if(this.currentTarget)
{if(this.currentTarget.state>=this.currentTarget.DIE_START)
{this.removeTarget(this.currentTarget);this.currentTarget=null;}}
else
{this.getNewTarget();}}
NPC.prototype.updateTargetData=function()
{if(!this.currentTarget)return;var targetPos=[this.currentTarget.body.position[0]+this.targetOffset[0],this.currentTarget.body.position[1]+this.targetOffset[1]];this.targetDelta=this.getDelta(this.body.position,targetPos);this.targetDist=this.getDistance(this.body.position,targetPos);this.direction=this.getDirection(this.body.position,targetPos);this.targetReached=(this.targetDist<this.dist_Action);}
NPC.prototype.getNewTarget=function()
{var target;var dist=[0,0];for(var i=0;i<this.targets.length;i++)
{target=this.targets[i];var targetPos=[target.body.position[0]+this.targetOffset[0],target.body.position[1]+this.targetOffset[1]];dist=this.getDistance(this.body.position,targetPos);if(dist<this.dist_Max)this.currentTarget=target;}}
NPC.prototype.getTargetDelta=function()
{if(!this.currentTarget)return;var targetPos=[this.currentTarget.body.position[0]+this.targetOffset[0],this.currentTarget.body.position[1]+this.targetOffset[1]];this.targetDelta=this.getDelta(this.body.position,targetPos);}
NPC.prototype.follow=function(target,data)
{this.targets=[];this.currentTarget=null;this.state=this.IDLE_START;this.isArmed=0;this.isAttacking=false;this.direction=this.getDirection(this.body.position,target.body.position);if(data)
{if(data.hasOwnProperty("dist_Min"))this.dist_Min=data.dist_Min;if(data.hasOwnProperty("dist_Action"))this.dist_Action=data.dist_Action;if(data.hasOwnProperty("dist_Max"))this.dist_Max=data.dist_Max;if(data.hasOwnProperty("runSpeed"))this.runSpeed=data.runSpeed;}
this.addTarget(target);this.currentTarget=target;}
NPC.prototype.attack=function(target,data)
{this.targets=[];this.currentTarget=null;if(target.length)
{for(var i=0;i<target.length;i++)
{this.addTarget(target[i]);}}
else
{this.addTarget(target);}
this.state=this.IDLE_START;this.isArmed=1;this.isAttacking=true;if(data)
{if(data.hasOwnProperty("dist_Min"))this.dist_Min=data.dist_Min;if(data.hasOwnProperty("dist_Action"))this.dist_Action=data.dist_Action;if(data.hasOwnProperty("dist_Max"))this.dist_Max=data.dist_Max;if(data.hasOwnProperty("runSpeed"))this.runSpeed=data.runSpeed;}
this.getNewTarget();if(this.currentTarget)this.direction=this.getDirection(this.body.position,this.currentTarget.body.position);}
NPC.prototype.setRoaming=function(data)
{this.targets=[];this.currentTarget=null;if(data)
{if(data.hasOwnProperty("direction"))this.direction=data.direction;if(data.hasOwnProperty("roamingDelta_Max"))this.roamingDelta_Max=data.roamingDelta_Max;if(data.hasOwnProperty("dist_Action"))this.dist_Action=data.dist_Action;if(data.hasOwnProperty("dist_Max"))this.dist_Max=data.dist_Max;if(data.hasOwnProperty("runSpeed"))this.runSpeed=data.runSpeed;}
this.state=this.ROAMING_START;this.isArmed=0;this.isAttacking=false;}
NPC.prototype.beam=function(pos)
{this.state=this.IDLE_START;this.isArmed=0;this.isAttacking=false;this.direction=1;this.body.type=p2.Body.KINEMATIC;this.body.position[0]=pos[0];this.body.position[1]=pos[1];this.body.velocity=[0,0];this.display.visible=true;this.display.x=pos[0];this.display.y=pos[1];setTimeout(this.beamFinish.bind(this),500);}
NPC.prototype.beamFinish=function()
{this.body.type=p2.Body.DYNAMIC;}
NPC.prototype.setIdle=function()
{this.targets=[];this.currentTarget=null;this.state=this.IDLE;this.isArmed=0;this.isAttacking=false;this.direction=1;}
NPC.prototype.setNone=function()
{this.targets=[];this.currentTarget=null;this.state=this.NONE;this.isArmed=0;this.isAttacking=false;this.direction=1;}
NPC.prototype.getDelta=function(posA,posB)
{return[posB[0]-posA[0],posB[1]-posA[1]];}
NPC.prototype.getDistance=function(posA,posB)
{var delta=[posA[0]-posB[0],posA[1]-posB[1]];return Math.sqrt(delta[0]*delta[0]+delta[1]*delta[1]);}
NPC.prototype.getDirection=function(posA,posB)
{return Math.sign(posB[0]-posA[0]);}
NPC.prototype.setBodyVelocity=function(x,y)
{if(x)this.body.velocity[0]=x;if(y)this.body.velocity[1]=y;}
NPC.prototype.disable=function()
{console.log("disabled",this.name)
this.enabled=false;this.level.removeItem(this);this.weapon.enabled=false;this.level.removeItem(this.weapon);gsap.to(this.display,1,{ease:Linear.easeNone,alpha:0});this.level.deathAnim.start({x:this.display.x,y:this.display.y+100},this.level.deathAnim.DISSOLVE);}
NPC.prototype.reset=function()
{this.state=this.NONE;this.isArmed=0;this.isAttacking=false;this.energy=5;this.dieCount=0;if(this.hud)
{this.hud.reset(this.energy);}
this.display.alpha=1;this.setAnimation(this.ANIM.NONE);}
NPC.prototype.destroy=function()
{if(this.hud)this.hud.destroy();FT.remove(this.display);if(this.app)this.app=null;if(this.game)this.game=null;}
Enemy.prototype=Object.create(NPC.prototype);Enemy.prototype.constructor=Enemy;function Enemy(display,map,data)
{NPC.call(this,display,map,data);this.type=MAP_ITEM_TYPE.ENEMY;this.ANIM.IDLE=["IDLE_WEAPON","IDLE_WEAPON"];this.ANIM.WALK=["RUN_WEAPON","RUN_WEAPON"];this.ANIM.RUN=["RUN_WEAPON","RUN_WEAPON"];this.ANIM.ATTACK_STAND=["FIGHT_IDLE","FIGHT_IDLE"];this.ANIM.ATTACK_RUN=["FIGHT_RUN","FIGHT_RUN"];this.ANIM.ATTACK_JUMP=["FIGHT_RUN","FIGHT_RUN"];this.ANIM.JUMP=["JUMP_WEAPON","JUMP_WEAPON"];this.ANIM.FALL=["FALL_WEAPON","FALL_WEAPON"];this.ANIM.BRAKE=["BRAKE_WEAPON","BRAKE_WEAPON"];this.ANIM.HIT=["HIT","HIT"];this.ANIM.DIE=["DIE","DIE"];this.ANIM.TURN_AROUND=["TURN_AROUND","TURN_AROUND"];this.ANIM.LAUGH=["LAUGH","LAUGH"];this.body=new p2.Body
({type:p2.Body.DYNAMIC,mass:1,damping:0.1,angularDamping:0.1,gravityScale:1,collisionResponse:true,position:this.spawnPoint.slice(),fixedRotation:true});this.bodyShape=new p2.Capsule
({length:200,radius:40,material:this.physics.materials["Default"],collisionGroup:this.physics.CGROUP_ENEMY,collisionMask:this.physics.CMASK_ENEMY});this.body.addShape(this.bodyShape);this.bodyShape.angle=Math.PI*0.5;this.body.name=this.name;this.body.item=this;this.weapon=new Weapon({name:this.name+"_Weapon"},map);this.weapon.shape.collisionGroup=this.physics.CGROUP_ENEMY;this.weapon.shape.collisionMask=this.physics.CMASK_ENEMY;this.hud=new Enemy_HUD(this);this.display.addChild(this.hud.display);this.level.addItem(this);this.level.addItem(this.weapon);}
Enemy.prototype.updateWeapon=function()
{this.weapon.lethal=this.display.lethal_weapon.visible;var pos=[this.display.x+this.display.arm_1_weapon.x*this.direction,this.display.y+this.display.arm_1_weapon.y]
var angle;var shapePos;var shapeAngle;angle=this.display.arm_1_weapon.skew.y*this.direction;shapePos=[140*this.direction,40];shapeAngle=-0.3*this.direction;this.weapon.body.position=pos;this.weapon.body.angle=angle;this.weapon.shape.position=shapePos;this.weapon.shape.angle=shapeAngle;}
Ninja.prototype=Object.create(NPC.prototype);Ninja.prototype.constructor=Ninja;function Ninja(display,map,data)
{NPC.call(this,display,map,data);this.type=MAP_ITEM_TYPE.NINJA;this.ANIM.IDLE=["IDLE","IDLE_WEAPON"];this.ANIM.WALK=["RUN","RUN_WEAPON"];this.ANIM.RUN=["RUN","RUN_WEAPON"];this.ANIM.ATTACK_STAND=["FIGHT_IDLE","FIGHT_IDLE"];this.ANIM.ATTACK_RUN=["FIGHT_RUN","FIGHT_RUN"];this.ANIM.ATTACK_JUMP=["FIGHT_RUN","FIGHT_RUN"];this.ANIM.JUMP=["JUMP","JUMP_WEAPON"];this.ANIM.FALL=["FALL","FALL_WEAPON"];this.ANIM.BRAKE=["BRAKE","BRAKE_WEAPON"];this.ANIM.HIT=["HIT","HIT_WEAPON"];this.ANIM.DIE=["DIE","DIE"];this.ANIM.HIGH_FIVE=["HIGH_FIVE","HIGH_FIVE"];this.ANIM.TALK=["TALK","TALK"];this.ANIM.POINT=["POINT","POINT"];this.ANIM.PULL_ROPE=["PULL_ROPE","PULL_ROPE"];this.ANIM.GRAB_ROPE=["GRAB_ROPE","GRAB_ROPE"];this.ANIM.LOOK_UP=["LOOK_UP","LOOK_UP"];this.walkSpeed=22;this.runSpeed=43;this.jumpSpeed=-110;this.body=new p2.Body
({type:p2.Body.DYNAMIC,mass:1,damping:0.1,angularDamping:0.1,gravityScale:1,collisionResponse:true,position:this.spawnPoint.slice(),fixedRotation:true});this.bodyShape=new p2.Capsule
({length:200,radius:40,material:this.physics.materials["Default"],collisionGroup:this.physics.CGROUP_NINJA,collisionMask:this.physics.CMASK_NINJA});this.body.addShape(this.bodyShape);this.bodyShape.angle=Math.PI*0.5;this.body.name=this.name;this.body.item=this;this.weapon=new Weapon({name:this.name+"_Weapon"},map);this.weapon.shape.collisionGroup=this.physics.CGROUP_NINJA;this.weapon.shape.collisionMask=this.physics.CMASK_NINJA;this.level.addItem(this);this.level.addItem(this.weapon);}
Ninja.prototype.onBeginContact=function(e)
{if(e.eq.normalA[1]>0.5)
{this.contact_B=e.other;}
if(Math.abs(e.eq.normalA[0])>0.5)
{this.contact_L_R=e.other;}
if(this.state!=this.HIT)
{if(e.other.type==MAP_ITEM_TYPE.WEAPON_1)
{if(e.other.lethal)
{this.hitDirection=this.getDirection(this.body.position,e.other.body.position);this.state=this.HIT_START;}}}}
Ninja.prototype.updateWeapon=function()
{this.display.body.timeline.current=Math.abs(!this.display.arm_1_weapon.visible);this.weapon.lethal=this.display.lethal_weapon.visible;var pos=[this.display.x+this.display.arm_1_weapon.x*this.direction,this.display.y+this.display.arm_1_weapon.y]
var angle;var shapePos;var shapeAngle;if(this.direction>0)
{angle=this.display.arm_1_weapon.skew.y;shapePos=[140,40];shapeAngle=-0.3;}
else
{angle=-this.display.arm_1_weapon.skew.y;shapePos=[-140,40];shapeAngle=0.3;};this.weapon.body.position=pos;this.weapon.body.angle=angle;this.weapon.shape.position=shapePos;this.weapon.shape.angle=shapeAngle;}
Ninja.prototype.setWaypointState=function(data)
{var execute=true;if(data.hasOwnProperty("isAttacking"))
{if(data.isAttacking!=this.isAttacking)execute=false;}
if(execute)
{this.state=this[data.state];this.direction=data.direction;if(data.hasOwnProperty("jumpSpeed"))
{this.jumpSpeed=data.jumpSpeed;}
else
{this.jumpSpeed=-100;}
if(data.hasOwnProperty("setTarget"))
{if(data.setTarget==null)
{this.targets=[];this.currentTarget=null;}}}}
function Target(pos)
{var cnt=0;this.NONE=cnt++;this.DEAD=cnt++;this.state=this.NONE;this.body={position:pos}}
function Weapon(display,map)
{this.id=0;this.type=MAP_ITEM_TYPE.WEAPON_1;this.name=display.name;this.display=display;this.physics=map.level.physics;this.enabled=true;this.update=false;this.animation=false;this.begincontact=false;this.endcontact=false;this.body=new p2.Body
({type:p2.Body.KINEMATIC,mass:0,damping:0,angularDamping:0,collisionResponse:false});this.shape=new p2.Box
({width:280,height:40,material:this.physics.materials["Default"],collisionResponse:false});this.body.addShape(this.shape);this.body.name=this.name;this.body.item=this;}