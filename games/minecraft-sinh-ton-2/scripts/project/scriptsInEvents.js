


const scriptsInEvents = {

		async Noobik_Event96_Act1(runtime, localVars)
		{
			runtime.globalVars["isPausedGameY8"] = 1
			ID.ads.display(function() {
			    console.log("resume Game")
			    runtime.globalVars["isPausedGameY8"] = 0
			})
		}

};

self.C3.ScriptsInEvents = scriptsInEvents;

