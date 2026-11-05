window.console.log = () => {};
let azerionIntegrationSDK = {
	azAdwrapper: {},
	loadLibraries: function (){
		azerionIntegrationSDK.azAdWrapper = new h5ads.AdWrapper(window['_azerionIntegration']['advType'], window['_azerionIntegration']['gdId']);
	},
	createSplashloader: function (callback) {
		let getCurrentLanguage = () => {
			var supportedLanguages = ["en", "de", "es", "fr", "it", "pt", "ru", "tr"];
			var lang = navigator.language || navigator.userLanguage;

			if (lang.indexOf('-') !== -1) {
				lang = lang.split('-')[0];
			}

			if (supportedLanguages.indexOf(lang) === -1) {
				lang = supportedLanguages[0];
			}

			return lang;
		}

		game.LANG = getCurrentLanguage();

		h5branding.SplashLoader.getInstance({
			gameId: window['_azerionIntegration']['gdId'],
			gameName: 'Thời trang Winx 3',
			gameTitle: 'Thời trang Winx 3',
			libs: [],
			version: '1.0'
		}).create()
			.catch((e) => {
				console.log(e);
			});

	},
	loadProgress: function(value){
		h5branding.SplashLoader.getInstance().setLoadProgress(value);
	},
	loadComplete: function(pauseCallback, resumeCallback){
		h5branding.SplashLoader.getInstance().setLoadProgress(100);
		if (window['_azerionIntegration']['alxType']) {
			h5Analytics.AnalyticsWrapper.load({
				aType: window['_azerionIntegration']['alxType'],
				gameName: 'Thời trang Winx 3',
				gaGameKey: 'd7df64d0e334ea1d7ef80b69d075fa1f',
				gaSecretKey: 'd1aa973e34b6d3f8f2923d0516100493054d1655',
				googleId: 'G-RE3G2NEX7E'
		});
		}
		h5branding.SplashLoader.getInstance().setButtonCallback(() => {
			pauseCallback();
			azerionIntegrationSDK.showAd('splash', null, () => {
				h5branding.SplashLoader.getInstance().destroy();
				if(resumeCallback) {
					resumeCallback();
				}
			});
		})
	},

	sendScreenview: function(eventName) {
		h5Analytics.AnalyticsWrapper.sendScreenView(eventName);
	},

	sendOrangeTagEvent: function(eventName) {
		h5Analytics.AnalyticsWrapper.sendOrangeTagEvent(eventName);
	},

	sendDesignEvent: function(eventName, data) {
		h5Analytics.AnalyticsWrapper.sendDesignEvent(eventName, data);
	},

	sendProgressionEvent: function(status, prog1, prog2, prog3, score) {
		h5Analytics.AnalyticsWrapper.sendProgressionEvent(status, prog1, prog2, prog3, score);
	},

	showAd: function(type, pauseCallback, resumeCallback){
		console.log('showAd called from:', type);
		azerionIntegrationSDK.azAdWrapper.once(h5ads.AdEvents.CONTENT_PAUSED, function() {
			azerionIntegrationSDK.sendScreenview(`advertisement_${type}`);
			if (pauseCallback) {
				pauseCallback();
			}
		}.bind(this));

		azerionIntegrationSDK.azAdWrapper.once(h5ads.AdEvents.CONTENT_RESUMED, function() {
			console.log('resumed');
			azerionIntegrationSDK.azAdWrapper.removeAllListeners(h5ads.AdEvents.CONTENT_PAUSED);
			azerionIntegrationSDK.azAdWrapper.removeAllListeners(h5ads.AdEvents.CONTENT_RESUMED);
			if (resumeCallback) {
				resumeCallback();
			}
		}.bind(this));
		azerionIntegrationSDK.azAdWrapper.showAd(h5ads.AdType.interstitial);
	}

};

