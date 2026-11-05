var res_resource = [],i;
var res_comman = {
    bb_icon_3:"100x50.png",
    sound_bg_mp3:"RES/OT/bg_sound.mp3",
    sparkle_1_plist:"RES/OT/Sparkle_1.plist",
    sparkle_2_plist:"RES/OT/Sparkle_2.plist",
    logo_bg:"RES/COM/logo_bg.png",
    bg_white:"RES/COM/bg_white.png",
};
for (i in res_comman) res_resource.push(res_comman[i]);

var res_mainScene = {
    bg:"RES/MS/main_bg.png",
    title_1:"RES/MS/main_title_1.png",
    title_2:"RES/MS/main_title_2.png",
    btn_more:"RES/MS/main_btnMore.png",
    btn_soundOff:"RES/MS/main_btnMusicOff.png",
    btn_soundOn:"RES/MS/main_btnMusicOn.png",
    btn_play:"RES/MS/main_btnPlay.png",
    btn_replay:"RES/MS/main_btnReplay.png",
    main_char_1:"RES/MS/main_char_1.png",
};
for (i in res_mainScene) res_resource.push(res_mainScene[i]);

//Story Scene...
var res_story= 
{
    bg_1:"RES/ST/bg_1.png",
    bg_2:"RES/ST/bg_2.png",
    bg_3:"RES/ST/bg_3.png",

    char_1_1:"RES/ST/char_1_1.png",
    char_1_2:"RES/ST/char_1_2.png",

    msg_1:"RES/ST/msg_1.png",
    msg_2:"RES/ST/msg_2.png",
};
for (i in res_story) res_resource.push(res_story[i]);

//Choose Scene...
var res_selection= 
{
    bg:"RES/SC/bg.png",
    btn_1:"RES/SC/btn_1.png",
    btn_2:"RES/SC/btn_2.png",
};
for (i in res_selection) res_resource.push(res_selection[i]);

//Surgery Scene...
var res_surgery_scene = 
{
    bg_img:"RES/SS/bg.png",
    bg_1_img:"RES/SS/bg_1.png",

    leg_img:"RES/SS/leg.png",
    skirt_img:"RES/SS/skirt.png",

    panel_img:"RES/SS/panel.png",

    clock_1_img:"RES/SS/clock_1.png",
    clock_2_img:"RES/SS/clock_2.png",
    clock_3_img:"RES/SS/clock_3.png",
    clock_4_img:"RES/SS/clock_4.png",

    tool_1_img:"RES/SS/tool_1.png",
    tool_1_1_img:"RES/SS/tool_1_1.png",

    tool_2_img:"RES/SS/tool_2.png",
    tool_2_1_img:"RES/SS/tool_2_1.png",
    tool_2_2_1_img:"RES/SS/tool_2_2_1.png",
    tool_2_2_2_img:"RES/SS/tool_2_2_2.png",
    tool_2_2_3_img:"RES/SS/tool_2_2_3.png",
    tool_2_2_4_img:"RES/SS/tool_2_2_4.png",
    tool_2_2_5_img:"RES/SS/tool_2_2_5.png",
    tool_2_3_img:"RES/SS/tool_2_3.png",

    tool_3_img:"RES/SS/tool_3.png",
    tool_3_1_1_img:"RES/SS/tool_3_1_1.png",
    tool_3_1_2_img:"RES/SS/tool_3_1_2.png",
    tool_3_2_1_img:"RES/SS/tool_3_2_1.png",
    tool_3_2_2_img:"RES/SS/tool_3_2_2.png",
    tool_3_2_3_img:"RES/SS/tool_3_2_3.png",
    tool_3_2_4_img:"RES/SS/tool_3_2_4.png",
    tool_3_2_5_img:"RES/SS/tool_3_2_5.png",
    tool_3_2_6_img:"RES/SS/tool_3_2_6.png",
    tool_3_3_1_img:"RES/SS/tool_3_3_1.png",
    tool_3_3_2_img:"RES/SS/tool_3_3_2.png",

    tool_4_img:"RES/SS/tool_4.png",
    tool_4_1_img:"RES/SS/tool_4_1.png",
    tool_4_2_img:"RES/SS/tool_4_2.png",
    tool_4_3_1_img:"RES/SS/tool_4_3_1.png",
    tool_4_3_2_img:"RES/SS/tool_4_3_2.png",
    tool_4_3_3_img:"RES/SS/tool_4_3_3.png",
    tool_4_3_4_img:"RES/SS/tool_4_3_4.png",

    tool_5_img:"RES/SS/tool_5.png",
    tool_5_1_1_img:"RES/SS/tool_5_1_1.png",
    tool_5_1_2_img:"RES/SS/tool_5_1_2.png",
    tool_5_1_3_img:"RES/SS/tool_5_1_3.png",
    tool_5_2_img:"RES/SS/tool_5_2.png",
    tool_5_3_1_img:"RES/SS/tool_5_3_1.png",
    tool_5_3_2_img:"RES/SS/tool_5_3_2.png",
    tool_5_4_img:"RES/SS/tool_5_4.png",

    tool_6_img:"RES/SS/tool_6.png",
    tool_6_1_img:"RES/SS/tool_6_1.png",
    tool_6_2_1_img:"RES/SS/tool_6_2_1.png",
    tool_6_2_2_img:"RES/SS/tool_6_2_2.png",
    tool_6_2_3_img:"RES/SS/tool_6_2_3.png",
    tool_6_3_1_img:"RES/SS/tool_6_3_1.png",
    tool_6_3_2_img:"RES/SS/tool_6_3_2.png",
    tool_6_3_3_img:"RES/SS/tool_6_3_3.png",
    tool_6_4_img:"RES/SS/tool_6_4.png",
    tool_6_5_img:"RES/SS/tool_6_5.png",
    tool_6_6_1_img:"RES/SS/tool_6_6_1.png",
    tool_6_6_2_img:"RES/SS/tool_6_6_2.png",
    tool_6_6_3_img:"RES/SS/tool_6_6_3.png",

    tool_7_img:"RES/SS/tool_7.png",
    tool_7_1_img:"RES/SS/tool_7_1.png",
    tool_7_2_img:"RES/SS/tool_7_2.png",
    tool_7_3_img:"RES/SS/tool_7_3.png",
    tool_7_4_1_img:"RES/SS/tool_7_4_1.png",
    tool_7_4_2_img:"RES/SS/tool_7_4_2.png",
    tool_7_4_3_img:"RES/SS/tool_7_4_3.png",
    tool_7_4_4_img:"RES/SS/tool_7_4_4.png",
    tool_7_4_5_img:"RES/SS/tool_7_4_5.png",
    tool_7_4_6_img:"RES/SS/tool_7_4_6.png",
    tool_7_4_7_img:"RES/SS/tool_7_4_7.png",
    tool_7_4_8_img:"RES/SS/tool_7_4_8.png",
    tool_7_4_9_img:"RES/SS/tool_7_4_9.png",

    tool_8_img:"RES/SS/tool_8.png",
    tool_8_1_img:"RES/SS/tool_8_1.png",
    tool_8_2_1_img:"RES/SS/tool_8_2_1.png",
    tool_8_2_2_img:"RES/SS/tool_8_2_2.png",
    tool_8_2_3_img:"RES/SS/tool_8_2_3.png",
    tool_8_2_4_img:"RES/SS/tool_8_2_4.png",
    tool_8_2_5_img:"RES/SS/tool_8_2_5.png",
    tool_8_2_6_img:"RES/SS/tool_8_2_6.png",
    tool_8_2_7_img:"RES/SS/tool_8_2_7.png",
    tool_8_3_img:"RES/SS/tool_8_3.png",

    tool_9_img:"RES/SS/tool_9.png",
    tool_9_1_img:"RES/SS/tool_9_1.png",

    tool_10_img:"RES/SS/tool_10.png",
    tool_10_1_img:"RES/SS/tool_10_1.png",
    tool_10_2_img:"RES/SS/tool_10_2.png",
    tool_10_3_1_img:"RES/SS/tool_10_3_1.png",
    tool_10_3_2_img:"RES/SS/tool_10_3_2.png",
    tool_10_3_3_img:"RES/SS/tool_10_3_3.png",
    tool_10_3_4_img:"RES/SS/tool_10_3_4.png",
    tool_10_3_5_img:"RES/SS/tool_10_3_5.png",
}
for(i in res_surgery_scene) res_resource.push(res_surgery_scene[i]);


