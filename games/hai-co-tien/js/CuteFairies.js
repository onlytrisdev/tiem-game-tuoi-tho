var isIE11 = navigator.userAgent.toLowerCase().search(/(msie\s|trident.*rv:)([\w.]+)/)!=-1;
var sUserAgent = navigator.userAgent.toLowerCase();

if(isIE11==false){
	isIE11=window.ActiveXObject ? true : false;
}

if(isIE11==false){
	isIE11=("ActiveXObject" in window)
}

var chromeOnAndroid=false;

if(sUserAgent.indexOf("chrome")>0 && sUserAgent.indexOf("linux")>0 )//检测是否移动设备的chrome浏览器
	chromeOnAndroid=true;

var is_load = false;
var TOUFA={count1:1,count2:1,sum1:5,sum2:5};
var SHANGYI={count1:0,count2:0,sum1:6,sum2:6};
var XIAYI={count1:0,count2:0,sum1:6,sum2:6};
var LIANYI={count1:0,count2:0,sum1:4,sum2:4};
var TOUSHI={count1:0,count2:0,sum1:5,sum2:5};
var XIANGLIAN={count1:0,count2:0,sum1:5,sum2:5};
var SHOULIAN={count1:0,count2:0,sum1:5,sum2:5};
var XIEZI={count1:0,count2:0,sum1:5,sum2:5};
var CHIBANG={count1:0,count2:0,sum1:5,sum2:5};
var background=document.getElementById('background');
var begin_page=document.getElementById('begin_page');
var second_page=document.getElementById('second_page');
var first_page=document.getElementById('first_page');
var third_page=document.getElementById('third_page');
var progressBar=document.getElementById('progress_bar');
var progress=document.getElementById('progress');
var progNum=document.getElementById('progNum');

var playMusic=document.createElement("audio");


var toufa1_on=document.getElementsByClassName('toufa1_on');
var shangyi1_on=document.getElementsByClassName('shangyi1_on');
var xiayi1_on=document.getElementsByClassName('xiayi1_on');
var lianyi1_on=document.getElementsByClassName('lianyi1_on');
var toushi1_on=document.getElementsByClassName('toushi1_on');
var xianglian1_on=document.getElementsByClassName('xianglian1_on');
var shoulian1_on=document.getElementsByClassName('shoulian1_on');
var xiezi1_on=document.getElementsByClassName('xiezi1_on');
var chibang1_on=document.getElementsByClassName('chibang1_on');
var toufa2_on=document.getElementsByClassName('toufa2_on');
var shangyi2_on=document.getElementsByClassName('shangyi2_on');
var xiayi2_on=document.getElementsByClassName('xiayi2_on');
var lianyi2_on=document.getElementsByClassName('lianyi2_on');
var toushi2_on=document.getElementsByClassName('toushi2_on');
var xianglian2_on=document.getElementsByClassName('xianglian2_on');
var shoulian2_on=document.getElementsByClassName('shoulian2_on');
var xiezi2_on=document.getElementsByClassName('xiezi2_on');
var chibang2_on=document.getElementsByClassName('chibang2_on');
var musicButton=document.getElementById("music"); 
musicButton.style.display="none";
var moregame1=document.getElementById('MG1');
var iPadMini;
var samPad;
var windowHeight,windowWidth;

var judgeMusic=true;
var second_logo=document.getElementById("logo");
var begin_logo=document.getElementById("begin_logo");
var first_logo=document.getElementById("first_logo"); 
var second_logo=document.getElementById("second_logo"); 
var third_logo=document.getElementById("third_logo");

var play=document.getElementById("play");
var MG1=document.getElementById("MG1");

