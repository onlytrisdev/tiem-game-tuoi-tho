var bodyWidth;
	var bodyHeight;
	var ratio;
	var firstDisplay=false,secondDisplay=false,thirdDisplay=false;
	var firstPage=document.getElementById("first_page"); 
	var secondPage=document.getElementById("second_page"); 
	var thirdPage=document.getElementById("third_page"); 
	var itemDisplay=new Array();//记录穿过的饰物
	var itemLeft=new Array();//初始左边界
	var itemTop=new Array();//初始顶
	var itemWidth=new Array();//初始宽度
	var itemHeight=new Array();//初始高度
	var sUserAgent = navigator.userAgent.toLowerCase();  //测试设备类型
	var iPadMini=false;
	var samPadP5100=false;
window.onresize=function()
{
	var firstPage=document.getElementById("first_page"); 
	var secondPage=document.getElementById("second_page"); 
	var thirdPage=document.getElementById("third_page"); 
	var sUserAgent = navigator.userAgent.toLowerCase();  //测试设备类型
	var newbrowerWidth=document.documentElement.clientWidth ;//浏览器显示宽度
	var newbrowerHeight=document.documentElement.clientHeight ;//浏览器显示高度
	if(sUserAgent.indexOf("ipad")>0 && newbrowerHeight=="662")//检测是否mini横屏
		iPadMini=true;
	if(sUserAgent.indexOf("p5100")>0 && newbrowerHeight=="488")
		samPadP5100=true;
	var body=document.getElementsByTagName("body"); 
	if(newbrowerWidth/newbrowerHeight >1.4)//更宽，则两边露白边
	{
		body[0].style.height=newbrowerHeight + "px";
		bodyHeight=newbrowerHeight;
	}
	else
	{
		body[0].style.width=newbrowerWidth+ "px" ;
		bodyWidth=newbrowerWidth;
	}
	if(bodyHeight==newbrowerHeight)
	{
			ratio=newbrowerHeight/500;//获得新的变化比率
			bodyWidth=bodyHeight*1.4;
			body[0].style.width=bodyWidth+"px";
		 }
	if(bodyWidth==newbrowerWidth)
	{
		 ratio=newbrowerWidth/700;
	     bodyHeight=bodyWidth/1.4;
		 body[0].style.height=bodyHeight+"px";
		 }
	if(iPadMini==true)//如果是MINI，则高度要缩小一些,并向下移动,也向右移动一些
		 {
			bodyHeight=bodyWidth/1.4*0.97;
			ratio=ratio*0.97;
			body[0].style="margin-top:30px";
				body[0].style.left=(browerWidth+24-parseInt(body[0].style.width))/2+"px";
		}
	else
	body[0].style.left=(newbrowerWidth-parseInt(body[0].style.width))/2+"px";
	if(samPadP5100==true)//如果是MINI，则高度要缩小一些,并向下移动,也向右移动一些
	 {
		bodyHeight=bodyWidth/1.4*1.006;
		ratio=ratio*1.006;
	 }
	//	alert(newbrowerWidth+"[]"+body[0].style.width+"[]"+body[0].style.left+"[]"+body[0].style.height);

//	alert(ratio+"[]"+newbrowerWidth+"[]"+newbrowerHeight);
	//音乐按钮
	var musicButton=document.getElementById("music");
	var tmp=false;
	var k=0;//记录访问到记录在数组中的位置
	for(;k<itemDisplay.length; k++)
		if(itemDisplay[k]==musicButton)
		{
			tmp=true;
			break;
		}
		musicButton.style.left=itemLeft[k]*ratio+"px";
		musicButton.style.top=itemTop[k]*ratio+"px";
		musicButton.style.width=itemWidth[k]*ratio+"px";
		musicButton.style.height=itemHeight[k]*ratio+"px";

	if(firstPage.hidden==false)
	{
		var firstElement=document.getElementsByClassName("firstpage");
			for(var j=0;j<firstElement.length;j++)
			{
				if(firstElement[j].hidden==true) continue;
				var tmp=false;
				var k=0;//记录访问到记录在数组中的位置
				for(;k<itemDisplay.length; k++)
					if(itemDisplay[k]==firstElement[j])
					{
						tmp=true;
						break;
					}
				if(tmp==false)//第一次缩放，则放入数组中
				{
					itemDisplay.push(firstElement[j]);
					itemLeft.push(parseInt(firstElement[j].offsetLeft));
					itemTop.push(parseInt(firstElement[j].offsetTop));
					itemWidth.push(parseInt(firstElement[j].offsetWidth));
					itemHeight.push(parseInt(firstElement[j].offsetHeight));
					var objLeft=parseInt(firstElement[j].offsetLeft);
					var objTop=parseInt(firstElement[j].offsetTop);
					var objWidth=parseInt(firstElement[j].offsetWidth);
					var objHeight=parseInt(firstElement[j].offsetHeight);
					firstElement[j].style.left=objLeft*ratio+"px";
					firstElement[j].style.top=objTop*ratio+"px";
					firstElement[j].style.width=objWidth*ratio+"px";
					firstElement[j].style.height=objHeight*ratio+"px";
				}
				else//直接从数组中提取原始数据
				{
					firstElement[j].style.left=itemLeft[k]*ratio+"px";
					firstElement[j].style.top=itemTop[k]*ratio+"px";
					firstElement[j].style.width=itemWidth[k]*ratio+"px";
					firstElement[j].style.height=itemHeight[k]*ratio+"px";
				}
			}
	}
	if(secondPage.hidden==false)
	{
		var secondElement=document.getElementsByClassName("secondpage");
		for(var j=0;j<secondElement.length;j++)
		{
			if(secondElement[j].hidden==true) continue;
			var tmp=false;
			var k=0;//记录访问到记录在数组中的位置
			for(;k<itemDisplay.length; k++)
				if(itemDisplay[k]==secondElement[j])
				{
					tmp=true;
					break;
				}
			if(tmp==false)//第一次缩放，则放入数组中
			{
				itemDisplay.push(secondElement[j]);
				itemLeft.push(parseInt(secondElement[j].offsetLeft));
				itemTop.push(parseInt(secondElement[j].offsetTop));
				itemWidth.push(parseInt(secondElement[j].offsetWidth));
				itemHeight.push(parseInt(secondElement[j].offsetHeight));
				var objLeft=parseInt(secondElement[j].offsetLeft);
				var objTop=parseInt(secondElement[j].offsetTop);
				var objWidth=parseInt(secondElement[j].offsetWidth);
				var objHeight=parseInt(secondElement[j].offsetHeight);
				secondElement[j].style.left=objLeft*ratio+"px";
				secondElement[j].style.top=objTop*ratio+"px";
				secondElement[j].style.width=objWidth*ratio+"px";
				secondElement[j].style.height=objHeight*ratio+"px";
			}
			else//直接从数组中提取原始数据
			{
				secondElement[j].style.left=itemLeft[k]*ratio+"px";
				secondElement[j].style.top=itemTop[k]*ratio+"px";
				secondElement[j].style.width=itemWidth[k]*ratio+"px";
				secondElement[j].style.height=itemHeight[k]*ratio+"px";
			}
		}
	
	var secondPutOn=document.getElementsByClassName("puton");
	for(var j=0;j<secondPutOn.length;j++)
		{
			if(secondPutOn[j].hidden==true) continue;
			var tmp=false;
			var k=0;//记录访问到记录在数组中的位置
			for(;k<itemDisplay.length; k++)
				if(itemDisplay[k]==secondPutOn[j])
				{
					tmp=true;
					break;
				}
			if(tmp==false)//第一次缩放，则放入数组中
			{
				itemDisplay.push(secondPutOn[j]);
				itemLeft.push(parseInt(secondPutOn[j].offsetLeft));
				itemTop.push(parseInt(secondPutOn[j].offsetTop));
				itemWidth.push(parseInt(secondPutOn[j].offsetWidth));
				itemHeight.push(parseInt(secondPutOn[j].offsetHeight));
				var objLeft=parseInt(secondPutOn[j].offsetLeft);
				var objTop=parseInt(secondPutOn[j].offsetTop);
				var objWidth=parseInt(secondPutOn[j].offsetWidth);
				var objHeight=parseInt(secondPutOn[j].offsetHeight);
				secondPutOn[j].style.left=objLeft*ratio+"px";
				secondPutOn[j].style.top=objTop*ratio+"px";
				secondPutOn[j].style.width=objWidth*ratio+"px";
				secondPutOn[j].style.height=objHeight*ratio+"px";
			}
			else//直接从数组中提取原始数据
			{
				secondPutOn[j].style.left=itemLeft[k]*ratio+"px";
				secondPutOn[j].style.top=itemTop[k]*ratio+"px";
				secondPutOn[j].style.width=itemWidth[k]*ratio+"px";
				secondPutOn[j].style.height=itemHeight[k]*ratio+"px";
			}
		}
	}

	if(thirdPage.hidden==false)
	{
		var thirdElement=document.getElementsByClassName("thirdpage");
//		alert(thirdElement.length);
		for(var j=0;j<thirdElement.length;j++)
		{
			if(thirdElement[j].hidden==true) continue;
			var tmp=false;
			var k=0;//记录访问到记录在数组中的位置
			for(;k<itemDisplay.length; k++)
				if(itemDisplay[k]==thirdElement[j])
				{
					tmp=true;
					break;
				}
			if(tmp==false)//第一次缩放，则放入数组中
			{
				itemDisplay.push(thirdElement[j]);
				itemLeft.push(parseInt(thirdElement[j].offsetLeft));
				itemTop.push(parseInt(thirdElement[j].offsetTop));
				itemWidth.push(parseInt(thirdElement[j].offsetWidth));
				itemHeight.push(parseInt(thirdElement[j].offsetHeight));
				var objLeft=parseInt(thirdElement[j].offsetLeft);
				var objTop=parseInt(thirdElement[j].offsetTop);
				var objWidth=parseInt(thirdElement[j].offsetWidth);
				var objHeight=parseInt(thirdElement[j].offsetHeight);
				thirdElement[j].style.left=objLeft*ratio+"px";
				thirdElement[j].style.top=objTop*ratio+"px";
				thirdElement[j].style.width=objWidth*ratio+"px";
				thirdElement[j].style.height=objHeight*ratio+"px";
			}
			else//直接从数组中提取原始数据
			{
				thirdElement[j].style.left=itemLeft[k]*ratio+"px";
				thirdElement[j].style.top=itemTop[k]*ratio+"px";
				thirdElement[j].style.width=itemWidth[k]*ratio+"px";
				thirdElement[j].style.height=itemHeight[k]*ratio+"px";
			}
		}
	}

}

