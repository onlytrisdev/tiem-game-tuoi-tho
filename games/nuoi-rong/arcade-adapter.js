/**
 * Arcade adapter — defer Flambe boot sau cloud load; mock Funtomic offline.
 */
(function (global) {
  'use strict';

  var gameStarted = false;
  var silentWrite = false;

  function isOfflineHost() {
    try {
      var h = String((global.location && global.location.hostname) || '').toLowerCase();
      if (!h || h === 'localhost' || h === '127.0.0.1') return true;
      if (h === 'test.game' || h.indexOf('test.game') >= 0) return true;
      if (/^\d{1,3}(\.\d{1,3}){3}$/.test(h)) return true;
      return false;
    } catch (e) {
      return true;
    }
  }

  function installFuntomicMock() {
    if (!isOfflineHost() || global.__gvFuntomicMockInstalled) return;
    global.__gvFuntomicMockInstalled = true;

    var origOpen = XMLHttpRequest.prototype.open;
    var origSend = XMLHttpRequest.prototype.send;

    XMLHttpRequest.prototype.open = function (method, url) {
      this._gvFuntomicUrl = url;
      return origOpen.apply(this, arguments);
    };

    XMLHttpRequest.prototype.send = function (body) {
      var url = String(this._gvFuntomicUrl || '');
      if (url.indexOf('funtomic.com') !== -1) {
        var xhr = this;
        setTimeout(function () {
          try {
            Object.defineProperty(xhr, 'readyState', { configurable: true, value: 4 });
            Object.defineProperty(xhr, 'status', { configurable: true, value: 200 });
            Object.defineProperty(xhr, 'responseText', {
              configurable: true,
              value: JSON.stringify({ config_md5: 'local' })
            });
            if (typeof xhr.onreadystatechange === 'function') xhr.onreadystatechange();
            if (typeof xhr.onload === 'function') xhr.onload();
          } catch (e) {
            /* ignore */
          }
        }, 0);
        return;
      }
      return origSend.apply(this, arguments);
    };
  }

  function setItemSilent(key, value) {
    if (!global.localStorage) return;
    silentWrite = true;
    try {
      global.localStorage.setItem(key, value);
    } catch (e) {
      /* ignore */
    } finally {
      silentWrite = false;
    }
  }

  function loadScript(src) {
    return new Promise(function (resolve, reject) {
      var s = document.createElement('script');
      s.src = src;
      s.async = false;
      s.onload = function () {
        resolve();
      };
      s.onerror = function () {
        reject(new Error('Failed to load ' + src));
      };
      document.body.appendChild(s);
    });
  }

  function embedFlambe() {
    if (gameStarted) return;
    gameStarted = true;
    try {
      if (global.flambe && typeof global.flambe.embed === 'function') {
        global.flambe.embed(['targets/main-html.js'], 'content');
        if (typeof global.__gvMarkGameBooted === 'function') {
          global.__gvMarkGameBooted('flambe:embed');
        }
      }
    } catch (e) {
      console.warn('[ArcadeAdapter] flambe.embed failed', e);
    }
  }

  function startGame() {
    installFuntomicMock();

    var bootPromise =
      global.ArcadeSave && global.ArcadeSave.ready
        ? global.ArcadeSave.ready
        : Promise.resolve();

    bootPromise
      .then(function () {
        return loadScript('flambe.js');
      })
      .then(function () {
        embedFlambe();
      })
      .catch(function (err) {
        console.warn('[ArcadeAdapter] startGame fallback', err);
        try {
          var s = document.createElement('script');
          s.src = 'flambe.js';
          s.onload = embedFlambe;
          document.body.appendChild(s);
        } catch (e2) {
          /* ignore */
        }
      });
  }

  installFuntomicMock();

  global.ArcadeAdapter = {
    startGame: startGame,
    setItemSilent: setItemSilent,
    isSilentWrite: function () {
      return silentWrite;
    },
    installFuntomicMock: installFuntomicMock
  };
})(window);
