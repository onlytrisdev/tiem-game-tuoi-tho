var Dom={get:function(id){return((id instanceof HTMLElement)||(id===document))?id:document.getElementById(id);},set:function(id,html){Dom.get(id).innerHTML=html;},on:function(ele,type,fn,capture){Dom.get(ele).addEventListener(type,fn,capture);},un:function(ele,type,fn,capture){Dom.get(ele).removeEventListener(type,fn,capture);},show:function(ele,type){Dom.get(ele).style.display=(type||'block');},blur:function(ev){ev.target.blur();},addClassName:function(ele,name){Dom.toggleClassName(ele,name,true);},removeClassName:function(ele,name){Dom.toggleClassName(ele,name,false);},toggleClassName:function(ele,name,on){ele=Dom.get(ele);var classes=ele.className.split(' ');var n=classes.indexOf(name);on=(typeof on=='undefined')?(n<0):on;if(on&&(n<0))
classes.push(name);else if(!on&&(n>=0))
classes.splice(n,1);ele.className=classes.join(' ');},storage:window.localStorage||{}}
function getsupportedprop(proparray){var root=document.documentElement
for(var i=0;i<proparray.length;i++){if(typeof root.style[proparray[i]]=="string"){return proparray[i]}}}
function getDistance(x,y,x0,y0){return Math.sqrt((x-=x0)*x+(y-=y0)*y);};function prepPixiButton(button,onClickFunc,centreAnchor){button.buttonMode=true;button.interactive=true;if(TOUCH_DEVICE){button.tap=onClickFunc;}else{button.click=onClickFunc;}
if(centreAnchor){button.anchor.x=button.anchor.y=0.5;}}
function removeSpriteAndBody(owner,worldToUse){owner.sprite.stack.removeSprite(owner.sprite);owner.sprite=null;worldToUse.DestroyBody(owner.body);owner.body=null;}
var timeoutStack=new Array();function addTimeout(func,delay,params){var dummyObj={c:0};delay=delay/1000;var to=TweenMax.to(dummyObj,delay,{c:1000,onComplete:func,onCompleteParams:params});timeoutStack.push(to);}
function pauseAllTimeouts(){TweenMax.pauseAll();}
function resumeAllTimeouts(){TweenMax.resumeAll();}
function clearAllTimeouts(){for(var n=0;n<timeoutStack.length;n++){var to=timeoutStack[n];to.kill();}}
function degToRad(deg){return deg*(Math.PI/180);}
function radToDeg(rad){return rad*(180/Math.PI);}
function popPixiSprite(pixiSprite){var p=pixiSprite.parent;p.removeChild(pixiSprite);p.addChild(pixiSprite);}
function findMiddle(p1,p2){x=p1.x+0.5*(p2.x-p1.x);y=p1.y+0.5*(p2.y-p1.y);return{x:x,y:y}}
function getAngle(x1,y1,x2,y2){var radians=Math.atan2(y1-y2,x1-x2);var dx=x1-x2;var dy=y1-y2;return Math.atan2(dy,dx)*180/Math.PI;}