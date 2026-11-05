(function () {
  function blockedExtUrl(url) {
    return String(url || "").replace(/(\/[^\/?#]+)\.(bin|lnk)(?=[?#]|$)/i, function (m, head, ext) {
      return head + "_" + ext.toLowerCase() + ".dat";
    });
  }

  function protoRoot() {
    try {
      if (typeof protobuf !== "undefined" && protobuf.roots && protobuf.roots.creator) {
        return protobuf.roots.creator.protocol;
      }
    } catch (err) {}
    return typeof window.protocol === "object" ? window.protocol : null;
  }

  function toBytes(body) {
    if (!body) return null;
    if (body instanceof ArrayBuffer) return new Uint8Array(body);
    if (body instanceof Uint8Array) return body;
    if (typeof body === "string") {
      var proto = protoRoot();
      if (!proto) return null;
      try {
        var bin = atob(body);
        var out = new Uint8Array(bin.length);
        for (var i = 0; i < bin.length; i++) out[i] = bin.charCodeAt(i);
        return out;
      } catch (err) {
        return null;
      }
    }
    return null;
  }

  function b64encode(bytes) {
    var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    var s = "";
    var len = bytes.length;
    for (var i = 0; i < len; i += 3) {
      s += chars[bytes[i] >> 2];
      s += chars[((3 & bytes[i]) << 4) | (bytes[i + 1] >> 4)];
      s += chars[((15 & bytes[i + 1]) << 2) | (bytes[i + 2] >> 6)];
      s += chars[63 & bytes[i + 2]];
    }
    if (len % 3 === 2) s = s.substring(0, s.length - 1) + "=";
    else if (len % 3 === 1) s = s.substring(0, s.length - 2) + "==";
    return s;
  }

  function localProtocolResponse(body) {
    var proto = protoRoot();
    if (!proto || !proto.HttpApiMsg || !proto.PB_CMD) return null;
    var bytes = toBytes(body);
    if (!bytes) return null;
    try {
      var msg = proto.HttpApiMsg.decode(bytes);
      var cmd = msg.cmd;
      var payload = {};
      var ack = cmd;
      if (cmd === proto.PB_CMD.LOGIN_REQ) {
        ack = proto.PB_CMD.LOGIN_ACK;
        payload = proto.GameLoginResponse.encode({
          userId: 1,
          isNew: false,
          serverId: 1,
          userData: "",
          token: "4399local",
          serverTime: Math.floor(Date.now() / 1000),
          gmLevel: 0
        }).finish();
      } else if (cmd === proto.PB_CMD.HEARTBEAT_REQ) {
        ack = proto.PB_CMD.HEARTBEAT_ACK;
        payload = proto.HeartbeatResponse.encode({
          serverTime: Math.floor(Date.now() / 1000)
        }).finish();
      } else if (cmd === proto.PB_CMD.SAVE_USER_DATA_REQ) {
        ack = proto.PB_CMD.SAVE_USER_DATA_ACK;
        payload = proto.NullMsg ? proto.NullMsg.encode({}).finish() : new Uint8Array(0);
      } else if (cmd === proto.PB_CMD.GET_GLOBAL_KVRANK_LIST_REQ) {
        ack = proto.PB_CMD.GET_GLOBAL_KVRANK_LIST_ACK;
        var req = proto.GetGlobalKvRankListRequest.decode(msg.data);
        var list = [];
        var n = req.count || 20;
        for (var i = 0; i < n; i++) {
          var name = "4399玩家" + ("0000" + (i + 1)).slice(-4);
          list.push({
            rank: i + 1,
            userId: 10001 + i,
            showData: JSON.stringify({ nickName: name }),
            rankScore: (n - i) * 100,
            isRobot: true
          });
        }
        payload = proto.GetGlobalKvRankListResponse.encode({
          groupKey: req.groupKey || "",
          key: req.key || "",
          season: 1,
          list: list
        }).finish();
      } else if (cmd === proto.PB_CMD.GET_ZONE_RANK_LIST_REQ) {
        ack = proto.PB_CMD.GET_ZONE_RANK_LIST_ACK;
        var zlist = [];
        for (var zi = 0; zi < 20; zi++) {
          zlist.push({
            rank: zi + 1,
            userId: 20001 + zi,
            showData: JSON.stringify({ nickName: "4399玩家" + ("0000" + (zi + 1)).slice(-4) }),
            rankScore: (20 - zi) * 80,
            isRobot: true
          });
        }
        payload = proto.GetZoneRankListResponse
          ? proto.GetZoneRankListResponse.encode({ list: zlist }).finish()
          : proto.GetRankDataResponse.encode({ key: "", rankLevel: 0, rankDatas: zlist }).finish();
      } else if (typeof cmd === "number") {
        ack = cmd + 1;
        payload = proto.NullMsg ? proto.NullMsg.encode({}).finish() : new Uint8Array(0);
      }
      var packed = proto.HttpApiMsg.encode({ cmd: ack, data: payload }).finish();
      return b64encode(packed);
    } catch (err) {
      return null;
    }
  }

  // The official platform SDK is the only external network exception.
  var gameRoot = new URL(".", window.location.href);

  function isOfficialPlatform(url) {
    return /(^|\.)(4399|4399sj|4399api|5054399|3304399)\.(com|cn|net)$/.test(url.hostname);
  }

  // Only the Arcade player-history endpoints may bypass the game network sandbox.
  function isArcadeHistory(url, method) {
    return method === "POST" && url.protocol === "https:" &&
      url.hostname === "localhost" && !url.username && !url.password &&
      /^\/account\/(?:GetHistoryGame|SaveHistoryGame)\/?$/.test(url.pathname);
  }

  function isGameDirUrl(url) {
    var path = decodeURIComponent(url.pathname);
    var rootPath = decodeURIComponent(gameRoot.pathname);
    return url.origin === gameRoot.origin && path.startsWith(rootPath) &&
      !path.split("/").some(function (part) { return part === ".." || part === "."; }) &&
      path.indexOf("\\") === -1 && !url.username && !url.password;
  }

  function localFileUrl(value) {
    var url = new URL(String(value), gameRoot);
    if (!isGameDirUrl(url)) {
      throw new Error("Only files inside the game directory may be loaded");
    }
    return blockedExtUrl(url.href);
  }

  // The official score.min.js submits through its own service endpoint.
  // Only requests actually originating from that SDK may bypass the game
  // sandbox, and only to Arcade hosts or the same-origin score relay.
  function isArcadeScoreSdkCaller() {
    try { return /(?:^|[\s(\/])score\.min\.js(?::|\?|\b)/.test(String(new Error().stack || "")); }
    catch (err) { return false; }
  }

  function isArcadeScoreSdkDestination(url, method) {
    if (method !== "POST" || url.username || url.password) return false;
    if (url.origin === gameRoot.origin) return true;
    return url.protocol === "https:" &&
      /(^|\.)arcade\.(?:com|vn)$/.test(url.hostname);
  }

  function allowedUrl(value, method, fromScoreSdk) {
    var url = new URL(String(value), gameRoot);
    if (fromScoreSdk && isArcadeScoreSdkDestination(url, method)) return url.href;
    if (isGameDirUrl(url)) {
      if (method !== "GET" && method !== "HEAD") throw new Error("Game network writes are disabled");
      return localFileUrl(url.href);
    }
    if (isOfficialPlatform(url) && /^(https?|wss?):$/.test(url.protocol)) return url.href;
    if (isArcadeHistory(url, method)) return url.href;
    if (method !== "GET" && method !== "HEAD") throw new Error("Game network writes are disabled");
    if (url.protocol === "data:" || (url.protocol === "blob:" && url.origin === gameRoot.origin)) return url.href;
    throw new Error("External loading is disabled");
  }

  var nativeFetch = window.fetch.bind(window);
  window.localGameData = Object.freeze({
    handle: function (body, success, failure) {
      // Protocol messages are handled directly in memory; no URL or HTTP request.
      window.setTimeout(function () {
        var response = localProtocolResponse(body);
        if (response !== null) {
          if (success) success(response);
        } else if (failure) {
          failure(new Error("Local game data could not be decoded"));
        }
      }, 0);
    },
    readFile: function (path) {
      return Promise.resolve().then(function () {
        return nativeFetch(localFileUrl(path), { method: "GET" });
      }).then(function (response) {
        if (!response.ok) throw new Error("Local game file is unavailable");
        return response.arrayBuffer();
      });
    }
  });

  // Defense for engine resource loaders. It does not simulate server responses.
  var nativeOpen = window.XMLHttpRequest.prototype.open;
  window.XMLHttpRequest.prototype.open = function (method, url) {
    arguments[1] = allowedUrl(url, String(method).toUpperCase(), isArcadeScoreSdkCaller());
    return nativeOpen.apply(this, arguments);
  };

  window.fetch = function (input, init) {
    try {
      var isRequest = typeof Request === "function" && input instanceof Request;
      var url = isRequest ? input.url : String(input);
      var method = String((init && init.method) || (isRequest && input.method) || "GET").toUpperCase();
      var fixed = allowedUrl(url, method, isArcadeScoreSdkCaller());
      return nativeFetch(isRequest ? new Request(fixed, input) : fixed, init);
    } catch (error) {
      return Promise.reject(error);
    }
  };

  if (typeof window.WebSocket === "function") {
    var NativeWebSocket = window.WebSocket;
    function PlatformWebSocket(url, protocols) {
      var parsed = new URL(String(url), gameRoot);
      if (!isOfficialPlatform(parsed)) throw new Error("Game socket communication is disabled");
      return protocols === undefined ? new NativeWebSocket(url) : new NativeWebSocket(url, protocols);
    }
    PlatformWebSocket.prototype = NativeWebSocket.prototype;
    Object.setPrototypeOf(PlatformWebSocket, NativeWebSocket);
    window.WebSocket = PlatformWebSocket;
  }

  if (navigator.sendBeacon) {
    var nativeBeacon = navigator.sendBeacon.bind(navigator);
    navigator.sendBeacon = function (url, data) {
      var parsed = new URL(String(url), gameRoot);
      return isOfficialPlatform(parsed) ? nativeBeacon(url, data) : false;
    };
  }

  var nativeOpenWindow = window.open;
  window.open = function (url) {
    try { arguments[0] = allowedUrl(url, "GET"); }
    catch (error) { return null; }
    return nativeOpenWindow.apply(window, arguments);
  };
})();
