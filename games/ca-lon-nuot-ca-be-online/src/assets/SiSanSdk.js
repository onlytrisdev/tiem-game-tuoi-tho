window.SdkUtil = {
    shiping:0,
    banner:0,
    fenxiang:0,
    yuansheng:0,
    showChaping:false,
    AdNum :0 ,
    screenOrientation : window.GameParameter["screenOrientation"].val,
    xunijian:{},
    ADInit: function () 
    {
        cc.assetManager.loadBundle("AdRes",(err,bundle)=>{
            bundle.load("4399",(err1,prefab)=>{
                SdkUtil.yinsiui = cc.instantiate(prefab);
                SdkUtil.yinsiui.parent =  cc.find('Canvas');
                SdkUtil.yinsiui.setPosition(cc.find('Canvas').width*0.5,cc.find('Canvas').height-100);
                SdkUtil.yinsiui.group="ui" ;
                SdkUtil.yinsiui.zIndex = 999 ;
            })
            bundle.load("blur",(err1,prefab)=>{
                SdkUtil.blurPrefab = prefab ;
            })
        });

        setTimeout(() => {
            /* window.h5api.canPlayAd(function(data)
            {
                SdkUtil.AdNum = data.remain ;
            }) */
        }, 4000);
        
        SdkUtil.GetFocus() ;
        // console.log(document.activeElement)
    },
    LoadSubpackage(callback) {
        console.log("LoadSubpackage start------")
        if (callback != null) {
            callback();
            callback = null;
        }
    },
    ReportMonitor(id) {
        console.log("ReportMonitor------"+id)
    },
    LevelStart(id) {
        console.log("LevelStart------"+id)
    },
    LevelWin(id) {
        console.log("LevelWin------"+id)
    },
    LevelFail(id) {
        console.log("LevelFail------"+id)
    },
    ChangeGamePanel(url)
    {
        return url ;
    },
    ShowGamePanel(panel)
    {
        if(panel)
        {
            
        }
    },
    CloseGamePanel(uiname)
    {
    },
    GetConfig:function(v)
    {
        if(v=="box"||v=="xingxiang"||v=="weixiantip")
        {
            return 100 ;
        }
        return 0 ;
    },
    GetFocus()
    {
        if(window["document"]&&window["document"].addEventListener)
        {
            var key_pressed={};
            document.addEventListener('keyup', function(e) {
               
                if(e&&e.key)
                {
                }
            })
            document.addEventListener('keydown', function(e) {
                
                if(e&&e.key)
                {
                }
            })
            
            setInterval(function(){
                
            },1);
        }
        window.addEventListener('focus', function() {
            if(SdkUtil.curBlurUI!=null)
            {
                SdkUtil.curBlurUI.destroy();
                SdkUtil.curBlurUI=null ;
            }
        });
        window.addEventListener('blur', function() {
            if(SdkUtil.curBlurUI==null&&SdkUtil.blurPrefab)
            {
                SdkUtil.curBlurUI = cc.instantiate(SdkUtil.blurPrefab);
                SdkUtil.curBlurUI.parent =  cc.find('Canvas');
                SdkUtil.curBlurUI.setPosition(0,0);

                SdkUtil.curBlurUI.group="ui";
                SdkUtil.curBlurUI.zIndex = 999 ;
            }
        });
        window.addEventListener('mousedown', function() {
            if(window["focus"])
            {
                window.focus() ;
            }
            if(SdkUtil.curBlurUI!=null)
            {
                SdkUtil.curBlurUI.destroy();
                SdkUtil.curBlurUI=null ;
            }
        });
    },
    ShowChaPing(id)
    {
        
    },
    IsShowADBtn()
    {
        // Arcade ads via GVAdBreak — always allow reward buttons.
        return true ;
    },
    getYearDay:function(){
        const currentYear = new Date().getFullYear().toString();
        // Days since Jan 1 of current year
        const hasTimestamp = new Date() - new Date(currentYear);
        // 86400000 = 24 * 60 * 60 * 1000
        const hasDays = Math.ceil(hasTimestamp / 86400000) + 1;
        console.log('Day %s of year %s', hasDays, currentYear);
        if(hasDays >=120)
        { 
            return true;
        } 
        return false;
     },
    ShowBanner()
    {
    },
    CloseBanner()
    {
    },
    ShowVideo(callback)
    {
        function finishReward() {
            if (callback != null) {
                callback(1);
                callback = null;
            }
        }

        function isStubGvAdBreak(fn) {
            if (typeof fn !== "function") {
                return true;
            }
            try {
                var src = Function.prototype.toString.call(fn);
                if (src.indexOf("Không hỗ trợ") >= 0 || src.indexOf("Khong ho tro") >= 0) {
                    return true;
                }
            } catch (e) {}
            return false;
        }

        function tryPlay() {
            var adFn = window.GVAdBreak;
            if (typeof adFn === "function" && !isStubGvAdBreak(adFn)) {
                try {
                    adFn(finishReward);
                    return true;
                } catch (error) {
                    console.warn("[GV_ADBREAK_FAIL]", error);
                }
            }
            return false;
        }

        if (tryPlay()) {
            return;
        }

        // Wait briefly for score.min.js to replace the stub GVAdBreak.
        var waited = 0;
        var timer = setInterval(function () {
            waited += 50;
            if (tryPlay()) {
                clearInterval(timer);
                return;
            }
            if (waited >= 400) {
                clearInterval(timer);
                // Local/dev or unsupported ads: grant silently (no spam).
                finishReward();
            }
        }, 50);
    },
    //////////////////////

    RandomInt(min,max)
    {
        return Math.round(Math.random()*(max-min)+min);
    },


    TDInit()
    {
        
    },
    TDGuanQia(state,missionId)
    {
        
    },
    TDEvent(eventId)
    {
        
    },
};