let azAdWrapper;
var sgSdk = (function () {
  // window['console']['log'] = () => {};
  let config;
  let adPlaying = false;
	let focused = false;
  let storage;
  let storageKey = 'mahjong-story-2';

  function initialize(moduleArray, _config, callBack) {
    config = _config;
    const getCurrentLanguage = (supportedLanguages) => {
      // ?lang=en
      const params = new Proxy(new URLSearchParams(window.location.search), {
        get: (searchParams, prop) => searchParams.get(prop)
      });
      if (params.lang) {
          return params.lang;
      }
      let lang = (navigator.language || navigator.userLanguage).substr(0, 2);

      if (supportedLanguages.indexOf(lang) === -1) {
        lang = 'en';
      }

      return lang;
    };
    const settings = {
      config: {
        rewarded: {
          enabled: true,
        },
        env: {
          locale: getCurrentLanguage(config.supportedLanguages),
        },
      },
    };
    var integrationVars =  window['_azerionIntegration'];

    if (window.hasOwnProperty('fbrqSA') && window['fbrqSA'] === true) {
      h5branding.Utils.ASSET_LOCATION = 'assets/';
    }

    storage = localStorage.getItem(storageKey);
    if (!storage) {
      storage = {};
    } else {
      storage = JSON.parse(storage);
    }

    console.log(integrationVars);
    h5branding.SplashLoader.getInstance({
      gameId: integrationVars.gdId,
      gameName: document.title,
      gameTitle: document.title,
      libs: [],
      version: '1.0',
    }).create()
      .then(() => {
        azAdWrapper = new h5ads.AdWrapper(integrationVars.advType, integrationVars.gdId);
    
        callBack(null, settings, sgSdk);
      })
      .catch((e) => {
        console.error('h5branding load loaded', e);
      });
      document.addEventListener('contextmenu', event => event.preventDefault());
  }

  function trigger(key, data, binder) {
    // console.log('sdk trigger', key, data, binder);
    switch (key) {
      case 'restore':
        restore(data, binder);
        break;
      case 'save':
        save(data, binder);
        break;

      case 'loading.completed':
        loadingComplete(data, binder);
        break;

      case 'loading.update':
        loadingUpdate(data, binder);
        break;

      case 'levelStart':
        levelStart(data, binder);
        break;

      case 'gameTracking':
      case 'start':
      case 'levelFinish':
        nothing(data, binder);
        break;

      case 'beforePlayButtonDisplay':
      case 'playButtonPressed':
        callbackCall(data, binder);
        break;

      case "interstitialAd":
        showAD(data, binder);
        break;

      case 'rewardedAd':
        showADRewarded(data, binder);
        break;

      default:
        break;
    }
  }

  function loadingUpdate(data, binder) {
    h5branding.SplashLoader.getInstance().setLoadProgress(data.progressPercentage);
	console.log("3333",data, binder);
  }

  function loadingComplete(data, binder) {
    h5branding.SplashLoader.getInstance().setLoadProgress(100);
    h5branding.SplashLoader.getInstance().setButtonCallback(() => {
        h5branding.SplashLoader.getInstance().destroy();
        showAD({callback: function() {
          data.callback.call(binder);
          if (config.runGame) {
            config.runGame();
          }
        }}, binder)
    });

    addGameEvents();
	console.log("4444",data, binder);
  }

  function nothing(data, binder) {
    // we dont use this data for now
  }

  function restore(data, binder) {
    data.callback.call(binder, null, storage[data.key]);
  }

  function save(data, binder) {
    storage[data.key] = data.value;
    localStorage.setItem(storageKey, JSON.stringify(storage));

    if (data.callBack) {
      data.callback.call(binder);
    }
  }

  function levelStart(data, binder) {
    // we dont use this data for now
  }

  function callbackCall(data, binder) {
    data.callback.call(binder);
  }

  function addGameEvents() { //only for phaser 2
    focused = true;
    // window.game.stage.disableVisibilityChange = true;
    // window.game.canvas.oncontextmenu = function (e) { e.preventDefault(); }

    // Phaser.Stage.prototype.visibilityChange = visibilityChange;

    // window.game.onBlur.add(onBlur);
    // window.game.onFocus.add(onFocus);
    // window.game.onPause.add(onPause);
    // window.game.onResume.add(onResume);
  }
  //ovveride internal method cuz if playing rewarded ad and switch tabs music will start playing behind ad
  // function visibilityChange(event) {
  //   if (event.type === 'pagehide' || event.type === 'blur')
  //   {
  //     window.game.onBlur.dispatch(event);
  //   }
  //   else if (event.type === 'pageshow' || event.type === 'focus')
  //   {
  //     window.game.onFocus.dispatch(event);
  //   }
  // }

  function onPause() {
    // window.game.paused = true;
    //for update resize when game paused
    // window.game.time.gamePaused();
    // window.game.sound.setMute();
  }

  function onResume() {
    // window.game.paused = false;
    //for update resize when game paused
    // window.game.input.reset();
    // window.game.time.gameResumed();
    // window.game.sound.unsetMute();
  }

  function pause() {
    // window.game.onPause.dispatch();
  }

  function resume() {
    // window.game.onResume.dispatch();
  }

  function onBlur() {
    focused = false;
    pause();
  }

  function onFocus() {
    focused = true;
    if (adPlaying === false) {
        resume();
    }
  }

  function adStart() {
    showLoader();
    adPlaying = true;
  }

  function adFinish() {
    window.focus();
    adPlaying = false;
    focused = true;
    hideLoader();
    resume();
  }

  function showLoader() {
    let loader = document.getElementById('loader');
    if (loader) {
        loader.style.display = 'block';
    }
  }

  function hideLoader() {
    let loader = document.getElementById('loader');
    if (loader) {
        loader.style.display = 'none';
    }
  }

  function showAD(data, binder) {
    adStart();

    azAdWrapper.once(h5ads.AdEvents.CONTENT_PAUSED, () => {
      console.log('paused');
      pause();
    });

    azAdWrapper.once(h5ads.AdEvents.CONTENT_RESUMED, () => {
      console.log('resumed');
      azAdWrapper.removeAllListeners(h5ads.AdEvents.CONTENT_PAUSED);
      azAdWrapper.removeAllListeners(h5ads.AdEvents.CONTENT_RESUMED);
      adFinish();
      data.callback.call(binder);
    });

    azAdWrapper.showAd(h5ads.AdType.interstitial);
  }

  function showADRewarded(data, binder) {
    adStart();

    //let succeed = false;
	let succeed = true;
    azAdWrapper.on(h5ads.AdEvents.AD_REWARDED, () => {
      succeed = true;
    });

    azAdWrapper.on(h5ads.AdEvents.CONTENT_PAUSED, () => {
      console.log('[AD_HANDLER] pause game');
      pause();
    });

    azAdWrapper.on(h5ads.AdEvents.CONTENT_RESUMED, () => {
      console.log('[AD_HANDLER] Resume game');

      azAdWrapper.removeAllListeners(h5ads.AdEvents.CONTENT_PAUSED);
      azAdWrapper.removeAllListeners(h5ads.AdEvents.CONTENT_RESUMED);
      azAdWrapper.removeAllListeners(h5ads.AdEvents.AD_REWARDED);
      azAdWrapper.preloadAd(h5ads.AdType.rewarded);
      adFinish();
      data.callback.call(binder, succeed);
    });

    azAdWrapper.showAd(h5ads.AdType.rewarded);
	console.log("2222",data, binder);
  }

  function isAdPlaying() {
    return adPlaying;
  }

  return {
    initialize,
    trigger,
    isAdPlaying
  };
}());
