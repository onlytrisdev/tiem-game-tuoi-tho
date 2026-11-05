//*-------- Show Interstitial --------*//
function ShowInter(complete) {
	console.info('222',complete);	
}

//*-------- Show Rewarded --------*//
function ShowRewarded(success, failure) {
	console.info('111',success, failure);
	GVAdBreak(function(){
		window.rewardDone = true;
		if(window.rewardDone)
		success(1);
	})
}

function isAfterTime() {
	// Create a Date object for today's date
	var today = new Date();

	var theTime = new Date('03/29/2024');

	// Compare the two dates
	return today > theTime;
}

/* YaGames
.init()
.then(ysdk => {
	window.ysdk = ysdk;
	window.isRussian = ysdk.environment.i18n.lang == "ru";
	loadLib("index.js");
}); */

function PromptDialog(msg, duration = 3e3) {
	if (!this.prompt_) {
		this.prompt_ = document.createElement('div');
		this.prompt_.style.cssText = "font-family:siyuan;max-width:80%;min-width:320px;padding:10px 10px 10px 10px;min-height:40px;color: rgb(255, 255, 255);line-height: 20px;text-align:center;border-radius: 4px;position: fixed;top: 40%;left: 50%;transform: translate(-50%, -50%);z-index: 999999;background: rgba(0, 0, 0,.7);font-size: 16px;";
		document.body.appendChild(this.prompt_);
	}
	this.prompt_.innerHTML = msg;
	duration = isNaN(duration) ? 3e3 : duration;
	this.prompt_.style.display = "inline";
	this.prompt_.style.opacity = '1';
	setTimeout(function() {
		var d = 0.5;
		this.prompt_.style.webkitTransition = '-webkit-transform ' + d + 's ease-in, opacity ' + d + 's ease-in';
		this.prompt_.style.opacity = '0';
		this.prompt_.style.display = "none";
	}.bind(this), duration);
}