var setMusicPlay;
//.....................................加载界面.........................................
function initia()
{
	var sUserAgent = navigator.userAgent.toLowerCase();
	windowHeight=document.documentElement.clientHeight;
	windowWidth=document.documentElement.clientWidth;
	
	
	if(windowWidth>windowHeight/5*7)
	{
	background.style.width=windowHeight/5*7+'px';
	background.style.height=windowHeight+'px';
	}
	else
	{
	background.style.width=windowWidth+'px';
	background.style.height=windowWidth/7*5+'px';		
	}

	begin_page.style.display="block";
	
	progNum.style.fontSize=parseInt(background.style.height)/22+"pt";
	var setPro=setInterval(progBar,50);
	var b=0,i=0; 

    /*
	playMusic.src="audio/music.mp3";
	playMusic.loop=true;
	playMusic.autoplay=true;
	playMusic.pause();
    */
	function progBar()
	{  

		if(b==0)
		{
			i=4;
			b=1;
		}
		i+=3;
		if(i>=120)
		{
			clearInterval(setPro);
			//建立音乐

			if(is_opera){
				playMusic.src="audio/music.wav";
			}else if(is_firefox){
				playMusic.src="audio/music.wav";
			}else{
				playMusic.src="audio/music.mp3";
			}

			if((is_iphone==true)||(iPadMini==true)||(samPad==true)||(chromeOnAndroid==true))//如果是苹果的平板，则音乐不会自动播放，直接设置为关
			{
				musicButton.src='images/yinyueguan.png';
				judgeMusic=false;
				playMusic.pause();
			}
			else
			{
				musicButton.src='images/yinyuekai.png';
				judgeMusic=true;
                window.onfocus=function()
                {
                    if(judgeMusic)
                        playMusic.play();
                }
				playMusic.play();
			}

			//如果是苹果的平板，则音乐不会自动播放，直接设置为关
			if((is_ipad==true)||(is_sampad==true) ){
				musicButton.src='images/yinyueguan.png';
				judgeMusic=false;
				playMusic.pause();
			}


			musicButton.style.display="block";
			progressBar.style.display="none";

			play.style.display="block";
			moregame1.style.display="block";
			begin_page.style.display="none";
			first_page.style.display="block";
            third_page.style.display="none";
            second_page.style.display="none";
            second_logo.style.display="none";
			
			if(first_logo.src!=''){
				first_logo.style.display="block";
			}
   

            third_logo.style.display="none";

		}
		if(i<=100)
		{
			progressBar.style.display="block";
			progress.style.display="block";
			progress.style.width=parseInt(progressBar.offsetWidth)/102*i+"px";
			progNum.innerHTML=i+"%";

            if(i<100){
                is_load=false;
                if(is_load!=true){
                    playMusic.pause();
                }
            }
            if(i==100){
                is_load=true;
                if(judgeMusic!=false && is_load==true){
                    playMusic.play();
                }
            }
		}
	}
	APIGet();

    setMusicPlay=setInterval(musicPlayOn,1000);
}


var pause=0;
var musicCount=0;
function musicPlayOn()
{

    window.onfocus=function()
    {
        musicCount=1;
        if(judgeMusic==true)
            playMusic.play();

    }
    window.onblur=function()
    {
        musicCount=2;
        playMusic.pause();
    }
    if(pause2==1){
        console.log("pause2==1");
        playMusic.pause();
    }
    if(pause==0 && (musicCount==0 || musicCount==1)  && judgeMusic==true){
        if(document.hidden){
            playMusic.pause();
        }else{
            if(pause2!=1)
                playMusic.play();
        }
    }
}

//.....................................................................................
window.onresize=function()//..........................................改变屏幕大小
{	windowHeight=document.documentElement.clientHeight;
	windowWidth=document.documentElement.clientWidth;
	if(windowWidth>windowHeight/5*7)
	{
	background.style.width=windowHeight/5*7+'px';
	background.style.height=windowHeight+'px';
	}
	else
	{
	background.style.width=windowWidth+'px';
	background.style.height=windowWidth/7*5+'px';		
	}
	progNum.style.fontSize=parseInt(background.style.height)/22+"pt";
	}

window.onfocus=function()
{
	if(judgeMusic==true)
		playMusic.play();
        //alert(255);
	}
