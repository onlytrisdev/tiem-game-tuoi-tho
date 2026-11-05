var MAP_ITEM_TYPE={};MAP_ITEM_TYPE.cnt=0;MAP_ITEM_TYPE.DISPLAY=MAP_ITEM_TYPE.cnt++;MAP_ITEM_TYPE.STATIC=MAP_ITEM_TYPE.cnt++;MAP_ITEM_TYPE.DYNAMIC=MAP_ITEM_TYPE.cnt++;MAP_ITEM_TYPE.DYNAMIC_BY_SENSOR=MAP_ITEM_TYPE.cnt++;MAP_ITEM_TYPE.PASS_FROM_BOTTOM=MAP_ITEM_TYPE.cnt++;MAP_ITEM_TYPE.KINEMATIC=MAP_ITEM_TYPE.cnt++;MAP_ITEM_TYPE.SENSOR=MAP_ITEM_TYPE.cnt++;MAP_ITEM_TYPE.ENEMY=MAP_ITEM_TYPE.cnt++;MAP_ITEM_TYPE.NINJA=MAP_ITEM_TYPE.cnt++;MAP_ITEM_TYPE.WEAPON_1=MAP_ITEM_TYPE.cnt++;MAP_ITEM_TYPE.WEAPON_PLAYER=MAP_ITEM_TYPE.cnt++;MAP_ITEM_TYPE.LETHAL=MAP_ITEM_TYPE.cnt++;MAP_ITEM_TYPE.SLIPPERY=MAP_ITEM_TYPE.cnt++;MAP_ITEM_TYPE.DEADZONE=MAP_ITEM_TYPE.cnt++;MAP_ITEM_TYPE.INSTANT_DEATH=MAP_ITEM_TYPE.cnt++;MAP_ITEM_TYPE.WAYPOINT=MAP_ITEM_TYPE.cnt++;MAP_ITEM_TYPE.PUSHABLE=MAP_ITEM_TYPE.cnt++;MAP_ITEM_TYPE.PLAYER=MAP_ITEM_TYPE.cnt++;function MapItem(display,map)
{this.id=0;this.type=MAP_ITEM_TYPE.DISPLAY;this.name=display.name;this.display=display;this.level=map.level;this.physics=map.level.physics;this.audio=map.level.game.audio;this.enabled=true;this.update=false;this.animation=false;this.begincontact=false;this.endcontact=false;this.audiosource=false;}
Animator.prototype=Object.create(MapItem.prototype);Animator.prototype.constructor=Animator;function Animator(display,map,data)
{MapItem.call(this,display,map);this.update=true;this.data=data;this.max={x:Math.abs(this.display.x+this.data.maxX),y:Math.abs(this.display.y+this.data.maxY)};this.level.addItem(this);}
Animator.prototype.onUpdate=function(time,deltaTime)
{this.display.x+=this.data.x*deltaTime;this.display.y+=this.data.y*deltaTime;if(Math.abs(this.display.x)>this.max.x)this.display.x-=this.data.maxX;if(Math.abs(this.display.y)>this.max.y)this.display.y-=this.data.maxY;}
AudioSource.prototype=Object.create(MapItem.prototype);AudioSource.prototype.constructor=AudioSource;function AudioSource(display,map,data)
{MapItem.call(this,display,map);this.audiosource=true;this.audiodata={id:data.id,x:data.x,y:data.y,min:data.min*data.min,max:data.max*data.max};this.audiodata.invDelta=1/(this.audiodata.max-this.audiodata.min);this.level.addItem(this);}
AudioSource.prototype.updateAudio=function(pos)
{var dx=this.audiodata.x-pos[0];var dy=this.audiodata.y-pos[1];var d=dx*dx+dy*dy;var vol=0;if(d<this.audiodata.max)
{vol=Math.max(d,this.audiodata.min)-this.audiodata.min;vol=1-vol*this.audiodata.invDelta;}
this.audio.setAudioSourceVolume(this.audiodata.id,vol);}
Physical_MapItem.prototype=Object.create(MapItem.prototype);Physical_MapItem.prototype.constructor=Physical_MapItem;function Physical_MapItem(display,map)
{MapItem.call(this,display,map);this.body=this.physics.createBodyFromDisplay(this.display);var colliders=AppUtils.getArrayItemsByName(this.display.children,"Collider");var shape;var i;for(i=0;i<colliders.length;i++)
{shape=this.physics.createShapeFromDisplay(colliders[i]);this.body.addShape(shape);shape.position=shape.pos.slice();shape.angle=shape.rot.valueOf();delete shape.pos;delete shape.rot;if(!this.level.debug)
{this.display.removeChild(colliders[i]);colliders[i]=null;}}
this.body.name=this.name;this.body.item=this;}
Static.prototype=Object.create(Physical_MapItem.prototype);Static.prototype.constructor=Static;function Static(display,map)
{Physical_MapItem.call(this,display,map);this.type=MAP_ITEM_TYPE.STATIC;this.body.type=p2.Body.STATIC;this.body.mass=0;this.body.damping=0;this.body.angularDamping=0;this.body.gravityScale=0;this.body.collisionResponse=true;this.body.updateMassProperties();this.physics.setCollisionMask(this.body,this.physics.CGROUP_STATIC,this.physics.CMASK_STATIC);this.level.addItem(this);}
SlipperyGround.prototype=Object.create(Physical_MapItem.prototype);SlipperyGround.prototype.constructor=SlipperyGround;function SlipperyGround(display,map)
{Physical_MapItem.call(this,display,map);this.type=MAP_ITEM_TYPE.SLIPPERY;this.body.type=p2.Body.STATIC;this.body.mass=0;this.body.damping=0;this.body.angularDamping=0;this.body.gravityScale=0;this.body.collisionResponse=true;this.body.updateMassProperties();this.physics.setCollisionMask(this.body,this.physics.CGROUP_STATIC,this.physics.CMASK_STATIC);if(this.physics.materials.hasOwnProperty("Slippery_Player"))
{var contactMatPlayer=this.physics.materials["Slippery_Player"];var contactMatWorld=this.physics.materials["Slippery_World"];var mat=contactMatPlayer.materialA;}
else
{var mat=new p2.Material();var contactMatPlayer=new p2.ContactMaterial(mat,this.physics.materials["Player"],{friction:0,restitution:0});var contactMatWorld=new p2.ContactMaterial(mat,this.physics.materials["Default"],{friction:0,restitution:0});this.physics.materials["Slippery_Player"]=contactMatPlayer;this.physics.materials["Slippery_World"]=contactMatWorld;this.physics.addContactMaterial(contactMatPlayer);this.physics.addContactMaterial(contactMatWorld);}
this.physics.setMaterial(this.body,mat);this.level.addItem(this);}
PassFromBottom.prototype=Object.create(Physical_MapItem.prototype);PassFromBottom.prototype.constructor=PassFromBottom;function PassFromBottom(display,map)
{Physical_MapItem.call(this,display,map);this.type=MAP_ITEM_TYPE.PASS_FROM_BOTTOM;this.body.type=p2.Body.STATIC;this.body.mass=0;this.body.damping=0;this.body.angularDamping=0;this.body.gravityScale=0;this.body.collisionResponse=true;this.body.updateMassProperties();this.physics.setCollisionMask(this.body,this.physics.CGROUP_STATIC,this.physics.CMASK_STATIC);this.level.addItem(this);}
Sensor.prototype=Object.create(Physical_MapItem.prototype);Sensor.prototype.constructor=Sensor;function Sensor(display,map,owner)
{Physical_MapItem.call(this,display,map);this.type=MAP_ITEM_TYPE.SENSOR;this.begincontact=true;this.owner=owner;this.body.type=p2.Body.KINEMATIC;this.body.mass=0;this.body.damping=0;this.body.angularDamping=0;this.body.gravityScale=0;this.body.collisionResponse=false;this.body.updateMassProperties();this.physics.setCollisionMask(this.body,this.physics.CGROUP_SENSOR,this.physics.CMASK_SENSOR);this.physics.setCollisionResponse(this.body,false);this.level.addItem(this);}
Sensor.prototype.onBeginContact=function(e)
{this.enabled=false;this.level.removeItem(this);this.owner.onBeginContact.call(this.owner,e);}
Waypoint.prototype=Object.create(Physical_MapItem.prototype);Waypoint.prototype.constructor=Waypoint;function Waypoint(display,map,jsonData)
{display.scale.x=display.scale.y=display.scale.x*0.1;Physical_MapItem.call(this,display,map);this.type=MAP_ITEM_TYPE.WAYPOINT;this.begincontact=true;var tmp=AppUtils.getArrayItemsByName(jsonData.library,display.name,0);var script=tmp[0].scripts[0].c;script=script.replace(/'/g,"\"");script=JSON.parse(script)
this.data={};this.data.direction=script.direction;this.data.state=script.state;this.data.jumpSpeed=script.jumpSpeed;if(script.hasOwnProperty("isAttacking"))this.data.isAttacking=script.isAttacking;if(script.hasOwnProperty("setTarget"))this.data.setTarget=script.setTarget;this.body.type=p2.Body.KINEMATIC;this.body.mass=0;this.body.damping=0;this.body.angularDamping=0;this.body.gravityScale=0;this.body.collisionResponse=false;this.body.updateMassProperties();this.physics.setCollisionMask(this.body,this.physics.CGROUP_WAYPOINT,this.physics.CMASK_WAYPOINT);this.physics.setCollisionResponse(this.body,false);this.level.addItem(this);}
Waypoint.prototype.onBeginContact=function(e)
{e.eq.enabled=false;if(e.other.direction==this.data.direction)
{e.other.setWaypointState(this.data)}}
Deadzone.prototype=Object.create(Physical_MapItem.prototype);Deadzone.prototype.constructor=Deadzone;function Deadzone(display,map)
{Physical_MapItem.call(this,display,map);this.type=MAP_ITEM_TYPE.DEADZONE;this.body.type=p2.Body.KINEMATIC;this.body.mass=0;this.body.damping=0;this.body.angularDamping=0;this.body.gravityScale=0;this.body.collisionResponse=false;this.body.updateMassProperties();this.physics.setCollisionMask(this.body,this.physics.CGROUP_SENSOR,this.physics.CMASK_SENSOR);this.physics.setCollisionResponse(this.body,false);this.level.addItem(this);}
InstantDeath.prototype=Object.create(Physical_MapItem.prototype);InstantDeath.prototype.constructor=InstantDeath;function InstantDeath(display,map)
{Physical_MapItem.call(this,display,map);this.type=MAP_ITEM_TYPE.INSTANT_DEATH;this.body.type=p2.Body.STATIC;this.body.mass=0;this.body.damping=1;this.body.angularDamping=1;this.body.gravityScale=0;this.body.collisionResponse=true;this.body.updateMassProperties();this.physics.setCollisionMask(this.body,this.physics.CGROUP_STATIC,this.physics.CMASK_STATIC);this.physics.setCollisionResponse(this.body,false);this.level.addItem(this);}
Dynamic.prototype=Object.create(Physical_MapItem.prototype);Dynamic.prototype.constructor=Dynamic;function Dynamic(display,map)
{Physical_MapItem.call(this,display,map);this.type=MAP_ITEM_TYPE.DYNAMIC;this.update=true;this.body.type=p2.Body.DYNAMIC;this.body.mass=1;this.body.damping=0.1;this.body.angularDamping=0.1;this.body.gravityScale=1;this.body.collisionResponse=true;this.body.updateMassProperties();this.physics.setCollisionMask(this.body,this.physics.CGROUP_DYNAMIC,this.physics.CMASK_DYNAMIC);this.level.addItem(this);}
Dynamic.prototype.onUpdate=function()
{this.display.x=this.body.position[0];this.display.y=this.body.position[1];this.display.rotation=this.body.angle;}
Pushable.prototype=Object.create(Physical_MapItem.prototype);Pushable.prototype.constructor=Pushable;function Pushable(display,map)
{Physical_MapItem.call(this,display,map);this.type=MAP_ITEM_TYPE.PUSHABLE;this.update=true;this.audioPlaying=false;this.body.type=p2.Body.DYNAMIC;this.body.mass=20;this.body.damping=0.1;this.body.angularDamping=0.1;this.body.gravityScale=1;this.body.collisionResponse=true;this.body.updateMassProperties();this.physics.setCollisionMask(this.body,this.physics.CGROUP_DYNAMIC,this.physics.CMASK_DYNAMIC);this.audio.create("RollingStone.ogg");this.level.addItem(this);}
Pushable.prototype.onUpdate=function()
{this.display.x=this.body.position[0];this.display.y=this.body.position[1];this.display.rotation=this.body.angle;if(this.audioPlaying)
{if(Math.abs(this.body.velocity[0])<2)
{this.audioPlaying=false;this.audio.stop("RollingStone.ogg");}}
else
{if(Math.abs(this.body.velocity[0])>2)
{this.audioPlaying=true;this.audio.play("RollingStone.ogg",true);}}}
Dynamic_Suspended.prototype=Object.create(Physical_MapItem.prototype);Dynamic_Suspended.prototype.constructor=Dynamic_Suspended;function Dynamic_Suspended(display,map,owner)
{Physical_MapItem.call(this,display,map);this.type=MAP_ITEM_TYPE.STATIC;this.update=true;this.begincontact=true;this.owner=owner;this.contactCount=0;this.body.type=p2.Body.STATIC;this.body.mass=0;this.body.damping=0;this.body.angularDamping=0;this.body.gravityScale=0;this.body.collisionResponse=true;this.body.updateMassProperties();this.physics.setCollisionMask(this.body,this.physics.CGROUP_DYNAMIC,this.physics.CMASK_DYNAMIC);this.level.addItem(this);}
Dynamic_Suspended.prototype.onUpdate=function()
{this.display.x=this.body.position[0];this.display.y=this.body.position[1];this.display.rotation=this.body.angle;}
Dynamic_Suspended.prototype.onBeginContact=function(e)
{this.contactCount++;if(e.other.type==MAP_ITEM_TYPE.DEADZONE)
{this.enabled=false;this.level.removeItem(this);this.level.physics.world.removeBody(this);}
if(this.owner)this.owner.onBeginContact(e);}
Dynamic_Suspended.prototype.reset=function()
{if(this.enabled)
{this.contactCount=0;}}
Dynamic_Log.prototype=Object.create(Physical_MapItem.prototype);Dynamic_Log.prototype.constructor=Dynamic_Log;function Dynamic_Log(display,map)
{Physical_MapItem.call(this,display,map);this.type=MAP_ITEM_TYPE.DYNAMIC;this.update=true;this.lastAngle=0;this.body.type=p2.Body.DYNAMIC;this.body.mass=2;this.body.damping=0.1;this.body.angularDamping=0.1;this.body.gravityScale=1;this.body.collisionResponse=true;this.body.updateMassProperties();this.physics.setCollisionMask(this.body,this.physics.CGROUP_DYNAMIC,this.physics.CMASK_DYNAMIC);this.audio.create("Wood_Creak.ogg");this.level.addItem(this);}
Dynamic_Log.prototype.onUpdate=function()
{this.display.x=this.body.position[0];this.display.y=this.body.position[1];this.display.rotation=this.body.angle;if(Math.abs(this.body.angle-this.lastAngle)>0.1)
{this.audio.play("Wood_Creak.ogg");this.lastAngle=this.body.angle;}}
Dynamic_Branch.prototype=Object.create(Physical_MapItem.prototype);Dynamic_Branch.prototype.constructor=Dynamic_Branch;function Dynamic_Branch(display,map)
{Physical_MapItem.call(this,display,map);this.type=MAP_ITEM_TYPE.PASS_FROM_BOTTOM;this.update=true;this.begincontact=true;this.lastAngVel=0;this.body.type=p2.Body.DYNAMIC;this.body.mass=2;this.body.damping=0.1;this.body.angularDamping=0.1;this.body.gravityScale=1;this.body.collisionResponse=true;this.body.updateMassProperties();this.physics.setCollisionMask(this.body,this.physics.CGROUP_DYNAMIC,this.physics.CMASK_DYNAMIC);this.anchor=this.physics.createBodyFromDisplay(this.display.Anchor);this.anchor.type=p2.Body.STATIC;this.constraint=this.physics.createRevoluteConstraint(this.body,this.anchor);this.spring=new p2.RotationalSpring(this.body,this.anchor,{stiffness:200000,damping:1});if(!this.level.debug)
{this.display.removeChild(this.display.Anchor);}
this.audio.create("Wood_Creak.ogg");this.level.addItem(this);}
Dynamic_Branch.prototype.onUpdate=function()
{this.display.x=this.body.position[0];this.display.y=this.body.position[1];this.display.rotation=this.body.angle;}
Dynamic_Branch.prototype.onBeginContact=function(e)
{if(e.other.type==MAP_ITEM_TYPE.PLAYER)
{this.body.angularVelocity=e.other.body.velocity[1]*0.0005;this.audio.play("Wood_Creak.ogg");}}
Underwood.prototype=Object.create(Physical_MapItem.prototype);Underwood.prototype.constructor=Underwood;function Underwood(display,map)
{Physical_MapItem.call(this,display,map);this.type=MAP_ITEM_TYPE.DYNAMIC;this.update=true;this.begincontact=true;if(this.name.indexOf("Sword")!=-1)
{this.isDestroyedBy="weapon";}
else
{this.isDestroyedBy="spinjitzu";}
this.body.type=p2.Body.DYNAMIC;this.body.mass=2;this.body.damping=0.1;this.body.angularDamping=0.1;this.body.gravityScale=1;this.body.collisionResponse=true;this.body.updateMassProperties();this.physics.setCollisionMask(this.body,this.physics.CGROUP_DYNAMIC,this.physics.CMASK_DYNAMIC);this.anchor=this.physics.createLocalBody(this.display);this.anchor.type=p2.Body.STATIC;this.constraint=this.physics.createRevoluteConstraint(this.body,this.anchor);this.spring=new p2.RotationalSpring(this.body,this.anchor,{stiffness:200000,damping:1});this.audio.create("Underwood.ogg");this.level.addItem(this);}
Underwood.prototype.onUpdate=function()
{this.display.x=this.body.position[0];this.display.y=this.body.position[1];this.display.rotation=this.body.angle;}
Underwood.prototype.onBeginContact=function(e)
{if(e.other.type==MAP_ITEM_TYPE.PLAYER)
{this.audio.play("Underwood.ogg");if(e.other.state==e.other.SPINJITZU)
{this.disable();}}
else if(e.other.type==MAP_ITEM_TYPE.WEAPON_PLAYER)
{if(e.other.lethal)
{if(this.isDestroyedBy=="weapon")
{this.disable();}}}}
Underwood.prototype.disable=function()
{this.audio.play("Underwood.ogg");this.level.player.increaseSpinjitzuPower(1);this.level.removeItem(this);this.display.gotoAndPlay("DESTROY");this.enabled=false;}
ArcadeMachine.prototype=Object.create(MapItem.prototype);ArcadeMachine.prototype.constructor=ArcadeMachine;function ArcadeMachine(display,map)
{MapItem.call(this,display,map);this.display.removeChild(this.display.children[0]);this.arcade=FT.create(this.level.app.loader.getResult("ArcadeMachine.json"),this.level.app.loader.getResult("ArcadeMachine.png"));this.anim=this.arcade._Anim;this.display.addChild(this.arcade);this.savepointId=parseInt(display.instanceName.substr(display.instanceName.length-1));this.outer=new Sensor(this.arcade.Sensor_Outer,map,this);this.inner=new Sensor(this.arcade.Sensor_Inner,map,this)
this.audio.create("Create_Savepoint.ogg");this.level.addItem(this);}
ArcadeMachine.prototype.onBeginContact=function(e)
{if(e.self==this.outer)
{this.anim.gotoAndPlay("ON");this.audio.play("Startup_Screen.ogg");}
else if(e.self==this.inner)
{this.enabled=false;this.anim.gotoAndPlay("SAVE");this.audio.play("Create_Savepoint.ogg");this.level.createSavepoint(this.savepointId);}}
ArcadeMachine.prototype.reset=function()
{if(this.enabled)
{this.anim.enabled=true;this.anim.gotoAndStop(0);}
else
{this.anim.enabled=true;this.anim.gotoAndPlay("SAVE");}}
ArcadeMachine.prototype.destroy=function()
{FT.remove(this.arcade);}
Rockfall.prototype=Object.create(MapItem.prototype);Rockfall.prototype.constructor=Rockfall;function Rockfall(display,map)
{MapItem.call(this,display,map);this.type=MAP_ITEM_TYPE.DISPLAY;this.startTime=0;this.children=this.display.children.slice();var i;var child;for(i=0;i<this.children.length;i++)
{child=this.children[i];if(child.name.indexOf("Anim")==-1)
{child.x+=this.display.x;child.y+=this.display.y;child.setParent(this.display.parent);}}
var item;this.items=[];for(i=0;i<this.children.length;i++)
{child=this.children[i];if(child.name.indexOf("Sensor")!=-1||child.name.indexOf("Anim")!=-1)continue;item=new Dynamic_Suspended(child,map,this);item.type=MAP_ITEM_TYPE.STATIC;this.items.push(item);}
this.sensor=new Sensor(this.display.Sensor_Outer,map,this);this.anim=AppUtils.getArrayItemsByName(this.children,"Anim")[0];this.level.addItem(this);}
Rockfall.prototype.onBeginContact=function(e)
{if(this.startTime==0)
{this.startTime=Date.now();if(this.anim)this.anim.gotoAndPlay(1);var i;var item;for(i=0;i<this.items.length;i++)
{item=this.items[i];item.type=MAP_ITEM_TYPE.LETHAL;item.body.type=p2.Body.DYNAMIC;item.body.mass=item.display.width*0.1;item.body.damping=0.1;item.body.angularDamping=0.1;item.body.gravityScale=1;item.body.collisionResponse=true;item.body.updateMassProperties();item.body.angularVelocity=Math.random()*0.1-0.05;item.body.velocity[1]=Math.random()*10-5;}}
var deltaTime=Date.now()-this.startTime;if(deltaTime>100)
{var i;var item;var endCount=0;for(i=0;i<this.items.length;i++)
{item=this.items[i];var vel=Math.abs(item.body.velocity[0])+Math.abs(item.body.velocity[1]);if(vel<5)
{item.type=MAP_ITEM_TYPE.DYNAMIC;this.level.removeItemBeginContact(item);endCount++;}}
if(endCount==this.items.length)
{this.enabled=false;}}}
Rockfall.prototype.reset=function()
{if(this.enabled)
{this.startTime=0;if(this.anim)this.anim.gotoAndStop(0);}
else
{this.startTime=Number.MAX_SAFE_INTEGER;if(this.anim)this.anim.gotoAndStop(this.anim.timeline.total);}}
Sensor_Trap.prototype=Object.create(MapItem.prototype);Sensor_Trap.prototype.constructor=Sensor_Trap;function Sensor_Trap(display,map)
{MapItem.call(this,display,map);this.type=MAP_ITEM_TYPE.DISPLAY;this.contactStart=0;this.disableTime=5000;this.children=this.display.children.slice();var i;for(i=0;i<this.children.length;i++)
{this.children[i].x+=this.display.x;this.children[i].y+=this.display.y;this.children[i].setParent(this.display.parent);}
var child;var item;this.items=[];for(i=0;i<this.children.length;i++)
{child=this.children[i];if(child.name.indexOf("Sensor")!=-1||child.name.indexOf("Anim")!=-1)continue;item=new Dynamic_Suspended(child,map);this.items.push(item);}
this.sensor=new Sensor(this.display.Sensor_Outer,map,this);this.anim=AppUtils.getArrayItemsByName(this.children,"Anim")[0];}
Sensor_Trap.prototype.onBeginContact=function(e)
{if(e.self==this.sensor)
{this.contactStart=Date.now();var i;var item;if(this.anim)this.anim.gotoAndPlay(1);for(i=0;i<this.items.length;i++)
{item=this.items[i];item.body.type=p2.Body.DYNAMIC;item.body.mass=10;item.body.damping=0.1;item.body.angularDamping=0.1;item.body.gravityScale=1;item.body.collisionResponse=false;item.body.updateMassProperties();item.body.angularVelocity=Math.random()*0.1-0.05;item.body.velocity[1]=Math.random()*10-5;}}
if(Date.now()-this.contactStart>this.disableTime)
{for(i=0;i<this.items.length;i++)
{item.enabled=false;this.level.removeItem(item);}
this.sensor.enabled=false;}}
DeadlyBoulder.prototype=Object.create(MapItem.prototype);DeadlyBoulder.prototype.constructor=DeadlyBoulder;function DeadlyBoulder(display,map,jsonData)
{MapItem.call(this,display,map);this.type=MAP_ITEM_TYPE.DISPLAY;this.update=true;var boulderDisplay=this.display.Deadly_Boulder;boulderDisplay.x+=this.display.x;boulderDisplay.y+=this.display.y;boulderDisplay.setParent(this.display.parent);this.boulder=new Dynamic_Suspended(boulderDisplay,map,this);this.boulder.type=MAP_ITEM_TYPE.LETHAL;this.boulder.display.AABB=[-500,-500,500,500];this.sensor=new Sensor(this.display.Sensor,map,this);var waypointDisplay=this.display.Deadly_Boulder_Waypoint;this.waypointsOffset=[waypointDisplay.x,waypointDisplay.y];waypointDisplay.scale.x=waypointDisplay.scale.y=waypointDisplay.scale.x*10;waypointDisplay.x+=this.display.x;waypointDisplay.y+=this.display.y;this.waypoint=new Waypoint(waypointDisplay,map,jsonData);this.level.addItem(this);}
DeadlyBoulder.prototype.onBeginContact=function(e)
{this.boulder.body.type=p2.Body.DYNAMIC;this.boulder.body.mass=2;this.boulder.body.damping=0.1;this.boulder.body.angularDamping=0.1;this.boulder.body.gravityScale=1;this.boulder.body.collisionResponse=true;this.boulder.body.updateMassProperties();}
DeadlyBoulder.prototype.onUpdate=function()
{this.waypoint.body.position[0]=this.boulder.body.position[0]+this.waypointsOffset[0];this.waypoint.body.position[1]=this.boulder.body.position[1]+this.waypointsOffset[1];this.display.x=this.boulder.body.position[0];this.display.y=this.boulder.body.position[1];}
Stonefall.prototype=Object.create(MapItem.prototype);Stonefall.prototype.constructor=Stonefall;function Stonefall(display,map)
{MapItem.call(this,display,map);this.type=MAP_ITEM_TYPE.DISPLAY;this.itemCount=0;this.children=this.display.children.slice();var i;var child;for(i=0;i<this.children.length;i++)
{child=this.children[i];if(child.name.indexOf("Anim")==-1)
{child.x+=this.display.x;child.y+=this.display.y;child.setParent(this.display.parent);}}
var item;this.items=[];for(i=0;i<this.children.length;i++)
{child=this.children[i];item=new Dynamic_Suspended(child,map,this);this.items.push(item);}
this.level.addItem(this);}
Stonefall.prototype.onBeginContact=function(e)
{if(e.other.type!=MAP_ITEM_TYPE.NINJA&&e.other.type!=MAP_ITEM_TYPE.PLAYER)return;var item=e.self;if(item.type==MAP_ITEM_TYPE.DYNAMIC)return;item.type=MAP_ITEM_TYPE.DYNAMIC;item.body.type=p2.Body.DYNAMIC;item.body.mass=10;item.body.damping=0.1;item.body.angularDamping=0.1;item.body.gravityScale=1;item.body.collisionResponse=false;item.body.updateMassProperties();this.level.removeItemBeginContact(item);this.itemCount++;if(this.itemCount>=this.items.length)
{this.enabled=false;this.level.removeItem(this);}}
Stonefall.prototype.reset=function()
{}