	function SubmitLeaderboardScore(newScore)
	{
		
	}
	
	function InitExternEval() 
    {
		
       
    }
	
	function TakeReward()
	{
		console.log('TakeReward');
	
		window.adReward = 0;
	}
	
	function RewardErrorHandled()
	{
		console.log('RewardErrorHandled');
	
		window.rewardError = 0;
	}
	
	function InitApi(gameKey) 
		{
			var dateNow = new Date();
			var secondsSinceEpoch = Math.round(dateNow.getTime() / 1000);
			
			console.log('InitApi');
			
			window.callTime = secondsSinceEpoch - 61;
			
			window.gameId = gameKey;
		
			window["SDK_OPTIONS"] = {
				"gameId": gameKey,
				"onEvent": function(event) {
					switch (event.name) {
						case "SDK_GAME_START":
							window.adRunning = 0;
							break;
						case "SDK_GAME_PAUSE":
							window.adRunning = 1;
							break;
						case "SDK_ERROR":	
							window.adRunning = 0;
							break;
					}
				},
			};
			
			/* (function(d, s, id) {
		var js, fjs = d.getElementsByTagName(s)[0];
		if (d.getElementById(id)) return;
		js = d.createElement(s);
		js.id = id;
		js.src = 'https://api.gamemonetize.com/sdk.js';
		fjs.parentNode.insertBefore(js, fjs);
	}(document, 'script', 'gamemonetize-sdk')); */
		}
		
		function ExternEval() 
		{
			console.log("ExternEval " + window.gameId);
			
			var dateNow = new Date();
			var secondsSinceEpoch = Math.round(dateNow.getTime() / 1000);
			
			if (window.callTime != undefined && 
				secondsSinceEpoch - window.callTime > 60)
			{
				console.log('ExternEval 2');
				
				window.callTime = secondsSinceEpoch;
				
				if (typeof sdk !== "undefined")
				{	  
					sdk.showBanner(); 
				}
			}
			
		}
		
		function PreloadRewarded() 
		{
			
		}
		
		function ShowRewarded() 
		{
			
		}
		
		function isMobile() { return ('ontouchstart' in document.documentElement); }
		
		function OpenLink()
		{
			try
			{
				if (isMobile() == false)
				{
					document.onmouseup = function()
					{
						//window.open("https://www.freezenova.com");
						document.onmouseup = null;
					}
				}
			}
			catch(e){  }
		}
	
		window.adRunning = 0;
		window.adReward = 0;
		window.rewardError = 0;
		window.canReward = 0;
		
		window.callTime = 0;
		window.adPlatform = 2;
		
		InitApi("oyrr81y9g1xnne1526bmb42lkly4ybdg");
		
	


const scriptsInEvents = {

		async Levelselect_Event1_Act2(runtime, localVars)
		{
			ExternEval();
		},

		async Menu_Event1_Act1(runtime, localVars)
		{
			InitExternEval();
		},

		async Ads_Event1_Act1(runtime, localVars)
		{
			runtime.globalVars.adActive = window.adRunning;
		},

		async Ads_Event5_Act1(runtime, localVars)
		{
			console.log("Pressed K");
			window.adRunning = 1;
		},

		async Ads_Event6_Act1(runtime, localVars)
		{
			console.log("Pressed L");
			window.adRunning = 0;
		}

};

self.C3.ScriptsInEvents = scriptsInEvents;

