function AudioHandler(game)
{window.AudioContext=window.AudioContext||window.webkitAudioContext||window.mozAudioContext;this.app=game.app;this.game=game;this.context=new window.AudioContext();this.audioObjects={};this.positionals=[];this.temporaries=[];this.create=this.create.bind(this);this.loadBuffer=this.loadBuffer.bind(this);this.play=this.play.bind(this);this.stop=this.stop.bind(this);this.setVolume=this.setVolume.bind(this);this.setAudioSourceVolume=this.setAudioSourceVolume.bind(this);this.destroyTemporaries=this.destroyTemporaries.bind(this);this.remove=this.remove.bind(this);}
AudioHandler.prototype.create=function(resourceId)
{if(this.audioObjects[resourceId])return;if(!this.app.isIOS)
{var res=this.app.loader.getResult(resourceId);var audio=this.context.createMediaElementSource(res);audio.connect(this.context.destination);audio.resId=resourceId;}
else
{var audio={};this.loadBuffer(resourceId,audio);}
audio.resId=resourceId;this.audioObjects[resourceId]=audio;if(this.game.state>=this.game.LEVEL_LOADING)this.temporaries.push(audio);}
AudioHandler.prototype.loadBuffer=function(resourceId,audio)
{audio.gain=this.context.createGain();audio.gain.connect(this.context.destination);this.context.decodeAudioData(this.app.loader.getResult(resourceId),function(buffer){audio.buffer=buffer});};AudioHandler.prototype.play=function(id,loop=false,volume=1)
{if(this.context.state=="suspended")this.context.resume();if(!id)return;var audio=this.audioObjects[id];if(!this.app.isIOS)
{audio.mediaElement.volume=volume;audio.mediaElement.loop=loop;audio.mediaElement.currentTime=0;audio.mediaElement.play();}
else
{if(audio.buffer)
{if(audio.source)
{audio.source.disconnect();audio.source.stop(0);audio.source=null;}
audio.source=this.context.createBufferSource();audio.source.buffer=audio.buffer;audio.source.loop=loop;audio.gain.gain.value=volume;audio.source.connect(audio.gain);audio.source.start?audio.source.start(0):audio.source.noteOn(0);}
else
{audio.autostart=true;}}}
AudioHandler.prototype.stop=function(id)
{if(!id)return;var audio=this.audioObjects[id];if(!this.app.isIOS)
{audio.mediaElement.pause();audio.mediaElement.currentTime=0;}
else
{if(audio.source)
{audio.source.disconnect();audio.source.stop(0);audio.source=null;}}};AudioHandler.prototype.setVolume=function(id,vol,time)
{if(!id)return;var audio=this.audioObjects[id];if(time)
{var targetVol=vol;if(!this.app.isIOS)
{gsap.to(audio.mediaElement,time,{ease:Linear.easeNone,volume:vol,onComplete:this.setVolume,onCompleteParams:[id,targetVol]});}
else
{gsap.to(audio.gain.gain,time,{ease:Linear.easeNone,value:vol,onComplete:this.setVolume,onCompleteParams:[id,targetVol]});}}
else
{if(!this.app.isIOS)
{audio.mediaElement.volume=vol;if(vol==0)
{audio.mediaElement.pause();audio.mediaElement.currentTime=0;}}
else
{audio.gain.gain.value=vol;if(vol==0)this.stop(audio.id);}}};AudioHandler.prototype.setAudioSourceVolume=function(id,vol)
{if(!id)return;var audio=this.audioObjects[id];if(!this.app.isIOS)
{audio.mediaElement.volume=vol;}
else
{audio.gain.gain.value=vol;}};AudioHandler.prototype.destroyTemporaries=function()
{for(var i=0;i<this.temporaries.length;i++)
{var audio=this.temporaries[i];if(!this.app.isIOS)
{audio.mediaElement.pause();audio.disconnect();}
else
{if(audio.source){audio.source.disconnect();audio.source.stop();audio.source=null;}
if(audio.buffer){delete audio.buffer;audio.buffer=null;};}
delete this.audioObjects[audio.resId];}
this.temporaries=[];};AudioHandler.prototype.remove=function(resourceId)
{var audio=this.audioObjects[resourceId];if(this.app.isIOS)
{if(audio.source){audio.source.disconnect();audio.source.stop();audio.source=null;}
if(audio.buffer){delete audio.buffer;audio.buffer=null;};}
else
{audio.mediaElement.pause();audio.disconnect();}
delete this.audioObjects[resourceId];};