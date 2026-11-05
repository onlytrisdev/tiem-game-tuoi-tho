/**
 * Arcade avatar — atlas sidebar (Cocos load như _addProtoPic) + badge edit HTML neo canvas.
 */
(function (global) {
  'use strict';

  var AVATAR_PNG = 'res/ava-player-arcade.png';
  var AVATAR_WEBP = 'res/ava-player-arcade.webp';
  var FRAME_COLS = 4;
  var FRAME_ROWS = 3;
  var FRAME_COUNT = 12;
  var AVATAR_SIZE = 105;
  var PREFAB_AVATAR_ROOT = 115;
  var INNER_SPRITE_SCALE = 1;
  var LAYOUT_VERSION = 8;
  var FRAME_CACHE_VERSION = 6;
  var LAYOUT_VERSION_KEY = 'gv_avatar_layout_v';
  var STORAGE_KEY = 'gv_player_avatar:v2';
  var STORAGE_KEY_LEGACY = 'gv_player_avatar:v1';
  var MIGRATE_V2_FLAG = 'gv_player_avatar_migrated_v2';
  var CROP_ZOOM = 1.1;
  var ATLAS_W = 1254;
  var ATLAS_H = 1254;

  var patched = false;
  var sheetTexture = null;
  var frameCache = Object.create(null);
  var loadPromise = null;
  var layoutCaptured = Object.create(null);
  var tapBoundNodes = Object.create(null);
  var applyToken = 0;
  var badgeLoopStarted = false;
  var badgeBound = false;

  function clearFrameCache() {
    frameCache = Object.create(null);
  }

  function migrateStorageToV2Once() {
    try {
      if (global.localStorage.getItem(MIGRATE_V2_FLAG)) return;
      global.localStorage.setItem(STORAGE_KEY, JSON.stringify({ selected: 0, unlocked: [0] }));
      global.localStorage.removeItem(STORAGE_KEY_LEGACY);
      global.localStorage.setItem(MIGRATE_V2_FLAG, '1');
    } catch (e) {
      /* ignore */
    }
  }

  function readStore() {
    migrateStorageToV2Once();
    try {
      var raw = global.localStorage.getItem(STORAGE_KEY);
      if (!raw) return { selected: 0, unlocked: [0] };
      var data = JSON.parse(raw);
      if (!data || typeof data !== 'object') return { selected: 0, unlocked: [0] };
      var unlocked = Array.isArray(data.unlocked) ? data.unlocked : [0];
      unlocked = unlocked
        .map(function (n) {
          return parseInt(n, 10);
        })
        .filter(function (n) {
          return n >= 0 && n < FRAME_COUNT;
        });
      if (unlocked.indexOf(0) < 0) unlocked.unshift(0);
      var selected = parseInt(data.selected, 10);
      if (isNaN(selected) || selected < 0 || selected >= FRAME_COUNT) selected = 0;
      if (unlocked.indexOf(selected) < 0) selected = unlocked[0] || 0;
      return { selected: selected, unlocked: unlocked };
    } catch (e) {
      return { selected: 0, unlocked: [0] };
    }
  }

  function writeStore(data) {
    try {
      global.localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ selected: data.selected, unlocked: data.unlocked })
      );
    } catch (e) {
      /* ignore */
    }
  }

  function getSelectedIndex() {
    return readStore().selected;
  }

  function setSelectedIndex(index) {
    index = parseInt(index, 10);
    if (isNaN(index) || index < 0 || index >= FRAME_COUNT) return;
    var store = readStore();
    if (store.unlocked.indexOf(index) < 0) return;
    store.selected = index;
    writeStore(store);
    clearFrameCache();
  }

  function isUnlocked(index) {
    return readStore().unlocked.indexOf(parseInt(index, 10)) >= 0;
  }

  function unlockIndex(index) {
    index = parseInt(index, 10);
    if (isNaN(index) || index < 0 || index >= FRAME_COUNT) return;
    var store = readStore();
    if (store.unlocked.indexOf(index) >= 0) return;
    store.unlocked.push(index);
    store.unlocked.sort(function (a, b) {
      return a - b;
    });
    writeStore(store);
  }

  function resolveAtlasUrl(relPath) {
    try {
      var base = String(global.location.href || '').split('?')[0].split('#')[0];
      var dir = base.replace(/[^/]*$/, '');
      return dir + relPath.replace(/^\//, '');
    } catch (e) {
      return relPath;
    }
  }

  function normalizeLoaderTexture(tex) {
    if (!tex) return null;
    if (tex._texture && tex._texture.width) return tex._texture;
    return tex;
  }

  function loadSheetTexture() {
    if (sheetTexture && sheetTexture.isValid !== false) {
      return Promise.resolve(sheetTexture);
    }
    if (loadPromise) return loadPromise;

    loadPromise = new Promise(function (resolve) {
      if (!global.cc || !global.cc.loader) {
        resolve(null);
        return;
      }

      function acceptTex(tex) {
        if (!tex) return false;
        tex = normalizeLoaderTexture(tex);
        if (!tex) return false;
        sheetTexture = tex;
        if (tex.width > 0) ATLAS_W = tex.width;
        if (tex.height > 0) ATLAS_H = tex.height;
        clearFrameCache();
        return true;
      }

      function tryLoad(relPath, type, next) {
        var url = resolveAtlasUrl(relPath);
        global.cc.loader.load({ url: url, type: type }, function (err, tex) {
          if (!err && acceptTex(tex)) {
            resolve(tex);
            return;
          }
          // Fallback: plain path (some builds accept relative).
          global.cc.loader.load(relPath, function (err2, tex2) {
            if (!err2 && acceptTex(tex2)) {
              resolve(tex2);
              return;
            }
            next();
          });
        });
      }

      // Same pattern as Func._addProtoPic: { url, type: "png" }.
      tryLoad(AVATAR_PNG, 'png', function () {
        tryLoad(AVATAR_WEBP, 'png', function () {
          resolve(null);
        });
      });
    });

    return loadPromise;
  }

  function getFrameCropMetrics(atlasW, atlasH, index, cropZoom) {
    cropZoom = cropZoom || CROP_ZOOM;
    index = parseInt(index, 10);
    if (isNaN(index)) index = 0;
    var col = index % FRAME_COLS;
    var row = Math.floor(index / FRAME_COLS);
    var cellW = atlasW / FRAME_COLS;
    var cellH = atlasH / FRAME_ROWS;
    var side = Math.min(cellW, cellH);
    var cropSide = side / cropZoom;
    var insetX = (cellW - cropSide) * 0.5;
    var insetY = (cellH - cropSide) * 0.5;
    var cropSx = col * cellW + insetX;
    var cropSy = row * cellH + insetY;
    return {
      cropSide: cropSide,
      cropSx: cropSx,
      cropSy: cropSy,
      cocosX: cropSx,
      cocosY: cropSy
    };
  }

  function getFrameRect(tex, index, cropZoom) {
    var m = getFrameCropMetrics(tex.width || ATLAS_W, tex.height || ATLAS_H, index, cropZoom || CROP_ZOOM);
    return new global.cc.Rect(m.cocosX, m.cocosY, m.cropSide, m.cropSide);
  }

  function createSpriteFrameSafe(tex, rect) {
    if (!tex || !global.cc || !global.cc.SpriteFrame) return null;
    tex = normalizeLoaderTexture(tex);
    if (!tex) return null;
    try {
      return new global.cc.SpriteFrame(tex, rect);
    } catch (e0) {
      console.warn('[ArcadeAvatar] SpriteFrame(tex, rect) failed', e0);
    }
    try {
      var sf = new global.cc.SpriteFrame();
      if (typeof sf.setTexture === 'function') {
        sf.setTexture(tex, rect);
        return sf;
      }
      if (typeof sf.initWithTexture === 'function') {
        sf.initWithTexture(tex, rect);
        return sf;
      }
    } catch (e1) {
      console.warn('[ArcadeAvatar] SpriteFrame setTexture failed', e1);
    }
    return null;
  }

  function getSpriteFrameForIndex(index, cropZoom) {
    cropZoom = cropZoom || CROP_ZOOM;
    var cacheKey = FRAME_CACHE_VERSION + ':' + index + '@' + cropZoom;
    if (frameCache[cacheKey]) return frameCache[cacheKey];
    if (!sheetTexture) return null;
    var rect = getFrameRect(sheetTexture, index, cropZoom);
    var sf = createSpriteFrameSafe(sheetTexture, rect);
    if (!sf) return null;
    frameCache[cacheKey] = sf;
    return sf;
  }

  function removeAvatarMask(spriteRoot) {
    if (!spriteRoot || !global.cc) return;
    try {
      var mask = spriteRoot.getComponent(global.cc.Mask);
      if (mask) mask.enabled = false;
    } catch (e) {
      /* ignore */
    }
  }

  function hideOuterSpriteOnly(spriteRoot) {
    if (!spriteRoot || !global.cc) return;
    try {
      var frameComp = spriteRoot.getComponent(global.cc.Sprite);
      if (!frameComp) return;
      frameComp.enabled = false;
    } catch (e) {
      /* ignore */
    }
  }

  function applyToSprite(sprite, size, index) {
    if (!sprite || !sprite.node) return;
    if (index == null) index = getSelectedIndex();
    var token = ++applyToken;
    var applyIndex = index;

    loadSheetTexture().then(function (tex) {
      if (token !== applyToken) return;
      if (!tex || !sprite.isValid) return;
      var sf = getSpriteFrameForIndex(applyIndex, CROP_ZOOM);
      if (!sf) {
        console.warn('[ArcadeAvatar] atlas frame missing index=' + applyIndex);
        return;
      }
      try {
        sprite.enabled = true;
        sprite.spriteFrame = sf;
        sprite.type = global.cc.Sprite.Type.SIMPLE;
        sprite.sizeMode = global.cc.Sprite.SizeMode.CUSTOM;
        var s = size || AVATAR_SIZE;
        sprite.node.width = s;
        sprite.node.height = s;
        sprite.node.setContentSize(s, s);
        sprite.node.scaleX = 1;
        sprite.node.scaleY = 1;
        sprite.node.opacity = 255;
        sprite.node.active = true;
        sprite.node._gvAtlasApplied = true;
        if (sprite.node.parent) hideOuterSpriteOnly(sprite.node.parent);
      } catch (eApply) {
        console.warn('[ArcadeAvatar] applyToSprite failed', eApply);
      }
    });
  }

  function shouldUseArcadeAvatar() {
    return true;
  }

  function hideSidebarDecorations(sidebarSpr) {
    if (!sidebarSpr || !sidebarSpr.isValid) return;
    var sz = sidebarSpr.getChildByName('szSprite');
    if (sz) sz.active = false;
    var wSprite1 = sidebarSpr.getChildByName('wSprite1');
    if (wSprite1) {
      var szChild = wSprite1.getChildByName('szSprite');
      if (szChild) szChild.active = false;
    }
    var dotLine = sidebarSpr.getChildByName('icon_set_1');
    if (dotLine) dotLine.active = false;
  }

  function resetLayoutCacheIfNeeded(spriteRoot) {
    try {
      var stored = global.sessionStorage.getItem(LAYOUT_VERSION_KEY);
      if (String(stored) === String(LAYOUT_VERSION)) return;
      global.sessionStorage.setItem(LAYOUT_VERSION_KEY, String(LAYOUT_VERSION));
      layoutCaptured = Object.create(null);
      if (spriteRoot && spriteRoot.isValid) delete spriteRoot._gvLayoutBase;
    } catch (e) {
      /* ignore */
    }
  }

  function ensureLayoutBase(spriteRoot) {
    resetLayoutCacheIfNeeded(spriteRoot);
    if (spriteRoot._gvLayoutBase && spriteRoot._gvLayoutVersion === LAYOUT_VERSION) {
      return spriteRoot._gvLayoutBase;
    }
    spriteRoot.setScale(1);
    var w = spriteRoot.width;
    var h = spriteRoot.height;
    if (!w || w <= 0) w = PREFAB_AVATAR_ROOT;
    if (!h || h <= 0) h = PREFAB_AVATAR_ROOT;
    if (w > PREFAB_AVATAR_ROOT + 8) {
      w = PREFAB_AVATAR_ROOT;
      h = PREFAB_AVATAR_ROOT;
    }
    layoutCaptured[spriteRoot.uuid] = {
      x: spriteRoot.x,
      y: spriteRoot.y,
      width: w,
      height: h
    };
    spriteRoot._gvLayoutBase = layoutCaptured[spriteRoot.uuid];
    spriteRoot._gvLayoutVersion = LAYOUT_VERSION;
    return spriteRoot._gvLayoutBase;
  }

  function restoreFrameLayout(spriteRoot) {
    var base = ensureLayoutBase(spriteRoot);
    spriteRoot.setScale(1);
    if (base) {
      spriteRoot.setContentSize(base.width || PREFAB_AVATAR_ROOT, base.height || PREFAB_AVATAR_ROOT);
      spriteRoot.setPosition(base.x, base.y);
    }
  }

  function openAvatarPicker(ev) {
    if (ev) {
      if (ev.stopPropagation) ev.stopPropagation();
      if (ev.preventDefault) ev.preventDefault();
    }
    if (global.ArcadeAvatarPicker && typeof global.ArcadeAvatarPicker.open === 'function') {
      global.ArcadeAvatarPicker.open();
    }
  }

  function bindEditBadgeOnce() {
    if (badgeBound) return;
    var edit = document.getElementById('gv-player-avatar-edit');
    var wrap = document.getElementById('gv-player-avatar');
    if (!edit && !wrap) return;
    badgeBound = true;
    if (edit) edit.addEventListener('click', openAvatarPicker);
    if (wrap) wrap.addEventListener('click', openAvatarPicker);
  }

  function hideEditBadge() {
    var wrap = document.getElementById('gv-player-avatar');
    if (!wrap) return;
    wrap.classList.remove('show');
    wrap.style.display = 'none';
  }

  function isSetPanelShowing(setPanel) {
    if (!setPanel || !setPanel.isValid) return false;
    if (!setPanel.active) return false;
    var n = setPanel;
    while (n) {
      if (n.active === false) return false;
      n = n.parent;
    }
    return true;
  }

  /** Badge-only: neo theo canvas, không world→CSS. */
  function canvasBadgeRect() {
    var canvas = (global.cc && global.cc.game && global.cc.game.canvas) || document.getElementById('GameCanvas');
    if (!canvas) return null;
    var box = canvas.getBoundingClientRect();
    if (!(box.width > 20) || !(box.height > 20)) return null;
    var designW = 720;
    try {
      var vis = global.cc.view.getVisibleSize();
      if (vis && vis.width > 0) designW = vis.width;
    } catch (e) {
      /* ignore */
    }
    var s = box.width / designW;
    var size = Math.max(48, PREFAB_AVATAR_ROOT * s);
    return {
      left: box.left + 88 * s,
      top: box.top + 72 * s,
      width: size,
      height: size
    };
  }

  function syncEditBadge(setPanel) {
    bindEditBadgeOnce();
    var wrap = document.getElementById('gv-player-avatar');
    if (!wrap) return false;
    if (!isSetPanelShowing(setPanel)) {
      hideEditBadge();
      return false;
    }
    var rect = canvasBadgeRect();
    if (!rect) {
      hideEditBadge();
      return false;
    }
    wrap.style.left = Math.round(rect.left) + 'px';
    wrap.style.top = Math.round(rect.top) + 'px';
    wrap.style.width = Math.round(rect.width) + 'px';
    wrap.style.height = Math.round(rect.height) + 'px';
    wrap.style.display = 'block';
    wrap.classList.add('show');
    // Face slot transparent — Cocos draws the avatar underneath.
    var face = document.getElementById('gv-player-avatar-face');
    if (face) {
      face.style.backgroundImage = 'none';
      face.style.backgroundColor = 'transparent';
      face.style.boxShadow = 'none';
    }
    return true;
  }

  function findSetPanelAndAvatar() {
    if (!global.cc || !global.cc.director) return null;
    var scene = global.cc.director.getScene();
    if (!scene) return null;
    var setPanel = findNodeByName(scene, 'set_panel');
    if (!setPanel) return null;
    var spr = setPanel.getChildByName('Sprite');
    var wSprite1 = spr && spr.getChildByName('wSprite1');
    return { setPanel: setPanel, spr: spr, wSprite1: wSprite1 };
  }

  function startBadgeLoop() {
    if (badgeLoopStarted) return;
    badgeLoopStarted = true;
    function loop() {
      try {
        var found = findSetPanelAndAvatar();
        if (found && found.setPanel) syncEditBadge(found.setPanel);
        else hideEditBadge();
      } catch (e) {
        /* ignore */
      }
      if (typeof requestAnimationFrame === 'function') requestAnimationFrame(loop);
      else setTimeout(loop, 50);
    }
    loop();
  }

  function patchSkipProtoPicOnAvatar() {
    if (!global.Func || typeof global.Func._addProtoPic !== 'function') return;
    if (global.Func.__gvSkipAvatarProto) return;
    global.Func._addProtoPic = function (url, sprite, w, h, cb) {
      try {
        var n = sprite && sprite.node;
        if (n && n.parent && n.parent.name === 'wSprite1') {
          n.active = true;
          if (sprite) applyToSprite(sprite, w || AVATAR_SIZE, getSelectedIndex());
          if (typeof cb === 'function') cb();
          return;
        }
      } catch (e) {
        /* ignore */
      }
    };
    global.Func.__gvSkipAvatarProto = true;
  }

  function bindAvatarTap(spriteRoot) {
    if (!spriteRoot || !spriteRoot.isValid || !global.cc) return;
    var id = spriteRoot.uuid;
    if (tapBoundNodes[id]) return;
    tapBoundNodes[id] = true;

    function onTap(ev) {
      if (ev && ev.stopPropagation) ev.stopPropagation();
      openAvatarPicker(ev);
    }

    try {
      var btn = spriteRoot.getComponent(global.cc.Button);
      if (!btn) {
        btn = spriteRoot.addComponent(global.cc.Button);
        btn.transition = global.cc.Button.Transition.NONE;
        btn.target = spriteRoot;
      }
    } catch (be) {
      /* ignore */
    }

    spriteRoot.on(global.cc.Node.EventType.TOUCH_END, onTap);
    var inner = spriteRoot.getChildByName('Sprite');
    if (inner) inner.on(global.cc.Node.EventType.TOUCH_END, onTap);
  }

  function scheduleBeatProtoPic(spriteRoot) {
    var gen = (spriteRoot._gvBeatGen || 0) + 1;
    spriteRoot._gvBeatGen = gen;
    [80, 250, 700].forEach(function (ms) {
      setTimeout(function () {
        if (!spriteRoot || !spriteRoot.isValid || spriteRoot._gvBeatGen !== gen) return;
        var inner = spriteRoot.getChildByName('Sprite');
        if (!inner || !inner.isValid) return;
        inner.active = true;
        inner.opacity = 255;
        var comp = inner.getComponent(global.cc.Sprite);
        if (comp) applyToSprite(comp, AVATAR_SIZE, getSelectedIndex());
      }, ms);
    });
  }

  function applyFromSetPanelRoot(spriteRoot, beatProto) {
    if (!spriteRoot || !spriteRoot.isValid) return;
    var spriteNode = spriteRoot.getChildByName('Sprite');
    if (!spriteNode) return;
    var comp = spriteNode.getComponent(global.cc.Sprite);
    if (!comp) return;

    spriteRoot.active = true;
    restoreFrameLayout(spriteRoot);
    removeAvatarMask(spriteRoot);

    spriteNode.active = true;
    spriteNode.opacity = 255;
    spriteNode.setContentSize(AVATAR_SIZE, AVATAR_SIZE);
    spriteNode.width = AVATAR_SIZE;
    spriteNode.height = AVATAR_SIZE;
    spriteNode.setScale(INNER_SPRITE_SCALE);
    spriteNode.setPosition(0, 0);

    applyToSprite(comp, AVATAR_SIZE, getSelectedIndex());
    bindAvatarTap(spriteRoot);
    patchSkipProtoPicOnAvatar();
    startBadgeLoop();

    var found = findSetPanelAndAvatar();
    if (found) syncEditBadge(found.setPanel);

    if (beatProto) scheduleBeatProtoPic(spriteRoot);
  }

  function applySidebarFromScene() {
    if (!shouldUseArcadeAvatar()) return;
    if (!global.cc || !global.cc.director) return;
    try {
      var scene = global.cc.director.getScene();
      if (!scene) return;
      var setPanel = findNodeByName(scene, 'set_panel');
      if (!setPanel) return;
      var spr = setPanel.getChildByName('Sprite');
      if (!spr) return;
      hideSidebarDecorations(spr);
      if (global.ArcadeProfile && typeof global.ArcadeProfile.applySidebarLabels === 'function') {
        global.ArcadeProfile.applySidebarLabels(spr);
      }
      var wSprite1 = spr.getChildByName('wSprite1');
      if (wSprite1) applyFromSetPanelRoot(wSprite1);
    } catch (e) {
      /* ignore */
    }
  }

  function findNodeByName(root, name) {
    if (!root) return null;
    if (root.name === name) return root;
    var ch = root.children;
    if (!ch) return null;
    for (var i = 0; i < ch.length; i++) {
      var found = findNodeByName(ch[i], name);
      if (found) return found;
    }
    return null;
  }

  function patchIndexHelper() {
    if (patched) return true;
    if (!global.cc || !global.cc.js) return false;
    var Cls = global.cc.js.getClassByName('IndexHelper');
    if (!Cls || !Cls.prototype) return false;

    var proto = Cls.prototype;
    var oldReload = proto.reloadSetWindow;
    proto.reloadSetWindow = function () {
      if (typeof oldReload === 'function') oldReload.call(this);
      if (!shouldUseArcadeAvatar()) return;
      try {
        var owner = this.owner;
        if (!owner || !owner.node) return;
        var setPanel = owner.node.getChildByName('set_panel');
        if (!setPanel) return;
        var spr = setPanel.getChildByName('Sprite');
        if (!spr) return;
        hideSidebarDecorations(spr);
        if (global.ArcadeProfile && typeof global.ArcadeProfile.applySidebarLabels === 'function') {
          global.ArcadeProfile.applySidebarLabels(spr);
        }
        var wSprite1 = spr.getChildByName('wSprite1');
        if (wSprite1) {
          var inner = wSprite1.getChildByName('Sprite');
          if (inner) {
            inner.active = true;
            inner.opacity = 255;
          }
          applyFromSetPanelRoot(wSprite1, true);
        }
      } catch (e) {
        console.warn('[ArcadeAvatar] reloadSetWindow patch failed', e);
      }
    };

    patched = true;
    return true;
  }

  function startWatcher() {
    patchIndexHelper();
    patchSkipProtoPicOnAvatar();
    startBadgeLoop();
    var n = 0;
    var timer = setInterval(function () {
      n++;
      patchIndexHelper();
      patchSkipProtoPicOnAvatar();
      if (global.FileData && global.Data) applySidebarFromScene();
      if (patched && n > 120) {
        clearInterval(timer);
        setInterval(function () {
          if (global.FileData && global.Data) applySidebarFromScene();
        }, 2000);
      }
    }, 400);
  }

  function bootWhenCocosReady() {
    if (global.cc && global.cc.loader) {
      loadSheetTexture();
      startWatcher();
      return;
    }
    var attempts = 0;
    var t = setInterval(function () {
      attempts++;
      if (global.cc && global.cc.loader) {
        clearInterval(t);
        loadSheetTexture();
        startWatcher();
      } else if (attempts > 200) {
        clearInterval(t);
      }
    }, 300);
  }

  function getAtlasBackgroundPosition(index, displayPx, cropZoom) {
    var m = getFrameCropMetrics(ATLAS_W, ATLAS_H, index, cropZoom || CROP_ZOOM);
    var scale = displayPx / m.cropSide;
    return {
      backgroundSize: ATLAS_W * scale + 'px ' + ATLAS_H * scale + 'px',
      backgroundPosition: -m.cropSx * scale + 'px ' + -m.cropSy * scale + 'px'
    };
  }

  function setAtlasSize(w, h) {
    w = parseInt(w, 10);
    h = parseInt(h, 10);
    if (!(w > 0) || !(h > 0)) return;
    ATLAS_W = w;
    ATLAS_H = h;
    clearFrameCache();
  }

  bootWhenCocosReady();

  global.ArcadeAvatar = {
    applyNow: applySidebarFromScene,
    getSelectedIndex: getSelectedIndex,
    setSelectedIndex: setSelectedIndex,
    isUnlocked: isUnlocked,
    unlockIndex: unlockIndex,
    getFrameIndex: getSelectedIndex,
    getAtlasBackgroundPosition: getAtlasBackgroundPosition,
    setAtlasSize: setAtlasSize,
    ATLAS_URL: AVATAR_PNG
  };
})(window);
