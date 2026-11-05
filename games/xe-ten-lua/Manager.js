//*-------- Show Interstitial --------*//
function ShowInter(runtime) {
	runtime.globalVars.PAUSED = true;
	ysdk.adv.showFullscreenAdv({
		callbacks: {
			onClose: function(wasShown) {
				runtime.globalVars.PAUSED = false;
			},
			onError: function(error) {
				runtime.globalVars.PAUSED = false;
			}
		}
	});
	
}

//*-------- Show Rewarded --------*//
function ShowRewarded(success, failure) {
	ysdk.adv.showRewardedVideo({
		callbacks: {
			onOpen: () => {
				window.rewardDone = false;
			},
			onRewarded: () => {
				window.rewardDone = true;
			},
			onClose: () => {
				if(window.rewardDone)
					success();				
			},
			onError: (e) => {
				if(failure)
					failure();
			}
		}
	})
}

YaGames
.init()
.then(ysdk => {
	console.log('Yandex SDK initialized');
	window.ysdk = ysdk;
});

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