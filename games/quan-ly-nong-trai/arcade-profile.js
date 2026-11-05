/**

 * Sidebar profile — tên hiển thị Arcade (userInfo / portal / JWT), bỏ dòng ID.

 * Offline (test.game / localhost): không gọi API portal; "Khách" là resolved.

 */

(function (global) {

  'use strict';



  var GET_USER_URL = 'https://localhost/games/services/getuserinfo.aspx';

  var USER_INFO_URLS = ['/account/userInfo', 'https://localhost/account/userInfo'];

  var CACHE_KEY = 'gv_display_name_v4';

  var CACHE_TS_KEY = 'gv_display_name_v4_ts';

  var CACHE_MS = 5 * 60 * 1000;

  var FALLBACK_NAME = 'Khách';

  var RESOLVE_RETRY_MS = 350;

  var RESOLVE_RETRY_MAX = 6;

  var OFFLINE_RESOLVED_KEY = 'gv_display_name_v4_offline';



  var DISPLAY_NAME_KEYS = [

    'DisplayName',

    'displayName',

    'displayname',

    'FullName',

    'fullName',

    'fullname',

    'NickName',

    'nickName',

    'nickname',

    'Name',

    'name'

  ];

  var LOGIN_NAME_KEYS = ['UserName', 'Username', 'userName', 'username'];

  var DISPLAY_NAME_XML_TAGS = [

    'displayname',

    'displayName',

    'nickname',

    'nickName',

    'fullname',

    'fullName',

    'name'

  ];

  var LABEL_GAP_BELOW_AVATAR = 16;

  var LABEL2_EXTRA_DROP = 28;



  var userInfoInflight = null;

  var displayNameInflight = null;

  var labelsResolvedOnce = false;



  function readQs(search) {

    try {

      return new URLSearchParams(search || '');

    } catch (e) {

      return new URLSearchParams();

    }

  }



  function getTokenFromUrl() {

    if (global.ArcadeScore && typeof global.ArcadeScore.ensureCredentialsOnLocation === 'function') {

      try {

        var cred = global.ArcadeScore.ensureCredentialsOnLocation();

        if (cred && cred.token) return cred.token;

      } catch (e0) {

        /* ignore */

      }

    }

    var token = readQs(global.location.search).get('token') || '';

    if (!token && global.parent !== global) {

      try {

        token = readQs(global.parent.location.search).get('token') || '';

      } catch (e) {

        /* cross-origin */

      }

    }

    return token;

  }



  function hostLooksLikeArcadePortal() {

    try {

      var h = String((global.location && global.location.hostname) || '').toLowerCase();

      if (h === 'localhost' || h === 'www.localhost') return true;

      if (h === 'e.localhost' || h.indexOf('.localhost') >= 0) return true;

      return false;

    } catch (e) {

      return false;

    }

  }



  /** test.game / localhost / IP — không gọi portal userInfo / getuserinfo. */

  function isOfflineDisplayHost() {

    try {

      var h = String((global.location && global.location.hostname) || '').toLowerCase();

      if (!h || h === 'localhost' || h === '127.0.0.1') return true;

      if (h === 'test.game' || h.indexOf('test.game') >= 0) return true;

      if (/^\d{1,3}(\.\d{1,3}){3}$/.test(h)) return true;

      if (hostLooksLikeArcadePortal()) return false;

      return true;

    } catch (e) {

      return true;

    }

  }



  function normalizeDisplayName(raw) {

    var name = String(raw || '').replace(/\s+/g, ' ').trim();

    if (!name) return '';

    var lower = name.toLowerCase();

    if (lower === 'đăng nhập' || lower === 'dang nhap' || lower === 'login') return '';

    // "Khách" từ portal CTA → bỏ; FALLBACK_NAME cố ý dùng riêng.

    if (lower === 'khách' || lower === 'khach') return '';

    return name;

  }



  function isLoginUsernameKey(key) {

    return LOGIN_NAME_KEYS.indexOf(key) >= 0;

  }



  function readDisplayNameFromDoc(doc) {

    if (!doc || !doc.querySelector) return '';

    var nodes = doc.querySelectorAll('.user-info .user-name, .account .user-name, .header .user-name');

    for (var i = 0; i < nodes.length; i++) {

      var name = normalizeDisplayName(nodes[i].textContent);

      if (name) return name;

    }

    return '';

  }



  function readDisplayNameFromPortalDom() {

    var seen = [];

    function tryWin(win) {

      if (!win || seen.indexOf(win) >= 0) return '';

      seen.push(win);

      try {

        return readDisplayNameFromDoc(win.document);

      } catch (e) {

        return '';

      }

    }

    return tryWin(global) || tryWin(global.parent) || tryWin(global.top);

  }



  function decodeJwtPayload(token) {

    try {

      var parts = String(token || '').split('.');

      if (parts.length < 2) return null;

      var payload = parts[1].replace(/-/g, '+').replace(/_/g, '/');

      var json = decodeURIComponent(

        global.atob(payload)

          .split('')

          .map(function (c) {

            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);

          })

          .join('')

      );

      return JSON.parse(json);

    } catch (e) {

      return null;

    }

  }



  function isRealArcadeToken(token) {

    if (!token || token.indexOf('gv-local-') === 0 || token.indexOf('gv_local_') === 0) return false;

    return String(token).split('.').length >= 2;

  }



  function readOfflineResolvedFlag() {

    try {

      return global.sessionStorage.getItem(OFFLINE_RESOLVED_KEY) === '1';

    } catch (e) {

      return false;

    }

  }



  function markOfflineResolved() {

    try {

      global.sessionStorage.setItem(OFFLINE_RESOLVED_KEY, '1');

      global.sessionStorage.setItem(CACHE_KEY, FALLBACK_NAME);

      global.sessionStorage.setItem(CACHE_TS_KEY, String(Date.now()));

    } catch (e) {

      /* ignore */

    }

  }



  function readCache() {

    try {

      var ts = parseInt(global.sessionStorage.getItem(CACHE_TS_KEY), 10) || 0;

      if (Date.now() - ts > CACHE_MS) return '';

      var raw = global.sessionStorage.getItem(CACHE_KEY) || '';

      if (raw === FALLBACK_NAME && (isOfflineDisplayHost() || readOfflineResolvedFlag())) {

        return FALLBACK_NAME;

      }

      return normalizeDisplayName(raw);

    } catch (e) {

      return '';

    }

  }



  function writeCache(name) {

    name = normalizeDisplayName(name);

    if (!name) return;

    try {

      global.sessionStorage.setItem(CACHE_KEY, name);

      global.sessionStorage.setItem(CACHE_TS_KEY, String(Date.now()));

    } catch (e) {

      /* ignore */

    }

  }



  function parseXmlTag(xmlText, tagName) {

    try {

      var xml = new DOMParser().parseFromString('<r>' + xmlText + '</r>', 'text/xml');

      var node = xml.querySelector(tagName);

      return node ? (node.textContent || '').trim() : '';

    } catch (e) {

      return '';

    }

  }



  function pickDisplayNameFromObject(obj) {

    if (!obj || typeof obj !== 'object') return '';

    for (var i = 0; i < DISPLAY_NAME_KEYS.length; i++) {

      var key = DISPLAY_NAME_KEYS[i];

      if (isLoginUsernameKey(key)) continue;

      if (obj[key] != null && String(obj[key]).trim()) {

        var name = normalizeDisplayName(obj[key]);

        if (name) return name;

      }

    }

    return '';

  }



  function pickDisplayNameFromXml(xmlText) {

    for (var i = 0; i < DISPLAY_NAME_XML_TAGS.length; i++) {

      var name = normalizeDisplayName(parseXmlTag(xmlText, DISPLAY_NAME_XML_TAGS[i]));

      if (name) return name;

    }

    return '';

  }



  function getJson(url) {

    return new Promise(function (resolve) {

      var xhr = new XMLHttpRequest();

      xhr.withCredentials = true;

      xhr.open('GET', url, true);

      xhr.onload = function () {

        if (xhr.status < 200 || xhr.status >= 300) {

          resolve(null);

          return;

        }

        try {

          resolve(JSON.parse(xhr.responseText || 'null'));

        } catch (e) {

          resolve(null);

        }

      };

      xhr.onerror = function () {

        resolve(null);

      };

      xhr.send();

    });

  }



  function fetchUserInfoJson() {

    if (isOfflineDisplayHost()) return Promise.resolve(null);

    if (userInfoInflight) return userInfoInflight;

    userInfoInflight = getJson(USER_INFO_URLS[0]).then(function (first) {

      if (first && typeof first === 'object') return first;

      return getJson(USER_INFO_URLS[1]);

    }).then(function (data) {

      userInfoInflight = null;

      return data && typeof data === 'object' ? data : null;

    }, function () {

      userInfoInflight = null;

      return null;

    });

    return userInfoInflight;

  }



  function fetchDisplayNameFromGetUserInfo() {

    if (isOfflineDisplayHost()) return Promise.resolve('');

    return new Promise(function (resolve) {

      var xhr = new XMLHttpRequest();

      xhr.withCredentials = true;

      xhr.open('POST', GET_USER_URL, true);

      xhr.onload = function () {

        resolve(pickDisplayNameFromXml(xhr.responseText || ''));

      };

      xhr.onerror = function () {

        resolve('');

      };

      xhr.send();

    });

  }



  function readWxLoginNickOffline() {

    try {

      if (global.WxLogin && global.WxLogin.nickName) {

        return normalizeDisplayName(global.WxLogin.nickName);

      }

    } catch (e) {

      /* ignore */

    }

    return '';

  }



  function resolveOfflineDisplayName() {

    var nick = readWxLoginNickOffline();

    if (nick) {

      writeCache(nick);

      try {

        global.sessionStorage.setItem(OFFLINE_RESOLVED_KEY, '1');

      } catch (e0) {

        /* ignore */

      }

      return nick;

    }

    markOfflineResolved();

    return FALLBACK_NAME;

  }



  function resolveArcadeDisplayName() {

    var cached = readCache();

    if (cached) return Promise.resolve(cached);



    if (isOfflineDisplayHost()) {

      return Promise.resolve(resolveOfflineDisplayName());

    }



    if (displayNameInflight) return displayNameInflight;



    displayNameInflight = Promise.resolve()

      .then(function () {

        var fromPortal = readDisplayNameFromPortalDom();

        if (fromPortal) return fromPortal;



        var token = getTokenFromUrl();

        if (isRealArcadeToken(token)) {

          var fromJwt = pickDisplayNameFromObject(decodeJwtPayload(token));

          if (fromJwt) return fromJwt;

        }



        return fetchUserInfoJson().then(function (info) {

          var fromInfo = pickDisplayNameFromObject(info);

          if (fromInfo) return fromInfo;

          return fetchDisplayNameFromGetUserInfo();

        });

      })

      .then(function (name) {

        displayNameInflight = null;

        name = normalizeDisplayName(name);

        if (name) {

          writeCache(name);

          return name;

        }

        markOfflineResolved();

        return FALLBACK_NAME;

      }, function () {

        displayNameInflight = null;

        markOfflineResolved();

        return FALLBACK_NAME;

      });



    return displayNameInflight;

  }



  function nodeBottomY(node) {

    var h = node.height || 0;

    var anchorY = typeof node.anchorY === 'number' ? node.anchorY : 0.5;

    return node.y - h * anchorY;

  }



  function layoutLabelsBelowAvatar(sidebarSpriteNode, wSprite1) {

    if (!sidebarSpriteNode || !wSprite1 || !global.cc) return;

    var label1Node = sidebarSpriteNode.getChildByName('Label1');

    var label2Node = sidebarSpriteNode.getChildByName('Label2');

    if (!label1Node || !label2Node) return;



    var avatarBottom = nodeBottomY(wSprite1);

    var label1H = label1Node.height || 24;

    var label1AnchorY = typeof label1Node.anchorY === 'number' ? label1Node.anchorY : 0.5;



    label1Node.y = avatarBottom - LABEL_GAP_BELOW_AVATAR - label1H * (1 - label1AnchorY);



    var label2AnchorY = typeof label2Node.anchorY === 'number' ? label2Node.anchorY : 0.5;

    var label2H = label2Node.height || 24;

    label2Node.y = label1Node.y - LABEL2_EXTRA_DROP - label2H * (1 - label2AnchorY);

  }



  function styleDisplayNameLabel(label2, label2Node) {

    if (!label2 || !label2Node || !global.cc) return;

    try {

      if (global.cc.Label.Overflow) {

        label2.overflow = global.cc.Label.Overflow.NONE;

      }

      label2.enableWrapText = false;

      if (global.cc.Label.HorizontalAlign) {

        label2.horizontalAlign = global.cc.Label.HorizontalAlign.CENTER;

      }

      label2Node.width = 220;

      label2Node.setContentSize(220, label2Node.height || 32);

    } catch (e) {

      /* ignore */

    }

  }



  function setLabel2Name(label2, label2Node, name) {

    if (!label2Node || !label2Node.isValid) return;

    label2.string = String(name || FALLBACK_NAME);

    styleDisplayNameLabel(label2, label2Node);

  }



  function isPlaceholderLabel2(raw) {

    var s = String(raw || '').replace(/\s+/g, ' ').trim();

    if (!s) return true;

    if (/^ID\s*:/i.test(s)) return true;

    return false;

  }



  function hasResolvedDisplayName(raw) {

    var s = String(raw || '').replace(/\s+/g, ' ').trim();

    if (!s || /^ID\s*:/i.test(s)) return false;

    if (s === FALLBACK_NAME) {

      return isOfflineDisplayHost() || readOfflineResolvedFlag();

    }

    return !!normalizeDisplayName(s);

  }



  function applySidebarLabels(sidebarSpriteNode) {

    if (!sidebarSpriteNode || !global.cc) return;

    var label1Node = sidebarSpriteNode.getChildByName('Label1');

    var label2Node = sidebarSpriteNode.getChildByName('Label2');

    if (!label1Node || !label2Node) return;



    var label1 = label1Node.getComponent(global.cc.Label);

    var label2 = label2Node.getComponent(global.cc.Label);

    if (!label1 || !label2) return;



    label1.string = 'Nhân vật:';

    if (global.cc.Label.Overflow && label1.overflow !== undefined) {

      label1.overflow = global.cc.Label.Overflow.NONE;

    }

    label1.enableWrapText = false;

    label1Node.width = 220;

    label1Node.setContentSize(220, label1Node.height || 38);

    label2.active = true;

    styleDisplayNameLabel(label2, label2Node);



    if (labelsResolvedOnce && hasResolvedDisplayName(label2.string)) return;

    if (hasResolvedDisplayName(label2.string)) {

      labelsResolvedOnce = true;

      return;

    }



    if (isOfflineDisplayHost()) {

      setLabel2Name(label2, label2Node, resolveOfflineDisplayName());

      labelsResolvedOnce = true;

      return;

    }



    if (isPlaceholderLabel2(label2.string)) {

      setLabel2Name(label2, label2Node, FALLBACK_NAME);

    }



    var attempt = 0;

    function tryResolve() {

      resolveArcadeDisplayName().then(function (name) {

        if (!label2Node.isValid) return;

        var resolved = normalizeDisplayName(name);

        if (resolved) {

          setLabel2Name(label2, label2Node, resolved);

          labelsResolvedOnce = true;

          return;

        }

        setLabel2Name(label2, label2Node, FALLBACK_NAME);

        markOfflineResolved();

        labelsResolvedOnce = true;

        attempt++;

        if (attempt < RESOLVE_RETRY_MAX && !readOfflineResolvedFlag()) {

          labelsResolvedOnce = false;

          setTimeout(tryResolve, RESOLVE_RETRY_MS);

        }

      });

    }

    tryResolve();

  }



  global.ArcadeProfile = {

    resolveArcadeDisplayName: resolveArcadeDisplayName,

    applySidebarLabels: applySidebarLabels,

    layoutLabelsBelowAvatar: layoutLabelsBelowAvatar,

    isOfflineDisplayHost: isOfflineDisplayHost

  };

})(window);


