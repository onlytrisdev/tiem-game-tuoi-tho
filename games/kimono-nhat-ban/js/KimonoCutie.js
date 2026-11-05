var is_load=false;var isIE11=navigator.userAgent.toLowerCase().search(/(msie\s|trident.*rv:)([\w.]+)/)!=-1;var windowHeight,windowWidth;var progressBar=document.getElementById('progress_bar');var progress=document.getElementById('progress');var progNum=document.getElementById('progNum');var beginPage=document.getElementById("begin_page");var firstPage=document.getElementById("first_page");var musicButton=document.getElementById("music");var background=document.getElementById('background');var iPadMini;var samPad;var chromeOnAndroid;var judgeMusic=false;var playMusic=document.createElement('audio');function APIGet()
{var SpilData={};GameAPI.loadAPI(function(apiInstance)
{apiInstance.Branding.displaySplashScreen(continueGame);eval("begin_page")
var MG2=document.createElement('img');MG2.src="images/mg1.png";if(MG2.ontouchend){}else{}
MG2.onmouseover=function(){MG2.src="images/mg1-1.png";}
MG2.onmouseout=function(){MG2.src="images/mg1.png";}
MG2.setAttribute("id","MG2");MG2.style.zindex=1000;eval("second_page").appendChild(MG2);var MG3=document.createElement('img');MG3.src="images/mg1.png";if(MG3.ontouchend){}else{}
MG3.setAttribute("id","MG3");MG3.onmouseover=function(){MG3.src="images/mg1-1.png";}
MG3.onmouseout=function(){MG3.src="images/mg1.png";}
MG3.style.zindex=1000;eval("third_page").appendChild(MG3);},SpilData);}
function continueGame(){initia();};function initia()
{document.ondragstart=function(){return false;};var progressBar=document.getElementById('progress_bar');var progress=document.getElementById('progress');var progNum=document.getElementById('progNum');var beginPage=document.getElementById("begin_page");var firstPage=document.getElementById("first_page");var musicButton=document.getElementById("music");var sUserAgent=navigator.userAgent.toLowerCase();if(sUserAgent.indexOf("ipad")>0)
iPadMini=true;if(sUserAgent.indexOf("samsung")>0||sUserAgent.indexOf("p5100")>0)
samPad=true;if(sUserAgent.indexOf("chrome")>0&&sUserAgent.indexOf("linux")>0)
chromeOnAndroid=true;windowHeight=document.documentElement.clientHeight;windowWidth=document.documentElement.clientWidth;if(windowWidth>windowHeight/5*7)
{background.style.width=windowHeight/5*7+'px';background.style.height=windowHeight+'px';}
else
{background.style.width=windowWidth+'px';background.style.height=windowWidth/7*5+'px';}
eval("begin_page").style.display="block";progNum.style.fontSize=parseInt(background.style.height)/22+"pt";var setPro=setInterval(progBar,50/3);var b=0,i=0;function progBar()
{if(b==0)
{i=4;b=1;}
i+=1;if(i>=120)
{clearInterval(setPro);if(is_opera){playMusic.src="audio/music.wav";}else if(is_firefox){playMusic.src="audio/music.wav";}else{playMusic.src="audio/music.mp3";}
if((iPadMini==true)||(samPad==true)||chromeOnAndroid==true)
{musicButton.src='images/yinyueguan.png';judgeMusic=false;playMusic.pause();}
else
{musicButton.src='images/yinyuekai.png';judgeMusic=true;window.onfocus=function()
{playMusic.play();}}
musicButton.style.display="block";beginPage.style.display="none";document.getElementById('first_page').style.display="block";if((is_ipad==true)||(is_sampad==true)){musicButton.src='images/yinyueguan.png';judgeMusic=false;playMusic.pause();}}
if(i<=100)
{progressBar.style.display="block";progress.style.display="block";progress.style.width=parseInt(progressBar.offsetWidth)/102*i+"px";progNum.innerHTML=i+"%";if(i<100){is_load=false;if(is_load!=true){playMusic.pause();}}
if(i==100){is_load=true;if(judgeMusic!=false&&is_load==true){playMusic.play();}}}}
var setMusicPlay=setInterval(musicPlayOn,1000);}
var pause=0;var musicCount=0;function musicPlayOn()
{window.onfocus=function()
{musicCount=1;if(judgeMusic==true)
playMusic.play();}
window.onblur=function()
{musicCount=2;playMusic.pause();}
if(pause==0&&(musicCount==0||musicCount==1)&&judgeMusic==true){if(document.hidden){playMusic.pause();}else{playMusic.play();}}}
window.onfocus=function()
{musicCount=1;if(judgeMusic==true)
playMusic.play();}
window.onblur=function()
{musicCount=2;playMusic.pause();}
var playCount=0;var firstCall=0;function pauseGame()
{pause=1;playMusic.pause();console.log('ad requested, you should pause your game');}
function resumeGame()
{pause=0;window.onfocus=function()
{console.log("judgeMusic: "+judgeMusic);if(judgeMusic==true)
playMusic.play();}
window.onblur=function()
{playMusic.pause();}
console.log('ad displayed, you can now resume your game');}
function controlMusic()
{if(judgeMusic==true)
{eval('music').src='images/yinyueguan.png';eval('music').style.width='5%';judgeMusic=false;playMusic.pause();}
else
{eval('music').src='images/yinyuekai.png';eval('music').style.width='5%';judgeMusic=true;playMusic.play();}}
function overNutton(who)
{who.src='images/'+who.id.toString()+'-'+1+'.png';}
function outNutton(who)
{who.src='images/'+who.id.toString()+'.png';}
function clickPlay()
{eval('first_page').style.display="none";eval('second_page').style.display="block";var kuang=document.getElementsByClassName("kuang");for(var i=0;i<kuang.length;i++)
kuang[i].style.display="none";}
nowClothes=1;function leftClothes()
{eval("clothes"+nowClothes).style.display="none";nowClothes--;if(nowClothes==0)
nowClothes=14;eval("clothes"+nowClothes).style.display="block";}
function rightClothes()
{eval("clothes"+nowClothes).style.display="none";nowClothes++;if(nowClothes==15)
nowClothes=1;eval("clothes"+nowClothes).style.display="block";}
function resetGame()
{var onShiwu=document.getElementsByClassName("on");for(var i=0;i<onShiwu.length;i++)
{onShiwu[i].src="";onShiwu[i].style.display="none";}
var showShiwu=document.getElementsByClassName("show");for(var i=0;i<showShiwu.length;i++)
{showShiwu[i].src="";showShiwu[i].style.display="none";}
eval("third_girl").style.display="block";eval("third_girl").src="images/renwu.png";eval("hair_show_before").style.display="block";eval("hair_show_back").style.display="block";eval("hair_on_before").style.display="block";eval("hair_on_back").style.display="block";eval("hair_show_back").src="images/hair1_on_back.png";eval("hair_show_before").src="images/hair1_on_before.png";eval("hair_on_before").src="images/hair1_on_before.png";eval("hair_on_back").src="images/hair1_on_back.png";}
window.onresize=function()
{resize();}
function resize()
{windowHeight=document.documentElement.clientHeight;windowWidth=document.documentElement.clientWidth;if(windowWidth>windowHeight/5*7)
{background.style.width=windowHeight/5*7+'px';background.style.height=windowHeight+'px';}
else
{background.style.width=windowWidth+'px';background.style.height=windowWidth/7*5+'px';}}
function displayKuang(baiFangKuang)
{var allKuang=document.getElementsByClassName("xuangKuang");for(i=0;i<allKuang.length;i++)
{eval(allKuang[i].id).style.display="none";}
var displayPage=baiFangKuang.replace("_button","");eval(displayPage+"_page").style.display="block";}
function displayEle(shiwuSelect)
{var shiwuId=shiwuSelect.id;var shiwuOn;if(shiwuId.toString().indexOf("10")>0||shiwuId.toString().indexOf("11")>0||shiwuId.toString().indexOf("12")>0||shiwuId.toString().indexOf("13")>0||shiwuId.toString().indexOf("14")>0)
shiwuOn=shiwuSelect.id.toString().slice(0,-2);else
shiwuOn=shiwuSelect.id.toString().slice(0,-1);console.log(shiwuId+"  []  "+shiwuOn);if(shiwuOn=="hair")
{eval("hair_on_before").src="images/"+shiwuId+"_on_before.png";eval("hair_on_back").src="images/"+shiwuId+"_on_back.png";eval("hair_show_before").src="images/"+shiwuId+"_on_before.png";eval("hair_show_back").src="images/"+shiwuId+"_on_back.png";}
else
{if(shiwuOn=="hand")
{if(shiwuId=="hand1"||shiwuId=="hand2")
{eval("hand_on").style.zIndex=4;eval("hand_show").style.zIndex=4;}
else
{eval("hand_on").style.zIndex=2;eval("hand_show").style.zIndex=2;}}
eval(shiwuOn+"_on").style.display="block";eval(shiwuOn+"_show").style.display="block";eval(shiwuOn+"_on").src="images/"+shiwuId+"_on.png";eval(shiwuOn+"_show").src="images/"+shiwuId+"_on.png";}}
function showGame()
{eval("second_page").style.display="none";eval("third_page").style.display="block";var sUserAgent=navigator.userAgent.toLowerCase();if(sUserAgent.indexOf("android")>0||(sUserAgent.indexOf("ipad")>0&&sUserAgent.indexOf("crios")>0)||(sUserAgent.indexOf("ipad")>0&&sUserAgent.indexOf("ucbrowser")>0)||(sUserAgent.indexOf("linux")>0&&sUserAgent.indexOf("chrome")>0))
{document.getElementById("save").style.display="none";}
else{}
if(is_save==false){document.getElementById("save").style.display="none";}}
function replayGame()
{try
{GameAPI.GameBreak.request(pauseGame,resumeGame);}
catch(error){}
var allKuang=document.getElementsByClassName("xuangKuang");for(i=0;i<allKuang.length;i++)
{eval(allKuang[i].id).style.display="none";}
eval("clothes_page").style.display="block";var showShiwu=document.getElementsByClassName("show");for(var i=0;i<showShiwu.length;i++)
{showShiwu[i].src="";showShiwu[i].style.display="none";}
var onShiwu=document.getElementsByClassName("on");for(var i=0;i<onShiwu.length;i++)
{onShiwu[i].src="";onShiwu[i].style.display="none";}
eval("third_girl").style.display="block";eval("third_girl").src="images/renwu.png";eval("hair_show_before").style.display="block";eval("hair_show_back").style.display="block";eval("hair_on_before").style.display="block";eval("hair_on_back").style.display="block";eval("hair_show_back").src="images/hair1_on_back.png";eval("hair_show_before").src="images/hair1_on_before.png";eval("hair_on_before").src="images/hair1_on_before.png";eval("hair_on_back").src="images/hair1_on_back.png";eval("first_page").style.display="block";eval("third_page").style.display="none";}
var is_iphone=false;var is_ipad=false;var is_sampad=false;var is_android=false;var is_firefox=false;var is_opera=false;var is_save=true;var sUserAgent=navigator.userAgent.toLowerCase();if(sUserAgent.indexOf("iphone")>0)
is_iphone=true;if(sUserAgent.indexOf("firefox")>0)
is_firefox=true;if(sUserAgent.indexOf("android")>0)
is_android=true;if(sUserAgent.indexOf("ipad")>0)
is_ipad=true;if(sUserAgent.indexOf("applewebkit")>0&&sUserAgent.indexOf("android")>0)
is_sampad=true;if(sUserAgent.indexOf("opr")>0)
is_opera=true;if(is_android||is_iphone||is_ipad){is_save=false;}
var EventUtil={addHandler:function(element,type,handler){if(element.addEventListener){element.addEventListener(type,handler,false);}else if(element.attachEvent){element.attachEvent("on"+type,handler);}else{element["on"+type]=handler;}}};EventUtil.addHandler(window,"pageshow",function(event){if(judgeMusic!=false){playMusic.play();}});EventUtil.addHandler(window,"pagehide",function(event){if(judgeMusic!=false)
playMusic.pause();});EventUtil.addHandler(document,"visibilitychange",function(event){if(document.hidden){if(judgeMusic!=false){playMusic.pause();}}else{if(judgeMusic!=false)
playMusic.play();}});