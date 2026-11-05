function PhysicsEngine(level)
{this.level=level;this.begincontacts=[];this.endcontacts=[];this.CGROUP_STATIC=Math.pow(2,0);this.CGROUP_DYNAMIC=Math.pow(2,1);this.CGROUP_PLAYER=Math.pow(2,2);this.CGROUP_NINJA=Math.pow(2,3);this.CGROUP_ENEMY=Math.pow(2,4);this.CGROUP_SENSOR=Math.pow(2,5);this.CGROUP_WAYPOINT=Math.pow(2,6);this.CGROUP_JETPACK=Math.pow(2,7);this.CMASK_STATIC=this.CGROUP_DYNAMIC|this.CGROUP_PLAYER|this.CGROUP_NINJA|this.CGROUP_ENEMY;this.CMASK_DYNAMIC=this.CGROUP_STATIC|this.CGROUP_DYNAMIC|this.CGROUP_PLAYER|this.CGROUP_NINJA|this.CGROUP_ENEMY;this.CMASK_PLAYER=this.CGROUP_STATIC|this.CGROUP_DYNAMIC|this.CGROUP_ENEMY|this.CGROUP_JETPACK|this.CGROUP_SENSOR;this.CMASK_NINJA=this.CGROUP_STATIC|this.CGROUP_DYNAMIC|this.CGROUP_ENEMY|this.CGROUP_JETPACK|this.CGROUP_WAYPOINT;this.CMASK_ENEMY=this.CGROUP_STATIC|this.CGROUP_DYNAMIC|this.CGROUP_PLAYER|this.CGROUP_NINJA;this.CMASK_JETPACK=this.CGROUP_JETPACK|this.CGROUP_PLAYER|this.CGROUP_NINJA;this.CMASK_SENSOR=this.CGROUP_PLAYER;this.CMASK_WAYPOINT=this.CGROUP_NINJA;this.CMASK_DYNAMIC_ONLY=this.CGROUP_DYNAMIC|this.CGROUP_PLAYER;this.world=new p2.World({gravity:[0,10],islandSplit:false});this.fixedTimeStep=1/15;this.fixedTimeStepLive=0;this.maxSubSteps=4;this.world.defaultContactMaterial.friction=0.8;this.materials=[];this.materials["Player"]=new p2.Material();this.materials["Default"]=new p2.Material();}
PhysicsEngine.prototype.addEventListener=function(type,callback)
{this.world.on(type,callback);}
PhysicsEngine.prototype.removeEventListener=function(type,callback)
{this.world.off(type,callback);}
PhysicsEngine.prototype.onUpdate=function(time,deltaTime)
{this.fixedTimeStepLive=0.004167*deltaTime;this.world.step(this.fixedTimeStep,1,this.maxSubSteps);}
PhysicsEngine.prototype.destroy=function()
{this.world.clear();if(this.app)this.app=null;if(this.game)this.game=null;}
PhysicsEngine.prototype.createBodyFromDisplay=function(display)
{var rot=display.skew.y;display.skew.x=display.skew.y=0;display.rotation=rot;var pos=display.getGlobalPosition();var body=new p2.Body
({position:[pos.x,pos.y],angle:rot});body.name=display.name;return body;}
PhysicsEngine.prototype.createLocalBody=function(display)
{var pos=display.getGlobalPosition();var body=new p2.Body
({position:[pos.x,pos.y]});return body;}
PhysicsEngine.prototype.createShapeFromDisplay=function(display)
{var rot=display.skew.y;display.skew.x=display.skew.y=0;display.rotation=rot;var size={w:display.width*display.parent.scale.x,h:display.height*display.parent.scale.y}
var shape;if(display.name.indexOf("Quad")!=-1)
{shape=new p2.Box
({width:size.w,height:size.h});}
else if(display.name.indexOf("Circle")!=-1)
{shape=new p2.Circle
({radius:size.w*0.5});}
var pos=[display.x+display.width*0.5*Math.cos(rot)-display.height*0.5*Math.sin(rot),display.y+display.width*0.5*Math.sin(rot)+display.height*0.5*Math.cos(rot)];pos[0]*=display.parent.scale.x;pos[1]*=display.parent.scale.y;shape.pos=pos;shape.rot=rot;shape.name=display.name;shape.material=this.materials["Default"];return shape;}
PhysicsEngine.prototype.createRevoluteConstraint=function(body,anchor)
{var constraint=new p2.RevoluteConstraint(body,anchor,{worldPivot:anchor.position.slice(),collideConnected:false});return constraint;}
PhysicsEngine.prototype.setCollisionMask=function(body,CGROUP,CMASK)
{for(var i=0;i<body.shapes.length;i++)
{body.shapes[i].collisionGroup=CGROUP;body.shapes[i].collisionMask=CMASK;}}
PhysicsEngine.prototype.setCollisionResponse=function(body,bool)
{for(var i=0;i<body.shapes.length;i++)
{body.shapes[i].collisionResponse=bool;}}
PhysicsEngine.prototype.setMaterial=function(body,mat)
{for(var i=0;i<body.shapes.length;i++)
{body.shapes[i].material=mat;}}
PhysicsEngine.prototype.addContactMaterial=function(mat)
{this.world.addContactMaterial(mat);}