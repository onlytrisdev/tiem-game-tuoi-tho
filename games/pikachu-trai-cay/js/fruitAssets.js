/**
 * fruitAssets.js — fruit-01.png … fruit-26.png
 * Preload một lần, hiển thị bằng CSS class (không tạo <img> mới khi xáo trộn)
 */
const FruitAssets = (function () {
  'use strict';

  const TOTAL = 26;
  const ICON_CLASS_PREFIX = 'tile__icon--fruit-';
  const STYLE_ID = 'fruit-icon-styles';

  const FILES = Array.from({ length: TOTAL }, (_, i) => {
    return `fruit-${String(i + 1).padStart(2, '0')}.png`;
  });

  let ready = false;
  let loadPromise = null;
  let assetBase = '';
  let stylesInjected = false;

  function getAssetBase() {
    if (assetBase) return assetBase;
    const path = window.location.pathname;
    assetBase = path.substring(0, path.lastIndexOf('/') + 1);
    return assetBase;
  }

  function getUrl(iconId) {
    if (iconId < 1 || iconId > TOTAL) return '';
    return `${getAssetBase()}images/${FILES[iconId - 1]}`;
  }

  function getIconClass(iconId) {
    return `${ICON_CLASS_PREFIX}${iconId}`;
  }

  /** Inject stylesheet một lần — mọi ô chỉ đổi class, không request lại ảnh */
  function injectIconStyles() {
    if (stylesInjected) return;
    stylesInjected = true;

    const base = getAssetBase();
    const rules = FILES.map((file, index) => {
      const id = index + 1;
      return `.${ICON_CLASS_PREFIX}${id}{background-image:url("${base}images/${file}");}`;
    }).join('\n');

    const style = document.createElement('style');
    style.id = STYLE_ID;
    style.textContent = `
      .tile__icon[class*="${ICON_CLASS_PREFIX}"] {
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;
      }
      ${rules}
    `;
    document.head.appendChild(style);
  }

  /**
   * Preload ảnh vào bộ nhớ trình duyệt (một lần duy nhất)
   */
  function load() {
    if (ready) return Promise.resolve();
    if (loadPromise) return loadPromise;

    injectIconStyles();
    getAssetBase();

    loadPromise = Promise.all(
      FILES.map((file) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.onload = () => resolve();
          img.onerror = () => reject(new Error(`Không tải được images/${file}`));
          img.src = `${assetBase}images/${file}`;
        });
      })
    ).then(() => {
      ready = true;
    });

    return loadPromise;
  }

  function isReady() {
    return ready;
  }

  function createIconElement(iconId) {
    const wrap = document.createElement('div');
    wrap.className = `tile__icon ${getIconClass(iconId)}`;
    return wrap;
  }

  /** Cập nhật icon trên ô đã có — chỉ đổi class, không tạo DOM/img mới */
  function applyIconToElement(iconEl, iconId) {
    if (!iconEl) return;
    iconEl.className = `tile__icon ${getIconClass(iconId)}`;
  }

  return {
    TOTAL,
    FILES,
    load,
    getUrl,
    isReady,
    getIconClass,
    createIconElement,
    applyIconToElement
  };
})();
