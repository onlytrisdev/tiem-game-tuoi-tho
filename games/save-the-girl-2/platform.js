
/**
 * 4399基础接口
 */
class Game4399Platform {
    /**
         * 分享
         */
    shareAppMessage() {

        window.h5api.share();
    }

    /**
     * 是否登录
     */
    isLogin() {
        /**
         * 是否登录
         */
        return window.h5api.isLogin()
    }
    /**
     * 登录
     * @param fun 
     */
    gameLogin(fun) {
        window.h5api.login(function (data) {
            /* data = {
                uId: 1234567, // 用户编号
                userName: '昵称', // 用户昵称
            } */
            fun(data);
        })
    }
    /**
     * 获取头像
     * @param uid 
     */
    getUserAvatar(uid) {
        return window.h5api.getUserAvatar(uid)
    }

    getUserSmallAvatar(uid) {
        window.h5api.getUserSmallAvatar(uid)
    }

    getUserBigAvatar(uid) {
        window.h5api.getUserBigAvatar(uid)
    }
    /**
     * 获得是否可以播放广告及剩余次数
     * @param {func} callback 回调函数
     * @return boolean 是否可播放
     * 
     */
    canPlayAd(callback) {
        window.h5api.canPlayAd((data) => {
            callback(data);
        })
    }


    playAd(callback) {
        window.h5api.playAd((obj) => {
            callback(obj)
        })
    }

}
window["4399MiniGame"] = true;
window.platform = new Game4399Platform();