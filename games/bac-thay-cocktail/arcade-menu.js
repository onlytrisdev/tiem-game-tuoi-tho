/* Arcade menu-only controls for Party Cups Stack / Unity WebGL.
 * Unity renders menu and gameplay in one canvas. The real build's START button is
 * x=.24-.76,y=.58-.72; its gameplay HOME icon is x=0-.16,y=0-.11.
 * Observe those native input targets without cancelling or changing Unity events.
 */
(function (w) {
  'use strict';
  function attach(canvas, actions) {
    if (!canvas || !actions) throw new Error('GV_MENU_MISSING_ELEMENTS');
    var state = 'loading';
    var homeTimer = null;

    function setState(next) {
      if (state === next) return;
      state = next;
      actions.style.display = state === 'menu' ? 'flex' : 'none';
      actions.setAttribute('aria-hidden', state === 'menu' ? 'false' : 'true');
    }

    // Stay invisible while Unity is booting; visibility is enabled only on menu.
    actions.style.display = 'none';
    actions.setAttribute('aria-hidden', 'true');

    function handlePosition(clientX, clientY) {
      if (state === 'loading' || !Number.isFinite(clientX) || !Number.isFinite(clientY)) return;
      var rect = canvas.getBoundingClientRect();
      if (!rect.width || !rect.height) return;
      var x = (clientX - rect.left) / rect.width;
      var y = (clientY - rect.top) / rect.height;
      if (x < 0 || x > 1 || y < 0 || y > 1) return;

      if (state === 'menu' && x >= 0.24 && x <= 0.76 && y >= 0.58 && y <= 0.72) {
        // Unity START was pressed: immediately hide score/reset during gameplay.
        if (homeTimer !== null) { w.clearTimeout(homeTimer); homeTimer = null; }
        setState('gameplay');
      } else if (state === 'gameplay' && x <= 0.16 && y <= 0.11) {
        // Native HOME is the observed path back to the menu in this Unity build.
        // Keep controls hidden while Unity finishes the transition.
        if (homeTimer !== null) w.clearTimeout(homeTimer);
        homeTimer = w.setTimeout(function () {
          homeTimer = null;
          if (state === 'gameplay') setState('menu');
        }, 450);
      }
    }

    function onPointerUp(e) { handlePosition(e.clientX, e.clientY); }
    canvas.addEventListener('pointerup', onPointerUp, true);
    // Legacy iOS fallback; modern browsers use pointerup to avoid duplicate handling.
    if (!('PointerEvent' in w)) {
      canvas.addEventListener('touchend', function (e) {
        var touch = e.changedTouches && e.changedTouches[0];
        if (touch) handlePosition(touch.clientX, touch.clientY);
      }, true);
      canvas.addEventListener('mouseup', onPointerUp, true);
    }

    return {
      onUnityReady: function () { if (state === 'loading') setState('menu'); },
      getState: function () { return state; }
    };
  }
  w.ArcadeMenu = { attach: attach };
})(window);
