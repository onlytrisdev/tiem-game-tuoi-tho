/*
* v 1.0
* Подробнее тут: https://developers.facebook.com/docs/javascript/quickstart
*/
window.fbAsyncInit = function(){
	FB.init({
		appId:'1306125039429771',
		xfbml:true,
		version:'v2.9'
	});
	FB.AppEvents.logPageView();
};
(function(d, s, id){
	var js, fjs = d.getElementsByTagName(s)[0];
	if (d.getElementById(id)) {return;}
	js = d.createElement(s); js.id = id;
	js.src = "//connect.facebook.net/en_US/sdk.js";
	fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));
/*
Шарим
*/
function facebookShareFunc(method_str, link_str, picture_str, caption_str)
{
	/*
	
	*/
	if(method_str !== undefined)
	{
		method_str = String(method_str);
	}
	else
	{
		method_str = 'feed';
	}
	if(link_str !== undefined)
	{
		link_str = String(link_str);
	}
	else
	{
		link_str = '';
	}
	if(picture_str !== undefined)
	{
		picture_str = String(picture_str);
	}
	else
	{
		picture_str = '';
	}
	if(caption_str !== undefined)
	{
		caption_str = String(caption_str);
	}
	else
	{
		caption_str = '';
	}
	/*
	
	*/
	try
	{
		FB.ui({
			method:method_str,
			link:link_str,
			picture:picture_str,
			caption:caption_str
		}, function(response)
		{
			trace(response)
		});
	}
	catch(error)
	{
		trace(error)
	}
}