var is_load = false;
var windowHeight,windowWidth;
var isIE11 = navigator.userAgent.toLowerCase().search(/(msie\s|trident.*rv:)([\w.]+)/)!=-1;

if(isIE11==false){
	isIE11=window.ActiveXObject ? true : false;
}

if(isIE11==false){
	isIE11=("ActiveXObject" in window)
}
var progressBar=document.getElementById('progress_bar');
var progress=document.getElementById('progress');
var progNum=document.getElementById('progNum');
var beginPage=document.getElementById("begin_page");
var firstPage=document.getElementById("first_page");
var musicButton=document.getElementById("music"); 
var play=document.getElementById("play"); 
var mg1=document.getElementById("MG1"); 
musicButton.style.display="none";
var iPadMini;
var samPad;
var judgeMusic=false;
var playMusic=document.createElement('audio');

var background=document.getElementById('background');

function APIGet()
{

	var SpilData = {
            
        };
	GameAPI.loadAPI(function (apiInstance)
	{

        //alert("apiget");

		apiInstance.Branding.displaySplashScreen(continueGame);

		var splashScreenData = apiInstance.Branding.getSplashScreen();
		if (splashScreenData.show ) 
		{
            document.getElementById("begin_page").onclick =splashScreenData.action;
		}

		var logoData = apiInstance.Branding.getLogo();
        //alert("apiget2");
		if (logoData.image) 
		{
            //alert("apiget3");
			// Creates a DOM element and uses the values returned by the call
			var begin_logo = document.createElement('img');
			begin_logo.src = logoData.image;
			begin_logo.setAttribute("id", "begin_logo");
			begin_logo.addEventListener('click', logoData.action);
			begin_logo.addEventListener('touchend', logoData.action);
			begin_logo.style.zindex=1000;
		   // begin_logo.classList.add('spilgames-branding-image');  
            document.getElementById("begin_page").appendChild(begin_logo);
		//	 document.body.appendChild(begin_logo);
				var first_logo = document.createElement('img');
			first_logo.src = logoData.image;
			first_logo.setAttribute("id", "first_logo");
			first_logo.addEventListener('click', logoData.action);
			first_logo.addEventListener('touchend', logoData.action);
			first_logo.style.zindex=1000;
		   // first_logo.classList.add('spilgames-branding-image');  
            document.getElementById("first_page").appendChild(first_logo);
            //alert("apiget4");
			// document.body.appendChild(first_logo);
			 	var second_logo = document.createElement('img');
			second_logo.src = logoData.image;
			second_logo.addEventListener('click', logoData.action);
			second_logo.setAttribute("id", "second_logo");
			second_logo.addEventListener('touchend', logoData.action);
			second_logo.style.zindex=1000;
		   // second_logo.classList.add('spilgames-branding-image');  
            document.getElementById("second_page").appendChild(second_logo);
            //alert("apiget5");
            var third_logo = document.createElement('img');
			third_logo.src = logoData.image;
			third_logo.setAttribute("id", "third_logo");
			third_logo.addEventListener('click', logoData.action);
			third_logo.addEventListener('touchend', logoData.action);
			third_logo.style.zindex=1000;
		   // third_logo.classList.add('spilgames-branding-image');  
            document.getElementById("third_page").appendChild(third_logo);
            //alert("apiget6");


	
		}


        //alert("mg1start");
        var buttonProperties = apiInstance.Branding.getLink('more_games');
        var MG1 = document.createElement('img');
        // assign the outgoing click
        //alert("mg1start2");

        MG1.src="images/MG1.png";
        //alert("mg1start3");
        MG1.onclick = buttonProperties.action;
        MG1.ontouchend = buttonProperties.action;
        MG1.setAttribute("id", "MG1");
        //alert("mg1start4");
        MG1.onmouseover=function(){document.getElementById("MG1").src="images/MG1-1.png"; };
        MG1.onmouseout=function(){document.getElementById("MG1").src="images/MG1.png"; };
        //MG1.classList.add('little_scale');  //放大
        MG1.style.zindex=1000;
        // Adds the element to the document
        //alert("mg1start5");
        document.getElementById("first_page").appendChild(MG1);
        //alert("mg1start6");
        //alert("mg1="+MG1);

        var MG2 = document.createElement('img');
        // assign the outgoing click
        MG2.src="images/MG2.png";
        MG2.onclick = buttonProperties.action;
        MG2.ontouchend = buttonProperties.action;
        MG2.onmouseover=function(){	document.getElementById("MG2").src="images/MG2-1.png"; };
        MG2.onmouseout=function(){	document.getElementById("MG2").src="images/MG2.png"; };
        MG2.setAttribute("id", "MG2");

        //MG2.classList.add('little_scale');  //放大
        MG2.style.zindex=1000;
        // Adds the element to the document
        document.getElementById("second_page").appendChild(MG2);

        var MG3 = document.createElement('img');
        // assign the outgoing click
        MG3.src="images/MG3.png";
        MG3.onclick = buttonProperties.action;
        MG3.ontouchend = buttonProperties.action;
        MG3.setAttribute("id", "MG3");
        MG3.onmouseover=function(){document.getElementById("MG3").src="images/MG3-1.png"; };
        MG3.onmouseout=function(){document.getElementById("MG3").src="images/MG3.png"; };
        //MG3.classList.add('little_scale');  //放大
        MG3.style.zindex=1000;
        // Adds the element to the document
        document.getElementById("third_page").appendChild(MG3);

	}, SpilData);
}

  function continueGame(){
            // display game menu
			initia();
        };
