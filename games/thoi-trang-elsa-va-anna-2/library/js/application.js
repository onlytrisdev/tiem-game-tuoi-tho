/*
* @author edapskov
* @copyright 2019 edapskov v 5.0
*/
function Application()
{
	/*
	константы
	*/
	var _CWIDTH = 800;
	var _CHEIGHT = 600;
	var _BGWIDTH = 1200;
	var _BGHEIGHT = 600;
	var _INDENT = 10;
	var _BGCOLOR = "#ffffff";
	var _FONT = "Arial";
	var _TITLE = "Thời trang Elsa và Anna 2";
	var _LINKTOGAME = "http://localhost";
	var _LINKTOFACEBOOK = _LINKTOGAME; // or "http://mysite.com"
	var _DELAY = 1;
	var _LANGUAGE = "en";
	/*
	публичные переменные
	*/
	this.copyright = "© DL-Studio, v 5.0";
	/*
	приватные переменные
	*/
	var _stage;
	var _main;
	var _before;
	var _cursor;
	var _shadowScreen;
	var _debugger;
	var _soundManager;
	var _fullScreenCanvasManager;
	var _mygameChildNodes_num;
	var _information = {
		firstRun:true,
		shownAds:false,
		currentNameLocation:null,
		targetLocation:null,
		totalLocations:null,
		currentNameHero:null,
		currentCheckpoint:0,
		totalCheckpoints:3,
		currentRub:0,
		totalRubs:200,
		trackMove:2,
		timeout_id:null,
		locations:
		{
			location_1:{
				completed:null,
				currentAction:null,
				currentNameAction:null,
				totalActions:null,
				actions:{
					action_1:{
						type:"dressup",
						frame:1,
						defaultCursor:"default",
						updatedCursor:null,
						pathObject:null,
						pathSubject:null,
						delay:0.5,
						transition:false,
						skipAndGoto:null,
						openLocFunc:_openLocFunc_1_1,
						closeLocFunc:null,
						addBackgroundSound:null,
						removeBackgroundSound:null,
						addCompletedSound:null,
						removeCompletedSound:null
					}
				}
			},
			location_2:{
				completed:null,
				currentAction:null,
				currentNameAction:null,
				totalActions:null,
				actions:{
					action_1:{
						type:"dressup",
						frame:1,
						defaultCursor:"default",
						updatedCursor:null,
						pathObject:null,
						pathSubject:null,
						delay:0.5,
						transition:false,
						skipAndGoto:null,
						openLocFunc:_openLocFunc_1_2,
						closeLocFunc:null,
						addBackgroundSound:null,
						removeBackgroundSound:null,
						addCompletedSound:null,
						removeCompletedSound:null
					}
				}
			},
			location_3:{
				completed:null,
				currentAction:null,
				currentNameAction:null,
				totalActions:null,
				actions:{
					action_1:{
						type:"dressup",
						frame:1,
						defaultCursor:"default",
						updatedCursor:null,
						pathObject:null,
						pathSubject:null,
						delay:0.5,
						transition:false,
						skipAndGoto:null,
						openLocFunc:_openLocFunc_1_3,
						closeLocFunc:null,
						addBackgroundSound:null,
						removeBackgroundSound:null,
						addCompletedSound:null,
						removeCompletedSound:null
					}
				}
			},
			location_4:{
				completed:null,
				currentAction:null,
				currentNameAction:null,
				totalActions:null,
				actions:{
					action_1:{
						type:"dressup",
						frame:1,
						defaultCursor:"default",
						updatedCursor:null,
						pathObject:null,
						pathSubject:null,
						delay:0.5,
						transition:false,
						skipAndGoto:null,
						openLocFunc:_openLocFunc_1_4,
						closeLocFunc:null,
						addBackgroundSound:null,
						removeBackgroundSound:null,
						addCompletedSound:null,
						removeCompletedSound:null
					}
				}
			}
		},
		heroes:
		{
			hero_1:{
				currentSet:"set_1",
				totalSets:{
					set_1:{
						currentIndex:0,
						frames:[1]
					},
					set_2:{
						currentIndex:0,
						frames:[2]
					},
					set_3:{
						currentIndex:0,
						frames:[3]
					},
					set_4:{
						currentIndex:0,
						frames:[4]
					},
					set_5:{
						currentIndex:0,
						frames:[5]
					},
					set_6:{
						currentIndex:0,
						frames:[1, 2, 3, 4, 5, 6, 7]
					}
				},
				totalDress:{
					blush_0:{},
					blush_1:{},
					blush_2:{},
					blush_3:{},
					blush_4:{},
					blush_5:{},
					blush_6:{},
					lips_0:{},
					lips_1:{},
					lips_2:{},
					lips_3:{},
					lips_4:{},
					lips_5:{},
					lips_6:{},
					shadows_0:{},
					shadows_1:{},
					shadows_2:{},
					shadows_3:{},
					shadows_4:{},
					shadows_5:{},
					shadows_6:{},
					shadows_7:{},
					eyelashes_0:{},
					eyelashes_1:{},
					eyelashes_2:{},
					eyelashes_3:{},
					eyelashes_4:{},
					eyelashes_5:{},
					eyelashes_6:{},
					eyelashes_7:{},
					hair_0:{},
					hair_1:{},
					hair_2:{},
					hair_3:{},
					hair_4:{},
					hair_5:{},
					hair_6:{},
					swimsuit_0:{},
					swimsuit_1:{},
					swimsuit_2:{},
					swimsuit_3:{},
					swimsuit_4:{},
					swimsuit_5:{},
					top_0:{},
					top_1:{},
					top_2:{},
					top_3:{},
					top_4:{},
					top_5:{},
					top_6:{},
					bottom_0:{},
					bottom_1:{},
					bottom_2:{},
					bottom_3:{},
					bottom_4:{},
					bottom_5:{},
					bottom_6:{},
					dress_0:{},
					dress_1:{},
					dress_2:{},
					dress_3:{},
					dress_4:{},
					dress_5:{},
					dress_6:{},
					shoes_0:{},
					shoes_1:{},
					shoes_2:{},
					shoes_3:{},
					shoes_4:{},
					shoes_5:{},
					shoes_6:{},
					headdress_0:{},
					headdress_1:{},
					headdress_2:{},
					glasses_0:{},
					glasses_1:{},
					bracelet_0:{},
					bracelet_1:{},
					earrings_0:{},
					earrings_1:{},
					jewelry_0:{},
					jewelry_1:{},
					bag_0:{},
					bag_1:{},
					bag_2:{},
					bg_1:{},
					bg_2:{}
				},
				currentDress:{
					blush:{currentOption:null, defaultOption:0, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					lips:{currentOption:null, defaultOption:1, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					shadows:{currentOption:null, defaultOption:1, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					eyelashes:{currentOption:null, defaultOption:1, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					hair:{currentOption:null, defaultOption:1, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					swimsuit:{currentOption:null, defaultOption:0, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					top:{currentOption:null, defaultOption:1, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					bottom:{currentOption:null, defaultOption:1, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					dress:{currentOption:null, defaultOption:0, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					shoes:{currentOption:null, defaultOption:0, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					headdress:{currentOption:null, defaultOption:0, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					glasses:{currentOption:null, defaultOption:0, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					bracelet:{currentOption:null, defaultOption:0, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					earrings:{currentOption:null, defaultOption:0, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					jewelry:{currentOption:null, defaultOption:0, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					bag:{currentOption:null, defaultOption:0, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					bg:{currentOption:null, defaultOption:1, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1}
				}
			},
			hero_2:{
				currentSet:"set_1",
				totalSets:{
					set_1:{
						currentIndex:0,
						frames:[1]
					},
					set_2:{
						currentIndex:0,
						frames:[2]
					},
					set_3:{
						currentIndex:0,
						frames:[3]
					},
					set_4:{
						currentIndex:0,
						frames:[4]
					},
					set_5:{
						currentIndex:0,
						frames:[5]
					},
					set_6:{
						currentIndex:0,
						frames:[1, 2, 3, 4, 5, 6, 7]
					}
				},
				totalDress:{
					blush_0:{},
					blush_1:{},
					blush_2:{},
					blush_3:{},
					blush_4:{},
					blush_5:{},
					blush_6:{},
					blush_7:{},
					lips_0:{},
					lips_1:{},
					lips_2:{},
					lips_3:{},
					lips_4:{},
					lips_5:{},
					lips_6:{},
					shadows_0:{},
					shadows_1:{},
					shadows_2:{},
					shadows_3:{},
					shadows_4:{},
					shadows_5:{},
					shadows_6:{},
					shadows_7:{},
					eyelashes_0:{},
					eyelashes_1:{},
					eyelashes_2:{},
					eyelashes_3:{},
					eyelashes_4:{},
					eyelashes_5:{},
					eyelashes_6:{},
					eyelashes_7:{},
					hair_0:{},
					hair_1:{},
					hair_2:{},
					hair_3:{},
					hair_4:{},
					hair_5:{},
					hair_6:{},
					swimsuit_0:{},
					swimsuit_1:{},
					swimsuit_2:{},
					swimsuit_3:{},
					swimsuit_4:{},
					swimsuit_5:{},
					top_0:{},
					top_1:{},
					top_2:{},
					top_3:{},
					top_4:{},
					top_5:{},
					top_6:{},
					bottom_0:{},
					bottom_1:{},
					bottom_2:{},
					bottom_3:{},
					bottom_4:{},
					bottom_5:{},
					bottom_6:{},
					dress_0:{},
					dress_1:{},
					dress_2:{},
					dress_3:{},
					dress_4:{},
					dress_5:{},
					dress_6:{},
					shoes_0:{},
					shoes_1:{},
					shoes_2:{},
					shoes_3:{},
					shoes_4:{},
					shoes_5:{},
					shoes_6:{},
					headdress_0:{},
					headdress_1:{},
					headdress_2:{},
					headdress_3:{},
					glasses_0:{},
					glasses_1:{},
					earrings_0:{},
					earrings_1:{},
					jewelry_0:{},
					jewelry_1:{},
					bag_0:{},
					bag_1:{},
					bag_2:{},
					bg_1:{},
					bg_2:{}
				},
				currentDress:{
					blush:{currentOption:null, defaultOption:0, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					lips:{currentOption:null, defaultOption:1, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					shadows:{currentOption:null, defaultOption:1, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					eyelashes:{currentOption:null, defaultOption:1, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					hair:{currentOption:null, defaultOption:1, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					swimsuit:{currentOption:null, defaultOption:0, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					top:{currentOption:null, defaultOption:1, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					bottom:{currentOption:null, defaultOption:1, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					dress:{currentOption:null, defaultOption:0, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					shoes:{currentOption:null, defaultOption:0, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					headdress:{currentOption:null, defaultOption:0, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					glasses:{currentOption:null, defaultOption:0, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					earrings:{currentOption:null, defaultOption:0, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					jewelry:{currentOption:null, defaultOption:0, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					bag:{currentOption:null, defaultOption:0, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					bg:{currentOption:null, defaultOption:1, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1}
				}
			}
		}
	};
	/*
	
	*/
	this.initFunc = function()
	{
		/*
		
		*/
		var canvas = document.getElementById("canvas");
		/*
		
		*/
		var elementTitle = document.getElementsByTagName("title")[0];
		elementTitle.innerHTML = _TITLE;
		/*
		добавляем контекстное меню
		*/
		/*
		try
		{
			var contextmenu = document.createElement("menu");
			document.body.appendChild(contextmenu);
			contextmenu.type = "context";
			contextmenu.id = "contextmenu";
			var menuitem_1 = document.createElement("menuitem");
			contextmenu.appendChild(menuitem_1);
			menuitem_1.innerHTML = "&nbsp;" + _TITLE + "&nbsp;";
			menuitem_1.addEventListener("click", _onClickLogoBtnFunc, false);
			var menuitem_2 = document.createElement("menuitem");
			contextmenu.appendChild(menuitem_2);
			menuitem_2.innerHTML = "&nbsp;" + this.copyright + "&nbsp;";
			menuitem_2.addEventListener("click", _onClickCopyrightMenuItemFunc, false);
		}
		catch(event)
		{
			trace(event, 1);
		}
		finally
		{
			
		}
		*/
		/*
		
		*/
		_stage = new createjs.Stage(canvas);
		if(createjs.Touch.isSupported())
		{
			/*
			
			*/
			createjs.Touch.enable(_stage);
			/*
			
			*/
			_stage.addEventListener("stagemousedown", _onStageMouseDownFunc, false);
			_stage.addEventListener("stagemousemove", _onStageMouseMoveFunc, false);
			_stage.addEventListener("stagemouseup", _onStageMouseUpFunc, false);
		}
		else
		{
			/*
			
			*/
			_stage.enableMouseOver(10);
			/*
			
			*/
			_stage.addEventListener("stagemousemove", _onStageMouseMoveFunc, false);
		}
		/*
		
		*/
		createjs.Ticker.addEventListener("tick", _onTickFunc, false);
		createjs.Ticker.framerate = lib.properties.fps;
		/*
		
		*/
		var container = new createjs.Container();
		var backgroundContainer = new createjs.Shape();
		backgroundContainer.graphics.beginFill(_BGCOLOR);
		backgroundContainer.graphics.drawRect(-(_BGWIDTH - _CWIDTH) / 2, 0, _BGWIDTH, _CHEIGHT);
		backgroundContainer.graphics.endFill();
		container.addChild(backgroundContainer);
		_stage.addChild(container);
		/*
		
		*/
		var maskContainer = new createjs.Shape();
		maskContainer.graphics.beginFill(_BGCOLOR);
		maskContainer.graphics.drawRect(-(_BGWIDTH - _CWIDTH) / 2, 0, _BGWIDTH, _CHEIGHT);
		maskContainer.graphics.endFill();
		maskContainer.cache(-(_BGWIDTH - _CWIDTH) / 2, 0, _BGWIDTH, _CHEIGHT);
		maskContainer.mouseChildren = false;
		maskContainer.mouseEnabled = false;
		container.mask = maskContainer;
		/*
		контейнер для основной программы
		*/
		_main = new createjs.Container();
		container.addChild(_main);
		/*
		
		*/
		_soundManager = new Edapskov_SoundManager();
		_soundManager.initFunc();
		_soundManager.setInvisibleFunc(false);
		//_soundManager.setVolumeFunc(0.4);
		/*
		
		*/
		_fullScreenCanvasManager = new Edapskov_FullScreenCanvasManager();
		_fullScreenCanvasManager.initFunc();
		/*
		контейнер для вспомогательных окон
		*/
		_before = new createjs.Container();
		container.addChild(_before);
		/*
		
		*/
		_cursor = new createjs.Container();
		container.addChild(_cursor);
		_cursorUpdateFunc();
		/*
		
		*/
		_shadowScreen = new createjs.Container();
		container.addChild(_shadowScreen);
		// затемнение
		var shadowContainer = new createjs.Container();
		_shadowScreen.addChild(shadowContainer);
		shadowContainer.name = "shadowContainer";
		var shadowContainer_part_1 = new createjs.Shape();
		shadowContainer_part_1.graphics.beginFill(_BGCOLOR);
		shadowContainer_part_1.graphics.drawRect(-(_BGWIDTH - _CWIDTH) / 2, 0, _BGWIDTH, _CHEIGHT);
		shadowContainer_part_1.graphics.endFill();
		shadowContainer.addChild(shadowContainer_part_1);
		try
		{
			var shadowContainer_part_2 = new createjs.Shape();
			shadowContainer_part_2.graphics.beginRadialGradientFill([_BGCOLOR, _BGCOLOR], [0, 1], _BGWIDTH / 2, _CHEIGHT / 2, 0, _BGWIDTH / 2, _CHEIGHT / 2, (_BGWIDTH + _CHEIGHT) / 2);
			shadowContainer_part_2.graphics.drawRect(-(_BGWIDTH - _CWIDTH) / 2, 0, _BGWIDTH, _CHEIGHT);
			shadowContainer_part_2.graphics.endFill();
			shadowContainer.addChild(shadowContainer_part_2);
		}
		catch(event)
		{
			trace(event, 1);
		}
		finally
		{
			
		}
		shadowContainer.cache(-(_BGWIDTH - _CWIDTH) / 2, 0, _BGWIDTH, _CHEIGHT);
		// контейнер для анимации перехода
		var curtainContainer = new createjs.Container();
		_shadowScreen.addChild(curtainContainer);
		curtainContainer.name = "curtainContainer";
		// делаем некликабельным
		_shadowScreen.mouseChildren = false;
		_shadowScreen.mouseEnabled = false;
		/*
		
		*/
		_debugger = new Edapskov_Debugger();
		_debugger.initFunc(container, _CWIDTH, _CHEIGHT);
		/*
		
		*/
		window.addEventListener("keydown", _onKeyPressFunc, false);
		window.addEventListener("resize", _onResizeWindowFunc, false);
		window.addEventListener("orientationchange", _onResizeWindowFunc, false);
		_onResizeWindowFunc();
		/*
		
		*/
		_animationTransitionBetweenScenesFunc(_preloaderFunc);
	}
	/*
	
	*/
	this.stopAppFunc = function()
	{
		_stopAppFunc();
	}
	this.playAppFunc = function()
	{
		_playAppFunc();
	}
	/*
	
	*/
	function _onResizeWindowFunc()
	{
		/*
		
		*/
		var innerWidth_num = window.innerWidth;
		var innerHeight_num = window.innerHeight;
		var devicePixelRatio_num = 1;
		if(window.devicePixelRatio)
		{
			devicePixelRatio_num = window.devicePixelRatio;
		}
		/*
		
		*/
		var ratio_num = _CWIDTH / _CHEIGHT;
		var windowRatio_num = innerWidth_num / innerHeight_num;
		var scale_num = innerWidth_num / _CWIDTH;
		if (windowRatio_num > ratio_num)
		{
			scale_num = innerHeight_num / _CHEIGHT;
		}
		/*
		
		*/
		_stage.canvas.width = Math.round(innerWidth_num * devicePixelRatio_num);
		_stage.canvas.height = Math.round(innerHeight_num * devicePixelRatio_num);
		/*
		
		*/
		_stage.canvas.style.width = innerWidth_num + "px";
		_stage.canvas.style.height = innerHeight_num + "px";
		/*
		
		*/
		_stage.scaleX = scale_num * devicePixelRatio_num;
		_stage.scaleY = scale_num * devicePixelRatio_num;
		/*
		
		*/
		_stage.x = Math.round(((innerWidth_num - (_CWIDTH * scale_num)) / 2) * devicePixelRatio_num);
		_stage.y = Math.round(((innerHeight_num - (_CHEIGHT * scale_num)) / 2) * devicePixelRatio_num);
		/*
		
		*/
		_stage.update();
	}
	/*
	==============================================================================================================
	Прелоадер
	==============================================================================================================
	*/
	function _preloaderFunc()
	{
		/*
		
		*/
		_clearContainerFunc(_main);
		_clearContainerFunc(_before);
		/*
		
		*/
		var currentScreen_mc = new lib.PreloaderScreen();
		_main.addChild(currentScreen_mc);
		currentScreen_mc.gotoAndStop(0);
		/*
		
		*/
		currentScreen_mc.play_mc.visible = false;
		/*
		
		*/
		currentScreen_mc.indicator_mc.gotoAndStop(0);
		currentScreen_mc.indicator_mc.mouseChildren = false;
		currentScreen_mc.indicator_mc.mouseEnabled = false;
		currentScreen_mc.indicator_mc.indicator_mc.loop = false;
		currentScreen_mc.indicator_mc.indicator_mc.gotoAndStop(0);
		/*
		
		*/
		currentScreen_mc.animation_mc.gotoAndPlay(0);
		currentScreen_mc.animation_mc.loop = false;
		currentScreen_mc.animation_mc.mouseChildren = true;
		currentScreen_mc.animation_mc.mouseEnabled = true;
		/*
		
		*/
		/*
		currentScreen_mc.animation_mc.logo_mc.gotoAndPlay(0);
		currentScreen_mc.animation_mc.logo_mc.mouseChildren = true;
		currentScreen_mc.animation_mc.logo_mc.mouseEnabled = true;
		currentScreen_mc.animation_mc.logo_mc.cursor = "pointer";
		currentScreen_mc.animation_mc.logo_mc.addEventListener("click", _onClickPreloaderBtnFunc, false);
		*/
		/*
		
		*/
		currentScreen_mc.bg_mc.gotoAndStop(0);
		currentScreen_mc.bg_mc.cache(-(_BGWIDTH - _CWIDTH) / 2, 0, _BGWIDTH, _CHEIGHT);
		/*
		
		*/
		var loadQueue = new createjs.LoadQueue();
		loadQueue.installPlugin(createjs.Sound);
		createjs.Sound.alternateExtensions = ["mp3"];
		/*
		слушаем события
		*/
		loadQueue.addEventListener("error", _onErrorLoadManifestFunc, false);
		loadQueue.addEventListener("progress", _onProgressLoadManifestFunc, false);
		loadQueue.addEventListener("fileload", _onFileLoadManifestFunc, false);
		loadQueue.addEventListener("complete", _onCompleteLoadManifestFunc, false);
		/*
		создаём очередь на загрузку, но запрещаем саму загрузку
		*/
		loadQueue.loadManifest(lib.properties.manifest, false);
		/*
		загружаем звук
		*/
		loadQueue.loadFile({id:"background_sound", src:"library/sounds/background_sound.ogg"});
		loadQueue.loadFile({id:"click_sound", src:"library/sounds/click_sound.ogg"});
		loadQueue.loadFile({id:"select_sound", src:"library/sounds/select_sound.ogg"});
		loadQueue.loadFile({id:"completed_sound", src:"library/sounds/completed_sound.ogg"});
		loadQueue.loadFile({id:"photo_sound", src:"library/sounds/photo_sound.ogg"});
		/*
		добавляем в очередь кое-что из своего
		*/
		loadQueue.loadFile({id:"bitmapdata", src:"library/js/bitmapdata.js"});
		loadQueue.loadFile({id:"blob", src:"library/js/blob.js"});
		loadQueue.loadFile({id:"canvastoblob", src:"library/js/canvastoblob.js"});
		loadQueue.loadFile({id:"filesaver", src:"library/js/filesaver.js"});
		/*
		запускаем загрузку
		*/
		loadQueue.load();
	}
	function _onErrorLoadManifestFunc(event)
	{
		trace("Could not load: " + event.data.src + " !", 2);
	}
	function _onProgressLoadManifestFunc(event)
	{
		/*
		
		*/
		var currentScreen_mc = _main.getChildAt(0);
		currentScreen_mc.gotoAndStop(0);
		/*
		
		*/
		currentScreen_mc.indicator_mc.gotoAndStop(0);
		var totalFrames_num = currentScreen_mc.indicator_mc.indicator_mc.totalFrames;
		var currentFrame_num = Math.floor(totalFrames_num *  event.progress);
		if(currentFrame_num > totalFrames_num)
		{
			currentFrame_num = totalFrames_num;
		}
		else if(currentFrame_num < 0)
		{
			currentFrame_num = totalFrames_num;
		}
		currentScreen_mc.indicator_mc.indicator_mc.gotoAndStop(currentFrame_num);
	}
	function _onFileLoadManifestFunc(event)
	{
		if (event.item.type == "image")
		{
			images[event.item.id] = event.result;
		}
	}
	function _onCompleteLoadManifestFunc(event)
	{
		/*
		
		*/
		var queue = event.target;
		var ssMetadata = lib.ssMetadata;
		for(i = 0; i < ssMetadata.length; i++)
		{
			ss[ssMetadata[i].name] = new createjs.SpriteSheet( {"images": [queue.getResult(ssMetadata[i].name)], "frames": ssMetadata[i].frames} )
		}
		/*
		
		*/
		var currentScreen_mc = _main.getChildAt(0);
		/*
		
		*/
		var totalFrames_num = currentScreen_mc.animation_mc.totalFrames;
		var currentFrame_num = currentScreen_mc.animation_mc.currentFrame;
		if(currentFrame_num < totalFrames_num)
		{
			setTimeout(_onCompleteLoadAppFunc, ((totalFrames_num - currentFrame_num) / lib.properties.fps) * 1000);
		}
		else
		{
			_onCompleteLoadAppFunc();
		}
	}
	/*
	
	*/
	function _onCompleteLoadAppFunc()
	{
		/*
		
		*/
		var currentScreen_mc = _main.getChildAt(0);
		currentScreen_mc.gotoAndStop(0);
		/*
		
		*/
		createjs.Tween.get(currentScreen_mc.indicator_mc).wait(0).to({visible:false, alpha:0.01, scaleX:0.1, scaleY:0.1}, _DELAY * 1000, createjs.Ease.bounceInOut);
		/*
		
		*/
		currentScreen_mc.play_mc.alpha = 0.01;
		currentScreen_mc.play_mc.scaleX = 0.1;
		currentScreen_mc.play_mc.scaleY = 0.1;
		currentScreen_mc.play_mc.visible = true;
		currentScreen_mc.play_mc.cursor = "pointer";
		currentScreen_mc.play_mc.mouseChildren = false;
		currentScreen_mc.play_mc.mouseEnabled = true;
		currentScreen_mc.play_mc.addEventListener("click", _onClickPlayAppBtnFunc, false);
		createjs.Tween.get(currentScreen_mc.play_mc).wait(_DELAY * 1000).to({alpha:1, scaleX:1, scaleY:1}, _DELAY * 1000, createjs.Ease.bounceInOut);
		/*
		
		*/
		var bodyCursor_mc = new lib.Cursor();
		bodyCursor_mc.name = "body_mc";
		_cursor.addChild(bodyCursor_mc);
		_cursor.mouseChildren = false;
		_cursor.mouseEnabled = false;
	}
	/*
	
	*/
	function _onClickPlayAppBtnFunc(event)
	{
		/*
		
		*/
		_soundManager.addSoundFunc("background_sound", 0, 0, -1, 0.1, 0);
		/*
		
		*/
		_animationTransitionBetweenScenesFunc(_welcomeFunc);
	}
	/*
	==============================================================================================================
	Окно приветствия
	==============================================================================================================
	*/
	function _welcomeFunc()
	{
		/*
		
		*/
		_resetFunc();
		/*
		
		*/
		_clearContainerFunc(_main);
		_clearContainerFunc(_before);
		/*
		
		*/
		var currentScreen_mc = new lib.WelcomeScreen();
		_main.addChild(currentScreen_mc);
		currentScreen_mc.gotoAndStop(0);
		/*
		
		*/
		currentScreen_mc.logo_btn.addEventListener("click", _onClickLogoBtnFunc, false);
		/*
		
		*/
		if(currentScreen_mc.credits_btn)
		{
			currentScreen_mc.credits_btn.addEventListener("click", _onClickCreditsBtnFunc, false);
		}
		/*
		
		*/
		if(currentScreen_mc.instruction_btn)
		{
			currentScreen_mc.instruction_btn.addEventListener("click", _onClickInstructionBtnFunc, false);
		}
		/*
		
		*/
		if(currentScreen_mc.moreGames_btn)
		{
			currentScreen_mc.moreGames_btn.addEventListener("click", _onClickMoreGamesBtnFunc, false);
		}
		/*
		
		*/
		currentScreen_mc.play_btn.addEventListener("click", _onClickPlayBtnFunc, false);
		/*
		
		*/
		if(currentScreen_mc.heroes_mc)
		{
			_updateHeroesFunc(currentScreen_mc.heroes_mc);
		}
		/*
		
		*/
		if(currentScreen_mc.bg)
		{
			currentScreen_mc.bg.cache(-(_BGWIDTH - _CWIDTH) / 2, 0, _BGWIDTH, _CHEIGHT);
		}
		/*
		
		*/
		_soundManager.updateSoundMcFunc(currentScreen_mc);
		/*
		
		*/
		_fullScreenCanvasManager.updateFullScreenMcFunc(currentScreen_mc);
		/*
		
		*/
		_cursorUpdateFunc();
	}
	/*
	
	*/
	function _onClickPlayBtnFunc(event)
	{
		/*
		
		*/
		_addAdsFunc();
		/*
		
		*/
		var point_obj = event.currentTarget.localToLocal(event.localX, event.localY, _stage);
		_soundManager.addSoundFunc("click_sound", 0, 0, 0, 1, _soundManager.panFromStageFunc(point_obj.x, _CWIDTH));
		/*
		
		*/
		event.currentTarget.removeEventListener("click", _onClickPlayBtnFunc, false);
		/*
		
		*/
		_resetFunc();
		/*
		
		*/
		_animationTransitionBetweenScenesFunc(_selectFunc, 0, 1, null, true);
		/*
		if(_information.firstRun)
		{
			_information.firstRun = false;
			_animationTransitionBetweenScenesFunc(_cartoonFunc, 0, 1, null, true);
		}
		else
		{
			_animationTransitionBetweenScenesFunc(_selectFunc, 0, 1, null, true);
		}
		*/
	}
	/*
	
	*/
	function _onClickCreditsBtnFunc(event)
	{
		/*
		
		*/
		var point_obj = event.currentTarget.localToLocal(event.localX, event.localY, _stage);
		_soundManager.addSoundFunc("click_sound", 0, 0, 0, 1, _soundManager.panFromStageFunc(point_obj.x, _CWIDTH));
		/*
		
		*/
		_copyrightFunc();
	}
	/*
	
	*/
	function _onClickInstructionBtnFunc(event)
	{
		/*
		
		*/
		var point_obj = event.currentTarget.localToLocal(event.localX, event.localY, _stage);
		_soundManager.addSoundFunc("click_sound", 0, 0, 0, 1, _soundManager.panFromStageFunc(point_obj.x, _CWIDTH));
		/*
		
		*/
		_animationTransitionBetweenScenesFunc(_simpleScreenFunc, 0, _DELAY / 2, ["InstructionScreen"]);
	}
	/*
	
	*/
	function _resetFunc()
	{
		/*
		
		*/
		_information.shownAds = false;
		/*
		
		*/
		if(_information.timeout_id != null)
		{
			clearTimeout(_information.timeout_id);
		}
		/*
		
		*/
		_information.targetLocation = 1;
		_information.totalLocations = 0;
		for(var propLocations in _information.locations)
		{
			if(_information.locations.hasOwnProperty(propLocations))
			{
				_information.totalLocations++;
				_information.locations[propLocations].completed = false;
				_information.locations[propLocations].currentAction = 1;
				_information.locations[propLocations].currentNameAction = "action_" + _information.locations[propLocations].currentAction;
				if(_information.locations[propLocations].totalActions === null)
				{
					_information.locations[propLocations].totalActions = 0;
					for(var propActions in _information.locations[propLocations].actions)
					{
						if(_information.locations[propLocations].actions.hasOwnProperty(propActions))
						{
							_information.locations[propLocations].totalActions++;
						}
					}
				}
			}
		}
		/*
		
		*/
		for(var propHeroes in _information.heroes)
		{
			if(_information.heroes.hasOwnProperty(propHeroes))
			{
				for(var propOptions in _information.heroes[propHeroes].currentDress)
				{
					if(_information.heroes[propHeroes].currentDress.hasOwnProperty(propOptions))
					{
						_information.heroes[propHeroes].currentDress[propOptions].currentOption = _information.heroes[propHeroes].currentDress[propOptions].defaultOption;
						_information.heroes[propHeroes].currentDress[propOptions].currentColor = _information.heroes[propHeroes].currentDress[propOptions].defaultColor;
						_information.heroes[propHeroes].currentDress[propOptions].currentTexture = _information.heroes[propHeroes].currentDress[propOptions].defaultTexture;
						_information.heroes[propHeroes].currentDress[propOptions].currentAlphaTexture = _information.heroes[propHeroes].currentDress[propOptions].defaultAlphaTexture;
					}
				}
			}
		}
	}
	/*
	==============================================================================================================
	cartoonFunc
	==============================================================================================================
	*/
	function _cartoonFunc()
	{
		/*
		
		*/
		_information.currentCartoon++;
		/*
		
		*/
		_clearContainerFunc(_main);
		_clearContainerFunc(_before);
		/*
		
		*/
		var currentScreen_mc = new lib.CartoonScreen();
		_main.addChild(currentScreen_mc);
		currentScreen_mc.gotoAndStop(0);
		currentScreen_mc.body_mc.gotoAndStop(0);
		/*
		
		*/
		currentScreen_mc.logo_btn.addEventListener("click", _onClickLogoBtnFunc, false);
		/*
		
		*/
		if(currentScreen_mc.moreGames_btn)
		{
			currentScreen_mc.moreGames_btn.addEventListener("click", _onClickMoreGamesBtnFunc, false);
		}
		/*
		
		*/
		if(currentScreen_mc.next_btn)
		{
			currentScreen_mc.next_btn.visible = false;
		}
		/*
		
		*/
		if(currentScreen_mc.skip_btn)
		{
			currentScreen_mc.skip_btn.addEventListener("click", _onClickSkipBtnAfterCartoonFunc, false);
		}
		/*
		
		*/
		_updateCartoonScreenFunc();
		/*
		
		*/
		/*
		if(currentScreen_mc.bg)
		{
			currentScreen_mc.bg.cache(-(_BGWIDTH - _CWIDTH) / 2, 0, _BGWIDTH, _CHEIGHT);
		}
		*/
		/*
		
		*/
		_soundManager.updateSoundMcFunc(currentScreen_mc);
		/*
		
		*/
		_fullScreenCanvasManager.updateFullScreenMcFunc(currentScreen_mc);
		/*
		
		*/
		_cursorUpdateFunc();
	}
	/*
	
	*/
	function _updateCartoonScreenFunc()
	{
		/*
		
		*/
		var currentScreen_mc = _main.getChildAt(0);
		/*
		
		*/
		currentScreen_mc.next_btn.visible = false;
		/*
		
		*/
		var animation_mc = currentScreen_mc.body_mc["body_" + Number(currentScreen_mc.body_mc.currentFrame + 1) + "_mc"];
		var timelineControl = new Edapskov_TimelineControl(animation_mc);
		timelineControl.gotoFunc("end", 1, 0);
		timelineControl.addEventListener("completed_timeline", _onFinishAnimatedCartoonScreenFunc, false);
	}
	/*
	
	*/
	function _onFinishAnimatedCartoonScreenFunc(event)
	{
		/*
		
		*/
		var currentScreen_mc = _main.getChildAt(0);
		/*
		
		*/
		currentScreen_mc.next_btn.visible = true;
		currentScreen_mc.next_btn.alpha = 0.01;
		createjs.Tween.get(currentScreen_mc.next_btn).wait(0).to({alpha:1}, _DELAY * 1000, createjs.Ease.cubicInOut);
		currentScreen_mc.next_btn.addEventListener("click", _onClickNextBtnAfterCartoonFunc, false);
	}
	/*
	
	*/
	function _onClickNextBtnAfterCartoonFunc(event)
	{
		/*
		
		*/
		var point_obj = event.currentTarget.localToLocal(event.localX, event.localY, _stage);
		_soundManager.addSoundFunc("click_sound", 0, 0, 0, 1, _soundManager.panFromStageFunc(point_obj.x, _CWIDTH));
		/*
		
		*/
		event.currentTarget.removeEventListener("click", _onClickNextBtnAfterCartoonFunc, false);
		/*
		
		*/
		var currentScreen_mc = _main.getChildAt(0);
		/*
		
		*/
		if(currentScreen_mc.body_mc.currentFrame < (currentScreen_mc.body_mc.totalFrames - 1))
		{
			/*
			
			*/
			currentScreen_mc.body_mc.gotoAndStop(currentScreen_mc.body_mc.currentFrame + 1);
			/*
			
			*/
			_updateCartoonScreenFunc();
		}
		else
		{
			_updateScreenAfterCartoonFunc();
		}
	}
	/*
	
	*/
	function _onClickSkipBtnAfterCartoonFunc(event)
	{
		/*
		
		*/
		var point_obj = event.currentTarget.localToLocal(event.localX, event.localY, _stage);
		_soundManager.addSoundFunc("click_sound", 0, 0, 0, 1, _soundManager.panFromStageFunc(point_obj.x, _CWIDTH));
		/*
		
		*/
		event.currentTarget.removeEventListener("click", _onClickSkipBtnAfterCartoonFunc, false);
		/*
		
		*/
		_updateScreenAfterCartoonFunc();
	}
	/*
	
	*/
	function _updateScreenAfterCartoonFunc()
	{
		_animationTransitionBetweenScenesFunc(_selectFunc, 0, 1, null, true);
	}
	/*
	==============================================================================================================
	Selection Screen
	==============================================================================================================
	*/
	function _selectFunc()
	{
		/*
		
		*/
		_information.currentNameLocation = null;
		/*
		
		*/
		_clearContainerFunc(_main);
		_clearContainerFunc(_before);
		/*
		
		*/
		var currentScreen_mc = new lib.SelectionScreen();
		_main.addChild(currentScreen_mc);
		currentScreen_mc.gotoAndStop(0);
		currentScreen_mc.locations_mc.gotoAndStop(0);
		_updateSelectionLocationFunc();
		/*
		
		*/
		currentScreen_mc.logo_btn.addEventListener("click", _onClickLogoBtnFunc, false);
		/*
		
		*/
		if(currentScreen_mc.help_mc)
		{
			if(_information.firstRun)
			{
				currentScreen_mc.removeChild(currentScreen_mc.help_mc);
			}
			else
			{
				_information.firstRun = true;
				currentScreen_mc.help_mc.addEventListener("click", _onClickHelpMCFunc, false);
			}
		}
		/*
		
		*/
		if(currentScreen_mc.moreGames_btn)
		{
			currentScreen_mc.moreGames_btn.alpha = 0.01;
			createjs.Tween.get(currentScreen_mc.moreGames_btn).wait(_DELAY * 1000).to({alpha:1}, _DELAY * 1000);
			currentScreen_mc.moreGames_btn.addEventListener("click", _onClickMoreGamesBtnFunc, false);
		}
		/*
		
		*/
		_updateHeroesFunc(currentScreen_mc);
		/*
		
		*/
		_soundManager.updateSoundMcFunc(currentScreen_mc);
		/*
		
		*/
		_fullScreenCanvasManager.updateFullScreenMcFunc(currentScreen_mc);
		/*
		
		*/
		_cursorUpdateFunc();
	}
	/*
	
	*/
	function _onClickHelpMCFunc(event)
	{
		/*
		
		*/
		var currentTarget_mc = event.currentTarget;
		/*
		
		*/
		var point_obj = currentTarget_mc.localToLocal(event.localX, event.localY, _stage);
		_soundManager.addSoundFunc("click_sound", 0, 0, 0, 1, _soundManager.panFromStageFunc(point_obj.x, _CWIDTH));
		/*
		
		*/
		currentTarget_mc.removeEventListener("click", _onClickHelpMCFunc, false);
		currentTarget_mc.parent.removeChild(currentTarget_mc);
	}
	/*
	
	*/
	function _updateSelectionLocationFunc()
	{
		/*
		
		*/
		var currentScreen_mc = _main.getChildAt(0);
		currentScreen_mc.locations_mc.play();
		/*
		
		*/
		var location_mc;
		var location_str;
		var location_num = 1;
		/*
		
		*/
		while(location_num <= _information.totalLocations)
		{
			/*
			
			*/
			location_str = "location_" + location_num;
			/*
			
			*/
			if(_information.locations.hasOwnProperty(location_str))
			{
				if(currentScreen_mc.locations_mc[location_str])
				{
					/*
					
					*/
					location_mc = currentScreen_mc.locations_mc[location_str];
					location_mc.gotoAndStop(0);
					location_mc.name = location_str;
					/*
					
					*/
					if(Number(location_num) < Number(_information.targetLocation))
					{
						location_mc.gotoAndStop(2);
						location_mc.mouseEnabled = true;
						location_mc.mouseChildren = false;
						location_mc.cursor = "pointer";
						location_mc.addEventListener("mouseover", _onMouseOverLocationFunc, false);
						location_mc.addEventListener("mouseout", _onMouseOutLocationFunc, false);
						location_mc.addEventListener("click", _onClickLocationFunc, false);
						new Edapskov_Glow(location_mc, _DELAY / 4, "#ffffff", 0);
					}
					else if(Number(location_num) == Number(_information.targetLocation))
					{
						location_mc.gotoAndStop(1);
						location_mc.mouseEnabled = true;
						location_mc.mouseChildren = false;
						location_mc.cursor = "pointer";
						location_mc.addEventListener("mouseover", _onMouseOverLocationFunc, false);
						location_mc.addEventListener("mouseout", _onMouseOutLocationFunc, false);
						location_mc.addEventListener("click", _onClickLocationFunc, false);
						new Edapskov_Glow(location_mc, _DELAY / 4, "#ffffff", 0);
					}
					else
					{
						location_mc.gotoAndStop(0);
						location_mc.mouseEnabled = false;
						location_mc.mouseChildren = false;
						location_mc.cursor = "default";
					}
				}
				else
				{
					trace("Такой локации нет в исходнике!");
				}
			}
			else
			{
				trace("Такой локации нет в списке!");
			}
			/*
			
			*/
			location_num++;
		}
	}
	function _onMouseOverLocationFunc(event)
	{
		var currentTarget_mc = event.currentTarget;
		//createjs.Tween.get(currentTarget_mc).wait(0).to({scaleX:1.06, scaleY:1.06}, (_DELAY / 5) * 1000);
		new Edapskov_Glow(currentTarget_mc, _DELAY / 5, "#ffffff", 15);
	}
	function _onMouseOutLocationFunc(event)
	{
		var currentTarget_mc = event.currentTarget;
		//createjs.Tween.get(currentTarget_mc).wait(0).to({scaleX:1, scaleY:1}, (_DELAY / 3) * 1000);
		new Edapskov_Glow(currentTarget_mc, _DELAY / 3, "#ffffff", 0);
	}

	function _onClickLocationFunc(event)
	{
		/*
		
		*/
		var location_mc = event.currentTarget;
		location_mc.gotoAndStop(2);
		/*
		
		*/
		var point_obj = location_mc.localToLocal(event.localX, event.localY, _stage);
		_soundManager.addSoundFunc("select_sound", 0, 0, 0, 0.2, _soundManager.panFromStageFunc(point_obj.x, _CWIDTH));
		/*
		
		*/
		_information.currentNameLocation = String(location_mc.name);
		/*
		
		*/
		new Edapskov_Flickering(_before, location_mc, ["#ffffff", "#ffffcc"], 10);
		/*
		
		*/
		var currentScreen_mc = _main.getChildAt(0);
		currentScreen_mc.locations_mc.mouseEnabled = false;
		currentScreen_mc.locations_mc.mouseChildren = false;
		/*
		
		*/
		_animationTransitionBetweenScenesFunc(_questFunc, 1, 1, null, true);
	}
	/*
	==============================================================================================================
	Quest Screen
	==============================================================================================================
	*/
	function _questFunc()
	{
		/*
		
		*/
		//_information.currentNameHero = null;
		/*
		
		*/
		_clearContainerFunc(_main);
		_clearContainerFunc(_before);
		/*
		
		*/
		var currentScreen_mc = new lib["LocationScreen_" + parseInt(_information.currentNameLocation.split("_")[1])]();
		_main.addChild(currentScreen_mc);
		currentScreen_mc.gotoAndStop(0);
		/*
		
		*/
		currentScreen_mc.logo_btn.addEventListener("click", _onClickLogoBtnFunc, false);
		/*
		
		*/
		if(currentScreen_mc.moreGames_btn)
		{
			currentScreen_mc.moreGames_btn.addEventListener("click", _onClickMoreGamesBtnFunc, false);
		}
		/*
		
		*/
		if(currentScreen_mc.next_btn)
		{
			currentScreen_mc.next_btn.visible = false;
		}
		/*
		
		*/
		if(currentScreen_mc.skip_btn)
		{
			currentScreen_mc.skip_btn.visible = false;
		}
		/*
		
		*/
		if(currentScreen_mc.toSelectionScreen_btn)
		{
			currentScreen_mc.toSelectionScreen_btn.addEventListener("click", _onClickToSelectionScreenBtnFunc, false);
		}
		/*
		
		*/
		_updateHeroesFunc(currentScreen_mc);
		/*
		
		*/
		_soundManager.updateSoundMcFunc(currentScreen_mc);
		/*
		
		*/
		_fullScreenCanvasManager.updateFullScreenMcFunc(currentScreen_mc);
		/*
		
		*/
		_cursorUpdateFunc();
		/*
		
		*/
		_actionFunc();
	}
	/*
	
	*/
	function _actionFunc()
	{
		/*
		
		*/
		if(_information.locations[_information.currentNameLocation].actions.hasOwnProperty(_information.locations[_information.currentNameLocation].currentNameAction))
		{
			/*
			
			*/
			var i;
			var l;
			/*
			
			*/
			if(_information.locations[_information.currentNameLocation].actions[_information.locations[_information.currentNameLocation].currentNameAction].defaultCursor !== null)
			{
				_cursorUpdateFunc(_information.locations[_information.currentNameLocation].actions[_information.locations[_information.currentNameLocation].currentNameAction].defaultCursor);
			}
			/*
			
			*/
			if(_information.locations[_information.currentNameLocation].actions[_information.locations[_information.currentNameLocation].currentNameAction].addBackgroundSound !== null)
			{
				_soundManager.addSoundFunc(_information.locations[_information.currentNameLocation].actions[_information.locations[_information.currentNameLocation].currentNameAction].addBackgroundSound, 0, 0, 0, 1, 0);
			}
			if(_information.locations[_information.currentNameLocation].actions[_information.locations[_information.currentNameLocation].currentNameAction].removeBackgroundSound !== null)
			{
				_soundManager.removeSoundNameFunc(_information.locations[_information.currentNameLocation].actions[_information.locations[_information.currentNameLocation].currentNameAction].removeBackgroundSound);
			}
			/*
			
			*/
			var currentScreen_mc = _main.getChildAt(0);
			currentScreen_mc.gotoAndStop(0);
			currentScreen_mc.body_mc.gotoAndStop(_information.locations[_information.currentNameLocation].actions[_information.locations[_information.currentNameLocation].currentNameAction].frame - 1);
			/*
			
			*/
			if(_information.locations[_information.currentNameLocation].actions[_information.locations[_information.currentNameLocation].currentNameAction].openLocFunc !== null)
			{
				_information.locations[_information.currentNameLocation].actions[_information.locations[_information.currentNameLocation].currentNameAction].openLocFunc();
			}
			/*
			
			*/
			_updateHeroesFunc(currentScreen_mc.body_mc);
			/*
			
			*/
			_updateIndicatorFunc();
			/*
			
			*/
			if(currentScreen_mc.next_btn)
			{
				currentScreen_mc.next_btn.visible = false;
			}
			/*
			
			*/
			if(currentScreen_mc.skip_btn)
			{
				if(_information.locations[_information.currentNameLocation].actions[_information.locations[_information.currentNameLocation].currentNameAction].skipAndGoto === null)
				{
					currentScreen_mc.skip_btn.visible = false;
				}
				else
				{
					/*
					
					*/
					if(currentScreen_mc.skip_btn.visible)
					{
						currentScreen_mc.skip_btn.alpha = 1;
					}
					else
					{
						currentScreen_mc.skip_btn.alpha = 0.01;
						createjs.Tween.get(currentScreen_mc.skip_btn).wait(0).to({alpha:1}, (_DELAY / 4) * 1000, createjs.Ease.cubicInOut);
					}
					/*
					
					*/
					currentScreen_mc.skip_btn.visible = true;
					currentScreen_mc.skip_btn.addEventListener("click", _onClickSkipBtnFunc, false);
				}
			}
			/*
			
			*/
			var object_mc;
			var objects_arr = new Array();
			if(Array.isArray(_information.locations[_information.currentNameLocation].actions[_information.locations[_information.currentNameLocation].currentNameAction].pathObject))
			{
				/*
				
				*/
				i = 0;
				l = _information.locations[_information.currentNameLocation].actions[_information.locations[_information.currentNameLocation].currentNameAction].pathObject.length;
				/*
				
				*/
				while(i < l)
				{
					/*
					
					*/
					object_mc = _getObjectFunc(_information.locations[_information.currentNameLocation].actions[_information.locations[_information.currentNameLocation].currentNameAction].pathObject[i], true);
					object_mc.visible = true;
					object_mc.gotoAndStop(0);
					object_mc.mouseEnabled = true;
					object_mc.mouseChildren = true;
					object_mc.cursor = "pointer";
					/*
					
					*/
					objects_arr.push(object_mc);
					/*
					
					*/
					i++;
				}
			}
			else
			{
				/*
				
				*/
				object_mc = _getObjectFunc(_information.locations[_information.currentNameLocation].actions[_information.locations[_information.currentNameLocation].currentNameAction].pathObject, true);
				object_mc.visible = true;
				object_mc.gotoAndStop(0);
				object_mc.mouseEnabled = true;
				object_mc.mouseChildren = true;
				object_mc.cursor = "pointer";
				/*
				
				*/
				objects_arr[0] = object_mc;
			}
			/*
			
			*/
			object_mc = objects_arr[0];
			/*
			
			*/
			if(_information.locations[_information.currentNameLocation].actions[_information.locations[_information.currentNameLocation].currentNameAction].type === "click")
			{
				/*
				
				*/
				if(currentScreen_mc.body_mc.pointer_1)
				{
					currentScreen_mc.body_mc.pointer_1.mouseEnabled = false;
					currentScreen_mc.body_mc.pointer_1.mouseChildren = false;
					currentScreen_mc.body_mc.pointer_1.visible = true;
				}
				/*
				
				*/
				if(currentScreen_mc.body_mc.pointer_2)
				{
					currentScreen_mc.body_mc.pointer_2.mouseEnabled = false;
					currentScreen_mc.body_mc.pointer_2.mouseChildren = false;
					currentScreen_mc.body_mc.pointer_2.visible = false;
				}
				/*
				
				*/
				i = 0;
				_information.currentCheckpoint = objects_arr.length;
				while(i < _information.currentCheckpoint)
				{
					objects_arr[i].addEventListener("click", _onClickObjectClickActionFunc, false);
					i++;
				}
			}
			else if(_information.locations[_information.currentNameLocation].actions[_information.locations[_information.currentNameLocation].currentNameAction].type === "drag")
			{
				
			}
			else if(_information.locations[_information.currentNameLocation].actions[_information.locations[_information.currentNameLocation].currentNameAction].type === "move")
			{
				/*
				
				*/
				if(currentScreen_mc.body_mc.pointer_1)
				{
					currentScreen_mc.body_mc.pointer_1.mouseEnabled = false;
					currentScreen_mc.body_mc.pointer_1.mouseChildren = false;
					currentScreen_mc.body_mc.pointer_1.visible = false;
				}
				/*
				
				*/
				if(currentScreen_mc.body_mc.pointer_2)
				{
					currentScreen_mc.body_mc.pointer_2.mouseEnabled = false;
					currentScreen_mc.body_mc.pointer_2.mouseChildren = false;
					currentScreen_mc.body_mc.pointer_2.visible = false;
				}
				/*
				
				*/
				var trackMoveContainer;
				if(_information.trackMove == 2)
				{
					trackMoveContainer = new createjs.Container();
				}
				else
				{
					trackMoveContainer = new createjs.Shape();
				}
				object_mc.addChild(trackMoveContainer);
				trackMoveContainer.name = "trackMoveContainer";
				/*
				
				*/
				i = 1;
				l = _information.totalCheckpoints;
				var checkpoint_mc;
				while(i <= l)
				{
					if(object_mc["checkpoint_" + i])
					{
						checkpoint_mc = object_mc["checkpoint_" + i];
						checkpoint_mc.visible = false;
					}
					i++;
				}
				/*
				
				*/
				object_mc.cursor = "default";
				/*
				
				*/
				_stage.addEventListener("stagemousedown", _onStageMouseDownMoveActionFunc, false);
				_stage.addEventListener("stagemouseup", _onStageMouseUpMoveActionFunc, false);
			}
			else if(_information.locations[_information.currentNameLocation].actions[_information.locations[_information.currentNameLocation].currentNameAction].type === "rub")
			{
				/*
				
				*/
				if(currentScreen_mc.body_mc.pointer_1)
				{
					currentScreen_mc.body_mc.pointer_1.mouseEnabled = false;
					currentScreen_mc.body_mc.pointer_1.mouseChildren = false;
					currentScreen_mc.body_mc.pointer_1.visible = false;
				}
				/*
				
				*/
				if(currentScreen_mc.body_mc.pointer_2)
				{
					currentScreen_mc.body_mc.pointer_2.mouseEnabled = false;
					currentScreen_mc.body_mc.pointer_2.mouseChildren = false;
					currentScreen_mc.body_mc.pointer_2.visible = false;
				}
				/*
				
				*/
				if(currentScreen_mc.body_mc.hint_mc)
				{
					currentScreen_mc.body_mc.hint_mc.mouseEnabled = false;
					currentScreen_mc.body_mc.hint_mc.mouseChildren = false;
					currentScreen_mc.body_mc.hint_mc.visible = true;
				}
				/*
				
				*/
				_information.currentRub = 0;
				if(_information.locations[_information.currentNameLocation].actions[_information.locations[_information.currentNameLocation].currentNameAction].totalRubs == null)
				{
					_information.locations[_information.currentNameLocation].actions[_information.locations[_information.currentNameLocation].currentNameAction].totalRubs = _information.totalRubs;
				}
				/*
				
				*/
				_stage.addEventListener("stagemousemove", _onStageMouseMoveRubActionFunc, false);
			}
			else if(_information.locations[_information.currentNameLocation].actions[_information.locations[_information.currentNameLocation].currentNameAction].type === "dressup")
			{
				/*
				
				*/
				if(currentScreen_mc.body_mc.pointer_1)
				{
					currentScreen_mc.body_mc.pointer_1.mouseEnabled = false;
					currentScreen_mc.body_mc.pointer_1.mouseChildren = false;
					currentScreen_mc.body_mc.pointer_1.visible = true;
				}
				/*
				
				*/
				if(currentScreen_mc.body_mc.pointer_2)
				{
					currentScreen_mc.body_mc.pointer_2.mouseEnabled = false;
					currentScreen_mc.body_mc.pointer_2.mouseChildren = false;
					currentScreen_mc.body_mc.pointer_2.visible = false;
				}
				/*
				
				*/
				_beginDressupActionFunc();
			}
			else if(_information.locations[_information.currentNameLocation].actions[_information.locations[_information.currentNameLocation].currentNameAction].type === "dressupSecond")
			{
				/*
				
				*/
				if(currentScreen_mc.body_mc.pointer_1)
				{
					currentScreen_mc.body_mc.pointer_1.mouseEnabled = false;
					currentScreen_mc.body_mc.pointer_1.mouseChildren = false;
					currentScreen_mc.body_mc.pointer_1.visible = true;
				}
				/*
				
				*/
				if(currentScreen_mc.body_mc.pointer_2)
				{
					currentScreen_mc.body_mc.pointer_2.mouseEnabled = false;
					currentScreen_mc.body_mc.pointer_2.mouseChildren = false;
					currentScreen_mc.body_mc.pointer_2.visible = false;
				}
				/*
				
				*/
				_beginDressupSecondActionFunc();
			}
			else if(_information.locations[_information.currentNameLocation].actions[_information.locations[_information.currentNameLocation].currentNameAction].type === "dressupThird")
			{
				/*
				
				*/
				if(currentScreen_mc.body_mc.pointer_1)
				{
					currentScreen_mc.body_mc.pointer_1.mouseEnabled = false;
					currentScreen_mc.body_mc.pointer_1.mouseChildren = false;
					currentScreen_mc.body_mc.pointer_1.visible = true;
				}
				/*
				
				*/
				if(currentScreen_mc.body_mc.pointer_2)
				{
					currentScreen_mc.body_mc.pointer_2.mouseEnabled = false;
					currentScreen_mc.body_mc.pointer_2.mouseChildren = false;
					currentScreen_mc.body_mc.pointer_2.visible = false;
				}
				/*
				
				*/
				_beginDressupThirdActionFunc();
			}
			/*
			
			*/
			var subject_mc = _getObjectFunc(_information.locations[_information.currentNameLocation].actions[_information.locations[_information.currentNameLocation].currentNameAction].pathSubject, true);
			subject_mc.visible = true;
			subject_mc.gotoAndStop(0);
		}
		else
		{
			_endActionsFunc();
		}
	}
	/*
	============================================================
	click action
	============================================================
	*/
	function _onClickObjectClickActionFunc(event)
	{
		/*
		
		*/
		var currentScreen_mc = _main.getChildAt(0);
		/*
		
		*/
		_information.currentCheckpoint--;
		/*
		
		*/
		var object_mc = event.currentTarget;
		object_mc.cursor = "default";
		object_mc.removeEventListener("click", _onClickObjectClickActionFunc, false);
		/*
		
		*/
		if(object_mc.totalFrames == 2)
		{
			object_mc.gotoAndStop(1);
		}
		else
		{
			object_mc.play();
		}
		/*
		
		*/
		if(_information.currentCheckpoint <= 0)
		{
			/*
			
			*/
			if(currentScreen_mc.body_mc.pointer_1)
			{
				currentScreen_mc.body_mc.pointer_1.visible = false;
			}
			/*
			
			*/
			_updateCurrentActionFunc();
		}
	}
	/*
	============================================================
	move action
	============================================================
	*/
	function _onStageMouseDownMoveActionFunc(event)
	{
		/*
		
		*/
		_information.currentCheckpoint = 1;
		/*
		
		*/
		var object_mc = _getObjectFunc(_information.locations[_information.currentNameLocation].actions[_information.locations[_information.currentNameLocation].currentNameAction].pathObject);
		/*
		
		*/
		var trackMoveContainer = object_mc.getChildByName("trackMoveContainer");
		var point_obj = event.currentTarget.localToLocal(event.localX, event.localY, trackMoveContainer);
		/*
		
		*/
		if(_information.trackMove == 1)
		{
			/*
			
			*/
			trackMoveContainer.graphics.clear();
			/*
			
			*/
			trackMoveContainer.graphics.setStrokeStyle(_INDENT, "round").beginStroke("#ff0000");
			trackMoveContainer.graphics.moveTo(point_obj.x, point_obj.y);
		}
		else if(_information.trackMove == 2)
		{
			/*
			
			*/
			_clearContainerFunc(trackMoveContainer);
			/*
			
			*/
			var trackMove_mc = new lib.TrackMove();
			trackMoveContainer.addChild(trackMove_mc);
			trackMove_mc.x = point_obj.x;
			trackMove_mc.y = point_obj.y;
			trackMove_mc.gotoAndPlay(0);
		}
		else
		{
			
		}
		/*
		
		*/
		_stage.addEventListener("stagemousemove", _onStageMouseMoveMoveActionFunc, false);
	}
	function _onStageMouseUpMoveActionFunc(event)
	{
		/*
		
		*/
		var object_mc = _getObjectFunc(_information.locations[_information.currentNameLocation].actions[_information.locations[_information.currentNameLocation].currentNameAction].pathObject);
		/*
		
		*/
		var trackMoveContainer = object_mc.getChildByName("trackMoveContainer");
		/*
		
		*/
		if(_information.trackMove == 1)
		{
			trackMoveContainer.graphics.endStroke();
			trackMoveContainer.graphics.clear();
		}
		else if(_information.trackMove == 2)
		{
			_clearContainerFunc(trackMoveContainer);
		}
		else
		{
			
		}
		/*
		 
		*/
		_stage.removeEventListener("stagemousemove", _onStageMouseMoveMoveActionFunc, false);
		/*
		
		*/
		if(_information.currentCheckpoint > _information.totalCheckpoints)
		{
			/*
			
			*/
			object_mc.visible = false;
			/*
			
			*/
			_stage.removeEventListener("stagemousedown", _onStageMouseDownMoveActionFunc, false);
			_stage.removeEventListener("stagemouseup", _onStageMouseUpMoveActionFunc, false);
			/*
			
			*/
			_updateCurrentActionFunc();
		}
	}
	function _onStageMouseMoveMoveActionFunc(event)
	{
		/*
		
		*/
		var object_mc = _getObjectFunc(_information.locations[_information.currentNameLocation].actions[_information.locations[_information.currentNameLocation].currentNameAction].pathObject);
		/*
		
		*/
		var trackMoveContainer = object_mc.getChildByName("trackMoveContainer");
		var point_obj = event.currentTarget.localToLocal(event.localX, event.localY, trackMoveContainer);
		/*
		
		*/
		if(_information.trackMove == 1)
		{
			trackMoveContainer.graphics.lineTo(point_obj.x, point_obj.y);
			trackMoveContainer.graphics.endStroke();
			trackMoveContainer.graphics.setStrokeStyle(_INDENT, "round").beginStroke("#ff0000");
			trackMoveContainer.graphics.moveTo(point_obj.x, point_obj.y);
		}
		else if(_information.trackMove == 2)
		{
			var trackMove_mc = new lib.TrackMove();
			trackMoveContainer.addChild(trackMove_mc);
			trackMove_mc.x = point_obj.x;
			trackMove_mc.y = point_obj.y;
			trackMove_mc.gotoAndPlay(0);
		}
		else
		{
			
		}
		/*
		
		*/
		var checkpoint_mc;
		if(object_mc["checkpoint_" + _information.currentCheckpoint])
		{
			/*
			
			*/
			checkpoint_mc = object_mc["checkpoint_" + _information.currentCheckpoint];
			/*
			
			*/
			point_obj = event.currentTarget.localToLocal(event.localX, event.localY, checkpoint_mc);
			/*
			
			*/
			if(checkpoint_mc.hitTest(point_obj.x, point_obj.y))
			{
				_information.currentCheckpoint++;
			}
		}
	}
	/*
	============================================================
	rub action
	============================================================
	*/
	function _onStageMouseMoveRubActionFunc(event)
	{
		/*
		
		*/
		var object_mc = _getObjectFunc(_information.locations[_information.currentNameLocation].actions[_information.locations[_information.currentNameLocation].currentNameAction].pathObject);
		/*
		
		*/
		var point_obj = event.currentTarget.localToLocal(event.localX, event.localY, object_mc);
		if(object_mc.hitTest(point_obj.x, point_obj.y))
		{
			/*
			
			*/
			_information.currentRub++;
			var share_num = _information.currentRub / _information.locations[_information.currentNameLocation].actions[_information.locations[_information.currentNameLocation].currentNameAction].totalRubs;
			if(share_num < 0)
			{
				share_num = 0;
			}
			if(share_num > 1)
			{
				share_num = 1;
			}
			/*
			
			*/
			var currentScreen_mc = _main.getChildAt(0);
			/*
			
			*/
			var subject_mc = _getObjectFunc(_information.locations[_information.currentNameLocation].actions[_information.locations[_information.currentNameLocation].currentNameAction].pathSubject);
			/*
			
			*/
			if(subject_mc.totalFrames <= 1)
			{
				subject_mc.alpha = 1 - share_num;
			}
			else
			{
				/*
				
				*/
				var targetFrame_num = Math.round(share_num * subject_mc.totalFrames) - 1;
				if(targetFrame_num >= subject_mc.totalFrames)
				{
					targetFrame_num = subject_mc.totalFrames - 1;
				}
				/*
				
				*/
				subject_mc.gotoAndStop(targetFrame_num);
			}
			/*
			
			*/
			_updateIndicatorFunc(share_num);
			/*
			
			*/
			if(_information.currentRub > _information.locations[_information.currentNameLocation].actions[_information.locations[_information.currentNameLocation].currentNameAction].totalRubs)
			{
				/*
				
				*/
				if(currentScreen_mc.body_mc.hint_mc)
				{
					currentScreen_mc.body_mc.hint_mc.visible = false;
				}
				/*
				
				*/
				_stage.removeEventListener("stagemousemove", _onStageMouseMoveRubActionFunc, false);
				/*
				
				*/
				_updateCurrentActionFunc();
			}
		}
	}
	/*
	============================================================
	dressup action
	============================================================
	*/
	function _beginDressupActionFunc()
	{
		/*
		
		*/
		var currentScreen_mc = _main.getChildAt(0);
		var dressupPanel_mc;
		var heroes_arr = new Array();
		var i;
		var l;
		/*
		
		*/
		for(var propHeroes in _information.heroes)
		{
			if(_information.heroes.hasOwnProperty(propHeroes))
			{
				if(currentScreen_mc.body_mc[propHeroes])
				{
					if(currentScreen_mc.body_mc[propHeroes])
					{
						heroes_arr.unshift(propHeroes);
					}
					else
					{
						heroes_arr.push(propHeroes);
					}
				}
			}
		}
		/*
		
		*/
		if(heroes_arr.length > 0)
		{
			/*
			
			*/
			//_information.currentNameHero = heroes_arr[0];
			/*
			
			*/
			if(currentScreen_mc.body_mc["dressupPanel_" + (currentScreen_mc.body_mc.currentFrame + 1) + "_mc"])
			{
				/*
				
				*/
				dressupPanel_mc = currentScreen_mc.body_mc["dressupPanel_" + (currentScreen_mc.body_mc.currentFrame + 1) + "_mc"];
				dressupPanel_mc.gotoAndStop(0);
				dressupPanel_mc.body_mc.gotoAndStop(0);
				/*
				
				*/
				dressupPanel_mc.prev_mc.mouseEnabled = true;
				dressupPanel_mc.prev_mc.mouseChildren = false;
				dressupPanel_mc.prev_mc.cursor = "pointer";
				dressupPanel_mc.prev_mc.addEventListener("mouseover", _onMouseOverNavigationMcDressupActionFunc, false);
				dressupPanel_mc.prev_mc.addEventListener("mouseout", _onMouseOutNavigationMcDressupActionFunc, false);
				dressupPanel_mc.prev_mc.addEventListener("click", _onClickPrevNavigationMcDressupActionFunc, false);
				dressupPanel_mc.next_mc.mouseEnabled = true;
				dressupPanel_mc.next_mc.mouseChildren = false;
				dressupPanel_mc.next_mc.cursor = "pointer";
				dressupPanel_mc.next_mc.addEventListener("mouseover", _onMouseOverNavigationMcDressupActionFunc, false);
				dressupPanel_mc.next_mc.addEventListener("mouseout", _onMouseOutNavigationMcDressupActionFunc, false);
				dressupPanel_mc.next_mc.addEventListener("click", _onClickNextNavigationMcDressupActionFunc, false);
				/*
				
				*/
				_updateSelectHeroDressupActionFunc();
				/*
				
				*/
				_updatePanelDressupActionFunc();
			}
		}
		else
		{
			trace("Хде герой!")
		}
	}
	/*
	
	*/
	function _updateSelectHeroDressupActionFunc()
	{
		/*
		
		*/
		var currentScreen_mc = _main.getChildAt(0);
		var hero_mc;
		/*
		
		*/
		for(var propHero in _information.heroes)
		{
			if(_information.heroes.hasOwnProperty(propHero))
			{
				if(currentScreen_mc.body_mc[propHero])
				{
					/*
					
					*/
					hero_mc = currentScreen_mc.body_mc[propHero];
					hero_mc.name = propHero;
					/*
					
					*/
					if(propHero === _information.currentNameHero)
					{
						hero_mc.mouseEnabled = false;
						hero_mc.mouseChildren = false;
						hero_mc.cursor = "default";
						hero_mc.removeEventListener("click", _onClickHeroDressupActionFunc, false);
						//new Edapskov_Glow(hero_mc, _DELAY / 2, "#ffffff", 20);
					}
					else
					{
						hero_mc.mouseEnabled = true;
						hero_mc.mouseChildren = false;
						hero_mc.cursor = "pointer";
						hero_mc.addEventListener("click", _onClickHeroDressupActionFunc, false);
						//new Edapskov_Glow(hero_mc, _DELAY / 4, "#ffffff", 0);
					}
				}
			}
		}
	}
	function _onClickHeroDressupActionFunc(event)
	{
		/*
		
		*/
		var currentTarget_mc = event.currentTarget;
		/*
		
		*/
		var point_obj = currentTarget_mc.localToLocal(event.localX, event.localY, _stage);
		_soundManager.addSoundFunc("click_sound", 0, 0, 0, 1, _soundManager.panFromStageFunc(point_obj.x, _CWIDTH));
		/*
		
		*/
		_information.currentNameHero = String(currentTarget_mc.name);
		/*
		
		*/
		_updateSelectHeroDressupActionFunc();
		/*
		
		*/
		_updatePanelDressupActionFunc();
		//_animationTransitionPanelDressupActionFunc();
	}
	/*
	
	*/
	function _animationTransitionPanelDressupActionFunc()
	{
		var currentScreen_mc = _main.getChildAt(0);
		var dressupPanel_mc = currentScreen_mc.body_mc["dressupPanel_" + (currentScreen_mc.body_mc.currentFrame + 1) + "_mc"];
		createjs.Tween.get(dressupPanel_mc.body_mc).wait(0).to({alpha:0.1}, (_DELAY / 5) * 1000).call(_onCompleteAnimationTransitionPanelDressupActionFunc);
	}
	function _onCompleteAnimationTransitionPanelDressupActionFunc()
	{
		/*
		
		*/
		var currentScreen_mc = _main.getChildAt(0);
		var dressupPanel_mc = currentScreen_mc.body_mc["dressupPanel_" + (currentScreen_mc.body_mc.currentFrame + 1) + "_mc"];
		createjs.Tween.get(dressupPanel_mc.body_mc).wait(0).to({alpha:1}, (_DELAY / 4) * 1000);
		/*
		
		*/
		_updatePanelDressupActionFunc();
	}
	function _updatePanelDressupActionFunc()
	{
		/*
		
		*/
		var currentScreen_mc = _main.getChildAt(0);
		var dressupPanel_mc = currentScreen_mc.body_mc["dressupPanel_" + (currentScreen_mc.body_mc.currentFrame + 1) + "_mc"];
		/*
		
		*/
		var set_mc;
		for(var propSet in _information.heroes[_information.currentNameHero].totalSets)
		{
			if(_information.heroes[_information.currentNameHero].totalSets.hasOwnProperty(propSet))
			{
				if(dressupPanel_mc[propSet])
				{
					/*
					
					*/
					set_mc = dressupPanel_mc[propSet];
					set_mc.gotoAndStop(0);
					set_mc.name = propSet;
					/*
					
					*/
					if(propSet === _information.heroes[_information.currentNameHero].currentSet)
					{
						/*
						
						*/
						//set_mc.shadow = null;
						//set_mc.alpha = 0.4;
						set_mc.mouseEnabled = false;
						set_mc.mouseChildren = false;
						set_mc.cursor = "default";
						set_mc.removeEventListener("mouseover", _onMouseOverSetMcDressupActionFunc, false);
						set_mc.removeEventListener("mouseout", _onMouseOutSetMcDressupActionFunc, false);
						set_mc.removeEventListener("click", _onClickSetMcDressupActionFunc, false);
						/*
						
						*/
						if(set_mc.substrate_mc)
						{
							set_mc.substrate_mc.gotoAndStop(0);
							if(set_mc.substrate_mc.totalFrames > 1)
							{
								set_mc.substrate_mc.gotoAndStop(1);
							}
						}
						/*
						
						*/
						if(set_mc.check_mc)
						{
							set_mc.check_mc.gotoAndStop(0);
							if(set_mc.check_mc.totalFrames > 1)
							{
								set_mc.check_mc.gotoAndStop(1);
							}
						}
						else
						{
							set_mc.alpha = 0.4;
						}
					}
					else
					{
						/*
						
						*/
						//set_mc.alpha = 1;
						set_mc.mouseEnabled = true;
						set_mc.mouseChildren = false;
						set_mc.cursor = "pointer";
						set_mc.addEventListener("mouseover", _onMouseOverSetMcDressupActionFunc, false);
						set_mc.addEventListener("mouseout", _onMouseOutSetMcDressupActionFunc, false);
						set_mc.addEventListener("click", _onClickSetMcDressupActionFunc, false);
						/*
						
						*/
						if(set_mc.substrate_mc)
						{
							set_mc.substrate_mc.gotoAndStop(0);
						}
						/*
						
						*/
						if(set_mc.check_mc)
						{
							set_mc.check_mc.gotoAndStop(0);
						}
						else
						{
							set_mc.alpha = 1;
						}
					}
				}
			}
		}
		/*
		
		*/
		var hero_mc;
		for(var propHero in _information.heroes)
		{
			if(_information.heroes.hasOwnProperty(propHero))
			{
				if(dressupPanel_mc.body_mc[propHero])
				{
					/*
					
					*/
					hero_mc = dressupPanel_mc.body_mc[propHero];
					hero_mc.name = propHero;
					/*
					
					*/
					if(propHero === _information.currentNameHero)
					{
						/*
						
						*/
						hero_mc.visible = true;
						hero_mc.gotoAndStop(_information.heroes[_information.currentNameHero].totalSets[_information.heroes[_information.currentNameHero].currentSet].frames[_information.heroes[_information.currentNameHero].totalSets[_information.heroes[_information.currentNameHero].currentSet].currentIndex] - 1);
						/*
						
						*/
						if(_information.heroes[_information.currentNameHero].totalSets[_information.heroes[_information.currentNameHero].currentSet].frames.length <= 1)
						{
							dressupPanel_mc.prev_mc.visible = false;
							dressupPanel_mc.next_mc.visible = false;
						}
						else
						{
							dressupPanel_mc.prev_mc.visible = true;
							dressupPanel_mc.next_mc.visible = true;
						}
						/*
						
						*/
						_updateCurrentOptionsDressupActionFunc();
					}
					else
					{
						hero_mc.visible = false;
					}
				}
			}
		}
	}
	function _updateCurrentOptionsDressupActionFunc()
	{
		/*
		
		*/
		var currentScreen_mc = _main.getChildAt(0);
		var dressupPanel_mc = currentScreen_mc.body_mc["dressupPanel_" + (currentScreen_mc.body_mc.currentFrame + 1) + "_mc"];
		var hero_mc;
		var object_mc;
		var object_str;
		var bounds_rect;
		/*
		
		*/
		if(dressupPanel_mc.body_mc[_information.currentNameHero])
		{
			/*
			
			*/
			hero_mc = dressupPanel_mc.body_mc[_information.currentNameHero];
			/*
			
			*/
			for(var propObject in _information.heroes[_information.currentNameHero].totalDress)
			{
				if(_information.heroes[_information.currentNameHero].totalDress.hasOwnProperty(propObject))
				{
					/*
					
					*/
					if(hero_mc[propObject])
					{
						/*
						
						*/
						object_mc = hero_mc[propObject];
						object_mc.gotoAndStop(0);
						object_mc.name = propObject;
						/*
						
						*/
						/*
						if(object_mc.bitmapCache)
						{
							object_mc.updateCache();
						}
						else
						{
							bounds_rect = object_mc.getBounds();
							object_mc.cache(bounds_rect.x, bounds_rect.y, bounds_rect.width, bounds_rect.height);
						}
						*/
						/*
						
						*/
						if(_selectedOptionDressupActionFunc(propObject))
						{
							/*
							
							*/
							//object_mc.shadow = null;
							//object_mc.alpha = 0.4;
							object_mc.mouseEnabled = false;
							object_mc.mouseChildren = false;
							object_mc.cursor = "default";
							object_mc.removeEventListener("mouseover", _onMouseOverObjectMcDressupActionFunc, false);
							object_mc.removeEventListener("mouseout", _onMouseOutObjectMcDressupActionFunc, false);
							object_mc.removeEventListener("click", _onClickObjectMcDressupActionFunc, false);
							/*
							
							*/
							if(object_mc.substrate_mc)
							{
								object_mc.substrate_mc.gotoAndStop(0);
								if(object_mc.substrate_mc.totalFrames > 1)
								{
									object_mc.substrate_mc.gotoAndStop(1);
								}
							}
							else
							{
								//object_mc.alpha = 0.4;
								//object_mc.visible = false;
							}
							/*
							
							*/
							if(object_mc.check_mc)
							{
								object_mc.check_mc.gotoAndStop(0);
								if(object_mc.check_mc.totalFrames > 1)
								{
									object_mc.check_mc.gotoAndStop(1);
								}
							}
							else
							{
								object_mc.visible = false;
							}
						}
						else
						{
							/*
							
							*/
							//object_mc.filters = [];
							//object_mc.alpha = 1;
							object_mc.mouseEnabled = true;
							object_mc.mouseChildren = false;
							object_mc.cursor = "pointer";
							object_mc.addEventListener("mouseover", _onMouseOverObjectMcDressupActionFunc, false);
							object_mc.addEventListener("mouseout", _onMouseOutObjectMcDressupActionFunc, false);
							object_mc.addEventListener("click", _onClickObjectMcDressupActionFunc, false);
							/*
							
							*/
							if(object_mc.substrate_mc)
							{
								object_mc.substrate_mc.gotoAndStop(0);
							}
							else
							{
								//object_mc.alpha = 1;
								//object_mc.visible = true;
							}
							/*
							
							*/
							if(object_mc.check_mc)
							{
								object_mc.check_mc.gotoAndStop(0);
							}
							else
							{
								object_mc.visible = true;
							}
						}
					}
				}
			}
			/*
			
			*/
			for(var propObject_2 in _information.heroes[_information.currentNameHero].currentDress)
			{
				if(_information.heroes[_information.currentNameHero].currentDress.hasOwnProperty(propObject_2))
				{
					/*
					
					*/
					object_str = "color_" + propObject_2;
					/*
					
					*/
					if(hero_mc[object_str])
					{
						object_mc = hero_mc[object_str];
						object_mc.name = object_str;
						object_mc.gotoAndStop(0);
						object_mc.mouseChildren = false;
						object_mc.mouseEnabled = true;
						object_mc.cursor = "pointer";
						object_mc.addEventListener("click", _onClickColorPickerMcDressupActionFunc, false);
					}
					/*
					
					*/
					object_str = "texture_" + propObject_2;
					/*
					
					*/
					if(hero_mc[object_str])
					{
						/*
						
						*/
						object_mc = hero_mc[object_str];
						object_mc.gotoAndStop(0);
						object_mc.name = object_str;
						/*
						
						*/
						if(object_mc.body_mc)
						{
							_updateAvailableTextureDressupActionFunc(object_mc.body_mc, _information.heroes[_information.currentNameHero].currentDress[propObject_2].currentTexture);
						}
						/*
						
						*/
						if(object_mc.slider_comp)
						{
							object_mc.slider_comp.gotoAndStop(0);
							object_mc.slider_comp.setValueFunc(_information.heroes[_information.currentNameHero].currentDress[propObject_2].currentAlphaTexture);
							object_mc.slider_comp.addEventListener("change_slider", _onChangeSliderAlphaTextureDressupActionFunc, false);
						}
					}
				}
			}
		}
	}
	function _updateAvailableTextureDressupActionFunc(container_mc, currentTexture_num)
	{
		/*
		
		*/
		container_mc.gotoAndStop(0);
		/*
		
		*/
		if(currentTexture_num !== undefined)
		{
			if(currentTexture_num !== null)
			{
				currentTexture_num = Math.round(currentTexture_num);
			}
			else
			{
				currentTexture_num = 0;
			}
		}
		else
		{
			currentTexture_num = 0;
		}
		/*
		
		*/
		var texture_str;
		var texture_mc;
		var l = container_mc.numChildren;
		var i = 0;
		/*
		
		*/
		while(i < l)
		{
			/*
			
			*/
			texture_str = "texture_" + i;
			/*
			
			*/
			if(container_mc[texture_str])
			{
				/*
				
				*/
				texture_mc = container_mc[texture_str];
				texture_mc.gotoAndStop(0);
				texture_mc.name = texture_str;
				/*
				
				*/
				if(i == currentTexture_num)
				{
					texture_mc.alpha = 0.4;
					texture_mc.mouseChildren = false;
					texture_mc.mouseEnabled = false;
					texture_mc.cursor = "default";
					texture_mc.removeEventListener("click", _onClickTextureMcDressupActionFunc, false);
				}
				else
				{
					texture_mc.alpha = 1;
					texture_mc.mouseChildren = false;
					texture_mc.mouseEnabled = true;
					texture_mc.cursor = "pointer";
					texture_mc.addEventListener("click", _onClickTextureMcDressupActionFunc, false);
				}
			}
			/*
			
			*/
			i++;
		}
	}
	function _selectedOptionDressupActionFunc(currentOption_str)
	{
		/*
		
		*/
		var result_bool = false;
		/*
		
		*/
		var temp_arr = currentOption_str.split("_");
		var option_str = String(temp_arr[0]);
		var option_num = parseInt(temp_arr[1]);
		/*
		
		*/
		if(_information.heroes[_information.currentNameHero].currentDress.hasOwnProperty(option_str))
		{
			if(_information.heroes[_information.currentNameHero].currentDress[option_str].currentOption == option_num)
			{
				result_bool = true;
			}
		}
		/*
		
		*/
		return result_bool;
	}
	/*
	
	*/
	function _onMouseOverObjectMcDressupActionFunc(event)
	{
		//var currentTarget_mc = event.currentTarget;
		//createjs.Tween.get(currentTarget_mc).wait(0).to({scaleX:1.06, scaleY:1.06}, (_DELAY / 5) * 1000);
		//new Edapskov_Glow(currentTarget_mc, _DELAY / 5, "#ffffff", 15);
	}
	function _onMouseOutObjectMcDressupActionFunc(event)
	{
		//var currentTarget_mc = event.currentTarget;
		//createjs.Tween.get(currentTarget_mc).wait(0).to({scaleX:1, scaleY:1}, (_DELAY / 3) * 1000);
		//new Edapskov_Glow(currentTarget_mc, _DELAY / 3, "#ffffff", 0);
	}
	function _onClickObjectMcDressupActionFunc(event)
	{
		/*
		
		*/
		var currentTarget_mc = event.currentTarget;
		/*
		
		*/
		//var point_obj = currentTarget_mc.localToLocal(event.localX, event.localY, _stage);
		//_soundManager.addSoundFunc("click_sound", 0, 0, 0, 1, _soundManager.panFromStageFunc(point_obj.x, _CWIDTH));
		/*
		
		*/
		var currentScreen_mc = _main.getChildAt(0);
		/*
		
		*/
		//createjs.Tween.get(currentTarget_mc).wait(0).to({scaleX:1, scaleY:1}, (_DELAY / 3) * 1000);
		//new Edapskov_Glow(currentTarget_mc, _DELAY / 3, "#ffffff", 0);
		/*
		
		*/
		var tempArray = currentTarget_mc.name.split("_");
		var key = String(tempArray[0]);
		var val = parseInt(tempArray[1]);
		/*
		
		*/
		if(_information.heroes[_information.currentNameHero].currentDress[key].currentOption != val)
		{
			/*
			
			*/
			_information.heroes[_information.currentNameHero].currentDress[key].currentOption = val;
			/*
			
			*/
			if(key == "bg")
			{
				for(var propHero_1 in _information.heroes)
				{
					if(_information.heroes.hasOwnProperty(propHero_1))
					{
						_information.heroes[propHero_1].currentDress[key].currentOption = val;
					}
				}
			}
			else
			{
				/*
				
				*/
				if(key == "top")
				{
					if(val > 0)
					{
						if(_information.heroes[_information.currentNameHero].currentDress.hasOwnProperty("dress"))
						{
							_information.heroes[_information.currentNameHero].currentDress.dress.currentOption = 0;
						}
						if(_information.heroes[_information.currentNameHero].currentDress.hasOwnProperty("bottom"))
						{
							if(_information.heroes[_information.currentNameHero].currentDress.bottom.currentOption <= 0)
							{
								_information.heroes[_information.currentNameHero].currentDress.bottom.currentOption = 1;
							}
						}
						if(_information.heroes[_information.currentNameHero].currentDress.hasOwnProperty("swimsuit"))
						{
							_information.heroes[_information.currentNameHero].currentDress.swimsuit.currentOption = 0;
						}
					}
					else
					{
						if(_information.heroes[_information.currentNameHero].currentDress.hasOwnProperty("dress"))
						{
							_information.heroes[_information.currentNameHero].currentDress.dress.currentOption = 1;
						}
						if(_information.heroes[_information.currentNameHero].currentDress.hasOwnProperty("bottom"))
						{
							_information.heroes[_information.currentNameHero].currentDress.bottom.currentOption = 0;
						}
						if(_information.heroes[_information.currentNameHero].currentDress.hasOwnProperty("swimsuit"))
						{
							_information.heroes[_information.currentNameHero].currentDress.swimsuit.currentOption = 0;
						}
					}
				}
				if(key == "bottom")
				{
					if(val > 0)
					{
						if(_information.heroes[_information.currentNameHero].currentDress.hasOwnProperty("dress"))
						{
							_information.heroes[_information.currentNameHero].currentDress.dress.currentOption = 0;
						}
						if(_information.heroes[_information.currentNameHero].currentDress.hasOwnProperty("top"))
						{
							if(_information.heroes[_information.currentNameHero].currentDress.top.currentOption <= 0)
							{
								_information.heroes[_information.currentNameHero].currentDress.top.currentOption = 1;
							}
						}
						if(_information.heroes[_information.currentNameHero].currentDress.hasOwnProperty("swimsuit"))
						{
							_information.heroes[_information.currentNameHero].currentDress.swimsuit.currentOption = 0;
						}
					}
					else
					{
						if(_information.heroes[_information.currentNameHero].currentDress.hasOwnProperty("dress"))
						{
							_information.heroes[_information.currentNameHero].currentDress.dress.currentOption = 1;
						}
						if(_information.heroes[_information.currentNameHero].currentDress.hasOwnProperty("top"))
						{
							_information.heroes[_information.currentNameHero].currentDress.top.currentOption = 0;
						}
						if(_information.heroes[_information.currentNameHero].currentDress.hasOwnProperty("swimsuit"))
						{
							_information.heroes[_information.currentNameHero].currentDress.swimsuit.currentOption = 0;
						}
					}
				}
				if(key == "dress")
				{
					if(val > 0)
					{
						if(_information.heroes[_information.currentNameHero].currentDress.hasOwnProperty("top"))
						{
							_information.heroes[_information.currentNameHero].currentDress.top.currentOption = 0;
						}
						if(_information.heroes[_information.currentNameHero].currentDress.hasOwnProperty("bottom"))
						{
							_information.heroes[_information.currentNameHero].currentDress.bottom.currentOption = 0;
						}
						if(_information.heroes[_information.currentNameHero].currentDress.hasOwnProperty("swimsuit"))
						{
							_information.heroes[_information.currentNameHero].currentDress.swimsuit.currentOption = 0;
						}
					}
					else
					{
						if(_information.heroes[_information.currentNameHero].currentDress.hasOwnProperty("top"))
						{
							_information.heroes[_information.currentNameHero].currentDress.top.currentOption = 1;
						}
						if(_information.heroes[_information.currentNameHero].currentDress.hasOwnProperty("bottom"))
						{
							_information.heroes[_information.currentNameHero].currentDress.bottom.currentOption = 1;
						}
						if(_information.heroes[_information.currentNameHero].currentDress.hasOwnProperty("swimsuit"))
						{
							_information.heroes[_information.currentNameHero].currentDress.swimsuit.currentOption = 0;
						}
					}
				}
				if(key == "swimsuit")
				{
					if(val > 0)
					{
						if(_information.heroes[_information.currentNameHero].currentDress.hasOwnProperty("dress"))
						{
							_information.heroes[_information.currentNameHero].currentDress.dress.currentOption = 0;
						}
						if(_information.heroes[_information.currentNameHero].currentDress.hasOwnProperty("top"))
						{
							_information.heroes[_information.currentNameHero].currentDress.top.currentOption = 0;
						}
						if(_information.heroes[_information.currentNameHero].currentDress.hasOwnProperty("bottom"))
						{
							_information.heroes[_information.currentNameHero].currentDress.bottom.currentOption = 0;
						}
					}
					else
					{
						if(_information.heroes[_information.currentNameHero].currentDress.hasOwnProperty("dress"))
						{
							_information.heroes[_information.currentNameHero].currentDress.dress.currentOption = 0;
						}
						if(_information.heroes[_information.currentNameHero].currentDress.hasOwnProperty("top"))
						{
							_information.heroes[_information.currentNameHero].currentDress.top.currentOption = 1;
						}
						if(_information.heroes[_information.currentNameHero].currentDress.hasOwnProperty("bottom"))
						{
							_information.heroes[_information.currentNameHero].currentDress.bottom.currentOption = 1;
						}
					}
				}
			}
			/*
			
			*/
			_updateHeroesFunc(currentScreen_mc.body_mc);
			/*
			
			*/
			_updateCurrentOptionsDressupActionFunc();
			/*
			
			*/
			if(key != "bg")
			{
				new Edapskov_Flickering(_before, currentScreen_mc.body_mc[_information.currentNameHero][key], ["#ffffff", "#ffffcc"], 10);
			}
			/*
			
			*/
			if(!currentScreen_mc.next_btn.visible)
			{
				currentScreen_mc.next_btn.visible = true;
				currentScreen_mc.next_btn.alpha = 0.01;
				createjs.Tween.get(currentScreen_mc.next_btn).wait(0).to({alpha:1}, (_DELAY / 2) * 1000);
				currentScreen_mc.next_btn.addEventListener("click", _onClickNextBtnAfterLocationFunc, false);
			}
		}
	}
	/*
	
	*/
	function _onClickColorPickerMcDressupActionFunc(event)
	{
		/*
		
		*/
		var currentScreen_mc = _main.getChildAt(0);
		/*
		
		*/
		var colorPicker_mc = event.currentTarget;
		var current_str = colorPicker_mc.name.split("_")[1];
		/*
		
		*/
		var colorPicker_img = colorPicker_mc.getChildAt(0);
		var clone_img = colorPicker_img.clone();
		var bounds_rect = clone_img.getBounds();
		clone_img.cache(bounds_rect.x, bounds_rect.y, bounds_rect.width, bounds_rect.height);
		var bitmapdata = createjs.BitmapData.getBitmapData(clone_img);
		/*
		
		*/
		if(_information.heroes[_information.currentNameHero].currentDress.hasOwnProperty(current_str))
		{
			/*
			
			*/
			_information.heroes[_information.currentNameHero].currentDress[current_str].currentColor = bitmapdata.getPixel(event.localX, event.localY);
			/*
			
			*/
			_updateHeroesFunc(currentScreen_mc.body_mc);
			/*
			
			*/
			if(!currentScreen_mc.next_btn.visible)
			{
				currentScreen_mc.next_btn.visible = true;
				currentScreen_mc.next_btn.alpha = 0.01;
				createjs.Tween.get(currentScreen_mc.next_btn).wait(0).to({alpha:1}, (_DELAY / 2) * 1000);
				currentScreen_mc.next_btn.addEventListener("click", _onClickNextBtnAfterLocationFunc, false);
			}
		}
	}
	/*
	
	*/
	function _onClickTextureMcDressupActionFunc(event)
	{
		/*
		
		*/
		var currentScreen_mc = _main.getChildAt(0);
		/*
		
		*/
		var texture_mc = event.currentTarget;
		var current_str = texture_mc.parent.parent.name.split("_")[1];
		var texture_num = parseInt(texture_mc.name.split("_")[1]);
		/*
		
		*/
		if(_information.heroes[_information.currentNameHero].currentDress.hasOwnProperty(current_str))
		{
			/*
			
			*/
			_information.heroes[_information.currentNameHero].currentDress[current_str].currentTexture = texture_num;
			/*
			
			*/
			_updateHeroesFunc(currentScreen_mc.body_mc);
			/*
			
			*/
			_updateAvailableTextureDressupActionFunc(texture_mc.parent, texture_num);
			/*
			
			*/
			if(!currentScreen_mc.next_btn.visible)
			{
				currentScreen_mc.next_btn.visible = true;
				currentScreen_mc.next_btn.alpha = 0.01;
				createjs.Tween.get(currentScreen_mc.next_btn).wait(0).to({alpha:1}, (_DELAY / 2) * 1000);
				currentScreen_mc.next_btn.addEventListener("click", _onClickNextBtnAfterLocationFunc, false);
			}
		}
	}
	/*
	
	*/
	function _onChangeSliderAlphaTextureDressupActionFunc(event)
	{
		/*
		
		*/
		var currentScreen_mc = _main.getChildAt(0);
		/*
		
		*/
		var currentTarget_mc = event.currentTarget;
		var current_str = currentTarget_mc.parent.name.split("_")[1];
		/*
		
		*/
		var alphaTexture_num = event.numberValue;
		if(alphaTexture_num < 0.1)
		{
			alphaTexture_num = 0.1;
		}
		if(alphaTexture_num > 1)
		{
			alphaTexture_num = 1;
		}
		/*
		
		*/
		if(_information.heroes[_information.currentNameHero].currentDress.hasOwnProperty(current_str))
		{
			/*
			
			*/
			_information.heroes[_information.currentNameHero].currentDress[current_str].currentAlphaTexture = alphaTexture_num;
			/*
			
			*/
			_updateHeroesFunc(currentScreen_mc.body_mc);
		}
	}
	/*
	
	*/
	function _onMouseOverSetMcDressupActionFunc(event)
	{
		/*
		var currentTarget_mc = event.currentTarget;
		createjs.Tween.get(currentTarget_mc).wait(0).to({scaleX:1.1, scaleY:1.1}, (_DELAY / 5) * 1000);
		new Edapskov_Glow(currentTarget_mc, _DELAY / 5, "#ffffff", 5);
		*/
	}
	function _onMouseOutSetMcDressupActionFunc(event)
	{
		/*
		var currentTarget_mc = event.currentTarget;
		createjs.Tween.get(currentTarget_mc).wait(0).to({scaleX:1, scaleY:1}, (_DELAY / 3) * 1000);
		new Edapskov_Glow(currentTarget_mc, _DELAY / 3, "#ffffff", 0);
		*/
	}
	function _onClickSetMcDressupActionFunc(event)
	{
		/*
		
		*/
		var currentTarget_mc = event.currentTarget;
		/*
		
		*/
		var point_obj = currentTarget_mc.localToLocal(event.localX, event.localY, _stage);
		_soundManager.addSoundFunc("click_sound", 0, 0, 0, 1, _soundManager.panFromStageFunc(point_obj.x, _CWIDTH));
		/*
		
		*/
		//createjs.Tween.get(currentTarget_mc).wait(0).to({scaleX:1, scaleY:1}, (_DELAY / 3) * 1000);
		//new Edapskov_Glow(currentTarget_mc, _DELAY / 3, "#ffffff", 0);
		/*
		
		*/
		new Edapskov_Flickering(_before, currentTarget_mc, ["#ffffff", "#ffffcc"], 4);
		/*
		
		*/
		_information.heroes[_information.currentNameHero].currentSet = currentTarget_mc.name;
		/*
		
		*/
		_updatePanelDressupActionFunc();
		//_animationTransitionPanelDressupActionFunc();
	}
	/*
	
	*/
	function _onMouseOverNavigationMcDressupActionFunc(event)
	{
		var currentTarget_mc = event.currentTarget;
		createjs.Tween.get(currentTarget_mc).wait(0).to({scaleX:1.1, scaleY:1.1}, (_DELAY / 5) * 1000);
		//new Edapskov_Glow(currentTarget_mc, _DELAY / 5, "#ffffff", 20);
	}
	function _onMouseOutNavigationMcDressupActionFunc(event)
	{
		var currentTarget_mc = event.currentTarget;
		createjs.Tween.get(currentTarget_mc).wait(0).to({scaleX:1, scaleY:1}, (_DELAY / 3) * 1000);
		//new Edapskov_Glow(currentTarget_mc, _DELAY / 3, "#ffffff", 0);
	}
	function _onClickPrevNavigationMcDressupActionFunc(event)
	{
		/*
		
		*/
		var currentTarget_mc = event.currentTarget;
		/*
		
		*/
		var point_obj = currentTarget_mc.localToLocal(event.localX, event.localY, _stage);
		_soundManager.addSoundFunc("click_sound", 0, 0, 0, 1, _soundManager.panFromStageFunc(point_obj.x, _CWIDTH));
		/*
		
		*/
		_information.heroes[_information.currentNameHero].totalSets[_information.heroes[_information.currentNameHero].currentSet].currentIndex--;
		if(_information.heroes[_information.currentNameHero].totalSets[_information.heroes[_information.currentNameHero].currentSet].currentIndex < 0)
		{
			_information.heroes[_information.currentNameHero].totalSets[_information.heroes[_information.currentNameHero].currentSet].currentIndex = _information.heroes[_information.currentNameHero].totalSets[_information.heroes[_information.currentNameHero].currentSet].frames.length - 1;
		}
		/*
		
		*/
		_updatePanelDressupActionFunc();
		//_animationTransitionPanelDressupActionFunc();
	}
	function _onClickNextNavigationMcDressupActionFunc(event)
	{
		/*
		
		*/
		var currentTarget_mc = event.currentTarget;
		/*
		
		*/
		var point_obj = currentTarget_mc.localToLocal(event.localX, event.localY, _stage);
		_soundManager.addSoundFunc("click_sound", 0, 0, 0, 1, _soundManager.panFromStageFunc(point_obj.x, _CWIDTH));
		/*
		
		*/
		_information.heroes[_information.currentNameHero].totalSets[_information.heroes[_information.currentNameHero].currentSet].currentIndex++;
		if(_information.heroes[_information.currentNameHero].totalSets[_information.heroes[_information.currentNameHero].currentSet].currentIndex >= _information.heroes[_information.currentNameHero].totalSets[_information.heroes[_information.currentNameHero].currentSet].frames.length)
		{
			_information.heroes[_information.currentNameHero].totalSets[_information.heroes[_information.currentNameHero].currentSet].currentIndex = 0;
		}
		/*
		
		*/
		_updatePanelDressupActionFunc();
		//_animationTransitionPanelDressupActionFunc();
	}
	/*
	============================================================
	dressupSecond action
	============================================================
	*/
	function _beginDressupSecondActionFunc()
	{
		/*
		
		*/
		var currentScreen_mc = _main.getChildAt(0);
		var dressupPanel_mc;
		var prev_mc;
		var next_mc;
		/*
		
		*/
		if(currentScreen_mc.body_mc["dressupPanel_" + (currentScreen_mc.body_mc.currentFrame + 1) + "_mc"])
		{
			/*
			
			*/
			dressupPanel_mc = currentScreen_mc.body_mc["dressupPanel_" + (currentScreen_mc.body_mc.currentFrame + 1) + "_mc"];
			dressupPanel_mc.gotoAndStop(0);
			/*
			
			*/
			_updateHeroDressupSecondActionFunc();
			/*
			
			*/
			for(var propOptions in _information.heroes[_information.currentNameHero].currentDress)
			{
				if(_information.heroes[_information.currentNameHero].currentDress.hasOwnProperty(propOptions))
				{
					/*
					
					*/
					if(dressupPanel_mc["prev_" + propOptions])
					{
						prev_mc = dressupPanel_mc["prev_" + propOptions];
						prev_mc.gotoAndStop(0);
						prev_mc.name = String("prev_" + propOptions);
						prev_mc.mouseEnabled = true;
						prev_mc.mouseChildren = false;
						prev_mc.cursor = "pointer";
						prev_mc.addEventListener("mouseover", _onMouseOverNavigationMcDressupSecondActionFunc, false);
						prev_mc.addEventListener("mouseout", _onMouseOutNavigationMcDressupSecondActionFunc, false);
						prev_mc.addEventListener("click", _onClickPrevNavigationMcDressupSecondActionFunc, false);
					}
					/*
					
					*/
					if(dressupPanel_mc["next_" + propOptions])
					{
						next_mc = dressupPanel_mc["next_" + propOptions];
						next_mc.gotoAndStop(0);
						next_mc.name = String("next_" + propOptions);
						next_mc.mouseEnabled = true;
						next_mc.mouseChildren = false;
						next_mc.cursor = "pointer";
						next_mc.addEventListener("mouseover", _onMouseOverNavigationMcDressupSecondActionFunc, false);
						next_mc.addEventListener("mouseout", _onMouseOutNavigationMcDressupSecondActionFunc, false);
						next_mc.addEventListener("click", _onClickNextNavigationMcDressupSecondActionFunc, false);
					}
				}
			}
		}
	}
	/*
	
	*/
	function _onMouseOverNavigationMcDressupSecondActionFunc(event)
	{
		var currentTarget_mc = event.currentTarget;
		createjs.Tween.get(currentTarget_mc).wait(0).to({scaleX:1.1, scaleY:1.1}, (_DELAY / 5) * 1000);
	}
	function _onMouseOutNavigationMcDressupSecondActionFunc(event)
	{
		var currentTarget_mc = event.currentTarget;
		createjs.Tween.get(currentTarget_mc).wait(0).to({scaleX:1, scaleY:1}, (_DELAY / 3) * 1000);
	}
	function _onClickPrevNavigationMcDressupSecondActionFunc(event)
	{
		/*
		
		*/
		var currentTarget_mc = event.currentTarget;
		var current_str = currentTarget_mc.name;
		var currentScreen_mc = _main.getChildAt(0);
		var dressupPanel_mc = currentScreen_mc.body_mc["dressupPanel_" + (currentScreen_mc.body_mc.currentFrame + 1) + "_mc"];
		var hero_mc;
		var option_mc;
		var currentFrame_num;
		var totalFrames_num;
		/*
		
		*/
		var temp_arr = current_str.split("_");
		var option_str = String(temp_arr[1]);
		/*
		
		*/
		if(_information.heroes[_information.currentNameHero].currentDress.hasOwnProperty(option_str))
		{
			if(dressupPanel_mc[_information.currentNameHero])
			{
				/*
				
				*/
				hero_mc = dressupPanel_mc[_information.currentNameHero];
				hero_mc.gotoAndStop(0);
				/*
				
				*/
				if(hero_mc[option_str])
				{
					/*
					
					*/
					option_mc = hero_mc[option_str];
					/*
					
					*/
					currentFrame_num = Number(option_mc.currentFrame);
					totalFrames_num = Number(option_mc.totalFrames);
					/*
					
					*/
					if(currentFrame_num > 0)
					{
						currentFrame_num--;
					}
					else
					{
						currentFrame_num = Number(totalFrames_num - 1);
					}
					/*
					
					*/
					_information.heroes[_information.currentNameHero].currentDress[option_str].currentOption = Number(currentFrame_num + 1);
					/*
					
					*/
					_updateHeroDressupSecondActionFunc();
					/*
					
					*/
					if(!currentScreen_mc.next_btn.visible)
					{
						currentScreen_mc.next_btn.visible = true;
						currentScreen_mc.next_btn.alpha = 0.01;
						createjs.Tween.get(currentScreen_mc.next_btn).wait(0).to({alpha:1}, (_DELAY / 2) * 1000);
						currentScreen_mc.next_btn.addEventListener("click", _onClickNextBtnAfterLocationFunc, false);
					}
				}
			}
		}
	}
	function _onClickNextNavigationMcDressupSecondActionFunc(event)
	{
		/*
		
		*/
		var currentTarget_mc = event.currentTarget;
		var current_str = currentTarget_mc.name;
		var currentScreen_mc = _main.getChildAt(0);
		var dressupPanel_mc = currentScreen_mc.body_mc["dressupPanel_" + (currentScreen_mc.body_mc.currentFrame + 1) + "_mc"];
		var hero_mc;
		var option_mc;
		var currentFrame_num;
		var totalFrames_num;
		/*
		
		*/
		var temp_arr = current_str.split("_");
		var option_str = String(temp_arr[1]);
		/*
		
		*/
		if(_information.heroes[_information.currentNameHero].currentDress.hasOwnProperty(option_str))
		{
			if(dressupPanel_mc[_information.currentNameHero])
			{
				/*
				
				*/
				hero_mc = dressupPanel_mc[_information.currentNameHero];
				hero_mc.gotoAndStop(0);
				/*
				
				*/
				if(hero_mc[option_str])
				{
					/*
					
					*/
					option_mc = hero_mc[option_str];
					/*
					
					*/
					currentFrame_num = Number(option_mc.currentFrame);
					totalFrames_num = Number(option_mc.totalFrames);
					/*
					
					*/
					if(currentFrame_num < Number(totalFrames_num - 1))
					{
						currentFrame_num++;
					}
					else
					{
						currentFrame_num = 0;
					}
					/*
					
					*/
					_information.heroes[_information.currentNameHero].currentDress[option_str].currentOption = Number(currentFrame_num + 1);
					/*
					
					*/
					_updateHeroDressupSecondActionFunc();
					/*
					
					*/
					if(!currentScreen_mc.next_btn.visible)
					{
						currentScreen_mc.next_btn.visible = true;
						currentScreen_mc.next_btn.alpha = 0.01;
						createjs.Tween.get(currentScreen_mc.next_btn).wait(0).to({alpha:1}, (_DELAY / 2) * 1000);
						currentScreen_mc.next_btn.addEventListener("click", _onClickNextBtnAfterLocationFunc, false);
					}
				}
			}
		}
	}
	/*
	
	*/
	function _updateHeroDressupSecondActionFunc()
	{
		/*
		
		*/
		var currentScreen_mc = _main.getChildAt(0);
		var dressupPanel_mc = currentScreen_mc.body_mc["dressupPanel_" + (currentScreen_mc.body_mc.currentFrame + 1) + "_mc"];
		/*
		
		*/
		_updateHeroesFunc(dressupPanel_mc);
	}
	/*
	============================================================
	dressupThird action
	============================================================
	*/
	function _beginDressupThirdActionFunc()
	{
		/*
		
		*/
		var currentScreen_mc = _main.getChildAt(0);
		var dressupPanel_mc;
		var category_mc;
		var heroes_arr = new Array();
		var i;
		var l;
		/*
		
		*/
		for(var propHeroes in _information.heroes)
		{
			if(_information.heroes.hasOwnProperty(propHeroes))
			{
				if(currentScreen_mc.body_mc[propHeroes])
				{
					if(currentScreen_mc.body_mc[propHeroes])
					{
						heroes_arr.unshift(propHeroes);
					}
					else
					{
						heroes_arr.push(propHeroes);
					}
				}
			}
		}
		/*
		
		*/
		if(heroes_arr.length > 0)
		{
			/*
			
			*/
			_information.currentNameHero = heroes_arr[0];
			/*
			
			*/
			if(currentScreen_mc.body_mc["dressupPanel_" + (currentScreen_mc.body_mc.currentFrame + 1) + "_mc"])
			{
				/*
				
				*/
				dressupPanel_mc = currentScreen_mc.body_mc["dressupPanel_" + (currentScreen_mc.body_mc.currentFrame + 1) + "_mc"];
				dressupPanel_mc.gotoAndStop(0);
				/*
				
				*/
				_updateHeroDressupThirdActionFunc();
				/*
				
				*/
				for(var propOptions in _information.heroes[_information.currentNameHero].currentDress)
				{
					if(_information.heroes[_information.currentNameHero].currentDress.hasOwnProperty(propOptions))
					{
						if(dressupPanel_mc[propOptions])
						{
							category_mc = dressupPanel_mc[propOptions];
							category_mc.gotoAndStop(0);
							category_mc.name = String(propOptions);
							category_mc.mouseEnabled = true;
							category_mc.mouseChildren = false;
							category_mc.cursor = "pointer";
							category_mc.addEventListener("mouseover", _onMouseOverNavigationMcDressupThirdActionFunc, false);
							category_mc.addEventListener("mouseout", _onMouseOutNavigationMcDressupThirdActionFunc, false);
							category_mc.addEventListener("click", _onClickNavigationMcDressupThirdActionFunc, false);
						}
					}
				}
			}
		}
		else
		{
			trace("Хде герой!")
		}
	}
	/*
	
	*/
	function _onMouseOverNavigationMcDressupThirdActionFunc(event)
	{
		var currentTarget_mc = event.currentTarget;
		createjs.Tween.get(currentTarget_mc).wait(0).to({scaleX:1.1, scaleY:1.1}, (_DELAY / 5) * 1000);
	}
	function _onMouseOutNavigationMcDressupThirdActionFunc(event)
	{
		var currentTarget_mc = event.currentTarget;
		createjs.Tween.get(currentTarget_mc).wait(0).to({scaleX:1, scaleY:1}, (_DELAY / 3) * 1000);
	}
	function _onClickNavigationMcDressupThirdActionFunc(event)
	{
		/*
		
		*/
		var currentTarget_mc = event.currentTarget;
		var current_str = String(currentTarget_mc.name);
		var currentScreen_mc = _main.getChildAt(0);
		var dressupPanel_mc = currentScreen_mc.body_mc["dressupPanel_" + (currentScreen_mc.body_mc.currentFrame + 1) + "_mc"];
		var hero_mc;
		var option_mc;
		var currentFrame_num;
		var totalFrames_num;
		/*
		
		*/
		if(_information.heroes[_information.currentNameHero].currentDress.hasOwnProperty(current_str))
		{
			if(currentScreen_mc.body_mc[_information.currentNameHero])
			{
				/*
				
				*/
				hero_mc = currentScreen_mc.body_mc[_information.currentNameHero];
				hero_mc.gotoAndStop(0);
				/*
				
				*/
				if(hero_mc[current_str])
				{
					/*
					
					*/
					option_mc = hero_mc[current_str];
					/*
					
					*/
					currentFrame_num = Number(option_mc.currentFrame);
					totalFrames_num = Number(option_mc.totalFrames);
					/*
					
					*/
					if(currentFrame_num < Number(totalFrames_num - 1))
					{
						currentFrame_num++;
					}
					else
					{
						currentFrame_num = 0;
					}
					/*
					
					*/
					_information.heroes[_information.currentNameHero].currentDress[current_str].currentOption = Number(currentFrame_num + 1);
					/*
					
					*/
					_updateHeroDressupThirdActionFunc();
					/*
					
					*/
					if(!currentScreen_mc.next_btn.visible)
					{
						currentScreen_mc.next_btn.visible = true;
						currentScreen_mc.next_btn.alpha = 0.01;
						createjs.Tween.get(currentScreen_mc.next_btn).wait(0).to({alpha:1}, (_DELAY / 2) * 1000);
						currentScreen_mc.next_btn.addEventListener("click", _onClickNextBtnAfterLocationFunc, false);
					}
				}
			}
		}
	}
	/*
	
	*/
	function _updateHeroDressupThirdActionFunc()
	{
		/*
		
		*/
		var currentScreen_mc = _main.getChildAt(0);
		/*
		
		*/
		_updateHeroesFunc(currentScreen_mc.body_mc);
	}
	/*
	============================================================
	end actions
	============================================================
	*/
	function _updateCurrentActionFunc()
	{
		/*
		
		*/
		var subject_mc = _getObjectFunc(_information.locations[_information.currentNameLocation].actions[_information.locations[_information.currentNameLocation].currentNameAction].pathSubject);
		if(subject_mc.totalFrames === 2)
		{
			subject_mc.gotoAndStop(1);
		}
		else
		{
			//subject_mc.play();
			subject_mc.stop();
		}
		/*
		
		*/
		if(_information.locations[_information.currentNameLocation].actions[_information.locations[_information.currentNameLocation].currentNameAction].updatedCursor !== null)
		{
			_cursorUpdateFunc(_information.locations[_information.currentNameLocation].actions[_information.locations[_information.currentNameLocation].currentNameAction].updatedCursor);
		}
		/*
		
		*/
		if(_information.locations[_information.currentNameLocation].actions[_information.locations[_information.currentNameLocation].currentNameAction].addCompletedSound !== null)
		{
			_soundManager.addSoundFunc(_information.locations[_information.currentNameLocation].actions[_information.locations[_information.currentNameLocation].currentNameAction].addCompletedSound, 0, 0, 0, 1, 0);
		}
		if(_information.locations[_information.currentNameLocation].actions[_information.locations[_information.currentNameLocation].currentNameAction].removeCompletedSound !== null)
		{
			_soundManager.removeSoundNameFunc(_information.locations[_information.currentNameLocation].actions[_information.locations[_information.currentNameLocation].currentNameAction].removeCompletedSound);
		}
		/*
		
		*/
		if(_information.locations[_information.currentNameLocation].actions[_information.locations[_information.currentNameLocation].currentNameAction].closeLocFunc !== null)
		{
			_information.locations[_information.currentNameLocation].actions[_information.locations[_information.currentNameLocation].currentNameAction].closeLocFunc();
		}
		/*
		
		*/
		if(_information.locations[_information.currentNameLocation].currentAction >= _information.locations[_information.currentNameLocation].totalActions)
		{
			if(_information.timeout_id != null)
			{
				clearTimeout(_information.timeout_id);
			}
			_information.timeout_id = setTimeout(_endActionsFunc, _information.locations[_information.currentNameLocation].actions[_information.locations[_information.currentNameLocation].currentNameAction].delay * 1000);
		}
		else
		{
			/*
			
			*/
			if(_information.locations[_information.currentNameLocation].actions[_information.locations[_information.currentNameLocation].currentNameAction].transition)
			{
				//_animationTransitionBetweenScenesFunc(_actionFunc, _information.locations[_information.currentNameLocation].actions[_information.locations[_information.currentNameLocation].currentNameAction].delay);
				_animationTransitionBetweenScenesFunc(_questFunc, _information.locations[_information.currentNameLocation].actions[_information.locations[_information.currentNameLocation].currentNameAction].delay, 1, null, true);
			}
			else
			{
				if(_information.timeout_id != null)
				{
					clearTimeout(_information.timeout_id);
				}
				_information.timeout_id = setTimeout(_actionFunc, _information.locations[_information.currentNameLocation].actions[_information.locations[_information.currentNameLocation].currentNameAction].delay * 1000);
			}
			/*
			
			*/
			_information.locations[_information.currentNameLocation].currentAction++;
			_information.locations[_information.currentNameLocation].currentNameAction = "action_" + _information.locations[_information.currentNameLocation].currentAction;
		}
	}
	function _endActionsFunc()
	{
		/*
		
		*/
		if(!_information.locations[_information.currentNameLocation].completed)
		{
			/*
			
			*/
			_information.locations[_information.currentNameLocation].completed = true;
			_information.targetLocation++;
			/*
			исключения
			*/
			_addAdsFunc();
		}
		/*
		
		*/
		_soundManager.removeAllSoundExceptNameFunc(["background_sound", "click_sound"]);
		/*
		
		*/
		if(_skippedLocationsFunc() >= 1)
		{
			_animationTransitionBetweenScenesFunc(_selectFunc, 0, 1, null, true);
		}
		else
		{
			_animationTransitionBetweenScenesFunc(_resultFunc, 0, 1, null, true);
		}
	}
	/*
	
	*/
	function _updateIndicatorFunc(share_num)
	{
		/*
		
		*/
		if(share_num === undefined)
		{
			share_num = 0;
		}
		else
		{
			share_num = Number(share_num);
		}
		/*
		
		*/
		var currentScreen_mc = _main.getChildAt(0);
		currentScreen_mc.gotoAndStop(0);
		currentScreen_mc.body_mc.gotoAndStop(_information.locations[_information.currentNameLocation].actions[_information.locations[_information.currentNameLocation].currentNameAction].frame - 1);
		/*
		
		*/
		if(currentScreen_mc.body_mc.indicator_mc)
		{
			currentScreen_mc.body_mc.indicator_mc.gotoAndStop(0);
			currentScreen_mc.body_mc.indicator_mc.indicator_mc.gotoAndStop(0);
			currentScreen_mc.body_mc.indicator_mc.indicator_mc.indicator_mc.scaleX = share_num;
			/*
			
			*/
			if(currentScreen_mc.body_mc.indicator_mc.indicator_mc.output_numbers_comp)
			{
				currentScreen_mc.body_mc.indicator_mc.indicator_mc.output_numbers_comp.gotoAndStop(0);
				currentScreen_mc.body_mc.indicator_mc.indicator_mc.output_numbers_comp.setValueFunc(Math.floor(share_num * 100));
			}
			else
			{
				if(currentScreen_mc.body_mc.indicator_mc.indicator_mc.txtField_txt)
				{
					currentScreen_mc.body_mc.indicator_mc.indicator_mc.txtField_txt.text = Math.floor(share_num * 100) + "%";
				}
			}
		}
	}
	/*
	
	*/
	function _getObjectFunc(pathObject_str, zeroFrame_bool)
	{
		/*
		
		*/
		if(zeroFrame_bool !== undefined)
		{
			zeroFrame_bool = Boolean(zeroFrame_bool);
		}
		else
		{
			zeroFrame_bool = false;
		}
		/*
		
		*/
		var currentScreen_mc = _main.getChildAt(0);
		currentScreen_mc.gotoAndStop(0);
		currentScreen_mc.body_mc.gotoAndStop(_information.locations[_information.currentNameLocation].actions[_information.locations[_information.currentNameLocation].currentNameAction].frame - 1);
		/*
		
		*/
		var object_mc;
		/*
		
		*/
		if((pathObject_str === null) || (pathObject_str === undefined))
		{
			object_mc = new createjs.MovieClip();
			_main.addChild(object_mc);
		}
		else
		{
			try
			{
				/*
				
				*/
				object_mc = currentScreen_mc.body_mc;
				var temp_arr = new Array();
				temp_arr = pathObject_str.split(".");
				/*
				
				*/
				var i = 0;
				var l = temp_arr.length;
				while(i < l)
				{
					/*
					
					*/
					object_mc = object_mc[temp_arr[i]];
					if(zeroFrame_bool)
					{
						object_mc.gotoAndStop(0); // сцуко, может мешать
					}
					object_mc.name = temp_arr[i];
					/*
					
					*/
					i++;
				}
			}
			catch(event)
			{
				/*
				
				*/
				trace(event, 1);
				/*
				
				*/
				object_mc = new createjs.MovieClip();
				_main.addChild(object_mc);
			}
			finally
			{
				
			}
		}
		/*
		
		*/
		return object_mc;
	}
	/*
	
	*/
	function _onClickNextBtnAfterLocationFunc(event)
	{
		/*
		
		*/
		var currentTarget_mc = event.currentTarget;
		/*
		
		*/
		var point_obj = currentTarget_mc.localToLocal(event.localX, event.localY, _stage);
		_soundManager.addSoundFunc("click_sound", 0, 0, 0, 1, _soundManager.panFromStageFunc(point_obj.x, _CWIDTH));
		/*
		
		*/
		currentTarget_mc.visible = false;
		currentTarget_mc.removeEventListener("click", _onClickNextBtnAfterLocationFunc, false);
		/*
		
		*/
		_updateCurrentActionFunc();
	}
	/*
	
	*/
	function _onClickSkipBtnFunc(event)
	{
		/*
		
		*/
		if(_information.timeout_id != null)
		{
			clearTimeout(_information.timeout_id);
		}
		/*
		
		*/
		var currentTarget_mc = event.currentTarget;
		/*
		
		*/
		var point_obj = currentTarget_mc.localToLocal(event.localX, event.localY, _stage);
		_soundManager.addSoundFunc("click_sound", 0, 0, 0, 1, _soundManager.panFromStageFunc(point_obj.x, _CWIDTH));
		/*
		
		*/
		currentTarget_mc.visible = false;
		currentTarget_mc.removeEventListener("click", _onClickSkipBtnFunc, false);
		/*
		исключения
		*/
		if(_stage.hasEventListener("stagemousedown"))
		{
			_stage.removeEventListener("stagemousedown", _onStageMouseDownMoveActionFunc, false);
		}
		if(_stage.hasEventListener("stagemouseup"))
		{
			_stage.removeEventListener("stagemouseup", _onStageMouseUpMoveActionFunc, false);
		}
		if(_stage.hasEventListener("stagemousemove"))
		{
			_stage.removeEventListener("stagemousemove", _onStageMouseMoveMoveActionFunc, false);
		}
		if(_stage.hasEventListener("stagemousemove"))
		{
			_stage.removeEventListener("stagemousemove", _onStageMouseMoveRubActionFunc, false);
		}
		/*
		
		*/
		_information.locations[_information.currentNameLocation].currentAction = _information.locations[_information.currentNameLocation].actions[_information.locations[_information.currentNameLocation].currentNameAction].skipAndGoto;
		_information.locations[_information.currentNameLocation].currentNameAction = "action_" + _information.locations[_information.currentNameLocation].currentAction;
		/*
		
		*/
		_actionFunc();
	}
	/*
	==============================================================================================================
	update heroes
	==============================================================================================================
	*/
	function _updateHeroesFunc(container_mc)
	{
		/*
		
		*/
		var hero_mc;
		var option_mc;
		var frame_num = Number(container_mc.currentFrame + 1);
		var hero_str;
		/*
		
		*/
		for(var propHero in _information.heroes)
		{
			if(_information.heroes.hasOwnProperty(propHero))
			{
				/*
				
				*/
				hero_str = String(propHero + "_" + frame_num);
				/*
				
				*/
				if(container_mc[propHero] || container_mc[hero_str])
				{
					/*
					
					*/
					hero_mc = container_mc[propHero];
					hero_mc.gotoAndStop(0);
					/*
					
					*/
					if(container_mc[hero_str])
					{
						hero_mc = container_mc[hero_str];
						hero_mc.gotoAndStop(0);
					}
					/*
					
					*/
					for(var propObject in _information.heroes[propHero].currentDress)
					{
						if(_information.heroes[propHero].currentDress.hasOwnProperty(propObject))
						{
							/*
							
							*/
							frame_num = _information.heroes[propHero].currentDress[propObject].currentOption;
							/*
							
							*/
							if(propObject === "bg")
							{
								if(hero_mc.parent)
								{
									if(hero_mc.parent[propObject])
									{
										option_mc = hero_mc.parent[propObject];
										option_mc.gotoAndStop(frame_num - 1);
									}
								}
							}
							else
							{
								if(hero_mc[propObject])
								{
									/*
									
									*/
									option_mc = hero_mc[propObject];
									/*
									
									*/
									if(frame_num <= 0)
									{
										frame_num = option_mc.totalFrames;
									}
									/*
									
									*/
									option_mc.gotoAndStop(frame_num - 1);
									/*
									
									*/
									_updateBodyFunc(option_mc, _information.heroes[propHero].currentDress[propObject].currentColor, _information.heroes[propHero].currentDress[propObject].currentTexture, _information.heroes[propHero].currentDress[propObject].currentAlphaTexture);
									/*
									
									*/
									if(propObject == "hair")
									{
										if(hero_mc.fringe)
										{
											/*
											
											*/
											hero_mc.fringe.gotoAndStop(frame_num - 1);
											/*
											
											*/
											_updateBodyFunc(hero_mc.fringe, _information.heroes[propHero].currentDress[propObject].currentColor, _information.heroes[propHero].currentDress[propObject].currentTexture, _information.heroes[propHero].currentDress[propObject].currentAlphaTexture);
										}
									}
									/*
									
									*/
									if(propObject == "top")
									{
										if(hero_mc.topSecond)
										{
											/*
											
											*/
											hero_mc.topSecond.gotoAndStop(frame_num - 1);
											/*
											
											*/
											_updateBodyFunc(hero_mc.topSecond, _information.heroes[propHero].currentDress[propObject].currentColor, _information.heroes[propHero].currentDress[propObject].currentTexture, _information.heroes[propHero].currentDress[propObject].currentAlphaTexture);
										}
									}
									/*
									
									*/
									if(propObject == "dress")
									{
										if(hero_mc.dressSecond)
										{
											/*
											
											*/
											hero_mc.dressSecond.gotoAndStop(frame_num - 1);
											/*
											
											*/
											_updateBodyFunc(hero_mc.dressSecond, _information.heroes[propHero].currentDress[propObject].currentColor, _information.heroes[propHero].currentDress[propObject].currentTexture, _information.heroes[propHero].currentDress[propObject].currentAlphaTexture);
										}
									}
									/*
									
									*/
									if(propObject == "headdress")
									{
										if(hero_mc.headdressSecond)
										{
											/*
											
											*/
											hero_mc.headdressSecond.gotoAndStop(frame_num - 1);
											/*
											
											*/
											_updateBodyFunc(hero_mc.headdressSecond, _information.heroes[propHero].currentDress[propObject].currentColor, _information.heroes[propHero].currentDress[propObject].currentTexture, _information.heroes[propHero].currentDress[propObject].currentAlphaTexture);
										}
									}
								}
							}
						}
					}
				}
			}
		}
	}
	function _updateBodyFunc(object_mc, color_num, texture_num, alphaTexture_num)
	{
		/*
		
		*/
		if(color_num !== undefined)
		{
			if(color_num !== null)
			{
				color_num = Number(color_num);
			}
		}
		else
		{
			color_num = null;
		}
		if(texture_num !== undefined)
		{
			if(texture_num !== null)
			{
				texture_num = Math.round(texture_num);
			}
		}
		else
		{
			texture_num = null;
		}
		if(alphaTexture_num !== undefined)
		{
			if(alphaTexture_num !== null)
			{
				alphaTexture_num = Number(alphaTexture_num);
			}
		}
		else
		{
			alphaTexture_num = null;
		}
		/*
		
		*/
		var container_mc;
		var body_mc;
		var texture_mc;
		var totalFrames_num;
		/*
		
		*/
		if(object_mc["body_" + (object_mc.currentFrame + 1) + "_mc"])
		{
			/*
			
			*/
			container_mc = object_mc["body_" + (object_mc.currentFrame + 1) + "_mc"];
			container_mc.gotoAndStop(0);
			/*
			
			*/
			if(color_num != null)
			{
				if(container_mc["body_mc"])
				{
					/*
					
					*/
					body_mc = container_mc["body_mc"];
					body_mc.gotoAndStop(0);
					/*
					
					*/
					_colouringFunc(body_mc, color_num);
				}
			}
			/*
			
			*/
			if(container_mc["texture_mc"])
			{
				/*
				
				*/
				texture_mc = container_mc["texture_mc"];
				texture_mc.gotoAndStop(0);
				totalFrames_num = Number(texture_mc.totalFrames);
				/*
				
				*/
				if(texture_num != null)
				{
					if((texture_num > 0) && (texture_num <= totalFrames_num))
					{
						texture_mc.gotoAndStop(Number(texture_num - 1));
					}
					else
					{
						texture_mc.gotoAndStop(Number(totalFrames_num - 1));
					}
				}
				else
				{
					texture_mc.gotoAndStop(Number(totalFrames_num - 1));
				}
				/*
				
				*/
				if(alphaTexture_num != null)
				{
					if(alphaTexture_num < 0.1)
					{
						texture_mc.alpha = 0.1;
					}
					else
					{
						texture_mc.alpha = alphaTexture_num;
					}
				}
				else
				{
					texture_mc.alpha = 1;
				}
			}
		}
	}
	/*
	
	*/
	function _colouringFunc(displayObject, color_num)
	{
		var bounds_rect = displayObject.getBounds();
		var redColor_num = (color_num >>> 16) & 0xff;
		var greenColor_num = (color_num >>>  8) & 0xff;
		var blueColor_num = color_num & 0xff;
		displayObject.filters = [new createjs.ColorFilter(0, 0, 0, 1, redColor_num, greenColor_num, blueColor_num, 0)];
		if(displayObject.bitmapCache)
		{
			displayObject.updateCache();
		}
		else
		{
			displayObject.cache(bounds_rect.x, bounds_rect.y, bounds_rect.width, bounds_rect.height);
		}
	}
	/*
	==============================================================================================================
	Окно редиректа
	==============================================================================================================
	*/
	function _redirectFunc()
	{
		/*
		
		*/
		if(_information.timeout_id != null)
		{
			clearTimeout(_information.timeout_id);
		}
		/*
		
		*/
		_clearContainerFunc(_before);
		/*
		
		*/
		var currentScreen_mc = new lib.RedirectScreen();
		_before.addChild(currentScreen_mc);
		currentScreen_mc.gotoAndStop(0);
		currentScreen_mc.body_mc.gotoAndStop(0);
		/*
		
		*/
		if(currentScreen_mc.body_mc.playRedirect_btn)
		{
			currentScreen_mc.body_mc.playRedirect_btn.addEventListener("click", _onClickPlayRedirectBtnFunc, false);
		}
		/*
		
		*/
		if(currentScreen_mc.body_mc.cancelRedirect_btn)
		{
			currentScreen_mc.body_mc.cancelRedirect_btn.addEventListener("click", _onClickCancelRedirectBtnFunc, false);
		}
	}
	/*
	
	*/
	function _onClickPlayRedirectBtnFunc(event)
	{
		/*
		
		*/
		var currentTarget_btn = event.currentTarget;
		/*
		
		*/
		var point_obj = currentTarget_btn.localToLocal(event.localX, event.localY, _stage);
		_soundManager.addSoundFunc("click_sound", 0, 0, 0, 0.3, _soundManager.panFromStageFunc(point_obj.x, _CWIDTH));
		/*
		
		*/
		currentTarget_btn.removeEventListener("click", _onClickPlayRedirectBtnFunc, false);
		/*
		
		*/
		window.open("https://dressupwho.net/html5/summer-beach-girl" + "?utm_source=" + _getLocationFunc() + "&utm_medium=game_referral|game&utm_content=simple&utm_campaign=" + _TITLE, "_self");
	}
	/*
	
	*/
	function _onClickCancelRedirectBtnFunc(event)
	{
		/*
		
		*/
		var currentTarget_btn = event.currentTarget;
		/*
		
		*/
		var point_obj = currentTarget_btn.localToLocal(event.localX, event.localY, _stage);
		_soundManager.addSoundFunc("click_sound", 0, 0, 0, 0.3, _soundManager.panFromStageFunc(point_obj.x, _CWIDTH));
		/*
		
		*/
		currentTarget_btn.removeEventListener("click", _onClickCancelRedirectBtnFunc, false);
		/*
		
		*/
		_clearContainerFunc(_before);
	}
	/*
	==============================================================================================================
	Окно результатов
	==============================================================================================================
	*/
	function _resultFunc()
	{
		/*
		
		*/
		_soundManager.addSoundFunc("completed_sound", 0, 0, 0, 0.1, 0);
		/*
		
		*/
		_clearContainerFunc(_main);
		_clearContainerFunc(_before);
		/*
		
		*/
		var currentScreen_mc = new lib.ResultScreen();
		_main.addChild(currentScreen_mc);
		currentScreen_mc.gotoAndStop(0);
		currentScreen_mc.addEventListener("click", _onClickResultScreenFunc, false);
		/*
		
		*/
		currentScreen_mc.logo_btn.addEventListener("click", _onClickLogoBtnFunc, false);
		/*
		
		*/
		currentScreen_mc.photoContainer_mc.gotoAndStop(0);
		currentScreen_mc.photoContainer_mc.logo_btn.visible = false;
		/*
		
		*/
		if(currentScreen_mc.facebook_btn)
		{
			currentScreen_mc.facebook_btn.addEventListener("click", _onClickFacebookBtnFunc, false);
		}
		/*
		
		*/
		if(currentScreen_mc.moreGames_btn)
		{
			currentScreen_mc.moreGames_btn.addEventListener("click", _onClickMoreGamesBtnFunc, false);
		}
		/*
		
		*/
		if(currentScreen_mc.banner_1_mc)
		{
			currentScreen_mc.banner_1_mc.visible = true;
			currentScreen_mc.banner_1_mc.cursor = "pointer";
			currentScreen_mc.banner_1_mc.addEventListener("click", _onClickBannerMcFunc_1, false);
		}
		if(currentScreen_mc.banner_2_mc)
		{
			currentScreen_mc.banner_2_mc.visible = true;
			currentScreen_mc.banner_2_mc.cursor = "pointer";
			currentScreen_mc.banner_2_mc.addEventListener("click", _onClickBannerMcFunc_2, false);
		}
		/*
		
		*/
		if(currentScreen_mc.freeGames_mc)
		{
			currentScreen_mc.freeGames_mc.cursor = "pointer";
			currentScreen_mc.freeGames_mc.addEventListener("click", _onClickFreeGamesMcFunc, false);
		}
		/*
		
		*/
		if(currentScreen_mc.photo_btn)
		{
			currentScreen_mc.photo_btn.addEventListener("click", _onClickPhotoBtnFunc, false);
		}
		/*
		
		*/
		currentScreen_mc.playAgain_btn.addEventListener("click", _onClickPlayBtnFunc, false);
		/*
		
		*/
		//_updateHeroesFunc(currentScreen_mc.photoContainer_mc);
		/*
		исключения
		*/
		currentScreen_mc.photoContainer_mc.heroes_mc.gotoAndStop(0);
		_updateHeroesFunc(currentScreen_mc.photoContainer_mc.heroes_mc);
		/*
		
		*/
		if(currentScreen_mc.prev_mc)
		{
			currentScreen_mc.prev_mc.mouseEnabled = true;
			currentScreen_mc.prev_mc.mouseChildren = false;
			currentScreen_mc.prev_mc.cursor = "pointer";
			currentScreen_mc.prev_mc.addEventListener("mouseover", _onMouseOverNavigationMcBackgroundsFunc, false);
			currentScreen_mc.prev_mc.addEventListener("mouseout", _onMouseOutNavigationMcBackgroundsFunc, false);
			currentScreen_mc.prev_mc.addEventListener("click", _onClickPrevNavigationMcBackgroundsFunc, false);
		}
		if(currentScreen_mc.next_mc)
		{
			currentScreen_mc.next_mc.mouseEnabled = true;
			currentScreen_mc.next_mc.mouseChildren = false;
			currentScreen_mc.next_mc.cursor = "pointer";
			currentScreen_mc.next_mc.addEventListener("mouseover", _onMouseOverNavigationMcBackgroundsFunc, false);
			currentScreen_mc.next_mc.addEventListener("mouseout", _onMouseOutNavigationMcBackgroundsFunc, false);
			currentScreen_mc.next_mc.addEventListener("click", _onClickNextNavigationMcBackgroundsFunc, false);
		}
		/*
		редирект
		*/
		/*
		if(_information.timeout_id != null)
		{
			clearTimeout(_information.timeout_id);
		}
		_information.timeout_id = setTimeout(_redirectFunc, 8000);
		*/
		/*
		
		*/
		/*
		if(currentScreen_mc.photoContainer_mc.bg)
		{
			currentScreen_mc.photoContainer_mc.bg.cache(-(_BGWIDTH - _CWIDTH) / 2, 0, _BGWIDTH, _CHEIGHT);
		}
		*/
		/*
		
		*/
		_soundManager.updateSoundMcFunc(currentScreen_mc);
		/*
		
		*/
		_fullScreenCanvasManager.updateFullScreenMcFunc(currentScreen_mc);
		/*
		
		*/
		_cursorUpdateFunc();
	}
	/*
	исключения
	*/
	function _onMouseOverNavigationMcBackgroundsFunc(event)
	{
		var currentTarget_mc = event.currentTarget;
		createjs.Tween.get(currentTarget_mc).wait(0).to({scaleX:1.1, scaleY:1.1}, (_DELAY / 5) * 1000);
	}
	function _onMouseOutNavigationMcBackgroundsFunc(event)
	{
		var currentTarget_mc = event.currentTarget;
		createjs.Tween.get(currentTarget_mc).wait(0).to({scaleX:1, scaleY:1}, (_DELAY / 3) * 1000);
	}
	function _onClickPrevNavigationMcBackgroundsFunc(event)
	{
		/*
		
		*/
		var point_obj = event.currentTarget.localToLocal(event.localX, event.localY, _stage);
		_soundManager.addSoundFunc("click_sound", 0, 0, 0, 1, _soundManager.panFromStageFunc(point_obj.x, _CWIDTH));
		/*
		
		*/
		var currentScreen_mc = _main.getChildAt(0);
		var totalFrames_num = currentScreen_mc.photoContainer_mc.heroes_mc.totalFrames;
		var currentFrame_num = currentScreen_mc.photoContainer_mc.heroes_mc.currentFrame + 1;
		currentFrame_num--;
		if(currentFrame_num <= 0)
		{
			currentFrame_num = totalFrames_num;
		}
		/*
		
		*/
		currentScreen_mc.photoContainer_mc.heroes_mc.gotoAndStop(Number(currentFrame_num - 1));
		/*
		
		*/
		_updateHeroesFunc(currentScreen_mc.photoContainer_mc.heroes_mc);
	}
	function _onClickNextNavigationMcBackgroundsFunc(event)
	{
		/*
		
		*/
		var point_obj = event.currentTarget.localToLocal(event.localX, event.localY, _stage);
		_soundManager.addSoundFunc("click_sound", 0, 0, 0, 1, _soundManager.panFromStageFunc(point_obj.x, _CWIDTH));
		/*
		
		*/
		var currentScreen_mc = _main.getChildAt(0);
		var totalFrames_num = currentScreen_mc.photoContainer_mc.heroes_mc.totalFrames;
		var currentFrame_num = currentScreen_mc.photoContainer_mc.heroes_mc.currentFrame + 1;
		currentFrame_num++;
		if(currentFrame_num > totalFrames_num)
		{
			currentFrame_num = 1;
		}
		/*
		
		*/
		currentScreen_mc.photoContainer_mc.heroes_mc.gotoAndStop(Number(currentFrame_num - 1));
		/*
		
		*/
		_updateHeroesFunc(currentScreen_mc.photoContainer_mc.heroes_mc);
	}
	/*
	
	*/
	function _skippedLocationsFunc()
	{
		/*
		
		*/
		var skipped_num = 0;
		/*
		
		*/
		for(var prop in _information.locations)
		{
			if(_information.locations.hasOwnProperty(prop))
			{
				if(!_information.locations[prop].completed)
				{
					skipped_num++;
				}
			}
		}
		/*
		
		*/
		return skipped_num;
	}
	/*
	
	*/
	function _onClickResultScreenFunc(event)
	{
		//trace(event);
	}
	/*
	
	*/
	function _onClickPhotoBtnFunc(event)
	{
		/*
		
		*/
		_soundManager.addSoundFunc("photo_sound", 0, 0, 0, 1, 0, true);
		/*
		
		*/
		var currentScreen_mc = _main.getChildAt(0);
		/*
		
		*/
		_updateVisibleDisplayObjectFunc(currentScreen_mc, false);
		currentScreen_mc.photoContainer_mc.visible = true;
		currentScreen_mc.photoContainer_mc.logo_btn.visible = true;
		/*
		
		*/
		_stage.update();
		/*
		
		*/
		try
		{
			var canvas = document.getElementById("canvas");
			canvas.toBlobHD(function(blob){saveAs(blob, _TITLE + ".png");}, "image/png");
		}
		catch(event)
		{
			/*
			
			*/
			trace(event, 1);
			/*
			
			*/
			_createBackupPhotoFunc();
		}
		finally
		{
			currentScreen_mc.photoContainer_mc.logo_btn.visible = false;
			_updateVisibleDisplayObjectFunc(currentScreen_mc);
		}
	}
	function _createBackupPhotoFunc()
	{
		/*
		
		*/
		var photoContainer_mc = new lib.photoContainer_mc();
		photoContainer_mc.y = _CHEIGHT;
		photoContainer_mc.mouseEnabled = false;
		photoContainer_mc.mouseChildren = false;
		photoContainer_mc.gotoAndStop(0);
		/*
		
		*/
		//_updateHeroesFunc(photoContainer_mc);
		/*
		исключения
		*/
		var currentScreen_mc = _main.getChildAt(0);
		photoContainer_mc.heroes_mc.gotoAndStop(currentScreen_mc.photoContainer_mc.heroes_mc.currentFrame);
		_updateHeroesFunc(photoContainer_mc.heroes_mc);
		/*
		
		*/
		photoContainer_mc.cache(0, 0, _CWIDTH, _CHEIGHT, 0.8);
		new Edapskov_ScreenshotWindow(_TITLE, photoContainer_mc.getCacheDataURL());
		delete photoContainer_mc;
	}
	function _updateVisibleDisplayObjectFunc(container_mc, visible_bool)
	{
		/*
		
		*/
		if(visible_bool === undefined)
		{
			visible_bool = true;
		}
		else
		{
			visible_bool = Number(visible_bool);
		}
		/*
		
		*/
		var displayObject;
		var totalDisplayObjects_uint;
		var i = 0;
		/*
		
		*/
		if(container_mc.numChildren)
		{
			/*
			
			*/
			totalDisplayObjects_uint = container_mc.numChildren;
			/*
			
			*/
			while(i < totalDisplayObjects_uint)
			{
				/*
				
				*/
				displayObject = container_mc.getChildAt(i);
				if(displayObject.hasOwnProperty("visible"))
				{
					displayObject.visible = visible_bool;
				}
				/*
				
				*/
				i++;
			}
		}
	}
	/*
	==============================================================================================================
	Вспомогательные окна
	==============================================================================================================
	*/
	/*
	Credits
	*/
	function _copyrightFunc()
	{
		/*
		
		*/
		_clearContainerFunc(_before);
		/*
		
		*/
		var currentScreen_mc = new lib.CopyrightScreen();
		_before.addChild(currentScreen_mc);
		currentScreen_mc.gotoAndStop(0);
		/*
		
		*/
		currentScreen_mc.cursor = "pointer";
		currentScreen_mc.addEventListener("click", _onClickCopyrightScreenFunc, false);
	}
	function _onClickCopyrightScreenFunc(event)
	{
		/*
		
		*/
		var point_obj = event.currentTarget.localToLocal(event.localX, event.localY, _stage);
		_soundManager.addSoundFunc("click_sound", 0, 0, 0, 1, _soundManager.panFromStageFunc(point_obj.x, _CWIDTH));
		/*
		
		*/
		event.currentTarget.removeEventListener("click", _onClickCopyrightScreenFunc, false);
		/*
		
		*/
		_clearContainerFunc(_before);
	}
	/*
	простое окно с кнопкой закрытия
	*/
	function _simpleScreenFunc(nameScreen_str)
	{
		/*
		
		*/
		if(nameScreen_str !== undefined)
		{
			/*
			
			*/
			nameScreen_str = String(nameScreen_str);
			/*
			
			*/
			_clearContainerFunc(_before);
			/*
			
			*/
			var currentScreen_mc = new lib[nameScreen_str]();
			_before.addChild(currentScreen_mc);
			currentScreen_mc.gotoAndStop(0);
			/*
			
			*/
			if(currentScreen_mc.screen_mc)
			{
				currentScreen_mc.screen_mc.addEventListener("click", _onClickScreenMcSimpleScreenFunc, false);
			}
			/*
			
			*/
			currentScreen_mc.remove_btn.addEventListener("click", _onClickRemoveBtnSimpleScreenFunc, false);
		}
	}
	function _onClickScreenMcSimpleScreenFunc(event)
	{
		
	}
	function _onClickRemoveBtnSimpleScreenFunc(event)
	{
		/*
		
		*/
		var point_obj = event.currentTarget.localToLocal(event.localX, event.localY, _stage);
		_soundManager.addSoundFunc("click_sound", 0, 0, 0, 1, _soundManager.panFromStageFunc(point_obj.x, _CWIDTH));
		/*
		
		*/
		event.currentTarget.removeEventListener("click", _onClickRemoveBtnSimpleScreenFunc, false);
		/*
		
		*/
		_animationTransitionBetweenScenesFunc(_removeSimpleScreenFunc, 0, _DELAY / 2);
	}
	function _removeSimpleScreenFunc()
	{
		_clearContainerFunc(_before);
	}
	/*
	==============================================================================================================
	Вспомогательные методы
	==============================================================================================================
	*/
	/*
	функция для перехода между локациями
	*/
	function _animationTransitionBetweenScenesFunc(func, delayTime_num, time_num, arrayParams_arr, animated_bool)
	{
		/*
		
		*/
		if(delayTime_num === undefined)
		{
			delayTime_num = 0;
		}
		else
		{
			delayTime_num = Number(delayTime_num);
		}
		if(time_num === undefined)
		{
			time_num = 1;
		}
		else
		{
			time_num = Number(time_num);
		}
		if(arrayParams_arr === undefined)
		{
			arrayParams_arr = null;
		}
		if(animated_bool === undefined)
		{
			animated_bool = false;
		}
		else
		{
			animated_bool = Boolean(animated_bool);
		}
		/*
		проверяем переменные
		*/
		if(time_num < 0)
		{
			time_num = 0;
		}
		/*
		блокировать
		*/
		_main.mouseEnabled = false;
		_main.mouseChildren = false;
		_before.mouseEnabled = false;
		_before.mouseChildren = false;
		/*
		
		*/
		if(animated_bool)
		{
			_onStartAnimatedTransitionBetweenScenesFunc(func, delayTime_num, time_num, arrayParams_arr);
		}
		else
		{
			_onStartNonAnimatedTransitionBetweenScenesFunc(func, delayTime_num, time_num, arrayParams_arr);
		}
	}
	function _onStartNonAnimatedTransitionBetweenScenesFunc(func, delayTime_num, time_num, arrayParams_arr)
	{
		createjs.Tween.get(_shadowScreen.getChildByName("shadowContainer")).wait(delayTime_num * 1000).to({alpha:1}, time_num * 1000).call(_onMidNonAnimatedTransitionBetweenScenesFunc, [func, time_num, arrayParams_arr], this);
	}
	function _onMidNonAnimatedTransitionBetweenScenesFunc(func, time_num, arrayParams_arr)
	{
		/*
		обновление
		*/
		_updateSceneTransitionBetweenScenesFunc(func, arrayParams_arr);
		/*
		появление
		*/
		createjs.Tween.get(_shadowScreen.getChildByName("shadowContainer")).wait(0).to({alpha:0.01}, time_num * 1000).call(_onFinishTransitionBetweenScenesFunc);
	}
	function _onStartAnimatedTransitionBetweenScenesFunc(func, delayTime_num, time_num, arrayParams_arr)
	{
		/*
		
		*/
		var curtainContainer = _shadowScreen.getChildByName("curtainContainer");
		var curtainScreen_mc;
		var animation_mc;
		/*
		
		*/
		if(lib.hasOwnProperty("CurtainScreen"))
		{
			/*
			
			*/
			curtainScreen_mc = new lib.CurtainScreen();
			curtainScreen_mc.gotoAndStop(0);
			/*
			
			*/
			if(curtainScreen_mc.body_mc)
			{
				/*
				
				*/
				curtainContainer.addChild(curtainScreen_mc);
				/*
				
				*/
				animation_mc = curtainScreen_mc.body_mc;
				animation_mc.gotoAndStop(0);
				/*
				
				*/
				var timelineControl = new Edapskov_TimelineControl(animation_mc);
				timelineControl.gotoFunc("mid", 1, delayTime_num, [animation_mc, func, arrayParams_arr]);
				timelineControl.addEventListener("completed_timeline", _onMidAnimatedTransitionBetweenScenesFunc, false);
			}
			else
			{
				_onStartNonAnimatedTransitionBetweenScenesFunc(func, delayTime_num, time_num, arrayParams_arr);
			}
		}
		else
		{
			_onStartNonAnimatedTransitionBetweenScenesFunc(func, delayTime_num, time_num, arrayParams_arr);
		}
	}
	function _onMidAnimatedTransitionBetweenScenesFunc(event)
	{
		/*
		
		*/
		var animation_mc = event.params[0];
		var func = event.params[1];
		var arrayParams_arr = event.params[2];
		/*
		обновление
		*/
		_updateSceneTransitionBetweenScenesFunc(func, arrayParams_arr);
		/*
		появление
		*/
		var timelineControl = new Edapskov_TimelineControl(animation_mc);
		timelineControl.gotoFunc("end", 1, 0);
		timelineControl.addEventListener("completed_timeline", _onFinishTransitionBetweenScenesFunc, false);
	}
	function _onFinishTransitionBetweenScenesFunc(event)
	{
		/*
		
		*/
		_clearContainerFunc(_shadowScreen.getChildByName("curtainContainer"));
		/*
		разблокировать
		*/
		_main.mouseEnabled = true;
		_main.mouseChildren = true;
		_before.mouseEnabled = true;
		_before.mouseChildren = true;
	}
	function _updateSceneTransitionBetweenScenesFunc(func, arrayParams_arr)
	{
		/*
		
		*/
		if(arrayParams_arr === undefined)
		{
			arrayParams_arr = null;
		}
		/*
		запуск функции
		*/
		if(arrayParams_arr !== null)
		{
			func(arrayParams_arr);
		}
		else
		{
			func();
		}
	}
	/*
	
	*/
	function _onTickFunc(event)
	{
		/*
		
		*/
		if(_debugger.getVisibleFunc())
		{
			_debugger.updateFpsFunc(Math.round(event.currentTarget.getMeasuredFPS()) + " / " + event.currentTarget.framerate);
		}
		/*
		
		*/
		_stage.update();
	}
	/*
	управление курсором
	*/
	function _cursorUpdateFunc(nameCursor_str)
	{
		/*
		
		*/
		if(nameCursor_str === undefined)
		{
			nameCursor_str = "default";
		}
		/*
		
		*/
		if(_cursor.getChildByName("body_mc"))
		{
			var bodyCursor_mc = _cursor.getChildByName("body_mc");
			bodyCursor_mc.gotoAndStop(nameCursor_str);
		}
		/*
		
		*/
		if(nameCursor_str === "default")
		{
			_mouseShowFunc();
			_cursor.visible = false;
		}
		else
		{
			_mouseHideFunc();
			_cursor.visible = true;
		}
	}
	function _cursorAnimationFunc()
	{
		var animation_mc;
		if(_cursor["body_mc"])
		{
			animation_mc = _cursor["body_mc"];
			animation_mc.play();
		}
	}
	function _mouseHideFunc()
	{
		if(!createjs.Touch.isSupported())
		{
			_stage.enableMouseOver(0);
			_stage.canvas.style.cursor = "none";
		}
	}
	function _mouseShowFunc()
	{
		if(!createjs.Touch.isSupported())
		{
			_stage.enableMouseOver(10);
			_stage.canvas.style.cursor = "auto";
		}
	}
	function _updateCoordinatesCursorFunc(newX_num, newY_num)
	{
		var point_obj = _stage.localToLocal(newX_num, newY_num, _cursor.parent); 
		_cursor.x = point_obj.x;
		_cursor.y = point_obj.y;
	}
	function _onStageMouseDownFunc(event)
	{
		_cursor.alpha = 1;
		_updateCoordinatesCursorFunc(event.localX, event.localY);
	}
	function _onStageMouseMoveFunc(event)
	{
		_updateCoordinatesCursorFunc(event.localX, event.localY);
	}
	function _onStageMouseUpFunc(event)
	{
		_cursor.alpha = 0.01;
	}
	/*
	
	*/
	function _clearContainerFunc(container)
	{
		container.removeAllChildren();
	}
	/*
	обработка событий клавиатуры
	*/
	function _onKeyPressFunc(event)
	{
		/*
		
		*/
		var keyCode_num = event.which || event.keyCode;
		var keyChar_str = String.fromCharCode(keyCode_num);
		var shiftKey_bool = event.shiftKey;
		var ctrlKey_bool = event.ctrlKey;
		var altKey_bool = event.altKey;
		/*
		
		*/
		if(keyCode_num === 68)
		{
			if(ctrlKey_bool && altKey_bool)
			{
				_debugger.toggleVisibleFunc();
			}
		}
		else if(keyCode_num === 65)
		{
			if(ctrlKey_bool && altKey_bool)
			{
				alert("edapskov");
			}
		}
	}
	/*
	
	*/
	function _stopAppFunc()
	{
		/*
		
		*/
		//createjs.Ticker.removeEventListener("tick", _onTickFunc, false);
		/*
		
		*/
		_soundManager.setInvisibleFunc(true);
		/*
		
		*/
		trace("Application is stopped!", 1)
	}
	function _playAppFunc()
	{
		/*
		
		*/
		//createjs.Ticker.addEventListener("tick", _onTickFunc, false);
		/*
		
		*/
		_soundManager.setInvisibleFunc(false);
		/*
		
		*/
		trace("Application is running!", 1)
	}
	/*
	
	*/
	function _addAdsFunc()
	{
		/* gdsdk.showBanner();
		trace("Shown Ads"); */
	}
	/*
	функции-исключения
	*/
	function _openLocFunc_1_1()
	{
		_information.currentNameHero = "hero_1";
		_information.heroes[_information.currentNameHero].currentSet = "set_1";
	}
	function _openLocFunc_1_2()
	{
		_information.currentNameHero = "hero_1";
		_information.heroes[_information.currentNameHero].currentSet = "set_6";
	}
	function _openLocFunc_1_3()
	{
		_information.currentNameHero = "hero_2";
		_information.heroes[_information.currentNameHero].currentSet = "set_1";
	}
	function _openLocFunc_1_4()
	{
		_information.currentNameHero = "hero_2";
		_information.heroes[_information.currentNameHero].currentSet = "set_6";
	}
	/*
	
	*/
	function _getLocationFunc()
	{
		var url_str = (window.location != window.parent.location) ? document.referrer: document.location.host;
		return url_str;
	}
	function _getSimplifiedTitleGameFunc()
	{
		var title_str = _TITLE.replace(/[^a-z0-9\-_ ]/gi, "");
		return title_str.toLowerCase().replace(/ +/g, "-");
	}
	function _onClickPreloaderBtnFunc(event)
	{
		window.open(_LINKTOGAME, "_blank");
	}
	function _onClickLogoBtnFunc(event)
	{
		window.open(_LINKTOGAME, "_blank");
	}
	function _onClickBannerMcFunc_1(event)
	{
		window.open("http://localhost", "_blank");
	}
	function _onClickBannerMcFunc_2(event)
	{
		window.open("http://localhost", "_blank");
	}
	function _onClickFreeGamesMcFunc(event)
	{
		window.open(_LINKTOGAME, "_blank");
	}
	function _onClickFacebookBtnFunc(event)
	{
		facebookShareFunc("feed", _LINKTOFACEBOOK);
	}
	function _onClickMoreGamesBtnFunc(event)
	{
		window.open(_LINKTOGAME, "_blank");
	}
	/*
	ссылочка на разработчиков
	*/
	function _onClickCopyrightMenuItemFunc(event)
	{
		window.open("http://localhost", '_blank');
	}
}