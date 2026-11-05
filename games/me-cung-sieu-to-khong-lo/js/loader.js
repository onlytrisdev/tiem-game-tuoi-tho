/*!
*
* START CANVAS PRELOADER - This is the function that runs to preload canvas asserts
*
*/function initPreload(){toggleLoader(true);checkMobileEvent();$(window).resize(function(){resizeGameFunc();});resizeGameFunc();loader=new createjs.LoadQueue(false);manifest=[{src:'assets/background.png',id:'background'},{src:'assets/logo.png',id:'logo'},{src:'assets/button_levels.png',id:'buttonLevels'},{src:'assets/button_random.png',id:'buttonRandom'},{src:'assets/button_easy.png',id:'buttonEasy'},{src:'assets/button_normal.png',id:'buttonNormal'},{src:'assets/button_hard.png',id:'buttonHard'},{src:'assets/button_play.png',id:'buttonPlay'},{src:'assets/button_left.png',id:'buttonLeft'},{src:'assets/button_right.png',id:'buttonRight'},{src:'assets/icon_trophy.png',id:'iconTrohpy'},{src:'assets/item_status.png',id:'itemStatus'},{src:'assets/button_mobile_left.png',id:'itemButtonLeft'},{src:'assets/button_mobile_right.png',id:'itemButtonRight'},{src:'assets/button_mobile_up.png',id:'itemButtonUp'},{src:'assets/button_mobile_down.png',id:'itemButtonDown'},{src:'assets/button_yes.png',id:'buttonConfirm'},{src:'assets/button_no.png',id:'buttonCancel'},{src:'assets/item_confirm.png',id:'itemExit'},{src:'assets/button_continue.png',id:'buttonContinue'},{src:'assets/item_result.png',id:'itemResult'},{src:'assets/button_facebook.png',id:'buttonFacebook'},{src:'assets/button_twitter.png',id:'buttonTwitter'},{src:'assets/button_whatsapp.png',id:'buttonWhatsapp'},{src:'assets/button_fullscreen.png',id:'buttonFullscreen'},{src:'assets/button_sound_on.png',id:'buttonSoundOn'},{src:'assets/button_sound_off.png',id:'buttonSoundOff'},{src:'assets/button_exit.png',id:'buttonExit'},{src:'assets/button_settings.png',id:'buttonSettings'}];for(var n=0;n<maze_array.length;n++){manifest.push({src:maze_array[n].thumb,id:'thumb'+n});if(maze_array[n].image!=''){manifest.push({src:maze_array[n].image,id:'maze'+n});}
if(maze_array[n].trophyImage!=''){manifest.push({src:maze_array[n].trophyImage,id:'trophyIcon'+n});}}
soundOn=true;if($.browser.mobile||isTablet){if(!enableMobileSound){soundOn=false;}}
if(soundOn){manifest.push({src:'assets/sounds/music_main.ogg',id:'musicMain'});manifest.push({src:'assets/sounds/music_game.ogg',id:'musicGame'});manifest.push({src:'assets/sounds/click.ogg',id:'soundClick'});manifest.push({src:'assets/sounds/confirm.ogg',id:'soundConfirm'});manifest.push({src:'assets/sounds/complete.ogg',id:'soundComplete'});manifest.push({src:'assets/sounds/fail.ogg',id:'soundFail'});manifest.push({src:'assets/sounds/trophy.ogg',id:'soundTrophy'});createjs.Sound.alternateExtensions=["mp3"];loader.installPlugin(createjs.Sound);}
loader.addEventListener("complete",handleComplete);loader.addEventListener("fileload",fileComplete);loader.addEventListener("error",handleFileError);loader.on("progress",handleProgress,this);loader.loadManifest(manifest);}/*!
*
* CANVAS FILE COMPLETE EVENT - This is the function that runs to update when file loaded complete
*
*/
function fileComplete(evt){var item=evt.item;}/*!
*
* CANVAS FILE HANDLE EVENT - This is the function that runs to handle file error
*
*/
function handleFileError(evt){console.log("error ",evt);}/*!
*
* CANVAS PRELOADER UPDATE - This is the function that runs to update preloder progress
*
*/
function handleProgress(){$('#mainLoader span').html(Math.round(loader.progress/1*100)+'%');}/*!
*
* CANVAS PRELOADER COMPLETE - This is the function that runs when preloader is complete
*
*/
function handleComplete(){toggleLoader(false);initMain();};/*!
*
* TOGGLE LOADER - This is the function that runs to display/hide loader
*
*/function toggleLoader(con){if(con){$('#mainLoader').show();}else{$('#mainLoader').hide();}}