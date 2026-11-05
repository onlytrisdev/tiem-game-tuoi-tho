/**
 * 音频管理
 * @author XuJian
 */
var Core;
(function (Core) {
    var Manager;
    (function (Manager) {
        var AudioManager = /** @class */ (function () {
            function AudioManager() {
            }
            AudioManager.playMusic = function (muisc) {
                if (this.muisc && this.muisc === muisc) {
                    return;
                }
                this.muisc = muisc;
                return Laya.SoundManager.playMusic(muisc);
            };
            AudioManager.playSound = function (sound) {
                Laya.SoundManager.playSound(sound);
            };
            AudioManager.muisc = null;
            return AudioManager;
        }());
        Manager.AudioManager = AudioManager;
    })(Manager = Core.Manager || (Core.Manager = {}));
})(Core || (Core = {}));
