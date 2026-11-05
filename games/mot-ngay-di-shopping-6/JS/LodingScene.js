var res_resource = [],i;
var res_comman = 
{
    bb_icon_3:"100x50.png",
    sound_bg_mp3:"RES/OT/bg_sound.mp3",
    sparkle_1_plist:"RES/OT/Sparkle_1.plist",
    sparkle_2_plist:"RES/OT/Sparkle_2.plist",
    logo_bg:"RES/COM/logo_bg.png",
    bg_white:"RES/COM/bg_white.png",
    oleoScriptSwashCaps_regular:"RES/COM/oleoScriptSwashCaps_regular.ttf",
    price_tag_img:"RES/COM/price_tag.png",
    Price_Tag_Side_img:"RES/COM/Price_Tag_Side.png",
};
for (i in res_comman) res_resource.push(res_comman[i]);

var res_mainScene = 
{
    bg:"RES/MS/main_bg.png",
    title_1:"RES/MS/main_title_1.png",
    btn_more:"RES/MS/main_btnMore.png",
    btn_soundOff:"RES/MS/main_btnMusicOff.png",
    btn_soundOn:"RES/MS/main_btnMusicOn.png",
    btn_play:"RES/MS/main_btnPlay.png",
    btn_replay:"RES/MS/main_btnReplay.png",
    main_char_1:"RES/MS/main_char_1.png",
};
for (i in res_mainScene) res_resource.push(res_mainScene[i]);

var res_selction= 
{
    selction_bg_img:"RES/CHOOSE/selction_bg.png",

    btn_1:"RES/CHOOSE/btn_1.png",
    btn_2:"RES/CHOOSE/btn_2.png",
};
for (i in res_selction) res_resource.push(res_selction[i]);


//Elsa Shopping Item
for (var j = 1; j <= 4; j++)
{
    for (var k = 1; k <= 6; k++)
    {
        res_resource.push("RES/SS/ELSA/Char_thumb_item_"+j+"_"+k+".png");
        res_resource.push("RES/SS/ELSA/Cart_thumb_item_"+j+"_"+k+".png");
    }
}

var res_elsa_shopping = 
{
    shopping_bg_img:"RES/SS/shopping_bg.png",

    cupboard_1_img:"RES/SS/cupboard_1.png",
    cupboard_2_img:"RES/SS/cupboard_2.png",
    cupboard_3_img:"RES/SS/cupboard_3.png",
    cupboard_4_img:"RES/SS/cupboard_4.png",

    elsa_cart_front_img:"RES/SS/elsa_cart_front.png",

    elsa_total_shopping_cost_img:"RES/SS/elsa_total_shopping_cost.png",

    char_elsa_body_img:"RES/SS/ELSA/char_elsa_body.png",

};
for(i in res_elsa_shopping) res_resource.push(res_elsa_shopping[i]);


//Anna Shopping Item
for (var j = 1; j <= 4; j++)
{
    for (var k = 1; k <= 6; k++)
    {
        res_resource.push("RES/SS/ANNA/Char_thumb_item_"+j+"_"+k+".png");
        res_resource.push("RES/SS/ANNA/Cart_thumb_item_"+j+"_"+k+".png");
    }
}
var res_anna_shopping = 
{  
    anna_total_shopping_cost_img:"RES/SS/anna_total_shopping_cost.png",
    char_anna_body_img:"RES/SS/ANNA/char_anna_body.png",
    anna_cart_front_img:"RES/SS/anna_cart_front.png",
};
for(i in res_anna_shopping) res_resource.push(res_anna_shopping[i]);

//Anna Dressup Item
for (var j = 1; j <= 4; j++)
{
    for (var k = 0; k <= 6; k++)
    {
        res_resource.push("RES/DS/C2/"+j+"_"+k+".png");
    }
}

var res_anna_dressup =
{
    dressup_anna_body_img:"RES/DS/C2/body.png",
};
for(i in res_anna_dressup) res_resource.push(res_anna_dressup[i]);

//Elsa Dressup Item
for (var j = 1; j <= 4; j++)
{
    for (var k = 0; k <= 6; k++)
    {
        res_resource.push("RES/DS/C1/"+j+"_"+k+".png");
    }
}
var res_elsa_dressup =
{
    bg:"RES/DS/dressup_bg.png",
    icon_1_1:"RES/DS/icon_1_1.png",
    icon_1_2:"RES/DS/icon_1_2.png",
    icon_1_3:"RES/DS/icon_1_3.png",
    icon_1_4:"RES/DS/icon_1_4.png",

    dressup_elsa_body_img:"RES/DS/C1/body.png",

    gameover_bg_img:"RES/DS/gameover_bg.png",
};
for(i in res_elsa_dressup) res_resource.push(res_elsa_dressup[i]);

var res_common_button =
{
    btn_done:"RES/CB/btn_done.png",
    btn_reset:"RES/CB/btn_reset.png",
    btn_next:"RES/CB/btn_next.png",
    btn_more:"RES/CB/btn_more.png",
};
for (i in res_common_button) res_resource.push(res_common_button[i]);

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
