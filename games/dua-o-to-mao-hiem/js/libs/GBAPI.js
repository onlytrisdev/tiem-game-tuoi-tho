var playcnt = 0;
var GBAPI = function() {
    //this.targetFile = "http://highscores.disneyinternational.com/Scores.php";
    this.targetFile = "http://";
    this.sharedKey = null;
    this.lastEncryption = false;
    this.defaultGame = 1;
    this.defaultPerPage = 20;
    this.defaultPageNumber = 1;
}

GBAPI.prototype = new GBAPI;

GBAPI.prototype.setSharedKey = function(key) {
    this.sharedKey = key;
}

GBAPI.prototype.sendScore = function(parameters, callBack) {
    playcnt++;

    if (playcnt % 2 == 0) {
        if (typeof prerollStart === 'undefined') {
            console.log('skip ad, prerollStart not found')
        } else {
            /* LaggedAPI.APIAds.show('interstitial', 'lightning-speed', 'lightning-speed-game.jpg', function(response) {
                if (response.success) {
                    console.log('ad finished');
                } else {
                    console.log('ad error, continue');
                }
            }); */
        }
    }

}

GBAPI.prototype.getScores = function(parameters, callBack) {
    parameters.game = parameters.game || this.defaultGame;
    parameters.perPage = parameters.perPage || this.defaultPerPage;
    parameters.pageNumber = parameters.pageNumber || this.defaultPageNumber;
    parameters.startTimestamp = parameters.startTimestamp || 0;
    parameters.endTimestamp = parameters.endTimestamp || 0;
}

GBAPI.prototype._makeCall = function(func, parameters, callBack) {
    console.log(parameters)
}

GBAPI.prototype._keyIsValid = function() {
    if (this.sharedKey === null || this.sharedKey === '' || typeof(this.sharedKey) === "undefined") {
        console.log("ERROR :: No shared key found, aborting.");
        return false;
    }

    return true;
}