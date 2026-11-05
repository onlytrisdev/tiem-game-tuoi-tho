
function addScript(url){
    var script = document.createElement('script');
    script.setAttribute('type','text/javascript');
    script.setAttribute('src',url);
    document.getElementsByTagName('head')[0].appendChild(script);
}

/* addScript("https://h.api.4399.com/h5mini-2.0/h5api-interface.php"); */
MyAd = {
    playAd: function (success,failure) {
       /*  window.h5api.canPlayAd(function adCallback(data) {
        });
        window.h5api.playAd(function adCallback(obj){
            if(obj.code === 10000){
            } else if(obj.code === 10001){
                success && success();
            } else {
                failure && failure();
            }
        }); */
		console.log("33332");
    },
};