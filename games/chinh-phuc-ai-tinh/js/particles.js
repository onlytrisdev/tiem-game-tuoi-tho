/**
 * Hiệu ứng tim bay & confetti
 */
const FX = (function () {
  'use strict';

  let canvas, ctx, hearts = [], animId = null, enabled = true;
  let confCanvas, confCtx, confetti = [], confId = null;

  function init() {
    canvas = document.getElementById('particle-canvas');
    ctx = canvas.getContext('2d');
    confCanvas = document.getElementById('confetti-canvas');
    confCtx = confCanvas.getContext('2d');
    resize();
    window.addEventListener('resize', resize);
  }

  function resize() {
    if (canvas) { canvas.width = innerWidth; canvas.height = innerHeight; }
    if (confCanvas) { confCanvas.width = innerWidth; confCanvas.height = innerHeight; }
  }

  function setEnabled(on) { enabled = on; if (!on) hearts = []; }

  function spawnHeart(x, y) {
    if (!enabled) return;
    hearts.push({
      x: x ?? Math.random() * innerWidth,
      y: y ?? innerHeight,
      vx: (Math.random() - 0.5) * 1.5,
      vy: -1 - Math.random() * 2,
      size: 10 + Math.random() * 10,
      life: 1,
      e: ['❤', '💕', '💖', '💗'][Math.floor(Math.random() * 4)]
    });
  }

  function loop() {
    if (!ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if (enabled) {
      if (Math.random() < 0.025) spawnHeart();
      hearts = hearts.filter(h => {
        h.x += h.vx; h.y += h.vy; h.life -= 0.01;
        ctx.globalAlpha = h.life;
        ctx.font = `${h.size}px serif`;
        ctx.fillText(h.e, h.x, h.y);
        return h.life > 0;
      });
      ctx.globalAlpha = 1;
    }
    animId = requestAnimationFrame(loop);
  }

  function start() { if (!animId) loop(); }

  function burst(x, y, n = 8) {
    for (let i = 0; i < n; i++) spawnHeart(x, y);
  }

  function confettiWin() {
    const colors = ['#FF4D8A', '#FF8CB4', '#FFF0F5', '#FFD700', '#FF69B4'];
    confetti = Array.from({ length: 70 }, () => ({
      x: Math.random() * innerWidth, y: -20 - Math.random() * 80,
      w: 5 + Math.random() * 5, h: 8 + Math.random() * 6,
      color: colors[Math.floor(Math.random() * colors.length)],
      vy: 2 + Math.random() * 3, vx: (Math.random() - 0.5) * 2,
      rot: Math.random() * 360, vr: (Math.random() - 0.5) * 8
    }));
    animateConfetti();
  }

  function animateConfetti() {
    confCtx.clearRect(0, 0, confCanvas.width, confCanvas.height);
    confetti.forEach(p => {
      p.x += p.vx; p.y += p.vy; p.rot += p.vr;
      confCtx.save();
      confCtx.translate(p.x, p.y);
      confCtx.rotate(p.rot * Math.PI / 180);
      confCtx.fillStyle = p.color;
      confCtx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
      confCtx.restore();
    });
    confetti = confetti.filter(p => p.y < innerHeight + 40);
    if (confetti.length) confId = requestAnimationFrame(animateConfetti);
  }

  return { init, setEnabled, start, burst, confettiWin, spawnHeart };
})();
