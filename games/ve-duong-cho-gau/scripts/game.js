//console.log = function() {}
i18next.use(i18nextXHRBackend).init({
  lng: 'en',
  debug: true,
  backend: {
    // for all available options read the backend's repository readme file
    loadPath: './locales/{{lng}}/{{ns}}.json'
  }
}, function(err, t) {
  
    docReady(function() {

        var elem = document.getElementById('font-preload');
        elem.style.visibility = 'hidden';
        
        userIsInCorrectRatio();

        function userIsInCorrectRatio()
        {
            var isMobile = navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i)
            if(isMobile)
            {
                window.CNOverride = false;
            }

            let thisRatio = window.innerWidth / window.innerHeight;
            if((thisRatio>1)&&(!window.CNOverride))
            {
                document.getElementById("turn").style.display="block";
                setTimeout(userIsInCorrectRatio,100);
            }
            else
            {
                document.getElementById("turn").style.display="none";
                document.title = i18next.t('title');
        
            if (window['PlayPromise'] != undefined) {
                window['PlayPromise'].then(sdk => new Funday.WeBareBearsTrippleTrip.Game(sdk));
            } else {
                var game = new Funday.WeBareBearsTrippleTrip.Game(undefined)
            }
            }

        }

            
    });
  
  
});

var font1 = 'Fred Fredburger Headline Black';

var Funday;
(function (Funday) {
    class AudioId {
        constructor(key, markerName) {
            this.key = null;
            this.markerName = null;
            this.key = key;
            this.markerName = markerName;
        }
    }
    Funday.AudioId = AudioId;
})(Funday || (Funday = {}));
var Funday;
(function (Funday) {
    class BitmapFontId {
        constructor(key) {
            this.key = null;
            this.key = key;
        }
    }
    Funday.BitmapFontId = BitmapFontId;
})(Funday || (Funday = {}));
var Funday;
(function (Funday) {
    class SpriteId {
        constructor(key, frame) {
            this.key = null;
            this.frame = null;
            this.key = key;
            this.frame = frame;
        }
    }
    Funday.SpriteId = SpriteId;
})(Funday || (Funday = {}));
var Funday;
(function (Funday) {
    var Animation;
    (function (Animation_1) {
        class Animation {
            constructor() {
                this.onPlay = new Phaser.Signal();
                this.onStop = new Phaser.Signal();
                this.onPause = new Phaser.Signal();
                this.onComplete = new Phaser.Signal();
            }
            play() {
                this._isPlaying = true;
                this._isPaused = false;
                this.onPlay.dispatch();
            }
            isPlaying() {
                return this._isPlaying;
            }
            stop() {
                this._isPlaying = false;
                this._isPaused = false;
                this.onStop.dispatch();
            }
            pause() {
                this._isPlaying = false;
                this._isPaused = true;
                this.onPause.dispatch();
            }
            isPaused() {
                return this._isPaused;
            }
            onCompleted() {
                this._isPlaying = false;
                this._isPaused = false;
                this.onComplete.dispatch();
            }
        }
        Animation_1.Animation = Animation;
    })(Animation = Funday.Animation || (Funday.Animation = {}));
})(Funday || (Funday = {}));
var Funday;
(function (Funday) {
    var Animation;
    (function (Animation) {
        class AbstractGroup extends Funday.Animation.Animation {
            constructor(animations) {
                super();
                this.animations = new Array();
                if (!animations) {
                    throw "Animation array is 'null' or 'undefined'!";
                }
                if (animations.length <= 0) {
                    throw "Animation array is empty";
                }
                this.animations = animations;
                for (let index = 0; index < this.animations.length; index++) {
                    const animation = this.animations[index];
                    animation.onComplete.add(this.onChildAnimationComplete.bind(this, animation));
                }
            }
            stop() {
                for (let index = 0; index < this.animations.length; index++) {
                    const animation = this.animations[index];
                    animation.stop();
                }
                super.stop();
            }
            pause() {
                for (let index = 0; index < this.animations.length; index++) {
                    const animation = this.animations[index];
                    if (animation.isPlaying()) {
                        animation.pause();
                    }
                }
                super.pause();
            }
            onChildAnimationComplete(childAnimation) {
                console.log("child animation complete");
            }
            foreachAnimation(callback) {
                for (let index = 0; index < this.animations.length; index++) {
                    const animation = this.animations[index];
                    callback(animation);
                }
            }
        }
        Animation.AbstractGroup = AbstractGroup;
    })(Animation = Funday.Animation || (Funday.Animation = {}));
})(Funday || (Funday = {}));
var Funday;
(function (Funday) {
    var Animation;
    (function (Animation) {
        class Bundle extends Funday.Animation.AbstractGroup {
            constructor() {
                super(...arguments);
                this.completedAnimationCount = 0;
            }
            play() {
                this.completedAnimationCount = 0;
                super.play();
                for (let index = 0; index < this.animations.length; index++) {
                    const animation = this.animations[index];
                    animation.play();
                }
            }
            onChildAnimationComplete(childAnimation) {
                this.completedAnimationCount++;
                //console.log(window.queue);
                //console.log("Completed Animation Count",this.completedAnimationCount);
                //console.log(childAnimation);
                if (this.completedAnimationCount === this.animations.length) {
                    this.onCompleted();
                }
            }
        }
        Animation.Bundle = Bundle;
    })(Animation = Funday.Animation || (Funday.Animation = {}));
})(Funday || (Funday = {}));
var Funday;
(function (Funday) {
    var Animation;
    (function (Animation) {
        class CameraFade extends Funday.Animation.Animation {
            constructor(game, color, durationMs, isTo) {
                super();
                this.game = null;
                this.onCameraAnimationComplete = null;
                this.startFunction = null;
                this.color = 0;
                this.durationMs = 0;
                this.game = game;
                this.startFunction = isTo ? game.camera.flash.bind(game.camera) : game.camera.fade.bind(game.camera);
                this.onCameraAnimationComplete = isTo ? game.camera.onFlashComplete : game.camera.onFadeComplete;
                this.color = color;
                this.durationMs = durationMs;
            }
            play() {
                this.onCameraAnimationComplete.add(this.onCameraAnimationCompleted, this);
                this.startFunction(this.color, this.durationMs);
                super.play();
            }
            stop() {
                this.onCameraAnimationComplete.remove(this.onCameraAnimationCompleted, this);
                super.stop();
                this.game.camera.resetFX();
            }
            pause() {
                console.error("pause not implemented");
                this.stop();
            }
            onCameraAnimationCompleted() {
                this.onCameraAnimationComplete.remove(this.onCameraAnimationCompleted, this);
                this.onCompleted();
            }
        }
        Animation.CameraFade = CameraFade;
    })(Animation = Funday.Animation || (Funday.Animation = {}));
})(Funday || (Funday = {}));
var Funday;
(function (Funday) {
    var Animation;
    (function (Animation) {
        class Event extends Animation.Animation {
            constructor(event) {
                super();
                this.onComplete.add(event);
            }
            play() {
                super.play();
                this.onCompleted();
            }
            pause() {
                console.warn("cannot pause event. ignoring");
            }
        }
        Animation.Event = Event;
    })(Animation = Funday.Animation || (Funday.Animation = {}));
})(Funday || (Funday = {}));
var Funday;
(function (Funday) {
    var Animation;
    (function (Animation) {
        class Loop extends Animation.Animation {
            constructor(animationToLoop, maxRepeatCount) {
                super();
                this.repeatCount = 0;
                this.maxRepeatCount = -1;
                this.animationToLoop = null;
                this.maxRepeatCount = maxRepeatCount;
                animationToLoop.onComplete.add(this.onLoopCycleFinished.bind(this));
                this.animationToLoop = animationToLoop;
            }
            onLoopCycleFinished() {
                if (this.isLoopingForever()) {
                    this.play();
                }
                else {
                    if (this.hasRepeatsLeft()) {
                        this.repeatCount++;
                        this.play();
                    }
                    else {
                        this.repeatCount = 0;
                        this.onCompleted();
                    }
                }
            }
            isLoopingForever() {
                return this.maxRepeatCount === -1;
            }
            hasRepeatsLeft() {
                return this.repeatCount < this.maxRepeatCount;
            }
            play() {
                super.play();
                this.animationToLoop.play();
            }
            stop() {
                this.repeatCount = 0;
                this.animationToLoop.stop();
                super.stop();
            }
            pause() {
                this.animationToLoop.pause();
                super.pause();
            }
        }
        Animation.Loop = Loop;
    })(Animation = Funday.Animation || (Funday.Animation = {}));
})(Funday || (Funday = {}));
var Funday;
(function (Funday) {
    var Animation;
    (function (Animation) {
        class Queue extends Funday.Animation.AbstractGroup {
            constructor() {
                super(...arguments);
                this.playIndex = 0;
            }
            play() {
                if (this.isPaused() && this.playIndex > 0) {
                    this.playAnimationAtIndex(this.playIndex);
                }
                else {
                    this.playAnimationAtIndex(0);
                }
                super.play();
            }
            playAnimationAtIndex(index) {
                this.playIndex = index;
                this.animations[index].play();
            }
            stop() {
                this.playIndex = 0;
                for (let index = 0; index < this.animations.length; index++) {
                    const animation = this.animations[index];
                    animation.stop();
                }
                super.stop();
            }
            onChildAnimationComplete(childAnimation) {
                let index = this.animations.indexOf(childAnimation);
                if (index === -1) {
                    throw "Animation is not member of this queue";
                }
                let nextIndex = index + 1;
                if (nextIndex === this.animations.length) {
                    this.onCompleted();
                    this.playIndex = 0;
                }
                else {
                    this.playAnimationAtIndex(nextIndex);
                }
            }
        }
        Animation.Queue = Queue;
    })(Animation = Funday.Animation || (Funday.Animation = {}));
})(Funday || (Funday = {}));
var Funday;
(function (Funday) {
    var Animation;
    (function (Animation) {
        class Sprite extends Funday.Animation.Animation {
            constructor(target, animationName, durationMs) {
                super();
                //console.log("Init Animation",target.bearType,animationName,durationMs);
                this.target = null;
                this.animationName = null;
                this.durationMs = null;
                this.onCompleteCallback = null;
                this.target = target;
                this.animationName = animationName;
                this.durationMs = durationMs;
                this.onCompleteCallback = this.onSpriteAnimationCompleted.bind(this);
                if (!this.target.animations.getAnimation(animationName)) {
                    throw "Sprite animation with the name '" + animationName + "' does not exist";
                }
            }
            play() {
                super.play();
                if (this.target.animations.currentAnim.isPaused && this.target.animations.currentAnim.name === this.animationName) {
                    this.target.animations.currentAnim.paused = false;
                }
                else {
                    let fps = this.convertDurationToFps();
                    this.target.animations.play(this.animationName, fps);
                }
                this.target.events.onAnimationComplete.add(this.onSpriteAnimationCompleted, this);
            }
            convertDurationToFps() {
                let spriteAnimation = this.target.animations.getAnimation(this.animationName);
                return Sprite.convertDurationMsToFps(this.durationMs, spriteAnimation);
            }
            static convertDurationMsToFps(durationMs, spriteAnimation) {
                let durationSeconds = durationMs / 1000;
                let framesPerSecond = spriteAnimation.frameTotal / durationSeconds;
                return framesPerSecond;
            }
            static convertFpsToDurationMs(fps, spriteAnimation) {
                let durationMs = (spriteAnimation.frameTotal / fps) * 1000;
                return durationMs;
            }
            pause() {
                console.log("Pause2",this.target.animations.currentAnim.name,this.animationName);
                if (this.target.animations.currentAnim.name === this.animationName) {
                    this.target.animations.paused = true;
                }
                //console.log("REMOVE thisoncomplete",this.onSpriteAnimationCompleted);
                this.target.events.onAnimationComplete.remove(this.onSpriteAnimationCompleted, this);
                super.pause();
            }
            stop() {
                console.log("Stop2",this)
                this.target.events.onAnimationComplete.remove(this.onSpriteAnimationCompleted, this);
                super.stop();
            }
            onSpriteAnimationCompleted(sprite, animation) {
                console.log("onSpriteAnimationCompleted",sprite.bearType,animation.name)
                if (sprite === this.target && animation.name === this.animationName) {
                    this.onCompleted();
                    console.log("onSpriteAnimationCompleted2");
                    //console.log(this.onCompleted);
                    this.target.events.onAnimationComplete.remove(this.onSpriteAnimationCompleted, this);
                }
            }
        }
        Animation.Sprite = Sprite;
    })(Animation = Funday.Animation || (Funday.Animation = {}));
})(Funday || (Funday = {}));
var Funday;
(function (Funday) {
    var Animation;
    (function (Animation) {
        class Tween extends Funday.Animation.Animation {
            constructor(game, target, to, durationMs, easing) {
                super();
                this.tween = null;
                this.isPause = false;
                this.tween = game.add.tween(target);
                this.tween.to(to, durationMs, easing);
                this.tween.onComplete.add(this.onComplete.dispatch, this.onComplete);
            }
            play() {
                super.play();
                if (this.tween.isPaused) {
                    this.tween.resume();
                }
                else {
                    this.tween.start();
                }
            }
            stop() {
                this.tween.stop();
                super.stop();
            }
            pause() {
                this.tween.pause();
                super.pause();
            }
            addOnUpdateCallback(callback, callbackContext) {
                this.tween.onUpdateCallback(callback, callbackContext);
            }
            setTimeScale(value) {
                this.tween.timeScale = value;
            }
        }
        Animation.Tween = Tween;
    })(Animation = Funday.Animation || (Funday.Animation = {}));
})(Funday || (Funday = {}));
var Toolbox;



(function (Toolbox) {
    class CartoonNetworkGame extends Phaser.Game {
        constructor() {
            super(1, 1, Phaser.CANVAS);
            this.version = new Version();
            this.services = null;
            this.modal = null;
            this.addedSounds = {};
            this.services = new Funday.Service.Provider(this);
            this.modal = new Funday.UI.Modal.Modal(this);
        }
        preBoot() {
            this.input.maxPointers = 1;
            this.stage.disableVisibilityChange = true;
            this.services.platform.determinePlatform();
            this.services.resolution.setupResolutionForGame();
            this.onBlur.add(this.onGameLoseFocus, this);
            this.onFocus.add(this.onGameFocus, this);
        }
        loadLoadScreenGfxForCurrentResolution() {
            let quality = this.services.resolution.getQuality();
            this.load.pack("Load_" + quality, "assets/data/assets.json");
        }
        loadGfxForCurrentResolution() {
            let quality = this.services.resolution.getQuality();
            this.load.pack(quality, "assets/data/assets.json");
        }
        applyResolutionRatio(value) {
            return this.services.resolution.applyResultionRatio(value);
        }
        applyResolutionRatioFloored(value) {
            return this.services.resolution.applyResultionRatioFloored(value);
        }
        responsiveDistanceFromBottom(value) {
            return this.height - this.applyResolutionRatio(value);
        }
        onGameFocus() {
            this.unmuteSounds();
        }
        onGameLoseFocus() {
            this.muteSounds();
        }
        muteSounds() {
            this.sound.mute = true;
        }
        unmuteSounds() {
            this.sound.mute = false;
        }
        createImage(x, y, spriteId, group) {
            if (!spriteId) {
                spriteId = new Funday.SpriteId(null, null);
            }
            let i = this.add.image(x || 0, y || 0, spriteId.key, spriteId.frame, group);
            return i;
        }
        createSprite(x, y, spriteId, group) {
            if (!spriteId) {
                spriteId = new Funday.SpriteId(null, null);
            }
            let s = this.add.sprite(x || 0, y || 0, spriteId.key, spriteId.frame, group);
            return s;
        }
        createTileSprite(x, y, width, height, spriteId, group) {
            return this.add.tileSprite(x, y, width, height, spriteId.key, spriteId.frame, group);
        }
        createButton(x, y, spriteId) {
            if (!spriteId) {
                spriteId = new Funday.SpriteId(null, null);
            }
            return new Funday.UI.Button(this, x, y, spriteId.key, spriteId.frame);
        }
        getFrameData(spriteId) {
            let data = this.cache.getFrameData(spriteId.key);
            let frame = data.getFrameByName(spriteId.frame);
            return frame;
        }
        getOrInitAudioSprite(audioId) {
            let audioSprite = this.addedSounds[audioId.key];
            if (!audioSprite) {
                this.addedSounds[audioId.key] = this.add.audioSprite(audioId.key);
                audioSprite = this.addedSounds[audioId.key];
            }
            return audioSprite;
        }
        playSound(audioId, volume = 1.0) {
            let audioSprite = this.getOrInitAudioSprite(audioId);
            return audioSprite.play(audioId.markerName, volume);
        }
    }
    Toolbox.CartoonNetworkGame = CartoonNetworkGame;
    class Version {
        constructor() {
            this.major = 0;
            this.minor = 0;
            this.revision = 0;
            this.name = "";
            this.description = "";
        }
        getVersionString() {
            return this.major + "." + this.minor + "." + this.revision;
        }
        getNameAndVersionString() {
            return this.name + " - " + this.getVersionString();
        }
    }
})(Toolbox || (Toolbox = {}));

var Funday;
(function (Funday) {
    var Service;
    (function (Service) {
        class Animation {
            constructor(game) {
                this.game = null;
                this.game = game;
            }
            tween(target, to, durationMs, easingMethod) {
                return new Funday.Animation.Tween(this.game, target, to, durationMs, easingMethod);
            }
            tweenArray(targets, to, durationMs, easingMethod) {
                let anims = [];
                for (let index = 0; index < targets.length; index++) {
                    const target = targets[index];
                    let anim = this.tween(target, to, durationMs, easingMethod);
                    anims.push(anim);
                }
                return this.bundle(anims);
            }
            tweenTint(sprite, toColor, durationMs, easingMethod) {
                let state = { progress: 0 };
                let maxProgress = 100;
                let animation = this.tween(state, { progress: maxProgress }, durationMs, easingMethod);
                let startColor = sprite.tint;
                animation.onPlay.add(function () {
                    startColor = sprite.tint;
                }, this);
                animation.addOnUpdateCallback(function () {
                    let color32 = Phaser.Color.interpolateColor(startColor, toColor, maxProgress, state.progress);
                    let rgb = Phaser.Color.getRGB(color32);
                    sprite.tint = Phaser.Color.getColor(rgb.r, rgb.g, rgb.b);
                }, this);
                return animation;
            }
            sprite(target, animationName, durationMs) {
                return new Funday.Animation.Sprite(target, animationName, durationMs);
            }
            spriteFps(target, animationName, framesPerSecond) {
                let phaserSpriteAnim = target.animations.getAnimation(animationName);
                let fps = framesPerSecond || phaserSpriteAnim.speed;
                let durationMs = Funday.Animation.Sprite.convertFpsToDurationMs(fps, phaserSpriteAnim);
                return new Funday.Animation.Sprite(target, animationName, durationMs);
            }
            delay(delayInMilliseconds) {
                let tween = this.tween({}, {}, delayInMilliseconds);
                tween.isPause = true;
                return tween;
            }
            event(callback) {
                return new Funday.Animation.Event(callback);
            }
            bundle(animations) {
                return new Funday.Animation.Bundle(animations);
            }
            queue(animations) {
                return new Funday.Animation.Queue(animations);
            }
            loop(animation) {
                return new Funday.Animation.Loop(animation, -1);
            }
            repeat(animation, repeatCount) {
                return new Funday.Animation.Loop(animation, repeatCount);
            }
            fadeFrom(color, durationMs) {
                return new Funday.Animation.CameraFade(this.game, color, durationMs, false);
            }
            fadeTo(color, durationMs) {
                return new Funday.Animation.CameraFade(this.game, color, durationMs, true);
            }
            fadeFromBlack(durationMs) {
                return new Funday.Animation.CameraFade(this.game, 0x000000, durationMs, true);
            }
            fadeToBlack(durationMs) {
                return new Funday.Animation.CameraFade(this.game, 0x000000, durationMs, false);
            }
            fadeFromWhite(durationMs) {
                return new Funday.Animation.CameraFade(this.game, 0xffffff, durationMs, true);
            }
            fadeToWhite(durationMs) {
                return new Funday.Animation.CameraFade(this.game, 0xffffff, durationMs, false);
            }
        }
        Service.Animation = Animation;
    })(Service = Funday.Service || (Funday.Service = {}));
})(Funday || (Funday = {}));
var Funday;
(function (Funday) {
    var Service;
    (function (Service) {
        class CNArcadeProvider {
            constructor(cnArcadeSDK, game) {
                this.achievement = new Service.CNArcadeAchievementService(cnArcadeSDK);
                this.persistence = new Service.CNArcadePersistenceService(cnArcadeSDK);
                this.ads = new Service.CNAdService(cnArcadeSDK);
                this.analytics = new Service.CNArcadeAnalytics(cnArcadeSDK);
                this.platform = new Service.PlatformService(game);
                this.animation = new Service.Animation(game);
                this.resolution = new Service.ResolutionService(game);
            }
        }
        Service.CNArcadeProvider = CNArcadeProvider;
    })(Service = Funday.Service || (Funday.Service = {}));
})(Funday || (Funday = {}));
var Funday;
(function (Funday) {
    var Service;
    (function (Service) {
        class Provider {
            constructor(game) {
                this.achievement = new Service.AchievementService();
                this.persistence = new Service.PersistenceService();
                this.ads = new Service.EmptyAdService();
                this.analytics = new Service.EmptyAnalytics();
                this.platform = new Service.PlatformService(game);
                this.animation = new Service.Animation(game);
                this.resolution = new Service.ResolutionService(game);
            }
        }
        Service.Provider = Provider;
    })(Service = Funday.Service || (Funday.Service = {}));
})(Funday || (Funday = {}));
var Funday;
(function (Funday) {
    var Service;
    (function (Service) {
        var Achievement;
        (function (Achievement_1) {
            class Achievement {
                constructor(id, maxProgress) {
                    this.id = 0;
                    this.progress = 0;
                    this.maxProgress = 1;
                    this.hasBeenAwarded = false;
                    this.id = id;
                    this.maxProgress = maxProgress;
                }
                shouldBeAwarded() {
                    return !this.hasBeenAwarded && this.hasReachedGoal();
                }
                hasReachedGoal() {
                    return this.progress >= this.maxProgress;
                }
            }
            Achievement_1.Achievement = Achievement;
        })(Achievement = Service.Achievement || (Service.Achievement = {}));
    })(Service = Funday.Service || (Funday.Service = {}));
})(Funday || (Funday = {}));
var Funday;
(function (Funday) {
    var Service;
    (function (Service) {
        var Achievement;
        (function (Achievement) {
            class AchievementMetadata {
                constructor(id, name, description, icon) {
                    this.id = 0;
                    this.name = null;
                    this.description = null;
                    this.iconSpriteId = null;
                    this.id = id;
                    this.name = name;
                    this.description = description;
                    this.iconSpriteId = icon;
                }
            }
            Achievement.AchievementMetadata = AchievementMetadata;
        })(Achievement = Service.Achievement || (Service.Achievement = {}));
    })(Service = Funday.Service || (Funday.Service = {}));
})(Funday || (Funday = {}));
var Funday;
(function (Funday) {
    var Service;
    (function (Service) {
        class AchievementService {
            constructor() {
            }
            award(achievement, metadata) {
                if (AchievementService.alertAchievements) {
                    alert("Achievement Completed!\n" + metadata.name + "(" + metadata.description + ")");
                }
                achievement.hasBeenAwarded = true;
            }
            getProgress(achievement) {
                return Number(localStorage.getItem("achiev_" + achievement.id.toString()));
            }
            updateProgress(achievement, progress) {
                localStorage.setItem("achiev_" + achievement.id.toString(), progress.toString());
            }
        }
        AchievementService.alertAchievements = true;
        Service.AchievementService = AchievementService;
    })(Service = Funday.Service || (Funday.Service = {}));
})(Funday || (Funday = {}));
var Funday;
(function (Funday) {
    var Service;
    (function (Service) {
        class CNArcadeAchievementService {
            constructor(cnArcadeSDK) {
                this.cnArcadeSDK = cnArcadeSDK;
            }
            loadAchievement(id) {
                return this.cnArcadeSDK.achievements.find((achievement) => achievement.id === id);
            }
            award(achievement) {
                if (achievement.hasBeenAwarded)
                    return;
                this.cnArcadeSDK.unlockAchievement(achievement.id).then((achiev) => {
                    achievement.hasBeenAwarded = true;
                }).catch((err) => {
                    console.log("Could not unlock achievement with id", achievement.id, ". ", err);
                });
            }
            getProgress(achievement) {
                return this.cnArcadeSDK.getAchievementProgress(achievement.id);
            }
            updateProgress(achievement, progress) {
                if (achievement.hasBeenAwarded)
                    return;
                achievement.progress = progress;
                this.cnArcadeSDK.setAchievementProgress(achievement.id, progress).then((achiev) => {
                    if (achiev.completed) {
                    }
                    else {
                        console.log("Achiev progress updated. Progress:", achiev.timesAcquired, "/", achiev.timesRequired);
                    }
                }).catch((err) => {
                    console.log("Could not update progress. ", err);
                });
            }
        }
        Service.CNArcadeAchievementService = CNArcadeAchievementService;
    })(Service = Funday.Service || (Funday.Service = {}));
})(Funday || (Funday = {}));
var Funday;
(function (Funday) {
    var Service;
    (function (Service) {
        class CNAdService {
            constructor(cnSDK) {
                this.cnSDK = cnSDK;
            }
            showAd() {
                return this.cnSDK.showAd();
            }
        }
        Service.CNAdService = CNAdService;
    })(Service = Funday.Service || (Funday.Service = {}));
})(Funday || (Funday = {}));
var Funday;
(function (Funday) {
    var Service;
    (function (Service) {
        class EmptyAdService {
            showAd() {
                return new Promise((resolve, reject) => {
                    return resolve();
                });
            }
        }
        Service.EmptyAdService = EmptyAdService;
    })(Service = Funday.Service || (Funday.Service = {}));
})(Funday || (Funday = {}));
var Funday;
(function (Funday) {
    var Service;
    (function (Service) {
        Service.GameLocations = {
            TITLE: 'title',
            PAUSE: 'pause',
            SHOP: 'shop',
            PLAY: 'play'
        };
    })(Service = Funday.Service || (Funday.Service = {}));
})(Funday || (Funday = {}));
var Funday;
(function (Funday) {
    var Service;
    (function (Service) {
        class CNArcadeAnalytics {
            constructor(cnSDK) {
                this.verbose = true;
                this.cnSDK = cnSDK;
            }
            trackLocation(location) {
                this.cnSDK.analytics.trackPlay(location);
                if (this.verbose)
                    console.log("Tracked play analytics from", location);
            }
        }
        Service.CNArcadeAnalytics = CNArcadeAnalytics;
    })(Service = Funday.Service || (Funday.Service = {}));
})(Funday || (Funday = {}));
var Funday;
(function (Funday) {
    var Service;
    (function (Service) {
        class EmptyAnalytics {
            trackLocation(location) {
            }
        }
        Service.EmptyAnalytics = EmptyAnalytics;
    })(Service = Funday.Service || (Funday.Service = {}));
})(Funday || (Funday = {}));
var Funday;
(function (Funday) {
    var Service;
    (function (Service) {
        class CNArcadePersistenceService {
            constructor(cnArcadeSDK) {
                this.state = {};
                this.highscoreKey = "highscore";
                this.verbose = true;
                this.cnArcadeSDK = cnArcadeSDK;
            }
            loadOrSetDefault(defaultGameState) {
                var gameStatePromise = this.cnArcadeSDK.getGameState();
                var highscorePromise = this.cnArcadeSDK.getHighScore();
                gameStatePromise.then((state) => {
                    this.state = state;
                    if (this.verbose)
                        console.log("Loaded game state!", state);
                    if (this.state == null || this.state == undefined) {
                        this.state = defaultGameState;
                        return Promise.reject("Game state is null or undefined.");
                    }
                    ;
                }).catch((err) => {
                    this.state = defaultGameState;
                    if (this.verbose)
                        console.log("Could not load game state. Setting default.", err);
                    this.cnArcadeSDK.setGameState(this.state).then(() => {
                        if (this.verbose)
                            console.log("Stored default game state!");
                    }).catch((err) => {
                        if (this.verbose)
                            console.log("Could not store game state.", err);
                    });
                });
                highscorePromise.then((highscore) => {
                    if (this.verbose)
                        console.log("Retrieved highscore to be", highscore);
                    this.cachedHighscore = highscore;
                }).catch((err) => {
                    if (this.verbose)
                        console.log("Could not retrieve highscore, setting default", err);
                    this.cachedHighscore = 0;
                });
                return Promise.all([gameStatePromise, highscorePromise]);
            }
            ;
            save(key, data) {
                if (key == this.highscoreKey) {
                    this.cnArcadeSDK.setHighScore(data).then((newScore) => {
                        if (this.verbose)
                            console.log("Set highscore to", newScore);
                        this.cachedHighscore = data;
                    }).catch((err) => {
                        if (this.verbose)
                            console.log("Could not set highscore", err);
                    });
                }
                else {
                    this.state[key] = data;
                    this.cnArcadeSDK.setGameState(this.state).then(() => {
                        if (this.verbose)
                            console.log("Stored game state!");
                    }).catch((err) => {
                        if (this.verbose)
                            console.log("Could not store game state. ", err);
                    });
                }
            }
            load(key) {
                if (key == this.highscoreKey) {
                    return this.cachedHighscore.toString();
                }
                if (this.verbose)
                    console.log("Loading with key", key, this.state[key]);
                return this.state[key];
            }
            hasSavedKey(key) {
                if (this.verbose)
                    console.log("Checkin for saved key", this.state[key], "staten er", this.state);
                return !!this.state[key];
            }
            saveDto(key, obj) {
                this.save(key, obj);
            }
            loadDto(key) {
                return this.load(key);
            }
            clearAllData() {
            }
        }
        Service.CNArcadePersistenceService = CNArcadePersistenceService;
    })(Service = Funday.Service || (Funday.Service = {}));
})(Funday || (Funday = {}));
var Funday;
(function (Funday) {
    var Service;
    (function (Service) {
        class PersistenceService {
            save(key, data) {
                localStorage.setItem(key, data.toString());
            }
            load(key) {
                return localStorage.getItem(key);
            }
            hasSavedKey(key) {
                return !!localStorage.getItem(key);
            }
            saveDto(key, obj) {
                let data = JSON.stringify(obj);
                this.save(key, data);
            }
            loadDto(key) {
                let data = this.load(key);
                return JSON.parse(data);
            }
            clearAllData() {
                localStorage.clear();
            }
        }
        Service.PersistenceService = PersistenceService;
    })(Service = Funday.Service || (Funday.Service = {}));
})(Funday || (Funday = {}));
var Funday;
(function (Funday) {
    var Service;
    (function (Service) {
        class PlatformService {
            constructor(game) {
                this.game = null;
                this.platform = PlatformType.None;
                this.forcePlatform = PlatformType.None;
                this.game = game;
            }
            determinePlatform() {
                if (this.forcePlatform === PlatformType.None) {
                    if (this.game.device.desktop) {
                        this.platform = PlatformType.Browser;
                    }
                    else {
                        this.platform = PlatformType.CartoonNetworkPlay;
                    }
                }
                else {
                    this.platform = this.forcePlatform;
                }
            }
            getPlatform() {
                return this.platform;
            }
        }
        Service.PlatformService = PlatformService;
        let PlatformType;
        (function (PlatformType) {
            PlatformType[PlatformType["None"] = 0] = "None";
            PlatformType[PlatformType["Browser"] = 1] = "Browser";
            PlatformType[PlatformType["CartoonNetworkPlay"] = 2] = "CartoonNetworkPlay";
        })(PlatformType = Service.PlatformType || (Service.PlatformType = {}));
    })(Service = Funday.Service || (Funday.Service = {}));
})(Funday || (Funday = {}));
var Funday;
(function (Funday) {
    var Service;
    (function (Service) {
        class CustomScaleManager {
            static calculateGameSize(minRes, maxRes) {
                let designAspectRatio = minRes.width / minRes.height;
                let thisRatio = window.innerWidth / window.innerHeight;
                console.log("This Ratio",thisRatio);
                let newWidth = minRes.width;
                let newHeight = minRes.height;
                if (thisRatio < designAspectRatio) {
                    newHeight = minRes.height * designAspectRatio / thisRatio;
                }
                else {
                    newWidth = minRes.width / (designAspectRatio / thisRatio);
                }
                return { width: newWidth, height: newHeight };
            }
        }
        Service.CustomScaleManager = CustomScaleManager;
    })(Service = Funday.Service || (Funday.Service = {}));
})(Funday || (Funday = {}));
var Funday;
(function (Funday) {
    var Service;
    (function (Service) {
        class ResolutionConfiguration {
            constructor(name, min, max, ratio) {
                this.minScreenResolution = null;
                this.maxScreenResolution = null;
                this.scaleMode = Phaser.ScaleManager.SHOW_ALL;
                
                this.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL;
                this.pageAlignHorizontally = true;
                this.pageAlignVertically = true;
                this.name = name;
                this.minScreenResolution = min;
                this.maxScreenResolution = max;
                this.ratio = ratio;
            }
            
            getName() {
                return this.name;
            }
            getMinScreenResolution() {
                return this.minScreenResolution;
            }
            getMaxScreenResolution() {
                return this.maxScreenResolution;
            }
            getRatio() {
                return this.ratio;
            }
            applyToGame(game) {
                
                game.scale.scaleMode = this.scaleMode;
                game.scale.fullScreenScaleMode = this.fullScreenScaleMode;
                game.scale.pageAlignHorizontally = this.pageAlignHorizontally;
                game.scale.pageAlignVertically = this.pageAlignVertically;
                if (this.minScreenResolution.width !== this.maxScreenResolution.width || this.minScreenResolution.height !== this.maxScreenResolution.height) {
                    let size = Service.CustomScaleManager.calculateGameSize(this.minScreenResolution, this.maxScreenResolution);
                    game.scale.setGameSize(size.width, size.height);
                }
                else {
                    game.scale.setGameSize(this.minScreenResolution.width, this.minScreenResolution.height);
                }
            }
            static createStaticResolutionConfiguration(name, width, height, ratio) {
                let minScreenSize = new ScreenResolution(width, height);
                let maxScreenSize = new ScreenResolution(width, height);
                let resolutionConfiguration = new ResolutionConfiguration(name, minScreenSize, maxScreenSize, ratio);
                return resolutionConfiguration;
            }
            static createFillAllResolutionConfiguration(name, minWidth, minHeight, maxWidth, maxHeight, ratio) {
                let minScreenSize = new ScreenResolution(minWidth, minHeight);
                let maxScreenSize = new ScreenResolution(maxWidth, maxHeight);
                let resolutionConfiguration = new ResolutionConfiguration(name, minScreenSize, maxScreenSize, ratio);
                return resolutionConfiguration;
            }
        }
        Service.ResolutionConfiguration = ResolutionConfiguration;
        class ScreenResolution {
            constructor(width, height) {
                this.width = 0;
                this.height = 0;
                this.width = width;
                this.height = height;
            }
        }
        Service.ScreenResolution = ScreenResolution;
        let Orientation;
        (function (Orientation) {
            Orientation[Orientation["Portrait"] = 0] = "Portrait";
            Orientation[Orientation["Landscape"] = 1] = "Landscape";
        })(Orientation = Service.Orientation || (Service.Orientation = {}));
    })(Service = Funday.Service || (Funday.Service = {}));
})(Funday || (Funday = {}));
var Funday;
(function (Funday) {
    var Service;
    (function (Service) {
        class ResolutionConfigurationRepository {
            constructor() {
                this.resolutionConfigurations = new Array();
            }
            addResolutionConfiguration(resolutionConfiguration) {
                this.resolutionConfigurations.push(resolutionConfiguration);
            }
            addNewLockedResolutionConfiguration(name, width, height, ratio) {
                let resolutionConfiguration = Service.ResolutionConfiguration.createStaticResolutionConfiguration(name, width, height, ratio);
                this.addResolutionConfiguration(resolutionConfiguration);
            }
            addNewFillAllResolutionConfiguration(name, minWidth, minHeight, maxWidth, maxHeight, ratio) {
                let resolutionConfiguration = Service.ResolutionConfiguration.createFillAllResolutionConfiguration(name, minWidth, minHeight, maxWidth, maxHeight, ratio);
                this.addResolutionConfiguration(resolutionConfiguration);
            }
            getByName(name) {
                let configuration = null;
                for (let index = 0; index < this.resolutionConfigurations.length; index++) {
                    const resolutionConfiguration = this.resolutionConfigurations[index];
                    if (resolutionConfiguration.getName() === name) {
                        configuration = resolutionConfiguration;
                        break;
                    }
                }
                return configuration;
            }
        }
        Service.ResolutionConfigurationRepository = ResolutionConfigurationRepository;
    })(Service = Funday.Service || (Funday.Service = {}));
})(Funday || (Funday = {}));
var Funday;
(function (Funday) {
    var Service;
    (function (Service) {
        class ResolutionService {
            constructor(game) {
                this.browserResolutionConfigurationRepository = null;
                this.cnPlayResolutionConfigurationRepository = null;
                this.resolutionConfiguration = null;
                this.game = game;
                this.browserResolutionConfigurationRepository = this.createBrowserResolutionRepository();
                this.cnPlayResolutionConfigurationRepository = this.createCNPlayResolutionRepository();
            }
            createBrowserResolutionRepository() {
                let resolutionConfigurationRepository = new Service.ResolutionConfigurationRepository();
                resolutionConfigurationRepository.addNewLockedResolutionConfiguration("HD", 1440, 1920, 1);
                resolutionConfigurationRepository.addNewLockedResolutionConfiguration("MD", 750, 1334, .7);
                resolutionConfigurationRepository.addNewLockedResolutionConfiguration("SD", 572, 1017, .53);
                return resolutionConfigurationRepository;
            }
            createCNPlayResolutionRepository() {
                let resolutionConfigurationRepository = new Service.ResolutionConfigurationRepository();
                resolutionConfigurationRepository.addNewFillAllResolutionConfiguration("HD", 1080, 1920, 1440, 1920, 1);
                resolutionConfigurationRepository.addNewFillAllResolutionConfiguration("MD", 750, 1334, 1001, 1334, .7);
                resolutionConfigurationRepository.addNewFillAllResolutionConfiguration("SD", 750, 1017, 763, 1017, .53);
                return resolutionConfigurationRepository;
            }
            getResolutionRepositoryForCurrentPlatform() {
                let platformService = this.game.services.platform;
                let resolutionRepository = null;
                if (platformService.getPlatform() === Service.PlatformType.Browser) {
                    resolutionRepository = this.browserResolutionConfigurationRepository;
                }
                else {
                    resolutionRepository = this.cnPlayResolutionConfigurationRepository;
                }
                
                //if(window.CNOverride) resolutionRepository = this.cnPlayResolutionConfigurationRepository;
                console.log(resolutionRepository)
                return resolutionRepository;
            }
            getQuality() {
                return this.resolutionConfiguration.getName();
            }
            determineBestResolution() {
                let resolutionConfigurationRepository = this.getResolutionRepositoryForCurrentPlatform();
                let quality = "HD";
                this.resolutionConfiguration = resolutionConfigurationRepository.getByName(quality);
            }
            setupResolutionForGame() {
                if (!this.resolutionConfiguration) {
                    this.determineBestResolution();
                }
                if (!this.resolutionConfiguration) {
                    throw "Could not find resolution configuration!";
                }
                this.resolutionConfiguration.applyToGame(this.game);
            }
            applyResultionRatio(value) {
                return value * this.resolutionConfiguration.getRatio();
            }
            applyResultionRatioFloored(value) {
                return Math.floor(this.applyResultionRatio(value));
            }
            getNotchSafeTop() {
                if (!this.notchSafeTop) {
                    if ((screen.width == 375 && screen.height === 812) || (screen.width == 414 && screen.height === 896)) {
                        this.notchSafeTop = 64;
                    }
                    else {
                        this.notchSafeTop = 0;
                    }
                }
                return this.notchSafeTop;
            }
        }
        Service.ResolutionService = ResolutionService;
    })(Service = Funday.Service || (Funday.Service = {}));
})(Funday || (Funday = {}));
var Funday;
(function (Funday) {
    var UI;
    (function (UI) {
        class Button extends Phaser.Group {
            constructor(game, x, y, key, overFrame, outFrame, downFrame, upFrame) {
                super(game);
                this.button = null;
                this.onDown = new Phaser.Signal();
                this.onUp = new Phaser.Signal();
                this.onOver = new Phaser.Signal();
                this.onOut = new Phaser.Signal();
                this.xFlipModifier = 1;
                this.yFlipModifier = 1;
                this.currentHideOrShowAnim = null;
                this.position.x = x;
                this.position.y = y;
                this.button = new Phaser.Button(game, 0, 0, key, null, null, overFrame, outFrame || overFrame, downFrame || overFrame, upFrame || overFrame);
                this.button.anchor.setTo(.5);
                this.add(this.button);
                this.button.onOverMouseOnly = true;
                this.button.onInputDown.add(this.onButtonDown, this);
                this.button.onInputOut.add(this.onButtonOut, this);
                this.button.onInputOver.add(this.onButtonOver, this);
                this.button.onInputUp.add(this.onButtonUp, this);
            }
            loadTexture(key, frame, stopAnimation) {
                this.button.loadTexture(key, frame, stopAnimation);
            }
            flipX() {
                this.xFlipModifier *= -1;
                this.button.scale.x *= this.xFlipModifier;
            }
            flipY() {
                this.yFlipModifier *= -1;
                this.button.scale.y *= this.yFlipModifier;
            }
            onButtonOut(gameObject, pointer) {
                let animationFactory = this.game.services.animation;
                var tween = animationFactory.tween(this.button.scale, { x: 1 * this.xFlipModifier, y: 1 * this.yFlipModifier }, 100);
                tween.play();
            }
            onButtonOver() {
                let animationFactory = this.game.services.animation;
                var tween = animationFactory.tween(this.button.scale, { x: 1.05 * this.xFlipModifier, y: 1.05 * this.yFlipModifier }, 100);
                tween.play();
                this.onOver.dispatch();
            }
            onButtonDown() {
                let animationFactory = this.game.services.animation;
                var tween = animationFactory.tween(this.button.scale, { x: .9 * this.xFlipModifier, y: .9 * this.yFlipModifier }, 100);
                tween.play();
                this.onDown.dispatch();
            }
            onButtonUp(gameObject, pointer, isPointerOver) {
                let animationFactory = this.game.services.animation;
                var tween = animationFactory.tween(this.button.scale, { x: 1 * this.xFlipModifier, y: 1 * this.yFlipModifier }, 100);
                tween.play();
                if (isPointerOver) {
                    this.onUp.dispatch();
                }
            }
            disableHide() {
                this.button.inputEnabled = false;
                this.visible = false;
            }
            enableShow() {
                this.button.inputEnabled = true;
                this.visible = true;
            }
            animatedDisableHide(callback) {
                this.clearCurrentHideOrShowAnim();
                this.currentHideOrShowAnim = this.createDisableHideAnimation();
                if (callback) {
                    this.currentHideOrShowAnim.onComplete.add(callback);
                }
                this.currentHideOrShowAnim.play();
            }
            animatedEnableShow() {
                this.clearCurrentHideOrShowAnim();
                this.currentHideOrShowAnim = this.createEnableShowAnimation();
                this.currentHideOrShowAnim.play();
            }
            clearCurrentHideOrShowAnim() {
                if (this.currentHideOrShowAnim) {
                    this.currentHideOrShowAnim.stop();
                    this.currentHideOrShowAnim = null;
                }
            }
            createDisableHideAnimation() {
                let animationFactory = this.game.services.animation;
                let tween = animationFactory.tween(this.scale, { x: 0, y: 0 }, 800, Phaser.Easing.Elastic.In);
                tween.onPlay.add(function () {
                    this.scale.setTo(1);
                    this.visible = true;
                    this.button.inputEnabled = false;
                }, this);
                tween.onComplete.add(function () {
                    this.visible = false;
                    this.scale.setTo(1);
                }, this);
                return tween;
            }
            createEnableShowAnimation() {
                let animationFactory = this.game.services.animation;
                let myScale = { x: this.scale.x, y: this.scale.y };
                let tween = animationFactory.tween(this.scale, { x: myScale.x, y: myScale.y }, 800, Phaser.Easing.Elastic.Out);
                tween.onPlay.add(function () {
                    this.button.inputEnabled = true;
                    this.scale.setTo(0);
                    this.visible = true;
                }, this);
                tween.onComplete.add(function () {
                }, this);
                return tween;
            }
            isInputEnabled() {
                return this.button.inputEnabled;
            }
            addIconFromSpriteId(spriteId) {
                return this.addIconSprite(spriteId.key, spriteId.frame);
            }
            addIconSprite(key, frame) {
                let iconSprite = this.game.add.sprite(0, 0, key, frame);
                iconSprite.anchor.setTo(.5, .5);
                this.button.addChild(iconSprite);
                return iconSprite;
            }
            setAudioSettings(buttonAudioSettings) {
                let game = this.game;
                let audioSprite = game.getOrInitAudioSprite(buttonAudioSettings.out);
                this.button.setOutSound(audioSprite, buttonAudioSettings.out.markerName);
                audioSprite = game.getOrInitAudioSprite(buttonAudioSettings.out);
                this.button.setOverSound(audioSprite, buttonAudioSettings.over.markerName);
                audioSprite = game.getOrInitAudioSprite(buttonAudioSettings.down);
                this.button.setDownSound(audioSprite, buttonAudioSettings.down.markerName);
                audioSprite = game.getOrInitAudioSprite(buttonAudioSettings.up);
                this.button.setUpSound(audioSprite, buttonAudioSettings.up.markerName);
            }
        }
        UI.Button = Button;
        class ButtonAudioSettings {
            constructor(over, down, up, out) {
                this.over = null;
                this.down = null;
                this.up = null;
                this.out = null;
                this.over = over;
                this.down = down;
                this.up = up;
                this.out = out;
            }
        }
        UI.ButtonAudioSettings = ButtonAudioSettings;
    })(UI = Funday.UI || (Funday.UI = {}));
})(Funday || (Funday = {}));
var Funday;
(function (Funday) {
    var UI;
    (function (UI) {
        class CartoonNetworkLoadScreen extends Phaser.Group {
            constructor(state, fillTint) {
                super(state.game, null, "Cartoon Network Load Screen");
                state.add.existing(this);
                if (this.game.cache.getFrameByName("load", "load_background")) {
                    let background = state.add.sprite(this.game.world.centerX, this.game.height, "load", "load_background");
                    background.anchor.set(0.5, 1.0);
                }
                if (this.game.cache.getFrameByName("load", "load_logo")) {
                    let logo = state.add.sprite(state.game.canvas.width * .5, state.game.canvas.height * .15, "load", "load_logo");
                    logo.anchor.setTo(.5, 0);
                }
                let loadbar = state.add.sprite(state.game.canvas.width * .5, state.game.canvas.height * .5, "load", "load_bar");
                loadbar.anchor.setTo(.5, 0);
                let progressbar = state.add.sprite(state.game.canvas.width * .5, state.game.canvas.height * .5, "load", "load_progress");
                progressbar.anchor.setTo(.5, 0);
                progressbar.tint = fillTint;
                state.load.setPreloadSprite(progressbar, 0);
            }
        }
        UI.CartoonNetworkLoadScreen = CartoonNetworkLoadScreen;
    })(UI = Funday.UI || (Funday.UI = {}));
})(Funday || (Funday = {}));
var Funday;
(function (Funday) {
    var UI;
    (function (UI) {
        class LoadScreen extends Phaser.Group {
            constructor(game, loadScreenSettings) {
                super(game, null, "Load Bar");
                this.loadScreenSettings = null;
                this.background = null;
                this.box = null;
                this.progressBar = null;
                this.loadScreenSettings = loadScreenSettings;
                this.background = this.createBackgroundGraphics(loadScreenSettings.backgroundColor);
                this.progressBar = this.createProgressBarGraphics(loadScreenSettings.fillColor);
                this.box = this.createBoxGraphics(loadScreenSettings.boxColor);
            }
            onLoadProgess(progress) {
                let percentage = progress / 100;
                this.progressBar.scale.x = percentage;
            }
            listenToState(state) {
                state.load.onFileComplete.add(this.onLoadProgess, this);
            }
            createBackgroundGraphics(color) {
                let g = this.game.add.graphics(0, 0, this);
                g.beginFill(color);
                g.drawRect(0, 0, this.game.canvas.width, this.game.canvas.height);
                g.endFill();
                this.add(g);
                return g;
            }
            createBoxGraphics(color) {
                let g = this.game.add.graphics(this.game.canvas.height * .5, this.game.canvas.height * .5, this);
                g.lineStyle(this.game.canvas.width * .0025, color, 1);
                let width = this.game.canvas.width * .65;
                let height = this.game.canvas.height * .025;
                g.drawRect(0, 0, width, height);
                g.lineStyle(0);
                g.position.x -= g.width / 2;
                g.position.y -= g.height / 2;
                this.add(g);
                return g;
            }
            createProgressBarGraphics(color) {
                let g = this.game.add.graphics(this.game.canvas.width * .5, this.game.canvas.height * .5, this);
                g.beginFill(color);
                let width = this.game.canvas.width * .65;
                let height = this.game.canvas.height * .025;
                g.drawRect(0, 0, width, height);
                g.endFill();
                g.position.x -= g.width / 2;
                g.position.y -= g.height / 2;
                this.add(g);
                return g;
            }
            static add(state, boxColor, fillColor, backgroundColor) {
                let loadScreenSettings = new LoadScreenSettings(boxColor, fillColor, backgroundColor);
                let loadScreen = new LoadScreen(state.game, loadScreenSettings);
                state.add.existing(loadScreen);
                loadScreen.listenToState(state);
            }
        }
        UI.LoadScreen = LoadScreen;
        class LoadScreenSettings {
            constructor(boxColor, fillColor, backgroundColor) {
                this.boxColor = null;
                this.fillColor = null;
                this.backgroundColor = null;
                this.boxColor = boxColor;
                this.fillColor = fillColor;
                this.backgroundColor = backgroundColor;
            }
        }
    })(UI = Funday.UI || (Funday.UI = {}));
})(Funday || (Funday = {}));
var Funday;
(function (Funday) {
    var UI;
    (function (UI) {
        class NotificationBoard extends Phaser.Group {
            constructor(game, durationMs) {
                super(game);
                this.currentIndex = 0;
                this.durationMs = 0;
                this.durationMs = durationMs;
                this.startNotificationTextCycle();
            }
            startNotificationTextCycle() {
                if (this.children.length <= 1) {
                    return;
                }
                let game = this.game;
                let animationFactory = game.services.animation;
                let waitAnim = animationFactory.delay(this.durationMs);
                waitAnim.onComplete.add(this.showNextNotification, this);
                let loop = animationFactory.loop(waitAnim);
                loop.play();
            }
            showNextNotification() {
                let game = this.game;
                let animationFactory = game.services.animation;
                this.currentIndex = (this.currentIndex + 1) % this.children.length;
                let animScaleDown = animationFactory.tween(this.scale, { x: 0, y: 0 }, 150);
                let animScaleUp = animationFactory.tween(this.scale, { x: 1, y: 1 }, 150);
                animScaleDown.onComplete.add(this.showCurrentChildIndex, this);
                let queue = animationFactory.queue([animScaleDown, animScaleUp]);
                queue.play();
            }
            showCurrentChildIndex() {
                for (let index = 0; index < this.children.length; index++) {
                    const child = this.children[index];
                    child.visible = this.currentIndex === index;
                }
            }
        }
        UI.NotificationBoard = NotificationBoard;
    })(UI = Funday.UI || (Funday.UI = {}));
})(Funday || (Funday = {}));
var Funday;
(function (Funday) {
    var UI;
    (function (UI) {
        class ShadowTextGroup extends Phaser.Group {
            constructor(game, bitmapFontKey, caption, size, color, shadowOffset = 4) {
                super(game);
                this.text = null;
                this.shadowText = null;
                let shadowText = game.add.bitmapText(0, 0, bitmapFontKey, caption, size);
                shadowText.tint = 0x000000;
                shadowText.anchor.setTo(.5);
                shadowText.alpha = 0.5;
                this.addChild(shadowText);
                let text = game.add.bitmapText(0, 0, bitmapFontKey, caption, size);
                text.tint = color;
                text.anchor.setTo(.5);
                this.addChild(text);
                this.text = text;
                this.shadowText = shadowText;
                this.setShadowOffset(shadowOffset);
                this.cacheAsBitmap = true;
                this.updateCache();
            }
            setText(caption) {
                this.text.text = caption;
                this.shadowText.text = caption;
                this.updateCache();
            }
            setShadowOffset(shadowOffset) {
                let offset = this.game.applyResolutionRatio(shadowOffset);
                this.shadowText.position.x = offset;
                this.shadowText.position.y = offset;
                this.updateCache();
            }
            setAnchor(x, y) {
                this.text.anchor.x = x;
                this.text.anchor.y = y;
                this.shadowText.anchor.x = x;
                this.shadowText.anchor.y = y;
                this.updateCache();
            }
            setShadowColorAndAlpha(color, alpha = 1.0) {
                this.shadowText.tint = color;
                this.shadowText.alpha = alpha;
                this.updateCache();
            }
            setFontSize(size) {
                this.text.fontSize = size;
                this.shadowText.fontSize = size;
                this.updateCache();
            }
        }
        UI.ShadowTextGroup = ShadowTextGroup;
    })(UI = Funday.UI || (Funday.UI = {}));
})(Funday || (Funday = {}));
var Funday;
(function (Funday) {
    var UI;
    (function (UI) {
        class TransitionHandler {
            constructor(game) {
                this.game = null;
                this.game = game;
            }
            handleTransition(from, to) {
            }
        }
        UI.TransitionHandler = TransitionHandler;
    })(UI = Funday.UI || (Funday.UI = {}));
})(Funday || (Funday = {}));
var Funday;
(function (Funday) {
    var UI;
    (function (UI) {
        class View extends Phaser.Group {
            constructor(game) {
                super(game);
                this.onTransitionInStart = new Phaser.Signal();
                this.onTransitionInComplete = new Phaser.Signal();
                this.onTransitionOutStart = new Phaser.Signal();
                this.onTransitionOutComplete = new Phaser.Signal();
                this.parent.removeChild(this);
            }
            onTransitionInStarted() {
                this.onTransitionInStart.dispatch();
            }
            onTransitionInCompleted() {
                this.onTransitionInComplete.dispatch();
            }
            onTransitionOutStarted() {
                this.onTransitionOutStart.dispatch();
            }
            onTranstionOutCompleted() {
                this.onTransitionOutComplete.dispatch();
            }
        }
        UI.View = View;
    })(UI = Funday.UI || (Funday.UI = {}));
})(Funday || (Funday = {}));
var Funday;
(function (Funday) {
    var UI;
    (function (UI) {
        class ViewContainer extends UI.View {
            constructor(game) {
                super(game);
                this.views = new Array();
                this.currentView = null;
                this.position.x = game.canvas.width * .5;
                this.position.y = game.canvas.height * .5;
            }
            addView(view) {
                this.views.push(view);
                this.add(view);
            }
            transitionTo(view, transitionHandler) {
                transitionHandler.handleTransition(this.currentView, view);
            }
        }
        UI.ViewContainer = ViewContainer;
    })(UI = Funday.UI || (Funday.UI = {}));
})(Funday || (Funday = {}));
var Funday;
(function (Funday) {
    var UI;
    (function (UI) {
        var Modal;
        (function (Modal_1) {
            class Modal extends Phaser.Sprite {
                constructor(game) {
                    super(game, 0, 0, null);
                    this.currentView = null;
                    this.game = null;
                    this.hasBeenInitialized = false;
                    this.isHiding = false;
                    this.onHidden = new Phaser.Signal();
                    this.game = game;
                }
                static generateBackgroundTexture(game) {
                    if (!Funday.UI.Modal.Modal.backgroundTexture) {
                        let bmd = new Phaser.BitmapData(game, "ModalBackground", game.canvas.width, game.canvas.height);
                        bmd.ctx.fillStyle = "black";
                        bmd.ctx.globalAlpha = .6;
                        bmd.ctx.fillRect(0, 0, game.canvas.width, game.canvas.height);
                        bmd.ctx.globalAlpha = 1;
                        bmd.dirty = true;
                        Funday.UI.Modal.Modal.backgroundTexture = bmd;
                    }
                    return Funday.UI.Modal.Modal.backgroundTexture;
                }
                static getBackgroundTexture(game) {
                    return this.generateBackgroundTexture(game);
                }
                setView(view) {
                    this.removeCurrentView();
                    if (view) {
                        this.addChild(view);
                        this.currentView = view;
                    }
                }
                removeCurrentView() {
                    if (this.currentView) {
                        this.currentView.kill();
                        this.removeChild(this.currentView);
                        this.currentView = null;
                    }
                }
                show() {
                    if (!this.hasBeenInitialized) {
                        this.loadTexture(Modal.getBackgroundTexture(this.game));
                        this.hasBeenInitialized = true;
                    }
                    this.revive();
                    this.currentView.revive();
                    this.inputEnabled = true;
                    let alphaAnim = this.game.services.animation.tween(this, { alpha: 1 }, 500);
                    if (this.currentView) {
                        this.currentView.scale.setTo(0);
                        this.currentView.alignIn(this, Phaser.CENTER);
                        let tweenAnim = this.game.services.animation.tween(this.currentView.scale, { x: 1, y: 1 }, 200, Phaser.Easing.Back.Out);
                        let queue = this.game.services.animation.queue([alphaAnim, tweenAnim]);
                        let currentView = this.currentView;
                        queue.onPlay.add(function () {
                            currentView.onTransitionInStarted();
                        });
                        queue.onComplete.add(function () {
                            currentView.onTransitionInCompleted();
                        }, this);
                        queue.play();
                    }
                    else {
                        alphaAnim.play();
                    }
                }
                instantShow() {
                    if (!this.hasBeenInitialized) {
                        this.loadTexture(Modal.getBackgroundTexture(this.game));
                        this.hasBeenInitialized = true;
                    }
                    this.currentView.scale.setTo(1);
                    this.currentView.alignIn(this, Phaser.CENTER);
                    this.alpha = 1;
                    this.visible = true;
                    this.revive();
                    this.currentView.revive();
                    this.inputEnabled = true;
                    this.currentView.onTransitionInStarted();
                    this.currentView.onTransitionInCompleted();
                }
                instantHide() {
                    this.alpha = 0;
                    this.onHide();
                }
                hide() {
                    this.isHiding = true;
                    let tweenAnim = this.game.services.animation.tween(this.currentView.scale, { x: 0, y: 0 }, 200, Phaser.Easing.Back.In);
                    let alphaAnim = this.game.services.animation.tween(this, { alpha: 0 }, 500);
                    let queue = this.game.services.animation.queue([tweenAnim, alphaAnim]);
                    queue.onPlay.add(this.currentView.onTransitionOutStarted, this.currentView);
                    queue.onComplete.add(this.onHide, this);
                    queue.onPlay.add(this.currentView.onTransitionOutStarted, this.currentView);
                    queue.onComplete.add(this.currentView.onTranstionOutCompleted, this.currentView);
                    queue.play();
                }
                onHide() {
                    this.kill();
                    this.currentView.onTranstionOutCompleted();
                    this.currentView.kill();
                    this.inputEnabled = false;
                    this.isHiding = false;
                    this.onHidden.dispatch();
                }
                update() {
                    if (this.alive && this.currentView) {
                        this.currentView.update();
                    }
                }
            }
            Modal.backgroundTexture = null;
            Modal_1.Modal = Modal;
        })(Modal = UI.Modal || (UI.Modal = {}));
    })(UI = Funday.UI || (Funday.UI = {}));
})(Funday || (Funday = {}));
var Funday;
(function (Funday) {
    var Utils;
    (function (Utils) {
        class EnumToObjectMap {
            constructor() {
                this.backingArray = new Array();
            }
            add(key, obj) {
                if (this.backingArray[key]) {
                    throw "Enum to Object map already contains key";
                }
                this.backingArray[key] = obj;
            }
            get(key) {
                return this.backingArray[key];
            }
        }
        Utils.EnumToObjectMap = EnumToObjectMap;
    })(Utils = Funday.Utils || (Funday.Utils = {}));
})(Funday || (Funday = {}));
var Funday;
(function (Funday) {
    var Utils;
    (function (Utils) {
        class LootTable {
            constructor() {
                this.autoResolveDroppedLootTables = true;
                this.lootTable = new Array();
            }
            addItem(item, weight) {
                let dropItem = new WeightedItem(item, weight);
                this.lootTable.push(dropItem);
            }
            getRandomItem() {
                let totalWeight = this.calculateTotalWeight();
                let targetWeight = this.getRandomValue(0, totalWeight);
                let lootTableItem = this.getDropItemFromWeight(targetWeight);
                return lootTableItem;
            }
            isEmpty() {
                return this.lootTable.length === 0;
            }
            hasItems() {
                return !this.isEmpty();
            }
            calculateTotalWeight() {
                let sum = 0;
                for (let i = 0; i < this.lootTable.length; i++) {
                    const weightedItem = this.lootTable[i];
                    sum += weightedItem.weight;
                }
                return sum;
            }
            getRandomValue(fromInclusive, toExclusive) {
                return Math.random() * (toExclusive - fromInclusive) + fromInclusive;
            }
            getDropItemFromWeight(targetWeight) {
                let item = null;
                let sum = 0;
                for (let i = 0; i < this.lootTable.length; i++) {
                    const weightedItem = this.lootTable[i];
                    sum += weightedItem.weight;
                    if (sum >= targetWeight) {
                        item = weightedItem.item;
                        if (this.autoResolveDroppedLootTables && item instanceof LootTable) {
                            item = item.getRandomItem();
                        }
                        break;
                    }
                }
                return item;
            }
        }
        Utils.LootTable = LootTable;
        class WeightedItem {
            constructor(item, weight) {
                this.item = null;
                this.weight = 0;
                this.item = item;
                this.weight = weight;
            }
        }
        Utils.WeightedItem = WeightedItem;
    })(Utils = Funday.Utils || (Funday.Utils = {}));
})(Funday || (Funday = {}));
var Funday;
(function (Funday) {
    var Utils;
    (function (Utils) {
        class MaskHelper {
            static addRectangleMask(game, width, height, parent) {
                let graphics = game.add.graphics(0, 0);
                if (parent) {
                    parent.addChild(graphics);
                }
                graphics.beginFill(0xFFFF00);
                graphics.drawRect(0, 0, width, height);
                graphics.endFill();
                return graphics;
            }
        }
        Utils.MaskHelper = MaskHelper;
    })(Utils = Funday.Utils || (Funday.Utils = {}));
})(Funday || (Funday = {}));
var Funday;
(function (Funday) {
    var WeBareBearsTrippleTrip;
    (function (WeBareBearsTrippleTrip) {
        class AchievementTracker {
            constructor(game, levelControl) {
                this.game = null;
                this.game = game;
                levelControl.levelEvents.onCoinCollected.add(this.onCoinCollected, this);
                levelControl.levelEvents.onBearStackEnteredTile.add(this.onBearStackEnteredTile, this);
                levelControl.levelEvents.onBearRevived.add(this.onBearRevived, this);
                levelControl.levelEvents.onHelperPowerActivated.add(this.onHelperPowerActivated, this);
                levelControl.levelEvents.onItemBoughtInShop.add(this.onItemBoughtInShop, this);
            }
            onCoinCollected() {
                this.checkForAchivementUnlock();
            }
            onBearStackEnteredTile() {
                this.game.inventory.incrementAchievementProgress(WeBareBearsTrippleTrip.WeBareBearsAchivementType.Travel5000Distance);
                this.checkForAchivementUnlock();
            }
            onBearRevived() {
                this.game.inventory.incrementAchievementProgress(WeBareBearsTrippleTrip.WeBareBearsAchivementType.PickUp10Bears);
                this.checkForAchivementUnlock();
            }
            onHelperPowerActivated(helperType) {
                let inventory = this.game.inventory;
                let helpers = [WeBareBearsTrippleTrip.HelperType.Charlie, WeBareBearsTrippleTrip.HelperType.Chloe, WeBareBearsTrippleTrip.HelperType.Lucy, WeBareBearsTrippleTrip.HelperType.RangerTabes, WeBareBearsTrippleTrip.HelperType.RoboBear, WeBareBearsTrippleTrip.HelperType.Timber];
                let uniqueUsedHelperCount = 0;
                for (let index = 0; index < helpers.length; index++) {
                    const helper = helpers[index];
                    if (inventory.getNumberOfTimesHelperOfTypeHasBeenUsed(helper) > 0) {
                        uniqueUsedHelperCount++;
                    }
                }
                inventory.setAchievementProgress(WeBareBearsTrippleTrip.WeBareBearsAchivementType.UseAllHelpersOnce, uniqueUsedHelperCount);
                this.checkForAchivementUnlock();
            }
            onItemBoughtInShop(item) {
                this.game.inventory.addToAchievementProgress(WeBareBearsTrippleTrip.WeBareBearsAchivementType.Use200CoinsInShop, item.price);
                this.checkForAchivementUnlock();
            }
            setAchievementProgress(id, value) {
                this.game.inventory.setAchievementProgress(id, value);
                this.checkForAchivementUnlock();
            }
            checkForAchivementUnlock() {
                let awardsGiven = false;
                let game = this.game;
                this.game.inventory.foreachAchivement(function (achievement) {
                    if (achievement.shouldBeAwarded()) {
                        game.services.achievement.award(achievement, game.repositories.achievement.getMetadata(achievement.id));
                        awardsGiven = true;
                    }
                });
                if (awardsGiven) {
                    game.inventory.save();
                }
            }
            saveAchievements() {
                this.game.inventory.foreachAchivement((achiev) => {
                    console.log("saved " + achiev.progress);
                    this.game.services.achievement.updateProgress(achiev, achiev.progress);
                });
            }
        }
        WeBareBearsTrippleTrip.AchievementTracker = AchievementTracker;
    })(WeBareBearsTrippleTrip = Funday.WeBareBearsTrippleTrip || (Funday.WeBareBearsTrippleTrip = {}));
})(Funday || (Funday = {}));
var Funday;
(function (Funday) {
    var WeBareBearsTrippleTrip;
    (function (WeBareBearsTrippleTrip) {
        class Game extends Toolbox.CartoonNetworkGame {
            constructor(sdk) {
                super();
                this.screenManager = null;
                this.repositories = null;
                this.inventory = null;
                this.version.major = 1;
                this.version.minor = 0;
                this.version.revision = 8;
                this.version.name = "";
                this.setupSDK(sdk).then(() => {
                });
                this.state.add(StateKey.Boot, WeBareBearsTrippleTrip.StateBoot, false);
                this.state.add(StateKey.Load, WeBareBearsTrippleTrip.StateLoad, false);
                this.state.add(StateKey.Game, WeBareBearsTrippleTrip.StateGame, false);
                this.startBoot();
            }
            setupSDK(sdk) {
                var p = Promise.resolve();
                if (sdk == undefined)
                    return p;
                this.services = new Funday.Service.CNArcadeProvider(sdk, this);
                sdk.setPlayFunction(() => {
                    this.paused = false;
                });
                sdk.setPauseFunction(() => {
                    this.paused = true;
                });
                return this.services.persistence.loadOrSetDefault({});
            }
            startBoot() {
                this.state.start(StateKey.Boot);
            }
            startLoad() {
                this.state.start(StateKey.Load);
            }
            startGame() {
                this.state.start(StateKey.Game);
            }
            onLoadComplete() {
                this.repositories = new RepositoryOfRepositories(this);
                this.inventory = new WeBareBearsTrippleTrip.Inventory(this);
            }
            createButton(x, y, spriteId) {
                let button = super.createButton(x, y, spriteId);
                let soundRepository = this.repositories.sound;
                button.setAudioSettings(WeBareBearsTrippleTrip.SoundRepository.defaultButtonAudioSettings);
                return button;
            }
        }
        WeBareBearsTrippleTrip.Game = Game;
        class RepositoryOfRepositories {
            constructor(game) {
                this.pool = null;
                this.map = null;
                this.difficulty = null;
                this.sound = null;
                this.shop = null;
                this.achievement = null;
                this.pool = new WeBareBearsTrippleTrip.PoolRepository(game);
                this.map = new WeBareBearsTrippleTrip.MapRepository(game);
                this.difficulty = new WeBareBearsTrippleTrip.DifficultyRepository(game);
                this.sound = new WeBareBearsTrippleTrip.SoundRepository(game);
                this.shop = new WeBareBearsTrippleTrip.ShopItemRepository(game);
                this.achievement = new WeBareBearsTrippleTrip.AchievementRepository(game);
            }
        }
        WeBareBearsTrippleTrip.RepositoryOfRepositories = RepositoryOfRepositories;
        class StateKey {
        }
        StateKey.Boot = "Boot";
        StateKey.Load = "Load";
        StateKey.Game = "Game";
    })(WeBareBearsTrippleTrip = Funday.WeBareBearsTrippleTrip || (Funday.WeBareBearsTrippleTrip = {}));
})(Funday || (Funday = {}));
var Funday;
(function (Funday) {
    var WeBareBearsTrippleTrip;
    (function (WeBareBearsTrippleTrip) {
        class Inventory {
            constructor(game) {
                this.game = null;
                this.persistenceKey = "FundayFactory.WeBareBearsStackTracks.release.gameState.v1";
                this.state = null;
                this.currentHighscore = 0;
                this.game = game;
                if (this.hasPreviousGameState()) {
                    this.load();
                }
                else {
                    this.state = new InventoryStateVersion1();
                }
            }
            hasPreviousGameState() {
                return this.game.services.persistence.hasSavedKey(this.persistenceKey);
            }
            load() {
                let dto = this.game.services.persistence.loadDto(this.persistenceKey);
                if (dto._version === 1) {
                    this.state = new InventoryStateVersion1().fromState(dto);
                }
            }
            save() {
                this.game.services.persistence.saveDto(this.persistenceKey, this.state);
            }
            addCoins(coinCount) {
                this.state.coins += coinCount;
                return this.state.coins;
            }
            setCoins(coinCount) {
                this.state.coins = coinCount;
            }
            incrementCoinCount() {
                ++this.state.coins;
                return this.state.coins;
            }
            getCoins() {
                return this.state.coins;
            }
            canAfford(price) {
                return this.getCoins() >= price;
            }
            setHighscore(highscore) {
                this.currentHighscore = highscore;
            }
            getHighscore() {
                let highscoreKey = this.game.services.persistence.highscoreKey;
                this.currentHighscore = Math.max(this.currentHighscore, Number(this.game.services.persistence.load(highscoreKey)));
                return this.currentHighscore;
            }
            saveHighscore() {
                let highscoreKey = this.game.services.persistence.highscoreKey;
                this.game.services.persistence.save(highscoreKey, this.currentHighscore.toString());
            }
            hasHelperQueueRoomForHelper() {
                return this.state.helperQueue.indexOf(WeBareBearsTrippleTrip.HelperType.None) !== -1;
            }
            isHelperOfTypeInQueue(helperType) {
                return this.state.helperQueue.indexOf(helperType) !== -1;
            }
            hasHelperInQueue() {
                let hasHelperInQueue = false;
                for (let index = 0; index < this.state.helperQueue.length; index++) {
                    const helper = this.state.helperQueue[index];
                    if (helper !== WeBareBearsTrippleTrip.HelperType.None) {
                        hasHelperInQueue = true;
                        break;
                    }
                }
                return hasHelperInQueue;
            }
            addHelperToHelperQueue(helperType) {
                let freeIndex = this.state.helperQueue.indexOf(WeBareBearsTrippleTrip.HelperType.None);
                if (freeIndex >= 0) {
                    this.state.helperQueue[freeIndex] = helperType;
                    this.save();
                }
                else {
                    throw "Could not add helper. There was not enough room in helper queue";
                }
                return freeIndex;
            }
            consumeHelper(helperType) {
                if (helperType !== WeBareBearsTrippleTrip.HelperType.None) {
                    let helperIndex = this.state.helperQueue.indexOf(helperType);
                    if (helperIndex >= 0) {
                        this.state.helperQueue.splice(helperIndex, 1);
                        this.state.helperQueue.push(WeBareBearsTrippleTrip.HelperType.None);
                        this.save();
                    }
                    else {
                        throw "Could not find helper to consume!";
                    }
                }
                else {
                    throw "Could not consume Helper 'None'";
                }
            }
            foreachHelperQueueSlot(callback) {
                for (let index = 0; index < this.state.helperQueue.length; index++) {
                    const helperId = this.state.helperQueue[index];
                    callback(index, helperId);
                }
            }
            hasCompletedTapRotateTileTutorial() {
                return this.state.tutorialState.hasCompletedTapToRotateTutorial;
            }
            hasCompletedShopTutorial() {
                return this.state.tutorialState.hasCompletedShopTutorial;
            }
            hasCompletedCrateTutorial() {
                return this.state.tutorialState.hasCompletedCrateTutorial;
            }
            markTapRotateTileTutorialAsCompleted() {
                this.state.tutorialState.hasCompletedTapToRotateTutorial = true;
                this.save();
            }
            markShopTutorialAsCompleted() {
                this.state.tutorialState.hasCompletedShopTutorial = true;
                this.save();
            }
            markCrateTutorialAsCopmpleted() {
                this.state.tutorialState.hasCompletedCrateTutorial = true;
                this.save();
            }
            debugReset() {
                this.state = new InventoryStateVersion1();
                this.save();
                window.location.reload();
            }
            onHelperActivated(helperType) {
                this.state.stats.helperUseCount[helperType]++;
            }
            getNumberOfTimesHelperOfTypeHasBeenUsed(helperType) {
                return this.state.stats.helperUseCount[helperType];
            }
            foreachAchivement(callback) {
                for (let index = 0; index < this.state.achievements.length; index++) {
                    const achivement = this.state.achievements[index];
                    callback(achivement);
                }
            }
            setAchievementProgress(achievementId, value) {
                let achievement = this.getAchievementById(achievementId);
                if (!achievement)
                    return;
                console.log(achievementId.toString() + " progress " + achievement.progress);
                achievement.progress = Math.min(value, achievement.maxProgress);
            }
            incrementAchievementProgress(id) {
                let achievement = this.getAchievementById(id);
                if (!achievement)
                    return;
                console.log(id.toString() + " progress " + achievement.progress);
                achievement.progress = Math.min(achievement.progress + 1, achievement.maxProgress);
            }
            addToAchievementProgress(id, value) {
                let achievement = this.getAchievementById(id);
                if (!achievement)
                    return;
                achievement.progress = Math.min(achievement.progress + value, achievement.maxProgress);
            }
            getAchievementById(id) {
                let achievement = null;
                for (let index = 0; index < this.state.achievements.length; index++) {
                    const a = this.state.achievements[index];
                    if (a.id === id) {
                        achievement = a;
                        break;
                    }
                }
                return achievement;
            }
        }
        WeBareBearsTrippleTrip.Inventory = Inventory;
        class InventoryStateVersion1 {
            constructor() {
                this._persistenceKey = "FundayFactory.WeBareBearsTrippleTrip.gameState.v1";
                this._version = 1;
                this.coins = 0;
                this.helperQueue = [WeBareBearsTrippleTrip.HelperType.None, WeBareBearsTrippleTrip.HelperType.None, WeBareBearsTrippleTrip.HelperType.None, WeBareBearsTrippleTrip.HelperType.None, WeBareBearsTrippleTrip.HelperType.None, WeBareBearsTrippleTrip.HelperType.None];
                this.tutorialState = new TutorialState1();
                this.stats = new StatsState1();
                this.achievements = WeBareBearsTrippleTrip.AchievementRepository.getInitialAchivementState();
            }
            fromState(input) {
                this.coins = input.coins;
                this.helperQueue = input.helperQueue;
                this.tutorialState = this.tutorialState.fromState(input.tutorialState);
                return this;
            }
        }
        class TutorialState1 {
            constructor() {
                this._version = 1;
                this.hasCompletedTapToRotateTutorial = false;
                this.hasCompletedShopTutorial = false;
                this.hasCompletedCrateTutorial = false;
            }
            fromState(input) {
                this.hasCompletedTapToRotateTutorial = input.hasCompletedTapToRotateTutorial;
                this.hasCompletedShopTutorial = input.hasCompletedShopTutorial;
                this.hasCompletedCrateTutorial = input.hasCompletedCrateTutorial;
                return this;
            }
        }
        class StatsState1 {
            constructor() {
                this.helperUseCount = [];
                this.helperUseCount[WeBareBearsTrippleTrip.HelperType.None] = 0;
                this.helperUseCount[WeBareBearsTrippleTrip.HelperType.Charlie] = 0;
                this.helperUseCount[WeBareBearsTrippleTrip.HelperType.Chloe] = 0;
                this.helperUseCount[WeBareBearsTrippleTrip.HelperType.Lucy] = 0;
                this.helperUseCount[WeBareBearsTrippleTrip.HelperType.RangerTabes] = 0;
                this.helperUseCount[WeBareBearsTrippleTrip.HelperType.RoboBear] = 0;
                this.helperUseCount[WeBareBearsTrippleTrip.HelperType.Timber] = 0;
            }
            fromState(input) {
                this.helperUseCount = input.helperUseCount || this.helperUseCount;
                return this;
            }
        }
    })(WeBareBearsTrippleTrip = Funday.WeBareBearsTrippleTrip || (Funday.WeBareBearsTrippleTrip = {}));
})(Funday || (Funday = {}));
var Funday;
(function (Funday) {
    var WeBearBears;
    (function (WeBearBears) {
        class AudioLibrary {
        }
        AudioLibrary.main = {
            music: {
                FundayFactory_CartoonNetwork_WeBareBearsMusicUdkast02LOOP: new Funday.AudioId('main', '/music/Funday Factory - Cartoon Network - We Bare Bears_Music_Udkast02_LOOP'),
            },
            sfxBearsHitEndOfRoad: {
                sfxBearsHitEndOfRoad01_Copy: new Funday.AudioId('main', '/sfx_Bears_Hit_End_of_Road/sfx_Bears_Hit_End_of_Road_01 - Copy'),
                sfxBearsHitEndOfRoad01: new Funday.AudioId('main', '/sfx_Bears_Hit_End_of_Road/sfx_Bears_Hit_End_of_Road_01'),
                sfxBearsHitEndOfRoad02: new Funday.AudioId('main', '/sfx_Bears_Hit_End_of_Road/sfx_Bears_Hit_End_of_Road_02'),
                sfxBearsHitEndOfRoad03: new Funday.AudioId('main', '/sfx_Bears_Hit_End_of_Road/sfx_Bears_Hit_End_of_Road_03'),
                sfxBearsHitEndOfRoad04: new Funday.AudioId('main', '/sfx_Bears_Hit_End_of_Road/sfx_Bears_Hit_End_of_Road_04'),
            },
            sfxBuyCharacter: {
                sfxBuyCharacter01: new Funday.AudioId('main', '/sfx_Buy_Character/sfx_Buy_Character_01'),
                sfxBuyCharacter02: new Funday.AudioId('main', '/sfx_Buy_Character/sfx_Buy_Character_02'),
                sfxBuyCharacter03: new Funday.AudioId('main', '/sfx_Buy_Character/sfx_Buy_Character_03'),
            },
            sfxBuyCharacterDenied: {
                sfxBuyCharacterDenied01: new Funday.AudioId('main', '/sfx_Buy_Character_Denied/sfx_Buy_Character_Denied_01'),
            },
            sfxCharacterPower: {
                sfxCharacterPower01: new Funday.AudioId('main', '/sfx_Character_Power/sfx_Character_Power_01'),
                sfxCharacterPower02: new Funday.AudioId('main', '/sfx_Character_Power/sfx_Character_Power_02'),
                sfxCharacterPower03: new Funday.AudioId('main', '/sfx_Character_Power/sfx_Character_Power_03'),
            },
            sfxClickCellPhone: {
                sfxClickCellPhone: new Funday.AudioId('main', '/sfx_Click_Cell_Phone/sfx_Click_Cell_Phone'),
            },
            sfxClickCellPhoneHangUp: {
                sfxClickCellPhoneHangUp: new Funday.AudioId('main', '/sfx_Click_Cell_Phone_Hang_Up/sfx_Click_Cell_Phone_Hang_Up'),
            },
            sfxCoinAppear: {
                sfxCoinAppear01: new Funday.AudioId('main', '/sfx_Coin_Appear/sfx_Coin_Appear_01'),
                sfxCoinAppear010: new Funday.AudioId('main', '/sfx_Coin_Appear/sfx_Coin_Appear_010'),
                sfxCoinAppear011: new Funday.AudioId('main', '/sfx_Coin_Appear/sfx_Coin_Appear_011'),
                sfxCoinAppear012: new Funday.AudioId('main', '/sfx_Coin_Appear/sfx_Coin_Appear_012'),
                sfxCoinAppear02: new Funday.AudioId('main', '/sfx_Coin_Appear/sfx_Coin_Appear_02'),
                sfxCoinAppear03: new Funday.AudioId('main', '/sfx_Coin_Appear/sfx_Coin_Appear_03'),
                sfxCoinAppear04: new Funday.AudioId('main', '/sfx_Coin_Appear/sfx_Coin_Appear_04'),
                sfxCoinAppear05: new Funday.AudioId('main', '/sfx_Coin_Appear/sfx_Coin_Appear_05'),
                sfxCoinAppear06: new Funday.AudioId('main', '/sfx_Coin_Appear/sfx_Coin_Appear_06'),
                sfxCoinAppear07: new Funday.AudioId('main', '/sfx_Coin_Appear/sfx_Coin_Appear_07'),
                sfxCoinAppear08: new Funday.AudioId('main', '/sfx_Coin_Appear/sfx_Coin_Appear_08'),
                sfxCoinAppear09: new Funday.AudioId('main', '/sfx_Coin_Appear/sfx_Coin_Appear_09'),
            },
            sfxFootsteps: {
                sfxFootsteps01: new Funday.AudioId('main', '/sfx_Footsteps/sfx_Footsteps_01'),
                sfxFootsteps02: new Funday.AudioId('main', '/sfx_Footsteps/sfx_Footsteps_02'),
                sfxFootsteps03: new Funday.AudioId('main', '/sfx_Footsteps/sfx_Footsteps_03'),
                sfxFootsteps04: new Funday.AudioId('main', '/sfx_Footsteps/sfx_Footsteps_04'),
                sfxFootsteps05: new Funday.AudioId('main', '/sfx_Footsteps/sfx_Footsteps_05'),
            },
            sfxGameOver: {
                sfxGameOver: new Funday.AudioId('main', '/sfx_Game_Over/sfx_Game_Over'),
            },
            sfxHelmetOn: {
                sfxHelmetOn: new Funday.AudioId('main', '/sfx_Helmet_On/sfx_Helmet_On'),
            },
            sfxHoverCharacters: {
                sfxHoverCharacters: new Funday.AudioId('main', '/sfx_Hover_Characters/sfx_Hover_Characters'),
            },
            sfxHoverStartButton: {
                sfxHoverStartButton01: new Funday.AudioId('main', '/sfx_Hover_Start_Button/sfx_Hover_Start_Button_01'),
                sfxHoverStartButton02: new Funday.AudioId('main', '/sfx_Hover_Start_Button/sfx_Hover_Start_Button_02'),
                sfxHoverStartButton03: new Funday.AudioId('main', '/sfx_Hover_Start_Button/sfx_Hover_Start_Button_03'),
                sfxHoverStartButton04: new Funday.AudioId('main', '/sfx_Hover_Start_Button/sfx_Hover_Start_Button_04'),
                sfxHoverStartButton05: new Funday.AudioId('main', '/sfx_Hover_Start_Button/sfx_Hover_Start_Button_05'),
            },
            sfxLooseBear: {
                sfxLooseBearGrizzly: new Funday.AudioId('main', '/sfx_Loose_Bear/sfx_Loose_Bear_Grizzly'),
                sfxLooseBearPanda: new Funday.AudioId('main', '/sfx_Loose_Bear/sfx_Loose_Bear_Panda'),
            },
            sfxMysteryBox: {
                sfxMysteryBoxHit01: new Funday.AudioId('main', '/sfx_Mystery_Box/sfx_Mystery_Box_Hit_01'),
                sfxMysteryBoxHit02: new Funday.AudioId('main', '/sfx_Mystery_Box/sfx_Mystery_Box_Hit_02'),
                sfxMysteryBoxHit03: new Funday.AudioId('main', '/sfx_Mystery_Box/sfx_Mystery_Box_Hit_03'),
                sfxMysteryBoxHit04: new Funday.AudioId('main', '/sfx_Mystery_Box/sfx_Mystery_Box_Hit_04'),
                sfxMysteryBoxHit05Coins: new Funday.AudioId('main', '/sfx_Mystery_Box/sfx_Mystery_Box_Hit_05_coins'),
                sfxMysteryBoxHit05FINAL: new Funday.AudioId('main', '/sfx_Mystery_Box/sfx_Mystery_Box_Hit_05_FINAL'),
            },
            sfxPhoneCamera: {
                sfxPhoneCamera: new Funday.AudioId('main', '/sfx_Phone_Camera/sfx_Phone_Camera'),
            },
            sfxPickupCoins: {
                sfxPickupCoins01: new Funday.AudioId('main', '/sfx_Pickup_Coins/sfx_Pickup_Coins_01'),
                sfxPickupCoins02: new Funday.AudioId('main', '/sfx_Pickup_Coins/sfx_Pickup_Coins_02'),
                sfxPickupCoins03: new Funday.AudioId('main', '/sfx_Pickup_Coins/sfx_Pickup_Coins_03'),
                sfxPickupCoins04: new Funday.AudioId('main', '/sfx_Pickup_Coins/sfx_Pickup_Coins_04'),
                sfxPickupCoins05: new Funday.AudioId('main', '/sfx_Pickup_Coins/sfx_Pickup_Coins_05'),
                sfxPickupCoins06: new Funday.AudioId('main', '/sfx_Pickup_Coins/sfx_Pickup_Coins_06'),
                sfxPickupCoins07: new Funday.AudioId('main', '/sfx_Pickup_Coins/sfx_Pickup_Coins_07'),
                sfxPickupCoins08: new Funday.AudioId('main', '/sfx_Pickup_Coins/sfx_Pickup_Coins_08'),
            },
            sfxPickUpGrizzly: {
                sfxPickUpGrizzly: new Funday.AudioId('main', '/sfx_Pick_Up_Grizzly/sfx_Pick_Up_Grizzly'),
            },
            sfxPickUpPanda: {
                sfxPickUpPanda: new Funday.AudioId('main', '/sfx_Pick_Up_Panda/sfx_Pick_Up_Panda'),
            },
            sfxRandomHelper: {
                sfxRandomHelper: new Funday.AudioId('main', '/sfx_Random_Helper/sfx_Random_Helper'),
            },
            sfxRoadSnap: {
                sfxRoadSnap01: new Funday.AudioId('main', '/sfx_Road_Snap/sfx_Road_Snap_01'),
                sfxRoadSnap02: new Funday.AudioId('main', '/sfx_Road_Snap/sfx_Road_Snap_02'),
                sfxRoadSnap03: new Funday.AudioId('main', '/sfx_Road_Snap/sfx_Road_Snap_03'),
                sfxRoadSnap04: new Funday.AudioId('main', '/sfx_Road_Snap/sfx_Road_Snap_04'),
                sfxRoadSnap05: new Funday.AudioId('main', '/sfx_Road_Snap/sfx_Road_Snap_05'),
                sfxRoadSnap06: new Funday.AudioId('main', '/sfx_Road_Snap/sfx_Road_Snap_06'),
                sfxRoadSnap07: new Funday.AudioId('main', '/sfx_Road_Snap/sfx_Road_Snap_07'),
                sfxRoadSnap08: new Funday.AudioId('main', '/sfx_Road_Snap/sfx_Road_Snap_08'),
            },
            sfxRotateRoad: {
                sfxRotateRoad01: new Funday.AudioId('main', '/sfx_Rotate_Road/sfx_Rotate_Road_01'),
                sfxRotateRoad02: new Funday.AudioId('main', '/sfx_Rotate_Road/sfx_Rotate_Road_02'),
                sfxRotateRoad03: new Funday.AudioId('main', '/sfx_Rotate_Road/sfx_Rotate_Road_03'),
                sfxRotateRoad04: new Funday.AudioId('main', '/sfx_Rotate_Road/sfx_Rotate_Road_04'),
                sfxRotateRoad05: new Funday.AudioId('main', '/sfx_Rotate_Road/sfx_Rotate_Road_05'),
                sfxRotateRoad06: new Funday.AudioId('main', '/sfx_Rotate_Road/sfx_Rotate_Road_06'),
                sfxRotateRoad07: new Funday.AudioId('main', '/sfx_Rotate_Road/sfx_Rotate_Road_07'),
                sfxRotateRoad08: new Funday.AudioId('main', '/sfx_Rotate_Road/sfx_Rotate_Road_08'),
                sfxRotateRoad09: new Funday.AudioId('main', '/sfx_Rotate_Road/sfx_Rotate_Road_09'),
                sfxRotateRoad10: new Funday.AudioId('main', '/sfx_Rotate_Road/sfx_Rotate_Road_10'),
                sfxRotateRoad11: new Funday.AudioId('main', '/sfx_Rotate_Road/sfx_Rotate_Road_11'),
                sfxRotateRoad12: new Funday.AudioId('main', '/sfx_Rotate_Road/sfx_Rotate_Road_12'),
                sfxRotateRoad13: new Funday.AudioId('main', '/sfx_Rotate_Road/sfx_Rotate_Road_13'),
                sfxRotateRoad14: new Funday.AudioId('main', '/sfx_Rotate_Road/sfx_Rotate_Road_14'),
                sfxRotateRoad15: new Funday.AudioId('main', '/sfx_Rotate_Road/sfx_Rotate_Road_15'),
            },
            sfxTapToStart: {
                sfxTapToStart: new Funday.AudioId('main', '/sfx_Tap to Start/sfx_Tap_to_Start'),
            },
            sfxTimberHelper: {
                sfxTimberHelper: new Funday.AudioId('main', '/sfx_TimberHelper/sfx_Timber_Helper'),
            },
            uiMouseClick: {
                uiMouseClick01: new Funday.AudioId('main', '/ui_Mouse_Click/ui_Mouse_Click_01'),
                uiMouseClick02: new Funday.AudioId('main', '/ui_Mouse_Click/ui_Mouse_Click_02'),
                uiMouseClick03: new Funday.AudioId('main', '/ui_Mouse_Click/ui_Mouse_Click_03'),
            },
            voiceBuyCharacterDeniedResponse: {
                voiceBuyCharacterDeniedResponse01: new Funday.AudioId('main', '/voice_Buy_Character_Denied_Response/voiceBuy_Character_Denied_Response_01'),
                voiceBuyCharacterDeniedResponse02: new Funday.AudioId('main', '/voice_Buy_Character_Denied_Response/voiceBuy_Character_Denied_Response_02'),
                voiceBuyCharacterDeniedResponse03: new Funday.AudioId('main', '/voice_Buy_Character_Denied_Response/voiceBuy_Character_Denied_Response_03'),
            },
            voiceGameOverResponse: {
                voiceGameOverResponse02: new Funday.AudioId('main', '/voice_Buy_Character_Denied_Response/voiceBuy_Character_Denied_Response_01'),
                voiceGruntCharacterReactionIceBear01: new Funday.AudioId('main', '/voice_Buy_Character_Denied_Response/voiceBuy_Character_Denied_Response_01'),
            },
            voiceHelpers: {
                charlie: {
                    voiceBuyCharacterResponseCharlie03: new Funday.AudioId('main', '/voice_helpers/charlie/voiceBuy_Character_Response_Charlie_03'),
                    voiceCharacterPowerCharlie01: new Funday.AudioId('main', '/voice_helpers/charlie/voice_Character_Power_Charlie_01'),
                    voiceCharacterPowerCharlie02: new Funday.AudioId('main', '/voice_helpers/charlie/voice_Character_Power_Charlie_01'),
                    voiceCharacterPowerCharlie03: new Funday.AudioId('main', '/voice_helpers/charlie/voice_Character_Power_Charlie_03'),
                },
                chloe: {
                    voiceCharacterPowerChloe01: new Funday.AudioId('main', '/voice_helpers/chloe/voice_Character_Power_Chloe_01'),
                    voiceCharacterPowerChloe02: new Funday.AudioId('main', '/voice_helpers/chloe/voice_Character_Power_Chloe_02'),
                    voiceCharacterPowerChloe03: new Funday.AudioId('main', '/voice_helpers/chloe/voice_Character_Power_Chloe_02'),
                },
                lucy: {
                    voiceCharacterPowerLucy01: new Funday.AudioId('main', '/voice_helpers/lucy/voice_Character_Power_Lucy_01'),
                    voiceCharacterPowerLucy02: new Funday.AudioId('main', '/voice_helpers/lucy/voice_Character_Power_Lucy_01'),
                    voiceLucyBoom: new Funday.AudioId('main', '/voice_helpers/lucy/voice_Lucy_Boom'),
                    voiceLucyLookAtThisGuys: new Funday.AudioId('main', '/voice_helpers/lucy/voice_Lucy_Boom'),
                    voiceLucyOhYeah: new Funday.AudioId('main', '/voice_helpers/lucy/voice_Lucy_Boom'),
                    voiceLucyWoouuw: new Funday.AudioId('main', '/voice_helpers/lucy/voice_Lucy_Woouuw'),
                    voiceLucyYoureWelcome: new Funday.AudioId('main', '/voice_helpers/lucy/voice_Lucy_Woouuw'),
                },
                rangerTabes: {
                    voiceCharacterPowerRangerTabes01: new Funday.AudioId('main', '/voice_over_bears_positive/voice_Panda/voice_Positive_Character_Reaction_Panda_Yeeees'),
                    voiceCharacterPowerRangerTabes02: new Funday.AudioId('main', '/voice_over_bears_positive/voice_Grizzly/voice_Positive_Character_Reaction_Grizzly_Wohoohoo'),
                    voiceCharacterPowerRangerTabes03: new Funday.AudioId('main', '/voice_over_bears_positive/voice_Panda/voice_Positive_Character_Reaction_Panda_Hahaha'),
                    voiceRangerTabesExcellent: new Funday.AudioId('main', '/voice_over_bears_positive/voice_Panda/voice_Positive_Character_Reaction_Panda_Yeeees'),
                    voiceRangerTabesJusticeMustBeServed: new Funday.AudioId('main', '/voice_over_bears_positive/voice_Panda/voice_Positive_Character_Reaction_Panda_Hahaha'),
                },
                robotBear: {
                    voiceRobotBearButlerBearActivated: new Funday.AudioId('main', '/voice_over_bears_positive/voice_Grizzly/voice_Positive_Character_Reaction_Grizzly_Wohoohoo'),
                    voiceRobotBearGreetings: new Funday.AudioId('main', '/voice_over_bears_positive/voice_Panda/voice_Positive_Character_Reaction_Panda_Yeeees'),
                    voiceRobotBearMaximumCleaningModeEngaged: new Funday.AudioId('main', '/voice_over_bears_positive/voice_Grizzly/voice_Positive_Character_Reaction_Grizzly_Wohoohoo'),
                    voiceRobotBearMessDetectedInitiatingScrubMode: new Funday.AudioId('main', '/voice_over_bears_positive/voice_Panda/voice_Positive_Character_Reaction_Panda_Hahaha'),
                },
            },
            voiceOverBearsPositive: {
                voiceGrizzly: {
                    voiceGetsPickedUpGrizzlyGoodJobBros: new Funday.AudioId('main', '/voice_over_bears_positive/voice_Grizzly/voice_Gets_Picked_Up_Grizzly_Yay'),
                    voiceGetsPickedUpGrizzlyHahaWeMadeIt: new Funday.AudioId('main', '/voice_over_bears_positive/voice_Grizzly/voice_Positive_Character_Reaction_Grizzly_Wohoohoo'),
                    voiceGetsPickedUpGrizzlyYay: new Funday.AudioId('main', '/voice_over_bears_positive/voice_Panda/voice_Positive_Character_Reaction_Panda_Hahaha'),
                    voicePositiveCharacterReactionGrizzlyGameOn: new Funday.AudioId('main', '/voice_over_bears_positive/voice_Panda/voice_Positive_Character_Reaction_Panda_Hahaha'),
                    voicePositiveCharacterReactionGrizzlyGolden: new Funday.AudioId('main', '/voice_over_bears_positive/voice_Grizzly/voice_Positive_Character_Reaction_Grizzly_Wohoohoo'),
                    voicePositiveCharacterReactionGrizzlyWohoohoo: new Funday.AudioId('main', '/voice_over_bears_positive/voice_Grizzly/voice_Positive_Character_Reaction_Grizzly_Wohoohoo'),
                    voicePositiveCharacterReactionGrizzlyYes: new Funday.AudioId('main', '/voice_over_bears_positive/voice_Panda/voice_Positive_Character_Reaction_Panda_Hahaha'),
                },
                voiceIceBear: {
                    voicePositiveCharacterReactionIceBearProudToHaveYouOnTeam: new Funday.AudioId('main', '/voice_over_bears_positive/voice_Grizzly/voice_Positive_Character_Reaction_Grizzly_Wohoohoo'),
                    voicePositiveCharacterReactionIceBearWantsToWin: new Funday.AudioId('main', '/voice_over_bears_positive/voice_Panda/voice_Positive_Character_Reaction_Panda_Hahaha'),
                },
                voicePanda: {
                    voicePositiveCharacterReactionPandaHahaha: new Funday.AudioId('main', '/voice_over_bears_positive/voice_Panda/voice_Positive_Character_Reaction_Panda_Hahaha'),
                    voicePositiveCharacterReactionPandaThatWasAmazing: new Funday.AudioId('main', '/voice_over_bears_positive/voice_Panda/voice_Positive_Character_Reaction_Panda_Hahaha'),
                    voicePositiveCharacterReactionPandaWoohoo: new Funday.AudioId('main', '/voice_over_bears_positive/voice_Panda/voice_Positive_Character_Reaction_Panda_Woohoo'),
                    voicePositiveCharacterReactionPandaYeeees: new Funday.AudioId('main', '/voice_over_bears_positive/voice_Panda/voice_Positive_Character_Reaction_Panda_Yeeees'),
                },
            },
        };
        WeBearBears.AudioLibrary = AudioLibrary;
    })(WeBearBears = Funday.WeBearBears || (Funday.WeBearBears = {}));
})(Funday || (Funday = {}));
var Funday;
(function (Funday) {
    var WeBearBears;
    (function (WeBearBears) {
        class SpriteLibrary {
        }
        SpriteLibrary.load = { load_background: new Funday.SpriteId('load', 'load_background'),
            load_bar: new Funday.SpriteId('load', 'load_bar'),
            load_progress: new Funday.SpriteId('load', 'load_progress'),
        };
        SpriteLibrary.scenery_sky = { sky: new Funday.SpriteId('scenery-sky', 'sky'),
        };
        SpriteLibrary.scenery_trees = { trees01: new Funday.SpriteId('scenery-trees', 'trees01'),
            trees02: new Funday.SpriteId('scenery-trees', 'trees02'),
        };
        SpriteLibrary.scenery_water_and_clouds = { clouds: new Funday.SpriteId('scenery-water-and-clouds', 'clouds'),
            water01: new Funday.SpriteId('scenery-water-and-clouds', 'water01'),
            water02: new Funday.SpriteId('scenery-water-and-clouds', 'water02'),
            water03: new Funday.SpriteId('scenery-water-and-clouds', 'water03'),
        };
        SpriteLibrary.splash_screen = { splash_screen_background: new Funday.SpriteId('splash-screen', 'splash_screen_background'),
        };
        SpriteLibrary.tiles = { box_anim01: new Funday.SpriteId('tiles', 'box_anim01'),
            box_anim02: new Funday.SpriteId('tiles', 'box_anim02'),
            box_anim03: new Funday.SpriteId('tiles', 'box_anim03'),
            Coin: new Funday.SpriteId('tiles', 'Coin'),
            coin_shadow: new Funday.SpriteId('tiles', 'coin_shadow'),
            coin_white: new Funday.SpriteId('tiles', 'coin_white'),
            grizzly_walk_01: new Funday.SpriteId('tiles', 'grizzly_walk_01'),
            grizzly_walk_02: new Funday.SpriteId('tiles', 'grizzly_walk_02'),
            grizzly_walk_03: new Funday.SpriteId('tiles', 'grizzly_walk_03'),
            grizzly_walk_04: new Funday.SpriteId('tiles', 'grizzly_walk_04'),
            grizzly_walk_05: new Funday.SpriteId('tiles', 'grizzly_walk_05'),
            grizzly_walk_06: new Funday.SpriteId('tiles', 'grizzly_walk_06'),
            grizz_fall01: new Funday.SpriteId('tiles', 'grizz_fall01'),
            grizz_fall02: new Funday.SpriteId('tiles', 'grizz_fall02'),
            grizz_fall03: new Funday.SpriteId('tiles', 'grizz_fall03'),
            grizz_fall04: new Funday.SpriteId('tiles', 'grizz_fall04'),
            grizz_fall05: new Funday.SpriteId('tiles', 'grizz_fall05'),
            grizz_fall06: new Funday.SpriteId('tiles', 'grizz_fall06'),
            grizz_fall07: new Funday.SpriteId('tiles', 'grizz_fall07'),
            grizz_fall08: new Funday.SpriteId('tiles', 'grizz_fall08'),
            grizz_fall09: new Funday.SpriteId('tiles', 'grizz_fall09'),
            grizz_idle01: new Funday.SpriteId('tiles', 'grizz_idle01'),
            grizz_idle02: new Funday.SpriteId('tiles', 'grizz_idle02'),
            grizz_idle03: new Funday.SpriteId('tiles', 'grizz_idle03'),
            grizz_jump_anim01: new Funday.SpriteId('tiles', 'grizz_jump_anim01'),
            grizz_jump_anim02: new Funday.SpriteId('tiles', 'grizz_jump_anim02'),
            grizz_jump_anim03: new Funday.SpriteId('tiles', 'grizz_jump_anim03'),
            grizz_jump_anim04: new Funday.SpriteId('tiles', 'grizz_jump_anim04'),
            grizz_jump_anim05: new Funday.SpriteId('tiles', 'grizz_jump_anim05'),
            grizz_jump_anim06: new Funday.SpriteId('tiles', 'grizz_jump_anim06'),
            grizz_jump_anim07: new Funday.SpriteId('tiles', 'grizz_jump_anim07'),
            grizz_jump_anim08: new Funday.SpriteId('tiles', 'grizz_jump_anim08'),
            grizz_jump_anim09: new Funday.SpriteId('tiles', 'grizz_jump_anim09'),
            grizz_waiting01: new Funday.SpriteId('tiles', 'grizz_waiting01'),
            grizz_waiting02: new Funday.SpriteId('tiles', 'grizz_waiting02'),
            grizz_waiting03: new Funday.SpriteId('tiles', 'grizz_waiting03'),
            grizz_waiting04: new Funday.SpriteId('tiles', 'grizz_waiting04'),
            grizz_waiting05: new Funday.SpriteId('tiles', 'grizz_waiting05'),
            ground_dark: new Funday.SpriteId('tiles', 'ground_dark'),
            ground_light: new Funday.SpriteId('tiles', 'ground_light'),
            ground_under: new Funday.SpriteId('tiles', 'ground_under'),
            hand: new Funday.SpriteId('tiles', 'hand'),
            helmet_grizz_anim01: new Funday.SpriteId('tiles', 'helmet_grizz_anim01'),
            helmet_grizz_anim02: new Funday.SpriteId('tiles', 'helmet_grizz_anim02'),
            helmet_grizz_anim03: new Funday.SpriteId('tiles', 'helmet_grizz_anim03'),
            helmet_grizz_anim04: new Funday.SpriteId('tiles', 'helmet_grizz_anim04'),
            helmet_grizz_anim05: new Funday.SpriteId('tiles', 'helmet_grizz_anim05'),
            helmet_grizz_anim06: new Funday.SpriteId('tiles', 'helmet_grizz_anim06'),
            helmet_iceberg_anim01: new Funday.SpriteId('tiles', 'helmet_iceberg_anim01'),
            helmet_iceberg_anim02: new Funday.SpriteId('tiles', 'helmet_iceberg_anim02'),
            helmet_iceberg_anim03: new Funday.SpriteId('tiles', 'helmet_iceberg_anim03'),
            helmet_iceberg_anim04: new Funday.SpriteId('tiles', 'helmet_iceberg_anim04'),
            helmet_iceberg_anim05: new Funday.SpriteId('tiles', 'helmet_iceberg_anim05'),
            helmet_iceberg_anim06: new Funday.SpriteId('tiles', 'helmet_iceberg_anim06'),
            helmet_panda_anim01: new Funday.SpriteId('tiles', 'helmet_panda_anim01'),
            helmet_panda_anim02: new Funday.SpriteId('tiles', 'helmet_panda_anim02'),
            helmet_panda_anim03: new Funday.SpriteId('tiles', 'helmet_panda_anim03'),
            helmet_panda_anim04: new Funday.SpriteId('tiles', 'helmet_panda_anim04'),
            helmet_panda_anim05: new Funday.SpriteId('tiles', 'helmet_panda_anim05'),
            helmet_panda_anim06: new Funday.SpriteId('tiles', 'helmet_panda_anim06'),
            helper_charlie_anim01: new Funday.SpriteId('tiles', 'helper_charlie_anim01'),
            helper_charlie_anim02: new Funday.SpriteId('tiles', 'helper_charlie_anim02'),
            helper_charlie_anim03: new Funday.SpriteId('tiles', 'helper_charlie_anim03'),
            helper_charlie_anim04: new Funday.SpriteId('tiles', 'helper_charlie_anim04'),
            helper_charlie_anim05: new Funday.SpriteId('tiles', 'helper_charlie_anim05'),
            helper_charlie_anim06: new Funday.SpriteId('tiles', 'helper_charlie_anim06'),
            helper_chloe_anim01: new Funday.SpriteId('tiles', 'helper_chloe_anim01'),
            helper_chloe_anim02: new Funday.SpriteId('tiles', 'helper_chloe_anim02'),
            helper_chloe_anim03: new Funday.SpriteId('tiles', 'helper_chloe_anim03'),
            helper_chloe_anim04: new Funday.SpriteId('tiles', 'helper_chloe_anim04'),
            helper_lucy_anim01: new Funday.SpriteId('tiles', 'helper_lucy_anim01'),
            helper_lucy_anim02: new Funday.SpriteId('tiles', 'helper_lucy_anim02'),
            helper_lucy_anim03: new Funday.SpriteId('tiles', 'helper_lucy_anim03'),
            helper_lucy_anim04: new Funday.SpriteId('tiles', 'helper_lucy_anim04'),
            helper_lucy_anim05: new Funday.SpriteId('tiles', 'helper_lucy_anim05'),
            helper_lucy_anim06: new Funday.SpriteId('tiles', 'helper_lucy_anim06'),
            helper_lucy_anim07: new Funday.SpriteId('tiles', 'helper_lucy_anim07'),
            helper_robot_anim01: new Funday.SpriteId('tiles', 'helper_robot_anim01'),
            helper_robot_anim02: new Funday.SpriteId('tiles', 'helper_robot_anim02'),
            helper_robot_anim03: new Funday.SpriteId('tiles', 'helper_robot_anim03'),
            helper_robot_anim04: new Funday.SpriteId('tiles', 'helper_robot_anim04'),
            helper_robot_anim05: new Funday.SpriteId('tiles', 'helper_robot_anim05'),
            helper_robot_anim06: new Funday.SpriteId('tiles', 'helper_robot_anim06'),
            helper_robot_anim07: new Funday.SpriteId('tiles', 'helper_robot_anim07'),
            helper_tabes_anim01: new Funday.SpriteId('tiles', 'helper_tabes_anim01'),
            helper_tabes_anim02: new Funday.SpriteId('tiles', 'helper_tabes_anim02'),
            helper_tabes_anim03: new Funday.SpriteId('tiles', 'helper_tabes_anim03'),
            helper_tabes_anim04: new Funday.SpriteId('tiles', 'helper_tabes_anim04'),
            helper_tabes_anim05: new Funday.SpriteId('tiles', 'helper_tabes_anim05'),
            helper_timber_anim01: new Funday.SpriteId('tiles', 'helper_timber_anim01'),
            icebear_walk_01: new Funday.SpriteId('tiles', 'icebear_walk_01'),
            icebear_walk_02: new Funday.SpriteId('tiles', 'icebear_walk_02'),
            icebear_walk_03: new Funday.SpriteId('tiles', 'icebear_walk_03'),
            icebear_walk_04: new Funday.SpriteId('tiles', 'icebear_walk_04'),
            icebear_walk_05: new Funday.SpriteId('tiles', 'icebear_walk_05'),
            icebear_walk_06: new Funday.SpriteId('tiles', 'icebear_walk_06'),
            iceberg_falling01: new Funday.SpriteId('tiles', 'iceberg_falling01'),
            iceberg_falling02: new Funday.SpriteId('tiles', 'iceberg_falling02'),
            iceberg_falling03: new Funday.SpriteId('tiles', 'iceberg_falling03'),
            iceberg_falling04: new Funday.SpriteId('tiles', 'iceberg_falling04'),
            iceberg_falling05: new Funday.SpriteId('tiles', 'iceberg_falling05'),
            iceberg_falling06: new Funday.SpriteId('tiles', 'iceberg_falling06'),
            iceberg_falling07: new Funday.SpriteId('tiles', 'iceberg_falling07'),
            iceberg_falling08: new Funday.SpriteId('tiles', 'iceberg_falling08'),
            iceberg_idle01: new Funday.SpriteId('tiles', 'iceberg_idle01'),
            iceberg_idle02: new Funday.SpriteId('tiles', 'iceberg_idle02'),
            iceberg_idle03: new Funday.SpriteId('tiles', 'iceberg_idle03'),
            locked_road_cross: new Funday.SpriteId('tiles', 'locked_road_cross'),
            locked_road_east_south: new Funday.SpriteId('tiles', 'locked_road_east_south'),
            locked_road_horizontal: new Funday.SpriteId('tiles', 'locked_road_horizontal'),
            locked_road_vertical: new Funday.SpriteId('tiles', 'locked_road_vertical'),
            panda_fall_anim01: new Funday.SpriteId('tiles', 'panda_fall_anim01'),
            panda_fall_anim02: new Funday.SpriteId('tiles', 'panda_fall_anim02'),
            panda_fall_anim03: new Funday.SpriteId('tiles', 'panda_fall_anim03'),
            panda_fall_anim04: new Funday.SpriteId('tiles', 'panda_fall_anim04'),
            panda_fall_anim05: new Funday.SpriteId('tiles', 'panda_fall_anim05'),
            panda_fall_anim06: new Funday.SpriteId('tiles', 'panda_fall_anim06'),
            panda_fall_anim07: new Funday.SpriteId('tiles', 'panda_fall_anim07'),
            panda_fall_anim08: new Funday.SpriteId('tiles', 'panda_fall_anim08'),
            panda_idle01: new Funday.SpriteId('tiles', 'panda_idle01'),
            panda_idle02: new Funday.SpriteId('tiles', 'panda_idle02'),
            panda_idle03: new Funday.SpriteId('tiles', 'panda_idle03'),
            panda_jump_anim01: new Funday.SpriteId('tiles', 'panda_jump_anim01'),
            panda_jump_anim02: new Funday.SpriteId('tiles', 'panda_jump_anim02'),
            panda_jump_anim03: new Funday.SpriteId('tiles', 'panda_jump_anim03'),
            panda_jump_anim04: new Funday.SpriteId('tiles', 'panda_jump_anim04'),
            panda_jump_anim05: new Funday.SpriteId('tiles', 'panda_jump_anim05'),
            panda_jump_anim06: new Funday.SpriteId('tiles', 'panda_jump_anim06'),
            panda_jump_anim07: new Funday.SpriteId('tiles', 'panda_jump_anim07'),
            panda_jump_anim08: new Funday.SpriteId('tiles', 'panda_jump_anim08'),
            panda_jump_anim09: new Funday.SpriteId('tiles', 'panda_jump_anim09'),
            panda_waiting01: new Funday.SpriteId('tiles', 'panda_waiting01'),
            panda_waiting02: new Funday.SpriteId('tiles', 'panda_waiting02'),
            panda_waiting03: new Funday.SpriteId('tiles', 'panda_waiting03'),
            panda_waiting04: new Funday.SpriteId('tiles', 'panda_waiting04'),
            panda_waiting05: new Funday.SpriteId('tiles', 'panda_waiting05'),
            panda_walk_01: new Funday.SpriteId('tiles', 'panda_walk_01'),
            panda_walk_02: new Funday.SpriteId('tiles', 'panda_walk_02'),
            panda_walk_03: new Funday.SpriteId('tiles', 'panda_walk_03'),
            panda_walk_04: new Funday.SpriteId('tiles', 'panda_walk_04'),
            panda_walk_05: new Funday.SpriteId('tiles', 'panda_walk_05'),
            panda_walk_06: new Funday.SpriteId('tiles', 'panda_walk_06'),
            road_cross: new Funday.SpriteId('tiles', 'road_cross'),
            road_east_south: new Funday.SpriteId('tiles', 'road_east_south'),
            road_horizontal: new Funday.SpriteId('tiles', 'road_horizontal'),
            road_off05: new Funday.SpriteId('tiles', 'road_off05'),
            road_off06: new Funday.SpriteId('tiles', 'road_off06'),
            road_off07: new Funday.SpriteId('tiles', 'road_off07'),
            road_off08: new Funday.SpriteId('tiles', 'road_off08'),
            road_vertical: new Funday.SpriteId('tiles', 'road_vertical'),
            tile_bush: new Funday.SpriteId('tiles', 'tile_bush'),
            tile_rocks: new Funday.SpriteId('tiles', 'tile_rocks'),
            tile_selection: new Funday.SpriteId('tiles', 'tile_selection'),
            tile_tree: new Funday.SpriteId('tiles', 'tile_tree'),
            tile_white: new Funday.SpriteId('tiles', 'tile_white'),
            timber_anim01: new Funday.SpriteId('tiles', 'timber_anim01'),
            timber_anim02: new Funday.SpriteId('tiles', 'timber_anim02'),
            timber_anim03: new Funday.SpriteId('tiles', 'timber_anim03'),
            timber_anim04: new Funday.SpriteId('tiles', 'timber_anim04'),
            timber_grizz_anim01: new Funday.SpriteId('tiles', 'timber_grizz_anim01'),
            timber_grizz_anim02: new Funday.SpriteId('tiles', 'timber_grizz_anim02'),
            timber_grizz_anim03: new Funday.SpriteId('tiles', 'timber_grizz_anim03'),
            timber_grizz_anim04: new Funday.SpriteId('tiles', 'timber_grizz_anim04'),
            timber_iceberg_anim01: new Funday.SpriteId('tiles', 'timber_iceberg_anim01'),
            timber_iceberg_anim02: new Funday.SpriteId('tiles', 'timber_iceberg_anim02'),
            timber_iceberg_anim03: new Funday.SpriteId('tiles', 'timber_iceberg_anim03'),
            timber_iceberg_anim04: new Funday.SpriteId('tiles', 'timber_iceberg_anim04'),
            timber_panda_anim01: new Funday.SpriteId('tiles', 'timber_panda_anim01'),
            timber_panda_anim02: new Funday.SpriteId('tiles', 'timber_panda_anim02'),
            timber_panda_anim03: new Funday.SpriteId('tiles', 'timber_panda_anim03'),
            timber_panda_anim04: new Funday.SpriteId('tiles', 'timber_panda_anim04'),
            top_line: new Funday.SpriteId('tiles', 'top_line'),
            wall: new Funday.SpriteId('tiles', 'wall'),
        };
        SpriteLibrary.ui = { back_button: new Funday.SpriteId('ui', 'back_button'),
            checkmark: new Funday.SpriteId('ui', 'checkmark'),
            close: new Funday.SpriteId('ui', 'close'),
            Coin: new Funday.SpriteId('ui', 'Coin'),
            hand: new Funday.SpriteId('ui', 'hand'),
            helpers_queue: new Funday.SpriteId('ui', 'helpers_queue'),
            helper_charlie_icon: new Funday.SpriteId('ui', 'helper_charlie_icon'),
            helper_chloe_icon: new Funday.SpriteId('ui', 'helper_chloe_icon'),
            helper_lucy_icon: new Funday.SpriteId('ui', 'helper_lucy_icon'),
            helper_robot_icon: new Funday.SpriteId('ui', 'helper_robot_icon'),
            helper_tabes_icon: new Funday.SpriteId('ui', 'helper_tabes_icon'),
            helper_timber_icon: new Funday.SpriteId('ui', 'helper_timber_icon'),
            no: new Funday.SpriteId('ui', 'close'),
            pause_button: new Funday.SpriteId('ui', 'pause_button'),
            shop_box01: new Funday.SpriteId('ui', 'shop_box01'),
            shop_box02: new Funday.SpriteId('ui', 'shop_box02'),
            shop_box03: new Funday.SpriteId('ui', 'shop_box03'),
            shop_button: new Funday.SpriteId('ui', 'shop_button'),
            start_button_box: new Funday.SpriteId('ui', 'start_button_box'),
            watch_add_revive: new Funday.SpriteId('ui', 'watch_add_revive'),
            yes: new Funday.SpriteId('ui', 'checkmark'),
        };
        WeBearBears.SpriteLibrary = SpriteLibrary;
    })(WeBearBears = Funday.WeBearBears || (Funday.WeBearBears = {}));
})(Funday || (Funday = {}));
var Funday;
(function (Funday) {
    var WeBareBearsTrippleTrip;
    (function (WeBareBearsTrippleTrip) {
        class Background extends Phaser.Group {
            constructor(game) {
                super(game);
                this.sky = null;
                this.clouds = null;
                this.treesBackground = null;
                this.treesForeground = null;
                this.sky = this.createHorizontalTileSprite(Funday.WeBearBears.SpriteLibrary.scenery_sky.sky);
                this.clouds = this.createHorizontalTileSprite(Funday.WeBearBears.SpriteLibrary.scenery_water_and_clouds.clouds);
                this.treesBackground = this.createHorizontalTileSprite(Funday.WeBearBears.SpriteLibrary.scenery_trees.trees02);
                this.treesForeground = this.createHorizontalTileSprite(Funday.WeBearBears.SpriteLibrary.scenery_trees.trees01);
            }
            createHorizontalTileSprite(spriteId) {
                let game = this.game;
                let frameData = game.getFrameData(spriteId);
                let ts = game.createTileSprite(0, 0, game.canvas.width, frameData.height, spriteId, this);
                this.addChild(ts);
                return ts;
            }
            moveChildrenToTopOfGrid(grid) {
                this.sky.bottom = grid.top;
                this.clouds.bottom = grid.top;
                this.treesBackground.bottom = grid.top;
                this.treesForeground.bottom = grid.top;
            }
            update() {
                this.clouds.tilePosition.x = this.game.camera.x * .5 * -1;
                this.treesBackground.tilePosition.x = this.game.camera.x * .75 * -1;
                this.treesForeground.tilePosition.x = this.game.camera.x * 1 * -1;
            }
        }
        WeBareBearsTrippleTrip.Background = Background;
    })(WeBareBearsTrippleTrip = Funday.WeBareBearsTrippleTrip || (Funday.WeBareBearsTrippleTrip = {}));
})(Funday || (Funday = {}));
var Funday;
(function (Funday) {
    var WeBareBearsTrippleTrip;
    (function (WeBareBearsTrippleTrip) {
        class LevelControl {
            constructor(coreScreen) {
                this.coreScreen = null;
                this.achivementTracker = null;
                this.tutorialControl = null;
                this.levelNumber = 0;
                this.tilesEntered = 0;
                this.extraLifePlacableAfterTilesEntered = 0;
                this.levelEvents = new LevelEvents();
                this.bearSpeedSettings = new BearSpeedSettings();
                this.currentAdReviveCount = 0;
                this.maxAdReviveCount = 1;
                this.coreScreen = coreScreen;
                this.achivementTracker = new WeBareBearsTrippleTrip.AchievementTracker(coreScreen.game, this);
                this.tutorialControl = new WeBareBearsTrippleTrip.TutorialControl(this);
            }
            onCoreScreenConstructionComplete() {
                this.coreScreen.ui.modalManager.views.gameOver.onChooseRestart.add(this.handleRestart, this);
                this.coreScreen.ui.modalManager.views.gameOver.onChooseRevive.add(this.handleRevive, this);
                this.coreScreen.ui.modalManager.views.adFreeHelper.onChooseWatchAd.add(this.handleAfterWatchedForBonusHelper, this);
                this.coreScreen.ui.modalManager.views.adFreeHelper.onChooseExit.add(this.exitWatchAddForBonusHelper, this);
                this.levelEvents.onCoreScreenConstructionComplete.dispatch();
                this.onJustBeforeFadeIn();
            }
            onCoreFadedIn() {
                this.coreScreen.ui.score.makeSpaceForCoins();
                this.levelEvents.onFadedIn.dispatch();
            }
            onShopAndStartButtonTransitionedOut() {
                let game = this.coreScreen.game;
                
                this.onRoundStarted();
                game.gameIsFunctional = true;
            }
            onRoundStarted() {
                console.log("On Round Started");
                this.coreScreen.bearStack.startWalking();
                this.levelEvents.onRoundStarted.dispatch();
            }
            onTileRotated(tile) {
                this.levelEvents.onTileRotated.dispatch(tile);
            }
            onBearStackEnteredTile(tile) {
                this.tilesEntered++;
                this.coreScreen.ui.score.setScore(this.tilesEntered);
                this.coreScreen.ui.score.makeSpaceForCoins();
                this.handleShowWatchAddForBonusHelper();
                this.refreshBearSpeed();
                this.levelEvents.onBearStackEnteredTile.dispatch(tile);
            }
            handleShowWatchAddForBonusHelper() {
                if (this.shouldShowWatchAdForBonusHelper()) {
                    this.coreScreen.ui.modalManager.showAdFreeHelper();
                    this.pause();
                }
            }
            handleAfterWatchedForBonusHelper() {
                this.coreScreen.ui.modalManager.views.adFreeHelper.handlePickRandomHelper();
            }
            exitWatchAddForBonusHelper() {
                this.coreScreen.ui.modalManager.hide(this.resume.bind(this));
            }
            shouldShowWatchAdForBonusHelper() {
                return false;
                //let game = this.coreScreen.game;
                //return this.tilesEntered === 1 && this.tutorialControl.hasCompletedShopTutorial() && game.inventory.hasHelperQueueRoomForHelper();
            }
            onCoinCollected() {
                this.coreScreen.ui.score.makeSpaceForCoins();
                this.levelEvents.onCoinCollected.dispatch();
            }
            onBearRevived() {
                this.levelEvents.onBearRevived.dispatch();
            }
            refreshBearSpeed() {
                let bearStack = this.coreScreen.bearStack;
                let offset = bearStack.stepOffset;
                let tilesToTraverseBeforeShortestDuration = this.bearSpeedSettings.tilesToTraverseBeforeShortestDuration;
                let tilesEntered = Math.min(this.tilesEntered - offset, tilesToTraverseBeforeShortestDuration);
                let t = tilesEntered / tilesToTraverseBeforeShortestDuration;
                let k = this.bearSpeedSettings.easing(t);
                let start = this.bearSpeedSettings.startHalfTileWalkDurationMs;
                let end = this.bearSpeedSettings.endHalfTileWalkDurationMs;
                let newMovementDurationMs = start + ((end - start) * k);
                bearStack.currentHalfTileMovementDurationMs = newMovementDurationMs;
            }
            refreshBearStackSpeed() {
            }
            handleRestart() {
                let game = this.coreScreen.game;
                let animationFactory = game.services.animation;
                let fadeToBlack = animationFactory.fadeToBlack(1000);
                fadeToBlack.onComplete.add(this.reset, this);
                fadeToBlack.onComplete.add(this.onJustBeforeFadeIn, this);
                let delay = animationFactory.delay(500);
                let fadeFromBlack = animationFactory.fadeFromBlack(1000);
                let queue = animationFactory.queue([fadeToBlack, delay, fadeFromBlack]);
                queue.onComplete.add(this.onCoreFadedIn, this);
                queue.play();
                this.achivementTracker.saveAchievements();
                game.services.analytics.trackLocation(Funday.Service.GameLocations.PLAY);
            }
            onJustBeforeFadeIn() {
                this.levelEvents.onJustBeforeFadeIn.dispatch();
                this.coreScreen.gridManager.updateNextGridPosition();
                this.coreScreen.game.camera.focusOn(this.coreScreen.bearStack);
            }
            generateMap(entryLocation) {
                let map = null;
                if (this.tutorialControl.hasTutorialMap()) {
                    map = this.tutorialControl.generateMap(entryLocation);
                }
                else {
                    let game = this.coreScreen.game;
                    let settings = game.repositories.difficulty.getPathGeneratorSettingsFromLevel(this.levelNumber);
                    let pathGenerator = new WeBareBearsTrippleTrip.PathGenerator();
                    pathGenerator.settings = settings;
                    pathGenerator.settings.entryLocation.i = entryLocation.i;
                    pathGenerator.settings.entryLocation.j = entryLocation.j;
                    map = pathGenerator.generate();
                }
                return map;
            }
            hasPlacementOverridesForMap() {
                return this.tutorialControl.hasPickupPlacementOverridesForMap();
            }
            applyPickupPlacementOverridesForMap(grid) {
                this.tutorialControl.applyPickupPlacementOverridesForMap(grid);
            }
            onLevelGenerated(grid) {
                this.levelEvents.onLevelGenerated.dispatch(grid);
            }
            onHelperPowerActivated(helperType) {
                let game = this.coreScreen.game;
                game.inventory.onHelperActivated(helperType);
                this.levelEvents.onHelperPowerActivated.dispatch(helperType);
            }
            onItemBoughtInShop(shopItem) {
                this.levelEvents.onItemBoughtInShop.dispatch(shopItem);
            }
            reset() {
                this.levelNumber = 0;
                this.tilesEntered = 0;
                this.extraLifePlacableAfterTilesEntered = 0;
                this.coreScreen.ui.modalManager.instantHide();
                this.coreScreen.reset();
                this.coreScreen.setToStartConfiguration();
                this.coreScreen.ui.showStartScreen();
            }
            handleRevive() {
                this.currentAdReviveCount++;
                this.coreScreen.ui.modalManager.hide(this.reviveOneBear.bind(this));
            }
            reviveOneBear() {
                this.coreScreen.bearStack.restartAfterRevive();
            }
            pause() {
                this.coreScreen.bearStack.pause();
            }
            resume() {
                
                this.coreScreen.game.theGameIsPaused = false;
                console.log("Resume Test",this.coreScreen.game.theGameIsPaused);
                if (!this.coreScreen.ui.tapToStart.visible) {
                    console.log("BearStack Resume3");
                    this.coreScreen.bearStack.resume();
                }
            }
            onPauseMenuHidden() {
                if (this.coreScreen.bearStack.isWalkAnimationPaused()) {
                    this.coreScreen.game.services.analytics.trackLocation(Funday.Service.GameLocations.PLAY);
                }
                this.resume();
            }
            shouldShowWatchAdToReviveModal() {
                return false;
                //return this.tutorialControl.hasCompletedShopTutorial() && this.currentAdReviveCount < this.maxAdReviveCount;
            }
            canPlaceExtraLife() {
                return this.tilesEntered >= this.extraLifePlacableAfterTilesEntered;
            }
            onExtraLifePlaced() {
                this.extraLifePlacableAfterTilesEntered = this.tilesEntered + 250;
            }
        }
        WeBareBearsTrippleTrip.LevelControl = LevelControl;
        class LevelEvents {
            constructor() {
                this.onCoreScreenConstructionComplete = new Phaser.Signal();
                this.onJustBeforeFadeIn = new Phaser.Signal();
                this.onFadedIn = new Phaser.Signal();
                this.onStartScreenTransitionedOut = new Phaser.Signal();
                this.onRoundStarted = new Phaser.Signal();
                this.onTileRotated = new Phaser.Signal();
                this.onBearStackEnteredTile = new Phaser.Signal();
                this.onCoinCollected = new Phaser.Signal();
                this.onBearRevived = new Phaser.Signal();
                this.onLevelGenerated = new Phaser.Signal();
                this.onHelperPowerActivated = new Phaser.Signal();
                this.onItemBoughtInShop = new Phaser.Signal();
            }
        }
        class BearSpeedSettings {
            constructor() {
                this.startHalfTileWalkDurationMs = 450;
                this.endHalfTileWalkDurationMs = 225;
                this.tilesToTraverseBeforeShortestDuration = 175;
                this.easing = Phaser.Easing.Linear.None;
            }
        }
    })(WeBareBearsTrippleTrip = Funday.WeBareBearsTrippleTrip || (Funday.WeBareBearsTrippleTrip = {}));
})(Funday || (Funday = {}));
var Funday;
(function (Funday) {
    var WeBareBearsTrippleTrip;
    (function (WeBareBearsTrippleTrip) {
        class TutorialControl {
            constructor(levelControl) {
                this.levelControl = null;
                this.coreScreen = null;
                this.game = null;
                this.tutorialHandlers = [];
                this.levelControl = levelControl;
                this.coreScreen = levelControl.coreScreen;
                this.game = levelControl.coreScreen.game;
                if (!this.hasCompletedTapRotateTileTutorial()) {
                    this.addTutorialHandler(new TapToRotateTutorialHandler(this));
                }
                if (!this.hasCompletedShopTutorial()) {
                    this.addTutorialHandler(new ShopTutorialHandler(this));
                }
                if (!this.hasCompletedCrateTutorial()) {
                    this.addTutorialHandler(new CrateTutorialHandler(this));
                }
            }
            addTutorialHandler(handler) {
                this.tutorialHandlers.push(handler);
            }
            hasCompletedTapRotateTileTutorial() {
                return this.game.inventory.hasCompletedTapRotateTileTutorial();
            }
            hasCompletedShopTutorial() {
                return this.game.inventory.hasCompletedShopTutorial();
            }
            hasCompletedCrateTutorial() {
                return this.game.inventory.hasCompletedCrateTutorial();
            }
            hasTutorialMap() {
                let hasTutorialMap = false;
                for (let index = 0; index < this.tutorialHandlers.length; index++) {
                    const tutorialHandler = this.tutorialHandlers[index];
                    if (tutorialHandler.shouldUseTutorialMap()) {
                        hasTutorialMap = true;
                        break;
                    }
                }
                return hasTutorialMap;
            }
            generateMap(entryLocation) {
                let map = null;
                for (let index = 0; index < this.tutorialHandlers.length; index++) {
                    const tutorialHandler = this.tutorialHandlers[index];
                    if (tutorialHandler.shouldUseTutorialMap()) {
                        tutorialHandler.pathGenerator.settings.entryLocation.i = entryLocation.i;
                        tutorialHandler.pathGenerator.settings.entryLocation.j = entryLocation.j;
                        map = tutorialHandler.pathGenerator.generate();
                        break;
                    }
                }
                return map;
            }
            hasPickupPlacementOverridesForMap() {
                let hasPlacementOverrides = false;
                for (let index = 0; index < this.tutorialHandlers.length; index++) {
                    const tutorialHandler = this.tutorialHandlers[index];
                    if (tutorialHandler.shouldHandlePickupPlacement()) {
                        hasPlacementOverrides = true;
                        break;
                    }
                }
                return hasPlacementOverrides;
            }
            applyPickupPlacementOverridesForMap(grid) {
                for (let index = 0; index < this.tutorialHandlers.length; index++) {
                    const tutorialHandler = this.tutorialHandlers[index];
                    if (tutorialHandler.shouldHandlePickupPlacement()) {
                        tutorialHandler.applyPickupPlacementOverridesForMap(grid);
                        break;
                    }
                }
            }
            removeTutorialHandler(tutorialHandler) {
                const index = this.tutorialHandlers.indexOf(tutorialHandler);
                if (index > -1) {
                    this.tutorialHandlers.splice(index, 1);
                }
            }
        }
        WeBareBearsTrippleTrip.TutorialControl = TutorialControl;
        class TutorialHandler {
            constructor(tutoriaControl) {
                this.tutorialControl = null;
                this.pathGenerator = null;
                this.tutorialControl = tutoriaControl;
                this.assignEvents();
            }
            shouldUseTutorialMap() {
                return !!this.pathGenerator;
            }
            clear() {
                this.removeEvents();
                this.tutorialControl.removeTutorialHandler(this);
                this.pathGenerator = null;
            }
            shouldHandlePickupPlacement() {
                return false;
            }
            applyPickupPlacementOverridesForMap(grid) {
            }
        }
        class TapToRotateTutorialHandler extends TutorialHandler {
            constructor(tutorialControl) {
                super(tutorialControl);
                this.tilesTraversedCount = 0;
                this.pathGenerator = new WeBareBearsTrippleTrip.PathGenerator();
                this.pathGenerator.settings.northWeight = 0;
                this.pathGenerator.settings.eastWeight = 1;
                this.pathGenerator.settings.southWeight = 0;
                this.pathGenerator.settings.westWeight = 0;
            }
            assignEvents() {
                this.tutorialControl.levelControl.levelEvents.onBearStackEnteredTile.add(this.onBearStackEnteredTile, this);
                this.tutorialControl.levelControl.levelEvents.onTileRotated.addOnce(this.onTileRotated, this);
                this.tutorialControl.levelControl.levelEvents.onLevelGenerated.addOnce(this.onLevelGenerated, this);
            }
            removeEvents() {
                this.tutorialControl.levelControl.levelEvents.onBearStackEnteredTile.remove(this.onBearStackEnteredTile, this);
                this.tutorialControl.levelControl.levelEvents.onTileRotated.remove(this.onTileRotated, this);
                this.tutorialControl.levelControl.levelEvents.onLevelGenerated.remove(this.onLevelGenerated, this);
            }
            onBearStackEnteredTile(enteredTile) {

                //don't display the tutorial step in case the game is paused
                if(this.tutorialControl.coreScreen.game.theGameIsPaused) 
                {
                    console.log("Tutorial Step Overriden due to pause");
                    return;
                }

                console.log("Running tutorial step #1");

                if (enteredTile) {
                    this.tilesTraversedCount++;
                    if (this.tilesTraversedCount >= 2) {
                        let tile = enteredTile.grid.gridManager.nextGrid.startTile;
                        let bearStack = this.tutorialControl.levelControl.coreScreen.bearStack;
                        console.log("BearStack Pause2");
                        bearStack.pause();
                        bearStack.stopCameraFollowingBears();
                        this.tutorialControl.levelControl.coreScreen.tutorialOverlay.showRectangle(tile, i18next.t("taptorotate"));
                        this.tutorialControl.levelControl.coreScreen.tutorialHand.startHelpTapAnimation(tile);
                    }
                }
            }
            onTileRotated(tile) {
                if (this.tutorialControl.levelControl.coreScreen.tutorialOverlay.alive) {
                    this.tutorialControl.levelControl.coreScreen.tutorialOverlay.placeText(tile, i18next.t("welldone"));
                    this.tutorialControl.levelControl.coreScreen.tutorialHand.clear();
                    let animationFactory = this.tutorialControl.game.services.animation;
                    let delay = animationFactory.delay(1000);
                    delay.onComplete.add(this.tutorialControl.coreScreen.tutorialOverlay.hide, this.tutorialControl.coreScreen.tutorialOverlay);
                    let bearStack = this.tutorialControl.levelControl.coreScreen.bearStack;
                    delay.onComplete.add(bearStack.resume, bearStack);
                    delay.onComplete.add(bearStack.setCameraToFollow, bearStack);
                    delay.play();
                }
                this.tutorialControl.game.inventory.markTapRotateTileTutorialAsCompleted();
                this.clear();
            }
            onLevelGenerated(grid) {
                if (grid.startTile.isRotatedCorrectly()) {
                    grid.startTile.rotateInstantly();
                    grid.startTile.refreshPathDecoration();
                }
            }
            shouldUseTutorialMap() {
                return super.shouldUseTutorialMap() && this.tutorialControl.levelControl.levelNumber < 1;
            }
        }
        class ShopTutorialHandler extends TutorialHandler {
            constructor(tutorialControl) {
                super(tutorialControl);
                this.tilesTraversedCount = 0;
                this.pathGenerator = new WeBareBearsTrippleTrip.PathGenerator();
                this.pathGenerator.settings.width = 14;
                this.pathGenerator.settings.northWeight = 0;
                this.pathGenerator.settings.eastWeight = 1;
                this.pathGenerator.settings.southWeight = 0;
                this.pathGenerator.settings.westWeight = 0;
            }
            assignEvents() {
                this.tutorialControl.levelControl.levelEvents.onJustBeforeFadeIn.add(this.onJustBeforeFadeIn, this);
                this.tutorialControl.levelControl.levelEvents.onFadedIn.add(this.onCoreFadedIn, this);
                this.tutorialControl.levelControl.levelEvents.onBearStackEnteredTile.add(this.onBearStackEnteredTile, this);
                this.tutorialControl.levelControl.levelEvents.onHelperPowerActivated.add(this.onHelperPowerActivated, this);
            }
            removeEvents() {
                this.tutorialControl.levelControl.levelEvents.onJustBeforeFadeIn.remove(this.onJustBeforeFadeIn, this);
                this.tutorialControl.levelControl.levelEvents.onFadedIn.remove(this.onCoreFadedIn, this);
                this.tutorialControl.levelControl.levelEvents.onBearStackEnteredTile.remove(this.onBearStackEnteredTile, this);
                this.tutorialControl.levelControl.levelEvents.onHelperPowerActivated.remove(this.onHelperPowerActivated, this);
            }
            onJustBeforeFadeIn() {
                let tc = this.tutorialControl;
                if (!tc.game.inventory.hasHelperInQueue() && !tc.hasCompletedShopTutorial() && tc.game.inventory.getCoins() < tc.game.repositories.shop.shopItems[0].price) {
                    tc.coreScreen.ui.shopButton.kill();
                    tc.coreScreen.ui.helperQueue.kill();
                }
                else {
                    tc.coreScreen.ui.shopButton.revive();
                    tc.coreScreen.ui.helperQueue.revive();
                    if (!tc.game.inventory.hasHelperInQueue()) {
                        tc.coreScreen.ui.tapToStart.button.inputEnabled = false;
                    }
                }
            }
            onCoreFadedIn() {
                let tc = this.tutorialControl;
                if (!tc.game.inventory.hasHelperInQueue() && this.tutorialControl.coreScreen.ui.shopButton.alive) {
                    let shopButton = tc.levelControl.coreScreen.ui.shopButton;
                    tc.coreScreen.bearStack.stopCameraFollowingBears();
                    tc.levelControl.coreScreen.tutorialOverlay.showRectangle(shopButton, i18next.t("taptoopen"));
                    tc.levelControl.coreScreen.tutorialHand.startHelpTapAnimation(shopButton);
                    shopButton.onUp.addOnce(this.onShopPressed, this);
                    tc.levelControl.coreScreen.ui.modalManager.views.shop.onTransitionInComplete.addOnce(this.onShopOpened, this);
                }
            }
            onShopPressed() {
                this.tutorialControl.levelControl.coreScreen.tutorialOverlay.hide();
            }
            onShopOpened() {
                let shop = this.tutorialControl.levelControl.coreScreen.ui.modalManager.views.shop;
                shop.lockScrolling = true;
                let target = shop.scrollGroup.children[1];
                this.tutorialControl.levelControl.coreScreen.tutorialOverlay.showRectangle(target, i18next.t("taptobuy"));
                this.tutorialControl.levelControl.coreScreen.tutorialHand.startHelpTapAnimation(target);
                target.onUp.addOnce(this.onItemBoughtInShop, this);
            }
            onItemBoughtInShop() {
                let shop = this.tutorialControl.levelControl.coreScreen.ui.modalManager.views.shop;
                this.tutorialControl.levelControl.coreScreen.tutorialOverlay.showRectangle(shop.backButton, i18next.t("taptoclose"));
                this.tutorialControl.levelControl.coreScreen.tutorialHand.startHelpTapAnimation(shop.backButton);
                shop.backButton.onUp.addOnce(this.onShopClosed, this);
            }
            onShopClosed() {
                this.tutorialControl.levelControl.coreScreen.tutorialOverlay.hide();
                this.tutorialControl.levelControl.coreScreen.tutorialHand.clear();
                let shop = this.tutorialControl.levelControl.coreScreen.ui.modalManager.views.shop;
                shop.lockScrolling = false;
                this.tutorialControl.coreScreen.bearStack.setCameraToFollow();
                this.tutorialControl.coreScreen.ui.tapToStart.button.inputEnabled = true;
            }
            shouldHandlePickupPlacement() {
                let tc = this.tutorialControl;
                let completedTapTutorial = tc.hasCompletedTapRotateTileTutorial();
                let shopTutorialNotCompleted = !tc.hasCompletedShopTutorial();
                let hasEnoughMoneyToBuyHelper = tc.game.inventory.getCoins() >= tc.game.repositories.shop.shopItems[0].price;
                let isFirstLevel = this.tutorialControl.levelControl.levelNumber < 1;
                let hasHelperInQueue = tc.game.inventory.isHelperOfTypeInQueue(WeBareBearsTrippleTrip.HelperType.Chloe);
                let shouldHandlePickupPlacement = completedTapTutorial && shopTutorialNotCompleted && (hasEnoughMoneyToBuyHelper || hasHelperInQueue) && isFirstLevel;
                return shouldHandlePickupPlacement;
            }
            applyPickupPlacementOverridesForMap(grid) {
                let location = grid.path[1].tileLocation;
                let tile = grid.getTile(location.i, location.j - 1);
                grid.forcePlaceHelperInTile(WeBareBearsTrippleTrip.HelperType.Chloe, tile);
            }
            onBearStackEnteredTile(enteredTile) {
                if (!this.tutorialControl.hasCompletedTapRotateTileTutorial() || !this.tutorialControl.game.inventory.hasHelperInQueue()) {
                    return;
                }
                if (enteredTile) {
                    this.tilesTraversedCount++;
                    if (this.tilesTraversedCount >= 3) {
                        console.log("Chloe Tutorial")
                        let grid = enteredTile.grid.gridManager.nextGrid;
                        let location = grid.path[1].tileLocation;
                        let tile = grid.getTile(location.i, location.j - 1);
                        let helper = tile.helper;
                        let bearStack = this.tutorialControl.levelControl.coreScreen.bearStack;
                        console.log("BearStack Pause3");
                        bearStack.pause();
                        bearStack.stopCameraFollowingBears();
                        this.tutorialControl.levelControl.coreScreen.tutorialOverlay.showRectangle(tile, i18next.t('taptoactivate'));
                        this.tutorialControl.levelControl.coreScreen.tutorialHand.startHelpTapAnimation(tile);
                    }
                }
            }
            onHelperPowerActivated(helperType) {
                this.clear();
                this.tutorialControl.game.inventory.markShopTutorialAsCompleted();
                this.tutorialControl.levelControl.coreScreen.tutorialOverlay.hide();
                this.tutorialControl.levelControl.coreScreen.tutorialHand.clear();
                this.tutorialControl.levelControl.coreScreen.bearStack.stopCameraFollowingBears();
            }
            shouldUseTutorialMap() {
                let hasEnoughMoneyToBuyHelper = this.tutorialControl.game.inventory.getCoins() >= this.tutorialControl.game.repositories.shop.shopItems[0].price;
                let hasHelper = this.tutorialControl.game.inventory.hasHelperInQueue();
                return super.shouldUseTutorialMap() && this.tutorialControl.levelControl.levelNumber < 1 && (hasEnoughMoneyToBuyHelper || hasHelper);
            }
        }
        class CrateTutorialHandler extends TutorialHandler {
            constructor(tutorialControl) {
                super(tutorialControl);
                this.tilesTraversedCount = 0;
                this.pathGenerator = new WeBareBearsTrippleTrip.PathGenerator();
                this.pathGenerator.settings.width = 14;
                this.pathGenerator.settings.northWeight = 0;
                this.pathGenerator.settings.eastWeight = 1;
                this.pathGenerator.settings.southWeight = 0;
                this.pathGenerator.settings.westWeight = 0;
            }
            assignEvents() {
                this.tutorialControl.levelControl.levelEvents.onBearStackEnteredTile.add(this.onBearStackEnteredTile, this);
                this.tutorialControl.levelControl.levelEvents.onHelperPowerActivated.add(this.onHelperPowerActivated, this);
            }
            removeEvents() {
                this.tutorialControl.levelControl.levelEvents.onBearStackEnteredTile.remove(this.onBearStackEnteredTile, this);
                this.tutorialControl.levelControl.levelEvents.onHelperPowerActivated.remove(this.onHelperPowerActivated, this);
            }
            shouldHandlePickupPlacement() {
                let tc = this.tutorialControl;
                let completedTapTutorial = tc.hasCompletedTapRotateTileTutorial();
                let completedShopTutorial = tc.hasCompletedShopTutorial();
                let completedCrateTutorial = tc.hasCompletedCrateTutorial();
                return completedShopTutorial && completedTapTutorial && !completedCrateTutorial;
            }
            applyPickupPlacementOverridesForMap(grid) {
                let location = grid.path[1].tileLocation;
                let tile = grid.getTile(location.i, location.j - 1);
                grid.forcePlaceHelperInTile(WeBareBearsTrippleTrip.HelperType.Crate, tile);
            }
            onBearStackEnteredTile(enteredTile) {
                console.log("onBearStackEnteredTile");
                if (!this.tutorialControl.hasCompletedTapRotateTileTutorial() || !this.tutorialControl.hasCompletedShopTutorial()) {
                    return;
                }
                console.log("onBearStackEnteredTile2");
                if (enteredTile) {
                    console.log("onBearStackEnteredTile3");
                    this.tilesTraversedCount++;
                    let grid = enteredTile.grid;
                    let crate = grid.findPlacedHelperOfType(WeBareBearsTrippleTrip.HelperType.Crate);
                    if ((crate)&&(this.tilesTraversedCount >= 2)) {
                        console.log("Crate Tutorial")
                        let game = this.tutorialControl.levelControl.coreScreen.game;
                        let cam = game.camera;
                        let tileWidth = game.getFrameData(Funday.WeBearBears.SpriteLibrary.tiles.ground_light).width;
                        let targetX = crate.tile.ground.world.x + tileWidth;
                        if (cam.x + cam.view.width > targetX && targetX > cam.x) {
                            //cam.x = targetX-cam.view.width;
                            //crate.tile = 0.3;
                            console.log("Tile",crate.tile)
                            console.log(cam.x, cam.view.width, targetX, crate.tile.ground.world.x )
                            let tile = crate.tile;
                            let bearStack = this.tutorialControl.levelControl.coreScreen.bearStack;
                            bearStack.pause();
                            bearStack.stopCameraFollowingBears();
                            this.tutorialControl.levelControl.coreScreen.tutorialOverlay.showRectangle(tile, i18next.t('tapbox5'));
                            this.tutorialControl.levelControl.coreScreen.tutorialHand.startHelpTapAnimation(tile);
                        }
                    }
                }
            }
            onHelperPowerActivated(helperType) {
                if (this.tutorialControl.hasCompletedShopTutorial() && helperType === WeBareBearsTrippleTrip.HelperType.Crate) {
                    this.clear();
                    this.tutorialControl.game.inventory.markCrateTutorialAsCopmpleted();
                    this.tutorialControl.levelControl.coreScreen.tutorialOverlay.hide();
                    this.tutorialControl.levelControl.coreScreen.tutorialHand.clear();
                    this.tutorialControl.levelControl.coreScreen.bearStack.setCameraToFollow();
                    
                    console.log("BearStack Resume2");
                    this.tutorialControl.levelControl.coreScreen.bearStack.resume();
                }
            }
            shouldUseTutorialMap() {
                return super.shouldUseTutorialMap() && this.tutorialControl.hasCompletedShopTutorial();
            }
        }
    })(WeBareBearsTrippleTrip = Funday.WeBareBearsTrippleTrip || (Funday.WeBareBearsTrippleTrip = {}));
})(Funday || (Funday = {}));
var Funday;
(function (Funday) {
    var WeBareBearsTrippleTrip;
    (function (WeBareBearsTrippleTrip) {
        class WarpTimber extends Phaser.Group {
            constructor(game) {
                super(game);
                this.timber = null;
                this.timber = game.createSprite(0, 0, Funday.WeBearBears.SpriteLibrary.tiles.timber_anim01);
                this.timber.position.y = 0;
                this.timber.animations.add("idle", [Funday.WeBearBears.SpriteLibrary.tiles.timber_anim01.frame, Funday.WeBearBears.SpriteLibrary.tiles.timber_anim02.frame, Funday.WeBearBears.SpriteLibrary.tiles.timber_anim03.frame, Funday.WeBearBears.SpriteLibrary.tiles.timber_anim04.frame], WeBareBearsTrippleTrip.Bear.frameRate, true);
                this.timber.play("idle");
                this.timber.anchor.setTo(.5, .85);
                this.reset();
            }
            setToTimber(bearStack) {
                let game = this.game;
                let animationFactory = game.services.animation;
                bearStack.scale.x = 1;
                bearStack.currentTile.grid.sortGameObjectsLayer();
                bearStack.currentTile.grid.gridManager.nextGrid.sortGameObjectsLayer();
                let timberLocal = bearStack.parent.toLocal(this.timber.position, this.timber.parent);
                bearStack.position.x = timberLocal.x;
                bearStack.position.y = timberLocal.y;
                game.camera.follow(bearStack.warpCameraFollowPoint);
                bearStack.addChildAt(this.timber, 0);
                bearStack.parent.setChildIndex(bearStack, bearStack.parent.children.length - 1);
                this.timber.position.setTo(0);
            }
            addBearStack(bearStack) {
                let game = this.game;
                this.timber.addChild(bearStack);
                bearStack.position.setTo(0);
            }
            reset() {
                let game = this.game;
                this.visible = false;
                this.addChild(this.timber);
                this.timber.position.setTo(game.applyResolutionRatio(450), game.height * 0.88);
            }
        }
        WeBareBearsTrippleTrip.WarpTimber = WarpTimber;
    })(WeBareBearsTrippleTrip = Funday.WeBareBearsTrippleTrip || (Funday.WeBareBearsTrippleTrip = {}));
})(Funday || (Funday = {}));
var Funday;
(function (Funday) {
    var WeBareBearsTrippleTrip;
    (function (WeBareBearsTrippleTrip) {
        class WaterForeground extends Phaser.Group {
            constructor(game) {
                super(game);
                this.water = null;
                this.topWave = null;
                this.bottomWave = null;
                this.wave = null;
                let water = this.createHorizontalTileSprite(Funday.WeBearBears.SpriteLibrary.scenery_water_and_clouds.water01);
                water.anchor.set(.5, 1);
                water.position.x = this.game.world.centerX;
                water.position.y = this.game.height;
                this.water = water;
                let topWave = this.createHorizontalTileSprite(Funday.WeBearBears.SpriteLibrary.scenery_water_and_clouds.water02);
                topWave.position.y = water.top + (water.height * .3);
                this.addChild(topWave);
                this.topWave = topWave;
                let bottomWave = this.createHorizontalTileSprite(Funday.WeBearBears.SpriteLibrary.scenery_water_and_clouds.water03);
                bottomWave.position.y = water.top + (water.height * .7);
                this.addChild(bottomWave);
                this.bottomWave = bottomWave;
                this.startWavesIdle();
            }
            startWavesIdle() {
                let game = this.game;
                let wave0Loop = this.createLoopingWaveAnimation(this.water, 5000, 1);
                let wave1Loop = this.createLoopingWaveAnimation(this.topWave, 5000, -1);
                let wave2Loop = this.createLoopingWaveAnimation(this.bottomWave, 5000, -2);
                wave0Loop.play();
                wave1Loop.play();
                wave2Loop.play();
            }
            createLoopingWaveAnimation(wave, durationMs, directionModifier) {
                let game = this.game;
                let animationFactory = game.services.animation;
                let waveOrgY = wave.position.y;
                let offset = game.applyResolutionRatio(10);
                let tweenWaveUp = animationFactory.tween(wave.position, { y: waveOrgY - (offset * directionModifier) }, durationMs / 2, Phaser.Easing.Linear.None);
                let tweenWaveDown = animationFactory.tween(wave.position, { y: waveOrgY + (offset * directionModifier) }, durationMs / 2, Phaser.Easing.Linear.None);
                let queue = animationFactory.queue([tweenWaveUp, tweenWaveDown]);
                let loop = animationFactory.loop(queue);
                return loop;
            }
            update() {
                this.bottomWave.tilePosition.x = this.game.camera.x * 3 * -1;
                this.topWave.tilePosition.x = this.game.camera.x * 2 * -1;
            }
            createHorizontalTileSprite(spriteId) {
                let game = this.game;
                let frameData = game.getFrameData(spriteId);
                let ts = game.createTileSprite(0, 0, game.world.width, frameData.height, spriteId, this);
                this.addChild(ts);
                return ts;
            }
        }
        WeBareBearsTrippleTrip.WaterForeground = WaterForeground;
    })(WeBareBearsTrippleTrip = Funday.WeBareBearsTrippleTrip || (Funday.WeBareBearsTrippleTrip = {}));
})(Funday || (Funday = {}));
var Funday;
(function (Funday) {
    var WeBareBearsTrippleTrip;
    (function (WeBareBearsTrippleTrip) {
        class AHelper extends Phaser.Group {
            constructor(game, helperType) {
                super(game);
                this.isRequiredToBeInHelperQueue = true;
                this.pausesAndBlockInputWhileActivating = true;
                this.outlineSprite = null;
                this.sprite = null;
                this.helperType = null;
                this.tile = null;
                this.helperType = helperType;
                this.outlineSprite = game.createSprite(0, 0, Funday.WeBearBears.SpriteLibrary.tiles.tile_selection, this);
                this.outlineSprite.anchor.setTo(.5);
                this.sprite = this.constructSprite();
                if (this.sprite) {
                    this.addChild(this.sprite);
                    this.sprite.events.onInputDown.add(this.onButtonDown, this);
                    this.sprite.events.onInputOver.add(this.onButtonOver, this);
                    this.sprite.events.onInputOut.add(this.onButtonOut, this);
                    this.sprite.events.onInputUp.add(this.onButtonUp, this);
                }
                this.sprite.inputEnabled = true;
                this.reset();
            }
            reset() {
            }
            createFlashAnimation() {
                let game = this.game;
                let animationFactory = game.services.animation;
                let flashUp = animationFactory.fadeToWhite(50);
                let delay = animationFactory.delay(100);
                let flashDown = animationFactory.fadeFromWhite(100);
                return animationFactory.queue([flashUp, delay, flashDown]);
            }
            activatePower() {
                let game = this.game;
                let animationFactory = game.services.animation;
                let core = this.tile.grid.gridManager.coreScreen;
                let bearStack = this.tile.grid.gridManager.coreScreen.bearStack;
                console.log("this.pausesAndBlockInputWhileActivating",this.pausesAndBlockInputWhileActivating);
                if (this.pausesAndBlockInputWhileActivating) {
                    core.blockInput();
                    console.log("BearStack Pause1");
                    bearStack.pause();
                }
                let activatePowerAnimation = this.createActivatePowerAnimation(this.helperType);
                let animationEffect = this.createUsePowerAnimation();
                let alphaOutHelper = animationFactory.tween(this, { alpha: 0 }, 350);
                alphaOutHelper.onComplete.add(this.clear, this);
                let queue = animationFactory.queue([
                    activatePowerAnimation,
                    animationEffect
                ]);
                queue.onComplete.add(function () {
                    if (this.pausesAndBlockInputWhileActivating) {
                        console.log("BearStack Resume1");
                        bearStack.resume();
                        alphaOutHelper.play();
                    }
                }, this);
                queue.onComplete.add(core.unblockInput, core);
                queue.onComplete.add(game.repositories.sound.onAfterHelperUsePower, game.repositories.sound, 1, this.helperType);
                queue.onComplete.add(this.onUsePowerAnimationCompleted, this);
                queue.play();
            }
            createActivatePowerAnimation(helperType) {
                let game = this.game;
                let animationFactory = game.services.animation;
                let anim = animationFactory.sprite(this.sprite, HelperAnimationKey.ActivatePower, 700);
                anim.onPlay.add(this.playActivatePowerSound.bind(this, helperType));
                let delayAfterFistBump = animationFactory.delay(100);
                let flash = this.createFlashAnimation();
                let delayAfterFlash = animationFactory.delay(100);
                return animationFactory.queue([anim, delayAfterFistBump, flash, delayAfterFlash]);
            }
            playActivatePowerSound() {
                let game = this.game;
                game.repositories.sound.onHelperUsePower(this.helperType);
            }
            onUsePowerAnimationCompleted() {
                let game = this.game;
                if (this.isRequiredToBeInHelperQueue) {
                    game.inventory.consumeHelper(this.helperType);
                    game.screenManager.screens.core.ui.helperQueue.consumeHelper(this.helperType);
                }
            }
            clear() {
                this.alpha = 1;
                if (this.tile) {
                    let tile = this.tile;
                    this.tile = null;
                    tile.clearHelper();
                }
            }
            onButtonOut(gameObject, pointer) {
                let animationFactory = this.game.services.animation;
                var tween = animationFactory.tween(this.sprite.scale, { x: 1, y: 1 }, 100);
                tween.play();
            }
            onButtonOver() {
                let animationFactory = this.game.services.animation;
                var tween = animationFactory.tween(this.sprite.scale, { x: 1.05, y: 1.05 }, 100);
                tween.play();
            }
            onButtonDown() {
                let animationFactory = this.game.services.animation;
                var tween = animationFactory.tween(this.sprite.scale, { x: .9, y: .9 }, 100);
                tween.play();
            }
            onButtonUp(gameObject, pointer, isPointerOver) {
                console.log("On Button Up: Power Up")
                let game = this.game;
                if(!game.gameIsFunctional)
                {
                    console.log("Game is not functional yet");
                    return;
                }
                let animationFactory = game.services.animation;
                var tween = animationFactory.tween(this.sprite.scale, { x: 1, y: 1 }, 100);
                tween.play();
                if (isPointerOver && this.canActivatePower()) {
                    this.activatePower();
                    this.tile.grid.gridManager.coreScreen.levelControl.onHelperPowerActivated(this.helperType);
                    let pools = game.repositories.pool;
                    pools.addOverlay(this, 750, Phaser.Easing.Quadratic.Out);
                }
            }
            createSolveTilesEffectAnimation(tilesToSolveCount) {
                let game = this.game;
                let animationFactory = game.services.animation;
                let pools = game.repositories.pool;
                let bearStack = this.tile.grid.gridManager.coreScreen.bearStack;
                let soundRepo = game.repositories.sound;
                let tilesToSolve = this.getTilesToSolveFromBearStack(tilesToSolveCount);
                let anims = [];
                for (let index = 0; index < tilesToSolve.length; index++) {
                    const tile = tilesToSolve[index];
                    let subAnims = [];
                    if (index > 0) {
                        let delay = animationFactory.delay(index * 250);
                        subAnims.push(delay);
                    }
                    let solveAnim = animationFactory.delay(10);
                    solveAnim.onPlay.add(game.camera.follow, game.camera, 1, tile, null, .05, .05);
                    solveAnim.onComplete.add(pools.addOverlay.bind(pools, tile, 1000, Phaser.Easing.Quadratic.Out));
                    solveAnim.onComplete.add(tile.solve, tile);
                    solveAnim.onComplete.add(tile.solve, tile);
                    solveAnim.onComplete.add(soundRepo.onRoadSnap, soundRepo);
                    subAnims.push(solveAnim);
                    let queue = animationFactory.queue(subAnims);
                    anims.push(queue);
                }
                let currentCamX = game.camera.x;
                let bundle = animationFactory.bundle(anims);
                let moveCameraBackTween = animationFactory.tween(game.camera, { x: currentCamX }, 1000, Phaser.Easing.Quadratic.InOut);
                let delay1 = animationFactory.delay(500);
                let delay2 = animationFactory.delay(200);
                delay1.onComplete.add(game.camera.unfollow, game.camera);
                let queue = animationFactory.queue([bundle, delay1, moveCameraBackTween, delay2]);
                queue.onPlay.add(bearStack.stopCameraFollowingBears.bind(bearStack));
                queue.onComplete.add(bearStack.setCameraToFollow.bind(bearStack));
                return queue;
            }
            getTilesToSolveFromBearStack(count) {
                let bearStack = this.tile.grid.gridManager.coreScreen.bearStack;
                let currentGrid = bearStack.currentTile.grid;
                let startIndex = 0;
                let maxLockCount = count;
                let tilesToSolve = [];
                for (let index = 1; index < currentGrid.path.length; index++) {
                    const pathElement = currentGrid.path[index - 1];
                    if (pathElement.tileLocation.isEqualTo(bearStack.currentTile.location)) {
                        startIndex = index;
                        break;
                    }
                }
                for (let index = startIndex; index < currentGrid.path.length && tilesToSolve.length < maxLockCount; index++) {
                    const tile = currentGrid.getTileAtLocation(currentGrid.path[index].tileLocation);
                    if (!tile.isRotatedCorrectly()) {
                        tilesToSolve.push(tile);
                    }
                }
                let nextGrid = currentGrid.gridManager.nextGrid;
                for (let index = 0; index < nextGrid.path.length && tilesToSolve.length < maxLockCount; index++) {
                    const tile = nextGrid.getTileAtLocation(nextGrid.path[index].tileLocation);
                    if (!tile.isRotatedCorrectly()) {
                        tilesToSolve.push(tile);
                    }
                }
                return tilesToSolve;
            }
            placeInGrid(grid) {
                let tile = grid.getRandomEmptyTile();
                this.placeInTile(tile);
            }
            placeInTile(tile) {
                tile.addHelper(this);
                this.sprite.animations.play(HelperAnimationKey.Idle, 1, true);
                this.tile = tile;
            }
        }
        WeBareBearsTrippleTrip.AHelper = AHelper;
        class HelperAnimationKey {
        }
        HelperAnimationKey.Idle = "acivate power";
        HelperAnimationKey.ActivatePower = "idle";
        WeBareBearsTrippleTrip.HelperAnimationKey = HelperAnimationKey;
    })(WeBareBearsTrippleTrip = Funday.WeBareBearsTrippleTrip || (Funday.WeBareBearsTrippleTrip = {}));
})(Funday || (Funday = {}));
var Funday;
(function (Funday) {
    var WeBareBearsTrippleTrip;
    (function (WeBareBearsTrippleTrip) {
        class BearPickup extends Phaser.Group {
            constructor(game, bearType) {
                super(game);
                this.bearType = null;
                this.bearSprite = null;
                this.bearType = bearType;
                if (bearType === WeBareBearsTrippleTrip.BearType.Grizzly) {
                    this.bearSprite = this.createGrizzly();
                }
                else if (bearType === WeBareBearsTrippleTrip.BearType.Panda) {
                    this.bearSprite = this.createPanda();
                }
            }
            createGrizzly() {
                let spriteSheet = Funday.WeBearBears.SpriteLibrary.tiles;
                let game = this.game;
                let s = game.createSprite(0, 0, spriteSheet.grizz_waiting01);
                s.anchor.setTo(.5, 1);
                this.addChild(s);
                let idleFrames = [spriteSheet.grizz_waiting01.frame,
                    spriteSheet.grizz_waiting02.frame,
                    spriteSheet.grizz_waiting03.frame,
                    spriteSheet.grizz_waiting02.frame,
                    spriteSheet.grizz_waiting01.frame,
                    spriteSheet.grizz_waiting04.frame,
                    spriteSheet.grizz_waiting05.frame,
                    spriteSheet.grizz_waiting04.frame];
                s.animations.add(BearPickUpAnimtionKey.Idle, idleFrames, 8, true);
                s.play(BearPickUpAnimtionKey.Idle);
                return s;
            }
            createPanda() {
                let spriteSheet = Funday.WeBearBears.SpriteLibrary.tiles;
                let game = this.game;
                let s = game.createSprite(0, 0, spriteSheet.panda_waiting01);
                s.anchor.setTo(.5, 1);
                this.addChild(s);
                let idleFrames = [spriteSheet.panda_waiting01.frame,
                    spriteSheet.panda_waiting02.frame,
                    spriteSheet.panda_waiting03.frame,
                    spriteSheet.panda_waiting02.frame,
                    spriteSheet.panda_waiting01.frame,
                    spriteSheet.panda_waiting04.frame,
                    spriteSheet.panda_waiting05.frame,
                    spriteSheet.panda_waiting04.frame];
                s.animations.add(BearPickUpAnimtionKey.Idle, idleFrames, 8, true);
                s.play(BearPickUpAnimtionKey.Idle);
                return s;
            }
        }
        WeBareBearsTrippleTrip.BearPickup = BearPickup;
        class BearPickUpAnimtionKey {
        }
    })(WeBareBearsTrippleTrip = Funday.WeBareBearsTrippleTrip || (Funday.WeBareBearsTrippleTrip = {}));
})(Funday || (Funday = {}));
var Funday;
(function (Funday) {
    var WeBareBearsTrippleTrip;
    (function (WeBareBearsTrippleTrip) {
        class CharlieHelper extends WeBareBearsTrippleTrip.AHelper {
            constructor(game) {
                super(game, WeBareBearsTrippleTrip.HelperType.Charlie);
            }
            constructSprite() {
                let game = this.game;
                let sprite = game.createSprite(0, 0, Funday.WeBearBears.SpriteLibrary.tiles.helper_chloe_anim01);
                let spriteGroup = Funday.WeBearBears.SpriteLibrary.tiles;
                let activatePowerFrames = [
                    spriteGroup.helper_charlie_anim01.frame,
                    spriteGroup.helper_charlie_anim02.frame,
                    spriteGroup.helper_charlie_anim02.frame,
                    spriteGroup.helper_charlie_anim04.frame,
                    spriteGroup.helper_charlie_anim05.frame,
                    spriteGroup.helper_charlie_anim06.frame
                ];
                sprite.animations.add(WeBareBearsTrippleTrip.HelperAnimationKey.ActivatePower, activatePowerFrames);
                let idleFrames = [spriteGroup.helper_charlie_anim01.frame];
                sprite.animations.add(WeBareBearsTrippleTrip.HelperAnimationKey.Idle, idleFrames);
                sprite.anchor.setTo(.5, .8);
                sprite.inputEnabled = true;
                sprite.animations.play(WeBareBearsTrippleTrip.HelperAnimationKey.Idle);
                return sprite;
            }
            canBePlacedInGrid(grid) {
                return grid.getEmptyTiles().length > 0;
            }
            createUsePowerAnimation() {
                let game = this.game;
                let animationFactory = game.services.animation;
                let bearStack = this.tile.grid.gridManager.coreScreen.bearStack;
                let delay = animationFactory.delay(10);
                delay.onPlay.add(bearStack.setStepSpeedOffset, bearStack);
                return delay;
            }
            canActivatePower() {
                return true;
            }
        }
        WeBareBearsTrippleTrip.CharlieHelper = CharlieHelper;
        class ChloeAnimationKey {
        }
        ChloeAnimationKey.Idle = "acivate power";
        ChloeAnimationKey.ActivatePower = "idle";
    })(WeBareBearsTrippleTrip = Funday.WeBareBearsTrippleTrip || (Funday.WeBareBearsTrippleTrip = {}));
})(Funday || (Funday = {}));
var Funday;
(function (Funday) {
    var WeBareBearsTrippleTrip;
    (function (WeBareBearsTrippleTrip) {
        class ChloeHelper extends WeBareBearsTrippleTrip.AHelper {
            constructor(game) {
                super(game, WeBareBearsTrippleTrip.HelperType.Chloe);
            }
            constructSprite() {
                let game = this.game;
                let sprite = game.createSprite(0, 0, Funday.WeBearBears.SpriteLibrary.tiles.helper_chloe_anim01);
                let spriteGroup = Funday.WeBearBears.SpriteLibrary.tiles;
                let activatePowerFrames = [
                    spriteGroup.helper_chloe_anim01.frame,
                    spriteGroup.helper_chloe_anim02.frame,
                    spriteGroup.helper_chloe_anim03.frame,
                    spriteGroup.helper_chloe_anim04.frame
                ];
                sprite.animations.add(WeBareBearsTrippleTrip.HelperAnimationKey.ActivatePower, activatePowerFrames);
                let idleFrames = [spriteGroup.helper_chloe_anim01.frame];
                sprite.animations.add(WeBareBearsTrippleTrip.HelperAnimationKey.Idle, idleFrames);
                sprite.anchor.setTo(.5);
                sprite.inputEnabled = true;
                sprite.animations.play(WeBareBearsTrippleTrip.HelperAnimationKey.Idle);
                return sprite;
            }
            canBePlacedInGrid(grid) {
                return grid.getEmptyTiles().length > 0;
            }
            createUsePowerAnimation() {
                let game = this.game;
                let animationFactory = game.services.animation;
                let soundRepository = game.repositories.sound;
                let bearStack = this.tile.grid.gridManager.coreScreen.bearStack;
                let coins = this.placeCoinsFromBearStack(10);
                let anims = [];
                for (let index = 0; index < coins.length; index++) {
                    const coin = coins[index];
                    coin.scale.setTo(0);
                    let subAnims = [];
                    if (index > 0) {
                        let delay = animationFactory.delay(index * 250);
                        subAnims.push(delay);
                    }
                    let scaleUp = animationFactory.tween(coin.scale, { x: 1, y: 1 }, 500, Phaser.Easing.Back.Out);
                    subAnims.push(scaleUp);
                    scaleUp.onPlay.add(game.camera.follow, game.camera, 1, coin, null, .05, .05);
                    scaleUp.onPlay.add(coin.flash.bind(coin, 200));
                    scaleUp.onPlay.add(soundRepository.onCoinSpawn, soundRepository);
                    let queue = animationFactory.queue(subAnims);
                    anims.push(queue);
                }
                let bundle = animationFactory.bundle(anims);
                let currentCamX = game.camera.x;
                let moveCameraBackTween = animationFactory.tween(game.camera, { x: currentCamX }, 1000, Phaser.Easing.Quadratic.InOut);
                let delay1 = animationFactory.delay(500);
                delay1.onPlay.add(game.camera.unfollow, game.camera);
                let delay2 = animationFactory.delay(200);
                let queue = animationFactory.queue([bundle, delay1, moveCameraBackTween, delay2]);
                queue.onPlay.add(bearStack.stopCameraFollowingBears.bind(bearStack));
                queue.onComplete.add(bearStack.setCameraToFollow.bind(bearStack));
                return queue;
            }
            placeCoinsFromBearStack(count) {
                let bearStack = this.tile.grid.gridManager.coreScreen.bearStack;
                let currentGrid = bearStack.currentTile.grid;
                let startIndex = 0;
                let placedCoins = [];
                let maxCoinCount = count;
                for (let index = 0; index < currentGrid.path.length; index++) {
                    const pathElement = currentGrid.path[index];
                    if (pathElement.tileLocation.isEqualTo(bearStack.currentTile.location)) {
                        startIndex = index + 1;
                        break;
                    }
                }
                for (let index = startIndex; index < currentGrid.path.length && placedCoins.length < maxCoinCount; index++) {
                    const tile = currentGrid.getTileAtLocation(currentGrid.path[index].tileLocation);
                    if (!tile.coin) {
                        let coin = currentGrid.placeCoinOnTile(tile);
                        placedCoins.push(coin);
                    }
                }
                let nextGrid = currentGrid.gridManager.nextGrid;
                for (let index = 0; index < nextGrid.path.length && placedCoins.length < maxCoinCount; index++) {
                    const tile = nextGrid.getTileAtLocation(nextGrid.path[index].tileLocation);
                    if (!tile.coin) {
                        let coin = nextGrid.placeCoinOnTile(tile);
                        placedCoins.push(coin);
                    }
                }
                return placedCoins;
            }
            canActivatePower() {
                return !this.tile.grid.gridManager.coreScreen.bearStack.isBearFallingOffStack;
            }
        }
        WeBareBearsTrippleTrip.ChloeHelper = ChloeHelper;
    })(WeBareBearsTrippleTrip = Funday.WeBareBearsTrippleTrip || (Funday.WeBareBearsTrippleTrip = {}));
})(Funday || (Funday = {}));
var Funday;
(function (Funday) {
    var WeBareBearsTrippleTrip;
    (function (WeBareBearsTrippleTrip) {
        class CrateHelper extends WeBareBearsTrippleTrip.AHelper {
            constructor(game) {
                super(game, WeBareBearsTrippleTrip.HelperType.Crate);
                this.hp = 1;
                this.clickCoolDownMs = 100;
                this.lastClickTime = 0;
                this.coinDroptable = new Funday.Utils.LootTable();
                this.helperDropTable = new Funday.Utils.LootTable();
                this.coinsAndHelperDropTable = new Funday.Utils.LootTable();
                this.punchBackToNormal = null;
                this.lastPunchSpriteId = Funday.WeBearBears.SpriteLibrary.tiles.box_anim03;
                this.isRequiredToBeInHelperQueue = false;
                this.pausesAndBlockInputWhileActivating = false;
                this.reset();
                let fiveCoins = new CrateCoinDrop(5);
                let tenCoins = new CrateCoinDrop(10);
                let fifteenCoins = new CrateCoinDrop(15);
                let twentyCoins = new CrateCoinDrop(20);
                let chloeHelperDrop = new CrateHelperDrop(WeBareBearsTrippleTrip.HelperType.Chloe);
                let charlieHelperDrop = new CrateHelperDrop(WeBareBearsTrippleTrip.HelperType.Charlie);
                let lucyHelperDrop = new CrateHelperDrop(WeBareBearsTrippleTrip.HelperType.Lucy);
                let rangerTapesHelperDrop = new CrateHelperDrop(WeBareBearsTrippleTrip.HelperType.RangerTabes);
                let roboBearHelperDrop = new CrateHelperDrop(WeBareBearsTrippleTrip.HelperType.RoboBear);
                let timberHelperDrop = new CrateHelperDrop(WeBareBearsTrippleTrip.HelperType.Timber);
                this.coinDroptable.addItem(fiveCoins, 50);
                this.coinDroptable.addItem(tenCoins, 25);
                this.coinDroptable.addItem(fifteenCoins, 15);
                this.coinDroptable.addItem(twentyCoins, 10);
                this.helperDropTable.addItem(chloeHelperDrop, 20);
                this.helperDropTable.addItem(lucyHelperDrop, 20);
                this.helperDropTable.addItem(rangerTapesHelperDrop, 20);
                this.helperDropTable.addItem(roboBearHelperDrop, 20);
                this.helperDropTable.addItem(timberHelperDrop, 15);
                this.helperDropTable.addItem(charlieHelperDrop, 5);
                this.coinsAndHelperDropTable.addItem(this.coinDroptable, 2);
                this.coinsAndHelperDropTable.addItem(this.helperDropTable, 1);
                this.coinsAndHelperDropTable.autoResolveDroppedLootTables = true;
            }
            reset() {
                this.hp = this.game.rnd.integerInRange(5, 5);
                this.sprite.alpha = 1;
                let crate = this.sprite.children[0];
                if (crate) {
                    crate.loadTexture(Funday.WeBearBears.SpriteLibrary.tiles.box_anim01.key, Funday.WeBearBears.SpriteLibrary.tiles.box_anim01.frame);
                }
            }
            punch() {
                let crateSprite = this.sprite.children[0];
                let spriteIds = Funday.WeBearBears.SpriteLibrary.tiles;
                this.lastPunchSpriteId = this.lastPunchSpriteId === spriteIds.box_anim03 ? spriteIds.box_anim02 : spriteIds.box_anim03;
                crateSprite.loadTexture(this.lastPunchSpriteId.key, this.lastPunchSpriteId.frame);
                console.log("Camera Shake1");
                this.game.camera.shake(.005, 100, true, Phaser.Camera.SHAKE_HORIZONTAL, false);
                let game = this.game;
                let animationFactory = game.services.animation;
                if (this.punchBackToNormal) {
                    this.punchBackToNormal.stop();
                    this.punchBackToNormal = null;
                }
                let delay = animationFactory.delay(250);
                delay.onComplete.add(function () {
                    if (this.hp > 0) {
                        crateSprite.loadTexture(spriteIds.box_anim01.key, spriteIds.box_anim01.frame);
                    }
                }, this);
                this.punchBackToNormal = delay;
                this.punchBackToNormal.play();
            }
            canActivatePower() {
                if (this.lastClickTime + this.clickCoolDownMs <= this.game.time.time) {
                    this.lastClickTime = this.game.time.time;
                    this.hp--;
                    let canAcivate = this.hp === 0;
                    if (!canAcivate && this.hp > 0) {
                        this.punch();
                    }
                    if (this.hp >= 0) {
                        let game = this.game;
                        game.repositories.sound.onMysterBoxTapped(this.hp);
                    }
                    return canAcivate;
                }
                else {
                    return false;
                }
            }
            constructSprite() {
                let game = this.game;
                let spriteContainer = game.createSprite(0, 0);
                spriteContainer.anchor.setTo(.5);
                let sprite = game.createSprite(0, 0, Funday.WeBearBears.SpriteLibrary.tiles.box_anim01);
                sprite.anchor.setTo(.5);
                sprite.width = game.applyResolutionRatio(128);
                sprite.height = game.applyResolutionRatio(128);
                spriteContainer.addChild(sprite);
                return spriteContainer;
            }
            canBePlacedInGrid(grid) {
                let levelControl = grid.gridManager.coreScreen.levelControl;
                return grid.getEmptyTiles().length > 0 && levelControl.tutorialControl.hasCompletedCrateTutorial();
            }
            createActivatePowerAnimation() {
                let game = this.game;
                let animationFactory = game.services.animation;
                let anim = animationFactory.delay(100);
                let tween = animationFactory.tween(this.sprite, { alpha: 0 }, 100);
                tween.onPlay.add(function () {
                    console.log("Camera Shake2");
                    this.game.camera.shake(.006, 500, true, Phaser.Camera.SHAKE_HORIZONTAL, false);
                }, this);
                let bundle = animationFactory.bundle([anim, tween]);
                return bundle;
            }
            createUsePowerAnimation() {
                let game = this.game;
                let animationFactory = game.services.animation;
                let soundRepository = game.repositories.sound;
                let bearStack = this.tile.grid.gridManager.coreScreen.bearStack;
                let dropTable = null;
                if (game.inventory.hasHelperQueueRoomForHelper()) {
                    dropTable = this.coinsAndHelperDropTable;
                }
                else {
                    dropTable = this.coinDroptable;
                }
                let crateDrop = dropTable.getRandomItem();
                let anim = null;
                if (crateDrop instanceof CrateCoinDrop) {
                    let pool = game.repositories.pool;
                    let ui = this.tile.grid.gridManager.coreScreen.ui;
                    let animsSpread = [];
                    let animsFlyToUICoins = [];
                    for (let index = 0; index < crateDrop.quantity; index++) {
                        let coin = pool.coin.get();
                        ui.addChild(coin);
                        let startPosition = ui.toLocal(this.tile.position, this.tile.parent);
                        let endPosition = ui.toLocal(this.tile.position, this.tile.parent);
                        coin.position.setTo(startPosition.x, startPosition.y);
                        let percentage = 1.5;
                        endPosition.x += game.rnd.realInRange(-coin.width * percentage, coin.width * percentage);
                        endPosition.y += game.rnd.realInRange(-coin.height * percentage, coin.height * percentage);
                        let spreadDuration = game.rnd.integerInRange(200, 250);
                        let tween1 = animationFactory.tween(coin, endPosition, spreadDuration, Phaser.Easing.Back.Out);
                        animsSpread.push(tween1);
                        let duration = game.rnd.integerInRange(350, 500);
                        let tween2 = animationFactory.tween(coin, ui.coins.position, duration);
                        tween2.onComplete.add(coin.returnToPool, coin);
                        animsFlyToUICoins.push(tween2);
                    }
                    let spreadBundle = animationFactory.bundle(animsSpread);
                    let delay = animationFactory.delay(100);
                    let flyBundle = animationFactory.bundle(animsFlyToUICoins);
                    anim = animationFactory.queue([spreadBundle, delay, flyBundle]);
                    anim.onPlay.add(soundRepository.onMysteryBoxDropCoins.bind(soundRepository));
                    anim.onComplete.add(ui.coins.playCoinCollectAnimation.bind(ui.coins, crateDrop.quantity));
                }
                else if (crateDrop instanceof CrateHelperDrop) {
                    anim = game.repositories.pool.addCrateHelperPickup(crateDrop.helperType, this);
                    anim.onPlay.add(function () {
                        soundRepository.onHelperAcquired(crateDrop.helperType);
                    });
                    anim.onComplete.add(this.clear, this);
                    anim.onComplete.add(function () {
                        game.inventory.addHelperToHelperQueue(crateDrop.helperType);
                        game.screenManager.screens.core.ui.helperQueue.addHelper(crateDrop.helperType);
                    }, this);
                }
                anim.onComplete.add(this.clear, this);
                return anim;
            }
        }
        WeBareBearsTrippleTrip.CrateHelper = CrateHelper;
        class CrateDrop {
        }
        class CrateCoinDrop extends CrateDrop {
            constructor(quantity) {
                super();
                this.quantity = 10;
                this.quantity = quantity;
            }
        }
        class CrateHelperDrop extends CrateDrop {
            constructor(helperType) {
                super();
                this.helperType = WeBareBearsTrippleTrip.HelperType.None;
                this.helperType = helperType;
            }
        }
    })(WeBareBearsTrippleTrip = Funday.WeBareBearsTrippleTrip || (Funday.WeBareBearsTrippleTrip = {}));
})(Funday || (Funday = {}));
var Funday;
(function (Funday) {
    var WeBareBearsTrippleTrip;
    (function (WeBareBearsTrippleTrip) {
        let HelperType;
        (function (HelperType) {
            HelperType[HelperType["None"] = 0] = "None";
            HelperType[HelperType["Chloe"] = 1] = "Chloe";
            HelperType[HelperType["Charlie"] = 2] = "Charlie";
            HelperType[HelperType["RangerTabes"] = 3] = "RangerTabes";
            HelperType[HelperType["Lucy"] = 4] = "Lucy";
            HelperType[HelperType["RoboBear"] = 5] = "RoboBear";
            HelperType[HelperType["Timber"] = 6] = "Timber";
            HelperType[HelperType["Crate"] = 7] = "Crate";
        })(HelperType = WeBareBearsTrippleTrip.HelperType || (WeBareBearsTrippleTrip.HelperType = {}));
    })(WeBareBearsTrippleTrip = Funday.WeBareBearsTrippleTrip || (Funday.WeBareBearsTrippleTrip = {}));
})(Funday || (Funday = {}));
var Funday;
(function (Funday) {
    var WeBareBearsTrippleTrip;
    (function (WeBareBearsTrippleTrip) {
        class LucyHelper extends WeBareBearsTrippleTrip.AHelper {
            constructor(game) {
                super(game, WeBareBearsTrippleTrip.HelperType.Lucy);
            }
            constructSprite() {
                let game = this.game;
                let sprite = game.createSprite(0, 0, Funday.WeBearBears.SpriteLibrary.tiles.helper_lucy_anim01);
                let spriteGroup = Funday.WeBearBears.SpriteLibrary.tiles;
                let activatePowerFrames = [
                    spriteGroup.helper_lucy_anim01.frame,
                    spriteGroup.helper_lucy_anim02.frame,
                    spriteGroup.helper_lucy_anim03.frame,
                    spriteGroup.helper_lucy_anim04.frame,
                    spriteGroup.helper_lucy_anim05.frame,
                    spriteGroup.helper_lucy_anim06.frame,
                    spriteGroup.helper_lucy_anim07.frame
                ];
                sprite.animations.add(WeBareBearsTrippleTrip.HelperAnimationKey.ActivatePower, activatePowerFrames);
                let idleFrames = [spriteGroup.helper_lucy_anim01.frame];
                sprite.animations.add(WeBareBearsTrippleTrip.HelperAnimationKey.Idle, idleFrames);
                sprite.anchor.setTo(.5, .8);
                sprite.inputEnabled = true;
                sprite.animations.play(WeBareBearsTrippleTrip.HelperAnimationKey.Idle);
                return sprite;
            }
            canBePlacedInGrid(grid) {
                let bearStack = grid.gridManager.coreScreen.bearStack;
                return grid.getEmptyTiles().length > 0 && !bearStack.getHasHelmets();
            }
            createUsePowerAnimation() {
                let game = this.game;
                let animationFactory = game.services.animation;
                let bearStack = this.tile.grid.gridManager.coreScreen.bearStack;
                let delay = animationFactory.delay(10);
                delay.onPlay.add(bearStack.activateHelmets, bearStack);
                return delay;
            }
            canActivatePower() {
                return !this.tile.grid.gridManager.coreScreen.bearStack.isBearFallingOffStack;
            }
        }
        WeBareBearsTrippleTrip.LucyHelper = LucyHelper;
        class ChloeAnimationKey {
        }
        ChloeAnimationKey.Idle = "acivate power";
        ChloeAnimationKey.ActivatePower = "idle";
    })(WeBareBearsTrippleTrip = Funday.WeBareBearsTrippleTrip || (Funday.WeBareBearsTrippleTrip = {}));
})(Funday || (Funday = {}));
var Funday;
(function (Funday) {
    var WeBareBearsTrippleTrip;
    (function (WeBareBearsTrippleTrip) {
        class RangerTabesHelper extends WeBareBearsTrippleTrip.AHelper {
            constructor(game) {
                super(game, WeBareBearsTrippleTrip.HelperType.RangerTabes);
            }
            constructSprite() {
                let game = this.game;
                let sprite = game.createSprite(0, 0, Funday.WeBearBears.SpriteLibrary.tiles.helper_tabes_anim01);
                let spriteGroup = Funday.WeBearBears.SpriteLibrary.tiles;
                let activatePowerFrames = [
                    spriteGroup.helper_tabes_anim01.frame,
                    spriteGroup.helper_tabes_anim02.frame,
                    spriteGroup.helper_tabes_anim03.frame,
                    spriteGroup.helper_tabes_anim04.frame,
                    spriteGroup.helper_tabes_anim05.frame
                ];
                sprite.animations.add(WeBareBearsTrippleTrip.HelperAnimationKey.ActivatePower, activatePowerFrames);
                let idleFrames = [spriteGroup.helper_tabes_anim01.frame];
                sprite.animations.add(WeBareBearsTrippleTrip.HelperAnimationKey.Idle, idleFrames);
                sprite.anchor.setTo(.5, .9);
                sprite.inputEnabled = true;
                sprite.animations.play(WeBareBearsTrippleTrip.HelperAnimationKey.Idle);
                return sprite;
            }
            canBePlacedInGrid(grid) {
                return grid.getEmptyTiles().length > 0;
            }
            createUsePowerAnimation() {
                return this.createSolveTilesEffectAnimation(4);
            }
            canActivatePower() {
                return true;
            }
        }
        WeBareBearsTrippleTrip.RangerTabesHelper = RangerTabesHelper;
    })(WeBareBearsTrippleTrip = Funday.WeBareBearsTrippleTrip || (Funday.WeBareBearsTrippleTrip = {}));
})(Funday || (Funday = {}));
var Funday;
(function (Funday) {
    var WeBareBearsTrippleTrip;
    (function (WeBareBearsTrippleTrip) {
        class RoboBearHelper extends WeBareBearsTrippleTrip.AHelper {
            constructor(game) {
                super(game, WeBareBearsTrippleTrip.HelperType.RoboBear);
            }
            constructSprite() {
                let game = this.game;
                let sprite = game.createSprite(0, 0, Funday.WeBearBears.SpriteLibrary.tiles.helper_robot_anim01);
                let spriteGroup = Funday.WeBearBears.SpriteLibrary.tiles;
                let activatePowerFrames = [
                    spriteGroup.helper_robot_anim01.frame,
                    spriteGroup.helper_robot_anim02.frame,
                    spriteGroup.helper_robot_anim03.frame,
                    spriteGroup.helper_robot_anim04.frame,
                    spriteGroup.helper_robot_anim05.frame,
                    spriteGroup.helper_robot_anim06.frame,
                    spriteGroup.helper_robot_anim07.frame
                ];
                sprite.animations.add(WeBareBearsTrippleTrip.HelperAnimationKey.ActivatePower, activatePowerFrames);
                let idleFrames = [spriteGroup.helper_robot_anim01.frame];
                sprite.animations.add(WeBareBearsTrippleTrip.HelperAnimationKey.Idle, idleFrames);
                sprite.anchor.setTo(.5, .8);
                sprite.inputEnabled = true;
                sprite.animations.play(WeBareBearsTrippleTrip.HelperAnimationKey.Idle, 1, true);
                return sprite;
            }
            canBePlacedInGrid(grid) {
                return grid.getEmptyTiles().length > 0;
            }
            createUsePowerAnimation() {
                return this.createSolveTilesEffectAnimation(8);
            }
            canActivatePower() {
                return true;
            }
        }
        WeBareBearsTrippleTrip.RoboBearHelper = RoboBearHelper;
        class ChloeAnimationKey {
        }
        ChloeAnimationKey.Idle = "acivate power";
        ChloeAnimationKey.ActivatePower = "idle";
    })(WeBareBearsTrippleTrip = Funday.WeBareBearsTrippleTrip || (Funday.WeBareBearsTrippleTrip = {}));
})(Funday || (Funday = {}));
var Funday;
(function (Funday) {
    var WeBareBearsTrippleTrip;
    (function (WeBareBearsTrippleTrip) {
        class TimberHelper extends WeBareBearsTrippleTrip.AHelper {
            constructor(game) {
                super(game, WeBareBearsTrippleTrip.HelperType.Timber);
            }
            constructSprite() {
                let game = this.game;
                let sprite = game.createSprite(0, 0, Funday.WeBearBears.SpriteLibrary.tiles.helper_timber_anim01);
                let spriteGroup = Funday.WeBearBears.SpriteLibrary.tiles;
                let activatePowerFrames = [
                    spriteGroup.helper_timber_anim01.frame
                ];
                sprite.animations.add(WeBareBearsTrippleTrip.HelperAnimationKey.ActivatePower, activatePowerFrames);
                let idleFrames = [spriteGroup.helper_timber_anim01.frame];
                sprite.animations.add(WeBareBearsTrippleTrip.HelperAnimationKey.Idle, idleFrames);
                sprite.anchor.setTo(.5, .85);
                sprite.inputEnabled = true;
                sprite.animations.play(WeBareBearsTrippleTrip.HelperAnimationKey.Idle);
                return sprite;
            }
            activatePower() {
                let game = this.game;
                game.repositories.sound.onHelperUsePower(this.helperType);
                let animationFactory = game.services.animation;
                let core = this.tile.grid.gridManager.coreScreen;
                core.blockInput();
                let bearStack = this.tile.grid.gridManager.coreScreen.bearStack;
                let bearGrid = bearStack.currentTile.grid;
                bearStack.pause();
                let spriteAnimation = animationFactory.sprite(this.sprite, WeBareBearsTrippleTrip.HelperAnimationKey.ActivatePower, 700);
                let delayAfterFistBump = animationFactory.delay(100);
                let flashUp = animationFactory.fadeToWhite(50);
                let delay = animationFactory.delay(100);
                delay.onPlay.add(bearStack.hideHelmetOnTopBearIfItHasOne, bearStack);
                let coreScreen = this.tile.grid.gridManager.coreScreen;
                let warpTimber = coreScreen.warpTimber;
                let localTimber = warpTimber.toLocal(bearStack.position, bearStack.parent);
                warpTimber.timber.position.x = localTimber.x;
                warpTimber.visible = false;
                delay.onPlay.add(function () {
                    warpTimber.setToTimber(bearStack);
                    bearStack.playSpriteAnimation(WeBareBearsTrippleTrip.BearAnimationKey.RideOnTimber, 8);
                    warpTimber.timber.animations.stop();
                    warpTimber.timber.animations.play("idle", 8);
                    warpTimber.visible = true;
                }, this);
                let flashDown = animationFactory.fadeFromWhite(100);
                let delayAfterFlash = animationFactory.delay(100);
                delayAfterFlash.onComplete.add(core.unblockInput, core);
                let animationEffect = this.createUsePowerAnimation();
                let alphaOutHelper = animationFactory.tween(this, { alpha: 0 }, 350);
                alphaOutHelper.onComplete.add(this.clear, this);
                let queue = animationFactory.queue([
                    spriteAnimation,
                    delayAfterFistBump,
                    flashUp,
                    delay,
                    flashDown,
                    delayAfterFlash,
                    animationEffect
                ]);
                queue.onComplete.add(function () {
                    alphaOutHelper.play();
                }, this);
                queue.onComplete.add(game.repositories.sound.onAfterHelperUsePower, game.repositories.sound, this.helperType);
                queue.onComplete.add(this.onUsePowerAnimationCompleted, this);
                queue.play();
            }
            createUsePowerAnimation() {
                let game = this.game;
                let animationFactory = game.services.animation;
                let coreScreen = this.tile.grid.gridManager.coreScreen;
                let bearStack = coreScreen.bearStack;
                let warpTimber = coreScreen.warpTimber;
                let delay = animationFactory.delay(500);
                delay.onPlay.add(coreScreen.blockInput, coreScreen);
                delay.onComplete.add(bearStack.startWarpingTilesAnimation.bind(bearStack, 30, this.onWarpCompleted.bind(this)));
                return delay;
            }
            onWarpCompleted() {
                console.log("On Warp completed");
                let game = this.game;
                let animationFactory = game.services.animation;
                let coreScreen = game.screenManager.screens.core;
                let bearStack = coreScreen.bearStack;
                let warpTimber = coreScreen.warpTimber;
                let flashUp = animationFactory.fadeToWhite(50);
                let delay = animationFactory.delay(100);
                delay.onPlay.add(function () {
                    warpTimber.visible = false;
                    let grid = bearStack.currentTile.grid;
                    grid.solvePath();
                    game.camera.unfollow();
                    let tile = grid.getFirstTileOnPathInColumn(bearStack.currentTile.location.i);
                    bearStack.setToTile(tile);
                    bearStack.updateBearings();
                    warpTimber.reset();
                    bearStack.setCameraToFollow();
                    bearStack.showHelmetOnTopBearIfItHasOne();
                    tile.grid.sortGameObjectsLayer();
                });
                let flashDown = animationFactory.fadeFromWhite(100);
                let delayAfterFlash = animationFactory.delay(100);
                let queue = animationFactory.queue([
                    flashUp,
                    delay,
                    flashDown,
                    delayAfterFlash
                ]);
                queue.onComplete.add(bearStack.restartTile, bearStack);
                queue.onComplete.add(coreScreen.unblockInput, coreScreen);
                queue.play();
            }
            canBePlacedInGrid(grid) {
                return grid.getEmptyTiles().length > 0;
            }
            canActivatePower() {
                return !this.tile.grid.gridManager.coreScreen.bearStack.isBearFallingOffStack;
            }
        }
        WeBareBearsTrippleTrip.TimberHelper = TimberHelper;
    })(WeBareBearsTrippleTrip = Funday.WeBareBearsTrippleTrip || (Funday.WeBareBearsTrippleTrip = {}));
})(Funday || (Funday = {}));
var Funday;
(function (Funday) {
    var WeBareBearsTrippleTrip;
    (function (WeBareBearsTrippleTrip) {
        var UI;
        (function (UI) {
            class Coins extends Phaser.Group {
                constructor(game) {
                    super(game);
                    this.text = null;
                    this.coinIcon = null;
                    this.currentCoinCollectAnim = null;
                    let safeTop = game.services.resolution.getNotchSafeTop();
                    this.coinIcon = game.createSprite(0, 0, Funday.WeBearBears.SpriteLibrary.ui.Coin);
                    this.addChild(this.coinIcon);
                    this.coinIcon.anchor.set(0, 0.5);
                    this.coinIcon.position.y = game.applyResolutionRatio(5) + safeTop;
                    let fontSize = game.applyResolutionRatio(84);
                    let text = game.add.bitmapText(0, safeTop, "wbb_font", "", fontSize);
                    this.addChild(text);
                    this.text = text;
                    this.text.position.x -= game.applyResolutionRatio(20);
                    this.text.anchor.setTo(1, .5);
                    game.world.addChild(this);
                    this.refresh();
                }
                refresh() {
                    let game = this.game;
                    let value = game.inventory.getCoins();
                    this.text.setText("" + value);
                }
                playCoinCollectAnimation(quantity) {
                    let game = this.game;
                    let coins = game.inventory.addCoins(quantity);
                    let animationFactory = game.services.animation;
                    if (this.currentCoinCollectAnim) {
                        this.currentCoinCollectAnim.stop();
                    }
                    let anim = animationFactory.tween(this.scale, { x: 1, y: 1 }, 80);
                    anim.onPlay.add(function () {
                        this.text.setText(coins + "");
                        this.game.inventory.setAchievementProgress(WeBareBearsAchivementType.CollectCoins100, coins);
                        this.scale.setTo(1.1);
                    }, this);
                    anim.play();
                    this.currentCoinCollectAnim = anim;
                    anim.onComplete.add(function () {
                        if (this.currentCoinCollectAnim === anim) {
                            this.currentCoinCollectAnim = null;
                        }
                    }, this);
                }
                animateFromTo(fromValue, toValue) {
                    let game = this.game;
                    let animationFactory = game.services.animation;
                    let progress = { value: fromValue };
                    let tween = animationFactory.tween(progress, { value: toValue }, 250);
                    tween.addOnUpdateCallback(function () {
                        this.text.setText("" + Math.floor(progress.value));
                    }, this);
                    tween.onComplete.add(this.refresh, this);
                    tween.play();
                }
            }
            UI.Coins = Coins;
            let WeBareBearsAchivementType;
            (function (WeBareBearsAchivementType) {
                WeBareBearsAchivementType["CollectCoins100"] = "28bfe7c8-026e-4ea7-95a0-ff0e3ad6c813";
                WeBareBearsAchivementType["PickUp10Bears"] = "5638cf35-66cd-4044-84c5-02b104879ba3";
                WeBareBearsAchivementType["Travel5000Distance"] = "4e97e7cf-ddc3-4b5f-9374-8b87e7c3c75a";
                WeBareBearsAchivementType["UseAllHelpersOnce"] = "6050c9f2-7c9c-4593-a836-635fbd7ae361";
                WeBareBearsAchivementType["Use200CoinsInShop"] = "311e071b-d651-47e6-9572-62ed13b3872a";
            })(WeBareBearsAchivementType = UI.WeBareBearsAchivementType || (UI.WeBareBearsAchivementType = {}));
        })(UI = WeBareBearsTrippleTrip.UI || (WeBareBearsTrippleTrip.UI = {}));
    })(WeBareBearsTrippleTrip = Funday.WeBareBearsTrippleTrip || (Funday.WeBareBearsTrippleTrip = {}));
})(Funday || (Funday = {}));
var Funday;
(function (Funday) {
    var WeBareBearsTrippleTrip;
    (function (WeBareBearsTrippleTrip) {
        var UI;
        (function (UI) {
            class HelperQueue extends Phaser.Group {
                constructor(game) {
                    super(game);
                    this.queue = [];
                    this.currentAnimation = null;
                    game.inventory.foreachHelperQueueSlot(this.initHelperQueueElement.bind(this));
                    let frameData = game.getFrameData(Funday.WeBearBears.SpriteLibrary.ui.helpers_queue);
                    let width = frameData.width;
                    let height = frameData.height;
                    let horizontalPadding = 0;
                    this.align(this.queue.length, 1, width + horizontalPadding, height, Phaser.BOTTOM_LEFT);
                    this.position.x = game.applyResolutionRatio(40);
                    this.bottom = this.parent.height - game.applyResolutionRatio(60);
                }
                initHelperQueueElement(index, helperType) {
                    let helperQueueElement = new HelperQueueElement(this.game, helperType);
                    this.queue[index] = helperQueueElement;
                    this.addChild(helperQueueElement);
                }
                addHelper(helperType) {
                    let emptySlot = this.getEmptyQueueSlot();
                    if (emptySlot) {
                        let game = this.game;
                        let animationFactory = game.services.animation;
                        let scaleDown = animationFactory.tween(emptySlot.scale, { x: 0, y: 0 }, 200, Phaser.Easing.Back.In);
                        scaleDown.onComplete.add(emptySlot.setHelperType.bind(emptySlot, helperType));
                        let scaleBackUp = animationFactory.tween(emptySlot.scale, { x: 1, y: 1 }, 850, Phaser.Easing.Elastic.Out);
                        let queue = animationFactory.queue([scaleDown, scaleBackUp]);
                        let core = game.screenManager.screens.core;
                        queue.onPlay.add(core.blockInput, core);
                        queue.onComplete.add(core.unblockInput, core);
                        queue.play();
                    }
                    else {
                        throw "Error! No Empty Slot in HelperQueue!";
                    }
                }
                getEmptyQueueSlot() {
                    return this.getFirstQueueElementOfType(WeBareBearsTrippleTrip.HelperType.None);
                }
                getFirstQueueElementOfType(helperType) {
                    let helperQueueElement = null;
                    for (let index = 0; index < this.queue.length; index++) {
                        const element = this.queue[index];
                        if (element.helperType === helperType) {
                            helperQueueElement = element;
                            break;
                        }
                    }
                    return helperQueueElement;
                }
                consumeHelper(helperType) {
                    if (this.currentAnimation) {
                        this.currentAnimation.onComplete.add(this.consumeHelper, this, 1, helperType);
                    }
                    else {
                        let game = this.game;
                        let animationFactory = game.services.animation;
                        let element = this.getFirstQueueElementOfType(helperType);
                        let rightSideNeighbours = this.getRightSideNeighbours(element);
                        let localOut = this.toLocal(new PIXI.Point(game.canvas.width, game.canvas.height), game.world);
                        let tweenHelperOut = animationFactory.tween(element, { top: localOut.y }, 500, Phaser.Easing.Back.In);
                        let headLeft = element.left;
                        let headPositionX = element.position.x;
                        let neighbourAnims = [];
                        for (let index = 0; index < rightSideNeighbours.length; index++) {
                            const neighbour = rightSideNeighbours[index];
                            let anim = animationFactory.tween(neighbour.position, { x: headPositionX }, 250, Phaser.Easing.Quadratic.InOut);
                            neighbourAnims.push(anim);
                            headLeft = neighbour.left;
                            headPositionX = neighbour.position.x;
                        }
                        let moveRemainingToLeft = null;
                        if (neighbourAnims.length > 0) {
                            moveRemainingToLeft = animationFactory.bundle(neighbourAnims);
                        }
                        else {
                            moveRemainingToLeft = animationFactory.delay(10);
                        }
                        let moveEmptyElementUp = animationFactory.tween(element, { bottom: element.bottom }, 500, Phaser.Easing.Back.Out);
                        moveEmptyElementUp.onPlay.add(this.moveElementBackOfQueue, this, 1, element);
                        moveEmptyElementUp.onPlay.add(element.setHelperType, element, 1, WeBareBearsTrippleTrip.HelperType.None);
                        moveEmptyElementUp.onPlay.add(element.setXPos, element, 1, headPositionX);
                        let queue = animationFactory.queue([tweenHelperOut, moveRemainingToLeft, moveEmptyElementUp]);
                        queue.onComplete.add(this.clearCurrentAnimation, this);
                        queue.play();
                    }
                }
                clearCurrentAnimation() {
                    if (this.currentAnimation) {
                        this.currentAnimation.stop();
                        this.currentAnimation = null;
                    }
                }
                moveElementBackOfQueue(element) {
                    const index = this.queue.indexOf(element, 0);
                    this.queue.splice(index, 1);
                    this.queue.push(element);
                }
                getRightSideNeighbours(startElement) {
                    let startIndex = this.queue.indexOf(startElement) + 1;
                    let neighbours = [];
                    if (startIndex > 0) {
                        for (let index = startIndex; index < this.queue.length; index++) {
                            const element = this.queue[index];
                            neighbours.push(element);
                        }
                    }
                    else {
                        throw "Did not find valid index if helperQueueElement";
                    }
                    return neighbours;
                }
            }
            UI.HelperQueue = HelperQueue;
            class HelperQueueElement extends Phaser.Group {
                constructor(game, helperType) {
                    super(game);
                    this.sprite = null;
                    this.setHelperType(helperType);
                }
                setHelperType(helperType) {
                    this.helperType = helperType;
                    if (!this.sprite) {
                        this.sprite = this.game.add.sprite(0, 0);
                        this.sprite.anchor.setTo(.5, 1);
                        this.addChild(this.sprite);
                    }
                    this.refreshSpriteTextureForType();
                }
                refreshSpriteTextureForType() {
                    let spriteId = null;
                    if (this.helperType === WeBareBearsTrippleTrip.HelperType.None) {
                        spriteId = Funday.WeBearBears.SpriteLibrary.ui.helpers_queue;
                    }
                    else if (this.helperType === WeBareBearsTrippleTrip.HelperType.Chloe) {
                        spriteId = Funday.WeBearBears.SpriteLibrary.ui.helper_chloe_icon;
                    }
                    else if (this.helperType === WeBareBearsTrippleTrip.HelperType.Charlie) {
                        spriteId = Funday.WeBearBears.SpriteLibrary.ui.helper_charlie_icon;
                    }
                    else if (this.helperType === WeBareBearsTrippleTrip.HelperType.Lucy) {
                        spriteId = Funday.WeBearBears.SpriteLibrary.ui.helper_lucy_icon;
                    }
                    else if (this.helperType === WeBareBearsTrippleTrip.HelperType.RangerTabes) {
                        spriteId = Funday.WeBearBears.SpriteLibrary.ui.helper_tabes_icon;
                    }
                    else if (this.helperType === WeBareBearsTrippleTrip.HelperType.RoboBear) {
                        spriteId = Funday.WeBearBears.SpriteLibrary.ui.helper_robot_icon;
                    }
                    else if (this.helperType === WeBareBearsTrippleTrip.HelperType.Timber) {
                        spriteId = Funday.WeBearBears.SpriteLibrary.ui.helper_timber_icon;
                    }
                    this.sprite.scale.setTo(.8);
                    let oldBottom = this.sprite.bottom;
                    this.sprite.loadTexture(spriteId.key, spriteId.frame);
                    this.sprite.bottom = oldBottom;
                }
                setLeft(newLeft) {
                    this.left = newLeft;
                }
                setXPos(newX) {
                    this.position.x = newX;
                }
            }
        })(UI = WeBareBearsTrippleTrip.UI || (WeBareBearsTrippleTrip.UI = {}));
    })(WeBareBearsTrippleTrip = Funday.WeBareBearsTrippleTrip || (Funday.WeBareBearsTrippleTrip = {}));
})(Funday || (Funday = {}));
var Funday;
(function (Funday) {
    var WeBareBearsTrippleTrip;
    (function (WeBareBearsTrippleTrip) {
        var UI;
        (function (UI) {
            class ModalManager {
                constructor(game, ui) {
                    this.game = null;
                    this.ui = null;
                    this.modal = null;
                    this.views = null;
                    this.game = game;
                    this.ui = ui;
                    this.modal = new Funday.UI.Modal.Modal(game);
                    this.ui.addChild(this.modal);
                    window.modalManager = this;
                    this.views = new ModalViews(game);
                    this.views.menu.setModalManager(this);
                    this.modal.kill();
                }
                isModalActive() {
                    return this.modal.alive;
                }
                showPause() {
                    this.modal.setView(this.views.pause);
                    this.modal.instantShow();
                }
                showGameOver() {
                    this.modal.setView(this.views.gameOver);
                    this.modal.show();
                }
                showAdFreeHelper() {
                    this.modal.setView(this.views.adFreeHelper);
                    this.modal.show();
                }
                showShop() {
                    this.modal.setView(this.views.shop);
                    this.modal.show();
                }
                showMenu() {
                    this.modal.setView(this.views.menu);
                    this.modal.show();
                }
                showAreYouSurePopup() {
                    this.modal.setView(this.views.areYouSurePopup);
                    this.modal.show();
                    return this.views.areYouSurePopup;
                }
                showDebugMenu() {
                    this.modal.setView(this.views.debugMenu);
                    this.modal.show();
                }
                instantHide() {
                    this.modal.instantHide();
                }
                hide(callback) {
                    if (callback) {
                        this.modal.onHidden.addOnce(callback);
                    }
                    this.modal.hide();
                }
            }
            UI.ModalManager = ModalManager;
            class ModalViews {
                constructor(game) {
                    this.pause = null;
                    this.gameOver = null;
                    this.gameOverHighscore = null;
                    this.adFreeHelper = null;
                    this.adRevive = null;
                    this.shop = null;
                    this.menu = null;
                    this.debugMenu = null;
                    this.pause = new UI.ModalView.Pause(game);
                    this.gameOver = new UI.ModalView.GameOver(game);
                    this.gameOverHighscore = new UI.ModalView.GameOverHighscore(game);
                    this.adFreeHelper = new UI.ModalView.AdFreeHelper(game);
                    this.adRevive = new UI.ModalView.AdRevive(game);
                    this.shop = new UI.ModalView.Shop(game);
                    this.menu = new UI.ModalView.Menu(game);
                    this.areYouSurePopup = new UI.ModalView.AreYouSurePopup(game);
                    this.debugMenu = new UI.ModalView.DebugMenu(game);
                    this.pause.kill();
                    this.debugMenu.kill();
                    ;
                    this.menu.kill();
                    this.shop.kill();
                    this.areYouSurePopup.kill();
                    this.adRevive.kill();
                    this.adFreeHelper.kill();
                    this.gameOverHighscore.kill();
                    this.gameOver.kill();
                }
            }
        })(UI = WeBareBearsTrippleTrip.UI || (WeBareBearsTrippleTrip.UI = {}));
    })(WeBareBearsTrippleTrip = Funday.WeBareBearsTrippleTrip || (Funday.WeBareBearsTrippleTrip = {}));
})(Funday || (Funday = {}));
var Funday;
(function (Funday) {
    var WeBareBearsTrippleTrip;
    (function (WeBareBearsTrippleTrip) {
        var UI;
        (function (UI) {
            class ScoreAndHighScore extends Phaser.Group {
                constructor(game) {
                    super(game);
                    this.score = null;
                    this.slash = null;
                    this.highscore = null;
                    this.oldHighscore = 0;
                    this.scoreValue = 0;
                    let highscore = game.inventory.getHighscore();
                    this.oldHighscore = highscore;
                    let padding = game.applyResolutionRatio(2);
                    let fontSize = game.applyResolutionRatio(84);
                    let safeTop = game.services.resolution.getNotchSafeTop();
                    let slash = game.add.bitmapText(0, safeTop, "wbb_font", "/", fontSize);
                    slash.anchor.setTo(.5);
                    this.addChild(slash);
                    this.slash = slash;
                    this.score = game.add.bitmapText(0, safeTop, "wbb_font", "0", fontSize);
                    this.score.anchor.setTo(1, .5);
                    this.score.position.x = slash.left - padding;
                    this.addChild(this.score);
                    this.highscore = game.add.bitmapText(0, safeTop, "wbb_font", "" + highscore, fontSize);
                    this.addChild(this.highscore);
                    this.highscore.anchor.setTo(0, .5);
                    this.highscore.position.x = slash.right + padding;
                    this.reallign();
                }
                reset() {
                    this.setScore(0);
                    let game = this.game;
                    let inventory = game.inventory;
                    this.oldHighscore = inventory.getHighscore();
                    console.log("Getting old highscore " + this.oldHighscore);
                    this.highscore.visible = true;
                    this.slash.visible = true;
                    this.highscore.scale.set(1, 1);
                    this.slash.scale.set(1, 1);
                    this.score.scale.set(1, 1);
                    this.score.anchor.setTo(1, .5);
                    this.reallign();
                }
                reallign() {
                    let game = this.game;
                    let offsetX = game.applyResolutionRatio(0);
                    let offsetY = game.applyResolutionRatio(40) + game.services.resolution.getNotchSafeTop();
                    let rectangle = new Phaser.Rectangle(0, 0, game.canvas.width, game.canvas.height);
                    this.alignIn(rectangle, Phaser.TOP_CENTER, offsetX, -offsetY);
                    this.makeSpaceForCoins();
                }
                makeSpaceForCoins() {
                    let game = this.game;
                    let coinPadding = game.applyResolutionRatio(64);
                    if (game.screenManager && this.right > game.screenManager.screens.core.ui.coins.left - coinPadding) {
                        this.right = game.screenManager.screens.core.ui.coins.left - coinPadding;
                    }
                }
                setScore(value) {
                    this.score.setText("" + value);
                    this.punch(this.score);
                    let game = this.game;
                    let inventory = game.inventory;
                    if (value > this.oldHighscore) {
                        this.highscore.setText("" + value);
                        inventory.setHighscore(value);
                        if (this.highscore.visible) {
                            this.highscore.visible = false;
                            this.slash.visible = false;
                            this.highscore.scale.set(0, 0);
                            this.slash.scale.set(0, 0);
                            this.score.anchor.setTo(.5, .5);
                            this.reallign();
                        }
                    }
                    this.scoreValue = value;
                }
                punch(gameObject) {
                    let game = this.game;
                    let animationFactory = game.services.animation;
                    let anim = animationFactory.tween(gameObject.scale, { x: 1, y: 1 }, 80);
                    anim.onPlay.add(function () {
                        gameObject.scale.set(1.1, 1.1);
                    }, this);
                    anim.play();
                }
            }
            UI.ScoreAndHighScore = ScoreAndHighScore;
        })(UI = WeBareBearsTrippleTrip.UI || (WeBareBearsTrippleTrip.UI = {}));
    })(WeBareBearsTrippleTrip = Funday.WeBareBearsTrippleTrip || (Funday.WeBareBearsTrippleTrip = {}));
})(Funday || (Funday = {}));
var Funday;
(function (Funday) {
    var WeBareBearsTrippleTrip;
    (function (WeBareBearsTrippleTrip) {
        var UI;
        (function (UI) {
            class UIOverlay extends Phaser.Group {
                constructor(coreScreen) {
                    super(coreScreen.game, coreScreen, "UI");
                    this.modalManager = null;
                    this.coins = null;
                    this.score = null;
                    this.helperQueue = null;
                    this.shopButton = null;
                    this.tapToStart = null;
                    this.coreScreen = null;
                    this.coreScreen = coreScreen;
                    this.fixedToCamera = true;
                    let game = coreScreen.game;
                    let width = game.canvas.width;
                    let height = game.canvas.height;
                    let centerX = width * .5;
                    let centerY = height * .5;
                    let offset = game.applyResolutionRatio(150);
                    let bearWorldPos = coreScreen.bearStack.parent.toGlobal(coreScreen.bearStack.position).y;
                    this.tapToStart = game.createButton(centerX, bearWorldPos + offset, null);
                    this.addChild(this.tapToStart);
                    let text = game.add.existing(new Phaser.Text(this.game, 0, 0, i18next.t('taptostart'),
                        {
                            font: font1,
                            fontSize: 80,
                            fontWeight: 700,
                            fill: 'white'
                        }
                    ));
                    text.anchor.setTo(.5);
                    this.tapToStart.button.addChild(text);
                    this.tapToStart.button.hitArea = new Phaser.Rectangle(-centerX, -this.tapToStart.position.y, width, height);
                    this.tapToStart.onUp.add(this.onStartGameButtonUp, this);
                    this.shopButton = game.createButton(centerX, centerY, Funday.WeBearBears.SpriteLibrary.ui.shop_button);
                    this.addChild(this.shopButton);
                    this.shopButton.onUp.add(this.onShopButtonUp, this);
                    this.shopButton.alignIn(new Phaser.Rectangle(0, 0, width, height), Phaser.BOTTOM_RIGHT, -game.applyResolutionRatio(30), -game.applyResolutionRatio(30));
                    this.shopButton.setAudioSettings(WeBareBearsTrippleTrip.SoundRepository.shopButtonAudioSettings);
                    let pauseButton = game.createButton(0, 0, Funday.WeBearBears.SpriteLibrary.ui.pause_button);
                    this.addChild(pauseButton);
                    this.modalManager = new UI.ModalManager(game, this);
                    let rectangle = new Phaser.Rectangle(0, 0, game.canvas.width, game.canvas.height);
                    let offsetX = -game.applyResolutionRatio(40);
                    let offsetY = -(game.applyResolutionRatio(40) + game.services.resolution.getNotchSafeTop());
                    pauseButton.alignIn(rectangle, Phaser.TOP_RIGHT, offsetX, offsetY);
                    pauseButton.onUp.add(this.onPausebuttonUp, this);
                    this.coins = new UI.Coins(game);
                    this.addChild(this.coins);
                    this.coins.right = pauseButton.left - game.applyResolutionRatio(40);
                    this.coins.top = pauseButton.top;
                    this.score = new UI.ScoreAndHighScore(game);
                    this.addChild(this.score);
                    this.score.top = this.coins.top;
                    this.helperQueue = new UI.HelperQueue(game);
                    this.addChild(this.helperQueue);
                    console.log("Desktop",Phaser.Device.desktop);
                    if((!window.CNOverride)||((window.CNOverride)&&(!Phaser.Device.desktop)))
                    {
                        game.scale.forceOrientation(false, true);
			            game.scale.enterIncorrectOrientation.add(this.handleIncorrect,this);
            	        game.scale.leaveIncorrectOrientation.add(this.handleCorrect,this);
                    }
                    
                }
                showStartScreen() {
                    this.tapToStart.enableShow();
                    this.shopButton.enableShow();
                }
                onStartGameButtonUp() {
                    console.log("On Start Button Up");
                    let game = this.game;
                    let levelControl = game.screenManager.screens.core.levelControl;
                    game.gameIsFunctional = false;
                    let callback = levelControl.onShopAndStartButtonTransitionedOut.bind(levelControl);
                    if (this.shopButton.alive) {
                        this.shopButton.animatedDisableHide();
                    }
                    this.tapToStart.animatedDisableHide(callback);
                    game.repositories.sound.onTappedToStartGame();
                }
                onShopButtonUp() {
                    this.modalManager.showShop();
                }
                onPausebuttonUp() {
                    if(this.coreScreen.game.tutorialStepIsShown)
                    {
                        console.log("Tutorial step is shown, pause menu cannot start");
                        return;
                    }
                    this.coreScreen.game.theGameIsPaused = true;
                    console.log("Pause Button clicked",this.coreScreen.game.theGameIsPaused);
                    this.modalManager.showMenu();
                    this.coreScreen.levelControl.pause();
                }
                onDebugMenuButtonUp() {
                    this.modalManager.showDebugMenu();
                    this.coreScreen.levelControl.pause();
                }
                static creatShadowText(game, caption, size) {
                    let shadowText = new ShadowTextGroup(game, caption, size);
                    return shadowText;
                }
                handleIncorrect()
            {
                document.getElementById("turn").style.display="block";
                console.log("Incorrect Resolution");
                this.coreScreen.levelControl.pause();
            }
            handleCorrect()
            {
                console.log("CORRECT Resolution");
                
                this.coreScreen.levelControl.resume();
                document.getElementById("turn").style.display="none";
            }
                
            }
            UI.UIOverlay = UIOverlay;
            class ShadowTextGroup extends Phaser.Group {
                constructor(game, caption, size) {
                    super(game);
                    this.textColor = 0xFFFFFF;
                    this.text = null;
                    this.shadowColor = 0x000000;
                    this.shadowText = null;
                    let shadowText = game.add.bitmapText(0, 0, "terry", caption, size);
                    shadowText.tint = this.shadowColor;
                    shadowText.anchor.setTo(.5);
                    shadowText.alpha = .25;
                    this.addChild(shadowText);
                    let text = game.add.bitmapText(0, 0, "terry", caption, size);
                    this.addChild(text);
                    text.tint = this.textColor;
                    text.anchor.setTo(.5);
                    let offset = game.applyResolutionRatio(4);
                    shadowText.position.x = offset;
                    shadowText.position.y = offset;
                    this.text = text;
                    this.shadowText = shadowText;
                }
                setText(caption) {
                    this.text.setText(caption);
                    this.shadowText.setText(caption);
                }
                setAnchor(x, y) {
                    this.text.anchor.x = x;
                    this.text.anchor.y = y;
                    this.shadowText.anchor.x = x;
                    this.shadowText.anchor.y = y;
                }
            }
            UI.ShadowTextGroup = ShadowTextGroup;
        })(UI = WeBareBearsTrippleTrip.UI || (WeBareBearsTrippleTrip.UI = {}));
    })(WeBareBearsTrippleTrip = Funday.WeBareBearsTrippleTrip || (Funday.WeBareBearsTrippleTrip = {}));
})(Funday || (Funday = {}));
var Funday;
(function (Funday) {
    var WeBareBearsTrippleTrip;
    (function (WeBareBearsTrippleTrip) {
        var UI;
        (function (UI) {
            var ModalView;
            (function (ModalView) {
                class AdFreeHelper extends Funday.UI.View {
                    constructor(game) {
                        super(game);
                        this.watchAdBonusHelper = null;
                        this.pickRandomHelperView = null;
                        this.helperSprite = null;
                        this.onChooseWatchAd = new Phaser.Signal();
                        this.onChooseExit = new Phaser.Signal();
                        this.helperPickups = [];
                        this.watchAdBonusHelper = game.createSprite(0, 0, Funday.WeBearBears.SpriteLibrary.ui.watch_add_revive);
                        this.addChild(this.watchAdBonusHelper);
                        this.watchAdBonusHelper.anchor.setTo(.5);
                        let reviveText = game.add.bitmapText(0, 0, "wbb_font", "Watch an ad and get\na random power-up?", game.applyResolutionRatio(65));
                        reviveText.align = "center";
                        reviveText.anchor.setTo(.5);
                        reviveText.position.y -= (this.watchAdBonusHelper.height * .125);
                        this.watchAdBonusHelper.addChild(reviveText);
                        let yesButton = game.createButton(0, 0, Funday.WeBearBears.SpriteLibrary.ui.yes);
                        yesButton.scale.setTo(1.15);
                        this.watchAdBonusHelper.addChild(yesButton);
                        let noButton = game.createButton(0, 0, Funday.WeBearBears.SpriteLibrary.ui.no);
                        this.watchAdBonusHelper.addChild(noButton);
                        yesButton.alignIn(this.watchAdBonusHelper, Phaser.BOTTOM_RIGHT, -game.applyResolutionRatio(150), -game.applyResolutionRatio(125));
                        noButton.alignIn(this.watchAdBonusHelper, Phaser.BOTTOM_LEFT, -game.applyResolutionRatio(150), -game.applyResolutionRatio(125));
                        yesButton.onUp.add(this.onYesButtonUp, this);
                        noButton.onUp.add(this.onNoButtonUp, this);
                        this.pickRandomHelperView = game.add.group(this);
                        let background = game.createSprite(0, 0, Funday.WeBearBears.SpriteLibrary.ui.start_button_box, this.pickRandomHelperView);
                        background.anchor.setTo(.5);
                        background.scale.setTo(.75);
                        this.helperSprite = game.createSprite(0, 0, null, this.pickRandomHelperView);
                        this.helperSprite.anchor.setTo(.5);
                        let spriteIds = Funday.WeBearBears.SpriteLibrary.ui;
                        this.helperPickups = [new HelperPickup(spriteIds.helper_charlie_icon, WeBareBearsTrippleTrip.HelperType.Charlie),
                            new HelperPickup(spriteIds.helper_chloe_icon, WeBareBearsTrippleTrip.HelperType.Chloe),
                            new HelperPickup(spriteIds.helper_lucy_icon, WeBareBearsTrippleTrip.HelperType.Lucy),
                            new HelperPickup(spriteIds.helper_tabes_icon, WeBareBearsTrippleTrip.HelperType.RangerTabes),
                            new HelperPickup(spriteIds.helper_robot_icon, WeBareBearsTrippleTrip.HelperType.RoboBear),
                            new HelperPickup(spriteIds.helper_timber_icon, WeBareBearsTrippleTrip.HelperType.Timber)];
                        this.pickRandomHelperView.kill();
                    }
                    onYesButtonUp() {
                        this.game.services.ads.showAd().then(() => {
                            this.onChooseWatchAd.dispatch();
                        });
                    }
                    onNoButtonUp() {
                        this.onChooseExit.dispatch();
                    }
                    handlePickRandomHelper() {
                        this.watchAdBonusHelper.kill();
                        this.pickRandomHelperView.revive();
                        this.startPickRandomHelperAnimation();
                    }
                    startPickRandomHelperAnimation() {
                        let game = this.game;
                        let animationFactory = game.services.animation;
                        let background = this.pickRandomHelperView.children[0];
                        let offset = game.applyResolutionRatio(4);
                        let duration = 10000;
                        let moveUp = animationFactory.tween(background, { y: -offset }, 75, Phaser.Easing.Sinusoidal.InOut);
                        let moveDown = animationFactory.tween(background, { y: offset }, 75, Phaser.Easing.Sinusoidal.InOut);
                        let moveQueue = animationFactory.queue([moveUp, moveDown]);
                        let repeatMove = animationFactory.repeat(moveQueue, 45);
                        let cycles = 20;
                        let tween = animationFactory.tween(this, {}, 10000, Phaser.Easing.Quadratic.Out);
                        let sprite = this.helperSprite;
                        let pickups = Phaser.ArrayUtils.shuffle(this.helperPickups);
                        let reward = pickups[pickups.length - 1].helperType;
                        let index = 0;
                        let view = this.pickRandomHelperView;
                        tween.addOnUpdateCallback(function (tween, percent, tweenData) {
                            index = Math.floor((cycles * percent * pickups.length)) % pickups.length;
                            let spriteId = pickups[index].spriteId;
                            sprite.loadTexture(spriteId.key, spriteId.frame);
                            sprite.bottom = view.bottom - game.applyResolutionRatio(60);
                        }, this);
                        let punchScale = this.createPunchScaleAnim(sprite, 1.1, 250);
                        let repeat = animationFactory.repeat(punchScale, 4);
                        let bundle = animationFactory.bundle([tween, repeatMove]);
                        let queue = animationFactory.queue([bundle, repeat]);
                        tween.onComplete.add(this.addReward.bind(this, reward));
                        queue.onPlay.add(game.repositories.sound.onPickRandomHelper, game.repositories.sound);
                        queue.onComplete.add(function () {
                            this.onChooseExit.dispatch();
                        }, this);
                        queue.play();
                    }
                    addReward(helperType) {
                        let game = this.game;
                        game.inventory.addHelperToHelperQueue(helperType);
                        game.screenManager.screens.core.ui.helperQueue.addHelper(helperType);
                        game.repositories.sound.onHelperAcquired(helperType);
                    }
                    onTranstionOutCompleted() {
                        super.onTranstionOutCompleted();
                        this.pickRandomHelperView.kill();
                        this.watchAdBonusHelper.revive();
                    }
                    createPunchScaleAnim(sprite, scaleModifier, durationMs) {
                        let game = this.game;
                        let animationFactory = game.services.animation;
                        let halfDuration = durationMs / 2;
                        let scaleAway = animationFactory.tween(sprite.scale, { x: scaleModifier, y: scaleModifier }, halfDuration);
                        let scaleBack = animationFactory.tween(sprite.scale, { x: 1, y: 1 }, halfDuration);
                        let queue = animationFactory.queue([scaleAway, scaleBack]);
                        return queue;
                    }
                }
                ModalView.AdFreeHelper = AdFreeHelper;
                class HelperPickup {
                    constructor(spriteId, helperType) {
                        this.spriteId = null;
                        this.helperType = null;
                        this.spriteId = spriteId;
                        this.helperType = helperType;
                    }
                }
            })(ModalView = UI.ModalView || (UI.ModalView = {}));
        })(UI = WeBareBearsTrippleTrip.UI || (WeBareBearsTrippleTrip.UI = {}));
    })(WeBareBearsTrippleTrip = Funday.WeBareBearsTrippleTrip || (Funday.WeBareBearsTrippleTrip = {}));
})(Funday || (Funday = {}));
var Funday;
(function (Funday) {
    var WeBareBearsTrippleTrip;
    (function (WeBareBearsTrippleTrip) {
        var UI;
        (function (UI) {
            var ModalView;
            (function (ModalView) {
                class AdRevive extends Funday.UI.View {
                }
                ModalView.AdRevive = AdRevive;
            })(ModalView = UI.ModalView || (UI.ModalView = {}));
        })(UI = WeBareBearsTrippleTrip.UI || (WeBareBearsTrippleTrip.UI = {}));
    })(WeBareBearsTrippleTrip = Funday.WeBareBearsTrippleTrip || (Funday.WeBareBearsTrippleTrip = {}));
})(Funday || (Funday = {}));
var Funday;
(function (Funday) {
    var WeBareBearsTrippleTrip;
    (function (WeBareBearsTrippleTrip) {
        var UI;
        (function (UI) {
            var ModalView;
            (function (ModalView) {
                class AreYouSurePopup extends Funday.UI.View {
                    constructor(game) {
                        super(game);
                        this.bg = null;
                        this.pickRandomHelperView = null;
                        this.helperSprite = null;
                        this.onYesButton = new Phaser.Signal();
                        this.onNoButton = new Phaser.Signal();
                        this.bg = game.createSprite(0, 0, Funday.WeBearBears.SpriteLibrary.ui.watch_add_revive);
                        this.addChild(this.bg);
                        this.bg.anchor.setTo(.5);
                        //let reviveText = game.add.bitmapText(0, 0, "wbb_font", i18next.t('areyousure'), game.applyResolutionRatio(65));
                        
                        let reviveText = game.add.existing(new Phaser.Text(this.game, 0, 0, i18next.t('areyousure'),
                            {
                                font: font1,
                                fontSize: 60,
                                fontWeight: 700,
                                fill: 'white'
                            }
                        ));
                        
                        reviveText.align = "center";
                        reviveText.anchor.setTo(.5);
                        reviveText.position.y -= (this.bg.height * .125);
                        this.bg.addChild(reviveText);
                        let yesButton = game.createButton(0, 0, Funday.WeBearBears.SpriteLibrary.ui.yes);
                        yesButton.scale.setTo(1.15);
                        this.bg.addChild(yesButton);
                        let noButton = game.createButton(0, 0, Funday.WeBearBears.SpriteLibrary.ui.no);
                        this.bg.addChild(noButton);
                        yesButton.alignIn(this.bg, Phaser.BOTTOM_RIGHT, -game.applyResolutionRatio(150), -game.applyResolutionRatio(125));
                        noButton.alignIn(this.bg, Phaser.BOTTOM_LEFT, -game.applyResolutionRatio(150), -game.applyResolutionRatio(125));
                        yesButton.onUp.add(this.onYesButtonUp, this);
                        noButton.onUp.add(this.onNoButtonUp, this);
                    }
                    onYesButtonUp() {
                        this.onYesButton.dispatch();
                        let modal = this.parent;
                        modal.hide();
                    }
                    onNoButtonUp() {
                        this.onNoButton.dispatch();
                        let modal = this.parent;
                        modal.hide();
                    }
                    onTransitionInStarted() {
                        let game = this.game;
                        game.screenManager.screens.core.levelControl.pause();
                    }
                    onTranstionOutCompleted() {
                        let game = this.game;
                        game.screenManager.screens.core.levelControl.resume();
                        super.onTranstionOutCompleted();
                        this.bg.revive();
                    }
                    createPunchScaleAnim(sprite, scaleModifier, durationMs) {
                        let game = this.game;
                        let animationFactory = game.services.animation;
                        let halfDuration = durationMs / 2;
                        let scaleAway = animationFactory.tween(sprite.scale, { x: scaleModifier, y: scaleModifier }, halfDuration);
                        let scaleBack = animationFactory.tween(sprite.scale, { x: 1, y: 1 }, halfDuration);
                        let queue = animationFactory.queue([scaleAway, scaleBack]);
                        return queue;
                    }
                }
                ModalView.AreYouSurePopup = AreYouSurePopup;
            })(ModalView = UI.ModalView || (UI.ModalView = {}));
        })(UI = WeBareBearsTrippleTrip.UI || (WeBareBearsTrippleTrip.UI = {}));
    })(WeBareBearsTrippleTrip = Funday.WeBareBearsTrippleTrip || (Funday.WeBareBearsTrippleTrip = {}));
})(Funday || (Funday = {}));
var Funday;
(function (Funday) {
    var WeBareBearsTrippleTrip;
    (function (WeBareBearsTrippleTrip) {
        var UI;
        (function (UI) {
            var ModalView;
            (function (ModalView) {
                class DebugMenu extends Funday.UI.View {
                    constructor(game) {
                        super(game);
                        this.scroll = null;
                        this.buttonGroup = null;
                        let scroll = game.createSprite(0, 0, Funday.WeBearBears.SpriteLibrary.ui.shop_box03);
                        this.addChild(scroll);
                        scroll.anchor.setTo(.5);
                        scroll.inputEnabled = true;
                        this.scroll = scroll;
                        this.buttonGroup = game.add.group();
                        this.scroll.addChild(this.buttonGroup);
                        let fontSize = game.applyResolutionRatio(90);
                        let text = game.add.bitmapText(0, 0, "terry", "Debug Menu", fontSize);
                        let textColor = 0xffffff;
                        text.tint = textColor;
                        text.anchor.setTo(.5);
                        this.scroll.addChild(text);
                        text.position.y = scroll.top + text.height;
                        let verticalPadding = game.applyResolutionRatio(32) * .5;
                        let versionFontSize = game.applyResolutionRatio(40);
                        let version = game.version;
                        let versionCaption = version.name + "\nVersion: " + version.getVersionString();
                        let versionText = game.add.bitmapText(0, 0, "terry", versionCaption, versionFontSize);
                        versionText.align = "right";
                        versionText.anchor.setTo(1);
                        this.addChild(versionText);
                        versionText.position.x = game.canvas.width * .48;
                        versionText.position.y = game.canvas.height * .48;
                        let closeButton = this.createTextButton(i18next.t('backtogame'), this.onCloseButtonUp);
                        this.createTextButton(i18next.t('clearallprogress'), this.onClearProgressButtonUp);
                        this.createTextButton(i18next.t('add100coins'), this.onAddCoinsButtonUp.bind(this));
                        this.createTextButton(i18next.t('resetcoins'), this.onClearCoinsUp.bind(this));
                        this.buttonGroup.align(1, this.buttonGroup.children.length, this.scroll.width, closeButton.button.height + verticalPadding, Phaser.TOP_CENTER);
                        this.buttonGroup.alignIn(this.scroll, Phaser.CENTER);
                        this.buttonGroup.position.y += game.applyResolutionRatio(64);
                        text.position.y += text.height * .07;
                    }
                    createToggleButton(caption, callback) {
                        let optionToggleButtonObjects = new ModalView.OptionToggleButtonObjects();
                        let game = this.game;
                        let button = game.createButton(0, 0, Funday.WeBearBears.SpriteLibrary.ui.shop_box02);
                        button.scale.setTo(.95);
                        this.buttonGroup.addChild(button);
                        optionToggleButtonObjects.button = button;
                        let fontSize = game.applyResolutionRatio(90);
                        let text = game.add.existing(new Phaser.Text(this.game, 0, 0, caption,
                            {
                                font: font1,
                                fontSize: 40,
                                fontWeight: 700,
                                fill: 'white'
                            }
                        ));
                        //let text = game.add.bitmapText(0, 0, "terry", caption, fontSize);
                        //let textColor = 0xffffff;
                        //text.tint = textColor;
                        text.anchor.setTo(.5);
                        button.button.addChild(text);
                        button.onUp.add(callback, this, 0, optionToggleButtonObjects);
                        let horizontalPadding = game.applyResolutionRatio(64);
                        text.position.x = button.button.left + (text.width * .5) + horizontalPadding;
                        optionToggleButtonObjects.text = text;
                        let icon = button.addIconFromSpriteId(Funday.WeBearBears.SpriteLibrary.ui.checkmark);
                        icon.position.x = button.button.right - (icon.width * .5) - horizontalPadding;
                        optionToggleButtonObjects.icon = icon;
                        return optionToggleButtonObjects;
                    }
                    createTextButton(caption, callback) {
                        let game = this.game;
                        let button = game.createButton(0, 0, Funday.WeBearBears.SpriteLibrary.ui.shop_box02);
                        this.buttonGroup.addChild(button);
                        button.scale.setTo(.95);
                        let fontSize = game.applyResolutionRatio(90);
                        //let text = game.add.bitmapText(0, 0, "terry", caption, fontSize);
                        
                        let text = game.add.existing(new Phaser.Text(this.game, 0, 0, caption,
                            {
                                font: font1,
                                fontSize: 40,
                                fontWeight: 700,
                                fill: 'white'
                            }
                        ));
                        
                        //let textColor = 0xffffff;
                        //text.tint = textColor;
                        text.anchor.setTo(.5);
                        button.button.addChild(text);
                        button.onUp.add(callback, this, 0);
                        return button;
                    }
                    onClearProgressButtonUp() {
                        
                        let game = this.game;
                        game.inventory.debugReset();
                    }
                    onCloseButtonUp() {
                        let modal = this.parent;
                        modal.hide();
                    }
                    onTranstionOutCompleted() {
                        super.onTranstionOutCompleted();
                        let game = this.game;
                        game.screenManager.screens.core.levelControl.onPauseMenuHidden();
                    }
                    onAddCoinsButtonUp() {
                        let game = this.game;
                        game.screenManager.screens.core.ui.coins.playCoinCollectAnimation(100);
                    }
                    onClearCoinsUp() {
                        let game = this.game;
                        game.inventory.setCoins(0);
                        game.screenManager.screens.core.ui.coins.refresh();
                    }
                }
                ModalView.DebugMenu = DebugMenu;
            })(ModalView = UI.ModalView || (UI.ModalView = {}));
        })(UI = WeBareBearsTrippleTrip.UI || (WeBareBearsTrippleTrip.UI = {}));
    })(WeBareBearsTrippleTrip = Funday.WeBareBearsTrippleTrip || (Funday.WeBareBearsTrippleTrip = {}));
})(Funday || (Funday = {}));
var Funday;
(function (Funday) {
    var WeBareBearsTrippleTrip;
    (function (WeBareBearsTrippleTrip) {
        var UI;
        (function (UI) {
            var ModalView;
            (function (ModalView) {
                class GameOver extends Funday.UI.View {
                    constructor(game) {
                        super(game);
                        this.dummySprite = null;
                        this.watchAdToRevive = null;
                        this.onChooseRevive = new Phaser.Signal();
                        this.onChooseRestart = new Phaser.Signal();
                        this.gameOverText = null;
                        this.captionTryAgain = i18next.t('captionTryAgain');
                        this.captionNewHighscore = i18next.t('captionNewHighscore');
                        this.dummySprite = game.createSprite(0, 0, Funday.WeBearBears.SpriteLibrary.ui.start_button_box);
                        this.addChild(this.dummySprite);
                        this.dummySprite.anchor.setTo(.5);
                        //let gameOverText = this.game.add.bitmapText(0, 0, "terry", this.captionTryAgain, game.applyResolutionRatio(80));
                        
                        let gameOverText = game.add.existing(new Phaser.Text(this.game, 0, 0, this.captionTryAgain,
                            {
                                font: font1,
                                fontSize: 60,
                                fontWeight: 700,
                                fill: 'white'
                            }
                        ));
                        
                        gameOverText.anchor.setTo(.5);
                        this.gameOverText = gameOverText;
                        gameOverText.align = "center";
                        this.dummySprite.addChild(gameOverText);
                        this.watchAdToRevive = game.createSprite(0, 0, Funday.WeBearBears.SpriteLibrary.ui.watch_add_revive);
                        this.addChild(this.watchAdToRevive);
                        this.watchAdToRevive.anchor.setTo(.5);
                        this.watchAdToRevive.kill();
                        let reviveText = game.add.bitmapText(0, 0, "wbb_font", "Watch an ad\nto revive?", game.applyResolutionRatio(90));
                        reviveText.align = "center";
                        reviveText.anchor.setTo(.5);
                        reviveText.position.y -= (this.watchAdToRevive.height * .125);
                        this.watchAdToRevive.addChild(reviveText);
                        let yesButton = game.createButton(0, 0, Funday.WeBearBears.SpriteLibrary.ui.yes);
                        yesButton.scale.setTo(1.15);
                        this.watchAdToRevive.addChild(yesButton);
                        let noButton = game.createButton(0, 0, Funday.WeBearBears.SpriteLibrary.ui.no);
                        this.watchAdToRevive.addChild(noButton);
                        yesButton.alignIn(this.watchAdToRevive, Phaser.BOTTOM_RIGHT, -game.applyResolutionRatio(150), -game.applyResolutionRatio(125));
                        noButton.alignIn(this.watchAdToRevive, Phaser.BOTTOM_LEFT, -game.applyResolutionRatio(150), -game.applyResolutionRatio(125));
                        yesButton.onUp.add(this.onYesButtonUp, this);
                        noButton.onUp.add(this.onNoButtonUp, this);
                    }
                    onYesButtonUp() {
                        this.game.services.ads.showAd().then(() => {
                            this.onChooseRevive.dispatch();
                        });
                    }
                    onNoButtonUp() {
                        this.onChooseRestart.dispatch();
                    }
                    onTransitionInStarted() {
                        super.onTransitionInStarted();
                        let game = this.game;
                        if (game.inventory.getHighscore() === game.screenManager.screens.core.ui.score.scoreValue) {
                            this.gameOverText.setText(this.captionNewHighscore);
                        }
                        else {
                            this.gameOverText.setText(this.captionTryAgain);
                        }
                        game.inventory.save();
                        game.inventory.saveHighscore();
                    }
                    onTransitionInCompleted() {
                        super.onTransitionInCompleted();
                        let game = this.game;
                        let animationFactory = game.services.animation;
                        let levelControl = game.screenManager.screens.core.levelControl;
                        let delay = animationFactory.delay(2000);
                        if (levelControl.shouldShowWatchAdToReviveModal()) {
                            delay.onComplete.add(this.switchView, this);
                        }
                        else {
                            delay.onComplete.add(this.onNoButtonUp, this);
                        }
                        delay.play();
                    }
                    switchView() {
                        this.dummySprite.kill();
                        this.watchAdToRevive.revive();
                    }
                    onTranstionOutCompleted() {
                        super.onTranstionOutCompleted();
                        this.dummySprite.revive(),
                            this.watchAdToRevive.kill();
                    }
                }
                ModalView.GameOver = GameOver;
            })(ModalView = UI.ModalView || (UI.ModalView = {}));
        })(UI = WeBareBearsTrippleTrip.UI || (WeBareBearsTrippleTrip.UI = {}));
    })(WeBareBearsTrippleTrip = Funday.WeBareBearsTrippleTrip || (Funday.WeBareBearsTrippleTrip = {}));
})(Funday || (Funday = {}));
var Funday;
(function (Funday) {
    var WeBareBearsTrippleTrip;
    (function (WeBareBearsTrippleTrip) {
        var UI;
        (function (UI) {
            var ModalView;
            (function (ModalView) {
                class GameOverHighscore extends Funday.UI.View {
                }
                ModalView.GameOverHighscore = GameOverHighscore;
            })(ModalView = UI.ModalView || (UI.ModalView = {}));
        })(UI = WeBareBearsTrippleTrip.UI || (WeBareBearsTrippleTrip.UI = {}));
    })(WeBareBearsTrippleTrip = Funday.WeBareBearsTrippleTrip || (Funday.WeBareBearsTrippleTrip = {}));
})(Funday || (Funday = {}));
var Funday;
(function (Funday) {
    var WeBareBearsTrippleTrip;
    (function (WeBareBearsTrippleTrip) {
        var UI;
        (function (UI) {
            var ModalView;
            (function (ModalView) {
                class Menu extends Funday.UI.View {
                    constructor(game) {
                        super(game);
                        this.scroll = null;
                        this.buttonGroup = null;
                        let scroll = game.createSprite(0, 0, Funday.WeBearBears.SpriteLibrary.ui.shop_box03);
                        this.addChild(scroll);
                        scroll.anchor.setTo(.5);
                        scroll.inputEnabled = true;
                        this.scroll = scroll;
                        this.buttonGroup = game.add.group();
                        this.scroll.addChild(this.buttonGroup);
                        let fontSize = game.applyResolutionRatio(90);
                        //let text = game.add.bitmapText(0, 0, "terry", i18next.t('options'), fontSize);
                        
                        let text = game.add.existing(new Phaser.Text(this.game, 0, 0, i18next.t('options'),
                            {
                                font: font1,
                                fontSize: 80,
                                fontWeight: 700,
                                fill: 'white'
                            }
                        ));
                        
                        
                        //let textColor = 0xffffff;
                        //text.tint = textColor;
                        text.anchor.setTo(.5);
                        this.scroll.addChild(text);
                        text.position.y = scroll.top + text.height;
                        let verticalPadding = game.applyResolutionRatio(32) * .5;
                        let versionFontSize = game.applyResolutionRatio(40);
                        let version = game.version;
                        let versionCaption = version.name + "\n" + version.getVersionString();
                        let versionText = game.add.bitmapText(0, 0, "terry", versionCaption, versionFontSize);
                        versionText.align = "right";
                        versionText.anchor.setTo(1);
                        this.addChild(versionText);
                        versionText.position.x = game.canvas.width * .48;
                        versionText.position.y = game.canvas.height * .48;
                        let closeMenuButton = this.createTextButton(i18next.t('backtogame'), this.onCloseButtonUp);
                        let musicToggleButtonInfo = this.createToggleButton(i18next.t('music'), this.onMusicButtonUp);
                        let audioToggoleButtonInfo = this.createToggleButton(i18next.t('audio'), this.onAudioButtonUp);
                        let resetProgressButton = this.createTextButton(i18next.t('clearallprogress'), this.onClearProgressButtonUp);
                        this.buttonGroup.align(1, this.buttonGroup.children.length, this.scroll.width, musicToggleButtonInfo.button.height + verticalPadding, Phaser.TOP_CENTER);
                        this.buttonGroup.alignIn(this.scroll, Phaser.CENTER);
                        this.buttonGroup.position.y += game.applyResolutionRatio(64);
                        text.position.y += text.height * .07;
                        this.scroll.position.y = -game.applyResolutionRatio(64);
                    }
                    setModalManager(modalManager) {
                        this.modalManager = modalManager;
                    }
                    createToggleButton(caption, callback) {
                        let optionToggleButtonObjects = new OptionToggleButtonObjects();
                        let game = this.game;
                        let button = game.createButton(0, 0, Funday.WeBearBears.SpriteLibrary.ui.shop_box02);
                        button.scale.setTo(.95);
                        this.buttonGroup.addChild(button);
                        optionToggleButtonObjects.button = button;
                        let fontSize = game.applyResolutionRatio(90);
                        //let text = game.add.bitmapText(0, 0, "terry", caption, fontSize);
                        
                        let text = game.add.existing(new Phaser.Text(this.game, 0, 0, caption,
                            {
                                font: font1,
                                fontSize: 60,
                                fontWeight: 700,
                                fill: 'white'
                            }
                        ));
                        
                        //let textColor = 0xffffff;
                        //text.tint = textColor;
                        text.anchor.setTo(.5);
                        button.button.addChild(text);
                        button.onUp.add(callback, this, 0, optionToggleButtonObjects);
                        let horizontalPadding = game.applyResolutionRatio(64);
                        //text.position.x = button.button.left + (text.width * .5) + horizontalPadding;
                        optionToggleButtonObjects.text = text;
                        let icon = button.addIconFromSpriteId(Funday.WeBearBears.SpriteLibrary.ui.checkmark);
                        icon.position.x = button.button.right - (icon.width * .5) - horizontalPadding;
                        optionToggleButtonObjects.icon = icon;
                        return optionToggleButtonObjects;
                    }
                    createTextButton(caption, callback) {
                        let game = this.game;
                        let button = game.createButton(0, 0, Funday.WeBearBears.SpriteLibrary.ui.shop_box02);
                        this.buttonGroup.addChild(button);
                        button.scale.setTo(.95);
                        let fontSize = game.applyResolutionRatio(90);
                        //let text = game.add.bitmapText(0, 0, "terry", caption, fontSize);
                        let text = game.add.existing(new Phaser.Text(this.game, 0, 0, caption,
                            {
                                font: font1,
                                fontSize: 60,
                                fontWeight: 700,
                                fill: 'white'
                            }
                        ));
                        //let textColor = 0xffffff;
                        //text.tint = textColor;
                        text.anchor.setTo(.5);
                        button.button.addChild(text);
                        button.onUp.add(callback, this, 0);
                        return button;
                    }
                    onMusicButtonUp(buttonInfo) {
                        let game = this.game;
                        game.repositories.sound.startMusic();
                        let music = game.repositories.sound.music;
                        music.mute = !music.mute;
                        let spriteId = music.mute ? Funday.WeBearBears.SpriteLibrary.ui.close : Funday.WeBearBears.SpriteLibrary.ui.checkmark;
                        buttonInfo.icon.loadTexture(spriteId.key, spriteId.frame);
                    }
                    onAudioButtonUp(buttonInfo) {
                        let game = this.game;
                        game.repositories.sound.muteSfx = !game.repositories.sound.muteSfx;
                        let spriteId = game.repositories.sound.muteSfx ? Funday.WeBearBears.SpriteLibrary.ui.close : Funday.WeBearBears.SpriteLibrary.ui.checkmark;
                        buttonInfo.icon.loadTexture(spriteId.key, spriteId.frame);
                    }
                    onClearProgressButtonUp() {
                        let popup = this.modalManager.showAreYouSurePopup();
                        popup.onYesButton.addOnce(() => {
                            console.log("HEREREREREERERE");
                            let highscoreKey = this.game.services.persistence.highscoreKey;
                        this.game.services.persistence.save(highscoreKey, "0");
                            let game = this.game;
                            game.inventory.debugReset();
                        });
                    }
                    onCloseButtonUp() {
                        let modal = this.parent;
                        modal.hide();
                    }
                    onTranstionOutCompleted() {
                        super.onTranstionOutCompleted();
                        let game = this.game;
                        game.screenManager.screens.core.levelControl.onPauseMenuHidden();
                    }
                    onTransitionInCompleted() {
                        super.onTransitionInCompleted();
                        this.game.services.analytics.trackLocation(Funday.Service.GameLocations.PAUSE);
                    }
                }
                ModalView.Menu = Menu;
                class OptionToggleButtonObjects {
                    constructor() {
                        this.button = null;
                        this.icon = null;
                        this.text = null;
                    }
                }
                ModalView.OptionToggleButtonObjects = OptionToggleButtonObjects;
            })(ModalView = UI.ModalView || (UI.ModalView = {}));
        })(UI = WeBareBearsTrippleTrip.UI || (WeBareBearsTrippleTrip.UI = {}));
    })(WeBareBearsTrippleTrip = Funday.WeBareBearsTrippleTrip || (Funday.WeBareBearsTrippleTrip = {}));
})(Funday || (Funday = {}));
var Funday;
(function (Funday) {
    var WeBareBearsTrippleTrip;
    (function (WeBareBearsTrippleTrip) {
        var UI;
        (function (UI) {
            var ModalView;
            (function (ModalView) {
                class Pause extends Funday.UI.View {
                    constructor(game) {
                        super(game);
                        this.resumeButton = null;
                        this.resumeButton = game.createButton(0, 0, Funday.WeBearBears.SpriteLibrary.ui.start_button_box);
                        this.resumeButton.scale.setTo(.5);
                        //let text = game.add.bitmapText(0, 0, "terry", i18next.t('taptoresume'), game.applyResolutionRatio(80));
                        let text = game.add.existing(new Phaser.Text(this.game, 0, 0, i18next.t('taptoresume'),
                            {
                                font: font1,
                                fontSize: game.applyResolutionRatio(80),
                                fontWeight: 700,
                                fill: 'white'
                            }
                        ));
                        text.anchor.setTo(.5);
                        this.resumeButton.button.addChild(text);
                        this.addChild(this.resumeButton);
                    }
                }
                ModalView.Pause = Pause;
            })(ModalView = UI.ModalView || (UI.ModalView = {}));
        })(UI = WeBareBearsTrippleTrip.UI || (WeBareBearsTrippleTrip.UI = {}));
    })(WeBareBearsTrippleTrip = Funday.WeBareBearsTrippleTrip || (Funday.WeBareBearsTrippleTrip = {}));
})(Funday || (Funday = {}));
var Funday;
(function (Funday) {
    var WeBareBearsTrippleTrip;
    (function (WeBareBearsTrippleTrip) {
        var UI;
        (function (UI) {
            var ModalView;
            (function (ModalView) {
                class Shop extends Funday.UI.View {
                    constructor(game) {
                        super(game);
                        this.background = null;
                        this.scrollGroup = null;
                        this.hasProcessedInputDownEvent = false;
                        this.isScrollingActive = false;
                        this.lastScroll = new Phaser.Point(0, 0);
                        this.scrollDelta = new Phaser.Point(0, 0);
                        this.totalScrollDistance = new Phaser.Point(0, 0);
                        this.maxScroll = 0;
                        this.minScroll = 0;
                        this.topBlock = null;
                        this.bottomBlock = null;
                        this.lockScrolling = false;
                        this.backButton = null;
                        this.currentHelperQueueIsFullAnim = null;
                        this.background = game.createSprite(0, 0, Funday.WeBearBears.SpriteLibrary.ui.shop_box03);
                        this.background.anchor.setTo(.5);
                        this.addChild(this.background);
                        let g = this.game.add.graphics(0, 0, this);
                g.beginFill(0x166067)
                g.drawRoundedRect(0, 0, 35, 1305,50);
                g.endFill()

                let m = this.game.add.graphics(0, 0, this);
                m.beginFill(0xe4aa2a)
                m.drawRoundedRect(0, 0, 30, 200,50);
                m.endFill()

                this.scrollBarBackground = game.add.sprite(433,-715);
                this.scrollBarBackground.anchor.setTo(0.5);
                this.scrollBarBackground.addChild(g);
                this.addChild(this.scrollBarBackground);

                this.scrollBar = game.add.sprite(435,-713);
                this.scrollBar.anchor.setTo(0.5);
                this.scrollBar.addChild(m);
                this.addChild(this.scrollBar);

                this.scrollBar.inputEnabled = true;
                this.scrollBar.input.enableDrag();
                this.scrollBar.input.allowVerticalDrag = true;
                this.scrollBar.input.allowHorizontalDrag = false;
                this.scrollBar.events.onDragStart.add(this.onDragStart, this);
                this.scrollBar.events.onDragStop.add(this.onDragStop, this);

                this.scrollBarIsScrolling = false;

                
    //sonic.events.onDragStart.add(onDragStart, this);
    //sonic.events.onDragStop.add(onDragStop, this);


                        //this.background.alpha = 0.5;
                        this.scrollGroup = game.add.group();
                        this.background.addChild(this.scrollGroup);
                        let maskWidthModifier = .93;
                        let maskHeightModifer = .945;
                        let maskGfx = Funday.Utils.MaskHelper.addRectangleMask(game, this.background.width * maskWidthModifier, this.background.height * maskHeightModifer, this.background);
                        this.background.addChild(maskGfx);
                        maskGfx.alignIn(this.background, Phaser.CENTER);
                        this.background.position.y = -game.applyResolutionRatio(64);
                        this.scrollGroup.mask = maskGfx;
                        let headerBox = game.createSprite(0, 0, Funday.WeBearBears.SpriteLibrary.ui.shop_box01);
                        headerBox.anchor.setTo(.5);
                        this.scrollGroup.addChild(headerBox);
                        //let headerText = game.add.bitmapText(0, 0, "terry", i18next.t('callafriend'), game.applyResolutionRatio(80));
                        
                        let headerText = game.add.existing(new Phaser.Text(this.game, 0, 0, i18next.t('callafriend'),
                            {
                                font: font1,
                                fontSize: 60,
                                fontWeight: 700,
                                fill: 'white'
                            }
                        ));
                        
                        headerBox.addChild(headerText);
                        headerText.anchor.setTo(.5);
                        headerText.left = headerBox.left + headerBox.width * .25;
                        headerText.position.y = -game.applyResolutionRatio(10);
                        let items = game.repositories.shop.shopItems;
                        for (let index = 0; index < items.length; index++) {
                            let item = items[index];
                            this.addShopButton(item);
                        }
                        let height = game.getFrameData(Funday.WeBearBears.SpriteLibrary.ui.shop_box02).height * 1.1;
                        this.scrollGroup.align(1, this.scrollGroup.children.length, this.scrollGroup.width, height, Phaser.TOP_LEFT);
                        this.scrollGroup.alignIn(maskGfx, Phaser.TOP_CENTER);
                        let padding = this.background.height * (1 - maskHeightModifer) * .25;
                        this.scrollGroup.position.y += padding;
                        let childSpacing = game.applyResolutionRatio(20);
                        for (let index = 1; index < this.scrollGroup.children.length; index++) {
                            const previousChild = this.scrollGroup.children[index - 1];
                            const child = this.scrollGroup.children[index];
                            child.top = previousChild.bottom + childSpacing;
                            if (index === 1) {
                                child.top += (childSpacing * 2);
                            }
                        }
                        this.maxScroll = this.scrollGroup.position.y;
                        this.minScroll = -this.scrollGroup.bottom;
                        this.topBlock = game.createSprite(0, 0, Funday.WeBearBears.SpriteLibrary.tiles.ground_light, this);
                        this.topBlock.anchor.setTo(.5, 1);
                        this.topBlock.alignTo(maskGfx, Phaser.TOP_CENTER);
                        this.topBlock.position.y -= (this.topBlock.height * .333);
                        this.topBlock.width = game.canvas.width;
                        this.topBlock.height = game.applyResolutionRatio(500);
                        this.topBlock.inputEnabled = true;
                        this.topBlock.alpha = 0;
                        this.bottomBlock = game.createSprite(0, 0, Funday.WeBearBears.SpriteLibrary.tiles.ground_light, this);
                        this.bottomBlock.anchor.setTo(.5, 0);
                        this.bottomBlock.alignTo(maskGfx, Phaser.BOTTOM_CENTER);
                        this.bottomBlock.position.y -= (this.bottomBlock.height * .333);
                        this.bottomBlock.width = game.canvas.width;
                        this.bottomBlock.height = game.applyResolutionRatio(500);
                        this.bottomBlock.inputEnabled = true;
                        this.bottomBlock.alpha = 0;
                        let backButton = game.createButton(0, 0, Funday.WeBearBears.SpriteLibrary.ui.back_button);
                        this.addChild(backButton);
                        backButton.setAudioSettings(WeBareBearsTrippleTrip.SoundRepository.closeShopButtonAudioSettings);
                        backButton.alignIn(new Phaser.Rectangle(0, 0, game.canvas.width / 2, game.canvas.height / 2), Phaser.BOTTOM_RIGHT, -game.applyResolutionRatio(30), -game.applyResolutionRatio(30));
                        backButton.onUp.add(this.onCloseShopButtonUp, this);
                        backButton.visible = false;
                        this.backButton = backButton;
                    }
                    onDragStart()
                    {
                        this.scrollBarIsScrolling = true;
                    }
                    onDragStop()
                    {
                        this.scrollBarIsScrolling = false;
                    }
                    addShopButton(item) {
                        let game = this.game;
                        let button = game.createButton(0, 0, Funday.WeBearBears.SpriteLibrary.ui.shop_box02);
                        this.scrollGroup.addChild(button);
                        let icon = game.createSprite(0, 0, item.icon);
                        let iconTileHeight = game.applyResolutionRatio(156);
                        icon.anchor.setTo(1);
                        button.button.addChild(icon);
                        icon.left = button.button.left + game.applyResolutionRatio(40);
                        icon.bottom = button.button.bottom - game.applyResolutionRatio(60);
                        let headerTextSize = game.applyResolutionRatio(60);
                        //let headerText = game.add.bitmapText(0, 0, "terry", item.name, headerTextSize);
                        
                        let headerText = game.add.existing(new Phaser.Text(this.game, 0, 0, item.name,
                            {
                                font: font1,
                                fontSize: 50,
                                fontWeight: 700,
                                fill: 'white'
                            }
                        ));
                        
                        let headerX = button.button.left + (button.button.width * .25);
                        let headerY = button.button.top + (button.button.height * .2);
                        button.button.addChild(headerText);
                        headerText.position.x = headerX;
                        headerText.position.y = headerY;
                        let descriptionTextSize = game.applyResolutionRatio(45);
                        //let descriptionText = game.add.bitmapText(0, 0, "terry", item.description, descriptionTextSize);
                        
                        let descriptionText = game.add.existing(new Phaser.Text(this.game, 0, 0, item.description,
                            {
                                font: font1,
                                fontSize: 40,
                                fontWeight: 700,
                                fill: 'white'
                            }
                        ));
                        
                        let descriptionX = button.button.left + (button.button.width * .25);
                        let descriptionY = button.button.top + (button.button.height * .56);
                        button.button.addChild(descriptionText);
                        descriptionText.position.x = descriptionX;
                        descriptionText.position.y = descriptionY;
                        let coin = game.createSprite(0, 0, Funday.WeBearBears.SpriteLibrary.ui.Coin);
                        button.button.addChild(coin);
                        coin.anchor.setTo(.5);
                        let coinTop = headerText.top + (coin.height * .1);
                        let coinRight = button.button.width * .9 * .5;
                        coin.top = coinTop;
                        coin.right = coinRight;
                        let priceTextSize = game.applyResolutionRatio(55);
                        let priceText = game.add.bitmapText(0, 0, "terry", item.price.toString(), priceTextSize);
                        priceText.anchor.setTo(.5);
                        button.button.addChild(priceText);
                        priceText.anchor.y = .6;
                        priceText.right = coin.left - game.applyResolutionRatio(20);
                        priceText.position.y = coin.centerY;
                        let uiShopItem = new UIShopItem();
                        uiShopItem.icon = icon;
                        uiShopItem.coin = coin;
                        uiShopItem.button = button;
                        uiShopItem.descriptionText = descriptionText;
                        uiShopItem.headerText = headerText;
                        uiShopItem.priceText = priceText;
                        uiShopItem.shopItem = item;
                        button.onUp.add(this.onShopButtonUp, this, 0, uiShopItem);
                        return button;
                    }
                    isHandlingScrolling() {
                        return this.totalScrollDistance.y > 75;
                    }
                    onShopButtonUp(uiShopItem, a) {
                        if (this.isButtonWithinMask(uiShopItem.button) && !this.isHandlingScrolling()) {
                            if (this.canAfford(uiShopItem)) {
                                if (this.doesHelperQueueHaveRoomForMoreHelpers()) {
                                    this.handlePurchase(uiShopItem);
                                }
                                else {
                                    this.handleHelperQueueIsFull(uiShopItem);
                                }
                            }
                            else {
                                this.handleShopItemTooExpensive(uiShopItem);
                            }
                        }
                    }
                    onTransitionInCompleted() {
                        super.onTransitionInCompleted();
                        this.backButton.visible = true;
                        this.backButton.alpha = 0;
                        let game = this.game;
                        let animationFactory = game.services.animation;
                        let tween = animationFactory.tween(this.backButton, { alpha: 1 }, 150);
                        tween.play();
                        game.services.analytics.trackLocation(Funday.Service.GameLocations.SHOP);
                    }
                    isButtonWithinMask(button) {
                        let buttonRect = new Phaser.Rectangle(button.worldPosition.x, button.worldPosition.y, button.width, button.height);
                        let maskRect = new Phaser.Rectangle(this.scrollGroup.mask.worldPosition.x, this.scrollGroup.mask.worldPosition.y, this.scrollGroup.mask.width, this.scrollGroup.mask.height);
                        return Phaser.Rectangle.intersects(buttonRect, maskRect);
                    }
                    canAfford(uiShopItem) {
                        let game = this.game;
                        let inventory = game.inventory;
                        return inventory.canAfford(uiShopItem.shopItem.price);
                    }
                    doesHelperQueueHaveRoomForMoreHelpers() {
                        let game = this.game;
                        let inventory = game.inventory;
                        return inventory.hasHelperQueueRoomForHelper();
                    }
                    handleShopItemTooExpensive(uiShopItem) {
                        if (!uiShopItem.coinAnimation) {
                            let game = this.game;
                            let animationFactory = game.services.animation;
                            let shakeCoinAnim = this.createRotateShakeAnimation(uiShopItem.coin);
                            let shakePriceAnim = this.createRotateShakeAnimation(uiShopItem.priceText);
                            let shakeBundle = animationFactory.bundle([shakeCoinAnim, shakePriceAnim]);
                            let scaleUpCoin = animationFactory.tween(uiShopItem.coin.scale, { x: 1.3, y: 1.3 }, 200, Phaser.Easing.Back.Out);
                            let scaleUpPrice = animationFactory.tween(uiShopItem.priceText.scale, { x: 1.3, y: 1.3 }, 200, Phaser.Easing.Back.Out);
                            let tintUpPrice = animationFactory.tweenTint(uiShopItem.priceText, 0xff5151, 150);
                            let scaleUpBundle = animationFactory.bundle([scaleUpCoin, scaleUpPrice, tintUpPrice]);
                            let scaleDownCoin = animationFactory.tween(uiShopItem.coin.scale, { x: 1, y: 1 }, 200, Phaser.Easing.Quadratic.In);
                            let scaleDownPrice = animationFactory.tween(uiShopItem.priceText.scale, { x: 1, y: 1 }, 200, Phaser.Easing.Quadratic.In);
                            let tintDownPrice = animationFactory.tweenTint(uiShopItem.priceText, 0xffffff, 200);
                            let scaleDownBundle = animationFactory.bundle([scaleDownCoin, scaleDownPrice, tintDownPrice]);
                            let firstDelay = animationFactory.delay(100);
                            let queue = animationFactory.queue([firstDelay, scaleUpBundle, shakeBundle, scaleDownBundle]);
                            queue.onPlay.add(game.repositories.sound.onItemPurchaseRejectedInShop, game.repositories.sound);
                            uiShopItem.coinAnimation = queue;
                        }
                        if (!uiShopItem.coinAnimation.isPlaying()) {
                            uiShopItem.coinAnimation.play();
                        }
                    }
                    handleHelperQueueIsFull(uiShopItem) {
                        if (!this.currentHelperQueueIsFullAnim) {
                            let game = this.game;
                            let helperQueue = game.screenManager.screens.core.ui.helperQueue;
                            let anims = [];
                            for (let index = 0; index < helperQueue.queue.length; index++) {
                                const element = helperQueue.queue[index];
                                let anim = this.createRotateShakeAnimation(element);
                                anims.push(anim);
                            }
                            let animationFactory = game.services.animation;
                            let bundle = animationFactory.bundle(anims);
                            bundle.onPlay.add(game.repositories.sound.onItemPurchaseRejectedInShop, game.repositories.sound);
                            this.currentHelperQueueIsFullAnim = bundle;
                        }
                        if (!this.currentHelperQueueIsFullAnim.isPlaying()) {
                            this.currentHelperQueueIsFullAnim.play();
                        }
                    }
                    createRotateShakeAnimation(gameObject) {
                        let maxAngleOffset = 6;
                        let steps = 5;
                        let maxIndex = steps - 1;
                        let game = this.game;
                        let animationFactory = game.services.animation;
                        let animationArray = new Array();
                        let totalDuration = 500;
                        let subDuration = totalDuration / steps;
                        for (let index = 0; index < steps; index++) {
                            let modifier = (maxIndex - index) / maxIndex;
                            let tweenAngle = modifier * maxAngleOffset;
                            let tween1 = animationFactory.tween(gameObject, { angle: tweenAngle }, subDuration, Phaser.Easing.Sinusoidal.InOut);
                            let tween2 = animationFactory.tween(gameObject, { angle: -tweenAngle }, subDuration, Phaser.Easing.Sinusoidal.InOut);
                            let bundle = animationFactory.queue([tween1, tween2]);
                            animationArray.push(bundle);
                        }
                        let anim = animationFactory.queue(animationArray);
                        return anim;
                    }
                    handlePurchase(uiShopItem) {
                        let game = this.game;
                        let helperType = uiShopItem.shopItem.helperType;
                        let currentCoins = game.inventory.getCoins();
                        let coinsAfterPurchase = currentCoins - uiShopItem.shopItem.price;
                        game.inventory.setCoins(coinsAfterPurchase);
                        game.screenManager.screens.core.ui.coins.animateFromTo(currentCoins, coinsAfterPurchase);
                        game.inventory.addHelperToHelperQueue(helperType);
                        game.screenManager.screens.core.ui.helperQueue.addHelper(helperType);
                        game.screenManager.screens.core.levelControl.onItemBoughtInShop(uiShopItem.shopItem);
                        game.repositories.sound.onHelperAcquired(helperType);
                    }
                    onCloseShopButtonUp() {
                        this.backButton.visible = false;
                        let modal = this.parent;
                        modal.hide();
                    }
                    update() {
                        if (this.lockScrolling) {
                            return;
                        }
                        if(this.scrollBarIsScrolling)
                        {
                            if(this.scrollBar.y<-713) this.scrollBar.y = -713;
                            if(this.scrollBar.y>(-713+1101)) this.scrollBar.y = -713+1101;

                            var mainPercentage = (1-(this.scrollBar.y+713)/1101);

                            var mainOffset = (this.maxScroll-this.minScroll)

                            this.scrollGroup.position.y = this.minScroll+mainOffset*mainPercentage;
                            
                            return;
                        }

                        if (!this.hasProcessedInputDownEvent && this.game.input.activePointer.isDown) {
                            this.hasProcessedInputDownEvent = true;
                            let hitArea = new Phaser.Rectangle(this.scrollGroup.worldPosition.x, this.scrollGroup.worldPosition.y, this.scrollGroup.width, this.scrollGroup.height);
                            this.isScrollingActive = hitArea.contains(this.game.input.x, this.game.input.y);
                            this.lastScroll.x = this.game.input.x;
                            this.lastScroll.y = this.game.input.y;
                        }
                        else if (this.hasProcessedInputDownEvent && this.game.input.activePointer.isUp) {
                            this.hasProcessedInputDownEvent = false;
                            this.isScrollingActive = false;
                            this.totalScrollDistance.setTo(0);
                        }
                        if (this.isScrollingActive) {
                            //console.log("Scrolling Active");
                            if (this.lastScroll.x !== this.game.input.x || this.lastScroll.y !== this.game.input.y) {
                                this.scrollDelta.x = this.game.input.x - this.lastScroll.x;
                                this.scrollDelta.y = this.game.input.y - this.lastScroll.y;
                                this.totalScrollDistance.x += Math.abs(this.scrollDelta.x);
                                this.totalScrollDistance.y += Math.abs(this.scrollDelta.y);
                                this.scrollGroup.position.y += this.scrollDelta.y;
                                this.scrollGroup.position.y = Math.min(this.maxScroll, this.scrollGroup.position.y);
                                this.scrollGroup.position.y = Math.max(this.minScroll, this.scrollGroup.position.y);
                                this.lastScroll.x = this.game.input.x;
                                this.lastScroll.y = this.game.input.y;
                                this.scrollBar.y = -713+1101*(1-(this.scrollGroup.position.y-this.minScroll)/(this.maxScroll-this.minScroll));
                            }
                        }

                        if(this.scrollBar.y<-713) this.scrollBar.y = -713;
                        if(this.scrollBar.y>(-713+1101)) this.scrollBar.y = -713+1101;
                    }
                }
                ModalView.Shop = Shop;
                class UIShopItem {
                    constructor() {
                        this.button = null;
                        this.icon = null;
                        this.headerText = null;
                        this.descriptionText = null;
                        this.priceText = null;
                        this.coin = null;
                        this.shopItem = null;
                        this.coinAnimation = null;
                    }
                }
            })(ModalView = UI.ModalView || (UI.ModalView = {}));
        })(UI = WeBareBearsTrippleTrip.UI || (WeBareBearsTrippleTrip.UI = {}));
    })(WeBareBearsTrippleTrip = Funday.WeBareBearsTrippleTrip || (Funday.WeBareBearsTrippleTrip = {}));
})(Funday || (Funday = {}));
var Funday;
(function (Funday) {
    var WeBareBearsTrippleTrip;
    (function (WeBareBearsTrippleTrip) {
        class Bear extends Phaser.Sprite {
            constructor() {
                super(...arguments);
                this.bearType = null;
                this.helmet = null;
            }
            getBearType() {
                return this.bearType;
            }
            setBearType(bearType) {
                this.bearType = bearType;
            }
            bringToFrontOfStack() {
                this.parent.setChildIndex(this, this.parent.children.length - 1);
            }
            bringToBackOfStack() {
                this.parent.setChildIndex(this, 0);
            }
            bringToDefaultZPosInStack() {
                this.parent.setChildIndex(this, this.bearType);
            }
            isPanda() {
                return this.bearType === WeBareBearsTrippleTrip.BearType.Panda;
            }
            isGrizzly() {
                return this.bearType === WeBareBearsTrippleTrip.BearType.Grizzly;
            }
            isIceBear() {
                return this.bearType === WeBareBearsTrippleTrip.BearType.IceBear;
            }
            static createIceBear(bearStack) {
                let bear = new Bear(bearStack.game, 0, 0, Funday.WeBearBears.SpriteLibrary.tiles.icebear_walk_01.key);
                bear.setBearType(WeBareBearsTrippleTrip.BearType.IceBear);
                bear.anchor.setTo(.5, .85);
                bearStack.addChild(bear);
                let animationFrameRate = Bear.frameRate;
                let idleAnimationFrameNames = [Funday.WeBearBears.SpriteLibrary.tiles.iceberg_idle01.frame,
                    Funday.WeBearBears.SpriteLibrary.tiles.iceberg_idle02.frame,
                    Funday.WeBearBears.SpriteLibrary.tiles.iceberg_idle03.frame];
                bear.animations.add(BearAnimationKey.Idle, idleAnimationFrameNames, animationFrameRate, true);
                let walkAnimationFrameNames = [Funday.WeBearBears.SpriteLibrary.tiles.icebear_walk_01.frame,
                    Funday.WeBearBears.SpriteLibrary.tiles.icebear_walk_02.frame,
                    Funday.WeBearBears.SpriteLibrary.tiles.icebear_walk_03.frame,
                    Funday.WeBearBears.SpriteLibrary.tiles.icebear_walk_04.frame,
                    Funday.WeBearBears.SpriteLibrary.tiles.icebear_walk_05.frame,
                    Funday.WeBearBears.SpriteLibrary.tiles.icebear_walk_06.frame];
                bear.animations.add(BearAnimationKey.Walk, walkAnimationFrameNames, animationFrameRate, true);
                let bearDownAnimationFrameNames = [Funday.WeBearBears.SpriteLibrary.tiles.iceberg_falling01.frame,
                    Funday.WeBearBears.SpriteLibrary.tiles.iceberg_falling01.frame,
                    Funday.WeBearBears.SpriteLibrary.tiles.iceberg_falling02.frame,
                    Funday.WeBearBears.SpriteLibrary.tiles.iceberg_falling03.frame,
                    Funday.WeBearBears.SpriteLibrary.tiles.iceberg_falling04.frame,
                    Funday.WeBearBears.SpriteLibrary.tiles.iceberg_falling05.frame,
                    Funday.WeBearBears.SpriteLibrary.tiles.iceberg_falling06.frame,
                    Funday.WeBearBears.SpriteLibrary.tiles.iceberg_falling07.frame,
                    Funday.WeBearBears.SpriteLibrary.tiles.iceberg_falling08.frame];
                bear.animations.add(BearAnimationKey.Fall, bearDownAnimationFrameNames, animationFrameRate, false);
                let timberRideFrameNames = [Funday.WeBearBears.SpriteLibrary.tiles.timber_iceberg_anim01.frame,
                    Funday.WeBearBears.SpriteLibrary.tiles.timber_iceberg_anim02.frame,
                    Funday.WeBearBears.SpriteLibrary.tiles.timber_iceberg_anim03.frame,
                    Funday.WeBearBears.SpriteLibrary.tiles.timber_iceberg_anim04.frame];
                bear.animations.add(BearAnimationKey.RideOnTimber, timberRideFrameNames, animationFrameRate, true);
                bear.animations.play(BearAnimationKey.Idle);
                let game = bearStack.game;
                let helmet = game.createSprite(0, 0, Funday.WeBearBears.SpriteLibrary.tiles.helmet_iceberg_anim01);
                let helmetAnims = [
                    Funday.WeBearBears.SpriteLibrary.tiles.helmet_iceberg_anim01.frame,
                    Funday.WeBearBears.SpriteLibrary.tiles.helmet_iceberg_anim02.frame,
                    Funday.WeBearBears.SpriteLibrary.tiles.helmet_iceberg_anim03.frame,
                    Funday.WeBearBears.SpriteLibrary.tiles.helmet_iceberg_anim04.frame,
                    Funday.WeBearBears.SpriteLibrary.tiles.helmet_iceberg_anim05.frame,
                    Funday.WeBearBears.SpriteLibrary.tiles.helmet_iceberg_anim06.frame
                ];
                helmet.animations.add(BearAnimationKey.Walk, helmetAnims, animationFrameRate, true);
                bear.helmet = helmet;
                helmet.anchor.setTo(.5, .85);
                bear.addChild(helmet);
                bear.helmet.visible = false;
                bear.animations.getAnimation(BearAnimationKey.Walk).onStart.add(bear.onBearWalkAnimationStarted, bear);
                return bear;
            }
            onBearWalkAnimationStarted() {
                if (this.helmet) {
                    this.helmet.animations.currentAnim.stop();
                    this.helmet.animations.play(BearAnimationKey.Idle, this.animations.currentAnim.speed, true);
                }
            }
            syncHelmentAnimation() {
                this.animations.currentAnim.restart();
                this.helmet.animations.currentAnim.restart();
            }
            static createPanda(bearStack) {
                let bear = new Bear(bearStack.game, 0, 0, Funday.WeBearBears.SpriteLibrary.tiles.panda_walk_01.key);
                bear.setBearType(WeBareBearsTrippleTrip.BearType.Panda);
                bear.anchor.setTo(.5, .85);
                bearStack.addChild(bear);
                let animationFrameRate = Bear.frameRate;
                let idleAnimationFrameNames = [Funday.WeBearBears.SpriteLibrary.tiles.panda_idle01.frame,
                    Funday.WeBearBears.SpriteLibrary.tiles.panda_idle02.frame,
                    Funday.WeBearBears.SpriteLibrary.tiles.panda_idle03.frame];
                bear.animations.add(BearAnimationKey.Idle, idleAnimationFrameNames, animationFrameRate, true);
                let walkAnimationFrameNames = [Funday.WeBearBears.SpriteLibrary.tiles.panda_walk_01.frame,
                    Funday.WeBearBears.SpriteLibrary.tiles.panda_walk_02.frame,
                    Funday.WeBearBears.SpriteLibrary.tiles.panda_walk_03.frame,
                    Funday.WeBearBears.SpriteLibrary.tiles.panda_walk_04.frame,
                    Funday.WeBearBears.SpriteLibrary.tiles.panda_walk_05.frame,
                    Funday.WeBearBears.SpriteLibrary.tiles.panda_walk_06.frame];
                bear.animations.add(BearAnimationKey.Walk, walkAnimationFrameNames, animationFrameRate, true);
                let fallAnimFrameNames = [Funday.WeBearBears.SpriteLibrary.tiles.panda_fall_anim01.frame,
                    Funday.WeBearBears.SpriteLibrary.tiles.panda_fall_anim02.frame,
                    Funday.WeBearBears.SpriteLibrary.tiles.panda_fall_anim03.frame,
                    Funday.WeBearBears.SpriteLibrary.tiles.panda_fall_anim04.frame,
                    Funday.WeBearBears.SpriteLibrary.tiles.panda_fall_anim05.frame,
                    Funday.WeBearBears.SpriteLibrary.tiles.panda_fall_anim06.frame,
                    Funday.WeBearBears.SpriteLibrary.tiles.panda_fall_anim07.frame,
                    Funday.WeBearBears.SpriteLibrary.tiles.panda_fall_anim08.frame];
                bear.animations.add(BearAnimationKey.Fall, fallAnimFrameNames, Bear.frameRate, false);
                let reviveAnimationFrames = [Funday.WeBearBears.SpriteLibrary.tiles.panda_jump_anim01.frame,
                    Funday.WeBearBears.SpriteLibrary.tiles.panda_jump_anim02.frame,
                    Funday.WeBearBears.SpriteLibrary.tiles.panda_jump_anim03.frame,
                    Funday.WeBearBears.SpriteLibrary.tiles.panda_jump_anim04.frame,
                    Funday.WeBearBears.SpriteLibrary.tiles.panda_jump_anim05.frame,
                    Funday.WeBearBears.SpriteLibrary.tiles.panda_jump_anim06.frame,
                    Funday.WeBearBears.SpriteLibrary.tiles.panda_jump_anim07.frame,
                    Funday.WeBearBears.SpriteLibrary.tiles.panda_jump_anim08.frame,
                    Funday.WeBearBears.SpriteLibrary.tiles.panda_jump_anim09.frame];
                bear.animations.add(BearAnimationKey.Revive, reviveAnimationFrames, Bear.frameRate, false);
                let pandaReviveAnimationFrames1 = [Funday.WeBearBears.SpriteLibrary.tiles.panda_jump_anim01.frame,
                    Funday.WeBearBears.SpriteLibrary.tiles.panda_jump_anim02.frame,
                    Funday.WeBearBears.SpriteLibrary.tiles.panda_jump_anim03.frame,
                    Funday.WeBearBears.SpriteLibrary.tiles.panda_jump_anim04.frame];
                bear.animations.add(BearAnimationKey.PandaRevive1, pandaReviveAnimationFrames1, Bear.frameRate, false);
                let pandaReviveAnimationFrames2 = [Funday.WeBearBears.SpriteLibrary.tiles.panda_jump_anim05.frame,
                    Funday.WeBearBears.SpriteLibrary.tiles.panda_jump_anim06.frame,
                    Funday.WeBearBears.SpriteLibrary.tiles.panda_jump_anim07.frame,
                    Funday.WeBearBears.SpriteLibrary.tiles.panda_jump_anim08.frame,
                    Funday.WeBearBears.SpriteLibrary.tiles.panda_jump_anim09.frame];
                bear.animations.add(BearAnimationKey.PandaRevive2, pandaReviveAnimationFrames2, Bear.frameRate, false);
                let timberRideFrameNames = [Funday.WeBearBears.SpriteLibrary.tiles.timber_panda_anim01.frame,
                    Funday.WeBearBears.SpriteLibrary.tiles.timber_panda_anim02.frame,
                    Funday.WeBearBears.SpriteLibrary.tiles.timber_panda_anim03.frame,
                    Funday.WeBearBears.SpriteLibrary.tiles.timber_panda_anim04.frame];
                bear.animations.add(BearAnimationKey.RideOnTimber, timberRideFrameNames, animationFrameRate, true);
                bear.animations.play(BearAnimationKey.Idle);
                let game = bearStack.game;
                let helmet = game.createSprite(0, 0, Funday.WeBearBears.SpriteLibrary.tiles.helmet_panda_anim01);
                let helmetAnims = [
                    Funday.WeBearBears.SpriteLibrary.tiles.helmet_panda_anim01.frame,
                    Funday.WeBearBears.SpriteLibrary.tiles.helmet_panda_anim02.frame,
                    Funday.WeBearBears.SpriteLibrary.tiles.helmet_panda_anim03.frame,
                    Funday.WeBearBears.SpriteLibrary.tiles.helmet_panda_anim04.frame,
                    Funday.WeBearBears.SpriteLibrary.tiles.helmet_panda_anim05.frame,
                    Funday.WeBearBears.SpriteLibrary.tiles.helmet_panda_anim06.frame
                ];
                helmet.animations.add(BearAnimationKey.Walk, helmetAnims, animationFrameRate, true);
                bear.helmet = helmet;
                helmet.anchor.setTo(.5, .85);
                bear.addChild(helmet);
                bear.helmet.visible = false;
                bear.animations.getAnimation(BearAnimationKey.Walk).onStart.add(bear.onBearWalkAnimationStarted, this);
                return bear;
            }
            static createGrizzly(bearStack) {
                let bear = new Bear(bearStack.game, 0, 0, Funday.WeBearBears.SpriteLibrary.tiles.grizzly_walk_01.key);
                bear.setBearType(WeBareBearsTrippleTrip.BearType.Grizzly);
                bear.anchor.setTo(.5, .85);
                bearStack.addChild(bear);
                let animationFrameRate = Bear.frameRate;
                let idleAnimationFrameNames = [Funday.WeBearBears.SpriteLibrary.tiles.grizz_idle01.frame,
                    Funday.WeBearBears.SpriteLibrary.tiles.grizz_idle02.frame,
                    Funday.WeBearBears.SpriteLibrary.tiles.grizz_idle03.frame];
                bear.animations.add(BearAnimationKey.Idle, idleAnimationFrameNames, animationFrameRate, true);
                let walkAnimationFrameNames = [Funday.WeBearBears.SpriteLibrary.tiles.grizzly_walk_01.frame,
                    Funday.WeBearBears.SpriteLibrary.tiles.grizzly_walk_02.frame,
                    Funday.WeBearBears.SpriteLibrary.tiles.grizzly_walk_03.frame,
                    Funday.WeBearBears.SpriteLibrary.tiles.grizzly_walk_04.frame,
                    Funday.WeBearBears.SpriteLibrary.tiles.grizzly_walk_05.frame,
                    Funday.WeBearBears.SpriteLibrary.tiles.grizzly_walk_06.frame];
                bear.animations.add(BearAnimationKey.Walk, walkAnimationFrameNames, animationFrameRate, true);
                let fallAnimFrameNames = [Funday.WeBearBears.SpriteLibrary.tiles.grizz_fall01.frame,
                    Funday.WeBearBears.SpriteLibrary.tiles.grizz_fall02.frame,
                    Funday.WeBearBears.SpriteLibrary.tiles.grizz_fall03.frame,
                    Funday.WeBearBears.SpriteLibrary.tiles.grizz_fall04.frame,
                    Funday.WeBearBears.SpriteLibrary.tiles.grizz_fall05.frame,
                    Funday.WeBearBears.SpriteLibrary.tiles.grizz_fall06.frame,
                    Funday.WeBearBears.SpriteLibrary.tiles.grizz_fall07.frame,
                    Funday.WeBearBears.SpriteLibrary.tiles.grizz_fall08.frame,
                    Funday.WeBearBears.SpriteLibrary.tiles.grizz_fall09.frame];
                bear.animations.add(BearAnimationKey.Fall, fallAnimFrameNames, Bear.frameRate, false);
                let reviveAnimationFrames = [Funday.WeBearBears.SpriteLibrary.tiles.grizz_jump_anim01.frame,
                    Funday.WeBearBears.SpriteLibrary.tiles.grizz_jump_anim02.frame,
                    Funday.WeBearBears.SpriteLibrary.tiles.grizz_jump_anim03.frame,
                    Funday.WeBearBears.SpriteLibrary.tiles.grizz_jump_anim04.frame,
                    Funday.WeBearBears.SpriteLibrary.tiles.grizz_jump_anim05.frame,
                    Funday.WeBearBears.SpriteLibrary.tiles.grizz_jump_anim06.frame,
                    Funday.WeBearBears.SpriteLibrary.tiles.grizz_jump_anim07.frame,
                    Funday.WeBearBears.SpriteLibrary.tiles.grizz_jump_anim08.frame,
                    Funday.WeBearBears.SpriteLibrary.tiles.grizz_jump_anim09.frame];
                bear.animations.add(BearAnimationKey.Revive, reviveAnimationFrames, Bear.frameRate, false);
                let timberRideFrameNames = [Funday.WeBearBears.SpriteLibrary.tiles.timber_grizz_anim01.frame,
                    Funday.WeBearBears.SpriteLibrary.tiles.timber_grizz_anim02.frame,
                    Funday.WeBearBears.SpriteLibrary.tiles.timber_grizz_anim03.frame,
                    Funday.WeBearBears.SpriteLibrary.tiles.timber_grizz_anim04.frame];
                bear.animations.add(BearAnimationKey.RideOnTimber, timberRideFrameNames, animationFrameRate, true);
                bear.animations.play(BearAnimationKey.Idle);
                let game = bearStack.game;
                let helmet = game.createSprite(0, 0, Funday.WeBearBears.SpriteLibrary.tiles.helmet_grizz_anim01);
                let helmetAnims = [
                    Funday.WeBearBears.SpriteLibrary.tiles.helmet_grizz_anim01.frame,
                    Funday.WeBearBears.SpriteLibrary.tiles.helmet_grizz_anim02.frame,
                    Funday.WeBearBears.SpriteLibrary.tiles.helmet_grizz_anim03.frame,
                    Funday.WeBearBears.SpriteLibrary.tiles.helmet_grizz_anim04.frame,
                    Funday.WeBearBears.SpriteLibrary.tiles.helmet_grizz_anim05.frame,
                    Funday.WeBearBears.SpriteLibrary.tiles.helmet_grizz_anim06.frame
                ];
                helmet.animations.add(BearAnimationKey.Walk, helmetAnims, animationFrameRate, true);
                bear.helmet = helmet;
                helmet.anchor.setTo(.5, .85);
                bear.addChild(helmet);
                bear.helmet.visible = false;
                bear.animations.getAnimation(BearAnimationKey.Walk).onStart.add(bear.onBearWalkAnimationStarted, this);
                return bear;
            }
        }
        Bear.frameRate = 4;
        WeBareBearsTrippleTrip.Bear = Bear;
        class BearAnimationKey {
        }
        BearAnimationKey.Idle = "idle";
        BearAnimationKey.Walk = "walk";
        BearAnimationKey.Hit = "hit";
        BearAnimationKey.Fall = "fall";
        BearAnimationKey.Revive = "revive";
        BearAnimationKey.PandaRevive1 = "panda revive 1";
        BearAnimationKey.PandaRevive2 = "panda revive 2";
        BearAnimationKey.Death = "death";
        BearAnimationKey.RideOnTimber = "ride on timber";
        WeBareBearsTrippleTrip.BearAnimationKey = BearAnimationKey;
    })(WeBareBearsTrippleTrip = Funday.WeBareBearsTrippleTrip || (Funday.WeBareBearsTrippleTrip = {}));
})(Funday || (Funday = {}));
var Funday;
(function (Funday) {
    var WeBareBearsTrippleTrip;
    (function (WeBareBearsTrippleTrip) {
        class BearStack extends Phaser.Group {
            constructor(game, parent) {
                super(game, parent, "Bear Stack");
                this.killOrder = [WeBareBearsTrippleTrip.BearType.Grizzly, WeBareBearsTrippleTrip.BearType.Panda, WeBareBearsTrippleTrip.BearType.IceBear];
                this.reviveOrder = [WeBareBearsTrippleTrip.BearType.IceBear, WeBareBearsTrippleTrip.BearType.Panda, WeBareBearsTrippleTrip.BearType.Grizzly];
                this.bears = new WeBareBearsTrippleTrip.EnumMap();
                this.currentTile = null;
                this.movementInfo = new MovementInfo();
                this.currentMoveAnimation = null;
                this.stepCoolDownMs = 500;
                this.lastStepTime = 0;
                this.stepOffset = 0;
                this.currentHalfTileMovementDurationMs = 600;
                this.halfTileWarpDurationMs = 150;
                this.debugBearWasJustDowned = false;
                this.hasHelmets = false;
                this.cameraFollowPoint = null;
                this.warpCameraFollowPoint = null;
                this.onWarpCompleted = new Phaser.Signal();
                this.isBearFallingOffStack = false;
                this.campLerpTween = null;
                this.cameraHasLookedBackwards = false;
                this.camTween = null;
                this.createBears();
                let cameraFollowPoint = game.add.sprite();
                let iceBear = this.bears[WeBareBearsTrippleTrip.BearType.IceBear];
                iceBear.addChild(cameraFollowPoint);
                this.cameraFollowPoint = cameraFollowPoint;
                let warpCameraFollowPoint = game.add.sprite();
                iceBear.addChild(warpCameraFollowPoint);
                warpCameraFollowPoint.position.x = game.getFrameData(Funday.WeBearBears.SpriteLibrary.tiles.ground_light).width * 1.5;
                this.warpCameraFollowPoint = warpCameraFollowPoint;
            }
            setCameraToFollow() {
                this.centerPathInCamera();
            }
            smoothLerpCamera() {
                if (this.campLerpTween) {
                    this.campLerpTween.stop();
                }
                let game = this.game;
                let cam = game.camera;
                let animationFactory = game.services.animation;
                let lerpTargetX = 0.075;
                cam.lerp.x = 0;
                let camTween = animationFactory.tween(cam.lerp, { x: lerpTargetX }, 3000);
                let delay = animationFactory.delay(10);
                let queue = animationFactory.queue([delay, camTween]);
                this.campLerpTween = queue;
                this.campLerpTween.play();
            }
            shouldLookBack() {
                let shouldLookBack = false;
                let lookAheadCount = 10;
                let grid = this.currentTile.grid;
                let tilePath = grid.getSubPath(this.currentTile);
                let minI = this.currentTile.location.i - 3;
                for (let index = 0; index < tilePath.length && index < lookAheadCount; index++) {
                    const tile = tilePath[index];
                    if (tile.location.i <= minI) {
                        shouldLookBack = true;
                        break;
                    }
                }
                return shouldLookBack;
            }
            getDeadZone() {
                let game = this.game;
                let cam = this.game.camera;
                let deadzone = null;
                let tileData = game.getFrameData(Funday.WeBearBears.SpriteLibrary.tiles.ground_light);
                deadzone = new Phaser.Rectangle(tileData.width * .5, 0, tileData.width, cam.height);
                if (this.scale.x < 0) {
                    let shouldLookBack = this.shouldLookBack();
                    if (shouldLookBack) {
                        deadzone = new Phaser.Rectangle(cam.width - (2 * tileData.width), 0, tileData.width, cam.height);
                        if (!this.cameraHasLookedBackwards) {
                            this.smoothLerpCamera();
                        }
                        this.cameraHasLookedBackwards = true;
                    }
                }
                else {
                    if (this.cameraHasLookedBackwards) {
                        this.smoothLerpCamera();
                    }
                    this.cameraHasLookedBackwards = false;
                }
                return deadzone;
            }
            clear() {
                let game = this.game;
                this.currentHalfTileMovementDurationMs = game.screenManager.screens.core.levelControl.bearSpeedSettings.startHalfTileWalkDurationMs;
                this.reviveAllBears();
                this.playSpriteAnimation(WeBareBearsTrippleTrip.BearAnimationKey.Idle);
                this.scale.x = 1;
                this.cameraHasLookedBackwards = false;
                this.parent.removeChild(this);
                this.stepOffset = 0;
            }
            clearCurrentWalkAnimation() {
                if (this.currentMoveAnimation) {
                    this.currentMoveAnimation.stop();
                    this.currentMoveAnimation = null;
                }
            }
            createBears() {
                let icebear = WeBareBearsTrippleTrip.Bear.createIceBear(this);
                let panda = WeBareBearsTrippleTrip.Bear.createPanda(this);
                let grizzly = WeBareBearsTrippleTrip.Bear.createGrizzly(this);
                this.bears[WeBareBearsTrippleTrip.BearType.IceBear] = icebear;
                this.bears[WeBareBearsTrippleTrip.BearType.Panda] = panda;
                this.bears[WeBareBearsTrippleTrip.BearType.Grizzly] = grizzly;
            }
            playSpriteAnimation(key, fps) {
                fps = fps || WeBareBearsTrippleTrip.Bear.frameRate;
                for (let index = 0; index < this.children.length; index++) {
                    const bear = this.children[index];
                    bear.animations.play(key, fps);
                    if (bear.helmet && bear.helmet.animations.getAnimation(key)) {
                        bear.helmet.animations.play(key, fps);
                    }
                }
            }
            getBearByType(bearType) {
                return this.bears[bearType];
            }
            getTopBear() {
                return this.getNextBearToKill();
            }
            getNextBearToKill() {
                let bearTypeToKill = this.killOrder[this.countDead()];
                let bear = this.getBearByType(bearTypeToKill);
                return bear;
            }
            killNextBear() {
                let bear = this.getNextBearToKill();
                if (bear) {
                    bear.kill();
                }
                else {
                    throw "Bear not found!";
                }
            }
            playReviveSoundForBear(bearType) {
                let game = this.game;
                game.repositories.sound.onBearStackReviveBear(bearType);
            }
            getNextBearToRevive() {
                let bearTypeToRevive = this.reviveOrder[this.countLiving()];
                let bear = this.getBearByType(bearTypeToRevive);
                return bear;
            }
            reviveNextBear() {
                let levelControl = this.currentTile.grid.gridManager.coreScreen.levelControl;
                let bear = this.getNextBearToRevive();
                if (bear) {
                    this.playReviveSoundForBear(bear.getBearType());
                    bear.revive();
                    levelControl.onBearRevived();
                }
                else {
                    throw "Bear not found!";
                }
            }
            createReviveNextBearAnimation() {
                console.log("createReviveNextBearAnimation");
                let game = this.game;
                let animationFactory = game.services.animation;
                let bear = this.getNextBearToRevive();
                let anim = null;
                if (bear.getBearType() === WeBareBearsTrippleTrip.BearType.Panda) {
                    let spriteAnim1 = animationFactory.sprite(bear, WeBareBearsTrippleTrip.BearAnimationKey.PandaRevive1, (1000 / 9) * 4);
                    spriteAnim1.onPlay.add(this.playIdleAnimationForLivingBears, this);
                    spriteAnim1.onPlay.add(this.reviveNextBear, this);
                    spriteAnim1.onPlay.add(bear.bringToBackOfStack, bear);
                    spriteAnim1.onComplete.add(bear.bringToDefaultZPosInStack, bear);
                    let delay = animationFactory.delay(100);
                    let flash = animationFactory.fadeFromWhite(100);
                    let spriteAnim2 = animationFactory.sprite(bear, WeBareBearsTrippleTrip.BearAnimationKey.PandaRevive2, (1000 / 9) * 5);
                    anim = animationFactory.queue([spriteAnim1, flash, delay, spriteAnim2]);
                }
                else {
                    let spriteAnim = animationFactory.sprite(bear, WeBareBearsTrippleTrip.BearAnimationKey.Revive, 1000);
                    spriteAnim.onPlay.add(this.playIdleAnimationForLivingBears, this);
                    spriteAnim.onPlay.add(this.reviveNextBear, this);
                    spriteAnim.onPlay.add(bear.bringToBackOfStack, bear);
                    spriteAnim.onComplete.add(bear.bringToDefaultZPosInStack, bear);
                    anim = spriteAnim;
                }
                if (this.hasHelmets) {
                    let oldHelmet = this.getNextBearToKill().helmet;
                    let newHelmet = this.getNextBearToRevive().helmet;
                    anim.onPlay.add(function () { oldHelmet.visible = false; });
                    anim.onComplete.add(function () { newHelmet.visible = true; });
                }
                return anim;
            }
            playIdleAnimationForLivingBears() {
                this.forEachAlive(function (bear) {
                    bear.animations.play(WeBareBearsTrippleTrip.BearAnimationKey.Idle);
                });
            }
            getNextRevivableBearType() {
                return this.reviveOrder[this.countLiving()];
            }
            reviveAllBears() {
                this.bears[WeBareBearsTrippleTrip.BearType.Grizzly].revive();
                this.bears[WeBareBearsTrippleTrip.BearType.Panda].revive();
                this.bears[WeBareBearsTrippleTrip.BearType.IceBear].revive();
            }
            isBearDead(bearType) {
                return !this.bears[bearType].alive;
            }
            restartAfterRevive() {
                console.log("Restart3");
                this.restartTile();
            }
            startWalking() {
                console.log("Start Walking");
                this.playWalkAnimation();
                let game = this.game;
                let animationFactory = game.services.animation;
                this.setCameraToFollow();
                this.smoothLerpCamera();
                this.currentHalfTileMovementDurationMs = game.screenManager.screens.core.levelControl.bearSpeedSettings.startHalfTileWalkDurationMs;
                this.movementInfo.exitDirection = this.currentTile.pathNode.connections[0].directionB;
                let targetPosition = this.currentTile.getEdgePosition(this.movementInfo.exitDirection);
                let tween = animationFactory.tween(this, targetPosition, this.currentHalfTileMovementDurationMs);
                let nextTile = this.getNextTile();
                tween.addOnUpdateCallback(this.onWalk, this);
                tween.onComplete.add(this.onTileEdgeReached, this);
                tween.play();
                this.currentMoveAnimation = tween;
            }
            onWalk() {
                if (this.lastStepTime + this.stepCoolDownMs <= this.game.time.time) {
                    this.lastStepTime = this.game.time.time;
                    this.game.repositories.sound.onBearsWalk();
                }
            }
            stopCameraFollowingBears() {
                if (this.camTween) {
                    this.camTween.stop();
                }
            }
            centerPathInCamera() {
                let count = 6;
                let tiles = [];
                let currentTile = this.currentTile;
                let currentGrid = currentTile.grid;
                let startIndex = currentGrid.tilesVisitedByBearStack;
                for (let index = startIndex; index < currentGrid.path.length && tiles.length < count; index++) {
                    const tile = currentGrid.getTileAtLocation(currentGrid.path[index].tileLocation);
                    if (true || tiles.indexOf(tile) === -1) {
                        tiles.push(tile);
                    }
                }
                let nextGrid = currentGrid.gridManager.nextGrid;
                for (let index = 0; index < nextGrid.path.length && tiles.length < count; index++) {
                    const tile = nextGrid.getTileAtLocation(nextGrid.path[index].tileLocation);
                    if (true || tiles.indexOf(tile) === -1) {
                        tiles.push(tile);
                    }
                }
                let sumX = 0;
                for (let index = 0; index < tiles.length; index++) {
                    const tile = tiles[index];
                    sumX += tile.worldPosition.x;
                }
                let avgX = (sumX / tiles.length);
                let targetX = (this.game.camera.view.x + avgX) - this.game.camera.view.halfWidth;
                let game = this.game;
                let animationFactory = game.services.animation;
                if (this.camTween) {
                    this.camTween.stop();
                }
                this.camTween = animationFactory.tween(game.camera, { x: targetX }, this.currentHalfTileMovementDurationMs * 3, Phaser.Easing.Linear.None);
                this.camTween.play();
            }
            onTileEdgeReached() {
                let newTileEntryDirection = WeBareBearsTrippleTrip.DirectionUtils.getOppositeDirection(this.movementInfo.exitDirection);
                let nextTile = null;
                nextTile = this.getNextTile();
                if (nextTile.isRotatedCorrectly() && nextTile.hasConnection(newTileEntryDirection)) {
                    if (!nextTile.isLocked()) {
                        nextTile.setLocked(true);
                    }
                    if (nextTile.grid !== this.currentTile.grid) {
                        this.currentTile.grid.gridManager.transferToNextGrid(this);
                        this.movementInfo.entryDirection = this.currentTile.pathNode.connections[0].directionA;
                        this.movementInfo.exitDirection = this.currentTile.pathNode.connections[0].directionB;
                    }
                    this.movementInfo.entryDirection = newTileEntryDirection;
                    this.movementInfo.exitDirection = nextTile.getExitDirection(newTileEntryDirection);
                    let oldTile = this.currentTile;
                    this.setCurrentTile(nextTile);
                    this.centerPathInCamera();
                    let traverseTileAnimation = this.createTraverseTileAnimation();
                    traverseTileAnimation.onComplete.add(this.onTileEdgeReached, this);
                    traverseTileAnimation.play();
                    this.currentMoveAnimation = traverseTileAnimation;
                    this.currentTile.grid.gridManager.coreScreen.levelControl.onBearStackEnteredTile(this.currentTile);
                    this.currentTile.grid.tilesVisitedByBearStack++;
                }
                else {
                    if (this.hasHelmets) {
                        console.log("Restart1");
                        this.restartTile(true);
                    }
                    else if (this.countLiving() > 1) {
                        this.handleBearDown();
                    }
                    else {
                        this.handleAllBearsDown();
                    }
                }
            }
            handleHelmetTookHit() {
                let bear = this.getNextBearToKill();
                let helmet = bear.helmet;
                let game = this.game;
                let animationFactory = game.services.animation;
                let offset = -game.applyResolutionRatio(50);
                let tweenUpHelmet = animationFactory.tween(helmet.position, { y: offset }, 400);
                let alphaDownHelmet = animationFactory.tween(helmet, { alpha: 0 }, 400);
                let bundle = animationFactory.bundle([tweenUpHelmet, alphaDownHelmet]);
                this.hasHelmets = false;
                function reset() {
                    helmet.scale.setTo(1);
                    helmet.alpha = 1;
                    helmet.visible = false;
                    helmet.position.setTo(0);
                }
                bundle.onComplete.add(reset);
                bundle.play();
            }
            handleBearDown() {
                this.isBearFallingOffStack = true;
                this.stopCameraFollowingBears();
                let game = this.game;
                let bearType = this.getNextBearToKill().getBearType();
                this.debugBearWasJustDowned = true;
                game.repositories.sound.onBearDown();
                let knockbackAnim = this.createKnockBackToCenterAnimation();
                let fallOfStackAnim = this.createFallOfStackAnimation();
                fallOfStackAnim.onComplete.add(this.killBearAndReplaceWithDummy, this, 0, this.getNextBearToKill(), this.currentTile);
                let anims = [knockbackAnim,
                    fallOfStackAnim
                ];
                let animationFactory = game.services.animation;
                let queue = animationFactory.queue(anims);
                this.currentMoveAnimation = queue;
                window.queue = queue; //Daniel
                //queue.onComplete.add(this.testMe, this);
                queue.onComplete.add(this.restartTile, this);
                queue.onComplete.add(this.currentTile.grid.gridManager.onBearDown, this.currentTile.grid.gridManager);
                queue.play();
            }

            testMe()
            {
                console.log("Start Animation");
            }
            
            createKnockBackToCenterAnimation() {
                let game = this.game;
                let animationFactory = game.services.animation;
                let tweenBack = animationFactory.tween(this, this.currentTile.position, 200);
                return tweenBack;
            }
            createFallOfStackAnimation() {
                console.log("Create fall of stack animation");
                let game = this.game;
                let animationFactory = game.services.animation;
                let anims = [];
                let bear = this.getNextBearToKill();
                let bearType = bear.getBearType();
                let spriteAnim = animationFactory.sprite(bear, WeBareBearsTrippleTrip.BearAnimationKey.Fall, 1000);
                spriteAnim.onPlay.add(game.repositories.sound.onBearsHitEndOfRoad.bind(game.repositories.sound, bearType));
                anims.push(spriteAnim);
                if (this.currentTile.sittingGrizzly) {
                    let baseOffset = this.currentTile.ground.width * .5;
                    let isFacingWest = this.scale.x < 0;
                    let offsetX = isFacingWest ? baseOffset : -baseOffset;
                    let delay = animationFactory.delay(75);
                    let sittingGrizz = this.currentTile.sittingGrizzly;
                    let tween = animationFactory.tween(sittingGrizz.position, { x: sittingGrizz.position.x + offsetX }, 100, Phaser.Easing.Cubic.Out);
                    let queue = animationFactory.queue([delay, tween]);
                    anims.push(queue);
                }
                let delay = animationFactory.delay(1);
                delay.onComplete.add(function () {
                    console.log("Camera Shake3");
                    this.game.camera.shake(.004, 200, true, Phaser.Camera.SHAKE_HORIZONTAL, false);
                }, this);
                //anims.push(delay);
                let bundle = animationFactory.bundle(anims);
                bundle.onPlay.add(function () {
                    this.game.time.events.add(Phaser.Timer.SECOND * 0.5, this.shakeMyCamera, this);
                    
                    let bearsUnderFallingBearIdle = this.createIdleAnimationForBearsUnder(bear);
                    bearsUnderFallingBearIdle.play();
                }, this);
                
                return bundle;
            }
            shakeMyCamera()
            {
                this.game.camera.shake(.004, 200, true, Phaser.Camera.SHAKE_HORIZONTAL, false);
            }
            createIdleAnimationForBearsUnder(bear) {
                let game = this.game;
                let animationFactory = game.services.animation;
                let bearsUnder = this.getBearsUnder(bear);
                let anims = [];
                for (let index = 0; index < bearsUnder.length; index++) {
                    const b = bearsUnder[index];
                    let spriteIdle = animationFactory.spriteFps(b, WeBareBearsTrippleTrip.BearAnimationKey.Idle, WeBareBearsTrippleTrip.Bear.frameRate);
                    anims.push(spriteIdle);
                }
                return animationFactory.bundle(anims);
            }
            getBearsUnder(bear) {
                let bearsUnder = [];
                let endIndex = this.children.indexOf(bear);
                for (let index = endIndex - 1; index >= 0; index--) {
                    let underBear = this.children[index];
                    bearsUnder.push(underBear);
                }
                return bearsUnder;
            }
            playWalkAnimation() {
                //console.log("Play Walk Animation");
                let levelControl = this.game.screenManager.screens.core.levelControl;
                let fps = WeBareBearsTrippleTrip.Bear.frameRate * (levelControl.bearSpeedSettings.startHalfTileWalkDurationMs / this.currentHalfTileMovementDurationMs);
                this.forEach(function (bear) {
                    if (bear.animations.currentAnim.name === WeBareBearsTrippleTrip.BearAnimationKey.Walk) {
                        bear.animations.currentAnim.speed = fps;
                        bear.helmet.animations.currentAnim.speed = fps;
                    }
                    else {
                        bear.animations.play(WeBareBearsTrippleTrip.BearAnimationKey.Walk, fps, true);
                        bear.helmet.play(WeBareBearsTrippleTrip.BearAnimationKey.Walk, fps, true);
                    }
                }, this);
            }
            killBearAndReplaceWithDummy(bear, tile) {
                let game = this.game;
                let pool = game.repositories.pool;
                let bearType = bear.getBearType();
                let sittingBearSprite = pool.getSittingBear(bearType);
                sittingBearSprite.scale.x = this.scale.x;
                tile.addSittingDeadBearSprite(bearType, sittingBearSprite);
                let localPosition = sittingBearSprite.parent.toLocal(bear.position, bear.parent);
                sittingBearSprite.position.x = localPosition.x;
                sittingBearSprite.position.y = localPosition.y;
                bear.animations.play(WeBareBearsTrippleTrip.BearAnimationKey.Walk);
                this.update();
                bear.kill();
            }
            getLivingBears() {
                let livingBears = [];
                for (let index = 0; index < this.children.length; index++) {
                    const bear = this.children[index];
                    if (bear.alive) {
                        livingBears.push(bear);
                    }
                }
                return livingBears;
            }
            restartTile(removeHelmet) {
                console.log("Restart Tile");
                let game = this.game;
                let animationFactory = game.services.animation;
                let anims = [];
                if (Phaser.Math.distance(this.position.x, this.position.y, this.currentTile.x, this.currentTile.y) > game.applyResolutionRatio(5)) {
                    let tweenBack = animationFactory.tween(this, this.currentTile.position, 200);
                    tweenBack.onPlay.add(this.playWalkAnimation, this);
                    anims.push(tweenBack);
                }
                if (removeHelmet && this.hasHelmets) {
                    let prewait = animationFactory.delay(250);
                    prewait.onPlay.add(this.startIdleAnimationForLivingBears, this);
                    let afterWait = animationFactory.delay(1250);
                    afterWait.onPlay.add(this.handleHelmetTookHit, this);
                    let queue = animationFactory.queue([prewait, afterWait]);
                    anims.push(queue);
                }
                else {
                    let wait = animationFactory.delay(1500);
                    wait.onPlay.add(this.startIdleAnimationForLivingBears, this);
                    anims.push(wait);
                }
                let moveToNextTile = this.createExitTileAnimation();
                moveToNextTile.onPlay.add(this.playWalkAnimation, this);
                moveToNextTile.onPlay.add(function () { this.isBearFallingOffStack = false; }, this);
                moveToNextTile.onComplete.add(this.onTileEdgeReached, this);
                anims.push(moveToNextTile);
                let queue = animationFactory.queue(anims);
                queue.play();
                this.currentMoveAnimation = queue;
            }
            startIdleAnimationForLivingBears() {
                let bears = this.getLivingBears();
                for (let index = 0; index < bears.length; index++) {
                    const bear = bears[index];
                    bear.play(WeBareBearsTrippleTrip.BearAnimationKey.Idle);
                    bear.helmet.play(WeBareBearsTrippleTrip.BearAnimationKey.Idle);
                }
            }
            handleAllBearsDown() {
                if (this.currentMoveAnimation) {
                    this.currentMoveAnimation.stop();
                }
                let iceBear = this.getBearByType(WeBareBearsTrippleTrip.BearType.IceBear);
                let game = this.game;
                game.repositories.sound.onBearsHitEndOfRoadGameOver();
                let animationFactory = game.services.animation;
                let spriteAnimation = animationFactory.sprite(iceBear, WeBareBearsTrippleTrip.BearAnimationKey.Fall, 1000);
                spriteAnimation.onComplete.add(function () {
                    let ui = this.currentTile.grid.gridManager.coreScreen.ui;
                    ui.modalManager.showGameOver();
                }, this);
                spriteAnimation.play();
                let delay = animationFactory.delay(500);
                delay.onComplete.add(function () {
                    game.repositories.sound.onBearVoiceOverGameOver();
                });
                delay.play();
                let shakeDelay = animationFactory.delay(400);
                shakeDelay.onComplete.add(function () {
                    console.log("Camera Shake4");
                    game.camera.shake(.004, 200, true, Phaser.Camera.SHAKE_HORIZONTAL, false);
                });
                shakeDelay.play();
            }
            getNextTile() {
                let nextTile = null;
                if (this.currentTile.isEndTile()) {
                    nextTile = this.currentTile.grid.gridManager.nextGrid.startTile;
                }
                else {
                    nextTile = this.currentTile.getNeighbour(this.movementInfo.exitDirection);
                }
                return nextTile;
            }
            setToTile(tile) {
                this.setCurrentTile(tile);
                this.position.x = tile.position.x;
                this.position.y = tile.position.y;
            }
            updateBearings() {
                let grid = this.currentTile.grid;
                let pathToCurrentTile = grid.getConnectedPath(grid.startTile, WeBareBearsTrippleTrip.Direction.West);
                let currentTileIndex = pathToCurrentTile.indexOf(this.currentTile);
                if (currentTileIndex == 0) {
                    this.movementInfo.entryDirection = WeBareBearsTrippleTrip.Direction.West;
                    this.movementInfo.exitDirection = this.currentTile.getExitDirection(WeBareBearsTrippleTrip.Direction.West);
                }
                else {
                    let previousTile = pathToCurrentTile[currentTileIndex - 1];
                    let entryDirection = WeBareBearsTrippleTrip.DirectionUtils.getDirectionBetween(this.currentTile.location, previousTile.location);
                    this.movementInfo.entryDirection = entryDirection;
                    this.movementInfo.exitDirection = this.currentTile.getExitDirection(entryDirection);
                }
                this.currentTile.grid.tilesVisitedByBearStack = currentTileIndex;
            }
            setCurrentTile(tile) {
                this.currentTile = tile;
            }
            canEnterNextTile() {
                let nextNext = this.getNextTile();
                return this.canEnterTile(nextNext);
            }
            canEnterTile(tile) {
                let canEnterTile = false;
                if (tile) {
                    let newTileDirection = WeBareBearsTrippleTrip.DirectionUtils.getOppositeDirection(this.movementInfo.exitDirection);
                    canEnterTile = tile.canEnterFromDirection(newTileDirection);
                }
                return canEnterTile;
            }
            createTraverseTileAnimation() {
                let game = this.game;
                let animationFactory = game.services.animation;
                let moveToMiddle = this.createEnterTileAnimation();
                let moveToExit = this.createExitTileAnimation();
                moveToMiddle.onPlay.add(this.playWalkAnimation, this);
                return animationFactory.queue([moveToMiddle, moveToExit]);
            }
            shouldPickUpBearFromTile(tile) {
                return tile.hasBearPickUp() && tile.bearPickup.bearType === this.getNextRevivableBearType();
            }
            createEnterTileAnimation() {
                let game = this.game;
                let animationFactory = game.services.animation;
                let animation = null;
                if (this.shouldPickUpBearFromTile(this.currentTile)) {
                    let tween = animationFactory.tween(this, this.currentTile.position, this.currentHalfTileMovementDurationMs);
                    let reviveNextBearAnimation = this.createReviveNextBearAnimation();
                    tween.onComplete.add(this.currentTile.clearBearPickup, this.currentTile);
                    tween.addOnUpdateCallback(this.onWalk, this);
                    animation = animationFactory.queue([tween, reviveNextBearAnimation]);
                }
                else {
                    let tween = animationFactory.tween(this, this.currentTile.position, this.currentHalfTileMovementDurationMs);
                    animation = tween;
                    tween.addOnUpdateCallback(this.onWalk, this);
                }
                if (this.currentTile.coin) {
                    this.currentTile.coin.handlePickUpCoinFromTile(this.currentTile);
                }
                animation.onPlay.add(this.currentTile.grid.sortGameObjectsLayer.bind(this.currentTile.grid));
                animation.onComplete.add(this.currentTile.grid.sortGameObjectsLayer.bind(this.currentTile.grid));
                return animation;
            }
            startWarpingTilesAnimation(tilesToWarp, callback) {
                this.onWarpCompleted.addOnce(callback);
                let warpExit = this.createWarpExitAnimation();
                warpExit.onComplete.add(this.onWarpTileEdgeReached.bind(this, tilesToWarp));
                warpExit.play();
                this.parent.setChildIndex(this, this.parent.children.length - 1);
                this.currentMoveAnimation = warpExit;
            }
            createWarpTileAnimation(warpsRemaining) {
                let game = this.game;
                let animationFactory = game.services.animation;
                let moveToMiddle = this.createWarpEnterTileAnimation();
                let moveToExit = this.createWarpExitAnimation();
                moveToExit.onComplete.add(this.onWarpTileEdgeReached.bind(this, warpsRemaining));
                return animationFactory.queue([moveToMiddle, moveToExit]);
            }
            createWarpEnterTileAnimation() {
                let game = this.game;
                let animationFactory = game.services.animation;
                let tween = animationFactory.tween(this, { x: this.currentTile.position.x }, this.halfTileWarpDurationMs);
                return tween;
            }
            createWarpExitAnimation() {
                let game = this.game;
                let animationFactory = game.services.animation;
                let targetPosition = this.currentTile.getEdgePosition(WeBareBearsTrippleTrip.Direction.East);
                let tween = animationFactory.tween(this, { x: targetPosition.x }, this.halfTileWarpDurationMs);
                return tween;
            }
            onWarpTileEdgeReached(warpsRemaining) {
                --warpsRemaining;
                if (warpsRemaining > 0) {
                    let nextTile = null;
                    let nextGridTileLocation = new WeBareBearsTrippleTrip.TileLocation(this.currentTile.location.i + 1, this.currentTile.location.j);
                    nextTile = this.currentTile.grid.getTileAtLocation(nextGridTileLocation);
                    if (!nextTile) {
                        nextGridTileLocation.i = 0;
                        nextTile = this.currentTile.grid.gridManager.nextGrid.getTileAtLocation(nextGridTileLocation);
                    }
                    if (nextTile.grid !== this.currentTile.grid) {
                        this.currentTile.grid.gridManager.transferToNextGrid(this);
                        this.currentTile.grid.animatedSolvePath();
                    }
                    let oldTile = this.currentTile;
                    this.setCurrentTile(nextTile);
                    if (oldTile === this.currentTile) {
                    }
                    this.currentTile.grid.gridManager.coreScreen.levelControl.onBearStackEnteredTile(this.currentTile);
                    let warpAnim = this.createWarpTileAnimation(warpsRemaining);
                    warpAnim.play();
                    this.currentMoveAnimation = warpAnim;
                }
                else {
                    if (this.hasHelmets) {
                        let topBear = this.getNextBearToKill();
                        topBear.helmet.visible = true;
                    }
                    this.onWarpCompleted.dispatch();
                }
            }
            hideHelmetOnTopBearIfItHasOne() {
                if (this.hasHelmets) {
                    let bearWithHelmet = this.getNextBearToKill();
                    bearWithHelmet.helmet.visible = false;
                }
            }
            showHelmetOnTopBearIfItHasOne() {
                if (this.hasHelmets) {
                    let bearWithHelmet = this.getNextBearToKill();
                    bearWithHelmet.helmet.visible = true;
                }
            }
            getHasHelmets() {
                return this.hasHelmets;
            }
            setStepSpeedOffset() {
                this.stepOffset = this.currentTile.grid.gridManager.coreScreen.levelControl.tilesEntered;
                if (this.currentMoveAnimation) {
                    this.currentMoveAnimation.stop();
                    this.currentTile.grid.gridManager.coreScreen.levelControl.refreshBearSpeed();
                    console.log("Restart2");
                    this.restartTile();
                }
            }
            activateHelmets() {
                this.hasHelmets = true;
                this.addHelmetToTopBear();
            }
            addHelmetToTopBear() {
                let bear = this.getNextBearToKill();
                bear.helmet.visible = true;
                let game = this.game;
                game.repositories.sound.onHelmetAddedToBear();
                this.syncAllBearsHelmentAnimations();
            }
            addHelmetsToAllBears() {
                this.addHelmetToBear(WeBareBearsTrippleTrip.BearType.Grizzly);
                this.addHelmetToBear(WeBareBearsTrippleTrip.BearType.Panda);
                this.addHelmetToBear(WeBareBearsTrippleTrip.BearType.IceBear);
            }
            syncAllBearsHelmentAnimations() {
                this.bears[WeBareBearsTrippleTrip.BearType.Grizzly].syncHelmentAnimation();
                this.bears[WeBareBearsTrippleTrip.BearType.Panda].syncHelmentAnimation();
                this.bears[WeBareBearsTrippleTrip.BearType.IceBear].syncHelmentAnimation();
            }
            addHelmetToBear(bearType) {
                this.bears[bearType].helmet.visible = true;
            }
            removeHelmetFromBear(bearType) {
                this.bears[bearType].helmet.visible = false;
            }
            removeHelmetFromAllBears() {
                this.removeHelmetFromBear(WeBareBearsTrippleTrip.BearType.Grizzly);
                this.removeHelmetFromBear(WeBareBearsTrippleTrip.BearType.Panda);
                this.removeHelmetFromBear(WeBareBearsTrippleTrip.BearType.IceBear);
            }
            createExitTileAnimation() {
                let anim = null;
                let game = this.game;
                let animationFactory = game.services.animation;
                let targetPosition = this.currentTile.getEdgePosition(this.movementInfo.exitDirection);
                let tween = animationFactory.tween(this, targetPosition, this.currentHalfTileMovementDurationMs);
                tween.onPlay.add(this.playWalkAnimation, this);
                tween.onPlay.add(this.faceExitDirection, this);
                tween.addOnUpdateCallback(this.onWalk, this);
                if (this.willChangeBearing()) {
                    let delay = animationFactory.delay(10);
                    let queue = animationFactory.queue([delay, tween]);
                    anim = queue;
                }
                else {
                    anim = tween;
                }
                return anim;
            }
            willChangeBearing() {
                let willChangeBearing = false;
                if (this.movementInfo.exitDirection === WeBareBearsTrippleTrip.Direction.West) {
                    willChangeBearing = this.scale.x !== -1;
                }
                else if (this.movementInfo.exitDirection === WeBareBearsTrippleTrip.Direction.East) {
                    willChangeBearing = this.scale.x !== 1;
                }
                return willChangeBearing;
            }
            faceExitDirection() {
                let oldScaleX = this.scale.x;
                if (this.movementInfo.exitDirection === WeBareBearsTrippleTrip.Direction.West) {
                    this.scale.x = -1;
                }
                else if (this.movementInfo.exitDirection === WeBareBearsTrippleTrip.Direction.East) {
                    this.scale.x = 1;
                }
                if (oldScaleX !== this.scale.x) {
                }
            }
            pause() {
                console.log("BearStack Pause me",this.currentMoveAnimation)
                if (this.currentMoveAnimation) {
                    this.currentMoveAnimation.pause();
                }
            }
            resume() {
                
                if (this.currentMoveAnimation && this.currentMoveAnimation.isPaused()) {
                    this.currentMoveAnimation.play();
                    console.log("ResumeX",this.currentMoveAnimation);
                }
                if (!this.currentMoveAnimation) {
                    console.log("ResumeX: Walking");
                    this.startWalking();
                }
            }
            isWalkAnimationPaused() {
                return this.currentMoveAnimation && this.currentMoveAnimation.isPaused();
            }
        }
        BearStack.LOCK_CONNECTED_TILES = false;
        WeBareBearsTrippleTrip.BearStack = BearStack;
        class MovementInfo {
            constructor() {
                this.entryDirection = WeBareBearsTrippleTrip.Direction.West;
                this.exitDirection = WeBareBearsTrippleTrip.Direction.East;
            }
        }
    })(WeBareBearsTrippleTrip = Funday.WeBareBearsTrippleTrip || (Funday.WeBareBearsTrippleTrip = {}));
})(Funday || (Funday = {}));
var Funday;
(function (Funday) {
    var WeBareBearsTrippleTrip;
    (function (WeBareBearsTrippleTrip) {
        let BearType;
        (function (BearType) {
            BearType[BearType["IceBear"] = 0] = "IceBear";
            BearType[BearType["Panda"] = 1] = "Panda";
            BearType[BearType["Grizzly"] = 2] = "Grizzly";
        })(BearType = WeBareBearsTrippleTrip.BearType || (WeBareBearsTrippleTrip.BearType = {}));
    })(WeBareBearsTrippleTrip = Funday.WeBareBearsTrippleTrip || (Funday.WeBareBearsTrippleTrip = {}));
})(Funday || (Funday = {}));
var Funday;
(function (Funday) {
    var WeBareBearsTrippleTrip;
    (function (WeBareBearsTrippleTrip) {
        class Grid extends Phaser.Group {
            constructor(game, gridManager) {
                super(game);
                this.gridManager = null;
                this.gameObjectLayer = null;
                this.tileLayer = null;
                this.tiles = new Array();
                this.startTile = null;
                this.endTile = null;
                this.path = [];
                this.difficultyScore = 0;
                this.tilesRotated = 0;
                this.tilesVisitedByBearStack = 0;
                this.solveAnimation = null;
                this.gridManager = gridManager;
                this.tileLayer = game.add.group(this, "Tile Layer");
                this.gameObjectLayer = game.add.group(this, "Decoration Layer");
            }
            clear() {
                this.tilesRotated = 0;
                this.difficultyScore = 0;
                this.tilesVisitedByBearStack = 0;
                if (this.solveAnimation) {
                    this.solveAnimation.stop();
                    this.solveAnimation = null;
                }
                for (let j = 0; j < this.tiles.length; j++) {
                    for (let i = 0; i < this.tiles[j].length; i++) {
                        const tile = this.tiles[j][i];
                        tile.clear();
                    }
                }
                this.tiles.length = 0;
                this.path.length = 0;
                this.startTile = null;
                this.endTile = null;
            }
            inCamera() {
                for (let j = 0; j < this.tiles.length; j++) {
                    for (let i = 0; i < this.tiles[j].length; i++) {
                        const tile = this.tiles[j][i];
                        if (tile.ground.inCamera) {
                            return true;
                        }
                    }
                }
                return false;
            }
            init(map, ignorePickupPlacement) {
                let pathGenerator = new WeBareBearsTrippleTrip.PathGenerator();
                let count = 0;
                let horizontalCount = map.getHorizontalCount();
                let verticalCount = map.getVerticalCount();
                let game = this.game;
                let pools = game.repositories.pool;
                for (let j = 0; j < verticalCount; j++) {
                    this.tiles.push([]);
                    for (let i = 0; i < horizontalCount; i++) {
                        let tile = this.gridManager.getTileFromPool();
                        tile.init(this, i, j);
                        let isLightGround = (count + j) % 2 !== 0;
                        tile.setGroundTile(isLightGround);
                        this.tiles[j][i] = tile;
                        count++;
                    }
                }
                let groundSprite = this.tiles[0][0].ground;
                this.tileLayer.align(horizontalCount, verticalCount, groundSprite.width, groundSprite.height, Phaser.CENTER);
                for (let index = 0; index < map.pathNodes.length; index++) {
                    const pathNode = map.pathNodes[index];
                    let tile = this.getTileAtLocation(pathNode.tileLocation);
                    tile.setPathNode(pathNode);
                    this.path.push(pathNode.createDeepCopy());
                }
                this.startTile = this.getTileAtLocation(map.pathNodes[0].tileLocation);
                this.endTile = this.getTileAtLocation(map.pathNodes[map.pathNodes.length - 1].tileLocation);
                if (!ignorePickupPlacement) {
                    this.placePickups();
                }
                this.placeDecorations();
                this.bringToTop(this.gameObjectLayer);
                this.sortGameObjectsLayer();
                this.gridManager.totalPathTilesGenerated += this.path.length;
            }
            placePickups() {
                let levelControl = this.gridManager.coreScreen.levelControl;
                if (levelControl.hasPlacementOverridesForMap()) {
                    levelControl.applyPickupPlacementOverridesForMap(this);
                }
                else {
                    this.placeExtraLife();
                    this.placeHelpers();
                    this.placeCoins();
                }
            }
            addLevelOneDecorations() {
                let game = this.game;
                let pool = game.repositories.pool;
                this.getTile(2, 1).clearDectoration().addDecoration(pool.getDectoration(WeBareBearsTrippleTrip.DecorationType.StartAreaCorner)).scale.y = -1;
                this.getTile(3, 1).clearDectoration().addDecoration(pool.getDectoration(WeBareBearsTrippleTrip.DecorationType.StartAreaEdge)).scale.y = -1;
                this.getTile(4, 1).clearDectoration().addDecoration(pool.getDectoration(WeBareBearsTrippleTrip.DecorationType.StartAreaCorner)).scale.setTo(-1);
                this.getTile(2, 2).clearDectoration().addDecoration(pool.getDectoration(WeBareBearsTrippleTrip.DecorationType.StartAreaEdge)).angle = 90;
                this.getTile(3, 2).clearDectoration().addDecoration(pool.getDectoration(WeBareBearsTrippleTrip.DecorationType.StartAreaMiddle));
                this.getTile(4, 2).clearDectoration().addDecoration(pool.getDectoration(WeBareBearsTrippleTrip.DecorationType.StartAreaOppening));
                this.getTile(2, 3).clearDectoration().addDecoration(pool.getDectoration(WeBareBearsTrippleTrip.DecorationType.StartAreaCorner));
                this.getTile(3, 3).clearDectoration().addDecoration(pool.getDectoration(WeBareBearsTrippleTrip.DecorationType.StartAreaEdge));
                this.getTile(4, 3).clearDectoration().addDecoration(pool.getDectoration(WeBareBearsTrippleTrip.DecorationType.StartAreaCorner)).scale.x = -1;
                let middle = this.getTile(3, 2).decoration;
                middle.position.y -= middle.height / 2;
                let opening = this.getTile(4, 2).decoration;
                opening.position.y -= opening.height / 2;
            }
            placeExtraLife() {
                this.placeExtraLifeBearIfNeeded(WeBareBearsTrippleTrip.BearType.Panda);
                this.placeExtraLifeBearIfNeeded(WeBareBearsTrippleTrip.BearType.Grizzly);
            }
            getTilesThatCanHaveBearPickUps() {
                let startTile = this.startTile;
                let endTile = this.endTile;
                let tiles = this.getRoadTiles();
                tiles = tiles.filter(function (tile) { return tile.pathNode && tile.pathNode.isStraightHorizontal() && !tile.hasBearPickUp() && tile !== startTile; });
                return tiles;
            }
            placeExtraLifeBearIfNeeded(bearType) {
                let levelControl = this.gridManager.coreScreen.levelControl;
                let bearStack = this.gridManager.coreScreen.bearStack;
                if (levelControl.canPlaceExtraLife() && bearStack.isBearDead(bearType) && this.gridManager.isBearPickupAvailable(bearType)) {
                    let placementTiles = this.getTilesThatCanHaveBearPickUps();
                    let placementTile = placementTiles.shift();
                    if (placementTile) {
                        let bearPickup = this.gridManager.getBearPickup(bearType);
                        placementTile.addBearPickUp(bearPickup);
                        placementTile.setLocked(true);
                        bearPickup.parent.setChildIndex(bearPickup, bearPickup.parent.children.length - 1);
                        levelControl.onExtraLifePlaced();
                    }
                }
            }
            getTilesWithExtraLifeBears() {
                let tiles = [];
                let roadTiles = this.getRoadTiles();
                for (let index = 0; index < roadTiles.length; index++) {
                    const roadTile = roadTiles[index];
                    if (roadTile.hasBearPickUp()) {
                        tiles.push(roadTile);
                    }
                }
                return tiles;
            }
            countBearPickUps() {
                let count = 0;
                this.foreachTile(function (tile) {
                    if (tile.hasBearPickUp()) {
                        count++;
                    }
                });
                return count;
            }
            removeAllBearExtraLives() {
                this.foreachTile(function (tile) {
                    tile.clearBearPickup();
                });
            }
            removeSittingBears() {
                this.foreachTile(function (tile) {
                    tile.clearSittingBears();
                });
            }
            getTilesWithHorizontalRoads() {
                let tiles = [];
                this.foreachTile(function (tile) {
                    if (tile.pathNode && tile.pathNode.isStraightHorizontal()) {
                        tiles.push(tile);
                    }
                });
                return tiles;
            }
            placeHelpers() {
                let bearPickUpCount = this.countBearPickUps();
                if (bearPickUpCount == 0) {
                    let helpers = [WeBareBearsTrippleTrip.HelperType.Chloe, WeBareBearsTrippleTrip.HelperType.Charlie, WeBareBearsTrippleTrip.HelperType.Charlie, WeBareBearsTrippleTrip.HelperType.RangerTabes, WeBareBearsTrippleTrip.HelperType.RoboBear, WeBareBearsTrippleTrip.HelperType.Lucy, WeBareBearsTrippleTrip.HelperType.Timber];
                    let helpersToPickFrom = [];
                    for (let index = 0; index < helpers.length; index++) {
                        const helperType = helpers[index];
                        if (this.gridManager.isHelperAvailable(helperType)) {
                            helpersToPickFrom.push(helperType);
                        }
                    }
                    if (helpersToPickFrom.length === 0) {
                        helpersToPickFrom.push(WeBareBearsTrippleTrip.HelperType.None);
                    }
                    let helperToPlace = Phaser.ArrayUtils.getRandomItem(helpersToPickFrom);
                    if (helperToPlace !== WeBareBearsTrippleTrip.HelperType.None) {
                        this.placeHelper(helperToPlace);
                    }
                    let dropTable = new Funday.Utils.LootTable();
                    dropTable.addItem(1, 90);
                    dropTable.addItem(2, 9);
                    dropTable.addItem(3, 1);
                    let crateCount = dropTable.getRandomItem();
                    for (let index = 0; index < crateCount; index++) {
                        this.placeHelper(WeBareBearsTrippleTrip.HelperType.Crate);
                    }
                }
            }
            placeHelper(helperType) {
                if (this.gridManager.isHelperAvailable(helperType)) {
                    let helper = this.gridManager.getHelper(helperType);
                    if (helper.canBePlacedInGrid(this)) {
                        helper.placeInGrid(this);
                    }
                    else {
                        this.gridManager.returnHelperToPool(helper);
                    }
                }
            }
            forcePlaceHelperInTile(helperType, tile) {
                let helper = this.gridManager.getHelper(helperType);
                if (helper.tile) {
                    helper.tile.clearHelper();
                }
                helper.placeInTile(tile);
            }
            placeDecorations() {
                let tiles = this.getEmptyTiles();
                for (let index = 0; index < tiles.length; index++) {
                    const tile = tiles[index];
                    let decoration = this.getRandomDecoration();
                    if (decoration) {
                        tile.addDecoration(decoration);
                    }
                }
            }
            getRandomDecoration() {
                let game = this.game;
                let decoration = null;
                let frac = game.rnd.frac();
                let pool = game.repositories.pool;
                if (frac < .5) {
                    decoration = null;
                }
                else if (frac < .7) {
                    decoration = pool.getDectoration(WeBareBearsTrippleTrip.DecorationType.Tree);
                }
                else if (frac < .85) {
                    decoration = pool.getDectoration(WeBareBearsTrippleTrip.DecorationType.Bush);
                }
                else {
                    decoration = pool.getDectoration(WeBareBearsTrippleTrip.DecorationType.Rock);
                }
                return decoration;
            }
            placeCoins() {
                let game = this.game;
                let roadTiles = this.getUniqueRoadTiles();
                for (let index = 0; index < roadTiles.length; index++) {
                    let frac = game.rnd.frac();
                    if (frac > .8) {
                        const roadTile = roadTiles[index];
                        this.placeCoinOnTile(roadTile);
                    }
                }
            }
            placeCoinOnTile(tile) {
                let game = this.game;
                let pool = game.repositories.pool;
                let coin = pool.coinPickup.get();
                tile.addCoin(coin);
                return coin;
            }
            sortGameObjectsLayer() {
                this.gameObjectLayer.sort('y', Phaser.Group.SORT_ASCENDING);
            }
            getRoadTiles() {
                return this.getRoadTilesHelper(false);
            }
            getRoadTilesHelper(onlyAddUnique) {
                let roadTiles = [];
                for (let index = 0; index < this.path.length; index++) {
                    const pathNode = this.path[index];
                    let tile = this.getTileAtLocation(pathNode.tileLocation);
                    if (onlyAddUnique) {
                        if (roadTiles.indexOf(tile) === -1) {
                            roadTiles.push(tile);
                        }
                    }
                    else {
                        roadTiles.push(tile);
                    }
                }
                return roadTiles;
            }
            getUniqueRoadTiles() {
                return this.getRoadTilesHelper(true);
            }
            shuffleAll() {
                let game = this.game;
                let difficultyRepository = game.repositories.difficulty;
                let startTileGlobalIndex = this.gridManager.totalPathTilesGenerated - this.path.length;
                let difficultyScore = 0;
                for (let index = 0; index < this.path.length; index++) {
                    const pathNode = this.path[index];
                    let tile = this.getTileAtLocation(pathNode.tileLocation);
                    if (!tile.isLocked()) {
                        let tileScore = 0;
                        if (tile.pathNode.isStraight()) {
                            tile.rotateInstantly();
                            tileScore = 1;
                        }
                        else if (tile.pathNode.isCurve()) {
                            let dropTable = difficultyRepository.getRotationDifficultyForTilesTraversed(index + startTileGlobalIndex).dropTable;
                            let rotationCount = dropTable.getRandomItem();
                            tileScore = 4 - rotationCount;
                            while (rotationCount) {
                                tile.rotateInstantly();
                                rotationCount--;
                            }
                        }
                        else if (tile.pathNode.isCross()) {
                        }
                        difficultyScore += tileScore;
                    }
                }
                let bearStack = this.gridManager.coreScreen.bearStack;
                let gridDuration = bearStack.currentHalfTileMovementDurationMs * 2 * this.path.length;
                this.difficultyScore = difficultyScore;
            }
            refreshPathTiles() {
                for (let index = 0; index < this.path.length; index++) {
                    const pathElement = this.path[index];
                    let tile = this.getTileAtLocation(pathElement.tileLocation);
                    tile.refreshPathDecoration();
                }
            }
            centerShuffle(count) {
                let tiles = [];
                for (let index = 0; index < this.path.length; index++) {
                    const pathNode = this.path[index];
                    let tile = this.getTileAtLocation(pathNode.tileLocation);
                    if (tile !== this.startTile && tile !== this.endTile && !tile.isLocked()) {
                        tiles.push(tile);
                    }
                }
                count = Math.min(count, tiles.length);
                let offset = Math.floor(tiles.length / 2);
                for (let index = 0; index < count; index++) {
                    let i = (index + offset) % tiles.length;
                    const tile = tiles[i];
                    let rotationCount = this.game.rnd.integerInRange(0, 3);
                    while (rotationCount) {
                        tile.rotateInstantly();
                        rotationCount--;
                    }
                }
            }
            lockUnshuffled() {
                this.foreachTile(function (tile) {
                    if (tile.pathNode && tile.isRotatedCorrectly()) {
                        tile.setLocked(true);
                    }
                });
            }
            solvePath() {
                this.foreachTile(function (tile) {
                    if (tile.pathNode && !tile.isRotatedCorrectly()) {
                        tile.solve();
                    }
                });
            }
            animatedSolvePath() {
                let anims = [];
                let game = this.game;
                let animationFactory = game.services.animation;
                let pools = game.repositories.pool;
                for (let index = 0; index < this.path.length; index++) {
                    const pathElement = this.path[index];
                    let tile = this.getTileAtLocation(pathElement.tileLocation);
                    let subAnims = [];
                    if (index > 0) {
                        let delay = animationFactory.delay(index * 50);
                        subAnims.push(delay);
                    }
                    let solveAnim = animationFactory.delay(10);
                    solveAnim.onComplete.add(pools.addOverlay.bind(pools, tile, 500, Phaser.Easing.Quadratic.Out));
                    solveAnim.onComplete.add(tile.solve, tile);
                    subAnims.push(solveAnim);
                    let queue = animationFactory.queue(subAnims);
                    anims.push(queue);
                }
                let bundle = animationFactory.bundle(anims);
                this.solveAnimation = bundle;
                bundle.play();
            }
            getPathNodeOnPath(location) {
                let pathNode = null;
                for (let index = 0; index < this.path.length; index++) {
                    const node = this.path[index];
                    if (node.tileLocation.isEqualTo(location)) {
                        pathNode = node;
                        break;
                    }
                }
                return pathNode;
            }
            foreachTile(callback) {
                for (let j = 0; j < this.tiles.length; j++) {
                    for (let i = 0; i < this.tiles[0].length; i++) {
                        let tile = this.getTile(i, j);
                        callback(tile);
                    }
                }
            }
            getTileAtLocation(tileLocation) {
                return this.getTile(tileLocation.i, tileLocation.j);
            }
            getTile(i, j) {
                let tile = null;
                let row = this.tiles[j];
                if (row) {
                    tile = row[i];
                }
                return tile;
            }
            getNeighbourTile(tileLocation, direction) {
                let offset = WeBareBearsTrippleTrip.DirectionUtils.getDirectionOffset(direction);
                return this.getTile(tileLocation.i + offset.i, tileLocation.j + offset.j);
            }
            getStartTile() {
                return this.startTile;
            }
            addBearStackToStartTile(bearStack) {
                this.gameObjectLayer.addChild(bearStack);
                let startTile = this.getStartTile();
                bearStack.setToTile(startTile);
                this.sortGameObjectsLayer();
            }
            addBearStackToStartTileButKeepPosition(bearStack) {
                let localPosition = this.toLocal(bearStack.position, bearStack.parent);
                this.gameObjectLayer.addChild(bearStack);
                bearStack.position.x = localPosition.x;
                bearStack.position.y = localPosition.y;
                let startTile = this.getStartTile();
                bearStack.setCurrentTile(startTile);
                this.sortGameObjectsLayer();
            }
            isEndTile(tile) {
                return tile === this.endTile;
            }
            areTilesConnectedByPath(startTile, endTile, entryDirection) {
                let tilePath = this.getConnectedPath(startTile, entryDirection);
                return tilePath.indexOf(endTile) !== -1;
            }
            getConnectedPath(startTile, entryDirection) {
                let path = [];
                let currentTile = startTile;
                while (currentTile) {
                    path.push(currentTile);
                    let direction = currentTile.getExitDirection(entryDirection);
                    let newTile = this.getNeighbourTile(currentTile.location, direction);
                    entryDirection = WeBareBearsTrippleTrip.DirectionUtils.getOppositeDirection(direction);
                    if (newTile && newTile.pathNode && newTile.hasConnection(entryDirection)) {
                        currentTile = newTile;
                    }
                    else {
                        currentTile = null;
                    }
                }
                return path;
            }
            getSubPath(fromTile) {
                let tiles = [];
                for (let index = 0; index < this.path.length; index++) {
                    const pathElement = this.path[index];
                    let tile = this.getTileAtLocation(pathElement.tileLocation);
                    if (tiles.length === 0) {
                        if (tile === fromTile) {
                            tiles.push(tile);
                        }
                    }
                    else {
                        tiles.push(tile);
                    }
                }
                return tiles;
            }
            getFirstTileOnPathInColumn(columnIndex) {
                let tile = null;
                for (let index = 0; index < this.path.length; index++) {
                    const pathElement = this.path[index];
                    if (pathElement.tileLocation.i === columnIndex) {
                        tile = this.getTileAtLocation(pathElement.tileLocation);
                        break;
                    }
                }
                return tile;
            }
            getTileConnectedByEntryDirection(tile, entryDirection) {
                let direction = tile.getExitDirection(entryDirection);
                return this.getNeighbourTile(tile.location, direction);
            }
            getRandomEmptyTile() {
                let emptyTiles = this.getEmptyTiles();
                return Phaser.ArrayUtils.getRandomItem(emptyTiles);
            }
            getEmptyTiles() {
                let tiles = [];
                this.foreachTile(function (tile) {
                    if (tile.isEmpty()) {
                        tiles.push(tile);
                    }
                });
                return tiles;
            }
            getTilesTraversed() {
                return 0;
            }
            findPlacedHelperOfType(helperType) {
                let helper = null;
                for (let j = 0; j < this.tiles.length; j++) {
                    const row = this.tiles[j];
                    for (let i = 0; i < row.length; i++) {
                        const tile = row[i];
                        if (tile.helper && tile.helper.helperType === helperType) {
                            helper = tile.helper;
                            break;
                        }
                    }
                }
                return helper;
            }
        }
        WeBareBearsTrippleTrip.Grid = Grid;
    })(WeBareBearsTrippleTrip = Funday.WeBareBearsTrippleTrip || (Funday.WeBareBearsTrippleTrip = {}));
})(Funday || (Funday = {}));
var Funday;
(function (Funday) {
    var WeBareBearsTrippleTrip;
    (function (WeBareBearsTrippleTrip) {
        class GridManager {
            constructor(coreScreen) {
                this.previousGrid = null;
                this.currentGrid = null;
                this.nextGrid = null;
                this.tilePool = null;
                this.helperPool = null;
                this.game = null;
                this.coreScreen = null;
                this.totalPathTilesGenerated = 0;
                this.coreScreen = coreScreen;
                this.game = coreScreen.game;
                this.previousGrid = new WeBareBearsTrippleTrip.Grid(coreScreen.game, this);
                this.currentGrid = new WeBareBearsTrippleTrip.Grid(coreScreen.game, this);
                this.nextGrid = new WeBareBearsTrippleTrip.Grid(coreScreen.game, this);
                this.tilePool = coreScreen.game.add.group(coreScreen, "Tile Pool");
                this.helperPool = new WeBareBearsTrippleTrip.HelperPool(this, coreScreen);
                this.buildFirstLevels();
            }
            buildFirstLevels() {
                let pathGenerator = new WeBareBearsTrippleTrip.PathGenerator();
                pathGenerator.settings.width = 8;
                pathGenerator.settings.entryLocation.i = 3;
                pathGenerator.settings.entryLocation.j = 2;
                pathGenerator.settings.northWeight = 0;
                pathGenerator.settings.eastWeight = 1;
                pathGenerator.settings.westWeight = 0;
                pathGenerator.settings.southWeight = 0;
                let map1 = pathGenerator.generate();
                let map1EndLocation = map1.pathNodes[map1.pathNodes.length - 1].tileLocation;
                this.currentGrid.init(map1, true);
                this.currentGrid.solvePath();
                this.currentGrid.lockUnshuffled();
                this.currentGrid.addLevelOneDecorations();
                this.totalPathTilesGenerated = 0;
                let entryLocation = new WeBareBearsTrippleTrip.TileLocation(0, this.currentGrid.endTile.location.j);
                let map2 = this.coreScreen.levelControl.generateMap(entryLocation);
                let map2EndLocation = map2.pathNodes[map2.pathNodes.length - 1].tileLocation;
                this.nextGrid.init(map2);
                this.nextGrid.shuffleAll();
                this.nextGrid.refreshPathTiles();
                this.coreScreen.levelControl.onLevelGenerated(this.nextGrid);
                pathGenerator = new WeBareBearsTrippleTrip.PathGenerator();
                pathGenerator.settings.entryLocation.j = map2EndLocation.j;
                let map3 = pathGenerator.generate();
                pathGenerator.settings.width = 6;
                pathGenerator.settings.northWeight = 0;
                pathGenerator.settings.eastWeight = 1;
                pathGenerator.settings.southWeight = 0;
                pathGenerator.settings.westWeight = 0;
                this.currentGrid.position.x = 0;
                this.previousGrid.position.x = this.currentGrid.position.x - this.previousGrid.width;
                this.currentGrid.parent.setChildIndex(this.currentGrid, this.currentGrid.parent.children.length - 1);
                this.currentGrid.sortGameObjectsLayer();
                this.updateNextGridPosition();
            }
            getTileFromPool() {
                let tile = null;
                if (this.tilePool.children.length === 0) {
                    tile = new WeBareBearsTrippleTrip.Tile(this.game);
                }
                else {
                    tile = this.tilePool.getFirstDead();
                    this.tilePool.removeChild(tile);
                    tile.revive();
                }
                return tile;
            }
            transferToNextGrid(bearStack) {
                this.coreScreen.levelControl.levelNumber++;
                this.nextGrid.addBearStackToStartTileButKeepPosition(bearStack);
                let temp = this.previousGrid;
                this.previousGrid = this.currentGrid;
                this.currentGrid = this.nextGrid;
                this.nextGrid = temp;
                this.nextGrid.clear();
                let startLocation = new WeBareBearsTrippleTrip.TileLocation(0, this.currentGrid.endTile.location.j);
                let map = this.coreScreen.levelControl.generateMap(startLocation);
                this.nextGrid.init(map);
                this.nextGrid.shuffleAll();
                this.nextGrid.refreshPathTiles();
                this.coreScreen.levelControl.onLevelGenerated(this.nextGrid);
                this.updateNextGridPosition();
                this.currentGrid.parent.setChildIndex(this.currentGrid, this.currentGrid.parent.children.length - 1);
            }
            updateNextGridPosition() {
                let game = this.game;
                let tileWidth = game.getFrameData(Funday.WeBearBears.SpriteLibrary.tiles.ground_light).width;
                let rightside = new Phaser.Point(this.currentGrid.endTile.ground.right, this.currentGrid.endTile.ground.top);
                let nextGridPos = this.currentGrid.parent.toLocal(rightside, this.currentGrid.endTile.ground.parent);
                this.nextGrid.position.x = nextGridPos.x;
                this.nextGrid.position.y = this.currentGrid.position.y;
            }
            clear() {
                this.previousGrid.clear();
                this.currentGrid.clear();
                this.nextGrid.clear();
                this.totalPathTilesGenerated = 0;
            }
            removeAllBearExtraLivesFromGrids() {
                this.previousGrid.removeAllBearExtraLives();
                this.currentGrid.removeAllBearExtraLives();
                this.nextGrid.removeAllBearExtraLives();
            }
            removeAllSittingBearsFromGrids() {
                this.previousGrid.removeSittingBears();
                this.currentGrid.removeSittingBears();
                this.nextGrid.removeSittingBears();
            }
            onBearDown() {
                let bearStack = this.coreScreen.bearStack;
                let tilesWithBears = this.getTilesWithPlacedExtraLifeBears();
                let nextBearTypeToRevive = bearStack.getNextBearToRevive().getBearType();
                for (let index = 0; index < tilesWithBears.length; index++) {
                    const bearTile = tilesWithBears[index];
                    if (bearTile.bearPickup.bearType !== nextBearTypeToRevive) {
                        let bearPickup = this.getBearPickup(nextBearTypeToRevive);
                        if (bearTile.ground.inCamera) {
                            let game = this.coreScreen.game;
                            let animationFactory = game.services.animation;
                            let flashUp = animationFactory.fadeToWhite(50);
                            let delay = animationFactory.delay(100);
                            let flashDown = animationFactory.fadeFromWhite(50);
                            delay.onPlay.add(this.removeAllSittingBearsFromGrids.bind(this));
                            delay.onPlay.add(bearTile.clearBearPickup, bearTile);
                            delay.onPlay.add(bearTile.addBearPickUp.bind(bearTile, bearPickup));
                            delay.onPlay.add(bearTile.setLocked.bind(bearTile, true));
                            delay.onPlay.add(bearTile.grid.bringToTop.bind(bearTile.grid, bearPickup));
                            let queue = animationFactory.queue([flashUp, delay, flashDown]);
                            queue.play();
                        }
                        else {
                            bearTile.clearBearPickup();
                            bearTile.addBearPickUp(bearPickup);
                            bearTile.setLocked(true);
                            bearPickup.parent.setChildIndex(bearPickup, bearPickup.parent.children.length - 1);
                        }
                    }
                }
            }
            getTilesWithPlacedExtraLifeBears() {
                return this.currentGrid.getTilesWithExtraLifeBears().concat(this.nextGrid.getTilesWithExtraLifeBears());
            }
            isBearPickupAvailable(bearType) {
                return this.helperPool.isBearPickupAvailable(bearType);
            }
            getBearPickup(bearType) {
                return this.helperPool.getBearPickUp(bearType);
            }
            returnBearPickupToPool(bearPickup) {
                this.helperPool.returnGameObject(bearPickup);
            }
            isHelperAvailable(helperType) {
                return (!this.isHelperRequiredToBeInQueue(helperType) || this.isHelperAvailableInHelperQueue(helperType)) && this.isHelperAvailableInPool(helperType);
            }
            isHelperRequiredToBeInQueue(helperType) {
                return this.helperPool.isHelperRequiredToBeInHelperQueue(helperType);
            }
            isHelperAvailableInPool(helperType) {
                return this.helperPool.isHelperAvailable(helperType);
            }
            isHelperAvailableInHelperQueue(helperType) {
                let game = this.game;
                return game.inventory.isHelperOfTypeInQueue(helperType);
            }
            getHelper(helperType) {
                return this.helperPool.getHelper(helperType);
            }
            returnHelperToPool(helper) {
                this.helperPool.returnGameObject(helper);
            }
        }
        WeBareBearsTrippleTrip.GridManager = GridManager;
    })(WeBareBearsTrippleTrip = Funday.WeBareBearsTrippleTrip || (Funday.WeBareBearsTrippleTrip = {}));
})(Funday || (Funday = {}));
var Funday;
(function (Funday) {
    var WeBareBearsTrippleTrip;
    (function (WeBareBearsTrippleTrip) {
        class Tile extends Phaser.Group {
            constructor(game) {
                super(game);
                this.grid = null;
                this.pathNode = null;
                this.location = new TileLocation();
                this.ground = null;
                this.decoration = null;
                this.pathSprite = null;
                this.underground = null;
                this.outline = null;
                this.sittingGrizzly = null;
                this.sittingPanda = null;
                this.coin = null;
                this.helper = null;
                this.bearPickup = null;
                this.locked = false;
                this.outlineAnimation = null;
                this.undergroundAnimation = null;
            }
            init(grid, i, j) {
                let name = "Tile(" + i + ", " + j + ")";
                //console.log(name);
                this.name = name;
                this.grid = grid;
                this.grid.tileLayer.addChild(this);
                this.location.i = i;
                this.location.j = j;
            }
            clear() {
                this.pathNode = null;
                this.locked = false;
                this.clearGround();
                this.clearDectoration();
                this.clearPathSprite();
                this.clearBearPickup();
                this.clearHelper();
                this.clearCoin();
                this.clearSittingBears();
                this.kill();
                this.grid.gridManager.tilePool.add(this);
                this.grid = null;
            }
            solve() {
                let maxCount = 4;
                let count = 0;
                let correctPathNode = this.grid.getPathNodeOnPath(this.location);
                while (!this.isRotatedCorrectly() && count <= maxCount) {
                    this.rotateInstantly();
                    count++;
                    if (count > maxCount) {
                        throw "could not solve tile!";
                    }
                }
                this.setLocked(true);
            }
            setGroundTile(isLight) {
                this.clearGround();
                let game = this.grid.game;
                let poolRepository = game.repositories.pool;
                let pool = isLight ? poolRepository.lightGround : poolRepository.darkGround;
                let ground = pool.get();
                this.add(ground);
                this.ground = ground;
            }
            setPathNode(pathNode) {
                this.pathNode = pathNode;
                this.refreshPathDecoration();
            }
            refreshPathDecoration() {
                this.clearPathSprite();
                if (this.pathNode) {
                    let pathSpriteType = this.pathNode.getPathSpriteType();
                    let game = this.game;
                    let pool = game.repositories.pool;
                    let pathSprite = this.isRotatedCorrectly() ? pool.getLockedRoad(pathSpriteType) : pool.getRoad(pathSpriteType);
                    if (!this.isLocked()) {
                        pathSprite.inputEnabled = true;
                        pathSprite.events.onInputDown.add(this.onDown, this);
                        pathSprite.events.onInputOver.add(this.onOver, this);
                        pathSprite.events.onInputOut.add(this.onOut, this);
                        pathSprite.events.onInputUp.add(this.onUp, this);
                    }
                    this.pathSprite = pathSprite;
                    this.addChild(this.pathSprite);
                    this.rotatePathSpriteToTarget();
                }
            }
            isRotatedCorrectly() {
                let correctPathNode = this.grid.getPathNodeOnPath(this.location);
                return correctPathNode && this.pathNode.isEqualTo(correctPathNode);
            }
            onDown() {
                if (this.game.paused)
                    return;
                this.pathSprite.scale.setTo(.9);
            }
            onOver() {
                if (this.game.paused)
                    return;
                this.pathSprite.scale.setTo(1.05);
            }
            onOut() {
                if (this.game.paused)
                    return;
                this.pathSprite.scale.setTo(1);
            }
            onUp() {
                if (this.game.paused)
                    return;
                this.pathSprite.scale.setTo(1);
                this.rotate();
            }
            rotatePathSpriteToTarget() {
                let targetAngle = this.getTargetAngle();
                this.pathSprite.angle = targetAngle;
            }
            getTargetAngle() {
                let angle = 0;
                if (this.pathNode.isStraightHorizontal()) {
                    angle = 90;
                }
                else if (this.pathNode.isStraightVertical()) {
                    angle = 0;
                }
                else if (this.pathNode.isCurveNE()) {
                    angle = 270;
                }
                else if (this.pathNode.isCurveES()) {
                    angle = 0;
                }
                else if (this.pathNode.isCurveSW()) {
                    angle = 90;
                }
                else if (this.pathNode.isCurveWN()) {
                    angle = 180;
                }
                else if (this.pathNode.isCross()) {
                    angle = 0;
                }
                return angle;
            }
            rotate() {
                let game = this.game;
                game.repositories.sound.onRotateRoad();
                this.pathSprite.inputEnabled = false;
                let animationFactory = this.game.services.animation;
                let tween = animationFactory.tween(this.pathSprite, { angle: this.pathSprite.angle + 90 }, 25);
                tween.play();
                this.pathNode.rotate(RotationDirection.Clockwise);
                tween.onComplete.add(this.onRotationComplete, this);
                this.refreshOutline();
                this.grid.tilesRotated++;
                this.grid.gridManager.coreScreen.levelControl.onTileRotated(this);
            }
            refreshOutline() {
                if (!this.outline) {
                    let game = this.game;
                    this.outline = game.repositories.pool.outline.get();
                    this.addChild(this.outline);
                }
                this.refreshOutlineAnimation();
            }
            refreshOutlineAnimation() {
                this.clearOutlineAnimation();
                this.startOutlineAnimation();
            }
            startOutlineAnimation() {
                let delayDurationMs = 500;
                let fadeOutDurationMs = 500;
                let game = this.game;
                let animationFactory = game.services.animation;
                this.outline.alpha = 1;
                let delay = animationFactory.delay(fadeOutDurationMs);
                let fadeOut = animationFactory.tween(this.outline, { alpha: 0 }, fadeOutDurationMs);
                let queue = animationFactory.queue([delay, fadeOut]);
                queue.onComplete.add(this.onOutlineAnimationCompleted, this);
                queue.play();
                this.outlineAnimation = queue;
            }
            onOutlineAnimationCompleted() {
                this.clearOutline();
            }
            rotateInstantly() {
                this.pathSprite.angle += 90;
                this.pathNode.rotate(RotationDirection.Clockwise);
            }
            onRotationComplete() {
                if (WeBareBearsTrippleTrip.BearStack.LOCK_CONNECTED_TILES) {
                    if (this.isRotatedCorrectly()) {
                        if (this.isConnectedToStartTile()) {
                            let path = this.grid.getConnectedPath(this.grid.startTile, Direction.West);
                            this.animateLockPath(path);
                        }
                        else if (this.isConnectedToEndTile()) {
                            let path = this.grid.getConnectedPath(this.grid.endTile, Direction.East);
                            this.animateLockPath(path);
                        }
                        else {
                            this.pathSprite.inputEnabled = true;
                        }
                    }
                    else {
                        this.pathSprite.inputEnabled = true;
                    }
                }
                else {
                    this.pathSprite.inputEnabled = true;
                    this.refreshPathDecoration();
                    if (this.isRotatedCorrectly()) {
                        let game = this.game;
                        game.repositories.sound.onRoadRotatedCorrectly();
                    }
                }
            }
            animateLockPath(path) {
                let animation = this.createLockPathAnimation(path);
                animation.play();
            }
            createLockPathAnimation(path) {
                let game = this.game;
                let animationFactory = game.services.animation;
                let anims = [];
                let count = 0;
                for (let index = 0; index < path.length; index++) {
                    const tile = path[index];
                    if (!tile.isLocked() && tile.isRotatedCorrectly()) {
                        let delay = animationFactory.delay((count + 1) * 50);
                        delay.onComplete.add(tile.setLocked, tile, 0, true);
                        delay.onComplete.add(game.repositories.sound.onRoadSnap, game.repositories.sound);
                        anims.push(delay);
                    }
                }
                if (anims.length === 0) {
                    let anim = animationFactory.delay(10);
                    anims.push(anim);
                }
                return animationFactory.queue(anims);
            }
            isConnectedToStartTile() {
                return this.grid.startTile.isConnectedTo(this, Direction.West);
            }
            isConnectedToEndTile() {
                return this.grid.endTile.isConnectedTo(this, Direction.East);
            }
            isConnectedTo(otherTile, entryDirection) {
                return this.grid.areTilesConnectedByPath(this, otherTile, entryDirection);
            }
            isConnectedToStartOrEndTile() {
                return this.isConnectedToStartTile() || this.isConnectedToEndTile();
            }
            clearGround() {
                if (this.ground) {
                    this.ground.returnToPool();
                    this.ground = null;
                }
            }
            clearDectoration() {
                if (this.decoration) {
                    this.decoration.returnToPool();
                    this.decoration = null;
                }
                return this;
            }
            clearCoin() {
                if (this.coin) {
                    this.coin.returnToPool();
                    this.coin = null;
                }
            }
            clearPathSprite() {
                if (this.pathSprite) {
                    this.pathSprite.events.onInputDown.removeAll();
                    this.pathSprite.events.onInputOver.removeAll();
                    this.pathSprite.events.onInputOut.removeAll();
                    this.pathSprite.events.onInputUp.removeAll();
                    this.pathSprite.inputEnabled = false;
                    this.pathSprite.returnToPool();
                    this.pathSprite = null;
                }
            }
            clearBearPickup() {
                if (this.bearPickup) {
                    this.grid.gridManager.returnBearPickupToPool(this.bearPickup);
                    this.bearPickup = null;
                }
            }
            clearHelper() {
                if (this.helper) {
                    let helper = this.helper;
                    this.helper = null;
                    helper.clear();
                    this.grid.gridManager.returnHelperToPool(helper);
                }
            }
            clearOutline() {
                if (this.outline) {
                    this.outline.returnToPool();
                    this.outline = null;
                    this.clearOutlineAnimation();
                }
            }
            clearOutlineAnimation() {
                if (this.outlineAnimation) {
                    this.outlineAnimation.stop();
                    this.outlineAnimation = null;
                }
            }
            getNeighbour(direction) {
                return this.grid.getNeighbourTile(this.location, direction);
            }
            canEnterFromDirection(direction) {
                return this.pathNode && this.pathNode.hasConnectionWithDirection(direction);
            }
            getEdgePosition(direction) {
                let point = new Phaser.Point(0, 0);
                if (direction === Direction.North) {
                    point.x = this.centerX;
                    point.y = this.top;
                }
                else if (direction === Direction.East) {
                    point.x = this.right;
                    point.y = this.centerY;
                }
                else if (direction === Direction.South) {
                    point.x = this.centerX;
                    point.y = this.bottom;
                }
                else if (direction === Direction.West) {
                    point.x = this.left;
                    point.y = this.centerY;
                }
                return point;
            }
            getExitDirection(entryDirection) {
                let exitDirection = null;
                if (this.pathNode) {
                    exitDirection = this.pathNode.getExitDirection(entryDirection);
                }
                return exitDirection;
            }
            isEndTile() {
                return this.grid.endTile === this;
            }
            hasConnection(direction) {
                return this.pathNode && this.pathNode.hasConnectionWithDirection(direction);
            }
            isLocked() {
                return this.locked;
            }
            isEmpty() {
                return !this.pathNode &&
                    !this.decoration &&
                    !this.pathSprite &&
                    !this.bearPickup &&
                    !this.helper;
            }
            setLocked(locked) {
                this.locked = locked;
                this.refreshPathDecoration();
            }
            hasBearPickUp() {
                return !!this.bearPickup;
            }
            addDecoration(decoration) {
                if (!this.decoration) {
                    this.decoration = decoration;
                    this.grid.gameObjectLayer.addChild(decoration);
                    decoration.position.x = this.position.x;
                    decoration.position.y = this.position.y;
                }
                else {
                    throw "decoration already exists!";
                }
                return this.decoration;
            }
            addCoin(coin) {
                if (this.coin) {
                    this.clearCoin();
                    console.error("tile aleady had coin. Clean up is not working as expected");
                }
                if (!this.coin) {
                    coin.position.setTo(this.position.x, this.position.y);
                    this.coin = coin;
                    this.grid.gameObjectLayer.addChild(coin);
                    coin.startIdleAnimation(this);
                }
                else {
                    throw "tile already has coin! Even ater ext";
                }
            }
            addSittingDeadBearSprite(bearType, bear) {
                this.grid.addChild(bear);
                if (bearType === WeBareBearsTrippleTrip.BearType.Grizzly) {
                    this.sittingGrizzly = bear;
                }
                else if (bearType === WeBareBearsTrippleTrip.BearType.Panda) {
                    this.sittingPanda = bear;
                }
            }
            clearSittingBears() {
                if (this.sittingGrizzly) {
                    this.sittingGrizzly.returnToPool();
                    this.sittingGrizzly = null;
                }
                if (this.sittingPanda) {
                    this.sittingPanda.returnToPool();
                    this.sittingPanda = null;
                }
            }
            addBearPickUp(bearPickup) {
                if (!this.hasBearPickUp()) {
                    let localPosition = this.grid.toLocal(this.position, this.parent);
                    this.bearPickup = bearPickup;
                    this.grid.gameObjectLayer.addChild(this.bearPickup);
                    bearPickup.position.x = localPosition.x;
                    bearPickup.position.y = localPosition.y;
                }
                else {
                    throw "Tried to place multiple bearpickups on same tile!";
                }
            }
            addHelper(helper) {
                if (!this.helper) {
                    this.helper = helper;
                    this.grid.gameObjectLayer.addChild(this.helper);
                    let localPosition = this.grid.gameObjectLayer.toLocal(this.position, this.parent);
                    helper.position.x = localPosition.x;
                    helper.position.y = localPosition.y;
                }
                else {
                    throw "Tried to place multiple helpers on same tile!";
                }
            }
        }
        WeBareBearsTrippleTrip.Tile = Tile;
        class PathNode {
            constructor(tileLocation, connection) {
                this.tileLocation = null;
                this.connections = [];
                this.tileLocation = tileLocation;
                if (connection) {
                    this.connections.push(connection);
                }
            }
            isStraight() {
                return this.isSingleConnection() && this.connections[0].isStraight();
            }
            isStraightHorizontal() {
                return this.isSingleConnection() && this.connections[0].isStraightHorizontal();
            }
            isStraightVertical() {
                return this.isSingleConnection() && this.connections[0].isStraightVertical();
            }
            isCurve() {
                return this.isSingleConnection() && this.connections[0].isCurve();
            }
            isCurveNE() {
                return this.isCurve() && this.connections[0].hasDirection(Direction.North) && this.connections[0].hasDirection(Direction.East);
            }
            isCurveES() {
                return this.isCurve() && this.connections[0].hasDirection(Direction.East) && this.connections[0].hasDirection(Direction.South);
            }
            isCurveSW() {
                return this.isCurve() && this.connections[0].hasDirection(Direction.South) && this.connections[0].hasDirection(Direction.West);
            }
            isCurveWN() {
                return this.isCurve() && this.connections[0].hasDirection(Direction.West) && this.connections[0].hasDirection(Direction.North);
            }
            isSingleConnection() {
                return this.connections.length == 1;
            }
            isMultiConnection() {
                return this.connections.length >= 2;
            }
            isCross() {
                return this.isMultiConnection() && this.connections[0].isStraight() && this.connections[1].isStraight();
            }
            isDoubleCurve() {
                return this.isMultiConnection() && this.connections[0].isCurve() && this.connections[1].isCurve();
            }
            rotate(rotationDirection) {
                for (let index = 0; index < this.connections.length; index++) {
                    const connection = this.connections[index];
                    connection.rotate(rotationDirection);
                }
            }
            getPathSpriteType() {
                let pathSpriteType = RoadSpriteType.None;
                if (this.isStraight()) {
                    pathSpriteType = RoadSpriteType.Straight;
                }
                else if (this.isCurve()) {
                    pathSpriteType = RoadSpriteType.Curve;
                }
                else if (this.isCross()) {
                    pathSpriteType = RoadSpriteType.Cross;
                }
                return pathSpriteType;
            }
            hasConnectionWithDirection(direction) {
                let hasConnectionWithDirection = false;
                for (let index = 0; index < this.connections.length; index++) {
                    const connection = this.connections[index];
                    if (connection.hasDirection(direction)) {
                        hasConnectionWithDirection = true;
                        break;
                    }
                }
                return hasConnectionWithDirection;
            }
            getExitDirection(entryDirection) {
                let exitDirection = null;
                for (let index = 0; index < this.connections.length; index++) {
                    const connection = this.connections[index];
                    if (connection.hasDirection(entryDirection)) {
                        exitDirection = connection.getExitDirection(entryDirection);
                        break;
                    }
                }
                return exitDirection;
            }
            removeConnectionWithDirection(direction) {
                this.connections = this.connections.filter(function (connection) { return !connection.hasDirection(direction); });
            }
            isEqualTo(pathNode) {
                let isEqual = false;
                if (this.connections.length === pathNode.connections.length) {
                    isEqual = true;
                    for (let index = 0; index < this.connections.length; index++) {
                        const myConnection = this.connections[index];
                        if (!pathNode.hasEqualConnection(myConnection)) {
                            isEqual = false;
                            break;
                        }
                    }
                }
                return isEqual;
            }
            hasEqualConnection(connection) {
                let hasEqualConnection = false;
                for (let index = 0; index < this.connections.length; index++) {
                    const myConnection = this.connections[index];
                    if (myConnection.isEqualTo(connection)) {
                        hasEqualConnection = true;
                        break;
                    }
                }
                return hasEqualConnection;
            }
            createDeepCopy() {
                let copyTilelocation = new TileLocation(this.tileLocation.i, this.tileLocation.j);
                let copy = new PathNode(copyTilelocation);
                for (let index = 0; index < this.connections.length; index++) {
                    const connection = this.connections[index];
                    copy.connections.push(connection.createCopy());
                }
                return copy;
            }
        }
        WeBareBearsTrippleTrip.PathNode = PathNode;
        class Connection {
            constructor(directionA, directionB) {
                this.directionA = directionA;
                this.directionB = directionB;
            }
            isStraight() {
                let value = this.directionA + this.directionB;
                return value === 2 || value === 4;
            }
            isStraightHorizontal() {
                return this.isStraight() && (this.directionA === Direction.East || this.directionA === Direction.West);
            }
            isStraightVertical() {
                return this.isStraight() && (this.directionA === Direction.North || this.directionA === Direction.South);
            }
            isCurve() {
                return !this.isStraight();
            }
            hasDirection(direction) {
                return this.directionA === direction || this.directionB === direction;
            }
            getExitDirection(entryDirection) {
                let exitDirection = null;
                if (entryDirection === this.directionA) {
                    exitDirection = this.directionB;
                }
                else if (entryDirection === this.directionB) {
                    exitDirection = this.directionA;
                }
                return exitDirection;
            }
            rotate(rotationDirection) {
                this.directionA = this.resolveRotation(this.directionA, rotationDirection);
                this.directionB = this.resolveRotation(this.directionB, rotationDirection);
            }
            resolveRotation(startDirection, rotationDirection) {
                let value = startDirection + rotationDirection;
                if (value < 0) {
                    value = Direction.West;
                }
                else {
                    value = value % 4;
                }
                return value;
            }
            isEqualTo(connection) {
                return this.hasDirection(connection.directionA) && this.hasDirection(connection.directionB);
            }
            createCopy() {
                return new Connection(this.directionA, this.directionB);
            }
        }
        WeBareBearsTrippleTrip.Connection = Connection;
        class TileLocation {
            constructor(i, j) {
                this.i = 0;
                this.j = 0;
                this.i = i || 0;
                this.j = j || 0;
            }
            isEqualTo(otherLocation) {
                return otherLocation.i === this.i && otherLocation.j === this.j;
            }
        }
        WeBareBearsTrippleTrip.TileLocation = TileLocation;
        let Direction;
        (function (Direction) {
            Direction[Direction["North"] = 0] = "North";
            Direction[Direction["East"] = 1] = "East";
            Direction[Direction["South"] = 2] = "South";
            Direction[Direction["West"] = 3] = "West";
        })(Direction = WeBareBearsTrippleTrip.Direction || (WeBareBearsTrippleTrip.Direction = {}));
        class DirectionUtils {
            static getOppositeDirection(direction) {
                return direction === Direction.East ? Direction.West : Math.abs(direction - 2);
            }
            static getDirectionOffset(direction) {
                let offset = new TileLocation(0, 0);
                if (direction === Direction.North) {
                    offset.j = -1;
                }
                else if (direction === Direction.East) {
                    offset.i = 1;
                }
                else if (direction === Direction.South) {
                    offset.j = 1;
                }
                else if (direction === Direction.West) {
                    offset.i = -1;
                }
                return offset;
            }
            static getDirectionBetween(fromTile, toTile) {
                var direction = null;
                if (fromTile.i > toTile.i) {
                    direction = Direction.West;
                }
                else if (fromTile.i < toTile.i) {
                    direction = Direction.East;
                }
                else if (fromTile.j > toTile.j) {
                    direction = Direction.North;
                }
                else if (fromTile.j < toTile.j) {
                    direction = Direction.South;
                }
                else {
                    throw "not valid tiles!!";
                }
                return direction;
            }
        }
        WeBareBearsTrippleTrip.DirectionUtils = DirectionUtils;
        let RotationDirection;
        (function (RotationDirection) {
            RotationDirection[RotationDirection["Clockwise"] = 1] = "Clockwise";
            RotationDirection[RotationDirection["CounterClockwise"] = -1] = "CounterClockwise";
        })(RotationDirection = WeBareBearsTrippleTrip.RotationDirection || (WeBareBearsTrippleTrip.RotationDirection = {}));
        let DecorationType;
        (function (DecorationType) {
            DecorationType[DecorationType["None"] = 0] = "None";
            DecorationType[DecorationType["Bush"] = 1] = "Bush";
            DecorationType[DecorationType["Rock"] = 2] = "Rock";
            DecorationType[DecorationType["Tree"] = 3] = "Tree";
            DecorationType[DecorationType["StartAreaCorner"] = 4] = "StartAreaCorner";
            DecorationType[DecorationType["StartAreaEdge"] = 5] = "StartAreaEdge";
            DecorationType[DecorationType["StartAreaMiddle"] = 6] = "StartAreaMiddle";
            DecorationType[DecorationType["StartAreaOppening"] = 7] = "StartAreaOppening";
        })(DecorationType = WeBareBearsTrippleTrip.DecorationType || (WeBareBearsTrippleTrip.DecorationType = {}));
        let RoadSpriteType;
        (function (RoadSpriteType) {
            RoadSpriteType[RoadSpriteType["None"] = 0] = "None";
            RoadSpriteType[RoadSpriteType["Straight"] = 1] = "Straight";
            RoadSpriteType[RoadSpriteType["Curve"] = 2] = "Curve";
            RoadSpriteType[RoadSpriteType["Cross"] = 3] = "Cross";
        })(RoadSpriteType = WeBareBearsTrippleTrip.RoadSpriteType || (WeBareBearsTrippleTrip.RoadSpriteType = {}));
    })(WeBareBearsTrippleTrip = Funday.WeBareBearsTrippleTrip || (Funday.WeBareBearsTrippleTrip = {}));
})(Funday || (Funday = {}));
var Funday;
(function (Funday) {
    var WeBareBearsTrippleTrip;
    (function (WeBareBearsTrippleTrip) {
        class PathGenerator {
            constructor() {
                this.settings = new PathGeneratorSettings();
                this.weights = new WeBareBearsTrippleTrip.EnumMap();
                this.directions = [WeBareBearsTrippleTrip.Direction.East, WeBareBearsTrippleTrip.Direction.North, WeBareBearsTrippleTrip.Direction.South, WeBareBearsTrippleTrip.Direction.West];
            }
            generate() {
                this.weights[WeBareBearsTrippleTrip.Direction.North] = this.settings.northWeight;
                this.weights[WeBareBearsTrippleTrip.Direction.East] = this.settings.eastWeight;
                this.weights[WeBareBearsTrippleTrip.Direction.South] = this.settings.southWeight;
                this.weights[WeBareBearsTrippleTrip.Direction.West] = this.settings.westWeight;
                let path = this.generatePath();
                let pathMap = new WeBareBearsTrippleTrip.PathMap();
                pathMap.pathNodes = path;
                return pathMap;
            }
            generatePath() {
                let grid = this.createGrid();
                let moves = [];
                let directions = [];
                let crossRoadCount = 0;
                let doubleCurveRoadCount = 0;
                let entryLocation = this.settings.entryLocation;
                let entryTile = grid[entryLocation.j][entryLocation.i];
                entryTile.allowsComplexRoad = false;
                moves.push(entryTile);
                directions.push(WeBareBearsTrippleTrip.Direction.East);
                let finishedPath = false;
                let lastI = null;
                let lastJ = null;
                while (!finishedPath) {
                    let originTile = moves[moves.length - 1];
                    crossRoadCount = this.countCrossRoads(grid);
                    doubleCurveRoadCount = this.countDoubleCurveRoads(grid);
                    let unblockedNeighbours = this.getUnblockedNeighbours(grid, originTile, crossRoadCount, doubleCurveRoadCount);
                    if (unblockedNeighbours.isEmpty()) {
                        let failedMove = moves.pop();
                        failedMove.notValid = true;
                        let lastDirection = directions.pop();
                        let head = moves[moves.length - 1];
                        lastI = head.location.i;
                        lastJ = head.location.j;
                        head.removeConnectionContainingDirection(lastDirection);
                        let oppositeDirection = WeBareBearsTrippleTrip.DirectionUtils.getOppositeDirection(lastDirection);
                        failedMove.setDirectionBlocked(oppositeDirection);
                        head.setDirectionBlocked(lastDirection);
                    }
                    else {
                        let fromTile = moves[moves.length - 1];
                        let toTile = unblockedNeighbours.getRandomItem();
                        let direction = WeBareBearsTrippleTrip.DirectionUtils.getDirectionBetween(fromTile.location, toTile.location);
                        let oppositeDirection = WeBareBearsTrippleTrip.DirectionUtils.getOppositeDirection(direction);
                        fromTile.setDirectionBlocked(direction);
                        toTile.setDirectionBlocked(oppositeDirection);
                        let lastDirection = directions[directions.length - 1];
                        let lastDirectionMirrored = WeBareBearsTrippleTrip.DirectionUtils.getOppositeDirection(lastDirection);
                        fromTile.pathNode.connections.push(new WeBareBearsTrippleTrip.Connection(lastDirectionMirrored, direction));
                        directions.push(direction);
                        moves.push(toTile);
                        lastI = toTile.location.i;
                        lastJ = toTile.location.j;
                    }
                    if (lastI === grid[0].length - 1) {
                        let goal = moves[moves.length - 1];
                        let direction = directions[directions.length - 1];
                        goal.pathNode.connections.push(new WeBareBearsTrippleTrip.Connection(direction, WeBareBearsTrippleTrip.Direction.West));
                        goal.setDirectionBlocked(WeBareBearsTrippleTrip.Direction.East);
                        finishedPath = true;
                    }
                }
                let pathNodes = [];
                for (let index = 0; index < moves.length; index++) {
                    const move = moves[index];
                    pathNodes.push(move.pathNode);
                }
                return pathNodes;
            }
            createGrid() {
                let grid = new Array();
                for (let j = 0; j < this.settings.height; j++) {
                    grid[j] = [];
                    //console.log("Settings Width",this.settings.width);
                    for (let i = 0; i < this.settings.width; i++) {
                        grid[j].push(new PathGeneratorTile(new WeBareBearsTrippleTrip.TileLocation(i, j)));
                    }
                }
                return grid;
            }
            countCrossRoads(grid) {
                var count = 0;
                for (var j = 0; j < grid.length; j++) {
                    for (var i = 0; i < grid[j].length; i++) {
                        var tile = grid[j][i];
                        if (tile.pathNode.isCross()) {
                            count++;
                        }
                    }
                }
                return count;
            }
            countDoubleCurveRoads(grid) {
                var count = 0;
                for (var j = 0; j < grid.length; j++) {
                    for (var i = 0; i < grid[j].length; i++) {
                        var tile = grid[j][i];
                        if (tile.pathNode.isDoubleCurve()) {
                            count++;
                        }
                    }
                }
                return count;
            }
            getUnblockedNeighbours(grid, originTile, crossRoadCount, doubleCurveRoadCount) {
                let lootTable = new Funday.Utils.LootTable();
                this.directions.forEach(function (direction) {
                    let unblockedNeighbour = this.getUnblockedNeighbour(originTile, grid, direction, crossRoadCount, doubleCurveRoadCount);
                    if (unblockedNeighbour) {
                        let weight = this.weights[direction];
                        lootTable.addItem(unblockedNeighbour, weight);
                    }
                }.bind(this));
                return lootTable;
            }
            getUnblockedNeighbour(originTile, grid, direction, crossRoadCount, doubleCurveRoadCount) {
                let neighbour = null;
                let otherTile = this.getNeighbour(originTile, grid, direction);
                if (otherTile && otherTile.canHaveRoads() && !originTile.isDirectionBlocked(direction)) {
                    var otherTileEntryDirection = WeBareBearsTrippleTrip.DirectionUtils.getOppositeDirection(direction);
                    if (!otherTile.isDirectionBlocked(otherTileEntryDirection) && !otherTile.notValid) {
                        if (!otherTile.areAllOtherDirectionsBlocked(otherTileEntryDirection)) {
                            if (otherTile.pathNode.connections.length === 0) {
                                neighbour = otherTile;
                            }
                            else if (otherTile.pathNode.connections.length === 1 || otherTile.allowsComplexRoad) {
                                let newCrossRoadCount = crossRoadCount;
                                ;
                                let newDoubleCurveRoadCount = doubleCurveRoadCount;
                                if (originTile.pathNode.connections.length === 1 && originTile.pathNode.isStraight()) {
                                    newCrossRoadCount++;
                                }
                                else if (originTile.pathNode.connections.length === 1) {
                                    newDoubleCurveRoadCount++;
                                }
                                if (otherTile.pathNode.isStraight()) {
                                    newCrossRoadCount++;
                                }
                                else {
                                    newDoubleCurveRoadCount++;
                                }
                                if (newCrossRoadCount <= this.settings.maxCrossRoadsCount && newDoubleCurveRoadCount <= this.settings.maxDoubleCurveCount) {
                                    neighbour = otherTile;
                                }
                            }
                        }
                    }
                }
                return neighbour;
            }
            getNeighbour(originTile, grid, direction) {
                let offset = WeBareBearsTrippleTrip.DirectionUtils.getDirectionOffset(direction);
                let row = grid[originTile.location.j + offset.j];
                let tile = null;
                if (row) {
                    tile = row[originTile.location.i + offset.i];
                }
                return tile;
            }
        }
        WeBareBearsTrippleTrip.PathGenerator = PathGenerator;
        class PathGeneratorSettings {
            constructor() {
                this.maxDoubleCurveCount = 0;
                this.maxCrossRoadsCount = 0;
                this.width = 6;
                this.height = 5;
                this.northWeight = 3;
                this.eastWeight = 1;
                this.southWeight = 3;
                this.westWeight = 3;
                this.entryLocation = new WeBareBearsTrippleTrip.TileLocation(0, 2);
                this.exitLocation = new WeBareBearsTrippleTrip.TileLocation(5, 2);
            }
        }
        WeBareBearsTrippleTrip.PathGeneratorSettings = PathGeneratorSettings;
        class PathGeneratorTile {
            constructor(location) {
                this.location = new WeBareBearsTrippleTrip.TileLocation(0, 0);
                this.blockedDirections = new WeBareBearsTrippleTrip.EnumMap();
                this.notValid = false;
                this.pathNode = null;
                this.allowsComplexRoad = false;
                this.location = location;
                this.pathNode = new WeBareBearsTrippleTrip.PathNode(location);
            }
            addPath(entry, exit) {
                if (this.pathNode.hasConnectionWithDirection(entry) || this.pathNode.hasConnectionWithDirection(exit)) {
                    throw "error - cannot have same path";
                }
                this.pathNode.connections.push(new WeBareBearsTrippleTrip.Connection(entry, exit));
            }
            removeConnectionContainingDirection(direction) {
                let beforeCount = this.pathNode.connections.length;
                this.pathNode.removeConnectionWithDirection(direction);
                let newLength = this.pathNode.connections.length;
                if (newLength === 0 && beforeCount > 1) {
                    debugger;
                }
                if (beforeCount === newLength) {
                }
            }
            canHaveRoads() {
                return true;
            }
            isDirectionBlocked(direction) {
                return this.blockedDirections[direction] || this.pathNode.hasConnectionWithDirection(direction);
            }
            setDirectionBlocked(direction) {
                this.blockedDirections[direction] = true;
            }
            areAllOtherDirectionsBlocked(direction) {
                var directions = [WeBareBearsTrippleTrip.Direction.North, WeBareBearsTrippleTrip.Direction.East, WeBareBearsTrippleTrip.Direction.South, WeBareBearsTrippleTrip.Direction.West];
                var blocked = true;
                for (var i = 0; i < directions.length; i++) {
                    var dir = directions[i];
                    if (dir !== direction) {
                        if (!this.isDirectionBlocked(dir)) {
                            blocked = false;
                            break;
                        }
                    }
                }
                return blocked;
            }
        }
        WeBareBearsTrippleTrip.PathGeneratorTile = PathGeneratorTile;
    })(WeBareBearsTrippleTrip = Funday.WeBareBearsTrippleTrip || (Funday.WeBareBearsTrippleTrip = {}));
})(Funday || (Funday = {}));
var Funday;
(function (Funday) {
    var WeBareBearsTrippleTrip;
    (function (WeBareBearsTrippleTrip) {
        class AchievementRepository {
            constructor(game) {
                this.metadata = [];
                AchievementRepository.game = game;
                this.addMetadataEntry(WeBareBearsAchivementType.CollectCoins100, "Hundy Rich", "Collect 100 Coins", new Funday.SpriteId(null, null));
                this.addMetadataEntry(WeBareBearsAchivementType.PickUp10Bears, "Stack It Up", "Pick up 10 Bears", new Funday.SpriteId(null, null));
                this.addMetadataEntry(WeBareBearsAchivementType.Travel5000Distance, "Deep Dark Woods", "Travel 5000 total tiles", new Funday.SpriteId(null, null));
                this.addMetadataEntry(WeBareBearsAchivementType.UseAllHelpersOnce, "Forest Friends", "Use every power-up at least once", new Funday.SpriteId(null, null));
                this.addMetadataEntry(WeBareBearsAchivementType.Use200CoinsInShop, "Big Spender", "Spend 200 coins in shop", new Funday.SpriteId(null, null));
            }
            addMetadataEntry(id, name, description, spriteId) {
                let achievementMetadata = new Funday.Service.Achievement.AchievementMetadata(id, name, description, spriteId);
                this.metadata.push(achievementMetadata);
            }
            static getInitialAchivementState() {
                let achivements = [];
                achivements.push(this.loadAchievementFromSDK(WeBareBearsAchivementType.CollectCoins100));
                achivements.push(this.loadAchievementFromSDK(WeBareBearsAchivementType.PickUp10Bears));
                achivements.push(this.loadAchievementFromSDK(WeBareBearsAchivementType.Travel5000Distance));
                achivements.push(this.loadAchievementFromSDK(WeBareBearsAchivementType.Use200CoinsInShop));
                achivements.push(this.loadAchievementFromSDK(WeBareBearsAchivementType.UseAllHelpersOnce));
                for (var i = achivements.length - 1; i >= 0; i--) {
                    if (achivements[i] === undefined) {
                        achivements.splice(i, 1);
                    }
                }
                return achivements;
            }
            static loadAchievementFromSDK(id) {
                let cnArcadeAchievService = AchievementRepository.game.services.achievement;
                if (cnArcadeAchievService instanceof Funday.Service.AchievementService)
                    return undefined;
                let loadedAchiev = cnArcadeAchievService.loadAchievement(id);
                let achiev = undefined;
                if (loadedAchiev != undefined) {
                    achiev = new Funday.Service.Achievement.Achievement(id, loadedAchiev.timesRequired);
                    this.game.services.achievement.getProgress(achiev).then((progress) => {
                        achiev.progress = progress;
                        achiev.hasBeenAwarded = loadedAchiev.completed;
                        console.log("[Achievement Repository] Loaded achievement", loadedAchiev.title, ". Progress: " + achiev.progress + "/" + achiev.maxProgress, "has been awarded =", achiev.hasBeenAwarded);
                    });
                }
                else {
                    console.log("[Achievement Repository] Could not load achievement with id: " + id);
                }
                return achiev;
            }
            getMetadata(id) {
                let metadata = null;
                for (let index = 0; index < this.metadata.length; index++) {
                    const data = this.metadata[index];
                    if (data.id === id) {
                        metadata = data;
                        break;
                    }
                }
                return metadata;
            }
        }
        AchievementRepository.game = null;
        WeBareBearsTrippleTrip.AchievementRepository = AchievementRepository;
        let WeBareBearsAchivementType;
        (function (WeBareBearsAchivementType) {
            WeBareBearsAchivementType["CollectCoins100"] = "28bfe7c8-026e-4ea7-95a0-ff0e3ad6c813";
            WeBareBearsAchivementType["PickUp10Bears"] = "5638cf35-66cd-4044-84c5-02b104879ba3";
            WeBareBearsAchivementType["Travel5000Distance"] = "4e97e7cf-ddc3-4b5f-9374-8b87e7c3c75a";
            WeBareBearsAchivementType["UseAllHelpersOnce"] = "6050c9f2-7c9c-4593-a836-635fbd7ae361";
            WeBareBearsAchivementType["Use200CoinsInShop"] = "311e071b-d651-47e6-9572-62ed13b3872a";
        })(WeBareBearsAchivementType = WeBareBearsTrippleTrip.WeBareBearsAchivementType || (WeBareBearsTrippleTrip.WeBareBearsAchivementType = {}));
    })(WeBareBearsTrippleTrip = Funday.WeBareBearsTrippleTrip || (Funday.WeBareBearsTrippleTrip = {}));
})(Funday || (Funday = {}));
var Funday;
(function (Funday) {
    var WeBareBearsTrippleTrip;
    (function (WeBareBearsTrippleTrip) {
        class DifficultyRepository {
            constructor(game) {
                this.difficulties = [];
                this.rotationDifficulties = [];
                this.addBrackets();
                this.addRotationDifficulties();
            }
            addBrackets() {
                this.difficulties.push(new LevelBracket(0, 12, 5, 1, 2, 1, .5, 0, 0));
                this.difficulties.push(new LevelBracket(3, 12, 5, 1, 1, 1, 1, 0, 0));
                this.difficulties.push(new LevelBracket(5, 12, 5, 1, 1, 1, 1, 0, 0));
                this.difficulties.push(new LevelBracket(7, 12, 5, 2, 1, 2, 1, 0, 0));
                this.difficulties.push(new LevelBracket(9, 12, 5, 3, 1, 3, 1.5, 0, 0));
                this.difficulties.push(new LevelBracket(11, 12, 5, 1, 1, 1, 2, 0, 0));
                this.difficulties.push(new LevelBracket(11, 12, 5, 1, 1, 1, 1, 1, 0));
                this.difficulties.push(new LevelBracket(13, 12, 5, 1, 2, 1, 2, 1, 0));
            }
            getPathGeneratorSettingsFromLevel(level) {
                let pathGeneratorSettings = null;
                for (let index = 0; index < this.difficulties.length; index++) {
                    const bracket = this.difficulties[index];
                    if (bracket.availableFrom <= level) {
                        pathGeneratorSettings = bracket.pathGeneratorSettings;
                    }
                    else {
                        break;
                    }
                }
                return pathGeneratorSettings;
            }
            addRotationDifficulties() {
                this.rotationDifficulties.push(new RotationDifficulty(0, 5, 15, 80));
                this.rotationDifficulties.push(new RotationDifficulty(12, 5, 20, 75));
                this.rotationDifficulties.push(new RotationDifficulty(24, 5, 25, 65));
                this.rotationDifficulties.push(new RotationDifficulty(36, 5, 30, 60));
                this.rotationDifficulties.push(new RotationDifficulty(48, 5, 45, 55));
                this.rotationDifficulties.push(new RotationDifficulty(60, 10, 45, 45));
                this.rotationDifficulties.push(new RotationDifficulty(72, 15, 45, 40));
                this.rotationDifficulties.push(new RotationDifficulty(84, 20, 40, 40));
                this.rotationDifficulties.push(new RotationDifficulty(96, 25, 35, 40));
                this.rotationDifficulties.push(new RotationDifficulty(108, 30, 35, 35));
                this.rotationDifficulties.push(new RotationDifficulty(120, 33, 33, 34));
            }
            getRotationDifficultyForTilesTraversed(globalTilesTravered) {
                let rotationDifficulty = null;
                for (let index = 0; index < this.rotationDifficulties.length; index++) {
                    const rd = this.rotationDifficulties[index];
                    if (rd.availableFromTile <= globalTilesTravered) {
                        rotationDifficulty = rd;
                    }
                    else {
                        break;
                    }
                }
                return rotationDifficulty;
            }
        }
        WeBareBearsTrippleTrip.DifficultyRepository = DifficultyRepository;
        class RotationDifficulty {
            constructor(availableFromTile, oneRotationWeight, twoRotationsWeight, threeRotations) {
                this.availableFromTile = 0;
                this.dropTable = new Funday.Utils.LootTable();
                this.availableFromTile = availableFromTile;
                this.dropTable.addItem(1, oneRotationWeight);
                this.dropTable.addItem(2, twoRotationsWeight);
                this.dropTable.addItem(3, threeRotations);
            }
        }
        class LevelBracket {
            constructor(availableFromLevel, horizontalCount, verticalCount, northWeight, eastWeight, southWeight, westhWeight, maxCrossRoadCount, maxDoubleCurveCount) {
                this.availableFrom = 0;
                this.pathGeneratorSettings = null;
                let pathGeneratorSettings = new WeBareBearsTrippleTrip.PathGeneratorSettings();
                pathGeneratorSettings.maxDoubleCurveCount = maxDoubleCurveCount;
                pathGeneratorSettings.maxCrossRoadsCount = maxCrossRoadCount;
                pathGeneratorSettings.width = horizontalCount;
                pathGeneratorSettings.height = verticalCount;
                pathGeneratorSettings.northWeight = northWeight;
                pathGeneratorSettings.eastWeight = eastWeight;
                pathGeneratorSettings.southWeight = southWeight;
                pathGeneratorSettings.westWeight = westhWeight;
                this.pathGeneratorSettings = pathGeneratorSettings;
                this.availableFrom = availableFromLevel;
            }
        }
    })(WeBareBearsTrippleTrip = Funday.WeBareBearsTrippleTrip || (Funday.WeBareBearsTrippleTrip = {}));
})(Funday || (Funday = {}));
var Funday;
(function (Funday) {
    var WeBareBearsTrippleTrip;
    (function (WeBareBearsTrippleTrip) {
        class MapRepository {
            constructor(game) {
                this.maps = [];
                this.addDummyPaths();
            }
            addDummyPaths() {
                let pathMap = new PathMap();
                function addDummyNode(i, j, directionA, directionB) {
                    let node = new WeBareBearsTrippleTrip.PathNode(new WeBareBearsTrippleTrip.TileLocation(i, j));
                    node.connections.push(new WeBareBearsTrippleTrip.Connection(directionA, directionB));
                    pathMap.pathNodes.push(node);
                }
                function addDummyCrossNode(i, j) {
                    let node = new WeBareBearsTrippleTrip.PathNode(new WeBareBearsTrippleTrip.TileLocation(i, j));
                    node.connections.push(new WeBareBearsTrippleTrip.Connection(WeBareBearsTrippleTrip.Direction.North, WeBareBearsTrippleTrip.Direction.South));
                    node.connections.push(new WeBareBearsTrippleTrip.Connection(WeBareBearsTrippleTrip.Direction.East, WeBareBearsTrippleTrip.Direction.West));
                    pathMap.pathNodes.push(node);
                }
                addDummyNode(0, 2, WeBareBearsTrippleTrip.Direction.West, WeBareBearsTrippleTrip.Direction.East);
                addDummyCrossNode(1, 2);
                addDummyNode(2, 2, WeBareBearsTrippleTrip.Direction.West, WeBareBearsTrippleTrip.Direction.North);
                addDummyNode(2, 1, WeBareBearsTrippleTrip.Direction.South, WeBareBearsTrippleTrip.Direction.West);
                addDummyNode(1, 1, WeBareBearsTrippleTrip.Direction.East, WeBareBearsTrippleTrip.Direction.South);
                addDummyNode(1, 3, WeBareBearsTrippleTrip.Direction.North, WeBareBearsTrippleTrip.Direction.East);
                addDummyNode(2, 3, WeBareBearsTrippleTrip.Direction.West, WeBareBearsTrippleTrip.Direction.East);
                addDummyNode(3, 3, WeBareBearsTrippleTrip.Direction.West, WeBareBearsTrippleTrip.Direction.East);
                addDummyNode(4, 3, WeBareBearsTrippleTrip.Direction.West, WeBareBearsTrippleTrip.Direction.North);
                addDummyNode(4, 2, WeBareBearsTrippleTrip.Direction.South, WeBareBearsTrippleTrip.Direction.East);
                addDummyNode(5, 2, WeBareBearsTrippleTrip.Direction.West, WeBareBearsTrippleTrip.Direction.East);
                this.maps.push(pathMap);
            }
        }
        WeBareBearsTrippleTrip.MapRepository = MapRepository;
        let MapTileType;
        (function (MapTileType) {
            MapTileType[MapTileType["Empty"] = 0] = "Empty";
            MapTileType[MapTileType["IntrepretedPath"] = 1] = "IntrepretedPath";
        })(MapTileType || (MapTileType = {}));
        class PathMap {
            constructor() {
                this.pathNodes = [];
            }
            getHorizontalCount() {
                return this.pathNodes[this.pathNodes.length - 1].tileLocation.i + 1;
            }
            getVerticalCount() {
                return 5;
            }
        }
        WeBareBearsTrippleTrip.PathMap = PathMap;
    })(WeBareBearsTrippleTrip = Funday.WeBareBearsTrippleTrip || (Funday.WeBareBearsTrippleTrip = {}));
})(Funday || (Funday = {}));
var Funday;
(function (Funday) {
    var WeBareBearsTrippleTrip;
    (function (WeBareBearsTrippleTrip) {
        class PoolRepository {
            constructor(game) {
                this.game = null;
                this.darkGround = null;
                this.lightGround = null;
                this.underground = null;
                this.outline = null;
                this.whiteOverlay = null;
                this.coin = null;
                this.coinPickup = null;
                this.decorationMap = new EnumMap();
                this.pathSprite = new EnumMap();
                this.lockedPathSprite = new EnumMap();
                this.sittingBearSprites = new EnumMap();
                this.crateHelperPickups = new EnumMap();
                this.game = game;
                let settings = new WeBareBearsTrippleTrip.SpriteSettings();
                settings.anchor.setTo(.5);
                this.darkGround = this.createPool(Funday.WeBearBears.SpriteLibrary.tiles.ground_dark, 45, settings);
                this.lightGround = this.createPool(Funday.WeBearBears.SpriteLibrary.tiles.ground_light, 45, settings);
                let undergroundSettings = new WeBareBearsTrippleTrip.SpriteSettings();
                undergroundSettings.anchor.setTo(.5, 0);
                this.underground = this.createPool(Funday.WeBearBears.SpriteLibrary.tiles.ground_under, 12, undergroundSettings);
                this.outline = this.createPool(Funday.WeBearBears.SpriteLibrary.tiles.tile_selection, 2, settings);
                this.whiteOverlay = this.createPool(Funday.WeBearBears.SpriteLibrary.tiles.tile_white, 10, settings);
                this.coin = this.createPool(Funday.WeBearBears.SpriteLibrary.tiles.Coin, 20, settings);
                this.coinPickup = new CoinPickUpPool(game);
                let decorationBush = this.createPool(Funday.WeBearBears.SpriteLibrary.tiles.tile_bush, 10, settings);
                let decorationRock = this.createPool(Funday.WeBearBears.SpriteLibrary.tiles.tile_rocks, 10, settings);
                let treeSettings = new WeBareBearsTrippleTrip.SpriteSettings();
                treeSettings.anchor.setTo(.5, .8);
                let decorationTree = this.createPool(Funday.WeBearBears.SpriteLibrary.tiles.tile_tree, 10, treeSettings);
                let decorationStartCorner = this.createPool(Funday.WeBearBears.SpriteLibrary.tiles.road_off05, 4, settings);
                let decorationStartEdge = this.createPool(Funday.WeBearBears.SpriteLibrary.tiles.road_off06, 3, settings);
                let startDecorationSettings = new WeBareBearsTrippleTrip.SpriteSettings();
                startDecorationSettings.anchor.setTo(.5, 0);
                let decorationStartMiddle = this.createPool(Funday.WeBearBears.SpriteLibrary.tiles.road_off07, 1, startDecorationSettings);
                let decorationStartOpening = this.createPool(Funday.WeBearBears.SpriteLibrary.tiles.road_off08, 1, startDecorationSettings);
                this.decorationMap[WeBareBearsTrippleTrip.DecorationType.Bush] = decorationBush;
                this.decorationMap[WeBareBearsTrippleTrip.DecorationType.Rock] = decorationRock;
                this.decorationMap[WeBareBearsTrippleTrip.DecorationType.Tree] = decorationTree;
                this.decorationMap[WeBareBearsTrippleTrip.DecorationType.StartAreaCorner] = decorationStartCorner;
                this.decorationMap[WeBareBearsTrippleTrip.DecorationType.StartAreaEdge] = decorationStartEdge;
                this.decorationMap[WeBareBearsTrippleTrip.DecorationType.StartAreaMiddle] = decorationStartMiddle;
                this.decorationMap[WeBareBearsTrippleTrip.DecorationType.StartAreaOppening] = decorationStartOpening;
                let straightRoad = this.createPool(Funday.WeBearBears.SpriteLibrary.tiles.road_vertical, 10, settings);
                let curveRoad = this.createPool(Funday.WeBearBears.SpriteLibrary.tiles.road_east_south, 10, settings);
                let cross = this.createPool(Funday.WeBearBears.SpriteLibrary.tiles.road_cross, 10, settings);
                this.pathSprite[WeBareBearsTrippleTrip.RoadSpriteType.Straight] = straightRoad;
                this.pathSprite[WeBareBearsTrippleTrip.RoadSpriteType.Curve] = curveRoad;
                this.pathSprite[WeBareBearsTrippleTrip.RoadSpriteType.Cross] = cross;
                let lockedStraightRoad = this.createPool(Funday.WeBearBears.SpriteLibrary.tiles.locked_road_vertical, 10, settings);
                let lockedCurveRoad = this.createPool(Funday.WeBearBears.SpriteLibrary.tiles.locked_road_east_south, 10, settings);
                let lockedCross = this.createPool(Funday.WeBearBears.SpriteLibrary.tiles.locked_road_cross, 10, settings);
                this.lockedPathSprite[WeBareBearsTrippleTrip.RoadSpriteType.Straight] = lockedStraightRoad;
                this.lockedPathSprite[WeBareBearsTrippleTrip.RoadSpriteType.Curve] = lockedCurveRoad;
                this.lockedPathSprite[WeBareBearsTrippleTrip.RoadSpriteType.Cross] = lockedCross;
                let settingsForSittingBears = new WeBareBearsTrippleTrip.SpriteSettings();
                settingsForSittingBears.anchor.setTo(.5, .85);
                let sittingGrizz = this.createPool(Funday.WeBearBears.SpriteLibrary.tiles.grizz_fall09, 1, settingsForSittingBears);
                this.sittingBearSprites[WeBareBearsTrippleTrip.BearType.Grizzly] = sittingGrizz;
                let sittingPanda = this.createPool(Funday.WeBearBears.SpriteLibrary.tiles.panda_fall_anim08, 1, settingsForSittingBears);
                this.sittingBearSprites[WeBareBearsTrippleTrip.BearType.Panda] = sittingPanda;
                this.crateHelperPickups[WeBareBearsTrippleTrip.HelperType.Charlie] = this.createPool(Funday.WeBearBears.SpriteLibrary.ui.helper_charlie_icon, 1, settings);
                this.crateHelperPickups[WeBareBearsTrippleTrip.HelperType.Chloe] = this.createPool(Funday.WeBearBears.SpriteLibrary.ui.helper_chloe_icon, 1, settings);
                this.crateHelperPickups[WeBareBearsTrippleTrip.HelperType.Lucy] = this.createPool(Funday.WeBearBears.SpriteLibrary.ui.helper_lucy_icon, 1, settings);
                this.crateHelperPickups[WeBareBearsTrippleTrip.HelperType.RangerTabes] = this.createPool(Funday.WeBearBears.SpriteLibrary.ui.helper_tabes_icon, 1, settings);
                this.crateHelperPickups[WeBareBearsTrippleTrip.HelperType.RoboBear] = this.createPool(Funday.WeBearBears.SpriteLibrary.ui.helper_robot_icon, 1, settings);
                this.crateHelperPickups[WeBareBearsTrippleTrip.HelperType.Timber] = this.createPool(Funday.WeBearBears.SpriteLibrary.ui.helper_timber_icon, 1, settings);
            }
            createPool(spriteId, count, settings) {
                return new WeBareBearsTrippleTrip.PoolOfSprites(this.game, spriteId, count, settings);
            }
            getDectoration(decorationType) {
                return this.decorationMap[decorationType].get();
            }
            getRoad(roadType) {
                return this.pathSprite[roadType].get();
            }
            getLockedRoad(roadType) {
                return this.lockedPathSprite[roadType].get();
            }
            getSittingBear(bearType) {
                return this.sittingBearSprites[bearType].get();
            }
            addOverlay(parent, durationMs, easing) {
                let overlay = this.whiteOverlay.get();
                parent.addChild(overlay);
                let game = this.game;
                let animationFactory = game.services.animation;
                let tween = animationFactory.tween(overlay, { alpha: 0 }, durationMs, easing);
                tween.onComplete.add(function () { overlay.alpha = 0; });
                tween.onComplete.add(overlay.returnToPool, overlay);
                tween.play();
            }
            addCrateHelperPickup(helperType, crate) {
                let animationFactory = this.game.services.animation;
                let sprite = this.crateHelperPickups[helperType].get();
                let coreScreen = crate.tile.grid.gridManager.coreScreen;
                coreScreen.addChild(sprite);
                let position = coreScreen.toLocal(crate.tile.position, crate.tile.parent);
                sprite.scale.setTo(.6);
                sprite.position.x = position.x;
                sprite.position.y = position.y - sprite.height * .5;
                let tweenScale = animationFactory.tween(sprite.scale, { x: .6, y: .6 }, 300, Phaser.Easing.Back.Out);
                let tweenPosUp = animationFactory.tween(sprite.position, { y: sprite.position.y - (sprite.height * 1.25) }, 800);
                sprite.scale.setTo(0);
                let tweenQueue = animationFactory.queue([tweenScale, tweenPosUp]);
                let delay = animationFactory.delay(600);
                let alphaOut = animationFactory.tween(sprite, { alpha: 0 }, 500);
                let alphaQueue = animationFactory.queue([delay, alphaOut]);
                let bundle = animationFactory.bundle([alphaQueue, tweenQueue]);
                bundle.onComplete.add(sprite.returnToPool, sprite);
                return bundle;
            }
        }
        WeBareBearsTrippleTrip.PoolRepository = PoolRepository;
        class EnumMap {
        }
        WeBareBearsTrippleTrip.EnumMap = EnumMap;
        class HelperPool extends Phaser.Group {
            constructor(gridManager, parent) {
                super(gridManager.game, parent, "Helper Pool");
                this.bearPickups = new EnumMap();
                this.helpers = new EnumMap();
                let game = gridManager.game;
                this.addBearPickup(WeBareBearsTrippleTrip.BearType.Grizzly);
                this.addBearPickup(WeBareBearsTrippleTrip.BearType.Panda);
                this.addHelper(new WeBareBearsTrippleTrip.ChloeHelper(game));
                this.addHelper(new WeBareBearsTrippleTrip.CharlieHelper(game));
                this.addHelper(new WeBareBearsTrippleTrip.RangerTabesHelper(game));
                this.addHelper(new WeBareBearsTrippleTrip.LucyHelper(game));
                this.addHelper(new WeBareBearsTrippleTrip.RoboBearHelper(game));
                this.addHelper(new WeBareBearsTrippleTrip.TimberHelper(game));
                for (let index = 0; index < 9; index++) {
                    this.addHelper(new WeBareBearsTrippleTrip.CrateHelper(game));
                }
                this.killAll();
            }
            addBearPickup(bearType) {
                let bearPickup = new WeBareBearsTrippleTrip.BearPickup(this.game, bearType);
                this.bearPickups[bearType] = bearPickup;
                this.addChild(bearPickup);
            }
            addHelper(helper) {
                if (!this.helpers[helper.helperType]) {
                    this.helpers[helper.helperType] = [];
                }
                this.helpers[helper.helperType].push(helper);
                this.addChild(helper);
            }
            isBearPickupAvailable(bearType) {
                let bearPickup = this.bearPickups[bearType];
                return this.isDormantInPool(bearPickup);
            }
            getBearPickUp(bearType) {
                let bearPickup = null;
                if (this.isBearPickupAvailable(bearType)) {
                    bearPickup = this.bearPickups[bearType];
                    bearPickup.revive();
                    this.removeChild(bearPickup);
                }
                else {
                    throw "Tried to get bear when it was not available!";
                }
                return bearPickup;
            }
            isHelperAvailable(helperType) {
                let helpersOfType = this.helpers[helperType];
                let isHelperAvailable = false;
                for (let index = 0; index < helpersOfType.length; index++) {
                    const helper = helpersOfType[index];
                    if (this.isDormantInPool(helper)) {
                        isHelperAvailable = true;
                        break;
                    }
                }
                return isHelperAvailable;
            }
            getAvailableHelper(helperType) {
                let helpersOfType = this.helpers[helperType];
                let helper = null;
                for (let index = 0; index < helpersOfType.length; index++) {
                    const h = helpersOfType[index];
                    if (this.isDormantInPool(h)) {
                        helper = h;
                        break;
                    }
                }
                return helper;
            }
            isHelperRequiredToBeInHelperQueue(helperType) {
                return this.helpers[helperType][0].isRequiredToBeInHelperQueue;
            }
            getHelper(helperType) {
                let helper = this.getAvailableHelper(helperType);
                if (helper) {
                    helper.revive();
                    this.removeChild(helper);
                }
                else {
                    throw "Tried to get helper when it was not available!";
                }
                return helper;
            }
            returnGameObject(gameObject) {
                if (gameObject instanceof WeBareBearsTrippleTrip.AHelper) {
                    gameObject.reset();
                }
                this.addChild(gameObject);
                gameObject.kill();
            }
            isDormantInPool(gameObject) {
                return !gameObject.alive && this.children.indexOf(gameObject) !== -1;
            }
        }
        WeBareBearsTrippleTrip.HelperPool = HelperPool;
        class CoinPickUpPool extends Phaser.Group {
            constructor(game) {
                super(game);
                this.prepopulate(25);
            }
            prepopulate(count) {
                for (let index = 0; index < count; index++) {
                    this.addCoinPickUpToPool();
                }
            }
            addCoinPickUpToPool() {
                let game = this.game;
                let coinPickUp = new CoinPickUp(game, this);
                coinPickUp.kill();
                this.add(coinPickUp);
            }
            get() {
                if (this.children.length === 0) {
                    this.addCoinPickUpToPool();
                }
                let coinPickUp = this.popChild();
                coinPickUp.revive();
                return coinPickUp;
            }
            popChild() {
                let child = this.children[this.children.length - 1];
                this.remove(child);
                return child;
            }
        }
        WeBareBearsTrippleTrip.CoinPickUpPool = CoinPickUpPool;
        class CoinPickUp extends Phaser.Group {
            constructor(game, pool) {
                super(game);
                this.overlay = null;
                this.coin = null;
                this.shadow = null;
                this.idleAnimation = null;
                this.pool = pool;
                this.shadow = this.addSprite(Funday.WeBearBears.SpriteLibrary.tiles.coin_shadow);
                this.coin = this.addSprite(Funday.WeBearBears.SpriteLibrary.tiles.Coin);
                this.overlay = this.addSprite(Funday.WeBearBears.SpriteLibrary.tiles.coin_white);
                this.coin.addChild(this.overlay);
                this.overlay.visible = false;
            }
            addSprite(spriteId) {
                let game = this.game;
                let sprite = game.createSprite(0, 0, spriteId, this);
                sprite.anchor.setTo(.5);
                return sprite;
            }
            clear() {
                this.scale.setTo(1);
                this.shadow.alpha = 1;
                this.shadow.scale.setTo(1);
                this.coin.position.setTo(0);
                this.overlay.visible = false;
            }
            returnToPool() {
                this.clear();
                this.pool.addChild(this);
                this.kill();
            }
            startIdleAnimation(tile) {
                this.clearIdleAnimation();
                this.idleAnimation = this.createIdleAnimation(tile);
                this.idleAnimation.play();
            }
            clearIdleAnimation() {
                if (this.idleAnimation) {
                    this.idleAnimation.stop();
                    this.idleAnimation = null;
                }
            }
            createIdleAnimation(tile) {
                let game = this.game;
                let animationFactory = game.services.animation;
                let tweenUp = animationFactory.tween(this.coin.position, { y: this.coin.height * -1.25 }, 2000, Phaser.Easing.Quadratic.InOut);
                let tweenDown = animationFactory.tween(this.coin.position, { y: this.coin.height * -1 }, 2000, Phaser.Easing.Quadratic.InOut);
                let shadowScaleUp = animationFactory.tween(this.shadow.scale, { x: 1.1, y: 1.1 }, 2000, Phaser.Easing.Quadratic.InOut);
                let shadowScaleDown = animationFactory.tween(this.shadow.scale, { x: 1, y: 1 }, 2000, Phaser.Easing.Quadratic.InOut);
                let shadowAlphaDown = animationFactory.tween(this.shadow, { alpha: 0.75 }, 2000, Phaser.Easing.Quadratic.InOut);
                let shadowAlphaUp = animationFactory.tween(this.shadow, { alpha: 1 }, 2000, Phaser.Easing.Quadratic.InOut);
                let upBundle = animationFactory.bundle([tweenUp, shadowScaleUp, shadowAlphaDown]);
                let downBundle = animationFactory.bundle([tweenDown, shadowScaleDown, shadowAlphaUp]);
                let array = [upBundle, downBundle];
                let queue = animationFactory.queue(array);
                let loop = animationFactory.loop(queue);
                let totalHorizontalTileCount = tile.grid.tiles[0].length;
                let half = Math.floor(totalHorizontalTileCount / 2);
                let distFromCenter = Math.abs(half - tile.location.i);
                let delayModifier = 1 - ((distFromCenter) / half);
                let idleAnimation = null;
                if (delayModifier) {
                    let delayAnim = animationFactory.delay(delayModifier * 1000);
                    idleAnimation = animationFactory.queue([delayAnim, loop]);
                }
                else {
                    idleAnimation = loop;
                }
                return idleAnimation;
            }
            handlePickUpCoinFromTile(tile) {
                let game = this.game;
                let animationFactory = game.services.animation;
                tile.grid.bringToTop(this);
                let delay = animationFactory.delay(400);
                delay.onComplete.add(this.handlePickUpCoinFromTileInternal.bind(this, tile));
                delay.play();
            }
            flash(durationMs) {
                let flashAnim = this.createFlashAnimation(durationMs);
                flashAnim.play();
            }
            createFlashAnimation(durationMs) {
                let game = this.game;
                let animationFactory = game.services.animation;
                let subDurationMs = durationMs / 3;
                let flashUp = animationFactory.tween(this.overlay, { alpha: 1 }, subDurationMs);
                let flashHold = animationFactory.delay(subDurationMs);
                let flashDown = animationFactory.tween(this.overlay, { alpha: 0 }, subDurationMs);
                let overlay = this.overlay;
                flashUp.onPlay.add(function () {
                    overlay.alpha = 0;
                    overlay.visible = true;
                }, this);
                flashDown.onComplete.add(function () {
                    overlay.visible = false;
                }, this);
                return animationFactory.queue([flashUp, flashHold, flashDown]);
            }
            handlePickUpCoinFromTileInternal(tile) {
                let game = this.game;
                let animationFactory = game.services.animation;
                let bearStack = tile.grid.gridManager.coreScreen.bearStack;
                this.idleAnimation.stop();
                this.overlay.visible = true;
                this.overlay.alpha = 0;
                let flashUp = animationFactory.tween(this.overlay, { alpha: 1 }, 50);
                let flashHold = animationFactory.delay(50);
                let flashDown = animationFactory.tween(this.overlay, { alpha: 0 }, 50);
                let shadowScaleAway = animationFactory.tween(this.shadow.scale, { x: 1.2, y: 1.2 }, 200);
                let shadowFadeAway = animationFactory.tween(this.shadow, { alpha: 0 }, 200);
                let fadeBundle = animationFactory.bundle([shadowScaleAway, shadowFadeAway]);
                game.repositories.sound.onBearStackPickUpCoin();
                let flashQueue = animationFactory.queue([flashUp, flashHold, flashDown]);
                let topBear = bearStack.getTopBear();
                let top = bearStack.top;
                if (topBear.isGrizzly()) {
                    top = bearStack.top;
                }
                else if (topBear.isPanda()) {
                    top = bearStack.top + bearStack.height * .33;
                }
                else if (topBear.isIceBear()) {
                    top = bearStack.top + bearStack.height * .4;
                }
                let tweenUp = animationFactory.tween(this.position, { y: top - this.coin.position.y }, 200);
                let scaleUp = animationFactory.tween(this.scale, { x: 1.3, y: 1.3 }, 200);
                let bundle = animationFactory.bundle([fadeBundle, tweenUp, scaleUp]);
                let wait = animationFactory.delay(140);
                let queue = animationFactory.queue([bundle, flashQueue, wait]);
                queue.onComplete.add(this.collectCoin.bind(this, tile));
                queue.play();
            }
            collectCoin(fromTile) {
                let game = this.game;
                let animationFactory = game.services.animation;
                let ui = game.screenManager.screens.core.ui;
                let levelControl = game.screenManager.screens.core.levelControl;
                let localPosition = ui.toLocal(this.position, this.parent);
                this.position.setTo(localPosition.x, localPosition.y);
                ui.addChild(this);
                let targetPos = { x: ui.coins.position.x,
                    y: ui.coins.position.y - this.coin.position.y };
                let tween = animationFactory.tween(this, targetPos, 400, Phaser.Easing.Quadratic.In);
                tween.onComplete.add(fromTile.clearCoin, fromTile);
                tween.onComplete.add(ui.coins.playCoinCollectAnimation.bind(ui.coins, 1));
                tween.onComplete.add(levelControl.onCoinCollected, levelControl);
                tween.play();
            }
        }
        WeBareBearsTrippleTrip.CoinPickUp = CoinPickUp;
    })(WeBareBearsTrippleTrip = Funday.WeBareBearsTrippleTrip || (Funday.WeBareBearsTrippleTrip = {}));
})(Funday || (Funday = {}));
var Funday;
(function (Funday) {
    var WeBareBearsTrippleTrip;
    (function (WeBareBearsTrippleTrip) {
        class ShopItemRepository {
            constructor(game) {
                this.game = null;
                this.shopItems = [];
                this.game = game;
                this.addShopItem(i18next.t("HelperChloe"), i18next.t("DescriptionChloe"), 5, WeBareBearsTrippleTrip.HelperType.Chloe, Funday.WeBearBears.SpriteLibrary.ui.helper_chloe_icon);
                this.addShopItem(i18next.t("HelperRangerTabes"), i18next.t("DescriptionRangerTabes"), 10, WeBareBearsTrippleTrip.HelperType.RangerTabes, Funday.WeBearBears.SpriteLibrary.ui.helper_tabes_icon);
                this.addShopItem(i18next.t("HelperLucy"), i18next.t("DescriptionLucy"), 20, WeBareBearsTrippleTrip.HelperType.Lucy, Funday.WeBearBears.SpriteLibrary.ui.helper_lucy_icon);
                this.addShopItem(i18next.t("HelperRobotBear"), i18next.t("DescriptionRobotBear"), 30, WeBareBearsTrippleTrip.HelperType.RoboBear, Funday.WeBearBears.SpriteLibrary.ui.helper_robot_icon);
                this.addShopItem(i18next.t("HelperTimber"), i18next.t("DescriptionTimber"), 50, WeBareBearsTrippleTrip.HelperType.Timber, Funday.WeBearBears.SpriteLibrary.ui.helper_timber_icon);
                this.addShopItem(i18next.t("HelperCharlie"), i18next.t("DescriptionCharlie"), 100, WeBareBearsTrippleTrip.HelperType.Charlie, Funday.WeBearBears.SpriteLibrary.ui.helper_charlie_icon);
            }
            addShopItem(name, description, price, helperType, icon) {
                let shopItem = new ShopItem(name, description, price, helperType, icon);
                this.shopItems.push(shopItem);
            }
        }
        WeBareBearsTrippleTrip.ShopItemRepository = ShopItemRepository;
        class ShopItem {
            constructor(name, description, price, helperType, icon) {
                this.name = null;
                this.description = null;
                this.price = 0;
                this.helperType = WeBareBearsTrippleTrip.HelperType.None;
                this.icon = null;
                this.name = name;
                this.description = description;
                this.price = price;
                this.helperType = helperType;
                this.icon = icon;
            }
        }
        WeBareBearsTrippleTrip.ShopItem = ShopItem;
    })(WeBareBearsTrippleTrip = Funday.WeBareBearsTrippleTrip || (Funday.WeBareBearsTrippleTrip = {}));
})(Funday || (Funday = {}));
var Funday;
(function (Funday) {
    var WeBareBearsTrippleTrip;
    (function (WeBareBearsTrippleTrip) {
        class SoundRepository {
            constructor(game) {
                this.game = null;
                this.music = null;
                this.muteSfx = false;
                this.game = game;
            }
            onSplashScreenStartButtonPressed() {
                this.startMusic();
                this.play(Funday.WeBearBears.AudioLibrary.main.sfxPhoneCamera.sfxPhoneCamera);
            }
            onButtonUp() {
                this.play(Funday.WeBearBears.AudioLibrary.main.uiMouseClick.uiMouseClick01);
            }
            onButtonOver() {
                this.play(Funday.WeBearBears.AudioLibrary.main.uiMouseClick.uiMouseClick02);
            }
            onButtonDown() {
                this.play(Funday.WeBearBears.AudioLibrary.main.uiMouseClick.uiMouseClick03);
            }
            startMusic() {
                if (!this.music) {
                    this.music = this.play(Funday.WeBearBears.AudioLibrary.main.music.FundayFactory_CartoonNetwork_WeBareBearsMusicUdkast02LOOP);
                    this.music.fadeIn(5000, true);
                }
            }
            onHelperAcquired(helperType) {
                this.playRandomKey(Funday.WeBearBears.AudioLibrary.main.sfxBuyCharacter);
                this.playHelperVoiceOver(helperType);
            }
            onItemPurchaseRejectedInShop() {
                this.playRandomKey(Funday.WeBearBears.AudioLibrary.main.sfxBuyCharacterDenied);
                this.playRandomKey(Funday.WeBearBears.AudioLibrary.main.voiceBuyCharacterDeniedResponse);
            }
            playHelperVoiceOver(helperType) {
                switch (helperType) {
                    case WeBareBearsTrippleTrip.HelperType.Chloe:
                        this.playRandomKey(Funday.WeBearBears.AudioLibrary.main.voiceHelpers.chloe);
                        break;
                    case WeBareBearsTrippleTrip.HelperType.Charlie:
                        this.playRandomKey(Funday.WeBearBears.AudioLibrary.main.voiceHelpers.charlie);
                        break;
                    case WeBareBearsTrippleTrip.HelperType.RangerTabes:
                        this.playRandomKey(Funday.WeBearBears.AudioLibrary.main.voiceHelpers.rangerTabes);
                        break;
                    case WeBareBearsTrippleTrip.HelperType.RoboBear:
                        this.playRandomKey(Funday.WeBearBears.AudioLibrary.main.voiceHelpers.robotBear);
                        break;
                    case WeBareBearsTrippleTrip.HelperType.Lucy:
                        this.playRandomKey(Funday.WeBearBears.AudioLibrary.main.voiceHelpers.lucy);
                        break;
                    case WeBareBearsTrippleTrip.HelperType.Timber:
                        break;
                    default:
                        break;
                }
            }
            onTappedToStartGame() {
                this.playRandomKey(Funday.WeBearBears.AudioLibrary.main.sfxTapToStart);
            }
            onBearsWalk() {
                this.playRandomKey(Funday.WeBearBears.AudioLibrary.main.sfxFootsteps);
            }
            onBearsHitEndOfRoad(bearType) {
                if (bearType === WeBareBearsTrippleTrip.BearType.Grizzly) {
                    this.play(Funday.WeBearBears.AudioLibrary.main.sfxLooseBear.sfxLooseBearGrizzly);
                }
                else if (bearType === WeBareBearsTrippleTrip.BearType.Panda) {
                    this.play(Funday.WeBearBears.AudioLibrary.main.sfxLooseBear.sfxLooseBearPanda);
                }
            }
            onBearDown() {
                this.playRandomKey(Funday.WeBearBears.AudioLibrary.main.sfxBearsHitEndOfRoad);
            }
            onBearsHitEndOfRoadGameOver() {
                this.playRandomKey(Funday.WeBearBears.AudioLibrary.main.sfxGameOver);
            }
            onBearVoiceOverGameOver() {
                this.playRandomKey(Funday.WeBearBears.AudioLibrary.main.voiceGameOverResponse);
            }
            onBearStackPickUpCoin() {
                this.playRandomKey(Funday.WeBearBears.AudioLibrary.main.sfxPickupCoins);
            }
            onHelmetAddedToBear() {
                this.playRandomKey(Funday.WeBearBears.AudioLibrary.main.sfxHelmetOn);
            }
            onMysterBoxTapped(hp) {
                let sounds = Funday.WeBearBears.AudioLibrary.main.sfxMysteryBox;
                let audioId = null;
                switch (hp) {
                    case 4:
                        audioId = sounds.sfxMysteryBoxHit01;
                        break;
                    case 3:
                        audioId = sounds.sfxMysteryBoxHit02;
                        break;
                    case 2:
                        audioId = sounds.sfxMysteryBoxHit03;
                        break;
                    case 1:
                        audioId = sounds.sfxMysteryBoxHit04;
                        break;
                    case 0:
                        audioId = sounds.sfxMysteryBoxHit05FINAL;
                        break;
                    default:
                        break;
                }
                this.play(audioId);
            }
            onMysteryBoxDropCoins() {
                this.play(Funday.WeBearBears.AudioLibrary.main.sfxMysteryBox.sfxMysteryBoxHit05Coins);
            }
            onCoinSpawn() {
                this.playRandomKey(Funday.WeBearBears.AudioLibrary.main.sfxCoinAppear);
            }
            onBearStackReviveBear(bearType) {
                if (bearType === WeBareBearsTrippleTrip.BearType.Grizzly) {
                    this.onBearStackPickupGrizz();
                }
                else if (bearType === WeBareBearsTrippleTrip.BearType.Panda) {
                    this.onBearStackPickUpPanda();
                }
            }
            onBearStackPickupGrizz() {
                this.play(Funday.WeBearBears.AudioLibrary.main.sfxPickUpGrizzly.sfxPickUpGrizzly);
            }
            onBearStackPickUpPanda() {
                this.play(Funday.WeBearBears.AudioLibrary.main.sfxPickUpPanda.sfxPickUpPanda);
            }
            onHelperUsePower(helperType) {
                if (helperType === WeBareBearsTrippleTrip.HelperType.Timber) {
                    this.play(Funday.WeBearBears.AudioLibrary.main.sfxTimberHelper.sfxTimberHelper);
                }
                else {
                    this.playHelperUsePowerVoiceOver(helperType);
                    this.playRandomKey(Funday.WeBearBears.AudioLibrary.main.sfxCharacterPower);
                }
            }
            playHelperUsePowerVoiceOver(helperType) {
                switch (helperType) {
                    case WeBareBearsTrippleTrip.HelperType.Chloe:
                        this.playRandomKey(Funday.WeBearBears.AudioLibrary.main.voiceHelpers.chloe);
                        break;
                    case WeBareBearsTrippleTrip.HelperType.Charlie:
                        this.playRandomKey(Funday.WeBearBears.AudioLibrary.main.voiceHelpers.charlie);
                        break;
                    case WeBareBearsTrippleTrip.HelperType.RangerTabes:
                        this.playRandomKey(Funday.WeBearBears.AudioLibrary.main.voiceHelpers.rangerTabes);
                        break;
                    case WeBareBearsTrippleTrip.HelperType.RoboBear:
                        this.playRandomKey(Funday.WeBearBears.AudioLibrary.main.voiceHelpers.robotBear);
                        break;
                    case WeBareBearsTrippleTrip.HelperType.Lucy:
                        this.playRandomKey(Funday.WeBearBears.AudioLibrary.main.voiceHelpers.lucy);
                        break;
                    case WeBareBearsTrippleTrip.HelperType.Timber:
                        break;
                    default:
                        break;
                }
            }
            onAfterHelperUsePower(helperType) {
                this.playRandomKey(Funday.WeBearBears.AudioLibrary.main.voiceOverBearsPositive);
            }
            onRotateRoad() {
                this.playRandomKey(Funday.WeBearBears.AudioLibrary.main.sfxRotateRoad);
            }
            onRoadRotatedCorrectly() {
                this.playRandomKey(Funday.WeBearBears.AudioLibrary.main.sfxRoadSnap);
            }
            onRoadSnap() {
                this.playRandomKey(Funday.WeBearBears.AudioLibrary.main.sfxRoadSnap);
            }
            onPickRandomHelper() {
                this.play(Funday.WeBearBears.AudioLibrary.main.sfxRandomHelper.sfxRandomHelper);
            }
            play(audioId) {
                let sound = this.game.playSound(audioId);
                sound.mute = this.muteSfx;
                //console.log("Playing " + audioId.key + " markerName: " + audioId.markerName + " is muted? " + this.muteSfx + " and " + sound.mute);
                return sound;
            }
            playRandomKey(object) {
                let keys = Object.keys(object);
                let key = Phaser.ArrayUtils.getRandomItem(keys);
                let value = object[key];
                if (value instanceof Funday.AudioId) {
                    return this.play(value);
                }
                else if (value instanceof Object) {
                    return this.playRandomKey(value);
                }
            }
        }
        SoundRepository.startButtonAudioSettings = new Funday.UI.ButtonAudioSettings(Funday.WeBearBears.AudioLibrary.main.sfxHoverStartButton.sfxHoverStartButton01, Funday.WeBearBears.AudioLibrary.main.uiMouseClick.uiMouseClick01, Funday.WeBearBears.AudioLibrary.main.uiMouseClick.uiMouseClick02, Funday.WeBearBears.AudioLibrary.main.sfxHoverStartButton.sfxHoverStartButton01);
        SoundRepository.defaultButtonAudioSettings = new Funday.UI.ButtonAudioSettings(Funday.WeBearBears.AudioLibrary.main.sfxHoverCharacters.sfxHoverCharacters, Funday.WeBearBears.AudioLibrary.main.uiMouseClick.uiMouseClick01, Funday.WeBearBears.AudioLibrary.main.uiMouseClick.uiMouseClick02, Funday.WeBearBears.AudioLibrary.main.uiMouseClick.uiMouseClick03);
        SoundRepository.shopButtonAudioSettings = new Funday.UI.ButtonAudioSettings(Funday.WeBearBears.AudioLibrary.main.sfxHoverCharacters.sfxHoverCharacters, Funday.WeBearBears.AudioLibrary.main.uiMouseClick.uiMouseClick01, Funday.WeBearBears.AudioLibrary.main.sfxClickCellPhone.sfxClickCellPhone, Funday.WeBearBears.AudioLibrary.main.uiMouseClick.uiMouseClick03);
        SoundRepository.closeShopButtonAudioSettings = new Funday.UI.ButtonAudioSettings(Funday.WeBearBears.AudioLibrary.main.sfxHoverCharacters.sfxHoverCharacters, Funday.WeBearBears.AudioLibrary.main.uiMouseClick.uiMouseClick01, Funday.WeBearBears.AudioLibrary.main.sfxClickCellPhoneHangUp.sfxClickCellPhoneHangUp, Funday.WeBearBears.AudioLibrary.main.uiMouseClick.uiMouseClick03);
        WeBareBearsTrippleTrip.SoundRepository = SoundRepository;
    })(WeBareBearsTrippleTrip = Funday.WeBareBearsTrippleTrip || (Funday.WeBareBearsTrippleTrip = {}));
})(Funday || (Funday = {}));
var Funday;
(function (Funday) {
    var WeBareBearsTrippleTrip;
    (function (WeBareBearsTrippleTrip) {
        class Screen extends Phaser.Group {
            constructor(screenManager) {
                super(screenManager.game);
                this.screenManager = null;
                this.screenManager = screenManager;
                this.screenManager.screenContainer.addChild(this);
                this.kill();
            }
            onTransitionInCompleted() {
            }
            onTransitionOutCompleted() {
            }
            onTransitionInBegin() {
            }
            onTransitionOutBegin() {
            }
            blockInput() {
                this.screenManager.blockInput();
            }
            unblockInput() {
                this.screenManager.unblockInput();
            }
        }
        WeBareBearsTrippleTrip.Screen = Screen;
    })(WeBareBearsTrippleTrip = Funday.WeBareBearsTrippleTrip || (Funday.WeBareBearsTrippleTrip = {}));
})(Funday || (Funday = {}));
var Funday;
(function (Funday) {
    var WeBareBearsTrippleTrip;
    (function (WeBareBearsTrippleTrip) {
        class ScreenManager {
            constructor(game) {
                this.game = null;
                this.screens = null;
                this.screenContainer = null;
                this.currentScreen = null;
                this.inputBlocker = null;
                this.onInputBlocked = new Phaser.Signal();
                this.game = game;
                this.screenContainer = game.add.group();
                game.world.addChild(this.screenContainer);
                this.screens = new Screens(this);
                this.inputBlocker = new Phaser.Sprite(this.game, 0, 0);
                this.inputBlocker.hitArea = new Phaser.Rectangle(0, 0, this.game.world.width, this.game.world.height);
                this.inputBlocker.inputEnabled = true;
                this.inputBlocker.events.onInputUp.add(function () { this.onInputBlocked.dispatch(); }, this);
                this.screenContainer.addChild(this.inputBlocker);
            }
            blockInput() {
                this.inputBlocker.bringToTop();
            }
            unblockInput() {
                this.inputBlocker.parent.setChildIndex(this.inputBlocker, 0);
            }
            isInputBlocked() {
                return this.inputBlocker.parent.children.indexOf(this.inputBlocker) === this.inputBlocker.parent.children.length - 1;
            }
            setSplashScreen() {
                this.clearCurrentScreen();
                this.setScreen(this.screens.splash);
            }
            clearCurrentScreen() {
                if (this.currentScreen) {
                    this.currentScreen.kill();
                    this.currentScreen = null;
                }
            }
            setScreen(screen) {
                this.currentScreen = screen;
                screen.revive();
            }
            transitionToCore() {
                let transitionAnimation = this.createTransitionAnimation(this.screens.core, this.currentScreen);
                transitionAnimation.play();
            }
            createTransitionAnimation(to, from, callback) {
                let game = this.game;
                let animation = game.services.animation;
                let duration = 750;
                let transitionOutAnimation = animation.fadeToBlack(duration);
                let transitionInAnimation = animation.fadeFromBlack(duration);
                let transitionAnimation = animation.queue([transitionOutAnimation, transitionInAnimation]);
                transitionOutAnimation.onPlay.add(function () {
                    this.blockInput();
                    from.onTransitionOutBegin();
                    to.onTransitionInBegin();
                }, this);
                transitionOutAnimation.onComplete.add(function () {
                    this.clearCurrentScreen();
                    this.setScreen(to);
                    this.unblockInput();
                    from.onTransitionOutCompleted();
                    to.onTransitionInCompleted();
                    if (callback) {
                        callback();
                    }
                }, this);
                return transitionAnimation;
            }
        }
        WeBareBearsTrippleTrip.ScreenManager = ScreenManager;
        class Screens {
            constructor(screenManager) {
                this.splash = null;
                this.core = null;
                this.splash = new WeBareBearsTrippleTrip.SplashScreen(screenManager);
                this.core = new WeBareBearsTrippleTrip.ZCoreScreen(screenManager);
            }
        }
        WeBareBearsTrippleTrip.Screens = Screens;
    })(WeBareBearsTrippleTrip = Funday.WeBareBearsTrippleTrip || (Funday.WeBareBearsTrippleTrip = {}));
})(Funday || (Funday = {}));
var Funday;
(function (Funday) {
    var WeBareBearsTrippleTrip;
    (function (WeBareBearsTrippleTrip) {
        class SplashScreen extends WeBareBearsTrippleTrip.Screen {
            constructor(screenManager) {
                super(screenManager);
                this.startButton = null;
                let game = this.game;
                let background = game.createSprite(0, 0, Funday.WeBearBears.SpriteLibrary.splash_screen.splash_screen_background);
                this.addChild(background);

                let logo = game.add.sprite(game.world.centerX, game.height*0.2, 'splash-logo');
                logo.scale.set(game.canvas.width/1290);
                logo.anchor.setTo(0.5);
                this.addChild(logo);

                background.anchor.setTo(.5, 1.0);
                background.position.x = game.canvas.width / 2;
                background.bottom = game.height;
                if(game.world.width>background.width) background.width = game.world.width
                let startButton = game.createButton(game.world.centerX, game.height - game.applyResolutionRatio(225), Funday.WeBearBears.SpriteLibrary.ui.start_button_box);
                startButton.scale.set(0.8, 0.8);
                this.addChild(startButton);
                let textGroup = game.add.group();
                startButton.button.addChild(textGroup);
                startButton.setAudioSettings(WeBareBearsTrippleTrip.SoundRepository.startButtonAudioSettings);
                startButton.onUp.add(this.onStartButtonUp, this);
                let highscoreFontSize = game.applyResolutionRatio(80);
                let highscoreText = this.addText(i18next.t('highscore') + game.inventory.getHighscore(), highscoreFontSize, textGroup);
                let startGame = this.addText(i18next.t('start'), highscoreFontSize, textGroup);
                let centerOffset = startButton.button.height * .05;
                highscoreText.bottom = -centerOffset;
                startGame.top = centerOffset;
                this.fixedToCamera = true;
                this.startButton = startButton;
            }
            addText(caption, size, parent) {
                let text = this.game.add.existing(new Phaser.Text(this.game,0, 0, caption, {
                    font: font1,
                    fontSize: 60,
                    fontWeight: 700,
                    fill: 'white'
                }));
                text.align = "center";
                text.anchor.setTo(.5);
                parent.addChild(text);
                return text;
            }
            onStartButtonUp() {
                let game = this.game;
                let animationFactory = game.services.animation;
                game.repositories.sound.onSplashScreenStartButtonPressed();
                this.startButton.button.inputEnabled = false;
                let flashUp = animationFactory.fadeToWhite(100);
                let delay = animationFactory.delay(50);
                let flashDown = animationFactory.fadeFromWhite(100);
                flashDown.onComplete.add(game.screenManager.transitionToCore, game.screenManager);
                flashDown.onComplete.add(function () {
                    this.startButton.button.inputEnabled = true;
                }, this);
                this.handleFullScreen();
                let queue = animationFactory.queue([flashUp, delay, flashDown]);
                queue.play();
            }
            handleFullScreen() {
                if (this.game.scale.isFullScreen) {
                    this.game.scale.stopFullScreen();
                }
                else {
                    if (this.game.device.android) {
                    }
                }
            }
        }
        WeBareBearsTrippleTrip.SplashScreen = SplashScreen;
    })(WeBareBearsTrippleTrip = Funday.WeBareBearsTrippleTrip || (Funday.WeBareBearsTrippleTrip = {}));
})(Funday || (Funday = {}));
var Funday;
(function (Funday) {
    var WeBareBearsTrippleTrip;
    (function (WeBareBearsTrippleTrip) {
        class ZCoreScreen extends WeBareBearsTrippleTrip.Screen {
            constructor(screenManager) {
                super(screenManager);
                this.gameLayer = null;
                this.waterForeground = null;
                this.landForeground = null;
                this.skyBackground = null;
                this.ui = null;
                this.levelControl = null;
                this.bearStack = null;
                this.gridManager = null;
                this.tutorialOverlay = null;
                this.tutorialHand = null;
                this.warpTimber = null;
                let game = screenManager.game;
                this.gameLayer = game.add.group(this, "Game layer");
                this.addChild(this.gameLayer);
                this.levelControl = new WeBareBearsTrippleTrip.LevelControl(this);
                this.waterForeground = new WeBareBearsTrippleTrip.WaterForeground(game);
                this.gameLayer.add(this.waterForeground);
                this.waterForeground.fixedToCamera = true;
                let height = game.getFrameData(Funday.WeBearBears.SpriteLibrary.tiles.wall).height;
                this.landForeground = game.createTileSprite(0, this.waterForeground.top - (height * .5), game.world.width, height, Funday.WeBearBears.SpriteLibrary.tiles.wall);
                this.landForeground.fixedToCamera = true;
                this.gameLayer.addChild(this.landForeground);
                let bearStack = new WeBareBearsTrippleTrip.BearStack(game, this.gameLayer);
                this.bearStack = bearStack;
                this.gridManager = new WeBareBearsTrippleTrip.GridManager(this);
                let grid1 = this.gridManager.currentGrid;
                this.gameLayer.addChild(grid1);
                grid1.alignTo(this.landForeground, Phaser.TOP_CENTER);
                let grid2 = this.gridManager.nextGrid;
                this.gameLayer.addChild(grid2);
                grid2.position.y = grid1.position.y;
                let grid3 = this.gridManager.previousGrid;
                this.gameLayer.addChild(grid3);
                grid3.position.x = grid1.position.x - grid1.width;
                grid3.position.y = grid2.position.y;
                this.skyBackground = new WeBareBearsTrippleTrip.Background(game);
                this.gameLayer.addChild(this.skyBackground);
                this.skyBackground.moveChildrenToTopOfGrid(grid3);
                this.skyBackground.fixedToCamera = true;
                let topLineSprite = game.createSprite(0, this.skyBackground.bottom, Funday.WeBearBears.SpriteLibrary.tiles.top_line);
                topLineSprite.anchor.y = 1;
                topLineSprite.width = game.canvas.width;
                topLineSprite.fixedToCamera = true;
                this.gameLayer.addChild(topLineSprite);
                this.gameLayer.bringToTop(this.waterForeground);
                grid1.addBearStackToStartTile(bearStack);
                game.world.setBounds(0, 0, Number.POSITIVE_INFINITY, game.canvas.height);
                this.gameLayer.bringToTop(grid3);
                this.gameLayer.bringToTop(grid2);
                this.gameLayer.bringToTop(grid1);
                this.ui = new WeBareBearsTrippleTrip.UI.UIOverlay(this);
                this.bringToTop(this.ui);
                this.tutorialOverlay = new WeBareBearsTrippleTrip.TutorialOverlay(game);
                //this.tutorialOverlay.bitmapText = game.add.bitmapText(0, 0, "terry", "", 80);
                
                this.tutorialOverlay.bitmapText = game.add.existing(new Phaser.Text(this.game, 0, 0, "",
                    {
                        font: font1,
                        fontSize: 50,
                        fontWeight: 700,
                        fill: 'white'
                    }
                ));
                
                this.tutorialOverlay.bitmapText.anchor.setTo(.5, .5);
                this.tutorialOverlay.addChild(this.tutorialOverlay.bitmapText);
                this.addChild(this.tutorialOverlay);
                this.tutorialOverlay.kill();
                let tutorialHandSprite = game.createSprite(0, 0, Funday.WeBearBears.SpriteLibrary.tiles.hand);
                this.tutorialHand = new WeBareBearsTrippleTrip.TutorialHand(game, tutorialHandSprite);
                tutorialHandSprite.anchor.x = .3;
                this.tutorialHand.kill();
                this.addChild(this.tutorialHand);
                this.warpTimber = new WeBareBearsTrippleTrip.WarpTimber(game);
                this.addChild(this.warpTimber);
                this.levelControl.onCoreScreenConstructionComplete();
                this.bearStack.currentTile.grid.sortGameObjectsLayer();
                window.core = this;
                if(this.bearStack.currentTile.grid.x>0)
                {
                    this.game.camera.x = this.bearStack.currentTile.grid.x;
                }
                //this.game.camera.y = 0;
               
            }
            reset() {
                this.game.camera.x = 0;
                this.game.camera.y = 0;
                this.gridManager.clear();
                this.bearStack.clear();
                this.ui.score.reset();
            }
            setToStartConfiguration() {
                this.gridManager.buildFirstLevels();
                this.gridManager.currentGrid.addBearStackToStartTile(this.bearStack);
            }
            onTransitionInCompleted() {
                super.onTransitionInCompleted();
                this.levelControl.onCoreFadedIn();
                this.game.services.analytics.trackLocation(Funday.Service.GameLocations.PLAY);
            }
        }
        WeBareBearsTrippleTrip.ZCoreScreen = ZCoreScreen;
    })(WeBareBearsTrippleTrip = Funday.WeBareBearsTrippleTrip || (Funday.WeBareBearsTrippleTrip = {}));
})(Funday || (Funday = {}));
var Funday;
(function (Funday) {
    var WeBareBearsTrippleTrip;
    (function (WeBareBearsTrippleTrip) {
        class StateBoot extends Phaser.State {
            init() {
                let game = this.game;
                game.preBoot();
            }
            preload() {
                let game = this.game;
                game.loadLoadScreenGfxForCurrentResolution();
            }
            create() {
                let game = this.game;
                game.startLoad();
            }
        }
        WeBareBearsTrippleTrip.StateBoot = StateBoot;
    })(WeBareBearsTrippleTrip = Funday.WeBareBearsTrippleTrip || (Funday.WeBareBearsTrippleTrip = {}));
})(Funday || (Funday = {}));
var Funday;
(function (Funday) {
    var WeBareBearsTrippleTrip;
    (function (WeBareBearsTrippleTrip) {
        class StateGame extends Phaser.State {
            create() {
                let game = this.game;
                game.onLoadComplete();
                game.screenManager = new WeBareBearsTrippleTrip.ScreenManager(game);
                game.screenManager.setSplashScreen();
                let animationFactory = game.services.animation;
                let fadeFromBlack = animationFactory.fadeFromBlack(900);
                fadeFromBlack.onComplete.add(game.screenManager.unblockInput, game.screenManager);
                fadeFromBlack.play();
            }
        }
        WeBareBearsTrippleTrip.StateGame = StateGame;
    })(WeBareBearsTrippleTrip = Funday.WeBareBearsTrippleTrip || (Funday.WeBareBearsTrippleTrip = {}));
})(Funday || (Funday = {}));
var Funday;
(function (Funday) {
    var WeBareBearsTrippleTrip;
    (function (WeBareBearsTrippleTrip) {
        class StateLoad extends Phaser.State {
            preload() {
                let cartoonNetworkGame = this.game;
                cartoonNetworkGame.loadGfxForCurrentResolution();
                this.load.pack("Audio", "assets/data/assets.json");
                this.load.json("maps", "assets/data/maps/maps.json");
                this.load.bitmapFont('terry', 'assets/images/bitmapfonts/webarebears_font-export.png', 'assets/data/bitmapfonts/webarebears_font-export.xml');
                this.load.bitmapFont('wbb_font', 'assets/images/bitmapfonts/webarebears_font_new-export.png', 'assets/data/bitmapfonts/webarebears_font_new-export.xml');
                this.load.image('splash-logo', 'locales/'+i18next.language+'/Title.png');
                let loadScreenNew = new Funday.UI.CartoonNetworkLoadScreen(this, 0xf9f6d8);
                this.game.stage.backgroundColor = 0xf9f6d8;
            }
            create() {
                let game = this.game;
                let animationFactory = game.services.animation;
                let animFadeToBlack = animationFactory.fadeToBlack(900);
                animFadeToBlack.onComplete.add(function () {
                    game.startGame();
                    game.stage.backgroundColor = 0x7cc8fc;
                });
                animFadeToBlack.play();
            }
        }
        WeBareBearsTrippleTrip.StateLoad = StateLoad;
    })(WeBareBearsTrippleTrip = Funday.WeBareBearsTrippleTrip || (Funday.WeBareBearsTrippleTrip = {}));
})(Funday || (Funday = {}));
var Funday;
(function (Funday) {
    var WeBareBearsTrippleTrip;
    (function (WeBareBearsTrippleTrip) {
        class TutorialHand extends Phaser.Group {
            constructor(game, handSprite) {
                super(game);
                this.handSprite = null;
                this.currentHandAnimation = null;
                this.targetScale = new Phaser.Point(1, 1);
                this.handSprite = handSprite;
                this.addChild(handSprite);
                this.scale.setTo(this.targetScale.x, this.targetScale.y);
            }
            clearCurrentHandAnimation() {
                if (this.currentHandAnimation) {
                    this.currentHandAnimation.stop();
                    this.currentHandAnimation = null;
                }
            }
            startHelpTapAnimation(target) {
                this.clearCurrentHandAnimation();
                this.revive();
                let animation = this.createHelpTapAnimation(target);
                animation.play();
                this.currentHandAnimation = animation;
            }
            createHelpTapAnimation(target) {
                let game = this.game;
                let animationFactory = game.services.animation;
                let localTargetPosition = this.toLocal(target.position, target.parent);
                let hand = this.handSprite;
                let tweenToTarget = animationFactory.tween(hand, localTargetPosition, 500, Phaser.Easing.Cubic.Out);
                tweenToTarget.onPlay.add(function () {
                    hand.position.x = localTargetPosition.x;
                    hand.position.y = localTargetPosition.y + (hand.height * .5);
                    hand.alpha = 0;
                }, this);
                let alphaIn = animationFactory.tween(hand, { alpha: 1 }, 200, Phaser.Easing.Quadratic.In);
                let bundleIn = animationFactory.bundle([alphaIn, tweenToTarget]);
                let punchScaleTweenDown = animationFactory.tween(hand.scale, { x: this.targetScale.x * .9, y: this.targetScale.y * .9 }, 50);
                let punchScaleTweenUp = animationFactory.tween(hand.scale, { x: this.targetScale.x, y: this.targetScale.y }, 150);
                let punchQueue = animationFactory.queue([punchScaleTweenDown, punchScaleTweenUp]);
                let repeatPunch = animationFactory.repeat(punchQueue, 1);
                let delay = animationFactory.delay(600);
                let alphaOut = animationFactory.tween(hand, { alpha: 0 }, 300, Phaser.Easing.Quadratic.In);
                let wait = animationFactory.delay(1200);
                let queue = animationFactory.queue([bundleIn, repeatPunch, delay, alphaOut, wait]);
                let loop = animationFactory.loop(queue);
                return queue;
            }
            clear() {
                this.clearCurrentHandAnimation();
                this.kill();
            }
        }
        WeBareBearsTrippleTrip.TutorialHand = TutorialHand;
    })(WeBareBearsTrippleTrip = Funday.WeBareBearsTrippleTrip || (Funday.WeBareBearsTrippleTrip = {}));
})(Funday || (Funday = {}));
var Funday;
(function (Funday) {
    var WeBareBearsTrippleTrip;
    (function (WeBareBearsTrippleTrip) {
        class TutorialManager {
        }
        WeBareBearsTrippleTrip.TutorialManager = TutorialManager;
    })(WeBareBearsTrippleTrip = Funday.WeBareBearsTrippleTrip || (Funday.WeBareBearsTrippleTrip = {}));
})(Funday || (Funday = {}));
var Funday;
(function (Funday) {
    var WeBareBearsTrippleTrip;
    (function (WeBareBearsTrippleTrip) {
        class TutorialOverlay extends Phaser.Group {
            constructor(game) {
                super(game, null, "Tutorial Overlay");
                
                this.background = null;
                this.gfx = null;
                this.inputBlockerA = null;
                this.inputBlockerB = null;
                this.inputBlockerC = null;
                this.inputBlockerD = null;
                this.bitmapText = null;
                this.background = game.add.sprite(0, 0);
                this.background.loadTexture(Funday.UI.Modal.Modal.getBackgroundTexture(game));
                this.addChild(this.background);
                this.background.kill();
                this.gfx = game.add.graphics(0, 0, this);
                this.mask = this.gfx;
                this.fixedToCamera = true;
                this.background.events.onInputDown.add(function () { debugger; });
                this.inputBlockerA = game.add.sprite(0, 0);
                this.inputBlockerB = game.add.sprite(0, 0);
                this.inputBlockerC = game.add.sprite(0, 0);
                this.inputBlockerD = game.add.sprite(0, 0);
                this.addChild(this.inputBlockerA);
                this.addChild(this.inputBlockerB);
                this.addChild(this.inputBlockerC);
                this.addChild(this.inputBlockerD);
                this.inputBlockerA.inputEnabled = true;
                this.inputBlockerB.inputEnabled = true;
                this.inputBlockerC.inputEnabled = true;
                this.inputBlockerD.inputEnabled = true;
            }
            showRectangle(gameObject, caption) {
                this.revive();
                let topLeft = this.toLocal(new Phaser.Point(gameObject.left, gameObject.top), gameObject.parent);
                let topRight = this.toLocal(new Phaser.Point(gameObject.right, gameObject.top), gameObject.parent);
                let bottomLeft = this.toLocal(new Phaser.Point(gameObject.left, gameObject.bottom), gameObject.parent);
                let bottomRight = this.toLocal(new Phaser.Point(gameObject.right, gameObject.bottom), gameObject.parent);
                let center = this.toLocal(new Phaser.Point(gameObject.centerX, gameObject.centerY), gameObject.parent);
                let width = gameObject.game.canvas.width;
                let height = gameObject.game.canvas.height;
                this.background.revive();
                this.gfx.clear();
                this.gfx.beginFill(0xff0000);
                this.gfx.drawRect(0, 0, width, topLeft.y);
                this.gfx.drawRect(topRight.x, topRight.y, width - topRight.x, height - topRight.y);
                this.gfx.drawRect(0, bottomRight.y, bottomRight.x, height - bottomRight.y);
                this.gfx.drawRect(0, topLeft.y, bottomLeft.x, bottomLeft.y - topLeft.y);
                this.gfx.endFill();
                this.inputBlockerA.position.setTo(0, 0);
                this.inputBlockerA.width = width;
                this.inputBlockerA.height = topLeft.y;
                this.inputBlockerB.position.setTo(topRight.x, topRight.y);
                this.inputBlockerB.width = width - topRight.x;
                this.inputBlockerB.height = height - topRight.y;
                this.inputBlockerC.position.setTo(0, bottomRight.y);
                this.inputBlockerC.width = bottomRight.x;
                this.inputBlockerC.height = height - bottomRight.y;
                this.inputBlockerD.position.setTo(0, topLeft.y);
                this.inputBlockerD.width = bottomLeft.x;
                this.inputBlockerD.height = bottomLeft.y - topLeft.y;
                this.placeText(gameObject, caption);
                this.game.tutorialStepIsShown = true;
            }
            placeText(gameObject, caption) {
                let topLeft = this.toLocal(new Phaser.Point(gameObject.left, gameObject.top), gameObject.parent);
                let center = this.toLocal(new Phaser.Point(gameObject.centerX, gameObject.centerY), gameObject.parent);
                let width = gameObject.game.canvas.width;
                let height = gameObject.game.canvas.height;
                this.bitmapText.setText(caption);
                let textPadding = this.bitmapText.height * .4;
                this.bitmapText.position.x = center.x;
                this.bitmapText.bottom = topLeft.y - textPadding;
                if (this.bitmapText.left < 0) {
                    this.bitmapText.left = textPadding;
                }
                if (this.bitmapText.right > width - textPadding) {
                    this.bitmapText.right = width - textPadding;
                }
            }
            hide() {
                this.kill();
                console.log("Tutorial square killed")
                this.game.tutorialStepIsShown = false;
            }
        }
        WeBareBearsTrippleTrip.TutorialOverlay = TutorialOverlay;
    })(WeBareBearsTrippleTrip = Funday.WeBareBearsTrippleTrip || (Funday.WeBareBearsTrippleTrip = {}));
})(Funday || (Funday = {}));
var Funday;
(function (Funday) {
    var WeBareBearsTrippleTrip;
    (function (WeBareBearsTrippleTrip) {
        class PoolOfSprites extends Phaser.Group {
            constructor(game, spriteId, prepopulateCount, settings) {
                super(game);
                this.spriteId = null;
                this.settings = null;
                this.spriteId = spriteId;
                this.settings = settings || new SpriteSettings();
                this.prepopulate(prepopulateCount);
            }
            prepopulate(count) {
                for (let index = 0; index < count; index++) {
                    this.addSpriteToPool();
                }
            }
            createPoolSprite() {
                return new PoolSprite(this, 0, 0, this.spriteId.key, this.spriteId.frame);
            }
            addSpriteToPool() {
                let sprite = this.createPoolSprite();
                sprite.kill();
                this.add(sprite);
            }
            get() {
                if (this.children.length === 0) {
                    this.addSpriteToPool();
                }
                let poolSprite = this.popChild();
                this.applySpriteSettings(poolSprite);
                poolSprite.revive();
                return poolSprite;
            }
            applySpriteSettings(sprite) {
                sprite.anchor.x = this.settings.anchor.x;
                sprite.anchor.y = this.settings.anchor.y;
                sprite.scale.x = this.settings.scale.x;
                sprite.scale.y = this.settings.scale.y;
                sprite.alpha = this.settings.alpha;
                sprite.angle = this.settings.angle;
            }
            popChild() {
                let child = this.children[this.children.length - 1];
                this.remove(child);
                return child;
            }
            return(poolSprite) {
                poolSprite.kill();
                this.add(poolSprite);
            }
        }
        WeBareBearsTrippleTrip.PoolOfSprites = PoolOfSprites;
        class PoolSprite extends Phaser.Sprite {
            constructor(pool, x, y, key, frame) {
                super(pool.game, x, y, key, frame);
                this.pool = null;
                this.pool = pool;
            }
            returnToPool() {
                this.pool.return(this);
            }
        }
        WeBareBearsTrippleTrip.PoolSprite = PoolSprite;
        class SpriteSettings {
            constructor() {
                this.anchor = new Phaser.Point(0, 0);
                this.scale = new Phaser.Point(1, 1);
                this.angle = 0;
                this.alpha = 1;
            }
        }
        WeBareBearsTrippleTrip.SpriteSettings = SpriteSettings;
    })(WeBareBearsTrippleTrip = Funday.WeBareBearsTrippleTrip || (Funday.WeBareBearsTrippleTrip = {}));
})(Funday || (Funday = {}));