function initia()
{
 
	
	var sUserAgent = navigator.userAgent.toLowerCase();
	if(sUserAgent.indexOf("ipad")>0)//检测是否ipad
		iPadMini=true;
	if(sUserAgent.indexOf("samsung")>0 )//检测是否samsung
		samPad=true;
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

	beginPage.style.display="block";

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
            //alert(1);
            clearInterval(setPro);

			if(is_opera){
				playMusic.src="audio/music.wav";
			}else if(is_firefox){
				playMusic.src="audio/music.wav";
			}else{
				playMusic.src="audio/music.mp3";
			}


            //alert(2);
			if((iPadMini==true)||(samPad==true) )//如果是苹果的平板，则音乐不会自动播放，直接设置为关
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
					playMusic.play();
				}
			}
			console.log(judgeMusic);
            //alert(2.1);
            document.getElementById('first_page').style.display="block";
            //alert(document.getElementById('MG1'));
            //alert(2.2);
            //

            //alert(document.getElementById('MG1').offsetTop  +" "+document.getElementById('MG1').offsetLeft +" "+ document.getElementById('MG1').style.display  );

            //alert(3);
            //	musicButton.style.display="block";
			musicButton.style.display="block";
		//	progressBar.style.display="none";
			play.style.display="block";
			//mg1.style.display="block";
		//	progressBar.style.display="none";
		//	play.style.display="block";
			beginPage.style.display="none";
             //xpaker
            document.getElementById("MG1").style.display="block";
            //alert(4);
		//	beginPage.style.display="none";
		//	first_page.style.display="block";

			//如果是苹果的平板，则音乐不会自动播放，直接设置为关
			if((is_ipad==true)||(is_sampad==true) ){
				musicButton.src='images/yinyueguan.png';
				judgeMusic=false;
				playMusic.pause();
			}
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
	
	var setMusicPlay=setInterval(musicPlayOn,1000);
//	document.addEventListener("keypress",processKey, true);
}
/*
function processKey(evt)
{
	alert(evt.keyCode);
}*/
var pause=0;
var musicCount=0;
function musicPlayOn()
{
	
	window.onfocus=function()
	{
		musicCount=1;
//		console.log("testMusic!__onfocus:  pause: "+pause+"[]"+i+"[]"+judgeMusic);
		if(judgeMusic==true)
			playMusic.play();

		}
	window.onblur=function()
	{
		musicCount=2;
//		console.log("testMusic!__Onblur  pause: "+pause+"[]"+i+"[]"+judgeMusic);
		playMusic.pause();
	}
	if(pause==0 && (musicCount==0 || musicCount==1)  && judgeMusic==true) {
        //console.log(12);
        if(document.hidden){
            playMusic.pause();
        }else{
            playMusic.play();
        }
    }
//	console.log("testMusic!__Outer  pause: "+pause+"[]"+i+"[]"+judgeMusic);
}
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

var playCount=0;
var firstCall=0;