//Dress Up Item...
for (var j = 1; j <= 1; j++)
{
    
    res_resource.push("RES/DS/bg_"+j+".png");
    res_resource.push("RES/DS/C"+j+"/body.png");

    for (var k = 1; k <= 5; k++)
    {
        if (j==1 && k<=5)
        {
            res_resource.push("RES/DS/PNL/icon_1_"+k+".png");
            // console.log("RES/DS/PNL/icon_1_"+k+".png");
        }
        for (var l = 0; l <=8; l++)
        {
            if(k==1 && l<=8)
            {
                res_resource.push("RES/DS/C"+j+"/U/"+k+"_"+l+".png");
            }
            if((k==3 || k==4 || k==5) && l<=5)
            {
                res_resource.push("RES/DS/C"+j+"/U/"+k+"_"+l+".png");
            }
            if(k==2 && l<=5)
            {
                res_resource.push("RES/DS/C"+j+"/U/"+k+"_"+l+".png");
                res_resource.push("RES/DS/C"+j+"/U/"+k+"_"+l+"_f.png");
            }
            // console.log("RES/DS/C"+j+"/U/"+k+"_"+l+".png");
        }
    }   
}

//GameOver...
var res_gameOver = 
{
    bg_1:"RES/GO/bg_1.png",
    ch_1:"RES/GO/ch_1.png",
    msg_1:"RES/GO/msg_1.png",
};
for (i in res_gameOver) res_resource.push(res_gameOver[i]);

var res_panel_com =
{
    btn_done:"RES/BTN/btn_done.png",
    btn_reset:"RES/BTN/btn_reset.png",
    btn_next:"RES/BTN/btn_next.png",
    btn_prev:"RES/BTN/btn_prev.png",
    btn_more:"RES/BTN/btn_more.png",

    dummy_img:"RES/BTN/dummy_img.png",
    indicator_img:"RES/BTN/ind.png",
    arrow_ind_img:"RES/BTN/arrow_ind.png",
};
for (i in res_panel_com) res_resource.push(res_panel_com[i]);

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
        Preloader.preload(res_resource, function () 
        {
            cc.director.runScene(MainScene.scene());
            comman.playMusic(res_comman.sound_bg_mp3,!0,!0);
        }, this);
    };
    cc.game.run("gameCanvas");
};
