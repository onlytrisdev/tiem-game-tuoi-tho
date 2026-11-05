


const scriptsInEvents = {

		async Eyandex_Event1_Act3(runtime, localVars)
		{
			ysdk.adv.showFullscreenAdv({
			          callbacks: {
			          onClose:runtime.callFunction("AdFinished"),
			          onError:runtime.callFunction("AdError")
			    }
			})
		}

};

self.C3.ScriptsInEvents = scriptsInEvents;

