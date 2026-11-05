var c_is_game_start=false;

//Music is playing?
var c_is_play_music=true;

var logoData;
var more_gamesButtonProperties;
var pause=0;

var backgroundMusic;

document.body.className = "body_background1";


var is_show_logo=true;
var is_iphone=false;
var is_ipad=false;
var is_sampad=false;
var is_android=false;

var is_save=true;
var is_print=true;

var is_firefox=false;

var sUserAgent = navigator.userAgent.toLowerCase();

if(sUserAgent.indexOf("iphone")>0)//检测是否iphone
    is_iphone=true;

if(sUserAgent.indexOf("firefox")>0)//检测是否firefox
    is_firefox=true;

if(sUserAgent.indexOf("android")>0)//检测是否android
    is_android=true;

if(sUserAgent.indexOf("ipad")>0)//检测是否ipad
    is_ipad=true;

//String:mozilla/5.0 (linux; u; android 4.1.2; zh-cn; gt-p5100 build/jzo54k) applewebkit/534.30 (khtml, like gecko) version/4.0 safari/534.30
//if(sUserAgent.indexOf("samsung")>0 )//检测是否samsung
if( sUserAgent.indexOf("applewebkit")>0  &&  sUserAgent.indexOf("android")>0  )//检测是否samsung
    is_sampad=true;

var is_opera=false;

if( sUserAgent.indexOf("opr")>0 ){
    is_opera=true;
}


//如果是苹果的平板，则音乐不会自动播放，直接设置为关
if((is_ipad==true)||(is_sampad==true) ){
    c_is_play_music=false;
}


if(is_android || is_iphone || is_ipad){
    is_save=false;
    is_print=false;
}


//if(is_firefox && is_android){
    //is_opera=true;
    //c_is_play_music=false;
//}



window.onload=function(){

    backgroundMusic=document.getElementById('audio');

    if(is_opera){
        backgroundMusic.src="res/audio/background.wav";
    }else if(is_firefox){
        backgroundMusic.src="res/audio/background.wav";
    }else{
        backgroundMusic.src="res/audio/background.mp3";
    }

}


window.addEventListener('scroll', function () {
    // Do not scroll when keyboard is visible 
    if (document.activeElement === document.body && window.scrollY > 0) {
        document.body.scrollTop = 0;
    }
}, true);



APIGet();

window.onfocus=function()
{
    if(c_is_play_music==true){
        playMusic();
    }
}
window.onblur=function()
{
    if(c_is_play_music==true){
        stopMusic();
    }
}


function APIGet()
{
    var SpilData = {
        id: '576742227280293061.js' // You receive this value from Spil Games
    };

    


        backgroundMusic=document.getElementById('audio');
        //backgroundMusic=document.createElement('audio');
        //backgroundMusic.src="res/audio/background.mp3";

        // Retrieves the logo from Spil
        

        // Shows the logo only when it is configured; otherwise, ignore it.
        //alert(logoData.image);

        {
			is_show_logo=false;

			continueGame();
		}




    

}

//the callback method creates the game's main menu
function continueGame(){
    cc.game.run();
};

function pauseGame()
{
    // Insert here the logic to pause your game
    //judgeMusic=false;
    pause=1;

    if(c_is_play_music==true){
        stopMusic();
    }

    console.log('ad requested, you should pause your game');
}

function resumeGame()
{
    // Insert here the logic to resume your game
    //	judgeMusic=true;
    //广告后还处于焦点，再播放音乐
    pause=0;
    window.onfocus=function()
    {
        if(c_is_play_music==true){
            playMusic();
        }
    }
    window.onblur=function()
    {
        if(c_is_play_music==true){
            stopMusic();
        }
    }
    if(c_is_play_music==true){

        playMusic();
        //alert('play');
    }
    console.log('ad displayed, you can now resume your game');
}



function playMusic(){

    try{

        if( c_is_game_start ){
            backgroundMusic=document.getElementById('audio');
            backgroundMusic.loop=true;
            backgroundMusic.play();
        }

        //cc.audioEngine.setMusicVolume(0.7);
        //cc.audioEngine.playMusic(res.background_mp3, true);
        //cc.audioEngine.playMusic(res.background_mp3, true);

    }catch(err){
        cc.log(err);
        alert(err);
    }
}

function stopMusic(){
    
    try{


        backgroundMusic=document.getElementById('audio');

        //backgroundMusic.src="res/audio/background.mp3";

		backgroundMusic.pause();

        //cc.audioEngine.stopMusic(true);
        //cc.audioEngine.stopAllEffects();
        //cc.audioEngine.pauseMusic();

        //alert();
        //cc.audioEngine.stopMusic(true);

    }catch(err){
        cc.log(err);
        alert(err);
    }
}

cc.game.onStart = function(){

    cc.view.setDesignResolutionSize(1458, 1042, cc.ResolutionPolicy.SHOW_ALL);
    //cc.view.setResolutionPolicy(cc.ResolutionPolicy.EXACT_FIT); //NO_BORDER
	cc.view.resizeWithBrowserSize(true);

    cc.director.setDisplayStats(false);

    //load resources
    //cc.LoaderScene.preload(g_resources, function () {
    MyLoading.preload(g_resources, function () {

        if(c_is_play_music){
            if(c_is_first_start_play==true){
                playMusic();
                //alert('p1');
                c_is_first_start_play=false;
            }
        }

        cc.director.runScene(new StartScene());

        c_is_game_start=true;
        if(c_is_play_music==true) {
            playMusic();
        }else{
            stopMusic();
        }

    }, this);


    //shi yin screen, no border.
    cc.view._resizeEvent();

};
//cc.game.run();











