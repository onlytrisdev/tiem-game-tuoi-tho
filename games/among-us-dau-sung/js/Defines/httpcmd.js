/**
* http请求定义
*/
var httpcmd = /** @class */ (function () {
    function httpcmd() {
    }
    /**
     * 登录
     * @param code 微信登录的唯一标识
     * @param appId 应用的唯一id
     * @param type 登录类型 微信登录
     */
    httpcmd.LOGIN = "login";
    return httpcmd;
}());
