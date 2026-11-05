/**
 * 录屏管理
 * @author XuJian
 */
var RECORDERSTATUS;
(function (RECORDERSTATUS) {
    RECORDERSTATUS[RECORDERSTATUS["START"] = 0] = "START";
    RECORDERSTATUS[RECORDERSTATUS["STOP"] = 1] = "STOP";
})(RECORDERSTATUS || (RECORDERSTATUS = {}));
var RecorderManager = /** @class */ (function () {
    function RecorderManager() {
        this.status = RECORDERSTATUS.STOP;
        this.enabled = false;
    }
    Object.defineProperty(RecorderManager, "I", {
        get: function () {
            var _this = this;
            if (!this.instance) {
                this.instance = new RecorderManager();
                if (typeof tt !== 'undefined') {
                    this.instance.recorder = tt.getGameRecorderManager && tt.getGameRecorderManager();
                }
                if (typeof swan !== 'undefined') {
                    this.instance.recorder = swan.getVideoRecorderManager && swan.getVideoRecorderManager();
                }
                if (this.instance.recorder) {
                    this.instance.recorder.onStart(function (res) {
                        _this.instance.status = RECORDERSTATUS.START;
                        Dispatcher.event(Events.RECORDER_START);
                    });
                    this.instance.recorder.onStop(function (res) {
                        _this.instance.status = RECORDERSTATUS.STOP;
                        _this.instance.path = res.videoPath;
                        Dispatcher.event(Events.RECORDER_STOP, [res.videoPath]);
                    });
                    this.instance.enabled = true;
                }
                else {
                    this.instance.enabled = false;
                }
            }
            return this.instance;
        },
        enumerable: false,
        configurable: true
    });
    RecorderManager.prototype.start = function () {
        if (!this.enabled)
            return;
        if (this.status === RECORDERSTATUS.START)
            return;
        console.log("startstartstartstart");
        this.recorder.start({ duration: 50 });
    };
    RecorderManager.prototype.stop = function () {
        if (!this.enabled)
            return;
        console.log("this.status ==", this.status);
        if (this.status === RECORDERSTATUS.STOP)
            return;
        console.log("stopstopstopstop");
        this.recorder.stop();
    };
    RecorderManager.prototype.share = function (successHander) {
        console.log("this.path =", this.path);
        console.log("this.path =", this.enabled);
        if (!this.enabled)
            return;
        if (typeof tt !== 'undefined') {
            tt.shareAppMessage({
                channel: 'video',
                title: '狙击手大作战',
                imageUrl: '',
                query: '',
                extra: {
                    videoPath: this.path
                },
                success: function () {
                    successHander && successHander.run();
                },
                fail: function (e) {
                    console.log('分享视频失败');
                }
            });
        }
        if (typeof swan !== 'undefined') {
            console.log("this.path =", this.path);
            swan.shareVideo({
                videoPath: this.path,
                success: function () {
                    successHander && successHander.run();
                }
            });
        }
    };
    return RecorderManager;
}());
