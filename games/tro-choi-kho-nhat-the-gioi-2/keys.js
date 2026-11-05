function key(x,y,gathered,saved,fadeAlpha,fadingIn,fadingOut){if(gathered==null)
gathered=false;if(saved==null)
saved=false;if(fadeAlpha==null)
fadeAlpha=1;if(fadingIn==null)
fadingIn=false;if(fadingOut==null)
fadingOut=false;this.simpleX=x;this.simpleY=y;this.x=x*TILE_SIZE+TILE_SIZE/2;this.y=y*TILE_SIZE+TILE_SIZE/2;this.gathered=gathered;this.saved=saved;this.fadeAlpha=fadeAlpha;this.fadingIn=fadingIn;this.fadingOut=fadingOut;}
var keys=[[],[],[],[],[new key(19.5,7)],[],[],[],[],[],[],[],[],[],[],[new key(17,15)],[],[],[new key(13,6)],[new key(7.5,9.5),new key(21.5,13.5),new key(22.5,13.5)],[],[new key(18.5,5.5)],[new key(19.5,5.5)],[],[new key(9.5,3.5),new key(17.5,3.5),new key(20.5,9.5)],[],[],[],[],[],[],[],[new key(8.5,12.5),new key(18.5,6.5)],[],[new key(8.5,9.5)],[],[],[new key(4.5,12.5),new key(13.5,2.5),new key(20.5,2.5),],[],[],[],[],[],[],[],[],[],[],[],[],[]];function resetKeys(l){for(var i=0;i<keys[l].length;i++){keys[l][i].gathered=false;keys[l][i].saved=false;keys[l][i].fadeAlpha=1;keys[l][i].fadingIn=false;keys[l][i].fadingOut=false;}}
function updateKeys(){if(state=="game"&&!paused){keysFade();}}
function drawKeys(){if(state=="game"){for(var i=0;i<keys[level].length;i++){if(!keys[level][i].gathered||keys[level][i].fadingIn||keys[level][i].fadingOut){canvas.beginPath();canvas.arc(keys[level][i].x-5,keys[level][i].y+5,3.6*1.5,-0.2*Math.PI,1.6*Math.PI,false);canvas.fillStyle=KEY_OUTLINE_COLOR;canvas.fill();canvas.lineWidth=2;canvas.strokeStyle=ENEMY_OUTLINE_COLOR_0+keys[level][i].fadeAlpha+")";canvas.stroke();canvas.beginPath();canvas.arc(keys[level][i].x-5,keys[level][i].y+5,1.2,0,2*Math.PI,true);canvas.fillStyle=KEY_OUTLINE_COLOR;canvas.fill();canvas.lineWidth=2;canvas.strokeStyle=ENEMY_OUTLINE_COLOR_0+keys[level][i].fadeAlpha+")";canvas.stroke();canvas.beginPath();canvas.moveTo(keys[level][i].x-5+1.4*1.5,keys[level][i].y+5-2.9*1.5);canvas.lineTo(keys[level][i].x-5+2.8*1.5,keys[level][i].y+5-4.4*1.5);canvas.lineTo(keys[level][i].x-5+1.3*1.5,keys[level][i].y+5-5.9*1.5);canvas.lineTo(keys[level][i].x-5+2.8*1.5,keys[level][i].y+5-7.4*1.5);canvas.lineTo(keys[level][i].x-5+4.4*1.5,keys[level][i].y+5-5.9*1.5);canvas.lineTo(keys[level][i].x-5+5.6*1.5,keys[level][i].y+5-7*1.5);canvas.lineTo(keys[level][i].x-5+4.3*1.5,keys[level][i].y+5-8.8*1.5);canvas.lineTo(keys[level][i].x-5+5.4*1.5,keys[level][i].y+5-10*1.5);canvas.lineTo(keys[level][i].x-5+8.5*1.5,keys[level][i].y+5-6.9*1.5);canvas.lineTo(keys[level][i].x-5+3*1.5,keys[level][i].y+5-1.4*1.5);canvas.fillStyle=KEY_OUTLINE_COLOR;canvas.fill();canvas.lineWidth=2;canvas.strokeStyle=ENEMY_OUTLINE_COLOR_0+keys[level][i].fadeAlpha+")";canvas.stroke();}}}}
function keysFade(){if(state=="game"){for(var i=0;i<keys[level].length;i++){if(keys[level][i].fadingOut&&keys[level][i].fadeAlpha>0){keys[level][i].fadeAlpha-=COIN_FADE_SPEED;}
else if(keys[level][i].fadingOut&&keys[level][i].fadeAlpha<=0){keys[level][i].fadeAlpha=0;keys[level][i].fadingOut=false;}
else if(keys[level][i].fadingIn&&keys[level][i].fadeAlpha<1){keys[level][i].fadeAlpha+=COIN_FADE_SPEED;}
else if(keys[level][i].fadingIn&&keys[level][i].fadeAlpha>=1){keys[level][i].fadeAlpha=1;keys[level][i].fadingIn=false;}}}}
function getKeysTotal(){return keys[level].length;}
function unsavedKeys(){for(var i=0;i<keys[level].length;i++){if(keys[level][i].gathered&&!keys[level][i].saved){return true;}}
return false;}
function submitSavedKeys(){keysSave=[];for(var i=0;i<keys[level].length;i++){if(keys[level][i].saved)
keysSave.push(i);}
if(keysSave.length==0)
keysSave.push(-99);localStorage.setItem("whg2_keys",JSON.stringify(keysSave));}
function loadSavedKeys(){resetKeys(level);keysSave=JSON.parse(localStorage["whg2_keys"]);if(keysSave[0]>=0){for(var i=0;i<keysSave.length;i++){keys[level][parseInt(keysSave[i])].gathered=true;keys[level][parseInt(keysSave[i])].saved=true;}}}