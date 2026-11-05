/*
* @author edapskov
* @copyright 2019 edapskov v 3.3
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
	var _TITLE = "Princesses Dazzling Goddesses";
	var _LINKTOGAME = "https://dl-girls.com";
	var _DELAY = 1;
	var _LANGUAGE = "en";
	/*
	публичные переменные
	*/
	this.copyright = "© DL-Studio, v 3.3";
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
		interval_id:null,
		dragShape:null,
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
						removeCompletedSound:null,
						totalTime:180,
						currentTime:0
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
						removeCompletedSound:null,
						totalTime:180,
						currentTime:0
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
						removeCompletedSound:null,
						totalTime:180,
						currentTime:0
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
						removeCompletedSound:null,
						totalTime:180,
						currentTime:0
					}
				}
			},
			location_5:{
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
						openLocFunc:_openLocFunc_1_5,
						closeLocFunc:null,
						addBackgroundSound:null,
						removeBackgroundSound:null,
						addCompletedSound:null,
						removeCompletedSound:null,
						totalTime:180,
						currentTime:0
					}
				}
			},
			location_6:{
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
						openLocFunc:_openLocFunc_1_6,
						closeLocFunc:null,
						addBackgroundSound:null,
						removeBackgroundSound:null,
						addCompletedSound:null,
						removeCompletedSound:null,
						totalTime:180,
						currentTime:0
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
						frames:[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27]
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
					eyebrows_0:{},
					eyebrows_1:{},
					eyebrows_2:{},
					eyebrows_3:{},
					eyebrows_4:{},
					eyebrows_5:{},
					eyebrows_6:{},
					eyelash_0:{},
					eyelash_1:{},
					eyelash_2:{},
					eyelash_3:{},
					eyelash_4:{},
					eyelash_5:{},
					eyelash_6:{},
					hair_0:{},
					hair_1:{},
					hair_2:{},
					hair_3:{},
					hair_4:{},
					hair_5:{},
					hair_6:{},
					dress_0:{},
					dress_1:{},
					dress_2:{},
					dress_3:{},
					dress_4:{},
					dress_5:{},
					dress_6:{},
					dress_7:{},
					dress_8:{},
					dress_9:{},
					dress_10:{},
					dress_11:{},
					dress_12:{},
					dress_13:{},
					dress_14:{},
					dress_15:{},
					dress_16:{},
					dress_17:{},
					dress_18:{},
					dress_19:{},
					dress_20:{},
					dress_21:{},
					dress_22:{},
					dress_23:{},
					dress_24:{},
					dress_25:{},
					dress_26:{},
					dress_27:{},
					dress_28:{},
					dress_29:{},
					dress_30:{},
					cloak_0:{},
					cloak_1:{},
					cloak_2:{},
					cloak_3:{},
					cloak_4:{},
					cloak_5:{},
					cloak_6:{},
					cloak_7:{},
					cloak_8:{},
					cloak_9:{},
					cloak_10:{},
					cloak_11:{},
					shoes_0:{},
					shoes_1:{},
					shoes_2:{},
					shoes_3:{},
					shoes_4:{},
					shoes_5:{},
					shoes_6:{},
					shoes_7:{},
					shoes_8:{},
					shoes_9:{},
					shoes_10:{},
					shoes_11:{},
					shoes_12:{},
					shoes_13:{},
					shoes_14:{},
					headdress_0:{},
					headdress_1:{},
					headdress_2:{},
					headdress_3:{},
					headdress_4:{},
					headdress_5:{},
					headdress_6:{},
					headdress_7:{},
					headdress_8:{},
					headdress_9:{},
					headdress_10:{},
					headdress_11:{},
					left_0:{},
					left_1:{},
					left_2:{},
					left_3:{},
					left_4:{},
					left_5:{},
					left_6:{},
					left_7:{},
					left_8:{},
					left_9:{},
					left_10:{},
					right_0:{},
					right_1:{},
					right_2:{},
					right_3:{},
					right_4:{},
					right_5:{},
					right_6:{},
					right_7:{},
					right_8:{},
					right_9:{},
					right_10:{},
					right_11:{},
					right_12:{},
					right_13:{},
					right_14:{},
					right_15:{},
					right_16:{},
					right_17:{},
					ass_0:{},
					ass_1:{},
					ass_2:{},
					ass_3:{},
					wings_0:{},
					wings_1:{},
					wings_2:{},
					wings_3:{},
					wings_4:{},
					wings_5:{},
					wings_6:{},
					wings_7:{},
					wings_8:{},
					wings_9:{},
					wings_10:{},
					wings_11:{},
					wings_12:{},
					wings_13:{},
					wings_14:{},
					wings_15:{},
					wings_16:{},
					beads_0:{},
					beads_1:{},
					beads_2:{},
					beads_3:{},
					beads_4:{},
					beads_5:{},
					beads_6:{},
					beads_7:{},
					beads_8:{},
					beads_9:{},
					bg_1:{},
					bg_2:{}
				},
				currentDress:{
					blush:{currentOption:null, defaultOption:0, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					lips:{currentOption:null, defaultOption:1, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					shadows:{currentOption:null, defaultOption:0, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					eyebrows:{currentOption:null, defaultOption:1, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					eyelash:{currentOption:null, defaultOption:1, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					hair:{currentOption:null, defaultOption:1, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					dress:{currentOption:null, defaultOption:1, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					cloak:{currentOption:null, defaultOption:0, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					shoes:{currentOption:null, defaultOption:1, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					headdress:{currentOption:null, defaultOption:0, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					left:{currentOption:null, defaultOption:0, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					right:{currentOption:null, defaultOption:0, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					ass:{currentOption:null, defaultOption:0, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					wings:{currentOption:null, defaultOption:0, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					beads:{currentOption:null, defaultOption:0, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
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
						frames:[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27]
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
					eyebrows_0:{},
					eyebrows_1:{},
					eyebrows_2:{},
					eyebrows_3:{},
					eyebrows_4:{},
					eyebrows_5:{},
					eyebrows_6:{},
					eyelash_0:{},
					eyelash_1:{},
					eyelash_2:{},
					eyelash_3:{},
					eyelash_4:{},
					eyelash_5:{},
					eyelash_6:{},
					hair_0:{},
					hair_1:{},
					hair_2:{},
					hair_3:{},
					hair_4:{},
					hair_5:{},
					hair_6:{},
					dress_0:{},
					dress_1:{},
					dress_2:{},
					dress_3:{},
					dress_4:{},
					dress_5:{},
					dress_6:{},
					dress_7:{},
					dress_8:{},
					dress_9:{},
					dress_10:{},
					dress_11:{},
					dress_12:{},
					dress_13:{},
					dress_14:{},
					dress_15:{},
					dress_16:{},
					dress_17:{},
					dress_18:{},
					dress_19:{},
					dress_20:{},
					dress_21:{},
					dress_22:{},
					dress_23:{},
					dress_24:{},
					dress_25:{},
					dress_26:{},
					dress_27:{},
					dress_28:{},
					dress_29:{},
					dress_30:{},
					cloak_0:{},
					cloak_1:{},
					cloak_2:{},
					cloak_3:{},
					cloak_4:{},
					cloak_5:{},
					cloak_6:{},
					cloak_7:{},
					cloak_8:{},
					cloak_9:{},
					cloak_10:{},
					cloak_11:{},
					shoes_0:{},
					shoes_1:{},
					shoes_2:{},
					shoes_3:{},
					shoes_4:{},
					shoes_5:{},
					shoes_6:{},
					shoes_7:{},
					shoes_8:{},
					shoes_9:{},
					shoes_10:{},
					shoes_11:{},
					shoes_12:{},
					shoes_13:{},
					shoes_14:{},
					headdress_0:{},
					headdress_1:{},
					headdress_2:{},
					headdress_3:{},
					headdress_4:{},
					headdress_5:{},
					headdress_6:{},
					headdress_7:{},
					headdress_8:{},
					headdress_9:{},
					headdress_10:{},
					headdress_11:{},
					left_0:{},
					left_1:{},
					left_2:{},
					left_3:{},
					left_4:{},
					left_5:{},
					left_6:{},
					left_7:{},
					left_8:{},
					left_9:{},
					left_10:{},
					right_0:{},
					right_1:{},
					right_2:{},
					right_3:{},
					right_4:{},
					right_5:{},
					right_6:{},
					right_7:{},
					right_8:{},
					right_9:{},
					right_10:{},
					right_11:{},
					right_12:{},
					right_13:{},
					right_14:{},
					right_15:{},
					right_16:{},
					right_17:{},
					ass_0:{},
					ass_1:{},
					ass_2:{},
					ass_3:{},
					wings_0:{},
					wings_1:{},
					wings_2:{},
					wings_3:{},
					wings_4:{},
					wings_5:{},
					wings_6:{},
					wings_7:{},
					wings_8:{},
					wings_9:{},
					wings_10:{},
					wings_11:{},
					wings_12:{},
					wings_13:{},
					wings_14:{},
					wings_15:{},
					wings_16:{},
					beads_0:{},
					beads_1:{},
					beads_2:{},
					beads_3:{},
					beads_4:{},
					beads_5:{},
					beads_6:{},
					beads_7:{},
					beads_8:{},
					beads_9:{},
					bg_1:{},
					bg_2:{}
				},
				currentDress:{
					blush:{currentOption:null, defaultOption:0, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					lips:{currentOption:null, defaultOption:1, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					shadows:{currentOption:null, defaultOption:0, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					eyebrows:{currentOption:null, defaultOption:1, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					eyelash:{currentOption:null, defaultOption:1, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					hair:{currentOption:null, defaultOption:1, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					dress:{currentOption:null, defaultOption:1, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					cloak:{currentOption:null, defaultOption:0, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					shoes:{currentOption:null, defaultOption:1, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					headdress:{currentOption:null, defaultOption:0, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					left:{currentOption:null, defaultOption:0, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					right:{currentOption:null, defaultOption:0, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					ass:{currentOption:null, defaultOption:0, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					wings:{currentOption:null, defaultOption:0, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					beads:{currentOption:null, defaultOption:0, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					bg:{currentOption:null, defaultOption:1, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1}
				}
			},
			hero_3:{
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
						frames:[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27]
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
					eyebrows_0:{},
					eyebrows_1:{},
					eyebrows_2:{},
					eyebrows_3:{},
					eyebrows_4:{},
					eyebrows_5:{},
					eyebrows_6:{},
					eyelash_0:{},
					eyelash_1:{},
					eyelash_2:{},
					eyelash_3:{},
					eyelash_4:{},
					eyelash_5:{},
					eyelash_6:{},
					hair_0:{},
					hair_1:{},
					hair_2:{},
					hair_3:{},
					hair_4:{},
					hair_5:{},
					hair_6:{},
					dress_0:{},
					dress_1:{},
					dress_2:{},
					dress_3:{},
					dress_4:{},
					dress_5:{},
					dress_6:{},
					dress_7:{},
					dress_8:{},
					dress_9:{},
					dress_10:{},
					dress_11:{},
					dress_12:{},
					dress_13:{},
					dress_14:{},
					dress_15:{},
					dress_16:{},
					dress_17:{},
					dress_18:{},
					dress_19:{},
					dress_20:{},
					dress_21:{},
					dress_22:{},
					dress_23:{},
					dress_24:{},
					dress_25:{},
					dress_26:{},
					dress_27:{},
					dress_28:{},
					dress_29:{},
					dress_30:{},
					cloak_0:{},
					cloak_1:{},
					cloak_2:{},
					cloak_3:{},
					cloak_4:{},
					cloak_5:{},
					cloak_6:{},
					cloak_7:{},
					cloak_8:{},
					cloak_9:{},
					cloak_10:{},
					cloak_11:{},
					shoes_0:{},
					shoes_1:{},
					shoes_2:{},
					shoes_3:{},
					shoes_4:{},
					shoes_5:{},
					shoes_6:{},
					shoes_7:{},
					shoes_8:{},
					shoes_9:{},
					shoes_10:{},
					shoes_11:{},
					shoes_12:{},
					shoes_13:{},
					shoes_14:{},
					headdress_0:{},
					headdress_1:{},
					headdress_2:{},
					headdress_3:{},
					headdress_4:{},
					headdress_5:{},
					headdress_6:{},
					headdress_7:{},
					headdress_8:{},
					headdress_9:{},
					headdress_10:{},
					headdress_11:{},
					left_0:{},
					left_1:{},
					left_2:{},
					left_3:{},
					left_4:{},
					left_5:{},
					left_6:{},
					left_7:{},
					left_8:{},
					left_9:{},
					left_10:{},
					right_0:{},
					right_1:{},
					right_2:{},
					right_3:{},
					right_4:{},
					right_5:{},
					right_6:{},
					right_7:{},
					right_8:{},
					right_9:{},
					right_10:{},
					right_11:{},
					right_12:{},
					right_13:{},
					right_14:{},
					right_15:{},
					right_16:{},
					right_17:{},
					ass_0:{},
					ass_1:{},
					ass_2:{},
					ass_3:{},
					wings_0:{},
					wings_1:{},
					wings_2:{},
					wings_3:{},
					wings_4:{},
					wings_5:{},
					wings_6:{},
					wings_7:{},
					wings_8:{},
					wings_9:{},
					wings_10:{},
					wings_11:{},
					wings_12:{},
					wings_13:{},
					wings_14:{},
					wings_15:{},
					wings_16:{},
					beads_0:{},
					beads_1:{},
					beads_2:{},
					beads_3:{},
					beads_4:{},
					beads_5:{},
					beads_6:{},
					beads_7:{},
					beads_8:{},
					beads_9:{},
					bg_1:{},
					bg_2:{}
				},
				currentDress:{
					blush:{currentOption:null, defaultOption:0, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					lips:{currentOption:null, defaultOption:1, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					shadows:{currentOption:null, defaultOption:0, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					eyebrows:{currentOption:null, defaultOption:1, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					eyelash:{currentOption:null, defaultOption:1, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					hair:{currentOption:null, defaultOption:1, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					dress:{currentOption:null, defaultOption:1, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					cloak:{currentOption:null, defaultOption:0, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					shoes:{currentOption:null, defaultOption:1, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					headdress:{currentOption:null, defaultOption:0, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					left:{currentOption:null, defaultOption:0, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					right:{currentOption:null, defaultOption:0, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					ass:{currentOption:null, defaultOption:0, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					wings:{currentOption:null, defaultOption:0, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
					beads:{currentOption:null, defaultOption:0, currentColor:null, defaultColor:null, currentTexture:null, defaultTexture:null, currentAlphaTexture:null, defaultAlphaTexture:1},
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
			_stage.addEventListener("stagemouseup", _onStageMouseUpFunc, false);
		}
		else
		{
			_stage.enableMouseOver(10);
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
		currentScreen_mc.logo_mc.gotoAndStop(0);
		var logo_img = new Image();
		logo_img.src = "data:image/png;base64,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";
		var logo_bitmap = new createjs.Bitmap(logo_img);
		currentScreen_mc.logo_mc.addChild(logo_bitmap);
		logo_bitmap.x = -150;
		logo_bitmap.y = -150;
		/*
		currentScreen_mc.logo_mc.scaleX = 0.95;
		currentScreen_mc.logo_mc.scaleY = 0.95;
		currentScreen_mc.logo_mc.mouseChildren = false;
		currentScreen_mc.logo_mc.mouseEnabled = true;
		currentScreen_mc.logo_mc.cursor = "pointer";
		currentScreen_mc.logo_mc.addEventListener("click", _onClickPreloaderBtnFunc, false);
		currentScreen_mc.logo_mc.addEventListener("mouseover", _onMouseOverPreloaderMcFunc, false);
		currentScreen_mc.logo_mc.addEventListener("mouseout", _onMouseOutPreloaderMcFunc, false);
		*/
		/*
		
		*/
		currentScreen_mc.play_mc.gotoAndStop(0);
		currentScreen_mc.play_mc.visible = false;
		currentScreen_mc.play_mc.mouseChildren = false;
		currentScreen_mc.play_mc.mouseEnabled = false;
		/*
		
		*/
		currentScreen_mc.indicator_mc.gotoAndStop(0);
		currentScreen_mc.indicator_mc.mouseChildren = false;
		currentScreen_mc.indicator_mc.mouseEnabled = false;
		currentScreen_mc.indicator_mc.indicator_mc.gotoAndStop(0);
		currentScreen_mc.indicator_mc.indicator_mc.loop = false;
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
		loadQueue.loadFile({id:"click_2_sound", src:"library/sounds/click_2_sound.ogg"});
		loadQueue.loadFile({id:"completed_sound", src:"library/sounds/completed_sound.ogg"});
		loadQueue.loadFile({id:"photo_sound", src:"library/sounds/photo_sound.ogg"});
		loadQueue.loadFile({id:"magic_sound", src:"library/sounds/magic_sound.ogg"});
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
	function _onMouseOverPreloaderMcFunc(event)
	{
		var current_mc = event.currentTarget;
		TweenLite.to(current_mc, _DELAY / 4, {scaleX:1, scaleY:1});
	}
	function _onMouseOutPreloaderMcFunc(event)
	{
		var current_mc = event.currentTarget;
		TweenLite.to(current_mc, _DELAY / 2, {scaleX:0.95, scaleY:0.95});
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
		/*
		
		*/
		var totalFrames_num = currentScreen_mc.indicator_mc.indicator_mc.totalFrames;
		var currentFrame_num = Math.floor(totalFrames_num * event.progress);
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
		_onCompleteLoadAppFunc();
	}
	/*
	
	*/
	function _onCompleteLoadAppFunc()
	{
		/*
		
		*/
		var currentScreen_mc = _main.getChildAt(0);
		/*
		
		*/
		TweenLite.to(currentScreen_mc.indicator_mc, _DELAY, {alpha:0.01, delay:0, ease:Cubic.easeInOut});
		/*
		
		*/
		currentScreen_mc.play_mc.cursor = "pointer";
		currentScreen_mc.play_mc.mouseChildren = false;
		currentScreen_mc.play_mc.mouseEnabled = true;
		currentScreen_mc.play_mc.alpha = 0.01;
		currentScreen_mc.play_mc.scaleX = 0.4;
		currentScreen_mc.play_mc.scaleY = 0.4;
		currentScreen_mc.play_mc.addEventListener("click", _onClickPlayAppBtnFunc, false);
		currentScreen_mc.play_mc.addEventListener("mouseover", _onMouseOverPreloaderMcFunc, false);
		currentScreen_mc.play_mc.addEventListener("mouseout", _onMouseOutPreloaderMcFunc, false);
		TweenLite.to(currentScreen_mc.play_mc, _DELAY, {alpha:1, scaleX:0.9, scaleY:0.9, delay:_DELAY, ease:Bounce.easeInOut});
		currentScreen_mc.play_mc.visible = true;
		/*
		
		*/
		var bodyCursor_mc = new lib.Cursor();
		bodyCursor_mc.gotoAndStop(0);
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
			currentScreen_mc.credits_btn.alpha = 0.01;
			TweenLite.to(currentScreen_mc.credits_btn, _DELAY, {alpha:1, delay:0, ease:Cubic.easeInOut});
			currentScreen_mc.credits_btn.addEventListener("click", _onClickCreditsBtnFunc, false);
		}
		/*
		
		*/
		if(currentScreen_mc.instruction_btn)
		{
			currentScreen_mc.instruction_btn.alpha = 0.01;
			TweenLite.to(currentScreen_mc.instruction_btn, _DELAY, {alpha:1, delay:_DELAY * 0.5, ease:Cubic.easeInOut});
			currentScreen_mc.instruction_btn.addEventListener("click", _onClickInstructionBtnFunc, false);
		}
		/*
		
		*/
		if(currentScreen_mc.moreGames_btn)
		{
			currentScreen_mc.moreGames_btn.alpha = 0.01;
			TweenLite.to(currentScreen_mc.moreGames_btn, _DELAY, {alpha:1, delay:_DELAY * 1.0, ease:Cubic.easeInOut});
			currentScreen_mc.moreGames_btn.addEventListener("click", _onClickMoreGamesBtnFunc, false);
		}
		/*
		
		*/
		if(currentScreen_mc.freeGames_mc)
		{
			currentScreen_mc.freeGames_mc.alpha = 0.01;
			TweenLite.to(currentScreen_mc.freeGames_mc, _DELAY, {alpha:1, delay:_DELAY * 1.5, ease:Cubic.easeInOut});
			currentScreen_mc.freeGames_mc.addEventListener("click", _onClickFreeGamesMcFunc, false);
		}
		/*
		
		*/
		currentScreen_mc.play_btn.alpha = 0.01;
		TweenLite.to(currentScreen_mc.play_btn, _DELAY, {alpha:1, delay:_DELAY * 1.5, ease:Cubic.easeInOut});
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
		event.currentTarget.removeEventListener("click", _onClickPlayBtnFunc, false);
		/*
		
		*/
		_soundManager.addSoundFunc("click_sound", 0, 0, 0, 1, _soundManager.panFromStageFunc(_stage.mouseX, _CWIDTH));
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
		_soundManager.addSoundFunc("click_sound", 0, 0, 0, 1, _soundManager.panFromStageFunc(_stage.mouseX, _CWIDTH));
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
		_soundManager.addSoundFunc("click_sound", 0, 0, 0, 1, _soundManager.panFromStageFunc(_stage.mouseX, _CWIDTH));
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
		currentScreen_mc.next_btn.alpha = 0;
		TweenLite.to(currentScreen_mc.next_btn, _DELAY, {alpha:1, delay:0, ease:Cubic.easeInOut});
		currentScreen_mc.next_btn.addEventListener("click", _onClickNextBtnAfterCartoonFunc, false);
	}
	/*
	
	*/
	function _onClickNextBtnAfterCartoonFunc(event)
	{
		/*
		
		*/
		event.currentTarget.removeEventListener("click", _onClickNextBtnAfterCartoonFunc, false);
		/*
		
		*/
		_soundManager.addSoundFunc("click_sound", 0, 0, 0, 1, _soundManager.panFromStageFunc(_stage.mouseX, _CWIDTH));
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
		_soundManager.addSoundFunc("click_sound", 0, 0, 0, 1, _soundManager.panFromStageFunc(_stage.mouseX, _CWIDTH));
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
		currentScreen_mc.locations_mc.mouseEnabled = false;
		currentScreen_mc.locations_mc.mouseChildren = false;
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
			TweenLite.to(currentScreen_mc.moreGames_btn, _DELAY, {alpha:1, delay:_DELAY * 1.0, ease:Cubic.easeInOut});
			currentScreen_mc.moreGames_btn.addEventListener("click", _onClickMoreGamesBtnFunc, false);
		}
		/*
		
		*/
		if(_information.timeout_id != null)
		{
			clearTimeout(_information.timeout_id);
		}
		_information.timeout_id = setTimeout(_updateSelectionLocationFunc, _DELAY * 1000);
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
		_soundManager.addSoundFunc("click_sound", 0, 0, 0, 1, _soundManager.panFromStageFunc(_stage.mouseX, _CWIDTH));
		/*
		
		*/
		var current_mc = event.currentTarget;
		current_mc.removeEventListener("click", _onClickHelpMCFunc, false);
		current_mc.parent.removeChild(current_mc);
	}
	/*
	
	*/
	function _updateSelectionLocationFunc()
	{
		/*
		
		*/
		if(_information.timeout_id != null)
		{
			clearTimeout(_information.timeout_id);
		}
		/*
		
		*/
		var currentScreen_mc = _main.getChildAt(0);
		currentScreen_mc.locations_mc.play();
		currentScreen_mc.locations_mc.mouseEnabled = true;
		currentScreen_mc.locations_mc.mouseChildren = true;
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
						new Edapskov_Glow(location_mc, _DELAY / 4, "rgba(255, 255, 255, 0)", 0);
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
						new Edapskov_Glow(location_mc, _DELAY / 4, "rgba(255, 255, 255, 0)", 0);
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
		var current_mc = event.currentTarget;
		//TweenLite.to(current_mc, _DELAY / 5, {scaleX:1.06, scaleY:1.06});
		new Edapskov_Glow(current_mc, _DELAY / 5, "rgba(255, 255, 255, 0.3)", 15);
	}
	function _onMouseOutLocationFunc(event)
	{
		var current_mc = event.currentTarget;
		//TweenLite.to(current_mc, _DELAY / 3, {scaleX:1, scaleY:1});
		new Edapskov_Glow(current_mc, _DELAY / 3, "rgba(255, 255, 255, 0)", 0);
	}
	function _onClickLocationFunc(event)
	{
		/*
		
		*/
		_soundManager.addSoundFunc("magic_sound", 0, 0, 0, 0.2, _soundManager.panFromStageFunc(_stage.mouseX, _CWIDTH));
		/*
		
		*/
		var location_mc = event.currentTarget;
		location_mc.gotoAndStop(2);
		/*
		
		*/
		_information.currentNameLocation = String(location_mc.name);
		/*
		
		*/
		new Edapskov_Flickering(_before, location_mc, ["#ffffff", "#ffffcc"], 10, 24);
		/*
		
		*/
		var gravityExplosion_mc = new lib.GravityExplosionMC();
		_before.addChild(gravityExplosion_mc);
		gravityExplosion_mc.gotoAndStop(0);
		var point_obj = _before.globalToLocal(_stage.mouseX, _stage.mouseY);
		gravityExplosion_mc.x = point_obj.x;
		gravityExplosion_mc.y = point_obj.y;
		/*
		
		*/
		var currentScreen_mc = _main.getChildAt(0);
		currentScreen_mc.locations_mc.mouseEnabled = false;
		currentScreen_mc.locations_mc.mouseChildren = false;
		/*
		исключения
		*/
		if(_skippedLocationsFunc() == 4)
		{
			_addAdsFunc();
		}
		if(_skippedLocationsFunc() == 1)
		{
			_addAdsFunc();
		}
		/*
		
		*/
		//_animationTransitionBetweenScenesFunc(_questFunc);
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
		_information.currentNameHero = null;
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
						TweenLite.to(currentScreen_mc.skip_btn, _DELAY / 4, {alpha:1, ease:Cubic.easeInOut});
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
			else if(_information.locations[_information.currentNameLocation].actions[_information.locations[_information.currentNameLocation].currentNameAction].type === "cleanup")
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
				_beginCleanupActionFunc();
			}
			else if(_information.locations[_information.currentNameLocation].actions[_information.locations[_information.currentNameLocation].currentNameAction].type === "quiz")
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
				_beginQuizActionFunc();
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
		_cursorAnimationFunc();
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
		var point = trackMoveContainer.globalToLocal(_stage.mouseX, _stage.mouseY);
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
			trackMoveContainer.graphics.moveTo(point.x, point.y);
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
			trackMove_mc.x = point.x;
			trackMove_mc.y = point.y;
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
		var point = trackMoveContainer.globalToLocal(_stage.mouseX, _stage.mouseY);
		/*
		
		*/
		if(_information.trackMove == 1)
		{
			trackMoveContainer.graphics.lineTo(point.x, point.y);
			trackMoveContainer.graphics.endStroke();
			trackMoveContainer.graphics.setStrokeStyle(_INDENT, "round").beginStroke("#ff0000");
			trackMoveContainer.graphics.moveTo(point.x, point.y);
		}
		else if(_information.trackMove == 2)
		{
			var trackMove_mc = new lib.TrackMove();
			trackMoveContainer.addChild(trackMove_mc);
			trackMove_mc.x = point.x;
			trackMove_mc.y = point.y;
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
			point = checkpoint_mc.globalToLocal(_stage.mouseX, _stage.mouseY);
			/*
			
			*/
			if(checkpoint_mc.hitTest(point.x, point.y))
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
		var point = object_mc.globalToLocal(_stage.mouseX, _stage.mouseY);
		if(object_mc.hitTest(point.x, point.y))
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
			_information.currentNameHero = heroes_arr[0];
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
						//new Edapskov_Glow(hero_mc, _DELAY / 2, "rgba(255, 255, 255, 0.6)", 20);
					}
					else
					{
						hero_mc.mouseEnabled = true;
						hero_mc.mouseChildren = false;
						hero_mc.cursor = "pointer";
						hero_mc.addEventListener("click", _onClickHeroDressupActionFunc, false);
						//new Edapskov_Glow(hero_mc, _DELAY / 4, "rgba(255, 255, 255, 0)", 0);
					}
				}
			}
		}
	}
	function _onClickHeroDressupActionFunc(event)
	{
		/*
		
		*/
		_soundManager.addSoundFunc("click_2_sound", 0, 0, 0, 0.2, _soundManager.panFromStageFunc(_stage.mouseX, _CWIDTH));
		/*
		
		*/
		_information.currentNameHero = String(event.currentTarget.name);
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
		TweenLite.to(dressupPanel_mc.body_mc, _DELAY / 5, {alpha:0.1, onComplete:_onCompleteAnimationTransitionPanelDressupActionFunc});
	}
	function _onCompleteAnimationTransitionPanelDressupActionFunc()
	{
		/*
		
		*/
		var currentScreen_mc = _main.getChildAt(0);
		var dressupPanel_mc = currentScreen_mc.body_mc["dressupPanel_" + (currentScreen_mc.body_mc.currentFrame + 1) + "_mc"];
		TweenLite.to(dressupPanel_mc.body_mc, _DELAY / 4, {alpha:1});
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
						/*
						if(object_mc.body_mc)
						{
							_updateAvailableTextureDressupActionFunc(object_mc.body_mc, _information.heroes[_information.currentNameHero].currentDress[propObject_2].currentTexture);
						}
						*/
						if(object_mc.container_mc)
						{
							if(object_mc.container_mc.content_mc)
							{
								_updateAvailableTextureDressupActionFunc(object_mc.container_mc.content_mc, _information.heroes[_information.currentNameHero].currentDress[propObject_2].currentTexture);
							}
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
		//var current_mc = event.currentTarget;
		//TweenLite.to(current_mc, _DELAY / 5, {scaleX:1.06, scaleY:1.06});
		//new Edapskov_Glow(current_mc, _DELAY / 5, "rgba(255, 255, 255, 0.8)", 15);
	}
	function _onMouseOutObjectMcDressupActionFunc(event)
	{
		//var current_mc = event.currentTarget;
		//TweenLite.to(current_mc, _DELAY / 3, {scaleX:1, scaleY:1});
		//new Edapskov_Glow(current_mc, _DELAY / 3, "rgba(255, 255, 255, 0)", 0);
	}
	function _onClickObjectMcDressupActionFunc(event)
	{
		/*
		
		*/
		_soundManager.addSoundFunc("click_2_sound", 0, 0, 0, 0.2, _soundManager.panFromStageFunc(_stage.mouseX, _CWIDTH));
		/*
		
		*/
		var currentScreen_mc = _main.getChildAt(0);
		/*
		
		*/
		var current_mc = event.currentTarget;
		//TweenLite.to(current_mc, _DELAY / 3, {scaleX:1, scaleY:1});
		//new Edapskov_Glow(current_mc, _DELAY / 3, "rgba(255, 255, 255, 0)", 0);
		/*
		
		*/
		var tempArray = current_mc.name.split("_");
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
				/*
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
					}
				}
				*/
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
				new Edapskov_Flickering(_before, currentScreen_mc.body_mc[_information.currentNameHero][key], ["#ffffff", "#ffffcc"], 10, 18);
			}
			/*
			
			*/
			if(!currentScreen_mc.next_btn.visible)
			{
				currentScreen_mc.next_btn.visible = true;
				currentScreen_mc.next_btn.alpha = 0.01;
				TweenLite.to(currentScreen_mc.next_btn, _DELAY / 2, {alpha:1});
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
				TweenLite.to(currentScreen_mc.next_btn, _DELAY / 2, {alpha:1});
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
		//var current_str = texture_mc.parent.parent.name.split("_")[1];
		var current_str = texture_mc.parent.parent.parent.name.split("_")[1];
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
				TweenLite.to(currentScreen_mc.next_btn, _DELAY / 2, {alpha:1});
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
		var current_mc = event.currentTarget;
		var current_str = current_mc.parent.name.split("_")[1];
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
		var current_mc = event.currentTarget;
		TweenLite.to(current_mc, _DELAY / 5, {scaleX:1.1, scaleY:1.1});
		new Edapskov_Glow(current_mc, _DELAY / 5, "rgba(255, 255, 255, 0.8)", 5);
		*/
	}
	function _onMouseOutSetMcDressupActionFunc(event)
	{
		/*
		var current_mc = event.currentTarget;
		TweenLite.to(current_mc, _DELAY/3, {scaleX:1, scaleY:1});
		new Edapskov_Glow(current_mc, _DELAY / 3, "rgba(255, 255, 255, 0)", 0);
		*/
	}
	function _onClickSetMcDressupActionFunc(event)
	{
		/*
		
		*/
		_soundManager.addSoundFunc("click_sound", 0, 0, 0, 1, _soundManager.panFromStageFunc(_stage.mouseX, _CWIDTH));
		/*
		
		*/
		var current_mc = event.currentTarget;
		//TweenLite.to(current_mc, _DELAY / 3, {scaleX:1, scaleY:1});
		//new Edapskov_Glow(current_mc, _DELAY / 3, "rgba(255, 255, 255, 0)", 0);
		/*
		
		*/
		var gravityExplosion_mc = new lib.GravityExplosionMC();
		_before.addChild(gravityExplosion_mc);
		gravityExplosion_mc.gotoAndStop(0);
		var point_obj = _before.globalToLocal(_stage.mouseX, _stage.mouseY);
		gravityExplosion_mc.x = point_obj.x;
		gravityExplosion_mc.y = point_obj.y;
		/*
		
		*/
		new Edapskov_Flickering(_before, current_mc, ["#ffffff", "#ffffcc"], 4, 18);
		/*
		
		*/
		_information.heroes[_information.currentNameHero].currentSet = current_mc.name;
		/*
		
		*/
		_updatePanelDressupActionFunc();
		//_animationTransitionPanelDressupActionFunc();
	}
	/*
	
	*/
	function _onMouseOverNavigationMcDressupActionFunc(event)
	{
		var current_mc = event.currentTarget;
		TweenLite.to(current_mc, _DELAY / 5, {scaleX:1.1, scaleY:1.1});
		//new Edapskov_Glow(current_mc, _DELAY / 5, "rgba(255, 255, 255, 0.8)", 20);
	}
	function _onMouseOutNavigationMcDressupActionFunc(event)
	{
		var current_mc = event.currentTarget;
		TweenLite.to(current_mc, _DELAY / 3, {scaleX:1, scaleY:1});
		//new Edapskov_Glow(current_mc, _DELAY / 3, "rgba(255, 255, 255, 0)", 0);
	}
	function _onClickPrevNavigationMcDressupActionFunc(event)
	{
		/*
		
		*/
		_soundManager.addSoundFunc("click_sound", 0, 0, 0, 0.2, _soundManager.panFromStageFunc(_stage.mouseX, _CWIDTH));
		/*
		
		*/
		var gravityExplosion_mc = new lib.GravityExplosionMC();
		_before.addChild(gravityExplosion_mc);
		gravityExplosion_mc.gotoAndStop(0);
		var point_obj = _before.globalToLocal(_stage.mouseX, _stage.mouseY);
		gravityExplosion_mc.x = point_obj.x;
		gravityExplosion_mc.y = point_obj.y;
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
		_soundManager.addSoundFunc("click_sound", 0, 0, 0, 0.2, _soundManager.panFromStageFunc(_stage.mouseX, _CWIDTH));
		/*
		
		*/
		var gravityExplosion_mc = new lib.GravityExplosionMC();
		_before.addChild(gravityExplosion_mc);
		gravityExplosion_mc.gotoAndStop(0);
		var point_obj = _before.globalToLocal(_stage.mouseX, _stage.mouseY);
		gravityExplosion_mc.x = point_obj.x;
		gravityExplosion_mc.y = point_obj.y;
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
		var current_mc = event.currentTarget;
		TweenLite.to(current_mc, _DELAY / 5, {scaleX:1.1, scaleY:1.1});
	}
	function _onMouseOutNavigationMcDressupSecondActionFunc(event)
	{
		var current_mc = event.currentTarget;
		TweenLite.to(current_mc, _DELAY / 3, {scaleX:1, scaleY:1});
	}
	function _onClickPrevNavigationMcDressupSecondActionFunc(event)
	{
		/*
		
		*/
		var current_mc = event.currentTarget;
		var current_str = current_mc.name;
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
						TweenLite.to(currentScreen_mc.next_btn, _DELAY / 2, {alpha:1});
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
		var current_mc = event.currentTarget;
		var current_str = current_mc.name;
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
						TweenLite.to(currentScreen_mc.next_btn, _DELAY / 2, {alpha:1});
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
		var current_mc = event.currentTarget;
		TweenLite.to(current_mc, _DELAY / 5, {scaleX:1.1, scaleY:1.1});
	}
	function _onMouseOutNavigationMcDressupThirdActionFunc(event)
	{
		var current_mc = event.currentTarget;
		TweenLite.to(current_mc, _DELAY / 3, {scaleX:1, scaleY:1});
	}
	function _onClickNavigationMcDressupThirdActionFunc(event)
	{
		/*
		
		*/
		var current_mc = event.currentTarget;
		var current_str = String(current_mc.name);
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
						TweenLite.to(currentScreen_mc.next_btn, _DELAY / 2, {alpha:1});
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
	cleanup action
	============================================================
	*/
	function _beginCleanupActionFunc()
	{
		/*
		
		*/
		_information.dragShape = null;
		/*
		
		*/
		var currentScreen_mc = _main.getChildAt(0);
		var cleanup_mc;
		var garbage_mc;
		/*
		
		*/
		if(currentScreen_mc.body_mc["cleanup_" + (currentScreen_mc.body_mc.currentFrame + 1) + "_mc"])
		{
			/*
			
			*/
			cleanup_mc = currentScreen_mc.body_mc["cleanup_" + (currentScreen_mc.body_mc.currentFrame + 1) + "_mc"];
			cleanup_mc.gotoAndStop(0);
			/*
			
			*/
			if(cleanup_mc.window_mc)
			{
				cleanup_mc.window_mc.gotoAndStop(0);
				cleanup_mc.window_mc.visible = false;
			}
			else
			{
				trace("Ошибка! Отсутствует cleanup_mc.window_mc!");
			}
			/*
			
			*/
			if(cleanup_mc.container_mc)
			{
				cleanup_mc.container_mc.gotoAndStop(0);
				_clearContainerFunc(cleanup_mc.container_mc);
				cleanup_mc.container_mc.x = 0;
				cleanup_mc.container_mc.y = 0;
			}
			else
			{
				trace("Ошибка! Отсутствует cleanup_mc.container_mc!");
			}
			/*
			
			*/
			if(cleanup_mc.panel_mc)
			{
				/*
				
				*/
				cleanup_mc.panel_mc.gotoAndStop(0);
				/*
				
				*/
				if(cleanup_mc.panel_mc.indicator_mc)
				{
					/*
					
					*/
					cleanup_mc.panel_mc.indicator_mc.gotoAndStop(0);
					/*
					
					*/
					if(cleanup_mc.panel_mc.indicator_mc.indicator_mc)
					{
						/*
						
						*/
						if(!_information.locations[_information.currentNameLocation].actions[_information.locations[_information.currentNameLocation].currentNameAction].hasOwnProperty("totalTime"))
						{
							_information.locations[_information.currentNameLocation].actions[_information.locations[_information.currentNameLocation].currentNameAction].totalTime = 60;
						}
						if(!_information.locations[_information.currentNameLocation].actions[_information.locations[_information.currentNameLocation].currentNameAction].hasOwnProperty("currentTime"))
						{
							_information.locations[_information.currentNameLocation].actions[_information.locations[_information.currentNameLocation].currentNameAction].currentTime = 0;
						}
						else
						{
							_information.locations[_information.currentNameLocation].actions[_information.locations[_information.currentNameLocation].currentNameAction].currentTime = 0;
						}
						/*
						
						*/
						if(_information.interval_id != null)
						{
							clearInterval(_information.interval_id);
						}
						_information.interval_id = setInterval(_updateIndicatorCleanupActionFunc, 1000);
						/*
						
						*/
						cleanup_mc.panel_mc.indicator_mc.indicator_mc.gotoAndStop(0);
						_updateIndicatorCleanupActionFunc();
					}
					else
					{
						trace("Ошибка! Отсутствует cleanup_mc.panel_mc.indicator_mc.indicator_mc!");
					}
				}
				else
				{
					trace("Ошибка! Отсутствует cleanup_mc.panel_mc.indicator_mc!");
				}
				/*
				
				*/
				if(cleanup_mc.panel_mc.hint_mc)
				{
					cleanup_mc.panel_mc.hint_mc.gotoAndStop(0);
					cleanup_mc.panel_mc.hint_mc.mouseEnabled = true;
					cleanup_mc.panel_mc.hint_mc.mouseChildren = true;
					cleanup_mc.panel_mc.hint_mc.cursor = "pointer";
					cleanup_mc.panel_mc.hint_mc.addEventListener("click", _onClickHintBtnCleanupActionFunc, false);
				}
				else
				{
					trace("Ошибка! Отсутствует cleanup_mc.panel_mc.hint_mc!");
				}
				/*
				
				*/
				if(cleanup_mc.panel_mc.counter_mc)
				{
					/*
					
					*/
					cleanup_mc.panel_mc.counter_mc.gotoAndStop(0);
					/*
					
					*/
					if(cleanup_mc.panel_mc.counter_mc.counter_mc)
					{
						cleanup_mc.panel_mc.counter_mc.counter_mc.gotoAndStop(0);
						cleanup_mc.panel_mc.counter_mc.counter_mc.gotoAndStop(_skippedGarbagesCleanupActionFunc());
					}
					else
					{
						trace("Ошибка! Отсутствует cleanup_mc.panel_mc.counter_mc.counter_mc!");
					}
				}
				else
				{
					trace("Ошибка! Отсутствует cleanup_mc.panel_mc.counter_mc!");
				}
			}
			else
			{
				trace("Ошибка! Отсутствует cleanup_mc.panel_mc!");
			}
			/*
			
			*/
			if(_information.cleanup.hasOwnProperty(_information.currentNameLocation))
			{
				for(var propGarbages in _information.cleanup[_information.currentNameLocation])
				{
					if(_information.cleanup[_information.currentNameLocation].hasOwnProperty(propGarbages))
					{
						/*
						
						*/
						_information.cleanup[_information.currentNameLocation][propGarbages].completed = false;
						/*
						
						*/
						if(cleanup_mc[propGarbages])
						{
							/*
							
							*/
							garbage_mc = cleanup_mc[propGarbages];
							garbage_mc.gotoAndStop(0);
							garbage_mc.name = propGarbages;
							garbage_mc.mouseEnabled = true;
							garbage_mc.mouseChildren = true;
							garbage_mc.cursor = "pointer";
							/*
							
							*/
							if(_information.cleanup[_information.currentNameLocation][propGarbages].startX === null)
							{
								_information.cleanup[_information.currentNameLocation][propGarbages].startX = garbage_mc.x;
							}
							if(_information.cleanup[_information.currentNameLocation][propGarbages].startY === null)
							{
								_information.cleanup[_information.currentNameLocation][propGarbages].startY = garbage_mc.y;
							}
							/*
							
							*/
							if(_information.cleanup[_information.currentNameLocation][propGarbages].action === "click")
							{
								garbage_mc.addEventListener("click", _onClickGarbageMcCleanupActionFunc, false);
							}
							else if(_information.cleanup[_information.currentNameLocation][propGarbages].action === "drag")
							{
								garbage_mc.addEventListener("mousedown", _onMouseDownGarbageMcCleanupActionFunc, false);
							}
							else
							{
								
							}
						}
					}
				}
			}
		}
		else
		{
			trace("Хде контейнер с уборкой?!");
		}
	}
	/*
	
	*/
	function _updateIndicatorCleanupActionFunc()
	{
		/*
		
		*/
		var currentScreen_mc = _main.getChildAt(0);
		var cleanup_mc = currentScreen_mc.body_mc["cleanup_" + (currentScreen_mc.body_mc.currentFrame + 1) + "_mc"];
		/*
		
		*/
		_information.locations[_information.currentNameLocation].actions[_information.locations[_information.currentNameLocation].currentNameAction].currentTime += 1;
		var share_num = (_information.locations[_information.currentNameLocation].actions[_information.locations[_information.currentNameLocation].currentNameAction].totalTime - _information.locations[_information.currentNameLocation].actions[_information.locations[_information.currentNameLocation].currentNameAction].currentTime) / _information.locations[_information.currentNameLocation].actions[_information.locations[_information.currentNameLocation].currentNameAction].totalTime;
		/*
		
		*/
		if(share_num < 0)
		{
			/*
			
			*/
			share_num = 0;
			/*
			
			*/
			if(_information.interval_id != null)
			{
				clearInterval(_information.interval_id);
			}
			/*
			
			*/
			cleanup_mc.window_mc.visible = true;
			cleanup_mc.window_mc.gotoAndStop("loss");
			cleanup_mc.window_mc.mouseEnabled = true;
			cleanup_mc.window_mc.mouseChildren = true;
			cleanup_mc.window_mc.cursor = "pointer";
			cleanup_mc.window_mc.addEventListener("click", _onClickWindowLossCleanupActionFunc, false);
			if(cleanup_mc.window_mc.loss_mc)
			{
				cleanup_mc.window_mc.loss_mc.gotoAndPlay(0);
			}
		}
		/*
		
		*/
		//cleanup_mc.panel_mc.indicator_mc.indicator_mc.scaleX = share_num;
		TweenLite.to(cleanup_mc.panel_mc.indicator_mc.indicator_mc, 1, {scaleX:share_num});
	}
	function _onClickWindowLossCleanupActionFunc(event)
	{
		/*
		
		*/
		_soundManager.addSoundFunc("click_sound", 0, 0, 0, 1, _soundManager.panFromStageFunc(_stage.mouseX, _CWIDTH));
		/*
		
		*/
		_animationTransitionBetweenScenesFunc(_questFunc, _information.locations[_information.currentNameLocation].actions[_information.locations[_information.currentNameLocation].currentNameAction].delay, 1, null, true);
	}
	/*
	
	*/
	function _onClickHintBtnCleanupActionFunc(event)
	{
		/*
		
		*/
		var currentScreen_mc = _main.getChildAt(0);
		var cleanup_mc = currentScreen_mc.body_mc["cleanup_" + (currentScreen_mc.body_mc.currentFrame + 1) + "_mc"];
		var garbage_mc;
		/*
		
		*/
		for(var propGarbages in _information.cleanup[_information.currentNameLocation])
		{
			if(_information.cleanup[_information.currentNameLocation].hasOwnProperty(propGarbages))
			{
				if(!_information.cleanup[_information.currentNameLocation][propGarbages].completed)
				{
					if(cleanup_mc[propGarbages])
					{
						garbage_mc = cleanup_mc[propGarbages];
						//new Edapskov_Flickering(_before, garbage_mc, ["#ffffff", "#ffffcc"], 5, 18);
						TweenLite.to(garbage_mc, _DELAY / 2, {alpha:0.1, delay:0, ease:Cubic.easeInOut, onComplete:_onCompleteShowHintsCleanupActionFunc, onCompleteParams:[garbage_mc]});
					}
				}
			}
		}
	}
	function _onCompleteShowHintsCleanupActionFunc(garbage_mc)
	{
		TweenLite.to(garbage_mc, _DELAY / 2, {alpha:1, delay:0, ease:Cubic.easeInOut});
	}
	/*
	
	*/
	function _onClickGarbageMcCleanupActionFunc(event)
	{
		/*
		
		*/
		var currentScreen_mc = _main.getChildAt(0);
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
		var garbage_mc = event.currentTarget;
		var garbage_str = String(garbage_mc.name);
		garbage_mc.mouseEnabled = false;
		garbage_mc.mouseChildren = false;
		garbage_mc.cursor = "default";
		garbage_mc.removeEventListener("click", _onClickGarbageMcCleanupActionFunc, false);
		/*
		
		*/
		if(garbage_mc.totalFrames == 2)
		{
			garbage_mc.gotoAndStop(1);
		}
		else
		{
			garbage_mc.play();
		}
		/*
		
		*/
		if(_information.cleanup[_information.currentNameLocation][garbage_str].startFunc !== null)
		{
			_information.cleanup[_information.currentNameLocation][garbage_str].startFunc();
		}
		/*
		
		*/
		_updateCleanupActionFunc(garbage_str);
	}
	/*
	
	*/
	function _onMouseDownGarbageMcCleanupActionFunc(event)
	{
		/*
		
		*/
		var currentScreen_mc = _main.getChildAt(0);
		var cleanup_mc = currentScreen_mc.body_mc["cleanup_" + (currentScreen_mc.body_mc.currentFrame + 1) + "_mc"];
		/*
		
		*/
		cleanup_mc.mouseEnabled = false;
		cleanup_mc.mouseChildren = false;
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
		var garbage_mc = event.currentTarget;
		var garbage_str = String(garbage_mc.name);
		garbage_mc.mouseEnabled = false;
		garbage_mc.mouseChildren = false;
		garbage_mc.cursor = "default";
		garbage_mc.visible = false;
		garbage_mc.removeEventListener("mousedown", _onMouseDownGarbageMcCleanupActionFunc, false);
		/*
		
		*/
		_information.dragShape = garbage_str;
		/*
		
		*/
		if(_information.cleanup[_information.currentNameLocation][garbage_str].startFunc !== null)
		{
			_information.cleanup[_information.currentNameLocation][garbage_str].startFunc();
		}
		/*
		
		*/
		garbage_mc = new lib[garbage_str + "_mc"]();
		cleanup_mc.container_mc.addChild(garbage_mc);
		garbage_mc.gotoAndStop(0);
		garbage_mc.gotoAndStop(1);
		garbage_mc.name = garbage_str;
		garbage_mc.mouseEnabled = false;
		garbage_mc.mouseChildren = false;
		var point_obj = cleanup_mc.container_mc.globalToLocal(_stage.mouseX, _stage.mouseY);
		garbage_mc.x = point_obj.x;
		garbage_mc.y = point_obj.y;
		/*
		
		*/
		_stage.addEventListener("stagemouseup", _onStageMouseUpGarbageMcCleanupActionFunc, false);
		_stage.addEventListener("stagemousemove", _onStageMouseMoveGarbageMcCleanupActionFunc, false);
	}
	function _onStageMouseUpGarbageMcCleanupActionFunc(event)
	{
		/*
		
		*/
		var currentScreen_mc = _main.getChildAt(0);
		var cleanup_mc = currentScreen_mc.body_mc["cleanup_" + (currentScreen_mc.body_mc.currentFrame + 1) + "_mc"];
		var garbage_mc = cleanup_mc[_information.dragShape];
		var dragGarbage_mc = cleanup_mc.container_mc.getChildByName(_information.dragShape);
		var hitArea_mc;
		/*
		
		*/
		_stage.removeEventListener("stagemouseup", _onStageMouseUpGarbageMcCleanupActionFunc, false);
		_stage.removeEventListener("stagemousemove", _onStageMouseMoveGarbageMcCleanupActionFunc, false);
		/*
		
		*/
		if(_information.cleanup[_information.currentNameLocation][_information.dragShape].hitArea !== null)
		{
			if(cleanup_mc[_information.cleanup[_information.currentNameLocation][_information.dragShape].hitArea])
			{
				/*
				
				*/
				hitArea_mc = cleanup_mc[_information.cleanup[_information.currentNameLocation][_information.dragShape].hitArea];
				hitArea_mc.gotoAndStop(0);
				var point_obj = hitArea_mc.globalToLocal(_stage.mouseX, _stage.mouseY);
				/*
				
				*/
				if(hitArea_mc.hitTest(point_obj.x, point_obj.y))
				{
					/*
					
					*/
					cleanup_mc.mouseEnabled = true;
					cleanup_mc.mouseChildren = true;
					/*
					
					*/
					garbage_mc.visible = true;
					garbage_mc.gotoAndStop(2);
					garbage_mc.x = hitArea_mc.x;
					garbage_mc.y = hitArea_mc.y;
					/*
					
					*/
					_clearContainerFunc(cleanup_mc.container_mc);
					/*
					
					*/
					_updateCleanupActionFunc(_information.dragShape);
				}
				else
				{
					TweenLite.to(dragGarbage_mc, _DELAY / 4, {x:_information.cleanup[_information.currentNameLocation][_information.dragShape].startX, y:_information.cleanup[_information.currentNameLocation][_information.dragShape].startY, delay:0, ease:Cubic.easeInOut, onComplete:_onFinishUnsuccessfulDragGarbageMcCleanupActionFunc});
				}
			}
		}
	}
	function _onFinishUnsuccessfulDragGarbageMcCleanupActionFunc()
	{
		/*
		
		*/
		var currentScreen_mc = _main.getChildAt(0);
		var cleanup_mc = currentScreen_mc.body_mc["cleanup_" + (currentScreen_mc.body_mc.currentFrame + 1) + "_mc"];
		/*
		
		*/
		cleanup_mc.mouseEnabled = true;
		cleanup_mc.mouseChildren = true;
		/*
		
		*/
		var garbage_mc = cleanup_mc[_information.dragShape];
		garbage_mc.gotoAndStop(0);
		garbage_mc.mouseEnabled = true;
		garbage_mc.mouseChildren = true;
		garbage_mc.cursor = "pointer";
		garbage_mc.visible = true;
		garbage_mc.addEventListener("mousedown", _onMouseDownGarbageMcCleanupActionFunc, false);
		/*
		
		*/
		_clearContainerFunc(cleanup_mc.container_mc);
	}
	function _onStageMouseMoveGarbageMcCleanupActionFunc(event)
	{
		if(_information.dragShape !== null)
		{
			/*
			
			*/
			var currentScreen_mc = _main.getChildAt(0);
			var cleanup_mc = currentScreen_mc.body_mc["cleanup_" + (currentScreen_mc.body_mc.currentFrame + 1) + "_mc"];
			/*
			
			*/
			var garbage_mc = cleanup_mc.container_mc.getChildByName(_information.dragShape);
			var point_obj = cleanup_mc.container_mc.globalToLocal(_stage.mouseX, _stage.mouseY);
			garbage_mc.x = point_obj.x;
			garbage_mc.y = point_obj.y;
		}
	}
	/*
	
	*/
	function _updateCleanupActionFunc(garbage_str)
	{
		/*
		
		*/
		if(garbage_str === undefined)
		{
			trace("Нет переменной garbage_str в функции _updateCleanupActionFunc!");
		}
		else
		{
			garbage_str = String(garbage_str);
		}
		/*
		
		*/
		_information.dragShape == null;
		/*
		
		*/
		if(_information.cleanup[_information.currentNameLocation][garbage_str].completedFunc !== null)
		{
			_information.cleanup[_information.currentNameLocation][garbage_str].completedFunc();
		}
		if(_information.cleanup[_information.currentNameLocation][garbage_str].completedSound !== null)
		{
			_soundManager.addSoundFunc(_information.cleanup[_information.currentNameLocation][garbage_str].completedSound, 0, 0, 0, 1, _soundManager.panFromStageFunc(_stage.mouseX, _CWIDTH));
		}
		_information.cleanup[_information.currentNameLocation][garbage_str].completed = true;
		/*
		
		*/
		var skippedGarbages_num = _skippedGarbagesCleanupActionFunc();
		/*
		
		*/
		var currentScreen_mc = _main.getChildAt(0);
		var cleanup_mc = currentScreen_mc.body_mc["cleanup_" + (currentScreen_mc.body_mc.currentFrame + 1) + "_mc"];
		/*
		
		*/
		if(cleanup_mc.panel_mc)
		{
			if(cleanup_mc.panel_mc.counter_mc)
			{
				if(cleanup_mc.panel_mc.counter_mc.counter_mc)
				{
					cleanup_mc.panel_mc.counter_mc.counter_mc.gotoAndStop(skippedGarbages_num);
				}
			}
		}
		/*
		
		*/
		var flashAnimation_mc = new lib.FlashAnimation();
		_before.addChild(flashAnimation_mc);
		flashAnimation_mc.gotoAndStop(0);
		var point_obj = _before.globalToLocal(_stage.mouseX, _stage.mouseY);
		flashAnimation_mc.x = point_obj.x;
		flashAnimation_mc.y = point_obj.y;
		/*
		
		*/
		if(skippedGarbages_num <= 0)
		{
			/*
			
			*/
			_soundManager.addSoundFunc("win_sound", 0, 0, 0, 1, 0);
			/*
			
			*/
			if(_information.interval_id != null)
			{
				clearInterval(_information.interval_id);
			}
			/*
			
			*/
			cleanup_mc.window_mc.visible = true;
			cleanup_mc.window_mc.gotoAndStop("win");
			cleanup_mc.window_mc.mouseEnabled = true;
			cleanup_mc.window_mc.mouseChildren = true;
			if(cleanup_mc.window_mc.win_mc)
			{
				cleanup_mc.window_mc.win_mc.gotoAndPlay(0);
			}
			/*
			
			*/
			if(!currentScreen_mc.next_btn.visible)
			{
				currentScreen_mc.next_btn.visible = true;
				currentScreen_mc.next_btn.alpha = 0.01;
				TweenLite.to(currentScreen_mc.next_btn, _DELAY / 2, {alpha:1});
				currentScreen_mc.next_btn.addEventListener("click", _onClickNextBtnAfterLocationFunc, false);
			}
		}
	}
	function _skippedGarbagesCleanupActionFunc()
	{
		/*
		
		*/
		var skipped_num = 0;
		/*
		
		*/
		for(var propGarbages in _information.cleanup[_information.currentNameLocation])
		{
			if(_information.cleanup[_information.currentNameLocation].hasOwnProperty(propGarbages))
			{
				if(!_information.cleanup[_information.currentNameLocation][propGarbages].completed)
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
	============================================================
	quiz action
	============================================================
	*/
	function _beginQuizActionFunc(replay_bool)
	{
		/*
		
		*/
		if(replay_bool === undefined)
		{
			replay_bool = false;
		}
		else
		{
			replay_bool = Boolean(replay_bool);
		}
		/*
		
		*/
		if(!_information.hasOwnProperty("answerQuiz"))
		{
			_information.answerQuiz = 0;
		}
		else
		{
			_information.answerQuiz = 0;
		}
		/*
		
		*/
		var currentScreen_mc = _main.getChildAt(0);
		/*
		
		*/
		var quiz_mc = currentScreen_mc.body_mc["quiz_" + (currentScreen_mc.body_mc.currentFrame + 1) + "_mc"];
		quiz_mc.gotoAndStop(0);
		quiz_mc.gotoAndStop("question");
		quiz_mc.mouseEnabled = false;
		quiz_mc.mouseChildren = false;
		quiz_mc.cursor = "default";
		/*
		
		*/
		if(replay_bool)
		{
			quiz_mc.gotoAndStop("answer");
		}
		/*
		
		*/
		_updateQuestionsQuizActionFunc(true);
	}
	function _updateQuestionsQuizActionFunc(flag_bool)
	{
		/*
		
		*/
		if(flag_bool === undefined)
		{
			flag_bool = true;
		}
		else
		{
			flag_bool = Boolean(flag_bool);
		}
		/*
		
		*/
		var object_mc;
		var i = 0;
		var l = _information.locations[_information.currentNameLocation].actions[_information.locations[_information.currentNameLocation].currentNameAction].pathObject.length;
		/*
		
		*/
		while(i < l)
		{
			/*
			
			*/
			object_mc = _getObjectFunc(_information.locations[_information.currentNameLocation].actions[_information.locations[_information.currentNameLocation].currentNameAction].pathObject[i], true);
			object_mc.gotoAndStop(0);
			object_mc.name = _information.locations[_information.currentNameLocation].actions[_information.locations[_information.currentNameLocation].currentNameAction].pathObject[i];
			/*
			
			*/
			if(flag_bool)
			{
				object_mc.mouseEnabled = true;
				object_mc.mouseChildren = true;
				object_mc.cursor = "pointer";
				object_mc.addEventListener("click", _onClickObjectMcQuizActionFunc, false);
			}
			else
			{
				object_mc.mouseEnabled = false;
				object_mc.mouseChildren = false;
				object_mc.cursor = "default";
				object_mc.removeEventListener("click", _onClickObjectMcQuizActionFunc, false);
			}
			/*
			
			*/
			i++;
		}
	}
	function _onClickObjectMcQuizActionFunc(event)
	{
		/*
		
		*/
		_soundManager.addSoundFunc("click_sound", 0, 0, 0, 1, _soundManager.panFromStageFunc(_stage.mouseX, _CWIDTH));
		/*
		
		*/
		var currentScreen_mc = _main.getChildAt(0);
		var current_mc = event.currentTarget;
		/*
		
		*/
		var quiz_mc = currentScreen_mc.body_mc["quiz_" + (currentScreen_mc.body_mc.currentFrame + 1) + "_mc"];
		quiz_mc.gotoAndStop("answer");
		/*
		
		*/
		_updateQuestionsQuizActionFunc(false);
		/*
		
		*/
		var gravityExplosion_mc = new lib.GravityExplosionMC();
		_before.addChild(gravityExplosion_mc);
		gravityExplosion_mc.gotoAndStop(0);
		var point_obj = _before.globalToLocal(_stage.mouseX, _stage.mouseY);
		gravityExplosion_mc.x = point_obj.x;
		gravityExplosion_mc.y = point_obj.y;
		/*
		
		*/
		var tempArray_arr = current_mc.name.split("_");
		_information.answerQuiz = Number(tempArray_arr[1]);
		/*
		
		*/
		if(_information.timeout_id != null)
		{
			clearTimeout(_information.timeout_id);
		}
		_information.timeout_id = setTimeout(_answerQuizActionFunc, 1000);
	}
	function _answerQuizActionFunc()
	{
		/*
		
		*/
		if(_information.timeout_id != null)
		{
			clearTimeout(_information.timeout_id);
		}
		/*
		
		*/
		var currentScreen_mc = _main.getChildAt(0);
		var quiz_mc = currentScreen_mc.body_mc["quiz_" + (currentScreen_mc.body_mc.currentFrame + 1) + "_mc"];
		/*
		
		*/
		if(_information.answerQuiz > 0)
		{
			quiz_mc.gotoAndStop("correctly");
		}
		else
		{
			quiz_mc.gotoAndStop("incorrectly");
		}
		/*
		
		*/
		quiz_mc.mouseEnabled = true;
		quiz_mc.mouseChildren = true;
		quiz_mc.cursor = "pointer";
		quiz_mc.addEventListener("click", _onClickQuizMcQuizActionFunc, false);
	}
	function _onClickQuizMcQuizActionFunc(event)
	{
		/*
		
		*/
		_soundManager.addSoundFunc("click_sound", 0, 0, 0, 1, _soundManager.panFromStageFunc(_stage.mouseX, _CWIDTH));
		/*
		
		*/
		var currentScreen_mc = _main.getChildAt(0);
		var quiz_mc = event.currentTarget;
		quiz_mc.mouseEnabled = false;
		quiz_mc.mouseChildren = false;
		quiz_mc.cursor = "default";
		quiz_mc.removeEventListener("click", _onClickQuizMcQuizActionFunc, false);
		/*
		
		*/
		if(_information.answerQuiz > 0)
		{
			_updateCurrentActionFunc();
		}
		else
		{
			_beginQuizActionFunc(true);
		}
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
			_soundManager.addSoundFunc(_information.locations[_information.currentNameLocation].actions[_information.locations[_information.currentNameLocation].currentNameAction].addCompletedSound, 0, 0, 0, 0.1, 0);
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
		if(_information.interval_id != null)
		{
			clearInterval(_information.interval_id);
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
			_information.locations[_information.currentNameLocation].completed = true;
			_information.targetLocation++;
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
		_soundManager.addSoundFunc("click_sound", 0, 0, 0, 1, _soundManager.panFromStageFunc(_stage.mouseX, _CWIDTH));
		/*
		
		*/
		var current_btn = event.currentTarget;
		current_btn.visible = false;
		current_btn.removeEventListener("click", _onClickNextBtnAfterLocationFunc, false);
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
		if(_information.interval_id != null)
		{
			clearInterval(_information.interval_id);
		}
		/*
		
		*/
		_soundManager.addSoundFunc("click_sound", 0, 0, 0, 1, _soundManager.panFromStageFunc(_stage.mouseX, _CWIDTH));
		/*
		
		*/
		var current_btn = event.currentTarget;
		current_btn.visible = false;
		current_btn.removeEventListener("click", _onClickSkipBtnFunc, false);
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
								if(container_mc[propObject])
								{
									option_mc = container_mc[propObject];
									option_mc.gotoAndStop(frame_num - 1);
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
								}
								/*
								
								*/
								if(propObject == "wings")
								{
									if(container_mc["wings_" + propHero])
									{
										container_mc["wings_" + propHero].gotoAndStop(frame_num - 1);
									}
									if(container_mc["wings_" + hero_str])
									{
										container_mc["wings_" + hero_str].gotoAndStop(frame_num - 1);
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
			currentScreen_mc.facebook_btn.alpha = 0.01;
			TweenLite.to(currentScreen_mc.facebook_btn, _DELAY, {alpha:1, delay:0, ease:Cubic.easeInOut});
			currentScreen_mc.facebook_btn.addEventListener("click", _onClickFacebookBtnFunc, false);
		}
		/*
		
		*/
		if(currentScreen_mc.moreGames_btn)
		{
			currentScreen_mc.moreGames_btn.cursor = "pointer";
			currentScreen_mc.moreGames_btn.alpha = 0.01;
			TweenLite.to(currentScreen_mc.moreGames_btn, _DELAY, {alpha:1, delay:_DELAY * 0.5, ease:Cubic.easeInOut});
			currentScreen_mc.moreGames_btn.addEventListener("click", _onClickMoreGamesBtnFunc, false);
		}
		/*
		
		*/
		if(currentScreen_mc.banner_1_mc)
		{
			currentScreen_mc.banner_1_mc.cursor = "pointer";
			currentScreen_mc.banner_1_mc.alpha = 0.01;
			TweenLite.to(currentScreen_mc.banner_1_mc, _DELAY, {alpha:1, delay:_DELAY * 1.0, ease:Cubic.easeInOut});
			currentScreen_mc.banner_1_mc.addEventListener("click", _onClickBannerMcFunc_1, false);
		}
		if(currentScreen_mc.banner_2_mc)
		{
			currentScreen_mc.banner_2_mc.cursor = "pointer";
			currentScreen_mc.banner_2_mc.alpha = 0.01;
			TweenLite.to(currentScreen_mc.banner_2_mc, _DELAY, {alpha:1, delay:_DELAY * 1.0, ease:Cubic.easeInOut});
			currentScreen_mc.banner_2_mc.addEventListener("click", _onClickBannerMcFunc_2, false);
		}
		/*
		
		*/
		if(currentScreen_mc.freeGames_mc)
		{
			currentScreen_mc.freeGames_mc.alpha = 0.01;
			TweenLite.to(currentScreen_mc.freeGames_mc, _DELAY, {alpha:1, delay:_DELAY * 1.5, ease:Cubic.easeInOut});
			currentScreen_mc.freeGames_mc.addEventListener("click", _onClickFreeGamesMcFunc, false);
		}
		/*
		
		*/
		if(currentScreen_mc.photo_btn)
		{
			currentScreen_mc.photo_btn.alpha = 0.01;
			TweenLite.to(currentScreen_mc.photo_btn, _DELAY, {alpha:1, delay:_DELAY * 1.0, ease:Cubic.easeInOut});
			currentScreen_mc.photo_btn.addEventListener("click", _onClickPhotoBtnFunc, false);
		}
		/*
		
		*/
		currentScreen_mc.playAgain_btn.alpha = 0.01;
		TweenLite.to(currentScreen_mc.playAgain_btn, _DELAY, {alpha:1, delay:_DELAY * 1.5, ease:Cubic.easeInOut});
		currentScreen_mc.playAgain_btn.addEventListener("click", _onClickPlayBtnFunc, false);
		/*
		
		*/
		//_updateHeroesFunc(currentScreen_mc.photoContainer_mc);
		/*
		исключения
		*/
		currentScreen_mc.photoContainer_mc.heroes_mc.gotoAndStop(0);
		_updateHeroesFunc(currentScreen_mc.photoContainer_mc.heroes_mc);
		if(currentScreen_mc.photoContainer_mc.heroes_mc.container_1)
		{
			_updateHeroesFunc(currentScreen_mc.photoContainer_mc.heroes_mc.container_1);
		}
		if(currentScreen_mc.photoContainer_mc.heroes_mc.container_2)
		{
			_updateHeroesFunc(currentScreen_mc.photoContainer_mc.heroes_mc.container_2);
		}
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
		
		*/
		_createPanelFiltersFunc();
		/*
		
		*/
		if(currentScreen_mc.photoContainer_mc.bg)
		{
			currentScreen_mc.photoContainer_mc.bg.cache(-(_BGWIDTH - _CWIDTH) / 2, 0, _BGWIDTH, _CHEIGHT);
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
	исключения
	*/
	function _onMouseOverNavigationMcBackgroundsFunc(event)
	{
		var current_mc = event.currentTarget;
		TweenLite.to(current_mc, _DELAY / 5, {scaleX:1.1, scaleY:1.1});
	}
	function _onMouseOutNavigationMcBackgroundsFunc(event)
	{
		var current_mc = event.currentTarget;
		TweenLite.to(current_mc, _DELAY / 3, {scaleX:1, scaleY:1});
	}
	function _onClickPrevNavigationMcBackgroundsFunc(event)
	{
		/*
		
		*/
		_soundManager.addSoundFunc("click_sound", 0, 0, 0, 1, _soundManager.panFromStageFunc(_stage.mouseX, _CWIDTH));
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
		if(currentScreen_mc.photoContainer_mc.heroes_mc.container_1)
		{
			_updateHeroesFunc(currentScreen_mc.photoContainer_mc.heroes_mc.container_1);
		}
		if(currentScreen_mc.photoContainer_mc.heroes_mc.container_2)
		{
			_updateHeroesFunc(currentScreen_mc.photoContainer_mc.heroes_mc.container_2);
		}
		/*
		
		*/
		_updateFilterFunc(currentScreen_mc.photoContainer_mc.heroes_mc, _information.currentFilter);
	}
	function _onClickNextNavigationMcBackgroundsFunc(event)
	{
		/*
		
		*/
		_soundManager.addSoundFunc("click_sound", 0, 0, 0, 1, _soundManager.panFromStageFunc(_stage.mouseX, _CWIDTH));
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
		if(currentScreen_mc.photoContainer_mc.heroes_mc.container_1)
		{
			_updateHeroesFunc(currentScreen_mc.photoContainer_mc.heroes_mc.container_1);
		}
		if(currentScreen_mc.photoContainer_mc.heroes_mc.container_2)
		{
			_updateHeroesFunc(currentScreen_mc.photoContainer_mc.heroes_mc.container_2);
		}
		/*
		
		*/
		_updateFilterFunc(currentScreen_mc.photoContainer_mc.heroes_mc, _information.currentFilter);
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
	function _createPanelFiltersFunc()
	{
		/*
		
		*/
		var currentScreen_mc = _main.getChildAt(0);
		var filters_mc;
		/*
		
		*/
		if(currentScreen_mc.filters_animation_mc)
		{
			/*
			
			*/
			currentScreen_mc.filters_animation_mc.gotoAndStop(0);
			/*
			
			*/
			if(currentScreen_mc.filters_animation_mc.filters_container_mc)
			{
				/*
				
				*/
				currentScreen_mc.filters_animation_mc.filters_container_mc.gotoAndStop(0);
				/*
				
				*/
				if(currentScreen_mc.filters_animation_mc.filters_container_mc.filters_mc)
				{
					/*
					
					*/
					_information.currentFilter = 0;
					/*
					
					*/
					filters_mc = currentScreen_mc.filters_animation_mc.filters_container_mc.filters_mc;
					filters_mc.gotoAndStop(0);
					filters_mc.setValueFunc(_information.currentFilter);
					filters_mc.addEventListener("change_radio_button", _onChangeRadioButtonFiltersFunc, false);
					/*
					
					*/
					if(currentScreen_mc.filters_animation_mc.filters_container_mc.open_mc)
					{
						currentScreen_mc.filters_animation_mc.filters_container_mc.open_mc.visible = true;
						currentScreen_mc.filters_animation_mc.filters_container_mc.open_mc.mouseEnabled = true;
						currentScreen_mc.filters_animation_mc.filters_container_mc.open_mc.mouseChildren = false;
						currentScreen_mc.filters_animation_mc.filters_container_mc.open_mc.cursor = "pointer";
						currentScreen_mc.filters_animation_mc.filters_container_mc.open_mc.addEventListener("click", _onClickOpenFiltersMcFunc, false);
					}
					/*
					
					*/
					if(currentScreen_mc.filters_animation_mc.filters_container_mc.exit_mc)
					{
						currentScreen_mc.filters_animation_mc.filters_container_mc.exit_mc.visible = false;
						currentScreen_mc.filters_animation_mc.filters_container_mc.exit_mc.mouseEnabled = true;
						currentScreen_mc.filters_animation_mc.filters_container_mc.exit_mc.mouseChildren = false;
						currentScreen_mc.filters_animation_mc.filters_container_mc.exit_mc.cursor = "pointer";
						currentScreen_mc.filters_animation_mc.filters_container_mc.exit_mc.addEventListener("click", _onClickExitFiltersMcFunc, false);
					}
				}
			}
		}
	}
	function _onChangeRadioButtonFiltersFunc(event)
	{
		/*
		
		*/
		_soundManager.addSoundFunc("click_sound", 0, 0, 0, 0.2, _soundManager.panFromStageFunc(_stage.mouseX, _CWIDTH));
		/*
		
		*/
		var currentScreen_mc = _main.getChildAt(0);
		/*
		
		*/
		var filter_num = event.numberValue;
		_information.currentFilter = filter_num;
		/*
		
		*/
		_updateFilterFunc(currentScreen_mc.photoContainer_mc.heroes_mc, _information.currentFilter);
	}
	function _updateFilterFunc(container_mc, filter_num)
	{
		/*
		
		*/
		if(filter_num !== undefined)
		{
			if(filter_num !== null)
			{
				filter_num = Number(filter_num);
			}
			else
			{
				filter_num = 0;
			}
		}
		else
		{
			filter_num = 0;
		}
		/*
		
		*/
		var matrix;
		var filter_obj;
		/*
		
		*/
		if(filter_num == 1)
		{
			/*
			matrix = new createjs.ColorMatrix().adjustSaturation(-100);
			filter_obj = new createjs.ColorMatrixFilter(matrix);
			container_mc.filters = [filter_obj];
			*/
			filter_obj = new createjs.ColorMatrixFilter([0.30, 0.30, 0.30, 0, 0, 0.30, 0.30, 0.30, 0, 0, 0.30, 0.30, 0.30, 0, 0, 0, 0, 0, 1, 0]);
			container_mc.filters = [filter_obj];
		}
		else if(filter_num == 2)
		{
			filter_obj = new createjs.ColorMatrixFilter([0.39, 0.77, 0.19, 0, 0, 0.35, 0.68, 0.17, 0, 0, 0.27, 0.53, 0.13, 0, 0, 0, 0, 0, 1, 0]);
			container_mc.filters = [filter_obj];
		}
		else if(filter_num == 3)
		{
			filter_obj = new createjs.ColorFilter(1, 1, 0, 1, 0, 0, 128, 0);
			container_mc.filters = [filter_obj];
		}
		else
		{
			container_mc.filters = [];
		}
		/*
		
		*/
		var bounds_obj = container_mc.getBounds();
		if(container_mc.bitmapCache)
		{
			container_mc.updateCache();
		}
		else
		{
			container_mc.cache(bounds_obj.x, bounds_obj.y, bounds_obj.width, bounds_obj.height);
		}
	}
	function _onClickOpenFiltersMcFunc(event)
	{
		/*
		
		*/
		_soundManager.addSoundFunc("click_sound", 0, 0, 0, 0.2, _soundManager.panFromStageFunc(_stage.mouseX, _CWIDTH));
		/*
		
		*/
		var currentScreen_mc = _main.getChildAt(0);
		/*
		
		*/
		currentScreen_mc.filters_animation_mc.filters_container_mc.open_mc.visible = false;
		currentScreen_mc.filters_animation_mc.filters_container_mc.exit_mc.visible = true;
		/*
		
		*/
		currentScreen_mc.filters_animation_mc.gotoAndPlay("open");
	}
	function _onClickExitFiltersMcFunc(event)
	{
		/*
		
		*/
		_soundManager.addSoundFunc("click_sound", 0, 0, 0, 0.2, _soundManager.panFromStageFunc(_stage.mouseX, _CWIDTH));
		/*
		
		*/
		var currentScreen_mc = _main.getChildAt(0);
		/*
		
		*/
		currentScreen_mc.filters_animation_mc.filters_container_mc.open_mc.visible = true;
		currentScreen_mc.filters_animation_mc.filters_container_mc.exit_mc.visible = false;
		/*
		
		*/
		currentScreen_mc.filters_animation_mc.gotoAndPlay("exit");
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
			/*
			
			*/
			currentScreen_mc.photoContainer_mc.logo_btn.visible = false;
			_updateVisibleDisplayObjectFunc(currentScreen_mc);
			/*
			
			*/
			_addAdsFunc();
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
		if(photoContainer_mc.heroes_mc.container_1)
		{
			_updateHeroesFunc(photoContainer_mc.heroes_mc.container_1);
		}
		if(photoContainer_mc.heroes_mc.container_2)
		{
			_updateHeroesFunc(photoContainer_mc.heroes_mc.container_2);
		}
		/*
		
		*/
		_updateFilterFunc(photoContainer_mc.heroes_mc, _information.currentFilter);
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
		event.currentTarget.removeEventListener("click", _onClickCopyrightScreenFunc, false);
		/*
		
		*/
		_soundManager.addSoundFunc("click_sound", 0, 0, 0, 1, _soundManager.panFromStageFunc(_stage.mouseX, _CWIDTH));
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
		event.currentTarget.removeEventListener("click", _onClickRemoveBtnSimpleScreenFunc, false);
		/*
		
		*/
		_soundManager.addSoundFunc("click_sound", 0, 0, 0, 1, _soundManager.panFromStageFunc(_stage.mouseX, _CWIDTH));
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
		TweenLite.to(_shadowScreen.getChildByName("shadowContainer"), time_num, {alpha:1, delay:delayTime_num, ease:Cubic.easeInOut, onComplete:_onMidNonAnimatedTransitionBetweenScenesFunc, onCompleteParams:[func, time_num, arrayParams_arr]});
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
		TweenLite.to(_shadowScreen.getChildByName("shadowContainer"), time_num, {alpha:0.01, ease:Cubic.easeInOut, onComplete:_onFinishTransitionBetweenScenesFunc});
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
		if(_cursor !== undefined)
		{
			if(_cursor.visible)
			{
				var point = _cursor.parent.globalToLocal(_stage.mouseX, _stage.mouseY);
				_cursor.x = point.x;
				_cursor.y = point.y;
			}
		}
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
		if(_cursor["body"])
		{
			animation_mc = _cursor["body"];
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
	function _onStageMouseDownFunc(event)
	{
		_cursor.alpha = 1;
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
		try
		{
			if(ysdk_obj)
			{
				/*
				
				*/
				_stopAppFunc();
				/*
				
				*/
				ysdk_obj.adv.showFullscreenAdv();
			}
		}
		catch(event)
		{
			/*
			
			*/
			trace(event, 1);
			/*
			
			*/
			_playAppFunc();
		}
		finally
		{
			
		}
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
	function _openLocFunc_1_5()
	{
		_information.currentNameHero = "hero_3";
		_information.heroes[_information.currentNameHero].currentSet = "set_1";
	}
	function _openLocFunc_1_6()
	{
		_information.currentNameHero = "hero_3";
		_information.heroes[_information.currentNameHero].currentSet = "set_6";
	}
	/*
	
	*/
	function _onClickPreloaderBtnFunc(event)
	{
		window.open(_LINKTOGAME + "?utm_source=" + window.location.href + "&utm_medium=game_referral|preloader&utm_content=simple&utm_campaign=" + _TITLE, "_blank");
	}
	function _onClickLogoBtnFunc(event)
	{
		window.open(_LINKTOGAME + "?utm_source=" + window.location.href + "&utm_medium=game_referral|logo&utm_content=simple&utm_campaign=" + _TITLE, "_blank");
	}
	function _onClickBannerMcFunc_1(event)
	{
		window.open("https://dl-girls.com/index.php?controller=article&action=index&id=2227" + "&utm_source=" + window.location.href + "&utm_medium=game_referral|game&utm_content=simple&utm_campaign=" + _TITLE, "_blank");
	}
	function _onClickBannerMcFunc_2(event)
	{
		window.open("https://dl-girls.com/index.php?controller=article&action=index&id=2172" + "&utm_source=" + window.location.href + "&utm_medium=game_referral|game&utm_content=simple&utm_campaign=" + _TITLE, "_blank");
	}
	function _onClickFreeGamesMcFunc(event)
	{
		window.open("https://dl-girls.com/index.php?controller=free&action=index&utm_source=" + window.location.href + "&utm_medium=game_referral|free&utm_content=simple&utm_campaign=" + _TITLE, "_blank");
	}
	function _onClickFacebookBtnFunc(event)
	{
		window.open("", '_blank');
	}
	function _onClickMoreGamesBtnFunc(event)
	{
		window.open(_LINKTOGAME + "?utm_source=" + window.location.href + "&utm_medium=game_referral|game&utm_content=simple&utm_campaign=" + _TITLE, "_blank");
	}
	/*
	ссылочка на разработчиков
	*/
	function _onClickCopyrightMenuItemFunc(event)
	{
		window.open("http://dlstudio.edapskov.ru", '_blank');
	}
}