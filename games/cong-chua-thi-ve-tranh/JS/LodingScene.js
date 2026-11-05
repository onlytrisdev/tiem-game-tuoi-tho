var res_resource = [],i;
var res_comman = {
    bb_icon_4:"RES/COM/bb_icon_200x150.png",
    bb_icon_1:"https://www.babygames.com/forgame/100x31.png",
    bb_icon_2:"https://www.babygames.com/forgame/100x50.png",
    bb_icon_3:"190x60.png",
    sound_bg_mp3:"RES/OT/bg_sound.m4a",
    sparkle_1_plist:"RES/OT/Sparkle_1.plist",
    sparkle_2_plist:"RES/OT/Sparkle_2.plist",
    logo_bg:"RES/COM/logo_bg.png",
    bg_white:"RES/COM/bg_white.png",
};
for (i in res_comman) res_resource.push(res_comman[i]);
var res_mainScene = {
    bg:"RES/MS/main_bg.png",
    title_1:"RES/MS/main_title_1.png",
    btn_more:"RES/MS/main_btnMore.png",
    btn_soundOff:"RES/MS/main_btnMusicOff.png",
    btn_soundOn:"RES/MS/main_btnMusicOn.png",
    btn_play:"RES/MS/main_btnPlay.png",
    btn_replay:"RES/MS/main_btnReplay.png",
    main_char:"RES/MS/main_char.png",
};
for (i in res_mainScene) res_resource.push(res_mainScene[i]);

var res_story_1= 
{
    bg:"RES/ST1/bg.png",
    elsa:"RES/ST1/elsa.png",
    msg_1_1:"RES/ST1/msg_1.png",
    msg_1_2:"RES/ST1/msg_2.png",
    msg_1_3:"RES/ST1/msg_3.png",
    bg_2:"RES/ST1/bg_2.png",
    Drawing_1:"RES/ST1/Drawing_1.png",
    Drawing_3:"RES/ST1/Drawing_3.png",
    Drawing_2:"RES/ST1/Drawing_2.png",
    Drawing_4:"RES/ST1/Drawing_4.png",
};
for (i in res_story_1) res_resource.push(res_story_1[i]);

var res_drawing =
{
    bg:"RES/DRAW/bg.png",
    Color_1:"RES/DRAW/Color_1.png",
    Color_2:"RES/DRAW/Color_2.png",
    Color_3:"RES/DRAW/Color_3.png",
    Color_4:"RES/DRAW/Color_4.png",
    Color_5:"RES/DRAW/Color_5.png",
    Color_6:"RES/DRAW/Color_6.png",
    Color_7:"RES/DRAW/Color_7.png",
    Color_8:"RES/DRAW/Color_8.png",
    Color_9:"RES/DRAW/Color_9.png",
    Color_10:"RES/DRAW/Color_10.png",
    Drawing_1:"RES/DRAW/Drawing_1.png",
    Drawing_2:"RES/DRAW/Drawing_2.png",
    Drawing_3:"RES/DRAW/Drawing_3.png",
    Drawing_4:"RES/DRAW/Drawing_4.png",
    Page:"RES/DRAW/Page.png",
    Brush_Pannel:"RES/DRAW/Brush_Pannel.png",
    btn_tryAnother:"RES/DRAW/btn_tryAnother.png",
    btn_useThisPic:"RES/DRAW/btn_useThisPic.png",
};
for (i in res_drawing) res_resource.push(res_drawing[i]);
for (var j = 0; j <= 5; j++)
{
    res_resource.push("RES/DRAW/Brush_"+j+"_1.png");
    res_resource.push("RES/DRAW/Brush_"+j+".png");
}

var res_dressUp = 
{
    bg:"RES/DS/bg.png",
    Ch1_body:"RES/DS/C1/body.png",
};
for (i in res_dressUp) res_resource.push(res_dressUp[i]);

//for Dress Up
for (var j = 1; j <= 4; j++)
{
    for (var k = 0; k <= 4; k++)
    {
        res_resource.push("RES/DS/C1/U/"+j+"_"+k+".png");
    }
}

var res_panel_com =
{
    btn_done:"RES/DS/PNL/btn_done.png",
    btn_reset:"RES/DS/PNL/btn_reset.png",
    btn_next:"RES/DS/PNL/btn_next.png",
    btn_back:"RES/DS/PNL/btn_back.png",
    icon_1_1:"RES/DS/PNL/icon_1_1.png",
    icon_1_2:"RES/DS/PNL/icon_1_2.png",
    icon_1_3:"RES/DS/PNL/icon_1_3.png",
    icon_1_4:"RES/DS/PNL/icon_1_4.png",
};
for (i in res_panel_com) res_resource.push(res_panel_com[i]);

var res_GameOver = 
{
    bg:"RES/GO/bg.png",
    body_hand:"RES/GO/body_hand.png",
    body:"RES/GO/body.png",
    char_1:"RES/GO/char_1.png",
    char_2:"RES/GO/char_2.png",
};
for (i in res_GameOver) res_resource.push(res_GameOver[i]);

for (var k = 0; k < RelatedGames.length; k++) 
{
	res_resource.push(RelatedGames[k]['thumb']);
}

window.onload = function(){
    cc.game.onStart = function(){
        //load resources
        cc.director.setDisplayStats(false);
        cc.view.adjustViewPort(!0);
        cc.view.setDesignResolutionSize(504,800,cc.ResolutionPolicy.SHOW_ALL);
        cc.view.resizeWithBrowserSize(!0);
        Preloader.preload(res_resource, function()
        {
            cc.director.runScene(MainScene.scene());
            comman.playMusic(res_comman.sound_bg_mp3,!0,!0);
        }, this);
    };
    cc.game.run("gameCanvas");
};
