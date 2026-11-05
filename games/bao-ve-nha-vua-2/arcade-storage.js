/**
 * Arcade storage bridge.
 *
 * Must load before cocos2d-js: the engine grabs window.localStorage once at init and, when the
 * probe write throws (third-party iframe / private mode), replaces cc.sys.localStorage with a
 * warn-only stub that silently drops every save. Installing a working in-memory store first keeps
 * the engine writing somewhere the Arcade cloud sync can still read.
 */
(function (global) {
  "use strict";

  var BUILD = "20260818-1";
  var PROBE_KEY = "__arcade_probe__";
  var listeners = [];
  var usingFallback = false;
  var store = null;

  function notify(key) {
    for (var index = 0; index < listeners.length; index += 1) {
      try {
        listeners[index](key);
      } catch (error) {
        /* ignored */
      }
    }
  }

  function createMemoryStorage(seed) {
    var data = seed || {};
    var api = {
      getItem: function (key) {
        key = String(key);
        return Object.prototype.hasOwnProperty.call(data, key) ? data[key] : null;
      },
      setItem: function (key, value) {
        data[String(key)] = String(value);
        notify(String(key));
      },
      removeItem: function (key) {
        delete data[String(key)];
      },
      clear: function () {
        data = {};
      },
      key: function (index) {
        var keys = Object.keys(data);
        index = Number(index);
        return index >= 0 && index < keys.length ? keys[index] : null;
      }
    };
    Object.defineProperty(api, "length", {
      get: function () { return Object.keys(data).length; }
    });
    return api;
  }

  function isUsable(candidate) {
    try {
      candidate.setItem(PROBE_KEY, "1");
      candidate.removeItem(PROBE_KEY);
      return true;
    } catch (error) {
      return false;
    }
  }

  function snapshot(candidate) {
    var copy = {};
    try {
      for (var index = 0; index < candidate.length; index += 1) {
        var key = candidate.key(index);
        if (key) copy[key] = candidate.getItem(key);
      }
    } catch (error) {
      /* ignored */
    }
    return copy;
  }

  function installFallback(memory) {
    var descriptor = { configurable: true, enumerable: true, get: function () { return memory; } };
    try {
      Object.defineProperty(global, "localStorage", descriptor);
      return true;
    } catch (error) { /* try prototype */ }
    try {
      Object.defineProperty(Object.getPrototypeOf(global), "localStorage", descriptor);
      return true;
    } catch (error) { /* assign */ }
    try {
      global.localStorage = memory;
      return global.localStorage === memory;
    } catch (error) {
      return false;
    }
  }

  function hookRealStorage(target) {
    try {
      var prototype = global.Storage && global.Storage.prototype;
      if (!prototype || typeof prototype.setItem !== "function") return;
      if (prototype.__arcadeHooked) return;
      var original = prototype.setItem;
      prototype.setItem = function (key, value) {
        var result = original.apply(this, arguments);
        if (this === target) notify(String(key));
        return result;
      };
      prototype.__arcadeHooked = true;
    } catch (error) {
      /* adapter still saves on gameplay events */
    }
  }

  var real = null;
  try {
    real = global.localStorage;
  } catch (error) {
    real = null;
  }

  if (real && isUsable(real)) {
    store = real;
    hookRealStorage(store);
  } else {
    usingFallback = true;
    store = createMemoryStorage(real ? snapshot(real) : {});
    var installed = installFallback(store);
    console.warn(
      "[Arcade] localStorage bị chặn — dùng bộ nhớ tạm." +
      (installed ? "" : " Không thay được window.localStorage.") +
      " Tiến trình chỉ giữ được khi đăng nhập Arcade."
    );
  }

  global.ArcadeBuild = global.ArcadeBuild || { version: BUILD, modules: {} };
  global.ArcadeBuild.modules.storage = BUILD;

  global.ArcadeStorage = {
    BUILD: BUILD,
    get: function () { return store; },
    isFallback: function () { return usingFallback; },
    onWrite: function (callback) {
      if (typeof callback === "function") listeners.push(callback);
    }
  };
})(window);
