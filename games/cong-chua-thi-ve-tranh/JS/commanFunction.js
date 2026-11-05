var comman = {
	GameName:"",
	GameId:"",
    isLoadFisrtTime:0,
    selectedPicture:1,
	isMusicEnable:true,
	_lastMusic:null
};
var _drawingTexture;
var dress_code = [];
for (var i=0;i<=2;i++) 
{
    var temp_code1 = [];
    for (var j=0;j<=5;j++)
    {
        temp_code1.push(0);
    }
    dress_code.push(temp_code1);
}
comman.getRandomInt = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
comman.winSize = function(){
	return cc.director.getWinSize();
};
comman.playMusic = function(a, b, c) {
    var d = cc.audioEngine;
    d.stopMusic(!0 === c);
    comman.isMusicEnable ? d.playMusic(a, b) : comman._lastMusic = a
};
comman.setSoundEnabled = function(a) {
    if (comman.isMusicEnable != a) {
        comman.isMusicEnable = a;
        var b = cc.audioEngine;
        //a ? (b.resumeMusic(), comman._lastMusic && (comman.playMusic(comman._lastMusic, !0), comman._lastMusic = null)) : (b.pauseMusic(), b.stopAllEffects())
        a ? (comman.playMusic(res_comman.sound_bg_mp3,!0,!0)) : (b.stopMusic(), b.stopAllEffects())
    }
};