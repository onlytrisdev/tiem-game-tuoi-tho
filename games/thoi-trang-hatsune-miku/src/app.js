//Constants

var c_is_first_start_play=true;

var c_p_start_logo_x=2;
var c_p_start_logo_y=475+60;

var c_p_start_play_x=454*0.480769+300;
var c_p_start_play_y=376*0.480769+20;
var c_p_start_more_games_x=454*0.480769+300;
var c_p_start_more_games_y=194*0.480769+20;

var c_p_all_music_x=1368*0.480769;
var c_p_all_music_y=979*0.480769;

var c_p_play_fuse_x= 418-390;
var c_p_play_fuse_y= 499+10;

var c_p_play_three_btn_center_x=429*0.480769+310;
var c_p_play_three_btn_center_y=45;
var c_p_play_three_btn_jianju=207*0.480769;

var c_p_play_four_btn_bottom_x=1305*0.480769;
var c_p_play_four_btn_bottom_y=45;
var c_p_play_four_btn_bottom_x1=50;
var c_p_play_four_btn_bottom_y1=45;
var c_p_play_four_btn_bottom_jianju=100*0.480769;


var c_p_play_wu_pin_lan_x=58*0.480769+350;
var c_p_play_wu_pin_lan_y=141*0.480769 + 405 - 40;

var c_p_move_x_show_btn_hit=380*0.480769-20;

var c_p_btn_index=0;
var c_p_option_index=0;

//playScene object
var c_scene_play = null;

