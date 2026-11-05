///////////////////////////////////////////////////////////////////////////////
// file main.js
// Copyright (c) 2012 Frédéric J. Rézeau. All rights reserved.
///////////////////////////////////////////////////////////////////////////////

// Provides requestAnimationFrame in a cross browser way. @author paulirish / http://paulirish.com/
if (!window.requestAnimationFrame) {
    window.requestAnimationFrame = (function () {
        "use strict";
        return window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame ||
        function (callback) {
            window.setTimeout(callback, 1000 / 60);
        };
    })();
}

// Document has loaded.
$(document).on("pageinit", function () {
    "use strict";

    $(".ui-loader").hide();
    // Disable scrollbars.
    $("body").css("overflow", "hidden");
    // Remove outlines.
    $("body > *").css("outline", "none");

    // Initialize the game.
    if (navigator.userAgent.match(/Android/i)
        || navigator.userAgent.match(/webOS/i)
        || navigator.userAgent.match(/iPhone/i)
        || navigator.userAgent.match(/iPad/i)
        || navigator.userAgent.match(/iPod/i)
        || navigator.userAgent.match(/BlackBerry/i)
        || navigator.userAgent.match(/Windows Phone/i)
        ) {
        //ZCJGame.setFitToScreen(true);
        ZCJGame.setAssetsResolution(ZCJGame.AssetResolutionEnum.VVLoRes);
    }
    else {
        ZCJGame.setAssetsResolution(ZCJGame.AssetResolutionEnum.VLoRes);
    }
    ZCJGame.initialize();
    checkOrientation();
});

function checkOrientation() {
    "use strict";
    if ($(window).width() < $(window).height()) {
        $("#canvas").hide();
        $("#rotateImage").fadeIn();
    }
    else {
        $("#rotateImage").fadeOut();
        $("#canvas").show();
    }
}

// Window is resized.
$(window).resize(function () {
    "use strict";

    // Reset the display.
    ZCJGame.resetDisplay();
    checkOrientation();
});

// Prevent scrolling when moving.
$(document).on("touchmove", function (e) {
    "use strict";
    e.preventDefault();
});