window.onblur=function()
{
	playMusic.pause();
}
var playCount=0;
var firstCall=0;
function APIGet(){

	var SpilData = {
            
        };

GameAPI.loadAPI(function (apiInstance) {
	var splashScreenData = apiInstance.Branding.getSplashScreen();
	for(var each in  logoData)
		//console.log("splashScreenData:\t"+each);
		console.log(firstCall);
		if (splashScreenData.show ) 
		{
			
		eval("begin_page").onclick =splashScreenData.action;
	//	 document.body.addEventListener("click", splashScreenData.action);
		
		 }

	
console.log('GameAPI version ' + apiInstance.version + ' loaded!'+apiInstance.Branding.getLogo().image);
    // getLogo example0
    var logoData = apiInstance.Branding.getLogo();
//	for(var each in  logoData)
//	console.log(each);

    // Shows the logo only when it is configured; otherwise, ignore it.
    if (logoData.image) 
	{

		console.log("logoData.image=" + logoData.image);

        // Creates a DOM element and uses the values returned by the call
		var begin_logo = document.getElementById('begin_logo');
		begin_logo.src = logoData.image;
			
			if(begin_logo.ontouchend){
				begin_logo.addEventListener('touchend', logoData.action);
			}else{
				begin_logo.addEventListener('click', logoData.action);
			}


		if(logoData.image!='')
			begin_logo.style.display='block';

		var first_logo = document.getElementById('first_logo');
		first_logo.src = logoData.image;
		
			if(first_logo.ontouchend){
				first_logo.addEventListener('touchend', logoData.action);
			}else{
				first_logo.addEventListener('click', logoData.action);
			}

		if(logoData.image!='')
			first_logo.style.display='block';

		var second_logo = document.getElementById('second_logo');
		second_logo.src = logoData.image;

			if(second_logo.ontouchend){
				second_logo.addEventListener('touchend', logoData.action);
			}else{
				second_logo.addEventListener('click', logoData.action);
			}

		if(logoData.image!='')
			second_logo.style.display='block';

		var third_logo = document.getElementById('third_logo');
		third_logo.src = logoData.image;
		

		
			if(third_logo.ontouchend){
				third_logo.addEventListener('touchend', logoData.action);
			}else{
				third_logo.addEventListener('click', logoData.action);
			}

		if(logoData.image!='')
			third_logo.style.display='block';

    }
	var link = apiInstance.Branding.getLink("more_games");
	var links = apiInstance.Branding.getLinks();
    for (var linkName in links) {
	console.log(linkName);
        // Ad-hoc handling of each linkName value
        switch (linkName) {

            // Add the 'more_games' button only if it is detected
            case 'more_games':
                var moreButton1 = document.getElementById('MG1');


	if(!moreButton1.ontouchend){
		moreButton1.onclick =links[linkName].action;
	}else{
		moreButton1.ontouchend = links[linkName].action;
	}

			//moreButton1.onclick=links[linkName].action;
//                moreButton1.addEventListener('click', links[linkName].action);
				var moreButton2 = document.getElementById('MG2');

	if(!moreButton2.ontouchend){
		moreButton2.onclick =links[linkName].action;
	}else{
		moreButton2.ontouchend = links[linkName].action;
	}

                //moreButton2.addEventListener('click', links[linkName].action);

				var moreButton3 = document.getElementById('MG3');


	if(!moreButton3.ontouchend){
		moreButton3.onclick =links[linkName].action;
	}else{
		moreButton3.ontouchend = links[linkName].action;
	}

                //moreButton3.addEventListener('click', links[linkName].action);
             //   document.body.appendChild(moreButton);
                break;

                // You can handle different required links in different ways
                // by adding an extra case - break clause.                
                // Then, we look for any default buttons we may handle
            default:
                if (window.console && console.log) {
                    console.log("This game does not handle the link: " + linkName);
                }
                break;
        }
	
    }
	function _triggerMidroll(callbacks) 
	{
		if(playCount % 2 === 0)
		{
			//apiInstance.GameBreak.request(callbacks.pause, callbacks.resume);
		}
	};
playCount++;
	// This triggers a mid-roll ad to be displayed.
	_triggerMidroll({
		pause: function() {
			judgeMusic=0;
			playMusic.pause();
			console.log('Midroll requested');
		},
		resume: function() {
			judgeMusic=1;

//广告后还处于焦点，再播放音乐
window.onfocus=function()
{
	if(judgeMusic==true){
        playMusic.play();
        //alert(332);
    }
}

window.onblur=function()
{
    if(judgeMusic==true){
        playMusic.pause();
    }
}
			console.log('Midroll finished');
		}
	});


    }, SpilData);
}
//...................................first_page..................................................
function overNutton(who)
{
	who.className= "little_scale";
	//who.src='images/'+who.id.toString()+'-'+1+'.png';
	who.src='images/'+who.id.toString()+'.png';
}
function outNutton(who)
{
	who.className= "little_scale";
	who.src='images/'+who.id.toString()+'.png';
}

