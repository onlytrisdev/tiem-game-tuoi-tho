//Constants

var c_is_first_start_play=true;

var c_p_start_logo_x=0;
var c_p_start_logo_y=996+38;

var c_p_start_play_x=380;
var c_p_start_play_y=390;
var c_p_start_more_games_x=380;
var c_p_start_more_games_y=240;

var c_p_all_music_x=1328+42;
var c_p_all_music_y=949+38;

var c_p_play_fuse_x=800;
var c_p_play_fuse_y=750;

var c_p_play_three_btn_center_x=429-83;
var c_p_play_three_btn_center_y=45*2;
var c_p_play_three_btn_jianju=207;

var c_p_play_four_btn_bottom_x=1305-50;
var c_p_play_four_btn_bottom_x1=140;
var c_p_play_four_btn_bottom_y=45*2;
var c_p_play_four_btn_bottom_jianju=100;

var c_p_play_wu_pin_lan_x=35;
var c_p_play_wu_pin_lan_y=211+5;

var c_p_move_x_show_btn_hit=380-60;

//下面这一行按钮的第一个按钮的位置
var c_p_play_wu_pin_fenlei_btn1_x=81;
var c_p_play_wu_pin_fenlei_btn1_y=138+25+10;

var c_p_play_wu_pin_fenlei_btn_row_jianju=742+5-5;

var c_p_play_wu_pin_fenlei_btn2_x=112;
var c_p_play_wu_pin_fenlei_btn2_y=c_p_play_wu_pin_fenlei_btn1_y +c_p_play_wu_pin_fenlei_btn_row_jianju;

//下面一行的列间距
var c_p_play_wu_pin_fenlei_btn_col1_jianju=134;
//上面一行的列间距
var c_p_play_wu_pin_fenlei_btn_col2_jianju=157;

var c_p_btn_index=0;
var c_p_option_index=0;

//playScene object
var c_scene_play = null;


function addMusicButton(layer){

    if(true || is_opera==false ){

        var musicMenuItem = cc.MenuItemImage.create(res.music_selected_png,res.music_png);
        var musicSelectedMenuItem = cc.MenuItemImage.create(res.music_png,res.music_selected_png);



        var musicMenuItemToggle = cc.MenuItemToggle.create(musicMenuItem,musicSelectedMenuItem,function(pSender){
            //alert(c_is_play_music);
            try{

                if(musicMenuItemToggle.selectedIndex==1){
                    stopMusic();
                    //alert('p1');
                    c_is_play_music=false;
                }else{
                    playMusic();
                    //alert('p2');
                    c_is_play_music=true;
                }

            }catch(err){
                alert(err);
            }

            //alert(c_is_play_music);
        },this);

        if(!c_is_play_music){
            musicMenuItemToggle.selectedIndex=1;
        }

        var musicMenu = cc.Menu.create(musicMenuItemToggle);

        musicMenu.anchorX=0.5;
        musicMenu.anchorY=0.5;
        musicMenu.x=c_p_all_music_x;
        musicMenu.y=c_p_all_music_y;

        layer.addChild(musicMenu,3);
    }
	

}


function addLogoButton(layer){
	
}

function initLogo(img,layer){
    //alert(layer);
    var texture2d = new cc.Texture2D();
    texture2d.initWithElement(img);
    texture2d.handleLoadedTexture();

    var texture2d2 = new cc.Texture2D();
    texture2d2.initWithElement(img);
    texture2d2.handleLoadedTexture();

    var logoSprite = cc.Sprite.create(texture2d);
    logoSprite.visible=true;
    logoSprite.setScale(1.5*cc.contentScaleFactor());


    if(logoSprite==null){
        cc.log("[error] - initLogo() -logoSprite = null")
    }
    //logo button event
    var logoMenuItemSprite = cc.MenuItemSprite.create(logoSprite,null,null,function(pSender){
        cc.log("logo button hit");
        logoData.action();
    }, layer);

    var logoMenu = cc.Menu.create(logoMenuItemSprite);


    logoMenu.anchorX=0;
    logoMenu.anchorY=1;
    logoMenu.x=c_p_start_logo_x+logoSprite.width/2-20;
    logoMenu.y=c_p_start_logo_y-logoSprite.height;

    //layer.visible=false;
    if(layer!=null){
        layer.addChild(logoMenu,10002);
        layer.logoMenu=logoMenu;
    }else{
        cc.log("[error] initLogo() - layer is null");
    }

    //alert(logoMenu.x + " " + logoMenu.y);
}

function addBackGround(layer,picPath){
    addBackGroundWithZindex(layer,picPath,0);
}

function addBackGroundWithZindex(layer,picPath,zindex){
    // set background picture;
    var size = cc.director.getWinSize();
    var spriteBackground;
    spriteBackground = cc.Sprite.create(picPath);
    cc.log("size.height"+size.height);
    spriteBackground.attr({
        x: size.width / 2,
        y: size.height / 2,
        scale: 1
    });
    layer.addChild(spriteBackground, zindex);
}


function getFuseString(no){
    if(no==1){
        return res.fuse1_png;
    }else if(no==2){
        return res.fuse2_png;
    }else if(no==3){
        return res.fuse3_png;
    }else{
        return res.fuse4_png;
    }
}

/**
 * 在本地进行文件保存
 * @param  {String} data     要保存到本地的图片数据
 * @param  {String} filename 文件名
 */
var saveFile = function(data, filename){
    var save_link = document.createElementNS('http://www.w3.org/1999/xhtml', 'a');
    save_link.href = data;
    save_link.download = filename;

    var event = document.createEvent('MouseEvents');
    event.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
    save_link.dispatchEvent(event);
};

function save(){
    //c_scene_play.menu2Layer.visible=false;
    //c_scene_play.logoLayer.visible=false;
    var canvas = document.getElementById("gameCanvas");
    //var img    = canvas.toDataURL("image/png");

    //window.location.href=image; // it will save locally

    var explorer =  document.all ? 'IE' : 'others';

    if(explorer=='IE'){
        //alert(1);
        try{
            var img    = canvas.toDataURL("image/png");
            //img="http://www.baidufe.com/fe/blog/static/img/fe-128.png?v=04657412";
            var k = window.open();
            k.document.write('<img src="'+img+'" />');
            k.document.close();
        }catch(err){
            cc.log("[error] - save() - "+ err);
            alert(err);
        }
    }else{
        var img = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
        window.win = open (img);
        var type="png";
        // 下载后的问题名
        var filename = 'KawaiiBeautyDressup_' + (new Date()).getTime() + '.' + type;
        // download
        saveFile(img,filename);
    }


    //window.win.document.execCommand("SaveAs");
    //setTimeout('win.document.execCommand("SaveAs");', 500);
    //c_scene_play.menu2Layer.visible=true;
    //c_scene_play.logoLayer.visible=true;

}
function printFun(){
    //c_scene_play.menu2Layer.visible=false;
    //c_scene_play.logoLayer.visible=false;
    window.print();
    //c_scene_play.menu2Layer.visible=true;
    //c_scene_play.logoLayer.visible=true;
}
function replay(){
    try
    {
        GameAPI.GameBreak.request(pauseGame, resumeGame);
    }
    catch (error)	{	}
    cc.director.runScene(new StartScene());
}

