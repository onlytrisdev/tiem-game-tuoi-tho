var comman = {
	GameName:"",
	GameId:"",
    isLoadFisrtTime:0,
	isMusicEnable:true,
	levelCompleted:1,
    dressUpSceneNo:1,
	_lastMusic:null
};

var dress_code = [];
for (var i=0;i<=3;i++) 
{
    var temp_code1 = [];
    for (var j=0;j<=6;j++)
    {
        temp_code1.push(0);
    }
    dress_code.push(temp_code1);
}

// Elsa Variable. . .
var RunningElsaCharItem = 1 ;

var Elsa_item_1_counter = 0;
var Elsa_item_2_counter = 0;
var Elsa_item_3_counter = 0;
var Elsa_item_4_counter = 0;

var Elsa_Total_dress_Price_value=0;
var Elsa_Total_hair_Price_value=0;
var Elsa_Total_headdecoration_Price_value=0;
var Elsa_Total_shoes_Price_value=0;

var Complete_Elsa_Sub_Level = [];

var SelctedElsaItem = [];
for(var i=0;i<=6;i++)
{
    SelctedElsaItem[i] = [];
}

// Anna Variable. . .
var RunningAnnaCharItem = 1 ;

var Anna_item_1_counter = 0;
var Anna_item_2_counter = 0;
var Anna_item_3_counter = 0;
var Anna_item_4_counter = 0;

var Anna_Total_dress_Price_value=0;
var Anna_Total_hair_Price_value=0;
var Anna_Total_headdecoration_Price_value=0;
var Anna_Total_shoes_Price_value=0;

var Complete_Anna_Sub_Level = [];

var SelctedAnnaItem = [];
for(var i=0;i<=6;i++)
{
    SelctedAnnaItem[i] = [];
}

var Complete_Level = [];

for(var i=0;i<=4;i++)
{
    if(i<=2)
    {
        Complete_Level.push(false);
    }
    Complete_Elsa_Sub_Level.push(false);
    Complete_Anna_Sub_Level.push(false);
}

Complete_Level[1]=true;
Complete_Level[2]=false;

Complete_Elsa_Sub_Level[1]=true;
Complete_Elsa_Sub_Level[2]=true;
Complete_Elsa_Sub_Level[3]=true;
Complete_Elsa_Sub_Level[4]=true;

Complete_Anna_Sub_Level[1]=true;
Complete_Anna_Sub_Level[2]=true;
Complete_Anna_Sub_Level[3]=true;
Complete_Anna_Sub_Level[4]=true;

comman.getRandomInt = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
comman.winSize = function(){
	return cc.director.getWinSize();
};
comman.playMusic = function(a, b, c) {
    var d = cc.audioEngine;
    d.stopMusic(!0 === c);
    cc.audioEngine.setMusicVolume(0.25);
    comman.isMusicEnable ? d.playMusic(a, b) : comman._lastMusic = a
};
comman.setSoundEnabled = function(a) {
    if (comman.isMusicEnable != a) {
        comman.isMusicEnable = a;
        var b = cc.audioEngine;
        cc.audioEngine.setMusicVolume(0.25);
        a ? (comman.playMusic(res_comman.sound_bg_mp3,!0,!0)) : (b.stopMusic(), b.stopAllEffects());
    }
};