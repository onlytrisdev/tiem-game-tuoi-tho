var proxy;

function init()	{
	
	if(!proxy)
	{
		console.log("init");
		proxy = CNComm.init({
		target: window.parent,
		origin: ['https://www.cartoonnetwork.co.uk']}
		)
	}
}


function init2()	{
	console.log("init2");
	proxy = CNComm.init({	target: window.parent,	origin: ['https://www.cartoonnetwork.co.uk']}	)
}

function ready(){
	proxy.ready(onProxyReady);
}

function onProxyReady() {
	proxy.request({ namespace: 'CN', method: 'getFeed' }, onGetFeed);
}

function onGetFeed(results) {
	console.log("onGetFeed");
	console.log(results);
}

function getLanguage(){
	proxy.request({ namespace: 'CN', method: 'getLanguage'}, onGetLanguage);
}

function onGetLanguage(results){
	console.log("onGetLanguage");
	console.log(results);
}

function onShowAd(r){
	//c2_callFunction("continueAfterAd");
}

function showAd(){
	proxy.request({ namespace: 'CN', method: 'showAd'}, onShowAd);
}


function showAdFromGame(){
	proxy.request({ namespace: 'CN', method: 'showAd'}, onShowAdFromGame);
}

function onShowAdFromGame(r){
	//c2_callFunction("continueAfterAd");
}

function track(context,name,id)
{
	proxy.request({namespace: 'Omniture',method: 'trackSiteMilestones',	args: [{	context: context,	name: name,	ID: id	}]	}, onTrackSiteMilestone);
}

function onTrackSiteMilestone(results){
	console.log(results);
}