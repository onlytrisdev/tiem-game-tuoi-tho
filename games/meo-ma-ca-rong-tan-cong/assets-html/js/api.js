function get_frw_frankenweenie()
{return frw_frankenweenie;}
var frw_frankenweenie={music:[{name:"FW_MainMenuMusic",src:"assets/SoundsMobile/FW_MainMenuMusic.mp3",type:"audio/mp3"},{name:"FW_InGameMusic",src:"assets/SoundsMobile/FW_InGameMusic.mp3",type:"audio/mp3"}],currentMusicName:null,currentMusic:null,isMuted:false,ipadVersion:0,init:function()
{window.ondevicemotion=function(event){if(navigator.platform.indexOf("iPad")!=-1){if(event.acceleration){ipadVersion=(window.devicePixelRatio===2)?3:2;}else ipadVersion=1;}
window.ondevicemotion=null;}},showPortraitWarning:function()
{document.getElementById('portrait').style.cssText="display:table;z-index:10000;width:"+window.innerWidth+"px;height:"+window.innerHeight+"px;";document.getElementById('content').style.cssText="z-index:-2;";},hidePortraitWarning:function()
{document.getElementById('portrait').style.cssText="display:none;z-index:-1;";document.getElementById('content').style.cssText="z-index:10000;";},loadSounds:function(callBack)
{for(var i=0;i<this.music.length;i++)
{this.addAudio(this.music[i]);}},addAudio:function(options)
{var audio=document.createElement('audio');audio.setAttribute('id',options.name);audio.setAttribute('autobuffer',"autobuffer");audio.setAttribute('preload',"auto");audio.setAttribute('loop',"true");var audioSource=document.createElement('source');audio.setAttribute('src',options.src);audio.setAttribute('type',options.type);audio.appendChild(audioSource);document.body.appendChild(audio);return audio;},playMusic:function(musicName,volume)
{if(this.currentMusicName==musicName)return;if(this.currentMusic!=null)
{this.currentMusic.pause();}
this.currentMusic=document.getElementById(musicName);if(this.currentMusic!=null)
{this.currentMusicName=musicName;if(this.currentMusic.currentTime>0)this.currentMusic.currentTime=0;if(volume>0)this.currentMusic.volume=volume;if(!this.isMuted)this.currentMusic.play();}},playSFX:function(sfxName,volume)
{},mute:function()
{if(this.currentMusic!=null)
{this.currentMusic.pause();}
this.isMuted=true;},unmute:function()
{if(this.currentMusic!=null)
{this.currentMusic.play();}
this.isMuted=false;},pause:function()
{this.mute()},resume:function()
{this.unmute()}};