/**
 * GameSnacks stub — thay SDK CDN sdks.gamesnacks.com.
 * Bundle Cocos vẫn isGameSnacks=true; stub đủ API để không crash.
 * Storage → window.localStorage; ads → callback ngay (QC thật qua ArcadeAds).
 */
(function (global) {
  'use strict';

  if (global.GameSnacks && global.GameSnacks.__gvStub) {
    return;
  }

  var USERDATA_KEY = 'userdata';
  var pauseHandlers = [];
  var resumeHandlers = [];
  var audioHandlers = [];

  function safeCall(fn, arg) {
    if (typeof fn !== 'function') {
      return;
    }
    try {
      fn(arg);
    } catch (e) {
      console.warn('[GameSnacksStub] callback error', e);
    }
  }

  var storage = {
    getItem: function (key) {
      try {
        return global.localStorage.getItem(key);
      } catch (e) {
        return null;
      }
    },
    setItem: function (key, value) {
      try {
        global.localStorage.setItem(key, value == null ? '' : String(value));
      } catch (e) {
        console.warn('[GameSnacksStub] setItem failed', e);
      }
    },
    removeItem: function (key) {
      try {
        global.localStorage.removeItem(key);
      } catch (e) {
        /* ignore */
      }
    },
    clear: function () {
      // Giữ userdata — tránh wipe tiến độ (initData curGuide<=1 gọi clear)
      var backup = null;
      try {
        backup = global.localStorage.getItem(USERDATA_KEY);
      } catch (e) {
        backup = null;
      }
      try {
        global.localStorage.clear();
      } catch (e2) {
        /* ignore */
      }
      if (backup != null && backup !== '') {
        try {
          global.localStorage.setItem(USERDATA_KEY, backup);
          console.log('[GameSnacksStub] clear() giữ userdata');
        } catch (e3) {
          /* ignore */
        }
      }
    }
  };

  var ad = {
    break: function (opts) {
      opts = opts || {};
      var type = opts.type || '';

      // next / interstitial
      if (type === 'next' || type === 'preroll' || type === 'start' || type === 'pause' || type === 'browse') {
        safeCall(opts.beforeAd);
        setTimeout(function () {
          safeCall(opts.adBreakDone, { breakType: type, breakStatus: 'ignored' });
        }, 0);
        return;
      }

      // reward
      if (type === 'reward') {
        safeCall(opts.beforeAd);
        var granted = false;
        function grant() {
          if (granted) {
            return;
          }
          granted = true;
          safeCall(opts.adViewed);
        }
        if (typeof opts.beforeReward === 'function') {
          try {
            opts.beforeReward(grant);
          } catch (e) {
            console.warn('[GameSnacksStub] beforeReward error', e);
            grant();
          }
        } else {
          grant();
        }
        if (!granted) {
          grant();
        }
        setTimeout(function () {
          safeCall(opts.adBreakDone, { breakType: 'reward', breakStatus: 'viewed' });
        }, 0);
        return;
      }

      // unknown type
      safeCall(opts.beforeAd);
      safeCall(opts.adBreakDone, { breakType: type, breakStatus: 'ignored' });
    }
  };

  var game = {
    firstFrameReady: function () {},
    ready: function () {},
    gameOver: function () {},
    levelComplete: function () {},
    onPause: function (fn) {
      if (typeof fn === 'function') {
        pauseHandlers.push(fn);
      }
    },
    onResume: function (fn) {
      if (typeof fn === 'function') {
        resumeHandlers.push(fn);
      }
    }
  };

  var audio = {
    isEnabled: function () {
      return true;
    },
    subscribe: function (fn) {
      if (typeof fn !== 'function') {
        return;
      }
      audioHandlers.push(fn);
      // SDK thật gọi với boolean isEnabled
      try {
        fn(true);
      } catch (e) {
        console.warn('[GameSnacksStub] audio.subscribe error', e);
      }
    }
  };

  global.GameSnacks = {
    __gvStub: true,
    storage: storage,
    ad: ad,
    game: game,
    audio: audio
  };

  console.log('[GameSnacksStub] active — no CDN GameSnacks SDK');
})(typeof window !== 'undefined' ? window : this);
