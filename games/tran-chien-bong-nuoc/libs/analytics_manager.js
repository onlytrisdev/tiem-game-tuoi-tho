const game_locations = {
    TITLE: 'title',
    PAUSE: 'pause',
    SHOP: 'shop',
    PLAY: 'play',
};

class AnalyticsManager {

    trackPlayAnalytics(location) {
        console.log("CALL TO ANALYTICS FROM: " + location);
        //window['PlayPromise'].then(sdk => {
        //    sdk.analytics.trackPlay(location)
        //    console.log('Tracked play analytics from ' + location)
        //})
    }
}

analytics_manager = new AnalyticsManager();