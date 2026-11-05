window.sgLoader=window.sgLoader||function(a){"use strict";function b(){try{var a="/sg-loader.js",b=jb.getElementsByTagName("script");if(!b||b.length<1)
throw new Error("No scripts found");for(var c=null,d=0;d<b.length;d++){var e=b[d],f=e.src||"";if(f.indexOf(a)!==-1){c=f;break}}
if(!c)
throw new Error("Script url not found");return c.substr(0,c.lastIndexOf(a))}catch(g){return fb("Failed to get base url",g),".."}}
function c(){return "true"===d(Gb)}
function d(a){var b=jb.getElementsByName(a);return b&&b.length?b[0].getAttribute("content"):null}
function e(){return String(a.location)}
function f(){return true;}
function g(){try{var a=Q();return a?Zb.indexOf(a)!==-1:(fb("Could not determine publisher"),!1)}catch(b){return fb("Failed to determine if it is a gamesmedia publisher",b),!1}}
function h(){try{var b=i(Xb);if(!b)
throw new Error("Failed to change domain");return b+=b.indexOf("?")!==-1?"&":"?",b+=Yb+"=true",a.location=b,!0}catch(c){return fb("Failed to redirect to gamesmedia",c),!1}}
function i(a){var b=e();if(!b)
return b;var c=b.split("/");if(c[1])
throw new Error("Invalid url: "+b);return c[2]=a,c.join("/")}
function j(){return!!S(Yb)}
function k(){try{var b=e();if(!b)
throw new Error("No current url");var c=S(),d=b.split("?")[0],f=!1;return c&&(delete c[Yb],f=Object.keys(c).length>0),b=d+(f?"?"+l(c):""),a.location=b,!0}catch(g){return fb("Failed to execute second redirect to gamesmedia",g),!1}}
function l(a){var b="";return Object.keys(a).forEach(function(c){var d=a[c];b&&(b+="&"),b+=c+(d?"="+d:"")}),b}
function m(a,b){b=b||function(){};var c=jb.createElement("img");c.src=a,c.style.width="100%",jb.body.appendChild(c);var d=!1,e=setInterval(function(){var a=c.getBoundingClientRect();0!==a.height&&(d=!0,clearInterval(e),Jb=a.width/a.height,c.parentNode.removeChild(c),fb("found dynamic ratio of teaser: ",Jb),b())},10);setTimeout(function(){d||(clearInterval(e),fb("Failed to get dynamic ratio for teaser"),c.parentNode.removeChild(c),Jb=300/180,b())},500)}
function n(){if(o()){var b=a.innerWidth*Lb;return{width:b,height:b*(1/Jb)}}
var c=a.innerHeight*Kb;return{height:c,width:c*Jb}}
function o(){return a.innerWidth<a.innerHeight&&a.innerWidth<Ob}
function p(){return Rb.height*Nb}
function q(){var b=Rb.height*Mb,c=0;return o()?{width:a.innerWidth-2*Sb,height:b,padding:c}:{width:a.innerWidth-3*Sb-Rb.width-2*c,height:b,padding:c}}
function r(){return o()?{width:a.innerWidth-2*Sb,height:a.innerHeight-(Rb.height+4*Sb+Tb.height+2*Tb.padding)}:{width:a.innerWidth-2*Sb,height:a.innerHeight-(Rb.height+3*Sb)}}
function s(){return{marginTop:Rb.height/2-Tb.height/2,marginRight:Sb}}
function t(a,b){function c(a){h||(h=!0,b(a,f))}
function d(a){return function(b,d){try{if(i[a])
return void fb("Callback of step "+a+" called a second time");if(i[a]=!0,g++,b)
throw b;f[a]=d,g===e&&c()}catch(h){c(h)}}}
var e=a.length,f=[],g=0,h=!1,i=[];try{a.forEach(function(a,b){a(d(b))})}catch(j){c(j)}}
function u(a){v(ub,function(b){try{if(b)
throw b;y(a)}catch(c){a(c)}})}
function v(a,b){try{c()?x(a,b):w(a,b)}catch(d){b(d)}}
function w(a,b){b=b||function(){};try{var c=jb.getElementsByTagName("head")[0],d=jb.createElement("link");d.id="softgames-loader-css",d.rel="stylesheet",d.type="text/css",d.media="all",d.onload=function(){b()},d.href=a,c.appendChild(d)}catch(e){b(e)}}
function x(a,b){try{var c=new Image;c.onerror=function(){try{w(a),b()}catch(c){b(c)}},c.src=a}catch(d){b(d)}}
function y(a){try{fb("Displaying teaser"),jb.body?(z(),a()):jb.addEventListener("DOMContentLoaded",function(){z(),a()},!1)}catch(b){a(b)}}
function z(){var b=B();Z(b.url,function(){var c=jb.createElement("div");c.className="sg-loader-teaser-overlay";var d=jb.createElement("div");d.className="sg-loader-teaser-overlay-content",d.style.width=a.innerWidth+"px";var e=jb.createElement("div");e.className=U()?"sg-loader-header-mobile":"sg-loader-header",e.style.width=2*a.innerWidth+"px";var f=jb.createElement("div"),g="sg-loader-teaser";b.useSmallTeaser||(g+=" sg-loader-big-teaser"),Qb=D(b.useSmallTeaser);var h=-Ub.height*Pb;f.className=g,f.style.marginTop=h+"px",f.style.width=Qb.width+"px",f.style.height=Qb.height+"px";var i=jb.createElement("img");i.className="sg-loader-teaser-img",i.src=b.url;var j=jb.createElement("img");j.className="sg-loader-teaser-softgames",j.src=Cb;var k=jb.createElement("div");k.className="sg-loader-button-container",k.style.marginTop=o()?Sb/2+"px":Sb+"px";var l=jb.createElement("img");l.className="sg-loader-spinner",l.src=zb;var m=jb.createElement("div");m.className="sg-loader-button",m.style.display="none",m.style.marginTop=Sb+"px",m.style.marginBottom=Sb+"px";var n=jb.createElement("div");n.className="sg-loader-button-background";var p=jb.createElement("div");p.className="sg-loader-button-overlay";var q=jb.createElement("div");q.className="sg-loader-button-triangle";var r=jb.createElement("div");r.className="sg-loader-ad-container",r.style.width=Ub.width+"px",r.style.height=Ub.height+"px",r.style.margin=Sb+"px",r.style.marginBottom=0,r.style.opacity=0,r.style.visibility="hidden";var s=jb.createElement("div");if(s.id="sg-loader-ad-slot",s.className="sg-loader-ad-slot",s.style.width=Ub.width+"px",s.style.height=Ub.height+"px",r.appendChild(s),m.appendChild(n),m.appendChild(p),m.appendChild(q),d.appendChild(e),d.appendChild(r),f.appendChild(i),A(j,i),c.style.backgroundImage="url("+Ab+")",!U()){var t=jb.createElement("div"),u=Qb.width+2*Sb;t.className="sg-loader-card sg-loader-shadow",t.style.width=u+"px",t.style.height=Qb.height+3*Sb+88+"px",t.style.marginTop=h-Sb+"px",t.style.marginLeft=a.innerWidth/2-u/2+"px",d.appendChild(t)}
d.appendChild(f),k.appendChild(l),k.appendChild(m),d.appendChild(k),c.appendChild(d),jb.body.appendChild(c),wc.overlay=c,wc.spinner=l,wc.button=m,wc.adContainer=r,wc.adSlot=s,wc.teaser=f})}
function A(a,b){b.parentNode.insertBefore(a,b.nextSibling)}
function B(a){var b=a||C();try{if(!_b){var c=b?Eb:Fb,d=jb.getElementsByName(c);if(!d)
throw new Error(c+" not found");var e=d[0].getAttribute("content");if(!e)
throw new Error(c+" has no content");_b=e}
return{url:_b,useSmallTeaser:b}}catch(f){if(!b)
return B(!0);throw f}}
function C(){return a.innerWidth-20<600||a.innerHeight-125<360}
function D(a){return a?{width:300,height:300/Jb}:{width:400,height:400/Jb}}
function E(b){try{fb("Loading media controller..."),a.sgPlatformRestrictedHostname=N();var c=a.sgPlatformRestrictedHostname?pb:ob;F(c,function(a){return a?(fb("... failed to load media controller"),void b(a)):(fb("... media controller loaded"),void b())})}catch(d){b(d)}}
function F(a,b,c){"function"==typeof b&&(c=b,b=null),b=b||qb;try{if(!a||!a.trim())
throw new Error("No url given");ac?ac.ajax({method:"GET",url:a,dataType:"script",timeout:b,crossDomain:!0,cache:!0,success:function(b,d,e){try{if(200!==e.status)
throw new Error("Failed to load script: "+a+"! Status: "+e.status);c()}catch(f){c(f)}},error:function(a,b,d){c(new Error(d))}}):G(a,b,c)}catch(d){c(d)}}
function G(a,b,c){b=b||qb;var d=jb.createElement("script"),e=null;d.type="text/javascript",d.async=!0,d.onload=function(){try{e&&clearTimeout(e),c()}catch(a){c(a),fb(a)}},d.onerror=function(){e&&clearTimeout(e),c(new Error("Failed to load script: "+a))},d.src=a;var f=jb.getElementsByTagName("script")[0];f.parentNode.insertBefore(d,f),e=setTimeout(function(){c(new Error("Failed to load script due to timeout: "+a))},b)}
function H(a){try{fb("Loading jQuery..."),F(yb,function(b){return b?(fb("... failed to load jQuery"),void a(b)):(fb("... jQuery loaded"),void a())})}catch(b){a(b)}}
function I(a){try{t([J,K],a)}catch(b){a(b)}}
function J(a){fb("Loading advertisement.js..."),F(tb,function(b){return b?(fb("... failed to load ad.js probably due to ad blocker"),void a(b)):void G(tb,200,function(b){b?fb("... failed to load ad.js probably due to ad blocker"):(fb("... loaded advertisement.js"),a(b))})})}
function K(a){fb("Loading showAds.js..."),F(sb,function(b){return b?(fb("... failed to load ad.js probably due to ad blocker"),void a(b)):void G(sb,200,function(b){b?fb("... failed to load ad.js probably due to ad blocker"):(fb("... loaded showAds.js"),a(b))})})}
function L(b){try{fb("Loading ga track js..."),F(xb,function(){uc=a.sgGaTrackSdk,fb("... Loading ga track js")}),b()}catch(c){b(c)}}
function M(a){fb("Loading config ...");var b=!1,c=function(c,d){b||(b=!0,fb("... config Loaded"),a(c,d))};try{var d=O(P()),e=new XMLHttpRequest;e.open("GET",d,!0),e.onreadystatechange=function(){try{4===e.readyState&&(200===e.status?c(null,JSON.parse(e.responseText)):c(new Error(e.statusText)))}catch(a){c(a)}},e.send(null)}catch(f){c(f)}}
function N(){return $b.indexOf(jb.location.hostname)>-1}
function O(a){var b=lb;N()&&(b=mb),a.publisherName&&(b+="&publisherName={publisherName}");for(var c in a)
a.hasOwnProperty(c)&&(b=b.replace("{"+c+"}",a[c]));var d=S("locale");return d&&(b+="&locale="+d),b}
function P(){return{gameSlug:R(),env:U()?"mobile":"desktop",publisherName:Q()}}
function Q(){var a=d(Ib);return a||(a=S("p")||S("host")||null),a}
function R(){var b=jb.getElementsByName(Hb);if(b&&b.length){var c=b[0].getAttribute("content");if(c)
return c}
var d=S("game");if(d)
return d;var e=a.location||{},f=/^\/(.*)\//.exec(e.pathname);if(f&&(d=f[1]),!d)
throw new Error("Could not determine game slug");return d}
function S(a){var b={},c=T();return c.replace(/[?&]+([^=&]+)=([^&]*)/gi,function(a,c,d){b[c]=d}),a?b[a]:b}
function T(){var b=a.location||{};return b.href||String(b)}
function U(){var b=a.navigator||{},c=b.userAgent||b.vendor||a.opera;return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(c)}
function V(){try{if(dc&&ec||ba("loaderPageClosedBeforeFinish"),dc)
return;ba("browserClosedDuringAdProcess",!0)}catch(a){fb("Error during close window event handling: ",a)}}
function W(){try{a.addEventListener("beforeunload",V)}catch(b){fb("Could not add beforeunload event handler")}}
function X(){try{a.removeEventListener("beforeunload",V)}catch(b){fb("Could not remove beforeunload event handler")}}
function Y(b,c){try{if(b)
throw b;if(fb("First portion of requirements Loaded!"),ac=a.jQuery,!ac)
throw new Error("jQuery not yet loaded");if(cc=c[2],!cc)
throw cc={},new Error("No config given");if(_(cc),cc.fastLoadingFlowEnabled){if(aa("loaderDisplayed"),ba("loaderAdFlowStarted"),W(),ka(),v(Db),rc=!0,cc.skipAds)
return fb("Partner has ads disabled"),ba("loaderAdsDisabled"),ba("loaderAdFlowDone","adsDisabled"),void ca();I(function(b){b?(sc=!0,ha(),ba("loaderAdBlocker"),cc.blockOnAdBlock?(da(),ba("loaderAdFlowDone","gameBlockedByAdBlocker")):(oa(o(),pa),a.addEventListener("message",Ha),Va(),dc=!0,ba("loaderAdFlowDone","gameNotBlockedByAdBlocker"))):E($)})}else
rc=!1,fb("Fast flow not enabled for partner: "+cc.publisherName),Va()}catch(d){fb("Failed loading requirements"),fb(d),ib()}}
function Z(a,b){m(a,function(){Rb=n(),Sb=p(),Tb=q(),Ub=r(),Vb=s(),"function"==typeof b&&b()})}
function $(b){try{if(b)
throw b;fb("All requirements Loaded!"),bc=a.SG_MC,a.addEventListener("message",Ha),Ea(),U()||oa(o(),pa)}catch(c){fb("Error in requirementsLoadedHandler"),fb(c),hb()}}
function _(a){try{uc?uc.init(a.gaCode,a.gaExternalCode,a.gaAnonymizeIp,a.publisherId,a.gameId):fb("Track sdk not loaded")}catch(b){fb("Failed to init tracking"),fb(b)}}
function aa(a){try{var b=cc||{};uc?uc.trackPageView("/kirk/"+(b.gameSlug||"undefined")+"/"+a,{subplatform:b.publisherName||"unknown",affiliate:S("aff")}):fb("Track sdk not loaded to track action:",a)}catch(c){fb("Failed to track action"),fb(c)}}
function ba(a,b,c){try{var d=cc||{};a=a||"",b=b||"",c=c||"",uc?uc.trackEvent("kirk-"+d.gameSlug,String(a),String(b),String(c)):fb("Track sdk not loaded to track event:",a)}catch(e){fb("Failed to track event"),fb(e)}}
function ca(){dc=!0,ac(wc.spinner).hide(),a.addEventListener("message",Ha),Va(),la(function(){var b=ac(".sg-loader-logo-container");b.css({width:Qb.width/2,height:Qb.height/3}),b.css({top:ac(".sg-loader-teaser").offset().top+Qb.height+Sb,left:ac(a).width()/2-b.width()/2}),ma()}),ua(o()),Aa();var b=ac(".sg-loader-loading-bar"),c=ac(".sg-loader-loading-text");c.css({"font-size":o()?"4vw":"2.5vw"}),c.css({position:"absolute",top:ac(a).height()-c.height()-b.height()-1.5*Sb,"margin-left":ac(a).width()/2-Tb.width/2,"text-align":"center"}),b.css({position:"absolute","margin-top":0,top:ac(a).height()-b.height()-Sb})}
function da(){if(ac(wc.spinner).hide(),U()){ia(".sg-loader-teaser-overlay-content",!1,!0,!0);var b=ac(".sg-loader-blocker-container");b.css({position:"absolute",top:Sb,width:ac(a).width()-2*Sb}).addClass("sg-loader-shadow"),b.css({"margin-left":ac(a).width()/2-b.width()/2}),oa(!0,function(){ea(),fa()})}else
ia(".sg-loader-teaser",!1,!1,!0),ac(".sg-loader-blocker-container").css({"margin-left":ac(".sg-loader-teaser").width()/2-ac(".sg-loader-blocker-container").width()/2})}
function ea(){var a=ac("<div>").addClass("sg-loader-blocker-refresh").append("Disable ad-blocker and refresh the browser.").css({"margin-top":ac(".sg-loader-teaser").height()+Sb});a.insertAfter(ac(wc.teaser)),U&&!o()&&(a.css("margin-top",0),ac(".sg-loader-teaser").css("margin-top",-Sb))}
function fa(){ac(".sg-loader-blocker-container, .sg-loader-blocker-refresh").animate({opacity:1},{duration:500,complete:function(){}})}
function ga(){ac(".sg-loader-darkred").css({"line-height":ac(".sg-loader-ad-blocker-image").height()+"px"})}
function ha(){sc&&!cc.blockOnAdBlock&&ia(".sg-loader-ad-slot",!0,!1,!1)}
function ia(a,b,c,d){var e=Ub.height-2*Sb,f=Ub.width-2*Sb,g=ac("<div>").addClass("sg-loader-blocker-container").css({width:f,height:e,opacity:c?0:1});U()&&!o()&&g.css("max-width","300px");var h=ac("<div>").addClass("sg-loader-ad-blocker-title sg-loader-padding").append("Oh-no, it seems you are using an Ad-blocker.").css("padding-top",Sb),i=ac("<div>").addClass("sg-loader-ad-blocker-paragraph sg-loader-padding").append(""),j=ac("<div>").addClass("sg-loader-ad-blocker-image-row sg-loader-padding"),k=ac("<div>").addClass("sg-loader-ad-blocker-image-container"),l=ac("<div>").addClass("sg-loader-ad-blocker-bold sg-loader-darkred").append("DISABLE"),m=ac("<img>").addClass("sg-loader-ad-blocker-image").attr("src",Bb).on("load",ga);k.append(m);var n=ac("<div>").addClass("sg-loader-ad-blocker-bold sg-loader-darkred").append("ADBLOCK"),p=ac("<div>").addClass("sg-loader-ad-blocker-paragraph sg-loader-red sg-loader-padding").append(cc.blockOnAdBlock?"Please disable your Ad-blocker and refresh the page.":"In the future, please disable your Ad-blocker.");if(j.append(l).append(k).append(n),g.append(h).append(i).append(j).append(p),ac(a).append(g),ac(".sg-loader-padding").css({"padding-left":Sb,"padding-right":Sb,"padding-bottom":Sb}),b&&g.css({"margin-top":Ub.height/2-g.height()/2,"margin-left":Ub.width/2-g.width()/2}),!U()&&d){var q=ac(".sg-loader-card");q.css("height",q.height()+g.height()-Qb.height/2),g.css({width:q.width()-2*Sb,"margin-left":Sb,background:"transparent"})}}
function ja(){var a=ac("<div>").addClass("sg-loader-click-to-play").append("").css("margin-top",o()?Sb+"px":Sb+"px");ac(".sg-loader-teaser-overlay-content").append(a)}
function ka(){cc.partnerLogo&&ac("body").append(ac("<img>").attr("src",cc.partnerLogo).css("display","none"))}
function la(a){if(cc.partnerLogo){var b=ac("<div>").addClass("sg-loader-logo-container").css({"background-image":"url("+cc.partnerLogo+")",width:Rb.width,height:Rb.height/2,top:Ub.height+2*Sb,right:Sb,opacity:0});o()&&b.css({width:Rb.width,height:Rb.height,top:Ub.height+1.5*Sb,"background-position":"center center"}),b.insertAfter(ac(".sg-loader-ad-container")),"function"==typeof a&&a()}}
function ma(){ac(".sg-loader-logo-container").animate({opacity:1},{duration:400})}
function na(){ac(".sg-loader-logo-container").animate({opacity:0},{duration:300})}
function oa(b,c){try{if(kc)
return void fb("Teaser Animation called a second time");kc=!0,fb("Animate teaser called"),ra(),qa(),sa(),ac(wc.button).hide(),ac(wc.spinner).hide(),ac(".sg-loader-click-to-play").hide();var d=b?Sb/2:Sb;d=sc&&cc.blockOnAdBlock&&U()&&!o()?-Sb:d;var e=b?a.innerWidth/2-Rb.width/2:Sb;e=b&&cc.partnerLogo?Sb:e,ac(wc.teaser).animate({width:Rb.width,height:Rb.height,"margin-left":e,"margin-right":b?a.innerWidth/2-Rb.width/2:0,"margin-top":d},{duration:1e3,complete:function(){ac(this).css("float","left"),b||ac(this).css("margin-right",Sb),"function"==typeof c&&c(b)}})}catch(f){fb("Failed to animate teaser"),fb(f),ib()}}
function pa(a){la(ma),ta(),ua(a),Aa()}
function qa(){U()||ac(".sg-loader-card").animate({opacity:0},1e3)}
function ra(){ac(".sg-loader-header, .sg-loader-header-mobile").animate({opacity:0},1e3)}
function sa(){ac(".sg-loader-teaser-softgames").animate({opacity:0},1e3)}
function ta(){var a=ac(wc.adContainer);a.css("visibility","inherit"),a.animate({opacity:1},{duration:500})}
function ua(b){var c=ac("<div>").addClass("sg-loader-loading-bar"),d=ac("<div>").addClass("sg-loader-bar"),e=ac("<div>").addClass("sg-loader-bar-background"),f=ac("<div>").addClass("sg-loader-bar-opacity");d.append(e),d.append(f),c.append(d),c.insertAfter(ac(wc.teaser));var g=Tb.height;c.css({height:Tb.height,width:g,padding:Tb.padding+"px"}),b||cc.skipAds?c.css({"margin-top":Sb+Rb.height,"margin-left":ac(a).width()/2-g/2}):c.css({"margin-left":ac(a).width()/2-Tb.height/2-3*Sb-Rb.width,float:"left"}),e.height(d.height()),f.height(d.height()),va(b)}
function va(a){ac(".sg-loader-loading-bar").animate({opacity:1},{duration:500,complete:function(){xa(a)}})}
function wa(){ac(".sg-loader-loading-text").animate({opacity:1},{duration:500})}
function xa(b){var c=cc.skipAds?ac(a).width()/2-Tb.width/2:0;c=b?Sb:c,ac(".sg-loader-loading-bar").animate({"margin-left":c,width:Tb.width},{duration:1e3,complete:function(){wa(),ya()}})}
function ya(){if(!ec&&!ic){fb("Start loading bar");var a=hc||2e4,b=80,c=Date.now();ic=setInterval(function(){var d=Date.now(),e=d-c,f=Math.min(e*b/a,b);za(f),f>=b&&(clearInterval(ic),ic=null)},100)}}
function za(a){ac(".sg-loader-bar").width(a+"%"),ac(".sg-loader-bar-background, .sg-loader-bar-opacity").width(ac(".sg-loader-bar").width()+"px")}
function Aa(){var b=ac("<div>").addClass("sg-loader-loading-text");o()&&!cc.skipAds?b.insertAfter(ac(".sg-loader-loading-bar")):b.insertAfter(ac(".sg-loader-teaser")),Ba(),o()?b.css({"margin-top":Sb/4+"px","margin-left":Sb+"px",width:ac(a).width()-2*Sb,"text-align":"center"}):b.css({"margin-top":Math.max(0,ac(".sg-loader-teaser").outerHeight(!0)-(b.height()+ac(".sg-loader-bar").height()+Sb)),"margin-right":Vb.marginRight,width:ac(a).width()-Rb.width-5*Sb});var c=setInterval(function(){ec&&dc&&clearInterval(c),Ba()},2500)}
function Ba(){return 5145===cc.publisherId?void Ca("ゲームデータをロード中"):void(tc.length>0?Ca(tc.splice(Da(0,tc.length),1)[0]):cc.loadingTexts&&cc.loadingTexts.length>0&&(tc=ac.extend(!0,[],cc.loadingTexts),Ba()))}
function Ca(a){ac(".sg-loader-loading-text").text(a)}
function Da(a,b){try{return Math.floor(Math.random()*(b-a)+a)}catch(c){return fb("Failed to generate random number",c),null}}
function Ea(){var a=cc.adsConfiguration,b=Fa(cc);bc.injectConfiguration(b,a,function(a){try{if(a)
throw a;bc.displayMedia(bc.SLOTS.SG_LOADER,{showPlayButton:Ga},cb),fb("Sent ad call to media controller")}catch(b){fb("Failed to inject configuration into media controller"),fb(b),hb()}})}
function Fa(a){return a?{publisherId:a.publisherId,publisher:a.publisherName,gameId:a.gameId,game:a.gameSlug,isMobile:U(),agentPlan:a.agentPlan,clientIpHash:a.clientIp,userAgent:a.userAgent,country:null}:{}}
function Ga(b){wc.button.onclick=function(){ba("loaderAdPlayButtonClicked"),fb("Play button clicked"),U()&&(na(),oa(o(),pa),ac(".sg-loader-logo-container").hide()),wc.button.style.display="none","function"==typeof b&&b()},U()&&!cc.skipButtons?(wc.spinner.style.display="none",wc.button.style.display="block",ac(wc.button).addClass("pulsating"),ja(),la(function(){var b=ac(".sg-loader-logo-container");b.css({width:Qb.width/2,height:Qb.height/3}),b.css({top:ac(".sg-loader-teaser").offset().top+Qb.height+2*Sb+ac(".sg-loader-button").outerHeight(!0)+ac(".sg-loader-click-to-play").height(),left:ac(a).width()/2-b.width()/2}),ma()})):ac(wc.button).trigger("click")}
function Ha(a){try{var b=a.data||{};"mediaController"===b.system?"displayed"===b.action&&(fb("Caught ad ready message",b),Ia(b.data)):"softgames1.1"===b.system&&"gameLoaded"===b.action&&Wa()}catch(c){fb("Error during message handling: ",c)}}
function Ia(a){fb("Got ad displayed event",a),a?a.isVideo?(fc=!0,a.duration&&(hc=1e3*a.duration)):(fc=!1,ba("loaderAdFlowDone","banner"),dc=!0,Ja(),U()&&oa(o(),pa)):(ba("loaderAdFlowDone","noData"),dc=!0,Ja()),Va(),ac(".sg-loader-ad-text").remove()}
function Ja(){if(fb("Caught finish event",{adPlaybackDone:dc,gameLoaded:ec}),dc&&fc&&!oc&&(X(),cc.skipAds||sc||(oc=!0)),(ec||!dc||!fc)&&dc&&ec){if(!(fc||gc||cc.skipAds||cc.skipButtons))
return void ab(function(){Ka(function(a){a&&fb(a),fb("Start banner ad cleanup"),X();try{Qa(),cc.skipAds||sc||oc||(oc=!0)}catch(b){fb("cleanUpAd failed",b),ib()}})});if(!gc&&!cc.skipAds)
return void Qa();fb("All events caught, start closing process"),Ra(),Ta()}}
function Ka(a,b){try{if(qc)
return;qc=!0;var c=ac("<div>").addClass("sg-loader-play-game-button"),d=ac("<div>").addClass("sg-loader-button-background"),e=ac("<div>").addClass("sg-loader-button-overlay"),f=ac("<div>").addClass("sg-loader-triangle-container"),g=ac("<div>").addClass("sg-loader-triangle");f.append(g),c.append(d).append(e).append(f),c.insertAfter(ac(wc.button));var h=ac("<div>").addClass("sg-loader-click-to-play-end").append(U()?"Tap to play!":"Click to play!");o()?h.insertAfter(c):h.insertBefore(c.parent()),Oa(b),c.on("click",function(){"function"==typeof a&&a()})}catch(i){a(i)}}
function La(a){ac(".sg-loader-loading-text").animate({opacity:0},{duration:500,complete:function(){Ma(a)}})}
function Ma(b){var c=o()||pc||cc.skipAds?ac(a).width()/2:ac(a).width()/2-Tb.height/2-3*Sb-Rb.width;ac(".sg-loader-loading-bar").animate({width:Tb.height,"margin-left":c+"px"},{duration:1e3,complete:function(){ac(this).hide(),ac(".sg-loader-loading-text").remove(),"function"==typeof b&&b()}})}
function Na(a){ac(wc.teaser).animate({"margin-left":Sb},{duration:500,complete:function(){"function"==typeof a&&a()}})}
function Oa(){var b=ac(wc.teaser);b.css("margin-right",0);var c=ac(".sg-loader-button-container"),d=8,e=ac(".sg-loader-play-game-button, .sg-loader-button-background, .sg-loader-button-overlay");e.css({height:b.height()-d,width:b.width()-d,"line-height":b.height()-d+"px"}),c.css({width:b.width()});var f=.284*e.height(),g=.2*e.width();e.find(".sg-loader-triangle").css({"border-width":f+"px 0 "+f+"px "+g+"px"});var h=e.find(".sg-loader-triangle-container");h.css({left:e.width()/2-h.width()/2+d/2,top:e.height()/2-h.height()/2+d/2});var i=ac(".sg-loader-click-to-play-end");o()?(e.css({"font-size":"10vw","margin-bottom":Sb/2}),c.css({float:"right","margin-right":Sb+"px"}),cc.partnerLogo?Pa():Na(Pa),i.css({position:"relative"})):(i.css({top:ac(".sg-loader-teaser").height()/2-i.height()/4+2*Sb+Ub.height-4,left:ac(a).width()/2+e.width()/2+Sb}),e.css({"font-size":"5vh"}),Pa())}
function Pa(){ac(".sg-loader-play-game-button, .sg-loader-click-to-play-end").animate({opacity:1},{duration:500})}
function Qa(){fb("Ad clean up called"),bc&&bc.close&&bc.close(),gc=!0,Ja()}
function Ra(a){Sa(xc.runGame,a||Math.floor(1e7*Math.random()+1e6),null)}
function Sa(b,c,d){try{if(!a.SG||"function"!=typeof a.SG.sendCommand)
throw new Error("SG.sendCommand doesnt exist");fb("sending unpause game command to game"),a.SG.sendCommand(b,c,d)}catch(e){fb("failed to send command to game: ",e)}}
function Ta(){fb("Close loader teaser overlay ..."),a.jQuery?a.jQuery(".sg-loader-teaser-overlay").animate({opacity:0},{duration:1e3,complete:Ua}):Ua()}
function Ua(){a.jQuery?a.jQuery(".sg-loader-teaser-overlay").remove():wc&&wc.overlay&&jb.body&&jb.body.removeChild(wc.overlay),gb()?ba("loaderOverlayClosed"):nc||(ba("loaderFastFlowDisabled"),nc=!0),fb("... close loader teaser overlay done")}
function Va(){try{jc?fb("Tried to continue the loading flow a second time"):(jc=!0,F(vb,function(a){return a?(fb("Fatal: Can't continue with loading flow. Can't load softgames."),void fb(a)):void F(wb,function(a){return a?(fb("Fatal: Can't continue with loading flow. Can't load sg-hooks."),void fb(a)):void fb("Finished loading old flow dependencies")})}))}catch(a){fb("Fatal: Can't continue with loading flow"),fb(a),ib()}}
function Wa(){fb("handleGameLoaded called"),mc?fb("Game loaded message received again"):(mc=!0,Ya())}
function Xa(){setTimeout(function(){ab(function(){fb("Displaying play button due to long ad time"),Ka(function(a){a&&fb(a),fb("Start banner ad cleanup"),X();try{dc=!0,Qa(),cc.skipAds||sc||oc||(oc=!0)}catch(b){fb("cleanUpAd failed",b),ib()}})})},2e4)}
function Ya(){fb("Finish loading bar"),ic&&(clearInterval(ic),ic=null);var a=3e3,b=100,c=Date.now(),d=bb(),e=b-d,f=!1;ic=setInterval(function(){var g=Date.now(),h=g-c,i=Math.min(h*e/a,e)+d;za(i),i>=b&&(clearInterval(ic),ic=null,fb("Loading bar finished"),f||(f=!0,ba("loaderGameLoaded"),cc.skipAds?(ec=!0,Ja()):Za()))},100)}
function Za(){var b=ac("<h2>").addClass("sg-loader-thanks-title").append(""),c=ac("<div>").addClass("sg-loader-thanks-text").append("The game is fully loaded."),d=ac("<div>").addClass("sg-loader-thanks-container").append(b).append(c);d.insertAfter(ac(wc.teaser)),wc.thanksContainer=d,o()?pc?(d.css({width:ac(a).width()-2*Sb,"margin-left":Sb}),c.css({"font-size":"4vw"}),b.css({"font-size":"5vw"})):(ac(wc.teaser).css("margin-right",Sb),d.css({width:ac(a).width()-3*Sb-Rb.width}),c.css({"font-size":"3vw"}),b.css({"font-size":"4vw"})):U()?pc||(d.css({width:ac(a).width()-Rb.width-4*Sb}),b.css({"margin-top":1.5*Sb,"margin-bottom":0,"font-size":"2.5vw"}),c.css({"font-size":"3vh"})):pc?d.css({width:ac(".sg-loader-teaser").width(),"margin-left":ac(a).width()/2-ac(".sg-loader-teaser").width()/2}):(d.css({width:ac(a).width()-Rb.width-4*Sb}),b.css({"margin-top":Math.max(0,ac(".sg-loader-teaser").outerHeight(!0)-ac(".sg-loader-thanks-container").height()+Sb),"margin-bottom":0})),La($a)}
function $a(){o()?(na(),pc?_a():Na(_a)):_a()}
function _a(){ac(wc.thanksContainer).css("display","block").animate({opacity:1},{duration:400,complete:function(){fb("Thank you text displayed");var a=dc?1e3:2500;Xa(),!fc&&dc?setTimeout(function(){ab(function(){ec=!0,fb("Thank you text removed"),Ja()})},a):(ec=!0,setTimeout(function(){Ja()},a))}})}
function ab(a){a=a||function(){};var b=ac(wc.thanksContainer);return 0===parseInt(b.css("opacity"))?void a():void b.animate({opacity:0},{duration:400,complete:function(){ac(this).remove(),a()}})}
function bb(){var a=ac(".sg-loader-bar");return 1!==a.length?0:Number(a.get(0).style.width.replace("%",""))}
function cb(a,b,c){if(lc)
fb("Ad done handler called a second time");else{lc=!0,fb("Ad done handler called");try{vc=!!c,gc=!0,ba("loaderAdFlowDone","doneHandler"),db()}catch(d){fb("Failed to handler ad done event"),fb(d)}}}
function db(){dc=!0,kc?eb():oa(o(),function(a){pa(a),eb()})}
function eb(){Ja(),Va()}
function fb(){if(Wb){var a=Array.prototype.slice.call(arguments);console.log.apply(console,["[sgLoader]"].concat(a))}}
function gb(){return rc}
function hb(){db()}
function ib(){try{X(),wc&&wc.overlay&&jb.body&&jb.body.removeChild(wc.overlay),Va(),ba("loaderKilled")}catch(a){fb("FATAL: EVEN FAILED TO KILL THE LOADER")}}
a.b||(a.b={});var jb=a.document,kb=Date.now(),lb="assets/config.json",mb="?env={env}",nb="1.9.3",ob="https://mediamanager.softgames.de/sg-mc.js?_v="+nb,pb="https://media.gamesmedia.de/sg-mc.js?_v="+nb,qb=2e4,rb=b(),sb=rb+"/showads.js",tb=rb+"/advertisement.js",ub=rb+"/sg-loader.css?_="+kb,vb=rb+"/platform.js?_="+kb,wb=rb+"/sg.hooks.js?_="+kb,xb=rb+"/sg-ga-track-sdk.js?_="+kb,yb="assets/jquery/jquery-3.1.0.min.js",zb="assets/spinner.svg",Ab="assets/loader-background.png",Bb="assets/stop.png",Cb="assets/softgames-text.png",Db="https://fonts.googleapis.com/css?family=Roboto",Eb="splashscreen-game-url",Fb="splashscreen-big-game-url",Gb="is-wrapper",Hb="game-slug",Ib="publisher-name",Jb=null,Kb=.1,Lb=.4,Mb=.1,Nb=.25,Ob=800,Pb=.9,Qb=null,Rb=null,Sb=null,Tb=null,Ub=null,Vb=null,Wb=S("loaderDebug"),Xb="play.gamesmedia.de",Yb="_j1",Zb=[""],$b=["play.gamesmedia.de"],_b=null,ac=null,bc=null,cc=null,dc=!1,ec=!1,fc=null,gc=!1,hc=null,ic=null,jc=!1,kc=!1,lc=!1,mc=!1,nc=!1,oc=!1,pc=!1,qc=!1,rc=null,sc=null,tc=[],uc=null,vc=!1,wc={spinner:null,button:null,adContainer:null,adSlot:null,teaser:null,thanksContainer:null},xc={unpauseGame:"unpauseGame",runGame:"runGame"};try{if(fb("Starting sg loader"),f()){if(j()&&(fb("Should execute second redirect"),k()))
return}else if(g()&&(fb("Should execute redirect"),h()))
return;var yc=[u,H,M,L];t(yc,Y)}catch(zc){fb("Failed to run loader flow"),fb(zc),ib()}
return{isActive:gb,closeTeaserOverlay:Ta}}(window);