function clickPlay()
{
    eval('first_page').style.display="none";
	eval('second_page').style.display="block";
	if(second_logo.src!=''){
		second_logo.style.display="block";
	}
    
    eval('second_page').style.display="block";
	eval('toufa1_on')[0].style.display="block";
	eval('toufa1_on')[5].style.display="block";
	eval('toufa2_on')[0].style.display="block";
	eval('toufa2_on')[5].style.display="block";

	eval('renwu').style.display="block";

}

function controlMusic()//...................................................控制音乐
{
	if(judgeMusic==true)
	{
		eval('music').src='images/yinyueguan.png';
		eval('music').style.width='2.9%';		
		judgeMusic=false;
        playMusic.pause();		
	}
	else
	{
		eval('music').src='images/yinyuekai.png';
		eval('music').style.width='4%';
		judgeMusic=true;
		playMusic.play();
	}
}
//..................................second_page............................................................
function setHidden()
{
	for(var i in toufa1_on){
        if(!isNaN(i))
            toufa1_on[i].style.display="none";
    }
	for(var i in shangyi1_on){if(!isNaN(i))shangyi1_on[i].style.display="none";}
	for(var i in xiayi1_on){if(!isNaN(i))	xiayi1_on[i].style.display="none";}
	for(var i in lianyi1_on){if(!isNaN(i))	lianyi1_on[i].style.display="none";}
	for(var i in toushi1_on){if(!isNaN(i))	toushi1_on[i].style.display="none";}
	for(var i in xianglian1_on){if(!isNaN(i))	xianglian1_on[i].style.display="none";}
	for(var i in shoulian1_on){if(!isNaN(i))	shoulian1_on[i].style.display="none";}
	for(var i in xiezi1_on){if(!isNaN(i))	xiezi1_on[i].style.display="none";}
	for(var i in chibang1_on){if(!isNaN(i))	chibang1_on[i].style.display="none";}
	for(var i in toufa2_on){if(!isNaN(i))	toufa2_on[i].style.display="none";}
	for(var i in shangyi2_on){if(!isNaN(i))	shangyi2_on[i].style.display="none";}
	for(var i in xiayi2_on){if(!isNaN(i))	xiayi2_on[i].style.display="none";}
	for(var i in lianyi2_on){	if(!isNaN(i))lianyi2_on[i].style.display="none";}
	for(var i in toushi2_on){if(!isNaN(i))	toushi2_on[i].style.display="none";}
	for(var i in xianglian2_on){if(!isNaN(i))	xianglian2_on[i].style.display="none";}
	for(var i in shoulian2_on){if(!isNaN(i))	shoulian2_on[i].style.display="none";}
	for(var i in xiezi2_on){	if(!isNaN(i))xiezi2_on[i].style.display="none";}
	for(var i in chibang2_on){if(!isNaN(i))	chibang2_on[i].style.display="none";}

}
setHidden();
function selectTouFa1()
{
	for(var i in toufa1_on)
	{
        if(!isNaN(i))
		    toufa1_on[i].style.display="none";
	}
	if(TOUFA.count1==TOUFA.sum1)
	{
		TOUFA.count1=0;
	}
	toufa1_on[TOUFA.count1++].style.display="block";
	toufa1_on[TOUFA.count1+4].style.display="block";
}
function selectTouFa2()
{
	for(var i in toufa2_on)
	{
        if(!isNaN(i))
		    toufa2_on[i].style.display="none";
	}
	if(TOUFA.count2==TOUFA.sum2)
	{
		TOUFA.count2=0;
	}
	toufa2_on[TOUFA.count2++].style.display="block";
	toufa2_on[TOUFA.count2+4].style.display="block";
}
function selectClothes1(who)
{
	var lower=who.id.toString().slice(0,-5);
	var upper=lower.toUpperCase();
	if(who.id.toString().slice(0,-5)=='shangyi')
	{
		eval('renwu1neiyi').style.display="block";
		for(var i in lianyi1_on){
            if(!isNaN(i))
                lianyi1_on[i].style.display="none";
        }

		LIANYI.count1=0;
	}
	if(who.id.toString().slice(0,-5)=='lianyi')
	{
		for(var i in shangyi1_on){
            if(!isNaN(i))
                shangyi1_on[i].style.display="none";
        }

		for(var i in xiayi1_on){
            if(!isNaN(i))
                xiayi1_on[i].style.display="none";
        }

		eval('renwu1neiyi').style.display="none";
		SHANGYI.count1=0;
		XIAYI.count1=0;
	}
	if(who.id.toString().slice(0,-5)=='xiayi')
	{
		if(LIANYI.count1>=1)
			eval('renwu1neiyi').style.display="block";
		for(var i in lianyi1_on){
            if(!isNaN(i))
                lianyi1_on[i].style.display="none";
        }

		LIANYI.count1=0;				
	}
	for(var i in eval(lower+1+'_on'))
	{
        if(!isNaN(i))
		eval(lower+1+'_on')[i].style.display="none";
	}
	if(eval(upper).count1==eval(upper).sum1)
		eval(upper).count1=0;
	eval(lower+1+'_on')[eval(upper).count1++].style.display="block";
}
function selectClothes2(who)
{
	var lower=who.id.toString().slice(0,-6);
	var upper=lower.toUpperCase();
	if(who.id.toString().slice(0,-6)=='shangyi')
	{
		eval('renwu2neiyi').style.display="block";
		for(var i in lianyi2_on){
            if(!isNaN(i))
                lianyi2_on[i].style.display="none";
        }

		LIANYI.count2=0;
	}
	if(who.id.toString().slice(0,-6)=='lianyi')
	{
		for(var i in shangyi2_on){
            if(!isNaN(i))
                shangyi2_on[i].style.display="none";
        }

		for(var i in xiayi2_on){
            if(!isNaN(i))
                xiayi2_on[i].style.display="none";
        }

		eval('renwu2neiyi').style.display="none";
		SHANGYI.count2=0;
		XIAYI.count2=0;
	}
	if(who.id.toString().slice(0,-6)=='xiayi')
	{
		if(LIANYI.count2>=1)
			eval('renwu2neiyi').style.display="block";
		for(var i in lianyi2_on){
            if(!isNaN(i))
                lianyi2_on[i].style.display="none";
        }

		LIANYI.count2=0;				
	}
	for(var i in eval(lower+2+'_on'))
	{
        if(!isNaN(i))
		    eval(lower+2+'_on')[i].style.display="none";
	}
	if(eval(upper).count2==eval(upper).sum2)
		eval(upper).count2=0;
	eval(lower+2+'_on')[eval(upper).count2++].style.display="block";
}

