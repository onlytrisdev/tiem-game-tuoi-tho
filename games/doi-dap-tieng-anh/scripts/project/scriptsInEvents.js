


const scriptsInEvents = {

	async Gamesheet_Event412_Act1(runtime, localVars)
	{
		var _value = "{\"Match\":{\"Topic\":[\"\",\"\",\"\"],\"Questions\":[[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]],\"Player\":[[0,[0,0,0,0,0],[0,0,0,0,0]],[0,[0,0,0,0,0],[0,0,0,0,0]],[0,[0,0,0,0,0],[0,0,0,0,0]]],\"Opponent\":[[0,[0,0,0,0,0],[0,0,0,0,0]],[0,[0,0,0,0,0],[0,0,0,0,0]],[0,[0,0,0,0,0],[0,0,0,0,0]]],\"RoundIndex\":1,\"OpponentIndex\":0}}"
		
		localVars.vValue = _value
	},

	async Homesheet_Event105_Act8(runtime, localVars)
	{
		var input2 = document.getElementById("mine2");
		input2.value = localVars.vUserName;
		runtime.globalVars.InputBoxValue = input2.value
	},

	async Homesheet_Event108_Act2(runtime, localVars)
	{
		var input2 = document.getElementById("mine2");
		runtime.globalVars.InputBoxValue = input2.value
	},

  // Called from the exported Ads("Open") event in data.json.
  Gv_Ad_Open(runtime, localVars) {
    if (!self.ArcadeSave) return;
    self.ArcadeSave.runRewarded(() => runtime.callFunction("Ads", "Close"));
  }
};

self.C3.ScriptsInEvents = scriptsInEvents;

runOnStartup(async runtime => {
  runtime.addEventListener("beforeprojectstart", async () => {
    if (self.ArcadeSave) await self.ArcadeSave.init(runtime);
  });
});

