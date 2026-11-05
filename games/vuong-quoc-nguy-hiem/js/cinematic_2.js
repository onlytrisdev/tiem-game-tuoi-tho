function Cinematic(level,data)
{this.app=level.app;this.game=level.game;this.level=level;this.input=level.input;this.player=level.player;this.camera=level.camera;this.audio=this.game.audio;this.timeline=gsap.timeline({paused:true});this.cutscenes=[];this.updatables={items:[],add:this.updatables_add.bind(this),remove:this.updatables_remove.bind(this)};this.display=new PIXI.Container();this.cutscenes.push(new Cutscene(this,{id:1,name:"01 - Enter",position:[-1000,500],size:[1000,1000],startCallback:this.Cutscene_01_Start}));this.cutscenes.push(new Cutscene(this,{id:2,name:"02 - The Rats",position:[15500,-2700],size:[1000,1000],startCallback:this.Cutscene_02_Start}));this.cutscenes.push(new Cutscene(this,{id:3,name:"03 - The Path Collapses",position:[20000,-2700],size:[1000,1000],startCallback:this.Cutscene_03_Start}));this.cutscenes.push(new Cutscene(this,{id:4,name:"04 - The Underground",position:[22400,-400],size:[2000,1000],startCallback:this.Cutscene_04_Start}));this.cutscenes.push(new Cutscene(this,{id:5,name:"05 - Another Rat",position:[33500,-1400],size:[2000,1300],startCallback:this.Cutscene_05_Start}));this.cutscenes.push(new Cutscene(this,{id:6,name:"06 - Reunion With Cole",position:[40000,-2500],size:[1000,1000],startCallback:this.Cutscene_06_Start}));this.cutscenes.push(new Cutscene(this,{id:7,name:"07 - Dead End",position:[44000,-2600],size:[1000,1000],startCallback:this.Cutscene_07_Start}));this.cutscenes.push(new Cutscene(this,{id:8,name:"08 - Stop The Red Visors",position:[52000,-4400],size:[1000,1000],startCallback:this.Cutscene_08_Start}));this.cutscenes.push(new Cutscene(this,{id:9,name:"09 - Level Exit",position:[53000,-4400],size:[500,800],startCallback:this.Cutscene_Level_Exit}));for(var i=0;i<this.cutscenes.length;i++)
{this.level.map.display._MG.addChild(this.cutscenes[i].display);}
this.cole=this.level.getItemByName("Ninja_Cole");this.kai=this.level.getItemByName("Ninja_Kai");this.richie=this.level.getItemByName("Enemy_Rat_Richie");this.hausner=this.level.getItemByName("Enemy_Rat_Hausner");this.rat_03=this.level.getItemByName("Enemy_Rat_03");this.rope_anim=this.level.getItemByName("Rope_Anim");this.jetpack_01=this.level.getItemByName("Enemy_Jetpack_01");this.jetpack_02=this.level.getItemByName("Enemy_Jetpack_02");this.jetpack_03=this.level.getItemByName("Enemy_Jetpack_03");this.cutscene_03_target_01=new Target([22500,-3800]);this.cutscene_03_target_02=new Target([23500,-4000]);this.cutscene_06_target_01=new Target([43800,-2600]);this.cutscene_07_target_01=new Target([53000,-4400]);this.rope_target=new Target([44180,-2600]);this.speech=new Speech(this,{json:this.app.loader.getResult("Speech.json"),img:this.app.loader.getResult("Speech.png")});this.speech.bubbles[0].target=this.player.display.head_2;this.speech.bubbles[1].target=this.cole.display.head_2;this.speech.bubbles[2].target=this.player.display.head_2;this.speech.bubbles[3].target=this.cole.display.head_2;this.speech.bubbles[4].target=this.player.display.head_2;this.speech.bubbles[5].target=this.cole.display.head_2;this.speech.bubbles[6].target=this.player.display.head_2;this.speech.bubbles[7].target=this.cole.display.head_2;this.speech.bubbles[8].target=this.player.display.head_2;this.speech.bubbles[9].target=this.cole.display.head_2;this.speech.bubbles[10].target=this.cole.display.head_2;this.speech.bubbles[11].target=this.cole.display.head_2;this.speech.bubbles[12].target=this.kai.display.head_2;this.speech.bubbles[13].target=this.cole.display.head_2;this.speech.bubbles[14].target=this.cole.display.head_2;this.speech.bubbles[15].target=this.kai.display.head_2;this.speech.bubbles[16].target=this.cole.display.head_2;this.speech.bubbles[17].target=this.kai.display.head_2;this.display.addChild(this.speech.display);this.audio.create("Music_Level_2.ogg");this.audio.create("Music_Battle.ogg");this.updatables.add(this.speech.onUpdate.bind(this.speech));}
Cinematic.prototype.startMusic=function()
{setTimeout(this.startMusicDelayed.bind(this),400);}
Cinematic.prototype.startMusicDelayed=function()
{this.audio.play("Music_Level_2.ogg",true);}
Cinematic.prototype.init=function()
{this.camera=this.level.camera;this.input.moveEnabled=this.input.jumpEnabled=this.input.actionEnabled=this.input.specialEnabled=true;this.player.setStateMachine({state:this.player.IDLE});if(this.game.currentSavepoint==0)
{this.camera.zoom=0.9;this.camera.offset={x:0.1,y:-0.1};this.camera.hardReset=true;}
this.level.hud.showEnergy();this.level.hud.showSpinjitzu();this.rat_03.setRoaming();}
Cinematic.prototype.Cutscene_01_Start=function()
{this.input.moveEnabled=this.input.jumpEnabled=this.input.actionEnabled=this.input.specialEnabled=false;this.input.move=true;this.input.speedRaw.x=this.input.speedMax.x;this.player.setStateMachine({state:this.player.RUN_START});this.cole.follow(this.player,{dist_Max:2000});this.timeline=gsap.timeline({paused:true});this.timeline.call(this.Cutscene_01_End.bind(this),null,2);this.timeline.play();this.updatables.add(this.Cutscene_01_Update);}
Cinematic.prototype.Cutscene_01_Update=function(time,deltaTime)
{this.input.speedRaw.x=this.input.speedMax.x;}
Cinematic.prototype.Cutscene_01_End=function(time,deltaTime)
{this.updatables.remove(this.Cutscene_01_Update);this.input.moveEnabled=this.input.jumpEnabled=this.input.actionEnabled=this.input.specialEnabled=true;this.input.move=false;this.input.speedRaw.x=0;this.timeline=new gsap.timeline({paused:true});this.timeline.call(this.speech.show,[0],0);this.timeline.call(this.speech.show,[1],3);this.timeline.play();this.player.setStateMachine({state:this.player.BRAKE});}
Cinematic.prototype.Cutscene_02_Start=function()
{this.richie.attack(this.player,{dist_Max:2000});this.hausner.attack(this.cole,{dist_Max:2000});this.cole.attack([this.richie,this.hausner],{dist_Max:2000});this.audio.stop("Music_Level_2.ogg");this.audio.play("Music_Battle.ogg",true);this.updatables.add(this.Cutscene_02_Update);}
Cinematic.prototype.Cutscene_02_Update=function(time,deltaTime)
{if(this.richie.state==this.richie.DEAD&&this.hausner.state==this.hausner.DEAD)
{this.Cutscene_02_B();}}
Cinematic.prototype.Cutscene_02_B=function()
{this.updatables.remove(this.Cutscene_02_Update);this.cole.follow(this.player);this.audio.setVolume("Music_Battle.ogg",0,1);this.audio.play("Music_Level_2.ogg",true);this.speech.show(0);this.updatables.add(this.Cutscene_02_B_Update);}
Cinematic.prototype.Cutscene_02_B_Update=function(time,deltaTime)
{if(this.cole.targetReached)
{this.Cutscene_02_C();}}
Cinematic.prototype.Cutscene_02_C=function()
{this.updatables.remove(this.Cutscene_02_B_Update);this.timeline=new gsap.timeline({paused:true});this.timeline.call(this.speech.show,[2],0);this.timeline.play();}
Cinematic.prototype.Cutscene_03_Start=function()
{this.input.moveEnabled=this.input.jumpEnabled=this.input.actionEnabled=this.input.specialEnabled=false;this.input.move=false;this.input.speedRaw.x=0;if(Math.abs(this.cole.body.position[0]-this.player.body.position[0])>5000)
{this.cole.beam([this.player.body.position[0]-700,this.player.body.position[1]-100]);}
this.cole.setNone();this.cole.setAnimation(this.cole.ANIM.POINT);this.speech.show(3);this.timeline=new gsap.timeline({paused:true});this.timeline.call(this.cole.follow,[this.cutscene_03_target_01,{dist_Max:10000}],2);this.timeline.to(this.camera,2,{ease:Quad.easeInOut,zoom:0.8},2);this.timeline.to(this.camera.offset,2,{ease:Quad.easeInOut,x:0.35,y:-0.3},2);this.timeline.call(this.Cutscene_03_B.bind(this),null,4.5);this.timeline.play();}
Cinematic.prototype.Cutscene_03_B=function()
{this.input.moveEnabled=this.input.jumpEnabled=this.input.actionEnabled=this.input.specialEnabled=true;this.speech.show(4);this.updatables.add(this.Cutscene_03_B_Update);}
Cinematic.prototype.Cutscene_03_B_Update=function()
{if(this.cole.targetReached)
{this.Cutscene_03_C();}}
Cinematic.prototype.Cutscene_03_C=function()
{this.updatables.remove(this.Cutscene_03_B_Update);this.timeline=new gsap.timeline({paused:true});this.timeline.call(this.player.setAnimation,[this.player.ANIM.LOOK_UP],0);this.timeline.call(this.cole.setAnimation,[this.cole.ANIM.TALK],0);this.timeline.call(this.speech.show,[5],0);this.timeline.call(this.speech.show,[6],3);this.timeline.call(this.cole.setAnimation,[this.cole.ANIM.TALK],6);this.timeline.call(this.speech.show,[7],6);this.timeline.call(this.cole.follow,[this.cutscene_03_target_02],9);this.timeline.to(this.camera,2,{ease:Quad.easeInOut,zoom:0.9},9);this.timeline.to(this.camera.offset,2,{ease:Quad.easeInOut,x:0.25,y:0.25},9);this.timeline.play();}
Cinematic.prototype.Cutscene_04_Start=function()
{this.timeline.kill();this.timeline=new gsap.timeline({paused:true});this.timeline.to(this.camera,2,{ease:Quad.easeInOut,zoom:0.9},0);this.timeline.to(this.camera.offset,2,{ease:Quad.easeInOut,x:0.1,y:0},0);this.timeline.play();}
Cinematic.prototype.Cutscene_05_Start=function()
{this.rat_03.attack(this.player,{dist_Max:1200});this.updatables.add(this.Cutscene_05_Update);}
Cinematic.prototype.Cutscene_05_Update=function()
{if(this.rat_03.state==this.rat_03.MOVE_TO_TARGET)
{this.Cutscene_05_B();}}
Cinematic.prototype.Cutscene_05_B=function()
{this.updatables.remove(this.Cutscene_05_Update);this.audio.play("Music_Battle.ogg",true);this.audio.stop("Music_Level_2.ogg");this.updatables.add(this.Cutscene_05_B_Update);}
Cinematic.prototype.Cutscene_05_B_Update=function()
{if(this.rat_03.state==this.rat_03.DIE)
{this.Cutscene_05_End();}}
Cinematic.prototype.Cutscene_05_End=function()
{this.updatables.remove(this.Cutscene_05_B_Update);this.audio.setVolume("Music_Battle.ogg",0,1);this.audio.play("Music_Level_2.ogg",true);}
Cinematic.prototype.Cutscene_06_Start=function()
{this.cole.beam([38270,-2700]);this.cole.follow(this.player,{dist_Max:20000,runSpeed:70});this.updatables.add(this.Cutscene_06_Update);}
Cinematic.prototype.Cutscene_06_Update=function()
{if(this.cole.targetReached)
{this.Cutscene_06_B();}}
Cinematic.prototype.Cutscene_06_B=function()
{this.updatables.remove(this.Cutscene_06_Update);this.input.moveEnabled=this.input.jumpEnabled=this.input.actionEnabled=this.input.specialEnabled=false;this.input.move=false;this.input.speedRaw.x=0;this.player.direction=this.cole.getDirection(this.player.body.position,this.cole.body.position);this.setJetpackPositions();this.jetpack_01.setRoaming({roamingDelta_Max:[20000,1000]});this.jetpack_02.setRoaming({roamingDelta_Max:[20000,1000]});this.jetpack_03.setRoaming({roamingDelta_Max:[20000,1000]});this.timeline=new gsap.timeline({paused:true});this.timeline.call(this.speech.show,[8],0);this.timeline.call(this.speech.show,[9],2);this.timeline.to(this.camera,2,{ease:Quad.easeInOut,zoom:0.7},2);this.timeline.to(this.camera.offset,2,{ease:Quad.easeInOut,x:-0.35,y:-0.3},2);this.timeline.call(this.audio.play,["Music_Battle.ogg",true],3);this.timeline.call(this.audio.stop,["Music_Level_2.ogg"],3);this.timeline.call(this.speech.show,[10],5);this.timeline.to(this.camera,2,{ease:Quad.easeInOut,zoom:0.9},5);this.timeline.to(this.camera.offset,2,{ease:Quad.easeInOut,x:0.1,y:-0.1},5);this.timeline.call(this.Cutscene_06_C.bind(this),null,7);this.timeline.play();}
Cinematic.prototype.Cutscene_06_C=function()
{this.cole.follow(this.cutscene_06_target_01,{runSpeed:45});this.input.moveEnabled=this.input.jumpEnabled=this.input.actionEnabled=this.input.specialEnabled=true;this.jetpack_01.attack(this.player,{dist_Max:20000,runSpeed:14});this.jetpack_02.attack(this.player,{dist_Max:20000,runSpeed:15});this.jetpack_03.attack(this.player,{dist_Max:20000,runSpeed:16});}
Cinematic.prototype.Cutscene_07_Start=function()
{this.jetpack_01.setNone();this.jetpack_02.setNone();this.jetpack_03.setNone();this.jetpack_01.setAnimation(this.jetpack_01.ANIM.BRAKE);this.jetpack_02.setAnimation(this.jetpack_01.ANIM.BRAKE);this.jetpack_03.setAnimation(this.jetpack_01.ANIM.BRAKE);this.kai.direction=-1;this.kai.setAnimation(this.kai.ANIM.PULL_ROPE,false);this.timeline=new gsap.timeline({paused:true});this.timeline.call(this.speech.show,[11],1);this.timeline.call(this.Cutscene_07_A.bind(this),null,3);this.timeline.play();}
Cinematic.prototype.Cutscene_07_A=function()
{this.rope_anim.setAnimation("THROW_DOWN");this.timeline=new gsap.timeline({paused:true});this.timeline.to(this.camera,1,{ease:Quad.easeInOut,zoom:0.65},0);this.timeline.to(this.camera.offset,1,{ease:Quad.easeInOut,x:0.15,y:-0.32},0);this.timeline.call(this.speech.show,[12],2);this.timeline.call(this.cole.setAnimation,[this.cole.ANIM.LOOK_UP],2);this.timeline.call(this.player.setAnimation,[this.player.ANIM.LOOK_UP],2.5);this.timeline.call(this.speech.show,[13],4.5);this.timeline.call(this.Cutscene_07_B.bind(this),null,5);this.timeline.play();}
Cinematic.prototype.Cutscene_07_B=function()
{this.input.moveEnabled=this.input.jumpEnabled=this.input.actionEnabled=this.input.specialEnabled=false;this.input.move=false;this.input.speedRaw.x=this.input.speed.x=0;this.player.setStateMachine({state:this.player.NONE,isArmed:0});this.player.setAnimation(this.player.ANIM.RUN);this.player.direction=Math.sign(this.rope_target.body.position[0]-this.player.body.position[0]);this.cole.setStateMachine({state:this.cole.RUN_START});this.kai.body.velocity=[0,0];this.kai.body.type=p2.Body.STATIC;this.kai.setAnimation(this.kai.ANIM.PULL_ROPE);this.updatables.add(this.Cutscene_07_B_Update);this.updatables.add(this.Cutscene_07_B2_Update);}
Cinematic.prototype.Cutscene_07_B_Update=function()
{this.player.body.velocity[0]=this.player.direction*this.input.speedMax.x;if(Math.abs(this.player.body.position[0]-this.rope_target.body.position[0])<10)
{this.Cutscene_07_C();}}
Cinematic.prototype.Cutscene_07_B2_Update=function()
{if(Math.abs(this.cole.body.position[0]-this.rope_target.body.position[0])<10)
{this.Cutscene_07_C2();}}
Cinematic.prototype.Cutscene_07_C=function()
{this.updatables.remove(this.Cutscene_07_B_Update);this.player.setAnimation(this.player.ANIM.GRAB_ROPE);this.player.body.type=p2.Body.KINEMATIC;this.player.body.velocity=[0,0];this.player.body.position[0]=this.rope_target.body.position[0];this.rope_anim.setAnimation("PULL_UP");this.timeline=new gsap.timeline({paused:true});this.timeline.to(this.camera,4,{ease:Quad.easeInOut,zoom:1.2},0);this.timeline.to(this.camera.offset,4,{ease:Quad.easeInOut,x:0,y:-0.1},0);this.timeline.play();this.updatables.add(this.Cutscene_07_C_Update);}
Cinematic.prototype.Cutscene_07_C2=function()
{this.updatables.remove(this.Cutscene_07_B2_Update);this.cole.setNone();this.cole.setAnimation(this.cole.ANIM.GRAB_ROPE);this.cole.body.type=p2.Body.KINEMATIC;this.cole.body.velocity=[0,0];this.cole.body.position[0]=this.rope_target.body.position[0];this.updatables.add(this.Cutscene_07_C2_Update);}
Cinematic.prototype.Cutscene_07_C_Update=function()
{this.player.body.velocity[1]=-20;this.player.direction=1;if(this.player.body.position[1]<=-3650)
{this.Cutscene_07_D();}}
Cinematic.prototype.Cutscene_07_C2_Update=function()
{this.cole.body.velocity[1]=-20;this.cole.direction=1;if(this.cole.body.position[1]<=-3650)
{this.Cutscene_07_D2();}}
Cinematic.prototype.Cutscene_07_D=function()
{this.updatables.remove(this.Cutscene_07_C_Update);this.player.jumpCount=0;this.player.bottomContactFix=0;this.player.setStateMachine({state:this.player.JUMP_START});this.player.body.type=p2.Body.DYNAMIC;this.updatables.add(this.Cutscene_07_D_Update);}
Cinematic.prototype.Cutscene_07_D2=function()
{this.updatables.remove(this.Cutscene_07_C2_Update);this.cole.jumpSpeed=-100;this.cole.setStateMachine({state:this.cole.JUMP_START});this.cole.body.type=p2.Body.DYNAMIC;this.updatables.add(this.Cutscene_07_D2_Update);}
Cinematic.prototype.Cutscene_07_D_Update=function()
{this.input.speed.x=this.input.speedMax.x*0.5;if(this.player.contact_B)
{this.Cutscene_07_E();}}
Cinematic.prototype.Cutscene_07_D2_Update=function()
{if(this.cole.contact_B)
{this.cole.direction=-1;this.cole.body.velocity=[0,0];this.updatables.remove(this.Cutscene_07_D2_Update);}}
Cinematic.prototype.Cutscene_07_E=function()
{this.updatables.remove(this.Cutscene_07_D_Update);this.player.direction=-1;this.player.body.velocity=[0,0];this.input.moveEnabled=this.input.jumpEnabled=this.input.actionEnabled=this.input.specialEnabled=true;this.kai.direction=1;this.kai.setAnimation(this.kai.ANIM.TALK);this.kai.body.type=p2.Body.DYNAMIC;this.timeline=new gsap.timeline({paused:true});this.timeline.call(this.speech.show,[14],0);this.timeline.to(this.camera,2,{ease:Quad.easeInOut,zoom:1.2},0);this.timeline.to(this.camera.offset,2,{ease:Quad.easeInOut,x:0,y:-0.1},0);this.timeline.call(this.speech.show,[15],3);this.timeline.call(this.kai.setAnimation,[this.kai.ANIM.TALK],3);this.timeline.call(this.kai.setAnimation,[this.kai.ANIM.POINT],6);this.timeline.call(this.Cutscene_07_F.bind(this),null,12);this.timeline.play();}
Cinematic.prototype.Cutscene_07_F=function()
{this.setJetpackPositions();this.jetpack_01.attack(this.player,{runSpeed:30});this.jetpack_02.attack(this.player,{runSpeed:31});this.jetpack_03.attack(this.player,{runSpeed:32});this.cole.follow(this.cutscene_07_target_01);this.kai.follow(this.cutscene_07_target_01,{dist_Max:20000,runSpeed:43});this.timeline=new gsap.timeline({paused:true});this.timeline.call(this.speech.show,[16],0);this.timeline.to(this.camera,2,{ease:Quad.easeInOut,zoom:1},0);this.timeline.to(this.camera.offset,2,{ease:Quad.easeInOut,x:0.1,y:-0.1},0);this.timeline.call(this.speech.show,[17],2);this.timeline.play();}
Cinematic.prototype.Cutscene_08_Start=function()
{this.jetpack_01.setNone();this.jetpack_02.setNone();this.jetpack_03.setNone();this.jetpack_01.setAnimation(this.jetpack_01.ANIM.IDLE);this.jetpack_02.setAnimation(this.jetpack_02.ANIM.IDLE);this.jetpack_03.setAnimation(this.jetpack_03.ANIM.IDLE);}
Cinematic.prototype.Cutscene_Level_Exit=function()
{this.input.moveEnabled=this.input.jumpEnabled=this.input.actionEnabled=this.input.specialEnabled=false;this.player.setStateMachine(this.player.BRAKE);this.audio.setVolume("Music_Level_2.ogg",0,1);this.audio.setVolume("Music_Battle.ogg",0,1);this.level.levelComplete();}
Cinematic.prototype.setJetpackPositions=function()
{var pos=[0,0];pos[0]=this.player.body.position[0]-2500;pos[1]=this.player.body.position[1]-300;this.jetpack_01.beam(pos);pos[0]=this.player.body.position[0]-2300;pos[1]=this.player.body.position[1]-450;this.jetpack_02.beam(pos);pos[0]=this.player.body.position[0]-2100;pos[1]=this.player.body.position[1]-600;this.jetpack_03.beam(pos);}
Cinematic.prototype.onUpdate=function(time,deltaTime)
{for(var i=0;i<this.updatables.items.length;i++)
{this.updatables.items[i].call(this,time,deltaTime);}}
Cinematic.prototype.updatables_add=function(item)
{var add=true;var i;for(i=0;i<this.updatables.items.length;i++)
{if(this.updatables.items[i]==item)
{add=false;break;}}
if(add)this.updatables.items.push(item);}
Cinematic.prototype.updatables_remove=function(item)
{var i;for(i=0;i<this.updatables.items.length;i++)
{if(this.updatables.items[i]==item)
{this.updatables.items.splice(i,1);break;}}}
Cinematic.prototype.stop=function()
{this.timeline.kill();this.audio.setVolume("Music_Battle.ogg",0,1);this.audio.setVolume("Music_Level_2.ogg",0,1);}
Cinematic.prototype.reset=function(item)
{this.speech.show(-1);if(this.timeline)this.timeline.kill();this.updatables.items=[];this.updatables.add(this.speech.onUpdate);this.audio.play("Music_Level_2.ogg",true,1);}
Cinematic.prototype.destroy=function()
{this.app=null;this.game=null;this.level=null;this.input=null;this.player=null;this.camera=null;this.audio=null;this.timeline=null;this.cutscenes=[];this.updatables=[];}