
var HTML5API = {

    protocol:function(){
    return document.location.protocol == "file:" ? 'file://' : "./";
    },
    levelStarted:function(event_params){
        event_params = event_params || {}
        console.log("sending: levelStarted");
        if (!window.send_messages && window.jsinterface && window.jsinterface.log_html5_game_event) window.jsinterface.log_html5_game_event("levelStarted", JSON.stringify(event_params));
        window.top.postMessage(JSON.stringify({event:"levelStarted",event_params:event_params}), HTML5API.protocol());

    },
    levelEnded:function(event_params){
        event_params = event_params || {}
        console.log("sending: levelEnded");
        if (!window.send_messages && window.jsinterface && window.jsinterface.log_html5_game_event) window.jsinterface.log_html5_game_event("levelEnded",JSON.stringify(event_params));
        window.top.postMessage(JSON.stringify({event:"levelEnded",event_params:event_params}),HTML5API.protocol());
    },
    preloaderStarted:function(){
        console.log("sending: preloaderStart");
        if (!window.send_messages && window.jsinterface && window.jsinterface.log_html5_game_event) window.jsinterface.log_html5_game_event("preloaderStart",JSON.stringify({}));
        window.top.postMessage(JSON.stringify({event:"preloaderStart",event_params:{}}), HTML5API.protocol());
    },
    preloaderEnded:function(){
        console.log("sending: preloaderEnd");
        if (!window.send_messages && window.jsinterface && window.jsinterface.log_html5_game_event) window.jsinterface.log_html5_game_event("preloaderEnd",JSON.stringify({}));
        window.top.postMessage(JSON.stringify({event:"preloaderEnd",event_params:{}}), HTML5API.protocol());
    },
    preloaderProgress:function(percentDone){
        //console.log("sending: preloaderProgress(" + percentDone +")");
        if (!window.send_messages && window.jsinterface && window.jsinterface.log_html5_game_event) window.jsinterface.log_html5_game_event("preloaderProgress",JSON.stringify({percent_done:percentDone}));
        window.top.postMessage(JSON.stringify({event:"preloaderProgress",event_params:{percent_done:percentDone}}), HTML5API.protocol());
    },
    setWidgetState:function(params){
        window.top.postMessage(JSON.stringify({event:"widgetStateChanged",event_params:params}), HTML5API.protocol());
    },
    getUserId:function(){
        return (getParameterByName("user_id") != ""? getParameterByName("user_id") : null);
    },
    setAlternativeId:function(alternativeId){
        window.top.postMessage(JSON.stringify({event:"setAlternativeId",event_params:{alternativeId: alternativeId}}), HTML5API.protocol());
    },

    showStartButton:function(){
        return (getParameterByName("show_start_btn") != "false");
    },

    sendLocalNotification:function(delay, iconUrl, title, text, bigContentTitle, bigContentText, gameExtras){
        console.log("sending: sendPushNotification");
        delay = parseInt(delay) * 1000;
        if (!window.send_messages && window.jsinterface && window.jsinterface.sendPushNotification) return window.jsinterface.sendPushNotification(delay.toString(), iconUrl, title, text, bigContentTitle, bigContentText, gameExtras);
//        window.top.postMessage(JSON.stringify({event:"levelEnded",event_params:event_params}),HTML5API.protocol());
    },
    cancelLocalNotification:function(id){
        console.log("sending: cancelPushNotification");
        if (!window.send_messages && window.jsinterface && window.jsinterface.cancelGameNotification) window.jsinterface.cancelGameNotification(id);
//        window.top.postMessage(JSON.stringify({event:"levelEnded",event_params:event_params}),HTML5API.protocol());
    },

    resetMidrollPending: function(){
        console.log("resetMidrollPending called");
        HTML5API._isMidrollPending = false;
        clearTimeout(HTML5API.midrollTimout);
    },
    fixTouchBug: function(){
        console.log("sending: fixTouchBug");
        window.top.postMessage(JSON.stringify({event:"fixTouchBug",event_params:{}}), HTML5API.protocol());
    },
    isIncentivizedVideoAvailable: function(){
        if (!window.send_messages && window.jsinterface && window.jsinterface.isIncentivizedVideoAvailable){
            return window.jsinterface.isIncentivizedVideoAvailable();
        }
    },

    showIncentivizedVideo: function(f){
        if (!window.send_messages && window.jsinterface && window.jsinterface.showIncentivizedVideo){
            window.incetivizedAdCallback = function(completed){
                console.log("Incentive ad complete? " + completed);
                if(f) f(completed);
            };
            window.jsinterface.showIncentivizedVideo("incetivizedAdCallback");
        }

    },
    showInterstitial: function(){
        if (!window.send_messages && window.jsinterface && window.jsinterface.showInterstitial){
            window.jsinterface.showInterstitial();
        }
    },
    adStart:[ function(){
        HTML5API.resetMidrollPending();
        HTML5API._isAdPlaying = true; }],

    adComplete:[ function(){
        HTML5API.resetMidrollPending();
        HTML5API._isAdPlaying = false;}],

    midrollPending:[function(){
        HTML5API._isMidrollPending = true;
        console.log("midrollPending handler called, flag is now set to " + HTML5API._isMidrollPending.toString()) }],

    _isAdPlaying:false,
    isAdPlaying:function()
    {
        console.log("isAdPlaying:" + HTML5API._isAdPlaying);
        return HTML5API._isAdPlaying;
    },

    onAdStart:function(func){
        console.log("HTML5API: onAdStart subscribed");
        HTML5API.adStart[1] = func;

    },
    onAdComplete:function(func){
        console.log("HTML5API: onAdComplete subscribed");
        HTML5API.adComplete[1] = func;
    },

    _isMidrollPending:false,
    showMidroll:function(){
        console.log("HTML5API: ShowMidroll called - returned " + HTML5API._isMidrollPending.toString() );
        if (HTML5API._isMidrollPending)
            HTML5API.midrollTimout = setTimeout(function(){ HTML5API.fireEvent("adComplete"); },3000);
        return HTML5API._isMidrollPending;
    },

    validEvents: ["adComplete","adStart","midrollPending"],
    receiveHostEvents: function(e){
        if(!(/(http:\/\/(localhost|m.kizi.com))|file:\/\//).test(e.origin)){
            console.log("Api: origin declined: " + e.origin);
            return;
        }

        if(!e.data) return;
        var received_data = JSON.parse(e.data);

        if (received_data.event) {
            console.log("HTML5API: received " + received_data.event + " event from host");
            var eventName = received_data.event;
            if (HTML5API[eventName] && HTML5API.validEvents.indexOf(eventName) > -1 ){
                HTML5API.fireEvent(eventName);
            }
        }
    },

    fireEvent:function(event){
        HTML5API[event].forEach(function(func){
            if (func) func(); });
    }
}


window.addEventListener('message', HTML5API.receiveHostEvents);

function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
            results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

console.log("Skipped overriding localstorage, not safari");




try{

    if (!window.send_messages && window.jsinterface && window.jsinterface.notifyApiLoaded){
        window.jsinterface.notifyApiLoaded();
    }

   
   console.log("DEBUG: notifying host that api was loaded");
   parent.apiLoaded();

}catch(e)
{
   console.log("Error:" + e.toString());
}

