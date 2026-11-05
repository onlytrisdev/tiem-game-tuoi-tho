
window.idAsyncInit = function() {
    // use an id.net event to wait until after init
    ID.Event.subscribe('id.init', function(){
        // use jquery to call methods on click
         ID.getLoginStatus(idCallback)
         ID.Protection.isBlacklisted(function(blacklisted){
			if(blacklisted == true){isBlacklisted = 1;}else{isBlacklisted = 0;}
            console.log('[BLACKLIST] : ' + isBlacklisted);
        });
         ID.Protection.isSponsor(function(sponsor){
			isSponsor = sponsor;
			if(sponsor == true){isSponsor = 1;}else{isSponsor = 0;}
            console.log('[SPONSOR] : ' + isSponsor);
        });
        ID.ads.init(1)//change 1 to the correct item_id
    });
    // using an optional callback to capture data on the client
    var userName;
    var idCallback = function(response){
        if (response) {
            console.log(response);
            if(response.status === 'ok')
            {
               userName = response.authResponse.details.nickname;
			   sUserName = userName;
			   isLogin = 1;
            }
        }
    }
	ID.init({
		//Add your app Id here
        appId : "612e515cb4439c788732aa45"
    });
};

// load the idnet js interface
(function(d, s, id){
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {return;}
    js = d.createElement(s); js.id = id;
    js.src =  document.location.protocol == 'https:' ? "" : "";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'id-jssdk'));

function initY8(appId_)
{
	console.log("appId_ "+appId_)
	ID.init({
        appId : appId_
    });
}

//y8 variables
var isLogin = 0;
var sUserName = 'Guest';
var URLlocation;
var isBlacklisted = 0
var isSponsor = 0;
var onlineSavesData;