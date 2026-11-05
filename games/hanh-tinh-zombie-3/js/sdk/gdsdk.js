// IGQ <==> GameDistribution SDK
let IGQ_GD = new IGQProviderGD();
//
//
window["GD_OPTIONS"] = {
    "gameId": "77469a1ca58a45e2849fc75ee0282233",
    "onEvent": function(event) {
        if (typeof IGQ_GD === 'undefined') {
            console.log("[!] GDSKD.onEvent : IGQ_GD not defined");
        } else {
            IGQ_GD.OnEvent(event.name);
        }
    },
};
(function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s);
    js.id = id;
    js.src = '';
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'gamedistribution-jssdk'));
//
//
//> IGQProviderGD constructor
function IGQProviderGD () {

    console.log("[IGQ <==> GDSDK]");

    // Provider #id
    this.id = "gd";

    // Current callback
    this.Status   = {completed:false, error:false};
    this.Callback = null;

} // IGQProviderGD


//> IGQProviderGD.OnEvent
IGQProviderGD.prototype.OnEvent = function(eventname) {

    console.log("[>] GDSDK.OnEvent : " + eventname);
    switch (eventname) {

        case "SDK_READY":
            IGQ.ProviderIsReady(this);
            break;

        case "AD_ERROR":
            this.Status.error = true;
            break;

        case "ALL_ADS_COMPLETED":
            this.Status.completed = true;
            break;

        case "COMPLETE":
            this.Status.completed = true;
            break;

        case "SKIPPED":
            this.Status.completed = false;
            break;

        case "SDK_GAME_START":
            // Ad session is completed ==> resume game
            if (this.Callback != null) {
                this.Callback.handler.call(this.Callback.context, this.Status);
            }
            break;

        case "SDK_GAME_PAUSE":
            break;

    }

};


//> IGQProviderGD.Preroll
IGQProviderGD.prototype.Preroll = function(callback) {

    this.Status.completed = false;
    this.Status.error     = false;
    if (typeof gdsdk !== 'undefined' && gdsdk.showAd !== 'undefined') {
        this.Callback = callback;
        gdsdk.showAd();
    } else {
        this.Status.error = true;
        callback.handler.call(callback.context, this.Status);
    }

};


//> IGQProviderGD.Interlude
IGQProviderGD.prototype.Interlude = function() {



};


//> IGQProviderGD.EndInterlude
IGQProviderGD.prototype.EndInterlude = function() {



};


//> IGQProviderGD.Interstitial
IGQProviderGD.prototype.Interstitial = function(callback) {

    this.Status.completed = false;
    this.Status.error     = false;
    if (typeof gdsdk !== 'undefined' && gdsdk.showAd !== 'undefined') {
        this.Callback = callback;
        gdsdk.showAd();
    } else {
        this.Status.error = true;
        callback.handler.call(callback.context, this.Status);
    }

};


//> IGQProviderGD.Rewarded
IGQProviderGD.prototype.Rewarded = function(callback) {

    this.Status.completed = false;
    this.Status.error     = false;
    if (typeof gdsdk !== 'undefined' && gdsdk.showAd !== 'undefined') {
        this.Callback = callback;
        gdsdk.showAd('rewarded');
    } else {
        this.Status.error = true;
        callback.handler.call(callback.context, this.Status);
    }

};