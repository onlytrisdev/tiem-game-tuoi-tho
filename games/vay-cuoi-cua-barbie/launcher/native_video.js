/**
 * Created by ands on 2014/12/29.
 */
share = function (msg) {
    alert(msg);
}

getVideo = function () {
    return document.getElementById("hiddenVideo");
}

attachUserMedia = function () {
    var video = getVideo();
    navigator.getUserMedia(
        {video: true},
        function (stream) {
            video.src = window.webkitURL.createObjectURL(stream);
        }, function (error) {
            alert(error);
        });
}

mafaQrcode = function (canvas, options) {
    var qrcode	= new QRCode(options.typeNumber, options.correctLevel);
    qrcode.addData(options.text);
    qrcode.make();

    canvas.width	= options.width;
    canvas.height	= options.height;
    var ctx		= canvas.getContext('2d');

    // compute tileW/tileH based on options.width/options.height
    var tileW	= options.width  / qrcode.getModuleCount();
    var tileH	= options.height / qrcode.getModuleCount();

    // draw in the canvas
    for( var row = 0; row < qrcode.getModuleCount(); row++ ){
        for( var col = 0; col < qrcode.getModuleCount(); col++ ){
            ctx.fillStyle = qrcode.isDark(row, col) ? options.foreground : options.background;
            var w = (Math.ceil((col+1)*tileW) - Math.floor(col*tileW));
            var h = (Math.ceil((row+1)*tileW) - Math.floor(row*tileW));
            ctx.fillRect(Math.round(col*tileW),Math.round(row*tileH), w, h);
        }
    }
}