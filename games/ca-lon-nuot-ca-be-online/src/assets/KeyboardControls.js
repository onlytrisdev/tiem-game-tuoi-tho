/**
 * PC keyboard controls (WASD + arrow keys).
 * Capture-phase listeners + robust Player lookup.
 */
(function () {
  "use strict";

  var pressed = {
    up: false,
    down: false,
    left: false,
    right: false
  };
  var wasMoving = false;
  var hooked = false;

  function isEditableTarget(target) {
    if (!target) {
      return false;
    }
    var tag = (target.tagName || "").toUpperCase();
    return tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT" || target.isContentEditable;
  }

  function mapKey(key, code) {
    var k = String(key || "").toLowerCase();
    var c = String(code || "");
    if (k === "w" || k === "arrowup" || c === "ArrowUp" || c === "KeyW") {
      return "up";
    }
    if (k === "s" || k === "arrowdown" || c === "ArrowDown" || c === "KeyS") {
      return "down";
    }
    if (k === "a" || k === "arrowleft" || c === "ArrowLeft" || c === "KeyA") {
      return "left";
    }
    if (k === "d" || k === "arrowright" || c === "ArrowRight" || c === "KeyD") {
      return "right";
    }
    return null;
  }

  function buildDir() {
    var x = 0;
    var y = 0;
    if (pressed.left) {
      x -= 1;
    }
    if (pressed.right) {
      x += 1;
    }
    if (pressed.up) {
      y += 1;
    }
    if (pressed.down) {
      y -= 1;
    }
    if (x === 0 && y === 0) {
      return null;
    }
    var len = Math.sqrt(x * x + y * y) || 1;
    return { x: x / len, y: y / len };
  }

  function findPlayerInNode(node) {
    if (!node || typeof window.cc === "undefined") {
      return null;
    }
    try {
      var comp = node.getComponent && node.getComponent("Player");
      if (comp) {
        return comp;
      }
    } catch (error) {}
    var children = node.children || [];
    for (var i = 0; i < children.length; i += 1) {
      var found = findPlayerInNode(children[i]);
      if (found) {
        return found;
      }
    }
    return null;
  }

  function findPlayer() {
    if (typeof window.cc === "undefined") {
      return null;
    }
    try {
      var Game =
        window.cc.js && typeof window.cc.js.getClassByName === "function"
          ? window.cc.js.getClassByName("Game")
          : null;
      if (Game && Game.instance && Game.instance.playerNode) {
        var fromGame = Game.instance.playerNode.getComponent("Player");
        if (fromGame) {
          return fromGame;
        }
        if (Game.instance.player) {
          return Game.instance.player;
        }
      }
    } catch (error) {}

    try {
      var paths = [
        "Canvas/GameRun/player",
        "Canvas/gameRun/player",
        "Canvas/player",
        "Canvas/GameRun/playerNode"
      ];
      for (var i = 0; i < paths.length; i += 1) {
        var node = window.cc.find(paths[i]);
        if (node) {
          var comp = node.getComponent("Player");
          if (comp) {
            return comp;
          }
        }
      }
      var canvas = window.cc.find("Canvas");
      if (canvas) {
        return findPlayerInNode(canvas);
      }
    } catch (error2) {}
    return null;
  }

  function isRunning() {
    var running = typeof window.GAME_RUNING !== "undefined" ? window.GAME_RUNING : 2;
    return !!(window.Global && window.Global.gameState === running);
  }

  function applyKeyboard() {
    var dir = buildDir();
    window.__gvKeyDir = dir;

    if (!isRunning()) {
      if (wasMoving) {
        wasMoving = false;
        var idlePlayer = findPlayer();
        if (idlePlayer) {
          idlePlayer._speedType = 0;
          if (typeof idlePlayer.playerAnimaction === "function") {
            idlePlayer.playerAnimaction("stop", 0);
          }
        }
      }
      return;
    }

    var player = findPlayer();
    if (!player) {
      return;
    }

    if (!dir) {
      if (wasMoving) {
        wasMoving = false;
        player._speedType = 0;
        if (typeof player.playerAnimaction === "function") {
          player.playerAnimaction("stop", 0);
        }
      }
      return;
    }

    if (typeof window.cc !== "undefined" && typeof window.cc.v2 === "function") {
      player.moveDir = window.cc.v2(dir.x, dir.y);
    } else {
      player.moveDir = { x: dir.x, y: dir.y };
    }
    player._speedType = 1;
    if (!wasMoving && typeof player.playerAnimaction === "function") {
      player.playerAnimaction("move");
    }
    wasMoving = true;
  }

  function onKeyDown(event) {
    if (isEditableTarget(event.target)) {
      return;
    }
    var dir = mapKey(event.key, event.code);
    if (!dir) {
      return;
    }
    if (
      ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", " ", "Space"].indexOf(event.key) >= 0 ||
      ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", "Space"].indexOf(event.code) >= 0
    ) {
      event.preventDefault();
    }
    pressed[dir] = true;
  }

  function onKeyUp(event) {
    var dir = mapKey(event.key, event.code);
    if (!dir) {
      return;
    }
    pressed[dir] = false;
  }

  function blurAll() {
    pressed.up = pressed.down = pressed.left = pressed.right = false;
  }

  function focusCanvas() {
    var canvas = document.getElementById("GameCanvas");
    if (canvas && typeof canvas.focus === "function") {
      try {
        canvas.focus();
      } catch (error) {}
    }
  }

  function tick() {
    applyKeyboard();
    window.requestAnimationFrame(tick);
  }

  function start() {
    if (hooked) {
      return;
    }
    hooked = true;

    document.addEventListener("keydown", onKeyDown, true);
    document.addEventListener("keyup", onKeyUp, true);
    window.addEventListener("blur", blurAll, false);

    var stage = document.getElementById("GameStage");
    var canvas = document.getElementById("GameCanvas");
    if (stage) {
      stage.addEventListener("pointerdown", focusCanvas, false);
      stage.addEventListener("mousedown", focusCanvas, false);
    }
    if (canvas) {
      canvas.addEventListener("pointerdown", focusCanvas, false);
      canvas.addEventListener("mousedown", focusCanvas, false);
      if (!canvas.hasAttribute("tabindex")) {
        canvas.setAttribute("tabindex", "0");
      }
    }

    window.requestAnimationFrame(tick);
    console.log("[GV_KEYBOARD_CONTROLS_READY]");
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", start);
  } else {
    start();
  }
})();