var loadComplete=false;
function start()
{

var firstPage=document.getElementById("first_page"); 
	var secondPage=document.getElementById("second_page"); 
	var thirdPage=document.getElementById("third_page"); 
	firstPage.hidden=true;

	var sUserAgent = navigator.userAgent.toLowerCase();  //测试设备类型

	var browerWidth=document.documentElement.clientWidth ;//浏览器显示高度
	var browerHeight=document.documentElement.clientHeight ;//浏览器显示高度

	var beginPage=document.getElementById("begin_page"); 
	var body=document.getElementsByTagName("body"); //设置居中
var playMusic=document.createElement("audio");
//	var playMusic=document.getElementById("playMusic"); //音乐ID
//	playMusic.pause();
//	alert(sUserAgent+"[]"+browerWidth+"[]"+browerHeight+"[]"+browerWidth/browerHeight);
	if(browerWidth/browerHeight >1.4)//更宽，则两边露白边
		body[0].style.height=browerHeight + "px";
	else
		body[0].style.width=browerWidth+ "px" ;

	var bodyWidth=parseInt(body[0].style.width);
	var bodyHeight=parseInt(body[0].style.height);
	if((sUserAgent.indexOf("ipad")>0) && (browerHeight=="662"))//检测是否mini横屏
		iPadMini=true;
	if((sUserAgent.indexOf("p5100")>0) && ( browerHeight=="488"))//检测是否是三星平板横屏
		samPadP5100=true;
	if(bodyHeight==browerHeight)
	{
		 ratio=bodyHeight/500;
		 bodyWidth=bodyHeight*1.4;
		 body[0].style.width=bodyWidth+"px";
	 }
	if(bodyWidth==browerWidth)
	{
		ratio=bodyWidth/700;
	    bodyHeight=bodyWidth/1.4;
		body[0].style.height=bodyHeight+"px";
	 }
	 if(iPadMini==true)//如果是MINI，则高度要缩小一些,并向下移动,也向右移动一些
		 {
			bodyHeight=bodyWidth/1.4*0.97;
			ratio=ratio*0.97;
			body[0].style="margin-top:30px";
				body[0].style.left=(browerWidth+24-parseInt(body[0].style.width))/2+"px";
		}
	else
 		body[0].style.left=(browerWidth-parseInt(body[0].style.width))/2+"px";
	if(samPadP5100==true)//如果是三星平板，则高度要增加一些
	 {
		bodyHeight=bodyWidth/1.4*1.006;
		ratio=ratio*1.006;
	 }
		
//	alert(ratio+"[]"+browerWidth+"[]"+browerHeight);
	var beginGirl=document.getElementById("begin_girl"); 
	var beginGround=document.getElementById("begin_background"); 
	var beginLogo=document.getElementById("begin_logo"); 
	var firstLogo=document.getElementById("first_logo"); 
	var secondLogo=document.getElementById("second_logo"); 
	var thirdLogo=document.getElementById("third_logo"); 
	var musicButton=document.getElementById("music"); 
	var progressBar=document.getElementById("progress_bar");
	var progress=document.getElementById("progress");
	var progressNum=document.getElementById("progNum");
	beginPage.hidden=false;
	beginGround.hidden=false;
	var beginElement=document.getElementsByClassName("beginpage");

	for(var j=0;j<beginElement.length;j++)
	{
		var objLeft=parseInt(beginElement[j].offsetLeft);
		var objTop=parseInt(beginElement[j].offsetTop);
		var objWidth=parseInt(beginElement[j].offsetWidth);
		var objHeight=parseInt(beginElement[j].offsetHeight);
	
		beginElement[j].style.left=objLeft*ratio+"px";
		beginElement[j].style.top=objTop*ratio+"px";
		beginElement[j].style.width=objWidth*ratio+"px";
		beginElement[j].style.height=objHeight*ratio+"px";

	}
	progressBar.style.left=bodyWidth/5+"px";
	progressBar.style.top=bodyHeight/2-bodyHeight/20+"px";
	progressBar.style.width=bodyWidth*0.6+"px";
	progressBar.style.height=bodyHeight*0.06+"px";
	progressBar.style.border=bodyWidth/200+"px solid white";
	progressBar.style="position:absolute;border:2px solid white;background: blue;overflow:hidden;-webkit-box-shadow:0px 0px 15px white;-webkit-border-radius:30px";

	progress.style.left=10+"px";
	progress.style.top=0+"px";
	progress.style.width=bodyWidth*0.8+"px";
	progress.style.Height=bodyHeight*0.2+"px";

	progressNum.style.left=bodyWidth/4-10+"px";
	progressNum.style.top=bodyHeight/2-bodyHeight/22+"px";
	progressNum.style.width=bodyWidth*0.6-bodyWidth/200*5+"px";
	progressNum.style.Height=bodyHeight*0.8-bodyHeight/200*5+"px";
	progressNum.style.fontSize=parseInt(progressNum.style.Height)/14+"px";
	var setPro=setInterval(progBar,50);
	var b=0,i=0; 
	function progBar()
	{  

		if(b==0)
		{
			i=5;
			b=1;
		}
		i+=5;
		if(i>=180)
		{
			clearInterval(setPro);
		
			beginPage.hidden=true;
			musicButton.style.display="block";
			firstPage.hidden=false;
			var firstElement=document.getElementsByClassName("firstpage");
			for(var j=0;j<firstElement.length;j++)
			{
				var tmp=false;
				var k=0;//记录访问到记录在数组中的位置
				for(;k<itemDisplay.length; k++)
					if(itemDisplay[k]==firstElement[j])
					{
						tmp=true;
						break;
					}
				if(tmp==false)//第一次缩放，则放入数组中
				{
					itemDisplay.push(firstElement[j]);
					itemLeft.push(parseInt(firstElement[j].offsetLeft));
					itemTop.push(parseInt(firstElement[j].offsetTop));
					itemWidth.push(parseInt(firstElement[j].offsetWidth));
					itemHeight.push(parseInt(firstElement[j].offsetHeight));
					var objLeft=parseInt(firstElement[j].offsetLeft);
					var objTop=parseInt(firstElement[j].offsetTop);
					var objWidth=parseInt(firstElement[j].offsetWidth);
					var objHeight=parseInt(firstElement[j].offsetHeight);
					firstElement[j].style.left=objLeft*ratio+"px";
					firstElement[j].style.top=objTop*ratio+"px";
					firstElement[j].style.width=objWidth*ratio+"px";
					firstElement[j].style.height=objHeight*ratio+"px";
				}
				else//直接从数组中提取原始数据
				{
					firstElement[j].style.left=itemLeft[k]*ratio+"px";
					firstElement[j].style.top=itemTop[k]*ratio+"px";
					firstElement[j].style.width=itemWidth[k]*ratio+"px";
					firstElement[j].style.height=itemHeight[k]*ratio+"px";
				}
			}
			//把音乐按钮加入显示列表
				var tmp=false;
				var k=0;//记录访问到记录在数组中的位置
				for(;k<itemDisplay.length; k++)
					if(itemDisplay[k]==musicButton)
					{
						tmp=true;
						break;
					}
				if(tmp==false)//第一次缩放，则放入数组中
				{
					itemDisplay.push(musicButton);
					itemLeft.push(parseInt(musicButton.offsetLeft));
					itemTop.push(parseInt(musicButton.offsetTop));
					itemWidth.push(parseInt(musicButton.offsetWidth));
					itemHeight.push(parseInt(musicButton.offsetHeight));
					var objLeft=parseInt(musicButton.offsetLeft);
					var objTop=parseInt(musicButton.offsetTop);
					var objWidth=parseInt(musicButton.offsetWidth);
					var objHeight=parseInt(musicButton.offsetHeight);
					musicButton.style.left=objLeft*ratio+"px";
					musicButton.style.top=objTop*ratio+"px";
					musicButton.style.width=objWidth*ratio+"px";
					musicButton.style.height=objHeight*ratio+"px";
				}
				else//直接从数组中提取原始数据
				{
					musicButton.style.left=itemLeft[k]*ratio+"px";
					musicButton.style.top=itemTop[k]*ratio+"px";
					musicButton.style.width=itemWidth[k]*ratio+"px";
					musicButton.style.height=itemHeight[k]*ratio+"px";
				}
				
				

		playMusic.src = "audio/backgroundMusic.mp3";
		playMusic.loop=true;
		playMusic.autoplay=true;
		playMusic.play();

		}
		if(i<=100)
		{
			beginLogo.hidden=false;				  
			progressBar.hidden=false;
			progress.hidden=false;
			progress.style.left=i*bodyWidth/101-bodyWidth+"px";
			progressNum.innerHTML=i+"%";
			
		}


	}
	

	document.ontouchmove = function(e){ e.preventDefault(); }
	var hairButton=document.getElementById("hair_button"); 
	var dressButton=document.getElementById("dress_button"); 
	var neckButton=document.getElementById("neck_button"); 
	var shoeButton=document.getElementById("shoe_button"); 
	var playButton=document.getElementById("play_button"); 
	var replayButton=document.getElementById("replay_button");
	var moreButton=document.getElementsByClassName("more"); 
	var showButton=document.getElementById("show_button"); 
	var resetButton=document.getElementById("reset_button"); 

	var printButton=document.getElementById("print_button"); 
	var saveButton=document.getElementById("save_button"); 

	var secondPage=document.getElementById("second_page"); 
	var thirdPage=document.getElementById("third_page"); 
	var backPic=document.getElementById("main"); 
	var hairPage=document.getElementById("hair_page"); 
	var dressPage=document.getElementById("dress_page"); 
	var neckPage=document.getElementById("neck_page"); 
	var shoePage=document.getElementById("shoe_page"); 

	var playM=0; 
	var play=0; 

	secondPage.hidden=true; 
	thirdPage.hidden=true;

	if(sUserAgent.indexOf("ipad")>=0 || sUserAgent.indexOf("iphone")>=0 || (sUserAgent.indexOf("i9508")>=0 && sUserAgent.indexOf("chrome")>=0))
	{
		musicButton.src="images/first_nomusic.png"; 
			playM=1; 
			playMusic.load();
			playMusic.play(); 
		}
	
	musicButton.onclick=function()
	{
		if(playM==0)
		{
			musicButton.src="images/first_nomusic.png"; 
			playM=1; 
			playMusic.pause(); 
		}
		else
		{
			musicButton.src="images/first_music.png"; 
			playM=0; 
			playMusic.volume=1;
			playMusic.play(); 
		}
	}
playButton.onmouseover=function(){	playButton.src="images/first_play_yellow.png"; 	}
playButton.onmouseout=function(){	playButton.src="images/first_play_orange.png"; 	}
printButton.onmouseover=function(){	printButton.src="images/print_button_orange.png"; 	}
printButton.onmouseout=function(){	printButton.src="images/print_button_purple.png"; 	}

replayButton.onmouseover=function(){	replayButton.src="images/replay_button_yellow.png"; 	}
replayButton.onmouseout=function(){	replayButton.src="images/replay_button_orange.png"; 	}
showButton.onmouseover=function(){	showButton.src="images/show_button_yellow.png"; 	}
showButton.onmouseout=function(){	showButton.src="images/show_button_orange.png"; 	}
resetButton.onmouseover=function(){	resetButton.src="images/reset_button_yellow.png"; 	}
resetButton.onmouseout=function(){	resetButton.src="images/reset_button_orange.png"; 	}

moreButton[0].onmouseover=function(){	moreButton[0].src="images/more_games_yellow.png"; }
moreButton[0].onmouseout=function(){	moreButton[0].src="images/more_games_orange.png"; 	}
moreButton[1].onmouseover=function(){	moreButton[1].src="images/more_games_yellow.png"; }
moreButton[1].onmouseout=function(){	moreButton[1].src="images/more_games_orange.png"; 	}
moreButton[2].onmouseover=function(){	moreButton[2].src="images/more_games_yellow.png"; }
moreButton[2].onmouseout=function(){	moreButton[2].src="images/more_games_orange.png"; 	}
moreButton[0].onclick=function(){window.open("http://localhost/");	}
moreButton[1].onclick=function(){window.open("http://localhost/");	}
moreButton[2].onclick=function(){window.open("http://localhost/");	}
firstLogo.onclick=function(){window.open("http://localhost/");	}
secondLogo.onclick=function(){window.open("http://localhost/");	}
thirdLogo.onclick=function(){window.open("http://localhost/");	}
//firstLogo.ontouchstart=function(){window.open("http://www.girlsgogames.com/");	}
//secondLogo.ontouchstart=function(){window.open("http://www.girlsgogames.com/");	}
//thirdLogo.ontouchstart=function(){window.open("http://www.girlsgogames.com/");	}
//firstLink1.onclick=function(){window.open("http://publishers.spilgames.com/");	}
resetButton.onclick=function()
{
	var allImg=document. getElementsByClassName('puton')
	for(var i=0; i<allImg.length; i++)
	{
		var str=allImg[i]; 
		var puton_part=str; 
		eval(str).hidden=true; 
		allImg[i].style.display="none";
	}
}


showButton.onclick=function()
{
	secondPage.hidden=true;
	secondPage.style.display="none";
	$("#third_page").fadeIn(1000);
	var allImg=document. getElementsByClassName('puton');
	var showImg=document. getElementsByClassName('putshow');
	var newbrowerWidth=document.documentElement.clientWidth ;//浏览器显示高度
	var newbrowerHeight=document.documentElement.clientHeight ;//浏览器显示高度
	var body=document.getElementsByTagName("body"); 
	if(newbrowerWidth/newbrowerHeight >1.4)//更宽，则两边露白边
	{
		body[0].style.height=newbrowerHeight + "px";
		bodyHeight=newbrowerHeight;
	}
	else
	{
		body[0].style.width=newbrowerWidth+ "px" ;
		bodyWidth=newbrowerWidth;
	}
	if(bodyHeight==newbrowerHeight)
	{
		 ratio=newbrowerHeight/500;//获得新的变化比率
		 	
		 bodyWidth=bodyHeight*1.4;
		 body[0].style.width=bodyWidth+"px";
		 }
	if(bodyWidth==newbrowerWidth)
	{
		 ratio=newbrowerWidth/700;
		 bodyHeight=bodyWidth/1.4;
		 body[0].style.height=bodyHeight+"px";
	}
	if(iPadMini==true)//如果是MINI，则高度要缩小一些,并向下移动,也向右移动一些
		 {
			bodyHeight=bodyWidth/1.4*0.97;
			ratio=ratio*0.97;
			body[0].style="margin-top:30px";
				body[0].style.left=(browerWidth+24-parseInt(body[0].style.width))/2+"px";
		}
	else
 	body[0].style.left=(newbrowerWidth-parseInt(body[0].style.width))/2+"px";
		if(samPadP5100==true)//如果是三星平板，则高度要增加一些
	 {
		bodyHeight=bodyWidth/1.4*1.006;
		ratio=ratio*1.006;
	 }
		
	for(var i=0; i<allImg.length; i++)
	{
		showImg[i].hidden=true;
		
		if(allImg[i].hidden==false)
		{
			showImg[i].hidden=false;
			allImg[i].hidden=true;
			allImg[i].style.display="none";
			showImg[i].style.display = "none";
			var obj=eval(showImg[i].id);
			$(obj).fadeIn(450);
		var tmp=false;
				var k=0;//记录访问到记录在数组中的位置
				for(;k<itemDisplay.length; k++)
					if(itemDisplay[k]==showImg[i])
					{
						tmp=true;
						break;
					}
				if(tmp==false)//第一次缩放，则放入数组中
				{
					itemDisplay.push(showImg[i]);
					itemLeft.push(parseInt(showImg[i].offsetLeft));
					itemTop.push(parseInt(showImg[i].offsetTop));
					itemWidth.push(parseInt(showImg[i].offsetWidth));
					itemHeight.push(parseInt(showImg[i].offsetHeight));
					var objLeft=parseInt(showImg[i].offsetLeft);
					var objTop=parseInt(showImg[i].offsetTop);
					var objWidth=parseInt(showImg[i].offsetWidth);
					var objHeight=parseInt(showImg[i].offsetHeight);
					showImg[i].style.left=objLeft*ratio+"px";
					showImg[i].style.top=objTop*ratio+"px";
					showImg[i].style.width=objWidth*ratio+"px";
					showImg[i].style.height=objHeight*ratio+"px";
				}
				else//直接从数组中提取原始数据
				{
					showImg[i].style.left=itemLeft[k]*ratio+"px";
					showImg[i].style.top=itemTop[k]*ratio+"px";
					showImg[i].style.width=itemWidth[k]*ratio+"px";
					showImg[i].style.height=itemHeight[k]*ratio+"px";
				}

		}
	}
	thirdPage.hidden=false;
			var thirdElement=document.getElementsByClassName("thirdpage");
			for(var j=0;j<thirdElement.length && thirdElement[j].hidden==false;j++)
			{
				var tmp=false;
				var k=0;//记录访问到记录在数组中的位置
				for(;k<itemDisplay.length; k++)
					if(itemDisplay[k]==thirdElement[j])
					{
						tmp=true;
						break;
					}
				if(tmp==false)//第一次缩放，则放入数组中
				{
					itemDisplay.push(thirdElement[j]);
					itemLeft.push(parseInt(thirdElement[j].offsetLeft));
					itemTop.push(parseInt(thirdElement[j].offsetTop));
					itemWidth.push(parseInt(thirdElement[j].offsetWidth));
					itemHeight.push(parseInt(thirdElement[j].offsetHeight));
					var objLeft=parseInt(thirdElement[j].offsetLeft);
					var objTop=parseInt(thirdElement[j].offsetTop);
					var objWidth=parseInt(thirdElement[j].offsetWidth);
					var objHeight=parseInt(thirdElement[j].offsetHeight);
					thirdElement[j].style.left=objLeft*ratio+"px";
					thirdElement[j].style.top=objTop*ratio+"px";
					thirdElement[j].style.width=objWidth*ratio+"px";
					thirdElement[j].style.height=objHeight*ratio+"px";
				}
				else//直接从数组中提取原始数据
				{
					thirdElement[j].style.left=itemLeft[k]*ratio+"px";
					thirdElement[j].style.top=itemTop[k]*ratio+"px";
					thirdElement[j].style.width=itemWidth[k]*ratio+"px";
					thirdElement[j].style.height=itemHeight[k]*ratio+"px";
				}

			}
}
replayButton.onclick=function()
{
	$("#third_page").fadeOut(0);
	thirdPage.hidden=true;
	thirdPage.style.display="none";
	secondPage.style.display="none";
	firstPage.hidden=false;
	var newbrowerWidth=document.documentElement.clientWidth ;//浏览器显示高度
	var newbrowerHeight=document.documentElement.clientHeight ;//浏览器显示高度
	var body=document.getElementsByTagName("body"); 
	if(newbrowerWidth/newbrowerHeight >1.4)//更宽，则两边露白边
	{
		body[0].style.height=newbrowerHeight + "px";
		bodyHeight=newbrowerHeight;
	}
	else
	{
		body[0].style.width=newbrowerWidth+ "px" ;
		bodyWidth=newbrowerWidth;
	}
	

	if(bodyHeight==newbrowerHeight)
	{
		 ratio=newbrowerHeight/500;//获得新的变化比率
	
		 bodyWidth=bodyHeight*1.4;
		 body[0].style.width=bodyWidth+"px";
		 }
	if(bodyWidth==newbrowerWidth)
	{
		 ratio=newbrowerWidth/700;
		 
		 bodyHeight=bodyWidth/1.4;
		 body[0].style.height=bodyHeight+"px";
		 }
	if(iPadMini==true)//如果是MINI，则高度要缩小一些,并向下移动,也向右移动一些
		 {
			bodyHeight=bodyWidth/1.4*0.97;
			ratio=ratio*0.97;
			body[0].style="margin-top:30px";
				body[0].style.left=(browerWidth+24-parseInt(body[0].style.width))/2+"px";
		}
	else
 		body[0].style.left=(newbrowerWidth-parseInt(body[0].style.width))/2+"px";
	if(samPadP5100==true)//如果是三星平板，则高度要增加一些
	 {
		bodyHeight=bodyWidth/1.4*1.006;
		ratio=ratio*1.006;
	 }
	if(firstPage.hidden==false)
	{
		var firstElement=document.getElementsByClassName("firstpage");
			for(var j=0;j<firstElement.length;j++)
			{
				if(firstElement[j].hidden==true) continue;
				var tmp=false;
				var k=0;//记录访问到记录在数组中的位置
				for(;k<itemDisplay.length; k++)
					if(itemDisplay[k]==firstElement[j])
					{
						tmp=true;
						break;
					}
				if(tmp==false)//第一次缩放，则放入数组中
				{
					itemDisplay.push(firstElement[j]);
					itemLeft.push(parseInt(firstElement[j].offsetLeft));
					itemTop.push(parseInt(firstElement[j].offsetTop));
					itemWidth.push(parseInt(firstElement[j].offsetWidth));
					itemHeight.push(parseInt(firstElement[j].offsetHeight));
					var objLeft=parseInt(firstElement[j].offsetLeft);
					var objTop=parseInt(firstElement[j].offsetTop);
					var objWidth=parseInt(firstElement[j].offsetWidth);
					var objHeight=parseInt(firstElement[j].offsetHeight);
					firstElement[j].style.left=objLeft*ratio+"px";
					firstElement[j].style.top=objTop*ratio+"px";
					firstElement[j].style.width=objWidth*ratio+"px";
					firstElement[j].style.height=objHeight*ratio+"px";
				}
				else//直接从数组中提取原始数据
				{
					firstElement[j].style.left=itemLeft[k]*ratio+"px";
					firstElement[j].style.top=itemTop[k]*ratio+"px";
					firstElement[j].style.width=itemWidth[k]*ratio+"px";
					firstElement[j].style.height=itemHeight[k]*ratio+"px";
				}
			}
	}

	var allImg=document. getElementsByClassName('puton')
	for(var i=0; i<allImg.length; i++)
	{
		if(allImg[i].hidden==false)
			if(bodyHeight<500)
				allImg[i].style.left=allImg[i].offsetLeft+167+"px";
			else
				allImg[i].style.left=allImg[i].offsetLeft+210+"px";
		
	}
	for(var i=0; i<allImg.length; i++)
	{
		allImg[i].hidden=true;
		allImg[i].style.display="none";
		}

}
hairButton.onclick=function(){
	hairButton.src="images/hair_yellow.png"; 
	dressButton.src="images/dress_orange.png"; 
    neckButton.src="images/neck_orange.png"; 
	shoeButton.src="images/shoe_orange.png"; 
	hairPage.hidden=false; 
	dressPage.hidden=true; 
	neckPage.hidden=true; 
	shoePage.hidden=true; 
	}
dressButton.onclick=function(){
	dressButton.src="images/dress_yellow.png"; 
	hairButton.src="images/hair_orange.png"; 
    neckButton.src="images/neck_orange.png"; 
	shoeButton.src="images/shoe_orange.png"; 
	var dressPage1=document.getElementById("dress_page_1"); 
	var dressPage2=document.getElementById("dress_page_2"); 
	var dressPage3=document.getElementById("dress_page_3"); 
	var dressLeft=document.getElementById("dress_left"); 
	var dressRight=document.getElementById("dress_right"); 
	var i=1; 
	dressLeft.onclick=function(){
		i--; 
		if(i==0)
		i=3; 
		switch(i)
		{
			case 1:
				dressPage1.hidden=false; 
				dressPage2.hidden=true; 
				dressPage3.hidden=true; 
				break; 
			case 2:
				dressPage1.hidden=true; 
				dressPage2.hidden=false; 
				dressPage3.hidden=true; 
				break; 
			case 3:
				dressPage1.hidden=true; 
				dressPage2.hidden=true; 
				dressPage3.hidden=false; 
				break; 
			}
		}
	dressRight.onclick=function(){
		i++; 
		if(i==4)
		i=1; 
		switch(i)
		{
			case 1:
				dressPage1.hidden=false; 
				dressPage2.hidden=true; 
				dressPage3.hidden=true; 
				break; 
			case 2:
				dressPage1.hidden=true; 
				dressPage2.hidden=false; 
				dressPage3.hidden=true; 
				break; 
			case 3:
				dressPage1.hidden=true; 
				dressPage2.hidden=true; 
				dressPage3.hidden=false; 
				break; 
			}
		}
	dressPage1.hidden=false; 
	dressPage2.hidden=true; 
	dressPage3.hidden=true; 
	hairPage.hidden=true; 
	dressPage.hidden=false; 
	neckPage.hidden=true; 
	shoePage.hidden=true; 
	}
neckButton.onclick=function(){
	hairButton.src="images/hair_orange.png"; 
	dressButton.src="images/dress_orange.png"; 
    neckButton.src="images/neck_yellow.png"; 
	shoeButton.src="images/shoe_orange.png"; 
	hairPage.hidden=true; 
	dressPage.hidden=true; 
	neckPage.hidden=false; 
	shoePage.hidden=true; 
	}
shoeButton.onclick=function(){
	hairButton.src="images/hair_orange.png"; 
	dressButton.src="images/dress_orange.png"; 
    neckButton.src="images/neck_orange.png"; 
	shoeButton.src="images/shoe_yellow.png"; 
	hairPage.hidden=true; 
	dressPage.hidden=true; 
	neckPage.hidden=true; 
	shoePage.hidden=false; 
	}
playButton.onclick=function()
{
		firstPage.hidden=true; 
		secondPage.hidden=false;
				secondPage.style.display="block";
		var secondElement=document.getElementsByClassName("secondpage");

	for(var j=0;j<secondElement.length;j++)
			{
				var tmp=false;
				var k=0;//记录访问到记录在数组中的位置
				for(;k<itemDisplay.length; k++)
					if(itemDisplay[k]==secondElement[j])
					{
						tmp=true;
						break;
					}
				if(tmp==false)//第一次缩放，则放入数组中
				{
					itemDisplay.push(secondElement[j]);
					itemLeft.push(parseInt(secondElement[j].offsetLeft));
					itemTop.push(parseInt(secondElement[j].offsetTop));
					itemWidth.push(parseInt(secondElement[j].offsetWidth));
					itemHeight.push(parseInt(secondElement[j].offsetHeight));
					var objLeft=parseInt(secondElement[j].offsetLeft);
					var objTop=parseInt(secondElement[j].offsetTop);
					var objWidth=parseInt(secondElement[j].offsetWidth);
					var objHeight=parseInt(secondElement[j].offsetHeight);
					secondElement[j].style.left=objLeft*ratio+"px";
					secondElement[j].style.top=objTop*ratio+"px";
					secondElement[j].style.width=objWidth*ratio+"px";
					secondElement[j].style.height=objHeight*ratio+"px";
				}
				else//直接从数组中提取原始数据
				{
					secondElement[j].style.left=itemLeft[k]*ratio+"px";
					secondElement[j].style.top=itemTop[k]*ratio+"px";
					secondElement[j].style.width=itemWidth[k]*ratio+"px";
					secondElement[j].style.height=itemHeight[k]*ratio+"px";
				}

		}
		play=1; 
		hairButton.src="images/hair_yellow.png"; 
		dressButton.src="images/dress_orange.png"; 
		neckButton.src="images/neck_orange.png"; 
		shoeButton.src="images/shoe_orange.png"; 
		hairPage.hidden=false; 
		dressPage.hidden=true; 
		neckPage.hidden=true; 
		shoePage.hidden=true; 

}

	 //隐藏所有穿在身上的饰物
	var allImg=document. getElementsByClassName('puton')
	for(var i=0; i<allImg.length; i++)
	{
		var str=allImg[i]; 
		var puton_part=str; 
		eval(str).hidden=true; 
	}

 //隐藏闪烁的星星
	var SStar=document. getElementsByClassName('sstar')
	for(var i=0; i<SStar.length; i++)
	{
		var str=SStar[i]; 
		var puton_part=str; 
		eval(str).hidden=true; 
	}

		//点击展示框，穿上相应装备
	var part,mum; 
	var allImg=document.getElementsByClassName('scale')

	var str; 
	for(var i=0; i<allImg.length; i++)
	{	
		allImg[i].addEventListener("click", show_on); 
	}
function show_on()
	{

		str=this; 
		var part,num; 
		if(str.id.indexOf("dress")>=0)
		{
		   part=str.id.substring(0,str.id.length-2); //部件名
		   num=str.id.substring(str.id.length-2); //部件号
		}
		else
		{
		   part=str.id.substring(0,str.id.length-1); //部件名
		   num=str.id.substring(str.id.length-1); //部件号
		}
//	alert(this.id);	

		if(part.indexOf("dress")>=0)
		{
			var temp; 
			var temp1; 
			var obj;
			for(var i=1; i<=9; i++)
			{	
				temp="0"+i; 
				temp1=part+temp; 
				obj=eval(temp1+"_on");
				eval(temp1+"_on").hidden=true; 
				eval(temp1+"_on").style.display="none";
			//	alert(temp+"[]"+num);
				if(temp==num)
				{
					eval(temp1+"_on").hidden=false; 
					eval(temp1+"_on").style.display="block"; 
				
					var tmp=false;
					var k=0;//记录访问到记录在数组中的位置
					for(;k<itemDisplay.length; k++)
						if(itemDisplay[k]==obj)
						{
							tmp=true;
							break;
						}
					if(tmp==false)//第一次缩放，则放入数组中
					{
						itemDisplay.push(obj);
						itemLeft.push(parseInt(obj.offsetLeft));
						itemTop.push(parseInt(obj.offsetTop));
						itemWidth.push(parseInt(obj.offsetWidth));
						itemHeight.push(parseInt(obj.offsetHeight));
						var objLeft=parseInt(obj.offsetLeft);
						var objTop=parseInt(obj.offsetTop);
						var objWidth=parseInt(obj.offsetWidth);
						var objHeight=parseInt(obj.offsetHeight);
						obj.style.left=objLeft*ratio+"px";
						obj.style.top=objTop*ratio+"px";
						obj.style.width=objWidth*ratio+"px";
						obj.style.height=objHeight*ratio+"px";
					}
					else//直接从数组中提取原始数据
					{
						obj.style.left=itemLeft[k]*ratio+"px";
						obj.style.top=itemTop[k]*ratio+"px";
						obj.style.width=itemWidth[k]*ratio+"px";
						obj.style.height=itemHeight[k]*ratio+"px";
					}
				}
			/*
					var objLeft=parseInt(eval(temp1+"_on").offsetLeft);
					var objTop=parseInt(eval(temp1+"_on").offsetTop);
					var objWidth=parseInt(eval(temp1+"_on").offsetWidth);
					var objHeight=parseInt(eval(temp1+"_on").offsetHeight);
					var tmp=false;//是否已经缩放
					for(var k=0;k<itemDisplay.length;k++)
					{
						if(itemDisplay[k]==temp1+"_on")
						tmp=true;
						}
					if(tmp==false)
					{
					eval(temp1+"_on").style.left=objLeft*ratio+"px";
					eval(temp1+"_on").style.top=objTop*ratio+"px";
					eval(temp1+"_on").style.width=objWidth*ratio+"px";
					eval(temp1+"_on").style.height=objHeight*ratio+"px";
					itemDisplay.push(temp1+"_on");
					}
*/
				

			}
			for(var i=10; i<=14; i++)
			{
				temp=i; 
				temp1=part+temp; obj=eval(temp1+"_on");
				eval(temp1+"_on").hidden=true; 
				eval(temp1+"_on").style.display="none";
				if(i==num)
				{
					eval(temp1+"_on").hidden=false; 
					eval(temp1+"_on").style.display="block"; 
					/*
 					var objLeft=parseInt(eval(temp1+"_on").offsetLeft);
					var objTop=parseInt(eval(temp1+"_on").offsetTop);
					var objWidth=parseInt(eval(temp1+"_on").offsetWidth);
					var objHeight=parseInt(eval(temp1+"_on").offsetHeight);
					var tmp=false;//是否已经缩放
					for(var k=0;k<itemDisplay.length;k++)
					{
						if(itemDisplay[k]==temp1+"_on")
						tmp=true;
						}
					if(tmp==false)
					{
					eval(temp1+"_on").style.left=objLeft*ratio+"px";
					eval(temp1+"_on").style.top=objTop*ratio+"px";
					eval(temp1+"_on").style.width=objWidth*ratio+"px";
					eval(temp1+"_on").style.height=objHeight*ratio+"px";
					itemDisplay.push(temp1+"_on");
					}
					*/
					
					var tmp=false;
					var k=0;//记录访问到记录在数组中的位置
					for(;k<itemDisplay.length; k++)
						if(itemDisplay[k]==obj)
						{
							tmp=true;
							break;
						}
					if(tmp==false)//第一次缩放，则放入数组中
					{
						itemDisplay.push(obj);
						itemLeft.push(parseInt(obj.offsetLeft));
						itemTop.push(parseInt(obj.offsetTop));
						itemWidth.push(parseInt(obj.offsetWidth));
						itemHeight.push(parseInt(obj.offsetHeight));
						var objLeft=parseInt(obj.offsetLeft);
						var objTop=parseInt(obj.offsetTop);
						var objWidth=parseInt(obj.offsetWidth);
						var objHeight=parseInt(obj.offsetHeight);
						obj.style.left=objLeft*ratio+"px";
						obj.style.top=objTop*ratio+"px";
						obj.style.width=objWidth*ratio+"px";
						obj.style.height=objHeight*ratio+"px";
					}
					else//直接从数组中提取原始数据
					{
						obj.style.left=itemLeft[k]*ratio+"px";
						obj.style.top=itemTop[k]*ratio+"px";
						obj.style.width=itemWidth[k]*ratio+"px";
						obj.style.height=itemHeight[k]*ratio+"px";
					}
				}

			}
			}
		else
		{
			for(var i=1; i<=6; i++)
			{
				temp=i; 
				temp1=part+temp; obj=eval(temp1+"_on");
				eval(temp1+"_on").hidden=true; 
				eval(temp1+"_on").style.display="none";
				if(i==num)
				{
					eval(temp1+"_on").hidden=false; 
					eval(temp1+"_on").style.display="block"; 
					/*
	var objLeft=parseInt(eval(temp1+"_on").offsetLeft);
					var objTop=parseInt(eval(temp1+"_on").offsetTop);
					var objWidth=parseInt(eval(temp1+"_on").offsetWidth);
					var objHeight=parseInt(eval(temp1+"_on").offsetHeight);

					var tmp=false;//是否已经缩放
					for(var k=0;k<itemDisplay.length;k++)
					{
						if(itemDisplay[k]==temp1+"_on")
						tmp=true;
						}
					if(tmp==false)
					{
					eval(temp1+"_on").style.left=objLeft*ratio+"px";
					eval(temp1+"_on").style.top=objTop*ratio+"px";
					eval(temp1+"_on").style.width=objWidth*ratio+"px";
					eval(temp1+"_on").style.height=objHeight*ratio+"px";
					itemDisplay.push(temp1+"_on");
					}
					*/
					
					var tmp=false;
					var k=0;//记录访问到记录在数组中的位置
					for(;k<itemDisplay.length; k++)
						if(itemDisplay[k]==obj)
						{
							tmp=true;
							break;
						}
					if(tmp==false)//第一次缩放，则放入数组中
					{
						itemDisplay.push(obj);
						itemLeft.push(parseInt(obj.offsetLeft));
						itemTop.push(parseInt(obj.offsetTop));
						itemWidth.push(parseInt(obj.offsetWidth));
						itemHeight.push(parseInt(obj.offsetHeight));
						var objLeft=parseInt(obj.offsetLeft);
						var objTop=parseInt(obj.offsetTop);
						var objWidth=parseInt(obj.offsetWidth);
						var objHeight=parseInt(obj.offsetHeight);
						obj.style.left=objLeft*ratio+"px";
						obj.style.top=objTop*ratio+"px";
						obj.style.width=objWidth*ratio+"px";
						obj.style.height=objHeight*ratio+"px";
					}
					else//直接从数组中提取原始数据
					{
						obj.style.left=itemLeft[k]*ratio+"px";
						obj.style.top=itemTop[k]*ratio+"px";
						obj.style.width=itemWidth[k]*ratio+"px";
						obj.style.height=itemHeight[k]*ratio+"px";
					}
				}

			}
		}
		
}


function print()
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
}

	