function pauseGame()
	{
        // Insert here the logic to pause your game
	//	judgeMusic=false;
	pause=1;
			playMusic.pause();
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
				console.log("judgeMusic: "+judgeMusic);
			if(judgeMusic==true)
				playMusic.play();

			}
			//	if(judgeMusic==true)
			//	playMusic.play();
			window.onblur=function()
			{
				playMusic.pause();
			}
        console.log('ad displayed, you can now resume your game');
	}
function controlMusic()//...................................................控制音乐
{
	if(judgeMusic==true)
	{
		eval('music').src='images/yinyueguan.png';
		eval('music').style.width='5%';		
		judgeMusic=false;
        playMusic.pause();		
	}
	else
	{
		eval('music').src='images/yinyuekai.png';
		eval('music').style.width='5%';
		judgeMusic=true;
		playMusic.play();
	}
}
function overNutton(who)
{
	who.src='images/'+who.id.toString()+'-'+1+'.png';
}
function outNutton(who)
{
	who.src='images/'+who.id.toString()+'.png';
}
function clickPlay()
{
	eval('first_page').style.display="none";
	eval('second_page').style.display="block";
//	eval('first_page').style.display="none";
//	eval('second_page').style.display="block";
	var kuang=document.getElementsByClassName("kuang");
	for(var i=0;i<kuang.length;i++)
		kuang[i].style.display="none";
	//	kuang[i].style.display="none";
	eval("toufaKuang").style.display="block";
//	eval("toufaKuang").style.display="block";
}
function resetGame()
{
	var onShiwu=document.getElementsByClassName("on");
	for(var i=0;i<onShiwu.length;i++)
	{
		onShiwu[i].src="";
		onShiwu[i].style.display="none";
	//	alert(onShiwu[i].src);
	}
	var showShiwu=document.getElementsByClassName("show");
	for(var i=0;i<showShiwu.length;i++)
	{
		showShiwu[i].src="";
		showShiwu[i].style.display="none";
	}
	//默认显示第三张头发
	eval("toufaqian_show").style.display="block";
	eval("toufaqian_on").style.display="block";
	eval("toufahou_show").style.display="block";
	eval("toufahou_on").style.display="block";
	eval("toufaqian_show").src="images/toufa3qian.png";
	eval("toufahou_show").src="images/toufa3hou.png";
	eval("toufaqian_on").src="images/toufa3qian.png";
	eval("toufahou_on").src="images/toufa3hou.png";

	}
window.onresize=function()
{
	resize();
	}
