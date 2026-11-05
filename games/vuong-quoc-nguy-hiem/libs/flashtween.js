FT={};FT.create=function(json,texture,config)
{if(!FT.initialized)
{FT.initialized=true;FT.Deg2Rad=3.1415/180;FT.doublePI=3.1415*2;FT.timelines=[];FT.objects=[];FT.lastTime=Date.now();FT.deltaTime=Date.now();FT.isPlaying=true;FT.callbacks=[];FT.objectCount=0;FT.autoUpdate=true;}
if(config)
{if(config.hasOwnProperty("debug"))
{FT.debug=config.debug;}
if(config.hasOwnProperty("autoplay"))
{FT.isPlaying=config.autoplay;}
if(config.hasOwnProperty("autoUpdate"))
{FT.autoUpdate=config.autoUpdate;}
if(config.hasOwnProperty("scale"))
{var scale=config.scale;}}
var root=new PIXI.Container();if(scale)root.scale=new PIXI.Point(scale,scale);root.name="root";root.ftid=FT.objectCount;root.enabled=true;if(FT.debug)
{var debug=document.createElement("a");debug.textContent="frame";debug.style.position="absolute";document.body.appendChild(debug);}
FT.timelines[FT.objectCount]=[];var data=JSON.parse(JSON.stringify(json));data.baseTex=new PIXI.BaseTexture(texture);FT.createNode(data.root,root,data);FT.resolveScriptTargets();FT.objectCount++;FT.objects.push(root);return root;}
FT.remove=function(display)
{if(display.ftid==undefined)
{console.log("FT WARNING ***********************************");console.log("display object is not root *******************");console.log("Skipping deletion ****************************");return;}
FT.timelines.splice(display.ftid,1);FT.objects.splice(display.ftid,1);FT.objectCount--;for(var i=0;i<FT.objects.length;i++)
{FT.objects[i].ftid=i;}}
FT.onVisibilityChange=function()
{if(!document.hidden)FT.lastTime=Date.now();}
FT.createNode=function(name,node,data)
{var nodeData=this.findArrayElementByName(name,data.library);node.name=name;if(nodeData.frameCount>1)
{node.timeline={name:node.name,display:node,last:-1,current:0,total:nodeData.frameCount,children:[],isPlaying:true,fps:data.fps,ticker:0,tick:1000/data.fps,labels:{},scripts:{}};FT.timelines[FT.objectCount].push(node.timeline);node.gotoAndPlay=node.play=function(frame_or_label)
{node.timeline.isPlaying=true;node.timeline.last=-1;node.timeline.userCommand="play";if(frame_or_label!=undefined)
{var fr=FT.getFrameOrLabel(node.timeline,frame_or_label);if(fr!=undefined)
{node.timeline.current=FT.getFrameOrLabel(node.timeline,frame_or_label);}
else
{console.log("FT WARNING ***********************************");console.log("frame or label",frame_or_label,"does not exist!");console.log("Skipping *************************************");}}}
node.gotoAndStop=node.stop=function(frame_or_label)
{node.timeline.isPlaying=false;node.timeline.last=-1;node.timeline.userCommand="stop";if(frame_or_label!=undefined)
{var fr=FT.getFrameOrLabel(node.timeline,frame_or_label);if(fr!=undefined)
{node.timeline.current=fr;}
else
{console.log("FT WARNING ***********************************");console.log("frame or label",frame_or_label,"does not exist!");console.log("Skipping *************************************");}}}
node.nextFrame=function()
{node.timeline.isPlaying=false;node.timeline.current++;node.timeline.userCommand="nextFrame";}
node.prevFrame=function()
{node.timeline.isPlaying=false;node.timeline.current--;node.timeline.userCommand="prevFrame";}}
if(!nodeData.children)return;for(var c=nodeData.children.length-1;c>=0;c--)
{nodeData.children[c].z=c;var child=this.createChild(data,nodeData,c,node);node.addChild(child);if(child.type=="mc")
{node[child.name]=child;this.createNode(child.name,child,data);}}
if(nodeData.frameCount>1)
{if(nodeData.labels!=undefined)
{var time=0;for(var lb=0;lb<nodeData.labels.length;lb++)
{time=parseInt(nodeData.labels[lb].t);node.timeline.labels[nodeData.labels[lb].id]=time;}}
if(nodeData.scripts!=undefined)
{var time=0;for(var s=0;s<nodeData.scripts.length;s++)
{time=parseInt(nodeData.scripts[s].t);node.timeline.scripts[time]=nodeData.scripts[s];}}}}
FT.createChild=function(data,nData,id,node)
{var nodeData=nData.children[id];if(nodeData.type=="bmp")
{var texData=this.getTexture(nodeData.name,data.tex.frames);var uv=new PIXI.Rectangle(texData.frame.x,texData.frame.y,texData.frame.w,texData.frame.h);var texture=new PIXI.Texture(data.baseTex,uv);var display=new PIXI.Sprite(texture);if(node.blend)
{switch(node.blend)
{case"ADD":display.blendMode=PIXI.BLEND_MODES.ADD;break;case"SCREEN":display.blendMode=PIXI.BLEND_MODES.SCREEN;break;case"MULTIPLY":display.blendMode=PIXI.BLEND_MODES.MULTIPLY;break;}}}
else
{var display=new PIXI.Container();}
display.instance=this.getMultipleArrayElementCount(nodeData.name,node.children);display.name=nodeData.name;display.type=nodeData.type;display.instanceName=nodeData.instanceName;display.interactiveChildren=false;display.enabled=true;if(nodeData.blend)display.blend=nodeData.blend;var from=this.createTransform(nodeData.frames[0]);from.zIndex=nodeData.z;FT.set(display,from);var to;var start;var duration;if(node.timeline!=undefined)
{var tween={};if(nodeData.frames.length==1)
{from=to=this.createTransform(nodeData.frames[0]);start=0;duration=node.timeline.total;tween=FT.createTween(tween,display,from,to,start,duration);}
for(var fr=0;fr<nodeData.frames.length-1;fr++)
{from=this.createTransform(nodeData.frames[fr]);to=this.createTransform(nodeData.frames[fr+1]);to.ease=from.ease;start=nodeData.frames[fr].t;duration=nodeData.frames[fr+1].t-start;tween=FT.createTween(tween,display,from,to,start,duration);}
if(tween.total<node.timeline.total)
{from=to;start=tween.total;duration=node.timeline.total-start;tween=FT.createTween(tween,display,from,to,start,duration);}
node.timeline.children.push(tween);}
return display;}
FT.getTexture=function(name,frames)
{for(var a=0;a<frames.length;a++)
{if(frames[a].filename==name)
{return frames[a];}}
return null;}
FT.getTime=function(label,array)
{for(var a=0;a<array.length;a++)
{if(array[a].name==label)
{return array[a].t;}}
return null;}
FT.createTransform=function(currentFrame)
{var tf={};if(currentFrame.v==1)
{tf.visible=true;}
else
{tf.visible=false;}
if(currentFrame.hasOwnProperty("ease"))
{tf.ease=currentFrame.ease;}
if(currentFrame.hasOwnProperty("x"))
{tf.x=currentFrame.x;}
else
{tf.x=0;}
if(currentFrame.hasOwnProperty("y"))
{tf.y=currentFrame.y;}
else
{tf.y=0;}
if(currentFrame.hasOwnProperty("sx"))
{tf.scaleX=currentFrame.sx;}
else
{tf.scaleX=1;}
if(currentFrame.hasOwnProperty("sy"))
{tf.scaleY=currentFrame.sy;}
else
{tf.scaleY=1;}
if(currentFrame.hasOwnProperty("skx"))
{tf.skewX=-currentFrame.skx*FT.Deg2Rad;}
else
{tf.skewX=0;}
if(currentFrame.hasOwnProperty("sky"))
{tf.skewY=currentFrame.sky*FT.Deg2Rad;}
else
{tf.skewY=0;}
if(currentFrame.hasOwnProperty("a"))
{tf.alpha=currentFrame.a/100;}
else
{tf.alpha=1;}
if(currentFrame.hasOwnProperty("tint"))
{tf.tint=currentFrame.tint.rgb;}
else
{tf.tint=0;}
return tf;}
FT.set=function(display,tf)
{display.alpha=tf.alpha;display.visible=tf.visible;display.setTransform
(tf.x,tf.y,tf.scaleX,tf.scaleY);display.skew={x:tf.skewX,y:tf.skewY};if(tf.tint!=0)
{display.ft_tint=tf.tint;}}
FT.createTween=function(tween,display,from,to,start,duration)
{if(!tween.target)
{tween={target:display,total:1,visible:[],x:[],y:[],scaleX:[],scaleY:[],skewX:[],skewY:[],alpha:[]};};var complete=0;var frame=0;for(var a=0;a<=duration;a++)
{complete=a/duration;frame=start+a;tween.visible[frame]=from.visible;tween.x[frame]=FT.calcEase(from.x,to.x,complete,to.ease);tween.y[frame]=FT.calcEase(from.y,to.y,complete,to.ease);tween.scaleX[frame]=FT.calcEase(from.scaleX,to.scaleX,complete,to.ease);tween.scaleY[frame]=FT.calcEase(from.scaleY,to.scaleY,complete,to.ease);tween.skewX[frame]=FT.calcEase(from.skewX,to.skewX,complete,to.ease);tween.skewY[frame]=FT.calcEase(from.skewY,to.skewY,complete,to.ease);tween.alpha[frame]=FT.calcEase(from.alpha,to.alpha,complete,to.ease);}
tween.total=tween.visible.length;tween.visible[tween.total-1]=to.visible;return tween;}
FT.calcEase=function(from,to,percent,ease)
{if(ease!=undefined)
{ease/=-100;var percentPow=percent*percent;var linear=to*percent+from*(1-percent);var power=to*percentPow+from*(1-percentPow);var lerp=linear*(1-ease)+power*ease;return lerp;}
else
{if(percent<1)
{return from;}
else
{return to;}}}
FT.onUpdate=function(time,deltaTime)
{FT.deltaTime=deltaTime;var objCount=FT.timelines.length;var tlCount;var childCount;var tween;var child;var script;var timeline;var targetTimeline;for(var obj=0;obj<objCount;obj++)
{if(!FT.objects[obj].enabled)continue;tlCount=FT.timelines[obj].length;for(var tl=0;tl<tlCount;tl++)
{timeline=FT.timelines[obj][tl];timeline.ticker+=FT.deltaTime;if(timeline.ticker<timeline.tick)continue;timeline.ticker-=timeline.tick;if(!timeline.display.enabled)continue;if(!timeline.display.visible)
{if(timeline.userCommand)
{if(timeline.userCommand=="play")timeline.isPlaying=true;}
else
{timeline.last=-1;timeline.current=0;timeline.isPlaying=true;}
continue;}
if(timeline.last==timeline.current)continue;timeline.userCommand=false;script=timeline.scripts[timeline.current];targetTimeline=timeline;if(script)
{if(script.c=="stop")
{if(script.tg!=undefined)targetTimeline=script.tg;targetTimeline.isPlaying=false;}
if(script.c=="play")
{if(script.tg!=undefined)targetTimeline=script.tg;targetTimeline.isPlaying=true;targetTimeline.current++;}
if(script.c=="gotoAndStop")
{if(script.tg!=undefined)targetTimeline=script.tg;targetTimeline.current=FT.getFrameByLabel(timeline.labels,script.p);targetTimeline.isPlaying=false;}
if(script.c=="gotoAndPlay")
{if(script.tg!=undefined)targetTimeline=script.tg;targetTimeline.current=FT.getFrameByLabel(targetTimeline.labels,script.p);targetTimeline.isPlaying=true;}
if(script.c=="nextFrame")
{if(script.tg!=undefined)targetTimeline=script.tg;targetTimeline.current++;targetTimeline.isPlaying=false;}
if(script.c=="prevFrame")
{if(script.tg!=undefined)targetTimeline=script.tg;targetTimeline.current--;targetTimeline.isPlaying=false;}}
targetTimeline.current=Math.min(targetTimeline.current,targetTimeline.total);targetTimeline.current=Math.max(targetTimeline.current,0);childCount=timeline.children.length;var killChildrenIds=[];for(var c=0;c<childCount;c++)
{tween=timeline.children[c];child=tween.target;if(child.transform==null)
{timeline.children.splice(c,1);childCount--;c--;continue;}
if(tween.total-1<timeline.current)
{child.visible=tween.visible[tween.total-1];}
child.visible=tween.visible[timeline.current];if(tween.visible[timeline.current])
{child.alpha=tween.alpha[timeline.current];child.setTransform
(tween.x[timeline.current],tween.y[timeline.current],tween.scaleX[timeline.current],tween.scaleY[timeline.current]);child.skew={x:tween.skewX[timeline.current],y:tween.skewY[timeline.current]};}}
timeline.last=timeline.current;if(timeline.isPlaying)timeline.current++;if(timeline.current>=timeline.total)timeline.current=0;}}
for(var i=0;i<FT.callbacks.length;i++)
{FT.callbacks[i](FT.deltaTime);}}
FT.getFrameByLabel=function(labels,id)
{var frame=parseInt(id)-1;if(isNaN(frame))
{frame=labels[id];}
return frame;};FT.getFrameOrLabel=function(timeline,frame_or_label)
{var frame=frame=parseInt(frame_or_label);if(isNaN(frame))
{frame=timeline.labels[frame_or_label];}
return frame;};FT.resolveScriptTargets=function()
{var timeline;var script;var scriptTarget;for(var tl=0;tl<FT.timelines[FT.objectCount].length;tl++)
{timeline=FT.timelines[FT.objectCount][tl];if(timeline.scripts)
{for(var s in timeline.scripts)
{script=timeline.scripts[s];if(script.tg)
{scriptTarget=script.tg;for(var tl2=0;tl2<FT.timelines[FT.objectCount].length;tl2++)
{if(FT.timelines[FT.objectCount][tl2].name==scriptTarget)
{script.tg=FT.timelines[FT.objectCount][tl2];break;}}}}}}}
FT.findArrayElementByName=function(name,array)
{for(var a=0;a<array.length;a++)
{if(array[a].name==name)
{return array[a];}}
return null;}
FT.getMultipleArrayElementCount=function(name,array)
{var cnt=0;for(var a=0;a<array.length;a++)
{if(array[a].name==name)
{cnt++;}}
return cnt;}
FT.findNthArrayElementByName=function(name,num,array)
{var cnt=0;for(var a=0;a<array.length;a++)
{if(array[a].name==name)
{if(cnt==num)
{return array[a];}
cnt++;}}
return null;}
FT.addCallback=function(func)
{FT.callbacks.push(func);}