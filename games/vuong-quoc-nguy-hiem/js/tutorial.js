function Tutorial(cinematic,data)
{var cnt=0;this.NONE=cnt++;this.MOVE=cnt++;this.JUMP=cnt++;this.FIGHT=cnt++;this.SPINJITZU=cnt++;this.app=cinematic.app;this.level=cinematic.level;this.display=FT.create(data.json,data.img);this.show=this.show.bind(this);this.hide=this.hide.bind(this);this.onResize=this.onResize.bind(this);this.destroy=this.destroy.bind(this);}
Tutorial.prototype.show=function(id)
{this.onResize();switch(id)
{case this.MOVE:if(this.app.isMobile)
{this.display.tut_01_move.gotoAndPlay(2);}
else
{this.display.tut_01_move_pc.gotoAndPlay(2);}
break;case this.JUMP:if(this.app.isMobile)
{this.display.tut_02_jump.gotoAndPlay(2);}
else
{this.display.tut_02_jump_pc.gotoAndPlay(2);}
break;case this.FIGHT:if(this.app.isMobile)
{this.display.tut_03_weapons.gotoAndPlay(2);}
else
{this.display.tut_03_weapons_pc.gotoAndPlay(2);}
break;case this.SPINJITZU:if(this.app.isMobile)
{this.display.tut_04_spinjitzu.gotoAndPlay(2);}
else
{this.display.tut_04_spinjitzu_pc.gotoAndPlay(2);}
break;}}
Tutorial.prototype.hide=function(id)
{switch(id)
{case this.MOVE:if(this.app.isMobile)
{this.display.tut_01_move.gotoAndPlay("OUT");}
else
{this.display.tut_01_move_pc.gotoAndPlay("OUT");}
break;case this.JUMP:if(this.app.isMobile)
{this.display.tut_02_jump.gotoAndPlay("OUT");}
else
{this.display.tut_02_jump_pc.gotoAndPlay("OUT");}
break;case this.FIGHT:if(this.app.isMobile)
{this.display.tut_03_weapons.gotoAndPlay("OUT");}
else
{this.display.tut_03_weapons_pc.gotoAndPlay("OUT");}
break;case this.SPINJITZU:if(this.app.isMobile)
{this.display.tut_04_spinjitzu.gotoAndPlay("OUT");}
else
{this.display.tut_04_spinjitzu_pc.gotoAndPlay("OUT");}
break;}}
Tutorial.prototype.onUpdate=function()
{switch(this.state)
{case this.MOVE:if(Game.level.input.move)
{this.state=this.MOVE_DONE;if(Game.isMobile)
{this.display.tut_01_move.gotoAndPlay("OUT");}
else
{this.display.tut_01_move_pc.gotoAndPlay("OUT");}
Game.level.player.state=Game.level.player.IDLE;}
case this.JUMP:if(Game.level.input.jump)
{this.state=this.JUMP_DONE;if(Game.isMobile)
{this.display.tut_02_jump.gotoAndPlay("OUT");}
else
{this.display.tut_02_jump_pc.gotoAndPlay("OUT");}}
case this.FIGHT:if(Game.level.player.state==Game.level.player.FIGHT_IDLE||Game.level.player.state==Game.level.player.FIGHT_RUN)
{this.state=this.FIGHT_DONE;if(Game.isMobile)
{this.display.tut_03_weapons.gotoAndPlay("OUT");}
else
{this.display.tut_03_weapons_pc.gotoAndPlay("OUT");}}
case this.SPINJITZU:if(Game.level.player.state==Game.level.player.SPINJITZU)
{this.state=this.SPINJITZU_DONE;if(Game.isMobile)
{this.display.tut_04_spinjitzu.gotoAndPlay("OUT");}
else
{this.display.tut_04_spinjitzu_pc.gotoAndPlay("OUT");}
Game.level.updatables.remove(this);Game.resizables.remove(this);}}}
Tutorial.prototype.onResize=function()
{var scale={x:this.app.scale,y:this.app.scale};scale.x*=1.1;scale.y*=1.1;if(this.app.isMobile)
{this.display.tut_01_move.scale=scale;this.display.tut_02_jump.scale=scale;this.display.tut_03_weapons.scale=scale;this.display.tut_04_spinjitzu.scale=scale;this.display.tut_01_move.x=this.app.stageW*0.25;this.display.tut_01_move.y=this.app.stageH*0.75;this.display.tut_02_jump.x=this.app.stageW*0.75;this.display.tut_02_jump.y=this.app.stageH*0.75;this.display.tut_03_weapons.x=this.app.stageW*0.75;this.display.tut_03_weapons.y=this.app.stageH*0.75;this.display.tut_04_spinjitzu.x=this.level.hud.display.spinjitzu.x;this.display.tut_04_spinjitzu.y=this.level.hud.display.spinjitzu.y;}
else
{this.display.tut_01_move_pc.scale=scale;this.display.tut_02_jump_pc.scale=scale;this.display.tut_03_weapons_pc.scale=scale;this.display.tut_04_spinjitzu_pc.scale=scale;this.display.tut_01_move_pc.x=this.app.stageW*0.25;this.display.tut_01_move_pc.y=this.app.stageH*0.75;this.display.tut_02_jump_pc.x=this.app.stageW*0.25;this.display.tut_02_jump_pc.y=this.app.stageH*0.75;this.display.tut_03_weapons_pc.x=this.app.stageW*0.75;this.display.tut_03_weapons_pc.y=this.app.stageH*0.75;this.display.tut_04_spinjitzu_pc.x=this.level.hud.display.spinjitzu.x;this.display.tut_04_spinjitzu_pc.y=this.level.hud.display.spinjitzu.y;}}
Tutorial.prototype.destroy=function()
{FT.remove(this.display);}