function resetGame()
{
	setHidden();
	eval('renwu1neiyi').style.display="block";
	eval('renwu2neiyi').style.display="block";
   TOUFA={count1:1,count2:1,sum1:5,sum2:5};
   SHANGYI={count1:0,count2:0,sum1:6,sum2:6};
   XIAYI={count1:0,count2:0,sum1:6,sum2:6};
   LIANYI={count1:0,count2:0,sum1:4,sum2:4};
   TOUSHI={count1:0,count2:0,sum1:5,sum2:5};
   XIANGLIAN={count1:0,count2:0,sum1:5,sum2:5};
   SHOULIAN={count1:0,count2:0,sum1:5,sum2:5};
   XIEZI={count1:0,count2:0,sum1:5,sum2:5};
   CHIBANG={count1:0,count2:0,sum1:5,sum2:5};	
	eval('toufa1_on')[0].style.display="block";
	eval('toufa1_on')[5].style.display="block";
	eval('toufa2_on')[0].style.display="block";
	eval('toufa2_on')[5].style.display="block";
}
//....................................third_page.....................................

function showGamw()
{
	
	eval('second_page').style.display="none";
	eval('third_page').style.display="block";
	if(document.getElementById('third_logo').src!=''){
		document.getElementById('third_logo').style.display="block";
	}
    

	var sUserAgent = navigator.userAgent.toLowerCase();
	//sUserAgent.indexOf("firefox")>0 ||	console.log((sUserAgent.indexOf("android")>0 || (sUserAgent.indexOf("ipad")>0) && sUserAgent.indexOf("chrome")>0 ));
	if(sUserAgent.indexOf("android")>0 || (sUserAgent.indexOf("ipad")>0 && sUserAgent.indexOf("crios")>0 ) || (sUserAgent.indexOf("ipad")>0 && sUserAgent.indexOf("ucbrowser")>0 ) || (sUserAgent.indexOf("linux")>0 && sUserAgent.indexOf("chrome")>0 ))//安卓下无法打印 ipad下 chrome浏览器无法打印,在firefox中多按几次打印按钮后，有些对象不显示
    {
        
    }
	else{
        
    }



    

}