function resize()
{

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

}
function selectBaiFang(baiFangKuang)
{
	var baiFangObj=baiFangKuang.id.toString().slice(0,-5);
	var kuang=document.getElementsByClassName("kuang");
	for(var i=0;i<kuang.length;i++)
		kuang[i].style.display="none";
	eval(baiFangObj+"Kuang").style.display="block";

}
function selectShiwu(shiwuSelect)
{

	var shiwu=shiwuSelect.id.toString().slice(0,-1);
console.log(shiwuSelect.id);
		if(shiwu=="lianyi")//如果是连衣裙，则去掉上衣和下衣
		{ 
			
			eval("xiayi_on").style.display="none";
			eval("xiayihou_on").style.display="none";
			eval("shangyi_on").style.display="none";
			eval("lianyi_on").style.display="block";

			eval("xiayi_show").style.display="none";
			eval("xiayihou_show").style.display="none";
			eval("shangyi_show").style.display="none";
			eval("lianyi_show").style.display="block";
			eval("xiayi_show").src="";
			eval("xiayihou_show").src="";
			eval("shangyi_show").src="";
			eval("xiayi_on").src="";
			eval("xiayihou_on").src="";
			eval("shangyi_on").src="";
		}
		if(shiwu=="shangyi" )
		{ 
			eval("lianyi_on").style.display="none";
		
		//	eval("xiayihou_on").style.display="block";
			eval("shangyi_on").style.display="block";

			eval("lianyi_show").style.display="none";
			eval("xiayi_show").style.display="block";
		//	eval("xiayihou_show").style.display="block";
		
		}
		if( shiwu=="xiayi")
		{
			eval("lianyi_on").style.display="none";
			eval("xiayi_on").style.display="block";
		//	eval("xiayihou_on").style.display="block";
		

			eval("lianyi_show").style.display="none";
			eval("xiayi_show").style.display="block";
		//	eval("xiayihou_show").style.display="block";
		
		}
	if(shiwu=="toufa")//如果是头发，则有前后两幅图
	{
		eval(shiwu+"qian_on").src="images/"+shiwuSelect.id+"qian.png";
		eval(shiwu+"hou_on").src="images/"+shiwuSelect.id+"hou.png";

		eval(shiwu+"qian_show").src="images/"+shiwuSelect.id+"qian.png";
		eval(shiwu+"hou_show").src="images/"+shiwuSelect.id+"hou.png";
	}
	else
	{
		if(shiwuSelect.id=="xiayi7"  )//如果是下衣7，有前后两幅图
			{
				eval("xiayihou_on").style.display="block";
				eval(shiwu+"_on").src="images/"+shiwuSelect.id+"qian.png";
				eval(shiwu+"hou_on").src="images/"+shiwuSelect.id+"hou.png";

				eval("xiayihou_show").style.display="block";
				eval(shiwu+"_show").src="images/"+shiwuSelect.id+"qian.png";
				eval(shiwu+"hou_show").src="images/"+shiwuSelect.id+"hou.png";
			}
		else
		{
		eval(shiwu+"_on").style.display="block";
			eval(shiwu+"_show").style.display="block";
			eval(shiwu+"_on").src="images/"+shiwuSelect.id+".png";
			eval(shiwu+"_show").src="images/"+shiwuSelect.id+".png";
			
			
		}
	}
//	console.log("xiayihou_on.src="+eval("xiayihou_on").src);
	
	if(shiwu=="xiayi" && shiwuSelect.id !="xiayi7" )//如果不是下衣7，去掉后面显示的图
	{
		eval("xiayihou_on").style.display="none";
		eval("xiayihou_show").style.display="none";
	}
	if(eval("xiayi_on").src.toString().indexOf("xiayi7")>=0)
	{
			eval("xiayihou_on").style.display="block";
			eval("xiayihou_show").style.display="block";
	}
	else
	{
			eval("xiayihou_on").style.display="none";
			eval("xiayihou_show").style.display="none";
	}
	
}
function showGame()
{
	eval("second_page").style.display="none";
	eval("third_page").style.display="block";

	var sUserAgent = navigator.userAgent.toLowerCase();
//	sUserAgent.indexOf("firefox")>0 ||console.log((sUserAgent.indexOf("android")>0 || (sUserAgent.indexOf("ipad")>0) && sUserAgent.indexOf("chrome")>0 ));
	if(sUserAgent.indexOf("android")>0 || (sUserAgent.indexOf("ipad")>0 && sUserAgent.indexOf("crios")>0 ) || (sUserAgent.indexOf("ipad")>0 && sUserAgent.indexOf("ucbrowser")>0 ) || (sUserAgent.indexOf("linux")>0 && sUserAgent.indexOf("chrome")>0 ))//安卓下无法打印 ipad下 chrome浏览器无法打印,在firefox中多按几次打印按钮后，有些对象不显示
    {
       
    }
	else{
        
    }



  

   

	
	
}

function replayGame()
{
	try
	{
		GameAPI.GameBreak.request(pauseGame, resumeGame);
	}
	catch (error)	{	}
	
/*	try{	 APIGet();}
	catch(error){}*/
	//设置显示的摆放物品图片为空
	var showShiwu=document.getElementsByClassName("show");
	for(var i=0;i<showShiwu.length;i++)
	{
		showShiwu[i].src="";
		showShiwu[i].style.display="none";
	}
	var onShiwu=document.getElementsByClassName("on");
	for(var i=0;i<onShiwu.length;i++)
	{
		onShiwu[i].src="";
		onShiwu[i].style.display="none";
	}
	//默认显示第三张头发
	eval("toufaqian_show").style.display="block";
	eval("toufahou_show").style.display="block";
	eval("toufaqian_on").style.display="block";
	eval("toufahou_on").style.display="block";
	eval("toufaqian_show").src="images/toufa3qian.png";
	eval("toufahou_show").src="images/toufa3hou.png";
	eval("toufaqian_on").src="images/toufa3qian.png";
	eval("toufahou_on").src="images/toufa3hou.png";

	eval("first_page").style.display="block";
	eval("third_page").style.display="none";
		

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