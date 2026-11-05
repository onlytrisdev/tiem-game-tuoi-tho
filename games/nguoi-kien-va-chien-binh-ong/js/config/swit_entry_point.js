//==============================================================================
// swit_entry_point.js
// Copyright (c) 2018, Bamtang Games. All Rights Reserved.
//------------------------------------------------------------------------------

function SwitEntryPoint() { }

SwitEntryPoint.BOOT_FILE = "js/game.js";
SwitEntryPoint.infoBrowser = {};
SwitEntryPoint.isSupported = false;
SwitEntryPoint.debug = false;
SwitEntryPoint.isMobileDevice = false;

SwitEntryPoint.include = function( url ) {
    if ( !navigator["isCocoonJS"] ) {
        document.write( '<script type="text/javascript" language="javascript" src="'
                        + url + '"></script>' );
    }
};

SwitEntryPoint.test = function() {
    if ( ( typeof window["SwitEntryFiles"] === 'undefined' ) 
               || ( window['SWT_ADVANCED'] === true ) ) {
        SwitEntryPoint.include( SwitEntryPoint.BOOT_FILE );
    }
    else {
        var files = window["SwitEntryFiles"];
        for ( var k = 0; k < files.length; k++ ) {
            SwitEntryPoint.include( files[k] );
        }
        SwitEntryPoint.debug = true;
    }
};

SwitEntryPoint.start = function() {
    SwitEntryPoint.include( SwitEntryPoint.BOOT_FILE );
};

SwitEntryPoint.setEntry = function() {

    SwitEntryPoint.detectBrowser( navigator );
    var supported = ( navigator['isCocoonJS'] || SwitEntryPoint.infoBrowser.touchDevice ) ?
                    'supported' : SwitEntryPoint.isBrowserSupported();

    if ( supported !== 'supported' ) {
        SwitEntryPoint.isSupported = false;
        // Browser unsupported
        window.location = 'unsupported.html' + window.location.search;
    }
    else {
        SwitEntryPoint.isSupported = true;
    }
};

