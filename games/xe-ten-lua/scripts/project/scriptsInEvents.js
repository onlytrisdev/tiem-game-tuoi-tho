const scriptsInEvents = {

    async Flowmanager_Event31_Act2(runtime, localVars) {
        runtime.globalVars.PAUSED = false;
        setTimeout(function(){
            ShowInter(runtime);
        }, 500);
    },

    async Flowmanager_Event39_Act5(runtime, localVars) {
    },

    async Flowmanager_Event57_Act14(runtime, localVars) {
    },

    async Pokisdk_Event2_Act4(runtime, localVars) {
        runtime.globalVars.PokiHasInitialised = globalThis.PokiHasInitialised;
    },

    async Pokisdk_Event3_Act1(runtime, localVars) {
        console.log("gameloading has started");
    },

    async Pokisdk_Event4_Act1(runtime, localVars) {
        console.log("gameloading has finished");
    },

    async Functions_Event19_Act1(runtime, localVars) {
    },

    async Functions_Event21_Act1(runtime, localVars) {
    },

    async Functions_Event111_Act3(runtime, localVars) {
        ShowRewarded(function(){
            // video was displayed, give reward
            runtime.globalVars.PAUSED = false;
            runtime.globalVars.RWDX2wasTriggered = true;
            runtime.globalVars.isPlayingRwd = false;
        }, function(){
            runtime.globalVars.PAUSED = false;
            runtime.globalVars.RWDX2wasTriggered = false;
            runtime.globalVars.isPlayingRwd = false;
        });
    },

    async Functions_Event113_Act3(runtime, localVars) {
        ShowRewarded(function(){
            // video was displayed, give reward
            runtime.globalVars.PAUSED = false;
            runtime.globalVars.rwdSkinwasTriggered = true;
            runtime.globalVars.isPlayingRwd = false;
        }, function(){
            runtime.globalVars.PAUSED = false;
            runtime.globalVars.rwdSkinwasTriggered = false;
            runtime.globalVars.isPlayingRwd = false;
        });
    }
};

self.C3.ScriptsInEvents = scriptsInEvents;