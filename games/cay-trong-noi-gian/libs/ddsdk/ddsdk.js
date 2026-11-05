! function(global) {
    var DDSDK_Render = null,
        DDSDK = {
            m_Ver: "0.0.18.21 beta",
            m_LogServer: "https://stat.chiji-h5.com/statwx_common.php",
            m_JsonUrl: "https://jsonconfig.chiji-h5.com/json/",
            m_IPInfoUrl: "https://wxgame.chiji-h5.com/wxgs_sdk/getcity.action",
            m_RegionObj: null,
            m_Appid: "",
            m_Openid: "",
            m_LogKey: "",
            m_LogObj: null,
            m_Channel: "default",
            m_bLog: !0,
            m_bPub: !0,
            m_Data: null,
            m_ShareCB: null,
            m_OpenAppCB: null,
            m_RewardCB: null,
            m_Render: null,
            m_ShareCBTime: 3e3,
            m_OpenAppCBTime: 3e3,
            m_OpenAppCBTime: 3e3,
            m_RewardSceneIOS: 1038,
            m_RewardSceneDroid: 1038,
            m_chkRewardSceneDroid: !1,
            m_chkRewardSceneIOS: !1,
            m_bInit: !1,
            init: function(cb) {
                if (this.m_bInit) console.log("ddsdk already init...");
                else if (1 == arguments.length) {
                    var appid = window.DDSDK_APPKEY,
                        gname = window.DDSDK_GNAME;
                    if (appid.length < 1 || gname.length < 1) console.log("please init config file...");
                    else if (this.m_bInit = !0, this.m_Appid = appid, this.m_LogKey = gname, "DDSDK_InitRender" in window) {
                        if (window.DDSDK_InitRender(), this.m_Render = window.DDSDK_Render, DDSDK_Render = window.DDSDK_Render, DDSDK.ajax = DDSDK_Render.ajax, DDSDK.setTimeout = DDSDK_Render.setTimeout, DDSDK.getItem = DDSDK_Render.getItem, DDSDK.setItem = DDSDK_Render.setItem, DDSDK.removeItem = DDSDK_Render.removeItem, this.isWx() && ("LJ_LOGEVENT" in window ? this.m_LogObj = window.LJ_LOGEVENT : console.log("LJ_EVENT load fail...")), this.m_bPub) {
                            var fname = appid;
                            "DDSDK_CONFIG" in window && (fname = window.DDSDK_CONFIG), this.m_JsonUrl = this.m_JsonUrl + gname + "/" + fname + ".json"
                        }
                        if (this.m_ResTime = (new Date).getTime(), this.m_LoadCompleteCallback = cb, this.m_JsonUrl = this.m_JsonUrl, appid && gname ? (this.loadRes(), console.log(this.m_JsonUrl)) : console.log("DDSDK log mode..."), this.isWx()) {
                            var options = wx.getLaunchOptionsSync();
                            console.log("--options--:", options), "channel" in options.query && DDSDK.setChannel(options.query.channel), DDSDK_Render && wx.onShow(function(res) {
                                DDSDK_Render.onShow(res)
                            })
                        }
                        console.log("ddsdk:", this.m_Ver)
                    } else console.log("DDSDK_InitRender is null!!!")
                } else console.log("ddsdk init arguments err...")
            },
            setAccount: function(account) {
                this.m_Openid = account, this.m_LogObj && this.m_LogObj.ljSendOpenid(account)
            },
            ShareAppMessage: function(cb) {
                this.m_LogObj && this.m_LogObj.ljShareAppMessage(cb)
            },
            OnShareAppMessage: function(cb) {
                this.m_LogObj && this.m_LogObj.ljOnShareAppMessage(cb)
            },
            isWx: function() {
                if ("wx" in window && window.wx.getLaunchOptionsSync) return !0
            },
            filterRegion: function(data) {
                if (0 == data.error_code) {
                    var filter = this.m_Data.filterRegion;
                    if (console.log("filter:", filter), filter) {
                        var city = data.result.city;
                        filter.indexOf(city) >= 0 && (console.log("filter hide"), DDSDK_Render && DDSDK_Render.hideAll())
                    }
                } else console.log("获取区域信息失败！")
            },
            initRender: function() {
                var that = this;
                this.m_Data && (this.m_Data.shareCBTime && (this.m_ShareCBTime = this.m_Data.shareCBTime), this.m_Data.openAppCBTime && (this.m_OpenAppCBTime = this.m_Data.openAppCBTime), this.m_Data.logServer && (this.m_LogServer = this.m_Data.logServer), "RewardSceneIOS" in this.m_Data && (this.m_RewardSceneIOS = this.m_Data.RewardSceneIOS), "RewardSceneDroid" in this.m_Data && (this.m_RewardSceneDroid = this.m_Data.RewardSceneDroid), "chkRewardSceneIOS" in this.m_Data && (this.m_chkRewardSceneIOS = this.m_Data.chkRewardSceneIOS), "chkRewardSceneDroid" in this.m_Data && (this.m_chkRewardSceneDroid = this.m_Data.chkRewardSceneDroid), "ipinfourl" in this.m_Data && (this.m_IPInfoUrl = this.m_Data.ipinfourl, this.getIPInfo(this.filterRegion.bind(this))), this.m_Render ? (this.filterData(), console.log("loadRes json complete! init Render..."), this.m_Render.init(function() {
                    if (that.m_LoadCompleteCallback && (console.log("Render is ready..."), that.m_LoadCompleteCallback()), DDSDK.isWx()) {
                        var options = wx.getLaunchOptionsSync();
                        "scene" in options && DDSDK.chkShowState(options.scene)
                    }
                    DDSDK.chkShowState2()
                })) : (console.log("loadRes json complete! can't find Render..."), that.m_LoadCompleteCallback && that.m_LoadCompleteCallback()))
            },
            getRender: function() {
                return this.m_Render
            },
            isIOS: function() {
                return "ios" == this.getPlatfrom()
            },
            isShow: function(type) {
                if (DDSDK.getData("show").hideAll) return !1;
                var bshow = !1,
                    showState = DDSDK.getData("show")[type];
                return showState && (bshow = 2 != showState || !DDSDK.isIOS()), "tryDlg" == type && (!DDSDK.getData("appList") || DDSDK.getData("appList").length < 1) && (bshow = !1, console.log("appList is null...")), bshow
            },
            getPlatfrom: function() {
                var sys;
                if ("wx" in window && wx.getSystemInfoSync) {
                    if (sys = wx.getSystemInfoSync()) return sys.platform
                } else if ("BK" in window && "GameStatusInfo" in window) return GameStatusInfo.platform;
                return "unknow"
            },
            setData: function(type, data) {
                this.m_Data[type] = data
            },
            getData: function(type) {
                try {
                    return this.m_Data[type]
                } catch (e) {
                    return null
                }
            },
            openApp: function(app) {
                this.openADApp(app)
            },
            setResLoadCallback: function(cb) {
                this.m_LoadCompleteCallback = cb
            },
            setRewardCB: function(cb) {
                this.m_RewardCB = cb
            },
            setOpenAppCB: function(cb) {
                this.m_OpenAppCB = cb
            },
            setShareCB: function(cb) {
                this.m_ShareCB = cb
            },
            filterPltData: function(data, type, bIsIOS, page, kind) {
                page = page || 1, kind = kind || type;
                var i, item, bshow, newList = [];
                if (data[type]) {
                    for (i = 0; i < data[type].length; i++) bshow = !0, "showmode" in (item = data[type][i]) && (bIsIOS ? 2 == item.showmode && (bshow = !1) : 1 == item.showmode && (bshow = !1)), bshow && (item._kind = kind, item._page = page, item._idx = i + 1, newList.push(item));
                    data[type] = newList
                }
            },
            filterData: function() {
                var data = this.m_Data,
                    isIOS = this.isIOS();
                if (this.filterPltData(data, "appList", isIOS), this.filterPltData(data, "favList", isIOS), "aniAD" in data && data.aniAD.list && this.filterPltData(data.aniAD, "list", isIOS, 1, "aniAD"), "hotGames" in data)
                    for (var i = 0; i < data.hotGames.length; i++) this.filterPltData(data.hotGames[i], "ani", isIOS, i + 1, "hotGames_ani"), this.filterPltData(data.hotGames[i], "list", isIOS, i + 1, "hotGames_list");
                this.m_Data = data
            },
            chkShowState: function(scene) {
                if ("DDSDK_Render" in window) {
                    var list = this.getData("sceneList");
                    (list = list || []).indexOf(scene) >= 0 && DDSDK_Render.hideAll()
                }
            },
            chkShowState2: function() {
                if ("DDSDK_Render" in window) {
                    var ch = this.m_Channel,
                        applist = this.getData("appListChannel");
                    if (applist) {
                        var pos = applist.indexOf(ch);
                        applist && pos >= 0 && (DDSDK_Render.showTryBtn(!1), DDSDK_Render.showTryDlg(!1))
                    }
                    var anilist = this.getData("aniADChannel");
                    anilist && (pos = anilist.indexOf(ch), anilist && pos >= 0 && DDSDK_Render.showAniAD(!1));
                    var favlist = this.getData("favListChannel");
                    favlist && (pos = favlist.indexOf(ch), favlist && pos >= 0 && DDSDK_Render.showfavList(!1));
                    var hotGame = this.getData("hotGameChannel");
                    hotGame && (pos = hotGame.indexOf(ch), hotGame && pos >= 0 && DDSDK_Render.showHotGame(!1))
                }
            },
            setChannel: function(ch) {
                this.m_Channel = ch
            },
            getChannel: function() {
                return this.m_Channel
            },
            getIPInfo: function(cb) {
                if (this.m_RegionObj) cb(this.m_RegionObj);
                else {
                    var that = this;
                    DDSDK_Render.ajax(this.m_IPInfoUrl, null, function(data) {
                        that.m_RegionObj = data, cb(data)
                    }, function(data) {
                        cb(data)
                    })
                }
            },
            sortAppList: function(itemData, cb) {
                for (var item, reward, rewards = [], norewards = [], i = 0; i < itemData.length; i++)(reward = (item = itemData[i]).reward) ? reward.everyday && reward.datecount > 0 ? rewards.push(item) : (reward.onlyonce && reward.allcount, rewards.push(item)) : norewards.push(item);
                cb(norewards.concat(rewards))
            },
            getAppList: function(rewardsInfo, cb) {
                var applist = DDSDK.getData("appList");
                if (rewardsInfo) {
                    if (applist && applist.length > 0) {
                        if (rewardsInfo.length > 0) {
                            var rewardslist = rewardsInfo;
                            if (rewardslist && rewardslist.length > 0)
                                for (var j = 0; j < rewardslist.length; j++)
                                    for (var i = 0; i < applist.length; i++) rewardslist[j].gameid && rewardslist[j].gameid == applist[i].gameid && (applist[i].reward = rewardslist[j]);
                            console.log("rewards update to list:", applist)
                        }
                        cb(applist)
                    }
                } else console.log("ddsdk can't get rewards list from server")
            },
            getRewardsList: function(succ, fail) {
                var url = DDSDK.getData("try_getrewards");
                if (url) {
                    var info = {
                        appid: DDSDK.m_Appid,
                        openid: DDSDK.m_Openid
                    };
                    DDSDK_Render.ajax(url, info, function(data) {
                        succ(data)
                    }, function(data) {
                        fail(data)
                    })
                }
            },
            canGetReward: function(data) {
                return !(data.everyday && data.reward && data.reward.datecount > 0) && !(data.onlyonce && data.reward && data.reward.allcount > 0)
            },
            processRewardData: function(itemData) {
                DDSDK.openADApp(itemData, function() {
                    if (DDSDK.canGetReward(itemData)) {
                        DDSDK.logTag("sdk-trydlg-getreward", itemData), console.log("-------process openADApp-------");
                        var url = DDSDK.getData("try_updatereward");
                        if (url) {
                            console.log(url);
                            var now = (new Date).getTime(),
                                data = {
                                    appid: DDSDK.m_Appid,
                                    openid: DDSDK.m_Openid,
                                    gameid: itemData.gameid
                                },
                                cacheData = {
                                    url: url,
                                    data: data,
                                    item: itemData,
                                    now: now
                                },
                                cachestr = JSON.stringify(cacheData);
                            console.log("cacheStr:", cachestr), DDSDK_Render.setItem("rewardCache", cachestr), console.log(data, itemData), DDSDK_Render.setRewardCB(function(res) {
                                DDSDK_Render.removeItem("rewardCache");
                                var chk = !0;
                                console.log("--------RewardCB----------"), console.log(res), console.log("res的场景值1：" + res.scene);
                                var chkval = DDSDK.m_RewardSceneDroid,
                                    needcheck = !1;
                                DDSDK.isIOS() && DDSDK.m_chkRewardSceneIOS && (chkval = DDSDK.m_RewardSceneIOS, needcheck = !0), !DDSDK.isIOS() && DDSDK.m_chkRewardSceneDroid && (chkval = DDSDK.RewardSceneDroid, needcheck = !0), needcheck && res.scene != chkval && (chk = !1), "BK" in window && (chk = !0), "type" in itemData && 2 == itemData.type && (chk = !0), chk ? DDSDK.checkReward(url, data, itemData, now) : console.log("check Reward fail...")
                            })
                        }
                    } else DDSDK.logTag("sdk-trydlg-ingame", itemData)
                })
            },
            processRewardCache: function() {
                var str = DDSDK_Render.getItem("rewardCache");
                if (str) {
                    console.log("rewardCache info:", str);
                    try {
                        var cData = JSON.parse(str);
                        DDSDK.checkReward(cData.url, cData.data, cData.item, cData.now)
                    } catch (e) {
                        console.log("processRewardCache exception:" + e)
                    }
                    DDSDK_Render.removeItem("rewardCache")
                }
            },
            checkReward: function(url, data, itemData, ctime) {
                if (DDSDK_Render) {
                    itemData.mtype = itemData.mtype;
                    if ("chkgameid" in itemData)
                        if (itemData.chkgameid && itemData.gameid != itemData.appid) return;
                    var now = (new Date).getTime(),
                        interval = now - ctime,
                        bok = (wx.getLaunchOptionsSync(), !1);
                    if (interval >= itemData.rewardtime && (bok = !0), "kefubtn" == itemData.kind ? bok = !0 : "pubtn" == itemData.kind && (bok = !0), console.log("checkReward", now, ctime, interval / 1e3), !bok) {
                        var str = DDSDK.getData("try_rewardfailtip");
                        return console.log(str), DDSDK_Render.getTryDlg().content.showTip(str), !1
                    }
                    return DDSDK_Render.ajax(url, data, function(res) {
                        if (console.log("post:", data), res && 0 == res.ret) {
                            console.log("---------------update rewards success:", res), DDSDK.giveReward(itemData.money, itemData.mtype), DDSDK_Render.clearRewardCB(), DDSDK_Render.getTryDlg().refresh();
                            var str = DDSDK.getData("try_rewardtip");
                            str = (str = str.replace(/mtype/, itemData.mtype)).replace(/money/, itemData.money), console.log(str), 1 == DDSDK.getData("sdkstyle") ? DDSDK_Render.getTryDlg().content.showTip(str) : DDSDK_Render.getTryDlg().showTip(str), DDSDK.logTag("sdk-givereward", itemData)
                        } else console.log("ret fail:", res)
                    }, function(res) {
                        console.log("update rewards fail:", res)
                    }), !0
                }
            },
            giveReward: function(money, type) {
                this.m_RewardCB && this.m_RewardCB(money, type)
            },
            loadRes: function() {
                console.log("ddsdk loadRes json...");
                var that = this;
                DDSDK_Render.ajax(this.m_JsonUrl, null, function(result) {
                    that.m_Data = result, that.initRender()
                }, function(result) {
                    console.log("loadjson fail:" + result), DDSDK_Render.setTimeout(function() {
                        that.loadRes()
                    }, 5e3)
                })
            },
            openADApp: function(app, cb) {
                console.log("open appid:" + app.appid + " path:" + app.path + " extraData:" + app.extraData), this.logTag("sdk-openapp", app);
                var that = this;

                function OpenAppCB() {
                    that.m_OpenAppCB(app)
                }

                function callCB(res) {
                    console.log("openADApp:callCB"), cb && cb(), that.m_OpenAppCB && DDSDK_Render.setTimeout(OpenAppCB, that.m_OpenAppCBTime)
                }
                if (DDSDK_Render && DDSDK_Render.clearRewardCB(), "wx" in window) try {
                    if ("kefubtn" == app.kind) {
                        var kefu_conf = app.kefu_conf;
                        wx.openCustomerServiceConversation({
                            showMessageCard: kefu_conf.showMessageCard,
                            sendMessageImg: kefu_conf.sendMessageImg,
                            success: function(res) {
                                that.logTag("sdk-openapp-kefu-succ", app), callCB()
                            },
                            fail: function(res) {
                                that.logTag("sdk-openapp-kefu-fail", app), console.log("cancel...")
                            }
                        })
                    } else "type" in app && 2 == app.type && app.unimg ? (wx.previewImage({
                        current: app.unimg,
                        urls: [app.unimg]
                    }), that.logTag("sdk-openapp-qr", app), callCB()) : wx.navigateToMiniProgram({
                        appId: app.appid,
                        path: app.path,
                        extraData: app.extraData,
                        success: function(res) {
                            that.logTag("sdk-openapp-succ", app), callCB(), console.log("navigateToMiniProgram success...")
                        },
                        fail: function(res) {
                            that.logTag("sdk-openapp-fail", app), DDSDK.getData("showQRByCancel") && app.unimg && ("canceltype" in app ? DDSDK_Render.navigateAppFail(app.canceltype) : wx.previewImage({
                                current: app.unimg,
                                urls: [app.unimg]
                            })), console.log("navigateToMiniProgram cancel...")
                        }
                    })
                } catch (e) {
                    console.log(e)
                } else if ("BK" in window) try {
                    BK.QQ.skipGame(app.appid, app.extraData), callCB(), console.log("skipGame success...")
                } catch (e) {
                    console.log(e)
                } else if ("DDW" in window) {
                    var gobj = {
                        gameUrl: app.url,
                        gameId: app.gameid,
                        gameName: app.name,
                        landScape: app.landScape
                    };
                    window.DDW.playGame(gobj), console.log("playGame success...")
                }
            },
            logEnable: function(bEnable) {
                this.m_bLog = bEnable
            },
            logEvent: function(event, extra) {
                this.logTag(event, extra)
            },
            logTag: function(event, extra) {
                this.m_bLog && DDSDK_Render && this.m_LogObj && (event = event || "", extra = extra || "", console.log("日志打点：", event), extra && extra.replace && (extra = extra.replace(/&/, "|")), this.m_LogObj.ljSendEvent(event, extra))
            }
        };
    DDSDK.clone = function clone(obj) {
        var o;
        if ("object" == typeof obj)
            if (null === obj) o = null;
            else if (obj instanceof Array) {
            o = [];
            for (var i = 0, len = obj.length; i < len; i++) o.push(clone(obj[i]))
        } else
            for (var j in o = {}, obj) o[j] = clone(obj[j]);
        else o = obj;
        return o
    }, "undefined" != typeof define && define.amd ? define(function() {
        return DDSDK
    }) : "undefined" != typeof module && module.exports && (module.exports = DDSDK), global.DDSDK = DDSDK
}("undefined" != typeof window ? window : this),
function(global) {
    function DDSDK_InitRender() {
        var Render_Laya = {
            m_TryBtn: null,
            m_TryListBtn: null,
            m_FavBtn: null,
            m_TryDlg: null,
            m_AniAD: [],
            m_FavAD: [],
            m_fav: null,
            m_FavAD1: null,
            m_PubAD: null,
            m_ResLoadCallback: null,
            m_RewardCB: null,
            m_TryGame: null,
            aniadview: null,
            init: function(cb) {
                this.setResLoadCallback(cb), this.loadRes()
            },
            setResLoadCallback: function(cb) {
                this.m_ResLoadCallback = cb
            },
            loadRes: function() {
                Loader = Laya.Loader;
                var loadres = [],
                    url = DDSDK.getData("try_url_laya");
                if (url) {
                    url && url.length > 0 && loadres.push({
                        url: url,
                        type: Loader.ATLAS
                    });
                    var aniad = DDSDK.getData("aniAD");
                    if (aniad) try {
                        if ("list" in aniad)
                            for (var anilist = aniad.list, i = 0; i < anilist.length; i++) {
                                if (!anilist[i].skin) return void console.log("aniad skin not exist...");
                                var path = anilist[i].skin,
                                    ftype = Loader.IMAGE;
                                anilist[i].atlas && (ftype = Loader.ATLAS), loadres.push({
                                    url: path,
                                    type: ftype
                                }), console.log(path)
                            }
                    } catch (e) {
                        console.log(e)
                    }
                    Laya.loader.load(loadres, Laya.Handler.create(this, this.onLoadedComplete))
                } else console.log("svr json err...")
            },
            onLoadedComplete: function(e) {
                Laya.loader.getRes("tryplay/cqy.png") ? this.m_ResLoadCallback && this.m_ResLoadCallback() : Laya.timer.once(1e3, this, this.loadRes)
            },
            clearRewardCB: function() {
                this.m_RewardCB = null
            },
            setRewardCB: function(cb) {
                this.m_RewardCB = cb
            },
            wxShow: function(res) {
                this.onShow(res)
            },
            onShow: function(res) {
                console.log("---onShow---"), console.log(res), this.m_RewardCB ? (console.log("---call rewardCB---"), this.m_RewardCB(res), this.clearRewardCB()) : console.log("---rewardCB is null---")
            },
            getTryDlg: function() {
                var sdkstyle = DDSDK.getData("sdkstyle");
                return this.m_TryDlg || (this.m_TryDlg = 1 == sdkstyle ? new global.DDSDK_Component.CTryDlg1 : new global.DDSDK_Component.CTryDlg), DDSDK.isShow("tryDlg") || (this.m_TryDlg.visible = !1), this.m_TryDlg
            },
            getTryGame: function() {
                if (!this.m_TryGame) {
                    var style = DDSDK.getData("style");
                    if (style && "trygame" in style) switch (style.trygame) {
                        case 1:
                            this.m_TryGame = new global.DDSDK_Component.CTrylist;
                            break;
                        case 2:
                            this.m_TryGame = new global.DDSDK_Component.CTrylist1
                    } else this.m_TryGame = new global.DDSDK_Component.CTrylist
                }
                return DDSDK.isShow("tryGame") || (this.m_TryGame.visible = !1), this.m_TryGame
            },
            getTryListBtn: function() {
                return this.m_TryListBtn || (this.m_TryListBtn = new global.DDSDK_Component.tryListBtnUI), DDSDK.isShow("tryGame") || (this.m_TryListBtn.visible = !1), this.m_TryListBtn
            },
            getTryBtn: function() {
                return this.m_TryBtn || (this.m_TryBtn = new global.DDSDK_Component.CTryBtn), DDSDK.isShow("tryDlg") || (this.m_TryBtn.visible = !1), this.m_TryBtn
            },
            getFavBtn: function() {
                return console.log("first22........"), this.m_FavBtn || (this.m_FavBtn = new global.DDSDK_Component.favbtnUI), DDSDK.isShow("adFav") || (this.m_FavBtn.visible = !1), this.m_FavBtn
            },
            createListView: function(type, stype, spx, spy) {
                var favList = DDSDK.getData("favList"),
                    listview = new CListView(type, stype, spx, spy);
                return DDSDK.isShow("adFav") || (listview.visible = !1), (!favList || favList.length < 1) && (listview.visible = !1, console.log("favList is null...")), listview
            },
            getFavAD: function(row, col, type) {
                var favList = DDSDK.getData("favList");
                return this.m_FavAD1 || (this.m_FavAD1 = new global.DDSDK_Component.CFavorListView(row, col, type)), DDSDK.isShow("adFav") || (this.m_FavAD1.visible = !1), (!favList || favList.length < 1) && (this.m_FavAD1.visible = !1, console.log("favList is null...")), this.m_FavAD1
            },
            getFavAD1: function(row, col, type) {
                var favList = DDSDK.getData("favList");
                return this.m_fav = new global.DDSDK_Component.CFavorListView1(row, col, type), DDSDK.isShow("adFav") || (this.m_fav.visible = !1, console.log("fav is close...........")), this.m_FavAD && this.m_FavAD.push(this.m_fav), (!favList || favList.length < 1) && (this.m_fav.visible = !1, console.log("favList is null...")), this.m_fav
            },
            getAniAD: function() {
                var aniAdObj, aniAd = DDSDK.getData("aniAD");
                return this.m_AniAD.length < 1 && (aniAdObj = new global.DDSDK_Component.CAniAdView, this.m_AniAD.push(aniAdObj)), DDSDK.isShow("adAni") || (aniAdObj.visible = !1, console.log("ani is close...........")), (!aniAd || !aniAd.list || aniAd.list.length < 1) && (aniAdObj.visible = !1, console.log("AniAD is null...")), aniAdObj
            },
            getAniADs: function() {
                return this.m_AniAD
            },
            createFavAD: function(row, col, type) {
                return this.getFavAD1(row, col, type)
            },
            createAniAD: function() {
                var aniAdObj, aniAd = DDSDK.getData("aniAD");
                return aniAdObj = new global.DDSDK_Component.CAniAdView, this.m_AniAD.push(aniAdObj), DDSDK.isShow("adAni") || (aniAdObj.visible = !1, console.log("ani is close...........")), (!aniAd || !aniAd.list || aniAd.list.length < 1) && (aniAdObj.visible = !1, console.log("AniAD is null...")), aniAdObj
            },
            getPubAD: function() {
                var pubAd = DDSDK.getData("pubAD");
                return this.m_PubAD || (this.m_PubAD = new global.DDSDK_Component.CAniAdView(1)), DDSDK.isShow("adPub") || (this.m_PubAD.visible = !1), (!pubAd || !pubAd.list || pubAd.list.length < 1) && (this.m_PubAD.visible = !1, console.log("pubAD is null...")), this.m_PubAD
            },
            getBKAD: function() {
                var hotGames = DDSDK.getData("hotGames"),
                    sdkstyle = DDSDK.getData("sdkstyle");
                if (!this.m_BKAD) {
                    if (1 == sdkstyle) {
                        var bkstyle = DDSDK.getData("style");
                        if (bkstyle && "bkgame" in bkstyle) switch (bkstyle.bkgame) {
                            case 1:
                                this.m_BKAD = new global.DDSDK_Component.bkgame1UI;
                                break;
                            case 2:
                                this.m_BKAD = new global.DDSDK_Component.bkgame2UI
                        } else this.m_BKAD = new global.DDSDK_Component.bkgame1UI
                    } else this.m_BKAD = new global.DDSDK_Component.bkgameUI;
                    this.m_BKAD.m_closeBtn.visible = !1
                }
                return DDSDK.isShow("hotGames") || (this.m_BKAD.visible = !1), (!hotGames || hotGames.length < 1) && (this.m_BKAD.visible = !1), this.m_BKAD
            },
            getHotGames: function() {
                var hotGames = DDSDK.getData("hotGames");
                return this.m_HotGames || (this.m_HotGames = new global.DDSDK_Component.CHotGames), DDSDK.isShow("hotGames") || this.m_HotGames.showAll(!1), (!hotGames || hotGames.length < 1) && console.log("hotGames is null..."), this.m_HotGames
            },
            hideAll: function() {
                console.log("render hideAll..."), DDSDK.getData("show").hideAll || (DDSDK.getData("show").hideAll = !0), this.showTryBtn(!1), this.showTryListBtn(!1), this.showFavBtn(!1), this.showTryDlg(!1), this.showAniAD(!1), this.showPubAD(!1), this.showfavlist(!1), this.showfav(!1), this.showBKAD(!1), this.showHotGame(!1), this.showTryGame(!1)
            },
            showTryGame: function(bShow) {
                var obj = this.getTryGame();
                obj && (obj.visible = bShow)
            },
            showTryBtn: function(bShow) {
                var obj = this.getTryBtn();
                obj && (obj.visible = bShow)
            },
            showFavBtn: function(bShow) {
                var obj = this.getFavBtn();
                obj && (obj.visible = bShow)
            },
            showTryListBtn: function(bShow) {
                var obj = this.getTryListBtn();
                obj && (obj.visible = bShow)
            },
            showTryDlg: function(bShow) {
                var obj = this.getTryDlg();
                obj && (obj.visible = bShow)
            },
            showAniAD: function(bShow) {
                for (var i = 0; i < this.m_AniAD.length; i++) {
                    var obj = this.m_AniAD[i];
                    obj && (obj.visible = bShow)
                }
            },
            showPubAD: function(bShow) {
                var obj = this.getPubAD();
                obj && (obj.visible = bShow)
            },
            showBKAD: function(bShow) {
                var obj = this.getBKAD();
                obj && (obj.visible = bShow)
            },
            showfavlist: function(bShow) {
                var obj = this.getFavAD();
                obj && (obj.visible = bShow)
            },
            showfav: function(bShow) {
                for (var i = 0; i < this.m_FavAD.length; i++) obj = this.m_FavAD[i], obj && (obj.visible = bShow)
            },
            showHotGame: function(bShow) {
                var obj = this.getHotGames();
                obj && obj.showAll(bShow)
            },
            getItem: function(key) {
                return Laya.LocalStorage.getItem(key)
            },
            setItem: function(key, value) {
                Laya.LocalStorage.setItem(key, value)
            },
            removeItem: function(key) {
                Laya.LocalStorage.removeItem(key)
            },
            setTimeout: function(cb, time) {
                Laya.timer.once(time, null, cb)
            },
            navigateAppFail: function(bshow) {
                switch (bshow) {
                    case 1:
                        this.showHotGame(!0);
                        break;
                    case 2:
                        this.showTryDlg(!0);
                        break;
                    case 3:
                        this.showTryGame(!0)
                }
            },
            ajax: function(url, obj, succ, fail) {
                if (url && !(url.length < 1)) {
                    var params = null;
                    if (obj)
                        for (var key in params = "", obj) params += "&" + key + "=" + obj[key];
                    var type = "post";
                    obj || (type = "get");
                    var hr = new Laya.HttpRequest,
                        sendstr = url;
                    console.log("ajax:", sendstr), hr.send(sendstr, params, type, "text"), hr.once(Laya.Event.COMPLETE, this, function(e) {
                        var text = hr.data;
                        try {
                            text = JSON.parse(text)
                        } catch (e) {
                            text = hr.data
                        }
                        console.log("ajax succ", text), succ(text)
                    }), hr.once(Laya.Event.ERROR, this, function(e) {
                        console.log("ajax fail", e), fail(e)
                    })
                }
            }
        };
        global.LAYA_RENDER = Render_Laya, global.DDSDK_Render = LAYA_RENDER
    }
    "undefined" != typeof define && define.amd ? define(function() {
        return DDSDK_InitRender
    }) : "undefined" != typeof module && module.exports && (module.exports = DDSDK_InitRender), global.DDSDK_InitRender = DDSDK_InitRender, global.DDSDK_Component = {}, global.DDSDK_Common = {}
}("undefined" != typeof window ? window : this),
function(global) {
    var Ani_width = 120,
        Ani_height = 120,
        Ani_Group = 0;
    global.DDSDK_Component.CAniAdView = class extends Laya.Sprite {
        constructor(kind) {
            if (super(), 0, kind = kind || 0, this.m_AniAD = 1 == kind ? DDSDK.getData("pubAD") : DDSDK.getData("aniAD"), this.m_AniAD) {
                Ani_Group++, this.m_Group = Ani_Group, this.group = "" + this.m_Group, this.m_SdkStyle = DDSDK.getData("sdkstyle"), this.m_Kind = kind;
                var adlist = this.m_AniAD.list;
                null == adlist && console.log("adlist is null...... ");
                for (var anilist = [], i = 0; i < adlist.length; i++) "group" in adlist[i] ? adlist[i].group == this.m_Group && anilist.push(adlist[i]) : anilist.push(adlist[i]);
                anilist.length < 1 && (anilist = adlist), this.m_AniList = [], this.m_Ani = null, this.m_BKImg = new Laya.Image, this.m_BKImg.skin = "tryplay/xuanfu_kuan.png", this.m_Text = new Laya.Label, this.m_Text.color = "#2A170F", this.m_Text.fontSize = 18, this.m_Text.bold = !0, this.m_Text.width = 128, this.m_Text.y = 128, this.m_Text.align = "center", this.redpoint = new Laya.Image, this.redpoint.width = 60, this.redpoint.height = 37, this.redpoint.x = 65, this.redpoint.y = 0, this.m_mask = new Laya.Image, this.m_mask.skin = "tryplay/animask.png", this.m_mask.width = 120, this.m_mask.height = 120, this.m_mask.x = 0, this.m_mask.y = 0;
                var style = DDSDK.getData("style");
                if (style && "aniAD" in style) switch (style.aniAD) {
                    case 1:
                        this.m_BKImg.skin = "tryplay/xuanfu_kuan-1.png", this.m_Text.color = "#E5FFFF";
                        break;
                    case 2:
                        this.m_BKImg.visible = !1, this.m_Text.visible = !1;
                        break;
                    case 3:
                        this.m_BKImg.skin = "tryplay/xuanfu_kuan-3.png", this.m_Text.color = "#E5FFFF"
                }
                this.addChild(this.m_BKImg), this.addChild(this.m_Text), "scale" in this.m_AniAD && this.scale(this.m_AniAD.scale.w, this.m_AniAD.scale.h), "pos" in this.m_AniAD && this.pos(this.m_AniAD.pos.x, this.m_AniAD.pos.y), "size" in this.m_AniAD && this.size(this.m_AniAD.size.w, this.m_AniAD.size.h);
                for (i = 0; i < anilist.length; i++) {
                    var anicfg = anilist[i];
                    switch (anicfg.redtype) {
                        case "Bk":
                            this.redpoint.skin = "tryplay/bk.png";
                            break;
                        case "newGame":
                            this.redpoint.skin = "tryplay/newgame.png";
                            break;
                        case "hot":
                            this.redpoint.skin = "tryplay/hot.png";
                            break;
                        default:
                            this.redpoint.skin = ""
                    }
                    var aniobj = null;
                    if (anicfg.atlas) {
                        var that = aniobj = new Laya.Animation;
                        aniobj.loadAtlas(anicfg.skin, Laya.Handler.create(null, function() {
                            var bounds = that.getGraphicBounds();
                            if (0 == that.m_SdkStyle) {
                                if (bounds.width > Ani_width) {
                                    var scale = Ani_width / bounds.width;
                                    that.scale(scale, scale)
                                }
                            } else 1 == that.m_SdkStyle && (Ani_width = bounds.width, Ani_height = bound.height);
                            aniobj.size(Ani_width, Ani_height)
                        })), aniobj.interval = anicfg.interval, aniobj.play()
                    } else(aniobj = new Laya.Image).size(120, 120), aniobj.skin = anicfg.skin;
                    aniobj && (0 == this.m_SdkStyle && aniobj.pos(3, 0), 1 == this.m_SdkStyle && (this.m_BKImg.visible = !1, this.m_Text.visible = !1), "pos" in anicfg && aniobj.pos(anicfg.pos.x, anicfg.pos.y), "size" in anicfg && aniobj.size(anicfg.size.w, anicfg.size.h), "scale" in anicfg && aniobj.scale(anicfg.scale.w, anicfg.scale.h), aniobj.dataSource = anicfg, aniobj.dataSource.kind = this.m_Kind, aniobj.on(Laya.Event.CLICK, aniobj, this.clickAniAD), aniobj.addChild(this.redpoint), this.m_AniList.push(aniobj), 0 == kind && (aniobj.mask = this.m_mask), aniobj.visible = !0), 1 == kind && this.setStyle(0)
                }
                this.m_Tween = null, this.m_Ani = null, this.m_CurAni = 0, this.showAni()
            }
        }
        show() {
            this.visible = !0, this.m_Y = this.y, this.showAni()
        }
        clickAniAD(e) {
            if ("dataSource" in this) {
                var data = this.dataSource,
                    ename = "sdk-aniad";
                "kind" in data && 1 == data.kind && (ename = "sdk-pubad"), DDSDK.logTag(ename, this.group), DDSDK.openADApp(data)
            }
        }
        setStyle(style) {
            0 == style ? (this.m_BKImg.visible = !1, this.m_Text.visible = !1) : 1 == style ? this.m_BKImg.visible = !1 : (this.m_BKImg.visible = !0, this.m_Text.visible = !0)
        }
        getTextObj() {
            return this.m_Text
        }
        getCurGName() {
            return this.m_Text.text
        }
        showAni() {
            this.m_Ani && this.m_Ani.visible && (this.m_Ani.visible = !1), 0 != this.m_AniList.length && (this.m_CurAni = parseInt(Math.random() * this.m_AniList.length), this.m_Ani = this.m_AniList[this.m_CurAni], "dataSource" in this.m_Ani ? (this.m_Ani.y = 3, this.m_Ani.visible = !0, this.m_Ani.dataSource.atlas ? this.m_Ani.play() : "tween" in this.m_AniAD && (0 != this.m_AniAD.tween.offsety1 || 0 != this.m_AniAD.tween.offsety2) && (this.m_Tween = Laya.Tween.to(this.m_Ani, {
                y: this.m_Ani.y + this.m_AniAD.tween.offsety1
            }, this.m_AniAD.tween.time1, Laya.Ease.elasticOut, Laya.Handler.create(this, function() {
                Laya.Tween.to(this.m_Ani, {
                    y: this.m_Ani.y + this.m_AniAD.tween.offsety2
                }, this.m_AniAD.tween.time2, Laya.Ease.elasticOut)
            }))), this.m_Text.text = this.m_Ani.dataSource.name, this.addChild(this.m_Ani), Laya.timer.once(this.m_Ani.dataSource.time, this, this.showAni)) : console.log("AniAd dataSource is null"))
        }
    }
}("undefined" != typeof window ? window : this),
function(global) {
    class CAppItem extends Laya.Sprite {
        constructor(type) {
            super(), this.type = type || 1
        }
        createChildren() {
            switch (super.createChildren(), this.bkImg = new Laya.Image, this.addChild(this.bkImg), this.createView(CAppItem.uiView), this.type) {
                case 2:
                    this.bkImg.skin = "tryplay/cty_btn3.png", this.size(108, 134), this.img_app.pos(14, 16), this.img_app.size(80, 80), this.img_hot.pos(75, 5), this.txt_name.pos(-15, 105);
                    break;
                case 3:
                    this.size(156, 186), this.img_app.pos(5, 5), this.img_app.size(145, 145), this.img_mask.removeSelf(), this.img_app.removeSelf(), this.img_hot.removeSelf(), this.addChild(this.img_app), this.img_hot.pos(125, 5), this.txt_name.pos(10, 156), this.bkImg.skin = "tryplay/bd_fav.png", this.txt_name.fontSize = 28, this.txt_name.color = "#c1f0ff";
                    break;
                case 4:
                    this.size(154, 154), this.img_app.pos(5, 5), this.img_app.size(144, 144), this.img_mask.removeSelf(), this.img_app.removeSelf(), this.img_hot.removeSelf(), this.addChild(this.img_app), this.img_hot.visible = !1, this.bkImg.visible = !1, this.txt_name.pos(10, 104), this.txt_name.fontSize = 22, this.txt_name.color = "#ffffff";
                    break;
                default:
                    this.img_app.size(120, 120)
            }
            this.img_hot.visible = !1
        }
        setData(data) {
            data && (this.m_Data = data, global.DDSDK_Common.setUrlSkin(this.img_app, data.skin), this.txt_name.text = "" + data.name, this.img_hot.visible = data.hot)
        }
    }
    CAppItem.uiView = {
        type: "View",
        props: {
            width: 120,
            height: 120
        },
        child: [{
            type: "Box",
            props: {
                y: 0,
                x: 0
            },
            child: [{
                type: "Image",
                props: {
                    y: 0,
                    x: 0,
                    width: 120,
                    var: "img_app",
                    height: 120
                }
            }, {
                type: "Image",
                props: {
                    y: 0,
                    x: 0,
                    width: 120,
                    var: "img_mask",
                    skin: "tryplay/mask.png",
                    renderType: "mask",
                    height: 120
                }
            }]
        }, {
            type: "Image",
            props: {
                y: -6,
                x: 88,
                var: "img_hot",
                skin: "tryplay/cty_icon_03.png"
            }
        }, {
            type: "Button",
            props: {
                width: 120,
                name: "null",
                height: 120
            }
        }, {
            type: "Label",
            props: {
                y: 123,
                x: -10,
                width: 140,
                var: "txt_name",
                text: "",
                overflow: "hidden",
                height: 24,
                fontSize: 24,
                font: "SimHei",
                color: "#065c9b",
                align: "center"
            }
        }]
    }, global.DDSDK_Component.CAppItem = CAppItem
}("undefined" != typeof window ? window : this),
function(global) {
    class CAppItem4 extends Laya.View {
        constructor() {
            super()
        }
        createChildren() {
            super.createChildren(), this.createView(CAppItem4.uiView)
        }
        setData(data) {
            if (data) {
                switch (this.m_Data = data, global.DDSDK_Common.setUrlSkin(this.bkimg, data.skin), data.redtype) {
                    case "Bk":
                        this.Redpoint.skin = "tryplay/bk.png";
                        break;
                    case "newGame":
                        this.Redpoint.skin = "tryplay/newgame.png";
                        break;
                    case "hot":
                        this.Redpoint.skin = "tryplay/hot.png";
                        break;
                    default:
                        this.Redpoint.skin = ""
                }
                this.txt_name.text = "" + data.name
            }
        }
        tweenAction(cb) {
            var that = this;
            DDSDK.getData("favShake") && Laya.Tween.to(that.btn_bkimg, {
                rotation: 45
            }, 100, Laya.Ease.elasticOut, Laya.Handler.create(that.btn_bkimg, function() {
                Laya.Tween.to(that.btn_bkimg, {
                    rotation: 0
                }, 100, Laya.Ease.elasticOut, Laya.Handler.create(that.btn_bkimg, function() {
                    Laya.Tween.to(that.btn_bkimg, {
                        rotation: -45
                    }, 100, Laya.Ease.elasticOut, Laya.Handler.create(that.btn_bkimg, function() {
                        Laya.Tween.to(that.btn_bkimg, {
                            rotation: 0
                        }, 100, Laya.Ease.elasticOut, Laya.Handler.create(that.btn_bkimg, function() {
                            cb && cb()
                        }))
                    }))
                }))
            }))
        }
    }
    CAppItem4.uiView = {
        type: "View",
        props: {
            width: 144,
            height: 144
        },
        compId: 1,
        child: [{
            type: "Button",
            props: {
                y: 71,
                x: 71,
                width: 144,
                var: "btn_bkimg",
                pivotY: 72,
                pivotX: 72,
                height: 144
            },
            child: [{
                type: "Image",
                props: {
                    y: 72,
                    x: 72,
                    width: 144,
                    var: "bkimg",
                    skin: "tryplay/144_144.png",
                    pivotY: 72,
                    pivotX: 72,
                    height: 144
                },
                child: [{
                    type: "Image",
                    props: {
                        width: 144,
                        var: "m_IconMask",
                        skin: "tryplay/144X144Mask1.png",
                        renderType: "mask",
                        height: 144
                    }
                }]
            }, {
                type: "Image",
                props: {
                    y: 126,
                    x: 73,
                    width: 144,
                    var: "m_mask",
                    skin: "tryplay/chti_frame_5.png",
                    sizeGrid: "10,10,10,10",
                    pivotY: 17,
                    pivotX: 72,
                    height: 35,
                    centerX: 1,
                    bottom: 0
                },
                child: [{
                    type: "Label",
                    props: {
                        y: -52,
                        x: 0,
                        width: 144,
                        var: "txt_name",
                        text: "Tên có 6 ký tự",
                        height: 32,
                        fontSize: 22,
                        font: "Arial",
                        color: "#ffffff",
                        centerY: 1,
                        centerX: 1,
                        align: "center"
                    }
                }]
            }, {
                type: "Image",
                props: {
                    y: -1,
                    x: 84,
                    width: 60,
                    var: "Redpoint",
                    skin: "tryplay/hot.png",
                    height: 38
                }
            }]
        }],
        animations: [{
            nodes: [{
                target: 1,
                keyframes: {
                    y: [{
                        value: 0,
                        tweenMethod: "linearNone",
                        tween: !0,
                        target: 1,
                        key: "y",
                        index: 0
                    }, {
                        value: 72,
                        tweenMethod: "linearNone",
                        tween: !0,
                        target: 1,
                        key: "y",
                        index: 10
                    }],
                    x: [{
                        value: 0,
                        tweenMethod: "linearNone",
                        tween: !0,
                        target: 1,
                        key: "x",
                        index: 0
                    }, {
                        value: 72,
                        tweenMethod: "linearNone",
                        tween: !0,
                        target: 1,
                        key: "x",
                        index: 10
                    }],
                    pivotY: [{
                        value: 0,
                        tweenMethod: "linearNone",
                        tween: !0,
                        target: 1,
                        key: "pivotY",
                        index: 0
                    }, {
                        value: 72,
                        tweenMethod: "linearNone",
                        tween: !0,
                        target: 1,
                        key: "pivotY",
                        index: 10
                    }],
                    pivotX: [{
                        value: 0,
                        tweenMethod: "linearNone",
                        tween: !0,
                        target: 1,
                        key: "pivotX",
                        index: 0
                    }, {
                        value: 72,
                        tweenMethod: "linearNone",
                        tween: !0,
                        target: 1,
                        key: "pivotX",
                        index: 10
                    }]
                }
            }],
            name: "ani1",
            id: 1,
            frameRate: 24,
            action: 0
        }]
    }, global.DDSDK_Component.CAppItem4 = CAppItem4
}("undefined" != typeof window ? window : this),
function(global) {
    class bkbtnUI extends Laya.View {
        constructor(type) {
            super()
        }
        createChildren() {
            super.createChildren(), this.createView(bkbtnUI.uiView)
        }
        init(i) {
            if (this.m_SdkStyle = DDSDK.getData("sdkstyle"), 1 == this.m_SdkStyle) this.m_img.skin = "tryplay/wywicon3.png";
            else {
                var style = DDSDK.getData("style");
                if (style && "hotBtns" in style) switch (style.hotBtns) {
                    case 1:
                        this.m_img.skin = "tryplay/wywicon.png", this.m_img.height = 93;
                        break;
                    case 2:
                        this.m_img.skin = "tryplay/wywicon2.png", this.m_img.height = 101;
                        break;
                    case 3:
                        this.m_img.skin = "tryplay/wywicon3.png";
                        break;
                    case 4:
                        this.m_img.skin = "tryplay/sdkyc_bkrukou-1.png", this.m_img.height = 92
                }
            }
            this.source = i
        }
        setSkin(skin) {
            this.m_img.skin = skin
        }
    }
    bkbtnUI.uiView = {
        type: "View",
        props: {
            width: 122,
            height: 69
        },
        child: [{
            type: "Image",
            props: {
                y: 3,
                x: 3,
                width: 122,
                var: "m_img",
                skin: "tryplay/wywicon3.png",
                height: 69
            }
        }]
    };
    class bkgameinfoUI extends Laya.View {
        constructor() {
            super()
        }
        createChildren() {
            super.createChildren(), this.createView(bkgameinfoUI.uiView)
        }
    }
    bkgameinfoUI.uiView = {
        type: "View",
        props: {
            width: 144,
            height: 144
        },
        child: [{
            type: "Image",
            props: {
                y: 0,
                x: 0,
                width: 144,
                var: "m_icon",
                skin: "tryplay/100_100.png",
                height: 144
            },
            child: [{
                type: "Image",
                props: {
                    y: 0,
                    x: 0,
                    width: 144,
                    var: "m_IconMask",
                    skin: "tryplay/144X144Mask1.png",
                    renderType: "mask",
                    height: 144
                }
            }]
        }]
    };
    class bkgameUI extends Laya.View {
        constructor() {
            super()
        }
        createChildren() {
            Laya.View.regComponent("Text", Laya.Text), Laya.View.regComponent("ui.bkgameinfoUI", bkgameinfoUI), super.createChildren(), this.createView(bkgameUI.uiView), this.init()
        }
        autosetSize() {
            var w = Laya.stage.width;
            this.m_ScaleX = w / this.width, this.m_ScaleY = this.m_ScaleX, this.scale(this.m_ScaleX, this.m_ScaleY)
        }
        init() {
            if (this.m_content1.visible = !1, this.m_content2.visible = !1, this.m_hotGames = DDSDK.getData("hotGames"), this.m_hotGames && !(this.m_hotGames.length < 1)) {
                var style = DDSDK.getData("style");
                if (style && "hotGames" in style) switch (style.hotGames) {
                    case 1:
                        this.m_bkimg.skin = "tryplay/sdk_liebiao_frame5-1.png", this.m_bkimg.sizeGrid = "43,8,38,7";
                        break;
                    case 3:
                        this.m_bkimg.skin = "tryplay/sdk_liebiao_frame5-3.png", this.m_bkimg.sizeGrid = "37,16,36,16", this.m_closeBtn.getChildAt(0).skin = "tryplay/sdk_liebiao_btn4-3.png"
                }
                this.m_CurDB = 0, this.m_CurCnt = -1, this.m_bDContent = !0, this.m_GamesInfo = [], this.m_GamesInfo2 = [];
                for (var i = 1; i <= 12; i++) {
                    var gi = this["m_gameinfo" + i];
                    style && "hotGames" in style && 3 == style.hotGames && (gi.skin = "tryplay/sdk_liebiao_frame3-3.png"), gi.on(Laya.Event.CLICK, this, this.onTapAD), this.m_GamesInfo.push(gi)
                }
                for (i = 1; i <= 4; i++) {
                    gi = this["m_rgameinfo" + i];
                    style && "hotGames" in style && 3 == style.hotGames && (gi.skin = "tryplay/sdk_liebiao_frame3-3.png"), gi.on(Laya.Event.CLICK, this, this.onTapAD), this.m_GamesInfo2.push(gi)
                }
                this.m_rgameinfo5.on(Laya.Event.CLICK, this, this.onTapAD), this.m_DragonBoneList = new global.DDSDK_Component.CDragonBoneList;
                var data = null;
                for (i = 0; i < this.m_hotGames.length; i++)(data = this.m_hotGames[i]) && data.ani && data.ani.length > 0 && this.m_DragonBoneList.load(data.ani);
                this.m_dbinfo.addChild(this.m_DragonBoneList), this.m_dbinfo.on(Laya.Event.CLICK, this, this.onTapAD), this.autosetSize(), this.refreshDlg(0), this.refreshDB()
            }
        }
        onTapAD(e) {
            var data = e.target.sourcedata;
            data ? (DDSDK.logTag("sdk-bkgame", data), DDSDK.openADApp(data)) : console.log("e.target.sourcedata is null!")
        }
        setGameInfo(obj, data) {
            obj == this.m_rgameinfo5 ? global.DDSDK_Common.setUrlSkin(obj, data.skin) : global.DDSDK_Common.setUrlSkin(obj.m_icon, data.skin), obj.sourcedata = data
        }
        getPageNum() {
            return this.m_hotGames && this.m_hotGames.length > 0 ? this.m_hotGames.length : 0
        }
        refreshDlg(idx) {
            if (this.m_CurCnt != idx) {
                this.m_CurDB = 0, this.m_CurCnt = idx, this.m_CurCnt >= this.m_hotGames.length && (this.m_CurCnt = 0);
                var gamelsit, list = (data = this.m_hotGames[this.m_CurCnt]).list;
                this.setGameInfo(this.m_rgameinfo5, list[Math.floor(Math.random() * list.length)]), this.m_content1.visible = !1, this.m_content2.visible = !1, "Templet" in Laya && data.ani ? (this.m_bDContent = !1, this.m_content2.visible = !0) : (this.m_bDContent = !0, this.m_content1.visible = !0), gamelsit = this.m_bDContent ? this.m_GamesInfo : this.m_GamesInfo2;
                for (var i = 0; i < gamelsit.length; i++) {
                    var data;
                    (data = list[i]) ? this.setGameInfo(gamelsit[i], data): gamelsit[i].visible = !1
                }
            }
        }
        refreshDB() {
            var data = this.m_hotGames[this.m_CurCnt];
            if (data && data.ani && data.ani.length > 0) {
                this.m_CurDB >= data.ani.length && (this.m_CurDB = 0);
                var time = 4e3;
                "time" in data.ani[this.m_CurDB] && (time = data.ani[this.m_CurDB].time);
                var ani = data.ani[this.m_CurDB];
                ani.bloaded ? (this.m_dbinfo.sourcedata = ani, this.m_DragonBoneList.playAni(ani)) : time = 100, this.m_CurDB++, DDSDK_Render.setTimeout(this.refreshDB.bind(this), time)
            }
        }
    }
    bkgameUI.uiView = {
        type: "View",
        props: {
            width: 640,
            height: 502
        },
        child: [{
            type: "Image",
            props: {
                y: 0,
                x: 0,
                width: 640,
                var: "m_bkimg",
                skin: "tryplay/chti_frame_7.png",
                sizeGrid: "43,269,28,24",
                height: 502
            }
        }, {
            type: "Box",
            props: {
                y: 91,
                x: 23,
                width: 598,
                var: "m_content1",
                height: 294
            },
            child: [{
                type: "HBox",
                props: {
                    y: -47,
                    x: -4,
                    width: 600,
                    space: 8,
                    height: 140,
                    align: "middle"
                },
                child: [{
                    type: "bkgameinfo",
                    props: {
                        x: 17,
                        width: 144,
                        var: "m_gameinfo1",
                        top: 0,
                        height: 144,
                        runtime: "ui.bkgameinfoUI"
                    }
                }, {
                    type: "bkgameinfo",
                    props: {
                        x: 133,
                        width: 144,
                        var: "m_gameinfo2",
                        top: 0,
                        height: 144,
                        runtime: "ui.bkgameinfoUI"
                    }
                }, {
                    type: "bkgameinfo",
                    props: {
                        x: 250,
                        width: 144,
                        var: "m_gameinfo3",
                        top: 0,
                        height: 144,
                        runtime: "ui.bkgameinfoUI"
                    }
                }, {
                    type: "bkgameinfo",
                    props: {
                        x: 367,
                        width: 144,
                        var: "m_gameinfo4",
                        top: 0,
                        height: 144,
                        runtime: "ui.bkgameinfoUI"
                    }
                }]
            }, {
                type: "HBox",
                props: {
                    y: 103,
                    x: -5,
                    width: 600,
                    space: 8,
                    height: 140,
                    align: "middle"
                },
                child: [{
                    type: "bkgameinfo",
                    props: {
                        x: 17,
                        width: 144,
                        var: "m_gameinfo5",
                        top: 0,
                        height: 144,
                        runtime: "ui.bkgameinfoUI"
                    }
                }, {
                    type: "bkgameinfo",
                    props: {
                        x: 133,
                        width: 144,
                        var: "m_gameinfo6",
                        top: 0,
                        height: 144,
                        runtime: "ui.bkgameinfoUI"
                    }
                }, {
                    type: "bkgameinfo",
                    props: {
                        x: 250,
                        width: 144,
                        var: "m_gameinfo7",
                        top: 0,
                        height: 144,
                        runtime: "ui.bkgameinfoUI"
                    }
                }, {
                    type: "bkgameinfo",
                    props: {
                        x: 367,
                        width: 144,
                        var: "m_gameinfo8",
                        top: 0,
                        height: 144,
                        runtime: "ui.bkgameinfoUI"
                    }
                }]
            }, {
                type: "HBox",
                props: {
                    y: 252,
                    x: -5,
                    width: 600,
                    space: 8,
                    height: 140,
                    align: "middle"
                },
                child: [{
                    type: "bkgameinfo",
                    props: {
                        x: 17,
                        width: 144,
                        var: "m_gameinfo9",
                        top: 0,
                        height: 144,
                        runtime: "ui.bkgameinfoUI"
                    }
                }, {
                    type: "bkgameinfo",
                    props: {
                        x: 133,
                        width: 144,
                        var: "m_gameinfo10",
                        top: 0,
                        height: 144,
                        runtime: "ui.bkgameinfoUI"
                    }
                }, {
                    type: "bkgameinfo",
                    props: {
                        x: 250,
                        width: 144,
                        var: "m_gameinfo11",
                        top: 0,
                        height: 144,
                        runtime: "ui.bkgameinfoUI"
                    }
                }, {
                    type: "bkgameinfo",
                    props: {
                        x: 367,
                        width: 144,
                        var: "m_gameinfo12",
                        top: 0,
                        height: 144,
                        runtime: "ui.bkgameinfoUI"
                    }
                }]
            }]
        }, {
            type: "Box",
            props: {
                y: 11,
                x: 5,
                width: 630,
                var: "m_content2",
                height: 470
            },
            child: [{
                type: "HBox",
                props: {
                    y: 316,
                    x: 2,
                    width: 630,
                    space: 15,
                    height: 140,
                    align: "middle"
                },
                child: [{
                    type: "bkgameinfo",
                    props: {
                        y: -2,
                        x: 0,
                        width: 144,
                        var: "m_rgameinfo1",
                        height: 144,
                        runtime: "ui.bkgameinfoUI"
                    }
                }, {
                    type: "bkgameinfo",
                    props: {
                        y: -2,
                        x: 159,
                        width: 144,
                        var: "m_rgameinfo2",
                        height: 144,
                        runtime: "ui.bkgameinfoUI"
                    }
                }, {
                    type: "bkgameinfo",
                    props: {
                        y: -2,
                        x: 317,
                        width: 144,
                        var: "m_rgameinfo3",
                        height: 144,
                        runtime: "ui.bkgameinfoUI"
                    }
                }, {
                    type: "bkgameinfo",
                    props: {
                        y: -2,
                        x: 476,
                        width: 144,
                        var: "m_rgameinfo4",
                        height: 144,
                        runtime: "ui.bkgameinfoUI"
                    }
                }]
            }, {
                type: "HBox",
                props: {
                    y: 33,
                    x: 362,
                    width: 268,
                    space: 8,
                    height: 268,
                    align: "middle"
                },
                child: [{
                    type: "Image",
                    props: {
                        width: 268,
                        var: "m_rgameinfo5",
                        skin: "tryplay/268x268.png",
                        height: 268
                    }
                }]
            }, {
                type: "Box",
                props: {
                    y: 16,
                    x: 3,
                    width: 350,
                    height: 264
                },
                child: [{
                    type: "Sprite",
                    props: {
                        y: 0,
                        x: 0,
                        width: 350,
                        var: "m_dbinfo",
                        height: 264
                    }
                }]
            }]
        }, {
            type: "Button",
            props: {
                y: 514,
                x: 291,
                width: 100,
                var: "m_closeBtn",
                height: 101
            },
            child: [{
                type: "Image",
                props: {
                    y: 1,
                    x: 1,
                    skin: "tryplay/juzhen_dk_btn_1.png"
                }
            }]
        }]
    }, global.DDSDK_Component.bkbtnUI = bkbtnUI, global.DDSDK_Component.bkgameUI = bkgameUI
}("undefined" != typeof window ? window : this),
function(global) {
    class bkgame1UI extends Laya.View {
        constructor() {
            super()
        }
        createChildren() {
            super.createChildren(), this.createView(bkgame1UI.uiView), this.m_closeBtn.visible = !1, this.init(), Laya.timer.frameLoop(500, this, this.tweenAction, [0])
        }
        init() {
            if (this.m_hotGames = DDSDK.getData("hotGames"), this.m_hotGames && !(this.m_hotGames.length < 1)) {
                var style = DDSDK.getData("style");
                if (style && "hotGames" in style) switch (style.hotGames) {
                    case 1:
                        this.bkimg.skin = "tryplay/sdk_liebiao_frame5-1.png", this.bkimg.sizeGrid = "43,8,38,7", this.m_closeBtn.skin = "tryplay/sdk_liebiao_btn4-1.png";
                        break;
                    case 2:
                        this.bkimg.skin = "tryplay/chti_frame_6.png", this.bkimg.sizeGrid = "26,47,25,46", this.m_closeBtn.skin = "tryplay/juzhen_dk_btn_1.png";
                        break;
                    case 3:
                        this.bkimg.skin = "tryplay/sdk_liebiao_frame5-3.png", this.bkimg.sizeGrid = "37,16,36,16", this.m_closeBtn.skin = "tryplay/sdk_liebiao_btn4-3.png"
                }
                this.m_CurCnt = -1, this.m_GamesInfo = [];
                for (var i = 1; i <= 6; i++) {
                    var gi = this["icon" + i],
                        redpoint = new Laya.Image;
                    redpoint.width = 80, redpoint.height = 55, gi.addChild(redpoint), redpoint.x = 120, redpoint.y = 0, gi.on(Laya.Event.CLICK, this, this.onTapAD), this.m_GamesInfo.push(gi)
                }
                this.refreshDlg(0)
            }
        }
        tweenAction(index) {
            var that = this;
            this.m_GamesInfo.length > 0 && index + 1 <= this.m_GamesInfo.length && this.tweenAction1(index, function() {
                that.tweenAction(index + 1)
            })
        }
        tweenAction1(index, cb) {
            var that = this;
            DDSDK.getData("favShake") && Laya.Tween.to(that.m_GamesInfo[index], {
                rotation: 45
            }, 100, Laya.Ease.elasticOut, Laya.Handler.create(that.m_GamesInfo[index], function() {
                Laya.Tween.to(that.m_GamesInfo[index], {
                    rotation: 0
                }, 100, Laya.Ease.elasticOut, Laya.Handler.create(that.m_GamesInfo[index], function() {
                    Laya.Tween.to(that.m_GamesInfo[index], {
                        rotation: -45
                    }, 100, Laya.Ease.elasticOut, Laya.Handler.create(that.m_GamesInfo[index], function() {
                        Laya.Tween.to(that.m_GamesInfo[index], {
                            rotation: 0
                        }, 100, Laya.Ease.elasticOut, Laya.Handler.create(that.m_GamesInfo[index], function() {
                            cb && cb()
                        }))
                    }))
                }))
            }))
        }
        onTapAD(e) {
            var data = e.target.sourcedata;
            data ? (DDSDK.logTag("sdk-bkgame", data), DDSDK.openADApp(data)) : console.log("e.target.sourcedata is null!")
        }
        setGameInfo(obj, data) {
            switch (global.DDSDK_Common.setUrlSkin(obj, data.skin), obj.sourcedata = data, obj.sourcedata.redtype) {
                case "Bk":
                    obj.getChildAt(0).skin = "tryplay/bk.png";
                    break;
                case "newGame":
                    obj.getChildAt(0).skin = "tryplay/newgame.png";
                    break;
                case "hot":
                    obj.getChildAt(0).skin = "tryplay/hot.png";
                    break;
                default:
                    obj.getChildAt(0).skin = ""
            }
        }
        getPageNum() {
            return this.m_hotGames && this.m_hotGames.length > 0 ? this.m_hotGames.length : 0
        }
        refreshDlg(idx) {
            if (this.m_CurCnt != idx) {
                this.m_CurCnt = idx, this.m_CurCnt >= this.m_hotGames.length && (this.m_CurCnt = 0);
                for (var list = (data = this.m_hotGames[this.m_CurCnt]).list, gamelsit = this.m_GamesInfo, i = 0; i < gamelsit.length; i++) {
                    var data;
                    (data = list[i]) ? this.setGameInfo(gamelsit[i], data): gamelsit[i].visible = !1
                }
            }
        }
    }
    bkgame1UI.uiView = {
        type: "View",
        props: {
            width: 640,
            height: 448
        },
        child: [{
            type: "Image",
            props: {
                y: 0,
                x: 0,
                width: 640,
                var: "bkimg",
                skin: "tryplay/chti_frame_6.png",
                sizeGrid: "26,47,25,46",
                height: 448
            }
        }, {
            type: "HBox",
            props: {
                y: 114,
                x: 114,
                space: 8,
                align: "top"
            },
            child: [{
                type: "Image",
                props: {
                    y: 103,
                    x: 98,
                    width: 196,
                    var: "icon1",
                    pivotY: 98,
                    pivotX: 98,
                    height: 196
                }
            }, {
                type: "Image",
                props: {
                    y: 103,
                    x: 506,
                    width: 196,
                    var: "icon3",
                    pivotY: 98,
                    pivotX: 98,
                    height: 196
                }
            }, {
                type: "Image",
                props: {
                    y: 103,
                    x: 302,
                    width: 196,
                    var: "icon2",
                    pivotY: 98,
                    pivotX: 98,
                    height: 196
                }
            }]
        }, {
            type: "HBox",
            props: {
                y: 330,
                x: 115,
                space: 8,
                align: "top"
            },
            child: [{
                type: "Image",
                props: {
                    y: 98,
                    x: 98,
                    width: 196,
                    var: "icon4",
                    pivotY: 98,
                    pivotX: 98,
                    height: 196
                }
            }, {
                type: "Image",
                props: {
                    y: 98,
                    x: 506,
                    width: 196,
                    var: "icon6",
                    pivotY: 98,
                    pivotX: 98,
                    height: 196
                }
            }, {
                type: "Image",
                props: {
                    y: 98,
                    x: 302,
                    width: 196,
                    var: "icon5",
                    pivotY: 98,
                    pivotX: 98,
                    height: 196
                }
            }]
        }, {
            type: "Button",
            props: {
                y: 473,
                x: 279,
                width: 99,
                var: "m_closeBtn",
                mouseEnabled: !0,
                height: 100
            },
            child: [{
                type: "Image",
                props: {
                    skin: "tryplay/juzhen_dk_btn_1.png"
                }
            }]
        }]
    }, global.DDSDK_Component.bkgame1UI = bkgame1UI
}("undefined" != typeof window ? window : this),
function(global) {
    class bkgame2UI extends Laya.View {
        constructor() {
            super()
        }
        createChildren() {
            super.createChildren(), this.createView(bkgame2UI.uiView), this.m_list.vScrollBarSkin = "", this.m_closeBtn.visible = !1, this.init()
        }
        init() {
            if (this.buttomGroup = ["tryplay/juzhen_btn_1.png", "tryplay/juzhen_btn_2.png", "tryplay/juzhen_btn_3.png", "tryplay/juzhen_btn_4.png"], this.m_list.renderHandler = new Laya.Handler(this, this.onListRender), this.m_hotGames = DDSDK.getData("hotGames"), this.m_list.array = this.m_hotGames[0].list, this.m_hotGames && !(this.m_hotGames.length < 1)) {
                var style = DDSDK.getData("style");
                if (style && "hotGames" in style) switch (style.hotGames) {
                    case 1:
                        this.bkimg.skin = "tryplay/sdk_liebiao_frame5-1.png", this.bkimg.sizeGrid = "43,8,38,7", this.m_closeBtn.skin = "tryplay/sdk_liebiao_btn4-1.png";
                        break;
                    case 2:
                        this.bkimg.skin = "tryplay/chti_frame_6.png", this.bkimg.sizeGrid = "26,47,25,46", this.m_closeBtn.skin = "tryplay/juzhen_dk_btn_1.png";
                        break;
                    case 3:
                        this.bkimg.skin = "tryplay/sdk_liebiao_frame5-3.png", this.bkimg.sizeGrid = "37,16,36,16", this.m_closeBtn.skin = "tryplay/sdk_liebiao_btn4-3.png"
                }
                this.isMove = !1;
                var that = this;
                setInterval(function() {
                    that.downOrUp()
                }, 50)
            }
        }
        downOrUp() {
            this.m_list.scrollBar.value <= 0 && (this.isMove = !1), this.m_list.scrollBar.value >= this.m_list.scrollBar.max && (this.isMove = !0), 0 == this.isMove ? this.m_list.scrollBar.value += 1 : this.m_list.scrollBar.value -= 1
        }
        onListRender(cell, index) {
            if (cell.dataSource) {
                var num = Math.floor(4 * Math.random());
                switch (console.log("随机的值", num), cell.getChildAt(0).getChildAt(0).getChildAt(0).skin = cell.dataSource.skin, cell.getChildAt(0).getChildAt(0).getChildAt(1).skin = this.buttomGroup[num], cell.getChildAt(0).getChildAt(0).getChildAt(1).getChildAt(0).text = cell.dataSource.name, cell.dataSource.redtype) {
                    case "Bk":
                        cell.getChildAt(0).getChildAt(1).skin = "tryplay/bk.png";
                        break;
                    case "newGame":
                        cell.getChildAt(0).getChildAt(1).skin = "tryplay/newgame.png";
                        break;
                    case "hot":
                        cell.getChildAt(0).getChildAt(1).skin = "tryplay/hot.png";
                        break;
                    default:
                        cell.getChildAt(0).getChildAt(1).skin = ""
                }
            }
            cell.on(Laya.Event.CLICK, this, this.onTapAD)
        }
        onTapAD(e) {
            var data = e.target.parent.dataSource;
            data ? (DDSDK.logTag("sdk-bkgame", data), DDSDK.openADApp(data)) : console.log("e.target.sourcedata is null!")
        }
    }
    bkgame2UI.uiView = {
        type: "View",
        props: {
            width: 590,
            renderType: "render",
            height: 640
        },
        child: [{
            type: "Image",
            props: {
                y: 0,
                x: 0,
                width: 590,
                var: "bkimg",
                skin: "tryplay/juzhen_frame_1.png",
                sizeGrid: "26,30,25,29",
                height: 640
            }
        }, {
            type: "Button",
            props: {
                y: 657,
                x: 250,
                width: 99,
                var: "m_closeBtn",
                mouseEnabled: !0,
                height: 100
            },
            child: [{
                type: "Image",
                props: {
                    skin: "tryplay/juzhen_dk_btn_1.png"
                }
            }]
        }, {
            type: "List",
            props: {
                y: 10,
                x: 0,
                width: 590,
                var: "m_list",
                spaceY: 10,
                spaceX: 10,
                height: 621
            },
            child: [{
                type: "Box",
                props: {
                    y: 0,
                    x: 15,
                    width: 180,
                    renderType: "render",
                    height: 233
                },
                child: [{
                    type: "Button",
                    props: {
                        y: 0,
                        x: 0,
                        width: 180,
                        height: 233
                    },
                    child: [{
                        type: "Image",
                        props: {
                            y: 98,
                            x: 98,
                            width: 180,
                            var: "m_icon",
                            skin: "tryplay/juzhen_frame_3.png",
                            sizeGrid: "23,18,23,18",
                            pivotY: 98,
                            pivotX: 98,
                            height: 233
                        },
                        child: [{
                            type: "Image",
                            props: {
                                y: 1,
                                x: 1,
                                width: 178,
                                var: "m_gameIcon",
                                skin: "tryplay/100_100.png",
                                height: 179
                            },
                            child: [{
                                type: "Image",
                                props: {
                                    width: 178,
                                    var: "m_IconMask",
                                    skin: "tryplay/juzhen_frame_2.png",
                                    sizeGrid: "15,20,11,21",
                                    renderType: "mask",
                                    height: 179
                                }
                            }]
                        }, {
                            type: "Image",
                            props: {
                                y: 179,
                                x: 0,
                                var: "m_buttom",
                                skin: "tryplay/juzhen_btn_4.png"
                            },
                            child: [{
                                type: "Label",
                                props: {
                                    y: 0,
                                    x: 0,
                                    width: 180,
                                    valign: "middle",
                                    text: "Cây trồng nổi giận",
                                    height: 54,
                                    fontSize: 26,
                                    color: "#ffffff",
                                    align: "center"
                                }
                            }]
                        }]
                    }, {
                        type: "Image",
                        props: {
                            y: 0,
                            x: 92,
                            var: "m_red",
                            skin: "tryplay/hot.png"
                        }
                    }]
                }]
            }]
        }]
    }, global.DDSDK_Component.bkgame2UI = bkgame2UI
}("undefined" != typeof window ? window : this),
function(global) {
    global.DDSDK_Common.setUrlSkin = function(skinObj, url) {
        return void 0 !== url && (skinObj.skin = url, !0)
    }
}("undefined" != typeof window ? window : this),
function(global) {
    class CDragonBone extends Laya.Sprite {
        constructor() {
            super()
        }
        loadAni(ani) {
            if ("Templet" in Laya && !ani.bloaded && ani.dragonbone) {
                this.sourcedata = ani, this.m_skeleton = null;
                var dinfo = ani.dragonbone;
                this.m_AniPath = dinfo.res + dinfo.name + ".sk";
                var Templet = Laya.Templet,
                    Event = Laya.Event;
                this.m_Factory = new Templet, this.m_Factory._addReference(), this.m_Factory.on(Event.COMPLETE, this, this.parseComplete), this.m_Factory.on(Event.ERROR, this, this.onError), this.m_Factory.loadAni(this.m_AniPath)
            }
        }
        parseComplete() {
            this.m_skeleton = this.m_Factory.buildArmature(0), this.addChild(this.m_skeleton), this.sourcedata.bloaded = !0, this.pos(0, 294), this.play()
        }
        onError(e) {
            console.log("----load fail:", this.m_AniPath, e)
        }
        play() {
            this.m_skeleton.play(this.sourcedata.dragonbone.animation, !0)
        }
    }
    global.DDSDK_Component.CDragonBoneList = class extends Laya.Sprite {
        constructor() {
            super(), this.init()
        }
        init() {
            this.m_DBList = []
        }
        load(anilist) {
            for (var i = 0; i < anilist.length; i++) {
                var ani = anilist[i];
                if (ani.dragonbone) {
                    var dbname = ani.dragonbone.name;
                    if (dbname || (dbname = ani.ename), !this.m_DBList[dbname]) {
                        var db = new CDragonBone;
                        db.loadAni(ani), this.m_DBList[dbname] = db, this.addChild(db)
                    }
                }
            }
        }
        playAni(ani) {
            var node = null;
            for (var ename in this.m_DBList)(node = this.m_DBList[ename]) && (node.visible = !1);
            var dbname = ani.dragonbone.name;
            dbname || (dbname = ani.ename), (node = this.m_DBList[dbname]) && (node.visible = !0)
        }
    }
}("undefined" != typeof window ? window : this),
function(global) {
    class favbtnUI extends Laya.View {
        constructor() {
            super()
        }
        createChildren() {
            super.createChildren(), this.createView(favbtnUI.uiView), this.init()
        }
        init() {
            this.num = 0, this.on(Laya.Event.CLICK, this, this.onTapBtn)
        }
        onTapBtn(e) {
            this.num++, DDSDK_Render.getFavAD() && (DDSDK_Render.getFavAD().popup(), this.num % 2 == 0 && (DDSDK_Render.getFavAD().visible = !1))
        }
        setSkin(skin) {
            this.favbtn_img.skin = skin
        }
    }
    favbtnUI.uiView = {
        type: "View",
        props: {
            width: 35,
            height: 125
        },
        child: [{
            type: "Image",
            props: {
                y: 0,
                x: 0,
                width: 35,
                var: "favbtn_img",
                skin: "tryplay/xbqq_xk17.png",
                height: 125
            }
        }]
    }, global.DDSDK_Component.favbtnUI = favbtnUI
}("undefined" != typeof window ? window : this),
function(global) {
    global.DDSDK_Component.CFavorListView = class extends Laya.View {
        constructor(row, col, type) {
            switch (super(), type = type || 1, this.m_Type = type, this.m_bHorizontal = !0, row < col && (this.m_bHorizontal = !1), this.m_BKImg = new Laya.Image, this.m_Txt = new Laya.Image, this.m_Txt.skin = "tryplay/xbqq_xk17.png", this.m_Txt.scale(1.2, 1.2), this.m_CloseCB = null, this.addChild(this.m_BKImg), this.addChild(this.m_Txt), this.m_Type) {
                case 1:
                    this.m_BKImg.skin = "tryplay/xbqq_xk15.png", this.m_BKImg.sizeGrid = "12,12,12,12", this.m_SType = 2;
                    break;
                case 3:
                    this.m_BKImg.skin = "tryplay/bd_fav_bg.png", this.m_BKImg.sizeGrid = "8,24,8,24", this.m_SType = 3, this.m_Txt.visible = !1;
                    break;
                case 4:
                    this.m_BKImg.skin = "tryplay/chti_frame_4.png", this.m_BKImg.sizeGrid = "10,10,10,10", this.m_Txt.visible = !1, this.m_SType = 4;
                    break;
                default:
                    this.m_BKImg.skin = "tryplay/sdkyc_bkbackg.png", this.m_BKImg.sizeGrid = "15,11,19,15", this.m_Type = 0, this.m_SType = 2
            }
            3 == this.m_Type && (this.m_Title = new Laya.Label, this.m_Title.text = "Mini game", this.m_Title.color = "#80BCF9", this.m_Title.fontSize = 40, this.m_Title.bold = !0, this.m_Title.width = 210, this.m_Title.y = 12, this.m_Title.align = "center", this.addChild(this.m_Title)), this.m_ListView = new global.DDSDK_Component.CListView("favList", this.m_SType), this.m_ListView.setViewGrid(row, col), this.m_SType < 3 && this.m_ListView.setTextStyle(null, 20, !0, 9800841), this.addChild(this.m_ListView), this.on(Laya.Event.CLICK, this, this.onTap), this.refresh(), this.cacheAsBitmap = !0, DDSDK.getData("sdkstyle"), this.visible = !1
        }
        onTap(e) {
            if (e.target && e.target.parent && e.target.parent.m_Data && (e.target.parent instanceof global.DDSDK_Component.CAppItem || e.target.parent instanceof global.DDSDK_Component.CAppItem4)) {
                var data = e.target.parent.m_Data;
                DDSDK.logTag("sdk-favor", data), console.log("--------------------", data)
            }
        }
        popup() {
            this.refresh(), this.refreshList(), this.visible = !0
        }
        refresh() {
            var extend = 25;
            this.m_bHorizontal ? 1 == this.m_Type && (extend = 10) : 1 == this.m_Type && (extend = 20);
            var w = this.m_ListView.width + extend,
                h = this.m_ListView.height;
            h < this.m_Txt.height && (h = this.m_Txt.height), 0 == this.m_Type ? this.m_Txt.x = 15 : this.m_Txt.x = 2, this.m_Txt.y = (h - this.m_Txt.height) / 2 - 10;
            var offsetx = 30;
            2 == this.m_Type && (this.m_Txt.x += 15, offsetx = 22), 3 == this.m_Type && (this.m_ListView.x = 38, this.m_ListView.y = 80, this.m_BKImg.size(1e3, 287), this.m_Title.x = (1e3 - this.m_Title.width) / 2), 4 == this.m_Type ? (this.m_ListView.x = this.m_ListView.y = 0, this.m_BKImg.size(this.m_ListView.width, this.m_ListView.height), this.m_ListView.y = 10) : (this.m_ListView.x = this.m_Txt.x + offsetx, this.m_ListView.y = 15, 0 != this.m_Type && 1 != this.m_Type || (this.m_ListView.x -= 15), this.m_BKImg.size(w, h))
        }
        refreshList() {
            this.m_ListView.nextData(), Laya.timer.once(DDSDK.getData("FavRefreshTime"), this, this.refreshList), this.cacheAsBitmap = !0
        }
        setViewGrid(row, col) {
            this.m_view.setViewGrid(row, col);
            var w = this.m_view.width,
                h = this.m_view.height;
            this.m_txt.pos((w - this.m_txt.textWidth) / 2, 20), this.m_view.pos(0, 90), this.size(w, h)
        }
    }
}("undefined" != typeof window ? window : this),
function(global) {
    global.DDSDK_Component.CFavorListView1 = class extends Laya.Sprite {
        constructor(row, col, type) {
            switch (super(), type = type || 1, this.m_Type = type, this.m_bHorizontal = !0, row < col && (this.m_bHorizontal = !1), this.m_BKImg = new Laya.Image, this.m_Txt = new Laya.Image, this.m_Txt.skin = "tryplay/xbqq_xk17.png", this.m_Txt.scale(1.2, 1.2), this.addChild(this.m_BKImg), this.addChild(this.m_Txt), this.m_Type) {
                case 1:
                    this.m_BKImg.skin = "tryplay/xbqq_xk15.png", this.m_BKImg.sizeGrid = "12,12,12,12", this.m_SType = 2;
                    break;
                case 3:
                    this.m_BKImg.skin = "tryplay/bd_fav_bg.png", this.m_BKImg.sizeGrid = "8,24,8,24", this.m_SType = 3, this.m_Txt.visible = !1;
                    break;
                case 4:
                    this.m_BKImg.skin = "tryplay/chti_frame_4.png", this.m_BKImg.sizeGrid = "10,10,10,10", this.m_Txt.visible = !1, this.m_SType = 4;
                    break;
                default:
                    this.m_BKImg.skin = "tryplay/sdkyc_bkbackg.png", this.m_BKImg.sizeGrid = "15,11,19,15", this.m_Type = 0, this.m_SType = 2
            }
            3 == this.m_Type && (this.m_Title = new Laya.Label, this.m_Title.text = "Mini game", this.m_Title.color = "#80BCF9", this.m_Title.fontSize = 40, this.m_Title.bold = !0, this.m_Title.width = 210, this.m_Title.y = 12, this.m_Title.align = "center", this.addChild(this.m_Title)), this.m_ListView = new global.DDSDK_Component.CListView("favList", this.m_SType), this.m_ListView.setViewGrid(row, col), this.m_SType < 3 && this.m_ListView.setTextStyle(null, 20, !0, 9800841), this.addChild(this.m_ListView), this.on(Laya.Event.CLICK, this, this.onTap), this.refresh(), this.cacheAsBitmap = !0, DDSDK.getData("sdkstyle")
        }
        onTap(e) {
            if (e.target && e.target.parent && e.target.parent.m_Data && (e.target.parent instanceof global.DDSDK_Component.CAppItem || e.target.parent instanceof global.DDSDK_Component.CAppItem4)) {
                var data = e.target.parent.m_Data;
                DDSDK.logTag("sdk-favor", data), console.log("--------------------", data)
            }
        }
        refresh() {
            var extend = 25;
            this.m_bHorizontal ? 1 == this.m_Type && (extend = 10) : 1 == this.m_Type && (extend = 20);
            var w = this.m_ListView.width + extend,
                h = this.m_ListView.height;
            h < this.m_Txt.height && (h = this.m_Txt.height), 0 == this.m_Type ? this.m_Txt.x = 15 : this.m_Txt.x = 2, this.m_Txt.y = (h - this.m_Txt.height) / 2 - 10;
            var offsetx = 30;
            2 == this.m_Type && (this.m_Txt.x += 15, offsetx = 22), 3 == this.m_Type && (this.m_ListView.x = 38, this.m_ListView.y = 80, this.m_BKImg.size(1e3, 287), this.m_Title.x = (1e3 - this.m_Title.width) / 2), 4 == this.m_Type ? (this.m_ListView.x = this.m_ListView.y = 0, this.m_BKImg.size(this.m_ListView.width, this.m_ListView.height), this.m_ListView.y = 10) : (this.m_ListView.x = this.m_Txt.x + offsetx, this.m_ListView.y = 15, 0 != this.m_Type && 1 != this.m_Type || (this.m_ListView.x -= 15), this.m_BKImg.size(w, h))
        }
        refreshList() {
            this.m_ListView.nextData(), Laya.timer.once(DDSDK.getData("FavRefreshTime"), this, this.refreshList), this.cacheAsBitmap = !0
        }
        setViewGrid(row, col) {
            this.m_view.setViewGrid(row, col);
            var w = this.m_view.width,
                h = this.m_view.height;
            this.m_txt.pos((w - this.m_txt.textWidth) / 2, 20), this.m_view.pos(0, 90), this.size(w, h)
        }
    }
}("undefined" != typeof window ? window : this),
function(global) {
    global.DDSDK_Component.CFavPanel = class extends Laya.Sprite {
        constructor() {
            super(), this.init()
        }
        init() {
            this.m_ListView = new global.DDSDK_Component.CListView("favList", 4), this.addChild(this.m_ListView), this.m_ListView.setViewGrid(4, 1), this.m_ListView.setNameVisible(), this.m_ListView.pos(0, 0), this.on(Laya.Event.CLICK, this, this.OnTap)
        }
        refreshList() {
            this.m_ListView.nextData(), Laya.timer.once(DDSDK.getData("FavRefreshTime"), this, this.refreshList)
        }
        refresh() {
            this.m_ListView.refresh()
        }
        OnTap(e) {
            if (e.target && e.target.parent && e.target.parent.m_Data && (e.target.parent instanceof global.DDSDK_Component.CAppItem || e.target.parent instanceof global.DDSDK_Component.CAppItem4)) {
                var data = e.target.parent.m_Data;
                DDSDK.logTag("sdk-trydlg-favor", data)
            }
        }
        OnMoreGame(e) {
            var source = DDSDK.getData("moreGame");
            DDSDK.openADApp(source)
        }
        OnRefresh(e) {
            this.m_ListView.nextData()
        }
    }
}("undefined" != typeof window ? window : this),
function(global) {
    global.DDSDK_Component.CHotGames = class extends Laya.Sprite {
        constructor() {
            super(), this.init()
        }
        init() {
            if (this.m_BTNList = [], this.m_hotGames = DDSDK.getData("hotGames"), this.m_hotGames && !(this.m_hotGames.length < 1)) {
                for (var i = 0; i < this.m_hotGames.length; i++) {
                    var btn = new global.DDSDK_Component.bkbtnUI;
                    btn.init(i), btn.on(Laya.Event.CLICK, this, this.onTapBtn), this.m_BTNList.push(btn)
                }
                if (this.m_mask = new Laya.Sprite, this.m_mask.size(Laya.stage.width, Laya.stage.height), this.m_mask.graphics.drawRect(0, 0, Laya.stage.width, Laya.stage.height, "#000000"), this.m_mask.alpha = .4, this.addChild(this.m_mask), 1 == DDSDK.getData("sdkstyle"))
                    if (this.bkstyle = DDSDK.getData("style"), this.bkstyle && "bkgame" in this.bkstyle) switch (this.bkstyle.bkgame) {
                        case 1:
                            this.m_BKGame = new global.DDSDK_Component.bkgame1UI;
                            break;
                        case 2:
                            this.m_BKGame = new global.DDSDK_Component.bkgame2UI
                    } else this.m_BKGame = new global.DDSDK_Component.bkgame1UI;
                    else this.bkstyle = DDSDK.getData("style"), this.m_BKGame = new global.DDSDK_Component.bkgameUI;
                this.addChild(this.m_BKGame), this.m_BKGame.m_closeBtn.on(Laya.Event.CLICK, this, this.onTapClose), this.m_mask.on(Laya.Event.CLICK, this, this.onTapClose), this.refreshDlg(), this.Show(!1)
            }
        }
        refreshDlg() {
            var x = (Laya.stage.width - this.m_BKGame.width * this.m_BKGame.scaleX) / 2,
                y = (Laya.stage.height - this.m_BKGame.height * this.m_BKGame.scaleY) / 2;
            this.m_BKGame.pos(x, y)
        }
        showMask(bshow) {
            this.m_mask.visible = bshow
        }
        setScale(x, y) {
            this.m_BKGame.scale(x, y), this.refreshDlg()
        }
        onTapClose(e) {
            this.visible = !1
        }
        onTapBtn(e) {
            var idx = 0;
            "source" in e.target && (idx = e.target.source), this.showByIdx(idx)
        }
        showByIdx(idx) {
            1 == this.bkstyle.bkgame && this.m_BKGame.refreshDlg(idx), this.visible = !0
        }
        showAll(bshow) {
            for (var i = 0; i < this.m_BTNList.length; i++) this.m_BTNList[i].visible = bshow;
            this.Show(bshow)
        }
        Show(bshow) {
            this.visible = bshow
        }
        getBtns() {
            return this.m_BTNList
        }
    }
}("undefined" != typeof window ? window : this),
function(global) {
    class trydlgItemUI extends Laya.View {
        constructor() {
            super()
        }
        createChildren() {
            super.createChildren(), this.createView(trydlgItemUI.uiView), this.m_btn.on(Laya.Event.CLICK, this, this.onTapBtn), this.m_iconBtn.on(Laya.Event.CLICK, this, this.onTapBtn)
        }
        setData(data) {
            var skin;
            switch (this.m_Data = data, this.m_name.text = data.name, this.m_lab_btn.text = data.money, data.mskin && (skin = data.mskin), global.DDSDK_Common.setUrlSkin(this.m_LMD, skin), global.DDSDK_Common.setUrlSkin(this.m_icon, data.skin), data.kind) {
                case "pubtn":
                    DDSDK.canGetReward(data) || (this.m_btn_img.skin = "tryplay/cty_btn4.png", this.m_lab_btn.fontSize = 22, this.m_lab_btn.text = "Nhập tài khoản", this.m_lab_btn.y = 203, this.m_lab_btn.x = 18, this.m_lab_btn.align = "center", this.m_LMD.visible = !1, console.log("come in"));
                    break;
                case "kefubtn":
                    DDSDK.canGetReward(data) || (this.m_btn_img.skin = "tryplay/cty_btn4.png", this.m_lab_btn.fontSize = 22, this.m_lab_btn.text = "Dịch vụ", this.m_lab_btn.y = 203, this.m_lab_btn.x = 18, this.m_lab_btn.align = "center", this.m_LMD.visible = !1, console.log("come in 2"));
                    break;
                default:
                    DDSDK.canGetReward(data) || (this.m_btn_img.skin = "tryplay/cty_btn4.png", this.m_lab_btn.fontSize = 24, this.m_lab_btn.text = "Bắt đầu trò chơi", this.m_lab_btn.y = 203, this.m_lab_btn.x = 18, this.m_lab_btn.align = "center", this.m_LMD.visible = !1, console.log("come in 3"))
            }
        }
        processData() {
            this.m_Data && DDSDK.processRewardData(this.m_Data)
        }
        onTapBtn(e) {
            this.processData()
        }
    }
    trydlgItemUI.uiView = {
        type: "View",
        props: {
            width: 188,
            height: 248
        },
        child: [{
            type: "Button",
            props: {
                y: 0,
                x: 0,
                width: 186,
                var: "m_iconBtn",
                height: 186
            },
            child: [{
                type: "Image",
                props: {
                    y: 0,
                    x: 1,
                    width: 186,
                    var: "m_icon",
                    skin: "tryplay/186x186.png",
                    height: 186
                },
                child: [{
                    type: "Image",
                    props: {
                        var: "m_IconMask",
                        skin: "tryplay/186x186_mask.png",
                        renderType: "mask"
                    }
                }]
            }]
        }, {
            type: "Image",
            props: {
                y: 154,
                x: 1,
                var: "m_mask",
                skin: "tryplay/cty_frame_2.png"
            }
        }, {
            type: "Label",
            props: {
                y: 156,
                x: 0,
                width: 188,
                var: "m_name",
                text: "Ta sẽ trở thành Hoàng đế thống trị",
                height: 31,
                fontSize: 24,
                font: "Arial",
                color: "#ffffff",
                align: "center"
            }
        }, {
            type: "Button",
            props: {
                y: 195,
                x: 0,
                width: 186,
                var: "m_btn",
                height: 46
            },
            child: [{
                type: "Image",
                props: {
                    y: 0,
                    x: 0,
                    width: 186,
                    var: "m_btn_img",
                    skin: "tryplay/cty_btn2.png",
                    sizeGrid: "0,27,0,27",
                    height: 46
                }
            }]
        }, {
            type: "Image",
            props: {
                y: 202,
                x: 23,
                width: 30,
                var: "m_LMD",
                skin: "tryplay/30x30.png",
                height: 30
            }
        }, {
            type: "Label",
            props: {
                y: 199,
                x: 33,
                width: 156,
                var: "m_lab_btn",
                text: "1",
                height: 43,
                fontSize: 30,
                font: "Arial",
                color: "#ffffff",
                align: "center"
            }
        }]
    };
    global.DDSDK_Component.CListPanel = class extends Laya.Sprite {
        constructor() {
            super(), this.init()
        }
        init() {
            this.m_List = new Laya.List, this.m_List.repeatX = 3, this.m_List.spaceY = 8, this.m_List.spaceX = 9, this.m_List.vScrollBarSkin = "", this.m_List.itemRender = trydlgItemUI, this.m_List.renderHandler = new Laya.Handler(this, this.updateItem), this.m_RewardsInfo = null, this.addChild(this.m_List), this.m_List.height = 658, this.getRewardsList()
        }
        getRewardsList() {
            var that = this;
            DDSDK.getRewardsList(function(data) {
                that.m_RewardsInfo = data, console.log("get rewards list success:", data), that.getAppList()
            }, function(data) {
                console.log("get rewards list fail:", data), DDSDK_Render.setTimeout(function() {
                    that.getRewardsList()
                }, 5e3)
            })
        }
        sortAppList() {
            if (this.m_Data) {
                var that = this;
                DDSDK.sortAppList(this.m_Data, function(data) {
                    that.m_Data = data, that.m_List.array = data
                })
            }
        }
        getAppList() {
            var that = this;
            DDSDK.getAppList(this.m_RewardsInfo, function(data) {
                that.m_Data = data, that.sortAppList()
            })
        }
        refresh() {
            this.getRewardsList()
        }
        updateItem(cell, index) {
            cell.dataSource && cell.setData(cell.dataSource)
        }
    }
}("undefined" != typeof window ? window : this),
function(global) {
    global.DDSDK_Component.CListView = class extends Laya.Image {
        constructor(type, stype, spx, spy) {
            super(), spx = spx || 20, spy = spy || 20, stype = stype || 1, this.m_listObjs = [], this.m_Data = null, this.stype = stype, this.setType(type), this.m_Row = 0, this.m_Col = 0, this.m_CellNum = 0, 3 == stype ? (this.cw = 192, this.ch = 206, this.hx = 0, this.hy = 0) : 4 == stype ? (this.cw = 148, this.ch = 159, this.hx = 5, this.hy = 0) : (this.cw = 120, this.ch = 150, this.hx = 20, this.hy = 20), this.on(Laya.Event.CLICK, this, function(event) {
                if (event.target.parent instanceof global.DDSDK_Component.CAppItem || event.target.parent instanceof global.DDSDK_Component.CAppItem4) {
                    var dataSource = event.target.parent.m_Data;
                    this.refreshData(dataSource), DDSDK.openADApp(dataSource)
                }
            }), this.refreshList()
        }
        refreshData(data) {
            if (this.m_Data) {
                for (var i = 0; i < this.m_Data.length; i++)
                    if (this.m_Data[i] == data) {
                        this.m_Data.splice(i, 1), this.m_Data.push(data);
                        break
                    } this.refresh()
            }
        }
        refreshList() {
            var a = 0;
            this.nextData(), Laya.timer.once(DDSDK.getData("FavRefreshTime"), this, this.refreshList), 4 == this.stype && this.m_listObjs.length > 0 && 1 == ++a && this.tweenAction(0)
        }
        setType(type) {
            this.m_Type = type, this.m_Data = DDSDK.clone(DDSDK.getData(type))
        }
        setData(data) {
            this.m_Data = data
        }
        setTextStyle(fname, size, bold, color) {
            for (var i = 0; i < this.m_listObjs.length; i++) {
                var item = this.m_listObjs[i];
                size && (item.txt_name.fontSize = size), bold && (item.txt_name.bold = bold), color && (item.txt_name.color = color), item.txt_name.align = "center"
            }
        }
        setNameVisible() {
            for (var i = 0; i < this.m_listObjs.length; i++) this.m_listObjs[i].m_mask.visible = !1
        }
        tweenAction(index) {
            var that = this;
            this.m_listObjs.length > 0 && index + 1 <= this.m_listObjs.length && this.m_listObjs[index].tweenAction(function() {
                that.tweenAction(index + 1)
            })
        }
        nextData() {
            if (this.m_Data) {
                for (var i = 0; i < this.m_CellNum; i++) {
                    var t = this.m_Data.shift();
                    this.m_Data.push(t)
                }
                this.refresh()
            }
        }
        setViewGrid(row, col) {
            this.m_Row = row, this.m_Col = col;
            var w = this.hx + row * this.cw,
                h = this.hy + col * this.ch;
            this.m_CellNum = function(w, h, cw, ch) {
                var ygrid = Math.trunc(h / ch),
                    xgrid = Math.trunc(w / cw);
                return xgrid * ygrid
            }(w, h, this.cw, this.ch), this.setSize(w, h)
        }
        refresh() {
            ! function(panel, cellnum, itemlist, data, stype, cw, ch, hx) {
                if ("undefined" != typeof DDSDK_Render) {
                    hx = hx || 0, stype = stype || 1;
                    var list = data;
                    if (!(void 0 === list || null == list || list.length < 1)) {
                        var width = panel.width,
                            xpos = (panel.height, hx),
                            ypos = 0;
                        if (cellnum > list.length && (cellnum = list.length), global.DDSDK_Component.CAppItem, cellnum > itemlist.length) {
                            var add = cellnum - itemlist.length;
                            for (i = 0; i < add; i++) {
                                var item = null;
                                4 == stype ? (item = new global.DDSDK_Component.CAppItem4, 1 == DDSDK.getData("sdkstyle") && (item.m_mask.visible = !0)) : item = new global.DDSDK_Component.CAppItem(stype), item.visible = !1, panel.addChild(item), itemlist.push(item)
                            }
                        }
                        for (var i = cellnum; i < itemlist.length; i++)(item = itemlist).visible = !1;
                        for (i = 0; i < cellnum; i++)(item = itemlist[i]).setData(list[i]), item.visible = !0, item.pos(xpos, ypos), (xpos += cw) + cw > width && (xpos = hx, ypos += ch)
                    }
                }
            }(this, this.m_CellNum, this.m_listObjs, this.m_Data, this.stype, this.cw, this.ch, this.hx)
        }
        setSize(width, height) {
            this.size(width, height), this.refresh()
        }
        getItemObjs() {
            return this.m_listObjs
        }
    }
}("undefined" != typeof window ? window : this),
function(global) {
    global.DDSDK_Component.CTipsDlg = class extends Laya.Sprite {
        constructor() {
            super(), this.init()
        }
        init() {
            this.m_Data = DDSDK.getData("try_tip"), this.m_Text = new Laya.Label, this.m_TextBK = new Laya.Image, this.m_Text.color = "#FFFFFF", this.m_Text.fontSize = 24, this.m_Text.bold = !0, this.m_TextBK.skin = "tryplay/cty_frame_08.png", this.m_TextBK.sizeGrid = "30,25,30,25";
            var width = DDSDK.getData("try_rewardtip").length * this.m_Text.fontSize;
            this.m_TextBK.size(width, 50), this.size(width, 50), this.m_TextBK.addChild(this.m_Text), this.addChild(this.m_TextBK), this.visible = !1
        }
        fixpos(x, y) {
            var tx, ty;
            tx = (this.m_TextBK.width - this.m_Text.width) / 2, ty = (this.m_TextBK.height - this.m_Text.height) / 2, this.m_Text.pos(tx, ty)
        }
        pos(x, y) {
            this.m_YPos = y + this.m_Data.y, super.pos.call(this, x, this.m_YPos)
        }
        tweenEnd() {
            this.visible = !1, this.y = this.m_YPos
        }
        showTip(msg) {
            this.m_Text.text = msg, this.visible = !0, this.alpha = 255, this.fixpos(), Laya.timer.once(this.m_Data.stime, this, this.tween)
        }
        tween() {
            Laya.Tween.to(this, {
                y: this.m_YPos + this.m_Data.offsety
            }, this.m_Data.mtime, null, Laya.Handler.create(this, this.tweenEnd)), Laya.Tween.to(this, {
                alpha: this.m_Data.alpha
            }, this.m_Data.atime)
        }
        OnTap(e) {}
    }
}("undefined" != typeof window ? window : this),
function(global) {
    var FBTN_BKIMG1 = "tryplay/cty_button_01.png",
        FBTN_SKIN2 = "tryplay/cqy2.png",
        FBTN_GIFT = "tryplay/cty_icon_02.png";
    global.DDSDK_Component.CTryBtn = class extends Laya.Sprite {
        constructor() {
            super(), this.init()
        }
        init() {
            this.m_BtnBK = null;
            var style = DDSDK.getData("style");
            if (style && "tryBtn" in style) switch (style.tryBtn) {
                case 1:
                    var try_finger = DDSDK.getData("try_finger");
                    this.m_BtnBK = new Laya.Animation;
                    var that = this.m_BtnBK;
                    this.m_BtnBK.loadAtlas(try_finger.skin, Laya.Handler.create(null, function() {
                        var bounds = that.getGraphicBounds();
                        that.size(bounds.width, bounds.height)
                    })), this.m_BtnBK.interval = try_finger.interval, this.m_BtnBK.play();
                    break;
                case 2:
                    this.m_BtnBK = new Laya.Image(FBTN_BKIMG1), this.m_BtnIcon = new Laya.Image(FBTN_SKIN2), this.m_BtnGift = new Laya.Image(FBTN_GIFT), this.m_BtnBK.addChild(this.m_BtnIcon), this.m_BtnBK.addChild(this.m_BtnGift), this.m_BtnIcon.pos(3, 13), this.m_BtnGift.pos(50, -20)
            }
            this.addChild(this.m_BtnBK), this.m_BtnBK.on(Laya.Event.CLICK, this, this.onTapBtn)
        }
        setSkin(skin) {
            this.m_BtnIcon.skin = null, this.m_BtnGift.skin = null, this.m_BtnBK.skin = skin
        }
        onTapBtn(e) {
            DDSDK_Render.getTryDlg() && (DDSDK.processRewardCache(), DDSDK_Render.getTryDlg().popup())
        }
    }
}("undefined" != typeof window ? window : this),
function(global) {
    global.DDSDK_Component.CTryDlg = class extends Laya.Sprite {
        constructor() {
            var t;
            super(), this.m_CloseCB = null, this.m_OpenCB = null, this.m_ScaleX = 1, this.m_ScaleY = 1, this.m_X = -1, this.m_Y = -1, this.m_mask = new Laya.Sprite, this.addChild(this.m_mask), this.m_Cont = new Laya.Sprite, this.addChild(this.m_Cont), this.m_BKImg = new Laya.Image, this.m_closeBtn = new Laya.Image, this.m_TryFirst = new Laya.Image, this.m_FavImg = new Laya.Image, this.m_TextBK = new Laya.Image, this.m_ListPanel = new global.DDSDK_Component.CListPanel, this.m_FavPanel = new global.DDSDK_Component.CFavPanel, this.m_TipDlg = new global.DDSDK_Component.CTipsDlg, this.m_Cont.addChild(this.m_BKImg), this.m_Cont.addChild(this.m_closeBtn), this.m_Cont.addChild(this.m_TryFirst), this.m_Cont.addChild(this.m_FavImg), this.m_Cont.addChild(this.m_ListPanel), this.m_Cont.addChild(this.m_FavPanel), this.m_Cont.addChild(this.m_TipDlg), (t = this.m_BKImg).skin = "tryplay/cty_btn6.png", t.sizeGrid = "89,0,16,0", t.size(606, 952), (t = this.m_FavImg).skin = "tryplay/cty_tit3.png", t.pos(85, 750), (t = this.m_closeBtn).skin = "tryplay/cty_btn5.png", t.pos(550, 20), this.m_ListPanel.pos(12, 78), this.m_FavPanel.pos(5, 800);
            var tx = (this.m_BKImg.width - this.m_TipDlg.width) / 2,
                ty = (this.m_BKImg.height - this.m_TipDlg.height) / 2;
            this.m_TipDlg.pos(tx, ty), this.m_bMask = !0, this.m_Width = Laya.stage.width, this.m_Height = Laya.stage.height, this.m_BKImg.on(Laya.Event.CLICK, this, this.OnClose), this.m_closeBtn.on(Laya.Event.CLICK, this, this.OnClose), this.on(Laya.Event.CLICK, this, this.OnClose), this.size(Laya.stage.width, Laya.stage.height), this.init(), this.refreshDlg()
        }
        init() {
            this.visible = !1, this.showMask(!0)
        }
        showMask(bmask) {
            this.m_bMask = bmask, this.m_mask.graphics.clear(), bmask && (this.m_mask.graphics.drawRect(0, 0, this.m_Width, this.m_Height, "#000000"), this.m_mask.alpha = .7)
        }
        setSize(w, h) {
            this.m_Width = w, this.m_Height = h, this.size(w, h), this.showMask(this.m_bMask), this.refreshDlg()
        }
        setScale(sx, sy) {
            this.m_ScaleX = sx, this.m_ScaleY = sy, this.refreshDlg()
        }
        getContX() {
            return this.m_Cont.x
        }
        getContY() {
            return this.m_Cont.y
        }
        setPos(x, y) {
            this.pos(x, y)
        }
        setContPos(x, y) {
            this.m_X = x, this.m_Y = y, this.refreshDlg()
        }
        refreshDlg() {
            var tx, ty, sx = this.m_ScaleX,
                sy = this.m_ScaleY; - 1 == this.m_X && -1 == this.m_Y ? (tx = (this.m_Width - this.m_BKImg.width * sx) / 2, ty = (this.m_Height - this.m_BKImg.height * sy) / 2, this.m_Cont.pos(tx, ty + this.m_TryFirst.height / 2)) : this.m_Cont.pos(this.m_X, this.m_Y), this.m_Cont.scale(sx, sy)
        }
        refresh() {
            this.m_ListPanel.refresh(), this.m_FavPanel.refresh()
        }
        popup() {
            this.visible = !0, this.m_OpenCB && this.m_OpenCB(), this.refresh(), DDSDK.logTag("sdk-trydlg", {
                type: "popup"
            })
        }
        OnClose(e) {
            if (e.target == this || e.target == this.m_closeBtn) {
                if (!this.visible) return;
                this.visible = !1, this.m_CloseCB && this.m_CloseCB()
            }
        }
        showTip(msg) {
            this.m_TipDlg.showTip(msg)
        }
        setCloseCB(cb) {
            this.m_CloseCB = cb
        }
        setOpenCB(cb) {
            this.m_OpenCB = cb
        }
        setViewGrid(row, col) {
            this.m_listView.setViewGrid(row, col), this.referPos()
        }
    }
}("undefined" != typeof window ? window : this),
function(global) {
    class ChouTiUI extends Laya.View {
        constructor() {
            super()
        }
        createChildren() {
            super.createChildren(), this.createView(ChouTiUI.uiView), this.m_TipDlg = new global.DDSDK_Component.CTipsDlg, this.addChild(this.m_TipDlg), this.init()
        }
        init() {
            var tx = (this.width - this.m_TipDlg.width) / 2,
                ty = (this.height - this.m_TipDlg.height) / 2;
            this.m_TipDlg.pos(tx, ty), this.list_m.renderHandler = new Laya.Handler(this, this.onListRender), this.getRewardsList()
        }
        getRewardsList() {
            var that = this;
            DDSDK.getRewardsList(function(data) {
                that.m_RewardsInfo = data, console.log("get rewards list success:", data), that.getAppList()
            }, function(data) {
                console.log("get rewards list fail:", data), DDSDK_Render.setTimeout(function() {
                    that.getRewardsList()
                }, 5e3)
            })
        }
        sortAppList() {
            if (this.m_Data) {
                var that = this;
                DDSDK.sortAppList(this.m_Data, function(data) {
                    that.m_Data = data, that.list_m.array = data
                })
            }
        }
        getAppList() {
            var that = this;
            DDSDK.getAppList(this.m_RewardsInfo, function(data) {
                that.m_Data = data, that.sortAppList()
            })
        }
        onListRender(cell, index) {
            if (cell.dataSource) {
                switch (cell.getChildByName("label_1").text = "X" + cell.dataSource.money, cell.getChildByName("img_pic").skin = cell.dataSource.skin, cell.getChildByName("img_TiLI").skin = cell.dataSource.mskin, cell.getChildByName("label_2").text = cell.dataSource.name, cell.dataSource.kind) {
                    case "pubtn":
                        DDSDK.canGetReward(cell.dataSource) ? cell.getChildByName("btn_Try").getChildByName("img_Try").skin = "tryplay/chti_btn_3.png" : cell.getChildByName("btn_Try").getChildByName("img_Try").skin = "tryplay/chti_btn_4.png";
                        break;
                    case "kefubtn":
                        DDSDK.canGetReward(cell.dataSource) ? cell.getChildByName("btn_Try").getChildByName("img_Try").skin = "tryplay/chti_btn_5.png" : cell.getChildByName("btn_Try").getChildByName("img_Try").skin = "tryplay/chti_btn_2.png";
                        break;
                    default:
                        DDSDK.canGetReward(cell.dataSource) ? cell.getChildByName("btn_Try").getChildByName("img_Try").skin = "tryplay/chti_btn_6.png" : cell.getChildByName("btn_Try").getChildByName("img_Try").skin = "tryplay/chti_btn_7.png"
                }
                switch (cell.dataSource.redtype) {
                    case "Bk":
                        cell.getChildByName("img_Redpoint").skin = "tryplay/bk.png";
                        break;
                    case "newGame":
                        cell.getChildByName("img_Redpoint").skin = "tryplay/newgame.png";
                        break;
                    case "hot":
                        cell.getChildByName("img_Redpoint").skin = "tryplay/hot.png";
                        break;
                    default:
                        cell.getChildByName("img_Redpoint").skin = ""
                }
                cell.getChildByName("btn_Try").on(Laya.Event.CLICK, this, this.OnClick, [index])
            }
        }
        OnClick(index) {
            this.processData(index)
        }
        showTip(msg) {
            this.m_TipDlg.showTip(msg)
        }
        refresh() {
            this.getRewardsList()
        }
        processData(index) {
            this.m_Data && DDSDK.processRewardData(this.m_Data[index])
        }
    }
    ChouTiUI.uiView = {
        type: "View",
        props: {
            width: 640,
            height: 1136
        },
        child: [{
            type: "Image",
            props: {
                y: 222,
                x: 18,
                width: 604,
                skin: "tryplay/chti_frame_1.png",
                sizeGrid: "104,45,45,231",
                height: 692
            },
            child: [{
                type: "List",
                props: {
                    y: 96,
                    x: 4,
                    width: 586,
                    var: "list_m",
                    vScrollBarSkin: " ",
                    spaceY: 2,
                    height: 579
                },
                child: [{
                    type: "Box",
                    props: {
                        y: 4,
                        x: 13,
                        width: 568,
                        var: "box_m",
                        renderType: "render",
                        height: 137
                    },
                    child: [{
                        type: "Image",
                        props: {
                            y: 14,
                            x: 0,
                            width: 439,
                            skin: "tryplay/chti_frame_2.png",
                            sizeGrid: "0,33,0,32",
                            height: 122
                        }
                    }, {
                        type: "Image",
                        props: {
                            y: 67,
                            x: 62,
                            width: 134,
                            skin: "tryplay/chti_frame_3.png",
                            sizeGrid: "25,25,36,25",
                            height: 144,
                            anchorY: .5,
                            anchorX: .5
                        }
                    }, {
                        type: "Image",
                        props: {
                            y: 0,
                            x: 1,
                            width: 122,
                            var: "img_pic",
                            skin: "tryplay/122x122.png",
                            name: "img_pic",
                            height: 122
                        }
                    }, {
                        type: "Image",
                        props: {
                            y: 33,
                            x: 139,
                            width: 35,
                            var: "img_TiLI",
                            skin: "tryplay/chti_frame_3.png",
                            name: "img_TiLI",
                            height: 35
                        }
                    }, {
                        type: "Label",
                        props: {
                            y: 30,
                            x: 182,
                            var: "label_1",
                            text: "X3",
                            name: "label_1",
                            fontSize: 26,
                            font: "Arial",
                            color: "#fff",
                            bold: !0
                        }
                    }, {
                        type: "Label",
                        props: {
                            y: 81,
                            x: 143,
                            var: "label_2",
                            text: "Hãy tiếp tục để nhận thêm năng lượng",
                            name: "label_2",
                            fontSize: 20,
                            font: "Arial",
                            color: "#fff"
                        }
                    }, {
                        type: "Button",
                        props: {
                            y: 24,
                            x: 440,
                            width: 128,
                            var: "btn_try",
                            name: "btn_Try",
                            height: 100
                        },
                        child: [{
                            type: "Image",
                            props: {
                                var: "img_Try",
                                skin: "tryplay/chti_btn_6.png",
                                name: "img_Try"
                            }
                        }]
                    }, {
                        type: "Image",
                        props: {
                            y: -4,
                            x: 64,
                            width: 61,
                            var: "img_Redpoint",
                            skin: "tryplay/bk.png",
                            name: "img_Redpoint",
                            height: 34
                        }
                    }]
                }]
            }, {
                type: "Button",
                props: {
                    y: 705,
                    x: 242,
                    width: 99,
                    var: "btn_close",
                    height: 96
                },
                child: [{
                    type: "Image",
                    props: {
                        skin: "tryplay/juzhen_dk_btn_1.png"
                    }
                }]
            }]
        }]
    };
    global.DDSDK_Component.CTryDlg1 = class extends Laya.Sprite {
        constructor() {
            super(), this.m_mask = new Laya.Sprite, this.addChild(this.m_mask), this.content = new ChouTiUI, this.addChild(this.content), this.m_ScaleX = 1, this.m_ScaleY = 1, this.m_X = -1, this.m_Y = -1, this.m_bMask = !0, this.m_Width = Laya.stage.width, this.m_Height = Laya.stage.height, this.c_Width = Laya.stage.width, this.c_Height = Laya.stage.height, this.content.pos(56, 56), this.m_CloseCB = null, this.m_OpenCB = null, this.size(Laya.stage.width, Laya.stage.height), this.init(), this.content.btn_close.on(Laya.Event.CLICK, this, this.OnClose), this.on(Laya.Event.CLICK, this, this.OnClose)
        }
        init() {
            this.visible = !1, this.showMask(!0), this.refreshDlg()
        }
        showMask(bmask) {
            this.m_bMask = bmask, this.m_mask.graphics.clear(), bmask && (this.m_mask.graphics.drawRect(0, 0, this.c_Width, this.c_Height, "#000000"), this.m_mask.alpha = .7)
        }
        OnClose(e) {
            if (e.target == this || e.target == this.content.btn_close) {
                if (!this.visible) return;
                this.visible = !1, this.m_CloseCB && this.m_CloseCB()
            }
        }
        setCloseCB(cb) {
            this.m_CloseCB = cb
        }
        setOpenCB(cb) {
            this.m_OpenCB = cb
        }
        popup() {
            this.visible = !0, this.m_OpenCB && this.m_OpenCB(), this.refresh(), DDSDK.logTag("sdk-trydlg", {
                type: "popup"
            })
        }
        setSize(w, h) {
            this.m_Height = h, this.m_Width = w, this.content.size(w, h), this.showMask(this.m_bMask), this.refreshDlg()
        }
        setScale(sx, sy) {
            this.m_ScaleX = sx, this.m_ScaleY = sy, this.refreshDlg()
        }
        getContX() {
            return this.content.x
        }
        getContY() {
            return this.content.y
        }
        setContPos(x, y) {
            this.m_X = x, this.m_Y = y, this.refreshDlg()
        }
        refresh() {
            this.content.refresh()
        }
        refreshDlg() {
            var tx, ty, sx = this.m_ScaleX,
                sy = this.m_ScaleY; - 1 == this.m_X && -1 == this.m_Y ? (tx = (this.m_Width - this.content.width * sx) / 2, ty = (this.m_Height - this.content.height * sy) / 2, this.content.pos(tx, ty)) : this.content.pos(this.m_X, this.m_Y), this.content.scale(sx, sy)
        }
    }
}("undefined" != typeof window ? window : this),
function(global) {
    class gamelistUI extends Laya.View {
        constructor() {
            super()
        }
        createChildren() {
            super.createChildren(), this.createView(gamelistUI.uiView), this.m_list.vScrollBarSkin = "", this.init()
        }
        init() {
            this.m_list.renderHandler = new Laya.Handler(this, this.onListRender), this.getAppList(), this.isMove = !1;
            var that = this;
            setInterval(function() {
                that.downOrUp()
            }, 10)
        }
        downOrUp() {
            this.m_list.scrollBar.value <= 0 && (this.isMove = !1), this.m_list.scrollBar.value >= this.m_list.scrollBar.max && (this.isMove = !0), 0 == this.isMove ? this.m_list.scrollBar.value += 1 : this.m_list.scrollBar.value -= 1
        }
        getAppList() {
            var data = DDSDK.getData("trydlglist");
            null == data && console.log("trygamelist is null......."), this.m_list.array = data
        }
        onListRender(cell, index) {
            cell.dataSource && (cell.getChildByName("lab_explain").text = cell.dataSource.explain, cell.getChildByName("m_icon").skin = cell.dataSource.bigicon, cell.getChildByName("m_little").skin = cell.dataSource.skin, cell.getChildByName("lab_name").text = cell.dataSource.name), cell.on(Laya.Event.CLICK, this, this.onTapAD)
        }
        onTapAD(e) {
            var data = e.target.dataSource;
            data ? (DDSDK.logTag("sdk-trygame", data), DDSDK.openADApp(data)) : console.log("e.target.dataSource is null!")
        }
        refresh() {}
    }
    gamelistUI.uiView = {
        type: "View",
        props: {
            width: 1080,
            height: 1920
        },
        child: [{
            type: "Image",
            props: {
                y: 0,
                x: 0,
                width: 1080,
                var: "m_beijing",
                skin: "tryplay/beijing.png",
                sizeGrid: "10,10,10,10",
                height: 1920
            }
        }, {
            type: "List",
            props: {
                y: 111,
                x: 31,
                width: 1044,
                var: "m_list",
                spaceY: 20,
                spaceX: 30,
                repeatX: 2,
                height: 1801
            },
            child: [{
                type: "Box",
                props: {
                    y: 19,
                    x: 40,
                    width: 448,
                    renderType: "render",
                    height: 500
                },
                child: [{
                    type: "Image",
                    props: {
                        y: 1,
                        x: -1,
                        width: 448,
                        var: "m_icon",
                        skin: "tryplay/100_100.png",
                        renderType: "render",
                        name: "m_icon",
                        height: 500
                    }
                }, {
                    type: "Image",
                    props: {
                        y: 1,
                        x: -1,
                        width: 448,
                        var: "m_mask",
                        skin: "tryplay/bidian_imgjiao.png",
                        name: "m_big",
                        height: 500
                    }
                }, {
                    type: "Label",
                    props: {
                        y: 367,
                        x: 183,
                        width: 212,
                        var: "lab_name",
                        text: "Cuộc đại chiến",
                        name: "lab_name",
                        height: 53,
                        fontSize: 44,
                        color: "#fffdfd",
                        align: "center"
                    }
                }, {
                    type: "Label",
                    props: {
                        y: 432,
                        x: 163,
                        width: 280,
                        var: "lab_explain",
                        text: "Dã Đế muốn mời bạn gia nhập",
                        name: "lab_explain",
                        height: 40,
                        fontSize: 28,
                        color: "#ffffff",
                        align: "center"
                    }
                }, {
                    type: "Image",
                    props: {
                        y: 366,
                        x: 28,
                        width: 121,
                        var: "m_little",
                        skin: "tryplay/144_144.png",
                        name: "m_little",
                        height: 128
                    }
                }]
            }]
        }, {
            type: "Button",
            props: {
                y: 24,
                x: 18,
                width: 206,
                var: "m_close",
                height: 94
            },
            child: [{
                type: "Image",
                props: {
                    width: 206,
                    skin: "tryplay/fanhui.png",
                    height: 94
                }
            }]
        }]
    };
    global.DDSDK_Component.CTrylist = class extends Laya.Sprite {
        constructor() {
            super(), this.m_mask = new Laya.Sprite, this.addChild(this.m_mask), this.content = new gamelistUI, this.addChild(this.content), this.m_ScaleX = 1, this.m_ScaleY = 1, this.m_X = -1, this.m_Y = -1, this.width = 1080, this.height = 1920, this.m_bMask = !0, this.m_Width = Laya.stage.width, this.m_Height = Laya.stage.height, this.c_Width = Laya.stage.width, this.c_Height = Laya.stage.height, this.content.pos(0, 0), this.m_CloseCB = null, this.m_OpenCB = null, this.init(), this.content.m_close.on(Laya.Event.CLICK, this, this.OnClose), this.on(Laya.Event.CLICK, this, this.OnClose)
        }
        init() {
            this.visible = !1, this.showMask(!0), this.autosetSize(), this.refreshDlg()
        }
        autosetSize() {
            var w = Laya.stage.width,
                h = Laya.stage.height;
            this.m_ScaleX = w / this.width, this.m_ScaleY = h / this.height, this.refreshDlg()
        }
        showMask(bmask) {
            this.m_bMask = bmask, this.m_mask.graphics.clear(), bmask && (this.m_mask.graphics.drawRect(0, 0, this.c_Width, this.c_Height, "#000000"), this.m_mask.alpha = .7)
        }
        OnClose(e) {
            if (e.target == this || e.target == this.content.m_close) {
                if (!this.visible) return;
                this.visible = !1, this.content.refresh(), this.m_CloseCB && this.m_CloseCB()
            }
        }
        setCloseCB(cb) {
            this.m_CloseCB = cb
        }
        setOpenCB(cb) {
            this.m_OpenCB = cb
        }
        popup() {
            this.visible = !0, this.refresh(), this.m_OpenCB && this.m_OpenCB()
        }
        setSize(w, h) {
            this.m_Height = h, this.m_Width = w, this.content.size(w, h), this.showMask(this.m_bMask), this.refreshDlg()
        }
        setScale(sx, sy) {
            this.m_ScaleX = sx, this.m_ScaleY = sy, this.refreshDlg()
        }
        getContX() {
            return this.content.x
        }
        getContY() {
            return this.content.y
        }
        setContPos(x, y) {
            this.m_X = x, this.m_Y = y, this.refreshDlg()
        }
        refresh() {
            this.content.refresh()
        }
        refreshDlg() {
            var tx, ty, sx = this.m_ScaleX,
                sy = this.m_ScaleY; - 1 == this.m_X && -1 == this.m_Y ? (tx = (this.m_Width - this.content.width * sx) / 2, ty = (this.m_Height - this.content.height * sy) / 2, this.content.pos(tx, ty)) : this.content.pos(this.m_X, this.m_Y), this.content.scale(sx, sy)
        }
    }
}("undefined" != typeof window ? window : this),
function(global) {
    class trygame extends Laya.View {
        constructor() {
            super()
        }
        createChildren() {
            super.createChildren(), this.createView(trygame.uiView), this.m_list.vScrollBarSkin = "", this.init()
        }
        init() {
            this.m_list.renderHandler = new Laya.Handler(this, this.onListRender), this.getAppList(), this.isMove = !1;
            var that = this;
            setInterval(function() {
                that.downOrUp()
            }, 50)
        }
        downOrUp() {
            this.m_list.scrollBar.value <= 0 && (this.isMove = !1), this.m_list.scrollBar.value >= this.m_list.scrollBar.max && (this.isMove = !0), 0 == this.isMove ? this.m_list.scrollBar.value += 1 : this.m_list.scrollBar.value -= 1
        }
        getAppList() {
            var data = DDSDK.getData("trydlglist");
            null == data && console.log("trygamelist is null......."), this.m_list.array = data
        }
        onListRender(cell, index) {
            cell.dataSource && (cell.getChildAt(0).getChildByName("m_icon").skin = cell.dataSource.bigicon, cell.getChildByName("lab_name").text = cell.dataSource.name), cell.on(Laya.Event.CLICK, this, this.onTapAD)
        }
        onTapAD(e) {
            var data = e.target.dataSource;
            data ? (DDSDK.logTag("sdk-trygame", data), DDSDK.openADApp(data)) : console.log("e.target.dataSource is null!")
        }
        refresh() {}
    }
    trygame.uiView = {
        type: "View",
        props: {
            width: 640,
            height: 1136
        },
        child: [{
            type: "List",
            props: {
                y: 83,
                x: 16,
                width: 600,
                var: "m_list",
                spaceY: 3,
                spaceX: 3,
                repeatX: 2,
                height: 1030
            },
            child: [{
                type: "Box",
                props: {
                    y: 0,
                    x: 0,
                    width: 300,
                    renderType: "render",
                    height: 344
                },
                child: [{
                    type: "Image",
                    props: {
                        y: 0,
                        x: 0,
                        width: 300,
                        var: "m_Bg",
                        skin: "tryplay/juzhen_frame_5.png",
                        sizeGrid: "32,35,86,32",
                        height: 344
                    },
                    child: [{
                        type: "Image",
                        props: {
                            y: 5,
                            x: 11,
                            width: 276,
                            var: "m_icon",
                            skin: "tryplay/100_100.png",
                            renderType: "render",
                            name: "m_icon",
                            height: 276
                        },
                        child: [{
                            type: "Image",
                            props: {
                                width: 276,
                                skin: "tryplay/juzhen_frame_4.png",
                                sizeGrid: "17,18,19,17",
                                renderType: "mask",
                                height: 276
                            }
                        }]
                    }]
                }, {
                    type: "Label",
                    props: {
                        y: 282,
                        x: 11,
                        width: 211,
                        var: "lab_name",
                        valign: "middle",
                        text: "Cuộc đại chiến",
                        name: "lab_name",
                        layoutEnabled: !1,
                        height: 42,
                        fontSize: 26,
                        font: "Arial",
                        color: "#000000",
                        align: "left"
                    }
                }]
            }]
        }, {
            type: "Button",
            props: {
                y: 18,
                x: 26,
                width: 148,
                var: "m_close",
                height: 53
            },
            child: [{
                type: "Image",
                props: {
                    width: 148,
                    skin: "tryplay/juzhen_btn_5.png",
                    height: 53
                }
            }]
        }, {
            type: "Button",
            props: {
                y: 568,
                x: 320,
                width: 200,
                var: "m_start",
                height: 80,
                anchorY: .5,
                anchorX: .5
            },
            child: [{
                type: "Image",
                props: {
                    y: 0,
                    x: 0,
                    width: 200,
                    skin: "tryplay/kaishiyouxi.png",
                    height: 80,
                    anchorY: 0,
                    anchorX: 0
                }
            }, {
                type: "Label",
                props: {
                    y: 6,
                    x: 7,
                    width: 186,
                    valign: "middle",
                    text: "BẮT ĐẦU",
                    height: 65,
                    fontSize: 32,
                    color: "#ffffff",
                    align: "center"
                }
            }]
        }]
    };
    global.DDSDK_Component.CTrylist1 = class extends Laya.Sprite {
        constructor() {
            super(), this.m_mask = new Laya.Sprite, this.addChild(this.m_mask), this.content = new trygame, this.addChild(this.content), this.m_ScaleX = 1, this.m_ScaleY = 1, this.m_X = -1, this.m_Y = -1, this.width = 640, this.height = 1136, this.m_bMask = !0, this.m_Width = Laya.stage.width, this.m_Height = Laya.stage.height, this.c_Width = Laya.stage.width, this.c_Height = Laya.stage.height, this.content.pos(0, 0), this.m_CloseCB = null, this.m_OpenCB = null, this.content.m_start.x = this.content.width / 2, this.content.m_start.y = this.content.height / 2 + 200, this.init(), this.content.m_close.on(Laya.Event.CLICK, this, this.OnClose), this.content.m_start.on(Laya.Event.CLICK, this, this.OnClose), this.on(Laya.Event.CLICK, this, this.OnClose)
        }
        init() {
            this.visible = !1, this.showMask(!0), this.autosetSize(), this.refreshDlg(), console.log("按钮的y值：", this.content.m_start.y)
        }
        setText(text) {
            this.content.m_start.getChildAt(1).text = text
        }
        autosetSize() {
            var w = Laya.stage.width;
            Laya.stage.height, this.m_ScaleX = w / this.width, this.m_ScaleY = this.m_ScaleX, this.refreshDlg()
        }
        showMask(bmask) {
            this.m_bMask = bmask, this.m_mask.graphics.clear(), bmask && (this.m_mask.graphics.drawRect(0, 0, this.c_Width, this.c_Height, "#000000"), this.m_mask.alpha = 1)
        }
        OnClose(e) {
            if (e.target == this || e.target == this.content.m_close || e.target == this.content.m_start) {
                if (!this.visible) return;
                this.visible = !1, this.content.refresh(), this.m_CloseCB && this.m_CloseCB()
            }
        }
        setCloseCB(cb) {
            this.m_CloseCB = cb
        }
        setOpenCB(cb) {
            this.m_OpenCB = cb
        }
        popup() {
            this.visible = !0, this.refresh(), this.m_OpenCB && this.m_OpenCB()
        }
        setSize(w, h) {
            this.m_Height = h, this.m_Width = w, this.content.size(w, h), this.showMask(this.m_bMask), this.refreshDlg()
        }
        setScale(sx, sy) {
            this.m_ScaleX = sx, this.m_ScaleY = sy, this.refreshDlg()
        }
        getContX() {
            return this.content.x
        }
        getContY() {
            return this.content.y
        }
        setContPos(x, y) {
            this.m_X = x, this.m_Y = y, this.refreshDlg()
        }
        refresh() {
            this.content.refresh()
        }
        refreshDlg() {
            var tx, ty, sx = this.m_ScaleX,
                sy = this.m_ScaleY; - 1 == this.m_X && -1 == this.m_Y ? (tx = (this.m_Width - this.content.width * sx) / 2, ty = (this.m_Height - this.content.height * sy) / 2, this.content.pos(tx, ty)) : this.content.pos(this.m_X, this.m_Y), this.content.scale(sx, sy)
        }
    }
}("undefined" != typeof window ? window : this),
function(global) {
    class tryListBtnUI extends Laya.View {
        constructor() {
            super()
        }
        createChildren() {
            super.createChildren(), this.createView(tryListBtnUI.uiView), this.init()
        }
        init() {
            this.on(Laya.Event.CLICK, this, this.onTapBtn)
        }
        onTapBtn(e) {
            DDSDK_Render.getTryGame() && DDSDK_Render.getTryGame().popup()
        }
        setSkin(skin) {
            this.m_trylistBtn.skin = skin
        }
    }
    tryListBtnUI.uiView = {
        type: "View",
        props: {
            width: 172,
            height: 63
        },
        child: [{
            type: "Button",
            props: {
                y: 0,
                x: 0,
                width: 172,
                height: 63
            },
            child: [{
                type: "Image",
                props: {
                    y: 0,
                    x: 0,
                    width: 172,
                    var: "m_trylistBtn",
                    skin: "tryplay/caidan.png",
                    height: 63
                }
            }]
        }]
    }, global.DDSDK_Component.tryListBtnUI = tryListBtnUI
}("undefined" != typeof window ? window : this);