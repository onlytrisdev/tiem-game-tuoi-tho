/**

 * Bottom sheet chọn avatar — carousel ngang, preview + nút Mở khóa (QC).

 */

(function (global) {

  'use strict';



  var SHEET_ID = 'gv-avatar-sheet';

  var OVERLAY_ID = 'gv-avatar-overlay';

  var PREVIEW_ID = 'gv-avatar-preview';

  var UNLOCK_ID = 'gv-avatar-unlock';

  var ACTION_ID = 'gv-avatar-action';

  var ACTION_HINT_ID = 'gv-avatar-action-hint';

  var TRACK_ID = 'gv-avatar-track';

  var ATLAS_URL = 'res/ava-player-arcade.png';

  var COLS = 4;

  var ROWS = 3;

  var ATLAS_W = 1254;

  var ATLAS_H = 1254;

  var TRACK_CROP_ZOOM = 1.1;

  var PREVIEW_CROP_ZOOM = 1.1;

  var TRACK_FACE_PX = 72;

  var PREVIEW_PX = 130;

  var pickerOpen = false;

  var previewIndex = 0;



  function $(id) {

    return document.getElementById(id);

  }



  function pauseGameAudio() {

    try {

      if (global.cc && global.cc.game && typeof global.cc.game.pause === 'function') {

        global.cc.game.pause();

      }

    } catch (e) {

      /* ignore */

    }

    try {

      if (global.IndexScene && global.IndexScene.bgMusicId > 0 && global.cc) {

        global.cc.audioEngine.pause(global.IndexScene.bgMusicId);

      }

    } catch (e2) {

      /* ignore */

    }

  }



  function resumeGameAudio() {

    try {

      if (global.cc && global.cc.game && typeof global.cc.game.resume === 'function') {

        global.cc.game.resume();

      }

    } catch (e) {

      /* ignore */

    }

    try {

      if (global.IndexScene && global.IndexScene.bgMusicId > 0 && global.cc) {

        global.cc.audioEngine.resume(global.IndexScene.bgMusicId);

      }

    } catch (e2) {

      /* ignore */

    }

  }



  function cellMetrics(cropZoom) {

    var cellW = ATLAS_W / COLS;

    var cellH = ATLAS_H / ROWS;

    var side = Math.min(cellW, cellH);

    var cropSide = side / cropZoom;

    var insetX = (cellW - cropSide) * 0.5;

    var insetY = (cellH - cropSide) * 0.5;

    return { cellW: cellW, cellH: cellH, side: side, cropSide: cropSide, insetX: insetX, insetY: insetY };

  }



  function applyAtlasToEl(el, index, displayPx, cropZoom) {

    if (!el) return;

    cropZoom = cropZoom || PREVIEW_CROP_ZOOM;

    var atlasUrl = ATLAS_URL;

    if (global.ArcadeAvatar && global.ArcadeAvatar.ATLAS_URL) {

      atlasUrl = global.ArcadeAvatar.ATLAS_URL;

    }

    if (global.ArcadeAvatar && typeof global.ArcadeAvatar.getAtlasBackgroundPosition === 'function') {

      var bg = global.ArcadeAvatar.getAtlasBackgroundPosition(index, displayPx, cropZoom);

      el.style.backgroundImage = 'url("' + atlasUrl + '")';

      el.style.backgroundRepeat = 'no-repeat';

      el.style.backgroundSize = bg.backgroundSize;

      el.style.backgroundPosition = bg.backgroundPosition;

      return;

    }

    var m = cellMetrics(cropZoom);

    var col = index % COLS;

    var row = Math.floor(index / COLS);

    var cropSx = col * m.cellW + m.insetX;

    var cropSy = row * m.cellH + m.insetY;

    var scale = displayPx / m.cropSide;

    el.style.backgroundImage = 'url("' + atlasUrl + '")';

    el.style.backgroundRepeat = 'no-repeat';

    el.style.backgroundSize = ATLAS_W * scale + 'px ' + ATLAS_H * scale + 'px';

    el.style.backgroundPosition = -cropSx * scale + 'px ' + -cropSy * scale + 'px';

  }



  function syncAtlasNaturalSize(done) {

    var atlasUrl = ATLAS_URL;

    if (global.ArcadeAvatar && global.ArcadeAvatar.ATLAS_URL) {

      atlasUrl = global.ArcadeAvatar.ATLAS_URL;

    }

    var img = new Image();

    img.onload = function () {

      var w = img.naturalWidth || img.width;

      var h = img.naturalHeight || img.height;

      if (w > 0 && h > 0) {

        ATLAS_W = w;

        ATLAS_H = h;

        if (global.ArcadeAvatar && typeof global.ArcadeAvatar.setAtlasSize === 'function') {

          global.ArcadeAvatar.setAtlasSize(w, h);

        }

      }

      if (typeof done === 'function') done();

    };

    img.onerror = function () {

      if (typeof done === 'function') done();

    };

    img.src = atlasUrl;

  }



  function refreshAllFaces() {

    var track = $(TRACK_ID);

    if (!track) return;

    var items = track.querySelectorAll('.gv-avatar-item');

    for (var i = 0; i < items.length; i++) {

      var idx = parseInt(items[i].getAttribute('data-index'), 10);

      var face = items[i].querySelector('.gv-avatar-face');

      if (face && !isNaN(idx)) {

        applyAtlasToEl(face, idx, TRACK_FACE_PX, TRACK_CROP_ZOOM);

      }

    }

  }



  function refreshPreview(index) {

    var preview = $(PREVIEW_ID);

    applyAtlasToEl(preview, index, PREVIEW_PX, PREVIEW_CROP_ZOOM);

  }



  function refreshTrackState() {

    if (!global.ArcadeAvatar) return;

    var track = $(TRACK_ID);

    if (!track) return;

    var equipped = global.ArcadeAvatar.getSelectedIndex();

    var items = track.querySelectorAll('.gv-avatar-item');

    for (var i = 0; i < items.length; i++) {

      var idx = parseInt(items[i].getAttribute('data-index'), 10);

      items[i].classList.toggle('gv-selected', idx === equipped);

      items[i].classList.toggle('gv-preview', idx === previewIndex);

      var locked = !global.ArcadeAvatar.isUnlocked(idx);

      items[i].classList.toggle('gv-locked', locked);

    }

  }



  function hasAnyLockedAvatar() {

    if (!global.ArcadeAvatar) return false;

    for (var i = 0; i < 12; i++) {

      if (!global.ArcadeAvatar.isUnlocked(i)) return true;

    }

    return false;

  }



  function setCanvasPointerBlocked(block) {

    var canvas = document.getElementById('GameCanvas');

    if (!canvas) return;

    if (block) {

      canvas.setAttribute('data-gv-picker-block', '1');

      canvas.style.pointerEvents = 'none';

    } else {

      canvas.removeAttribute('data-gv-picker-block');

      canvas.style.pointerEvents = '';

    }

  }



  function showHint(hint, text) {

    if (!hint) return;

    if (text) hint.textContent = text;

    hint.hidden = false;

    hint.removeAttribute('hidden');

  }



  function hideHint(hint) {

    if (!hint) return;

    hint.hidden = true;

    hint.setAttribute('hidden', '');

  }



  function updateUnlockButton() {

    var btn = $(UNLOCK_ID);

    var hint = $(ACTION_HINT_ID);

    if (!btn || !global.ArcadeAvatar) return;

    var locked = !global.ArcadeAvatar.isUnlocked(previewIndex);

    var equipped = global.ArcadeAvatar.getSelectedIndex();

    btn.classList.remove('gv-mode-unlock', 'gv-mode-select', 'gv-mode-current');

    hideHint(hint);

    btn.hidden = false;

    btn.removeAttribute('hidden');

    btn.disabled = false;

    if (locked) {

      btn.textContent = 'Mở khóa';

      btn.classList.add('gv-mode-unlock');

    } else if (previewIndex === equipped) {

      btn.textContent = 'Đã chọn';

      btn.classList.add('gv-mode-current');

      btn.disabled = true;

    } else {

      btn.textContent = 'Chọn';

      btn.classList.add('gv-mode-select');

    }

  }



  function setPreviewIndex(index) {

    previewIndex = index;

    refreshPreview(index);

    refreshTrackState();

    updateUnlockButton();

    var track = $(TRACK_ID);

    if (track) {

      var item = track.querySelector('.gv-avatar-item[data-index="' + index + '"]');

      if (item && item.scrollIntoView) {

        item.scrollIntoView({ inline: 'center', block: 'nearest', behavior: 'smooth' });

      }

    }

  }



  function buildTrackIfNeeded() {

    var track = $(TRACK_ID);

    if (!track) return;

    if (track.childElementCount >= 12) {

      refreshAllFaces();

      return;

    }

    track.innerHTML = '';

    for (var i = 0; i < 12; i++) {

      (function (index) {

        var btn = document.createElement('button');

        btn.type = 'button';

        btn.className = 'gv-avatar-item';

        btn.setAttribute('data-index', String(index));

        var face = document.createElement('span');

        face.className = 'gv-avatar-face';

        applyAtlasToEl(face, index, TRACK_FACE_PX, TRACK_CROP_ZOOM);

        btn.appendChild(face);

        var lock = document.createElement('span');

        lock.className = 'gv-avatar-lock';

        lock.setAttribute('aria-hidden', 'true');

        btn.appendChild(lock);

        var check = document.createElement('span');

        check.className = 'gv-avatar-check';

        check.textContent = '✓';

        btn.appendChild(check);

        btn.addEventListener('pointerup', function (ev) {

          if (ev.pointerType === 'mouse' && ev.button !== 0) return;

          if (track && track._gvIsDragging) return;

          onItemClick(index);

        });

        btn.addEventListener('click', function (ev) {

          ev.preventDefault();

          ev.stopPropagation();

        });

        track.appendChild(btn);

      })(i);

    }

  }



  function applyUnlockSuccess() {

    if (!global.ArcadeAvatar) return;

    global.ArcadeAvatar.unlockIndex(previewIndex);

    refreshPreview(previewIndex);

    refreshTrackState();

    updateUnlockButton();

  }



  function isAdsDisabled() {

    try {

      var qs = new URLSearchParams(global.location.search || '');

      if (qs.get('ads') === '0') return true;

      if (global.parent !== global) {

        try {

          var pqs = new URLSearchParams(global.parent.location.search || '');

          if (pqs.get('ads') === '0') return true;

        } catch (e) {

          /* cross-origin */

        }

      }

    } catch (e2) {

      /* ignore */

    }

    return false;

  }



  function toastAds(msg) {

    try {

      if (global.Game && typeof global.Game.showAlertBar === 'function') {

        global.Game.showAlertBar(msg);

        return;

      }

    } catch (e) {

      /* ignore */

    }

    try {

      console.warn('[ArcadeAvatarPicker]', msg);

    } catch (e2) {

      /* ignore */

    }

  }



  function onUnlockClick() {

    if (!global.ArcadeAvatar) return;

    if (global.ArcadeAvatar.isUnlocked(previewIndex)) {

      var equipped = global.ArcadeAvatar.getSelectedIndex();

      if (previewIndex === equipped) {

        return;

      }

      global.ArcadeAvatar.setSelectedIndex(previewIndex);

      global.ArcadeAvatar.applyNow();

      refreshTrackState();

      updateUnlockButton();

      if (typeof global.requestAnimationFrame === 'function') {

        global.requestAnimationFrame(function () {

          if (global.ArcadeAvatar && typeof global.ArcadeAvatar.applyNow === 'function') {

            global.ArcadeAvatar.applyNow();

          }

        });

      } else {

        setTimeout(function () {

          if (global.ArcadeAvatar && typeof global.ArcadeAvatar.applyNow === 'function') {

            global.ArcadeAvatar.applyNow();

          }

        }, 16);

      }

      closePicker();

      return;

    }

    if (isAdsDisabled()) {

      applyUnlockSuccess();

      return;

    }

    if (!global.ArcadeAds || typeof global.ArcadeAds.showRewardAd !== 'function') {

      toastAds('Đang tải quảng cáo…');

      return;

    }

    if (typeof global.GVAdBreak !== 'function') {

      toastAds('Đang tải quảng cáo…');

      return;

    }

    pauseGameAudio();

    global.ArcadeAds.showRewardAd(

      function () {

        applyUnlockSuccess();

        resumeGameAudio();

      },

      function () {

        resumeGameAudio();

        toastAds('Xem QC thất bại, thử lại');

      }

    );

  }



  function onItemClick(index) {

    if (!global.ArcadeAvatar) return;

    setPreviewIndex(index);

  }



  function openPicker() {

    if (pickerOpen || !global.ArcadeAvatar) return;

    function showSheet() {

      buildTrackIfNeeded();

      if (typeof global.ArcadeAvatar.applyNow === 'function') {

        global.ArcadeAvatar.applyNow();

      }

      previewIndex = global.ArcadeAvatar.getSelectedIndex();

      refreshAllFaces();

      refreshPreview(previewIndex);

      refreshTrackState();

      updateUnlockButton();

      var overlay = $(OVERLAY_ID);

      var sheet = $(SHEET_ID);

      if (!overlay || !sheet) return;

      pickerOpen = true;

      pauseGameAudio();

      setCanvasPointerBlocked(true);

      overlay.classList.add('show');

      sheet.classList.add('show');

      overlay.setAttribute('aria-hidden', 'false');

      var track = $(TRACK_ID);

      if (track) {

        var sel = track.querySelector('.gv-avatar-item[data-index="' + previewIndex + '"]');

        if (sel && sel.scrollIntoView) {

          setTimeout(function () {

            sel.scrollIntoView({ inline: 'center', block: 'nearest', behavior: 'smooth' });

          }, 80);

        }

      }

    }

    syncAtlasNaturalSize(showSheet);

  }



  function closePicker() {

    if (!pickerOpen) return;

    pickerOpen = false;

    if (global.ArcadeAvatar) {

      previewIndex = global.ArcadeAvatar.getSelectedIndex();

    }

    var overlay = $(OVERLAY_ID);

    var sheet = $(SHEET_ID);

    var unlockBtn = $(UNLOCK_ID);

    if (unlockBtn) {

      unlockBtn.hidden = true;

      unlockBtn.setAttribute('hidden', '');

    }

    var hint = $(ACTION_HINT_ID);

    if (hint) {

      hint.hidden = true;

      hint.setAttribute('hidden', '');

    }

    if (overlay) {

      overlay.classList.remove('show');

      overlay.setAttribute('aria-hidden', 'true');

    }

    if (sheet) sheet.classList.remove('show');

    setCanvasPointerBlocked(false);

    resumeGameAudio();

  }



  function bindTrackPointerScroll() {

    var track = $(TRACK_ID);

    if (!track || track._gvDragBound) return;

    track._gvDragBound = true;

    var pending = false;

    var dragging = false;

    var startX = 0;

    var startScroll = 0;

    var activePointerId = null;

    var DRAG_THRESHOLD = 8;



    function onPointerDown(ev) {

      if (ev.pointerType === 'mouse' && ev.button !== 0) return;

      pending = true;

      dragging = false;

      startX = ev.clientX;

      startScroll = track.scrollLeft;

      activePointerId = ev.pointerId;

    }



    function onPointerMove(ev) {

      if (!pending && !dragging) return;

      if (activePointerId != null && ev.pointerId !== activePointerId) return;

      var dx = ev.clientX - startX;

      if (!dragging && Math.abs(dx) > DRAG_THRESHOLD) {

        dragging = true;

        track._gvIsDragging = true;

        track.classList.add('gv-dragging');

        try {

          track.setPointerCapture(activePointerId);

        } catch (e) {

          /* ignore */

        }

      }

      if (!dragging) return;

      track.scrollLeft = startScroll - dx;

      ev.preventDefault();

    }



    function endDrag(ev) {

      if (!pending && !dragging) return;

      if (ev && activePointerId != null && ev.pointerId !== activePointerId) return;

      var didDrag = dragging;

      pending = false;

      dragging = false;

      track._gvIsDragging = false;

      track.classList.remove('gv-dragging');

      if (didDrag) {

        track._gvSuppressClick = true;

        setTimeout(function () {

          track._gvSuppressClick = false;

        }, 120);

      }

      try {

        if (activePointerId != null) track.releasePointerCapture(activePointerId);

      } catch (e2) {

        /* ignore */

      }

      activePointerId = null;

    }



    track.addEventListener('pointerdown', onPointerDown);

    track.addEventListener('pointermove', onPointerMove, { passive: false });

    track.addEventListener('pointerup', endDrag);

    track.addEventListener('pointercancel', endDrag);

  }



  function bindUi() {

    var overlay = $(OVERLAY_ID);

    var closeBtn = document.getElementById('gv-avatar-close');

    var unlockBtn = $(UNLOCK_ID);

    if (overlay) {

      overlay.addEventListener('click', function (ev) {

        if (ev.target === overlay) closePicker();

      });

    }

    if (closeBtn) {

      closeBtn.addEventListener('click', function (ev) {

        ev.preventDefault();

        closePicker();

      });

    }

    if (unlockBtn) {

      unlockBtn.addEventListener('click', function (ev) {

        ev.preventDefault();

        ev.stopPropagation();

        onUnlockClick();

      });

    }



    bindTrackPointerScroll();

  }



  if (document.readyState === 'loading') {

    document.addEventListener('DOMContentLoaded', bindUi);

  } else {

    bindUi();

  }



  global.ArcadeAvatarPicker = {

    open: openPicker,

    close: closePicker

  };

})(window);

