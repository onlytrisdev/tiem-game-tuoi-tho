
function addScript(url){
    var script = document.createElement('script');
    script.setAttribute('type','text/javascript');
    script.setAttribute('src',url);
    document.getElementsByTagName('head')[0].appendChild(script);
}
 //addScript("https://h.api.4399.com/h5mini-2.0/h5api-interface.php");
var _czc = _czc || [];

MetaAd = {
    show: function (callback) {
        try{
            if (typeof(eval(window.h5api.canPlayAd)) == "function"){
                window.h5api.canPlayAd(function adCallback(data) {
                    console.log("Có phát quảng cáo không", data.canPlayAd, "Số lần còn lại", data.remain);
                });
                window.h5api.playAd(function adCallback(obj){
                    console.log('Mã số:' + obj.code + ',thông tin:' + obj.message)
                    if(obj.code === 10000){
                        console.log('Bắt đầu cuộc chơi')
                    } else if(obj.code === 10001){
                        console.log('Kết thúc cuộc chơi')
                        callback();
                    } else {
                        console.log('Ngoại lệ quảng cáo')
                    }
                });
				console.log("5667564");
            }else{
            }

        }catch (e) {
        }


    },
}