function startPlay(){
    var playScene = new PlayScene();
    cc.director.runScene(playScene);
    c_scene_play = playScene;
}


var BackGroundLayer = cc.Layer.extend({
    isLogoInit:false,
    logoMenu:null
});

var StartLayer = BackGroundLayer.extend({
    ctor:function () {
        this._super();
        var size = cc.director.getWinSize();

        addBackGround(this,res.start_background_png);
        //addBackGroundWithZindex(this,res.kuang_background_png,9999);

        addMusicButton(this);

        //play button begin
        var playSprite = cc.Sprite.create(res.play_png);
        var playSelectedSprite = cc.Sprite.create(res.play_selected_png);
        var playDisabledSprite = cc.Sprite.create(res.play_selected_png);

        var pTemp = cc.p((playSprite.width-playSelectedSprite.width)/2,
                (playSprite.height-playSelectedSprite.height)/2);

        playSelectedSprite.setPosition( pTemp );
        playDisabledSprite.setPosition( pTemp );

        //play button event
        var playMenuItemSprite = cc.MenuItemSprite.create(playSprite, playSelectedSprite, playDisabledSprite, function(pSender){
            cc.log("play button hit");
            //alert();
            startPlay();

        }, this);
        var playMenu = cc.Menu.create(playMenuItemSprite);

        playMenu.anchorX=0.5;
        playMenu.anchorY=0.5;
        playMenu.x=c_p_start_play_x;
        playMenu.y=c_p_start_play_y;

        this.addChild(playMenu,1);
        //play button end


        //more games button begin
        var moreGamesSprite = cc.Sprite.create(res.more_games_png);
        var moreGamesSelectedSprite = cc.Sprite.create(res.more_games_selected_png);
        var moreGamesDisabledSprite = cc.Sprite.create(res.more_games_selected_png);

        pTemp = cc.p((moreGamesSprite.width-moreGamesSelectedSprite.width)/2,
                (moreGamesSprite.height-moreGamesSelectedSprite.height)/2);

        moreGamesSelectedSprite.setPosition( pTemp );
        moreGamesDisabledSprite.setPosition( pTemp );

        var moreGamesMenuItemSprite = cc.MenuItemSprite.create(moreGamesSprite, moreGamesSelectedSprite, moreGamesDisabledSprite, function(pSender){
            window.open( 'http://www.localhost', '_blank' )
        }, this);
        var moreGamesMenu = cc.Menu.create(moreGamesMenuItemSprite);

        moreGamesMenu.anchorX=0.5;
        moreGamesMenu.anchorY=0.5;
        moreGamesMenu.x=c_p_start_more_games_x;
        moreGamesMenu.y=c_p_start_more_games_y;

        this.addChild(moreGamesMenu,2);
        //more games button end



        return true;
    },
    update:function (dt) {
        this._super();
        var size = cc.director.getWinSize();




    }
});

var StartScene = cc.Scene.extend({
    onEnter:function () {
        document.body.onclick = null;
        this._super();
        var layer = new StartLayer();
        this.addChild(layer);

        var logoLayer = cc.Layer.create();
        addLogoButton(logoLayer,9999999);
        this.addChild(logoLayer);

        //testing
        //startPlay();
    }
});

// 正式游戏层 --------------------------------------------------------------------------------------------------

var WuPinLanLayer  =cc.Layer.extend({
    _btns:null,
    _curBtnIndex:0,
    ctor:function(){
        this._super();
        this.initBtns(this._curBtnIndex);
    },
    getBtnFilePathByIndex:function(index){
        if(index==1){
            return res.wu_pin_lan_btn_xiayi_png;
        }else if(index==2){
            return res.wu_pin_lan_btn_shangyi_png;
        }else if(index==3){
            return res.wu_pin_lan_btn_lianyi_png;
        }else if(index==4){
            return res.wu_pin_lan_btn_shouna_png;
        }else if(index==5){
            return res.wu_pin_lan_btn_chongwu_png;
        }else if(index==6){
            return res.wu_pin_lan_btn_fuse_png;
        }else if(index==7){
            return res.wu_pin_lan_btn_toufa_png;
        }else if(index==8){
            return res.wu_pin_lan_btn_toushi_png;
        }else{
            return res.wu_pin_lan_btn_xianglian_png;
        }
    },

    getBtnFilePathByIndex2:function(index){
        if(index==1){
            return res.wu_pin_lan_btn_xiayi2_png;
        }else if(index==2){
            return res.wu_pin_lan_btn_shangyi2_png;
        }else if(index==3){
            return res.wu_pin_lan_btn_lianyi2_png;
        }else if(index==4){
            return res.wu_pin_lan_btn_shouna2_png;
        }else if(index==5){
            return res.wu_pin_lan_btn_chongwu2_png;
        }else if(index==6){
            return res.wu_pin_lan_btn_fuse2_png;
        }else if(index==7){
            return res.wu_pin_lan_btn_toufa2_png;
        }else if(index==8){
            return res.wu_pin_lan_btn_toushi2_png;
        }else{
            return res.wu_pin_lan_btn_xianglian2_png;
        }
    },

    initBtns:function(index){
        //alert();
        if(this._btns!=null){
            for(var i=0;i<9;i++){
                this._btns[i].removeFromParent(true);
            }
        }else{
            this._btns = new Array();
        }
        for(var i=0;i<9;i++){

            var sprite = cc.Sprite.create(this.getBtnFilePathByIndex(i));
            var sprite2 = cc.Sprite.create(this.getBtnFilePathByIndex2(i));

            var pTemp = cc.p((sprite.width-sprite2.width)/2,
                    (sprite.height-sprite2.height)/2);

            sprite2.setPosition( pTemp );

            var menuItemSprite = cc.MenuItemSprite.create(sprite, sprite2, sprite2, function(pSender){
                cc.log("wu pin lan button hit");
                var tag = pSender.getTag();
                cc.log("tag="+tag);
                if(tag==c_p_btn_index){
                    return true;
                }
                c_p_btn_index = tag;
                c_scene_play.showOptionLayer(tag);

            }, this);
            menuItemSprite.setTag(i);

            var menu = cc.Menu.create(menuItemSprite);

            menu.anchorX=0.5;
            menu.anchorY=0.5;
            if(i<5){
                menu.x=c_p_play_wu_pin_fenlei_btn1_x + i * c_p_play_wu_pin_fenlei_btn_col1_jianju;
                menu.y=c_p_play_wu_pin_fenlei_btn1_y;
            }else{
                menu.x=c_p_play_wu_pin_fenlei_btn2_x + (i-5) * c_p_play_wu_pin_fenlei_btn_col2_jianju;
                menu.y=c_p_play_wu_pin_fenlei_btn2_y;
            }

            menu.setTag(i);
            this.addChild(menu,3+i);

            this._btns[i]=menu;

        }
    }

});

