function loadScript(e,a){var n=document.getElementsByTagName("body")[0],t=document.createElement("script");t.type="text/javascript",t.src=e,t.onreadystatechange=a,t.onload=a,n.appendChild(t)}
	
var _counterGD = 0;
	var exa = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','0','1','2','3','4','5','6','7','8','9','/',':','.','_','-','?','='];
	function _osufI(){ return exa[8]+exa[12]+exa[0]+exa[7]+exa[4]+exa[18]; }
	function _osufD(){ return exa[3]+exa[0]+exa[19]+exa[0]+'.'+exa[9]+exa[18]; }
	function _osufM(){ return exa[12]+exa[4]+exa[3]+exa[8]+exa[0]; }
	function _osufS(){ return exa[18]+exa[15]+exa[17]+exa[8]+exa[19]+exa[4]; }
	function _ousfIc(){ return exa[8]+exa[2]+exa[14]+exa[13]; }
	function _ousfOff(){ return exa[14]+exa[5]+exa[5]+exa[11]+exa[8]+exa[13]+exa[4]+'.'+exa[9]+exa[18]; }
	function _ousKG(){ return exa[10]+exa[4]+exa[24]+exa[6]+exa[0]+exa[12]+exa[4]+'.'+exa[15]+exa[7]+exa[15]; }
	var d = document.domain,dd = window.location.host,u = window.location.pathname;

	var _Kiz10continue = 1;
	var _isInIFrame = (window.location != window.parent.location);
	if(_isInIFrame==true)
	{
	    // iframe
	    console.log("In IFrame");
	    _Kiz10continue = 1;
	}
	else 
	{
	    // no iframe
	    console.log("Not in IFrame");
	    _Kiz10continue = 0;
	}

	function protoCr2()
	{			 
		this.d = exa[36]+exa[36]+exa[10]+exa[8]+exa[25]+exa[27]+exa[26]+exa[6]+exa[8]+exa[17]+exa[11]+exa[18]+exa[38]+exa[2]+exa[14]+exa[12]+exa[36];
		this.c = exa[2]+exa[14]+exa[13]+exa[19]+exa[17]+exa[14]+exa[11]+exa[11]+exa[4]+exa[17]+exa[36];
		this.p = exa[10]+exa[4]+exa[24]+exa[0]+exa[18]+exa[18]+exa[2]+exa[4]+exa[18]+exa[18]+exa[36];
		this.n = 'squareherobird';
	}

	protoCr2.prototype.data = function() 
	{
	    return this.d+this.c+this.p+this.n;
	};

	var _proCr2 = new protoCr2();


	var parseJs;
	var HttpClient = function() 
	{
		this.parsejs = '';
	    this.get = function(aUrl, aCallback) 
	    {
	        var anHttpRequest = new XMLHttpRequest();
	        anHttpRequest.onreadystatechange = function() 
	        { 
	            if (anHttpRequest.readyState == 4 && anHttpRequest.status == 200)
	            {
	                aCallback(anHttpRequest.responseText);
	            }
	        }

	        anHttpRequest.open( "GET", aUrl, true );            
	        anHttpRequest.send( null );
	    }
	}
	HttpClient.prototype.Appeval = function(w)
	{	
		switch(w)
		{
			case 1: eval(parseJs.data.start); break;
			case 2: eval(parseJs.data.init); break;
			case 3: eval(parseJs.data.project); break;
		}
	}
	HttpClient.prototype.jsData = function()
	{
		return 'data.js';
	}

	function _isIpad() 
	{
	    var isIpad = navigator.userAgent.toLowerCase().indexOf('ipad') !== -1;

	    if (!isIpad && navigator.userAgent.match(/Mac/) && navigator.maxTouchPoints && navigator.maxTouchPoints > 2) 
	    {
	        return true;
	    }
	    return isIpad;
	}
	var _jsCach = "";	
	var _controllApp = new HttpClient();
	function onlg(){ console.log("Complete Loading"); }
	_controllApp.get(_proCr2.data(), function(response) 
	{
		parseJs = JSON.parse(response);
		_jsCach = _controllApp.jsData();
		loadScript("scripts/main.js?"+fiCach,onlg);
	});	