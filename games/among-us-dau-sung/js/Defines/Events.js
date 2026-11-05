/**
* 泛型定义
*/
var Events = /** @class */ (function () {
    function Events() {
    }
    Events.APP_SHOW = "APP_SHOW";
    /**
     * 甲板打开中
     */
    Events.ROLETABLE_OPENING = "ROLETABLE_OPENING";
    /**
     * 死亡
     */
    Events.GAME_ENEMY_DEAD = "GAME_ENEMY_DEAD";
    /**
     * WebSocket错误
     */
    Events.GAME_ENEMY_LEAVE_WINDOW = "GAME_ENEMY_LEAVE_WINDOW";
    /**
     * WebSocket登录
     */
    Events.GAME_ENEMY_ENTER_WINDOW = "GAME_ENEMY_ENTER_WINDOW";
    /**
     * 钻石变化
     */
    Events.DIAMOND_CHANGE = "DIAMOND_CHANGE";
    /**
     * 体力变化
     */
    Events.POWER_CHANGE = "POWER_CHANGE";
    /**
     * 体力回复
     */
    Events.POWER_RECOVERY = "POWER_RECOVERY";
    Events.AIRDROP_SHOW = "AIRDROP_SHOW";
    Events.AIRDROP_HIDE = "AIRDROP_HIDE";
    Events.FAILE_VIDEO = "FAILE_VIDEO";
    /**
     * 页面关闭
     */
    Events.GUIDE_CLOSE = "GUIDE_CLOSE";
    /**
     * 录屏开始
     */
    Events.RECORDER_START = "RECORDER_START";
    /**
     * 录屏停止
     */
    Events.RECORDER_STOP = "RECORDER_STOP";
    return Events;
}());
