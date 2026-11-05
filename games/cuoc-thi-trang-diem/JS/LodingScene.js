var res_resource=[],i;var res_comman={bb_icon_3:"100x50.png",sound_bg_mp3:"RES/OT/bg_sound.mp3",sparkle_1_plist:"RES/OT/Sparkle_1.plist",sparkle_2_plist:"RES/OT/Sparkle_2.plist",COOPERBLACKSTD_ITALIC:"RES/OT/COOPERBLACKSTD_ITALIC.TTF",FRAHV:"RES/OT/FRAHV.TTF",logo_bg:"RES/COM/logo_bg.png",bg_white:"RES/COM/bg_white.png",};for(i in res_comman)res_resource.push(res_comman[i]);var res_mainScene={bg:"RES/MS/main_bg.png",title_1:"RES/MS/main_title_1.png",btn_more:"RES/MS/main_btnMore.png",btn_soundOff:"RES/MS/main_btnMusicOff.png",btn_soundOn:"RES/MS/main_btnMusicOn.png",btn_play:"RES/MS/main_btnPlay.png",btn_replay:"RES/MS/main_btnReplay.png",main_char_1:"RES/MS/main_char_1.png",};for(i in res_mainScene)res_resource.push(res_mainScene[i]);var res_story={bg:"RES/ST/bg.png",ch_1:"RES/ST/ch_1.png",msg_1:"RES/ST/msg_1.png",msg_2:"RES/ST/msg_2.png",msg_3:"RES/ST/msg_3.png",msg_4:"RES/ST/msg_4.png",};for(i in res_story)res_resource.push(res_story[i]);var res_selection={bg:"RES/SC/bg.png",btn_1:"RES/SC/btn_1.png",btn_2:"RES/SC/btn_2.png",};for(i in res_selection)res_resource.push(res_selection[i]);var res_makeup={panel:"RES/MK/PNL/panel.png",};for(i in res_makeup)res_resource.push(res_makeup[i]);for(var j=1;j<=2;j++)
{res_resource.push("RES/MK/bg_"+j+".png");res_resource.push("RES/MK/C"+j+"/body.png");res_resource.push("RES/MK/C"+j+"/hair.png");res_resource.push("RES/MK/C"+j+"/hair_1.png");for(var k=1;k<=6;k++)
{if(j==1&&k<=6)
{res_resource.push("RES/MK/PNL/icon_1_"+k+".png");}
for(var l=0;l<=4;l++)
{res_resource.push("RES/MK/C"+j+"/U/"+k+"_"+l+".png");res_resource.push("RES/DS/C"+j+"/MK/"+k+"_"+l+".png");}}}
for(var j=1;j<=2;j++)
{res_resource.push("RES/DS/bg_"+j+".png");res_resource.push("RES/DS/C"+j+"/body.png");for(var k=1;k<=5;k++)
{if(j==1&&k<=4)
{res_resource.push("RES/DS/PNL/icon_1_"+j+".png");}
for(var l=0;l<=6;l++)
{res_resource.push("RES/DS/C"+j+"/U/"+k+"_"+l+".png");if(k==2&&l<=6)
{res_resource.push("RES/DS/C"+j+"/U/"+k+"_"+l+"_f.png");}}}}
var res_score={score_bg:"RES/SE/score_bg.png",score_bg_1:"RES/SE/score_bg_1.png",score_bg_2:"RES/SE/score_bg_2.png",judge:"RES/SE/judge.png",btn_score:"RES/SE/btn_score.png",score:"RES/SE/score.png",};for(i in res_score)res_resource.push(res_score[i]);for(var j=1;j<=2;j++)
{for(var k=0;k<=4;k++)
{res_resource.push("RES/GO/C"+j+"/3_"+k+"_s.png");res_resource.push("RES/GO/C"+j+"/3_"+k+"_h.png");}}
var res_gameOver={bg:"RES/GO/bg.png",board_1:"RES/GO/board_1.png",board_2:"RES/GO/board_2.png",};for(i in res_gameOver)res_resource.push(res_gameOver[i]);var res_panel_com={btn_done:"RES/BTN/btn_done.png",btn_reset:"RES/BTN/btn_reset.png",btn_next:"RES/BTN/btn_next.png",btn_more:"RES/BTN/btn_more.png",};for(i in res_panel_com)res_resource.push(res_panel_com[i]);for(var k=0;k<RelatedGames.length;k++)
{res_resource.push(RelatedGames[k]['thumb']);}
window.onload=function(){cc.game.onStart=function(){cc.director.setDisplayStats(false);cc.view.adjustViewPort(!0);cc.view.setDesignResolutionSize(504,800,cc.ResolutionPolicy.SHOW_ALL);cc.view.resizeWithBrowserSize(!0);Preloader.preload(res_resource,function()
{cc.director.runScene(MainScene.scene());comman.playMusic(res_comman.sound_bg_mp3,!0,!0);},this);};cc.game.run("gameCanvas");};