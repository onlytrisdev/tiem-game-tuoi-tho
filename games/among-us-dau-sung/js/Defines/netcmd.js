/**
* 泛型定义
*/
var netcmd = /** @class */ (function () {
    function netcmd() {
    }
    /**
     * WebSocket连接成功
     */
    netcmd.WEBSOCKET_CONNECTED = "WebSocket_CONNECTED";
    /**
     * WebSocket连接关闭
     */
    netcmd.WEBSOCKET_CLOSE = "WEBSOCKET_CLOSE";
    /**
     * WebSocket接受消息
     */
    netcmd.WEBSOCKET_MESSAGE = "WEBSOCKET_MESSAGE";
    /**
     * WebSocket错误
     */
    netcmd.WEBSOCKET_ERROR = "WEBSOCKET_ERROR";
    /**
     * WebSocket登录
     */
    netcmd.WEBSOCKET_LOGIN = "login";
    return netcmd;
}());