var pause2=0;
function pauseGame()
{
    // Insert here the logic to pause your game
    //judgeMusic=false;
    pause2=1;
    if(judgeMusic==true){
        //alert(1);
        playMusic.pause();

    }
    console.log('开始播广告，ad requested, you should pause your game');
}

function resumeGame()
{
    // Insert here the logic to resume your game
    //	judgeMusic=true;
    //广告后还处于焦点，再播放音乐
    pause2=0;
    window.onfocus=function()
    {
        if(judgeMusic==true){
            playMusic.play();
            //alert('onfocus');
        }
    }
    window.onblur=function()
    {
        if(judgeMusic==true){
            playMusic.pause();
            //alert('onblur');
        }
    }
    if(judgeMusic==true){
        playMusic.play();
    }
    console.log('广告回来了。ad displayed, you can now resume your game');
}

function replayGame()
{
	setHidden();

    GameAPI.GameBreak.request(pauseGame, resumeGame);

    eval('third_page').style.display="none";
	eval('renwu1neiyi').style.display="block";
	eval('renwu2neiyi').style.display="block";
	eval('renwu').style.display="none";
	eval('first_page').style.display="block";
	
   TOUFA={count1:1,count2:1,sum1:5,sum2:5};
   SHANGYI={count1:0,count2:0,sum1:6,sum2:6};
   XIAYI={count1:0,count2:0,sum1:6,sum2:6};
   LIANYI={count1:0,count2:0,sum1:4,sum2:4};
   TOUSHI={count1:0,count2:0,sum1:5,sum2:5};
   XIANGLIAN={count1:0,count2:0,sum1:5,sum2:5};
   SHOULIAN={count1:0,count2:0,sum1:5,sum2:5};
   XIEZI={count1:0,count2:0,sum1:5,sum2:5};
   CHIBANG={count1:0,count2:0,sum1:5,sum2:5};
   setHidden();
}
function printGame()
{
	bdhtml=window.document.body.innerHTML;//获取当前页的html代码
	sprnstr="<!--startprint-->";//设置打印开始区域
	eprnstr="<!--endprint-->";//设置打印结束区域
	prnhtml=bdhtml.substring(bdhtml.indexOf(sprnstr)+18);//从开始代码向后取html
	prnhtml=prnhtml.substring(0,prnhtml.indexOf(eprnstr));//从结束代码向前取html
	window.document.body.innerHTML=prnhtml;
	window.print();
	window.document.body.innerHTML=bdhtml;
}



// 失去焦点，关闭音乐。 -------Begin-------

var is_iphone=false;
var is_ipad=false;
var is_sampad=false;
var is_android=false;
var is_firefox=false;
var is_opera=false;



var sUserAgent = navigator.userAgent.toLowerCase();

if(sUserAgent.indexOf("iphone")>0)//检测是否iphone
    is_iphone=true;

if(sUserAgent.indexOf("firefox")>0)//检测是否firefox
    is_firefox=true;

if(sUserAgent.indexOf("android")>0)//检测是否android
    is_android=true;

if(sUserAgent.indexOf("ipad")>0)//检测是否ipad
    is_ipad=true;

if( sUserAgent.indexOf("applewebkit")>0  &&  sUserAgent.indexOf("android")>0  )//检测是否samsung
    is_sampad=true;

if( sUserAgent.indexOf("opr")>0 )
    is_opera=true;

if(is_android || is_iphone || is_ipad){
   
}






var EventUtil = {
    addHandler: function (element, type, handler) {
        if (element.addEventListener) {
            element.addEventListener(type, handler, false);
        } else if (element.attachEvent) {
            element.attachEvent("on" + type, handler);
        } else {
            element["on" + type] = handler;
        }
    }
};



EventUtil.addHandler(window, "pageshow", function (event) {
    //console.log(5);
    if (judgeMusic != false) {
        //console.log(15);
        playMusic.play();
    }
});

EventUtil.addHandler(window, "pagehide", function (event) {
    //console.log(4);
    if(judgeMusic!=false)
        playMusic.pause();
});

EventUtil.addHandler(document, "visibilitychange", function (event) {


    if (document.hidden) {
        //console.log(1);
        if(judgeMusic!=false){
            //console.log(3);
            //console.log(playMusic);
            playMusic.pause();
        }

    } else {
        //console.log(2);
        if(judgeMusic!=false)
            playMusic.play();

    }
});
// 失去焦点，关闭音乐。 -------End-------