!function(a){"use strict";function b(){var a="/"+f,b=g.getElementsByTagName("script");if(!b||b.length<1)
throw new Error("No scripts found");for(var c=null,d=0;d<b.length;d++){var e=b[d],h=e.src||"";if(h.indexOf(a)!==-1){c=h;break}}
if(!c)
throw new Error("Script url not found");return c.substr(0,c.lastIndexOf(a))}
function c(){try{return b()+"/sg-loader.js"}catch(a){return h.error("Failed to get loader url",a),d}}
var d="assets/sg-loader.js",e="v1.2.7",f="sg-loader-loader.js",g=a.document,h=a.console;try{var i=g.createElement("script");i.type="text/javascript",i.async=!0,i.src=c()+"?_v="+e;var j=g.getElementsByTagName("script")[0];j.parentNode.insertBefore(i,j)}catch(k){h&&h.error&&h.error(k)}}(window);