!function(a, b) {

    var self = this;

    self[a] = {

        storageKeyName: "unlockAllLevels",
        enabled: false,

        init: function() {
            this.update();
        },

        update: function() {
            this.enabled = window.famobi.localStorage.getItem(this.storageKeyName) === "true";
        },

        isEnabled: function() {
            return this.enabled;
        },

        setEnabled: function(isEnabled) {
            window.famobi.localStorage.setItem(this.storageKeyName, !!isEnabled);
            this.update();
        }
    };

}('famobi_unlock', window);

/*
    ADAPTERS
 */
famobi_adapters = {
    "analytics": {
        "trackEvent": function(event, params) {

            // console.log("event: "+event);

            switch(event) {
                case "EVENT_LEVELSTART":

                    try{
                        window.parent.cmgGameEvent('start', ""+params.levelName);
                    } catch(e) {
                        console.log(e);
                    }


                    /*
                    window.top.postMessage({
                        scope: window.famobi_gameID,
                        event: 'start',
                        level: params.levelName
                    }, "*");
                    */
                    break;

                case "EVENT_LEVELRESTART":

                    try{
                        window.parent.cmgGameEvent('replay', ""+params.levelName);
                    } catch(e) {
                        console.log(e);
                    }

                    /*
                    window.top.postMessage({
                        scope: window.famobi_gameID,
                        event: 'restart',
                        level: params.levelName
                    }, "*");
                    */

                    break;
                default:
                    // ...
            }
        },
        "trackScreen": function(screen, pageTitle) {

            // console.log("screen: "+screen);

            switch(event) {
                case "SCREEN_HOME":
                    // ...
                    break;
                default:
                    // ...
            }
        }
    }
};

/*
    STARTING GAME AFTER SITE LOCK CHECK
 */
var siteRegEx = /^([-a-zA-Z0-9\.]+)\numuki\.com(\/|$)/;
if (false && siteRegEx.test(document.domain) === false) {
    throw new Error('not playable');
} else {
    window.famobi_gameID = "8-ball-pool"; // the actual GAMEID is added to the final version by Famobi
    window.famobi_gameJS = ['js/all.js'];

    (function (document, url, fgJS, firstJS) {
        fgJS = document.createElement('script');
        firstJS = document.getElementsByTagName('script')[0];
        fgJS.src = url + encodeURIComponent(document.location.href);
        firstJS.parentNode.insertBefore(fgJS, firstJS);
    })(document, 'html5games/gameapi/v1.js?e=');
}

/*
    UNLOCK ALL LEVELS
 */
window.unlockAllLevels = function() {
    return;
};