var c_background_index = 0;



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
	

	
		//logo button begin
		
	

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
    logoSprite.setScale(0.75*cc.contentScaleFactor());


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
    // set background picture;
    var size = cc.director.getWinSize();
    var spriteBackground;
    spriteBackground = cc.Sprite.create(res.kuan_png);
    spriteBackground.attr({
        x: size.width / 2,
        y: size.height / 2,
        scale: 1
    });
    layer.addChild(spriteBackground, 0);

    var spriteBackground2;
    spriteBackground2 = cc.Sprite.create(picPath);
    spriteBackground2.attr({
        x: size.width / 2,
        y: size.height / 2,
        scale: 1
    });
    layer.addChild(spriteBackground2, -1);


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
            //alert(err);
        }
    }else{
        var img = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
        window.win = open (img);
        var type="png";
        // 下载后的问题名
        var filename = 'HatsuneMikuDressUp_' + (new Date()).getTime() + '.' + type;
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


function addStar(layer,startScale,x0,y0){
    var star = cc.Sprite.create(res.star_png);
    star.x=x0;
    star.y=y0;
    star.scaleX=startScale;
    star.scaleY=startScale;

    var action1 = cc.Spawn.create(
        cc.ScaleBy.create(1, 2),
        cc.RotateBy.create(1, 360/8));

    var action2 = cc.Spawn.create(
        cc.ScaleBy.create(1, 0.5),
        cc.RotateBy.create(1, -360/8));

    star.runAction(cc.Sequence.create(cc.DelayTime.create(Math.random()), action1, cc.DelayTime.create(0.1), action2).repeatForever());

    layer.addChild(star,90000);
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
        addMusicButton(this);

        addStar(this,0.5,119,15);
        addStar(this,0.5,255,126);
        addStar(this,0.5,118,253);
        addStar(this,0.5,299,239);
        addStar(this,0.5,210,442);

        //play button begin
        var playSprite = cc.Sprite.create(res.play_png);
        var playSelectedSprite = cc.Sprite.create(res.play_selected_png);
        playSelectedSprite.scaleX=1.06;
        playSelectedSprite.scaleY=1.06;

        var pTemp = cc.p((playSprite.width-playSelectedSprite.width * playSelectedSprite.scaleX)/2,
                (playSprite.height-playSelectedSprite.height*playSelectedSprite.scaleY)/2);

        playSelectedSprite.setPosition( pTemp );

        //play button event
        var playMenuItemSprite = cc.MenuItemSprite.create(playSprite, playSelectedSprite, playSelectedSprite, function(pSender){
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
        moreGamesSelectedSprite.scaleX=1.06;
        moreGamesSelectedSprite.scaleY=1.06;

        var pTemp2 = cc.p((moreGamesSprite.width-moreGamesSelectedSprite.width* moreGamesSelectedSprite.scaleX)/2,
                (moreGamesSprite.height-moreGamesSelectedSprite.height*moreGamesSelectedSprite.scaleY)/2);

        moreGamesSelectedSprite.setPosition( pTemp2 );

        var moreGamesMenuItemSprite = cc.MenuItemSprite.create(moreGamesSprite, moreGamesSelectedSprite, moreGamesSelectedSprite, function(pSender){
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
        if(index==1-1){
            return res.wu_pin_lan_btn_1_png;
        }else if(index==2-1){
            return res.wu_pin_lan_btn_2_png;
        }else if(index==3-1){
            return res.wu_pin_lan_btn_3_png;
        }else if(index==4-1){
            return res.wu_pin_lan_btn_4_png;
        }else if(index==5-1){
            return res.wu_pin_lan_btn_5_png;
        }else if(index==6-1){
            return res.wu_pin_lan_btn_6_png;
        }else if(index==7-1){
            return res.wu_pin_lan_btn_7_png;
        }else if(index==8-1){
            return res.wu_pin_lan_btn_8_png;
        }
    },
    getBtnFilePathByIndex2:function(index){
        if(index==1-1){
            return res.wu_pin_lan_btn_1_1_png;
        }else if(index==2-1){
            return res.wu_pin_lan_btn_2_1_png;
        }else if(index==3-1){
            return res.wu_pin_lan_btn_3_1_png;
        }else if(index==4-1){
            return res.wu_pin_lan_btn_4_1_png;
        }else if(index==5-1){
            return res.wu_pin_lan_btn_5_1_png;
        }else if(index==6-1){
            return res.wu_pin_lan_btn_6_1_png;
        }else if(index==7-1){
            return res.wu_pin_lan_btn_7_1_png;
        }else if(index==8-1){
            return res.wu_pin_lan_btn_8_1_png;
        }
    },
    initBtns:function(index){
        //alert();
        if(this._btns!=null){
            for(var i=0;i<8;i++){
                this._btns[i].removeFromParent(true);
            }
        }else{
            this._btns = new Array();
        }
        for(var i=0;i<8;i++){

            var sprite = cc.Sprite.create(this.getBtnFilePathByIndex(i));
            var sprite2 = cc.Sprite.create(this.getBtnFilePathByIndex2(i));

            sprite2.scaleX=1.06;
            sprite2.scaleY=1.06;

            var pTemp2 = cc.p((sprite.width-sprite2.width* sprite2.scaleX)/2,
                    (sprite.height-sprite2.height*sprite2.scaleY)/2);

            sprite2.setPosition( pTemp2 );

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
            var x1=32;
            var y1=-15;
            var jiange=72;
            var y2=340;
            var xa=0;
            var ya=0;
            if(i==0){
                xa=x1;
                ya=y1;
            }else if(i==1){
                xa=x1+jiange;
                ya=y1;
            }else if(i==2){
                xa=x1+2*jiange;
                ya=y1;
            }else if(i==3){
                xa=x1+3*jiange;
                ya=y1;
            }else if(i==4){
                xa=x1;
                ya=y2;
            }else if(i==5){
                xa=x1+jiange;
                ya=y2;
            }else if(i==6){
                xa=x1+2*jiange;
                ya=y2;
            }else if(i==7){
                xa=x1+3*jiange;
                ya=y2;
            }

            menu.x=c_p_play_wu_pin_lan_x + xa;
            menu.y= c_p_play_wu_pin_lan_y - ya;
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
    sprite_shangyilingzi:null,
    sprite_lianyi_hou:null,
    showOptionLayer:function(layerIndex){
        for(var i=0;i<8;i++){
            if(i==layerIndex){
                c_scene_play.optionsLayers[i].visible=true;
            }else{
                c_scene_play.optionsLayers[i].visible=false;
            }
        }
        c_p_btn_index = layerIndex;
    },
    show:function(index){
        //不是分类的index，分类的衣服的index
        if(this.shows==null){
            this.shows = new Array();

            var spriteYinying = cc.Sprite.create(res.body_yinying_png);
            spriteYinying.anchorX=0;
            spriteYinying.anchorY=1;
            spriteYinying.x =c_p_play_fuse_x +51 ;
            spriteYinying.y =c_p_play_fuse_y - 443.45 ;

            this.bodyLayer.addChild(spriteYinying,39999);

            var spriteRenwu = cc.Sprite.create(res.renwu_png);
            spriteRenwu.anchorX=0;
            spriteRenwu.anchorY=1;
            spriteRenwu.x =c_p_play_fuse_x;
            spriteRenwu.y =c_p_play_fuse_y;

            this.bodyLayer.addChild(spriteRenwu,40000);

        }


        //shangyi and xiayi 和 lianyi 不能同时存在
        if(c_p_btn_index==2 || c_p_btn_index==3){
            if(this.shows[4]!=null) {
                this.shows[4].visible = false;
                this.shows[4].removeFromParent(true);
            }
        }
        if(c_p_btn_index==4){
            if(this.shows[2]!=null) {
                this.shows[2].visible = false;
                this.shows[2].removeFromParent(true);
            }
            if(this.shows[3]!=null) {
                this.shows[3].visible = false;
                this.shows[3].removeFromParent(true);
            }
            if(this.sprite_shangyilingzi!=null) {
                this.sprite_shangyilingzi.visible = false;
                this.sprite_shangyilingzi.removeFromParent(true);
            }
        }


        if(this.shows[c_p_btn_index]!=null){
            this.shows[c_p_btn_index].visible = false;
            this.shows[c_p_btn_index].removeFromParent(true);
        }


        var parameters = this.getOptionBtnFilePathByIndex(c_p_btn_index,index);
        var sprite = cc.Sprite.create(parameters[3]);
        sprite.anchorX=0;
        sprite.anchorY=1;


        sprite.x=parameters[4];
        sprite.y=parameters[5];

        z_index=c_p_btn_index;

        //shangyi和xiayi互换
        if(z_index==2){
            z_index=3;
        }else if(z_index==3){
            z_index=2;
        }


        //xiezi
        if(z_index==1){
            z_index=-1;
        }
        else if(z_index==0){
            z_index=8.2;
        }
        else if(z_index==7){
            z_index=1.2;
        }
        else if(z_index==5){
            z_index=9;
        }

        var z=40000+30*z_index+index;

        this.bodyLayer.addChild(sprite,z);
        this.shows[c_p_btn_index] = sprite;

        //shangyi layer
        if(c_p_btn_index==2){
            if(this.sprite_shangyilingzi!=null) {
                this.sprite_shangyilingzi.visible = false;
                this.sprite_shangyilingzi.removeFromParent(true);
            }

            var sprite2 = cc.Sprite.create(parameters[6]);
            sprite2.anchorX=0;
            sprite2.anchorY=1;

            sprite2.x=parameters[7];
            sprite2.y=parameters[8];

            //层次比fuse低一级
            this.bodyLayer.addChild(sprite2,40000+30*6.2);
            this.sprite_shangyilingzi = sprite2;
        }


        c_p_option_index = index;
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

        var pTemp = cc.p((sprite.width-sprite2.width * sprite2.scaleX)/2,
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
        //xpaker update 20150307
        menu.x=parameters[1];
        menu.y=parameters[2];

        menu.setTag(index);
        layer.addChild(menu,3+index);


    },
    getOptionBtnFilePathByIndex:function(layerIndex,optionIndex){
        //layerIndex 为分类的， index为这个分类下的选项的
        var x=0;
        var y=0;
        var x1=0;
        var y1=0;
        var x2=0;
        var y2=0;
        var xjianju1=137;
        var yjianju1=137;
        var xjianju2=137;
        var yjianju2=137;
        var temp = new Array();
        if(layerIndex==0){
            //tfbaiqian
            x=0;
            y=0;
            x1=51;
            y1=92;
            x2=65;
            xjianju1=60;
            yjianju1=118;
            xjianju2=77;
            if(optionIndex==0){
                temp[0]=res.wu_pin_lan_option_tfbaiqian1_png;
                temp[1]=x1;
                temp[2]=y1;
                temp[3]=res.wu_pin_lan_show_tfbaiqian1_png;
            }else if(optionIndex==1){
                temp[0]=res.wu_pin_lan_option_tfbaiqian2_png;
                temp[1]=x1+xjianju1;
                temp[2]=y1;
                temp[3]=res.wu_pin_lan_show_tfbaiqian2_png;
            }else if(optionIndex==2){
                temp[0]=res.wu_pin_lan_option_tfbaiqian3_png;
                temp[1]=x1+2*xjianju1;
                temp[2]=y1;
                temp[3]=res.wu_pin_lan_show_tfbaiqian3_png;
            }else if(optionIndex==3){
                temp[0]=res.wu_pin_lan_option_tfbaiqian4_png;
                temp[1]=x1+3*xjianju1;
                temp[2]=y1;
                temp[3]=res.wu_pin_lan_show_tfbaiqian4_png;
            }else if(optionIndex==4){
                temp[0]=res.wu_pin_lan_option_tfbaiqian5_png;
                temp[1]=x2;
                temp[2]=y1+yjianju1;
                temp[3]=res.wu_pin_lan_show_tfbaiqian5_png;
            }else if(optionIndex==5){
                temp[0]=res.wu_pin_lan_option_tfbaiqian6_png;
                temp[1]=x2+xjianju2;;
                temp[2]=y1+yjianju1;
                temp[3]=res.wu_pin_lan_show_tfbaiqian6_png;
            }else if(optionIndex==6){
                temp[0]=res.wu_pin_lan_option_tfbaiqian7_png;
                temp[1]=x2+2*xjianju2;
                temp[2]=y1+yjianju1;
                temp[3]=res.wu_pin_lan_show_tfbaiqian7_png;
            }

            temp[1]=c_p_play_wu_pin_lan_x+temp[1];
            temp[2]=c_p_play_wu_pin_lan_y-temp[2];
            temp[4]=c_p_play_fuse_x+x;
            temp[5]=c_p_play_fuse_y-y;
            return temp;

        }
        else if(layerIndex==1) {
            //tfbaihou
            x=0;
            y=0;
            x1=51;
            y1=102;
            x2=65;
            xjianju1=60;
            yjianju1=125;
            xjianju2=77;
            if(optionIndex==0){
                temp[0]=res.wu_pin_lan_option_tfbaihou1_png;
                temp[1]=x1;
                temp[2]=y1;
                temp[3]=res.wu_pin_lan_show_tfbaihou1_png;
            }else if(optionIndex==1){
                temp[0]=res.wu_pin_lan_option_tfbaihou2_png;
                temp[1]=x1+xjianju1;
                temp[2]=y1;
                temp[3]=res.wu_pin_lan_show_tfbaihou2_png;
            }else if(optionIndex==2){
                temp[0]=res.wu_pin_lan_option_tfbaihou3_png;
                temp[1]=x1+2*xjianju1;
                temp[2]=y1;
                temp[3]=res.wu_pin_lan_show_tfbaihou3_png;
            }else if(optionIndex==3){
                temp[0]=res.wu_pin_lan_option_tfbaihou4_png;
                temp[1]=x1+3*xjianju1;
                temp[2]=y1;
                temp[3]=res.wu_pin_lan_show_tfbaihou4_png;
            }else if(optionIndex==4){
                temp[0]=res.wu_pin_lan_option_tfbaihou5_png;
                temp[1]=x2;
                temp[2]=y1+yjianju1;
                temp[3]=res.wu_pin_lan_show_tfbaihou5_png;
            }else if(optionIndex==5){
                temp[0]=res.wu_pin_lan_option_tfbaihou6_png;
                temp[1]=x2+xjianju2;;
                temp[2]=y1+yjianju1;
                temp[3]=res.wu_pin_lan_show_tfbaihou6_png;
            }else if(optionIndex==6){
                temp[0]=res.wu_pin_lan_option_tfbaihou7_png;
                temp[1]=x2+2*xjianju2;
                temp[2]=y1+yjianju1;
                temp[3]=res.wu_pin_lan_show_tfbaihou7_png;
            }

            temp[1]=c_p_play_wu_pin_lan_x+temp[1];
            temp[2]=c_p_play_wu_pin_lan_y-temp[2];
            temp[4]=c_p_play_fuse_x+x;
            temp[5]=c_p_play_fuse_y-y;
            return temp;

        }
        else if(layerIndex==2){
            //shangyi
            x=0;
            y=0;
            x1=56;
            y1=62;
            x2=101;
            xjianju1=84;
            yjianju1=96;
            xjianju2=90;
            if(optionIndex==0){
                temp[0]=res.wu_pin_lan_option_shangyi1_png;
                temp[1]=x1;
                temp[2]=y1;
                temp[3]=res.wu_pin_lan_show_shangyi1_png;
                temp[6]=res.wu_pin_lan_show_shangyi1lingzi_png;
            }else if(optionIndex==1){
                temp[0]=res.wu_pin_lan_option_shangyi2_png;
                temp[1]=x1+xjianju1;
                temp[2]=y1;
                temp[3]=res.wu_pin_lan_show_shangyi2_png;
                temp[6]=res.wu_pin_lan_show_shangyi2lingzi_png;
            }else if(optionIndex==2){
                temp[0]=res.wu_pin_lan_option_shangyi3_png;
                temp[1]=x1+2*xjianju1;
                temp[2]=y1;
                temp[3]=res.wu_pin_lan_show_shangyi3_png;
                temp[6]=res.wu_pin_lan_show_shangyi3lingzi_png;
            }else if(optionIndex==3){
                temp[0]=res.wu_pin_lan_option_shangyi4_png;
                temp[1]=x2;
                temp[2]=y1+yjianju1;
                temp[3]=res.wu_pin_lan_show_shangyi4_png;
                temp[6]=res.wu_pin_lan_show_shangyi4lingzi_png;
            }else if(optionIndex==4){
                temp[0]=res.wu_pin_lan_option_shangyi5_png;
                temp[1]=x2+xjianju2;
                temp[2]=y1+yjianju1;
                temp[3]=res.wu_pin_lan_show_shangyi5_png;
            }else if(optionIndex==5){
                temp[0]=res.wu_pin_lan_option_shangyi6_png;
                temp[1]=x1;
                temp[2]=y1+2*yjianju1;
                temp[3]=res.wu_pin_lan_show_shangyi6_png;
                temp[6]=res.wu_pin_lan_show_shangyi6lingzi_png;
            }else if(optionIndex==6){
                temp[0]=res.wu_pin_lan_option_shangyi7_png;
                temp[1]=x1+xjianju1;
                temp[2]=y1+2*yjianju1;
                temp[3]=res.wu_pin_lan_show_shangyi7_png;
            }else if(optionIndex==7){
                temp[0]=res.wu_pin_lan_option_shangyi8_png;
                temp[1]=x1+2*xjianju1;
                temp[2]=y1+2*yjianju1;
                temp[3]=res.wu_pin_lan_show_shangyi8_png;
                temp[6]=res.wu_pin_lan_show_shangyi8lingzi_png;
            }

            temp[1]=c_p_play_wu_pin_lan_x+temp[1];
            temp[2]=c_p_play_wu_pin_lan_y-temp[2];
            temp[4]=c_p_play_fuse_x+x;
            temp[5]=c_p_play_fuse_y-y;
            temp[7]=c_p_play_fuse_x+x;
            temp[8]=c_p_play_fuse_y-y;

            return temp;
        }
        else if(layerIndex==3){
            //xiayi
            x=0;
            y=0;
            x1=56;
            y1=62;
            x2=101;
            xjianju1=84;
            yjianju1=96;
            xjianju2=90;
            if(optionIndex==0){
                temp[0]=res.wu_pin_lan_option_xiayi1_png;
                temp[1]=x1;
                temp[2]=y1;
                temp[3]=res.wu_pin_lan_show_xiayi1_png;

            }else if(optionIndex==1){
                temp[0]=res.wu_pin_lan_option_xiayi2_png;
                temp[1]=x1+xjianju1;
                temp[2]=y1;
                temp[3]=res.wu_pin_lan_show_xiayi2_png;

            }else if(optionIndex==2){
                temp[0]=res.wu_pin_lan_option_xiayi3_png;
                temp[1]=x1+2*xjianju1;
                temp[2]=y1;
                temp[3]=res.wu_pin_lan_show_xiayi3_png;

            }else if(optionIndex==3){
                temp[0]=res.wu_pin_lan_option_xiayi4_png;
                temp[1]=x2;
                temp[2]=y1+yjianju1;
                temp[3]=res.wu_pin_lan_show_xiayi4_png;

            }else if(optionIndex==4){
                temp[0]=res.wu_pin_lan_option_xiayi5_png;
                temp[1]=x2+xjianju2;
                temp[2]=y1+yjianju1;
                temp[3]=res.wu_pin_lan_show_xiayi5_png;
            }else if(optionIndex==5){
                temp[0]=res.wu_pin_lan_option_xiayi6_png;
                temp[1]=x1;
                temp[2]=y1+2*yjianju1;
                temp[3]=res.wu_pin_lan_show_xiayi6_png;

            }else if(optionIndex==6){
                temp[0]=res.wu_pin_lan_option_xiayi7_png;
                temp[1]=x1+xjianju1;
                temp[2]=y1+2*yjianju1;
                temp[3]=res.wu_pin_lan_show_xiayi7_png;
            }else if(optionIndex==7){
                temp[0]=res.wu_pin_lan_option_xiayi8_png;
                temp[1]=x1+2*xjianju1;
                temp[2]=y1+2*yjianju1;
                temp[3]=res.wu_pin_lan_show_xiayi8_png;

            }

            temp[1]=c_p_play_wu_pin_lan_x+temp[1];
            temp[2]=c_p_play_wu_pin_lan_y-temp[2];
            temp[4]=c_p_play_fuse_x+x;
            temp[5]=c_p_play_fuse_y-y;
            temp[7]=c_p_play_fuse_x+x;
            temp[8]=c_p_play_fuse_y-y;

            return temp;


        }
        else if(layerIndex==4){
            //lianyi
            x=0;
            y=0;

            x1=80;
            y1=92;
            xjianju1=110;
            yjianju1=128;

            if(optionIndex==0){
                temp[0]=res.wu_pin_lan_option_lianyi1_png;
                temp[1]=x1;
                temp[2]=y1;
                temp[3]=res.wu_pin_lan_show_lianyi1_png;
            }else if(optionIndex==1){
                temp[0]=res.wu_pin_lan_option_lianyi2_png;
                temp[1]=x1+xjianju1;
                temp[2]=y1;
                temp[3]=res.wu_pin_lan_show_lianyi2_png;
            }else if(optionIndex==2){
                temp[0]=res.wu_pin_lan_option_lianyi3_png;
                temp[1]=x1;
                temp[2]=y1+yjianju1;
                temp[3]=res.wu_pin_lan_show_lianyi3_png;
            }else if(optionIndex==3){
                temp[0]=res.wu_pin_lan_option_lianyi4_png;
                temp[1]=x1+xjianju1;
                temp[2]=y1+yjianju1;
                temp[3]=res.wu_pin_lan_show_lianyi4_png;
            }

            temp[1]=c_p_play_wu_pin_lan_x+temp[1];
            temp[2]=c_p_play_wu_pin_lan_y-temp[2];
            temp[4]=c_p_play_fuse_x+x;
            temp[5]=c_p_play_fuse_y-y;
            return temp;


        }
        else if(layerIndex==5){
            //toushi
            x=0;
            y=0;
            x1=80;
            y1=76;
            xjianju1=119;
            yjianju1=86;
            if(optionIndex==0){
                temp[0]=res.wu_pin_lan_option_toushi1_png;
                temp[1]=x1;
                temp[2]=y1;
                temp[3]=res.wu_pin_lan_show_toushi1_png;
            }else if(optionIndex==1){
                temp[0]=res.wu_pin_lan_option_toushi2_png;
                temp[1]=x1+xjianju1;
                temp[2]=y1;
                temp[3]=res.wu_pin_lan_show_toushi2_png;
            }else if(optionIndex==2){
                temp[0]=res.wu_pin_lan_option_toushi3_png;
                temp[1]=x1;
                temp[2]=y1+yjianju1;
                temp[3]=res.wu_pin_lan_show_toushi3_png;
            }else if(optionIndex==3){
                temp[0]=res.wu_pin_lan_option_toushi4_png;
                temp[1]=x1+xjianju1;
                temp[2]=y1+yjianju1;
                temp[3]=res.wu_pin_lan_show_toushi4_png;
            }else if(optionIndex==4){
                temp[0]=res.wu_pin_lan_option_toushi5_png;
                temp[1]=x1;
                temp[2]=y1+2*yjianju1;
                temp[3]=res.wu_pin_lan_show_toushi5_png;
            }else if(optionIndex==5){
                temp[0]=res.wu_pin_lan_option_toushi6_png;
                temp[1]=x1+xjianju1;
                temp[2]=y1+2*yjianju1;
                temp[3]=res.wu_pin_lan_show_toushi6_png;
            }

            temp[1]=c_p_play_wu_pin_lan_x+temp[1];
            temp[2]=c_p_play_wu_pin_lan_y-temp[2];
            temp[4]=c_p_play_fuse_x+x;
            temp[5]=c_p_play_fuse_y-y;
            return temp;

        }
        else if(layerIndex==6){
            //lingdai
            x=0;
            y=0;
            x1=80;
            y1=66;
            xjianju1=119;
            yjianju1=116;
            if(optionIndex==0){
                temp[0]=res.wu_pin_lan_option_lingdai1_png;
                temp[1]=x1;
                temp[2]=y1;
                temp[3]=res.wu_pin_lan_show_lingdai1_png;
            }else if(optionIndex==1){
                temp[0]=res.wu_pin_lan_option_lingdai2_png;
                temp[1]=x1+xjianju1;
                temp[2]=y1;
                temp[3]=res.wu_pin_lan_show_lingdai2_png;
            }else if(optionIndex==2){
                temp[0]=res.wu_pin_lan_option_lingdai3_png;
                temp[1]=x1;
                temp[2]=y1+yjianju1;
                temp[3]=res.wu_pin_lan_show_lingdai3_png;
            }else if(optionIndex==3){
                temp[0]=res.wu_pin_lan_option_lingdai4_png;
                temp[1]=x1+xjianju1;
                temp[2]=y1+yjianju1;
                temp[3]=res.wu_pin_lan_show_lingdai4_png;
            }else if(optionIndex==4){
                temp[0]=res.wu_pin_lan_option_lingdai5_png;
                temp[1]=x1;
                temp[2]=y1+2*yjianju1-20;
                temp[3]=res.wu_pin_lan_show_lingdai5_png;
            }else if(optionIndex==5){
                temp[0]=res.wu_pin_lan_option_lingdai6_png;
                temp[1]=x1+xjianju1;
                temp[2]=y1+2*yjianju1-20;
                temp[3]=res.wu_pin_lan_show_lingdai6_png;
            }

            temp[1]=c_p_play_wu_pin_lan_x+temp[1];
            temp[2]=c_p_play_wu_pin_lan_y-temp[2];
            temp[4]=c_p_play_fuse_x+x;
            temp[5]=c_p_play_fuse_y-y;
            return temp;
        }
        else if(layerIndex==7){
            //xiezi
            x=0;
            y=0;
            x1=80;
            y1=76;
            xjianju1=119;
            yjianju1=86;
            if(optionIndex==0){
                temp[0]=res.wu_pin_lan_option_xiezi1_png;
                temp[1]=x1;
                temp[2]=y1;
                temp[3]=res.wu_pin_lan_show_xiezi1_png;
            }else if(optionIndex==1){
                temp[0]=res.wu_pin_lan_option_xiezi2_png;
                temp[1]=x1+xjianju1;
                temp[2]=y1;
                temp[3]=res.wu_pin_lan_show_xiezi2_png;
            }else if(optionIndex==2){
                temp[0]=res.wu_pin_lan_option_xiezi3_png;
                temp[1]=x1;
                temp[2]=y1+yjianju1;
                temp[3]=res.wu_pin_lan_show_xiezi3_png;
            }else if(optionIndex==3){
                temp[0]=res.wu_pin_lan_option_xiezi4_png;
                temp[1]=x1+xjianju1;
                temp[2]=y1+yjianju1;
                temp[3]=res.wu_pin_lan_show_xiezi4_png;
            }else if(optionIndex==4){
                temp[0]=res.wu_pin_lan_option_xiezi5_png;
                temp[1]=x1;
                temp[2]=y1+2*yjianju1;
                temp[3]=res.wu_pin_lan_show_xiezi5_png;
            }else if(optionIndex==5){
                temp[0]=res.wu_pin_lan_option_xiezi6_png;
                temp[1]=x1+xjianju1;
                temp[2]=y1+2*yjianju1;
                temp[3]=res.wu_pin_lan_show_xiezi6_png;
            }

            temp[1]=c_p_play_wu_pin_lan_x+temp[1];
            temp[2]=c_p_play_wu_pin_lan_y-temp[2];
            temp[4]=c_p_play_fuse_x+x;
            temp[5]=c_p_play_fuse_y-y;
            return temp;


        }

    },
    initOptionsLayers:function(){
        if(this.optionsLayers==null){
            this.optionsLayers= new Array();
        }
        for(var i=0;i<8;i++){
            for(var j=0;j<30;j++){
                if(i==0) {
                    if (j == 7) {
                        break;
                    }
                }else if(i==1) {
                    if (j == 7) {
                        break;
                    }
                }else if(i==2) {
                    if (j == 8) {
                        break;
                    }
                }else if(i==3) {
                    if (j == 8) {
                        break;
                    }
                }else if(i==4) {
                    if (j == 4) {
                        break;
                    }
                }else if(i==5) {
                    if (j==6) {
                        break;
                    }
                }else if(i==6){
                    if(j==6){
                        break;
                    }
                }else if(i==7){
                    if(j==6){
                        break;
                    }
                }
                this.addOption(i,j)
                this.addChild(this.optionsLayers[i],8888+i);
            }
        }
        //初始显示fuse层 option
        //xpaker udpate 20150306
        this.showOptionLayer(1);
        this.show(0);

        this.showOptionLayer(0);
        this.show(0);


    },
    initLogoLayer:function(){

		this.logoLayer = cc.Layer.create();

		addMusicButton(this.logoLayer);

		if(is_show_logo){
			addLogoButton(this.logoLayer);
		}

		this.addChild(this.logoLayer,9999999);
    },
    initBackGroundLayer:function(){
        this.backGroundLayer = new BackGroundLayer();
        addBackGround(this.backGroundLayer,res.play_background_png);
        this.addChild(this.backGroundLayer);
    },
    initMenuLayer:function(){
        this.menuLayer = cc.Layer.create();
        //reset button begin
        var resetSprite = cc.Sprite.create(res.reset_png);
        var resetSelectedSprite = cc.Sprite.create(res.reset_selected_png);
        resetSelectedSprite.scaleX=1.06;
        resetSelectedSprite.scaleY=1.06;

        pTemp = cc.p((resetSprite.width-resetSelectedSprite.width*resetSelectedSprite.scaleX)/2,
                (resetSprite.height-resetSelectedSprite.height*resetSelectedSprite.scaleY)/2);

        resetSelectedSprite.setPosition( pTemp );
        //reset button event
        var resetMenuItemSprite = cc.MenuItemSprite.create(resetSprite, resetSelectedSprite, resetSelectedSprite, function(pSender){
            cc.log("reset button hit");
            //alert();
            startPlay()
        }, this);

        //more games button begin
        var moreSprite = cc.Sprite.create(res.more_games2_png);
        var moreSelectedSprite = cc.Sprite.create(res.more_games2_selected_png);
        moreSelectedSprite.scaleX=1.06;
        moreSelectedSprite.scaleY=1.06;

        var pTemp = cc.p((moreSprite.width-moreSelectedSprite.width*moreSelectedSprite.scaleX)/2,
                (moreSprite.height-moreSelectedSprite.height*moreSelectedSprite.scaleY)/2);

        moreSelectedSprite.setPosition( pTemp );

        //play button event
        var moreMenuItemSprite = cc.MenuItemSprite.create(moreSprite, moreSelectedSprite, moreSelectedSprite, function(pSender){
            window.open( 'http://www.localhost', '_blank' )

        }, this);

        //show button begin
        var showSprite = cc.Sprite.create(res.show_png);
        var showSelectedSprite = cc.Sprite.create(res.show_selected_png);
        showSelectedSprite.scaleX=1.06;
        showSelectedSprite.scaleY=1.06;

        pTemp = cc.p((showSprite.width-showSelectedSprite.width*showSelectedSprite.scaleX)/2,
                (showSprite.height-showSelectedSprite.height*showSelectedSprite.scaleY)/2);

        showSelectedSprite.setPosition( pTemp );

        //show button event
        var showMenuItemSprite = cc.MenuItemSprite.create(showSprite, showSelectedSprite, showSelectedSprite, function(pSender){
            cc.log("show button hit");
            //alert();
            if(c_scene_play!=null){
                addBackGround(c_scene_play.backGroundLayer,res.play_background_png);

                addStar(c_scene_play.menuLayer,0.5,340-c_p_move_x_show_btn_hit,450+10);
                addStar(c_scene_play.menuLayer,0.5,337-c_p_move_x_show_btn_hit,447+10);
                addStar(c_scene_play.bodyLayer,0.5,319-c_p_move_x_show_btn_hit,376+10);
                addStar(c_scene_play.bodyLayer,0.5,443-c_p_move_x_show_btn_hit,447+10);
                addStar(c_scene_play.bodyLayer,0.5,293-c_p_move_x_show_btn_hit,257+10);
                addStar(c_scene_play.bodyLayer,0.5,309-c_p_move_x_show_btn_hit,176+10);
                addStar(c_scene_play.bodyLayer,0.5,398-c_p_move_x_show_btn_hit,146+10);
                addStar(c_scene_play.bodyLayer,0.5,273-c_p_move_x_show_btn_hit,48);
                addStar(c_scene_play.bodyLayer,0.5,430-c_p_move_x_show_btn_hit,46);


                var cong = cc.Sprite.create(res.wu_pin_lan_show_zhanshichuxian_png);
                cong.x=350-c_p_move_x_show_btn_hit;
                cong.y=272;
                c_scene_play.bodyLayer.addChild(cong,89999);

                if(c_scene_play.menuLayer.visible==true){
                    c_scene_play.menuLayer.setVisible(false);
                    c_scene_play.wupinlanLayer.setVisible(false);
                    for(var i=0;i<8;i++){
                        c_scene_play.optionsLayers[i].visible = false;
                    }
                    c_scene_play.bodyLayer.x=c_scene_play.bodyLayer.x+c_p_move_x_show_btn_hit;
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

        if(is_save){

            //save button begin
            var saveSprite = cc.Sprite.create(res.save_png);
            var saveSelectedSprite = cc.Sprite.create(res.save_selected_png);
            saveSelectedSprite.scaleX=1.06;
            saveSelectedSprite.scaleY=1.06;

            pTemp = cc.p((saveSprite.width-saveSelectedSprite.width*saveSelectedSprite.scaleX)/2,
                    (saveSprite.height-saveSelectedSprite.height*saveSelectedSprite.scaleY)/2);

            saveSelectedSprite.setPosition( pTemp );

            //save button event
            var saveMenuItemSprite = cc.MenuItemSprite.create(saveSprite, saveSelectedSprite, saveSelectedSprite, function(pSender){
                cc.log("save button hit");
                save();
            }, this);

        }

        if(is_print){

            //print games button begin
            var printSprite = cc.Sprite.create(res.print_png);
            var printSelectedSprite = cc.Sprite.create(res.print_selected_png);
            printSelectedSprite.scaleX=1.06;
            printSelectedSprite.scaleY=1.06;

            pTemp = cc.p((printSprite.width-printSelectedSprite.width*printSelectedSprite.scaleX)/2,
                    (printSprite.height-printSelectedSprite.height*printSelectedSprite.scaleY)/2);

            printSelectedSprite.setPosition( pTemp );

            //print button event
            var printMenuItemSprite = cc.MenuItemSprite.create(printSprite, printSelectedSprite, printSelectedSprite, function(pSender){
                cc.log("print games button hit");
                printFun();
            }, this);

        }

        //bg button begin
        var bgSprite = cc.Sprite.create(res.bg_png);
        var bgSelectedSprite = cc.Sprite.create(res.bg_selected_png);
        bgSelectedSprite.scaleX=1.06;
        bgSelectedSprite.scaleY=1.06;

        pTemp = cc.p((bgSprite.width-bgSelectedSprite.width*bgSelectedSprite.scaleX)/2,
                (bgSprite.height-bgSelectedSprite.height*bgSelectedSprite.scaleY)/2);

        bgSelectedSprite.setPosition( pTemp );

        //bg button event
        var bgMenuItemSprite = cc.MenuItemSprite.create(bgSprite, bgSelectedSprite, bgSelectedSprite, function(pSender){
            cc.log("bg button hit");

            if(c_background_index==null){
                c_background_index=0;
            }else if(c_background_index==3){
                c_background_index=-1;
            }
            c_background_index++;
            if(c_background_index==0){
                addBackGround(c_scene_play.backGroundLayer,res.play_background_png);
            }else if(c_background_index==1){
                addBackGround(c_scene_play.backGroundLayer,res.play_background2_png);
            }else if(c_background_index==2){
                addBackGround(c_scene_play.backGroundLayer,res.play_background3_png);
            }else if(c_background_index==3){
                addBackGround(c_scene_play.backGroundLayer,res.play_background4_png);
            }

        }, this);


        //replay button begin
        var replaySprite = cc.Sprite.create(res.replay_png);
        var replaySelectedSprite = cc.Sprite.create(res.replay_selected_png);
        replaySelectedSprite.scaleX=1.06;
        replaySelectedSprite.scaleY=1.06;

        pTemp = cc.p((replaySprite.width-replaySelectedSprite.width*replaySelectedSprite.scaleX)/2,
                (replaySprite.height-replaySelectedSprite.height*replaySelectedSprite.scaleY)/2);

        replaySelectedSprite.setPosition( pTemp );

        //replay button event
        var replayMenuItemSprite = cc.MenuItemSprite.create(replaySprite, replaySelectedSprite, replaySelectedSprite, function(pSender){
            cc.log("replay button hit");
            replay();
        }, this);


        //more games button begin
        var moreSprite = cc.Sprite.create(res.more_games2_png);
        var moreSelectedSprite = cc.Sprite.create(res.more_games2_selected_png);

        moreSelectedSprite.scaleX=1.06;
        moreSelectedSprite.scaleY=1.06;

        pTemp = cc.p((moreSprite.width-moreSelectedSprite.width*moreSelectedSprite.scaleX)/2,
                (moreSprite.height-moreSelectedSprite.height*moreSelectedSprite.scaleY)/2);

        moreSelectedSprite.setPosition( pTemp );


        //play button event
        var moreMenuItemSprite = cc.MenuItemSprite.create(moreSprite, moreSelectedSprite, moreSelectedSprite, function(pSender){
            window.open( 'http://www.localhost', '_blank' )
        }, this);


        


        

        var menu5 = cc.Menu.create(bgMenuItemSprite);

        menu5.anchorX=0.5;
        menu5.anchorY=0.5;
        menu5.x=c_p_play_four_btn_bottom_x;
        menu5.y=c_p_play_four_btn_bottom_y + 2* c_p_play_four_btn_bottom_jianju;
        this.menu2Layer.addChild(menu5);

        var menu3 = cc.Menu.create(replayMenuItemSprite);

        menu3.anchorX=0.5;
        menu3.anchorY=0.5;
        menu3.x=c_p_play_four_btn_bottom_x;
        menu3.y=c_p_play_four_btn_bottom_y + c_p_play_four_btn_bottom_jianju;
        this.menu2Layer.addChild(menu3);

        var menu4 = cc.Menu.create(moreMenuItemSprite);

        menu4.anchorX=0.5;
        menu4.anchorY=0.5;
        menu4.x=c_p_play_four_btn_bottom_x;
        menu4.y=c_p_play_four_btn_bottom_y;
        this.menu2Layer.addChild(menu4);

        this.addChild(this.menu2Layer);
    },

    initBodyLayer:function(index){
        if(index==null){
            index=0;
        }
        this.bodyLayer = cc.Layer.create();

        var yinyingSprite = cc.Sprite.create(res.body_yinying_png);
        yinyingSprite.x=c_p_play_fuse_x+387/2-60;
        yinyingSprite.y=c_p_play_fuse_y-919+20;
        yinyingSprite.anchorX=0.5;
        yinyingSprite.anchorY=0.5;
        this.bodyLayer.addChild(yinyingSprite);

        this.addChild(this.bodyLayer);

    },
    initWupinlanLayer:function(){
        this.wupinlanLayer = new WuPinLanLayer();
        var wupinlanSprite = cc.Sprite.create(res.wu_pin_lan_png);
        wupinlanSprite.x=c_p_play_wu_pin_lan_x;
        wupinlanSprite.y=c_p_play_wu_pin_lan_y;
        wupinlanSprite.anchorX=0;
        wupinlanSprite.anchorY=1;
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