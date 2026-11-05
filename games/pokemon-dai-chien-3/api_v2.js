var HTML5API = {
    // attributes
    _isMidrollPending: false,
    _isAdPlaying: false,

    // events
    adStart: [ function () {
        HTML5API.resetMidrollPending();
        HTML5API._isAdPlaying = true;
    }],
    adComplete: [ function () {
        HTML5API.resetMidrollPending();
        HTML5API._isAdPlaying = false;
    }],
    midrollPending: [function () {
        HTML5API._isMidrollPending = true;
        console.log("midrollPending handler called, flag is now set to " + HTML5API._isMidrollPending.toString())
    }],

    call_HTML5API_Receiver: function (functionName) {
        try {
            return window.parent.HTML5API_Receiver[functionName].apply(window.parent.HTML5API_Receiver, Array.prototype.slice.call(arguments, 1));
        } catch (e) {
            console.log("Error:" + e.toString());
            return false;
        }
    },

    // functions
    storePreference: function (key, value) {
        console.log("sending: store preference in app");
        if (!window.send_messages && window.cardsjsinterface && window.cardsjsinterface.storePreference) return window.cardsjsinterface.storePreference(key, value);
    },
    getPreference: function (key, defaultValue) {
        console.log("sending: get preference from app");
        if (!window.send_messages && window.cardsjsinterface && window.cardsjsinterface.getPreference) return window.cardsjsinterface.getPreference(key, defaultValue);
    },
    removePreference: function (key) {
        console.log("sending: remove preference from app");
        if (!window.send_messages && window.cardsjsinterface && window.cardsjsinterface.removePreference) return window.cardsjsinterface.removePreference(key);
    },
    updateAlbumBadge: function (number) {
        console.log("sending: update album badge");
        if (!window.send_messages && window.cardsjsinterface && window.cardsjsinterface.updateAlbumBadge) return window.cardsjsinterface.updateAlbumBadge(number);
    },
    requestImageResize: function (imageId, imageURL, requiredSizes, jsCallbakFunctionName, forceDownload) {
        console.log("sending: request image resize");
        if (!window.send_messages && window.cardsjsinterface && window.cardsjsinterface.tmpRequestImageResize) {
            return window.cardsjsinterface.tmpRequestImageResize(imageId, imageURL, requiredSizes, jsCallbakFunctionName, !!forceDownload);
        }
        else {
            if (!window.send_messages && window.cardsjsinterface && window.cardsjsinterface.requestImageResize) return window.cardsjsinterface.requestImageResize(imageId, imageURL, requiredSizes, jsCallbakFunctionName);
        }
    },
    getImageByDimension: function (imageId, requiredSizes) {
        console.log("sending: get image by dimension");
        if (!window.send_messages && window.cardsjsinterface && window.cardsjsinterface.getImageByDimension) return window.cardsjsinterface.getImageByDimension(imageId, requiredSizes);
    },
    showNewCardAchievedNotification: function () {
        console.log('sending: show new card achieved notification');
        if (!window.send_messages && window.cardsjsinterface && window.cardsjsinterface.getImageByDimension) return window.cardsjsinterface.showNewCardAchievedNotification();
    },
    launchGame: function(gameId){
        console.log('sending: launchGame', gameId);
        if (!window.send_messages && window.cardsjsinterface && window.cardsjsinterface.getImageByDimension) return window.cardsjsinterface.launchGame(gameId);
    },
    showBrowsingAnimation: function(){
      console.log('sending: showBrowsingAnimation');
        if (!window.send_messages && window.cardsjsinterface && window.cardsjsinterface.showBrowsingAnimation) return window.cardsjsinterface.showBrowsingAnimation();
    },
    stopBrowsingAnimation: function(){
        console.log('sending: stopBrowsingAnimation');
        if (!window.send_messages && window.cardsjsinterface && window.cardsjsinterface.stopBrowsingAnimation) return window.cardsjsinterface.stopBrowsingAnimation();
    },
    getGameId: function () {
        if (window.cardsjsinterface && window.cardsjsinterface.getGameId) return window.cardsjsinterface.getGameId();
    },
    levelStarted: function (levelNumber, eventParams) {
        if (isNaN(levelNumber))
            eventParams = levelNumber;

        eventParams = eventParams || {};
        console.log("sending: levelStarted");

        eventParams.level = levelNumber;

        if (!window.send_messages && window.jsinterface && window.jsinterface.log_html5_game_event)
            window.jsinterface.log_html5_game_event("levelStarted", JSON.stringify(eventParams));
        else
            HTML5API.call_HTML5API_Receiver("levelStarted", eventParams);
    },
    levelEnded: function (levelNumber, is_won, eventParams) {
        if (isNaN(levelNumber))
            eventParams = levelNumber;

        eventParams = eventParams || {};
        console.log("sending: levelEnded");

        eventParams.level = levelNumber;
        eventParams.won = is_won;

        if (!window.send_messages && window.jsinterface && window.jsinterface.log_html5_game_event)
            window.jsinterface.log_html5_game_event("levelEnded", JSON.stringify(eventParams));
        else
            HTML5API.call_HTML5API_Receiver("levelEnded", eventParams);

        if (window.kiziCards && window.kiziCards.checkNewAchievedByEvent)
            window.kiziCards.checkNewAchievedByEvent(HTML5API.getGameId(), 'levelEnded', levelNumber, is_won);
    },
    displayMidroll: function () {
        if (!window.send_messages && window.jsinterface && window.jsinterface.showInterstitial)
            window.jsinterface.showInterstitial("mid_roll");
        // backward compatibility for old kizi apps
        else if (!window.send_messages && window.jsinterface && window.jsinterface.log_html5_game_event)
            window.jsinterface.log_html5_game_event("levelEnded", JSON.stringify({ignore: true}));
        else
            HTML5API.call_HTML5API_Receiver("displayMidroll");

        if (HTML5API._isMidrollPending)
            HTML5API.midrollTimout = setTimeout(function () {
                HTML5API.fireEvent("adComplete");
            }, 3000);
    },
    preloaderStarted: function () {
        console.log("sending: preloaderStart");

        if (!window.send_messages && window.jsinterface && window.jsinterface.log_html5_game_event)
            window.jsinterface.log_html5_game_event("preloaderStart", "{}");
        else
            HTML5API.call_HTML5API_Receiver("preloaderStart");
    },
    preloaderEnded: function () {
        console.log("sending: preloaderEnd");
        if (!window.send_messages && window.jsinterface && window.jsinterface.log_html5_game_event)
            window.jsinterface.log_html5_game_event("preloaderEnd", "{}");
        else
            HTML5API.call_HTML5API_Receiver("preloaderEnd");
    },
    setAlternativeId: function (alternativeId) {
        console.log("sending: setAlternativeId");
        HTML5API.call_HTML5API_Receiver("setAlternativeId", alternativeId);
    },
    reportCustomEvent: function (eventParams) {
        var customEventName = eventParams && eventParams.custom_event_name;
        if (!customEventName) {
            console.log("reportCustomEvent Error: custom_event_name is required");
            return;
        }

        console.log("sending: reportCustomEvent - " + customEventName);

        if (!window.send_messages && window.jsinterface && window.jsinterface.log_html5_game_event)
            window.jsinterface.log_html5_game_event(customEventName, JSON.stringify(eventParams));
        else if(!window.send_messages && window.cardsjsinterface && window.cardsjsinterface.logEvent)
                window.cardsjsinterface.logEvent(customEventName, JSON.stringify(eventParams));
        else
            HTML5API.call_HTML5API_Receiver("reportCustomEvent", customEventName, eventParams);

        if ((customEventName == 'achieved' || customEventName == 'counter') && window.kiziCards && window.kiziCards.checkNewAchievedByEvent)
            window.kiziCards.checkNewAchievedByEvent(HTML5API.getGameId(), customEventName, null, null, eventParams.achieved);
    },
    isMidrollPending: function () {
        return HTML5API._isMidrollPending;
    },
    resetMidrollPending: function () {
        console.log("resetMidrollPending called");
        HTML5API._isMidrollPending = false;
        clearTimeout(HTML5API.midrollTimout);
    },
    isAdPlaying: function () {
        console.log("isAdPlaying:" + HTML5API._isAdPlaying);
        return HTML5API._isAdPlaying;
    },

    // kizi app only functions
    isIncentivizedVideoAvailable: function () {
        return !window.send_messages && window.jsinterface && window.jsinterface.isIncentivizedVideoAvailable && window.jsinterface.isIncentivizedVideoAvailable();
    },
    showIncentivizedVideo: function (f) {
        if (!window.send_messages && window.jsinterface && window.jsinterface.showIncentivizedVideo) {
            window.incetivizedAdCallback = function (isFullyWatched) {
                console.log("Is incentivized video fully watched: " + isFullyWatched);
                if (f) f(isFullyWatched);
            };
            window.jsinterface.showIncentivizedVideo("incetivizedAdCallback");
        }
    },
    sendLocalNotification: function (delay, iconUrl, title, text, bigContentTitle, bigContentText, gameExtras) {
        console.log("sending: sendPushNotification");
        delay = parseInt(delay) * 1000;
        if (!window.send_messages && window.jsinterface && window.jsinterface.sendPushNotification)
            return window.jsinterface.sendPushNotification(delay.toString(), iconUrl, title, text, bigContentTitle, bigContentText, gameExtras);
    },
    cancelLocalNotification: function (id) {
        console.log("sending: cancelPushNotification");
        if (!window.send_messages && window.jsinterface && window.jsinterface.cancelGameNotification)
            window.jsinterface.cancelGameNotification(id);
    },

    // get data from params
    getUserId: function () {
        return (getParameterByName("user_id") != "" ? getParameterByName("user_id") : null);
    },
    showStartButton: function () {
        return (getParameterByName("show_start_btn") != "false");
    },

    // set event listeners
    onAdStart: function (func) {
        console.log("HTML5API: onAdStart subscribed");
        HTML5API.adStart[1] = func;
    },
    onAdComplete: function (func) {
        console.log("HTML5API: onAdComplete subscribed");
        HTML5API.adComplete[1] = func;
    },

    fireEvent: function (event) {
        console.log("HTML5API: fireEvent - " + event);
        if (HTML5API[event] && HTML5API[event].forEach)
            HTML5API[event].forEach(function (func) {
                if (func) func();
            });
    },

    // backward compatibility for old kizi apps
    receiveHostEvents: function (e) {
        if (!e.data)
            return;
        var received_data = JSON.parse(e.data);
        if (!received_data.event)
            return;

        HTML5API.fireEvent(received_data.event);
    }
};

function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
            results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}


try {

    if (!window.send_messages && window.jsinterface && window.jsinterface.notifyApiLoaded)
        window.jsinterface.notifyApiLoaded();

    window.
    window.parent.apiLoaded && window.parent.apiLoaded();

} catch (e) {
    console.log("Error:" + e.toString());
}