var PlayScene = cc.Scene.extend({
    backGroundLayer:null,
    bodyLayer:null,
    menuLayer:null,
    menu2Layer:null,
    wupinlanLayer:null,
    logoLayer:null,
    optionsLayers:null,
    shows:null,
    sprite_shouna_hou:null,
    sprite_fuse_hou:null,
    sprite_toufa_hou:null,
    sprite_shangyi_hou:null,
    sprite_erzhui_hou:null,

    showOptionLayer:function(layerIndex){
        for(var i=0;i<9;i++){
            if(i==layerIndex){
                c_scene_play.optionsLayers[i].visible=true;
            }else{
                c_scene_play.optionsLayers[i].visible=false;
            }
        }
        c_p_btn_index = layerIndex;
    },
    show:function(index){
        cc.log("show() -  begin");
        //不是分类的index，分类的衣服的index
        if(this.shows==null){
            this.shows = new Array();
        }


        //shangyi and xiayi 和 lianyi 不能同时存在
        if(c_p_btn_index==1 || c_p_btn_index==2){
            if(this.shows[3]!=null) {
                this.shows[3].visible = false;
                this.shows[3].removeFromParent(true);
            }
        }
        if(c_p_btn_index==3){
            if(this.shows[1]!=null) {
                this.shows[1].visible = false;
                this.shows[1].removeFromParent(true);
            }
            if(this.shows[2]!=null) {
                this.shows[2].visible = false;
                this.shows[2].removeFromParent(true);
                this.sprite_shangyi_hou.visible = false;
                this.sprite_shangyi_hou.removeFromParent(true);
            }
        }

        if(this.shows[c_p_btn_index]!=null && !(c_p_btn_index==0 && index>5)){
            this.shows[c_p_btn_index].visible = false;
            this.shows[c_p_btn_index].removeFromParent(true);
        }

        var parameters = this.getOptionBtnFilePathByIndex(c_p_btn_index,index);

        cc.log(parameters);

        var sprite = cc.Sprite.create(parameters[3]);
        sprite.anchorX=0;
        sprite.anchorY=1;

        sprite.x=parameters[4];
        sprite.y=parameters[5];

        z=2000+10*c_p_btn_index;

        if(c_p_btn_index==6){
            z=1999;
        }

        if(c_p_btn_index==0){
            z=2000+10*7-1;
        }

        if(c_p_btn_index!=0){
            this.bodyLayer.addChild(sprite,z);
            this.shows[c_p_btn_index] = sprite;
        }

        //erzhui layer
        if(c_p_btn_index==0){
            if(index>5){
                if(this.sprite_erzhui_hou!=null) {
                    this.sprite_erzhui_hou.visible = false;
                    this.sprite_erzhui_hou.removeFromParent(true);
                }

                var sprite2 = cc.Sprite.create(parameters[3]);
                sprite2.anchorX=0;
                sprite2.anchorY=1;

                sprite2.x=parameters[4];
                sprite2.y=parameters[5];

                //层次比fuse低一级
                this.bodyLayer.addChild(sprite2,2000+10*8+3);
                this.sprite_erzhui_hou = sprite2;
            }else{
                this.bodyLayer.addChild(sprite,z);
                this.shows[c_p_btn_index] = sprite;
            }
        }

        //shangyi layer
        if(c_p_btn_index==2){
            if(this.sprite_shangyi_hou!=null) {
                this.sprite_shangyi_hou.visible = false;
                this.sprite_shangyi_hou.removeFromParent(true);
            }

            var sprite2 = cc.Sprite.create(parameters[6]);
            sprite2.anchorX=0;
            sprite2.anchorY=1;

            sprite2.x=parameters[7];
            sprite2.y=parameters[8];

            //层次比fuse低一级
            this.bodyLayer.addChild(sprite2,2000+10*8+3);
            this.sprite_shangyi_hou = sprite2;
        }
        //shouna layer
        if(c_p_btn_index==4){
            if(this.sprite_shouna_hou!=null) {
                this.sprite_shouna_hou.visible = false;
                this.sprite_shouna_hou.removeFromParent(true);
            }

            var sprite2 = cc.Sprite.create(parameters[6]);
            sprite2.anchorX=0;
            sprite2.anchorY=1;

            sprite2.x=parameters[7];
            sprite2.y=parameters[8];

            this.bodyLayer.addChild(sprite2,1999-1);
            this.sprite_shouna_hou = sprite2;
        }

        //fuse layer
        if(c_p_btn_index==6){
            if(this.sprite_fuse_hou!=null) {
                this.sprite_fuse_hou.visible = false;
                this.sprite_fuse_hou.removeFromParent(true);
            }

            var sprite2 = cc.Sprite.create(parameters[6]);
            sprite2.anchorX=0;
            sprite2.anchorY=1;

            sprite2.x=parameters[7];
            sprite2.y=parameters[8];

            //层次比fuse低一级
            this.bodyLayer.addChild(sprite2,2000+10*8+2);
            this.sprite_fuse_hou = sprite2;
        }

        //toufa layer
        if(c_p_btn_index==7){
            if(this.sprite_toufa_hou!=null) {
                this.sprite_toufa_hou.visible = false;
                this.sprite_toufa_hou.removeFromParent(true);
            }
            if(parameters[6]!=""){
                var sprite2 = cc.Sprite.create(parameters[6]);
                sprite2.anchorX=0;
                sprite2.anchorY=1;

                sprite2.x=parameters[7];
                sprite2.y=parameters[8];

                //层次比fuse低一级
                this.bodyLayer.addChild(sprite2,1998);
                this.sprite_toufa_hou = sprite2;
            }else{
                this.sprite_toufa_hou = null;
            }
        }

        c_p_option_index = index;

        cc.log("show() -  end");
    },
    addOption:function(layerIndex,index){
        //layerIndex 为分类的， index为这个分类下的选项的
        if(this.optionsLayers[layerIndex]==null){
            this.optionsLayers[layerIndex] = cc.Layer.create();
        }

        var layer=this.optionsLayers[layerIndex];
        var parameters = this.getOptionBtnFilePathByIndex(layerIndex,index)
        var sprite = cc.Sprite.create(parameters[0]);
        var sprite2 = cc.Sprite.create(parameters[0]);

        sprite2.scaleX=1.06;
        sprite2.scaleY=1.06;
        //sprite2.opacity = 200;

        var pTemp = cc.p((sprite.width-sprite2.width*sprite2.scaleX)/2,
                (sprite.height-sprite2.height*sprite2.scaleY)/2);

        sprite2.setPosition( pTemp );

        var menuItemSprite = cc.MenuItemSprite.create(sprite, sprite2, sprite2, function(pSender){
            cc.log("wu pin lan options button hit");
            var tag = pSender.getTag();
            cc.log("tag="+tag);
            c_scene_play.show(tag);
        }, this);
        menuItemSprite.setTag(index);

        var menu = cc.Menu.create(menuItemSprite);

        menu.anchorX=0.5;
        menu.anchorY=0.5;

        menu.x=parameters[1] - 20* layerIndex;
        menu.y=parameters[2] + 20* layerIndex;;

        menu.setTag(index);

        layer.addChild(menu,3+index);

    },

    getOptionBtnFilePathByIndex:function(layerIndex,optionIndex){
        //layerIndex 为分类的， index为这个分类下的选项的

        if(layerIndex==0){
            //xianglian
            //erzhui
            var temp = new Array();
            var xa=-20;
            var ya=0;
            var x1=696-175;
            var y1=422-70;
            x1+=xa;
            y1+=ya;
            var xjianju=160;
            var yjianju=127;
            var x;
            var y;
            if(optionIndex==0){
                x=254.35;
                y=217.85;
                temp[0]=res.wu_pin_lan_option_xianglian1_png;
                temp[1]=x1;
                temp[2]=y1;
                temp[3]=res.wu_pin_lan_show_xianglian1_png;
            }else if(optionIndex==1){
                x=254.35;
                y=217.35;
                temp[0]=res.wu_pin_lan_option_xianglian2_png;
                temp[1]=x1-xjianju;
                temp[2]=y1;
                temp[3]=res.wu_pin_lan_show_xianglian2_png;
            }else if(optionIndex==2){
                x=251.35;
                y=210.35;
                temp[0]=res.wu_pin_lan_option_xianglian3_png;
                temp[1]=x1-2*xjianju;
                temp[2]=y1;
                temp[3]=res.wu_pin_lan_show_xianglian3_png;
            }else if(optionIndex==3){
                x=253.35;
                y=213.35;
                temp[0]=res.wu_pin_lan_option_xianglian4_png;
                temp[1]=x1;
                temp[2]=y1+yjianju;
                temp[3]=res.wu_pin_lan_show_xianglian4_png;
            }else if(optionIndex==4){
                x=256.35;
                y=215.35;
                temp[0]=res.wu_pin_lan_option_xianglian5_png;
                temp[1]=x1-xjianju;
                temp[2]=y1+yjianju;
                temp[3]=res.wu_pin_lan_show_xianglian5_png;
            }else if(optionIndex==5){
                x=253.35;
                y=214.35;
                temp[0]=res.wu_pin_lan_option_xianglian6_png;
                temp[1]=x1-2*xjianju;
                temp[2]=y1+yjianju;
                temp[3]=res.wu_pin_lan_show_xianglian6_png;
            }else if(optionIndex==6){
                x=366.45;
                y=152.55;
                temp[0]=res.wu_pin_lan_option_erzhui1_png;
                temp[1]=x1;
                temp[2]=y1+2*yjianju;
                temp[3]=res.wu_pin_lan_show_erzhui1_png;
            }else if(optionIndex==7){
                x=367.45;
                y=155.55;
                temp[0]=res.wu_pin_lan_option_erzhui2_png;
                temp[1]=x1-xjianju;
                temp[2]=y1+2*yjianju;
                temp[3]=res.wu_pin_lan_show_erzhui2_png;
            }else if(optionIndex==8){
                x=365.45;
                y=155.55;
                temp[0]=res.wu_pin_lan_option_erzhui3_png;
                temp[1]=x1-2*xjianju;
                temp[2]=y1+2*yjianju;
                temp[3]=res.wu_pin_lan_show_erzhui3_png;
            }else if(optionIndex==9){
                x=364.45;
                y=157.55;
                temp[0]=res.wu_pin_lan_option_erzhui4_png;
                temp[1]=x1;
                temp[2]=y1+3*yjianju;
                temp[3]=res.wu_pin_lan_show_erzhui4_png;
            }else if(optionIndex==10){
                x=366.55;
                y=152.55;
                temp[0]=res.wu_pin_lan_option_erzhui5_png;
                temp[1]=x1-xjianju;
                temp[2]=y1+3*yjianju;
                temp[3]=res.wu_pin_lan_show_erzhui5_png;
            }else if(optionIndex==11){
                x=362.45;
                y=158.55;
                temp[0]=res.wu_pin_lan_option_erzhui6_png;
                temp[1]=x1-2*xjianju;
                temp[2]=y1+3*yjianju;
                temp[3]=res.wu_pin_lan_show_erzhui6_png;
            }
            temp[4]=c_p_play_fuse_x+x;
            temp[5]=c_p_play_fuse_y-y;
            return temp;

        }else if(layerIndex==1){
            //xiayi
            var temp = new Array();
            var xa=0;
            var ya=0;
            var x1=208;
            var y1=625;
            x1+=xa;
            y1+=ya;
            var xjianju=172;
            var yjianju=190;
            var x;
            var y;
            if(optionIndex==0){
                x=-21.10;
                y=389.50;
                temp[0]=res.wu_pin_lan_option_xiayi1_png;
                temp[1]=x1;
                temp[2]=y1;
                temp[3]=res.wu_pin_lan_show_xiayi1_png;
            }else if(optionIndex==1){
                x=-21.10;
                y=389.50;
                temp[0]=res.wu_pin_lan_option_xiayi2_png;
                temp[1]=x1+xjianju;
                temp[2]=y1;
                temp[3]=res.wu_pin_lan_show_xiayi2_png;
            }else if(optionIndex==2){
                x=-21.10;
                y=389.50;
                temp[0]=res.wu_pin_lan_option_xiayi3_png;
                temp[1]=x1;
                temp[2]=y1-yjianju;
                temp[3]=res.wu_pin_lan_show_xiayi3_png;
            }else if(optionIndex==3){
                x=-21.10;
                y=389.50;
                temp[0]=res.wu_pin_lan_option_xiayi4_png;
                temp[1]=x1+xjianju;
                temp[2]=y1-yjianju;
                temp[3]=res.wu_pin_lan_show_xiayi4_png;
            }else if(optionIndex==4){
                x=-21.10;
                y=389.50;
                temp[0]=res.wu_pin_lan_option_xiayi5_png;
                temp[1]=x1+2*xjianju;
                temp[2]=y1-yjianju;
                temp[3]=res.wu_pin_lan_show_xiayi5_png;
            }else{
                //optionIndex==5
                x=-23.10;
                y=401.50;
                temp[0]=res.wu_pin_lan_option_xiayi6_png;
                temp[1]=x1+2*xjianju;
                temp[2]=y1;
                temp[3]=res.wu_pin_lan_show_xiayi6_png;
            }
            temp[4]=c_p_play_fuse_x+x;
            temp[5]=c_p_play_fuse_y-y;
            return temp;


        }else if(layerIndex==2) {
            //shangyi

            var temp = new Array();
            var xa=0;
            var ya=0;

            var x1=200;
            var y1=380;
            x1+=xa;
            y1+=ya;
            var xjianju=190;
            var yjianju=260;
            var x;
            var y;
            if(optionIndex==0){
                x=212.05;
                y=202.95;
                temp[0]=res.wu_pin_lan_option_shangyi1_png;
                temp[1]=x1;
                temp[2]=y1;
                temp[3]=res.wu_pin_lan_show_shangyi1_1_png;

                x_hou=213.00;
                y_hou=201.95;
                temp[6]=res.wu_pin_lan_show_shangyi1_2_png;

            }else if(optionIndex==1){
                x=210.05;
                y=204.90;
                temp[0]=res.wu_pin_lan_option_shangyi2_png;
                temp[1]=x1+xjianju;
                temp[2]=y1;
                temp[3]=res.wu_pin_lan_show_shangyi2_png;
            }else if(optionIndex==2){
                x=210.05;
                y=204.90;
                temp[0]=res.wu_pin_lan_option_shangyi3_png;
                temp[1]=x1+2*xjianju;
                temp[2]=y1;
                temp[3]=res.wu_pin_lan_show_shangyi3_1_png;

                x_hou=212.05;
                y_hou=204.90;
                temp[6]=res.wu_pin_lan_show_shangyi3_2_png;

            }else if(optionIndex==3){
                x=212.05;
                y=203.90;
                temp[0]=res.wu_pin_lan_option_shangyi4_png;
                temp[1]=x1;
                temp[2]=y1+yjianju;
                temp[3]=res.wu_pin_lan_show_shangyi4_png;
            }else if(optionIndex==4){
                x=211.05;
                y=205.90;
                temp[0]=res.wu_pin_lan_option_shangyi5_png;
                temp[1]=x1+xjianju;
                temp[2]=y1+yjianju;
                temp[3]=res.wu_pin_lan_show_shangyi5_1_png;

                x_hou=211.05;
                y_hou=206.90;
                temp[6]=res.wu_pin_lan_show_shangyi5_2_png;

            }else{
                //optionIndex==5
                x=211.05;
                y=204.90;
                temp[0]=res.wu_pin_lan_option_shangyi6_png;
                temp[1]=x1+2*xjianju;
                temp[2]=y1+yjianju;
                temp[3]=res.wu_pin_lan_show_shangyi6_1_png;

                x_hou=211.05;
                y_hou=206.90;
                temp[6]=res.wu_pin_lan_show_shangyi6_2_png;

            }
            temp[4]=c_p_play_fuse_x+x;
            temp[5]=c_p_play_fuse_y-y;

            temp[7]=c_p_play_fuse_x+x_hou;
            temp[8]=c_p_play_fuse_y-y_hou;
            return temp;


        }else if(layerIndex==3){
            //lianyi

            var temp = new Array();
            var xa=0;
            var ya=0;
            var x1=258-45;
            var y1=395-23-30;
            x1+=xa;
            y1+=ya;
            var xjianju=138;
            var yjianju=280;
            var x;
            var y;


            if(optionIndex==0){
                x=-22.10;
                y=202.55;
                temp[0]=res.wu_pin_lan_option_lianyi1_png;
                temp[1]=x1;
                temp[2]=y1;
                temp[3]=res.wu_pin_lan_show_lianyi1_png;
            }else if(optionIndex==1){
                x=-21.10;
                y=202.60;
                temp[0]=res.wu_pin_lan_option_lianyi2_png;
                temp[1]=x1+xjianju;
                temp[2]=y1;
                temp[3]=res.wu_pin_lan_show_lianyi2_png;
            }else if(optionIndex==2){
                x=-21.10;
                y=203.60;
                temp[0]=res.wu_pin_lan_option_lianyi3_png;
                temp[1]=x1+2*xjianju;
                temp[2]=y1;
                temp[3]=res.wu_pin_lan_show_lianyi3_png;

            }else if(optionIndex==3){
                x=-21.10;
                y=203.65;
                temp[0]=res.wu_pin_lan_option_lianyi4_png;
                temp[1]=x1+3*xjianju;;
                temp[2]=y1;
                temp[3]=res.wu_pin_lan_show_lianyi4_png;
            }else if(optionIndex==4){
                x=-21.10;
                y=202.60;
                temp[0]=res.wu_pin_lan_option_lianyi5_png;
                temp[1]=x1;
                temp[2]=y1+yjianju;
                temp[3]=res.wu_pin_lan_show_lianyi5_png;
            }else if(optionIndex==5){
                x=-22.10;
                y=204.65;
                temp[0]=res.wu_pin_lan_option_lianyi6_png;
                temp[1]=x1+xjianju;;
                temp[2]=y1+yjianju;
                temp[3]=res.wu_pin_lan_show_lianyi6_png;
            }else if(optionIndex==6){
                x=-20.10;
                y=203.60;
                temp[0]=res.wu_pin_lan_option_lianyi7_png;
                temp[1]=x1+2*xjianju;
                temp[2]=y1+yjianju;
                temp[3]=res.wu_pin_lan_show_lianyi7_png;
            }else{
                //optionIndex==7
                x=-20.10;
                y=205.60;
                temp[0]=res.wu_pin_lan_option_lianyi8_png;
                temp[1]=x1+3*xjianju;
                temp[2]=y1+yjianju;
                temp[3]=res.wu_pin_lan_show_lianyi8_png;
            }

            temp[4]=c_p_play_fuse_x+x;
            temp[5]=c_p_play_fuse_y-y;
            return temp;

        }else if(layerIndex==4){
           //shouna

            var temp = new Array();
            var xa=0;
            var ya=0;
            var x1=288-46;
            var y1=385-40;
            x1+=xa;
            y1+=ya;
            var xjianju=190;
            var yjianju=250;
            var x;
            var y;
            var x_hou=0;
            var y_hou=0;

            x=13.45;
            y=-189.15;
            x_hou=14.45;
            y_hou=-191.10;

            if(optionIndex==0){

                temp[0]=res.wu_pin_lan_option_shouna1_png;
                temp[1]=x1;
                temp[2]=y1;
                temp[3]=res.wu_pin_lan_show_shouna1_1_png;
                temp[6]=res.wu_pin_lan_show_shouna1_2_png;
            }else if(optionIndex==1){

                temp[0]=res.wu_pin_lan_option_shouna2_png;
                temp[1]=x1+xjianju;
                temp[2]=y1;
                temp[3]=res.wu_pin_lan_show_shouna2_1_png;
                temp[6]=res.wu_pin_lan_show_shouna2_2_png;
            }else if(optionIndex==2){

                temp[0]=res.wu_pin_lan_option_shouna3_png;
                temp[1]=x1+2*xjianju;
                temp[2]=y1;
                temp[3]=res.wu_pin_lan_show_shouna3_1_png;
                temp[6]=res.wu_pin_lan_show_shouna3_2_png;
            }else if(optionIndex==3){

                temp[0]=res.wu_pin_lan_option_shouna4_png;
                temp[1]=x1;
                temp[2]=y1+yjianju;
                temp[3]=res.wu_pin_lan_show_shouna4_1_png;
                temp[6]=res.wu_pin_lan_show_shouna4_2_png;
            }else if(optionIndex==4){

                temp[0]=res.wu_pin_lan_option_shouna5_png;
                temp[1]=x1+xjianju;
                temp[2]=y1+yjianju;;
                temp[3]=res.wu_pin_lan_show_shouna5_1_png;
                temp[6]=res.wu_pin_lan_show_shouna5_2_png;
            }else{

                temp[0]=res.wu_pin_lan_option_shouna6_png;
                temp[1]=x1+2*xjianju;
                temp[2]=y1+yjianju;;
                temp[3]=res.wu_pin_lan_show_shouna6_1_png;
                temp[6]=res.wu_pin_lan_show_shouna6_2_png;
            }

            temp[4]=c_p_play_fuse_x+x;
            temp[5]=c_p_play_fuse_y-y;

            temp[7]=c_p_play_fuse_x+x_hou;
            temp[8]=c_p_play_fuse_y-y_hou;
            return temp;

        }else if(layerIndex==5){
            //chongwu
            var temp = new Array();
            var xa=20;
            var ya=-170;

            var x;
            var y;
            if(optionIndex==0){

                temp[0]=res.wu_pin_lan_option_chongwu1_png;
                temp[1]=284;
                temp[2]=712;
                temp[3]=res.wu_pin_lan_show_chongwu1_png;
            }else if(optionIndex==1){

                temp[0]=res.wu_pin_lan_option_chongwu2_png;
                temp[1]=573;
                temp[2]=712;

                temp[3]=res.wu_pin_lan_show_chongwu2_png;
            }else if(optionIndex==2){
                temp[0]=res.wu_pin_lan_option_chongwu3_png;
                temp[1]=284;
                temp[2]=443;
                temp[3]=res.wu_pin_lan_show_chongwu3_png;
            }else{
                temp[0]=res.wu_pin_lan_option_chongwu4_png;
                temp[1]=573;
                temp[2]=443;
                temp[3]=res.wu_pin_lan_show_chongwu4_png;
            }
            x=-100;
            y=380;

            temp[1] +=xa;
            temp[2] +=ya;
            temp[4]=c_p_play_fuse_x+x;
            temp[5]=c_p_play_fuse_y-y;
            return temp;

        }else if(layerIndex==6){
            //fuse
            var temp = new Array();
            var xa=20;
            var ya=-170;

            var x_hou=-1;
            var y_hou=74.95;
            if(optionIndex==0){

                temp[0]=res.wu_pin_lan_option_fuse1_png;
                temp[1]=284;
                temp[2]=712;

                temp[3]=res.wu_pin_lan_show_fuse1_png;
                temp[6]=res.wu_pin_lan_show_fuse1_2_png;
            }else if(optionIndex==1){

                temp[0]=res.wu_pin_lan_option_fuse2_png;
                temp[1]=573;
                temp[2]=712;

                temp[3]=res.wu_pin_lan_show_fuse2_png;
                temp[6]=res.wu_pin_lan_show_fuse2_2_png;
            }else if(optionIndex==2){

                temp[0]=res.wu_pin_lan_option_fuse3_png;
                temp[1]=284;
                temp[2]=443;

                temp[3]=res.wu_pin_lan_show_fuse3_png;
                temp[6]=res.wu_pin_lan_show_fuse3_2_png;
            }else{

                temp[0]=res.wu_pin_lan_option_fuse4_png;
                temp[1]=573;
                temp[2]=443;

                temp[3]=res.wu_pin_lan_show_fuse4_png;
                temp[6]=res.wu_pin_lan_show_fuse4_2_png;
            }





            temp[1] +=xa;
            temp[2] +=ya;
            temp[4]=c_p_play_fuse_x;
            temp[5]=c_p_play_fuse_y;

            temp[7]=c_p_play_fuse_x+x_hou;
            temp[8]=c_p_play_fuse_y-y_hou;

            return temp;


        }else if(layerIndex==7){
            //toufa
            var temp = new Array();
            var xa=30;
            var ya=-240;
            var xjianju=190;
            var yjianju=230+10;

            var x1=238+15;
            var y1=742-yjianju;
            x1+=xa;
            y1+=ya;

            var x;
            var y;
            var x_hou=0;
            var y_hou=0;

            if(optionIndex==0){
                x=181.80;
                y=-49.15;
                temp[0]=res.wu_pin_lan_option_toufa1_png;
                temp[1]=x1;
                temp[2]=y1;
                temp[3]=res.wu_pin_lan_show_toufa1_png;
            }else if(optionIndex==1){
                x=180.80;
                y=-49.15;
                temp[0]=res.wu_pin_lan_option_toufa2_png;
                temp[1]=x1+xjianju;
                temp[2]=y1+yjianju;
                temp[3]=res.wu_pin_lan_show_toufa2_png;
                temp[6]=res.wu_pin_lan_show_toufa2hou_png;
                x_hou=180.80;
                y_hou=-49.15;
                temp[7]=c_p_play_fuse_x+x_hou;
                temp[8]=c_p_play_fuse_y-y_hou;
            }else if(optionIndex==2){
                x=178.80;
                y=-50.15;
                temp[0]=res.wu_pin_lan_option_toufa3_png;
                temp[1]=x1+2*xjianju;
                temp[2]=y1+yjianju;
                temp[3]=res.wu_pin_lan_show_toufa3_png;
            }else if(optionIndex==3){
                x=180.80;
                y=-48.15;
                temp[0]=res.wu_pin_lan_option_toufa4_png;
                temp[1]=x1;
                temp[2]=y1+yjianju;
                temp[3]=res.wu_pin_lan_show_toufa4_png;
            }else if(optionIndex==4){
                x=180.80;
                y=-48.15;
                temp[0]=res.wu_pin_lan_option_toufa5_png;
                temp[1]=x1+xjianju;
                temp[2]=y1;
                temp[3]=res.wu_pin_lan_show_toufa5_png;
            }else{
                //optionIndex==5
                x=180.80;
                y=-48.15;
                temp[0]=res.wu_pin_lan_option_toufa6_png;
                temp[1]=x1+2*xjianju;
                temp[2]=y1;
                temp[3]=res.wu_pin_lan_show_toufa6_png;
            }
            temp[4]=c_p_play_fuse_x+x;
            temp[5]=c_p_play_fuse_y-y;

            return temp;


        }else if(layerIndex==8){
            //toushi
            var temp = new Array();
            var xa=130;
            var ya=-150-30;
            var x1=198-20;
            var y1=742-65;
            x1+=xa;
            y1+=ya;
            var xjianju=190;
            var yjianju=210;
            var x;
            var y;
            if(optionIndex==0){
                x=225.80;
                y=-19.15;
                temp[0]=res.wu_pin_lan_option_toushi1_png;
                temp[1]=x1;
                temp[2]=y1;
                temp[3]=res.wu_pin_lan_show_toushi1_png;
            }else if(optionIndex==1){
                x=218.80;
                y=-8.15;
                temp[0]=res.wu_pin_lan_option_toushi2_png;
                temp[1]=x1+xjianju;
                temp[2]=y1;
                temp[3]=res.wu_pin_lan_show_toushi2_png;
            }else if(optionIndex==2){
                x=220.80;
                y=-21.15;
                temp[0]=res.wu_pin_lan_option_toushi3_png;
                temp[1]=x1+2*xjianju;
                temp[2]=y1;
                temp[3]=res.wu_pin_lan_show_toushi3_png;
            }else if(optionIndex==3){
                x=217.80;
                y=10.85;
                temp[0]=res.wu_pin_lan_option_toushi4_png;
                temp[1]=x1;
                temp[2]=y1-yjianju;
                temp[3]=res.wu_pin_lan_show_toushi4_png;
            }else if(optionIndex==4){
                x=210.80;
                y=-34.15;
                temp[0]=res.wu_pin_lan_option_toushi5_png;
                temp[1]=x1+xjianju;
                temp[2]=y1-yjianju;
                temp[3]=res.wu_pin_lan_show_toushi5_png;
            }else{
                //optionIndex==5
                x=216.80;
                y=-18.15;
                temp[0]=res.wu_pin_lan_option_toushi6_png;
                temp[1]=x1+2*xjianju;
                temp[2]=y1-yjianju;
                temp[3]=res.wu_pin_lan_show_toushi6_png;
            }
            temp[4]=c_p_play_fuse_x+x;
            temp[5]=c_p_play_fuse_y-y;
            return temp;
        }

    },
    initOptionsLayers:function(){
        if(this.optionsLayers==null){
            this.optionsLayers= new Array();
        }
        for(var i=0;i<9;i++){
            for(var j=0;j<30;j++){
                if(i==0) {
                    if (j == 12) {
                        break;
                    }
                }else if(i==1) {
                    if (j == 6) {
                        break;
                    }
                }else if(i==2) {
                    if (j == 6) {
                        break;
                    }
                }else if(i==3) {
                    if (j == 8) {
                        break;
                    }
                }else if(i==4) {
                    if (j == 6) {
                        break;
                    }
                }else if(i==5) {
                    if (j==4) {
                        break;
                    }
                }else if(i==6){
                    if(j==4){
                        break;
                    }
                }else if(i==7){
                    if(j==6){
                        break;
                    }
                }else if(i==8){
                    if(j==6){
                        break;
                    }
                }
                this.addOption(i,j)
                this.addChild(this.optionsLayers[i],8888+i);
            }
            /*
            if(i==8){
                var childBackground = cc.Sprite.create(res.wu_pin_lan_child_background_png);
                childBackground.anchorX=0;
                childBackground.anchorY=1;
                childBackground.x=145;
                childBackground.y=806;
                this.optionsLayers[i].addChild(childBackground,2);
            }
            */
        }
        //初始显示fuse层 option
        this.showOptionLayer(6);
        this.show(0);
        this.showOptionLayer(7);
        this.show(0);

    },
    initLogoLayer:function(){
        this.logoLayer = cc.Layer.create();

		if(is_show_logo){
			addLogoButton(this.logoLayer);
		}
        
        addMusicButton(this.logoLayer);

        this.addChild(this.logoLayer,9999999);
    },
    initBackGroundLayer:function(){
        this.backGroundLayer = new BackGroundLayer();
        addBackGround(this.backGroundLayer,res.play_background_png);
        //addBackGroundWithZindex(this.backGroundLayer,res.kuang_background_png,9999);

        this.addChild(this.backGroundLayer);
    },
    initMenuLayer:function(){
        this.menuLayer = cc.Layer.create();
        //reset button begin
        var resetSprite = cc.Sprite.create(res.reset_png);
        var resetSelectedSprite = cc.Sprite.create(res.reset_selected_png);
        var resetDisabledSprite = cc.Sprite.create(res.reset_selected_png);

        var pTemp = cc.p((resetSprite.width-resetSelectedSprite.width)/2,
                (resetSprite.height-resetSelectedSprite.height)/2);

        resetSelectedSprite.setPosition( pTemp );
        resetDisabledSprite.setPosition( pTemp );

        //play button event
        var resetMenuItemSprite = cc.MenuItemSprite.create(resetSprite, resetSelectedSprite, resetDisabledSprite, function(pSender){
            cc.log("reset button hit");
            //alert();
            startPlay()
        }, this);

        //more games button begin
        var moreSprite = cc.Sprite.create(res.more_games2_png);
        var moreSelectedSprite = cc.Sprite.create(res.more_games_selected2_png);
        var moreDisabledSprite = cc.Sprite.create(res.more_games_selected2_png);

        pTemp = cc.p((moreSprite.width-moreSelectedSprite.width)/2,
                (moreSprite.height-moreSelectedSprite.height)/2);

        moreSelectedSprite.setPosition( pTemp );
        moreDisabledSprite.setPosition( pTemp );

        //play button event
        var moreMenuItemSprite = cc.MenuItemSprite.create(moreSprite, moreSelectedSprite, moreDisabledSprite, function(pSender){
            window.open( 'http://www.localhost', '_blank' )

        }, this);

        //show button begin
        var showSprite = cc.Sprite.create(res.show_png);
        var showSelectedSprite = cc.Sprite.create(res.show_selected_png);
        var showDisabledSprite = cc.Sprite.create(res.show_selected_png);

        pTemp = cc.p((showSprite.width-showSelectedSprite.width)/2,
                (showSprite.height-showSelectedSprite.height)/2);

        showSelectedSprite.setPosition( pTemp );
        showDisabledSprite.setPosition( pTemp );

        //play button event
        var showMenuItemSprite = cc.MenuItemSprite.create(showSprite, showSelectedSprite, showDisabledSprite, function(pSender){
            cc.log("show button hit");
            //alert();
            if(c_scene_play!=null){
                if(c_scene_play.menuLayer.visible==true){
                    c_scene_play.menuLayer.setVisible(false);
                    c_scene_play.wupinlanLayer.setVisible(false);
                    for(var i=0;i<9;i++){
                        c_scene_play.optionsLayers[i].visible = false;
                    }
                    c_scene_play.bodyLayer.x=c_scene_play.bodyLayer.x-c_p_move_x_show_btn_hit;
                    c_scene_play.initMenu2Layer();
                }
            }

        }, this);


        var menu1 = cc.Menu.create(resetMenuItemSprite);
        menu1.anchorX=0.5;
        menu1.anchorY=0.5;
        menu1.x=c_p_play_three_btn_center_x-c_p_play_three_btn_jianju;
        menu1.y=c_p_play_three_btn_center_y;

        this.menuLayer.addChild(menu1,1);


        var menu2 = cc.Menu.create(moreMenuItemSprite);

        menu2.anchorX=0.5;
        menu2.anchorY=0.5;
        menu2.x=c_p_play_three_btn_center_x;
        menu2.y=c_p_play_three_btn_center_y;
        //menu2.alignItemsHorizontallyWithPadding(0);

        this.menuLayer.addChild(menu2,1);


        var menu3 = cc.Menu.create(showMenuItemSprite);
        menu3.anchorX=0.5;
        menu3.anchorY=0.5;
        menu3.x=c_p_play_three_btn_center_x+c_p_play_three_btn_jianju;
        menu3.y=c_p_play_three_btn_center_y;

        this.menuLayer.addChild(menu3,1);


        this.addChild(this.menuLayer);

    },

    initMenu2Layer:function(){
        this.menu2Layer = cc.Layer.create();
        var pTemp;
        if(is_save){

            

        }

        if(is_print){

            

        }

        //replay button begin
        var replaySprite = cc.Sprite.create(res.replay_png);
        var replaySelectedSprite = cc.Sprite.create(res.replay_selected_png);
        var replayDisabledSprite = cc.Sprite.create(res.replay_selected_png);

        pTemp = cc.p((replaySprite.width-replaySelectedSprite.width)/2,
                (replaySprite.height-replaySelectedSprite.height)/2);

        replaySelectedSprite.setPosition( pTemp );
        replayDisabledSprite.setPosition( pTemp );


        //replay button event
        var replayMenuItemSprite = cc.MenuItemSprite.create(replaySprite, replaySelectedSprite, replayDisabledSprite, function(pSender){
            cc.log("replay button hit");
            replay();
        }, this);


        //more games button begin
        var moreSprite = cc.Sprite.create(res.more_games2_png);
        var moreSelectedSprite = cc.Sprite.create(res.more_games_selected2_png);
        var moreDisabledSprite = cc.Sprite.create(res.more_games_selected2_png);


        pTemp = cc.p((moreSprite.width-moreSelectedSprite.width)/2,
                (moreSprite.height-moreSelectedSprite.height)/2);

        moreSelectedSprite.setPosition( pTemp );
        moreDisabledSprite.setPosition( pTemp );


        //play button event
        var moreMenuItemSprite = cc.MenuItemSprite.create(moreSprite, moreSelectedSprite, moreDisabledSprite, function(pSender){
            window.open( 'http://www.localhost', '_blank' )
        }, this);


        if(is_print){
           
        }


        if(is_save) {
            
        }



        var menu3 = cc.Menu.create(replayMenuItemSprite);

        menu3.anchorX=0.5;
        menu3.anchorY=0.5;
        menu3.x=c_p_play_four_btn_bottom_x1;
        menu3.y=c_p_play_four_btn_bottom_y + c_p_play_four_btn_bottom_jianju;
        this.menu2Layer.addChild(menu3);

        var menu4 = cc.Menu.create(moreMenuItemSprite);

        menu4.anchorX=0.5;
        menu4.anchorY=0.5;
        menu4.x=c_p_play_four_btn_bottom_x1;
        menu4.y=c_p_play_four_btn_bottom_y;
        this.menu2Layer.addChild(menu4);

        this.addChild(this.menu2Layer);
    },

    initBodyLayer:function(index){
        if(index==null){
            index=0;
        }
        this.bodyLayer = cc.Layer.create();

        this.addChild(this.bodyLayer);

    },
    initWupinlanLayer:function(){
        this.wupinlanLayer = new WuPinLanLayer();
        var wupinlanSprite = cc.Sprite.create(res.wu_pin_lan_png);
        wupinlanSprite.x=c_p_play_wu_pin_lan_x;
        wupinlanSprite.y=c_p_play_wu_pin_lan_y;
        wupinlanSprite.anchorX=0;
        wupinlanSprite.anchorY=0;
        this.wupinlanLayer.addChild(wupinlanSprite);
        this.addChild(this.wupinlanLayer);
    },
    onEnter:function () {
        this._super();
        this.init();
    },
    init:function(){
        this.initBackGroundLayer();
        this.initBodyLayer();
        this.initMenuLayer();
        this.initMenu2Layer();
        this.initWupinlanLayer();
        
		this.initLogoLayer();
		
        this.initOptionsLayers();
        this.menu2Layer.visible = false;

    }

});













