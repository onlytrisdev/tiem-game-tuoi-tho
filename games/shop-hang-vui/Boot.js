///<reference path='src/tsLib/EcmaScript.d.ts' />
var CCConfig = (function () {
    function CCConfig() {
        this.COCOS2D_DEBUG = 2; //0 to turn debug off, 1 for basic debug, and 2 for full debug
        this.box2d = false;
        this.chipmunk = false;
        this.showFPS = true;
        this.loadExtension = true;
        this.frameRate = 30;
        this.tag = 'gameCanvas'; //the dom element to run cocos2d on
        //    engineDir = 'http://192.168.189.1/html5/cocos2d/cocos2d-html5/tags/Cocos2d-html5-v2.2.2/cocos2d/';
        //    engineDir = 'http://192.168.189.1/jijie/Cocos2d-html5-v2.2.2/cocos2d/';
        //        engineDir='http://www.cocos2d-x.org/html5-samples/cocos2d/';
        //    engineDir = 'cocos2d/';
        this.engineDir = null;
        this.SingleEngineFile = 'jsLib/Cocos2d-html5-v2.2.2.min.js';
        //    SingleEngineFile = null;
        this.renderMode = 1;
        this.appFilesMin = [
            'jsLib/howler.js',
            'jsLib/platformTx.js',
            'jsLib/TweenMax.min.js',
            'jsLib/EasePack.min.js',
            'jsLib/SimpleAudioEngine.js',
            'sh.min.js'
        ];
        this.appFilesAll = [
            'jsLib/howler.js',
            'jsLib/platformTx.js',
            'jsLib/SimpleAudioEngine.js',
            'jsLib/TweenMax.min.js',
            'jsLib/EasePack.min.js',
            'src/timonxue/utils/Dictionary.js',
            'src/timonxue/utils/DictionaryEx.js',
            'src/TweenMax/ZTweenMax.js',
            'src/timonxue/events/EventDispatcher.js',
            'src/timonxue/events/Event.js',
            'src/timonxue/filter/AbstractFilter.js',
            'src/timonxue/filter/GlowFilter.js',
            'src/timonxue/filter/BlurFilter.js',
            'src/timonxue/filter/ColorMatrixFilter.js',
            'src/timonxue/displayObject/DisplayObject.js',
            'src/timonxue/displayObject/Graphics.js',
            'src/timonxue/displayObject/TextureAtlas.js',
            'src/timonxue/displayObject/IInteractiveObject.js',
            'src/timonxue/displayObject/InteractiveObject.js',
            'src/timonxue/displayObject/InteractiveNodeRGBA.js',
            'src/timonxue/displayObject/InteractiveLayer.js',
            'src/timonxue/displayObject/InteractiveSprite.js',
            'src/timonxue/displayObject/Bitmap.js',
            'src/timonxue/displayObject/BitmapData.js',
            'src/timonxue/displayObject/DragObject.js',
            'src/timonxue/displayObject/MovieClip.js',
            'src/timonxue/displayObject/PixelList.js',
            'src/timonxue/displayObject/PixelClip.js',
            'src/timonxue/ui/CLoadingBar.js',
            'src/timonxue/ui/CButton.js',
            'src/timonxue/ccs/WidgetEx.js',
            'src/timonxue/ccs/ImageViewMovieClip.js',
            'src/timonxue/ccs/ImageViewExButton.js',
            'src/timonxue/ccs/ButtonEx.js',
            'src/timonxue/ccTx/FixBug2_2_2.js',
            'src/timonxue/ccTx/UIWidgetTx.js',
            'src/timonxue/ccTx/UILayerTx.js',
            'src/timonxue/events/MouseTouchEvent.js',
            'src/timonxue/math/ColorMatrix.js',
            'src/timonxue/math/Matrix.js',
            'src/timonxue/math/TF_Class.js',
            'src/timonxue/math/mVector.js',
            'src/timonxue/utils/Utils.js',
            'src/timonxue/utils/Attach.js',
            'src/timonxue/utils/Timer.js',
            'src/timonxue/utils/SharedObjectUtil.js',
            'src/timonxue/debug/WSSLog.js',
            'src/timonxue/debug/Trace.js',
            'src/timonxue/railMap/AbstractRail.js',
            'src/timonxue/railMap/RailMap.js',
            'src/timonxue/railMap/LineRail.js',
            'src/timonxue/railMap/Car.js',
            'src/timonxue/railMap/RailMap.js',
            'src/timonxue/debug/Stats.js',
            'src/timonxue/debug/FPSSniffer.js',
            'src/riverrun/localization/Localization.js',
            'src/riverrun/localization/LocalizationEvent.js',
            'src/riverrun/localization/LocalizationSelector.js',
            'src/riverrun/ResPathManager.js',
            'src/riverrun/SoundManager.js',
            'src/riverrun/Filter.js',
            'src/riverrun/PreLoader.js',
            'src/riverrun/Linker.js',
            'src/designSprite/Config.js',
            'src/designSprite/Config.js',
            'src/designSprite/events/DesignEvent.js',
            'src/designSprite/events/GetColorEvent.js',
            'src/designSprite/events/ColorEvent.js',
            'src/designSprite/EditableArtData.js',
            'src/designSprite/DesignGraphicsData.js',
            'src/designSprite/AbstractDesignObject.js',
            'src/designSprite/ArtDesign.js',
            'src/designSprite/RecordData.js',
            'src/designSprite/DesignShape.js',
            'src/designSprite/EditableArtDesign.js',
            'src/designSprite/RichArtDesign.js',
            'src/designSprite/DesignSprite.js',
            'src/designSprite/AdjustDesignSprite.js',
            'src/designSprite/ArtChildDesignSprite.js',
            'src/Root.js',
            'src/Resources.js',
            'src/shopaholic/debug/Cheat.js',
            'src/shopaholic/Game.js',
            'src/shopaholic/config/ShopConfig.js',
            'src/shopaholic/config/AchievementsConfig.js',
            'src/shopaholic/config/DressItemConfig.js',
            'src/shopaholic/config/GameEventsConfig.js',
            'src/shopaholic/config/OtherConfig.js',
            'src/shopaholic/config/PlayerConfig.js',
            'src/shopaholic/config/SoundsConfig.js',
            'src/shopaholic/config/StreetConfig.js',
            'src/shopaholic/config/TestingConfig.js',
            'src/shopaholic/events/CharacterEvent.js',
            'src/shopaholic/events/CollectionEvent.js',
            'src/shopaholic/events/FashionSlotEvent.js',
            'src/shopaholic/events/ItemEvent.js',
            'src/shopaholic/events/MyHomeEvent.js',
            'src/shopaholic/events/PhotoEvent.js',
            'src/shopaholic/events/SaveInGameEvent.js',
            'src/shopaholic/events/ShopEvent.js',
            'src/shopaholic/events/StreetEvent.js',
            'src/shopaholic/events/UIEvent.js',
            'src/shopaholic/events/ExtEvent.js',
            'src/shopaholic/ui/components/game_btn/BasicButton.js',
            'src/shopaholic/ui/components/game_btn/ClickButton.js',
            'src/shopaholic/ui/components/game_btn/DisableButton.js',
            'src/shopaholic/ui/components/game_btn/HoldDisableButton.js',
            'src/shopaholic/ui/components/game_btn/ModelButtons.js',
            'src/shopaholic/ui/components/game_btn/MoreGameButton.js',
            'src/shopaholic/ui/components/game_btn/UpDownButton.js',
            'src/shopaholic/ui/components/ctrl_btn/CtrlButton.js',
            'src/shopaholic/ui/components/MusicButton.js',
            'src/shopaholic/ui/components/SoundButton.js',
            'src/shopaholic/ui/elementsShow/ElementsShow.js',
            'src/shopaholic/ui/components/ItemTypeBtn.js',
            'src/shopaholic/ui/showCase/SmartShopWindow.js',
            'src/shopaholic/ui/showCase/ShopWindowHome.js',
            'src/shopaholic/ui/showCase/ShopWindowPopFaceHome.js',
            'src/shopaholic/ui/showCase/Showcase.js',
            'src/shopaholic/ui/showCase/ShowcaseCloest.js',
            'src/shopaholic/ui/showCase/ShowcaseSelect.js',
            'src/shopaholic/ui/showCase/ShopWindowDesignShop.js',
            'src/shopaholic/ui/album/AlbumsPart.js',
            'src/shopaholic/ui/album/GalleryPart.js',
            'src/shopaholic/ui/NewButton.js',
            'src/shopaholic/ui/UIManager.js',
            'src/shopaholic/ui/AbstractScreen.js',
            'src/shopaholic/ui/UiMainMenu.js',
            'src/shopaholic/ui/UiChooseCharactor.js',
            'src/shopaholic/ui/UiCreditCard.js',
            'src/shopaholic/ui/toolbar/UiCollection.js',
            'src/shopaholic/ui/partUiPlayerInfo.js',
            'src/shopaholic/ui/UiHome.js',
            'src/shopaholic/ui/UILoading.js',
            'src/shopaholic/ui/popUI/PopUiManager.js',
            'src/shopaholic/ui/popUI/AbstractPopUpScreen.js',
            'src/shopaholic/ui/popUI/AbstractPopStaticScreen.js',
            'src/shopaholic/ui/popUI/PopSureRestart.js',
            'src/shopaholic/ui/popUI/PopEnterInfo.js',
            'src/shopaholic/ui/popUI/PopTipNewLvShop.js',
            'src/shopaholic/ui/popUI/PopEvents.js',
            'src/shopaholic/ui/popUI/PopTipUpGrade.js',
            'src/shopaholic/ui/popUI/PopTipNewShop.js',
            'src/shopaholic/ui/popUI/PopSureSellItem.js',
            'src/shopaholic/ui/popUI/PopTipFullPhoto.js',
            'src/shopaholic/ui/popUI/PopTipFullItems.js',
            'src/shopaholic/ui/popUI/PopSureSellItem.js',
            'src/shopaholic/ui/popUI/PopSurePhotoDel.js',
            'src/shopaholic/ui/popUI/PopStNewItem.js',
            'src/shopaholic/ui/popUI/PopSureQuitEvent.js',
            'src/shopaholic/ui/popUI/PopStSale.js',
            'src/shopaholic/ui/popUI/PopStartWork.js',
            'src/shopaholic/ui/popUI/PopTipWorkFinishToday.js',
            'src/shopaholic/ui/popUI/PopSureStopWorking.js',
            'src/shopaholic/ui/popUI/PopTipWorkingFinish.js',
            'src/shopaholic/ui/popUI/PopWorking.js',
            'src/shopaholic/ui/popUI/PopStWorking.js',
            'src/shopaholic/ui/popUI/PopTipNoMoney.js',
            'src/shopaholic/ui/popUI/PopTalentPhoto.js',
            'src/shopaholic/ui/popUI/PopNoStar.js',
            'src/shopaholic/ui/UiStreet.js',
            'src/shopaholic/ui/UiDressUp.js',
            'src/shopaholic/ui/UiAchievments.js',
            'src/shopaholic/ui/UiMap.js',
            'src/shopaholic/ui/UiPhoto.js',
            'src/shopaholic/ui/UiDressUp.js',
            'src/shopaholic/ui/UiElements.js',
            'src/shopaholic/ui/UiAlbumInGame.js',
            'src/shopaholic/ui/UiEvents.js',
            'src/shopaholic/ui/toolbar/ToolbarManager.js',
            'src/shopaholic/ui/shops/assistant/ClothOutline.js',
            'src/shopaholic/ui/shops/assistant/ColorWheelA.js',
            'src/shopaholic/ui/shops/assistant/DressInfoPanel.js',
            'src/shopaholic/ui/shops/assistant/ReceiveButton.js',
            'src/shopaholic/ui/shops/assistant/RollBar.js',
            'src/shopaholic/ui/shops/assistant/RollBarCtrl.js',
            'src/shopaholic/ui/shops/assistant/SlotHelper.js',
            'src/shopaholic/ui/shops/assistant/SlotPrize.js',
            'src/shopaholic/ui/shops/AbstractShop.js',
            'src/shopaholic/ui/shops/DailWheelShop.js',
            'src/shopaholic/ui/shops/NormalShop.js',
            'src/shopaholic/ui/shops/SlotMachineShop.js',
            'src/shopaholic/ui/shops/TShirtShop.js',
            'src/shopaholic/ui/shops/DesignShop.js',
            'src/shopaholic/ui/shops/DesignColorShop.js',
            'src/shopaholic/ui/UiWorkSpace.js',
            'src/shopaholic/streets/StreetManager.js',
            'src/shopaholic/streets/AbstractStreetMoveLayer.js',
            'src/shopaholic/streets/AbstractStreet.js',
            'src/shopaholic/streets/Street1.js',
            'src/shopaholic/streets/Street2.js',
            'src/shopaholic/streets/Street3.js',
            'src/shopaholic/streets/MoneyPackageLayer.js',
            'src/shopaholic/streets/BuildingExLayer.js',
            'src/shopaholic/streets/TalentLayer.js',
            'src/shopaholic/streets/streetObject/StreetObject.js',
            'src/shopaholic/streets/streetObject/AutoMoveStreetObject.js',
            'src/shopaholic/streets/streetObject/BuildingEx.js',
            'src/shopaholic/streets/streetObject/BuildingsBtn.js',
            'src/shopaholic/streets/streetObject/MoneyPackage.js',
            'src/shopaholic/streets/streetObject/StreetCar.js',
            'src/shopaholic/streets/streetObject/Talent.js',
            'src/shopaholic/streets/updatedCycleMoveLayer/UpdatedCycleStreetMoveLayer.js',
            'src/shopaholic/streets/updatedCycleMoveLayer/BackLayer.js',
            'src/shopaholic/streets/updatedCycleMoveLayer/MidLayer.js',
            'src/shopaholic/streets/updatedCycleMoveLayer/ForeLayer.js',
            'src/shopaholic/streets/updatedCycleMoveLayer/RoadBackLayer.js',
            'src/shopaholic/streets/updatedCycleMoveLayer/RoadBeforeLayer.js',
            'src/shopaholic/streets/updatedCycleMoveLayer/PartRoadLayer.js',
            'src/shopaholic/streets/updatedCycleMoveLayer/BuildingsLayer.js',
            'src/shopaholic/streets/updatedCycleMoveLayer/TreesLayer.js',
            'src/shopaholic/streets/autoMoveStreetLayer/AutoMoveStreetLayer.js',
            'src/shopaholic/streets/autoMoveStreetLayer/CarLayer.js',
            'src/shopaholic/streets/autoMoveStreetLayer/PeoperLayer.js',
            'src/shopaholic/streets/PopStreetUiTalent.js',
            'src/shopaholic/testing/TestingManger.js',
            'src/shopaholic/testing/TestingInfo.js',
            'src/shopaholic/testing/TestingRewardInfo.js',
            'src/shopaholic/achievments/AchievementsInfo.js',
            'src/shopaholic/achievments/AchievementsManager.js',
            'src/shopaholic/gameEvents/GameEventsInfo.js',
            'src/shopaholic/gameEvents/GameEventsManager.js',
            'src/shopaholic/tutorails/TutorailsManager.js',
            'src/shopaholic/tutorails/AbstractTutorailsScreen.js',
            'src/shopaholic/tutorails/NewPlayerTutorailsStepUi2.js',
            'src/shopaholic/tutorails/NewPlayerTutorailsStepUi3.js',
            'src/shopaholic/tutorails/NewPlayerTutorailsStepUi3_2.js',
            'src/shopaholic/tutorails/NewPlayerTutorailsStepUi4.js',
            'src/shopaholic/tutorails/NewPlayerTutorailsStepUi5.js',
            'src/shopaholic/tutorails/NewPlayerTutorailsStepUi5_2.js',
            'src/shopaholic/tutorails/NewPlayerTutorailsStepUi6.js',
            'src/shopaholic/tutorails/NewPlayerTutorailsStepUi7.js',
            'src/shopaholic/tutorails/NewPlayerTutorailsStepUi8.js',
            'src/shopaholic/tutorails/NewPlayerTutorailsStepUi9.js',
            'src/shopaholic/tutorails/NewPlayerTutorailsStepUi10.js',
            'src/shopaholic/tutorails/NewPlayerTutorailsStepUi11.js',
            'src/shopaholic/tutorails/NewPlayerTutorailsStepUi12.js',
            'src/shopaholic/tutorails/NewPlayerTutorailsStepUi13.js',
            'src/shopaholic/tutorails/NewPlayerTutorailsStepUi14.js',
            'src/shopaholic/tutorails/NewPlayerTutorailsStepUi15.js',
            'src/shopaholic/tutorails/NewPlayerTutorailsStepUi16.js',
            'src/shopaholic/tutorails/PromotionTutorail.js',
            'src/shopaholic/tutorails/TalentTutorail.js',
            'src/shopaholic/tutorails/MakeDressTutorials01.js',
            'src/shopaholic/tutorails/MakeDressTutorials02.js',
            'src/shopaholic/tutorails/MakeDressTutorials03.js',
            'src/shopaholic/ui/popUI/PopTutorails1.js',
            'src/shopaholic/ui/popUI/UiPopSureSkipTutorails.js',
            'src/shopaholic/data/AlarmClockData.js',
            'src/shopaholic/data/AlbumData.js',
            'src/shopaholic/data/AlbumsData.js',
            'src/shopaholic/data/Data.js',
            'src/shopaholic/data/ShopholicTimeService.js',
            'src/shopaholic/data/StorageService.js',
            'src/shopaholic/data/TestingData.js',
            'src/shopaholic/data/UserProfile.js',
            'src/shopaholic/data/street/StreetLayerData.js',
            'src/shopaholic/data/street/StreetObjectData.js',
            'src/shopaholic/dressItem/DressItem.js',
            'src/shopaholic/dressItem/DressItemInfo.js',
            'src/shopaholic/dressItem/DressItemManager.js',
            'src/shopaholic/dressItem/DressItemView.js',
            'src/shopaholic/shops/ShopInfo.js',
            'src/shopaholic/shops/ShopManager.js',
            'src/shopaholic/player/Player.js',
            'src/shopaholic/player/PlayerView.js',
            'src/shopaholic/player/PlayerVarData.js',
            'src/shopaholic/manager/AwardManager.js',
            'src/shopaholic/manager/CollectionManager.js',
            'src/shopaholic/manager/GoogleManager.js',
            'src/shopaholic/manager/LinkManager.js',
            'src/shopaholic/utils/XMLManager.js',
            'src/shopaholic/utils/DataTool.js',
            'src/shopaholic/utils/UploadToolEx.js',
            'src/shopaholic/tools/StaticGameFuc.js',
            'src/shopaholic/tools/SafeCtrl.js',
            'src/shopaholic/tools/NativeJSONProxy.js',
            'src/shopaholic/tools/JSONWrapper.js'
        ];
    }
    return CCConfig;
})();
//---------------------------------------------------------------------------------------------------------------------------------------
var Boot = (function () {
    function Boot() {
        window.addEventListener('DOMContentLoaded', function () {
            var config = new CCConfig();
            //config["appFiles"] = config.appFilesAll;
            config["appFiles"] = config.appFilesMin;
            //first load engine file if specified
            var script = document.createElement('script');
            /*********Delete this section if you have packed all files into one*******/
            if (config.SingleEngineFile && !config.engineDir) {
                script.src = config.SingleEngineFile;
            }
            else if (config.engineDir && !config.SingleEngineFile) {
                script.src = 'jsloader.js';
            }
            else {
                alert('You must specify either the single engine file OR the engine directory in "cocos2d.js"');
            }
            var scriptApi = document.createElement('script');
            scriptApi.src = '';
            /*********Delete this section if you have packed all files into one*******/
            //s.src = 'Packed_Release_File.js'; //IMPORTANT: Un-comment this line if you have packed all files into one
            document.body.appendChild(script);
            var reg = new RegExp("(^|&)" + "loadApi" + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
            var r = window["location"].search.substr(1).match(reg); //匹配目标参数
            if (r != null) {
                var param = unescape(r[2]);
                if (param != "false") {
                    document.body.appendChild(scriptApi);
                }
            }
            else {
                document.body.appendChild(scriptApi);
            }
            document["ccConfig"] = config;
            script.id = 'cocos2d-html5';
            //else if single file specified, load singlefile
        });
    }
    return Boot;
})();
new Boot();
//# sourceMappingURL=Boot.js.map