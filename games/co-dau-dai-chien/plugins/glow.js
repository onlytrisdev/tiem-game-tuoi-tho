var GlowFilter = function (textureWidth, textureHeight, distance, outerStrength, innerStrength, color, quality) {
    PIXI.AbstractFilter.call(this);
    quality = Math.pow(quality, 1 / 3);
    this.quality = quality;
    distance *= quality;
    textureWidth *= quality;
    textureHeight *= quality;
    this.uniforms = {
        distance: {
            type: '1f'
            , value: distance
        }
        , outerStrength: {
            type: '1f'
            , value: null
        }
        , innerStrength: {
            type: '1f'
            , value: null
        }
        , glowColor: {
            type: '4f'
            , value: null
        }
        , pixelWidth: {
            type: '1f'
            , value: null
        }
        , pixelHeight: {
            type: '1f'
            , value: null
        }
    , };
    this.color = color;
    this.outerStrength = outerStrength;
    this.innerStrength = innerStrength;
    this.textureWidth = textureWidth;
    this.textureHeight = textureHeight;
    this.passes = [this];
    this.fragmentSrc = [
        'precision mediump float;'
        , 'varying vec2 vTextureCoord;'
        , 'uniform sampler2D texture;'
        , 'uniform float distance;'
        , 'uniform float outerStrength;'
        , 'uniform float innerStrength;'
        , 'uniform vec4 glowColor;'
        , 'uniform float pixelWidth;'
        , 'uniform float pixelHeight;'
        , 'vec2 px = vec2(pixelWidth, pixelHeight);'
        , 'void main(void) {'
        , '    const float PI = 3.14159265358979323846264;'
        , '    vec4 ownColor = texture2D(texture, vTextureCoord);'
        , '    vec4 curColor;'
        , '    float totalAlpha = 0.;'
        , '    float maxTotalAlpha = 0.;'
        , '    float cosAngle;'
        , '    float sinAngle;'
        , '    for (float angle = 0.; angle <= PI * 2.; angle += ' + (1 / quality / distance).toFixed(7) + ') {'
        , '       cosAngle = cos(angle);'
        , '       sinAngle = sin(angle);'
        , '       for (float curDistance = 1.; curDistance <= ' + distance.toFixed(7) + '; curDistance++) {'
        , '           curColor = texture2D(texture, vec2(vTextureCoord.x + cosAngle * curDistance * px.x, vTextureCoord.y + sinAngle * curDistance * px.y));'
        , '           totalAlpha += (distance - curDistance) * curColor.a;'
        , '           maxTotalAlpha += (distance - curDistance);'
        , '       }'
        , '    }'
        , '    maxTotalAlpha = max(maxTotalAlpha, 0.0001);',

        '    ownColor.a = max(ownColor.a, 0.0001);'
        , '    ownColor.rgb = ownColor.rgb / ownColor.a;'
        , '    float outerGlowAlpha = (totalAlpha / maxTotalAlpha)  * outerStrength * (1. - ownColor.a);'
        , '    float innerGlowAlpha = ((maxTotalAlpha - totalAlpha) / maxTotalAlpha) * innerStrength * ownColor.a;'
        , '    float resultAlpha = (ownColor.a + outerGlowAlpha);'
        , '    gl_FragColor = vec4(mix(mix(ownColor.rgb, glowColor.rgb, innerGlowAlpha / ownColor.a), glowColor.rgb, outerGlowAlpha / resultAlpha) * resultAlpha, resultAlpha);'
        , '}'
    ];
};
GlowFilter.prototype = Object.create(PIXI.AbstractFilter.prototype);
GlowFilter.prototype.constructor = GlowFilter;
Object.defineProperty(GlowFilter.prototype, 'color', {
    set: function (value) {
        var r = ((value & 0xFF0000) >> 16) / 255
            , g = ((value & 0x00FF00) >> 8) / 255
            , b = (value & 0x0000FF) / 255;
        this.uniforms.glowColor.value = {
            x: r
            , y: g
            , z: b
            , w: 1
        };
        this.dirty = true;
    }
});
Object.defineProperty(GlowFilter.prototype, 'distance', {
    set: function (value) {
        this.uniforms.distance.value = value;
        this.dirty = true;
    }
});
Object.defineProperty(GlowFilter.prototype, 'outerStrength', {
    set: function (value) {
        this.uniforms.outerStrength.value = value;
        this.dirty = true;
    }
});
Object.defineProperty(GlowFilter.prototype, 'innerStrength', {
    set: function (value) {
        this.uniforms.innerStrength.value = value;
        this.dirty = true;
    }
});
Object.defineProperty(GlowFilter.prototype, 'textureWidth', {
    set: function (value) {
        this.uniforms.pixelWidth.value = 1 / value;
        this.dirty = true;
    }
});
Object.defineProperty(GlowFilter.prototype, 'textureHeight', {
    set: function (value) {
        this.uniforms.pixelHeight.value = 1 / value;
        this.dirty = true;
    }
});
var FPSCounter = function () {
    this.frameCount = 0;
    this.lastUpdate = null;
    this.value = "";
};
FPSCounter.prototype.nextFrame = function () {
    var now = new Date();
    this.frameCount++;
    if (this.lastUpdate !== null) {
        if ((now - this.lastUpdate) > 200) {
            this.value = (((200 * this.frameCount) / (now - this.lastUpdate)) * 5).toFixed(1);
            this.frameCount = 0;
            this.lastUpdate = now;
        }
    }
    else {
        this.lastUpdate = now;
    }
};
function init() {
    var stage = new PIXI.Stage(0x000000, true)
        , renderer = PIXI.autoDetectRenderer(700, 500, null, false)
        , fpsCounter = new FPSCounter(), //bgUrl = 'http://i.imgur.com/NPvPXtf.jpg';
        //bg = new PIXI.Sprite(new PIXI.Texture.fromImage(bgUrl, true)),
        someText = new PIXI.Text("Text ", {
            font: "250px Arial"
            , fill: 'black'
            , strokedistance: 0
            , dropShadow: false
            , dropShadowdistance: 0
        });
    document.body.appendChild(renderer.view);
    function setFilter() {
        someText.filters = [
            new GlowFilter(renderer.width, renderer.height, parseFloat(document.getElementById('input-distance').value), parseFloat(document.getElementById('input-outer-strength').value), parseFloat(document.getElementById('input-inner-strength').value), parseInt(document.getElementById('input-color').value.substring(1), 16), parseFloat(document.getElementById('input-quality').value))
        ];
    };
    stage.addChild(someText);
    someText.position.x = 100;
    someText.position.y = 10;
    setFilter();
    Array.prototype.forEach.call(document.querySelectorAll('input'), function (el) {
        el.onchange = function (e) {
            setFilter();
        };
    });
    document.getElementById('parameters').onsubmit = function (e) {
        e.preventDefault();
        setFilter();
    };
    update();
    function update() {
        requestAnimFrame(update);
        fpsCounter.nextFrame();
        document.getElementById('fps').innerHTML = "fps: " + fpsCounter.value;
        renderer.render(stage);
    }
}
Phaser.Filter.Gray = function (game) {
    Phaser.Filter.call(this, game);
    this.uniforms.gray = {
        type: '1f'
        , value: 1.0
    };
    this.fragmentSrc = [

        "precision mediump float;",
        "varying vec2       vTextureCoord;"
        , "varying vec4       vColor;"
        , "uniform sampler2D  uSampler;"
        , "uniform float      gray;",
        "void main(void) {"
            , "gl_FragColor = texture2D(uSampler, vTextureCoord);"
            , "gl_FragColor.rgb = mix(gl_FragColor.rgb, vec3(0.2126 * gl_FragColor.r + 0.7152 * gl_FragColor.g + 0.0722 * gl_FragColor.b), gray);"
        , "}"
    ];
};
Phaser.Filter.Gray.prototype = Object.create(Phaser.Filter.prototype);
Phaser.Filter.Gray.prototype.constructor = Phaser.Filter.Gray;
Object.defineProperty(Phaser.Filter.Gray.prototype, 'gray', {
    get: function () {
        return this.uniforms.gray.value;
    }
    , set: function (value) {
        this.uniforms.gray.value = value;
    }
});
Phaser.Filter.BlurX = function (game) {
    Phaser.Filter.call(this, game);
    this.uniforms.blur = {
        type: '1f'
        , value: 1 / 512
    };
    this.fragmentSrc = [

      "precision mediump float;"
      , "varying vec2 vTextureCoord;"
      , "varying vec4 vColor;"
      , "uniform float blur;"
      , "uniform sampler2D uSampler;",
        "void main(void) {",
          "vec4 sum = vec4(0.0);",
          "sum += texture2D(uSampler, vec2(vTextureCoord.x - 4.0*blur, vTextureCoord.y)) * 0.05;"
          , "sum += texture2D(uSampler, vec2(vTextureCoord.x - 3.0*blur, vTextureCoord.y)) * 0.09;"
          , "sum += texture2D(uSampler, vec2(vTextureCoord.x - 2.0*blur, vTextureCoord.y)) * 0.12;"
          , "sum += texture2D(uSampler, vec2(vTextureCoord.x - blur, vTextureCoord.y)) * 0.15;"
          , "sum += texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y)) * 0.16;"
          , "sum += texture2D(uSampler, vec2(vTextureCoord.x + blur, vTextureCoord.y)) * 0.15;"
          , "sum += texture2D(uSampler, vec2(vTextureCoord.x + 2.0*blur, vTextureCoord.y)) * 0.12;"
          , "sum += texture2D(uSampler, vec2(vTextureCoord.x + 3.0*blur, vTextureCoord.y)) * 0.09;"
          , "sum += texture2D(uSampler, vec2(vTextureCoord.x + 4.0*blur, vTextureCoord.y)) * 0.05;",
          "gl_FragColor = sum;",

        "}"
    ];
};
Phaser.Filter.BlurX.prototype = Object.create(Phaser.Filter.prototype);
Phaser.Filter.BlurX.prototype.constructor = Phaser.Filter.BlurX;
Object.defineProperty(Phaser.Filter.BlurX.prototype, 'blur', {
    get: function () {
        return this.uniforms.blur.value / (1 / 7000);
    }
    , set: function (value) {
        this.dirty = true;
        this.uniforms.blur.value = (1 / 7000) * value;
    }
});
Phaser.Filter.BlurY = function (game) {
    Phaser.Filter.call(this, game);
    this.uniforms.blur = {
        type: '1f'
        , value: 1 / 512
    };
    this.fragmentSrc = [
      "precision mediump float;"
      , "varying vec2 vTextureCoord;"
      , "varying vec4 vColor;"
      , "uniform float blur;"
      , "uniform sampler2D uSampler;",
        "void main(void) {",
          "vec4 sum = vec4(0.0);",
          "sum += texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y - 4.0*blur)) * 0.05;"
          , "sum += texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y - 3.0*blur)) * 0.09;"
          , "sum += texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y - 2.0*blur)) * 0.12;"
          , "sum += texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y - blur)) * 0.15;"
          , "sum += texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y)) * 0.16;"
          , "sum += texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y + blur)) * 0.15;"
          , "sum += texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y + 2.0*blur)) * 0.12;"
          , "sum += texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y + 3.0*blur)) * 0.09;"
          , "sum += texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y + 4.0*blur)) * 0.05;",
          "gl_FragColor = sum;",

        "}"

    ];
};
Phaser.Filter.BlurY.prototype = Object.create(Phaser.Filter.prototype);
Phaser.Filter.BlurY.prototype.constructor = Phaser.Filter.BlurY;
Object.defineProperty(Phaser.Filter.BlurY.prototype, 'blur', {
    get: function () {
        return this.uniforms.blur.value / (1 / 7000);
    }
    , set: function (value) {
        this.dirty = true;
        this.uniforms.blur.value = (1 / 7000) * value;
    }
});