SwitEntryPoint.detectBrowser = function( navigator ) {

    SwitEntryPoint.infoBrowser.platformType = navigator.platform;
    SwitEntryPoint.infoBrowser.browserName = navigator.appName;
    SwitEntryPoint.infoBrowser.browserVersion = parseFloat( navigator.appVersion );
    SwitEntryPoint.infoBrowser.iDevice = false;
    SwitEntryPoint.infoBrowser.touchDevice = false;
    SwitEntryPoint.infoBrowser.platformVersion = 0.0;
    SwitEntryPoint.infoBrowser.isIE = false;
    SwitEntryPoint.infoBrowser.isPhone = false;
    SwitEntryPoint.infoBrowser.isLowDevice = false;
    SwitEntryPoint.infoBrowser.useAssetsSD = false;
    SwitEntryPoint.infoBrowser.deviceModel = '';
    
    // Detect platform
    if ( navigator.platform.indexOf( 'iPhone' ) != -1 ) {
        SwitEntryPoint.infoBrowser.iDevice = true;
        SwitEntryPoint.infoBrowser.isPhone = true;
        SwitEntryPoint.infoBrowser.touchDevice = true;
        SwitEntryPoint.infoBrowser.platformType = 'iPhone';
        if ( /OS (\d+\_\d+)/.test( navigator.userAgent ) ) {
            var ver = RegExp.$1;
            ver = ver.replace( '_', '.' );
            SwitEntryPoint.infoBrowser.platformVersion = parseFloat( ver );
        }
    }
    else if ( navigator.platform.indexOf( 'iPod' ) != -1 ) {
        SwitEntryPoint.infoBrowser.iDevice = true;
        SwitEntryPoint.infoBrowser.isPhone = true;
        SwitEntryPoint.infoBrowser.touchDevice = true;
        SwitEntryPoint.infoBrowser.platformType = 'iPod';
        SwitEntryPoint.infoBrowser.isLowDevice = true;
        SwitEntryPoint.infoBrowser.useAssetsSD = true;
        if ( /OS (\d+\_\d+)/.test( navigator.userAgent ) ) {
            var ver = RegExp.$1;
            ver = ver.replace( '_', '.' );
            SwitEntryPoint.infoBrowser.platformVersion = parseFloat( ver );
        }
    }
    else if ( navigator.platform.indexOf( 'iPad' ) != -1 ) {
        SwitEntryPoint.infoBrowser.iDevice = true;
        SwitEntryPoint.infoBrowser.touchDevice = true;
        SwitEntryPoint.infoBrowser.platformType = 'iPad';
        if ( /OS (\d+\_\d+)/.test( navigator.userAgent ) ) {
            var ver = RegExp.$1;
            ver = ver.replace( '_', '.' );
            SwitEntryPoint.infoBrowser.platformVersion = parseFloat( ver );
        }
    }
    else if ( navigator.userAgent.indexOf( 'Kindle' ) != -1 ) {
        var fire = navigator.userAgent.indexOf( 'Kindle Fire' ) != -1;
        SwitEntryPoint.infoBrowser.touchDevice = fire;
        SwitEntryPoint.infoBrowser.platformType = fire ? 'Kindle Fire' : 'Kindle';
        if ( /Android (\d+\.\d+)/.test( navigator.userAgent ) ) {
            SwitEntryPoint.infoBrowser.platformVersion = parseFloat( RegExp.$1 );
        }
    }
    else if ( navigator.userAgent.indexOf( 'Android' ) != -1 ) {
        SwitEntryPoint.infoBrowser.touchDevice = true;
        SwitEntryPoint.infoBrowser.platformType = 'Android';
        if ( /Android (\d+\.\d+)/.test( navigator.userAgent ) ) {
            SwitEntryPoint.infoBrowser.platformVersion = parseFloat( RegExp.$1 );
        }
    }
    else if ( navigator.userAgent.indexOf( 'IEMobile' ) != -1 ) {
        SwitEntryPoint.infoBrowser.touchDevice = true;
        SwitEntryPoint.infoBrowser.platformType = 'IEMobile';
        if ( /IEMobile\/(\d+\.\d+)/.test( navigator.userAgent ) ) {
            SwitEntryPoint.infoBrowser.platformVersion = parseFloat( RegExp.$1 );
        }
    }
    else if ( navigator.platform.indexOf( 'Win' ) != -1 ) {
        SwitEntryPoint.infoBrowser.platformType = 'Win';
    }
    else if ( navigator.platform.indexOf( 'Mac' ) != -1 ) {
        SwitEntryPoint.infoBrowser.platformType = 'Mac';
        if ( /OS X (\d+\_\d+)/.test( navigator.userAgent ) ) {
            var ver = RegExp.$1;
            ver = ver.replace( '_', '.' );
            SwitEntryPoint.infoBrowser.platformVersion = parseFloat( ver );
        }
    }
    else if ( navigator.platform.indexOf( 'Linux' ) != -1 ) {
        SwitEntryPoint.infoBrowser.platformType = 'Linux';
    }

    // Detect browser
    if ( navigator.userAgent.indexOf( 'Silk' ) != -1 || /\ KF[A-Z]{4}\ /.test(navigator.userAgent) ) {
        SwitEntryPoint.infoBrowser.browserName = 'Silk';
        SwitEntryPoint.infoBrowser.touchDevice = true;
        SwitEntryPoint.infoBrowser.useAssetsSD = true;
        SwitEntryPoint.infoBrowser.isLowDevice = true;
        if ( navigator.userAgent.indexOf( 'KFAUWI' ) != -1 ) {
            SwitEntryPoint.infoBrowser.deviceModel = 'KINDLE_7';
        }
        if ( /Silk\/(\d+\.\d+)/.test( navigator.userAgent ) ) {
            SwitEntryPoint.infoBrowser.browserVersion = parseFloat( RegExp.$1 );
        }
    }
    else if ( navigator.userAgent.indexOf( 'Firefox' ) != -1 ) {
        SwitEntryPoint.infoBrowser.browserName = 'Firefox';
        if ( /Firefox[\/\s](\d+\.\d+)/.test( navigator.userAgent ) )
            SwitEntryPoint.infoBrowser.browserVersion = parseFloat( RegExp.$1 );
    }
    else if ( navigator.userAgent.indexOf( 'MSIE' ) != -1 ) {
        // Code to detect IE10 multi-touch devices
        SwitEntryPoint.infoBrowser.msTouchDevice = navigator.msMaxTouchPoints > 0;
        SwitEntryPoint.infoBrowser.browserName = 'MSIE';
        SwitEntryPoint.infoBrowser.isIE = true;
        if ( /MSIE (\d+\.\d+);/.test( navigator.userAgent ) )
            SwitEntryPoint.infoBrowser.browserVersion = parseFloat( RegExp.$1 );
    }
    else if ( navigator.userAgent.indexOf( 'Opera' ) != -1 ) {
        SwitEntryPoint.infoBrowser.browserName = 'Opera';
        if ( /Opera[\/\s](\d+\.\d+)/.test( navigator.userAgent ) )
            SwitEntryPoint.infoBrowser.browserVersion = parseFloat( RegExp.$1 );
    }
    else if ( navigator.userAgent.indexOf( 'Chrome' ) != -1 ) {
        SwitEntryPoint.infoBrowser.browserName = 'Chrome';
        if ( /Chrome[\/\s](\d+\.\d+)/.test( navigator.userAgent ) )
            SwitEntryPoint.infoBrowser.browserVersion = parseFloat( RegExp.$1 );
    }
    else if ( navigator.userAgent.indexOf( 'CriOS' ) != -1 ) {
        SwitEntryPoint.infoBrowser.browserName = 'Chrome';
        if ( /CriOS[\/\s](\d+\.\d+)/.test( navigator.userAgent ) )
            SwitEntryPoint.infoBrowser.browserVersion = parseFloat( RegExp.$1 );
    }
    else if ( navigator.userAgent.indexOf( 'Safari' ) != -1 ) {
        SwitEntryPoint.infoBrowser.browserName = 'Safari';
        if ( /Version[\/\s](\d+\.\d+)/.test( navigator.userAgent ) )
            SwitEntryPoint.infoBrowser.browserVersion = parseFloat( RegExp.$1 );
    }
    else {
        if ( SwitEntryPoint.infoBrowser.iDevice ) {
            SwitEntryPoint.infoBrowser.browserName = 'Safari';
        }
        else if ( navigator.appName == 'Netscape' ) {
            // We need to check if its IE11
            var rv = 0;
            var re = new RegExp( "Trident/.*rv:([0-9]{1,}[\.0-9]{0,})" );
            if ( re.exec( navigator.userAgent ) != null ) {
                rv = parseFloat( RegExp.$1 );
            }
            if ( rv >= 11 ) {
                SwitEntryPoint.infoBrowser.msTouchDevice = navigator.msMaxTouchPoints > 0;
                SwitEntryPoint.infoBrowser.browserName = 'MSIE';
                SwitEntryPoint.infoBrowser.isIE = true;
                SwitEntryPoint.infoBrowser.browserVersion = rv;
            }
        }
    }

    if ( navigator.userAgent.indexOf( 'WebKit' ) != -1 ) {
        SwitEntryPoint.infoBrowser.browserType = 'WebKit';
    }
    else {
        SwitEntryPoint.infoBrowser.browserType = SwitEntryPoint.infoBrowser.browserName;
    }

    // Detect older iOS devices (iPhone 4S and lower)
    if ( SwitEntryPoint.infoBrowser.iDevice && ( screen.width <= 480 && screen.height <= 480 ) ) {
        SwitEntryPoint.infoBrowser.isLowDevice = true;
        SwitEntryPoint.infoBrowser.useAssetsSD = true;
    }
    // Detect iPad 2 as lower device
    if ( ( SwitEntryPoint.infoBrowser.platformType === 'iPad' ) && ( window.devicePixelRatio < 2 ) ) {
        SwitEntryPoint.infoBrowser.isLowDevice = true;
        SwitEntryPoint.infoBrowser.useAssetsSD = true;
    }
    // Detect older android devices as lower devices
    if ( ( SwitEntryPoint.infoBrowser.platformType === 'Android' ) && ( SwitEntryPoint.infoBrowser.platformVersion < 4.3 ) ) {
        SwitEntryPoint.infoBrowser.isLowDevice = true;
        SwitEntryPoint.infoBrowser.useAssetsSD = true;
    }

    SwitEntryPoint.isMobileDevice = SwitEntryPoint.infoBrowser.touchDevice 
            || ( navigator['isCocoonJS'] )
            || ( navigator.userAgent.match( /iOS|iPad|iPhone|iPod|Android|Silk|BlackBerry|webOS/i ) !== null );
};

SwitEntryPoint.isBrowserSupported = function() {

    // Supported browsers come from settings.
    var config = window["config"];

    for ( var i = 0; i < config.browserSettings.length; i++ ) {
        var minBrowser = config.browserSettings[i];
        if ( ( !minBrowser.browserType || SwitEntryPoint.infoBrowser.browserName == minBrowser.browserType ) &&
            ( !minBrowser.platformType || SwitEntryPoint.infoBrowser.platformType == minBrowser.platformType ) ) {
            if ( minBrowser.minVersion < 0 ) {
                return 'unsupported';
            }
            if ( SwitEntryPoint.infoBrowser.browserVersion < minBrowser.minVersion ) {
                return 'old';
            }
            return 'supported';
        }
    }
    return 'unsupported';
};

document.oncontextmenu = function( e ) {
    e = e || window.event;
    if ( e.preventDefault )
        e.preventDefault();
    else
        return false;
};

document.ontouchmove = function ontouchmove( e ) {
    e = e || window.event;
    e.preventDefault();
};

gameStart = function() {
    switOnLoad();
};

SwitEntryPoint.setEntry();
