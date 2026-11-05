var oldConstructor = pc.GraphNode;
pc.GraphNode = function GraphNode(t) {
    this.name = "string" == typeof t ? t : "Untitled", this.tags = new pc.Tags(this), this._labels = {}, this.localPosition = new pc.Vec3(0, 0, 0), this.localRotation = new pc.Quat(0, 0, 0, 1), this.localScale = new pc.Vec3(1, 1, 1), this.localEulerAngles = new pc.Vec3(0, 0, 0), this.position = new pc.Vec3(0, 0, 0), this.rotation = new pc.Quat(0, 0, 0, 1), this.eulerAngles = new pc.Vec3(0, 0, 0), this.localTransform = new pc.Mat4, this._dirtyLocal = !1, this._aabbVer = 0, this.worldTransform = new pc.Mat4, this._dirtyWorld = !1, this.normalMatrix = new pc.Mat3, this._dirtyNormal = !0, this._right = null, this._shouldSync = !0, this._up = null, this._forward = null, this._parent = null, this._children = [], this._graphDepth = 0, this._enabled = !0, this._enabledInHierarchy = !1, this.scaleCompensation = !1
}, pc.GraphNode.prototype = oldConstructor.prototype, pc.GraphNode.prototype.syncHierarchy = function() {
    if (this._enabled && this._shouldSync) {
        (this._dirtyLocal || this._dirtyWorld) && this._sync();
        for (var t = this._children, i = t.length, s = 0; s < i; s++) t[s].syncHierarchy()
    }
};

function Logger() {
    this.enableLogging = !1, this.divAvailable = !1, this.routeToDiv = !1, this.includeLogString = this.includeLog ? "[Log] " : "", this.includeWarningString = this.includeLog ? "[Warning] " : "", this.includeErrorString = this.includeLog ? "[Error] " : "", this.debugDiv = void 0, Logger.prototype.CreateDebugDiv = function() {
        this.divAvailable && (this.debugDiv = document.createElement("debugDiv"), this.debugDiv.style.width = "100%", this.debugDiv.style.height = "auto", this.debugDiv.style.position = "absolute", this.debugDiv.style.background = "red", this.debugDiv.style.color = "white", this.debugDiv.style.display = "none", this.debugDiv.style.overflowY = "scroll", this.debugDiv.innerHTML = "", document.body.appendChild(this.debugDiv))
    }, Logger.prototype.LogToDiv = function(i) {
        this.divAvailable && (this.debugDiv.innerHTML += i + "<br>")
    }, Logger.prototype.ToggleDiv = function() {
        this.divAvailable && ("none" === this.debugDiv.style.display ? this.debugDiv.style.display = "block" : this.debugDiv.style.display = "none")
    }, Logger.prototype.Log = function(i) {
        this.enableLogging && ("object" == typeof i ? this.includeLog ? console.log(this.includeLogString, i) : console.log(i) : (console.log(this.includeLogString + i), this.routeToDiv && this.LogToDiv(this.includeLogString + i)))
    }, Logger.prototype.LogWarning = function(i) {
        this.enableLogging && ("object" == typeof i ? this.includeError ? console.log("%c" + this.includeWarningString, "color: #e4b000", i) : console.log(i) : (console.log("%c" + this.includeWarningString + i, "color: #e4b000"), this.routeToDiv && this.LogToDiv(this.includeWarningString + i)))
    }, Logger.prototype.LogError = function(i) {
        this.enableLogging && ("object" == typeof i ? this.includeError ? console.log("%c" + this.includeErrorString, "color: #ff0000", i) : console.log(i) : (console.log("%c" + this.includeErrorString + i, "color: #ff0000"), this.routeToDiv && this.LogToDiv(this.includeErrorString + i)))
    }, Logger.prototype.Details = function() {
        void 0 !== pc.app && (console.log("Details: "), console.log(pc.app), console.log(pc.app.graphicsDevice), console.log("window size: " + window.innerWidth + "x" + window.innerHeight), console.log("app size: " + pc.app.graphicsDevice.width + "x" + pc.app.graphicsDevice.height))
    }, this.CreateDebugDiv(), this.LogToDiv("DebugDiv available...")
}
var Debug = new Logger;
var Utils = pc.createScript("Utils");
Utils.prototype.initialize = function() {
    Utils = this, this.minutes = 0, this.seconds = 0, this.formattedTime = "", this.giftTime = new Date, this.canvas = document.createElement("canvas"), this.ctx = this.canvas.getContext("2d"), this.rankUpImage = this.StoreImage("RankUp.jpg"), this.newSkinImage = this.StoreImage("NewSkin.jpg"), this.backgroundImage = this.StoreImage("Background.jpg"), this.defaultImage = this.StoreImage("Default.jpg"), this.giveHeartImage = this.StoreImage("GiveHeart.jpg")
}, Utils.prototype.GetYAngle = function(t, e) {
    var i = 180 * Math.atan(e / t) / Math.PI;
    return t < 0 && (i += 180), (90 - i) % 360
}, Utils.prototype.FormatGiftTime = function(t) {
    return new Date(1e3 * t).toISOString().substr(11, 8)
}, Utils.prototype.FormatTime = function(t) {
    return this.minutes = Math.floor(t / 60), this.seconds = Math.trunc(t % 60), this.formattedTime = this.PadLeft(this.minutes, "0", 2) + ":" + this.PadLeft(this.seconds, "0", 2), this.formattedTime
}, Utils.prototype.GetOrdinal = function(t) {
    var e = t % 10,
        i = t % 100;
    return 1 == e && 11 != i ? "st" : 2 == e && 12 != i ? "nd" : 3 == e && 13 != i ? "rd" : "th"
}, Utils.prototype.PadLeft = function(t, e, i) {
    return (new Array(i + 1).join(e) + t).slice(-i)
}, Utils.prototype.CompositeSkinImage = function(t) {
    this.canvas.width = this.newSkinImage.width, this.canvas.height = this.newSkinImage.height, this.ctx.drawImage(this.newSkinImage, 0, 0);
    var e = this.app.assets.find(t, "sprite").resource,
        i = e.atlas,
        a = i.texture,
        s = i.frames[e.frameKeys[0]],
        o = new Image;
    o.onload = function() {}, o.src = a.getSource().src, o.setAttribute("crossOrigin", "anonymous");
    var r = s.rect.x,
        n = a.height - s.rect.y - s.rect.w,
        h = (.5 * this.canvas.width | 0) - (.5 * s.rect.w | 0),
        c = (.5 * this.canvas.height | 0) - (.5 * s.rect.z | 0);
    return this.ctx.drawImage(o, r, n, s.rect.z, s.rect.w, h, c, s.rect.z, s.rect.w), this.canvas.toDataURL("image/png")
}, Utils.prototype.StoreImage = function(t) {
    var e = this.app.assets.find(t).resource,
        i = new Image;
    return i.onload = function() {
        i.onload = null
    }, i.src = e.getSource().src, i.setAttribute("crossOrigin", "anonymous"), i
}, Utils.prototype.CompositeRankUpImage = function(t) {
    return this.canvas.width = this.rankUpImage.width, this.canvas.height = this.rankUpImage.height, this.ctx.drawImage(this.rankUpImage, 0, 0), this.ctx.font = "normal normal 900 110px 'Arial'", this.ctx.fillStyle = "black", this.ctx.textAlign = "center", this.ctx.fillText(t.toString(), this.canvas.width / 2, this.canvas.height / 2 + 16), this.canvas.toDataURL()
}, Utils.prototype.CompositeHeartImage = function(t) {
    this.canvas.width = this.giveHeartImage.width, this.canvas.height = this.giveHeartImage.height, this.ctx.drawImage(this.giveHeartImage, 0, 0);
    var e = .75 * t.width | 0,
        i = .75 * t.height | 0,
        a = (0 | this.canvas.width) - (e + 10),
        s = (0 | this.canvas.height) - (i + 10);
    return this.ctx.save(), this.ctx.shadowOffsetX = 5, this.ctx.shadowOffsetY = 5, this.ctx.shadowBlur = 5, this.ctx.shadowColor = "rgba(0, 0, 0, 0.5)", this.ctx.drawImage(t, 0, 0, t.width, t.height, a, s, e, i), this.ctx.restore(), this.canvas.toDataURL("image/png")
}, Utils.prototype.CompositeChallengeImage = function(t, e) {
    this.canvas.width = this.backgroundImage.width, this.canvas.height = this.backgroundImage.height, this.ctx.drawImage(this.backgroundImage, 0, 0);
    var i = (.5 * this.canvas.width | 0) - (.5 * t.width | 0) - 69,
        a = (.5 * this.canvas.height | 0) - (.5 * t.height | 0);
    return this.ctx.save(), this.ctx.shadowOffsetX = 5, this.ctx.shadowOffsetY = 5, this.ctx.shadowBlur = 5, this.ctx.shadowColor = "rgba(0, 0, 0, 0.5)", this.ctx.drawImage(t, 0, 0, t.width, t.height, i, a, t.width, t.height), this.ctx.restore(), this.ctx.shadowOffsetX = 2, this.ctx.shadowOffsetY = 2, this.ctx.shadowBlur = 2, this.ctx.shadowColor = "rgba(0, 0, 0, 0.7)", this.ctx.font = "normal normal 900 36px 'Arial'", this.ctx.fillStyle = "white", this.ctx.textAlign = "left", this.ctx.fillText("SCORE", this.canvas.width / 2 + 5, this.canvas.height / 2 - 18), this.ctx.font = "normal normal 900 72px 'Arial'", this.ctx.textAlign = "left", this.ctx.fillText(e.toString(), this.canvas.width / 2 + 5, this.canvas.height / 2 + 46), this.canvas.toDataURL()
}, Utils.prototype.CompositeResultsImage = function(t, e, i, a) {
    this.canvas.width = this.backgroundImage.width, this.canvas.height = this.backgroundImage.height, this.ctx.drawImage(this.backgroundImage, 0, 0), this.ctx.save(), this.ctx.shadowOffsetX = 5, this.ctx.shadowOffsetY = 5, this.ctx.shadowBlur = 5, this.ctx.shadowColor = "rgba(0, 0, 0, 0.5)";
    var s = (.5 * this.canvas.width | 0) - (.5 * t.width | 0) - 100,
        o = (.5 * this.canvas.height | 0) - (.5 * t.height | 0) - 16;
    this.ctx.drawImage(t, 0, 0, t.width, t.height, s, o, t.width, t.height);
    var r = (.5 * this.canvas.width | 0) - (.5 * e.width | 0) + 100,
        n = (.5 * this.canvas.height | 0) - (.5 * e.height | 0) - 16;
    return this.ctx.drawImage(e, 0, 0, e.width, e.height, r, n, e.width, e.height), this.ctx.restore(), this.ctx.font = "normal normal 900 36px 'Arial'", this.ctx.fillStyle = "white", this.ctx.textAlign = "center", this.ctx.save(), this.ctx.shadowOffsetX = 2, this.ctx.shadowOffsetY = 2, this.ctx.shadowBlur = 2, this.ctx.shadowColor = "rgba(0, 0, 0, 0.9)", this.ctx.fillText(i.toString(), s + 64, o + 164), this.ctx.fillText(a.toString(), r + 64, n + 164), this.ctx.restore(), this.canvas.toDataURL()
}, Utils.prototype.CompositeProfileImage = function(t, e, i, a) {
    var s, o;
    s = o = a, this.canvas.width = s, this.canvas.height = o;
    var r = this.ctx.globalCompositeOperation,
        n = this.app.assets.find(i).resource,
        h = new Image;
    h.onload = function() {}, h.src = n.getSource().src, h.setAttribute("crossOrigin", "anonymous");
    var c = this,
        g = new Image,
        l = "string" == typeof e ? this.app.assets.find(e).resource : e,
        d = new Image;
    d.setAttribute("crossOrigin", "anonymous"), d.onload = function() {
        c.ctx.drawImage(h, 0, 0, n.width, n.height, 0, 0, s, o), c.ctx.globalCompositeOperation = "source-in", c.ctx.drawImage(d, 0, 0, l.width, l.height, 0, 0, s, o), c.ctx.globalCompositeOperation = r, g.setAttribute("crossOrigin", "anonymous"), g.onload = function() {
            null != t && t.resource.setSource(g), g.onload = null
        }, g.src = c.canvas.toDataURL()
    }, d.src = l.getSource().src
}, Utils.prototype.ConvertImageToBase64 = function(t) {
    var e = document.createElement("canvas"),
        i = e.getContext("2d");
    e.width = t.width, e.height = t.height;
    var a = new Image;
    return a.src = t.getSource().src, a.setAttribute("crossOrigin", "anonymous"), i.drawImage(a, 0, 0), e.toDataURL("image/png")
}, Utils.prototype.ConvertSpriteToBase64 = function(t) {
    var e = t.atlas,
        i = e.texture,
        a = e.frames[t.frameKeys[0]],
        s = document.createElement("canvas"),
        o = s.getContext("2d");
    s.width = a.rect.z, s.height = a.rect.w, o.fillStyle = "#000000", o.fillRect(0, 0, s.width, s.height);
    var r = new Image;
    r.src = i.getSource().src, r.setAttribute("crossOrigin", "anonymous");
    var n = a.rect.x,
        h = i.height - a.rect.y - a.rect.w;
    return o.drawImage(r, n, h, s.width, s.height, 0, 0, s.width, s.height), s.toDataURL("image/png")
}, Utils.prototype.LoadImageIntoElement = function(t, e) {
    this.app.loader.getHandler("texture").crossOrigin = "anonymous";
    var i = new pc.Asset("ProfilePhoto", "texture", {
            url: e
        }),
        a = t;
    this.app.assets.add(i), i.on("error", function(t) {
        console.log(t)
    }), i.on("load", function(t) {
        a.texture = t.resource
    }), this.app.assets.load(i)
}, Utils.prototype.GetRandomFromList = function(t, e) {
    var i = Math.floor(Math.random() * (t.length - 1)),
        a = t[i];
    return e && t.splice(i, 1), a
}, Utils.prototype.LineSegmentsIntersection = function(t, e, i, a, s) {
    s.copy(pc.Vec3.ZERO);
    var o = (e.x - t.x) * (a.y - i.y) - (e.y - t.y) * (a.x - i.x);
    if (0 === o) return !1;
    var r = ((i.x - t.x) * (a.y - i.y) - (i.y - t.y) * (a.x - i.x)) / o,
        n = ((i.x - t.x) * (e.y - t.y) - (i.y - t.y) * (e.x - t.x)) / o;
    return !(r < 0 || r > 1 || n < 0 || n > 1) && (s.x = t.x + r * (e.x - t.x), s.y = t.y + r * (e.y - t.y), !0)
}, Utils.prototype.LineLineIntersection = function(t, e, i, a, s) {
    s.copy(pc.Vec3.ZERO);
    var o = (new pc.Vec3).copy(i).sub(t),
        r = (new pc.Vec3).cross(e, a),
        n = (new pc.Vec3).cross(o, a),
        h = (new pc.Vec3).copy(o).dot(r);
    if (Math.abs(h) < 1e-4 && r.lengthSq() > 1e-4) {
        var c = (new pc.Vec3).copy(n).dot(r) / r.lengthSq();
        return s.copy(t).add(e.scale(c)), !0
    }
    return !1
}, Utils.prototype.LinePlaneIntersection = function(t, e, i, a, s) {
    var o, r, n, h = new pc.Vec3;
    return s.copy(pc.Vec3.ZERO), r = (new pc.Vec3).copy(a).sub(t).dot(i), 0 !== (n = (new pc.Vec3).copy(e).dot(i)) && (o = r / n, h.copy(e).scale(o), s.copy(t).add(h), !0)
}, Utils.prototype.GetOS = function() {
    var t = "Unknown OS";
    return -1 != navigator.platform.indexOf("Win") && (t = "Windows"), -1 != navigator.platform.indexOf("Mac") && (t = "MacOS"), -1 != navigator.platform.indexOf("X11") && (t = "UNIX"), -1 != navigator.platform.indexOf("Linux") && (t = "Linux"), -1 != navigator.platform.indexOf("iPhone") && (t = "iOS"), -1 != navigator.platform.indexOf("Android") && (t = "Android"), t
}, Utils.prototype.GetPlatform = function() {
    return pc.platform.desktop ? "Desktop" : pc.platform.mobile ? "Mobile" : "Unknown"
};
var xFBInstant = pc.createScript("xFBInstant");
xFBInstant.prototype.initialize = function() {
    xFBInstant = this, !pc.platform.mobile && Game.settings.cheats && this.app.keyboard.on(pc.EVENT_KEYDOWN, this.OnKeyDown, this), this.isAvailable = "undefined" != typeof FBInstant, this.isAvailable ? (this.playerID = FBInstant.player.getID(), this.contextID = "none", this.contextType = "none", this.contextPlayers = [], this.GetContextData(), this.GetContextPlayers(!1), this.postMessageType = "default_message", this.postMessageSpecifics = "", this.postMessageText = "", this.entryPointData = FBInstant.getEntryPointData(), this.filteredEntries = void 0, this.currentEntry = void 0, this.previousEntry = void 0, this.globalLeaderboardName = "Crowdy City Global", this.globalLeaderboardEntries = void 0, this.GetGlobalLeaderboardEntries(), this.localLeaderboardName = "Crowdy City." + this.contextID, this.localLeaderboardEntries = void 0, this.GetLocalLeaderboardEntries(), this.adUnits = [], this.defaultMessageCachedOnce = !1, this.opponentPhotoReady = !1, this.opponentPhoto = new pc.Asset("DefaultIconComp", "texture", {
        url: ""
    }), this.opponentPhoto.resource = new pc.Texture(this.app.graphicsDevice), Utils.CompositeProfileImage(this.opponentPhoto, "DefaultIcon.png", "ProfileImageMask.png", 128), this.GetPlayerName(), this.GetPhoto(), Game.user.LoadData(), this.app.fire("xFBInstant:Initialized"), Debug.Log("[xFBInstant] Facebook instant sdk available!")) : Debug.LogWarning("[xFBInstant] Facebook instant sdk is not available.")
}, xFBInstant.prototype.postInitialize = function() {
    this.isAvailable
}, xFBInstant.prototype.OnKeyDown = function(e) {
    e.key === pc.KEY_8 && this.ClearAllAds(), e.key === pc.KEY_9 && Debug.Log(this.adUnits)
}, xFBInstant.prototype.TestImager = function() {
    for (var e = new Image, t = "", a = ["Trump", "Putin", "Kim", "Dog", "Wildebeest", "Buffalo", "Snake", "Shark", "Dragon", "AgentSmith", "Kardashian", "Kanye", "Queen", "Hipster", "Gaga"], n = 0; n < a.length; n++)(e = new Image).src = Utils.CompositeSkinImage(a[n]), t += e.outerHTML;
    var s = Game.user.photo.resource.getSource();
    e.src = Utils.CompositeChallengeImage(s, 999), t += e.outerHTML, (e = new Image).src = Utils.CompositeRankUpImage(3), t += e.outerHTML, (e = new Image).src = Utils.CompositeResultsImage(s, s, 100, 52), t += e.outerHTML, (e = new Image).src = Utils.CompositeHeartImage(s), t += e.outerHTML;
    var o = window;
    o.document.write(t), o.document.close()
}, xFBInstant.prototype.EvaluateEntryPointData = function() {
    if (null !== this.entryPointData && this.entryPointData.hasOwnProperty("eventName") && "fromMobileWeb_CrowdyCity" === this.entryPointData.eventName && xFBInstant.LogEvent("fromMobileWeb_CrowdyCity"), null !== this.entryPointData && this.entryPointData.hasOwnProperty("type") && this.entryPointData.hasOwnProperty("id") || Debug.Log("[xFBInstant] EvaluateEntryPointData(). There was no 'type' or 'id' key in the entryPointData OR there was no entryPointData at all."), Debug.LogWarning("[xFBInstant] EvaluateEntryPointData(). Checking for MC challenges...."), this.entryPointData && this.entryPointData.challenge && xMiniclip.instance.challenges.getFromToken(this.entryPointData.challenge).then(function(e) {
            Debug.Log(e), e && !e.expired && (xMiniclip.currentChallenge = e, xMiniclip.challengeActive = !0, Debug.Log("[xFBInstant] EvaluateEntryPointData(). We found a challenge,.. currentChallenge has been set."))
        }), this.entryPointData.id === this.playerID) return Debug.Log("[xFBInstant] EvaluateEntryPointData(). We're processing our own posted data. Let's not do that..."), void Debug.Log(this.entryPointData);
    switch (Debug.Log("[xFBInstant] EvaluateEntryPointData()."), Debug.Log(this.entryPointData), this.entryPointData.type) {
        case "default_message":
            Debug.Log("[xFBInstant] EvaluateEntryPointData(). Entrypoint was  'default_message' data");
            break;
        case "default_score":
            Debug.Log("[xFBInstant] EvaluateEntryPointData(). Entrypoint was  'default_score' data");
            break;
        case "start_challenge":
            Debug.Log("[xFBInstant] EvaluateEntryPointData(). Entrypoint was  'start_challenge' data"), xFBInstant.LogEvent("Challenge_Accepted");
            break;
        case "claim_heart":
            Debug.Log("[xFBInstant] EvaluateEntryPointData(). Entrypoint was  'claim_heart' data"), Game.user.HasHeartReceivedFrom(this.entryPointData.id) ? Debug.LogError("[xFBInstant] EvaluateEntryPointData(). You already claimed your heart from this person today!") : (Interface.SetPanelActive("HeartReceivedPanel", !0), this.app.fire("Interface:UpdateHearts"))
    }
}, xFBInstant.prototype.GetFromEntryPointData = function(e) {
    if (this.isAvailable) return this.entryPointData.hasOwnProperty(e) ? (Debug.Log("[xFBInstant] GetFromEntryPointData(). Key was: " + e + ". Returning " + this.entryPointData[e]), this.entryPointData[e]) : (Debug.Log("[xFBInstant] GetFromEntryPointData(). The key you were looking for does not exist. Key was: " + e), void Debug.Log(this.entryPointData))
}, xFBInstant.prototype.GetPlayerName = function() {
    this.isAvailable && (Game.user.name = FBInstant.player.getName(), this.app.fire("Interface:UpdateName"), Debug.Log("[xFBInstant] GetPlayerName(). Name set to " + Game.user.name))
}, xFBInstant.prototype.GetPhoto = function() {
    if (this.isAvailable) {
        Debug.Log("[xFBInstant] GetPhoto().");
        var e = new Image;
        e.crossOrigin = "anonymous", e.src = FBInstant.player.getPhoto(), Game.user.LoadPhoto(e.src), this.app.fire("Interface:UpdatePhoto")
    }
}, xFBInstant.prototype.SaveData = function(e) {
    this.isAvailable && (Debug.Log("[xFBInstant] SaveData(). Promise to save!"), FBInstant.player.setDataAsync({
        saveData: e
    }).then(function() {
        xFBInstant.OnSaveData(e)
    }))
}, xFBInstant.prototype.OnSaveData = function(e) {
    Debug.Log("[xFBInstant] OnSaveData(). Data persisted to FB."), Game.user.SetSaveData(e)
}, xFBInstant.prototype.LoadData = function() {
    this.isAvailable && (Debug.Log("[xFBInstant] LoadData(). Promise to load!"), FBInstant.player.getDataAsync(["saveData"]).then(function(e) {
        xFBInstant.OnLoadData(e)
    }))
}, xFBInstant.prototype.OnLoadData = function(e) {
    if (e.hasOwnProperty("saveData")) {
        Debug.Log("[xFBInstant] OnLoadData(). Data loaded and forwarded to Game.user.SetSaveData()");
        var t = e.saveData;
        Game.user.SetSaveData(t)
    } else Debug.LogError("[xFBInstant] OnLoadData(). No savedata found. Either first play or something went wrong."), Game.user.SaveData();
    this.CheckPlayerHighscore(), this.CheckBotSubscription(), this.EvaluateEntryPointData()
}, xFBInstant.prototype.GetContextData = function() {
    this.contextID = FBInstant.context.getID(), this.contextType = FBInstant.context.getType(), Debug.Log("[xFBInstant] GetContextData(). contextID was " + this.contextID + ". contextType was " + this.contextType)
}, xFBInstant.prototype.ContextSwitched = function() {
    Debug.Log("[xFBInstant] ContextSwitched(). Reset some values."), this.GetContextData(), this.GetContextPlayers(!0), this.localLeaderboardName = "Crowdy City." + this.contextID
}, xFBInstant.prototype.GetContextPlayers = function(e) {
    Debug.Log("[xFBInstant] ContextPlayers(). Getting players from current context.");
    var t = e;
    FBInstant.context.getPlayersAsync().then(function(e) {
        if (xFBInstant.contextPlayers = e, Debug.Log("[xFBInstant] ContextPlayers(). Players are:"), Debug.Log(xFBInstant.contextPlayers), t && xFBInstant.contextPlayers.length <= 1) {
            Debug.Log("[xFBInstant] GetContextPlayers(). There were 'not enough' context players thus we are allowed to update the achievement.");
            var a = 0 === xFBInstant.contextPlayers.length;
            a || 1 !== xFBInstant.contextPlayers.length || (Debug.Log("[xFBInstant] GetContextPlayers(). There is only one extry - check for myself"), a = xFBInstant.contextPlayers[0].getID() === xFBInstant.playerID), Debug.Log("[xFBInstant] GetContextPlayers(). updateAchievements was " + a), a && xFBInstant.PostDefaultMessage()
        }
    })
}, xFBInstant.prototype.InviteFriends = function() {
    this.isAvailable && (Debug.Log("[xFBInstant] InviteFriends()."), FBInstant.context.chooseAsync({
        filters: ["NEW_PLAYERS_ONLY"],
        minSize: 3
    }).then(function() {
        xFBInstant.GetContextData(), xFBInstant.ContextSwitched(), Interface.IsPanelActive("LeaderboardPanel") || Interface.SetPanelActive("ResultsPanel", !0)
    }).catch(function(e) {
        Interface.IsPanelActive("LeaderboardPanel") || Interface.SetPanelActive("ResultsPanel", !0), Debug.Log(e.message)
    }))
}, xFBInstant.prototype.Challenge = function(e) {
    this.isAvailable && (Debug.Log("[xFBInstant] Challenge()."), FBInstant.context.createAsync(e).then(function() {
        xFBInstant.GetContextData(), xFBInstant.ContextSwitched(), Game.user.GiveHeartTo(e), Game.user.UpdateHearts(1), xFBInstant.PostHeartMessage()
    }).catch(function(t) {
        Debug.Log("[xFBInstant] Challenge(). Error changing context. Id was: " + e), Debug.Log(t), "SAME_CONTEXT" === t.code && (Game.user.HasHeartGivenTo(e) || (Debug.Log("[xFBInstant] Challenge(). SAME_CONTEXT - You still get one heart!"), Game.user.GiveHeartTo(e), Game.user.UpdateHearts(1), xFBInstant.PostHeartMessage()))
    }))
}, xFBInstant.prototype.SaveScore = function(e) {
    xFBInstant.SaveToGlobalLeaderboard(e), xFBInstant.SaveToLocalLeaderboard(e)
}, xFBInstant.prototype.PostSessionScore = function(e) {
    this.isAvailable && (Debug.Log("[xFBInstant] PostSessionScore()."), FBInstant.postSessionScore(e))
}, xFBInstant.prototype.CheckPlayerHighscore = function() {
    this.isAvailable && (Debug.Log("[xFBInstant] CheckPlayerHighscore()."), FBInstant.getLeaderboardAsync(this.globalLeaderboardName).then(function(e) {
        return e.getPlayerEntryAsync()
    }).then(function(e) {
        var t = e.getScore();
        Debug.Log("[CheckPlayerHighscore] Score was " + t.toString()), Game.user.UpdateHighscore(t, !1)
    }))
}, xFBInstant.prototype.SaveToGlobalLeaderboard = function(e) {
    this.isAvailable && FBInstant.getLeaderboardAsync(this.globalLeaderboardName).then(function(t) {
        return t.setScoreAsync(e, "{character: " + Players.mainPlayer.characterEntityName + "}")
    }).then(function(e) {
        Debug.Log("[xFBInstant] SaveToGlobalLeaderboard(). Score saved!"), xFBInstant.GetGlobalLeaderboardEntries()
    }).catch(function(e) {
        Debug.Log("[xFBInstant] SaveToGlobalLeaderboard(). Failed with " + e.message)
    })
}, xFBInstant.prototype.GetGlobalLeaderboardEntries = function() {
    this.isAvailable && FBInstant.getLeaderboardAsync(this.globalLeaderboardName).then(function(e) {
        return e.getConnectedPlayerEntriesAsync()
    }).then(function(e) {
        Debug.Log("[xFBInstant] GetGlobalLeaderboardEntries(). getConnectedPlayerEntriesAsync received!"), xFBInstant.globalLeaderboardEntries = e, Debug.Log(e), xFBInstant.app.fire("xFBInstant:UpdateEntries", xFBInstant.globalLeaderboardEntries), xFBInstant.app.fire("MenuPanel:SetLeaderBoardTween")
    }).catch(function(e) {
        Debug.Log("[xFBInstant] GetGlobalLeaderboardEntries(). Failed with " + e.message)
    })
}, xFBInstant.prototype.SaveToLocalLeaderboard = function(e) {
    this.isAvailable && FBInstant.getLeaderboardAsync(this.localLeaderboardName).then(function(t) {
        return t.setScoreAsync(e, "{character: " + Players.mainPlayer.characterEntityName + "}")
    }).then(function(t) {
        Debug.Log("[xFBInstant] SaveToLocalLeaderboard(). Score saved!"), xMiniclip.UpdateChallenge(e), xFBInstant.GetLocalLeaderboardEntries(!0)
    }).catch(function(e) {
        Debug.Log("[xFBInstant] SaveToLocalLeaderboard(). Failed with " + e.message)
    })
}, xFBInstant.prototype.GetLocalLeaderboardEntries = function(e) {
    this.isAvailable && FBInstant.getLeaderboardAsync(this.localLeaderboardName).then(function(e) {
        return e.getEntriesAsync()
    }).then(function(t) {
        Debug.Log("[xFBInstant] GetLocalLeaderboardEntries(). getEntriesAsync received!"), Debug.Log(t), xFBInstant.localLeaderboardEntries = t, xFBInstant.FilterEntries(t), e && xFBInstant.PostMessage()
    }).catch(function(e) {
        Debug.Log("[xFBInstant] GetLocalLeaderboardEntries(). Failed with " + e.message)
    })
}, xFBInstant.prototype.FilterEntries = function(e) {
    Debug.Log("[xFBInstant] FilterEntries()."), this.filteredEntries = e.slice(), this.previousEntry = this.currentEntry;
    for (var t = this.filteredEntries.length - 1; t >= 0; --t)
        if (this.filteredEntries[t].getPlayer().getID() === this.playerID) {
            this.currentEntry = this.filteredEntries[t], this.filteredEntries.splice(t, 1);
            break
        }
    this.filteredEntries.length > 0 && !this.opponentPhotoReady && Game.user.LoadPhoto(this.filteredEntries[0].getPlayer().getPhoto(), !0), Debug.Log("[xFBInstant] Entries filtered. Entries are:"), Debug.Log(this.filteredEntries), Debug.Log("[xFBInstant] Entries filtered. Previous entry was:"), Debug.Log(this.previousEntry), Debug.Log("[xFBInstant] Entries filtered. Current entry is:"), Debug.Log(this.currentEntry)
}, xFBInstant.prototype.PostMessage = function() {
    if (Debug.Log("[xFBInstant] PostMessage(). Here we will evaluate what to post!"), "give_heart" === this.postMessageType) Debug.Log("[xFBInstant] PostMessage(). postMessageType was 'heart' - this has already been sent and we will not do anyhting else atm");
    else {
        var e = "",
            t = 0,
            a = this.currentEntry.getScore();
        this.contextPlayers.length > 2 ? 1 === this.localLeaderboardEntries.length ? (this.postMessageType = "start_challenge", this.postMessageSpecifics = "_post_score") : (this.postMessageType = "update_leaderboard", void 0 !== this.previousEntry ? 1 === this.previousEntry.getRank() && 1 === this.currentEntry.getRank() ? this.postMessageSpecifics = "_group_won_still_lead" : 1 !== this.previousEntry.getRank() && 1 === this.currentEntry.getRank() ? (this.postMessageSpecifics = "_group_won_took_lead", e = this.filteredEntries[0].getPlayer().getName()) : this.currentEntry.getRank() > this.previousEntry.getRank() ? (this.postMessageSpecifics = "_group_took_rank", e = this.filteredEntries[this.currentEntry.getRank() - 1].getPlayer().getName()) : (this.postMessageSpecifics = "_group_lost_unchanged", a = this.currentEntry.getRank()) : 1 === this.currentEntry.getRank() ? (this.postMessageSpecifics = "_group_won_took_lead", e = this.filteredEntries[0].getPlayer().getName()) : this.currentEntry.getRank() === this.filteredEntries.length + 1 ? this.currentEntry.getRank() <= 3 ? this.postMessageSpecifics = "_entered_top_3" : this.postMessageSpecifics = "_came_in_last" : (this.postMessageSpecifics = "_group_took_rank", e = this.filteredEntries[this.currentEntry.getRank() - 1].getPlayer().getName())) : 1 === this.localLeaderboardEntries.length ? (this.postMessageType = "start_challenge", this.postMessageSpecifics = "_post_score") : (this.postMessageType = "update_challenge", void 0 !== this.previousEntry ? 1 === this.previousEntry.getRank() && 1 === this.currentEntry.getRank() ? this.postMessageSpecifics = "_1on1_won_still_lead" : 1 !== this.previousEntry.getRank() && 1 === this.currentEntry.getRank() ? this.postMessageSpecifics = "_1on1_won_took_lead" : this.postMessageSpecifics = "_1on1_lost_unchanged" : 1 === this.currentEntry.getRank() ? this.postMessageSpecifics = "_1on1_won_took_lead" : this.postMessageSpecifics = "_1on1_lost", e = this.filteredEntries[0].getPlayer().getName(), t = this.filteredEntries[0].getScore()), this.postMessageText = this.GetMessageText(this.postMessageSpecifics, a, e), Debug.LogError("POSTMESSAGE RESULTS"), Debug.LogWarning("Score: " + a), Debug.LogWarning("Opponent: " + e), Debug.LogWarning("MessageType: " + this.postMessageType), Debug.LogWarning("MessageSpecifics: " + this.postMessageSpecifics), Debug.LogWarning("MessageText: " + this.postMessageText), "update_leaderboard" === this.postMessageType ? this.PostLeaderboardUpdate(this.postMessageText) : this.PostCustomMessage(this.postMessageType, this.postMessageText, a, t)
    }
}, xFBInstant.prototype.GetMessageText = function(e, t, a) {
    var n = "";
    switch (e) {
        case "_post_score":
            n = "I just scored " + t + " points. Can do better?";
            break;
        case "_group_won_still_lead":
            n = "Still in the lead! What are you going to do about it?";
            break;
        case "_group_won_took_lead":
            n = "I took the lead from " + a + "! Who can beat me?!";
            break;
        case "_group_took_rank":
            n = "I took your spot " + a + "! What are you going to do about it?!";
            break;
        case "_group_lost_unchanged":
            n = "Still in " + t + Utils.GetOrdinal(t) + " place! What are you going to do about it?";
            break;
        case "_entered_top_3":
            n = "I entered the top 3! Does anyone dare challenge my score?";
            break;
        case "_came_in_last":
            n = "The leaderboards have been updated. Anyone can do better?";
            break;
        case "_1on1_won_still_lead":
            n = "Still in the lead, " + a + "! What are you going to do about it?";
            break;
        case "_1on1_won_took_lead":
            n = "I beat you, " + a + "! Come on and try again!";
            break;
        case "_1on1_lost_unchanged":
        case "_1on1_lost":
            n = "You won, " + a + "! Can you win again?!"
    }
    return Debug.LogError(n), n
}, xFBInstant.prototype.PostLeaderboardUpdate = function(e) {
    FBInstant.updateAsync({
        action: "LEADERBOARD",
        name: xFBInstant.localLeaderboardName,
        text: e
    }).then(function() {
        Debug.Log("xFBInstant] PostLeaderboardUpdate() Done")
    }).catch(function(e) {
        Debug.Log(e)
    })
}, xFBInstant.prototype.PostCompiledMessage = function(e) {
    this.isAvailable && FBInstant.updateAsync(e).then(function() {
        Debug.Log("Pre-created message was sent successfully")
    })
}, xFBInstant.prototype.PostCustomMessage = function(e, t, a, n) {
    if (this.isAvailable) {
        Debug.Log("[xFBInstant] PostCustomMessage().");
        var s = "start_challenge" === e ? Utils.CompositeChallengeImage(Game.user.photo.resource.getSource(), a) : Utils.CompositeResultsImage(Game.user.photo.resource.getSource(), this.opponentPhoto.resource.getSource(), a, n),
            o = "start_challenge" === e ? "CHALLENGE" : "Start New Match";
        FBInstant.updateAsync({
            action: "CUSTOM",
            cta: o,
            image: s,
            text: {
                default: t
            },
            template: e,
            data: {
                type: e
            },
            strategy: "LAST",
            notification: "PUSH"
        }).then(function() {
            Debug.Log("[xFBInstant] PostCustomMessage(). Custom message was sent successfully"), "start_challenge" === e && xFBInstant.LogEvent("Challenge_Sent")
        })
    }
}, xFBInstant.prototype.CacheDefaultMessage = function() {
    this.isAvailable && (this.defaultMessageCachedOnce || 0 !== this.contextPlayers.length || (this.defaultMessageCachedOnce = !0, xFBInstant.PostDefaultMessage(), Debug.Log("[xFBInstant] CacheDefaultMessage(). Cached!")))
}, xFBInstant.prototype.PostDefaultMessage = function() {
    if (this.isAvailable) {
        var e = Utils.ConvertImageToBase64(this.app.assets.find("Default.jpg").resource);
        Debug.Log("[xFBInstant] PostDefaultMessage()."), FBInstant.updateAsync({
            action: "CUSTOM",
            cta: "Play now",
            image: e,
            text: {
                default: "Wow! This game is so much fun - I can't believe it!"
            },
            template: "default_message",
            data: {
                type: "default_message"
            },
            strategy: "LAST",
            notification: "PUSH"
        }).then(function() {
            Debug.Log("[xFBInstant] PostDefaultMessage(). Default message was sent successfully")
        })
    }
}, xFBInstant.prototype.PostHeartMessage = function() {
    Debug.Log("[xFBInstant] PostHeartMessage().");
    var e = Utils.CompositeHeartImage(Game.user.photo.resource.getSource());
    FBInstant.updateAsync({
        action: "CUSTOM",
        cta: "Claim heart",
        image: e,
        text: {
            default: Game.user.name + " just gave you a heart!"
        },
        template: "give_heart",
        data: {
            type: "claim_heart",
            hearts: 1,
            id: xFBInstant.playerID
        },
        strategy: "IMMEDIATE_CLEAR",
        notification: "PUSH"
    }).then(function() {
        Debug.Log("[xFBInstant] PostHeartMessage(). Heart message was sent successfully"), this.postMessageType = "give_heart", xFBInstant.LogEvent("Heart_Sent", 1)
    })
}, xFBInstant.prototype.ShareRankUp = function(e) {
    if (Debug.Log("[xFBInstant] ShareRankUp().Rank was: " + e), this.isAvailable) {
        var t = Utils.CompositeRankUpImage(e);
        FBInstant.shareAsync({
            intent: "SHARE",
            image: t,
            text: "Hey! I just gained a rank in Crowdy City! I am now rank " + e + "!"
        })
    }
}, xFBInstant.prototype.ShareUnlock = function(e) {
    if (Debug.Log("[xFBInstant] ShareUnlock().Unlock was: " + e), this.isAvailable) {
        var t = Utils.CompositeSkinImage(e);
        FBInstant.shareAsync({
            intent: "SHARE",
            image: t,
            text: "Hey! I just unlocked " + e + " in Crowdy City!"
        })
    }
}, xFBInstant.prototype.Share = function() {
    if (this.isAvailable) {
        var e = Utils.ConvertImageToBase64(this.app.assets.find("Default.jpg").resource);
        FBInstant.shareAsync({
            intent: "SHARE",
            image: e,
            text: "Hey! I just placed this awesome game!"
        })
    }
}, xFBInstant.prototype.CheckBotSubscription = function() {
    var e = new Date(Date.now() + 0),
        t = new Date(Game.user.lastBotNotificationDate),
        a = Math.floor((e - t) / 864e5);
    Debug.Log("[Test] CheckBotSubscription(). Firsttime was: " + Game.user.firstTime + " - Dayspassed was: " + a), xFBInstant.CanSubscribeToBot()
}, xFBInstant.prototype.CanSubscribeToBot = function() {
    Debug.Log("[xFBInstant] CanSubscribeToBot()."), FBInstant.player.canSubscribeBotAsync().then(function(e) {
        Debug.Log("CanSubscribeToBot - can_subscribe is " + e), e && (xFBInstant.SubscribeToBot(), xFBInstant.LogEvent("CanSubscribeToBot_Succes"))
    }).catch(function(e) {
        Debug.Log("CanSubscribeToBot FAILED: " + e.message), xFBInstant.LogEvent("CanSubscribeToBot_Failed", 1, e.message)
    })
}, xFBInstant.prototype.SubscribeToBot = function() {
    Debug.Log("SubscribeToBot"), FBInstant.player.subscribeBotAsync().then(function() {
        Debug.Log("Subscribed to bot"), xFBInstant.LogEvent("SubscribeToBot_Succes"), Game.user.UpdateBotNotificationDate(!0)
    }).catch(function(e) {
        Debug.Log("Subscribed to bot FAILED: " + e.message), xFBInstant.LogEvent("SubscribeToBot_Failed", 1, e.message), Game.user.UpdateBotNotificationDate(!1)
    })
}, xFBInstant.prototype.LogEvent = function(e, t, a) {
    if (t = void 0 === t ? 0 : t, a = void 0 === a ? "Unknown" : a, Debug.Log("[xFBInstant] LogEvent(). Logging event: " + e + ". aValue was: " + t.toString() + ". aCustomValue was: " + a.toString()), this.isAvailable) {
        var n;
        switch (e) {
            case "fromMobileWeb_CrowdyCity":
                var s = Utils.GetPlatform(),
                    o = Utils.GetOS();
                n = FBInstant.logEvent("fromMobileWeb_CrowdyCity", 1, {
                    platform: s,
                    os: o
                });
                break;
            case "Tutorial_Completed":
                n = FBInstant.logEvent(e);
                break;
            case "Game_Started":
                n = FBInstant.logEvent(e, 1, {
                    skin: a
                });
                break;
            case "SessionGames_Started":
                n = FBInstant.logEvent(e, 1, {
                    sessiongames: a
                });
                break;
            case "Game_Finished":
                n = FBInstant.logEvent(e, 1, {
                    position: a
                });
                break;
            case "Game_Over":
            case "Heart_Sent":
            case "Rank_Up":
                n = FBInstant.logEvent(e, 1);
                break;
            case "Star_Balance":
            case "Coin_Balance":
            case "Heart_Balance":
                n = FBInstant.logEvent(e, t);
                break;
            case "Item_Unlocked":
                n = FBInstant.logEvent("Item_Unlocked", 1, {
                    item: a
                });
                break;
            case "Item_Selected":
                n = FBInstant.logEvent("Item_Selected", 1, {
                    item: a
                });
                break;
            case "Item_Bought":
                n = FBInstant.logEvent("Item_Bought", 1, {
                    item: a
                });
                break;
            case "Shop_Opened":
            case "Leaderboard_Opened":
            case "Settings_Opened":
            case "GiftDefault_Received":
            case "GiftDouble_Received":
            case "Boost_Received":
            case "DoubleXP_Received":
            case "Coins_Received":
            case "Challenge_Sent":
            case "Challenge_Accepted":
                n = FBInstant.logEvent(e);
                break;
            case "Achievement_Completed":
                n = FBInstant.logEvent(e, 1, {
                    id: a
                });
                break;
            case "Interstitial_NoFill":
                n = FBInstant.logEvent(e, 1, {
                    errorcode: a
                });
                break;
            case "Interstitial_ShowError":
                n = FBInstant.logEvent(e, 1, {
                    message: a
                });
                break;
            case "RewardedVideo_NoFill":
                n = FBInstant.logEvent(e, 1, {
                    errorcode: a
                });
                break;
            case "RewardedVideo_ShowError":
            case "RewardedVideo_Reward":
            case "RewardedVideo_Failed":
                n = FBInstant.logEvent(e, 1, {
                    message: a
                });
                break;
            case "Revive_Coins":
            case "Revive_RewardedVideo":
            case "Revive_TimeUp":
            case "CanSubscribeToBot_Succes":
                n = FBInstant.logEvent(e);
                break;
            case "CanSubscribeToBot_Failed":
                n = FBInstant.logEvent(e, 1, {
                    message: a
                });
                break;
            case "SubscribeToBot_Succes":
                n = FBInstant.logEvent(e);
                break;
            case "SubscribeToBot_Failed":
                n = FBInstant.logEvent(e, 1, {
                    message: a
                });
                break;
            default:
                n = FBInstant.logEvent("Unknown_Event", t, {
                    custom_value: a
                })
        }
        Debug.LogWarning("[xFBInstant] LogEvent(). Result of logged was: "), Debug.LogWarning(n)
    }
}, xFBInstant.prototype.RequestAndPreload = function(e) {
    if (this.isAvailable) {
        var t;
        for (Debug.LogWarning("[xFBInstant] RequestAndPreload(). AdName was: " + e), i = 0; i < this.adUnits.length; ++i)
            if (this.adUnits[i].name === e) {
                if ((t = this.adUnits[i]).isPreloaded) return void Debug.LogError("[xFBInstant] RequestAndPreload(). AdName was: " + e + ". Ad is already preloaded.");
                if (Date.now() / 1e3 - t.timeStamp < Data.adCoolDown) return void Debug.LogError("[xFBInstant] RequestAndPreload(). AdName was: " + e + ". Not enough time has passed.");
                switch (t.type) {
                    case "RewardedVideo":
                        this.PreloadRewardedVideo(t);
                        break;
                    case "Interstitial":
                        this.PreloadInterstitial(t)
                }
                return
            }
        switch (Debug.LogWarning("[xFBInstant] RequestAndPreload(). AdUnitData does not exist. AdName was: " + e), e) {
            case "10+StartBoost":
                t = new AdUnitData("10+StartBoost", "2052393048114896_2226524020701797", "RewardedVideo");
                break;
            case "DoubleCoinGift":
                t = new AdUnitData("DoubleCoinGift", "2052393048114896_2226522240701975", "RewardedVideo");
                break;
            case "GameOverCoins":
                t = new AdUnitData("GameOverCoins", "2052393048114896_2226523324035200", "RewardedVideo");
                break;
            case "DoubleXP":
                t = new AdUnitData("DoubleXP", "2052393048114896_2226528530701346", "RewardedVideo");
                break;
            case "ContinueBoost":
                t = new AdUnitData("ContinueBoost", "2052393048114896_2226524760701723", "RewardedVideo");
                break;
            case "DefaultInterstitial":
                t = new AdUnitData("DefaultInterstitial", "2052393048114896_2226520517368814", "Interstitial")
        }
        switch (this.adUnits.push(t), t.type) {
            case "RewardedVideo":
                this.PreloadRewardedVideo(t);
                break;
            case "Interstitial":
                this.PreloadInterstitial(t)
        }
    }
}, xFBInstant.prototype.ClearAllAds = function() {
    for (i = 0; i < this.adUnits.length; ++i) this.ClearAd(this.adUnits[i].name)
}, xFBInstant.prototype.ClearAd = function(e) {
    for (i = 0; i < this.adUnits.length; ++i)
        if (this.adUnits[i].name === e) return adUnitData = this.adUnits[i], adUnitData.isPreloaded = !1, adUnitData.ad = null, adUnitData.code = "", void Debug.Log(e + " was cleared!")
}, xFBInstant.prototype.IsInterstitialAvailable = function(e) {
    if (this.isAvailable) {
        for (i = 0; i < this.adUnits.length; ++i)
            if (this.adUnits[i].name === e) return this.adUnits[i].isPreloaded;
        return !1
    }
}, xFBInstant.prototype.PlayInterstitial = function(e) {
    if (this.isAvailable)
        for (i = 0; i < this.adUnits.length; ++i)
            if (this.adUnits[i].name === e) {
                this.ShowInterstitial(this.adUnits[i]);
                break
            }
}, xFBInstant.prototype.PreloadInterstitial = function(e) {
    if (this.isAvailable) {
        var t = e;
        this.RequiresNewAdInstance(e.code) ? (t.ad = null, FBInstant.getInterstitialAdAsync(t.id).then(function(e) {
            return t.ad = e, t.ad.loadAsync()
        }).then(function() {
            Debug.Log("Interstitial preloaded. Rewarded video was " + t.name), t.isPreloaded = !0, t.timeStamp = Date.now() / 1e3
        }).catch(function(e) {
            Debug.Log("Interstitial failed to preload. Interstitial was " + t.name + ". Message was " + e.message), t.isPreloaded = !1, t.timeStamp = 0, t.code = e.code, xFBInstant.LogEvent("Interstitial_NoFill", 1, e.code)
        })) : (Debug.LogWarning("[xFBInstant] PreloadInterstitial(). Trying to re-preload an existing ad instance. Ad was " + e.name), t.ad.loadAsync().then(function() {
            Debug.LogWarning("Interstitial REpreloaded. Interstitial was " + t.name), t.isPreloaded = !0, t.timeStamp = Date.now() / 1e3, t.code = ""
        }).catch(function(e) {
            Debug.LogWarning("Interstitial failed to REpreload. Interstitial was " + t.name + ". Code was " + e.code), t.isPreloaded = !1, t.timeStamp = 0, t.code = e.code
        }))
    }
}, xFBInstant.prototype.ShowInterstitial = function(e) {
    if (this.isAvailable) {
        var t = e;
        t.ad.showAsync().then(function() {
            Debug.Log("Interstitial video watched successfully"), t.isPreloaded = !1, t.code = ""
        }).catch(function(e) {
            t.isPreloaded = !1, t.code = e.code, xFBInstant.LogEvent("Interstitial_ShowError", 1, e.message)
        })
    }
}, xFBInstant.prototype.IsRewardedVideoAvailable = function(e) {
    if (this.isAvailable) {
        for (i = 0; i < this.adUnits.length; ++i)
            if (this.adUnits[i].name === e) return this.adUnits[i].isPreloaded;
        return !1
    }
}, xFBInstant.prototype.PlayAndReward = function(e) {
    if (this.isAvailable)
        for (i = 0; i < this.adUnits.length; ++i)
            if (this.adUnits[i].name === e) {
                this.ShowRewardedVideo(this.adUnits[i]);
                break
            }
}, xFBInstant.prototype.PreloadRewardedVideo = function(e) {
    if (this.isAvailable) {
        var t = e;
        this.RequiresNewAdInstance(e.code) ? (t.ad = null, FBInstant.getRewardedVideoAsync(t.id).then(function(e) {
            return t.ad = e, t.ad.loadAsync()
        }).then(function() {
            Debug.Log("Rewarded video preloaded. Rewarded video was " + t.name), t.isPreloaded = !0, t.timeStamp = Date.now() / 1e3
        }).catch(function(e) {
            Debug.Log("Rewarded video failed to preload. Rewarded video was " + t.name + ". Code was " + e.code), t.isPreloaded = !1, t.timeStamp = 0, t.code = e.code, xFBInstant.LogEvent("RewardedVideo_NoFill", 1, e.code)
        })) : (Debug.LogWarning("[xFBInstant] PreloadedRewardedVideo(). Trying to re-preload an existing ad instance. Ad was " + e.name), t.ad.loadAsync().then(function() {
            Debug.LogWarning("Rewarded video REpreloaded. Rewarded video was " + t.name), t.isPreloaded = !0, t.timeStamp = Date.now() / 1e3, t.code = ""
        }).catch(function(e) {
            Debug.LogWarning("Rewarded video failed to REpreload. Rewarded video was " + t.name + ". Code was " + e.code), t.isPreloaded = !1, t.timeStamp = 0, t.code = e.code
        }))
    }
}, xFBInstant.prototype.RequiresNewAdInstance = function(e) {
    var t = !0;
    return "ADS_TOO_MANY_INSTANCES" == e && (t = !1), "CLIENT_UNSUPPORTED_OPERATION" == e && (t = !0), "ADS_FREQUENT_LOAD" == e && (t = !1), "INVALID_PARAM" == e && (t = !0), "ADS_NO_FILL" == e && (t = !1), "ADS_NOT_LOADED" == e && (t = !0), "INVALID_PARAM" == e && (t = !0), "NETWORK_FAILURE" == e && (t = !0), "INVALID_OPERATION" == e && (t = !1), Debug.LogWarning("RequiresNewAdInstance(). Result was " + t + ". ErrorCode was " + e), t
}, xFBInstant.prototype.ShowRewardedVideo = function(e) {
    if (this.isAvailable) {
        var t = e;
        t.ad.showAsync().then(function() {
            Debug.Log("Rewarded video watched successfully"), t.isPreloaded = !1, t.code = "", t.Reward()
        }).catch(function(e) {
            Debug.Log("Rewarded video failed to show. Rewarded video was " + t.name + ". Code was " + e.code), t.isPreloaded = !1, t.code = e.code, t.Failure(), xFBInstant.LogEvent("RewardedVideo_ShowError", 1, e.code)
        })
    }
};
var xMiniclip = pc.createScript("xMiniclip");
xMiniclip.prototype.postInitialize = function() {
    xMiniclip = this, this.currentChallenge = null, this.challengeActive = !1, Debug.Log("[xMiniclip] Available!"), xFBInstant.isAvailable && (this.instance = new MCInstant.MCInstant({
        app_id: 0x74aa3fe9286d0
    }), Debug.Log("[xMiniclip] instance available."), this.GetChallenges())
}, xMiniclip.prototype.UpdateChallenge = function(i) {
    xFBInstant.isAvailable && this.challengeActive && (currentChallenge.setScore(i), challenge.save().then(function() {
        Debug.Log("[xMiniclip] UpdateChallenge(). Score set and saved!")
    }))
}, xMiniclip.prototype.GetChallenges = function() {
    xFBInstant.isAvailable && (Debug.Log("[xMiniclip] GetChallenges()"), this.instance.challenges.getAll().then(function(i) {
        Debug.Log("[xMiniclip] GetChallenges(). Result: "), Debug.Log(i)
    }))
}, xMiniclip.prototype.SetGiftNotification = function() {
    if (xFBInstant.isAvailable) {
        Debug.Log("[xMiniclip] SetGiftNotification()");
        var i = this.instance.challenges.create({
            duration: 28800
        });
        i.setScore(0), i.save().then(function() {
            Debug.Log("[xMiniclip] SetGiftNotification(). Gift notification set!")
        })
    }
};
var Game = pc.createScript("Game");
Game.attributes.add("selectedGameMode", {
    type: "number",
    default: 1,
    enum: [{
        Default: 1
    }, {
        Multiplayer: 2
    }, {
        BombTheBass: 3
    }]
}), Game.prototype.initialize = function() {
    this.app.root._shouldSync = !0, Game = this, this.pause = !1, this.pauseAllowed = !1, this.storedTimeScale = 1, this.gameMode = void 0, this.gameModeAvailable = !1
}, Game.prototype.postInitialize = function() {
    window.addEventListener("keydown", function(e) {
        [32, 37, 38, 39, 40].indexOf(e.keyCode) > -1 && e.preventDefault()
    }, !1), this.Start(), Debug.Log("[Game] Initialized.")
}, Game.prototype.doStuffToEntity = function(e, t) {
    var a = 0;
    for (a = 0; a < e.children.length; ++a) this.doStuffToEntity(e.children[a], t);
    e.animation && (e._shouldSync = t, console.log("Updated sync for " + e.name + ". _shouldSync is now " + e._shouldSync))
}, Game.prototype.update = function(e) {
    this.gameModeAvailable && (this.pause || this.gameMode.Update(e))
}, Game.prototype.Start = function() {
    this.app.mouse.disableContextMenu(), Interface.HideAllPanels(), this.CreateGameMode()
}, Game.prototype.Quit = function() {}, Game.prototype.TogglePause = function() {
    this.pause ? this.UnPause() : this.Pause()
}, Game.prototype.Pause = function() {
    this.storedTimeScale = this.app.timeScale, this.app.timeScale = 0, this.pause = !0, this.gameModeAvailable && this.gameMode.Pause()
}, Game.prototype.UnPause = function() {
    this.app.timeScale = this.storedTimeScale, this.pause = !1, this.gameModeAvailable && this.gameMode.Pause()
}, Game.prototype.CreateGameMode = function(e) {
    Debug.Log("[Game] StartGameMode()."), void 0 === e && (e = this.selectedGameMode), this.gameMode = new GameMode(this.app, e), this.gameMode.Initialize()
}, Game.prototype.StartGameMode = function() {
    Debug.Log("[Game] StartGameMode()."), void 0 === this.gameMode && this.CreateGameMode(), this.gameMode.Start(), this.gameModeAvailable = !0, this.pauseAllowed = !0
}, Game.prototype.Continue = function() {
    Debug.Log("[Game] Continue."), this.gameModeAvailable && this.gameMode.Continue()
}, Game.prototype.GameOver = function() {
    Debug.Log("[Game] GameOver()."), this.gameModeAvailable && this.gameMode.GameOver("Killed")
}, Game.prototype.RetryGameMode = function() {
    Debug.Log("[Game] RetryGameMode()."), this.ResetGameMode(), this.StartGameMode()
}, Game.prototype.ResetGameMode = function() {
    Debug.Log("[Game] ResetGameMode()."), this.gameModeAvailable && this.gameMode.Reset(), this.gamemode = void 0, this.gameModeAvailable = !1, this.Start(), this.pauseAllowed = !1
};
var Data = pc.createScript("Data");
Data.attributes.add("sharedData", {
    type: "asset",
    assetType: "json"
}), Data.prototype.initialize = function() {
    Data = this, this.profilePhotos = this.GetProfilePhotos(), this.allCharacters = this.GetListFromJSON(this.sharedData.resource, "allCharacters"), this.availablePlayerCharacters = this.GetListFromJSON(this.sharedData.resource, "availablePlayerCharacters"), this.characterData = this.GetObjectFromJSON(this.sharedData.resource, "characterData"), this.rankLimits = this.GetListFromJSON(this.sharedData.resource, "rankLimits"), this.tempFallbackCharacters = [], this.timeUntilNextGift = 28800, this.deleteUserDataOnNewBuild = !1, this.deleteSettingsDataOnNewBuild = !1, this.saveLoadData = !0, this.allowBuyableSkins = !1, this.useAndroidFallback = !0, this.adCoolDown = 60, this.giftCoins = 250, this.gameOverCoins = 250, this.gamesPerInterstitial = 2, this.respawnAllowed = !0, this.respawnProbability = .9, this.AIRespawnTime = 2500, this.respawnTimeLimit = 10, this.reviveCost = 300, Debug.Log("[Data] Available...")
}, Data.prototype.GetListFromJSON = function(t, a) {
    for (var e = [], i = t[a], s = 0; s < i.length; s++) e.push(i[s]);
    return e
}, Data.prototype.GetObjectFromJSON = function(t, a) {
    return t[a]
}, Data.prototype.GetProfilePhotos = function(t, a) {
    for (var e = {}, i = this.app.assets.findByTag("ProfilePhoto"), s = 0; s < i.length; s++) e[i[s].name] = i[s];
    return i.length = 0, e
}, Data.prototype.IsSkinBuyable = function(t) {
    return this.characterData[t].canBeBought
};
var Details = pc.createScript("Details");
Details.prototype.initialize = function() {
    Game.details = this
}, Details.attributes.add("name", {
    type: "string",
    default: "DefaultGameName"
}), Details.attributes.add("version", {
    type: "string",
    default: "0.0.1"
}), Details.attributes.add("build", {
    type: "number",
    default: 244
});
var Palette = pc.createScript("Palette");
Palette.prototype.initialize = function() {
    Game.palette = this
}, Palette.attributes.add("black", {
    type: "rgb"
}), Palette.attributes.add("white", {
    type: "rgb"
}), Palette.attributes.add("red", {
    type: "rgb"
}), Palette.attributes.add("green", {
    type: "rgb"
}), Palette.attributes.add("blue", {
    type: "rgb"
}), Palette.attributes.add("ChibiBlue", {
    type: "rgb"
}), Palette.attributes.add("ChibiRed", {
    type: "rgb"
}), Palette.attributes.add("ChibiGreen", {
    type: "rgb"
}), Palette.attributes.add("ChibiPink", {
    type: "rgb"
}), Palette.attributes.add("ChibiPurple", {
    type: "rgb"
}), Palette.attributes.add("ChibiGrey", {
    type: "rgb"
}), Palette.attributes.add("ChibiYellow", {
    type: "rgb"
}), Palette.attributes.add("ChibiOrange", {
    type: "rgb"
}), Palette.attributes.add("Trump", {
    type: "rgb"
}), Palette.attributes.add("Putin", {
    type: "rgb"
}), Palette.attributes.add("Kim", {
    type: "rgb"
}), Palette.attributes.add("Dog", {
    type: "rgb"
}), Palette.attributes.add("Wildebeest", {
    type: "rgb"
}), Palette.attributes.add("Buffalo", {
    type: "rgb"
}), Palette.attributes.add("Snake", {
    type: "rgb"
}), Palette.attributes.add("Shark", {
    type: "rgb"
}), Palette.attributes.add("Dragon", {
    type: "rgb"
}), Palette.attributes.add("AgentSmith", {
    type: "rgb"
}), Palette.attributes.add("Kardashian", {
    type: "rgb"
}), Palette.attributes.add("Kanye", {
    type: "rgb"
}), Palette.attributes.add("Queen", {
    type: "rgb"
}), Palette.attributes.add("Hipster", {
    type: "rgb"
}), Palette.attributes.add("Gaga", {
    type: "rgb"
}), Palette.attributes.add("HooliganBlue", {
    type: "rgb"
}), Palette.attributes.add("HooliganRed", {
    type: "rgb"
}), Palette.attributes.add("Clown", {
    type: "rgb"
}), Palette.attributes.add("FlagUSA", {
    type: "rgb"
}), Palette.attributes.add("FlagRussia", {
    type: "rgb"
}), Palette.attributes.add("FlagGreatBritain", {
    type: "rgb"
});
var Settings = pc.createScript("Settings");
Settings.attributes.add("isMiniclip", {
    type: "boolean",
    default: !1
}), Settings.attributes.add("debug", {
    type: "boolean",
    default: !1
}), Settings.attributes.add("cheats", {
    type: "boolean",
    default: !1
}), Settings.attributes.add("allowAI", {
    type: "boolean",
    default: !1
}), Settings.attributes.add("fullscreenToggleAllowed", {
    type: "boolean",
    default: !1
}), Settings.attributes.add("divToggleAllowed", {
    type: "boolean",
    default: !1
}), Settings.attributes.add("quality", {
    type: "number",
    default: 2,
    enum: [{
        Low: 1
    }, {
        Medium: 2
    }, {
        High: 3
    }]
}), Settings.attributes.add("resolution", {
    type: "number",
    default: 1,
    enum: [{
        Low: 1
    }, {
        Medium: 2
    }, {
        High: 3
    }]
}), Settings.attributes.add("shadows", {
    type: "boolean",
    default: !1
}), Settings.prototype.initialize = function() {
    Game.settings = this, this.fullScreen = !1, this.debug && this.app.root.findByName("Game").script.create("FPSMeter"), this.on("attr", this.onAttributeChanged), this.saveList = ["quality", "resolution", "shadows"], this.pixelRatioList = [1, 1.5, 2];
    for (var t = 0; t < this.pixelRatioList.length; t++) this.pixelRatioList[t] = Math.min(this.pixelRatioList[t], window.devicePixelRatio);
    this.resolutionToggleAllowed = this.pixelRatioList.indexOf(1.5) > 0 || this.pixelRatioList.indexOf(2) > 0, this.quality = pc.platform.android ? 2 : 3, this.resolution = pc.platform.android ? 2 : 3, this.shadows = !pc.platform.android
}, Settings.prototype.postInitialize = function() {
    this.LoadData()
}, Settings.prototype.GetSaveData = function() {
    Debug.Log("[Settings] GetSaveData(). Getting/storing savedata in stringified object.");
    var t = {};
    t.version = Game.details.version, t.build = Game.details.build, t.muteAll = Audio.muteAll;
    for (var e = 0; e < this.saveList.length; e++) t[this.saveList[e]] = this[this.saveList[e]];
    return JSON.stringify(t)
}, Settings.prototype.SetSaveData = function(t) {
    Debug.Log("[Settings] SetSaveData(). Setting savedata from stringified object.");
    var e = JSON.parse(t);
    if (e.build !== Game.details.build && Data.deleteSettingsDataOnNewBuild || !e.build) Debug.LogError("[Settings] SetSaveData(). Build number do not match up. Resetting data."), this.SaveData();
    else {
        for (var a = 0; a < this.saveList.length; a++) {
            Settings.attributes.has(this.saveList[a]) && (this[this.saveList[a]] = e[this.saveList[a]])
        }
        e.hasOwnProperty("muteAll") && Audio.MuteAll(e.muteAll)
    }
    this.dataLoadedAndSet || (this.dataLoadedAndSet = !0)
}, Settings.prototype.LoadData = function() {
    if (Debug.Log("[Settings] LoadData()."), !Data.saveLoadData) return Debug.LogWarning("[Settings] LoadData(). Saving & Loading has been disabled."), void this.SetSaveData(this.GetSaveData());
    if (localStorage) {
        var t = localStorage.getItem("cc-settingsdata");
        null === t ? this.SaveData() : (this.SetSaveData(t), Debug.Log("[Settings] LoadData(). Data loaded from local savedata."))
    } else Debug.LogWarning("[Settings] LoadData(). There is no access to the localStorage so we cannot LOAD any data.")
}, Settings.prototype.SaveData = function(t) {
    Debug.Log("[Settings] SaveData()."), Data.saveLoadData ? (void 0 === t && (t = this.GetSaveData()), localStorage ? (localStorage.setItem("cc-settingsdata", t), this.SetSaveData(t), Debug.Log("[Settings] SaveData(). Data saved locally.")) : Debug.LogWarning("[Settings] SaveData(). There is no access to the localStorage so we cannot SAVE any data.")) : Debug.LogWarning("[Settings] SaveData(). Saving & Loading has been disabled.")
}, Settings.prototype.onAttributeChanged = function(t, e, a) {
    switch (t) {
        case "quality":
            switch (e) {
                case 1:
                    this.app.root.findByName("Props").enabled = !1, this.app.root.findByName("Natures").enabled = !1;
                    break;
                case 2:
                    this.app.root.findByName("Props").enabled = !1, this.app.root.findByName("Natures").enabled = !0;
                    break;
                case 3:
                    this.app.root.findByName("Props").enabled = !0, this.app.root.findByName("Natures").enabled = !0
            }
            break;
        case "resolution":
            switch (e) {
                case 1:
                    this.app.graphicsDevice.maxPixelRatio = this.pixelRatioList[0];
                    break;
                case 2:
                    this.app.graphicsDevice.maxPixelRatio = this.pixelRatioList[1];
                    break;
                case 3:
                    this.app.graphicsDevice.maxPixelRatio = this.pixelRatioList[2]
            }
            Debug.Log("Current pixel ratio is " + this.app.graphicsDevice.maxPixelRatio + ". MaxPixelRatio is " + window.devicePixelRatio);
            break;
        case "shadows":
            this.app.root.findByName("Light").light.castShadows = this.shadows
    }
}, Settings.prototype.ToggleFullscreen = function() {
    this.app.isFullscreen() ? (this.fullScreen = !1, this.app.disableFullscreen()) : (this.fullScreen = !0, this.app.enableFullscreen())
};
var User = pc.createScript("User");
User.attributes.add("defaultAchievements", {
    type: "asset",
    assetType: "json"
}), User.prototype.initialize = function() {
    Game.user = this, this.NewUser(), "undefined" == typeof FBInstant && this.LoadData(), Debug.Log("[User] User available...")
}, User.prototype.ResetAndSave = function() {
    this.NewUser(), Game.details.build = -1, Data.deleteUserDataOnNewBuild = !0, this.LoadData(), alert("Refresh window")
}, User.prototype.NewUser = function() {
    Debug.Log("[User] NewUser(). Clearing user to default settings."), this.name = "Guest", this.coins = 0, this.stars = 0, this.hearts = 0, this.rank = 1, this.startCloneCount = 0, this.bonusCloneCount = 0, this.character = "ChibiBlue", this.currentScore = 0, this.highscore = 0, this.sessionScore = 0, this.firstTime = !0, this.imageURL = void 0, this.photo = new pc.Asset("DefaultIconComp", "texture", {
        url: ""
    }), this.photo.resource = new pc.Texture(this.app.graphicsDevice), Utils.CompositeProfileImage(this.photo, "DefaultIcon.png", "ProfileImageMask.png", 128), this.unlockedCharacters = ["ChibiBlue", "ChibiGreen", "ChibiRed"], this.newUnlockedCharacters = [], this.newTags = ["NewSkins", "HooliganBlue", "HooliganRed", "Clown", "FlagUSA", "FlagRussia", "FlagGreatBritain"], this.newRanks = [], this.newUnlocks = [], this.giftUnlocked = !1, this.sessionGamesPlayed = 0, this.totalSessionGamesPlayed = 0, this.heartsGiven = [], this.heartsReceived = [], this.dayIndex = Date.now() / 864e5 | 0, this.hasSubscribedToBot = !1, this.lastBotNotificationDate = Date.now(), this.lastGiftDate = Date.now(), this.lastDayPlayed = Date.now() / 864e5 | 0, this.achievements = this.defaultAchievements.resource, this.dataLoadedAndSet = !1, this.saveList = ["name", "coins", "stars", "hearts", "rank", "startCloneCount", "character", "highscore", "firstTime", "unlockedCharacters", "newUnlockedCharacters", "newTags", "heartsGiven", "heartsReceived", "dayIndex", "hasSubscribedToBot", "lastBotNotificationDate", "lastGiftDate", "lastDayPlayed", "achievements"]
}, User.prototype.GetSaveData = function() {
    Debug.Log("[User] GetSaveData(). Getting/storing savedata in stringified object.");
    var e = {};
    e.version = Game.details.version, e.build = Game.details.build;
    for (var t = 0; t < this.saveList.length; t++) e[this.saveList[t]] = this[this.saveList[t]];
    return Debug.Log(e), JSON.stringify(e)
}, User.prototype.SetSaveData = function(e) {
    Debug.Log("[User] SetSaveData(). Setting savedata from stringified object.");
    var t = JSON.parse(e);
    if (t.build !== Game.details.build && Data.deleteUserDataOnNewBuild || !t.build) return Debug.LogError("[User] SetSaveData(). Build number do not match up. Resetting data."), this.achievements = this.defaultAchievements.resource, void this.SaveData();
    for (var a = 0; a < this.saveList.length; a++)
        if (t.hasOwnProperty(this.saveList[a])) {
            this.hasOwnProperty(this.saveList[a]);
            this[this.saveList[a]] = t[this.saveList[a]]
        }
    var s, i = this.defaultAchievements.resource.list,
        n = !1;
    for (var r in i) {
        s = i[r].ID, this.achievements.list.hasOwnProperty(r) || (this.achievements.list[r] = i[r], n = !0);
        var o = this.achievements.list[r].progress,
            h = this.achievements.list[r].completed;
        this.achievements.list[r] = this.defaultAchievements.resource.list[r], this.achievements.list[r].progress = o, this.achievements.list[r].completed = h, 19 !== s && 20 !== s && 21 !== s || 0 === this.achievements.list[r].progress && (this.achievements.list[r].progress = 1), 10 !== s && 14 !== s && 15 !== s || this.SetAchievement(["Achievement10", "Achievement14", "Achievement15"], this.totalSessionGamesPlayed, 0), this.CheckAchievement(this.achievements.list[r])
    }
    n && (Debug.LogWarning("New achievements were added. Need savin'"), this.SaveData()), this.dataLoadedAndSet || (this.dataLoadedAndSet = !0), this.SetupGift(), this.CheckHearts(), this.CheckConsecutiveDays(), this.app.fire("User:DataLoaded", !0)
}, User.prototype.LoadData = function() {
    if (Debug.Log("[User] LoadData()."), !Data.saveLoadData) return Debug.LogWarning("[User] LoadData(). Saving & Loading has been disabled."), void this.SetSaveData(this.GetSaveData());
    if (xFBInstant.isAvailable) xFBInstant.LoadData();
    else if (localStorage) {
        var e = localStorage.getItem("cc-savedata");
        null === e ? this.SaveData() : (this.SetSaveData(e), Debug.Log("[User] LoadData(). Data loaded from local savedata."))
    } else Debug.LogWarning("[User] LoadData(). There is no access to the localStorage so we cannot LOAD any data.")
}, User.prototype.SaveData = function(e) {
    Debug.Log("[User] SaveData()."), Data.saveLoadData ? (void 0 === e && (e = this.GetSaveData()), xFBInstant.isAvailable ? xFBInstant.SaveData(e) : localStorage ? (localStorage.setItem("cc-savedata", e), this.SetSaveData(e), Debug.Log("[User] SaveData(). Data saved locally.")) : Debug.LogWarning("[User] SaveData(). There is no access to the localStorage so we cannot SAVE any data.")) : Debug.LogWarning("[User] SaveData(). Saving & Loading has been disabled.")
}, User.prototype.UpdateHighscore = function(e, t) {
    return void 0 === t && (t = !0), t && e > this.sessionScore && (this.sessionScore = e, xFBInstant.PostSessionScore(e)), !(e <= this.highscore) && (Debug.Log("[User] Highscore updated!"), this.highscore = e, this.app.fire("Interface:UpdateHighscore"), xFBInstant.SaveData(), !0)
}, User.prototype.UpdateCoins = function(e) {
    return Debug.Log("[User] UpdateCoins()! Amount of coins added or substracted: " + e), this.coins += e, this.app.fire("Interface:UpdateCoins", e), xFBInstant.LogEvent("Coin_Balance", e), !0
}, User.prototype.UpdateStars = function(e) {
    var t = this.GetRewardedStars(e);
    return Debug.Log("[User] Stars updated! Amount of stars awarded: " + t), this.stars += t, this.CheckRank(this.stars) || this.SaveData(), this.app.fire("Interface:UpdateStars", this.stars), xFBInstant.LogEvent("Star_Balance", t), !0
}, User.prototype.UpdateHearts = function(e) {
    return Debug.Log("[User] UpdateHearts()! Amount of hearts added or substracted: " + e), this.hearts += e, this.UpdateAchievement(["Achievement7", "Achievement8", "Achievement9"], e), this.newUnlocks.length > 0 && Interface.SetPanelActive("UnlockedSkinPanel", !0), this.app.fire("Interface:UpdateHearts", this.hearts), xFBInstant.LogEvent("Heart_Balance", e), !0
}, User.prototype.GetRewardedStars = function(e) {
    var t = 1;
    if (!e.isDead && e.rank < 5) switch (e.rank) {
        case 1:
            t = 20;
            break;
        case 2:
            t = 10;
            break;
        case 3:
            t = 5;
            break;
        case 4:
            t = 2
    }
    return t
}, User.prototype.CheckRank = function(e) {
    void 0 === e && (e = this.stars);
    var t = Data.rankLimits.slice(),
        a = 0;
    return (a = t.indexOf(e)) > -1 ? a++ : (t.push(e), t.sort(function sortNumber(e, t) {
        return e - t
    }), a = t.indexOf(e)), a > this.rank && (this.RankUp(a), !0)
}, User.prototype.RankUp = function(e) {
    Debug.Log("[User] RankUp"), this.newRanks.length = 0, this.newUnlocks.length = 0;
    for (var t = e - this.rank, a = 0; a < t; a++) this.rank++, this.startCloneCount++, this.UpdateAchievement(["Achievement1", "Achievement2", "Achievement3"], 1), this.newRanks.push(this.rank), xFBInstant.LogEvent("Rank_Up", 1);
    this.SaveData()
}, User.prototype.GetAchievementData = function(e) {
    if (this.achievements.list.hasOwnProperty(e)) return this.achievements.list[e];
    Debug.LogError("[User] GetAchievementData(). There is no such achievement available. Achievement key was " + akey)
}, User.prototype.UpdateAchievement = function(e, t) {
    if (this.achievements.updateAchievements) {
        var a;
        Array.isArray(e) || (e = [e]), t = void 0 === t ? 1 : t;
        for (var s = 0; s < e.length; s++)
            if (a = e[s], this.achievements.list.hasOwnProperty(a)) {
                if (!this.achievements.list[a].active) continue;
                Debug.LogWarning("[User] UpdateAchievement(). Updating... Achievement key was " + a), this.achievements.list[a].progress += t, this.CheckAchievement(this.achievements.list[a])
            } else Debug.LogError("[User] UpdateAchievement(). There is no such achievement available. Achievement key was " + a)
    } else Debug.LogWarning("[User] UpdateAchievement(). Achievements will not be updated. Check .achievements.updateAchievements if this is intentional.")
}, User.prototype.SetAchievement = function(e, t, a) {
    if (Debug.LogWarning("[User] SetAchievement(). " + e + " - " + t + " - " + a), this.achievements.updateAchievements) {
        var s;
        Array.isArray(e) || (e = [e]), t = void 0 === t ? 1 : t, a = void 0 === a ? 2 : a;
        for (var i = 0; i < e.length; i++)
            if (s = e[i], this.achievements.list.hasOwnProperty(s)) {
                var n = this.achievements.list[s];
                if (n.completed) continue;
                switch (a) {
                    case 0:
                        n.progress = t;
                        break;
                    case 1:
                        t < n.progress && (n.progress = t);
                        break;
                    case 2:
                        t > n.progress && (n.progress = t);
                        break;
                    case 3:
                        n.progress = t
                }
                this.CheckAchievement(this.achievements.list[s])
            } else Debug.LogError("[User] SetAchievement(). There is no such achievement available. Achievement key was " + s)
    } else Debug.LogWarning("[User] SetAchievement(). Achievements will not be updated. Check .achievements.updateAchievements if this is intentional.")
}, User.prototype.CheckAchievement = function(e) {
    if ("string" == typeof e && (e = this.GetAchievementData(e)), !e.completed && e.progress >= e.limit) {
        switch (Debug.Log("[User] CheckAchievement(). Achievement completed. Achievement ID was: " + e.ID + ". HeaderKey was " + e.headerKey), Debug.Log("[User] CheckAchievement(). Process reward: " + e.reward), e.type) {
            case "Skin":
                this.newUnlocks.indexOf(e.reward) < 0 && this.newUnlocks.push(e.reward), this.unlockedCharacters.indexOf(e.reward) < 0 && this.unlockedCharacters.push(e.reward), this.newUnlockedCharacters.indexOf(e.reward) < 0 && this.newUnlockedCharacters.push(e.reward), "undefined" != typeof FBInstant && xFBInstant.LogEvent("Item_Unlocked", 1, e.reward)
        }
        e.completed = !0, this.achievements.achievementCompleteNotification && Interface.ShowMessage("Achievement unlocked!"), e.thirdPartyID, "undefined" != typeof FBInstant && xFBInstant.LogEvent("Achievement_Completed", 1, e.ID), e.saveOnAchieved && this.SaveData()
    }
}, User.prototype.UpdateBotNotificationDate = function(e) {
    this.hasSubscribedToBot = e, this.lastBotNotificationDate = Date.now(), this.firstTime = !1, this.SaveData()
}, User.prototype.SetupGift = function() {
    Debug.Log("[User] SetupGift()."), this.CalculateGiftTime(), this.giftUnlocked || this.UnlockGift(0 === this.giftTime), this.frameCounter = 0, this.giftEnabled = !0, this.app.fire("Interface:UpdateGiftTime", this.giftTime)
}, User.prototype.CalculateGiftTime = function() {
    Debug.Log("[User] CalculateGiftTime()");
    var e = Date.now() + 0 - (this.lastGiftDate + 0),
        t = pc.math.clamp((e / 1e3).toFixed(0), 0, Data.timeUntilNextGift);
    this.giftTime = this.firstTime ? 0 : Data.timeUntilNextGift - t, Debug.Log(Date.now() + " - " + this.lastGiftDate + " -  " + e + " - " + t + " - " + this.giftTime + " - " + this.firstTime)
}, User.prototype.ResetGift = function() {
    Debug.Log("[User] ResetGiftTime()"), Game.user.UnlockGift(!1), this.lastGiftDate = Date.now(), this.CalculateGiftTime(), xMiniclip.SetGiftNotification()
}, User.prototype.UnlockGift = function(e) {
    Debug.Log("[User] UnlockGift is: " + e), this.giftUnlocked = e, this.giftEnabled = !e, this.giftUnlocked && "undefined" != typeof FBInstant && xFBInstant.RequestAndPreload("DoubleCoinGift")
}, User.prototype.CheckHearts = function() {
    var e = Date.now() / 864e5 | 0;
    e > this.dayIndex ? (Debug.Log("[User] CheckHearts(). A day has passed and we clear the lists"), this.heartsGiven.length = 0, this.heartsReceived.length = 0, this.dayIndex = e, this.SaveData()) : Debug.Log("[User] CheckHearts(). It is the same day - so we dont do anything with our hearts data.")
}, User.prototype.HeartReceivedFrom = function(e) {
    this.heartsReceived.push(e)
}, User.prototype.HasHeartReceivedFrom = function(e) {
    return this.heartsReceived.indexOf(e) > -1
}, User.prototype.GiveHeartTo = function(e) {
    this.heartsGiven.push(e)
}, User.prototype.HasHeartGivenTo = function(e) {
    return this.heartsGiven.indexOf(e) > -1
}, User.prototype.CheckConsecutiveDays = function() {
    Debug.Log("[User] CheckConsecutiveDays().");
    var e = Date.now() / 864e5 | 0,
        t = e - this.lastDayPlayed;
    Debug.LogWarning(this.lastDayPlayed + " - " + e + " - " + t), 1 == t ? (Debug.LogWarning("The day diff is 1 - so we need to update the achievements."), Game.user.UpdateAchievement(["Achievement19", "Achievement20", "Achievement21"], 1), this.lastDayPlayed = e, this.SaveData()) : t >= 2 ? (Debug.LogWarning("The day diff is more or equal than 2 days - so we need to reset the achievements."), Game.user.SetAchievement(["Achievement19", "Achievement20", "Achievement21"], 1, 3), this.lastDayPlayed = e, this.SaveData()) : (Debug.LogWarning("Same day"), 0 !== t && (this.lastDayPlayed = e))
}, User.prototype.update = function(e) {
    this.giftEnabled && !this.giftUnlocked && (this.frameCounter++, this.giftTime = pc.math.clamp(this.giftTime - e, 0, Data.timeUntilNextGift), 0 === this.giftTime ? this.UnlockGift(!0) : this.frameCounter % 30 == 0 && this.app.fire("Interface:UpdateGiftTime", this.giftTime))
}, User.prototype.LoadPhoto = function(e, t) {
    var a = e;
    this.app.loader.getHandler("texture").crossOrigin = "anonymous";
    var s = new pc.Asset("ProfilePhoto", "texture", {
        url: a
    });
    this.app.assets.add(s), s.on("error", function(e) {}), s.on("load", function(e) {
        t ? (Utils.CompositeProfileImage(xFBInstant.opponentPhoto, e.resource, "ProfileImageMask.png", 128), xFBInstant.opponentPhotoReady = !0) : Utils.CompositeProfileImage(Game.user.photo, e.resource, "ProfileImageMask.png", 128)
    }), this.app.assets.load(s)
};
var InterfaceScript = pc.createScript("InterfaceScript");
InterfaceScript.prototype.initialize = function() {
    Debug.Log("[InterfaceScript] Initialized."), Interface = this, this.panels = [], this.panelEntities = [];
    for (var e = this.entity.children.length, t = 0; t < e; ++t) this.panels.push(this.entity.children[t].name), this.panelEntities.push(this.entity.children[t]), this.panelEntities[t].name;
    this.HideAllPanels(), this.on("enable", this.onEnable, this), this.on("disable", this.onDisable, this), this.on("destroy", this.Destroy, this), this.onEnable(), this.vConsoleCounter = 0, Debug.Log("Interface available...")
}, InterfaceScript.prototype.onEnable = function() {
    this.app.on("Interface:Pressed", this.OnButton, this), this.app.on("Interface:ShowMessage", this.ShowMessage, this), !pc.platform.mobile && Game.settings.cheats && this.app.keyboard.on(pc.EVENT_KEYDOWN, this.OnKeyDown, this)
}, InterfaceScript.prototype.onDisable = function() {
    this.app.off("Interface:Pressed", this.OnButton, this), this.app.off("Interface:ShowMessage", this.ShowMessage, this), this.app.keyboard.off(pc.EVENT_KEYDOWN, this.OnKeyDown, this)
}, InterfaceScript.prototype.Destroy = function(e) {
    this.onDisable(), this.off("destroy", this.Destroy, this)
}, InterfaceScript.prototype.OnKeyDown = function(e) {
    e.key === pc.KEY_0 && Players.mainPlayer.AddClones(10, !0), e.key === pc.KEY_1 && Interface.SetPanelActive("InviteFriendsPanel", !0), e.key === pc.KEY_2 && Interface.SetPanelActive("GiftPanel", !0), e.key === pc.KEY_3 && Interface.SetPanelActive("RankUpPanel", !0), e.key === pc.KEY_4 && Interface.SetPanelActive("UnlockedSkinPanel", !0), e.key === pc.KEY_V && (!0 === this.entity.enabled ? this.entity.enabled = !1 : this.entity.enabled = !0)
}, InterfaceScript.prototype.OnButton = function(e) {
    switch (Debug.Log("[InterfaceScript] OnButton received: " + e), e) {
        case "PlayButton":
            Interface.SetPanelActive("MenuPanel", !1), Interface.SetPanelActive("MatchMakingPanel", !0), Interface.Fade("FadeFromWhite"), Audio.sound.play("Select"), Audio.sound.play("Start");
            break;
        case "ResultsRetryButton":
            Game.RetryGameMode(), Interface.Fade("FadeFromWhite"), Audio.sound.play("Select");
            break;
        case "ResultsContinueButton":
        case "ResultsQuitButton":
            Game.ResetGameMode(), Interface.Fade("FadeFromBlack"), Audio.sound.play("Select");
            break;
        case "ResultsShareButton":
            if (this.ShowMiniclipFBPanel()) return;
            xFBInstant.Share(), Audio.sound.play("Select");
            break;
        case "GameOverQuitButton":
            Game.ResetGameMode(), Interface.Fade("FadeFromBlack"), Audio.sound.play("Select");
            break;
        case "SkinsButton":
            this.app.fire("MenuPanel:UpdateNewTags", "NewSkins", !0), Interface.SetPanelActive("MenuPanel", !1), Interface.SetPanelActive("SkinsPanel", !0), xFBInstant.LogEvent("Shop_Opened"), Cameras.SetState("Skins"), Audio.sound.play("Select");
            break;
        case "SkinsSelectButton":
            Debug.Log("[InterfaceScript] SkinSelectButton."), this.app.fire("Interface:SelectSkin"), xFBInstant.LogEvent("Item_Selected", 1, Game.user.character), Interface.SetPanelActive("SkinsPanel", !1), Interface.SetPanelActive("MenuPanel", !0), Cameras.SetState("Default"), Interface.Fade("FadeFromWhite"), Audio.sound.play("Select");
            break;
        case "SkinsBuyButton":
            Debug.Log("[InterfaceScript] SkinUnlockButton."), this.app.fire("Interface:UnlockSkin");
            break;
        case "SkinsBackButton":
            Interface.SetPanelActive("SkinsPanel", !1), Interface.SetPanelActive("MenuPanel", !0), Interface.Fade("FadeFromBlack"), Cameras.SetState("Default"), Audio.sound.play("Back");
            break;
        case "SettingsButton":
            Interface.SetPanelActive("MenuPanel", !1), Interface.SetPanelActive("SettingsPanel", !0), xFBInstant.LogEvent("Settings_Opened"), Audio.sound.play("Select");
            break;
        case "SettingsBackButton":
            Interface.SetPanelActive("SettingsPanel", !1), Game.gameModeAvailable ? Interface.SetPanelActive("GamePanel", !0) : Interface.SetPanelActive("MenuPanel", !0), Game.settings.SaveData(), Interface.Fade("FadeFromBlack"), Audio.sound.play("Back");
            break;
        case "Version":
            Interface.SetPanelActive("ReleaseNotesPanel", !0), Audio.sound.play("Select");
            break;
        case "ResetProgressButton":
            Game.user.ResetAndSave(), Audio.sound.play("Select");
            break;
        case "ReleaseNotesBackButton":
            Interface.SetPanelActive("ReleaseNotesPanel", !1), Audio.sound.play("Back");
            break;
        case "LeaderboardButton":
            if (this.ShowMiniclipFBPanel()) return;
            Interface.SetPanelActive("MenuPanel", !1), Interface.SetPanelActive("LeaderboardPanel", !0), xFBInstant.LogEvent("Leaderboard_Opened"), Audio.sound.play("Select");
            break;
        case "LeaderboardChallengeButton":
            xFBInstant.Challenge(0), Game.user.UpdateHearts(1), Audio.sound.play("Select");
            break;
        case "LeaderboardShareButton":
            xFBInstant.Share(), Audio.sound.play("Select");
            break;
        case "LeaderboardBackButton":
            Interface.SetPanelActive("LeaderboardPanel", !1), Interface.SetPanelActive("MenuPanel", !0), Interface.Fade("FadeFromBlack"), Game.user.SaveData(), Audio.sound.play("Back");
            break;
        case "AudioToggleButton":
            Audio.MuteAll(!Audio.muteAll), this.app.fire("Settings:UpdateIcons"), Audio.sound.play("Select");
            break;
        case "QualityToggleButton":
            var t = Game.settings.quality;
            ++t > 3 && (t = 1), Game.settings.quality = t, this.app.fire("Settings:UpdateIcons"), Audio.sound.play("Select");
            break;
        case "ResolutionToggleButton":
            var a = Game.settings.resolution;
            ++a > 3 && (a = 1), Game.settings.resolution = a, this.app.fire("Settings:UpdateIcons"), Audio.sound.play("Select");
            break;
        case "ShadowsToggleButton":
            Game.settings.shadows = !Game.settings.shadows, this.app.fire("Settings:UpdateIcons"), Audio.sound.play("Select");
            break;
        case "FullscreenToggleButton":
            Game.settings.ToggleFullscreen(), this.app.fire("Settings:UpdateIcons"), Audio.sound.play("Select");
            break;
        case "DivToggleButton":
            Debug.ToggleDiv(), Audio.sound.play("Select");
            break;
        case "vConsoleButton":
            if (this.vConsoleCounter++, 7 != this.vConsoleCounter) return;
            "undefined" != typeof VConsole ? (vConsole = new VConsole, Debug.enableLogging = !0, Debug.Log("Enabling vConsole")) : console.log("No vConsole in this instance");
            break;
        case "RewardVideoBoostButton":
            if (this.ShowMiniclipFBPanel()) return;
            Audio.sound.play("Select"), xFBInstant.IsRewardedVideoAvailable("10+StartBoost") ? (xFBInstant.PlayAndReward("10+StartBoost"), this.entity.findByPath("MenuPanel/Boost").enabled = !1) : this.app.fire("Interface:ShowMessage", this.GetMessage("No10+StartBoost"));
            break;
        case "RewardVideoDoubleXPButton":
            if (this.ShowMiniclipFBPanel()) return;
            Audio.sound.play("Select"), xFBInstant.IsRewardedVideoAvailable("DoubleXP") ? xFBInstant.PlayAndReward("DoubleXP") : this.app.fire("Interface:ShowMessage", this.GetMessage("NoDoubleXP"));
            break;
        case "RewardVideoGetCoinsButton":
            if (this.ShowMiniclipFBPanel()) return;
            Audio.sound.play("Select"), xFBInstant.IsRewardedVideoAvailable("GameOverCoins") ? xFBInstant.PlayAndReward("GameOverCoins") : this.app.fire("Interface:ShowMessage", this.GetMessage("NoGameOverCoins"));
            break;
        case "GiftButton":
            Game.user.giftUnlocked ? (Interface.SetPanelActive("GiftPanel", !0), Audio.sound.play("Select")) : (this.app.fire("Interface:ShowMessage", "Gift is not ready!"), Audio.sound.play("Back"));
            break;
        case "InviteFriendsButton":
            if (this.ShowMiniclipFBPanel()) return;
            xFBInstant.InviteFriends(), Interface.SetPanelActive("InviteFriendsPanel", !1), Interface.IsPanelActive("LeaderboardPanel") || xFBInstant.isAvailable || Interface.SetPanelActive("ResultsPanel", !0), Audio.sound.play("Select");
            break;
        case "InviteFriendsBackButton":
            Interface.SetPanelActive("InviteFriendsPanel", !1), Interface.SetPanelActive("ResultsPanel", !0), Audio.sound.play("Back");
            break;
        case "GiftClaimRewardVideoButton":
            if (this.ShowMiniclipFBPanel()) return;
            Audio.sound.play("Select"), xFBInstant.IsRewardedVideoAvailable("DoubleCoinGift") ? xFBInstant.PlayAndReward("DoubleCoinGift") : this.app.fire("Interface:ShowMessage", this.GetMessage("NoGameOverCoins")), this.app.fire("MenuPanel:SetGiftTween");
            break;
        case "GiftClaimButton":
            Interface.Fade("FadeFromWhite"), Audio.sound.play("LevelUp"), Audio.sound.play("Select"), Game.user.UpdateCoins(Data.giftCoins), Game.user.firstTime = !1, Game.user.ResetGift(), Game.user.SaveData(), xFBInstant.LogEvent("GiftDefault_Received"), this.app.fire("Interface:ShowMessage", "Coins " + Data.giftCoins + "!"), this.app.fire("MenuPanel:SetGiftTween"), Interface.SetPanelActive("GiftPanel", !1);
            break;
        case "RankUpOKButton":
            Interface.SetPanelActive("RankUpPanel", !1), this.ResultsEvaluateNextPanel("Rank"), Audio.sound.play("Select");
            break;
        case "RankUpShareButton":
            if (this.ShowMiniclipFBPanel()) return;
            Interface.SetPanelActive("RankUpPanel", !1);
            var n = this.GetPanel("RankUpPanel").script.RankUpPanelScript.latestRank;
            xFBInstant.ShareRankUp(n), this.ResultsEvaluateNextPanel("Rank"), Audio.sound.play("Select");
            break;
        case "UnlockedSkinOKButton":
            Interface.SetPanelActive("UnlockedSkinPanel", !1), this.ResultsEvaluateNextPanel("UnlockSkin"), Audio.sound.play("Select");
            break;
        case "UnlockSkinShareButton":
            if (this.ShowMiniclipFBPanel()) return;
            Interface.SetPanelActive("UnlockedSkinPanel", !1);
            var i = this.GetPanel("UnlockedSkinPanel").script.UnlockedSkinPanelScript.latestUnlock;
            xFBInstant.ShareUnlock(i), this.ResultsEvaluateNextPanel("UnlockSkin"), Audio.sound.play("Select");
            break;
        case "ContinueFreeButton":
            Interface.SetPanelActive("ContinuePanel", !1), Players.mainPlayer.characterScript.Respawn(), Audio.sound.play("Select");
            break;
        case "ContinuePaidButton":
            if (this.ShowMiniclipFBPanel()) return;
            Interface.SetPanelActive("ContinuePanel", !1), Game.gameMode.delayedContinueBoostRV ? (Audio.sound.play("LevelUp"), Game.user.UpdateCoins(-Data.reviveCost), xFBInstant.LogEvent("Revive_Coins")) : (xFBInstant.RequestAndPreload("ContinueBoost"), xFBInstant.LogEvent("Revive_RewardedVideo"), Game.gameMode.delayedContinueBoostRV = !0), Interface.Fade("FadeFromWhite");
            var s = Players.mainPlayer.startCloneCount;
            Players.mainPlayer.characterScript.Respawn(1, Math.max(10, 2 * Players.mainPlayer.startCloneCount)), Players.mainPlayer.startCloneCount = s, Audio.sound.play("Select");
            break;
        case "HeartReceivedOKButton":
            Interface.SetPanelActive("HeartReceivedPanel", !1);
            var o = xFBInstant.GetFromEntryPointData("id");
            xFBInstant.isAvailable || void 0 !== o || (o = -1), void 0 !== o && (Game.user.UpdateHearts(1), Game.user.HeartReceivedFrom(o), Game.user.SaveData()), Audio.sound.play("Select");
            break;
        case "FacebookInstantGameButton":
            Interface.OpenFBInstantURl(), Audio.sound.play("Select");
            break;
        case "FacebookInstantGameCloseButton":
            Interface.SetPanelActive("MiniclipInstantGamePanel", !1), Audio.sound.play("Select");
            break;
        default:
            if (e.includes("Skin") && !e.includes("Skinss")) {
                var r = e.split("Button", 1)[0],
                    l = parseInt(r.split("Skin")[1]) - 1;
                if (l >= Data.availablePlayerCharacters.length) return;
                var c = Data.availablePlayerCharacters[l];
                Debug.Log("[InterfaceScript] Preview SkinButton: " + c), this.app.fire("Interface:PreviewSkin", c), this.app.fire("SkinsPanel:UpdateNewUnlocks", l + 1, c, !0), this.app.fire("SkinsPanel:UpdateNewTags", l + 1, c, !0), Audio.sound.play("Select")
            }
            if (e.includes("LeaderboardChallengeButton")) {
                var u = e.split("_")[1];
                xFBInstant.Challenge(u), Audio.sound.play("Select")
            }
    }
}, InterfaceScript.prototype.HideAllPanels = function() {
    for (var e = 0; e < this.panelEntities.length; e++) "DynamicResolution" !== this.panelEntities[e].name && (this.panelEntities[e].enabled = !1);
    this.app.root.findByName("OverlayPanel").enabled = !0
}, InterfaceScript.prototype.GetPanel = function(e) {
    return this.app.root.findByName(e)
}, InterfaceScript.prototype.IsPanelActive = function(e) {
    return this.app.root.findByName(e).enabled
}, InterfaceScript.prototype.SetPanelActive = function(e, t) {
    var a = this.app.root.findByName(e);
    null !== a && (a.enabled = t), this.panelSequenceTime = 0
}, InterfaceScript.prototype.PlayTween = function(e) {
    Debug.Log("[InterfaceScript] PlayTween path: " + e);
    var t = this.entity.findByPath(e);
    Debug.Log("[InterfaceScript] PlayTween entity: " + t), t && (t.enabled = !0, t.script.tweenPosition && t.script.tweenPosition.reset(), t.script.tweenAlpha && t.script.tweenAlpha.reset(), t.script.tweenScale && t.script.tweenScale.reset())
}, InterfaceScript.prototype.ShowMessage = function(e) {
    Debug.Log("[InterfaceScript] ShowMessage: " + e);
    var t = this.entity.findByPath("Message");
    t.enabled = !0, t.element.text = e;
    t.script.tweenPosition.reset(), t.script.tweenAlpha.reset();
    (t = this.entity.findByPath("Message/Text")).enabled = !0, t.element.text = e, t.script.tweenAlpha.reset()
}, InterfaceScript.prototype.Fade = function(e) {
    var t = this.app.root.findByName("FadePanel"),
        a = t.findByName(e);
    a.script.tweenAlpha.reset();
    t.enabled = !0, a.enabled = !0, Debug.Log("[InterfaceScript] Fade received: " + e + ", found: " + a.name + ", on panel: " + t.name)
}, InterfaceScript.prototype.CreateFloater = function(e, t) {
    var a = this.entity.findByPath("GamePanel/Floaters"),
        n = a.findByName("Floater").clone();
    return n.reparent(a, 1), n.enabled = !0, n.name = e.name + "Floater", n.script.FloaterScript.Initialize(e, t), n
}, InterfaceScript.prototype.CreateTarget = function(e) {
    var t = this.entity.findByPath("GamePanel/Targets"),
        a = t.findByName("Target").clone();
    return a.reparent(t, 1), a.enabled = !0, a.name = e.name + "Target", a.script.TargetScript.Initialize(e), a
}, InterfaceScript.prototype.GetMessage = function(e) {
    switch (e) {
        case "No10+StartBoost":
            return "There is no 10+ reward video available. Please try again later!";
        case "NoDoubleCoinGift":
            return "There is no Double Coin reward video available. Please try again later!";
        case "NoGameOverCoins":
            return "There is no Coins reward video available. Please try again later!";
        case "NoDoubleXP":
            return "There is no Double Stars video reward available. Please try again later!";
        case "NoContinueBoost":
            return "There is no Continue Boost reward video available. Please try again later!"
    }
}, InterfaceScript.prototype.ResultsEvaluateNextPanel = function(e) {
    switch (e) {
        case "Rank":
            Game.user.newRanks.length > 0 ? Interface.SetPanelActive("RankUpPanel", !0) : Game.user.newUnlocks.length > 0 ? Interface.SetPanelActive("UnlockedSkinPanel", !0) : this.ResultsEvaluateNextPanel("Results");
            break;
        case "UnlockSkin":
            Game.user.newUnlocks.length > 0 ? Interface.SetPanelActive("UnlockedSkinPanel", !0) : Game.gameMode.resultsAvailable && this.ResultsEvaluateNextPanel("Results");
            break;
        case "Results":
            Game.user.newRanks.length > 0 ? Interface.SetPanelActive("RankUpPanel", !0) : Game.user.newUnlocks.length > 0 ? Interface.SetPanelActive("UnlockedSkinPanel", !0) : "Killed" === Game.gameMode.result ? Interface.SetPanelActive("GameOverPanel", !0) : "TimeUp" === Game.gameMode.result && Interface.SetPanelActive("InviteFriendsPanel", !0)
    }
}, InterfaceScript.prototype.ShowMiniclipFBPanel = function() {
    return Interface.SetPanelActive("MiniclipInstantGamePanel", Game.settings.isMiniclip), Game.settings.isMiniclip
}, InterfaceScript.prototype.OpenFBInstantURl = function() {
    // window.open("https://igroutka.ru/")
}, InterfaceScript.prototype.UpdateCoins = function(e) {
    e > 0 ? (Audio.sound.play("PickUp"), Interface.PlayTween("Coins/Icon")) : (Audio.sound.play("Back"), Interface.PlayTween("MenuPanel/Coins/Text"), Interface.PlayTween("SkinsPanel/Coins/Text"))
}, InterfaceScript.prototype.UpdateHearts = function(e) {
    e > 0 ? (Audio.sound.play("PickUp"), Interface.PlayTween("LeaderboardPanel/Hearts/Icon")) : (Audio.sound.play("Back"), Interface.PlayTween("LeaderboardPanel/Hearts/Text"))
}, InterfaceScript.prototype.UpdateStars = function(e) {
    e > 0 ? Audio.sound.play("PickUp") : Audio.sound.play("Back")
};
var Pools = pc.createScript("Pools");
Pools.prototype.initialize = function() {
    Pools = this, this.game = this.app.root.findByName("Game"), this.poolData = {};
    for (var t = this.entity.children.length, o = 0; o < t; ++o) this.poolData[this.entity.children[o].name] = this.GetEntities(this.entity.children[o])
}, Pools.prototype.GetEntities = function(t) {
    for (var o = {}, e = t.children.length, i = 0; i < e; ++i) o[t.children[i].name] = t.children[i];
    return o
}, Pools.prototype.CloneFromPool = function(t, o) {
    if ("undefined" === this.poolData[t]) return Debug.Log("[Pools] There is no such type in the poolData. Type was " + t), null;
    if ("undefined" === this.poolData[t][o]) return Debug.Log("[Pools] There is no such entity in the poolData. Type was " + t + ". Entity was " + o), null;
    var e = this.poolData[t][o].clone();
    return e.enabled = !0, this.game.addChild(e), e
};
var Cameras = pc.createScript("Cameras");
Cameras.prototype.initialize = function() {
    Cameras = this, this.currentCamera = void 0, this.allCameras = []
}, Cameras.prototype.ActivateCamera = function(a) {
    "string" != typeof a || void 0 !== (a = this.app.root.findByName(a)) ? void 0 !== a.camera ? (void 0 !== this.currentCamera && (this.currentCamera.enabled = !1), this.currentCamera = a, this.currentCamera.enabled = !0) : Debug.LogWarning("[Cameras] ActivateCamera(). You are trying to activate an entity without a camera component.") : Debug.LogWarning("[Cameras] ActivateCamera(). You were looking for a camera which does not exist.")
}, Cameras.prototype.Create = function(a) {
    var r = Pools.CloneFromPool("Cameras", "DefaultCamera");
    return void 0 !== a && (r.script.CameraScript.target = a), r.script.create("PlayfieldScript"), r.script.create("BuildingsControllerScript"), this.ActivateCamera(r), this.allCameras.push(r), r
}, Cameras.prototype.SetTarget = function(a) {
    void 0 !== this.currentCamera && (this.currentCamera.script.CameraScript.target = a, this.currentCamera.script.CameraScript.instaSet = !0)
}, Cameras.prototype.SetState = function(a) {
    void 0 !== this.currentCamera && this.currentCamera.script.CameraScript.SetState(a)
}, Cameras.prototype.AllowScrolling = function(a) {
    void 0 !== this.currentCamera && (this.currentCamera.script.CameraScript.allowScrolling = a)
}, Cameras.prototype.Reset = function() {
    for (var a = this.allCameras.length - 1; a >= 0; --a) this.allCameras[a].destroy();
    this.allCameras.length = 0
};
var CameraScript = pc.createScript("CameraScript");
CameraScript.attributes.add("target", {
    type: "entity",
    title: "Target",
    description: "The Entity to follow"
}), CameraScript.attributes.add("distance", {
    type: "number",
    default: 4,
    title: "Distance",
    description: "How far from the Entity should the follower be"
}), CameraScript.prototype.initialize = function() {
    this.camera = this.entity.camera, this.position = new pc.Vec3, this.targetPosition = new pc.Vec3, this.positionOffset = new pc.Vec3, this.lookAt = new pc.Vec3, this.targetLookAt = new pc.Vec3, this.lookAtOffset = new pc.Vec3, this.levelDistances = [45, 50, 55, 60, 65, 70, 80, 90, 100], this.allowScrolling = !1, !pc.platform.mobile && Game.settings.cheats && (this.app.mouse.on(pc.EVENT_MOUSEWHEEL, this.onMouseWheel, this), this.app.keyboard.on(pc.EVENT_KEYDOWN, this.OnKeyDown, this)), this.lerp = .1, this.sourceLerp = this.lerp, this.instaSet = !0
}, CameraScript.prototype.OnKeyDown = function() {
    var t = parseInt(event.key);
    !isNaN(t) && t > 0 && t <= Players.allPlayers.length && (this.target = Players.allPlayers[t - 1].character, this.instaSet = !0)
}, CameraScript.prototype.postUpdate = function(t) {
    this.target && (this.targetPosition.copy(this.target.getPosition()), !this.allowScrolling && Game.gameMode.started && this.target.hasOwnProperty("level") && (this.distance = this.levelDistances[this.target.level]), this.targetPosition.x += 0 * this.distance, this.targetPosition.y += .35 * this.distance, this.targetPosition.z -= .5 * this.distance, this.targetPosition.add(this.positionOffset), this.instaSet ? (this.position.lerp(this.position, this.targetPosition, 1), this.instaSet = !1) : this.position.lerp(this.position, this.targetPosition, this.instaSet ? 1 : this.lerp), this.entity.setPosition(this.position), this.targetLookAt.copy(this.target.getPosition()).add(this.lookAtOffset), this.lookAt.lerp(this.lookAt, this.targetLookAt, 1), this.entity.lookAt(this.lookAt))
}, CameraScript.prototype.onMouseWheel = function(t) {
    this.allowScrolling && (t.wheel < 0 ? this.distance = pc.math.clamp(this.distance + 15, 35, 1e3) : this.distance = pc.math.clamp(this.distance - 5, 10, 140))
}, CameraScript.prototype.SetState = function(t) {
    switch (t) {
        case "Skins":
            this.positionOffset.set(0, -12, 9), this.lookAtOffset.set(0, -1.5, 0), this.distance = 45, this.instaSet = !0;
            break;
        default:
            this.positionOffset.set(0, 0, 0), this.lookAtOffset.set(0, 0, 0), this.distance = 45, this.instaSet = !0
    }
};
var Floater = pc.createScript("FloaterScript");
Floater.prototype.Initialize = function(t, e) {
    this.playerData = t, this.target = this.playerData.character, this.targetPosition = new pc.Vec3, this.referenceScore = 1, void 0 === e && (e = Cameras.currentCamera.camera), this.camera = e, this.offset = new pc.Vec3(0, 3.5, 0), this.elementPosition = new pc.Vec3, this.isDesktop = pc.platform.desktop && 1 === this.app.graphicsDevice.maxPixelRatio, this.width = this.isDesktop ? this.app.graphicsDevice.width : window.innerWidth, this.heigth = this.isDesktop ? this.app.graphicsDevice.height : window.innerHeight, this.ratioX = 720 / this.width, this.ratioY = 1280 / this.heigth, this.scale = this.entity.element.screen.screen.scale, this.width = this.app.graphicsDevice.width, this.height = this.app.graphicsDevice.height, this.cloneCountTextElement = this.entity.findByPath("Count/Value").element, this.entity.findByName("Count").element.color = this.playerData.color, this.entity.findByName("Arrow").element.color = this.playerData.color, this.cloneCountTextElement.text = "0", this.entity.findByPath("Text").element.text = this.playerData.name, this.entity.findByPath("Text").element.color = new pc.Color(.5 * this.playerData.color.r, .5 * this.playerData.color.g, .5 * this.playerData.color.b, 1), this.entity.findByPath("Text/Text").element.text = this.playerData.name, this.entity.findByPath("Text/Text").element.color = this.playerData.color, this.showing = !0, this.UpdateScore(), this.on("enable", this.onEnable, this), this.onEnable()
}, Floater.prototype.onEnable = function() {
    this.Show(!1)
}, Floater.prototype.update = function() {
    this.playerData.isInside ? (this.showing || this.Show(!0), this.targetPosition = this.target.getPosition().add(this.offset), this.camera.worldToScreen(this.targetPosition, this.elementPosition), this.elementPosition.x *= this.ratioX, this.elementPosition.y *= -this.ratioY, this.entity.setLocalPosition(this.elementPosition), this.referenceScore !== this.playerData.cloneCount && this.UpdateScore()) : this.showing && this.Show(!1)
}, Floater.prototype.Show = function(t) {
    for (var e = 0; e < 3; e++) this.entity.children[e].enabled = t;
    this.showing = t
}, Floater.prototype.UpdateScore = function() {
    this.referenceScore = this.playerData.cloneCount, this.cloneCountTextElement.text = this.playerData.cloneCount.toString()
};
var Characters = pc.createScript("Characters");
Characters.prototype.initialize = function() {
    Characters = this, this.latestCharacter = void 0, this.allCharacters = [], this.allCivilians = [], this.respawnTimeOuts = []
}, Characters.prototype.Create = function(t) {
    return Pools.CloneFromPool("Characters", t)
}, Characters.prototype.Respawn = function(t, a) {
    var r = setTimeout(function() {
        t.Respawn(Data.respawnProbability)
    }, a);
    this.respawnTimeOuts.push(r)
}, Characters.prototype.CreatePlayer = function(t, a) {
    return this.latestCharacter = this.Create(t), this.allCharacters.push(this.latestCharacter), this.latestCharacter
}, Characters.prototype.CreateCivilian = function(t) {
    return this.latestCharacter = this.Create(t), this.latestCharacter.name = "Civilian" + this.allCivilians.length, this.latestCharacter.civilian = this.allCivilians.length, this.allCharacters.push(this.latestCharacter), this.allCivilians.push(this.latestCharacter), this.latestCharacter
}, Characters.prototype.Reset = function() {
    for (var t = this.allCharacters.length - 1; t >= 0; --t) void 0 !== this.allCharacters[t] && this.allCharacters[t].destroy();
    for (var a = this.respawnTimeOuts.length - 1; t >= 0; --t) clearTimeout(this.respawnTimeOuts[a]);
    this.allCharacters.length = 0, this.allCivilians.length = 0, this.respawnTimeOuts.length = 0
};
var CharacterScript = pc.createScript("CharacterScript");
CharacterScript.prototype.Initialize = function(t, i) {
    this.playerData = t, this.position = (new pc.Vec3).copy(i), this.rotation = new pc.Quat, this.localEulerAngles = new pc.Vec3, this.rigidBody = this.entity.script.p2Body.body, this.currentSpeed = 0, this.frameCounter = 0, this.levelTargets = [10, 20, 30, 40, 50, 100], this.character = this.entity.children[0], this.character._shouldSync = !1, this.active = !1, this.updateFollowers = !1, this.cloningAllowed = !1, this.randomVector = new pc.Vec3, this.latestClone = null, this.clones = [], this.cloneCount = 0, this.cloneStep = 0, this.rigidBody.mass = 100, this.rigidBody.updateMassProperties(), this.collisionGroup = (Physics["PLAYER" + this.playerData.index] >>> 0).toString(2), this.collisionMask = ((Physics["PLAYER" + this.playerData.index] | Physics.BUILDINGS) >>> 0).toString(2), this.entity.script.p2Circle.collisionGroup = this.collisionGroup, this.entity.script.p2Circle.collisionMask = this.collisionMask, this.SetSpawnPosition(i), this.j = 0, this.entries = [], this.entryLength = 0, this.clone = null, this.cloneRigidBody = null, this.clonePosition = new pc.Vec3, this.cloneVelocity = new pc.Vec3, this.cloneSpeed = 0, this.cloneEffect = Pools.CloneFromPool("Effects", "CloneEffect"), this.cloneEffectScript = this.cloneEffect.script.CloneEffectScript, this.cloneEffectScript.Initialize(this.playerData), this.cloneEffect.enabled = !1, this.steer = new pc.Vec3, this.velocity = new pc.Vec3, this.follow = new pc.Vec3, this.direction = new pc.Vec3, this.targetPosition = new pc.Vec3, this.minVelocity = this.playerData.maxSpeed, this.minVelocitySqr = this.minVelocity * this.minVelocity, this.maxVelocity = this.playerData.runSpeed, this.maxVelocitySqr = this.maxVelocity * this.maxVelocity, this.flockOffset = 1.5, this.flockStrength = 3.5, this.state = "waving", this.animationStates = CharacterScript.states, this.setState(this.state), this.material = this.app.assets.find(this.playerData.characterEntityName + "_Material").resource.clone(), this.material.name = this.entity.name + "_Material", this.material.diffuse.set(this.playerData.color.r, this.playerData.color.g, this.playerData.color.b, 1), this.material.update(), this.entity.children[0].model.meshInstances[0].material = this.material, this.floater = Interface.CreateFloater(this.playerData), this.target = Interface.CreateTarget(this.playerData), this.averageCenter = (new pc.Vec3).copy(i), this.center = (new pc.Vec3).copy(i), this.distanceVector = new pc.Vec3, this.distanceSqr = 0, this.radius = 2, this.radiusSqr = 4, this.maxDistanceSqr = 0, this.radiusMultiplier = 1.1, this.debug = !1, this.debug && (this.radiusVisualizer = Pools.CloneFromPool("Misc", "RangeVisualizer"), this.radiusVisualizer.setPosition(this.entity.getPosition()), this.radiusVisualizer.translate(0, .21, 0), this.radiusVisualizer.setLocalScale(2 * this.radius, 0, 2 * this.radius), this.targetPositionVisualizer = Pools.CloneFromPool("Misc", "RangeVisualizer")), this.positionToCheck = new pc.Vec3, this.distanceToCheck = 0, this.animationStates = CharacterScript.states, !pc.platform.mobile && Game.settings.cheats && this.app.keyboard.on(pc.EVENT_KEYDOWN, this.OnKeyDown, this), this.app.on("GameMode:Start", this.OnGameModeStarted, this), this.app.on("GameMode:Stop", this.OnGameModeStopped, this), this.on("destroy", this.Destroy, this)
}, CharacterScript.prototype.OnGameModeStarted = function() {
    Debug.Log("[CharacterScript] OnGameModeStarted(). Cloning allowed."), this.active = !0, this.cloningAllowed = !0, this.updateFollowers = !0
}, CharacterScript.prototype.OnGameModeStopped = function() {
    for (Debug.Log("[CharacterScript] OnGameModeStopped(). No more cloning allowed."), this.active = !1, this.cloningAllowed = !1, this.updateFollowers = !1, this.rigidBody.type = p2.Body.KINEMATIC, i = 0; i < this.cloneCount; ++i) this.clone = this.clones[i], this.cloneRigidBody = this.clone.script.p2Body.body, this.cloneRigidBody.velocity[0] = 0, this.cloneRigidBody.velocity[1] = 0, this.cloneRigidBody.damping = 1, this.clone.script.p2Body.body.sleep();
    this.setState("idle")
}, CharacterScript.prototype.Destroy = function(t) {
    this.app.off("GameMode:Start", this.OnGameModeStarted, this), this.app.off("GameMode:Stop", this.OnGameModeStopped, this), this.off("destroy", this.Destroy, this);
    for (var i = this.clones.length - 1; i >= 0; --i) this.clones[i].destroy();
    void 0 !== this.floater && this.floater.destroy(), void 0 !== this.target && this.target.destroy(), this.debug && this.radiusVisualizer.destroy()
}, CharacterScript.states = {
    idle: {
        animation: "Idle.json"
    },
    waving: {
        animation: "Waving.json"
    },
    run: {
        animation: "Running.json"
    }
}, CharacterScript.prototype.setState = function(t) {
    for (this.state = t, this.entity.children[0].animation.play(this.animationStates[t].animation, .2), i = 0; i < this.clones.length; ++i) this.clone = this.clones[i], this.clone.children[0].animation.play(this.animationStates[t].animation, .2)
}, CharacterScript.prototype.OnKeyDown = function(t) {
    this.playerData.isAI || t.key !== pc.KEY_C || this.CloneFollowers()
}, CharacterScript.prototype.update = function(t) {
    this.position.copy(this.entity.getPosition()), this.localEulerAngles.copy(this.entity.children[0].getLocalEulerAngles()), this.updateFollowers && this.cloneCount > 0 ? this.UpdateFollowers() : this.UpdateRadius(), this.debug && (this.radiusVisualizer.setPosition(this.center), this.radiusVisualizer.setLocalScale(2 * this.radius, 0, 2 * this.radius), this.radiusVisualizer.translate(0, .21, 0)), this.frameCounter++, this.active && this.frameCounter % Players.allPlayers.length === this.playerData.index && (this.currentSpeed = Math.sqrt(this.rigidBody.velocity[0] * this.rigidBody.velocity[0] + this.rigidBody.velocity[1] * this.rigidBody.velocity[1]), this.playerData.isInside = Playfield.IsInsideRect(this.entity.getPosition()), this.playerData.isInside && !this.character.enabled ? (this.character.enabled = !0, this.setState("idle")) : !this.playerData.isInside && this.character.enabled && (this.character.enabled = !1), 0 === this.currentSpeed && "idle" !== this.state ? this.setState("idle") : this.currentSpeed > .1 && "run" !== this.state && this.setState("run"))
}, CharacterScript.prototype.GetState = function() {
    var t = "idle";
    return this.currentSpeed > .1 && (t = "run"), t
}, CharacterScript.prototype.CheckLocations = function(t) {
    var e = this.positionToCheck.copy(t).sub(this.position).lengthSq() <= 2.5;
    if (e) return e;
    for (i = 0; i < this.clones.length; ++i)
        if (this.positionToCheck.copy(t).sub(this.clones[i].getPosition()).lengthSq() <= 2.5) return !0;
    return !1
}, CharacterScript.prototype.Fight = function(t, e) {
    var s, o = -1 === e ? t.character : t,
        a = -1 === e ? o.getPosition() : t.getPosition(),
        n = -1 === e ? t.characterScript : t.owner;
    if (0 === this.cloneCount) this.positionToCheck.copy(a).sub(this.position).lengthSq() <= 2.5 && o.strength > 0 && (n.CloneFollowers(1, this.position), this.Die(n));
    else
        for (i = this.clones.length - 1; i >= 0; --i)
            if (s = this.clones[i], this.positionToCheck.copy(a).sub(s.getPosition()).lengthSq() <= 2.5) {
                if (s.strength < o.strength) {
                    n.CloneFollowers(1, s.getPosition()), this.DestroyClone(i);
                    break
                } - 1 === e ? 0 === n.cloneCount && (this.CloneFollowers(1, a), n.Die(this)) : (n.DestroyClone(e), this.CloneFollowers(1, a));
                break
            } return this.playerData.isDead
}, CharacterScript.prototype.Die = function(t) {
    if (this.playerData.isDead = !0, this.playerData.killedBy = t.playerData, t.playerData.kills += 1, this.app.fire("CharacterScript:KilledBy", this.playerData, t.playerData), this.entity.enabled = !1, this.floater.enabled = !1, this.target.enabled = !1, this.clones.length > 0)
        for (i = this.clones.length - 1; i >= 0; --i) this.DestroyClone(i);
    t.playerData.isMainPlayer && Game.user.UpdateAchievement(["Achievement16", "Achievement17", "Achievement18"], 1), this.playerData.isMainPlayer ? (Data.respawnAllowed ? Game.Continue() : Game.GameOver("Killed"), Cameras.SetTarget(t.playerData.character)) : Characters.Respawn(this, Data.AIRespawnTime)
}, CharacterScript.prototype.Respawn = function(t, i) {
    void 0 === t && (t = 1);
    var e = Math.random() <= t;
    if (Data.respawnAllowed && e) {
        this.entity.enabled = !0, this.floater.enabled = !0, this.target.enabled = !0, this.playerData.Respawn(), this.SetSpawnPosition(this.playerData.startPosition);
        var s = void 0 === i ? this.playerData.startCloneCount : i;
        this.playerData.startCloneCount = 0, this.playerData.AddClones(s, !0), this.playerData.controller.Reset(), this.playerData.isMainPlayer && Cameras.SetTarget(this.playerData.character)
    } else this.entity.destroy()
}, CharacterScript.prototype.SetSpawnPosition = function(t) {
    this.spawnPosition = (new pc.Vec3).copy(t), this.entity.setPosition(this.spawnPosition), this.rigidBody.position = [this.spawnPosition.x, -this.spawnPosition.z]
}, CharacterScript.prototype.UpdateFollowers = function() {
    for (this.flockOffset = .1 * this.clones.length, this.flockOffset >= 10 && (this.flockOffset = 10), this.direction.copy(this.playerData.direction), this.targetPosition.copy(this.position).sub(this.direction.scale(this.flockOffset)), this.debug && this.targetPositionVisualizer.setPosition(this.targetPosition), this.entries.length = 0, j = 0; j < this.cloneStep; ++j) this.j = this.j + 1, this.j %= this.cloneCount, this.entries.push(this.j);
    var t;
    for (i = 0; i < this.cloneStep; ++i) {
        if (this.clone = this.clones[this.entries[i]], this.clonePosition.copy(this.clone.getPosition()), this.distanceVector.copy(this.center).sub(this.clonePosition), this.distanceSqr = this.distanceVector.lengthSq(), this.distanceSqr > this.maxDistanceSqr && (this.maxDistanceSqr = this.distanceSqr), this.clone.distanceToCenter = this.distanceSqr, this.clone.strength = this.cloneCount, 0 === this.entries[i] && this.UpdateRadius(), this.averageCenter.add(this.clonePosition), (t = Playfield.IsInsideRect(this.clonePosition)) !== this.clone.children[0].enabled && (this.clone.children[0].enabled = t), t && this.clone.children[0].setLocalEulerAngles(this.localEulerAngles), this.cloneRigidBody = this.clone.script.p2Body.body, this.cloneVelocity.set(this.cloneRigidBody.velocity[0], 0, this.cloneRigidBody.velocity[1]), this.velocity.set(this.rigidBody.velocity[0] - this.cloneRigidBody.velocity[0], 0, -this.rigidBody.velocity[1] - this.cloneRigidBody.velocity[1]), this.follow.copy(this.targetPosition).sub(this.clonePosition), this.steer.copy(this.velocity).add(this.follow.scale(this.flockStrength)), this.velocity.copy(this.cloneVelocity).add(this.steer), this.velocity.lengthSq <= 1 || this.currentSpeed <= 1) {
            if (this.cloneRigidBody.sleepState > 0) continue;
            this.velocity.set(0, 0, 0), this.cloneRigidBody.damping = .99, this.clone.script.p2Body.body.sleep()
        } else this.cloneRigidBody.damping = 0;
        this.cloneRigidBody.velocity[0] = this.velocity.x, this.cloneRigidBody.velocity[1] = -this.velocity.z
    }
}, CharacterScript.prototype.UpdateRadius = function() {
    this.averageCenter.scale(1 / (this.cloneCount + 1)), this.distanceVector.copy(this.center).sub(this.position), this.distanceSqr = this.distanceVector.lengthSq(), this.distanceSqr < 2 && (this.distanceSqr = 2), this.distanceSqr > this.maxDistanceSqr && (this.maxDistanceSqr = this.distanceSqr), this.radius = Math.sqrt(this.maxDistanceSqr) + .5, this.radiusSqr = this.radius * this.radius, this.center.copy(this.averageCenter), this.averageCenter.copy(this.position), this.maxDistanceSqr = 0, this.playerData.center.copy(this.center), this.playerData.radius = this.radius, this.playerData.radiusSqr = this.radiusSqr
}, CharacterScript.prototype.DestroyClone = function(t) {
    var i = this.clones[t];
    this.clones.splice(t, 1), i.destroy(), this.UpdateData(-1)
}, CharacterScript.prototype.CloneFollowers = function(t, i, e) {
    if (this.cloningAllowed) {
        void 0 === t && (t = 10), void 0 === i ? this.randomVector.copy(this.entity.getPosition()) : this.randomVector.copy(i), void 0 === e && (e = !0), this.playerData.isMainPlayer && e && Game.user.UpdateAchievement(["Achievement4", "Achievement5", "Achievement6"], t);
        for (var s = 0; s < t; ++s) this.latestClone = Pools.CloneFromPool("Characters", this.playerData.characterEntityName), this.latestClone.name = "User" + this.playerData.name + "Clone" + this.clones.length, this.latestClone._shouldSync = !1, this.latestClone.owner = this, this.latestClone.distanceToCenter = 0, this.latestClone.strength = this.cloneCount + 1, this.latestClone.children[0].model.meshInstances[0].material = this.material, this.latestClone.children[0]._shouldSync = !1, this.latestClone.setPosition(this.randomVector.x, this.randomVector.y, this.randomVector.z), this.latestClone.script.p2Body.body.mass = 1, this.latestClone.script.p2Body.body.damping = 0, this.latestClone.script.p2Body.body.updateMassProperties(), this.latestClone.script.p2Body.body.position = [this.randomVector.x, -this.randomVector.z], this.latestClone.script.p2Circle.collisionGroup = this.collisionGroup, this.latestClone.script.p2Circle.collisionMask = this.collisionMask, this.clones.push(this.latestClone), this.latestClone.children[0].animation.play(this.animationStates[this.GetState()].animation, .2), this.cloneEffectScript.Show(this.randomVector);
        this.UpdateData(t)
    }
}, CharacterScript.prototype.UpdateData = function(t) {
    this.cloneCount = this.clones.length, this.cloneStep = .1 * this.cloneCount | 0, this.cloneStep < 1 && (this.cloneStep = 1), this.entity.owner = this, this.entity.distanceToCenter = this.distanceVector.copy(this.center).sub(this.clonePosition).lengthSq(), this.entity.strength = this.cloneCount, this.playerData.cloneCount = this.cloneCount + 1, this.playerData.score += t;
    for (var i = 0; i < this.levelTargets.length && (this.entity.level = i, !(this.cloneCount < this.levelTargets[i])); ++i);
    this.playerData.isAI || this.app.fire("GameMode:UpdatePlusOne", this.cloneCount + 1), this.app.fire("GameMode:UpdateLeaderboard")
};
var Players = pc.createScript("Players");

function BattleData(t, a) {
    this.playerData1 = t, this.playerData2 = a, this.clones = this.playerData1.characterScript.clones, this.index = this.clones.length, this.result = !1, BattleData.prototype.Update = function() {
        if (this.index === this.clones.length) this.result = this.playerData2.characterScript.Fight(this.playerData1, -1);
        else {
            if (0 === this.clones.length) return !0;
            for (; this.index >= this.clones.length;) this.index--;
            this.result = this.playerData2.characterScript.Fight(this.clones[this.index], this.index)
        }
        return this.result = this.playerData1.isDead || this.playerData2.isDead, this.result || (this.index--, this.index < 0 && this.clones.length >= 0 && (this.index = this.clones.length)), this.result
    }
}
Players.prototype.initialize = function() {
    Players = this, this.mainPlayer = void 0, this.allPlayers = [], this.sortedPlayers = [], this.startPositions = [], this.availableStartPositions = [], this.GetAllStartPositions(), this.allowDuplicates = !1, this.allCharacters = [], this.allNames = [], this.matchedPlayers = [], this.index = 0, this.startPosition = new pc.Vec3, this.battleData = {}, this.playerData = void 0, this.targetPlayerData = void 0, this.distanceVector = new pc.Vec3, this.distance = 0, this.pairArray = [], this.latestPair = 0, this.formationPositions = [], this.GetFormationPositions()
}, Players.prototype.update = function(t) {
    Game.gameModeAvailable && Game.gameMode.started && this.Battle()
}, Players.prototype.SortPlayers = function() {
    this.sortedPlayers = this.allPlayers.slice(), this.sortedPlayers.sort(function(t, a) {
        return a.score - t.score
    });
    for (var t = 0; t < this.sortedPlayers.length; ++t) this.sortedPlayers[t].rank = t + 1
}, Players.prototype.BuildPlayer = function(t, a, i, s, e) {
    var r = new PlayerData(t, a, i, s);
    return r.Initialize(t, void 0 !== this.mainPlayer, this.allPlayers.length, e), void 0 === this.mainPlayer && (r.isMainPlayer = !0, this.mainPlayer = r), this.allPlayers.push(r), r
}, Players.prototype.BuildMatchedPlayers = function() {
    this.allCharacters = Data.allCharacters.slice();
    for (var t = 0, a = 0; a < this.matchedPlayers.length; ++a) {
        var i = this.matchedPlayers[a].split("_")[0],
            s = Utils.GetRandomFromList(this.allCharacters, !this.allowDuplicates);
        Game.user.rank > 1 && (t = (Math.max(1, Game.user.rank - 2) + 3 * Math.random() | 0) - 1), this.BuildPlayer(i, 1, t, s)
    }
}, Players.prototype.BuildRandomPlayers = function(t) {
    this.allCharacters = Data.allCharacters.slice(), this.allowDuplicates || this.allCharacters.splice(this.allCharacters.indexOf(this.mainPlayer.colorName), 1), this.allNames = Data.allNames.slice();
    for (var a = 0; a < t; a++) this.BuildRandomPlayer()
}, Players.prototype.BuildRandomPlayer = function() {
    var t = Utils.GetRandomFromList(this.allNames, !this.allowDuplicates),
        a = Utils.GetRandomFromList(this.allCharacters, !this.allowDuplicates);
    this.BuildPlayer(t, 1, a)
}, Players.prototype.GetAllStartPositions = function() {
    this.startPositions.length = 0;
    for (var t = this.entity.children[0], a = t.children.length, i = 0; i < a; ++i) this.startPositions.push(t.children[i].getPosition());
    this.RestoreStartPositions()
}, Players.prototype.RestoreStartPositions = function() {
    this.availableStartPositions = this.startPositions.slice()
}, Players.prototype.GetStartPosition = function(t) {
    return void 0 === t && (t = !0), this.index = Math.floor(Math.random() * this.availableStartPositions.length), this.startPosition.copy(this.availableStartPositions[this.index]), t && this.availableStartPositions.splice(this.index, 1), this.startPosition
}, Players.prototype.Reset = function() {
    for (var t = this.allPlayers.length - 1; t >= 0; --t) this.allPlayers[t].character.destroy();
    this.mainPlayer = void 0, this.allPlayers.length = 0, this.GetAllStartPositions()
}, Players.prototype.GetClosest = function(t, a, i, s) {
    for (var e = new pc.Vec3, r = this.allPlayers.length - 1; r >= 0; r--)
        if (this.allPlayers[r] !== i && (s || !this.allPlayers[r].isDead) && e.copy(this.allPlayers[r].character.getPosition()).sub(t).lengthSq() <= a) return this.allPlayers[r];
    return null
}, Players.prototype.GetFormationPositions = function() {
    for (var t = 1.5, a = new pc.Vec3(t, 0, t), i = 1; i < 5; i++) {
        for (var s = 0; s < 5 - i - 1; s++) a.add(new pc.Vec3(-t, 0, 0));
        for (var e = 1; e <= 2 * i + 1; e++) a.add(new pc.Vec3(t, 0, 0)), this.formationPositions.push((new pc.Vec3).copy(a));
        a.add(new pc.Vec3(0, 0, t)), a.x = -3 * i + 1
    }
    for (var r, l = this.formationPositions.slice(this.formationPositions.length - 9, this.formationPositions.length), h = JSON.stringify(l), o = 0; o < 53; o++) {
        r = JSON.parse(h);
        for (var n = 0; n < r.length; n++) r[n].z += t * (o + 1);
        this.formationPositions = this.formationPositions.concat(r)
    }
}, Players.prototype.Battle = function() {
    for (var t = 0; t < this.allPlayers.length; ++t) {
        this.playerData = this.allPlayers[t];
        for (var a = 0; a < this.allPlayers.length; ++a) this.targetPlayerData = this.allPlayers[a], this.playerData.index === this.targetPlayerData.index || this.playerData.isDead || this.targetPlayerData.isDead || (this.latestPair = this.playerData.index < this.targetPlayerData.index ? Math.pow(2, this.playerData.index) * Math.pow(3, this.targetPlayerData.index) : Math.pow(2, this.targetPlayerData.index) * Math.pow(3, this.playerData.index), this.distance = this.distanceVector.copy(this.playerData.center).sub(this.targetPlayerData.center).length(), this.distance <= this.playerData.radius + this.targetPlayerData.radius ? this.battleData.hasOwnProperty(this.latestPair) || (this.battleData[this.latestPair] = new BattleData(this.playerData, this.targetPlayerData), this.pairArray.push(this.latestPair)) : this.battleData.hasOwnProperty(this.latestPair) && (delete this.battleData[this.latestPair], this.pairArray.splice(this.pairArray.indexOf(this.latestPair), 1)))
    }
    for (t = this.pairArray.length - 1; t >= 0; --t) this.battleData[this.pairArray[t]].Update() && (delete this.battleData[this.pairArray[t]], this.pairArray.splice(this.pairArray.indexOf(this.pairArray[t]), 1))
};

function PlayerData(t, r, i, a) {
    this.name = t, this.rank = r, this.startCloneCount = i, this.characterName = a, this.color = Game.palette[a], this.imageURL = "", this.kills = 0, this.score = 1, this.characterEntityName = a.includes("Chibi") ? "Chibi" : a, Data.tempFallbackCharacters.indexOf(this.characterEntityName) > -1 && (this.characterEntityName = "Chibi"), this.character = void 0, this.characterScript = void 0, this.controller = void 0, this.startPosition = new pc.Vec3, this.isAI = !1, this.isMainPlayer = !1, this.isDead = !1, this.index = 0, this.cloneCount = 1, this.killedBy = void 0, this.direction = new pc.Vec3, this.speed = 0, this.maxSpeed = 12, this.runSpeed = 24, this.isInside = !1, this.center = new pc.Vec3, this.radius = 0, this.radiusSqr = 0
}
PlayerData.prototype.Initialize = function(t, r, i, a) {
    this.isAI = r, this.index = i, this.character = Characters.CreatePlayer(this.characterEntityName), this.character.name = "Player" + t, this.character._shouldSync = !1, this.character.player = Players.allPlayers.length, this.character.level = 0, this.startPosition = void 0 === a ? Players.GetStartPosition() : a, this.character.script.create("CharacterScript"), this.characterScript = this.character.script.CharacterScript, this.characterScript.Initialize(this, this.startPosition);
    var e = this.startCloneCount;
    this.startCloneCount = 0, this.AddClones(e, !0), this.isAI ? (this.character.script.create("AICharacterControllerScript"), this.character.script.AICharacterControllerScript.Initialize(this), this.controller = this.character.script.AICharacterControllerScript) : (this.character.script.create("UserCharacterControllerScript"), this.character.script.UserCharacterControllerScript.Initialize(this), this.controller = this.character.script.UserCharacterControllerScript)
}, PlayerData.prototype.Respawn = function() {
    this.isDead = !1, this.killedBy = void 0, this.startPosition = Players.GetStartPosition(!1)
}, PlayerData.prototype.Destroy = function() {
    Players.allPlayers.indexOf(this);
    Players.allPlayers.splice(Players.allPlayers.indexOf(this), 1), this.isMainPlayer && (Players.mainPlayer = void 0), this.character.destroy()
}, PlayerData.prototype.AddClones = function(t, r) {
    this.startCloneCount += t;
    var i = this.characterScript.cloningAllowed;
    if (this.characterScript.cloningAllowed = !0, r)
        for (var a = new pc.Vec3, e = (this.cloneCount, this.cloneCount - 1), s = 0; s < t && !(e >= Players.formationPositions.length); s++) a.copy(this.startPosition).add(Players.formationPositions[e]), this.characterScript.CloneFollowers(1, a, !1), e++;
    else this.characterScript.CloneFollowers(t);
    this.characterScript.cloningAllowed = i
}, PlayerData.prototype.IsInRange = function(t, r) {
    return (new pc.Vec3).copy(this.character.getPosition()).sub(t).lengthSq() <= r
};
var Waypoints = pc.createScript("Waypoints");
Waypoints.prototype.initialize = function() {
    Waypoints = this, this.allWaypoints = {}, this.debug = !1;
    var t = this.entity.findByName("Spawners");
    this.GetAllWaypointData(t)
}, Waypoints.prototype.update = function(t) {
    if (this.debug)
        for (var a in this.allWaypoints) this.allWaypoints[a].Debug()
}, Waypoints.prototype.GetAllWaypointData = function(t) {
    this.allWaypoints = {};
    for (var a = t.children, i = 0; i < a.length; i++) Waypoints.allWaypoints[a[i].name] = new WaypointData(a[i], a)
}, Waypoints.prototype.GetClosestWaypoint = function(t) {
    var a, i = 1 / 0,
        n = 0,
        o = new pc.Vec3;
    for (var p in this.allWaypoints)(n = o.copy(t).sub(this.allWaypoints[p].waypoint.getPosition()).lengthSq()) <= i && (i = n, a = this.allWaypoints[p]);
    return a
}, Waypoints.prototype.GetNextWaypoint = function(t, a) {
    var i = [];
    if (i = i.concat(t.north, t.south, t.west, t.east), void 0 !== a) {
        var n = i.indexOf(a);
        i.splice(n, 1)
    }
    var o = i[Math.random() * (i.length - 1) | 0];
    return this.allWaypoints[o.name]
};
var UserCharacterController = pc.createScript("UserCharacterControllerScript");
UserCharacterController.prototype.Initialize = function(t) {
    this.playerData = t, this.playerData.speed = 0, this.playerData.maxSpeed = 720, this.playerData.runSpeed = 1440, this.position = new pc.Vec3, this.direction = new pc.Vec3(0, 0, -1), this.keyboardDirection = new pc.Vec3, this.linearVelocity = new pc.Vec3, this.y = 0, this.rigidBody = this.entity.script.p2Body.body, this.hasTouch = !1, this.lastEvent = null, this.lastTouchPoint = new pc.Vec2, this.dx = 0, this.dy = 0, this.type = 0, this.allowStop = !1, this.eventlistenerStyle = "Passive", this.passiveFunctions = [];
    var e = this;
    this.passiveFunctions.push(function(t) {
        e.onTouchStart(t)
    }), this.passiveFunctions.push(function(t) {
        e.onTouchMove(t)
    }), this.passiveFunctions.push(function(t) {
        e.onTouchEnd(t)
    }), this.passiveFunctions.push(function(t) {
        e.onTouchEnd(t)
    }), this.app.touch ? this.AddListeners() : (this.app.mouse.on(pc.EVENT_MOUSEMOVE, this.onMouseMove, this), this.app.mouse.on(pc.EVENT_MOUSEDOWN, this.onMouseDown, this), this.app.mouse.on(pc.EVENT_MOUSEUP, this.onMouseUp, this)), this.allowInput = !1, this.app.on("GameMode:Start", this.OnGameModeStarted, this), this.app.on("GameMode:Stop", this.OnGameModeStopped, this), this.on("destroy", this.Destroy, this)
}, UserCharacterController.prototype.AddListeners = function(t) {
    switch (void 0 === t && (t = this.eventlistenerStyle), t) {
        case "PlayCanvas":
            this.app.touch.on(pc.EVENT_TOUCHSTART, this.onTouchStart, this), this.app.touch.on(pc.EVENT_TOUCHMOVE, this.onTouchMove, this), this.app.touch.on(pc.EVENT_TOUCHEND, this.onTouchEnd, this), this.app.touch.on(pc.EVENT_TOUCHCANCEL, this.onTouchCancel, this);
            break;
        case "Passive":
            document.addEventListener("touchstart", this.passiveFunctions[0], {
                capture: !0,
                passive: !0
            }), document.addEventListener("touchmove", this.passiveFunctions[1], {
                capture: !0,
                passive: !0
            }), document.addEventListener("touchend", this.passiveFunctions[2], {
                capture: !0,
                passive: !0
            }), document.addEventListener("touchcancel", this.passiveFunctions[3], {
                capture: !0,
                passive: !0
            })
    }
}, UserCharacterController.prototype.RemoveListeners = function(t) {
    switch (void 0 === t && (t = this.eventlistenerStyle), t) {
        case "PlayCanvas":
            this.app.touch.off(pc.EVENT_TOUCHSTART, this.onTouchStart, this), this.app.touch.off(pc.EVENT_TOUCHMOVE, this.onTouchMove, this), this.app.touch.off(pc.EVENT_TOUCHEND, this.onTouchEnd, this), this.app.touch.off(pc.EVENT_TOUCHCANCEL, this.onTouchCancel, this);
            break;
        case "Passive":
            document.removeEventListener("touchstart", this.passiveFunctions[0]), document.removeEventListener("touchmove", this.passiveFunctions[1]), document.removeEventListener("touchend", this.passiveFunctions[2]), document.removeEventListener("touchcancel", this.passiveFunctions[3])
    }
}, UserCharacterController.prototype.Destroy = function() {
    this.RemoveListeners(), this.app.off("GameMode:Start", this.OnGameModeStarted, this), this.app.off("GameMode:Stop", this.OnGameModeStopped, this), this.off("destroy", this.Destroy, this)
}, UserCharacterController.prototype.update = function(t) {
    if (!Game.pause && this.allowInput) {
        if (t = Time.smoothDeltaTime, this.hasTouch && (1 === this.type && void 0 !== this.lastEvent.touches ? "PlayCanvas" === this.eventlistenerStyle ? (this.dx = this.lastEvent.touches[0].x - this.lastTouchPoint.x, this.dy = this.lastEvent.touches[0].y - this.lastTouchPoint.y) : (this.dx = this.lastEvent.touches[0].clientX - this.lastTouchPoint.x, this.dy = this.lastEvent.touches[0].clientY - this.lastTouchPoint.y) : 0 === this.type && (this.dx = this.lastEvent.x - this.lastTouchPoint.x, this.dy = this.lastEvent.y - this.lastTouchPoint.y), this.allowStop ? this.direction.set(-this.dx, 0, -this.dy) : 0 !== this.dx && 0 !== this.dy && this.direction.set(-this.dx, 0, -this.dy)), pc.platform.desktop) {
            var e = !1;
            this.keyboardDirection.set(0, 0, 0), this.app.keyboard.isPressed(pc.KEY_LEFT) ? (this.keyboardDirection.x = 1, e = !0) : this.app.keyboard.isPressed(pc.KEY_RIGHT) && (this.keyboardDirection.x = -1, e = !0), this.app.keyboard.isPressed(pc.KEY_UP) ? (this.keyboardDirection.z = 1, e = !0) : this.app.keyboard.isPressed(pc.KEY_DOWN) && (this.keyboardDirection.z = -1, e = !0), e && (this.keyboardDirection.normalize(), this.direction.lerp(this.direction, this.keyboardDirection, .3))
        }
        this.direction.normalize(), this.playerData.direction.copy(this.direction), this.playerData.speed = Game.settings.cheats && this.app.keyboard.isPressed(pc.KEY_SHIFT) ? this.playerData.runSpeed : this.playerData.maxSpeed, this.linearVelocity.copy(this.direction).scale(this.playerData.speed), this.rigidBody.velocity[0] = this.linearVelocity.x * t, this.rigidBody.velocity[1] = -this.linearVelocity.z * t, this.position.copy(this.entity.getPosition()), this.y = Utils.GetYAngle(this.direction.x, this.direction.z), this.entity.children[0].setEulerAngles(0, this.y, 0)
    }
}, UserCharacterController.prototype.Reset = function() {
    this.direction = new pc.Vec3(0, 0, -1), this.keyboardDirection = new pc.Vec3, this.linearVelocity = new pc.Vec3, this.y = 0, this.rigidBody.velocity[0] = this.rigidBody.velocity[1] = 0, this.hasTouch = !1, this.lastEvent = null, this.lastTouchPoint = new pc.Vec2, this.dx = 0, this.dy = 0, this.type = 0
}, UserCharacterController.prototype.onMouseDown = function(t) {
    this.type = 0, this.hasTouch = !0, this.lastEvent = t, this.lastTouchPoint.set(t.x, t.y)
}, UserCharacterController.prototype.onMouseUp = function(t) {
    this.hasTouch = !1
}, UserCharacterController.prototype.onMouseMove = function(t) {
    this.lastEvent = t
}, UserCharacterController.prototype.onTouchStart = function(t) {
    this.type = 1, this.hasTouch = !0, this.lastEvent = t, "PlayCanvas" === this.eventlistenerStyle ? this.lastTouchPoint.set(t.touches[0].x, t.touches[0].y) : this.lastTouchPoint.set(t.touches[0].clientX, t.touches[0].clientY)
}, UserCharacterController.prototype.onTouchEnd = function(t) {
    this.lastEvent = t, this.hasTouch = !1
}, UserCharacterController.prototype.onTouchCancel = function(t) {
    this.lastEvent = t, this.hasTouch = !1
}, UserCharacterController.prototype.onTouchMove = function(t) {
    this.lastEvent = t
}, UserCharacterController.prototype.OnGameModeStarted = function() {
    Debug.Log("[UserCharacterController] OnGameModeStarted(). Input allowed"), this.allowInput = !0
}, UserCharacterController.prototype.OnGameModeStopped = function() {
    Debug.Log("[UserCharacterController] OnGameModeStopped(). Input NOT allowed"), this.entity.script.p2Body.body.velocity[0] = 0, this.entity.script.p2Body.body.velocity[1] = 0, this.allowInput = !1
};
var AICharacterControllerScript = pc.createScript("AICharacterControllerScript");
AICharacterControllerScript.prototype.Initialize = function(t) {
    this.playerData = t, this.currentWaypoint = Waypoints.GetClosestWaypoint(this.entity.getPosition()), this.lastWaypointEntity = void 0;
    this.playerData.speed = 0, this.playerData.maxSpeed = 648, this.playerData.runSpeed = 1296, this.position = new pc.Vec3, this.direction = new pc.Vec3(0, 0, -1), this.targetDirection = new pc.Vec3, this.linearVelocity = new pc.Vec3, this.y = 0, this.rigidBody = this.entity.script.p2Body.body, this.allowInput = !1, this.frameCounter = 0, this.STATES = {
        idle: 0,
        targetCivilian: 1,
        targetPlayer: 2,
        evadePlayer: 3
    }, this.state = this.STATES.idle, this.targetEntity = null, this.targetPosition = new pc.Vec3, this.targetCivilianLimit = .7, this.targetPlayerLimit = .45, this.targetDuration = 0, this.allowFakeCollecting = !0, this.delayInClone = 2.5 + pc.math.random(1, 4), this.sourceDelayInClone = this.delayInClone, this.app.on("GameMode:Start", this.OnGameModeStarted, this), this.app.on("GameMode:Stop", this.OnGameModeStopped, this), this.on("destroy", this.Destroy, this)
}, AICharacterControllerScript.prototype.Reset = function() {
    this.state = this.STATES.idle
}, AICharacterControllerScript.prototype.Destroy = function() {
    this.app.off("GameMode:Start", this.OnGameModeStarted, this), this.app.off("GameMode:Stop", this.OnGameModeStopped, this), this.off("destroy", this.Destroy, this)
}, AICharacterControllerScript.prototype.OnGameModeStarted = function() {
    this.allowInput = !0
}, AICharacterControllerScript.prototype.OnGameModeStopped = function() {
    this.entity.script.p2Body.body.velocity[0] = 0, this.entity.script.p2Body.body.velocity[1] = 0, this.allowInput = !1
}, AICharacterControllerScript.prototype.update = function(t) {
    if (!Game.pause && this.allowInput) {
        t = Time.smoothDeltaTime, this.civRange = 225, this.playerRange = 100, this.frameCounter++;
        var i = this.playerData.isInside,
            e = this.frameCounter % Players.allPlayers.length === this.playerData.index;
        if (this.position.copy(this.entity.getPosition()), i) {
            if (e) {
                var a = Civilians.GetClosest(this.position, this.civRange),
                    s = Players.GetClosest(this.position, this.playerRange, this.playerData, !1);
                if (null === a && null === s) this.state = this.STATES.idle;
                else if (null !== s && Math.random() <= this.targetPlayerLimit) {
                    this.playerData.cloneCount > s.cloneCount ? (this.state = this.STATES.targetPlayer, this.targetEntity = s.character, this.targetDuration = 5) : this.State = this.STATES.idle
                } else this.state = this.STATES.targetCivilian, this.targetEntity = a, this.targetDuration = 3
            }
        } else this.state = this.STATES.idle;
        switch (this.state) {
            case this.STATES.idle:
                if (e && this.currentWaypoint.InRange(this.position)) {
                    var o = this.currentWaypoint.waypoint;
                    this.currentWaypoint = Waypoints.GetNextWaypoint(this.currentWaypoint, this.lastWaypointEntity), this.lastWaypointEntity = o
                }
                break;
            case this.STATES.targetCivilian:
            case this.STATES.targetPlayer:
                this.targetDuration = pc.math.clamp(this.targetDuration - t, 0, 999), 0 !== this.targetDuration && null !== this.targetEntity || (this.state = this.STATES.idle);
                break;
            case this.STATES.evadePlayer:
        }
        this.state == this.STATES.idle ? this.targetPosition.copy(this.currentWaypoint.position) : this.targetPosition.copy(this.targetEntity.getPosition()), this.targetDirection.copy(this.targetPosition).sub(this.position).normalize(), this.direction.lerp(this.direction, this.targetDirection, .1), this.playerData.direction.copy(this.direction), this.playerData.speed = this.playerData.maxSpeed, this.linearVelocity.copy(this.direction).scale(this.playerData.speed), this.rigidBody.velocity[0] = this.linearVelocity.x * t, this.rigidBody.velocity[1] = -this.linearVelocity.z * t, this.y = Utils.GetYAngle(this.direction.x, this.direction.z), this.entity.children[0].setEulerAngles(0, this.y, 0), !this.playerData.isInside && this.allowFakeCollecting && (this.delayInClone = pc.math.clamp(this.delayInClone - t, 0, this.sourceDelayInClone), 0 === this.delayInClone && (this.playerData.characterScript.CloneFollowers(1), this.delayInClone = this.sourceDelayInClone))
    }
};
"undefined" != typeof document && (function(t, e) {
    function s(t, e) {
        for (var n in e) try {
            t.style[n] = e[n]
        } catch (t) {}
        return t
    }

    function H(t) {
        return null == t ? String(t) : "object" == typeof t || "function" == typeof t ? Object.prototype.toString.call(t).match(/\s([a-z]+)/i)[1].toLowerCase() || "object" : typeof t
    }

    function R(t, e) {
        if ("array" !== H(e)) return -1;
        if (e.indexOf) return e.indexOf(t);
        for (var n = 0, o = e.length; n < o; n++)
            if (e[n] === t) return n;
        return -1
    }

    function I() {
        var t, e = arguments;
        for (t in e[1])
            if (e[1].hasOwnProperty(t)) switch (H(e[1][t])) {
                case "object":
                    e[0][t] = I({}, e[0][t], e[1][t]);
                    break;
                case "array":
                    e[0][t] = e[1][t].slice(0);
                    break;
                default:
                    e[0][t] = e[1][t]
            }
        return 2 < e.length ? I.apply(null, [e[0]].concat(Array.prototype.slice.call(e, 2))) : e[0]
    }

    function N(t) {
        return 1 === (t = Math.round(255 * t).toString(16)).length ? "0" + t : t
    }

    function S(t, e, n, o) {
        t.addEventListener ? t[o ? "removeEventListener" : "addEventListener"](e, n, !1) : t.attachEvent && t[o ? "detachEvent" : "attachEvent"]("on" + e, n)
    }

    function D(t, o) {
        function g(t, e, n, o) {
            return l[0 | t][Math.round(Math.min((e - n) / (o - n) * z, z))]
        }

        function r() {
            M.legend.fps !== L && (M.legend.fps = L, M.legend[c] = L ? "FPS" : "ms"), w = L ? O.fps : O.duration, M.count[c] = 999 < w ? "999+" : w.toFixed(99 < w ? 0 : F.decimals)
        }

        function m() {
            for (p = n(), T < p - F.threshold && (O.fps -= O.fps / Math.max(1, 60 * F.smoothing / F.interval), O.duration = 1e3 / O.fps), y = F.history; y--;) j[y] = 0 === y ? O.fps : j[y - 1], q[y] = 0 === y ? O.duration : q[y - 1];
            if (r(), F.heat) {
                if (E.length)
                    for (y = E.length; y--;) E[y].el.style[h[E[y].name].heatOn] = L ? g(h[E[y].name].heatmap, O.fps, 0, F.maxFps) : g(h[E[y].name].heatmap, O.duration, F.threshold, 0);
                if (M.graph && h.column.heatOn)
                    for (y = C.length; y--;) C[y].style[h.column.heatOn] = L ? g(h.column.heatmap, j[y], 0, F.maxFps) : g(h.column.heatmap, q[y], F.threshold, 0)
            }
            if (M.graph)
                for (v = 0; v < F.history; v++) C[v].style.height = (L ? j[v] ? Math.round(b / F.maxFps * Math.min(j[v], F.maxFps)) : 0 : q[v] ? Math.round(b / F.threshold * Math.min(q[v], F.threshold)) : 0) + "px"
        }

        function k() {
            20 > F.interval ? (f = i(k), m()) : (f = setTimeout(k, F.interval), x = i(m))
        }

        function G(t) {
            (t = t || window.event).preventDefault ? (t.preventDefault(), t.stopPropagation()) : (t.returnValue = !1, t.cancelBubble = !0), O.toggle()
        }

        function U() {
            F.toggleOn && S(M.container, F.toggleOn, G, 1), t.removeChild(M.container)
        }

        function V() {
            if (M.container && U(), h = D.theme[F.theme], !(l = h.compiledHeatmaps || []).length && h.heatmaps.length) {
                for (v = 0; v < h.heatmaps.length; v++)
                    for (l[v] = [], y = 0; y <= z; y++) {
                        var e, n = l[v],
                            o = y;
                        e = .33 / z * y;
                        var a = h.heatmaps[v].saturation,
                            i = h.heatmaps[v].lightness,
                            p = void 0,
                            c = void 0,
                            u = void 0,
                            d = u = void 0,
                            g = p = c = void 0;
                        g = void 0;
                        0 === (u = .5 >= i ? i * (1 + a) : i + a - i * a) ? e = "#000" : (c = (u - (d = 2 * i - u)) / u, g = (e *= 6) - (p = Math.floor(e)), g *= u * c, 0 === p || 6 === p ? (p = u, c = d + g, u = d) : 1 === p ? (p = u - g, c = u, u = d) : 2 === p ? (p = d, c = u, u = d + g) : 3 === p ? (p = d, c = u - g) : 4 === p ? (p = d + g, c = d) : (p = u, c = d, u -= g), e = "#" + N(p) + N(c) + N(u)), n[o] = e
                    }
                h.compiledHeatmaps = l
            }
            for (var m in M.container = s(document.createElement("div"), h.container), M.count = M.container.appendChild(s(document.createElement("div"), h.count)), M.legend = M.container.appendChild(s(document.createElement("div"), h.legend)), M.graph = F.graph ? M.container.appendChild(s(document.createElement("div"), h.graph)) : 0, E.length = 0, M) M[m] && h[m].heatOn && E.push({
                name: m,
                el: M[m]
            });
            if (C.length = 0, M.graph)
                for (M.graph.style.width = F.history * h.column.width + (F.history - 1) * h.column.spacing + "px", y = 0; y < F.history; y++) C[y] = M.graph.appendChild(s(document.createElement("div"), h.column)), C[y].style.position = "absolute", C[y].style.bottom = 0, C[y].style.right = y * h.column.width + y * h.column.spacing + "px", C[y].style.width = h.column.width + "px", C[y].style.height = "0px";
            s(M.container, F), r(), t.appendChild(M.container), M.graph && (b = M.graph.clientHeight), F.toggleOn && ("click" === F.toggleOn && (M.container.style.cursor = "pointer"), S(M.container, F.toggleOn, G))
        }
        "object" === H(t) && t.nodeType === e && (o = t, t = document.body), t || (t = document.body);
        var h, l, p, f, x, b, w, y, v, O = this,
            F = I({}, D.defaults, o || {}),
            M = {},
            C = [],
            z = 100,
            E = [],
            A = F.threshold,
            P = 0,
            T = n() - A,
            j = [],
            q = [],
            L = "fps" === F.show;
        O.options = F, O.fps = 0, O.duration = 0, O.isPaused = 0, O.tickStart = function() {
            P = n()
        }, O.tick = function() {
            p = n(), A += (p - T - A) / F.smoothing, O.fps = 1e3 / A, O.duration = P < T ? A : p - P, T = p
        }, O.pause = function() {
            return f && (O.isPaused = 1, clearTimeout(f), a(f), a(x), f = x = 0), O
        }, O.resume = function() {
            return f || (O.isPaused = 0, k()), O
        }, O.set = function(t, e) {
            return F[t] = e, L = "fps" === F.show, -1 !== R(t, u) && V(), -1 !== R(t, d) && s(M.container, F), O
        }, O.showDuration = function() {
            return O.set("show", "ms"), O
        }, O.showFps = function() {
            return O.set("show", "fps"), O
        }, O.toggle = function() {
            return O.set("show", L ? "ms" : "fps"), O
        }, O.hide = function() {
            return O.pause(), M.container.style.display = "none", O
        }, O.show = function() {
            return O.resume(), M.container.style.display = "block", O
        }, O.destroy = function() {
            O.pause(), U(), O.tick = O.tickStart = function() {}
        }, V(), k()
    }
    var n, o = t.performance;
    n = o && (o.now || o.webkitNow) ? o[o.now ? "now" : "webkitNow"].bind(o) : function() {
        return +new Date
    };
    for (var a = t.cancelAnimationFrame || t.cancelRequestAnimationFrame, i = t.requestAnimationFrame, h = 0, l = 0, p = (o = ["moz", "webkit", "o"]).length; l < p && !a; ++l) i = (a = t[o[l] + "CancelAnimationFrame"] || t[o[l] + "CancelRequestAnimationFrame"]) && t[o[l] + "RequestAnimationFrame"];
    a || (i = function(e) {
        var o = n(),
            a = Math.max(0, 16 - (o - h));
        return h = o + a, t.setTimeout(function() {
            e(o + a)
        }, a)
    }, a = function(t) {
        clearTimeout(t)
    });
    var c = "string" === H(document.createElement("div").textContent) ? "textContent" : "innerText";
    D.extend = I, window.FPSMeter = D, D.defaults = {
        interval: 100,
        smoothing: 10,
        show: "fps",
        toggleOn: "click",
        decimals: 1,
        maxFps: 60,
        threshold: 100,
        position: "absolute",
        zIndex: 10,
        left: "5px",
        top: "5px",
        right: "auto",
        bottom: "auto",
        margin: "0 0 0 0",
        theme: "dark",
        heat: 0,
        graph: 0,
        history: 20
    };
    var u = ["toggleOn", "theme", "heat", "graph", "history"],
        d = "position zIndex left top right bottom margin".split(" ")
}(window), function(t, e) {
    e.theme = {};
    var n = e.theme.base = {
        heatmaps: [],
        container: {
            heatOn: null,
            heatmap: null,
            padding: "5px",
            minWidth: "95px",
            height: "30px",
            lineHeight: "30px",
            textAlign: "right",
            textShadow: "none"
        },
        count: {
            heatOn: null,
            heatmap: null,
            position: "absolute",
            top: 0,
            right: 0,
            padding: "5px 10px",
            height: "30px",
            fontSize: "24px",
            fontFamily: "Consolas, Andale Mono, monospace",
            zIndex: 2
        },
        legend: {
            heatOn: null,
            heatmap: null,
            position: "absolute",
            top: 0,
            left: 0,
            padding: "5px 10px",
            height: "30px",
            fontSize: "12px",
            lineHeight: "32px",
            fontFamily: "sans-serif",
            textAlign: "left",
            zIndex: 2
        },
        graph: {
            heatOn: null,
            heatmap: null,
            position: "relative",
            boxSizing: "padding-box",
            MozBoxSizing: "padding-box",
            height: "100%",
            zIndex: 1
        },
        column: {
            width: 4,
            spacing: 1,
            heatOn: null,
            heatmap: null
        }
    };
    e.theme.dark = e.extend({}, n, {
        heatmaps: [{
            saturation: .8,
            lightness: .8
        }],
        container: {
            background: "#222",
            color: "#fff",
            border: "1px solid #1a1a1a",
            textShadow: "1px 1px 0 #222"
        },
        count: {
            heatOn: "color"
        },
        column: {
            background: "#3f3f3f"
        }
    }), e.theme.light = e.extend({}, n, {
        heatmaps: [{
            saturation: .5,
            lightness: .5
        }],
        container: {
            color: "#666",
            background: "#fff",
            textShadow: "1px 1px 0 rgba(255,255,255,.5), -1px -1px 0 rgba(255,255,255,.5)",
            boxShadow: "0 0 0 1px rgba(0,0,0,.1)"
        },
        count: {
            heatOn: "color"
        },
        column: {
            background: "#eaeaea"
        }
    }), e.theme.colorful = e.extend({}, n, {
        heatmaps: [{
            saturation: .5,
            lightness: .6
        }],
        container: {
            heatOn: "backgroundColor",
            background: "#888",
            color: "#fff",
            textShadow: "1px 1px 0 rgba(0,0,0,.2)",
            boxShadow: "0 0 0 1px rgba(0,0,0,.1)"
        },
        column: {
            background: "#777",
            backgroundColor: "rgba(0,0,0,.2)"
        }
    }), e.theme.transparent = e.extend({}, n, {
        heatmaps: [{
            saturation: .8,
            lightness: .5
        }],
        container: {
            padding: 0,
            color: "#fff",
            textShadow: "1px 1px 0 rgba(0,0,0,.5)"
        },
        count: {
            padding: "0 5px",
            height: "40px",
            lineHeight: "40px"
        },
        legend: {
            padding: "0 5px",
            height: "40px",
            lineHeight: "42px"
        },
        graph: {
            height: "40px"
        },
        column: {
            width: 5,
            background: "#999",
            heatOn: "backgroundColor",
            opacity: .5
        }
    })
}(window, FPSMeter));
var Fps = pc.createScript("FPSMeter");
Fps.prototype.initialize = function() {
    this.fps = new FPSMeter({
        heat: !0,
        graph: !0
    })
}, Fps.prototype.update = function(t) {
    this.fps.tick()
}; // p2.min.js
/**
 * The MIT License (MIT)
 *
 * Copyright (c) 2015 p2.js authors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
! function(a) {
    if ("object" == typeof exports) module.exports = a();
    else if ("function" == typeof define && false) define(a);
    else {
        var b;
        "undefined" != typeof window ? b = window : "undefined" != typeof global ? b = global : "undefined" != typeof self && (b = self), b.p2 = a()
    }
}(function() {
    return function a(b, c, d) {
        function e(g, h) {
            if (!c[g]) {
                if (!b[g]) {
                    var i = "function" == typeof require && require;
                    if (!h && i) return i(g, !0);
                    if (f) return f(g, !0);
                    throw new Error("Cannot find module '" + g + "'")
                }
                var j = c[g] = {
                    exports: {}
                };
                b[g][0].call(j.exports, function(a) {
                    var c = b[g][1][a];
                    return e(c ? c : a)
                }, j, j.exports, a, b, c, d)
            }
            return c[g].exports
        }
        for (var f = "function" == typeof require && require, g = 0; g < d.length; g++) e(d[g]);
        return e
    }({
        1: [function(a, b, c) {
            function d() {}
            var e = a("./Scalar");
            b.exports = d, d.lineInt = function(a, b, c) {
                c = c || 0;
                var d, f, g, h, i, j, k, l = [0, 0];
                return d = a[1][1] - a[0][1], f = a[0][0] - a[1][0], g = d * a[0][0] + f * a[0][1], h = b[1][1] - b[0][1], i = b[0][0] - b[1][0], j = h * b[0][0] + i * b[0][1], k = d * i - h * f, e.eq(k, 0, c) || (l[0] = (i * g - f * j) / k, l[1] = (d * j - h * g) / k), l
            }, d.segmentsIntersect = function(a, b, c, d) {
                var e = b[0] - a[0],
                    f = b[1] - a[1],
                    g = d[0] - c[0],
                    h = d[1] - c[1];
                if (g * f - h * e == 0) return !1;
                var i = (e * (c[1] - a[1]) + f * (a[0] - c[0])) / (g * f - h * e),
                    j = (g * (a[1] - c[1]) + h * (c[0] - a[0])) / (h * e - g * f);
                return i >= 0 && 1 >= i && j >= 0 && 1 >= j
            }
        }, {
            "./Scalar": 4
        }],
        2: [function(a, b, c) {
            function d() {}
            b.exports = d, d.area = function(a, b, c) {
                return (b[0] - a[0]) * (c[1] - a[1]) - (c[0] - a[0]) * (b[1] - a[1])
            }, d.left = function(a, b, c) {
                return d.area(a, b, c) > 0
            }, d.leftOn = function(a, b, c) {
                return d.area(a, b, c) >= 0
            }, d.right = function(a, b, c) {
                return d.area(a, b, c) < 0
            }, d.rightOn = function(a, b, c) {
                return d.area(a, b, c) <= 0
            };
            var e = [],
                f = [];
            d.collinear = function(a, b, c, g) {
                if (g) {
                    var h = e,
                        i = f;
                    h[0] = b[0] - a[0], h[1] = b[1] - a[1], i[0] = c[0] - b[0], i[1] = c[1] - b[1];
                    var j = h[0] * i[0] + h[1] * i[1],
                        k = Math.sqrt(h[0] * h[0] + h[1] * h[1]),
                        l = Math.sqrt(i[0] * i[0] + i[1] * i[1]),
                        m = Math.acos(j / (k * l));
                    return g > m
                }
                return 0 == d.area(a, b, c)
            }, d.sqdist = function(a, b) {
                var c = b[0] - a[0],
                    d = b[1] - a[1];
                return c * c + d * d
            }
        }, {}],
        3: [function(a, b, c) {
            function d() {
                this.vertices = []
            }

            function e(a, b, c, d, e) {
                e = e || 0;
                var f = b[1] - a[1],
                    g = a[0] - b[0],
                    i = f * a[0] + g * a[1],
                    j = d[1] - c[1],
                    k = c[0] - d[0],
                    l = j * c[0] + k * c[1],
                    m = f * k - j * g;
                return h.eq(m, 0, e) ? [0, 0] : [(k * i - g * l) / m, (f * l - j * i) / m]
            }
            var f = a("./Line"),
                g = a("./Point"),
                h = a("./Scalar");
            b.exports = d, d.prototype.at = function(a) {
                var b = this.vertices,
                    c = b.length;
                return b[0 > a ? a % c + c : a % c]
            }, d.prototype.first = function() {
                return this.vertices[0]
            }, d.prototype.last = function() {
                return this.vertices[this.vertices.length - 1]
            }, d.prototype.clear = function() {
                this.vertices.length = 0
            }, d.prototype.append = function(a, b, c) {
                if ("undefined" == typeof b) throw new Error("From is not given!");
                if ("undefined" == typeof c) throw new Error("To is not given!");
                if (b > c - 1) throw new Error("lol1");
                if (c > a.vertices.length) throw new Error("lol2");
                if (0 > b) throw new Error("lol3");
                for (var d = b; c > d; d++) this.vertices.push(a.vertices[d])
            }, d.prototype.makeCCW = function() {
                for (var a = 0, b = this.vertices, c = 1; c < this.vertices.length; ++c)(b[c][1] < b[a][1] || b[c][1] == b[a][1] && b[c][0] > b[a][0]) && (a = c);
                g.left(this.at(a - 1), this.at(a), this.at(a + 1)) || this.reverse()
            }, d.prototype.reverse = function() {
                for (var a = [], b = 0, c = this.vertices.length; b !== c; b++) a.push(this.vertices.pop());
                this.vertices = a
            }, d.prototype.isReflex = function(a) {
                return g.right(this.at(a - 1), this.at(a), this.at(a + 1))
            };
            var i = [],
                j = [];
            d.prototype.canSee = function(a, b) {
                var c, d, e = i,
                    h = j;
                if (g.leftOn(this.at(a + 1), this.at(a), this.at(b)) && g.rightOn(this.at(a - 1), this.at(a), this.at(b))) return !1;
                d = g.sqdist(this.at(a), this.at(b));
                for (var k = 0; k !== this.vertices.length; ++k)
                    if ((k + 1) % this.vertices.length !== a && k !== a && g.leftOn(this.at(a), this.at(b), this.at(k + 1)) && g.rightOn(this.at(a), this.at(b), this.at(k)) && (e[0] = this.at(a), e[1] = this.at(b), h[0] = this.at(k), h[1] = this.at(k + 1), c = f.lineInt(e, h), g.sqdist(this.at(a), c) < d)) return !1;
                return !0
            }, d.prototype.copy = function(a, b, c) {
                var e = c || new d;
                if (e.clear(), b > a)
                    for (var f = a; b >= f; f++) e.vertices.push(this.vertices[f]);
                else {
                    for (var f = 0; b >= f; f++) e.vertices.push(this.vertices[f]);
                    for (var f = a; f < this.vertices.length; f++) e.vertices.push(this.vertices[f])
                }
                return e
            }, d.prototype.getCutEdges = function() {
                for (var a = [], b = [], c = [], e = new d, f = Number.MAX_VALUE, g = 0; g < this.vertices.length; ++g)
                    if (this.isReflex(g))
                        for (var h = 0; h < this.vertices.length; ++h)
                            if (this.canSee(g, h)) {
                                b = this.copy(g, h, e).getCutEdges(), c = this.copy(h, g, e).getCutEdges();
                                for (var i = 0; i < c.length; i++) b.push(c[i]);
                                b.length < f && (a = b, f = b.length, a.push([this.at(g), this.at(h)]))
                            }
                return a
            }, d.prototype.decomp = function() {
                var a = this.getCutEdges();
                return a.length > 0 ? this.slice(a) : [this]
            }, d.prototype.slice = function(a) {
                if (0 == a.length) return [this];
                if (a instanceof Array && a.length && a[0] instanceof Array && 2 == a[0].length && a[0][0] instanceof Array) {
                    for (var b = [this], c = 0; c < a.length; c++)
                        for (var d = a[c], e = 0; e < b.length; e++) {
                            var f = b[e],
                                g = f.slice(d);
                            if (g) {
                                b.splice(e, 1), b.push(g[0], g[1]);
                                break
                            }
                        }
                    return b
                }
                var d = a,
                    c = this.vertices.indexOf(d[0]),
                    e = this.vertices.indexOf(d[1]);
                return -1 != c && -1 != e ? [this.copy(c, e), this.copy(e, c)] : !1
            }, d.prototype.isSimple = function() {
                for (var a = this.vertices, b = 0; b < a.length - 1; b++)
                    for (var c = 0; b - 1 > c; c++)
                        if (f.segmentsIntersect(a[b], a[b + 1], a[c], a[c + 1])) return !1;
                for (var b = 1; b < a.length - 2; b++)
                    if (f.segmentsIntersect(a[0], a[a.length - 1], a[b], a[b + 1])) return !1;
                return !0
            }, d.prototype.quickDecomp = function(a, b, c, f, h, i) {
                h = h || 100, i = i || 0, f = f || 25, a = "undefined" != typeof a ? a : [], b = b || [], c = c || [];
                var j = [0, 0],
                    k = [0, 0],
                    l = [0, 0],
                    m = 0,
                    n = 0,
                    o = 0,
                    p = 0,
                    q = 0,
                    r = 0,
                    s = 0,
                    t = new d,
                    u = new d,
                    v = this,
                    w = this.vertices;
                if (w.length < 3) return a;
                if (i++, i > h) return console.warn("quickDecomp: max level (" + h + ") reached."), a;
                for (var x = 0; x < this.vertices.length; ++x)
                    if (v.isReflex(x)) {
                        b.push(v.vertices[x]), m = n = Number.MAX_VALUE;
                        for (var y = 0; y < this.vertices.length; ++y) g.left(v.at(x - 1), v.at(x), v.at(y)) && g.rightOn(v.at(x - 1), v.at(x), v.at(y - 1)) && (l = e(v.at(x - 1), v.at(x), v.at(y), v.at(y - 1)), g.right(v.at(x + 1), v.at(x), l) && (o = g.sqdist(v.vertices[x], l), n > o && (n = o, k = l, r = y))), g.left(v.at(x + 1), v.at(x), v.at(y + 1)) && g.rightOn(v.at(x + 1), v.at(x), v.at(y)) && (l = e(v.at(x + 1), v.at(x), v.at(y), v.at(y + 1)), g.left(v.at(x - 1), v.at(x), l) && (o = g.sqdist(v.vertices[x], l), m > o && (m = o, j = l, q = y)));
                        if (r == (q + 1) % this.vertices.length) l[0] = (k[0] + j[0]) / 2, l[1] = (k[1] + j[1]) / 2, c.push(l), q > x ? (t.append(v, x, q + 1), t.vertices.push(l), u.vertices.push(l), 0 != r && u.append(v, r, v.vertices.length), u.append(v, 0, x + 1)) : (0 != x && t.append(v, x, v.vertices.length), t.append(v, 0, q + 1), t.vertices.push(l), u.vertices.push(l), u.append(v, r, x + 1));
                        else {
                            if (r > q && (q += this.vertices.length), p = Number.MAX_VALUE, r > q) return a;
                            for (var y = r; q >= y; ++y) g.leftOn(v.at(x - 1), v.at(x), v.at(y)) && g.rightOn(v.at(x + 1), v.at(x), v.at(y)) && (o = g.sqdist(v.at(x), v.at(y)), p > o && (p = o, s = y % this.vertices.length));
                            s > x ? (t.append(v, x, s + 1), 0 != s && u.append(v, s, w.length), u.append(v, 0, x + 1)) : (0 != x && t.append(v, x, w.length), t.append(v, 0, s + 1), u.append(v, s, x + 1))
                        }
                        return t.vertices.length < u.vertices.length ? (t.quickDecomp(a, b, c, f, h, i), u.quickDecomp(a, b, c, f, h, i)) : (u.quickDecomp(a, b, c, f, h, i), t.quickDecomp(a, b, c, f, h, i)), a
                    }
                return a.push(this), a
            }, d.prototype.removeCollinearPoints = function(a) {
                for (var b = 0, c = this.vertices.length - 1; this.vertices.length > 3 && c >= 0; --c) g.collinear(this.at(c - 1), this.at(c), this.at(c + 1), a) && (this.vertices.splice(c % this.vertices.length, 1), c--, b++);
                return b
            }
        }, {
            "./Line": 1,
            "./Point": 2,
            "./Scalar": 4
        }],
        4: [function(a, b, c) {
            function d() {}
            b.exports = d, d.eq = function(a, b, c) {
                return c = c || 0, Math.abs(a - b) < c
            }
        }, {}],
        5: [function(a, b, c) {
            b.exports = {
                Polygon: a("./Polygon"),
                Point: a("./Point")
            }
        }, {
            "./Point": 2,
            "./Polygon": 3
        }],
        6: [function(a, b, c) {
            b.exports = {
                name: "p2",
                version: "0.7.1",
                description: "A JavaScript 2D physics engine.",
                author: "Stefan Hedman <schteppe@gmail.com> (http://steffe.se)",
                keywords: ["p2.js", "p2", "physics", "engine", "2d"],
                main: "./src/p2.js",
                engines: {
                    node: "*"
                },
                repository: {
                    type: "git",
                    url: "https://github.com/schteppe/p2.js.git"
                },
                bugs: {
                    url: "https://github.com/schteppe/p2.js/issues"
                },
                licenses: [{
                    type: "MIT"
                }],
                devDependencies: {
                    grunt: "^0.4.5",
                    "grunt-contrib-jshint": "^0.11.2",
                    "grunt-contrib-nodeunit": "^0.4.1",
                    "grunt-contrib-uglify": "~0.4.0",
                    "grunt-contrib-watch": "~0.5.0",
                    "grunt-browserify": "~2.0.1",
                    "grunt-contrib-concat": "^0.4.0"
                },
                dependencies: {
                    "poly-decomp": "0.1.1"
                }
            }
        }, {}],
        7: [function(a, b, c) {
            function d(a) {
                this.lowerBound = e.create(), a && a.lowerBound && e.copy(this.lowerBound, a.lowerBound), this.upperBound = e.create(), a && a.upperBound && e.copy(this.upperBound, a.upperBound)
            }
            var e = a("../math/vec2");
            a("../utils/Utils");
            b.exports = d;
            var f = e.create();
            d.prototype.setFromPoints = function(a, b, c, d) {
                var g = this.lowerBound,
                    h = this.upperBound;
                "number" != typeof c && (c = 0), 0 !== c ? e.rotate(g, a[0], c) : e.copy(g, a[0]), e.copy(h, g);
                for (var i = Math.cos(c), j = Math.sin(c), k = 1; k < a.length; k++) {
                    var l = a[k];
                    if (0 !== c) {
                        var m = l[0],
                            n = l[1];
                        f[0] = i * m - j * n, f[1] = j * m + i * n, l = f
                    }
                    for (var o = 0; 2 > o; o++) l[o] > h[o] && (h[o] = l[o]), l[o] < g[o] && (g[o] = l[o])
                }
                b && (e.add(this.lowerBound, this.lowerBound, b), e.add(this.upperBound, this.upperBound, b)), d && (this.lowerBound[0] -= d, this.lowerBound[1] -= d, this.upperBound[0] += d, this.upperBound[1] += d)
            }, d.prototype.copy = function(a) {
                e.copy(this.lowerBound, a.lowerBound), e.copy(this.upperBound, a.upperBound)
            }, d.prototype.extend = function(a) {
                for (var b = 2; b--;) {
                    var c = a.lowerBound[b];
                    this.lowerBound[b] > c && (this.lowerBound[b] = c);
                    var d = a.upperBound[b];
                    this.upperBound[b] < d && (this.upperBound[b] = d)
                }
            }, d.prototype.overlaps = function(a) {
                var b = this.lowerBound,
                    c = this.upperBound,
                    d = a.lowerBound,
                    e = a.upperBound;
                return (d[0] <= c[0] && c[0] <= e[0] || b[0] <= e[0] && e[0] <= c[0]) && (d[1] <= c[1] && c[1] <= e[1] || b[1] <= e[1] && e[1] <= c[1])
            }, d.prototype.containsPoint = function(a) {
                var b = this.lowerBound,
                    c = this.upperBound;
                return b[0] <= a[0] && a[0] <= c[0] && b[1] <= a[1] && a[1] <= c[1]
            }, d.prototype.overlapsRay = function(a) {
                var b = 1 / a.direction[0],
                    c = 1 / a.direction[1],
                    d = (this.lowerBound[0] - a.from[0]) * b,
                    e = (this.upperBound[0] - a.from[0]) * b,
                    f = (this.lowerBound[1] - a.from[1]) * c,
                    g = (this.upperBound[1] - a.from[1]) * c,
                    h = Math.max(Math.max(Math.min(d, e), Math.min(f, g))),
                    i = Math.min(Math.min(Math.max(d, e), Math.max(f, g)));
                return 0 > i ? -1 : h > i ? -1 : h
            }
        }, {
            "../math/vec2": 30,
            "../utils/Utils": 57
        }],
        8: [function(a, b, c) {
            function d(a) {
                this.type = a, this.result = [], this.world = null, this.boundingVolumeType = d.AABB
            }
            var e = a("../math/vec2"),
                f = a("../objects/Body");
            b.exports = d, d.AABB = 1, d.BOUNDING_CIRCLE = 2, d.prototype.setWorld = function(a) {
                this.world = a
            }, d.prototype.getCollisionPairs = function(a) {};
            var g = e.create();
            d.boundingRadiusCheck = function(a, b) {
                e.sub(g, a.position, b.position);
                var c = e.squaredLength(g),
                    d = a.boundingRadius + b.boundingRadius;
                return d * d >= c
            }, d.aabbCheck = function(a, b) {
                return a.getAABB().overlaps(b.getAABB())
            }, d.prototype.boundingVolumeCheck = function(a, b) {
                var c;
                switch (this.boundingVolumeType) {
                    case d.BOUNDING_CIRCLE:
                        c = d.boundingRadiusCheck(a, b);
                        break;
                    case d.AABB:
                        c = d.aabbCheck(a, b);
                        break;
                    default:
                        throw new Error("Bounding volume type not recognized: " + this.boundingVolumeType)
                }
                return c
            }, d.canCollide = function(a, b) {
                var c = f.KINEMATIC,
                    d = f.STATIC;
                return a.type === d && b.type === d ? !1 : a.type === c && b.type === d || a.type === d && b.type === c ? !1 : a.type === c && b.type === c ? !1 : a.sleepState === f.SLEEPING && b.sleepState === f.SLEEPING ? !1 : a.sleepState === f.SLEEPING && b.type === d || b.sleepState === f.SLEEPING && a.type === d ? !1 : !0
            }, d.NAIVE = 1, d.SAP = 2
        }, {
            "../math/vec2": 30,
            "../objects/Body": 31
        }],
        9: [function(a, b, c) {
            function d() {
                e.call(this, e.NAIVE)
            }
            var e = (a("../shapes/Circle"), a("../shapes/Plane"), a("../shapes/Shape"), a("../shapes/Particle"), a("../collision/Broadphase"));
            a("../math/vec2");
            b.exports = d, d.prototype = new e, d.prototype.constructor = d, d.prototype.getCollisionPairs = function(a) {
                var b = a.bodies,
                    c = this.result;
                c.length = 0;
                for (var d = 0, f = b.length; d !== f; d++)
                    for (var g = b[d], h = 0; d > h; h++) {
                        var i = b[h];
                        e.canCollide(g, i) && this.boundingVolumeCheck(g, i) && c.push(g, i)
                    }
                return c
            }, d.prototype.aabbQuery = function(a, b, c) {
                c = c || [];
                for (var d = a.bodies, e = 0; e < d.length; e++) {
                    var f = d[e];
                    f.aabbNeedsUpdate && f.updateAABB(), f.aabb.overlaps(b) && c.push(f)
                }
                return c
            }
        }, {
            "../collision/Broadphase": 8,
            "../math/vec2": 30,
            "../shapes/Circle": 39,
            "../shapes/Particle": 43,
            "../shapes/Plane": 44,
            "../shapes/Shape": 45
        }],
        10: [function(a, b, c) {
            function d() {
                this.contactEquations = [], this.frictionEquations = [], this.enableFriction = !0, this.enabledEquations = !0, this.slipForce = 10, this.frictionCoefficient = .3, this.surfaceVelocity = 0, this.contactEquationPool = new k({
                    size: 32
                }), this.frictionEquationPool = new l({
                    size: 64
                }), this.restitution = 0, this.stiffness = n.DEFAULT_STIFFNESS, this.relaxation = n.DEFAULT_RELAXATION, this.frictionStiffness = n.DEFAULT_STIFFNESS, this.frictionRelaxation = n.DEFAULT_RELAXATION, this.enableFrictionReduction = !0, this.collidingBodiesLastStep = new m, this.contactSkinSize = .01
            }

            function e(a, b) {
                g.set(a.vertices[0], .5 * -b.length, -b.radius), g.set(a.vertices[1], .5 * b.length, -b.radius), g.set(a.vertices[2], .5 * b.length, b.radius), g.set(a.vertices[3], .5 * -b.length, b.radius)
            }

            function f(a, b, c, d) {
                for (var e = T, f = U, j = V, k = W, l = a, m = b.vertices, n = null, o = 0; o !== m.length + 1; o++) {
                    var p = m[o % m.length],
                        q = m[(o + 1) % m.length];
                    g.rotate(e, p, d), g.rotate(f, q, d), i(e, e, c), i(f, f, c), h(j, e, l), h(k, f, l);
                    var r = g.crossLength(j, k);
                    if (null === n && (n = r), 0 >= r * n) return !1;
                    n = r
                }
                return !0
            }
            var g = a("../math/vec2"),
                h = g.sub,
                i = g.add,
                j = g.dot,
                k = (a("../utils/Utils"), a("../utils/ContactEquationPool")),
                l = a("../utils/FrictionEquationPool"),
                m = a("../utils/TupleDictionary"),
                n = a("../equations/Equation"),
                o = (a("../equations/ContactEquation"), a("../equations/FrictionEquation"), a("../shapes/Circle")),
                p = a("../shapes/Convex"),
                q = a("../shapes/Shape"),
                r = (a("../objects/Body"), a("../shapes/Box"));
            b.exports = d;
            var s = g.fromValues(0, 1),
                t = g.fromValues(0, 0),
                u = g.fromValues(0, 0),
                v = g.fromValues(0, 0),
                w = g.fromValues(0, 0),
                x = g.fromValues(0, 0),
                y = g.fromValues(0, 0),
                z = g.fromValues(0, 0),
                A = g.fromValues(0, 0),
                B = g.fromValues(0, 0),
                C = g.fromValues(0, 0),
                D = g.fromValues(0, 0),
                E = g.fromValues(0, 0),
                F = g.fromValues(0, 0),
                G = g.fromValues(0, 0),
                H = g.fromValues(0, 0),
                I = g.fromValues(0, 0),
                J = g.fromValues(0, 0),
                K = g.fromValues(0, 0),
                L = [],
                M = g.create(),
                N = g.create();
            d.prototype.bodiesOverlap = function(a, b) {
                for (var c = M, d = N, e = 0, f = a.shapes.length; e !== f; e++) {
                    var g = a.shapes[e];
                    a.toWorldFrame(c, g.position);
                    for (var h = 0, i = b.shapes.length; h !== i; h++) {
                        var j = b.shapes[h];
                        if (b.toWorldFrame(d, j.position), this[g.type | j.type](a, g, c, g.angle + a.angle, b, j, d, j.angle + b.angle, !0)) return !0
                    }
                }
                return !1
            }, d.prototype.collidedLastStep = function(a, b) {
                var c = 0 | a.id,
                    d = 0 | b.id;
                return !!this.collidingBodiesLastStep.get(c, d)
            }, d.prototype.reset = function() {
                this.collidingBodiesLastStep.reset();
                for (var a = this.contactEquations, b = a.length; b--;) {
                    var c = a[b],
                        d = c.bodyA.id,
                        e = c.bodyB.id;
                    this.collidingBodiesLastStep.set(d, e, !0)
                }
                for (var f = this.contactEquations, g = this.frictionEquations, h = 0; h < f.length; h++) this.contactEquationPool.release(f[h]);
                for (var h = 0; h < g.length; h++) this.frictionEquationPool.release(g[h]);
                this.contactEquations.length = this.frictionEquations.length = 0
            }, d.prototype.createContactEquation = function(a, b, c, d) {
                var e = this.contactEquationPool.get();
                return e.bodyA = a, e.bodyB = b, e.shapeA = c, e.shapeB = d, e.restitution = this.restitution, e.firstImpact = !this.collidedLastStep(a, b), e.stiffness = this.stiffness, e.relaxation = this.relaxation, e.needsUpdate = !0, e.enabled = this.enabledEquations, e.offset = this.contactSkinSize, e
            }, d.prototype.createFrictionEquation = function(a, b, c, d) {
                var e = this.frictionEquationPool.get();
                return e.bodyA = a, e.bodyB = b, e.shapeA = c, e.shapeB = d, e.setSlipForce(this.slipForce), e.frictionCoefficient = this.frictionCoefficient, e.relativeVelocity = this.surfaceVelocity, e.enabled = this.enabledEquations, e.needsUpdate = !0, e.stiffness = this.frictionStiffness, e.relaxation = this.frictionRelaxation, e.contactEquations.length = 0, e
            }, d.prototype.createFrictionFromContact = function(a) {
                var b = this.createFrictionEquation(a.bodyA, a.bodyB, a.shapeA, a.shapeB);
                return g.copy(b.contactPointA, a.contactPointA), g.copy(b.contactPointB, a.contactPointB), g.rotate90cw(b.t, a.normalA), b.contactEquations.push(a), b
            }, d.prototype.createFrictionFromAverage = function(a) {
                var b = this.contactEquations[this.contactEquations.length - 1],
                    c = this.createFrictionEquation(b.bodyA, b.bodyB, b.shapeA, b.shapeB),
                    d = b.bodyA;
                b.bodyB;
                g.set(c.contactPointA, 0, 0), g.set(c.contactPointB, 0, 0), g.set(c.t, 0, 0);
                for (var e = 0; e !== a; e++) b = this.contactEquations[this.contactEquations.length - 1 - e], b.bodyA === d ? (g.add(c.t, c.t, b.normalA), g.add(c.contactPointA, c.contactPointA, b.contactPointA), g.add(c.contactPointB, c.contactPointB, b.contactPointB)) : (g.sub(c.t, c.t, b.normalA), g.add(c.contactPointA, c.contactPointA, b.contactPointB), g.add(c.contactPointB, c.contactPointB, b.contactPointA)), c.contactEquations.push(b);
                var f = 1 / a;
                return g.scale(c.contactPointA, c.contactPointA, f), g.scale(c.contactPointB, c.contactPointB, f), g.normalize(c.t, c.t), g.rotate90cw(c.t, c.t), c
            }, d.prototype[q.LINE | q.CONVEX] = d.prototype.convexLine = function(a, b, c, d, e, f, g, h, i) {
                return i ? !1 : 0
            }, d.prototype[q.LINE | q.BOX] = d.prototype.lineBox = function(a, b, c, d, e, f, g, h, i) {
                return i ? !1 : 0
            };
            var O = new r({
                    width: 1,
                    height: 1
                }),
                P = g.create();
            d.prototype[q.CAPSULE | q.CONVEX] = d.prototype[q.CAPSULE | q.BOX] = d.prototype.convexCapsule = function(a, b, c, d, f, h, i, j, k) {
                var l = P;
                g.set(l, h.length / 2, 0), g.rotate(l, l, j), g.add(l, l, i);
                var m = this.circleConvex(f, h, l, j, a, b, c, d, k, h.radius);
                g.set(l, -h.length / 2, 0), g.rotate(l, l, j), g.add(l, l, i);
                var n = this.circleConvex(f, h, l, j, a, b, c, d, k, h.radius);
                if (k && (m || n)) return !0;
                var o = O;
                e(o, h);
                var p = this.convexConvex(a, b, c, d, f, o, i, j, k);
                return p + m + n
            }, d.prototype[q.CAPSULE | q.LINE] = d.prototype.lineCapsule = function(a, b, c, d, e, f, g, h, i) {
                return i ? !1 : 0
            };
            var Q = g.create(),
                R = g.create(),
                S = new r({
                    width: 1,
                    height: 1
                });
            d.prototype[q.CAPSULE | q.CAPSULE] = d.prototype.capsuleCapsule = function(a, b, c, d, f, h, i, j, k) {
                for (var l, m = Q, n = R, o = 0, p = 0; 2 > p; p++) {
                    g.set(m, (0 === p ? -1 : 1) * b.length / 2, 0), g.rotate(m, m, d), g.add(m, m, c);
                    for (var q = 0; 2 > q; q++) {
                        g.set(n, (0 === q ? -1 : 1) * h.length / 2, 0), g.rotate(n, n, j), g.add(n, n, i), this.enableFrictionReduction && (l = this.enableFriction, this.enableFriction = !1);
                        var r = this.circleCircle(a, b, m, d, f, h, n, j, k, b.radius, h.radius);
                        if (this.enableFrictionReduction && (this.enableFriction = l), k && r) return !0;
                        o += r
                    }
                }
                this.enableFrictionReduction && (l = this.enableFriction, this.enableFriction = !1);
                var s = S;
                e(s, b);
                var t = this.convexCapsule(a, s, c, d, f, h, i, j, k);
                if (this.enableFrictionReduction && (this.enableFriction = l), k && t) return !0;
                if (o += t, this.enableFrictionReduction) {
                    var l = this.enableFriction;
                    this.enableFriction = !1
                }
                e(s, h);
                var u = this.convexCapsule(f, s, i, j, a, b, c, d, k);
                return this.enableFrictionReduction && (this.enableFriction = l), k && u ? !0 : (o += u, this.enableFrictionReduction && o && this.enableFriction && this.frictionEquations.push(this.createFrictionFromAverage(o)), o)
            }, d.prototype[q.LINE | q.LINE] = d.prototype.lineLine = function(a, b, c, d, e, f, g, h, i) {
                return i ? !1 : 0
            }, d.prototype[q.PLANE | q.LINE] = d.prototype.planeLine = function(a, b, c, d, e, f, k, l, m) {
                var n = t,
                    o = u,
                    p = v,
                    q = w,
                    r = x,
                    C = y,
                    D = z,
                    E = A,
                    F = B,
                    G = L,
                    H = 0;
                g.set(n, -f.length / 2, 0), g.set(o, f.length / 2, 0), g.rotate(p, n, l), g.rotate(q, o, l), i(p, p, k), i(q, q, k), g.copy(n, p), g.copy(o, q), h(r, o, n), g.normalize(C, r), g.rotate90cw(F, C), g.rotate(E, s, d), G[0] = n, G[1] = o;
                for (var I = 0; I < G.length; I++) {
                    var J = G[I];
                    h(D, J, c);
                    var K = j(D, E);
                    if (0 > K) {
                        if (m) return !0;
                        var M = this.createContactEquation(a, e, b, f);
                        H++, g.copy(M.normalA, E), g.normalize(M.normalA, M.normalA), g.scale(D, E, K), h(M.contactPointA, J, D), h(M.contactPointA, M.contactPointA, a.position), h(M.contactPointB, J, k), i(M.contactPointB, M.contactPointB, k), h(M.contactPointB, M.contactPointB, e.position), this.contactEquations.push(M), this.enableFrictionReduction || this.enableFriction && this.frictionEquations.push(this.createFrictionFromContact(M))
                    }
                }
                return m ? !1 : (this.enableFrictionReduction || H && this.enableFriction && this.frictionEquations.push(this.createFrictionFromAverage(H)), H)
            }, d.prototype[q.PARTICLE | q.CAPSULE] = d.prototype.particleCapsule = function(a, b, c, d, e, f, g, h, i) {
                return this.circleLine(a, b, c, d, e, f, g, h, i, f.radius, 0)
            }, d.prototype[q.CIRCLE | q.LINE] = d.prototype.circleLine = function(a, b, c, d, e, f, k, l, m, n, o) {
                var n = n || 0,
                    o = "undefined" != typeof o ? o : b.radius,
                    p = t,
                    q = u,
                    r = v,
                    s = w,
                    H = x,
                    I = y,
                    J = z,
                    K = A,
                    M = B,
                    N = C,
                    O = D,
                    P = E,
                    Q = F,
                    R = G,
                    S = L;
                g.set(K, -f.length / 2, 0), g.set(M, f.length / 2, 0), g.rotate(N, K, l), g.rotate(O, M, l), i(N, N, k), i(O, O, k), g.copy(K, N), g.copy(M, O), h(I, M, K), g.normalize(J, I), g.rotate90cw(H, J), h(P, c, K);
                var T = j(P, H);
                h(s, K, k), h(Q, c, k);
                var U = o + n;
                if (Math.abs(T) < U) {
                    g.scale(p, H, T), h(r, c, p), g.scale(q, H, j(H, Q)), g.normalize(q, q), g.scale(q, q, n), i(r, r, q);
                    var V = j(J, r),
                        W = j(J, K),
                        X = j(J, M);
                    if (V > W && X > V) {
                        if (m) return !0;
                        var Y = this.createContactEquation(a, e, b, f);
                        return g.scale(Y.normalA, p, -1), g.normalize(Y.normalA, Y.normalA), g.scale(Y.contactPointA, Y.normalA, o), i(Y.contactPointA, Y.contactPointA, c), h(Y.contactPointA, Y.contactPointA, a.position), h(Y.contactPointB, r, k), i(Y.contactPointB, Y.contactPointB, k), h(Y.contactPointB, Y.contactPointB, e.position), this.contactEquations.push(Y), this.enableFriction && this.frictionEquations.push(this.createFrictionFromContact(Y)), 1
                    }
                }
                S[0] = K, S[1] = M;
                for (var Z = 0; Z < S.length; Z++) {
                    var $ = S[Z];
                    if (h(P, $, c), g.squaredLength(P) < Math.pow(U, 2)) {
                        if (m) return !0;
                        var Y = this.createContactEquation(a, e, b, f);
                        return g.copy(Y.normalA, P), g.normalize(Y.normalA, Y.normalA), g.scale(Y.contactPointA, Y.normalA, o), i(Y.contactPointA, Y.contactPointA, c), h(Y.contactPointA, Y.contactPointA, a.position), h(Y.contactPointB, $, k), g.scale(R, Y.normalA, -n), i(Y.contactPointB, Y.contactPointB, R), i(Y.contactPointB, Y.contactPointB, k), h(Y.contactPointB, Y.contactPointB, e.position), this.contactEquations.push(Y), this.enableFriction && this.frictionEquations.push(this.createFrictionFromContact(Y)), 1
                    }
                }
                return 0
            }, d.prototype[q.CIRCLE | q.CAPSULE] = d.prototype.circleCapsule = function(a, b, c, d, e, f, g, h, i) {
                return this.circleLine(a, b, c, d, e, f, g, h, i, f.radius)
            }, d.prototype[q.CIRCLE | q.CONVEX] = d.prototype[q.CIRCLE | q.BOX] = d.prototype.circleConvex = function(a, b, c, d, e, j, k, l, m, n) {
                for (var n = "number" == typeof n ? n : b.radius, o = t, p = u, q = v, r = w, s = x, y = C, z = D, A = F, B = G, E = H, J = I, K = !1, L = Number.MAX_VALUE, M = j.vertices, N = 0; N !== M.length + 1; N++) {
                    var O = M[N % M.length],
                        P = M[(N + 1) % M.length];
                    if (g.rotate(o, O, l), g.rotate(p, P, l), i(o, o, k), i(p, p, k), h(q, p, o), g.normalize(r, q), g.rotate90cw(s, r), g.scale(B, s, -b.radius), i(B, B, c), f(B, j, k, l)) {
                        g.sub(E, o, B);
                        var Q = Math.abs(g.dot(E, s));
                        L > Q && (g.copy(J, B), L = Q, g.scale(A, s, Q), g.add(A, A, B), K = !0)
                    }
                }
                if (K) {
                    if (m) return !0;
                    var R = this.createContactEquation(a, e, b, j);
                    return g.sub(R.normalA, J, c), g.normalize(R.normalA, R.normalA), g.scale(R.contactPointA, R.normalA, n), i(R.contactPointA, R.contactPointA, c), h(R.contactPointA, R.contactPointA, a.position), h(R.contactPointB, A, k), i(R.contactPointB, R.contactPointB, k), h(R.contactPointB, R.contactPointB, e.position), this.contactEquations.push(R), this.enableFriction && this.frictionEquations.push(this.createFrictionFromContact(R)), 1
                }
                if (n > 0)
                    for (var N = 0; N < M.length; N++) {
                        var S = M[N];
                        if (g.rotate(z, S, l), i(z, z, k), h(y, z, c), g.squaredLength(y) < Math.pow(n, 2)) {
                            if (m) return !0;
                            var R = this.createContactEquation(a, e, b, j);
                            return g.copy(R.normalA, y), g.normalize(R.normalA, R.normalA), g.scale(R.contactPointA, R.normalA, n), i(R.contactPointA, R.contactPointA, c), h(R.contactPointA, R.contactPointA, a.position), h(R.contactPointB, z, k), i(R.contactPointB, R.contactPointB, k), h(R.contactPointB, R.contactPointB, e.position), this.contactEquations.push(R), this.enableFriction && this.frictionEquations.push(this.createFrictionFromContact(R)), 1
                        }
                    }
                return 0
            };
            var T = g.create(),
                U = g.create(),
                V = g.create(),
                W = g.create();
            d.prototype[q.PARTICLE | q.CONVEX] = d.prototype[q.PARTICLE | q.BOX] = d.prototype.particleConvex = function(a, b, c, d, e, k, l, m, n) {
                var o = t,
                    p = u,
                    q = v,
                    r = w,
                    s = x,
                    A = y,
                    B = z,
                    D = C,
                    E = F,
                    G = J,
                    H = K,
                    I = Number.MAX_VALUE,
                    L = !1,
                    M = k.vertices;
                if (!f(c, k, l, m)) return 0;
                if (n) return !0;
                for (var N = 0; N !== M.length + 1; N++) {
                    var O = M[N % M.length],
                        P = M[(N + 1) % M.length];
                    g.rotate(o, O, m), g.rotate(p, P, m), i(o, o, l), i(p, p, l), h(q, p, o), g.normalize(r, q), g.rotate90cw(s, r), h(D, c, o);
                    j(D, s);
                    h(A, o, l), h(B, c, l), g.sub(G, o, c);
                    var Q = Math.abs(g.dot(G, s));
                    I > Q && (I = Q, g.scale(E, s, Q), g.add(E, E, c), g.copy(H, s), L = !0)
                }
                if (L) {
                    var R = this.createContactEquation(a, e, b, k);
                    return g.scale(R.normalA, H, -1), g.normalize(R.normalA, R.normalA), g.set(R.contactPointA, 0, 0), i(R.contactPointA, R.contactPointA, c), h(R.contactPointA, R.contactPointA, a.position), h(R.contactPointB, E, l), i(R.contactPointB, R.contactPointB, l), h(R.contactPointB, R.contactPointB, e.position), this.contactEquations.push(R), this.enableFriction && this.frictionEquations.push(this.createFrictionFromContact(R)), 1
                }
                return 0
            }, d.prototype[q.CIRCLE] = d.prototype.circleCircle = function(a, b, c, d, e, f, j, k, l, m, n) {
                var o = t,
                    m = m || b.radius,
                    n = n || f.radius;
                h(o, c, j);
                var p = m + n;
                if (g.squaredLength(o) > Math.pow(p, 2)) return 0;
                if (l) return !0;
                var q = this.createContactEquation(a, e, b, f);
                return h(q.normalA, j, c), g.normalize(q.normalA, q.normalA), g.scale(q.contactPointA, q.normalA, m), g.scale(q.contactPointB, q.normalA, -n), i(q.contactPointA, q.contactPointA, c), h(q.contactPointA, q.contactPointA, a.position), i(q.contactPointB, q.contactPointB, j), h(q.contactPointB, q.contactPointB, e.position), this.contactEquations.push(q), this.enableFriction && this.frictionEquations.push(this.createFrictionFromContact(q)), 1
            }, d.prototype[q.PLANE | q.CONVEX] = d.prototype[q.PLANE | q.BOX] = d.prototype.planeConvex = function(a, b, c, d, e, f, k, l, m) {
                var n = t,
                    o = u,
                    p = v,
                    q = 0;
                g.rotate(o, s, d);
                for (var r = 0; r !== f.vertices.length; r++) {
                    var w = f.vertices[r];
                    if (g.rotate(n, w, l), i(n, n, k), h(p, n, c), j(p, o) <= 0) {
                        if (m) return !0;
                        q++;
                        var x = this.createContactEquation(a, e, b, f);
                        h(p, n, c), g.copy(x.normalA, o);
                        var y = j(p, x.normalA);
                        g.scale(p, x.normalA, y), h(x.contactPointB, n, e.position), h(x.contactPointA, n, p), h(x.contactPointA, x.contactPointA, a.position), this.contactEquations.push(x), this.enableFrictionReduction || this.enableFriction && this.frictionEquations.push(this.createFrictionFromContact(x))
                    }
                }
                return this.enableFrictionReduction && this.enableFriction && q && this.frictionEquations.push(this.createFrictionFromAverage(q)), q
            }, d.prototype[q.PARTICLE | q.PLANE] = d.prototype.particlePlane = function(a, b, c, d, e, f, i, k, l) {
                var m = t,
                    n = u;
                k = k || 0, h(m, c, i), g.rotate(n, s, k);
                var o = j(m, n);
                if (o > 0) return 0;
                if (l) return !0;
                var p = this.createContactEquation(e, a, f, b);
                return g.copy(p.normalA, n), g.scale(m, p.normalA, o), h(p.contactPointA, c, m), h(p.contactPointA, p.contactPointA, e.position), h(p.contactPointB, c, a.position), this.contactEquations.push(p), this.enableFriction && this.frictionEquations.push(this.createFrictionFromContact(p)), 1
            }, d.prototype[q.CIRCLE | q.PARTICLE] = d.prototype.circleParticle = function(a, b, c, d, e, f, j, k, l) {
                var m = t;
                if (h(m, j, c), g.squaredLength(m) > Math.pow(b.radius, 2)) return 0;
                if (l) return !0;
                var n = this.createContactEquation(a, e, b, f);
                return g.copy(n.normalA, m), g.normalize(n.normalA, n.normalA), g.scale(n.contactPointA, n.normalA, b.radius), i(n.contactPointA, n.contactPointA, c), h(n.contactPointA, n.contactPointA, a.position), h(n.contactPointB, j, e.position), this.contactEquations.push(n), this.enableFriction && this.frictionEquations.push(this.createFrictionFromContact(n)), 1
            };
            var X = new o({
                    radius: 1
                }),
                Y = g.create(),
                Z = g.create();
            g.create();
            d.prototype[q.PLANE | q.CAPSULE] = d.prototype.planeCapsule = function(a, b, c, d, e, f, h, j, k) {
                var l = Y,
                    m = Z,
                    n = X;
                g.set(l, -f.length / 2, 0), g.rotate(l, l, j), i(l, l, h), g.set(m, f.length / 2, 0), g.rotate(m, m, j), i(m, m, h), n.radius = f.radius;
                var o;
                this.enableFrictionReduction && (o = this.enableFriction, this.enableFriction = !1);
                var p = this.circlePlane(e, n, l, 0, a, b, c, d, k),
                    q = this.circlePlane(e, n, m, 0, a, b, c, d, k);
                if (this.enableFrictionReduction && (this.enableFriction = o), k) return p || q;
                var r = p + q;
                return this.enableFrictionReduction && r && this.frictionEquations.push(this.createFrictionFromAverage(r)), r
            }, d.prototype[q.CIRCLE | q.PLANE] = d.prototype.circlePlane = function(a, b, c, d, e, f, k, l, m) {
                var n = a,
                    o = b,
                    p = c,
                    q = e,
                    r = k,
                    w = l;
                w = w || 0;
                var x = t,
                    y = u,
                    z = v;
                h(x, p, r), g.rotate(y, s, w);
                var A = j(y, x);
                if (A > o.radius) return 0;
                if (m) return !0;
                var B = this.createContactEquation(q, n, f, b);
                return g.copy(B.normalA, y), g.scale(B.contactPointB, B.normalA, -o.radius), i(B.contactPointB, B.contactPointB, p), h(B.contactPointB, B.contactPointB, n.position), g.scale(z, B.normalA, A), h(B.contactPointA, x, z), i(B.contactPointA, B.contactPointA, r), h(B.contactPointA, B.contactPointA, q.position), this.contactEquations.push(B), this.enableFriction && this.frictionEquations.push(this.createFrictionFromContact(B)), 1
            }, d.prototype[q.CONVEX] = d.prototype[q.CONVEX | q.BOX] = d.prototype[q.BOX] = d.prototype.convexConvex = function(a, b, c, e, f, k, l, m, n, o) {
                var p = t,
                    q = u,
                    r = v,
                    s = w,
                    y = x,
                    C = z,
                    D = A,
                    E = B,
                    F = 0,
                    o = "number" == typeof o ? o : 0,
                    G = d.findSeparatingAxis(b, c, e, k, l, m, p);
                if (!G) return 0;
                h(D, l, c), j(p, D) > 0 && g.scale(p, p, -1);
                var H = d.getClosestEdge(b, e, p, !0),
                    I = d.getClosestEdge(k, m, p);
                if (-1 === H || -1 === I) return 0;
                for (var J = 0; 2 > J; J++) {
                    var K = H,
                        L = I,
                        M = b,
                        N = k,
                        O = c,
                        P = l,
                        Q = e,
                        R = m,
                        S = a,
                        T = f;
                    if (0 === J) {
                        var U;
                        U = K, K = L, L = U, U = M, M = N, N = U, U = O, O = P, P = U, U = Q, Q = R, R = U, U = S, S = T, T = U
                    }
                    for (var V = L; L + 2 > V; V++) {
                        var W = N.vertices[(V + N.vertices.length) % N.vertices.length];
                        g.rotate(q, W, R), i(q, q, P);
                        for (var X = 0, Y = K - 1; K + 2 > Y; Y++) {
                            var Z = M.vertices[(Y + M.vertices.length) % M.vertices.length],
                                $ = M.vertices[(Y + 1 + M.vertices.length) % M.vertices.length];
                            g.rotate(r, Z, Q), g.rotate(s, $, Q), i(r, r, O), i(s, s, O), h(y, s, r), g.rotate90cw(E, y), g.normalize(E, E), h(D, q, r);
                            var _ = j(E, D);
                            (Y === K && o >= _ || Y !== K && 0 >= _) && X++
                        }
                        if (X >= 3) {
                            if (n) return !0;
                            var aa = this.createContactEquation(S, T, M, N);
                            F++;
                            var Z = M.vertices[K % M.vertices.length],
                                $ = M.vertices[(K + 1) % M.vertices.length];
                            g.rotate(r, Z, Q), g.rotate(s, $, Q), i(r, r, O), i(s, s, O), h(y, s, r), g.rotate90cw(aa.normalA, y), g.normalize(aa.normalA, aa.normalA), h(D, q, r);
                            var _ = j(aa.normalA, D);
                            g.scale(C, aa.normalA, _), h(aa.contactPointA, q, O), h(aa.contactPointA, aa.contactPointA, C), i(aa.contactPointA, aa.contactPointA, O), h(aa.contactPointA, aa.contactPointA, S.position), h(aa.contactPointB, q, P), i(aa.contactPointB, aa.contactPointB, P), h(aa.contactPointB, aa.contactPointB, T.position), this.contactEquations.push(aa), this.enableFrictionReduction || this.enableFriction && this.frictionEquations.push(this.createFrictionFromContact(aa))
                        }
                    }
                }
                return this.enableFrictionReduction && this.enableFriction && F && this.frictionEquations.push(this.createFrictionFromAverage(F)), F
            };
            var $ = g.fromValues(0, 0);
            d.projectConvexOntoAxis = function(a, b, c, d, e) {
                var f, h, i = null,
                    k = null,
                    l = $;
                g.rotate(l, d, -c);
                for (var m = 0; m < a.vertices.length; m++) f = a.vertices[m], h = j(f, l), (null === i || h > i) && (i = h), (null === k || k > h) && (k = h);
                if (k > i) {
                    var n = k;
                    k = i, i = n
                }
                var o = j(b, d);
                g.set(e, k + o, i + o)
            };
            var _ = g.fromValues(0, 0),
                aa = g.fromValues(0, 0),
                ba = g.fromValues(0, 0),
                ca = g.fromValues(0, 0),
                da = g.fromValues(0, 0),
                ea = g.fromValues(0, 0);
            d.findSeparatingAxis = function(a, b, c, e, f, i, j) {
                var k = null,
                    l = !1,
                    m = !1,
                    n = _,
                    o = aa,
                    p = ba,
                    q = ca,
                    s = da,
                    t = ea;
                if (a instanceof r && e instanceof r)
                    for (var u = 0; 2 !== u; u++) {
                        var v = a,
                            w = c;
                        1 === u && (v = e, w = i);
                        for (var x = 0; 2 !== x; x++) {
                            0 === x ? g.set(q, 0, 1) : 1 === x && g.set(q, 1, 0), 0 !== w && g.rotate(q, q, w), d.projectConvexOntoAxis(a, b, c, q, s), d.projectConvexOntoAxis(e, f, i, q, t);
                            var y = s,
                                z = t,
                                A = !1;
                            s[0] > t[0] && (z = s, y = t, A = !0);
                            var B = z[0] - y[1];
                            l = 0 >= B, (null === k || B > k) && (g.copy(j, q), k = B, m = l)
                        }
                    } else
                        for (var u = 0; 2 !== u; u++) {
                            var v = a,
                                w = c;
                            1 === u && (v = e, w = i);
                            for (var x = 0; x !== v.vertices.length; x++) {
                                g.rotate(o, v.vertices[x], w), g.rotate(p, v.vertices[(x + 1) % v.vertices.length], w), h(n, p, o), g.rotate90cw(q, n), g.normalize(q, q), d.projectConvexOntoAxis(a, b, c, q, s), d.projectConvexOntoAxis(e, f, i, q, t);
                                var y = s,
                                    z = t,
                                    A = !1;
                                s[0] > t[0] && (z = s, y = t, A = !0);
                                var B = z[0] - y[1];
                                l = 0 >= B, (null === k || B > k) && (g.copy(j, q), k = B, m = l)
                            }
                        }
                return m
            };
            var fa = g.fromValues(0, 0),
                ga = g.fromValues(0, 0),
                ha = g.fromValues(0, 0);
            d.getClosestEdge = function(a, b, c, d) {
                var e = fa,
                    f = ga,
                    i = ha;
                g.rotate(e, c, -b), d && g.scale(e, e, -1);
                for (var k = -1, l = a.vertices.length, m = -1, n = 0; n !== l; n++) {
                    h(f, a.vertices[(n + 1) % l], a.vertices[n % l]), g.rotate90cw(i, f), g.normalize(i, i);
                    var o = j(i, e);
                    (-1 === k || o > m) && (k = n % l, m = o)
                }
                return k
            };
            var ia = g.create(),
                ja = g.create(),
                ka = g.create(),
                la = g.create(),
                ma = g.create(),
                na = g.create(),
                oa = g.create();
            d.prototype[q.CIRCLE | q.HEIGHTFIELD] = d.prototype.circleHeightfield = function(a, b, c, d, e, f, j, k, l, m) {
                var n = f.heights,
                    m = m || b.radius,
                    o = f.elementWidth,
                    p = ja,
                    q = ia,
                    r = ma,
                    s = oa,
                    t = na,
                    u = ka,
                    v = la,
                    w = Math.floor((c[0] - m - j[0]) / o),
                    x = Math.ceil((c[0] + m - j[0]) / o);
                0 > w && (w = 0), x >= n.length && (x = n.length - 1);
                for (var y = n[w], z = n[x], A = w; x > A; A++) n[A] < z && (z = n[A]), n[A] > y && (y = n[A]);
                if (c[1] - m > y) return l ? !1 : 0;
                for (var B = !1, A = w; x > A; A++) {
                    g.set(u, A * o, n[A]), g.set(v, (A + 1) * o, n[A + 1]), g.add(u, u, j), g.add(v, v, j), g.sub(t, v, u), g.rotate(t, t, Math.PI / 2), g.normalize(t, t), g.scale(q, t, -m), g.add(q, q, c), g.sub(p, q, u);
                    var C = g.dot(p, t);
                    if (q[0] >= u[0] && q[0] < v[0] && 0 >= C) {
                        if (l) return !0;
                        B = !0, g.scale(p, t, -C), g.add(r, q, p), g.copy(s, t);
                        var D = this.createContactEquation(e, a, f, b);
                        g.copy(D.normalA, s), g.scale(D.contactPointB, D.normalA, -m), i(D.contactPointB, D.contactPointB, c), h(D.contactPointB, D.contactPointB, a.position), g.copy(D.contactPointA, r), g.sub(D.contactPointA, D.contactPointA, e.position), this.contactEquations.push(D), this.enableFriction && this.frictionEquations.push(this.createFrictionFromContact(D))
                    }
                }
                if (B = !1, m > 0)
                    for (var A = w; x >= A; A++)
                        if (g.set(u, A * o, n[A]), g.add(u, u, j), g.sub(p, c, u), g.squaredLength(p) < Math.pow(m, 2)) {
                            if (l) return !0;
                            B = !0;
                            var D = this.createContactEquation(e, a, f, b);
                            g.copy(D.normalA, p), g.normalize(D.normalA, D.normalA), g.scale(D.contactPointB, D.normalA, -m), i(D.contactPointB, D.contactPointB, c), h(D.contactPointB, D.contactPointB, a.position), h(D.contactPointA, u, j), i(D.contactPointA, D.contactPointA, j), h(D.contactPointA, D.contactPointA, e.position), this.contactEquations.push(D), this.enableFriction && this.frictionEquations.push(this.createFrictionFromContact(D))
                        }
                return B ? 1 : 0
            };
            var pa = g.create(),
                qa = g.create(),
                ra = g.create(),
                sa = new p({
                    vertices: [g.create(), g.create(), g.create(), g.create()]
                });
            d.prototype[q.BOX | q.HEIGHTFIELD] = d.prototype[q.CONVEX | q.HEIGHTFIELD] = d.prototype.convexHeightfield = function(a, b, c, d, e, f, h, i, j) {
                var k = f.heights,
                    l = f.elementWidth,
                    m = pa,
                    n = qa,
                    o = ra,
                    p = sa,
                    q = Math.floor((a.aabb.lowerBound[0] - h[0]) / l),
                    r = Math.ceil((a.aabb.upperBound[0] - h[0]) / l);
                0 > q && (q = 0), r >= k.length && (r = k.length - 1);
                for (var s = k[q], t = k[r], u = q; r > u; u++) k[u] < t && (t = k[u]), k[u] > s && (s = k[u]);
                if (a.aabb.lowerBound[1] > s) return j ? !1 : 0;
                for (var v = 0, u = q; r > u; u++) {
                    g.set(m, u * l, k[u]), g.set(n, (u + 1) * l, k[u + 1]), g.add(m, m, h), g.add(n, n, h);
                    var w = 100;
                    g.set(o, .5 * (n[0] + m[0]), .5 * (n[1] + m[1] - w)), g.sub(p.vertices[0], n, o), g.sub(p.vertices[1], m, o), g.copy(p.vertices[2], p.vertices[1]), g.copy(p.vertices[3], p.vertices[0]), p.vertices[2][1] -= w, p.vertices[3][1] -= w, v += this.convexConvex(a, b, c, d, e, p, o, 0, j)
                }
                return v
            }
        }, {
            "../equations/ContactEquation": 21,
            "../equations/Equation": 22,
            "../equations/FrictionEquation": 23,
            "../math/vec2": 30,
            "../objects/Body": 31,
            "../shapes/Box": 37,
            "../shapes/Circle": 39,
            "../shapes/Convex": 40,
            "../shapes/Shape": 45,
            "../utils/ContactEquationPool": 48,
            "../utils/FrictionEquationPool": 49,
            "../utils/TupleDictionary": 56,
            "../utils/Utils": 57
        }],
        11: [function(a, b, c) {
            function d(a) {
                a = a || {}, this.from = a.from ? f.fromValues(a.from[0], a.from[1]) : f.create(), this.to = a.to ? f.fromValues(a.to[0], a.to[1]) : f.create(), this.checkCollisionResponse = void 0 !== a.checkCollisionResponse ? a.checkCollisionResponse : !0, this.skipBackfaces = !!a.skipBackfaces, this.collisionMask = void 0 !== a.collisionMask ? a.collisionMask : -1, this.collisionGroup = void 0 !== a.collisionGroup ? a.collisionGroup : -1, this.mode = void 0 !== a.mode ? a.mode : d.ANY, this.callback = a.callback || function(a) {}, this.direction = f.create(), this.length = 1, this.update()
            }

            function e(a, b, c) {
                f.sub(h, c, a);
                var d = f.dot(h, b);
                return f.scale(i, b, d), f.add(i, i, a), f.squaredDistance(c, i)
            }
            b.exports = d;
            var f = a("../math/vec2");
            a("../collision/RaycastResult"), a("../shapes/Shape"), a("../collision/AABB");
            d.prototype.constructor = d, d.CLOSEST = 1, d.ANY = 2, d.ALL = 4, d.prototype.update = function() {
                var a = this.direction;
                f.sub(a, this.to, this.from), this.length = f.length(a), f.normalize(a, a)
            }, d.prototype.intersectBodies = function(a, b) {
                for (var c = 0, d = b.length; !a.shouldStop(this) && d > c; c++) {
                    var e = b[c],
                        f = e.getAABB();
                    (f.overlapsRay(this) >= 0 || f.containsPoint(this.from)) && this.intersectBody(a, e)
                }
            };
            var g = f.create();
            d.prototype.intersectBody = function(a, b) {
                var c = this.checkCollisionResponse;
                if (!c || b.collisionResponse)
                    for (var d = g, e = 0, h = b.shapes.length; h > e; e++) {
                        var i = b.shapes[e];
                        if ((!c || i.collisionResponse) && 0 !== (this.collisionGroup & i.collisionMask) && 0 !== (i.collisionGroup & this.collisionMask)) {
                            f.rotate(d, i.position, b.angle), f.add(d, d, b.position);
                            var j = i.angle + b.angle;
                            if (this.intersectShape(a, i, j, d, b), a.shouldStop(this)) break
                        }
                    }
            }, d.prototype.intersectShape = function(a, b, c, d, f) {
                var g = this.from,
                    h = e(g, this.direction, d);
                h > b.boundingRadius * b.boundingRadius || (this._currentBody = f, this._currentShape = b, b.raycast(a, this, d, c), this._currentBody = this._currentShape = null)
            }, d.prototype.getAABB = function(a) {
                var b = this.to,
                    c = this.from;
                f.set(a.lowerBound, Math.min(b[0], c[0]), Math.min(b[1], c[1])), f.set(a.upperBound, Math.max(b[0], c[0]), Math.max(b[1], c[1]))
            };
            f.create();
            d.prototype.reportIntersection = function(a, b, c, e) {
                var g = (this.from, this.to, this._currentShape),
                    h = this._currentBody;
                if (!(this.skipBackfaces && f.dot(c, this.direction) > 0)) switch (this.mode) {
                    case d.ALL:
                        a.set(c, g, h, b, e), this.callback(a);
                        break;
                    case d.CLOSEST:
                        (b < a.fraction || !a.hasHit()) && a.set(c, g, h, b, e);
                        break;
                    case d.ANY:
                        a.set(c, g, h, b, e)
                }
            };
            var h = f.create(),
                i = f.create()
        }, {
            "../collision/AABB": 7,
            "../collision/RaycastResult": 12,
            "../math/vec2": 30,
            "../shapes/Shape": 45
        }],
        12: [function(a, b, c) {
            function d() {
                this.normal = e.create(), this.shape = null, this.body = null, this.faceIndex = -1, this.fraction = -1, this.isStopped = !1
            }
            var e = a("../math/vec2"),
                f = a("../collision/Ray");
            b.exports = d, d.prototype.reset = function() {
                e.set(this.normal, 0, 0), this.shape = null, this.body = null, this.faceIndex = -1, this.fraction = -1, this.isStopped = !1
            }, d.prototype.getHitDistance = function(a) {
                return e.distance(a.from, a.to) * this.fraction
            }, d.prototype.hasHit = function() {
                return -1 !== this.fraction
            }, d.prototype.getHitPoint = function(a, b) {
                e.lerp(a, b.from, b.to, this.fraction)
            }, d.prototype.stop = function() {
                this.isStopped = !0
            }, d.prototype.shouldStop = function(a) {
                return this.isStopped || -1 !== this.fraction && a.mode === f.ANY
            }, d.prototype.set = function(a, b, c, d, f) {
                e.copy(this.normal, a), this.shape = b, this.body = c, this.fraction = d, this.faceIndex = f
            }
        }, {
            "../collision/Ray": 11,
            "../math/vec2": 30
        }],
        13: [function(a, b, c) {
            function d() {
                f.call(this, f.SAP), this.axisList = [], this.axisIndex = 0;
                var a = this;
                this._addBodyHandler = function(b) {
                    a.axisList.push(b.body)
                }, this._removeBodyHandler = function(b) {
                    var c = a.axisList.indexOf(b.body); - 1 !== c && a.axisList.splice(c, 1)
                }
            }
            var e = a("../utils/Utils"),
                f = a("../collision/Broadphase");
            b.exports = d, d.prototype = new f, d.prototype.constructor = d, d.prototype.setWorld = function(a) {
                this.axisList.length = 0, e.appendArray(this.axisList, a.bodies), a.off("addBody", this._addBodyHandler).off("removeBody", this._removeBodyHandler), a.on("addBody", this._addBodyHandler).on("removeBody", this._removeBodyHandler), this.world = a
            }, d.sortAxisList = function(a, b) {
                b = 0 | b;
                for (var c = 1, d = a.length; d > c; c++) {
                    for (var e = a[c], f = c - 1; f >= 0 && !(a[f].aabb.lowerBound[b] <= e.aabb.lowerBound[b]); f--) a[f + 1] = a[f];
                    a[f + 1] = e
                }
                return a
            }, d.prototype.sortList = function() {
                var a = this.axisList,
                    b = this.axisIndex;
                d.sortAxisList(a, b)
            }, d.prototype.getCollisionPairs = function(a) {
                var b = this.axisList,
                    c = this.result,
                    d = this.axisIndex;
                c.length = 0;
                for (var e = b.length; e--;) {
                    var g = b[e];
                    g.aabbNeedsUpdate && g.updateAABB()
                }
                this.sortList();
                for (var h = 0, i = 0 | b.length; h !== i; h++)
                    for (var j = b[h], k = h + 1; i > k; k++) {
                        var l = b[k],
                            m = l.aabb.lowerBound[d] <= j.aabb.upperBound[d];
                        if (!m) break;
                        f.canCollide(j, l) && this.boundingVolumeCheck(j, l) && c.push(j, l)
                    }
                return c
            }, d.prototype.aabbQuery = function(a, b, c) {
                c = c || [], this.sortList();
                var d = this.axisIndex,
                    e = "x";
                1 === d && (e = "y"), 2 === d && (e = "z");
                for (var f = this.axisList, g = (b.lowerBound[e], b.upperBound[e], 0); g < f.length; g++) {
                    var h = f[g];
                    h.aabbNeedsUpdate && h.updateAABB(), h.aabb.overlaps(b) && c.push(h)
                }
                return c
            }
        }, {
            "../collision/Broadphase": 8,
            "../utils/Utils": 57
        }],
        14: [function(a, b, c) {
            function d(a, b, c, d) {
                this.type = c, d = e.defaults(d, {
                    collideConnected: !0,
                    wakeUpBodies: !0
                }), this.equations = [], this.bodyA = a, this.bodyB = b, this.collideConnected = d.collideConnected, d.wakeUpBodies && (a && a.wakeUp(), b && b.wakeUp())
            }
            b.exports = d;
            var e = a("../utils/Utils");
            d.prototype.update = function() {
                throw new Error("method update() not implmemented in this Constraint subclass!")
            }, d.DISTANCE = 1, d.GEAR = 2, d.LOCK = 3, d.PRISMATIC = 4, d.REVOLUTE = 5, d.prototype.setStiffness = function(a) {
                for (var b = this.equations, c = 0; c !== b.length; c++) {
                    var d = b[c];
                    d.stiffness = a, d.needsUpdate = !0
                }
            }, d.prototype.setRelaxation = function(a) {
                for (var b = this.equations, c = 0; c !== b.length; c++) {
                    var d = b[c];
                    d.relaxation = a, d.needsUpdate = !0
                }
            }
        }, {
            "../utils/Utils": 57
        }],
        15: [function(a, b, c) {
            function d(a, b, c) {
                c = h.defaults(c, {
                    localAnchorA: [0, 0],
                    localAnchorB: [0, 0]
                }), e.call(this, a, b, e.DISTANCE, c), this.localAnchorA = g.fromValues(c.localAnchorA[0], c.localAnchorA[1]), this.localAnchorB = g.fromValues(c.localAnchorB[0], c.localAnchorB[1]);
                var d = this.localAnchorA,
                    i = this.localAnchorB;
                if (this.distance = 0, "number" == typeof c.distance) this.distance = c.distance;
                else {
                    var j = g.create(),
                        k = g.create(),
                        l = g.create();
                    g.rotate(j, d, a.angle), g.rotate(k, i, b.angle), g.add(l, b.position, k), g.sub(l, l, j), g.sub(l, l, a.position), this.distance = g.length(l)
                }
                var m;
                m = "undefined" == typeof c.maxForce ? Number.MAX_VALUE : c.maxForce;
                var n = new f(a, b, -m, m);
                this.equations = [n], this.maxForce = m;
                var l = g.create(),
                    o = g.create(),
                    p = g.create(),
                    q = this;
                n.computeGq = function() {
                    var a = this.bodyA,
                        b = this.bodyB,
                        c = a.position,
                        e = b.position;
                    return g.rotate(o, d, a.angle), g.rotate(p, i, b.angle), g.add(l, e, p), g.sub(l, l, o), g.sub(l, l, c), g.length(l) - q.distance
                }, this.setMaxForce(m), this.upperLimitEnabled = !1, this.upperLimit = 1, this.lowerLimitEnabled = !1, this.lowerLimit = 0, this.position = 0
            }
            var e = a("./Constraint"),
                f = a("../equations/Equation"),
                g = a("../math/vec2"),
                h = a("../utils/Utils");
            b.exports = d, d.prototype = new e, d.prototype.constructor = d;
            var i = g.create(),
                j = g.create(),
                k = g.create();
            d.prototype.update = function() {
                var a = this.equations[0],
                    b = this.bodyA,
                    c = this.bodyB,
                    d = (this.distance, b.position),
                    e = c.position,
                    f = this.equations[0],
                    h = a.G;
                g.rotate(j, this.localAnchorA, b.angle), g.rotate(k, this.localAnchorB, c.angle), g.add(i, e, k), g.sub(i, i, j), g.sub(i, i, d), this.position = g.length(i);
                var l = !1;
                if (this.upperLimitEnabled && this.position > this.upperLimit && (f.maxForce = 0, f.minForce = -this.maxForce, this.distance = this.upperLimit, l = !0), this.lowerLimitEnabled && this.position < this.lowerLimit && (f.maxForce = this.maxForce, f.minForce = 0, this.distance = this.lowerLimit, l = !0), (this.lowerLimitEnabled || this.upperLimitEnabled) && !l) return void(f.enabled = !1);
                f.enabled = !0, g.normalize(i, i);
                var m = g.crossLength(j, i),
                    n = g.crossLength(k, i);
                h[0] = -i[0], h[1] = -i[1], h[2] = -m, h[3] = i[0], h[4] = i[1], h[5] = n
            }, d.prototype.setMaxForce = function(a) {
                var b = this.equations[0];
                b.minForce = -a, b.maxForce = a
            }, d.prototype.getMaxForce = function() {
                var a = this.equations[0];
                return a.maxForce
            }
        }, {
            "../equations/Equation": 22,
            "../math/vec2": 30,
            "../utils/Utils": 57,
            "./Constraint": 14
        }],
        16: [function(a, b, c) {
            function d(a, b, c) {
                c = c || {}, e.call(this, a, b, e.GEAR, c), this.ratio = void 0 !== c.ratio ? c.ratio : 1, this.angle = void 0 !== c.angle ? c.angle : b.angle - this.ratio * a.angle, c.angle = this.angle, c.ratio = this.ratio, this.equations = [new f(a, b, c)], void 0 !== c.maxTorque && this.setMaxTorque(c.maxTorque)
            }
            var e = a("./Constraint"),
                f = (a("../equations/Equation"), a("../equations/AngleLockEquation"));
            a("../math/vec2");
            b.exports = d, d.prototype = new e, d.prototype.constructor = d, d.prototype.update = function() {
                var a = this.equations[0];
                a.ratio !== this.ratio && a.setRatio(this.ratio), a.angle = this.angle
            }, d.prototype.setMaxTorque = function(a) {
                this.equations[0].setMaxTorque(a)
            }, d.prototype.getMaxTorque = function(a) {
                return this.equations[0].maxForce
            }
        }, {
            "../equations/AngleLockEquation": 20,
            "../equations/Equation": 22,
            "../math/vec2": 30,
            "./Constraint": 14
        }],
        17: [function(a, b, c) {
            function d(a, b, c) {
                c = c || {}, e.call(this, a, b, e.LOCK, c);
                var d = "undefined" == typeof c.maxForce ? Number.MAX_VALUE : c.maxForce,
                    h = (c.localAngleB || 0, new g(a, b, -d, d)),
                    i = new g(a, b, -d, d),
                    j = new g(a, b, -d, d),
                    k = f.create(),
                    l = f.create(),
                    m = this;
                h.computeGq = function() {
                    return f.rotate(k, m.localOffsetB, a.angle), f.sub(l, b.position, a.position), f.sub(l, l, k), l[0]
                }, i.computeGq = function() {
                    return f.rotate(k, m.localOffsetB, a.angle), f.sub(l, b.position, a.position), f.sub(l, l, k), l[1]
                };
                var n = f.create(),
                    o = f.create();
                j.computeGq = function() {
                    return f.rotate(n, m.localOffsetB, b.angle - m.localAngleB), f.scale(n, n, -1), f.sub(l, a.position, b.position), f.add(l, l, n), f.rotate(o, n, -Math.PI / 2), f.normalize(o, o), f.dot(l, o)
                }, this.localOffsetB = f.create(), c.localOffsetB ? f.copy(this.localOffsetB, c.localOffsetB) : (f.sub(this.localOffsetB, b.position, a.position), f.rotate(this.localOffsetB, this.localOffsetB, -a.angle)), this.localAngleB = 0, "number" == typeof c.localAngleB ? this.localAngleB = c.localAngleB : this.localAngleB = b.angle - a.angle, this.equations.push(h, i, j), this.setMaxForce(d)
            }
            var e = a("./Constraint"),
                f = a("../math/vec2"),
                g = a("../equations/Equation");
            b.exports = d, d.prototype = new e, d.prototype.constructor = d, d.prototype.setMaxForce = function(a) {
                for (var b = this.equations, c = 0; c < this.equations.length; c++) b[c].maxForce = a, b[c].minForce = -a
            }, d.prototype.getMaxForce = function() {
                return this.equations[0].maxForce
            };
            var h = f.create(),
                i = f.create(),
                j = f.create(),
                k = f.fromValues(1, 0),
                l = f.fromValues(0, 1);
            d.prototype.update = function() {
                var a = this.equations[0],
                    b = this.equations[1],
                    c = this.equations[2],
                    d = this.bodyA,
                    e = this.bodyB;
                f.rotate(h, this.localOffsetB, d.angle), f.rotate(i, this.localOffsetB, e.angle - this.localAngleB), f.scale(i, i, -1), f.rotate(j, i, Math.PI / 2), f.normalize(j, j), a.G[0] = -1, a.G[1] = 0, a.G[2] = -f.crossLength(h, k), a.G[3] = 1, b.G[0] = 0, b.G[1] = -1, b.G[2] = -f.crossLength(h, l), b.G[4] = 1, c.G[0] = -j[0], c.G[1] = -j[1], c.G[3] = j[0], c.G[4] = j[1], c.G[5] = f.crossLength(i, j)
            }
        }, {
            "../equations/Equation": 22,
            "../math/vec2": 30,
            "./Constraint": 14
        }],
        18: [function(a, b, c) {
            function d(a, b, c) {
                c = c || {}, e.call(this, a, b, e.PRISMATIC, c);
                var d = h.fromValues(0, 0),
                    j = h.fromValues(1, 0),
                    k = h.fromValues(0, 0);
                c.localAnchorA && h.copy(d, c.localAnchorA), c.localAxisA && h.copy(j, c.localAxisA), c.localAnchorB && h.copy(k, c.localAnchorB), this.localAnchorA = d, this.localAnchorB = k, this.localAxisA = j;
                var l = this.maxForce = "undefined" != typeof c.maxForce ? c.maxForce : Number.MAX_VALUE,
                    m = new g(a, b, -l, l),
                    n = new h.create,
                    o = new h.create,
                    p = new h.create,
                    q = new h.create;
                if (m.computeGq = function() {
                        return h.dot(p, q)
                    }, m.updateJacobian = function() {
                        var c = this.G,
                            e = a.position,
                            f = b.position;
                        h.rotate(n, d, a.angle), h.rotate(o, k, b.angle), h.add(p, f, o), h.sub(p, p, e), h.sub(p, p, n), h.rotate(q, j, a.angle + Math.PI / 2), c[0] = -q[0], c[1] = -q[1], c[2] = -h.crossLength(n, q) + h.crossLength(q, p), c[3] = q[0], c[4] = q[1], c[5] = h.crossLength(o, q)
                    }, this.equations.push(m), !c.disableRotationalLock) {
                    var r = new i(a, b, -l, l);
                    this.equations.push(r)
                }
                this.position = 0, this.velocity = 0, this.lowerLimitEnabled = "undefined" != typeof c.lowerLimit ? !0 : !1, this.upperLimitEnabled = "undefined" != typeof c.upperLimit ? !0 : !1, this.lowerLimit = "undefined" != typeof c.lowerLimit ? c.lowerLimit : 0, this.upperLimit = "undefined" != typeof c.upperLimit ? c.upperLimit : 1, this.upperLimitEquation = new f(a, b), this.lowerLimitEquation = new f(a, b), this.upperLimitEquation.minForce = this.lowerLimitEquation.minForce = 0, this.upperLimitEquation.maxForce = this.lowerLimitEquation.maxForce = l, this.motorEquation = new g(a, b), this.motorEnabled = !1, this.motorSpeed = 0;
                var s = this,
                    t = this.motorEquation;
                t.computeGW;
                t.computeGq = function() {
                    return 0
                }, t.computeGW = function() {
                    var a = this.G,
                        b = this.bodyA,
                        c = this.bodyB,
                        d = b.velocity,
                        e = c.velocity,
                        f = b.angularVelocity,
                        g = c.angularVelocity;
                    return this.gmult(a, d, f, e, g) + s.motorSpeed
                }
            }
            var e = a("./Constraint"),
                f = a("../equations/ContactEquation"),
                g = a("../equations/Equation"),
                h = a("../math/vec2"),
                i = a("../equations/RotationalLockEquation");
            b.exports = d, d.prototype = new e, d.prototype.constructor = d;
            var j = h.create(),
                k = h.create(),
                l = h.create(),
                m = h.create(),
                n = h.create(),
                o = h.create();
            d.prototype.update = function() {
                var a = this.equations,
                    b = a[0],
                    c = this.upperLimit,
                    d = this.lowerLimit,
                    e = this.upperLimitEquation,
                    f = this.lowerLimitEquation,
                    g = this.bodyA,
                    i = this.bodyB,
                    p = this.localAxisA,
                    q = this.localAnchorA,
                    r = this.localAnchorB;
                b.updateJacobian(), h.rotate(j, p, g.angle), h.rotate(m, q, g.angle), h.add(k, m, g.position), h.rotate(n, r, i.angle), h.add(l, n, i.position);
                var s = this.position = h.dot(l, j) - h.dot(k, j);
                if (this.motorEnabled) {
                    var t = this.motorEquation.G;
                    t[0] = j[0], t[1] = j[1], t[2] = h.crossLength(j, n), t[3] = -j[0], t[4] = -j[1], t[5] = -h.crossLength(j, m)
                }
                if (this.upperLimitEnabled && s > c) h.scale(e.normalA, j, -1), h.sub(e.contactPointA, k, g.position), h.sub(e.contactPointB, l, i.position), h.scale(o, j, c), h.add(e.contactPointA, e.contactPointA, o), -1 === a.indexOf(e) && a.push(e);
                else {
                    var u = a.indexOf(e); - 1 !== u && a.splice(u, 1)
                }
                if (this.lowerLimitEnabled && d > s) h.scale(f.normalA, j, 1), h.sub(f.contactPointA, k, g.position), h.sub(f.contactPointB, l, i.position), h.scale(o, j, d), h.sub(f.contactPointB, f.contactPointB, o), -1 === a.indexOf(f) && a.push(f);
                else {
                    var u = a.indexOf(f); - 1 !== u && a.splice(u, 1)
                }
            }, d.prototype.enableMotor = function() {
                this.motorEnabled || (this.equations.push(this.motorEquation), this.motorEnabled = !0)
            }, d.prototype.disableMotor = function() {
                if (this.motorEnabled) {
                    var a = this.equations.indexOf(this.motorEquation);
                    this.equations.splice(a, 1), this.motorEnabled = !1
                }
            }, d.prototype.setLimits = function(a, b) {
                "number" == typeof a ? (this.lowerLimit = a, this.lowerLimitEnabled = !0) : (this.lowerLimit = a, this.lowerLimitEnabled = !1), "number" == typeof b ? (this.upperLimit = b, this.upperLimitEnabled = !0) : (this.upperLimit = b, this.upperLimitEnabled = !1)
            }
        }, {
            "../equations/ContactEquation": 21,
            "../equations/Equation": 22,
            "../equations/RotationalLockEquation": 24,
            "../math/vec2": 30,
            "./Constraint": 14
        }],
        19: [function(a, b, c) {
            function d(a, b, c) {
                c = c || {}, e.call(this, a, b, e.REVOLUTE, c);
                var d = this.maxForce = "undefined" != typeof c.maxForce ? c.maxForce : Number.MAX_VALUE;
                this.pivotA = i.create(), this.pivotB = i.create(), c.worldPivot ? (i.sub(this.pivotA, c.worldPivot, a.position), i.sub(this.pivotB, c.worldPivot, b.position), i.rotate(this.pivotA, this.pivotA, -a.angle), i.rotate(this.pivotB, this.pivotB, -b.angle)) : (i.copy(this.pivotA, c.localPivotA), i.copy(this.pivotB, c.localPivotB));
                var o = this.equations = [new f(a, b, -d, d), new f(a, b, -d, d)],
                    p = o[0],
                    q = o[1],
                    r = this;
                p.computeGq = function() {
                    return i.rotate(j, r.pivotA, a.angle), i.rotate(k, r.pivotB, b.angle), i.add(n, b.position, k), i.sub(n, n, a.position), i.sub(n, n, j), i.dot(n, l)
                }, q.computeGq = function() {
                    return i.rotate(j, r.pivotA, a.angle), i.rotate(k, r.pivotB, b.angle), i.add(n, b.position, k), i.sub(n, n, a.position), i.sub(n, n, j), i.dot(n, m)
                }, q.minForce = p.minForce = -d, q.maxForce = p.maxForce = d, this.motorEquation = new g(a, b), this.motorEnabled = !1, this.angle = 0, this.lowerLimitEnabled = !1, this.upperLimitEnabled = !1, this.lowerLimit = 0, this.upperLimit = 0, this.upperLimitEquation = new h(a, b), this.lowerLimitEquation = new h(a, b), this.upperLimitEquation.minForce = 0, this.lowerLimitEquation.maxForce = 0
            }
            var e = a("./Constraint"),
                f = a("../equations/Equation"),
                g = a("../equations/RotationalVelocityEquation"),
                h = a("../equations/RotationalLockEquation"),
                i = a("../math/vec2");
            b.exports = d;
            var j = i.create(),
                k = i.create(),
                l = i.fromValues(1, 0),
                m = i.fromValues(0, 1),
                n = i.create();
            d.prototype = new e, d.prototype.constructor = d, d.prototype.setLimits = function(a, b) {
                "number" == typeof a ? (this.lowerLimit = a, this.lowerLimitEnabled = !0) : (this.lowerLimit = a, this.lowerLimitEnabled = !1), "number" == typeof b ? (this.upperLimit = b, this.upperLimitEnabled = !0) : (this.upperLimit = b, this.upperLimitEnabled = !1)
            }, d.prototype.update = function() {
                var a = this.bodyA,
                    b = this.bodyB,
                    c = this.pivotA,
                    d = this.pivotB,
                    e = this.equations,
                    f = (e[0], e[1], e[0]),
                    g = e[1],
                    h = this.upperLimit,
                    n = this.lowerLimit,
                    o = this.upperLimitEquation,
                    p = this.lowerLimitEquation,
                    q = this.angle = b.angle - a.angle;
                if (this.upperLimitEnabled && q > h) o.angle = h, -1 === e.indexOf(o) && e.push(o);
                else {
                    var r = e.indexOf(o); - 1 !== r && e.splice(r, 1)
                }
                if (this.lowerLimitEnabled && n > q) p.angle = n, -1 === e.indexOf(p) && e.push(p);
                else {
                    var r = e.indexOf(p); - 1 !== r && e.splice(r, 1)
                }
                i.rotate(j, c, a.angle), i.rotate(k, d, b.angle), f.G[0] = -1, f.G[1] = 0, f.G[2] = -i.crossLength(j, l), f.G[3] = 1, f.G[4] = 0, f.G[5] = i.crossLength(k, l), g.G[0] = 0, g.G[1] = -1, g.G[2] = -i.crossLength(j, m), g.G[3] = 0, g.G[4] = 1, g.G[5] = i.crossLength(k, m)
            }, d.prototype.enableMotor = function() {
                this.motorEnabled || (this.equations.push(this.motorEquation), this.motorEnabled = !0)
            }, d.prototype.disableMotor = function() {
                if (this.motorEnabled) {
                    var a = this.equations.indexOf(this.motorEquation);
                    this.equations.splice(a, 1), this.motorEnabled = !1
                }
            }, d.prototype.motorIsEnabled = function() {
                return !!this.motorEnabled
            }, d.prototype.setMotorSpeed = function(a) {
                if (this.motorEnabled) {
                    var b = this.equations.indexOf(this.motorEquation);
                    this.equations[b].relativeVelocity = a
                }
            }, d.prototype.getMotorSpeed = function() {
                return this.motorEnabled ? this.motorEquation.relativeVelocity : !1
            }
        }, {
            "../equations/Equation": 22,
            "../equations/RotationalLockEquation": 24,
            "../equations/RotationalVelocityEquation": 25,
            "../math/vec2": 30,
            "./Constraint": 14
        }],
        20: [function(a, b, c) {
            function d(a, b, c) {
                c = c || {}, e.call(this, a, b, -Number.MAX_VALUE, Number.MAX_VALUE), this.angle = c.angle || 0, this.ratio = "number" == typeof c.ratio ? c.ratio : 1, this.setRatio(this.ratio)
            }
            var e = a("./Equation");
            a("../math/vec2");
            b.exports = d, d.prototype = new e, d.prototype.constructor = d, d.prototype.computeGq = function() {
                return this.ratio * this.bodyA.angle - this.bodyB.angle + this.angle
            }, d.prototype.setRatio = function(a) {
                var b = this.G;
                b[2] = a, b[5] = -1, this.ratio = a
            }, d.prototype.setMaxTorque = function(a) {
                this.maxForce = a, this.minForce = -a
            }
        }, {
            "../math/vec2": 30,
            "./Equation": 22
        }],
        21: [function(a, b, c) {
            function d(a, b) {
                e.call(this, a, b, 0, Number.MAX_VALUE), this.contactPointA = f.create(), this.penetrationVec = f.create(), this.contactPointB = f.create(), this.normalA = f.create(), this.restitution = 0, this.firstImpact = !1, this.shapeA = null, this.shapeB = null
            }
            var e = a("./Equation"),
                f = a("../math/vec2");
            b.exports = d, d.prototype = new e, d.prototype.constructor = d, d.prototype.computeB = function(a, b, c) {
                var d = this.bodyA,
                    e = this.bodyB,
                    g = this.contactPointA,
                    h = this.contactPointB,
                    i = d.position,
                    j = e.position,
                    k = this.penetrationVec,
                    l = this.normalA,
                    m = this.G,
                    n = f.crossLength(g, l),
                    o = f.crossLength(h, l);
                m[0] = -l[0], m[1] = -l[1], m[2] = -n, m[3] = l[0], m[4] = l[1], m[5] = o, f.add(k, j, h), f.sub(k, k, i), f.sub(k, k, g);
                var p, q;
                this.firstImpact && 0 !== this.restitution ? (q = 0, p = 1 / b * (1 + this.restitution) * this.computeGW()) : (q = f.dot(l, k) + this.offset, p = this.computeGW());
                var r = this.computeGiMf(),
                    s = -q * a - p * b - c * r;
                return s
            };
            var g = f.create(),
                h = f.create(),
                i = f.create();
            d.prototype.getVelocityAlongNormal = function() {
                return this.bodyA.getVelocityAtPoint(g, this.contactPointA), this.bodyB.getVelocityAtPoint(h, this.contactPointB), f.subtract(i, g, h), f.dot(this.normalA, i)
            }
        }, {
            "../math/vec2": 30,
            "./Equation": 22
        }],
        22: [function(a, b, c) {
            function d(a, b, c, e) {
                this.minForce = "undefined" == typeof c ? -Number.MAX_VALUE : c, this.maxForce = "undefined" == typeof e ? Number.MAX_VALUE : e, this.bodyA = a, this.bodyB = b, this.stiffness = d.DEFAULT_STIFFNESS, this.relaxation = d.DEFAULT_RELAXATION, this.G = new f.ARRAY_TYPE(6);
                for (var g = 0; 6 > g; g++) this.G[g] = 0;
                this.offset = 0, this.a = 0, this.b = 0, this.epsilon = 0, this.timeStep = 1 / 60, this.needsUpdate = !0, this.multiplier = 0, this.relativeVelocity = 0, this.enabled = !0
            }
            b.exports = d;
            var e = a("../math/vec2"),
                f = a("../utils/Utils");
            a("../objects/Body");
            d.prototype.constructor = d, d.DEFAULT_STIFFNESS = 1e6, d.DEFAULT_RELAXATION = 4, d.prototype.update = function() {
                var a = this.stiffness,
                    b = this.relaxation,
                    c = this.timeStep;
                this.a = 4 / (c * (1 + 4 * b)), this.b = 4 * b / (1 + 4 * b), this.epsilon = 4 / (c * c * a * (1 + 4 * b)), this.needsUpdate = !1
            }, d.prototype.gmult = function(a, b, c, d, e) {
                return a[0] * b[0] + a[1] * b[1] + a[2] * c + a[3] * d[0] + a[4] * d[1] + a[5] * e
            }, d.prototype.computeB = function(a, b, c) {
                var d = this.computeGW(),
                    e = this.computeGq(),
                    f = this.computeGiMf();
                return -e * a - d * b - f * c
            };
            var g = e.create(),
                h = e.create();
            d.prototype.computeGq = function() {
                var a = this.G,
                    b = this.bodyA,
                    c = this.bodyB,
                    d = (b.position, c.position, b.angle),
                    e = c.angle;
                return this.gmult(a, g, d, h, e) + this.offset
            }, d.prototype.computeGW = function() {
                var a = this.G,
                    b = this.bodyA,
                    c = this.bodyB,
                    d = b.velocity,
                    e = c.velocity,
                    f = b.angularVelocity,
                    g = c.angularVelocity;
                return this.gmult(a, d, f, e, g) + this.relativeVelocity
            }, d.prototype.computeGWlambda = function() {
                var a = this.G,
                    b = this.bodyA,
                    c = this.bodyB,
                    d = b.vlambda,
                    e = c.vlambda,
                    f = b.wlambda,
                    g = c.wlambda;
                return this.gmult(a, d, f, e, g)
            };
            var i = e.create(),
                j = e.create();
            d.prototype.computeGiMf = function() {
                var a = this.bodyA,
                    b = this.bodyB,
                    c = a.force,
                    d = a.angularForce,
                    f = b.force,
                    g = b.angularForce,
                    h = a.invMassSolve,
                    k = b.invMassSolve,
                    l = a.invInertiaSolve,
                    m = b.invInertiaSolve,
                    n = this.G;
                return e.scale(i, c, h), e.multiply(i, a.massMultiplier, i), e.scale(j, f, k), e.multiply(j, b.massMultiplier, j), this.gmult(n, i, d * l, j, g * m)
            }, d.prototype.computeGiMGt = function() {
                var a = this.bodyA,
                    b = this.bodyB,
                    c = a.invMassSolve,
                    d = b.invMassSolve,
                    e = a.invInertiaSolve,
                    f = b.invInertiaSolve,
                    g = this.G;
                return g[0] * g[0] * c * a.massMultiplier[0] + g[1] * g[1] * c * a.massMultiplier[1] + g[2] * g[2] * e + g[3] * g[3] * d * b.massMultiplier[0] + g[4] * g[4] * d * b.massMultiplier[1] + g[5] * g[5] * f
            };
            var k = e.create(),
                l = e.create(),
                m = e.create();
            e.create(), e.create(), e.create();
            d.prototype.addToWlambda = function(a) {
                var b = this.bodyA,
                    c = this.bodyB,
                    d = k,
                    f = l,
                    g = m,
                    h = b.invMassSolve,
                    i = c.invMassSolve,
                    j = b.invInertiaSolve,
                    n = c.invInertiaSolve,
                    o = this.G;
                f[0] = o[0], f[1] = o[1], g[0] = o[3], g[1] = o[4], e.scale(d, f, h * a), e.multiply(d, d, b.massMultiplier), e.add(b.vlambda, b.vlambda, d), b.wlambda += j * o[2] * a, e.scale(d, g, i * a), e.multiply(d, d, c.massMultiplier), e.add(c.vlambda, c.vlambda, d), c.wlambda += n * o[5] * a
            }, d.prototype.computeInvC = function(a) {
                return 1 / (this.computeGiMGt() + a)
            }
        }, {
            "../math/vec2": 30,
            "../objects/Body": 31,
            "../utils/Utils": 57
        }],
        23: [function(a, b, c) {
            function d(a, b, c) {
                f.call(this, a, b, -c, c), this.contactPointA = e.create(), this.contactPointB = e.create(), this.t = e.create(), this.contactEquations = [], this.shapeA = null, this.shapeB = null, this.frictionCoefficient = .3
            }
            var e = a("../math/vec2"),
                f = a("./Equation");
            a("../utils/Utils");
            b.exports = d, d.prototype = new f, d.prototype.constructor = d, d.prototype.setSlipForce = function(a) {
                this.maxForce = a, this.minForce = -a
            }, d.prototype.getSlipForce = function() {
                return this.maxForce
            }, d.prototype.computeB = function(a, b, c) {
                var d = (this.bodyA, this.bodyB, this.contactPointA),
                    f = this.contactPointB,
                    g = this.t,
                    h = this.G;
                h[0] = -g[0], h[1] = -g[1], h[2] = -e.crossLength(d, g), h[3] = g[0], h[4] = g[1], h[5] = e.crossLength(f, g);
                var i = this.computeGW(),
                    j = this.computeGiMf(),
                    k = -i * b - c * j;
                return k
            }
        }, {
            "../math/vec2": 30,
            "../utils/Utils": 57,
            "./Equation": 22
        }],
        24: [function(a, b, c) {
            function d(a, b, c) {
                c = c || {}, e.call(this, a, b, -Number.MAX_VALUE, Number.MAX_VALUE), this.angle = c.angle || 0;
                var d = this.G;
                d[2] = 1, d[5] = -1
            }
            var e = a("./Equation"),
                f = a("../math/vec2");
            b.exports = d, d.prototype = new e, d.prototype.constructor = d;
            var g = f.create(),
                h = f.create(),
                i = f.fromValues(1, 0),
                j = f.fromValues(0, 1);
            d.prototype.computeGq = function() {
                return f.rotate(g, i, this.bodyA.angle + this.angle), f.rotate(h, j, this.bodyB.angle), f.dot(g, h)
            }
        }, {
            "../math/vec2": 30,
            "./Equation": 22
        }],
        25: [function(a, b, c) {
            function d(a, b) {
                e.call(this, a, b, -Number.MAX_VALUE, Number.MAX_VALUE), this.relativeVelocity = 1, this.ratio = 1
            }
            var e = a("./Equation");
            a("../math/vec2");
            b.exports = d, d.prototype = new e, d.prototype.constructor = d, d.prototype.computeB = function(a, b, c) {
                var d = this.G;
                d[2] = -1, d[5] = this.ratio;
                var e = this.computeGiMf(),
                    f = this.computeGW(),
                    g = -f * b - c * e;
                return g
            }
        }, {
            "../math/vec2": 30,
            "./Equation": 22
        }],
        26: [function(a, b, c) {
            var d = function() {};
            b.exports = d, d.prototype = {
                constructor: d,
                on: function(a, b, c) {
                    b.context = c || this, void 0 === this._listeners && (this._listeners = {});
                    var d = this._listeners;
                    return void 0 === d[a] && (d[a] = []), -1 === d[a].indexOf(b) && d[a].push(b), this
                },
                has: function(a, b) {
                    if (void 0 === this._listeners) return !1;
                    var c = this._listeners;
                    if (b) {
                        if (void 0 !== c[a] && -1 !== c[a].indexOf(b)) return !0
                    } else if (void 0 !== c[a]) return !0;
                    return !1
                },
                off: function(a, b) {
                    if (void 0 === this._listeners) return this;
                    var c = this._listeners,
                        d = c[a].indexOf(b);
                    return -1 !== d && c[a].splice(d, 1), this
                },
                emit: function(a) {
                    if (void 0 === this._listeners) return this;
                    var b = this._listeners,
                        c = b[a.type];
                    if (void 0 !== c) {
                        a.target = this;
                        for (var d = 0, e = c.length; e > d; d++) {
                            var f = c[d];
                            f.call(f.context, a)
                        }
                    }
                    return this
                }
            }
        }, {}],
        27: [function(a, b, c) {
            function d(a, b, c) {
                if (c = c || {}, !(a instanceof e && b instanceof e)) throw new Error("First two arguments must be Material instances.");
                this.id = d.idCounter++, this.materialA = a, this.materialB = b, this.friction = "undefined" != typeof c.friction ? Number(c.friction) : .3, this.restitution = "undefined" != typeof c.restitution ? Number(c.restitution) : 0, this.stiffness = "undefined" != typeof c.stiffness ? Number(c.stiffness) : f.DEFAULT_STIFFNESS, this.relaxation = "undefined" != typeof c.relaxation ? Number(c.relaxation) : f.DEFAULT_RELAXATION, this.frictionStiffness = "undefined" != typeof c.frictionStiffness ? Number(c.frictionStiffness) : f.DEFAULT_STIFFNESS, this.frictionRelaxation = "undefined" != typeof c.frictionRelaxation ? Number(c.frictionRelaxation) : f.DEFAULT_RELAXATION, this.surfaceVelocity = "undefined" != typeof c.surfaceVelocity ? Number(c.surfaceVelocity) : 0, this.contactSkinSize = .005
            }
            var e = a("./Material"),
                f = a("../equations/Equation");
            b.exports = d, d.idCounter = 0
        }, {
            "../equations/Equation": 22,
            "./Material": 28
        }],
        28: [function(a, b, c) {
            function d(a) {
                this.id = a || d.idCounter++
            }
            b.exports = d, d.idCounter = 0
        }, {}],
        29: [function(a, b, c) {
            var d = {};
            d.GetArea = function(a) {
                if (a.length < 6) return 0;
                for (var b = a.length - 2, c = 0, d = 0; b > d; d += 2) c += (a[d + 2] - a[d]) * (a[d + 1] + a[d + 3]);
                return c += (a[0] - a[b]) * (a[b + 1] + a[1]), .5 * -c
            }, d.Triangulate = function(a) {
                var b = a.length >> 1;
                if (3 > b) return [];
                for (var c = [], e = [], f = 0; b > f; f++) e.push(f);
                for (var f = 0, g = b; g > 3;) {
                    var h = e[(f + 0) % g],
                        i = e[(f + 1) % g],
                        j = e[(f + 2) % g],
                        k = a[2 * h],
                        l = a[2 * h + 1],
                        m = a[2 * i],
                        n = a[2 * i + 1],
                        o = a[2 * j],
                        p = a[2 * j + 1],
                        q = !1;
                    if (d._convex(k, l, m, n, o, p)) {
                        q = !0;
                        for (var r = 0; g > r; r++) {
                            var s = e[r];
                            if (s != h && s != i && s != j && d._PointInTriangle(a[2 * s], a[2 * s + 1], k, l, m, n, o, p)) {
                                q = !1;
                                break
                            }
                        }
                    }
                    if (q) c.push(h, i, j), e.splice((f + 1) % g, 1), g--, f = 0;
                    else if (f++ > 3 * g) break
                }
                return c.push(e[0], e[1], e[2]), c
            }, d._PointInTriangle = function(a, b, c, d, e, f, g, h) {
                var i = g - c,
                    j = h - d,
                    k = e - c,
                    l = f - d,
                    m = a - c,
                    n = b - d,
                    o = i * i + j * j,
                    p = i * k + j * l,
                    q = i * m + j * n,
                    r = k * k + l * l,
                    s = k * m + l * n,
                    t = 1 / (o * r - p * p),
                    u = (r * q - p * s) * t,
                    v = (o * s - p * q) * t;
                return u >= 0 && v >= 0 && 1 > u + v
            }, d._convex = function(a, b, c, d, e, f) {
                return (b - d) * (e - c) + (c - a) * (f - d) >= 0
            }, b.exports = d
        }, {}],
        30: [function(a, b, c) {
            var d = b.exports = {},
                e = a("../utils/Utils");
            d.crossLength = function(a, b) {
                return a[0] * b[1] - a[1] * b[0]
            }, d.crossVZ = function(a, b, c) {
                return d.rotate(a, b, -Math.PI / 2), d.scale(a, a, c), a
            }, d.crossZV = function(a, b, c) {
                return d.rotate(a, c, Math.PI / 2), d.scale(a, a, b), a
            }, d.rotate = function(a, b, c) {
                if (0 !== c) {
                    var d = Math.cos(c),
                        e = Math.sin(c),
                        f = b[0],
                        g = b[1];
                    a[0] = d * f - e * g, a[1] = e * f + d * g
                } else a[0] = b[0], a[1] = b[1]
            }, d.rotate90cw = function(a, b) {
                var c = b[0],
                    d = b[1];
                a[0] = d, a[1] = -c
            }, d.toLocalFrame = function(a, b, c, e) {
                d.copy(a, b), d.sub(a, a, c), d.rotate(a, a, -e)
            }, d.toGlobalFrame = function(a, b, c, e) {
                d.copy(a, b), d.rotate(a, a, e), d.add(a, a, c)
            }, d.vectorToLocalFrame = function(a, b, c) {
                d.rotate(a, b, -c)
            }, d.vectorToGlobalFrame = function(a, b, c) {
                d.rotate(a, b, c)
            }, d.centroid = function(a, b, c, e) {
                return d.add(a, b, c), d.add(a, a, e), d.scale(a, a, 1 / 3), a
            }, d.create = function() {
                var a = new e.ARRAY_TYPE(2);
                return a[0] = 0, a[1] = 0, a
            }, d.clone = function(a) {
                var b = new e.ARRAY_TYPE(2);
                return b[0] = a[0], b[1] = a[1], b
            }, d.fromValues = function(a, b) {
                var c = new e.ARRAY_TYPE(2);
                return c[0] = a, c[1] = b, c
            }, d.copy = function(a, b) {
                return a[0] = b[0], a[1] = b[1], a
            }, d.set = function(a, b, c) {
                return a[0] = b, a[1] = c, a
            }, d.add = function(a, b, c) {
                return a[0] = b[0] + c[0], a[1] = b[1] + c[1], a
            }, d.subtract = function(a, b, c) {
                return a[0] = b[0] - c[0], a[1] = b[1] - c[1], a
            }, d.sub = d.subtract, d.multiply = function(a, b, c) {
                return a[0] = b[0] * c[0], a[1] = b[1] * c[1], a
            }, d.mul = d.multiply, d.divide = function(a, b, c) {
                return a[0] = b[0] / c[0], a[1] = b[1] / c[1], a
            }, d.div = d.divide, d.scale = function(a, b, c) {
                return a[0] = b[0] * c, a[1] = b[1] * c, a
            }, d.distance = function(a, b) {
                var c = b[0] - a[0],
                    d = b[1] - a[1];
                return Math.sqrt(c * c + d * d)
            }, d.dist = d.distance, d.squaredDistance = function(a, b) {
                var c = b[0] - a[0],
                    d = b[1] - a[1];
                return c * c + d * d
            }, d.sqrDist = d.squaredDistance, d.length = function(a) {
                var b = a[0],
                    c = a[1];
                return Math.sqrt(b * b + c * c)
            }, d.len = d.length, d.squaredLength = function(a) {
                var b = a[0],
                    c = a[1];
                return b * b + c * c
            }, d.sqrLen = d.squaredLength, d.negate = function(a, b) {
                return a[0] = -b[0], a[1] = -b[1], a
            }, d.normalize = function(a, b) {
                var c = b[0],
                    d = b[1],
                    e = c * c + d * d;
                return e > 0 && (e = 1 / Math.sqrt(e), a[0] = b[0] * e, a[1] = b[1] * e), a
            }, d.dot = function(a, b) {
                return a[0] * b[0] + a[1] * b[1]
            }, d.str = function(a) {
                return "vec2(" + a[0] + ", " + a[1] + ")"
            }, d.lerp = function(a, b, c, d) {
                var e = b[0],
                    f = b[1];
                return a[0] = e + d * (c[0] - e), a[1] = f + d * (c[1] - f), a
            }, d.reflect = function(a, b, c) {
                var d = b[0] * c[0] + b[1] * c[1];
                a[0] = b[0] - 2 * c[0] * d, a[1] = b[1] - 2 * c[1] * d
            }, d.getLineSegmentsIntersection = function(a, b, c, e, f) {
                var g = d.getLineSegmentsIntersectionFraction(b, c, e, f);
                return 0 > g ? !1 : (a[0] = b[0] + g * (c[0] - b[0]), a[1] = b[1] + g * (c[1] - b[1]), !0)
            }, d.getLineSegmentsIntersectionFraction = function(a, b, c, d) {
                var e, f, g = b[0] - a[0],
                    h = b[1] - a[1],
                    i = d[0] - c[0],
                    j = d[1] - c[1];
                return e = (-h * (a[0] - c[0]) + g * (a[1] - c[1])) / (-i * h + g * j), f = (i * (a[1] - c[1]) - j * (a[0] - c[0])) / (-i * h + g * j), e >= 0 && 1 >= e && f >= 0 && 1 >= f ? f : -1
            }
        }, {
            "../utils/Utils": 57
        }],
        31: [function(a, b, c) {
            function d(a) {
                a = a || {}, k.call(this), this.id = a.id || ++d._idCounter, this.world = null, this.shapes = [], this.mass = a.mass || 0, this.invMass = 0, this.inertia = 0, this.invInertia = 0, this.invMassSolve = 0, this.invInertiaSolve = 0, this.fixedRotation = !!a.fixedRotation, this.fixedX = !!a.fixedX, this.fixedY = !!a.fixedY, this.massMultiplier = e.create(), this.position = e.fromValues(0, 0), a.position && e.copy(this.position, a.position), this.interpolatedPosition = e.fromValues(0, 0), this.interpolatedAngle = 0, this.previousPosition = e.fromValues(0, 0), this.previousAngle = 0, this.velocity = e.fromValues(0, 0), a.velocity && e.copy(this.velocity, a.velocity), this.vlambda = e.fromValues(0, 0), this.wlambda = 0, this.angle = a.angle || 0, this.angularVelocity = a.angularVelocity || 0, this.force = e.create(), a.force && e.copy(this.force, a.force), this.angularForce = a.angularForce || 0, this.damping = "number" == typeof a.damping ? a.damping : .1,
                    this.angularDamping = "number" == typeof a.angularDamping ? a.angularDamping : .1, this.type = d.STATIC, "undefined" != typeof a.type ? this.type = a.type : a.mass ? this.type = d.DYNAMIC : this.type = d.STATIC, this.boundingRadius = 0, this.aabb = new j, this.aabbNeedsUpdate = !0, this.allowSleep = void 0 !== a.allowSleep ? a.allowSleep : !0, this.wantsToSleep = !1, this.sleepState = d.AWAKE, this.sleepSpeedLimit = void 0 !== a.sleepSpeedLimit ? a.sleepSpeedLimit : .2, this.sleepTimeLimit = void 0 !== a.sleepTimeLimit ? a.sleepTimeLimit : 1, this.gravityScale = void 0 !== a.gravityScale ? a.gravityScale : 1, this.collisionResponse = void 0 !== a.collisionResponse ? a.collisionResponse : !0, this.idleTime = 0, this.timeLastSleepy = 0, this.ccdSpeedThreshold = void 0 !== a.ccdSpeedThreshold ? a.ccdSpeedThreshold : -1, this.ccdIterations = void 0 !== a.ccdIterations ? a.ccdIterations : 10, this.concavePath = null, this._wakeUpAfterNarrowphase = !1, this.updateMassProperties()
            }
            var e = a("../math/vec2"),
                f = a("poly-decomp"),
                g = a("../shapes/Convex"),
                h = a("../collision/RaycastResult"),
                i = a("../collision/Ray"),
                j = a("../collision/AABB"),
                k = a("../events/EventEmitter");
            b.exports = d, d.prototype = new k, d.prototype.constructor = d, d._idCounter = 0, d.prototype.updateSolveMassProperties = function() {
                this.sleepState === d.SLEEPING || this.type === d.KINEMATIC ? (this.invMassSolve = 0, this.invInertiaSolve = 0) : (this.invMassSolve = this.invMass, this.invInertiaSolve = this.invInertia)
            }, d.prototype.setDensity = function(a) {
                var b = this.getArea();
                this.mass = b * a, this.updateMassProperties()
            }, d.prototype.getArea = function() {
                for (var a = 0, b = 0; b < this.shapes.length; b++) a += this.shapes[b].area;
                return a
            }, d.prototype.getAABB = function() {
                return this.aabbNeedsUpdate && this.updateAABB(), this.aabb
            };
            var l = new j,
                m = e.create();
            d.prototype.updateAABB = function() {
                for (var a = this.shapes, b = a.length, c = m, d = this.angle, f = 0; f !== b; f++) {
                    var g = a[f],
                        h = g.angle + d;
                    e.rotate(c, g.position, d), e.add(c, c, this.position), g.computeAABB(l, c, h), 0 === f ? this.aabb.copy(l) : this.aabb.extend(l)
                }
                this.aabbNeedsUpdate = !1
            }, d.prototype.updateBoundingRadius = function() {
                for (var a = this.shapes, b = a.length, c = 0, d = 0; d !== b; d++) {
                    var f = a[d],
                        g = e.length(f.position),
                        h = f.boundingRadius;
                    g + h > c && (c = g + h)
                }
                this.boundingRadius = c
            }, d.prototype.addShape = function(a, b, c) {
                if (a.body) throw new Error("A shape can only be added to one body.");
                a.body = this, b ? e.copy(a.position, b) : e.set(a.position, 0, 0), a.angle = c || 0, this.shapes.push(a), this.updateMassProperties(), this.updateBoundingRadius(), this.aabbNeedsUpdate = !0
            }, d.prototype.removeShape = function(a) {
                var b = this.shapes.indexOf(a);
                return -1 !== b ? (this.shapes.splice(b, 1), this.aabbNeedsUpdate = !0, a.body = null, !0) : !1
            }, d.prototype.updateMassProperties = function() {
                if (this.type === d.STATIC || this.type === d.KINEMATIC) this.mass = Number.MAX_VALUE, this.invMass = 0, this.inertia = Number.MAX_VALUE, this.invInertia = 0;
                else {
                    var a = this.shapes,
                        b = a.length,
                        c = this.mass / b,
                        f = 0;
                    if (this.fixedRotation) this.inertia = Number.MAX_VALUE, this.invInertia = 0;
                    else {
                        for (var g = 0; b > g; g++) {
                            var h = a[g],
                                i = e.squaredLength(h.position),
                                j = h.computeMomentOfInertia(c);
                            f += j + c * i
                        }
                        this.inertia = f, this.invInertia = f > 0 ? 1 / f : 0
                    }
                    this.invMass = 1 / this.mass, e.set(this.massMultiplier, this.fixedX ? 0 : 1, this.fixedY ? 0 : 1)
                }
            };
            e.create();
            d.prototype.applyForce = function(a, b) {
                if (e.add(this.force, this.force, a), b) {
                    var c = e.crossLength(b, a);
                    this.angularForce += c
                }
            };
            var n = e.create(),
                o = e.create(),
                p = e.create();
            d.prototype.applyForceLocal = function(a, b) {
                b = b || p;
                var c = n,
                    d = o;
                this.vectorToWorldFrame(c, a), this.vectorToWorldFrame(d, b), this.applyForce(c, d)
            };
            var q = e.create();
            d.prototype.applyImpulse = function(a, b) {
                if (this.type === d.DYNAMIC) {
                    var c = q;
                    if (e.scale(c, a, this.invMass), e.multiply(c, this.massMultiplier, c), e.add(this.velocity, c, this.velocity), b) {
                        var f = e.crossLength(b, a);
                        f *= this.invInertia, this.angularVelocity += f
                    }
                }
            };
            var r = e.create(),
                s = e.create(),
                t = e.create();
            d.prototype.applyImpulseLocal = function(a, b) {
                b = b || t;
                var c = r,
                    d = s;
                this.vectorToWorldFrame(c, a), this.vectorToWorldFrame(d, b), this.applyImpulse(c, d)
            }, d.prototype.toLocalFrame = function(a, b) {
                e.toLocalFrame(a, b, this.position, this.angle)
            }, d.prototype.toWorldFrame = function(a, b) {
                e.toGlobalFrame(a, b, this.position, this.angle)
            }, d.prototype.vectorToLocalFrame = function(a, b) {
                e.vectorToLocalFrame(a, b, this.angle)
            }, d.prototype.vectorToWorldFrame = function(a, b) {
                e.vectorToGlobalFrame(a, b, this.angle)
            }, d.prototype.fromPolygon = function(a, b) {
                b = b || {};
                for (var c = this.shapes.length; c >= 0; --c) this.removeShape(this.shapes[c]);
                var d = new f.Polygon;
                if (d.vertices = a, d.makeCCW(), "number" == typeof b.removeCollinearPoints && d.removeCollinearPoints(b.removeCollinearPoints), "undefined" == typeof b.skipSimpleCheck && !d.isSimple()) return !1;
                this.concavePath = d.vertices.slice(0);
                for (var c = 0; c < this.concavePath.length; c++) {
                    var h = [0, 0];
                    e.copy(h, this.concavePath[c]), this.concavePath[c] = h
                }
                var i;
                i = b.optimalDecomp ? d.decomp() : d.quickDecomp();
                for (var j = e.create(), c = 0; c !== i.length; c++) {
                    for (var k = new g({
                            vertices: i[c].vertices
                        }), l = 0; l !== k.vertices.length; l++) {
                        var h = k.vertices[l];
                        e.sub(h, h, k.centerOfMass)
                    }
                    e.scale(j, k.centerOfMass, 1), k.updateTriangles(), k.updateCenterOfMass(), k.updateBoundingRadius(), this.addShape(k, j)
                }
                return this.adjustCenterOfMass(), this.aabbNeedsUpdate = !0, !0
            };
            var u = (e.fromValues(0, 0), e.fromValues(0, 0)),
                v = e.fromValues(0, 0),
                w = e.fromValues(0, 0);
            d.prototype.adjustCenterOfMass = function() {
                var a = u,
                    b = v,
                    c = w,
                    d = 0;
                e.set(b, 0, 0);
                for (var f = 0; f !== this.shapes.length; f++) {
                    var g = this.shapes[f];
                    e.scale(a, g.position, g.area), e.add(b, b, a), d += g.area
                }
                e.scale(c, b, 1 / d);
                for (var f = 0; f !== this.shapes.length; f++) {
                    var g = this.shapes[f];
                    e.sub(g.position, g.position, c)
                }
                e.add(this.position, this.position, c);
                for (var f = 0; this.concavePath && f < this.concavePath.length; f++) e.sub(this.concavePath[f], this.concavePath[f], c);
                this.updateMassProperties(), this.updateBoundingRadius()
            }, d.prototype.setZeroForce = function() {
                e.set(this.force, 0, 0), this.angularForce = 0
            }, d.prototype.resetConstraintVelocity = function() {
                var a = this,
                    b = a.vlambda;
                e.set(b, 0, 0), a.wlambda = 0
            }, d.prototype.addConstraintVelocity = function() {
                var a = this,
                    b = a.velocity;
                e.add(b, b, a.vlambda), a.angularVelocity += a.wlambda
            }, d.prototype.applyDamping = function(a) {
                if (this.type === d.DYNAMIC) {
                    var b = this.velocity;
                    e.scale(b, b, Math.pow(1 - this.damping, a)), this.angularVelocity *= Math.pow(1 - this.angularDamping, a)
                }
            }, d.prototype.wakeUp = function() {
                var a = this.sleepState;
                this.sleepState = d.AWAKE, this.idleTime = 0, a !== d.AWAKE && this.emit(d.wakeUpEvent)
            }, d.prototype.sleep = function() {
                this.sleepState = d.SLEEPING, this.angularVelocity = 0, this.angularForce = 0, e.set(this.velocity, 0, 0), e.set(this.force, 0, 0), this.emit(d.sleepEvent)
            }, d.prototype.sleepTick = function(a, b, c) {
                if (this.allowSleep && this.type !== d.SLEEPING) {
                    this.wantsToSleep = !1;
                    var f = (this.sleepState, e.squaredLength(this.velocity) + Math.pow(this.angularVelocity, 2)),
                        g = Math.pow(this.sleepSpeedLimit, 2);
                    f >= g ? (this.idleTime = 0, this.sleepState = d.AWAKE) : (this.idleTime += c, this.sleepState = d.SLEEPY), this.idleTime > this.sleepTimeLimit && (b ? this.wantsToSleep = !0 : this.sleep())
                }
            }, d.prototype.overlaps = function(a) {
                return this.world.overlapKeeper.bodiesAreOverlapping(this, a)
            };
            var x = e.create(),
                y = e.create();
            d.prototype.integrate = function(a) {
                var b = this.invMass,
                    c = this.force,
                    d = this.position,
                    f = this.velocity;
                e.copy(this.previousPosition, this.position), this.previousAngle = this.angle, this.fixedRotation || (this.angularVelocity += this.angularForce * this.invInertia * a), e.scale(x, c, a * b), e.multiply(x, this.massMultiplier, x), e.add(f, x, f), this.integrateToTimeOfImpact(a) || (e.scale(y, f, a), e.add(d, d, y), this.fixedRotation || (this.angle += this.angularVelocity * a)), this.aabbNeedsUpdate = !0
            };
            var z = new h,
                A = new i({
                    mode: i.ALL
                }),
                B = e.create(),
                C = e.create(),
                D = e.create(),
                E = e.create();
            d.prototype.integrateToTimeOfImpact = function(a) {
                if (this.ccdSpeedThreshold < 0 || e.squaredLength(this.velocity) < Math.pow(this.ccdSpeedThreshold, 2)) return !1;
                e.normalize(B, this.velocity), e.scale(C, this.velocity, a), e.add(C, C, this.position), e.sub(D, C, this.position);
                var b, c = this.angularVelocity * a,
                    d = e.length(D),
                    f = 1,
                    g = this;
                if (z.reset(), A.callback = function(a) {
                        a.body !== g && (b = a.body, a.getHitPoint(C, A), e.sub(D, C, g.position), f = e.length(D) / d, a.stop())
                    }, e.copy(A.from, this.position), e.copy(A.to, C), A.update(), this.world.raycast(z, A), !b) return !1;
                var h = this.angle;
                e.copy(E, this.position);
                for (var i = 0, j = 0, k = 0, l = f; l >= j && i < this.ccdIterations;) {
                    i++, k = (l - j) / 2, e.scale(y, D, f), e.add(this.position, E, y), this.angle = h + c * f, this.updateAABB();
                    var m = this.aabb.overlaps(b.aabb) && this.world.narrowphase.bodiesOverlap(this, b);
                    m ? j = k : l = k
                }
                return f = k, e.copy(this.position, E), this.angle = h, e.scale(y, D, f), e.add(this.position, this.position, y), this.fixedRotation || (this.angle += c * f), !0
            }, d.prototype.getVelocityAtPoint = function(a, b) {
                return e.crossVZ(a, b, this.angularVelocity), e.subtract(a, this.velocity, a), a
            }, d.sleepyEvent = {
                type: "sleepy"
            }, d.sleepEvent = {
                type: "sleep"
            }, d.wakeUpEvent = {
                type: "wakeup"
            }, d.DYNAMIC = 1, d.STATIC = 2, d.KINEMATIC = 4, d.AWAKE = 0, d.SLEEPY = 1, d.SLEEPING = 2
        }, {
            "../collision/AABB": 7,
            "../collision/Ray": 11,
            "../collision/RaycastResult": 12,
            "../events/EventEmitter": 26,
            "../math/vec2": 30,
            "../shapes/Convex": 40,
            "poly-decomp": 5
        }],
        32: [function(a, b, c) {
            function d(a, b, c) {
                c = c || {}, f.call(this, a, b, c), this.localAnchorA = e.fromValues(0, 0), this.localAnchorB = e.fromValues(0, 0), c.localAnchorA && e.copy(this.localAnchorA, c.localAnchorA), c.localAnchorB && e.copy(this.localAnchorB, c.localAnchorB), c.worldAnchorA && this.setWorldAnchorA(c.worldAnchorA), c.worldAnchorB && this.setWorldAnchorB(c.worldAnchorB);
                var d = e.create(),
                    g = e.create();
                this.getWorldAnchorA(d), this.getWorldAnchorB(g);
                var h = e.distance(d, g);
                this.restLength = "number" == typeof c.restLength ? c.restLength : h
            }
            var e = a("../math/vec2"),
                f = a("./Spring");
            a("../utils/Utils");
            b.exports = d, d.prototype = new f, d.prototype.constructor = d, d.prototype.setWorldAnchorA = function(a) {
                this.bodyA.toLocalFrame(this.localAnchorA, a)
            }, d.prototype.setWorldAnchorB = function(a) {
                this.bodyB.toLocalFrame(this.localAnchorB, a)
            }, d.prototype.getWorldAnchorA = function(a) {
                this.bodyA.toWorldFrame(a, this.localAnchorA)
            }, d.prototype.getWorldAnchorB = function(a) {
                this.bodyB.toWorldFrame(a, this.localAnchorB)
            };
            var g = e.create(),
                h = e.create(),
                i = e.create(),
                j = e.create(),
                k = e.create(),
                l = e.create(),
                m = e.create(),
                n = e.create(),
                o = e.create();
            d.prototype.applyForce = function() {
                var a = this.stiffness,
                    b = this.damping,
                    c = this.restLength,
                    d = this.bodyA,
                    f = this.bodyB,
                    p = g,
                    q = h,
                    r = i,
                    s = j,
                    t = o,
                    u = k,
                    v = l,
                    w = m,
                    x = n;
                this.getWorldAnchorA(u), this.getWorldAnchorB(v), e.sub(w, u, d.position), e.sub(x, v, f.position), e.sub(p, v, u);
                var y = e.len(p);
                e.normalize(q, p), e.sub(r, f.velocity, d.velocity), e.crossZV(t, f.angularVelocity, x), e.add(r, r, t), e.crossZV(t, d.angularVelocity, w), e.sub(r, r, t), e.scale(s, q, -a * (y - c) - b * e.dot(r, q)), e.sub(d.force, d.force, s), e.add(f.force, f.force, s);
                var z = e.crossLength(w, s),
                    A = e.crossLength(x, s);
                d.angularForce -= z, f.angularForce += A
            }
        }, {
            "../math/vec2": 30,
            "../utils/Utils": 57,
            "./Spring": 34
        }],
        33: [function(a, b, c) {
            function d(a, b, c) {
                c = c || {}, e.call(this, a, b, c), this.restAngle = "number" == typeof c.restAngle ? c.restAngle : b.angle - a.angle
            }
            var e = (a("../math/vec2"), a("./Spring"));
            b.exports = d, d.prototype = new e, d.prototype.constructor = d, d.prototype.applyForce = function() {
                var a = this.stiffness,
                    b = this.damping,
                    c = this.restAngle,
                    d = this.bodyA,
                    e = this.bodyB,
                    f = e.angle - d.angle,
                    g = e.angularVelocity - d.angularVelocity,
                    h = -a * (f - c) - b * g * 0;
                d.angularForce -= h, e.angularForce += h
            }
        }, {
            "../math/vec2": 30,
            "./Spring": 34
        }],
        34: [function(a, b, c) {
            function d(a, b, c) {
                c = e.defaults(c, {
                    stiffness: 100,
                    damping: 1
                }), this.stiffness = c.stiffness, this.damping = c.damping, this.bodyA = a, this.bodyB = b
            }
            var e = (a("../math/vec2"), a("../utils/Utils"));
            b.exports = d, d.prototype.applyForce = function() {}
        }, {
            "../math/vec2": 30,
            "../utils/Utils": 57
        }],
        35: [function(a, b, c) {
            function d(a, b) {
                b = b || {}, this.chassisBody = a, this.wheels = [], this.groundBody = new i({
                    mass: 0
                }), this.world = null;
                var c = this;
                this.preStepCallback = function() {
                    c.update()
                }
            }

            function e(a, b) {
                b = b || {}, this.vehicle = a, this.forwardEquation = new h(a.chassisBody, a.groundBody), this.sideEquation = new h(a.chassisBody, a.groundBody), this.steerValue = 0, this.engineForce = 0, this.setSideFriction(void 0 !== b.sideFriction ? b.sideFriction : 5), this.localForwardVector = f.fromValues(0, 1), b.localForwardVector && f.copy(this.localForwardVector, b.localForwardVector), this.localPosition = f.fromValues(0, 0), b.localPosition && f.copy(this.localPosition, b.localPosition), g.apply(this, a.chassisBody, a.groundBody), this.equations.push(this.forwardEquation, this.sideEquation), this.setBrakeForce(0)
            }
            var f = a("../math/vec2"),
                g = (a("../utils/Utils"), a("../constraints/Constraint")),
                h = a("../equations/FrictionEquation"),
                i = a("../objects/Body");
            b.exports = d, d.prototype.addToWorld = function(a) {
                this.world = a, a.addBody(this.groundBody), a.on("preStep", this.preStepCallback);
                for (var b = 0; b < this.wheels.length; b++) {
                    var c = this.wheels[b];
                    a.addConstraint(c)
                }
            }, d.prototype.removeFromWorld = function() {
                var a = this.world;
                a.removeBody(this.groundBody), a.off("preStep", this.preStepCallback);
                for (var b = 0; b < this.wheels.length; b++) {
                    var c = this.wheels[b];
                    a.removeConstraint(c)
                }
                this.world = null
            }, d.prototype.addWheel = function(a) {
                var b = new e(this, a);
                return this.wheels.push(b), b
            }, d.prototype.update = function() {
                for (var a = 0; a < this.wheels.length; a++) this.wheels[a].update()
            }, e.prototype = new g, e.prototype.setBrakeForce = function(a) {
                this.forwardEquation.setSlipForce(a)
            }, e.prototype.setSideFriction = function(a) {
                this.sideEquation.setSlipForce(a)
            };
            var j = f.create(),
                k = f.create();
            e.prototype.getSpeed = function() {
                return this.vehicle.chassisBody.vectorToWorldFrame(k, this.localForwardVector), this.vehicle.chassisBody.getVelocityAtPoint(j, k), f.dot(j, k)
            };
            var l = f.create();
            e.prototype.update = function() {
                this.vehicle.chassisBody.vectorToWorldFrame(this.forwardEquation.t, this.localForwardVector), f.rotate(this.sideEquation.t, this.localForwardVector, Math.PI / 2), this.vehicle.chassisBody.vectorToWorldFrame(this.sideEquation.t, this.sideEquation.t), f.rotate(this.forwardEquation.t, this.forwardEquation.t, this.steerValue), f.rotate(this.sideEquation.t, this.sideEquation.t, this.steerValue), this.vehicle.chassisBody.toWorldFrame(this.forwardEquation.contactPointB, this.localPosition), f.copy(this.sideEquation.contactPointB, this.forwardEquation.contactPointB), this.vehicle.chassisBody.vectorToWorldFrame(this.forwardEquation.contactPointA, this.localPosition), f.copy(this.sideEquation.contactPointA, this.forwardEquation.contactPointA), f.normalize(l, this.forwardEquation.t), f.scale(l, l, this.engineForce), this.vehicle.chassisBody.applyForce(l, this.forwardEquation.contactPointA)
            }
        }, {
            "../constraints/Constraint": 14,
            "../equations/FrictionEquation": 23,
            "../math/vec2": 30,
            "../objects/Body": 31,
            "../utils/Utils": 57
        }],
        36: [function(a, b, c) {
            var d = b.exports = {
                AABB: a("./collision/AABB"),
                AngleLockEquation: a("./equations/AngleLockEquation"),
                Body: a("./objects/Body"),
                Broadphase: a("./collision/Broadphase"),
                Capsule: a("./shapes/Capsule"),
                Circle: a("./shapes/Circle"),
                Constraint: a("./constraints/Constraint"),
                ContactEquation: a("./equations/ContactEquation"),
                ContactEquationPool: a("./utils/ContactEquationPool"),
                ContactMaterial: a("./material/ContactMaterial"),
                Convex: a("./shapes/Convex"),
                DistanceConstraint: a("./constraints/DistanceConstraint"),
                Equation: a("./equations/Equation"),
                EventEmitter: a("./events/EventEmitter"),
                FrictionEquation: a("./equations/FrictionEquation"),
                FrictionEquationPool: a("./utils/FrictionEquationPool"),
                GearConstraint: a("./constraints/GearConstraint"),
                GSSolver: a("./solver/GSSolver"),
                Heightfield: a("./shapes/Heightfield"),
                Line: a("./shapes/Line"),
                LockConstraint: a("./constraints/LockConstraint"),
                Material: a("./material/Material"),
                Narrowphase: a("./collision/Narrowphase"),
                NaiveBroadphase: a("./collision/NaiveBroadphase"),
                Particle: a("./shapes/Particle"),
                Plane: a("./shapes/Plane"),
                Pool: a("./utils/Pool"),
                RevoluteConstraint: a("./constraints/RevoluteConstraint"),
                PrismaticConstraint: a("./constraints/PrismaticConstraint"),
                Ray: a("./collision/Ray"),
                RaycastResult: a("./collision/RaycastResult"),
                Box: a("./shapes/Box"),
                RotationalVelocityEquation: a("./equations/RotationalVelocityEquation"),
                SAPBroadphase: a("./collision/SAPBroadphase"),
                Shape: a("./shapes/Shape"),
                Solver: a("./solver/Solver"),
                Spring: a("./objects/Spring"),
                TopDownVehicle: a("./objects/TopDownVehicle"),
                LinearSpring: a("./objects/LinearSpring"),
                RotationalSpring: a("./objects/RotationalSpring"),
                Utils: a("./utils/Utils"),
                World: a("./world/World"),
                vec2: a("./math/vec2"),
                version: a("../package.json").version
            };
            Object.defineProperty(d, "Rectangle", {
                get: function() {
                    return console.warn("The Rectangle class has been renamed to Box."), this.Box
                }
            })
        }, {
            "../package.json": 6,
            "./collision/AABB": 7,
            "./collision/Broadphase": 8,
            "./collision/NaiveBroadphase": 9,
            "./collision/Narrowphase": 10,
            "./collision/Ray": 11,
            "./collision/RaycastResult": 12,
            "./collision/SAPBroadphase": 13,
            "./constraints/Constraint": 14,
            "./constraints/DistanceConstraint": 15,
            "./constraints/GearConstraint": 16,
            "./constraints/LockConstraint": 17,
            "./constraints/PrismaticConstraint": 18,
            "./constraints/RevoluteConstraint": 19,
            "./equations/AngleLockEquation": 20,
            "./equations/ContactEquation": 21,
            "./equations/Equation": 22,
            "./equations/FrictionEquation": 23,
            "./equations/RotationalVelocityEquation": 25,
            "./events/EventEmitter": 26,
            "./material/ContactMaterial": 27,
            "./material/Material": 28,
            "./math/vec2": 30,
            "./objects/Body": 31,
            "./objects/LinearSpring": 32,
            "./objects/RotationalSpring": 33,
            "./objects/Spring": 34,
            "./objects/TopDownVehicle": 35,
            "./shapes/Box": 37,
            "./shapes/Capsule": 38,
            "./shapes/Circle": 39,
            "./shapes/Convex": 40,
            "./shapes/Heightfield": 41,
            "./shapes/Line": 42,
            "./shapes/Particle": 43,
            "./shapes/Plane": 44,
            "./shapes/Shape": 45,
            "./solver/GSSolver": 46,
            "./solver/Solver": 47,
            "./utils/ContactEquationPool": 48,
            "./utils/FrictionEquationPool": 49,
            "./utils/Pool": 55,
            "./utils/Utils": 57,
            "./world/World": 61
        }],
        37: [function(a, b, c) {
            function d(a) {
                "number" == typeof arguments[0] && "number" == typeof arguments[1] && (a = {
                    width: arguments[0],
                    height: arguments[1]
                }, console.warn("The Rectangle has been renamed to Box and its constructor signature has changed. Please use the following format: new Box({ width: 1, height: 1, ... })")), a = a || {};
                var b = this.width = a.width || 1,
                    c = this.height = a.height || 1,
                    d = [e.fromValues(-b / 2, -c / 2), e.fromValues(b / 2, -c / 2), e.fromValues(b / 2, c / 2), e.fromValues(-b / 2, c / 2)],
                    h = [e.fromValues(1, 0), e.fromValues(0, 1)];
                a.vertices = d, a.axes = h, a.type = f.BOX, g.call(this, a)
            }
            var e = a("../math/vec2"),
                f = a("./Shape"),
                g = a("./Convex");
            b.exports = d, d.prototype = new g, d.prototype.constructor = d, d.prototype.computeMomentOfInertia = function(a) {
                var b = this.width,
                    c = this.height;
                return a * (c * c + b * b) / 12
            }, d.prototype.updateBoundingRadius = function() {
                var a = this.width,
                    b = this.height;
                this.boundingRadius = Math.sqrt(a * a + b * b) / 2
            };
            e.create(), e.create(), e.create(), e.create();
            d.prototype.computeAABB = function(a, b, c) {
                a.setFromPoints(this.vertices, b, c, 0)
            }, d.prototype.updateArea = function() {
                this.area = this.width * this.height
            }
        }, {
            "../math/vec2": 30,
            "./Convex": 40,
            "./Shape": 45
        }],
        38: [function(a, b, c) {
            function d(a) {
                "number" == typeof arguments[0] && "number" == typeof arguments[1] && (a = {
                    length: arguments[0],
                    radius: arguments[1]
                }, console.warn("The Capsule constructor signature has changed. Please use the following format: new Capsule({ radius: 1, length: 1 })")), a = a || {}, this.length = a.length || 1, this.radius = a.radius || 1, a.type = e.CAPSULE, e.call(this, a)
            }
            var e = a("./Shape"),
                f = a("../math/vec2");
            b.exports = d, d.prototype = new e, d.prototype.constructor = d, d.prototype.computeMomentOfInertia = function(a) {
                var b = this.radius,
                    c = this.length + b,
                    d = 2 * b;
                return a * (d * d + c * c) / 12
            }, d.prototype.updateBoundingRadius = function() {
                this.boundingRadius = this.radius + this.length / 2
            }, d.prototype.updateArea = function() {
                this.area = Math.PI * this.radius * this.radius + 2 * this.radius * this.length
            };
            var g = f.create();
            d.prototype.computeAABB = function(a, b, c) {
                var d = this.radius;
                f.set(g, this.length / 2, 0), 0 !== c && f.rotate(g, g, c), f.set(a.upperBound, Math.max(g[0] + d, -g[0] + d), Math.max(g[1] + d, -g[1] + d)), f.set(a.lowerBound, Math.min(g[0] - d, -g[0] - d), Math.min(g[1] - d, -g[1] - d)), f.add(a.lowerBound, a.lowerBound, b), f.add(a.upperBound, a.upperBound, b)
            };
            var h = f.create(),
                i = f.create(),
                j = f.create(),
                k = f.create(),
                l = f.fromValues(0, 1);
            d.prototype.raycast = function(a, b, c, d) {
                for (var e = b.from, g = b.to, m = (b.direction, h), n = i, o = j, p = k, q = this.length / 2, r = 0; 2 > r; r++) {
                    var s = this.radius * (2 * r - 1);
                    f.set(o, -q, s), f.set(p, q, s), f.toGlobalFrame(o, o, c, d), f.toGlobalFrame(p, p, c, d);
                    var t = f.getLineSegmentsIntersectionFraction(e, g, o, p);
                    if (t >= 0 && (f.rotate(n, l, d), f.scale(n, n, 2 * r - 1), b.reportIntersection(a, t, n, -1), a.shouldStop(b))) return
                }
                for (var u = Math.pow(this.radius, 2) + Math.pow(q, 2), r = 0; 2 > r; r++) {
                    f.set(o, q * (2 * r - 1), 0), f.toGlobalFrame(o, o, c, d);
                    var v = Math.pow(g[0] - e[0], 2) + Math.pow(g[1] - e[1], 2),
                        w = 2 * ((g[0] - e[0]) * (e[0] - o[0]) + (g[1] - e[1]) * (e[1] - o[1])),
                        x = Math.pow(e[0] - o[0], 2) + Math.pow(e[1] - o[1], 2) - Math.pow(this.radius, 2),
                        t = Math.pow(w, 2) - 4 * v * x;
                    if (!(0 > t))
                        if (0 === t) {
                            if (f.lerp(m, e, g, t), f.squaredDistance(m, c) > u && (f.sub(n, m, o), f.normalize(n, n), b.reportIntersection(a, t, n, -1), a.shouldStop(b))) return
                        } else {
                            var y = Math.sqrt(t),
                                z = 1 / (2 * v),
                                A = (-w - y) * z,
                                B = (-w + y) * z;
                            if (A >= 0 && 1 >= A && (f.lerp(m, e, g, A), f.squaredDistance(m, c) > u && (f.sub(n, m, o), f.normalize(n, n), b.reportIntersection(a, A, n, -1), a.shouldStop(b)))) return;
                            if (B >= 0 && 1 >= B && (f.lerp(m, e, g, B), f.squaredDistance(m, c) > u && (f.sub(n, m, o), f.normalize(n, n), b.reportIntersection(a, B, n, -1), a.shouldStop(b)))) return
                        }
                }
            }
        }, {
            "../math/vec2": 30,
            "./Shape": 45
        }],
        39: [function(a, b, c) {
            function d(a) {
                "number" == typeof arguments[0] && (a = {
                    radius: arguments[0]
                }, console.warn("The Circle constructor signature has changed. Please use the following format: new Circle({ radius: 1 })")), a = a || {}, this.radius = a.radius || 1, a.type = e.CIRCLE, e.call(this, a)
            }
            var e = a("./Shape"),
                f = a("../math/vec2");
            b.exports = d, d.prototype = new e, d.prototype.constructor = d, d.prototype.computeMomentOfInertia = function(a) {
                var b = this.radius;
                return a * b * b / 2
            }, d.prototype.updateBoundingRadius = function() {
                this.boundingRadius = this.radius
            }, d.prototype.updateArea = function() {
                this.area = Math.PI * this.radius * this.radius
            }, d.prototype.computeAABB = function(a, b, c) {
                var d = this.radius;
                f.set(a.upperBound, d, d), f.set(a.lowerBound, -d, -d), b && (f.add(a.lowerBound, a.lowerBound, b), f.add(a.upperBound, a.upperBound, b))
            };
            var g = f.create(),
                h = f.create();
            d.prototype.raycast = function(a, b, c, d) {
                var e = b.from,
                    i = b.to,
                    j = this.radius,
                    k = Math.pow(i[0] - e[0], 2) + Math.pow(i[1] - e[1], 2),
                    l = 2 * ((i[0] - e[0]) * (e[0] - c[0]) + (i[1] - e[1]) * (e[1] - c[1])),
                    m = Math.pow(e[0] - c[0], 2) + Math.pow(e[1] - c[1], 2) - Math.pow(j, 2),
                    n = Math.pow(l, 2) - 4 * k * m,
                    o = g,
                    p = h;
                if (!(0 > n))
                    if (0 === n) f.lerp(o, e, i, n), f.sub(p, o, c), f.normalize(p, p), b.reportIntersection(a, n, p, -1);
                    else {
                        var q = Math.sqrt(n),
                            r = 1 / (2 * k),
                            s = (-l - q) * r,
                            t = (-l + q) * r;
                        if (s >= 0 && 1 >= s && (f.lerp(o, e, i, s), f.sub(p, o, c), f.normalize(p, p), b.reportIntersection(a, s, p, -1), a.shouldStop(b))) return;
                        t >= 0 && 1 >= t && (f.lerp(o, e, i, t), f.sub(p, o, c), f.normalize(p, p), b.reportIntersection(a, t, p, -1))
                    }
            }
        }, {
            "../math/vec2": 30,
            "./Shape": 45
        }],
        40: [function(a, b, c) {
            function d(a) {
                Array.isArray(arguments[0]) && (a = {
                    vertices: arguments[0],
                    axes: arguments[1]
                }, console.warn("The Convex constructor signature has changed. Please use the following format: new Convex({ vertices: [...], ... })")), a = a || {}, this.vertices = [];
                for (var b = void 0 !== a.vertices ? a.vertices : [], c = 0; c < b.length; c++) {
                    var d = f.create();
                    f.copy(d, b[c]), this.vertices.push(d)
                }
                if (this.axes = [], a.axes)
                    for (var c = 0; c < a.axes.length; c++) {
                        var g = f.create();
                        f.copy(g, a.axes[c]), this.axes.push(g)
                    } else
                        for (var c = 0; c < this.vertices.length; c++) {
                            var h = this.vertices[c],
                                i = this.vertices[(c + 1) % this.vertices.length],
                                j = f.create();
                            f.sub(j, i, h), f.rotate90cw(j, j), f.normalize(j, j), this.axes.push(j)
                        }
                if (this.centerOfMass = f.fromValues(0, 0), this.triangles = [], this.vertices.length && (this.updateTriangles(), this.updateCenterOfMass()), this.boundingRadius = 0, a.type = e.CONVEX, e.call(this, a), this.updateBoundingRadius(), this.updateArea(), this.area < 0) throw new Error("Convex vertices must be given in conter-clockwise winding.")
            }
            var e = a("./Shape"),
                f = a("../math/vec2"),
                g = a("../math/polyk");
            a("poly-decomp");
            b.exports = d, d.prototype = new e, d.prototype.constructor = d;
            var h = f.create(),
                i = f.create();
            d.prototype.projectOntoLocalAxis = function(a, b) {
                for (var c, d, e = null, g = null, a = h, i = 0; i < this.vertices.length; i++) c = this.vertices[i], d = f.dot(c, a), (null === e || d > e) && (e = d), (null === g || g > d) && (g = d);
                if (g > e) {
                    var j = g;
                    g = e, e = j
                }
                f.set(b, g, e)
            }, d.prototype.projectOntoWorldAxis = function(a, b, c, d) {
                var e = i;
                this.projectOntoLocalAxis(a, d), 0 !== c ? f.rotate(e, a, c) : e = a;
                var g = f.dot(b, e);
                f.set(d, d[0] + g, d[1] + g)
            }, d.prototype.updateTriangles = function() {
                this.triangles.length = 0;
                for (var a = [], b = 0; b < this.vertices.length; b++) {
                    var c = this.vertices[b];
                    a.push(c[0], c[1])
                }
                for (var d = g.Triangulate(a), b = 0; b < d.length; b += 3) {
                    var e = d[b],
                        f = d[b + 1],
                        h = d[b + 2];
                    this.triangles.push([e, f, h])
                }
            };
            var j = f.create(),
                k = f.create(),
                l = f.create(),
                m = f.create(),
                n = f.create();
            f.create(), f.create(), f.create(), f.create();
            d.prototype.updateCenterOfMass = function() {
                var a = this.triangles,
                    b = this.vertices,
                    c = this.centerOfMass,
                    e = j,
                    g = l,
                    h = m,
                    i = n,
                    o = k;
                f.set(c, 0, 0);
                for (var p = 0, q = 0; q !== a.length; q++) {
                    var r = a[q],
                        g = b[r[0]],
                        h = b[r[1]],
                        i = b[r[2]];
                    f.centroid(e, g, h, i);
                    var s = d.triangleArea(g, h, i);
                    p += s, f.scale(o, e, s), f.add(c, c, o)
                }
                f.scale(c, c, 1 / p)
            }, d.prototype.computeMomentOfInertia = function(a) {
                for (var b = 0, c = 0, d = this.vertices.length, e = d - 1, g = 0; d > g; e = g, g++) {
                    var h = this.vertices[e],
                        i = this.vertices[g],
                        j = Math.abs(f.crossLength(h, i)),
                        k = f.dot(i, i) + f.dot(i, h) + f.dot(h, h);
                    b += j * k, c += j
                }
                return a / 6 * (b / c)
            }, d.prototype.updateBoundingRadius = function() {
                for (var a = this.vertices, b = 0, c = 0; c !== a.length; c++) {
                    var d = f.squaredLength(a[c]);
                    d > b && (b = d)
                }
                this.boundingRadius = Math.sqrt(b)
            }, d.triangleArea = function(a, b, c) {
                return .5 * ((b[0] - a[0]) * (c[1] - a[1]) - (c[0] - a[0]) * (b[1] - a[1]))
            }, d.prototype.updateArea = function() {
                this.updateTriangles(), this.area = 0;
                for (var a = this.triangles, b = this.vertices, c = 0; c !== a.length; c++) {
                    var e = a[c],
                        f = b[e[0]],
                        g = b[e[1]],
                        h = b[e[2]],
                        i = d.triangleArea(f, g, h);
                    this.area += i
                }
            }, d.prototype.computeAABB = function(a, b, c) {
                a.setFromPoints(this.vertices, b, c, 0)
            };
            var o = f.create(),
                p = f.create(),
                q = f.create();
            d.prototype.raycast = function(a, b, c, d) {
                var e = o,
                    g = p,
                    h = q,
                    i = this.vertices;
                f.toLocalFrame(e, b.from, c, d), f.toLocalFrame(g, b.to, c, d);
                for (var j = i.length, k = 0; j > k && !a.shouldStop(b); k++) {
                    var l = i[k],
                        m = i[(k + 1) % j],
                        n = f.getLineSegmentsIntersectionFraction(e, g, l, m);
                    n >= 0 && (f.sub(h, m, l), f.rotate(h, h, -Math.PI / 2 + d), f.normalize(h, h), b.reportIntersection(a, n, h, k))
                }
            }
        }, {
            "../math/polyk": 29,
            "../math/vec2": 30,
            "./Shape": 45,
            "poly-decomp": 5
        }],
        41: [function(a, b, c) {
            function d(a) {
                if (Array.isArray(arguments[0])) {
                    if (a = {
                            heights: arguments[0]
                        }, "object" == typeof arguments[1])
                        for (var b in arguments[1]) a[b] = arguments[1][b];
                    console.warn("The Heightfield constructor signature has changed. Please use the following format: new Heightfield({ heights: [...], ... })")
                }
                a = a || {}, this.heights = a.heights ? a.heights.slice(0) : [], this.maxValue = a.maxValue || null, this.minValue = a.minValue || null, this.elementWidth = a.elementWidth || .1, (void 0 === a.maxValue || void 0 === a.minValue) && this.updateMaxMinValues(), a.type = e.HEIGHTFIELD, e.call(this, a)
            }
            var e = a("./Shape"),
                f = a("../math/vec2");
            a("../utils/Utils");
            b.exports = d, d.prototype = new e, d.prototype.constructor = d, d.prototype.updateMaxMinValues = function() {
                for (var a = this.heights, b = a[0], c = a[0], d = 0; d !== a.length; d++) {
                    var e = a[d];
                    e > b && (b = e), c > e && (c = e)
                }
                this.maxValue = b, this.minValue = c
            }, d.prototype.computeMomentOfInertia = function(a) {
                return Number.MAX_VALUE
            }, d.prototype.updateBoundingRadius = function() {
                this.boundingRadius = Number.MAX_VALUE
            }, d.prototype.updateArea = function() {
                for (var a = this.heights, b = 0, c = 0; c < a.length - 1; c++) b += (a[c] + a[c + 1]) / 2 * this.elementWidth;
                this.area = b
            };
            var g = [f.create(), f.create(), f.create(), f.create()];
            d.prototype.computeAABB = function(a, b, c) {
                f.set(g[0], 0, this.maxValue), f.set(g[1], this.elementWidth * this.heights.length, this.maxValue), f.set(g[2], this.elementWidth * this.heights.length, this.minValue), f.set(g[3], 0, this.minValue), a.setFromPoints(g, b, c)
            }, d.prototype.getLineSegment = function(a, b, c) {
                var d = this.heights,
                    e = this.elementWidth;
                f.set(a, c * e, d[c]), f.set(b, (c + 1) * e, d[c + 1])
            }, d.prototype.getSegmentIndex = function(a) {
                return Math.floor(a[0] / this.elementWidth)
            }, d.prototype.getClampedSegmentIndex = function(a) {
                var b = this.getSegmentIndex(a);
                return b = Math.min(this.heights.length, Math.max(b, 0))
            };
            var h = (f.create(), f.create()),
                i = f.create(),
                j = f.create(),
                k = f.create(),
                l = f.create();
            f.fromValues(0, 1);
            d.prototype.raycast = function(a, b, c, d) {
                var e = b.from,
                    g = b.to,
                    m = (b.direction, h),
                    n = i,
                    o = j,
                    p = k,
                    q = l;
                f.toLocalFrame(p, e, c, d), f.toLocalFrame(q, g, c, d);
                var r = this.getClampedSegmentIndex(p),
                    s = this.getClampedSegmentIndex(q);
                if (r > s) {
                    var t = r;
                    r = s, s = t
                }
                for (var u = 0; u < this.heights.length - 1; u++) {
                    this.getLineSegment(n, o, u);
                    var v = f.getLineSegmentsIntersectionFraction(p, q, n, o);
                    if (v >= 0 && (f.sub(m, o, n), f.rotate(m, m, d + Math.PI / 2), f.normalize(m, m), b.reportIntersection(a, v, m, -1), a.shouldStop(b))) return
                }
            }
        }, {
            "../math/vec2": 30,
            "../utils/Utils": 57,
            "./Shape": 45
        }],
        42: [function(a, b, c) {
            function d(a) {
                "number" == typeof arguments[0] && (a = {
                    length: arguments[0]
                }, console.warn("The Line constructor signature has changed. Please use the following format: new Line({ length: 1, ... })")), a = a || {}, this.length = a.length || 1, a.type = e.LINE, e.call(this, a)
            }
            var e = a("./Shape"),
                f = a("../math/vec2");
            b.exports = d, d.prototype = new e, d.prototype.constructor = d, d.prototype.computeMomentOfInertia = function(a) {
                return a * Math.pow(this.length, 2) / 12
            }, d.prototype.updateBoundingRadius = function() {
                this.boundingRadius = this.length / 2
            };
            var g = [f.create(), f.create()];
            d.prototype.computeAABB = function(a, b, c) {
                var d = this.length / 2;
                f.set(g[0], -d, 0), f.set(g[1], d, 0), a.setFromPoints(g, b, c, 0)
            };
            var h = (f.create(), f.create()),
                i = f.create(),
                j = f.create(),
                k = f.fromValues(0, 1);
            d.prototype.raycast = function(a, b, c, d) {
                var e = b.from,
                    g = b.to,
                    l = i,
                    m = j,
                    n = this.length / 2;
                f.set(l, -n, 0), f.set(m, n, 0), f.toGlobalFrame(l, l, c, d), f.toGlobalFrame(m, m, c, d);
                var o = f.getLineSegmentsIntersectionFraction(l, m, e, g);
                if (o >= 0) {
                    var p = h;
                    f.rotate(p, k, d), b.reportIntersection(a, o, p, -1)
                }
            }
        }, {
            "../math/vec2": 30,
            "./Shape": 45
        }],
        43: [function(a, b, c) {
            function d(a) {
                a = a || {}, a.type = e.PARTICLE, e.call(this, a)
            }
            var e = a("./Shape"),
                f = a("../math/vec2");
            b.exports = d, d.prototype = new e, d.prototype.constructor = d, d.prototype.computeMomentOfInertia = function(a) {
                return 0
            }, d.prototype.updateBoundingRadius = function() {
                this.boundingRadius = 0
            }, d.prototype.computeAABB = function(a, b, c) {
                f.copy(a.lowerBound, b), f.copy(a.upperBound, b)
            }
        }, {
            "../math/vec2": 30,
            "./Shape": 45
        }],
        44: [function(a, b, c) {
            function d(a) {
                a = a || {}, a.type = e.PLANE, e.call(this, a)
            }
            var e = a("./Shape"),
                f = a("../math/vec2");
            a("../utils/Utils");
            b.exports = d, d.prototype = new e, d.prototype.constructor = d, d.prototype.computeMomentOfInertia = function(a) {
                return 0
            }, d.prototype.updateBoundingRadius = function() {
                this.boundingRadius = Number.MAX_VALUE
            }, d.prototype.computeAABB = function(a, b, c) {
                var d = c % (2 * Math.PI),
                    e = f.set,
                    g = 1e7,
                    h = a.lowerBound,
                    i = a.upperBound;
                e(h, -g, -g), e(i, g, g), 0 === d ? i[1] = 0 : d === Math.PI / 2 ? h[0] = 0 : d === Math.PI ? h[1] = 0 : d === 3 * Math.PI / 2 && (i[0] = 0)
            }, d.prototype.updateArea = function() {
                this.area = Number.MAX_VALUE
            };
            var g = f.create(),
                h = (f.create(), f.create(), f.create()),
                i = f.create();
            d.prototype.raycast = function(a, b, c, d) {
                var e = b.from,
                    j = b.to,
                    k = b.direction,
                    l = g,
                    m = h,
                    n = i;
                f.set(m, 0, 1), f.rotate(m, m, d), f.sub(n, e, c);
                var o = f.dot(n, m);
                f.sub(n, j, c);
                var p = f.dot(n, m);
                if (!(o * p > 0 || f.squaredDistance(e, j) < o * o)) {
                    var q = f.dot(m, k);
                    f.sub(l, e, c);
                    var r = -f.dot(m, l) / q / b.length;
                    b.reportIntersection(a, r, m, -1)
                }
            }
        }, {
            "../math/vec2": 30,
            "../utils/Utils": 57,
            "./Shape": 45
        }],
        45: [function(a, b, c) {
            function d(a) {
                a = a || {}, this.body = null, this.position = e.fromValues(0, 0), a.position && e.copy(this.position, a.position), this.angle = a.angle || 0, this.type = a.type || 0, this.id = d.idCounter++, this.boundingRadius = 0, this.collisionGroup = void 0 !== a.collisionGroup ? a.collisionGroup : 1, this.collisionResponse = void 0 !== a.collisionResponse ? a.collisionResponse : !0, this.collisionMask = void 0 !== a.collisionMask ? a.collisionMask : 1, this.material = a.material || null, this.area = 0, this.sensor = void 0 !== a.sensor ? a.sensor : !1, this.type && this.updateBoundingRadius(), this.updateArea()
            }
            b.exports = d;
            var e = a("../math/vec2");
            d.idCounter = 0, d.CIRCLE = 1, d.PARTICLE = 2, d.PLANE = 4, d.CONVEX = 8, d.LINE = 16, d.BOX = 32, Object.defineProperty(d, "RECTANGLE", {
                get: function() {
                    return console.warn("Shape.RECTANGLE is deprecated, use Shape.BOX instead."), d.BOX
                }
            }), d.CAPSULE = 64, d.HEIGHTFIELD = 128, d.prototype.computeMomentOfInertia = function(a) {}, d.prototype.updateBoundingRadius = function() {}, d.prototype.updateArea = function() {}, d.prototype.computeAABB = function(a, b, c) {}, d.prototype.raycast = function(a, b, c, d) {}
        }, {
            "../math/vec2": 30
        }],
        46: [function(a, b, c) {
            function d(a) {
                g.call(this, a, g.GS), a = a || {}, this.iterations = a.iterations || 10, this.tolerance = a.tolerance || 1e-7, this.arrayStep = 30, this.lambda = new h.ARRAY_TYPE(this.arrayStep),
                    this.Bs = new h.ARRAY_TYPE(this.arrayStep), this.invCs = new h.ARRAY_TYPE(this.arrayStep), this.useZeroRHS = !1, this.frictionIterations = void 0 !== a.frictionIterations ? 0 : a.frictionIterations, this.usedIterations = 0
            }

            function e(a) {
                for (var b = a.length; b--;) a[b] = 0
            }
            var f = a("../math/vec2"),
                g = a("./Solver"),
                h = a("../utils/Utils"),
                i = a("../equations/FrictionEquation");
            b.exports = d, d.prototype = new g, d.prototype.constructor = d, d.prototype.solve = function(a, b) {
                this.sortEquations();
                var c = 0,
                    g = this.iterations,
                    j = this.frictionIterations,
                    k = this.equations,
                    l = k.length,
                    m = Math.pow(this.tolerance * l, 2),
                    n = b.bodies,
                    o = b.bodies.length,
                    p = (f.add, f.set, this.useZeroRHS),
                    q = this.lambda;
                if (this.usedIterations = 0, l)
                    for (var r = 0; r !== o; r++) {
                        var s = n[r];
                        s.updateSolveMassProperties()
                    }
                q.length < l && (q = this.lambda = new h.ARRAY_TYPE(l + this.arrayStep), this.Bs = new h.ARRAY_TYPE(l + this.arrayStep), this.invCs = new h.ARRAY_TYPE(l + this.arrayStep)), e(q);
                for (var t = this.invCs, u = this.Bs, q = this.lambda, r = 0; r !== k.length; r++) {
                    var v = k[r];
                    (v.timeStep !== a || v.needsUpdate) && (v.timeStep = a, v.update()), u[r] = v.computeB(v.a, v.b, a), t[r] = v.computeInvC(v.epsilon)
                }
                var v, w, r, x;
                if (0 !== l) {
                    for (r = 0; r !== o; r++) {
                        var s = n[r];
                        s.resetConstraintVelocity()
                    }
                    if (j) {
                        for (c = 0; c !== j; c++) {
                            for (w = 0, x = 0; x !== l; x++) {
                                v = k[x];
                                var y = d.iterateEquation(x, v, v.epsilon, u, t, q, p, a, c);
                                w += Math.abs(y)
                            }
                            if (this.usedIterations++, m >= w * w) break
                        }
                        for (d.updateMultipliers(k, q, 1 / a), x = 0; x !== l; x++) {
                            var z = k[x];
                            if (z instanceof i) {
                                for (var A = 0, B = 0; B !== z.contactEquations.length; B++) A += z.contactEquations[B].multiplier;
                                A *= z.frictionCoefficient / z.contactEquations.length, z.maxForce = A, z.minForce = -A
                            }
                        }
                    }
                    for (c = 0; c !== g; c++) {
                        for (w = 0, x = 0; x !== l; x++) {
                            v = k[x];
                            var y = d.iterateEquation(x, v, v.epsilon, u, t, q, p, a, c);
                            w += Math.abs(y)
                        }
                        if (this.usedIterations++, m >= w * w) break
                    }
                    for (r = 0; r !== o; r++) n[r].addConstraintVelocity();
                    d.updateMultipliers(k, q, 1 / a)
                }
            }, d.updateMultipliers = function(a, b, c) {
                for (var d = a.length; d--;) a[d].multiplier = b[d] * c
            }, d.iterateEquation = function(a, b, c, d, e, f, g, h, i) {
                var j = d[a],
                    k = e[a],
                    l = f[a],
                    m = b.computeGWlambda(),
                    n = b.maxForce,
                    o = b.minForce;
                g && (j = 0);
                var p = k * (j - m - c * l),
                    q = l + p;
                return o * h > q ? p = o * h - l : q > n * h && (p = n * h - l), f[a] += p, b.addToWlambda(p), p
            }
        }, {
            "../equations/FrictionEquation": 23,
            "../math/vec2": 30,
            "../utils/Utils": 57,
            "./Solver": 47
        }],
        47: [function(a, b, c) {
            function d(a, b) {
                a = a || {}, e.call(this), this.type = b, this.equations = [], this.equationSortFunction = a.equationSortFunction || !1
            }
            var e = (a("../utils/Utils"), a("../events/EventEmitter"));
            b.exports = d, d.prototype = new e, d.prototype.constructor = d, d.prototype.solve = function(a, b) {
                throw new Error("Solver.solve should be implemented by subclasses!")
            };
            var f = {
                bodies: []
            };
            d.prototype.solveIsland = function(a, b) {
                this.removeAllEquations(), b.equations.length && (this.addEquations(b.equations), f.bodies.length = 0, b.getBodies(f.bodies), f.bodies.length && this.solve(a, f))
            }, d.prototype.sortEquations = function() {
                this.equationSortFunction && this.equations.sort(this.equationSortFunction)
            }, d.prototype.addEquation = function(a) {
                a.enabled && this.equations.push(a)
            }, d.prototype.addEquations = function(a) {
                for (var b = 0, c = a.length; b !== c; b++) {
                    var d = a[b];
                    d.enabled && this.equations.push(d)
                }
            }, d.prototype.removeEquation = function(a) {
                var b = this.equations.indexOf(a); - 1 !== b && this.equations.splice(b, 1)
            }, d.prototype.removeAllEquations = function() {
                this.equations.length = 0
            }, d.GS = 1, d.ISLAND = 2
        }, {
            "../events/EventEmitter": 26,
            "../utils/Utils": 57
        }],
        48: [function(a, b, c) {
            function d() {
                f.apply(this, arguments)
            }
            var e = a("../equations/ContactEquation"),
                f = a("./Pool");
            b.exports = d, d.prototype = new f, d.prototype.constructor = d, d.prototype.create = function() {
                return new e
            }, d.prototype.destroy = function(a) {
                return a.bodyA = a.bodyB = null, this
            }
        }, {
            "../equations/ContactEquation": 21,
            "./Pool": 55
        }],
        49: [function(a, b, c) {
            function d() {
                f.apply(this, arguments)
            }
            var e = a("../equations/FrictionEquation"),
                f = a("./Pool");
            b.exports = d, d.prototype = new f, d.prototype.constructor = d, d.prototype.create = function() {
                return new e
            }, d.prototype.destroy = function(a) {
                return a.bodyA = a.bodyB = null, this
            }
        }, {
            "../equations/FrictionEquation": 23,
            "./Pool": 55
        }],
        50: [function(a, b, c) {
            function d() {
                f.apply(this, arguments)
            }
            var e = a("../world/IslandNode"),
                f = a("./Pool");
            b.exports = d, d.prototype = new f, d.prototype.constructor = d, d.prototype.create = function() {
                return new e
            }, d.prototype.destroy = function(a) {
                return a.reset(), this
            }
        }, {
            "../world/IslandNode": 60,
            "./Pool": 55
        }],
        51: [function(a, b, c) {
            function d() {
                f.apply(this, arguments)
            }
            var e = a("../world/Island"),
                f = a("./Pool");
            b.exports = d, d.prototype = new f, d.prototype.constructor = d, d.prototype.create = function() {
                return new e
            }, d.prototype.destroy = function(a) {
                return a.reset(), this
            }
        }, {
            "../world/Island": 58,
            "./Pool": 55
        }],
        52: [function(a, b, c) {
            function d() {
                this.overlappingShapesLastState = new e, this.overlappingShapesCurrentState = new e, this.recordPool = new f({
                    size: 16
                }), this.tmpDict = new e, this.tmpArray1 = []
            }
            var e = a("./TupleDictionary"),
                f = (a("./OverlapKeeperRecord"), a("./OverlapKeeperRecordPool"));
            a("./Utils");
            b.exports = d, d.prototype.tick = function() {
                for (var a = this.overlappingShapesLastState, b = this.overlappingShapesCurrentState, c = a.keys.length; c--;) {
                    var d = a.keys[c],
                        e = a.getByKey(d);
                    b.getByKey(d);
                    e && this.recordPool.release(e)
                }
                a.reset(), a.copy(b), b.reset()
            }, d.prototype.setOverlapping = function(a, b, c, d) {
                var e = (this.overlappingShapesLastState, this.overlappingShapesCurrentState);
                if (!e.get(b.id, d.id)) {
                    var f = this.recordPool.get();
                    f.set(a, b, c, d), e.set(b.id, d.id, f)
                }
            }, d.prototype.getNewOverlaps = function(a) {
                return this.getDiff(this.overlappingShapesLastState, this.overlappingShapesCurrentState, a)
            }, d.prototype.getEndOverlaps = function(a) {
                return this.getDiff(this.overlappingShapesCurrentState, this.overlappingShapesLastState, a)
            }, d.prototype.bodiesAreOverlapping = function(a, b) {
                for (var c = this.overlappingShapesCurrentState, d = c.keys.length; d--;) {
                    var e = c.keys[d],
                        f = c.data[e];
                    if (f.bodyA === a && f.bodyB === b || f.bodyA === b && f.bodyB === a) return !0
                }
                return !1
            }, d.prototype.getDiff = function(a, b, c) {
                var c = c || [],
                    d = a,
                    e = b;
                c.length = 0;
                for (var f = e.keys.length; f--;) {
                    var g = e.keys[f],
                        h = e.data[g];
                    if (!h) throw new Error("Key " + g + " had no data!");
                    var i = d.data[g];
                    i || c.push(h)
                }
                return c
            }, d.prototype.isNewOverlap = function(a, b) {
                var c = 0 | a.id,
                    d = 0 | b.id,
                    e = this.overlappingShapesLastState,
                    f = this.overlappingShapesCurrentState;
                return !e.get(c, d) && !!f.get(c, d)
            }, d.prototype.getNewBodyOverlaps = function(a) {
                this.tmpArray1.length = 0;
                var b = this.getNewOverlaps(this.tmpArray1);
                return this.getBodyDiff(b, a)
            }, d.prototype.getEndBodyOverlaps = function(a) {
                this.tmpArray1.length = 0;
                var b = this.getEndOverlaps(this.tmpArray1);
                return this.getBodyDiff(b, a)
            }, d.prototype.getBodyDiff = function(a, b) {
                b = b || [];
                for (var c = this.tmpDict, d = a.length; d--;) {
                    var e = a[d];
                    c.set(0 | e.bodyA.id, 0 | e.bodyB.id, e)
                }
                for (d = c.keys.length; d--;) {
                    var e = c.getByKey(c.keys[d]);
                    e && b.push(e.bodyA, e.bodyB)
                }
                return c.reset(), b
            }
        }, {
            "./OverlapKeeperRecord": 53,
            "./OverlapKeeperRecordPool": 54,
            "./TupleDictionary": 56,
            "./Utils": 57
        }],
        53: [function(a, b, c) {
            function d(a, b, c, d) {
                this.shapeA = b, this.shapeB = d, this.bodyA = a, this.bodyB = c
            }
            b.exports = d, d.prototype.set = function(a, b, c, e) {
                d.call(this, a, b, c, e)
            }
        }, {}],
        54: [function(a, b, c) {
            function d() {
                f.apply(this, arguments)
            }
            var e = a("./OverlapKeeperRecord"),
                f = a("./Pool");
            b.exports = d, d.prototype = new f, d.prototype.constructor = d, d.prototype.create = function() {
                return new e
            }, d.prototype.destroy = function(a) {
                return a.bodyA = a.bodyB = a.shapeA = a.shapeB = null, this
            }
        }, {
            "./OverlapKeeperRecord": 53,
            "./Pool": 55
        }],
        55: [function(a, b, c) {
            function d(a) {
                a = a || {}, this.objects = [], void 0 !== a.size && this.resize(a.size)
            }
            b.exports = d, d.prototype.resize = function(a) {
                for (var b = this.objects; b.length > a;) b.pop();
                for (; b.length < a;) b.push(this.create());
                return this
            }, d.prototype.get = function() {
                var a = this.objects;
                return a.length ? a.pop() : this.create()
            }, d.prototype.release = function(a) {
                return this.destroy(a), this.objects.push(a), this
            }
        }, {}],
        56: [function(a, b, c) {
            function d() {
                this.data = {}, this.keys = []
            }
            var e = a("./Utils");
            b.exports = d, d.prototype.getKey = function(a, b) {
                return a = 0 | a, b = 0 | b, (0 | a) === (0 | b) ? -1 : 0 | ((0 | a) > (0 | b) ? a << 16 | 65535 & b : b << 16 | 65535 & a)
            }, d.prototype.getByKey = function(a) {
                return a = 0 | a, this.data[a]
            }, d.prototype.get = function(a, b) {
                return this.data[this.getKey(a, b)]
            }, d.prototype.set = function(a, b, c) {
                if (!c) throw new Error("No data!");
                var d = this.getKey(a, b);
                return this.data[d] || this.keys.push(d), this.data[d] = c, d
            }, d.prototype.reset = function() {
                for (var a = this.data, b = this.keys, c = b.length; c--;) delete a[b[c]];
                b.length = 0
            }, d.prototype.copy = function(a) {
                this.reset(), e.appendArray(this.keys, a.keys);
                for (var b = a.keys.length; b--;) {
                    var c = a.keys[b];
                    this.data[c] = a.data[c]
                }
            }
        }, {
            "./Utils": 57
        }],
        57: [function(a, b, c) {
            function d() {}
            b.exports = d, d.appendArray = function(a, b) {
                if (b.length < 15e4) a.push.apply(a, b);
                else
                    for (var c = 0, d = b.length; c !== d; ++c) a.push(b[c])
            }, d.splice = function(a, b, c) {
                c = c || 1;
                for (var d = b, e = a.length - c; e > d; d++) a[d] = a[d + c];
                a.length = e
            }, "undefined" != typeof P2_ARRAY_TYPE ? d.ARRAY_TYPE = P2_ARRAY_TYPE : "undefined" != typeof Float32Array ? d.ARRAY_TYPE = Float32Array : d.ARRAY_TYPE = Array, d.extend = function(a, b) {
                for (var c in b) a[c] = b[c]
            }, d.defaults = function(a, b) {
                a = a || {};
                for (var c in b) c in a || (a[c] = b[c]);
                return a
            }
        }, {}],
        58: [function(a, b, c) {
            function d() {
                this.equations = [], this.bodies = []
            }
            var e = a("../objects/Body");
            b.exports = d, d.prototype.reset = function() {
                this.equations.length = this.bodies.length = 0
            };
            var f = [];
            d.prototype.getBodies = function(a) {
                var b = a || [],
                    c = this.equations;
                f.length = 0;
                for (var d = 0; d !== c.length; d++) {
                    var e = c[d]; - 1 === f.indexOf(e.bodyA.id) && (b.push(e.bodyA), f.push(e.bodyA.id)), -1 === f.indexOf(e.bodyB.id) && (b.push(e.bodyB), f.push(e.bodyB.id))
                }
                return b
            }, d.prototype.wantsToSleep = function() {
                for (var a = 0; a < this.bodies.length; a++) {
                    var b = this.bodies[a];
                    if (b.type === e.DYNAMIC && !b.wantsToSleep) return !1
                }
                return !0
            }, d.prototype.sleep = function() {
                for (var a = 0; a < this.bodies.length; a++) {
                    var b = this.bodies[a];
                    b.sleep()
                }
                return !0
            }
        }, {
            "../objects/Body": 31
        }],
        59: [function(a, b, c) {
            function d(a) {
                this.nodePool = new e({
                    size: 16
                }), this.islandPool = new f({
                    size: 8
                }), this.equations = [], this.islands = [], this.nodes = [], this.queue = []
            }
            var e = (a("../math/vec2"), a("./Island"), a("./IslandNode"), a("./../utils/IslandNodePool")),
                f = a("./../utils/IslandPool"),
                g = a("../objects/Body");
            b.exports = d, d.getUnvisitedNode = function(a) {
                for (var b = a.length, c = 0; c !== b; c++) {
                    var d = a[c];
                    if (!d.visited && d.body.type === g.DYNAMIC) return d
                }
                return !1
            }, d.prototype.visit = function(a, b, c) {
                b.push(a.body);
                for (var d = a.equations.length, e = 0; e !== d; e++) {
                    var f = a.equations[e]; - 1 === c.indexOf(f) && c.push(f)
                }
            }, d.prototype.bfs = function(a, b, c) {
                var e = this.queue;
                for (e.length = 0, e.push(a), a.visited = !0, this.visit(a, b, c); e.length;)
                    for (var f, h = e.pop(); f = d.getUnvisitedNode(h.neighbors);) f.visited = !0, this.visit(f, b, c), f.body.type === g.DYNAMIC && e.push(f)
            }, d.prototype.split = function(a) {
                for (var b = a.bodies, c = this.nodes, e = this.equations; c.length;) this.nodePool.release(c.pop());
                for (var f = 0; f !== b.length; f++) {
                    var g = this.nodePool.get();
                    g.body = b[f], c.push(g)
                }
                for (var h = 0; h !== e.length; h++) {
                    var i = e[h],
                        f = b.indexOf(i.bodyA),
                        j = b.indexOf(i.bodyB),
                        k = c[f],
                        l = c[j];
                    k.neighbors.push(l), l.neighbors.push(k), k.equations.push(i), l.equations.push(i)
                }
                for (var m = this.islands, f = 0; f < m.length; f++) this.islandPool.release(m[f]);
                m.length = 0;
                for (var n; n = d.getUnvisitedNode(c);) {
                    var o = this.islandPool.get();
                    this.bfs(n, o.bodies, o.equations), m.push(o)
                }
                return m
            }
        }, {
            "../math/vec2": 30,
            "../objects/Body": 31,
            "./../utils/IslandNodePool": 50,
            "./../utils/IslandPool": 51,
            "./Island": 58,
            "./IslandNode": 60
        }],
        60: [function(a, b, c) {
            function d(a) {
                this.body = a, this.neighbors = [], this.equations = [], this.visited = !1
            }
            b.exports = d, d.prototype.reset = function() {
                this.equations.length = 0, this.neighbors.length = 0, this.visited = !1, this.body = null
            }
        }, {}],
        61: [function(a, b, c) {
            function d(a) {
                l.apply(this), a = a || {}, this.springs = [], this.bodies = [], this.disabledBodyCollisionPairs = [], this.solver = a.solver || new e, this.narrowphase = new r(this), this.islandManager = new u, this.gravity = f.fromValues(0, -9.78), a.gravity && f.copy(this.gravity, a.gravity), this.frictionGravity = f.length(this.gravity) || 10, this.useWorldGravityAsFrictionGravity = !0, this.useFrictionGravityOnZeroGravity = !0, this.broadphase = a.broadphase || new q, this.broadphase.setWorld(this), this.constraints = [], this.defaultMaterial = new n, this.defaultContactMaterial = new o(this.defaultMaterial, this.defaultMaterial), this.lastTimeStep = 1 / 60, this.applySpringForces = !0, this.applyDamping = !0, this.applyGravity = !0, this.solveConstraints = !0, this.contactMaterials = [], this.time = 0, this.accumulator = 0, this.stepping = !1, this.bodiesToBeRemoved = [], this.islandSplit = "undefined" != typeof a.islandSplit ? !!a.islandSplit : !0, this.emitImpactEvent = !0, this._constraintIdCounter = 0, this._bodyIdCounter = 0, this.postStepEvent = {
                    type: "postStep"
                }, this.addBodyEvent = {
                    type: "addBody",
                    body: null
                }, this.removeBodyEvent = {
                    type: "removeBody",
                    body: null
                }, this.addSpringEvent = {
                    type: "addSpring",
                    spring: null
                }, this.impactEvent = {
                    type: "impact",
                    bodyA: null,
                    bodyB: null,
                    shapeA: null,
                    shapeB: null,
                    contactEquation: null
                }, this.postBroadphaseEvent = {
                    type: "postBroadphase",
                    pairs: null
                }, this.sleepMode = d.NO_SLEEPING, this.beginContactEvent = {
                    type: "beginContact",
                    shapeA: null,
                    shapeB: null,
                    bodyA: null,
                    bodyB: null,
                    contactEquations: []
                }, this.endContactEvent = {
                    type: "endContact",
                    shapeA: null,
                    shapeB: null,
                    bodyA: null,
                    bodyB: null
                }, this.preSolveEvent = {
                    type: "preSolve",
                    contactEquations: null,
                    frictionEquations: null
                }, this.overlappingShapesLastState = {
                    keys: []
                }, this.overlappingShapesCurrentState = {
                    keys: []
                }, this.overlapKeeper = new t
            }
            var e = a("../solver/GSSolver"),
                f = (a("../solver/Solver"), a("../collision/Ray"), a("../math/vec2")),
                g = a("../shapes/Circle"),
                h = a("../shapes/Convex"),
                i = (a("../shapes/Line"), a("../shapes/Plane")),
                j = a("../shapes/Capsule"),
                k = a("../shapes/Particle"),
                l = a("../events/EventEmitter"),
                m = a("../objects/Body"),
                n = (a("../shapes/Shape"), a("../objects/LinearSpring"), a("../material/Material")),
                o = a("../material/ContactMaterial"),
                p = (a("../constraints/DistanceConstraint"), a("../constraints/Constraint"), a("../constraints/LockConstraint"), a("../constraints/RevoluteConstraint"), a("../constraints/PrismaticConstraint"), a("../constraints/GearConstraint"), a("../../package.json"), a("../collision/Broadphase"), a("../collision/AABB")),
                q = a("../collision/SAPBroadphase"),
                r = a("../collision/Narrowphase"),
                s = a("../utils/Utils"),
                t = a("../utils/OverlapKeeper"),
                u = a("./IslandManager");
            a("../objects/RotationalSpring");
            b.exports = d, d.prototype = new Object(l.prototype), d.prototype.constructor = d, d.NO_SLEEPING = 1, d.BODY_SLEEPING = 2, d.ISLAND_SLEEPING = 4, d.prototype.addConstraint = function(a) {
                this.constraints.push(a)
            }, d.prototype.addContactMaterial = function(a) {
                this.contactMaterials.push(a)
            }, d.prototype.removeContactMaterial = function(a) {
                var b = this.contactMaterials.indexOf(a); - 1 !== b && s.splice(this.contactMaterials, b, 1)
            }, d.prototype.getContactMaterial = function(a, b) {
                for (var c = this.contactMaterials, d = 0, e = c.length; d !== e; d++) {
                    var f = c[d];
                    if (f.materialA.id === a.id && f.materialB.id === b.id || f.materialA.id === b.id && f.materialB.id === a.id) return f
                }
                return !1
            }, d.prototype.removeConstraint = function(a) {
                var b = this.constraints.indexOf(a); - 1 !== b && s.splice(this.constraints, b, 1)
            };
            var v = (f.create(), f.create(), f.create(), f.create(), f.create(), f.create(), f.create()),
                w = f.fromValues(0, 0),
                x = f.fromValues(0, 0);
            f.fromValues(0, 0), f.fromValues(0, 0);
            d.prototype.step = function(a, b, c) {
                if (c = c || 10, b = b || 0, 0 === b) this.internalStep(a), this.time += a;
                else {
                    this.accumulator += b;
                    for (var d = 0; this.accumulator >= a && c > d;) this.internalStep(a), this.time += a, this.accumulator -= a, d++;
                    for (var e = this.accumulator % a / a, g = 0; g !== this.bodies.length; g++) {
                        var h = this.bodies[g];
                        f.lerp(h.interpolatedPosition, h.previousPosition, h.position, e), h.interpolatedAngle = h.previousAngle + e * (h.angle - h.previousAngle)
                    }
                }
            };
            var y = [];
            d.prototype.internalStep = function(a) {
                this.stepping = !0;
                var b = this.springs.length,
                    c = this.springs,
                    e = this.bodies,
                    g = this.gravity,
                    h = this.solver,
                    i = this.bodies.length,
                    j = this.broadphase,
                    k = this.narrowphase,
                    l = this.constraints,
                    n = v,
                    o = (f.scale, f.add),
                    p = (f.rotate, this.islandManager);
                if (this.overlapKeeper.tick(), this.lastTimeStep = a, this.useWorldGravityAsFrictionGravity) {
                    var q = f.length(this.gravity);
                    0 === q && this.useFrictionGravityOnZeroGravity || (this.frictionGravity = q)
                }
                if (this.applyGravity)
                    for (var r = 0; r !== i; r++) {
                        var t = e[r],
                            u = t.force;
                        t.type === m.DYNAMIC && t.sleepState !== m.SLEEPING && (f.scale(n, g, t.mass * t.gravityScale), o(u, u, n))
                    }
                if (this.applySpringForces)
                    for (var r = 0; r !== b; r++) {
                        var w = c[r];
                        w.applyForce()
                    }
                if (this.applyDamping)
                    for (var r = 0; r !== i; r++) {
                        var t = e[r];
                        t.type === m.DYNAMIC && t.applyDamping(a)
                    }
                for (var x = j.getCollisionPairs(this), z = this.disabledBodyCollisionPairs, r = z.length - 2; r >= 0; r -= 2)
                    for (var A = x.length - 2; A >= 0; A -= 2)(z[r] === x[A] && z[r + 1] === x[A + 1] || z[r + 1] === x[A] && z[r] === x[A + 1]) && x.splice(A, 2);
                var B = l.length;
                for (r = 0; r !== B; r++) {
                    var C = l[r];
                    if (!C.collideConnected)
                        for (var A = x.length - 2; A >= 0; A -= 2)(C.bodyA === x[A] && C.bodyB === x[A + 1] || C.bodyB === x[A] && C.bodyA === x[A + 1]) && x.splice(A, 2)
                }
                this.postBroadphaseEvent.pairs = x, this.emit(this.postBroadphaseEvent), this.postBroadphaseEvent.pairs = null, k.reset(this);
                for (var r = 0, D = x.length; r !== D; r += 2)
                    for (var E = x[r], F = x[r + 1], G = 0, H = E.shapes.length; G !== H; G++)
                        for (var I = E.shapes[G], J = I.position, K = I.angle, L = 0, M = F.shapes.length; L !== M; L++) {
                            var N = F.shapes[L],
                                O = N.position,
                                P = N.angle,
                                Q = this.defaultContactMaterial;
                            if (I.material && N.material) {
                                var R = this.getContactMaterial(I.material, N.material);
                                R && (Q = R)
                            }
                            this.runNarrowphase(k, E, I, J, K, F, N, O, P, Q, this.frictionGravity)
                        }
                for (var r = 0; r !== i; r++) {
                    var S = e[r];
                    S._wakeUpAfterNarrowphase && (S.wakeUp(), S._wakeUpAfterNarrowphase = !1)
                }
                if (this.has("endContact")) {
                    this.overlapKeeper.getEndOverlaps(y);
                    for (var T = this.endContactEvent, L = y.length; L--;) {
                        var U = y[L];
                        T.shapeA = U.shapeA, T.shapeB = U.shapeB, T.bodyA = U.bodyA, T.bodyB = U.bodyB, this.emit(T)
                    }
                    y.length = 0
                }
                var V = this.preSolveEvent;
                V.contactEquations = k.contactEquations, V.frictionEquations = k.frictionEquations, this.emit(V), V.contactEquations = V.frictionEquations = null;
                var B = l.length;
                for (r = 0; r !== B; r++) l[r].update();
                if (k.contactEquations.length || k.frictionEquations.length || B)
                    if (this.islandSplit) {
                        for (p.equations.length = 0, s.appendArray(p.equations, k.contactEquations), s.appendArray(p.equations, k.frictionEquations), r = 0; r !== B; r++) s.appendArray(p.equations, l[r].equations);
                        p.split(this);
                        for (var r = 0; r !== p.islands.length; r++) {
                            var W = p.islands[r];
                            W.equations.length && h.solveIsland(a, W)
                        }
                    } else {
                        for (h.addEquations(k.contactEquations), h.addEquations(k.frictionEquations), r = 0; r !== B; r++) h.addEquations(l[r].equations);
                        this.solveConstraints && h.solve(a, this), h.removeAllEquations()
                    }
                for (var r = 0; r !== i; r++) {
                    var S = e[r];
                    S.integrate(a)
                }
                for (var r = 0; r !== i; r++) e[r].setZeroForce();
                if (this.emitImpactEvent && this.has("impact"))
                    for (var X = this.impactEvent, r = 0; r !== k.contactEquations.length; r++) {
                        var Y = k.contactEquations[r];
                        Y.firstImpact && (X.bodyA = Y.bodyA, X.bodyB = Y.bodyB, X.shapeA = Y.shapeA, X.shapeB = Y.shapeB, X.contactEquation = Y, this.emit(X))
                    }
                if (this.sleepMode === d.BODY_SLEEPING)
                    for (r = 0; r !== i; r++) e[r].sleepTick(this.time, !1, a);
                else if (this.sleepMode === d.ISLAND_SLEEPING && this.islandSplit) {
                    for (r = 0; r !== i; r++) e[r].sleepTick(this.time, !0, a);
                    for (var r = 0; r < this.islandManager.islands.length; r++) {
                        var W = this.islandManager.islands[r];
                        W.wantsToSleep() && W.sleep()
                    }
                }
                this.stepping = !1;
                for (var Z = this.bodiesToBeRemoved, r = 0; r !== Z.length; r++) this.removeBody(Z[r]);
                Z.length = 0, this.emit(this.postStepEvent)
            }, d.prototype.runNarrowphase = function(a, b, c, d, e, g, h, i, j, k, l) {
                if (0 !== (c.collisionGroup & h.collisionMask) && 0 !== (h.collisionGroup & c.collisionMask)) {
                    f.rotate(w, d, b.angle), f.rotate(x, i, g.angle), f.add(w, w, b.position), f.add(x, x, g.position);
                    var n = e + b.angle,
                        o = j + g.angle;
                    a.enableFriction = k.friction > 0, a.frictionCoefficient = k.friction;
                    var p;
                    p = b.type === m.STATIC || b.type === m.KINEMATIC ? g.mass : g.type === m.STATIC || g.type === m.KINEMATIC ? b.mass : b.mass * g.mass / (b.mass + g.mass), a.slipForce = k.friction * l * p, a.restitution = k.restitution, a.surfaceVelocity = k.surfaceVelocity, a.frictionStiffness = k.frictionStiffness, a.frictionRelaxation = k.frictionRelaxation, a.stiffness = k.stiffness, a.relaxation = k.relaxation, a.contactSkinSize = k.contactSkinSize, a.enabledEquations = b.collisionResponse && g.collisionResponse && c.collisionResponse && h.collisionResponse;
                    var q = a[c.type | h.type],
                        r = 0;
                    if (q) {
                        var s = c.sensor || h.sensor,
                            t = a.frictionEquations.length;
                        r = c.type < h.type ? q.call(a, b, c, w, n, g, h, x, o, s) : q.call(a, g, h, x, o, b, c, w, n, s);
                        var u = a.frictionEquations.length - t;
                        if (r) {
                            if (b.allowSleep && b.type === m.DYNAMIC && b.sleepState === m.SLEEPING && g.sleepState === m.AWAKE && g.type !== m.STATIC) {
                                var v = f.squaredLength(g.velocity) + Math.pow(g.angularVelocity, 2),
                                    y = Math.pow(g.sleepSpeedLimit, 2);
                                v >= 2 * y && (b._wakeUpAfterNarrowphase = !0)
                            }
                            if (g.allowSleep && g.type === m.DYNAMIC && g.sleepState === m.SLEEPING && b.sleepState === m.AWAKE && b.type !== m.STATIC) {
                                var z = f.squaredLength(b.velocity) + Math.pow(b.angularVelocity, 2),
                                    A = Math.pow(b.sleepSpeedLimit, 2);
                                z >= 2 * A && (g._wakeUpAfterNarrowphase = !0)
                            }
                            if (this.overlapKeeper.setOverlapping(b, c, g, h), this.has("beginContact") && this.overlapKeeper.isNewOverlap(c, h)) {
                                var B = this.beginContactEvent;
                                if (B.shapeA = c, B.shapeB = h, B.bodyA = b, B.bodyB = g, B.contactEquations.length = 0, "number" == typeof r)
                                    for (var C = a.contactEquations.length - r; C < a.contactEquations.length; C++) B.contactEquations.push(a.contactEquations[C]);
                                this.emit(B)
                            }
                            if ("number" == typeof r && u > 1)
                                for (var C = a.frictionEquations.length - u; C < a.frictionEquations.length; C++) {
                                    var D = a.frictionEquations[C];
                                    D.setSlipForce(D.getSlipForce() / u)
                                }
                        }
                    }
                }
            }, d.prototype.addSpring = function(a) {
                this.springs.push(a);
                var b = this.addSpringEvent;
                b.spring = a, this.emit(b), b.spring = null
            }, d.prototype.removeSpring = function(a) {
                var b = this.springs.indexOf(a); - 1 !== b && s.splice(this.springs, b, 1)
            }, d.prototype.addBody = function(a) {
                if (-1 === this.bodies.indexOf(a)) {
                    this.bodies.push(a), a.world = this;
                    var b = this.addBodyEvent;
                    b.body = a, this.emit(b), b.body = null
                }
            }, d.prototype.removeBody = function(a) {
                if (this.stepping) this.bodiesToBeRemoved.push(a);
                else {
                    a.world = null;
                    var b = this.bodies.indexOf(a); - 1 !== b && (s.splice(this.bodies, b, 1), this.removeBodyEvent.body = a, a.resetConstraintVelocity(), this.emit(this.removeBodyEvent), this.removeBodyEvent.body = null)
                }
            }, d.prototype.getBodyById = function(a) {
                for (var b = this.bodies, c = 0; c < b.length; c++) {
                    var d = b[c];
                    if (d.id === a) return d
                }
                return !1
            }, d.prototype.disableBodyCollision = function(a, b) {
                this.disabledBodyCollisionPairs.push(a, b)
            }, d.prototype.enableBodyCollision = function(a, b) {
                for (var c = this.disabledBodyCollisionPairs, d = 0; d < c.length; d += 2)
                    if (c[d] === a && c[d + 1] === b || c[d + 1] === a && c[d] === b) return void c.splice(d, 2)
            }, d.prototype.clear = function() {
                this.time = 0, this.solver && this.solver.equations.length && this.solver.removeAllEquations();
                for (var a = this.constraints, b = a.length - 1; b >= 0; b--) this.removeConstraint(a[b]);
                for (var c = this.bodies, b = c.length - 1; b >= 0; b--) this.removeBody(c[b]);
                for (var e = this.springs, b = e.length - 1; b >= 0; b--) this.removeSpring(e[b]);
                for (var f = this.contactMaterials, b = f.length - 1; b >= 0; b--) this.removeContactMaterial(f[b]);
                d.apply(this)
            };
            var z = f.create(),
                A = (f.fromValues(0, 0), f.fromValues(0, 0));
            d.prototype.hitTest = function(a, b, c) {
                c = c || 0;
                var d = new m({
                        position: a
                    }),
                    e = new k,
                    l = a,
                    n = 0,
                    o = z,
                    p = A;
                d.addShape(e);
                for (var q = this.narrowphase, r = [], s = 0, t = b.length; s !== t; s++)
                    for (var u = b[s], v = 0, w = u.shapes.length; v !== w; v++) {
                        var x = u.shapes[v];
                        f.rotate(o, x.position, u.angle), f.add(o, o, u.position);
                        var y = x.angle + u.angle;
                        (x instanceof g && q.circleParticle(u, x, o, y, d, e, l, n, !0) || x instanceof h && q.particleConvex(d, e, l, n, u, x, o, y, !0) || x instanceof i && q.particlePlane(d, e, l, n, u, x, o, y, !0) || x instanceof j && q.particleCapsule(d, e, l, n, u, x, o, y, !0) || x instanceof k && f.squaredLength(f.sub(p, o, a)) < c * c) && r.push(u)
                    }
                return r
            }, d.prototype.setGlobalStiffness = function(a) {
                for (var b = this.constraints, c = 0; c !== b.length; c++)
                    for (var d = b[c], e = 0; e !== d.equations.length; e++) {
                        var f = d.equations[e];
                        f.stiffness = a, f.needsUpdate = !0
                    }
                for (var g = this.contactMaterials, c = 0; c !== g.length; c++) {
                    var d = g[c];
                    d.stiffness = d.frictionStiffness = a
                }
                var d = this.defaultContactMaterial;
                d.stiffness = d.frictionStiffness = a
            }, d.prototype.setGlobalRelaxation = function(a) {
                for (var b = 0; b !== this.constraints.length; b++)
                    for (var c = this.constraints[b], d = 0; d !== c.equations.length; d++) {
                        var e = c.equations[d];
                        e.relaxation = a, e.needsUpdate = !0
                    }
                for (var b = 0; b !== this.contactMaterials.length; b++) {
                    var c = this.contactMaterials[b];
                    c.relaxation = c.frictionRelaxation = a
                }
                var c = this.defaultContactMaterial;
                c.relaxation = c.frictionRelaxation = a
            };
            var B = new p,
                C = [];
            d.prototype.raycast = function(a, b) {
                return b.getAABB(B), this.broadphase.aabbQuery(this, B, C), b.intersectBodies(a, C), C.length = 0, a.hasHit()
            }
        }, {
            "../../package.json": 6,
            "../collision/AABB": 7,
            "../collision/Broadphase": 8,
            "../collision/Narrowphase": 10,
            "../collision/Ray": 11,
            "../collision/SAPBroadphase": 13,
            "../constraints/Constraint": 14,
            "../constraints/DistanceConstraint": 15,
            "../constraints/GearConstraint": 16,
            "../constraints/LockConstraint": 17,
            "../constraints/PrismaticConstraint": 18,
            "../constraints/RevoluteConstraint": 19,
            "../events/EventEmitter": 26,
            "../material/ContactMaterial": 27,
            "../material/Material": 28,
            "../math/vec2": 30,
            "../objects/Body": 31,
            "../objects/LinearSpring": 32,
            "../objects/RotationalSpring": 33,
            "../shapes/Capsule": 38,
            "../shapes/Circle": 39,
            "../shapes/Convex": 40,
            "../shapes/Line": 42,
            "../shapes/Particle": 43,
            "../shapes/Plane": 44,
            "../shapes/Shape": 45,
            "../solver/GSSolver": 46,
            "../solver/Solver": 47,
            "../utils/OverlapKeeper": 52,
            "../utils/Utils": 57,
            "./IslandManager": 59
        }]
    }, {}, [36])(36)
});

var P2World = pc.createScript("p2World");
P2World.attributes.add("gravity", {
    type: "vec2",
    default: [0, -9.8],
    title: "Gravity",
    description: "Gravity to use when approximating the friction max force."
}), P2World.attributes.add("axes", {
    type: "number",
    enum: [{
        XY: 1
    }, {
        XZ: 2
    }, {
        YZ: 3
    }],
    default: 1,
    title: "Axes",
    description: "The axes on which the simulation is run."
}), P2World.attributes.add("defaultFriction", {
    type: "number",
    default: .3,
    title: "Default Friction",
    description: "The default global friction."
}), P2World.attributes.add("fixedTimeStep", {
    type: "number",
    default: .016667,
    title: "Fixed timestep",
    description: "Fixed timestep"
}), P2World.attributes.add("maxSubSteps", {
    type: "number",
    default: 10,
    title: "Max Substeps",
    description: "Maximum number of fixed steps to take when stepping the simulation."
}), P2World.attributes.add("solverIterations", {
    type: "number",
    default: 10,
    title: "Solver Iterations",
    description: "The maximum number of iterations to do when solving. More gives better results, but is more expensive."
}), P2World.attributes.add("solverTolerance", {
    type: "number",
    default: 0,
    title: "Solver Tolerance",
    description: "The error tolerance, per constraint. If the total error is below this limit, the solver will stop iterating. Set to zero for as good solution as possible, but to something larger than zero to make computations faster."
}), P2World.attributes.add("sleepMode", {
    type: "number",
    enum: [{
        "No Sleeping": 0
    }, {
        "Body Sleeping": 1
    }, {
        "Island Sleeping": 2
    }],
    default: 0,
    title: "Sleep Mode",
    description: 'How to deactivate bodies during simulation. Possible modes are: "No Sleeping", "Body Sleeping" and "Island Sleeping". If sleeping is enabled, you might need to wake up the bodies if they fall asleep. If you want to enable sleeping in the world, but want to disable it for a particular body, see p2Body.allowSleep.'
}), P2World.attributes.add("islandSplit", {
    type: "boolean",
    default: !0,
    title: "Island Split",
    description: "Whether to enable island splitting. Island splitting can be an advantage for both precision and performance."
}), P2World.attributes.add("debugDraw", {
    type: "boolean",
    default: !1,
    title: "Debug Draw",
    description: "Render a visual representation of the physics world in the running app."
}), P2World.prototype.initialize = function() {
    var t = [p2.World.NO_SLEEPING, p2.World.BODY_SLEEPING, p2.World.ISLAND_SLEEPING],
        i = new p2.World({
            gravity: [this.gravity.x, this.gravity.y],
            islandSplit: this.islandSplit
        });
    i.sleepMode = t[this.sleepMode], i.solver.iterations = this.solverIterations, i.solver.tolerance = this.solverTolerance, i.defaultContactMaterial.friction = this.defaultFriction, this.on("attr:defaultFriction", function(t, e) {
        i.defaultContactMaterial.friction = t
    }), this.on("attr:gravity", function(t, e) {
        i.gravity[0] = t.x, i.gravity[1] = t.y
    }), this.on("attr:islandSplit", function(t, e) {
        i.islandSplit = t
    }), this.on("attr:sleepMode", function(e, o) {
        i.sleepMode = t[e]
    }), this.on("attr:solverIterations", function(t, e) {
        i.solver.iterations = Math.round(t)
    }), this.on("attr:solverTolerance", function(t, e) {
        i.solver.tolerance = t
    });
    var e = this;
    this.app.on("p2:getPosition", function(t, i) {
        var o = t.getPosition();
        switch (e.axes) {
            case 1:
                [o.x, o.y];
                break;
            case 2:
                [o.x, -o.z];
                break;
            case 3:
                [-o.z, o.y]
        }
    }), this.app.on("p2:addBody", function(t) {
        var o = t.entity.getPosition();
        switch (e.axes) {
            case 1:
                t.position = [o.x, o.y];
                break;
            case 2:
                t.position = [o.x, -o.z];
                break;
            case 3:
                t.position = [-o.z, o.y]
        }
        i.addBody(t)
    }), this.app.on("p2:removeBody", function(t) {
        i.removeBody(t)
    }), i.on("postStep", function(t) {
        e.app.fire("p2:postStep")
    }), this.world = i, World = i
}, P2World.prototype.postUpdate = function(t) {
    var i, e, o, n, s, a;
    if (!Game.pause)
        for (n = (o = this.world.bodies).length, this.world.step(this.fixedTimeStep, t, this.maxSubSteps), i = 0; i < n; i++)(e = o[i]).type !== p2.Body.DYNAMIC && e.type !== p2.Body.KINEMATIC || (a = (s = e.entity).getPosition(), s.setPosition(e.position[0], a.y, -e.position[1]))
};
var P2Material = pc.createScript("p2Material");
P2Material.attributes.add("friction", {
    type: "number",
    default: .55,
    min: 0,
    max: 1,
    title: "Friction",
    description: "The friction coefficient for this material."
}), P2Material.attributes.add("restitution", {
    type: "number",
    default: .55,
    min: 0,
    max: 1,
    title: "Restitution",
    description: "The restitution for this material, defining its bounciness."
}), P2Material.attributes.add("surfaceVelocity", {
    type: "number",
    default: 0,
    title: "Surface Velocity",
    description: ""
}), P2Material.materialDefs = [], P2Material.prototype.updateMaterial = function() {
    var t, i, e;
    for ((e = P2Material.materialDefs).length, t = 0; t < numMaterials; t++)
        if ((i = e[t]).friction === this.friction && i.restitution === this.restitution) return void(this.material = i.material);
    e.push({})
}, P2Material.prototype.initialize = function() {
    this.on("attr", function(t, i, e) {
        this.updateMaterial()
    })
};
var P2Box = pc.createScript("p2Box");
P2Box.attributes.add("width", {
    type: "number",
    default: 1,
    title: "Width",
    description: "Total width of the box."
}), P2Box.attributes.add("height", {
    type: "number",
    default: 1,
    title: "Height",
    description: "Total height of the box."
}), P2Box.attributes.add("angle", {
    type: "number",
    default: 0,
    title: "Angle",
    description: "Body-local angle of the shape in degrees.",
    placeholder: "degrees"
}), P2Box.attributes.add("position", {
    type: "vec2",
    default: [0, 0],
    title: "Position",
    description: "Body-local position of the shape.",
    placeholder: ["x", "y"]
}), P2Box.attributes.add("collisionGroup", {
    type: "string",
    default: "00000001",
    title: "Collision Group",
    description: "Collision group that this shape belongs to (bit mask)."
}), P2Box.attributes.add("collisionMask", {
    type: "string",
    default: "00000001",
    title: "Collision Mask",
    description: "Collision mask of this shape. See collisionGroup."
}), P2Box.attributes.add("sensor", {
    type: "boolean",
    default: !1,
    title: "Sensor",
    description: "Set to true if you want this shape to be a sensor. A sensor does not generate contacts, but it still reports contact events. This is good if you want to know if a shape is overlapping another shape, without them generating contacts."
}), P2Box.prototype.initialize = function() {
    if (this.shape = new p2.Box({
            angle: this.angle,
            collisionGroup: parseInt(this.collisionGroup, 2),
            collisionMask: parseInt(this.collisionMask, 2),
            height: this.height,
            position: [this.position.x, this.position.y],
            sensor: this.sensor,
            width: this.width
        }), this.on("attr:angle", function(t, i) {
            this.shape.angle = t * Math.PI / 180
        }), this.on("attr:collisionGroup", function(t, i) {
            this.shape.collisionGroup = parseInt(t, 2)
        }), this.on("attr:collisionMask", function(t, i) {
            this.shape.collisionMask = parseInt(t, 2)
        }), this.on("attr:height", function(t, i) {
            this.shape.height = t
        }), this.on("attr:position", function(t, i) {
            this.shape.position[0] = t.x, this.shape.position[1] = t.y
        }), this.on("attr:sensor", function(t, i) {
            this.shape.sensor = t
        }), this.on("attr:width", function(t, i) {
            this.shape.width = t
        }), this.entity.script.p2Body) {
        var t = this.entity.script.p2Body.body;
        t && t.addShape(this.shape)
    }
    this.on("enable", function() {
        if (this.entity.script.p2Body) {
            var t = this.entity.script.p2Body.body;
            t && t.addShape(this.shape)
        }
    }), this.on("disable", function() {
        if (this.entity.script.p2Body) {
            var t = this.entity.script.p2Body.body;
            t && t.removeShape(this.shape)
        }
    })
};
var P2Circle = pc.createScript("p2Circle");
P2Circle.attributes.add("radius", {
    type: "number",
    default: 1,
    title: "Radius",
    description: "Radius of the circle."
}), P2Circle.attributes.add("angle", {
    type: "number",
    default: 0,
    title: "Angle",
    description: "Body-local angle of the shape in degrees.",
    placeholder: "degrees"
}), P2Circle.attributes.add("position", {
    type: "vec2",
    default: [0, 0],
    title: "Position",
    description: "Body-local position of the shape."
}), P2Circle.attributes.add("collisionGroup", {
    type: "string",
    default: "00000001",
    title: "Collision Group",
    description: "Collision group that this shape belongs to (bit mask)."
}), P2Circle.attributes.add("collisionMask", {
    type: "string",
    default: "00000001",
    title: "Collision Mask",
    description: "Collision mask of this shape. See .collisionGroup."
}), P2Circle.attributes.add("sensor", {
    type: "boolean",
    default: !1,
    title: "Sensor",
    description: "Set to true if you want this shape to be a sensor. A sensor does not generate contacts, but it still reports contact events. This is good if you want to know if a shape is overlapping another shape, without them generating contacts."
}), P2Circle.prototype.initialize = function() {
    if (this.shape = new p2.Circle({
            angle: this.angle,
            collisionGroup: parseInt(this.collisionGroup, 2),
            collisionMask: parseInt(this.collisionMask, 2),
            position: [this.position.x, this.position.y],
            radius: this.radius,
            sensor: this.sensor
        }), this.on("attr:angle", function(t, i) {
            this.shape.angle = t * Math.PI / 180
        }), this.on("attr:collisionGroup", function(t, i) {
            this.shape.collisionGroup = parseInt(t, 2)
        }), this.on("attr:collisionMask", function(t, i) {
            this.shape.collisionMask = parseInt(t, 2)
        }), this.on("attr:position", function(t, i) {
            this.shape.position[0] = t.x, this.shape.position[1] = t.y
        }), this.on("attr:radius", function(t, i) {
            this.shape.radius = t
        }), this.on("attr:sensor", function(t, i) {
            this.shape.sensor = t
        }), null !== this.shape.body && this.entity.script.p2Body) {
        var t = this.entity.script.p2Body.body;
        t && t.addShape(this.shape)
    }
    this.on("enable", function() {
        if (this.entity.script.p2Body) {
            var t = this.entity.script.p2Body.body;
            t && t.addShape(this.shape)
        }
    }), this.on("disable", function() {
        if (this.entity.script.p2Body) {
            var t = this.entity.script.p2Body.body;
            t && t.removeShape(this.shape)
        }
    })
};
var P2Capsule = pc.createScript("p2Capsule");
P2Capsule.attributes.add("radius", {
    type: "number",
    default: 1,
    title: "Radius",
    description: "The radius of the capsule."
}), P2Capsule.attributes.add("length", {
    type: "number",
    default: 1,
    title: "Length",
    description: "The distance between the end points."
}), P2Capsule.attributes.add("angle", {
    type: "number",
    default: 0,
    title: "Angle",
    description: "Body-local angle of the shape in degrees.",
    placeholder: "degrees"
}), P2Capsule.attributes.add("position", {
    type: "vec2",
    default: [0, 0],
    title: "Position",
    description: "Body-local position of the shape."
}), P2Capsule.attributes.add("collisionGroup", {
    type: "string",
    default: "00000001",
    title: "Collision Group",
    description: "Collision group that this shape belongs to (bit mask)."
}), P2Capsule.attributes.add("collisionMask", {
    type: "string",
    default: "00000001",
    title: "Collision Mask",
    description: "Collision mask of this shape. See .collisionGroup."
}), P2Capsule.attributes.add("sensor", {
    type: "boolean",
    default: !1,
    title: "Sensor",
    description: "Set to true if you want this shape to be a sensor. A sensor does not generate contacts, but it still reports contact events. This is good if you want to know if a shape is overlapping another shape, without them generating contacts."
}), P2Capsule.prototype.initialize = function() {
    if (this.shape = new p2.Capsule({
            angle: this.angle,
            collisionGroup: parseInt(this.collisionGroup, 2),
            collisionMask: parseInt(this.collisionMask, 2),
            length: this.length,
            position: [this.position.x, this.position.y],
            radius: this.radius,
            sensor: this.sensor
        }), this.on("attr:angle", function(t, i) {
            this.shape.angle = t * Math.PI / 180
        }), this.on("attr:collisionGroup", function(t, i) {
            this.shape.collisionGroup = parseInt(t, 2)
        }), this.on("attr:collisionMask", function(t, i) {
            this.shape.collisionMask = parseInt(t, 2)
        }), this.on("attr:length", function(t, i) {
            this.shape.length = t
        }), this.on("attr:position", function(t, i) {
            this.shape.position[0] = t.x, this.shape.position[1] = t.y
        }), this.on("attr:radius", function(t, i) {
            this.shape.radius = t
        }), this.on("attr:sensor", function(t, i) {
            this.shape.sensor = t
        }), null !== this.shape.body && this.entity.script.p2Body) {
        var t = this.entity.script.p2Body.body;
        t && t.addShape(this.shape)
    }
    this.on("enable", function() {
        if (this.entity.script.p2Body) {
            var t = this.entity.script.p2Body.body;
            t && t.addShape(this.shape)
        }
    }), this.on("disable", function() {
        if (this.entity.script.p2Body) {
            var t = this.entity.script.p2Body.body;
            t && t.removeShape(this.shape)
        }
    })
};
var P2Plane = pc.createScript("p2Plane");
P2Plane.attributes.add("angle", {
    type: "number",
    default: 0,
    title: "Angle",
    description: "Body-local angle of the shape in degrees."
}), P2Plane.attributes.add("position", {
    type: "vec2",
    default: [0, 0],
    title: "Position",
    description: "Body-local position of the shape."
}), P2Plane.attributes.add("collisionGroup", {
    type: "string",
    default: "00000001",
    title: "Collision Group",
    description: "Collision group that this shape belongs to (bit mask)."
}), P2Plane.attributes.add("collisionMask", {
    type: "string",
    default: "00000001",
    title: "Collision Mask",
    description: "Collision mask of this shape. See .collisionGroup."
}), P2Plane.attributes.add("sensor", {
    type: "boolean",
    default: !1,
    title: "Sensor",
    description: "Set to true if you want this shape to be a sensor. A sensor does not generate contacts, but it still reports contact events. This is good if you want to know if a shape is overlapping another shape, without them generating contacts."
}), P2Plane.prototype.initialize = function() {
    if (this.shape = new p2.Plane({
            angle: this.angle,
            collisionGroup: parseInt(this.collisionGroup, 2),
            collisionMask: parseInt(this.collisionMask, 2),
            position: [this.position.x, this.position.y],
            sensor: this.sensor
        }), this.on("attr:angle", function(t, i) {
            this.shape.angle = t * Math.PI / 180
        }), this.on("attr:collisionGroup", function(t, i) {
            this.shape.collisionGroup = parseInt(t, 2)
        }), this.on("attr:collisionMask", function(t, i) {
            this.shape.collisionMask = parseInt(t, 2)
        }), this.on("attr:position", function(t, i) {
            this.shape.position[0] = t.x, this.shape.position[1] = t.y
        }), this.on("attr:sensor", function(t, i) {
            this.shape.sensor = t
        }), this.entity.script.p2Body) {
        var t = this.entity.script.p2Body.body;
        t && t.addShape(this.shape)
    }
    this.on("enable", function() {
        if (this.entity.script.p2Body) {
            var t = this.entity.script.p2Body.body;
            t && t.addShape(this.shape)
        }
    }), this.on("disable", function() {
        if (this.entity.script.p2Body) {
            var t = this.entity.script.p2Body.body;
            t && t.removeShape(this.shape)
        }
    })
};
var P2Body = pc.createScript("p2Body");
P2Body.attributes.add("type", {
    type: "number",
    enum: [{
        Static: 0
    }, {
        Dynamic: 1
    }, {
        Kinematic: 2
    }],
    default: 1,
    title: "Type",
    description: "The type of motion this body has. Should be one of: 0 (Static), 1 (Dynamic) and 2 (Kinematic). Static bodies do not move, and they do not respond to forces or collision. Dynamic bodies body can move and respond to collisions and forces. Kinematic bodies only moves according to its velocity, and does not respond to collisions or force."
}), P2Body.attributes.add("mass", {
    type: "number",
    default: 1,
    title: "Mass",
    description: "The mass of the body."
}), P2Body.attributes.add("velocity", {
    type: "vec2",
    default: [0, 0],
    title: "Velocity",
    description: "The current velocity of the body."
}), P2Body.attributes.add("angularVelocity", {
    type: "number",
    default: 0,
    title: "Angular Velocity",
    description: "The angular velocity of the body, in degrees per second.",
    placeholder: "degrees/s"
}), P2Body.attributes.add("damping", {
    type: "number",
    default: .1,
    min: 0,
    max: 1,
    title: "Damping",
    description: "The linear damping acting on the body in the velocity direction. Should be a value between 0 and 1."
}), P2Body.attributes.add("angularDamping", {
    type: "number",
    min: 0,
    max: 1,
    default: .1,
    title: "Angular Damping",
    description: "The angular damping acting on the body. Should be a value between 0 and 1."
}), P2Body.attributes.add("gravityScale", {
    type: "number",
    default: 1,
    title: "Gravity Scale",
    description: "Gravity scaling factor. If you want the body to ignore gravity, set this to zero. If you want to reverse gravity, set it to -1."
}), P2Body.attributes.add("fixedX", {
    type: "boolean",
    default: !1,
    title: "Fixed X",
    description: "Set to true if you want to fix the body movement along the X axis. The body will still be able to move along Y."
}), P2Body.attributes.add("fixedY", {
    type: "boolean",
    default: !1,
    title: "Fixed Y",
    description: "Set to true if you want to fix the body movement along the Y axis. The body will still be able to move along X."
}), P2Body.attributes.add("fixedRotation", {
    type: "boolean",
    default: !1,
    title: "Fixed Rotation",
    description: "Set to true if you want to fix the rotation of the body."
}), P2Body.attributes.add("allowSleep", {
    type: "boolean",
    default: !0,
    title: "Allow Sleep",
    description: "If true, the body will automatically fall to sleep. Note that you need to enable sleeping in the p2World before anything will happen."
}), P2Body.attributes.add("sleepSpeedLimit", {
    type: "number",
    default: .2,
    title: "Sleep Speed Limit",
    description: "If the speed (the norm of the velocity) is smaller than this value, the body is considered sleepy."
}), P2Body.attributes.add("sleepTimeLimit", {
    type: "number",
    default: 1,
    title: "Sleep Time Limit",
    description: "If the body has been sleepy for this sleepTimeLimit seconds, it is considered sleeping.",
    placeholder: "seconds"
}), P2Body.attributes.add("collisionResponse", {
    type: "boolean",
    default: !0,
    title: "Collision Response",
    description: "Whether to produce contact forces when in contact with other bodies. Note that contacts will be generated, but they will be disabled. That means that this body will move through other bodies, but it will still trigger contact events, etc."
}), Object.defineProperty(P2Body.prototype, "angularForce", {
    get: function() {
        return this.body ? this.body.angularForce : 0
    },
    set: function(t) {
        this.body.angularForce = t
    }
}), P2Body.prototype.postInitialize = function() {
    var t = [p2.Body.STATIC, p2.Body.DYNAMIC, p2.Body.KINEMATIC];
    this.app.fire("p2:getPosition", this.entity, [0, 0]);
    var i, e = t[this.type];
    this.body = new p2.Body({
        allowSleep: this.allowSleep,
        angularVelocity: this.angularVelocity,
        angle: 0,
        collisionResponse: this.collisionResponse,
        gravityScale: this.gravityScale,
        mass: e === p2.Body.STATIC ? 0 : this.mass,
        type: e,
        velocity: [this.velocity.x, this.velocity.y]
    }), this.body.fixedX = this.fixedX, this.body.fixedY = this.fixedY, this.body.fixedRotation = this.fixedRotation, this.body.entity = this.entity, this.on("attr:allowSleep", function(t, i) {
        this.body.allowSleep = t
    }), this.on("attr:angularDamping", function(t, i) {
        this.body.angularDamping = t
    }), this.on("attr:collisionResponse", function(t, i) {
        this.body.collisionResponse = t
    }), this.on("attr:damping", function(t, i) {
        this.body.damping = t
    }), this.on("attr:fixedX", function(t, i) {
        this.body.fixedX = t
    }), this.on("attr:fixedY", function(t, i) {
        this.body.fixedY = t
    }), this.on("attr:fixedRotation", function(t, i) {
        this.body.fixedRotation = t
    }), this.on("attr:gravityScale", function(t, i) {
        this.body.gravityScale = t
    }), this.on("attr:mass", function(t, i) {
        this.body.mass = t, this.body.updateMassProperties()
    }), this.on("attr:type", function(i, e) {
        this.body.type = t[i]
    }), this.entity.script.p2Box && (i = this.entity.script.p2Box.shape), this.entity.script.p2Capsule && (i = this.entity.script.p2Capsule.shape), this.entity.script.p2Circle && (i = this.entity.script.p2Circle.shape), this.entity.script.p2Plane && (i = this.entity.script.p2Plane.shape), i && this.body.addShape(i), this.app.fire("p2:addBody", this.body), this.on("enable", function() {
        this.app.fire("p2:addBody", this.body)
    }), this.on("disable", function() {
        this.app.fire("p2:removeBody", this.body)
    }), this.entity.fire("p2:newBody", this.body)
};
var P2DistanceConstraint = pc.createScript("p2DistanceConstraint");
P2DistanceConstraint.attributes.add("entityA", {
    type: "entity",
    title: "Entity A",
    description: "First entity with body participating in the constraint."
}), P2DistanceConstraint.attributes.add("localAnchorA", {
    type: "vec2",
    default: [0, 0],
    title: "Local Anchor A",
    description: "Local anchor in body A specified in local body coordinates."
}), P2DistanceConstraint.attributes.add("entityB", {
    type: "entity",
    title: "Entity B",
    description: "Second entity with body participating in the constraint."
}), P2DistanceConstraint.attributes.add("localAnchorB", {
    type: "vec2",
    default: [0, 0],
    title: "Local Anchor B",
    description: "Local anchor in body B specified in local body coordinates."
}), P2DistanceConstraint.attributes.add("collideConnected", {
    type: "boolean",
    default: !0,
    title: "Collide Connected",
    description: "Set to true if you want the connected bodies to collide."
}), P2DistanceConstraint.attributes.add("stiffness", {
    type: "number",
    default: 1e6,
    title: "Stiffness",
    description: "Set stiffness for this constraint."
}), P2DistanceConstraint.attributes.add("relaxation", {
    type: "number",
    default: 4,
    title: "Relaxation",
    description: "Set relaxation for this constraint."
}), P2DistanceConstraint.prototype.createConstraint = function() {
    this.constraint && this.bodyA.world.removeConstraint(this.constraint), this.constraint = new p2.DistanceConstraint(this.bodyA, this.bodyB, {
        collideConnected: this.collideConnected,
        localAnchorA: [this.localAnchorA.x, this.localAnchorA.y],
        localAnchorB: [this.localAnchorB.x, this.localAnchorB.y]
    }), this.constraint.setStiffness(this.stiffness), this.constraint.setRelaxation(this.relaxation), this.bodyA.world.addConstraint(this.constraint)
}, P2DistanceConstraint.prototype.postInitialize = function() {
    this.bodyA = null, this.bodyB = null, this.entityA && this.entityA.script && this.entityA.script.p2Body && (this.bodyA = this.entityA.script.p2Body.body), this.entityB && this.entityB.script && this.entityB.script.p2Body && (this.bodyB = this.entityB.script.p2Body.body), this.bodyA && this.bodyB && this.createConstraint();
    var t = this;
    this.entityA && this.entityA.on("p2:newBody", function(i) {
        t.bodyA = i, t.bodyB && t.createConstraint()
    }), this.entityB && this.entityB.on("p2:newBody", function(i) {
        t.bodyB = i, t.bodyA && t.createConstraint()
    }), this.on("attr:entityA", function(t, i) {
        i.off("p2:newBody"), t.on("p2:newBody", function(t) {
            this.bodyA = t, this.bodyB && this.createConstraint()
        })
    }), this.on("attr:entityB", function(t, i) {
        i.off("p2:newBody"), t.on("p2:newBody", function(t) {
            this.bodyB = t, this.bodyA && this.createConstraint()
        })
    }), this.on("attr:localAnchorA", function(t, i) {
        this.constraint && (this.constraint.localAnchorA[0] = t.x, this.constraint.localAnchorA[1] = t.y)
    }), this.on("attr:localAnchorB", function(t, i) {
        this.constraint && (this.constraint.localAnchorB[0] = t.x, this.constraint.localAnchorB[1] = t.y)
    }), this.on("attr:relaxation", function(t, i) {
        this.constraint && this.constraint.setRelaxation(t)
    }), this.on("attr:stiffness", function(t, i) {
        this.constraint && this.constraint.setStiffness(t)
    })
};
var P2PrismaticConstraint = pc.createScript("p2PrismaticConstraint");
P2PrismaticConstraint.attributes.add("entityA", {
    type: "entity",
    title: "Entity A",
    description: "First entity with body participating in the constraint."
}), P2PrismaticConstraint.attributes.add("localAnchorA", {
    type: "vec2",
    default: [0, 0],
    title: "Local Anchor A",
    description: "Local anchor in body A specified in local body coordinates."
}), P2PrismaticConstraint.attributes.add("entityB", {
    type: "entity",
    title: "Entity B",
    description: "Second entity with body participating in the constraint."
}), P2PrismaticConstraint.attributes.add("localAnchorB", {
    type: "vec2",
    default: [0, 0],
    title: "Local Anchor B",
    description: "Local anchor in body B specified in local body coordinates."
}), P2PrismaticConstraint.attributes.add("localAxisA", {
    type: "vec2",
    default: [1, 0],
    title: "Local Axis A",
    description: "An axis, defined in body A frame, that body B's anchor point may slide along."
}), P2PrismaticConstraint.attributes.add("disableRotationalLock", {
    type: "boolean",
    default: !1,
    title: "Disable Rotational Lock",
    description: "If set to true, body of entityB will be free to rotate around its anchor point."
}), P2PrismaticConstraint.attributes.add("collideConnected", {
    type: "boolean",
    default: !0,
    title: "Collide Connected",
    description: "Set to true if you want the connected bodies to collide."
}), P2PrismaticConstraint.attributes.add("stiffness", {
    type: "number",
    default: 1e6,
    title: "Stiffness",
    description: "Set stiffness for this constraint."
}), P2PrismaticConstraint.attributes.add("relaxation", {
    type: "number",
    default: 4,
    title: "Relaxation",
    description: "Set relaxation for this constraint."
}), P2PrismaticConstraint.prototype.createConstraint = function() {
    this.constraint && this.bodyA.world.removeConstraint(this.constraint), this.constraint = new p2.PrismaticConstraint(this.bodyA, this.bodyB, {
        collideConnected: this.collideConnected,
        disableRotationalLock: this.disableRotationalLock,
        localAnchorA: [this.localAnchorA.x, this.localAnchorA.y],
        localAnchorB: [this.localAnchorB.x, this.localAnchorB.y],
        localAxisA: [this.localAxisA.x, this.localAxisA.y]
    }), this.constraint.setStiffness(this.stiffness), this.constraint.setRelaxation(this.relaxation), this.bodyA.world.addConstraint(this.constraint)
}, P2PrismaticConstraint.prototype.postInitialize = function() {
    this.bodyA = null, this.bodyB = null, this.entityA && this.entityA.script && this.entityA.script.p2Body && (this.bodyA = this.entityA.script.p2Body.body), this.entityB && this.entityB.script && this.entityB.script.p2Body && (this.bodyB = this.entityB.script.p2Body.body), this.bodyA && this.bodyB && this.createConstraint();
    var t = this;
    this.entityA && this.entityA.on("p2:newBody", function(i) {
        t.bodyA = i, t.bodyB && t.createConstraint()
    }), this.entityB && this.entityB.on("p2:newBody", function(i) {
        t.bodyB = i, t.bodyA && t.createConstraint()
    }), this.on("attr:entityA", function(t, i) {
        i.off("p2:newBody"), t.on("p2:newBody", function(t) {
            this.bodyA = t, this.bodyB && this.createConstraint()
        })
    }), this.on("attr:entityB", function(t, i) {
        i.off("p2:newBody"), t.on("p2:newBody", function(t) {
            this.bodyB = t, this.bodyA && this.createConstraint()
        })
    }), this.on("attr:localAnchorA", function(t, i) {
        this.constraint && (this.constraint.localAnchorA[0] = t.x, this.constraint.localAnchorA[1] = t.y)
    }), this.on("attr:localAnchorB", function(t, i) {
        this.constraint && (this.constraint.localAnchorB[0] = t.x, this.constraint.localAnchorB[1] = t.y)
    }), this.on("attr:localAxisA", function(t, i) {
        this.constraint && (this.constraint.localAxisA[0] = t.x, this.constraint.localAxisA[1] = t.y)
    }), this.on("attr:relaxation", function(t, i) {
        this.constraint && this.constraint.setRelaxation(t)
    }), this.on("attr:stiffness", function(t, i) {
        this.constraint && this.constraint.setStiffness(t)
    })
};
var P2RevoluteConstraint = pc.createScript("p2RevoluteConstraint");
P2RevoluteConstraint.attributes.add("entityA", {
    type: "entity",
    title: "Entity A",
    description: "First entity with body participating in the constraint."
}), P2RevoluteConstraint.attributes.add("localPivotA", {
    type: "vec2",
    default: [0, 0],
    title: "Local Pivot A",
    description: "Local pivot in body A specified in local body coordinates."
}), P2RevoluteConstraint.attributes.add("entityB", {
    type: "entity",
    title: "Entity B",
    description: "Second entity with body participating in the constraint."
}), P2RevoluteConstraint.attributes.add("localPivotB", {
    type: "vec2",
    default: [0, 0],
    title: "Local Pivot B",
    description: "Local pivot in body B specified in local body coordinates."
}), P2RevoluteConstraint.attributes.add("collideConnected", {
    type: "boolean",
    default: !0,
    title: "Collide Connected",
    description: "Set to true if you want the connected bodies to collide."
}), P2RevoluteConstraint.attributes.add("stiffness", {
    type: "number",
    default: 1e6,
    title: "Stiffness",
    description: "Set stiffness for this constraint."
}), P2RevoluteConstraint.attributes.add("relaxation", {
    type: "number",
    default: 4,
    title: "Relaxation",
    description: "Set relaxation for this constraint."
}), P2RevoluteConstraint.attributes.add("limitsEnabled", {
    type: "boolean",
    default: !1,
    title: "Limits Enabled",
    description: "Enable constraint angle limits."
}), P2RevoluteConstraint.attributes.add("limits", {
    type: "vec2",
    default: [0, 0],
    title: "Limits",
    description: "Set the constraint angle limits."
}), P2RevoluteConstraint.attributes.add("motorEnabled", {
    type: "boolean",
    default: !1,
    title: "Motor Enabled",
    description: "Enable the rotational motor."
}), P2RevoluteConstraint.attributes.add("motorSpeed", {
    type: "number",
    default: 0,
    title: "Motor Speed",
    description: "Set the speed of the rotational constraint motor."
}), P2RevoluteConstraint.prototype.createConstraint = function() {
    this.constraint && this.bodyA.world.removeConstraint(this.constraint), this.constraint = new p2.RevoluteConstraint(this.bodyA, this.bodyB, {
        collideConnected: this.collideConnected,
        localPivotA: [this.localPivotA.x, this.localPivotA.y],
        localPivotB: [this.localPivotB.x, this.localPivotB.y]
    }), this.constraint.limitsEnabled && this.constraint.setLimits(this.limits.x * Math.PI / 180, this.limits.y * Math.PI / 180), this.constraint.setStiffness(this.stiffness), this.constraint.setRelaxation(this.relaxation), this.motorEnabled ? this.constraint.enableMotor() : this.constraint.disableMotor(), this.constraint.setMotorSpeed(this.motorSpeed), this.bodyA.world.addConstraint(this.constraint)
}, P2RevoluteConstraint.prototype.postInitialize = function() {
    this.bodyA = null, this.bodyB = null, this.entityA && this.entityA.script && this.entityA.script.p2Body && (this.bodyA = this.entityA.script.p2Body.body), this.entityB && this.entityB.script && this.entityB.script.p2Body && (this.bodyB = this.entityB.script.p2Body.body), this.bodyA && this.bodyB && this.createConstraint();
    var t = this;
    this.entityA && this.entityA.on("p2:newBody", function(i) {
        t.bodyA = i, t.bodyB && t.createConstraint()
    }), this.entityB && this.entityB.on("p2:newBody", function(i) {
        t.bodyB = i, t.bodyA && t.createConstraint()
    }), this.on("attr:entityA", function(t, i) {
        i.off("p2:newBody"), t.on("p2:newBody", function(t) {
            this.bodyA = t, this.bodyB && this.createConstraint()
        })
    }), this.on("attr:entityB", function(t, i) {
        i.off("p2:newBody"), t.on("p2:newBody", function(t) {
            this.bodyB = t, this.bodyA && this.createConstraint()
        })
    }), this.on("attr:limits", function(t, i) {
        this.constraint && this.constraint.limitsEnabled && this.constraint.setLimits(this.limits.x * Math.PI / 180, this.limits.y * Math.PI / 180)
    }), this.on("attr:limitsEnabled", function(t, i) {
        this.constraint && (t ? this.constraint.setLimits(this.limits.x * Math.PI / 180, this.limits.y * Math.PI / 180) : (this.constraint.lowerlimitEnabled = !1, this.constraint.upperlimitEnabled = !1))
    }), this.on("attr:lowerLimitEnabled", function(t, i) {
        this.constraint && (this.constraint.lowerLimitEnabled = t)
    }), this.on("attr:localPivotA", function(t, i) {
        this.constraint && (this.constraint.localPivotA[0] = t.x, this.constraint.localPivotA[1] = t.y)
    }), this.on("attr:localPivotB", function(t, i) {
        this.constraint && (this.constraint.localPivotB[0] = t.x, this.constraint.localPivotB[1] = t.y)
    }), this.on("attr:motorEnabled", function(t, i) {
        this.constraint && (t ? this.constraint.enableMotor() : this.constraint.disableMotor())
    }), this.on("attr:motorSpeed", function(t, i) {
        this.constraint && this.constraint.setMotorSpeed(t)
    }), this.on("attr:relaxation", function(t, i) {
        this.constraint && this.constraint.setRelaxation(t)
    }), this.on("attr:stiffness", function(t, i) {
        this.constraint && this.constraint.setStiffness(t)
    }), this.on("attr:upperLimit", function(t, i) {
        this.constraint && (this.constraint.upperLimit = t)
    }), this.on("attr:upperLimitEnabled", function(t, i) {
        this.constraint && (this.constraint.upperLimitEnabled = t)
    })
};
var P2LinearSpring = pc.createScript("p2LinearSpring");
P2LinearSpring.attributes.add("entityA", {
    type: "entity",
    title: "Entity A",
    description: "First connected entity."
}), P2LinearSpring.attributes.add("anchorA", {
    type: "vec2",
    default: [0, 0],
    title: "Anchor A",
    description: "Where to hook the spring to body A, in local body coordinates or world space coordinates. Defaults to the body center in local space."
}), P2LinearSpring.attributes.add("anchorASpace", {
    type: "number",
    enum: [{
        Local: 0
    }, {
        World: 1
    }],
    default: 0,
    title: "Anchor A Space",
    description: "The coordinate space for anchor A. Can be local body space or world space."
}), P2LinearSpring.attributes.add("entityB", {
    type: "entity",
    title: "Entity B",
    description: "Second connected entity."
}), P2LinearSpring.attributes.add("anchorB", {
    type: "vec2",
    default: [0, 0],
    title: "Anchor B",
    description: "Where to hook the spring to body B, in local body coordinates or world space coordinates. Defaults to the body center in local space."
}), P2LinearSpring.attributes.add("anchorBSpace", {
    type: "number",
    enum: [{
        Local: 0
    }, {
        World: 1
    }],
    default: 0,
    title: "Anchor B Space",
    description: "The coordinate space for anchor B. Can be local body space or world space."
}), P2LinearSpring.attributes.add("restLength", {
    type: "number",
    default: 0,
    title: "Rest Length",
    description: "Rest length of the spring."
}), P2LinearSpring.attributes.add("stiffness", {
    type: "number",
    default: 100,
    title: "Stiffness",
    description: "Stiffness of the spring. See Hookes Law."
}), P2LinearSpring.attributes.add("damping", {
    type: "number",
    default: 1,
    title: "Damping",
    description: "Damping of the spring."
}), P2LinearSpring.prototype.createSpring = function() {
    this.spring && this.bodyA.world.removeSpring(this.spring);
    var t = {
        damping: this.damping,
        stiffness: this.stiffness
    };
    0 === this.anchorASpace ? t.localAnchorA = [this.anchorA.x, this.anchorA.y] : t.worldAnchorA = [this.anchorA.x, this.anchorA.y], 0 === this.anchorBSpace ? t.localAnchorB = [this.anchorB.x, this.anchorB.y] : t.worldAnchorB = [this.anchorB.x, this.anchorB.y], this.restLength > 0 && (t.restLength = this.restLength), this.spring = new p2.LinearSpring(this.bodyA, this.bodyB, t), this.bodyA.world.addSpring(this.spring)
}, P2LinearSpring.prototype.postInitialize = function() {
    this.bodyA = null, this.bodyB = null, this.entityA && this.entityA.script && this.entityA.script.p2Body && (this.bodyA = this.entityA.script.p2Body.body), this.entityB && this.entityB.script && this.entityB.script.p2Body && (this.bodyB = this.entityB.script.p2Body.body), this.bodyA && this.bodyB && this.createSpring();
    var t = this;
    this.entityA && this.entityA.on("p2:newBody", function(i) {
        t.bodyA = i, t.bodyB && t.createSpring()
    }), this.entityB && this.entityB.on("p2:newBody", function(i) {
        t.bodyB = i, t.bodyA && t.createSpring()
    }), this.on("attr:anchorA", function(t, i) {
        this.spring && (0 === this.anchorASpace ? (this.spring.localAnchorA[0] = t.x, this.spring.localAnchorA[1] = t.y) : (this.spring.worldAnchorA[0] = t.x, this.spring.worldAnchorA[1] = t.y))
    }), this.on("attr:anchorASpace", function(t, i) {
        this.spring && (0 === t ? (this.spring.localAnchorA[0] = this.anchorA.x, this.spring.localAnchorA[1] = this.anchorA.y) : (this.spring.worldAnchorA[0] = this.anchorA.x, this.spring.worldAnchorA[1] = this.anchorA.y))
    }), this.on("attr:anchorB", function(t, i) {
        this.spring && (0 === this.anchorBSpace ? (this.spring.localAnchorB[0] = t.x, this.spring.localAnchorB[1] = t.y) : (this.spring.worldAnchorB[0] = t.x, this.spring.worldAnchorB[1] = t.y))
    }), this.on("attr:anchorBSpace", function(t, i) {
        this.spring && (0 === t ? (this.spring.localAnchorB[0] = this.anchorB.x, this.spring.localAnchorB[1] = this.anchorB.y) : (this.spring.worldAnchorB[0] = this.anchorB.x, this.spring.worldAnchorB[1] = this.anchorB.y))
    }), this.on("attr:damping", function(t, i) {
        this.spring && (this.spring.damping = t)
    }), this.on("attr:entityA", function(t, i) {
        i.off("p2:newBody"), t.on("p2:newBody", function(t) {
            this.bodyA = t, this.bodyB && this.createSpring()
        })
    }), this.on("attr:entityB", function(t, i) {
        i.off("p2:newBody"), t.on("p2:newBody", function(t) {
            this.bodyB = t, this.bodyA && this.createSpring()
        })
    }), this.on("attr:restLength", function(t, i) {
        this.spring && (this.spring.restLength = t)
    }), this.on("attr:stiffness", function(t, i) {
        this.spring && (this.spring.stiffness = t)
    })
};
var P2RotationalSpring = pc.createScript("p2RotationalSpring");
P2RotationalSpring.attributes.add("entityA", {
    type: "entity",
    title: "Entity A",
    description: "First connected entity."
}), P2RotationalSpring.attributes.add("entityB", {
    type: "entity",
    title: "Entity B",
    description: "Second connected entity."
}), P2RotationalSpring.attributes.add("stiffness", {
    type: "number",
    default: 100,
    title: "Stiffness",
    description: "Stiffness of the spring. See Hookes Law."
}), P2RotationalSpring.attributes.add("damping", {
    type: "number",
    default: 1,
    title: "Damping",
    description: "Damping of the spring."
}), P2RotationalSpring.prototype.createSpring = function() {
    this.spring && this.bodyA.world.removeSpring(this.spring);
    var t = {
        damping: this.damping,
        stiffness: this.stiffness
    };
    this.spring = new p2.RotationalSpring(this.bodyA, this.bodyB, t), this.bodyA.world.addSpring(this.spring)
}, P2RotationalSpring.prototype.postInitialize = function() {
    this.bodyA = null, this.bodyB = null, this.entityA && this.entityA.script && this.entityA.script.p2Body && (this.bodyA = this.entityA.script.p2Body.body), this.entityB && this.entityB.script && this.entityB.script.p2Body && (this.bodyB = this.entityB.script.p2Body.body), this.bodyA && this.bodyB && this.createSpring();
    var t = this;
    this.entityA && this.entityA.on("p2:newBody", function(i) {
        t.bodyA = i, t.bodyB && t.createSpring()
    }), this.entityB && this.entityB.on("p2:newBody", function(i) {
        t.bodyB = i, t.bodyA && t.createSpring()
    }), this.on("attr:damping", function(t, i) {
        this.spring && (this.spring.damping = t)
    }), this.on("attr:entityA", function(t, i) {
        i.off("p2:newBody"), t.on("p2:newBody", function(t) {
            this.bodyA = t, this.bodyB && this.createSpring()
        })
    }), this.on("attr:entityB", function(t, i) {
        i.off("p2:newBody"), t.on("p2:newBody", function(t) {
            this.bodyB = t, this.bodyA && this.createSpring()
        })
    }), this.on("attr:stiffness", function(t, i) {
        this.spring && (this.spring.stiffness = t)
    })
};
var P2TopDownVehicle = pc.createScript("p2TopDownVehicle");
P2TopDownVehicle.attributes.add("engineForce", {
    type: "number",
    default: 7,
    title: "Engine Force",
    description: "The force to apply to the back wheel."
}), P2TopDownVehicle.attributes.add("reverseForce", {
    type: "number",
    default: -2,
    title: "Reverse Force",
    description: "The force to apply to the back wheel when reversing."
}), P2TopDownVehicle.attributes.add("brakeForce", {
    type: "number",
    default: 5,
    title: "Brake Force",
    description: "The force to apply to the back wheel when braking."
}), P2TopDownVehicle.attributes.add("maxSteer", {
    type: "number",
    default: 45,
    title: "Max Steer",
    description: "The maximum steer angle in degrees.",
    placeholder: "degrees"
}), P2TopDownVehicle.attributes.add("frontWheelOffset", {
    type: "vec2",
    default: [0, 1],
    title: "Front Offset",
    description: "The offset in local body coordinates of the front wheel."
}), P2TopDownVehicle.attributes.add("frontWheelFriction", {
    type: "number",
    default: 4,
    title: "Front Friction",
    description: "The side friction to apply to the front wheel."
}), P2TopDownVehicle.attributes.add("backWheelOffset", {
    type: "vec2",
    default: [0, -1],
    title: "Back Offset",
    description: "The offset in local body coordinates of the back wheel."
}), P2TopDownVehicle.attributes.add("backWheelFriction", {
    type: "number",
    default: 3,
    title: "Back Friction",
    description: "The side friction to apply to the back wheel."
}), P2TopDownVehicle.prototype.createVehicle = function() {
    var t = this.entity.script.p2Body.body;
    this.vehicle && this.vehicle.removeFromWorld(t.world), this.vehicle = new p2.TopDownVehicle(t), this.frontWheel = this.vehicle.addWheel({
        localPosition: [this.frontWheelOffset.x, this.frontWheelOffset.y]
    }), this.frontWheel.setSideFriction(this.frontWheelFriction), this.backWheel = this.vehicle.addWheel({
        localPosition: [this.backWheelOffset.x, this.backWheelOffset.y]
    }), this.backWheel.setSideFriction(this.backWheelFriction), this.vehicle.addToWorld(t.world)
}, P2TopDownVehicle.prototype.postInitialize = function() {
    this.steering = 0, this.throttle = !1, this.brake = !1, this.entity.script.p2Body.body && this.createVehicle();
    var t = this;
    this.entity.on("p2:newBody", function(i) {
        t.createVehicle()
    }), this.on("attr:frontWheelFriction", function(t, i) {
        this.vehicle && this.frontWheel.setSideFriction(t)
    }), this.on("attr:frontWheelOffset", function(t, i) {
        this.vehicle && (this.frontWheel.localPosition[0] = t.x, this.frontWheel.localPosition[1] = t.y)
    }), this.on("attr:backWheelFriction", function(t, i) {
        this.vehicle && this.backWheel.setSideFriction(t)
    }), this.on("attr:backWheelOffset", function(t, i) {
        this.vehicle && (this.backWheel.localPosition[0] = t.x, this.backWheel.localPosition[1] = t.y)
    }), this.on("enable", function() {
        this.vehicle && this.entity.script && this.entity.script.p2Body && this.entity.script.p2Body.body && this.vehicle.addToWorld(this.entity.script.p2Body.body.world)
    }), this.on("disable", function() {
        this.vehicle && this.entity.script && this.entity.script.p2Body && this.entity.script.p2Body.body && this.vehicle.removeFromWorld(this.entity.script.p2Body.body.world)
    })
}, P2TopDownVehicle.prototype.update = function(t) {
    this.vehicle && (this.frontWheel.steerValue = this.steering * this.maxSteer / 180 * Math.PI, this.backWheel.engineForce = this.throttle ? this.engineForce : 0, this.backWheel.setBrakeForce(0), this.brake && (this.backWheel.getSpeed() > .1 ? this.backWheel.setBrakeForce(this.brakeForce) : (this.backWheel.setBrakeForce(0), this.backWheel.engineForce = this.reverseForce)))
};
var Physics = pc.createScript("Physics");
Physics.prototype.initialize = function() {
    Physics = this, this.toRemove = [], this.p2World = this.app.root.findByName("Physics").script.p2World, this.velocity = new pc.Vec3, this.lookAt = new pc.Vec3, this.rigidBody = void 0, this.PLAYER0 = Math.pow(2, 0), this.PLAYER1 = Math.pow(2, 1), this.PLAYER2 = Math.pow(2, 2), this.PLAYER3 = Math.pow(2, 3), this.PLAYER4 = Math.pow(2, 4), this.PLAYER5 = Math.pow(2, 5), this.PLAYER6 = Math.pow(2, 6), this.PLAYER7 = Math.pow(2, 7), this.CIVILIANS = Math.pow(2, 10), this.BUILDINGS = Math.pow(2, 11)
}, Physics.prototype.SetupCollisionObjects = function() {
    var t, i, o = this.app.root.findByName("CityCollision"),
        s = new pc.Entity("CollisionHolder");
    this.app.root.addChild(s);
    for (var h = new pc.Vec3, e = new pc.Vec3, p = 0; p < o.model.meshInstances.length; p++) t = o.model.meshInstances[p].node, (i = Pools.CloneFromPool("Collision", "DefaultCollisionBox")).name = t.name + "_Collision", e.copy(t.getPosition()), h.copy(o.model.meshInstances[p].aabb.halfExtents).scale(2), i.setPosition(e), i.setLocalScale(Math.abs(h.x), Math.abs(h.y), Math.abs(h.z)), i.script.p2Body.body.position = [e.x, -e.z], i.script.p2Box.width = Math.abs(h.x), i.script.p2Box.height = Math.abs(h.z), i.script.p2Box.collisionGroup = (Physics.BUILDINGS >>> 0).toString(2), i.script.p2Box.collisionMask = ((this.PLAYER0 | this.PLAYER1 | this.PLAYER2 | this.PLAYER3 | this.PLAYER4 | this.PLAYER5 | this.PLAYER6 | this.PLAYER7 | this.CIVILIANS) >>> 0).toString(2), i.script.p2Box.enabled = !0, i.reparent(s, 0)
}, Physics.prototype.Reset = function() {
    for (var t = this.app.root.findByName("CollisionHolder"), i = t.children.length - 1; i >= 0; --i) t.children[i].destroy();
    t.destroy()
};
var ButtonScript = pc.createScript("ButtonScript");
ButtonScript.prototype.initialize = function() {
    this.on("enable", this.onEnable, this), this.on("disable", this.onDisable, this), this.onEnable()
}, ButtonScript.prototype.onEnable = function() {
    this.entity.element.on("mouseup", this.onRelease, this), this.entity.element.on("touchend", this.onRelease, this)
}, ButtonScript.prototype.onDisable = function() {
    this.entity.element.off("mouseup", this.onRelease, this), this.entity.element.off("touchend", this.onRelease, this)
}, ButtonScript.prototype.onRelease = function(t) {
    this.app.fire("Interface:Pressed", this.entity.name, this)
};
pc.extend(pc, function() {
        var t = function(t) {
            this._app = t, this._tweens = [], this._add = []
        };
        t.prototype = {
            add: function(t) {
                return this._add.push(t), t
            },
            update: function(t) {
                for (var i = 0, e = this._tweens.length; i < e;) this._tweens[i].update(t) ? i++ : (this._tweens.splice(i, 1), e--);
                this._add.length && (this._tweens = this._tweens.concat(this._add), this._add.length = 0)
            }
        };
        var i = function(t, i, e) {
                pc.events.attach(this), this.manager = i, e && (this.entity = null), this.time = 0, this.complete = !1, this.playing = !1, this.stopped = !0, this.pending = !1, this.target = t, this.duration = 0, this._currentDelay = 0, this.timeScale = 1, this._reverse = !1, this._delay = 0, this._yoyo = !1, this._count = 0, this._numRepeats = 0, this._repeatDelay = 0, this._from = !1, this._slerp = !1, this._fromQuat = new pc.Quat, this._toQuat = new pc.Quat, this._quat = new pc.Quat, this.easing = pc.EASE_LINEAR, this._sv = {}, this._ev = {}
            },
            e = function(t) {
                var i;
                return t instanceof pc.Vec2 ? i = {
                    x: t.x,
                    y: t.y
                } : t instanceof pc.Vec3 ? i = {
                    x: t.x,
                    y: t.y,
                    z: t.z
                } : t instanceof pc.Vec4 ? i = {
                    x: t.x,
                    y: t.y,
                    z: t.z,
                    w: t.w
                } : t instanceof pc.Quat ? i = {
                    x: t.x,
                    y: t.y,
                    z: t.z,
                    w: t.w
                } : t instanceof pc.Color ? (i = {
                    r: t.r,
                    g: t.g,
                    b: t.b
                }, void 0 !== t.a && (i.a = t.a)) : i = t, i
            };
        i.prototype = {
            to: function(t, i, n, s, r, h) {
                return this._properties = e(t), this.duration = i, n && (this.easing = n), s && this.delay(s), r && this.repeat(r), h && this.yoyo(h), this
            },
            from: function(t, i, n, s, r, h) {
                return this._properties = e(t), this.duration = i, n && (this.easing = n), s && this.delay(s), r && this.repeat(r), h && this.yoyo(h), this._from = !0, this
            },
            rotate: function(t, i, n, s, r, h) {
                return this._properties = e(t), this.duration = i, n && (this.easing = n), s && this.delay(s), r && this.repeat(r), h && this.yoyo(h), this._slerp = !0, this
            },
            start: function() {
                var t, i, e, n;
                if (this.playing = !0, this.complete = !1, this.stopped = !1, this._count = 0, this.pending = this._delay > 0, this._reverse && !this.pending ? this.time = this.duration : this.time = 0, this._from) {
                    for (t in this._properties) this._properties.hasOwnProperty(t) && (this._sv[t] = this._properties[t], this._ev[t] = this.target[t]);
                    this._slerp && (this._toQuat.setFromEulerAngles(this.target.x, this.target.y, this.target.z), i = void 0 !== this._properties.x ? this._properties.x : this.target.x, e = void 0 !== this._properties.y ? this._properties.y : this.target.y, n = void 0 !== this._properties.z ? this._properties.z : this.target.z, this._fromQuat.setFromEulerAngles(i, e, n))
                } else {
                    for (t in this._properties) this._properties.hasOwnProperty(t) && (this._sv[t] = this.target[t], this._ev[t] = this._properties[t]);
                    this._slerp && (this._fromQuat.setFromEulerAngles(this.target.x, this.target.y, this.target.z), i = void 0 !== this._properties.x ? this._properties.x : this.target.x, e = void 0 !== this._properties.y ? this._properties.y : this.target.y, n = void 0 !== this._properties.z ? this._properties.z : this.target.z, this._toQuat.setFromEulerAngles(i, e, n))
                }
                return this._currentDelay = this._delay, this.manager.add(this), this
            },
            pause: function() {
                this.playing = !1
            },
            resume: function() {
                this.playing = !0
            },
            stop: function() {
                this.playing = !1, this.stopped = !0
            },
            delay: function(t) {
                return this._delay = t, this.pending = !0, this
            },
            repeat: function(t, i) {
                return this._count = 0, this._numRepeats = t, this._repeatDelay = i || 0, this
            },
            loop: function(t) {
                return t ? (this._count = 0, this._numRepeats = 1 / 0) : this._numRepeats = 0, this
            },
            yoyo: function(t) {
                return this._yoyo = t, this
            },
            reverse: function() {
                return this._reverse = !this._reverse, this
            },
            chain: function() {
                for (var t = arguments.length; t--;) t > 0 ? arguments[t - 1]._chained = arguments[t] : this._chained = arguments[t];
                return this
            },
            update: function(t) {
                if (this.stopped) return !1;
                if (!this.playing) return !0;
                if (!this._reverse || this.pending ? this.time += t * this.timeScale : this.time -= t * this.timeScale, this.pending) {
                    if (!(this.time > this._currentDelay)) return !0;
                    this._reverse ? this.time = this.duration - (this.time - this._currentDelay) : this.time = this.time - this._currentDelay, this.pending = !1
                }
                var i = 0;
                (!this._reverse && this.time > this.duration || this._reverse && this.time < 0) && (this._count++, this.complete = !0, this.playing = !1, this._reverse ? (i = this.duration - this.time, this.time = 0) : (i = this.time - this.duration, this.time = this.duration));
                var e, n, s = this.time / this.duration,
                    r = this.easing(s);
                for (var h in this._properties) this._properties.hasOwnProperty(h) && (e = this._sv[h], n = this._ev[h], this.target[h] = e + (n - e) * r);
                if (this._slerp && this._quat.slerp(this._fromQuat, this._toQuat, r), this.entity && (this.entity._dirtifyLocal(), this.element && this.entity.element && (this.entity.element[this.element] = this.target), this._slerp && this.entity.setLocalRotation(this._quat)), this.fire("update", t), this.complete) {
                    var a = this._repeat(i);
                    return a ? this.fire("loop") : (this.fire("complete", i), this._chained && this._chained.start()), a
                }
                return !0
            },
            _repeat: function(t) {
                if (this._count < this._numRepeats) {
                    if (this._reverse ? this.time = this.duration - t : this.time = t, this.complete = !1, this.playing = !0, this._currentDelay = this._repeatDelay, this.pending = !0, this._yoyo) {
                        for (var i in this._properties) tmp = this._sv[i], this._sv[i] = this._ev[i], this._ev[i] = tmp;
                        this._slerp && (this._quat.copy(this._fromQuat), this._fromQuat.copy(this._toQuat), this._toQuat.copy(this._quat))
                    }
                    return !0
                }
                return !1
            }
        };
        var n = function(t) {
                return 1 - s(1 - t)
            },
            s = function(t) {
                return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
            };
        return {
            TweenManager: t,
            Tween: i,
            Linear: function(t) {
                return t
            },
            QuadraticIn: function(t) {
                return t * t
            },
            QuadraticOut: function(t) {
                return t * (2 - t)
            },
            QuadraticInOut: function(t) {
                return (t *= 2) < 1 ? .5 * t * t : -.5 * (--t * (t - 2) - 1)
            },
            CubicIn: function(t) {
                return t * t * t
            },
            CubicOut: function(t) {
                return --t * t * t + 1
            },
            CubicInOut: function(t) {
                return (t *= 2) < 1 ? .5 * t * t * t : .5 * ((t -= 2) * t * t + 2)
            },
            QuarticIn: function(t) {
                return t * t * t * t
            },
            QuarticOut: function(t) {
                return 1 - --t * t * t * t
            },
            QuarticInOut: function(t) {
                return (t *= 2) < 1 ? .5 * t * t * t * t : -.5 * ((t -= 2) * t * t * t - 2)
            },
            QuinticIn: function(t) {
                return t * t * t * t * t
            },
            QuinticOut: function(t) {
                return --t * t * t * t * t + 1
            },
            QuinticInOut: function(t) {
                return (t *= 2) < 1 ? .5 * t * t * t * t * t : .5 * ((t -= 2) * t * t * t * t + 2)
            },
            SineIn: function(t) {
                return 0 === t ? 0 : 1 === t ? 1 : 1 - Math.cos(t * Math.PI / 2)
            },
            SineOut: function(t) {
                return 0 === t ? 0 : 1 === t ? 1 : Math.sin(t * Math.PI / 2)
            },
            SineInOut: function(t) {
                return 0 === t ? 0 : 1 === t ? 1 : .5 * (1 - Math.cos(Math.PI * t))
            },
            ExponentialIn: function(t) {
                return 0 === t ? 0 : Math.pow(1024, t - 1)
            },
            ExponentialOut: function(t) {
                return 1 === t ? 1 : 1 - Math.pow(2, -10 * t)
            },
            ExponentialInOut: function(t) {
                return 0 === t ? 0 : 1 === t ? 1 : (t *= 2) < 1 ? .5 * Math.pow(1024, t - 1) : .5 * (2 - Math.pow(2, -10 * (t - 1)))
            },
            CircularIn: function(t) {
                return 1 - Math.sqrt(1 - t * t)
            },
            CircularOut: function(t) {
                return Math.sqrt(1 - --t * t)
            },
            CircularInOut: function(t) {
                return (t *= 2) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
            },
            BackIn: function(t) {
                return t * t * (2.70158 * t - 1.70158)
            },
            BackOut: function(t) {
                return --t * t * (2.70158 * t + 1.70158) + 1
            },
            BackInOut: function(t) {
                var i = 2.5949095;
                return (t *= 2) < 1 ? t * t * ((i + 1) * t - i) * .5 : .5 * ((t -= 2) * t * ((i + 1) * t + i) + 2)
            },
            BounceIn: n,
            BounceOut: s,
            BounceInOut: function(t) {
                return t < .5 ? .5 * n(2 * t) : .5 * s(2 * t - 1) + .5
            },
            ElasticIn: function(t) {
                var i, e = .1;
                return 0 === t ? 0 : 1 === t ? 1 : (!e || e < 1 ? (e = 1, i = .1) : i = .4 * Math.asin(1 / e) / (2 * Math.PI), -e * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - i) * (2 * Math.PI) / .4))
            },
            ElasticOut: function(t) {
                var i, e = .1;
                return 0 === t ? 0 : 1 === t ? 1 : (!e || e < 1 ? (e = 1, i = .1) : i = .4 * Math.asin(1 / e) / (2 * Math.PI), e * Math.pow(2, -10 * t) * Math.sin((t - i) * (2 * Math.PI) / .4) + 1)
            },
            ElasticInOut: function(t) {
                var i, e = .1;
                return 0 === t ? 0 : 1 === t ? 1 : (!e || e < 1 ? (e = 1, i = .1) : i = .4 * Math.asin(1 / e) / (2 * Math.PI), (t *= 2) < 1 ? e * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - i) * (2 * Math.PI) / .4) * -.5 : e * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - i) * (2 * Math.PI) / .4) * .5 + 1)
            }
        }
    }()),
    function() {
        pc.Application.prototype.addTweenManager = function() {
            this._tweenManager = new pc.TweenManager(this), this.on("update", function(t) {
                this._tweenManager.update(t)
            })
        }, pc.Application.prototype.tween = function(t) {
            return new pc.Tween(t, this._tweenManager)
        }, pc.Entity.prototype.tween = function(t, i) {
            var e = this._app.tween(t);
            return e.entity = this, this.on("destroy", function() {
                e.stop()
            }), i && i.element && (e.element = i.element), e
        };
        var t = pc.Application.getApplication();
        t && t.addTweenManager()
    }();
var TweenPosition = pc.createScript("tweenPosition");
TweenPosition.attributes.add("duration", {
    type: "number",
    default: 1
}), TweenPosition.attributes.add("easing", {
    type: "string",
    default: "Linear"
}), TweenPosition.attributes.add("delay", {
    type: "number",
    default: 0
}), TweenPosition.attributes.add("loop", {
    type: "boolean",
    default: !1
}), TweenPosition.attributes.add("yoyo", {
    type: "boolean",
    default: !1
}), TweenPosition.attributes.add("repeat", {
    type: "number",
    default: 1
}), TweenPosition.attributes.add("from", {
    type: "vec3",
    default: [0, 0, 0]
}), TweenPosition.attributes.add("to", {
    type: "vec3",
    default: [0, 0, 0]
}), TweenPosition.prototype.initialize = function() {
    this.reset(), this.on("attr:duration", function(t) {
        this.tween.duration = t
    }, this), this.on("attr:easing", this.reset, this), this.on("attr:delay", this.reset, this), this.on("attr:loop", this.reset, this), this.on("attr:yoyo", this.reset, this), this.on("attr:repeat", this.reset, this), this.on("attr:from", this.reset, this), this.on("attr:to", this.reset, this)
}, TweenPosition.prototype.reset = function() {
    this.tween && this.tween.stop(), this.entity.setLocalPosition(this.from.x, this.from.y, this.from.z), this.tween = this.entity.tween(this.entity.getLocalPosition()).to(new pc.Vec3(this.to.x, this.to.y, this.to.z), this.duration, pc[this.easing]).delay(this.delay).loop(this.loop).yoyo(this.yoyo), this.loop || this.tween.repeat(this.repeat), this.tween.start()
};
var Civilians = pc.createScript("Civilians");
Civilians.prototype.initialize = function() {
    Civilians = this, this.allowSpawn = !1, this.debugSpawners = !1, this.civilianSpawners = [], this.index = -1, this.indexOf = -1, this.isActive = !1, this.activeSpawners = [], this.civHolder = this.entity.findByName("Entities"), this.civilianSpeed = 2, this.spawnDirection = new pc.Vec3, this.spawnPosition = new pc.Vec3, this.latestCivilian = void 0, this.latestCivilianVelocity = new pc.Vec3, this.latestCivilianLookAt = new pc.Vec3;
    for (var i, t = new pc.Vec3, e = this.app.assets.find("GridDefault0").resource.clone(), s = this.app.assets.find("GridDefault1").resource.clone(), a = e, n = 0; n < 5; n++) {
        for (var l = 0; l < 6; l++) t.set(125 - 50 * l, .25, 105 - 50 * n), i = new SpawnerData(this.civilianSpawners.length, t, 50, this.SpawnCivilian, this, this.debugSpawners, a), this.civilianSpawners.push(i), a = a === e ? s : e;
        a = a === e ? s : e
    }
    var o = this.app.root.findByName("SpawnDummies");
    o.enabled = this.debugSpawners;
    for (var r, h = 0; h < o.model.meshInstances.length; h++) {
        r = o.model.meshInstances[h].node;
        for (var p = 0; p < this.civilianSpawners.length && !this.civilianSpawners[p].AddChild(r); p++);
    }
}, Civilians.prototype.Setup = function() {
    this.app.on("GameMode:Start", this.OnGameModeStarted, this), this.app.on("GameMode:Stop", this.OnGameModeStopped, this)
}, Civilians.prototype.OnGameModeStarted = function() {
    Debug.Log("[Civilians] OnGameModeStarted(). Spawning allowed."), this.allowSpawn = !0
}, Civilians.prototype.OnGameModeStopped = function() {
    Debug.Log("[Civilians] OnGameModeStopped(). No more spawning allowed."), this.allowSpawn = !1
}, Civilians.prototype.update = function(i) {
    for (var t, e = new pc.Vec3, s = new pc.Vec3, a = this.civHolder.children.length - 1; a >= 0; a--)
        if (t = this.civHolder.children[a], s.copy(t.getPosition()), Playfield.IsInsideRect(s)) {
            for (var n = 0; n < Players.allPlayers.length; n++)
                if (Players.allPlayers[n].isInside && !Players.allPlayers[n].isDead && e.copy(t.getPosition()).sub(Players.allPlayers[n].center).lengthSq() <= Players.allPlayers[n].radiusSqr) {
                    Players.allPlayers[n].characterScript.CheckLocations(s) && (Players.allPlayers[n].characterScript.CloneFollowers(1, s), t.destroy());
                    break
                }
        } else t.destroy();
    if (this.allowSpawn)
        for (this.index = (this.index + 1) % this.civilianSpawners.length, this.indexOf = this.activeSpawners.indexOf(this.index), this.isActive = this.civilianSpawners[this.index].UpdateState(Players.mainPlayer.character.getPosition()), !this.isActive && this.indexOf > -1 ? this.activeSpawners.splice(this.indexOf, 1) : this.isActive && -1 === this.indexOf && this.activeSpawners.push(this.index), a = 0; a < this.activeSpawners.length; a++) this.civilianSpawners[this.activeSpawners[a]].Update(i)
}, Civilians.prototype.GetClosest = function(i, t) {
    for (var e = new pc.Vec3, s = this.civHolder.children.length - 1; s >= 0; s--)
        if (e.copy(this.civHolder.children[s].getPosition()).sub(i).lengthSq() <= t) return this.civHolder.children[s];
    return null
}, Civilians.prototype.SpawnCivilian = function(i, t) {
    this.latestCivilian = Characters.CreateCivilian("Civilian"), this.latestCivilian._shouldSync = !1, this.latestCivilian.children[0]._shouldSync = !1, this.spawnPosition.copy(i).y = 0, t.transformVector(pc.Vec3.BACK, this.latestCivilianVelocity), this.latestCivilian.setPosition(this.spawnPosition), this.latestCivilian.setRotation(t), this.latestCivilian.script.p2Body.body.mass = 1, this.latestCivilian.script.p2Body.body.damping = 0, this.latestCivilian.script.p2Body.body.position = [this.spawnPosition.x, -this.spawnPosition.z], this.latestCivilianVelocity.scale(this.civilianSpeed), this.latestCivilian.script.p2Body.body.velocity[0] = this.latestCivilianVelocity.x, this.latestCivilian.script.p2Body.body.velocity[1] = -this.latestCivilianVelocity.z, this.latestCivilian.script.p2Circle.collisionGroup = (Physics.CIVILIANS >>> 0).toString(2), this.latestCivilian.script.p2Circle.collisionMask = 0, this.latestCivilianLookAt.copy(this.spawnPosition).sub(this.latestCivilianVelocity), this.latestCivilianLookAt.y = .1, this.latestCivilian.children[0].lookAt(this.latestCivilianLookAt), this.latestCivilian.reparent(this.civHolder, 0)
}, Civilians.prototype.Reset = function() {
    for (var i = this.civHolder.children.length - 1; i >= 0; i--) this.civHolder.children[i].destroy();
    for (i = 0; i < this.civilianSpawners.length; i++) this.civilianSpawners[i].Reset();
    this.allowSpawn = !1, this.app.off("GameMode:Start", this.OnGameModeStarted, this), this.app.off("GameMode:Stop", this.OnGameModeStopped, this)
};
var TweenScale = pc.createScript("tweenScale");
TweenScale.attributes.add("duration", {
    type: "number",
    default: 1
}), TweenScale.attributes.add("easing", {
    type: "string",
    default: "Linear"
}), TweenScale.attributes.add("delay", {
    type: "number",
    default: 0
}), TweenScale.attributes.add("loop", {
    type: "boolean",
    default: !1
}), TweenScale.attributes.add("yoyo", {
    type: "boolean",
    default: !1
}), TweenScale.attributes.add("repeat", {
    type: "number",
    default: 0
}), TweenScale.attributes.add("from", {
    type: "vec3",
    default: [0, 0, 0]
}), TweenScale.attributes.add("to", {
    type: "vec3",
    default: [1, 1, 1]
}), TweenScale.prototype.initialize = function() {
    this.reset(), this.on("attr:duration", function(t) {
        this.tween.duration = t
    }, this), this.on("attr:easing", this.reset, this), this.on("attr:delay", this.reset, this), this.on("attr:loop", this.reset, this), this.on("attr:yoyo", this.reset, this), this.on("attr:repeat", this.reset, this), this.on("attr:from", this.reset, this), this.on("attr:to", this.reset, this)
}, TweenScale.prototype.Set = function(t) {
    this.enabled = t, t || this.tween && this.tween.stop()
}, TweenScale.prototype.reset = function() {
    this.tween && this.tween.stop(), this.entity.setLocalScale(this.from.x, this.from.y, this.from.z), this.tween = this.entity.tween(this.entity.getLocalScale()).to(new pc.Vec3(this.to.x, this.to.y, this.to.z), this.duration, pc[this.easing]).delay(this.delay).loop(this.loop).yoyo(this.yoyo), this.loop || this.tween.repeat(this.repeat), this.tween.start()
};
var TweenRotation = pc.createScript("tweenRotation");
TweenRotation.attributes.add("duration", {
    type: "number",
    default: 1
}), TweenRotation.attributes.add("easing", {
    type: "string",
    default: "Linear"
}), TweenRotation.attributes.add("delay", {
    type: "number",
    default: 0
}), TweenRotation.attributes.add("loop", {
    type: "boolean",
    default: !0
}), TweenRotation.attributes.add("yoyo", {
    type: "boolean",
    default: !1
}), TweenRotation.attributes.add("repeat", {
    type: "number",
    default: 2
}), TweenRotation.prototype.initialize = function() {
    this.reset(), this.on("attr:duration", function(t) {
        this.tween.duration = t
    }, this), this.on("attr:easing", this.reset, this), this.on("attr:delay", this.reset, this), this.on("attr:loop", this.reset, this), this.on("attr:yoyo", this.reset, this), this.on("attr:repeat", this.reset, this)
}, TweenRotation.prototype.reset = function() {
    this.tween && this.tween.stop(), this.entity.setLocalEulerAngles(0, 0, 0), this.tween = this.entity.tween(this.entity.getLocalRotation()).rotate(new pc.Vec3(0, 0, 13), this.duration, pc[this.easing]).delay(this.delay).loop(this.loop).yoyo(this.yoyo), this.loop || this.tween.repeat(this.repeat), this.tween.start()
};
var TweenMaterial = pc.createScript("tweenMaterial");
TweenMaterial.attributes.add("fromDiffuse", {
    type: "rgb"
}), TweenMaterial.attributes.add("toDiffuse", {
    type: "rgb"
}), TweenMaterial.attributes.add("duration", {
    type: "number",
    default: 1
}), TweenMaterial.attributes.add("easing", {
    type: "string",
    default: "Linear"
}), TweenMaterial.attributes.add("delay", {
    type: "number",
    default: 0
}), TweenMaterial.attributes.add("loop", {
    type: "boolean",
    default: !0
}), TweenMaterial.attributes.add("yoyo", {
    type: "boolean",
    default: !1
}), TweenMaterial.attributes.add("repeat", {
    type: "number",
    default: 2
}), TweenMaterial.prototype.initialize = function() {
    this.initialMaterial = this.entity.model.material.clone(), this.reset(), this.on("attr:fromDiffuse", this.reset, this), this.on("attr:toDiffuse", this.reset, this), this.on("attr:duration", function(t) {
        this.tween.duration = t
    }, this), this.on("attr:easing", this.reset, this), this.on("attr:delay", this.reset, this), this.on("attr:loop", this.reset, this), this.on("attr:yoyo", this.reset, this), this.on("attr:repeat", this.reset, this)
}, TweenMaterial.prototype.reset = function() {
    this.tween && this.tween.stop(), this.tweenedProperties = {
        diffuse: this.fromDiffuse.clone()
    }, this.entity.model.material = this.initialMaterial.clone(), this.entity.model.material.diffuse = this.fromDiffuse, this.entity.model.material.update(), this.tween = this.app.tween(this.tweenedProperties.diffuse).to(this.toDiffuse, this.duration, pc[this.easing]).delay(this.delay).loop(this.loop).yoyo(this.yoyo), this.loop || this.tween.repeat(this.repeat), this.tween.on("update", function() {
        this.entity.model.material.diffuse = this.tweenedProperties.diffuse, this.entity.model.material.update()
    }.bind(this)), this.tween.start()
};
var TweenAlpha = pc.createScript("tweenAlpha");
TweenAlpha.attributes.add("fromAlpha", {
    type: "number",
    default: 1
}), TweenAlpha.attributes.add("toAlpha", {
    type: "number",
    default: 0
}), TweenAlpha.attributes.add("duration", {
    type: "number",
    default: 1
}), TweenAlpha.attributes.add("easing", {
    type: "string",
    default: "Linear"
}), TweenAlpha.attributes.add("delay", {
    type: "number",
    default: 0
}), TweenAlpha.attributes.add("loop", {
    type: "boolean",
    default: !1
}), TweenAlpha.attributes.add("yoyo", {
    type: "boolean",
    default: !1
}), TweenAlpha.attributes.add("repeat", {
    type: "number",
    default: 1
}), TweenAlpha.prototype.initialize = function() {
    this.reset(), this.on("attr:fromAlpha", this.reset, this), this.on("attr:toAlpha", this.reset, this), this.on("attr:duration", function(t) {
        this.tween.duration = t
    }, this), this.on("attr:easing", this.reset, this), this.on("attr:delay", this.reset, this), this.on("attr:loop", this.reset, this), this.on("attr:yoyo", this.reset, this), this.on("attr:repeat", this.reset, this)
}, TweenAlpha.prototype.reset = function() {
    this.tween && this.tween.stop();
    var t = this.entity.element.color,
        e = new pc.Color(t.r, t.g, t.b, this.fromAlpha),
        a = new pc.Color(t.r, t.g, t.b, this.toAlpha);
    this.entity.element.opacity = e.a;
    var i = new pc.Color(t.r, t.g, t.b, this.fromAlpha);
    this.tween = this.entity.tween(i).to(a, this.duration, pc[this.easing]).delay(this.delay).loop(this.loop).yoyo(this.yoyo).on("update", function() {
        this.entity.element.opacity = i.a
    }), this.loop || this.tween.repeat(this.repeat), this.tween.start()
};

function GameMode(e, a) {
    this.app = e, this.gameModeType = a, this.result = "None", this.frameCounter = 0, this.roundTime = 0, this.sourceRoundTime = 90, this.amountOfPlayers = 8, this.buildOpponents = Game.settings.allowAI, this.initialized = !1, this.started = !1, this.resultsAvailable = !1, this.delayedContinueBoostRV = !1
}
GameMode.prototype.Initialize = function() {
    Debug.Log("[GameMode] initialized"), Interface.SetPanelActive("PreloaderPanel", !0), Physics.SetupCollisionObjects(), Cameras.Create(), this.app.on("CharacterScript:KilledBy", this.KilledBy, this), this.app.on("User:DataLoaded", this.BuildPlayer, this), Game.user.dataLoadedAndSet && this.BuildPlayer(), this.initialized = !0
}, GameMode.prototype.BuildPlayer = function(e) {
    void 0 === e ? Debug.Log("[GameMode] Data was loaded so we could continue building the player") : Debug.Log("[GameMode] Data was loaded async - now we are set and can continue building the player");
    var a = Players.BuildPlayer(Game.user.name, Game.user.rank, Game.user.startCloneCount, Game.user.character);
    if (Cameras.SetTarget(a.character), Interface.SetPanelActive("PreloaderPanel", !1), Interface.SetPanelActive("MenuPanel", !0), Data.useAndroidFallback) {
        var t = this;
        setTimeout(function() {
            t.app.fire("Android:Fallback", "AndroidFallbackCalled")
        }, 100)
    }
    this.app.off("User:DataLoaded", this.BuildPlayer, this)
}, GameMode.prototype.Start = function() {
    Debug.Log("[GameMode] started"), this.resultsAvailable = !1, this.buildOpponents && Players.BuildMatchedPlayers(), Players.RestoreStartPositions(), Civilians.Setup(), this.app.fire("GameMode:Start"), this.roundTime = this.sourceRoundTime, this.app.fire("GameMode:UpdateRoundTime", this.roundTime), this.started = !0, !pc.platform.mobile && Game.settings.cheats && this.app.keyboard.on(pc.EVENT_KEYDOWN, this.OnKeyDown, this), Interface.HideAllPanels(), Interface.SetPanelActive("GamePanel", !0), Game.user.sessionGamesPlayed++, Game.user.sessionGamesPlayed === Data.gamesPerInterstitial && xFBInstant.RequestAndPreload("DefaultInterstitial"), Game.user.totalSessionGamesPlayed++, Game.user.SetAchievement(["Achievement10", "Achievement14", "Achievement15"], Game.user.totalSessionGamesPlayed), xFBInstant.CacheDefaultMessage(), xFBInstant.LogEvent("Game_Started", 1, Game.user.character), xFBInstant.LogEvent("SessionGames_Started", 1, Game.user.totalSessionGamesPlayed)
}, GameMode.prototype.Stop = function(e) {
    switch (Debug.Log("[GameMode] Stop(). Result was " + e), this.started = !1, this.app.fire("GameMode:Stop"), Interface.HideAllPanels(), Players.SortPlayers(), e) {
        case "CheatWin":
            Players.mainPlayer.rank = 1, e = "TimeUp";
            break;
        case "CheatLose":
            Players.mainPlayer.rank = 8, e = "Killed"
    }
    this.result = e, Game.user.bonusCloneCount = 0, Game.user.currentScore = Players.mainPlayer.score, Game.user.UpdateHighscore(Game.user.currentScore), Game.user.UpdateStars(Players.mainPlayer), this.resultsAvailable = !0, xFBInstant.SaveScore(Game.user.highscore), "TimeUp" === e ? xFBInstant.LogEvent("Game_Finished", 1, Players.mainPlayer.rank) : "Killed" === e && xFBInstant.LogEvent("Game_Over", 1), Game.user.sessionGamesPlayed === Data.gamesPerInterstitial && (xFBInstant.IsInterstitialAvailable("DefaultInterstitial") && xFBInstant.PlayAndReward("DefaultInterstitial"), Game.user.sessionGamesPlayed = 0), Interface.ResultsEvaluateNextPanel("Results")
}, GameMode.prototype.TimeUp = function(e) {
    Debug.Log("[GameMode] TimeUp"), this.delayedContinueBoostRV && xFBInstant.IsRewardedVideoAvailable("ContinueBoost") && xFBInstant.PlayAndReward("ContinueBoost"), this.delayedContinueBoostRV = !1, xFBInstant.RequestAndPreload("DoubleXP"), this.Stop(e)
}, GameMode.prototype.Continue = function() {
    Debug.Log("[GameMode] Continue"), this.roundTime <= Data.respawnTimeLimit ? this.GameOver("Killed") : Interface.SetPanelActive("ContinuePanel", !0)
}, GameMode.prototype.GameOver = function(e) {
    Debug.Log("[GameMode] GameOver"), xFBInstant.RequestAndPreload("GameOverCoins"), this.Stop(e)
}, GameMode.prototype.Pause = function() {
    Debug.Log("[GameMode] paused")
}, GameMode.prototype.UnPause = function() {
    Debug.Log("[GameMode] unpaused")
}, GameMode.prototype.Update = function(e) {
    this.started && (this.frameCounter++, this.roundTime = pc.math.clamp(this.roundTime - e, 0, this.sourceRoundTime), 0 === this.roundTime ? this.TimeUp("TimeUp") : this.frameCounter % 30 == 0 && this.app.fire("GameMode:UpdateRoundTime", this.roundTime))
}, GameMode.prototype.KilledBy = function(e, a) {
    Debug.Log("[GameMode] KilledBy(). Rewarding 10 clones to " + a.name), e !== a && (a.AddClones(10, !1), a === Players.mainPlayer && this.app.fire("", ""))
}, GameMode.prototype.OnKeyDown = function(e) {
    192 === e.key && Debug.ToggleDiv(), 187 === e.key && (Game.user.coins += 1e3), Game.gameModeAvailable && (e.key === pc.KEY_O && (this.roundTime = 3), e.key === pc.KEY_K && (this.roundTime = 0, this.TimeUp("CheatWin")), e.key === pc.KEY_L && Players.mainPlayer.characterScript.Die(Players.allPlayers[Players.allPlayers.length - 1].characterScript), e.key === pc.KEY_P && this.TogglePause())
}, GameMode.prototype.Reset = function() {
    Debug.Log("[GameMode] reset!"), this.app.off("CharacterScript:KilledBy", this.KilledBy, this), this.app.keyboard.off(pc.EVENT_KEYDOWN, this.OnKeyDown, this), Players.Reset(), Characters.Reset(), Cameras.Reset(), Physics.Reset(), Civilians.Reset()
};
var GamePanelScript = pc.createScript("GamePanelScript");
GamePanelScript.prototype.initialize = function() {
    this.timeAsString = "", this.timeTextElement = this.entity.findByPath("Time/Text").element, this.timeBigEntity = this.entity.findByPath("TimeBig"), this.timeBigTextElement = this.entity.findByPath("TimeBig/Text").element, this.parent = this.entity.findByPath("Players"), this.playerReference = this.entity.findByPath("Players/Player"), this.playerReference.enabled = !1, this.playerResults = [], this.maxAmount = 3, this.pickUpEntity = this.entity.findByPath("PickUp"), this.on("enable", this.onEnable, this), this.on("disable", this.onDisable, this), this.onEnable()
}, GamePanelScript.prototype.onEnable = function() {
    this.app.on("GameMode:UpdateRoundTime", this.UpdateRoundTime, this), this.app.on("GameMode:UpdatePlusOne", this.UpdatePlusOne, this), this.app.on("GameMode:UpdateLeaderboard", this.UpdateLeaderboard, this), this.app.on("CharacterScript:KilledBy", this.KilledBy, this), this.BuildLeaderboard(), this.UpdateLeaderboard(), this.ShowTutorial(!0)
}, GamePanelScript.prototype.PickUp = function(e) {
    this.pickUpEntity.enabled = !0;
    this.pickUpEntity.script.tweenPosition.reset(), this.pickUpEntity.script.tweenAlpha.reset();
    Audio.sound.play("PickUp")
}, GamePanelScript.prototype.UpdateRoundTime = function(e) {
    this.timeTextElement.text = Utils.FormatTime(e), e < 11 ? (this.timeBigEntity.enabled = !0, this.timeAsString = e.toString(), this.timeBigTextElement.text = this.timeAsString.split(".", 1) + "s") : this.timeBigEntity.enabled = !1
}, GamePanelScript.prototype.BuildLeaderboard = function() {
    var e, t = (new pc.Vec3).copy(this.playerReference.getLocalPosition()),
        i = new pc.Vec3(0, -45, 0);
    t.sub(i);
    for (var n = 0; n < this.maxAmount; ++n)(e = this.playerReference.clone()).reparent(this.parent, this.parent.children.length), e.enabled = !0, t.add(i), e.setLocalPosition(t), this.playerResults.push(e)
}, GamePanelScript.prototype.UpdateLeaderboard = function() {
    Players.SortPlayers();
    for (var e = Math.min(Players.allPlayers.length, 3), t = 0; t < e; ++t) this.UpdateCloneReference(this.playerResults[t], Players.sortedPlayers[t])
}, GamePanelScript.prototype.UpdateCloneReference = function(e, t) {
    var i, n, a, l, o = t.isMainPlayer ? new pc.Color(1, 1, 1) : t.color;
    (i = e.element).color = t.isMainPlayer ? t.color : new pc.Color(0, 0, 0), i.opacity = t.isMainPlayer ? 1 : .5, (n = e.findByPath("Rank").element).text = "#" + t.rank, n.color = o, e.findByPath("Icon").element.color = o, (a = e.findByPath("Count").element).text = "x" + t.score.toString(), a.color = o, (l = e.findByPath("Name").element).text = t.name, l.color = o
}, GamePanelScript.prototype.UpdatePlusOne = function(e) {
    this.PickUp("PlusOne")
}, GamePanelScript.prototype.ShowTutorial = function(e) {
    Debug.Log("[GamePanelScript] ShowTutorial: " + e);
    var t = this.entity.findByPath("Tutorial");
    t.enabled = e;
    t.script.tweenPosition.reset();
    (t = this.entity.findByPath("Tutorial/Dummy")).enabled = e, t.script.tweenPosition.reset(), (t = this.entity.findByPath("Tutorial/Dummy/Hand")).enabled = e, t.script.tweenPosition.reset()
}, GamePanelScript.prototype.KilledBy = function(e, t) {
    Debug.LogWarning(e.name + " was killed by " + t.name), t.isMainPlayer ? (this.entity.findByPath("Kills/Text").element.text = "Kills: " + t.kills.toString(), this.entity.findByPath("YouKilled/KilledPlayer").element.text = e.name, this.entity.findByPath("YouKilled/KilledPlayer").element.color = e.color, this.entity.findByPath("Killed").enabled = !1, Interface.PlayTween("GamePanel/YouKilled"), Audio.sound.play("LevelUp")) : (this.entity.findByPath("Killed/KilledByPlayer").element.text = e.name, this.entity.findByPath("Killed/KilledByPlayer").element.color = e.color, this.entity.findByPath("Killed/KilledPlayer").element.text = t.name, this.entity.findByPath("Killed/KilledPlayer").element.color = t.color, Interface.PlayTween("GamePanel/Killed"), Audio.sound.play("Select"))
}, GamePanelScript.prototype.onDisable = function() {
    this.app.off("GameMode:UpdateRoundTime"), this.app.off("GameMode:UpdatePlusOne"), this.app.off("GameMode:UpdateLeaderboard"), this.app.off("CharacterScript:KilledBy", this.KilledBy, this);
    for (var e = this.playerResults.length - 1; e >= 0; e--) this.playerResults[e].destroy();
    this.playerResults.length = 0
};
var ResultsPanelScript = pc.createScript("ResultsPanelScript");
ResultsPanelScript.prototype.initialize = function() {
    this.parent = this.entity.findByPath("Players"), this.rewardAmount = this.entity.findByPath("Reward/Amount").element, this.playerReference = this.entity.findByPath("Players/Player"), this.playerReference.enabled = !1, this.playerResults = [], this.on("enable", this.onEnable, this), this.on("disable", this.onDisable, this), this.onEnable()
}, ResultsPanelScript.prototype.onEnable = function() {
    var e;
    Audio.sound.play("Results");
    var t = (new pc.Vec3).copy(this.playerReference.getLocalPosition()),
        n = new pc.Vec3(0, -90, 0);
    t.sub(n);
    for (var r = 0; r < Players.sortedPlayers.length; ++r)(e = this.playerReference.clone()).enabled = !0, e.reparent(this.parent, this.parent.children.length), t.add(n), e.setLocalPosition(t), this.playerResults.push(e), this.UpdateCloneReference(e, Players.sortedPlayers[r]);
    this.rewardAmount.text = Game.user.GetRewardedStars(Players.mainPlayer).toString()
}, ResultsPanelScript.prototype.onDisable = function() {
    for (var e = this.playerResults.length - 1; e >= 0; e--) this.playerResults[e].destroy();
    this.playerResults.length = 0
}, ResultsPanelScript.prototype.UpdateCloneReference = function(e, t) {
    var n, r, a, l, s = t.isMainPlayer ? new pc.Color(1, 1, 1) : t.color;
    (n = e.element).color = t.isMainPlayer ? t.color : new pc.Color(0, 0, 0), n.opacity = t.isMainPlayer ? 1 : .5, (r = e.findByPath("Rank").element).text = "#" + t.rank, r.color = s, e.findByPath("Icon").element.color = s, (a = e.findByPath("Count").element).text = "x" + t.score.toString(), a.color = s, (l = e.findByPath("Name").element).text = t.name, l.color = s
};
var SettingsPanelScript = pc.createScript("SettingsPanelScript");
SettingsPanelScript.prototype.initialize = function() {
    this.audioToggleButton = this.entity.findByPath("AudioToggleButton"), this.audioToggleElement = this.entity.findByPath("AudioToggleButton/Icon").element, this.qualityToggleButton = this.entity.findByPath("QualityToggleButton"), this.qualityToggleElement = this.entity.findByPath("QualityToggleButton/Icon").element, this.resolutionToggleButton = this.entity.findByPath("ResolutionToggleButton"), this.resolutionToggleElement = this.entity.findByPath("ResolutionToggleButton/Icon").element, this.resolutionToggleButton.enabled = Game.settings.resolutionToggleAllowed, this.shadowsToggleButton = this.entity.findByPath("ShadowsToggleButton"), this.shadowsToggleElement = this.entity.findByPath("ShadowsToggleButton/Icon").element, this.fullscreenToggleButton = this.entity.findByPath("FullscreenToggleButton"), this.fullscreenToggleElement = this.entity.findByPath("FullscreenToggleButton/Icon").element, this.fullscreenToggleButton.enabled = Game.settings.fullscreenToggleAllowed, this.divToggleButton = this.entity.findByPath("DivToggleButton"), this.divToggleButton.enabled = Game.settings.divToggleAllowed, Game.settings.resolutionToggleAllowed || (this.fullscreenToggleButton.setLocalPosition(this.shadowsToggleButton.getLocalPosition()), this.shadowsToggleButton.setLocalPosition(this.resolutionToggleButton.getLocalPosition())), this.on("enable", this.UpdateIcons, this), this.app.on("Settings:UpdateIcons", this.UpdateIcons, this), this.UpdateIcons()
}, SettingsPanelScript.prototype.UpdateIcons = function() {
    this.UpdateAudioToggle(), this.UpdateQualityToggle(), this.UpdateResolutionToggle(), this.UpdateShadowsToggle(), this.UpdateFullScreenToggle()
}, SettingsPanelScript.prototype.UpdateAudioToggle = function() {
    this.audioToggleElement.sprite = Audio.muteAll ? this.app.assets.find("AudioOff").resource : this.app.assets.find("AudioOn").resource
}, SettingsPanelScript.prototype.UpdateQualityToggle = function() {
    var t = "Low";
    2 == Game.settings.quality ? t = "Medium" : 3 == Game.settings.quality && (t = "High"), this.qualityToggleElement.sprite = this.app.assets.find("Quality" + t).resource
}, SettingsPanelScript.prototype.UpdateResolutionToggle = function() {
    var t = "Low";
    2 == Game.settings.resolution ? t = "Medium" : 3 == Game.settings.resolution && (t = "High"), this.resolutionToggleElement.sprite = this.app.assets.find("Quality" + t).resource
}, SettingsPanelScript.prototype.UpdateShadowsToggle = function() {
    this.shadowsToggleElement.sprite = Game.settings.shadows ? this.app.assets.find("QualityHigh").resource : this.app.assets.find("QualityLow").resource
}, SettingsPanelScript.prototype.UpdateFullScreenToggle = function() {
    this.fullscreenToggleElement.sprite = Game.settings.fullScreen ? this.app.assets.find("FullscreenOff").resource : this.app.assets.find("FullscreenOn").resource
};
var Audio = pc.createScript("Audio");
Audio.prototype.initialize = function() {
    Audio = this, this.sound = Audio.entity.sound, this.muteAll = !1
}, Audio.prototype.MuteAll = function(i) {
    this.muteAll = i, this.sound.enabled = !i
};
var MenuPanelScript = pc.createScript("MenuPanelScript");
MenuPanelScript.prototype.initialize = function() {
    this.highScoreValueElement = this.entity.findByPath("Highscore/Value").element, this.nameElement = this.entity.findByPath("Name/Text").element, this.rankElement = this.entity.findByPath("Rank/Rank/Value").element, this.rankProgressElement = this.entity.findByPath("Rank/Progress").element, this.photoElement = this.entity.findByName("Photo").element, this.versionButton = this.entity.findByPath("Version"), this.versionElement = this.entity.findByPath("Version").element, this.versionElement.text = "v" + Game.details.version + " b" + Game.details.build.toString(), this.rewardVideo = this.entity.findByName("Boost"), this.giftTimeElement = this.entity.findByPath("Gift/Text").element, this.newTag = this.entity.findByName("NewTag"), this.heartsElement = this.entity.findByPath("Hearts/Text").element, this.on("enable", this.onEnable, this), this.on("disable", this.onDisable, this), this.onEnable()
}, MenuPanelScript.prototype.onEnable = function() {
    this.UpdateName(), this.UpdateRank(), this.UpdateHighscore(), this.UpdatePhoto(), this.UpdateCoins(), this.UpdateHearts(), this.UpdateNewTags("NewSkins"), this.SetLeaderBoardTween(), this.SetGiftTween(), this.UpdateGiftTime(Game.user.giftTime), this.ShowRewardVideo(), this.app.on("Interface:UpdateName", this.UpdateName, this), this.app.on("Interface:UpdateRank", this.UpdateRank, this), this.app.on("Interface:UpdateHighscore", this.UpdateHighscore, this), this.app.on("Interface:UpdatePhoto", this.UpdatePhoto, this), this.app.on("Interface:UpdateCoins", this.UpdateCoins, this), this.app.on("Interface:UpdateHearts", this.UpdateHearts, this), this.app.on("Interface:ShowRewardVideo", this.ShowRewardVideo, this), this.app.on("Interface:UpdateGiftTime", this.UpdateGiftTime, this), this.app.on("MenuPanel:UpdateNewTags", this.UpdateNewTags, this), this.app.on("MenuPanel:SetLeaderBoardTween", this.SetLeaderBoardTween, this), this.app.on("MenuPanel:SetGiftTween", this.SetGiftTween, this), this.app.on("Android:Fallback", this.AndroidFallback, this), !pc.platform.mobile && Game.settings.cheats && this.app.keyboard.on(pc.EVENT_KEYDOWN, this.OnKeyDown, this), Game.user.newUnlocks.length > 0 && Interface.SetPanelActive("UnlockedSkinPanel", !0)
}, MenuPanelScript.prototype.onDisable = function() {
    this.app.off("Interface:UpdateName", this.UpdateName, this), this.app.off("Interface:UpdateRank", this.UpdateRank, this), this.app.off("Interface:UpdateHighscore", this.UpdateHighscore, this), this.app.off("Interface:UpdatePhoto", this.UpdatePhoto, this), this.app.off("Interface:UpdateCoins", this.UpdateCoins, this), this.app.off("Interface:UpdateHearts", this.UpdateHearts, this), this.app.off("Interface:ShowRewardVideo", this.ShowRewardVideo, this), this.app.off("Interface:UpdateGiftTime", this.UpdateGiftTime, this), this.app.off("MenuPanel:UpdateNewTags", this.UpdateNewTags, this), this.app.off("MenuPanel:SetLeaderBoardTween", this.SetLeaderBoardTween, this), this.app.off("MenuPanel:SetGiftTween", this.SetGiftTween, this), this.app.off("Android:Fallback", this.AndroidFallback, this), this.app.keyboard.off(pc.EVENT_KEYDOWN, this.OnKeyDown, this)
}, MenuPanelScript.prototype.OnKeyDown = function(e) {
    e.key === pc.KEY_SPACE && Interface.OnButton("PlayButton")
}, MenuPanelScript.prototype.UpdatePhoto = function() {
    Debug.Log("[MenuPanelScript] UpdatePhoto()."), this.photoElement.texture = Game.user.photo.resource
}, MenuPanelScript.prototype.UpdateName = function() {
    Debug.Log("[MenuPanelScript] UpdateName()."), this.nameElement.text = Game.settings.isMiniclip ? "Guest" : Game.user.name, this.nameElement.color = Players.mainPlayer.color
}, MenuPanelScript.prototype.UpdateRank = function() {
    Debug.Log("[MenuPanelScript] UpdateRank()."), this.rankElement.text = Game.user.rank.toString(), this.rankProgressElement.text = Game.user.stars.toString() + "/" + Data.rankLimits[Game.user.rank]
}, MenuPanelScript.prototype.UpdateCoins = function() {
    Debug.Log("[MenuPanelScript] UpdateCoins()."), this.entity.findByPath("Coins/Text").element.text = Game.user.coins.toString()
}, MenuPanelScript.prototype.UpdateHearts = function() {
    Debug.Log("[LeaderboardPanelScript] UpdateHearts().");
    var e = Game.user.hearts;
    this.heartsElement.text = e.toString()
}, MenuPanelScript.prototype.UpdateHighscore = function() {
    Debug.Log("[MenuPanelScript] UpdateHighscore()."), this.highScoreValueElement.text = Game.user.highscore.toString()
}, MenuPanelScript.prototype.UpdateGiftTime = function(e) {
    this.giftTimeElement.text = e < 1 ? "" : Utils.FormatGiftTime(e)
}, MenuPanelScript.prototype.UpdateNewTags = function(e, t) {
    Debug.Log("[MenuPanelScript] UpdateNewTags()."), void 0 === t && (t = !1), t && Game.user.newTags.splice(Game.user.newTags.indexOf(e), 1);
    var i = Game.user.newTags.includes(e);
    this.newTag.enabled = i
}, MenuPanelScript.prototype.SetLeaderBoardTween = function() {
    Debug.Log("[MenuPanelScript] SetLeaderBoardTween().");
    var e = xFBInstant.isAvailable && void 0 !== xFBInstant.globalLeaderboardEntries ? xFBInstant.globalLeaderboardEntries.length : 0;
    e > 0 && (e -= 1);
    var t = Game.user.heartsGiven.length < e;
    this.entity.findByPath("Leaderboard/LeaderboardButton/Icon").script.tweenScale.Set(t)
}, MenuPanelScript.prototype.SetGiftTween = function() {
    this.entity.findByPath("Gift/GiftButton/Icon").script.tweenScale.Set(Game.user.giftUnlocked)
}, MenuPanelScript.prototype.ShowRewardVideo = function() {
    Debug.Log("[MenuPanelScript] ShowRewardVideo()"), this.rewardVideo.enabled = !0, xFBInstant.RequestAndPreload("10+StartBoost")
}, MenuPanelScript.prototype.AndroidFallback = function(e) {
    this.entity.findByName("AndroidFallback").element.text = e.toUpperCase(), Game.settings.debug && (this.entity.findByName("").element.color = new pc.Color(1, 0, 0, 1)), Debug.Log("")
};
var DestroyAfterSecondsScript = pc.createScript("DestroyAfterSecondsScript");
DestroyAfterSecondsScript.attributes.add("timeUntilDestroy", {
    type: "number",
    default: 1
}), DestroyAfterSecondsScript.prototype.initialize = function() {}, DestroyAfterSecondsScript.prototype.update = function(t) {
    this.timeUntilDestroy = pc.math.clamp(this.timeUntilDestroy - t, 0, this.timeUntilDestroy), 0 === this.timeUntilDestroy && this.entity.destroy()
};
var CodeTips = pc.createScript("codeTips");
var LeaderboardPanelScript = pc.createScript("LeaderboardPanelScript");
LeaderboardPanelScript.prototype.initialize = function() {
    this.parent = this.entity.findByPath("Players"), this.playerReference = this.entity.findByPath("Players/Player"), this.playerReference.enabled = !1, this.playerResults = [], this.heartsElement = this.entity.findByPath("Hearts/Text").element, this.sourceTweens = [], this.tweens = [], this.setInterval = void 0, this.entries = [], this.on("enable", this.onEnable, this), this.on("disable", this.onDisable, this), this.onEnable()
}, LeaderboardPanelScript.prototype.onEnable = function() {
    Debug.Log("[LeaderboardPanelScript] onEnable()."), this.entries = xFBInstant.globalLeaderboardEntries, this.UpdateHearts(Game.user.hearts), this.UpdateEntries(this.entries), this.app.on("Interface:UpdateHearts", this.UpdateHearts, this), this.app.on("xFBInstant:UpdateEntries", this.UpdateEntries, this)
}, LeaderboardPanelScript.prototype.onDisable = function() {
    Debug.Log("[LeaderboardPanelScript] onDisable()."), this.app.off("Interface:UpdateHearts", this.UpdateHearts, this), this.app.off("xFBInstant:UpdateEntries")
}, LeaderboardPanelScript.prototype.UpdateHearts = function(e) {
    Debug.Log("[LeaderboardPanelScript] UpdateHearts()."), this.heartsElement.text = e.toString(), this.UpdateLeaderboardResults()
}, LeaderboardPanelScript.prototype.UpdateEntries = function(e) {
    Debug.Log("[LeaderboardPanelScript] UpdateEntries()."), this.entries = e, this.UpdateLeaderboard()
}, LeaderboardPanelScript.prototype.ClearLeaderboard = function() {
    for (var e = this.playerResults.length - 1; e >= 0; e--) this.playerResults[e].destroy();
    this.playerResults.length = 0
}, LeaderboardPanelScript.prototype.BuildLeaderboard = function(e) {
    var t, a = (new pc.Vec3).copy(this.playerReference.getLocalPosition()),
        r = new pc.Vec3(0, -75, 0);
    a.sub(r), this.sourceTweens.length = 0;
    for (var n = 0; n < e; ++n)(t = this.playerReference.clone()).enabled = !0, t.reparent(this.parent, this.parent.children.length), t.findByName("LeaderboardShareButton").enabled = !1, a.add(r), t.setLocalPosition(a), this.playerResults.push(t), this.sourceTweens.push(t.findByPath("LeaderboardChallengeButton/Icon").script.tweenScale)
}, LeaderboardPanelScript.prototype.UpdateLeaderboard = function() {
    Debug.Log("[LeaderboardPanelScript] UpdateLeaderboard().");
    if (void 0 !== this.entries && 0 !== this.entries.length) {
        this.ClearLeaderboard();
        var e = pc.math.clamp(this.entries.length, 1, 10);
        this.BuildLeaderboard(e), this.StartTweens(), this.UpdateLeaderboardResults()
    }
}, LeaderboardPanelScript.prototype.StartTween = function(e) {
    e.enabled = !0, this.tweens.indexOf(e) > -1 && this.tweens.splice(this.tweens.indexOf(e), 1), 0 === this.tweens.length && clearInterval(this.setInterval)
}, LeaderboardPanelScript.prototype.StartTweens = function() {
    this.tweens = this.sourceTweens.slice();
    var e = this;
    this.setInterval = setInterval(function() {
        e.StartTween(e.tweens[0])
    }, 100)
}, LeaderboardPanelScript.prototype.UpdateLeaderboardResults = function() {
    var e, t, a, r, n, s;
    for (Debug.Log("[LeaderboardPanelScript] UpdateLeaderboardResults()."), i = 0; i < this.playerResults.length; ++i)
        if (e = this.playerResults[i], void 0 === this.entries) e.enabled = !0, e.findByName("Rank").element.text = "#" + (i + 1).toString(), e.findByName("LeaderboardShareButton").setLocalPosition(e.findByName("LeaderboardChallengeButton").getLocalPosition());
        else {
            e.findByName("Rank").element.text = "#" + (i + 1).toString(), e.findByName("Name").element.text = this.entries[i].getPlayer().getName();
            var o = this.entries[i].getScore();
            if (0 === (o = "number" == typeof o ? o : 0) && Debug.LogError("Score from player: " + this.entries[i].getPlayer().getName() + " was not a number."), e.findByName("Count").element.text = o.toString(), Utils.LoadImageIntoElement(e.findByName("ProfileImage").element, this.entries[i].getPlayer().getPhoto()), a = (t = this.entries[i].getPlayer().getID()) === xFBInstant.playerID, n = "LeaderboardChallengeButton_" + t, s = !Game.user.HasHeartGivenTo(t), null === (r = e.findByName("LeaderboardChallengeButton")) && (r = e.findByName(n)), r.enabled = !a, r.button.active = s, r.script.ButtonScript.enabled = s, r.name = n, !s) {
                var d = r.findByName("Icon").script.tweenScale;
                d.Set(!1), this.tweens.indexOf(d) > -1 && this.tweens.splice(this.tweens.indexOf(d), 1)
            }
            e.findByName("LeaderboardShareButton").enabled = a, e.findByName("LeaderboardShareButton").setLocalPosition(e.findByName(n).getLocalPosition())
        }
};
var MatchMakingPanelScript = pc.createScript("MatchMakingPanelScript");
MatchMakingPanelScript.prototype.initialize = function() {
    this.players = this.entity.findByPath("Window/Players"), this.spriteNames = Object.keys(Data.profilePhotos), this.loadingBarDescriptionElement = this.entity.findByPath("Window/LoadingBar/Description").element, this.frameCounter = 0, this.sequenceInProgress = !1, this.sequenceRanOnce = !1, this.sequenceState = 0, this.matchedPlayers = [], this.on("enable", this.onEnable, this), this.on("disable", this.onDisable, this), this.onEnable()
}, MatchMakingPanelScript.prototype.onEnable = function() {
    this.frameCounter = 0, this.sequenceInProgress = !1, this.sequenceRanOnce = !1, this.panelSequenceTime = 0, this.sequenceState = 0, this.loadingBarDescriptionElement.text = "", this.entity.findByName("Window").script.tweenScale.reset(), this.entity.findByPath("Window/LoadingBar/Fill").script.tweenScale.reset(), this.matchedPlayers.length = 0, this.ShowPlayers(!0), !pc.platform.mobile && Game.settings.cheats && this.app.keyboard.on(pc.EVENT_KEYDOWN, this.OnKeyDown, this)
}, MatchMakingPanelScript.prototype.OnKeyDown = function(e) {
    e.key === pc.KEY_SPACE && this.SkipSequence()
}, MatchMakingPanelScript.prototype.update = function(e) {
    this.sequenceRanOnce || this.Sequence(e)
}, MatchMakingPanelScript.prototype.Sequence = function(e) {
    this.panelSequenceTime = pc.math.clamp(this.panelSequenceTime + e, 0, 5), 0 === this.sequenceState && (this.sequenceInProgress = !0, this.frameCounter++, this.sequenceState++), this.panelSequenceTime > 0 && 1 === this.sequenceState && (this.loadingBarDescriptionElement.text = "Starting game...", this.sequenceState++), this.panelSequenceTime > 1 && 2 === this.sequenceState && (this.loadingBarDescriptionElement.text = "Player found...", this.sequenceState++), this.panelSequenceTime > 2 && 3 === this.sequenceState && (this.loadingBarDescriptionElement.text = "Finding opponents...", this.sequenceState++), this.panelSequenceTime > 4 && 4 === this.sequenceState && (this.loadingBarDescriptionElement.text = "Done!", this.sequenceState++), 5 === this.panelSequenceTime && this.SkipSequence()
}, MatchMakingPanelScript.prototype.SkipSequence = function() {
    Debug.Log("[Sequence] SkipSequence()"), Audio.sound.play("LevelUp"), Game.StartGameMode(), this.sequenceInProgress = !1, this.sequenceRanOnce = !0
}, MatchMakingPanelScript.prototype.ShowPlayers = function(e) {
    Debug.Log("[MatchMakingPanelScript] ShowPlayers: " + e);
    for (var t, i, n = this.players.children.length, a = 0; a < n - 1; ++a) {
        var s = this.players.children[a];
        s.setLocalScale(0, 0, 0), a > 0 ? (t = Math.floor(Math.random() * this.spriteNames.length), i = this.spriteNames[t], this.spriteNames.splice(t, 1), s.findByName("ProfileImage").element.sprite = Data.profilePhotos[i].resource, this.matchedPlayers.push(i)) : (i = Game.user.name, s.findByName("ProfileImage").element.texture = Game.user.photo.resource, s.findByName("Color").element.color = Players.mainPlayer.color), Debug.Log(a.toString() + ": " + i), s.script.tweenScale.reset()
    }
    Players.matchedPlayers = this.matchedPlayers.slice()
}, MatchMakingPanelScript.prototype.onDisable = function() {
    Debug.Log("[MatchMakingPanelScript] OnDisable()"), this.app.keyboard.off(pc.EVENT_KEYDOWN, this.OnKeyDown, this)
};
var PlayfieldScript = pc.createScript("PlayfieldScript");
PlayfieldScript.prototype.initialize = function() {
    Playfield = this, this.data = new PlayfieldData(this.entity), this.debug = !1, this.debug && (this.visualizer = Pools.CloneFromPool("Misc", "PlayfieldVisualizer"))
}, PlayfieldScript.prototype.update = function() {
    this.data.Update(), this.debug && (this.visualizer.setPosition(this.data.center), this.visualizer.setLocalScale(this.data.width, 1, this.data.height))
}, PlayfieldScript.prototype.IsInsideRect = function(i) {
    return this.data.IsInsideRect(i)
}, PlayfieldScript.prototype.IsInsideView = function(i) {
    return this.data.IsInsideView(i)
};

function PlayfieldData(t, i) {
    this.topLeft = new pc.Vec3, this.topRight = new pc.Vec3, this.bottomLeft = new pc.Vec3, this.bottomRight = new pc.Vec3, this.center = new pc.Vec3, this.cameraPosition = new pc.Vec3, this.startPosition = new pc.Vec3, this.endPosition = new pc.Vec3, this.p1 = new pc.Vec3, this.p2 = new pc.Vec3, this.planePoint = (new pc.Vec3).copy(pc.Vec3.ZERO), this.planeNormal = (new pc.Vec3).copy(pc.Vec3.DOWN), this.entity = t, this.camera = this.entity.camera, this.index = 0, this.width = 0, this.height = 0, void 0 === i && (i = 1), this.scale = i, PlayfieldData.prototype.Update = function() {
        window.innerWidth, window.innerHeight;
        switch (this.cameraPosition.copy(this.entity.getPosition()), this.index) {
            case 0:
                this.camera.screenToWorld(0, 0, this.camera.farClip, this.startPosition), this.endPosition.copy(this.startPosition).sub(this.cameraPosition).normalize(), Utils.LinePlaneIntersection(this.startPosition, this.endPosition, this.planeNormal, this.planePoint, this.topLeft);
                break;
            case 1:
                this.camera.screenToWorld(window.innerWidth, 0, this.camera.farClip, this.startPosition), this.endPosition.copy(this.startPosition).sub(this.cameraPosition).normalize(), Utils.LinePlaneIntersection(this.startPosition, this.endPosition, this.planeNormal, this.planePoint, this.topRight);
                break;
            case 2:
                this.camera.screenToWorld(0, window.innerHeight, this.camera.farClip, this.startPosition), this.endPosition.copy(this.startPosition).sub(this.cameraPosition).normalize(), Utils.LinePlaneIntersection(this.startPosition, this.endPosition, this.planeNormal, this.planePoint, this.bottomLeft);
                break;
            case 3:
                this.camera.screenToWorld(window.innerWidth, window.innerHeight, this.camera.farClip, this.startPosition), this.endPosition.copy(this.startPosition).sub(this.cameraPosition).normalize(), Utils.LinePlaneIntersection(this.startPosition, this.endPosition, this.planeNormal, this.planePoint, this.bottomRight)
        }
        if (this.index++, this.index > 3 && (this.index = 0), 0 === this.index) {
            this.width = Math.abs(this.topRight.x - this.topLeft.x) * this.scale, this.height = Math.abs(this.bottomLeft.z - this.topLeft.z) * this.scale;
            var t = .5 * (this.bottomRight.x - this.bottomLeft.x),
                i = .5 * (this.bottomLeft.z - this.topLeft.z);
            this.center.set(this.bottomLeft.x + t, .1, this.bottomLeft.z - i)
        }
    }, PlayfieldData.prototype.IsInsideRect = function(t) {
        return this.topLeft.x >= t.x && t.x >= this.topRight.x && t.z <= this.topLeft.z && t.z >= this.bottomLeft.z
    }, PlayfieldData.prototype.IsInsideView = function(t) {
        return Debug.Log("Not implemented - might not even be necessary..."), !0
    };
    for (var s = 0; s < 4; ++s) this.Update()
}
var BuildingsControllerScript = pc.createScript("BuildingsControllerScript");
BuildingsControllerScript.prototype.initialize = function() {
    this.buildings = 0, this.buildingsAABB = [], this.buildingsMaterial = [], this.buildingModels = [], this.buildingsMeshes = [], this.transparentMaterial = this.app.assets.find("BuildingTransparent_Material").resource, this.targetPosition = new pc.Vec3, this.inside = !1, this.index = 0, this.currentList = [], this.lastList = [];
    var t, s, e = this.app.root.findByName("Buildings");
    for (i = 0; i < e.children.length; i++) s = (t = e.children[i]).model.meshInstances[0], t.name.includes("Building") && (this.buildingsAABB.push(s.aabb), this.buildingsMaterial.push(s.material), this.buildingsMeshes.push(s), this.buildingModels.push(t.model));
    this.buildings = this.buildingsAABB.length, this.frameCounter = 0, this.defaultBatchGroup = 100005, this.transparentBatchGroup = 100008
}, BuildingsControllerScript.prototype.update = function(i) {
    if (this.frameCounter++, !(this.frameCounter % 10 > 0) && Game.gameMode.started) {
        this.targetPosition.copy(Players.mainPlayer.character.getPosition()), this.currentList.length = 0;
        for (var t = 0; t < this.buildings; t++) this.index = t, aabb = this.buildingsAABB[this.index], this.inside = aabb.center.z < this.targetPosition.z && this.targetPosition.x >= aabb.center.x - aabb.halfExtents.x && this.targetPosition.x <= aabb.center.x + aabb.halfExtents.x, this.inside && (-1 === this.lastList.indexOf(this.index) && (this.buildingModels[this.index].batchGroupId = this.transparentBatchGroup, this.buildingsMeshes[this.index].material = this.transparentMaterial), this.currentList.push(this.index));
        for (var s, e = 0; e < this.lastList.length; e++) s = this.lastList[e], this.currentList.includes(s) || (this.buildingModels[s].batchGroupId = this.defaultBatchGroup, this.buildingsMeshes[s].material = this.buildingsMaterial[s]);
        this.lastList = this.currentList.slice()
    }
};

function SpawnerData(t, i, e, s, n, a, r) {
    this.index = t, this.active = !1, this.position = (new pc.Vec3).copy(i), this.direction = new pc.Vec3, this.distanceSqr = 0, this.rect = new Rect(i, e, e);
    var h = .5 * e;
    this.radius = Math.sqrt(h * h + h * h), this.radiusSqr = this.radius * this.radius, this.spawnInterval = 0, this.maxSpawnInterval = 2, this.sourceSpawnInterval = .5, this.firstTimeActive = !0, this.firstTimeAmount = 3, this.scope = n, this.functionToCall = s, this.children = [], this.currentNode = 0;
    if (a) {
        var o = Pools.CloneFromPool("Misc", "GridVisualizer");
        o.setLocalScale(e, 1, e), o.setPosition(this.position), o.model.meshInstances[0].material = r
    }
    SpawnerData.prototype.AddChild = function(t) {
        return !!this.rect.IsInside(t.getPosition()) && (this.children.push(t), this.sourceSpawnInterval = this.maxSpawnInterval / this.children.length, !0)
    }, SpawnerData.prototype.UpdateState = function(t) {
        return this.direction.copy(this.position).sub(t), this.distanceSqr = this.direction.lengthSq(), this.SetState(this.distanceSqr <= this.radiusSqr), this.active
    }, SpawnerData.prototype.SetState = function(t) {
        if (!this.active && t)
            if (this.firstTimeActive) {
                for (var i = 0; i < this.firstTimeAmount; i++) this.Spawn();
                this.firstTimeActive = !1
            } else this.Spawn();
        this.active = t
    }, SpawnerData.prototype.Update = function(t) {
        this.active && (this.spawnInterval = pc.math.clamp(this.spawnInterval - t, 0, this.sourceSpawnInterval), 0 === this.spawnInterval && this.Spawn())
    }, SpawnerData.prototype.Spawn = function() {
        0 !== this.children.length && (this.functionToCall.call(this.scope, this.children[this.currentNode].getPosition(), this.children[this.currentNode].getRotation()), this.spawnInterval = this.sourceSpawnInterval, this.currentNode++, this.currentNode >= this.children.length && (this.currentNode = 0))
    }, SpawnerData.prototype.Reset = function() {
        this.spawnInterval = 0, this.sourceSpawnInterval = 3, this.firstTimeActive = !0
    }
}
var SkinsPanelScript = pc.createScript("SkinsPanelScript");
SkinsPanelScript.prototype.initialize = function() {
    this.owned = Game.user.unlockedCharacters, this.equipped = this.preview = Game.user.character, this.debugPreview = this.entity.findByName("DebugPreview"), this.debugPreview.enabled = !1, this.ownedSkinsTemp = this.entity.findByName("OwnedSkins").element, this.equippedSkinTemp = this.entity.findByName("EquippedSkin").element, this.previewSkinTemp = this.entity.findByName("PreviewSkin").element, this.requirement = this.entity.findByName("Requirement"), this.selected = this.entity.findByName("Selected"), this.select = this.entity.findByName("Select"), this.coins = this.entity.findByName("Coins"), this.coinsLocalPosition = (new pc.Vec3).copy(this.coins.getLocalPosition()), this.coinsLocalPosition.y = Data.allowBuyableSkins ? this.coinsLocalPosition.y : 215, this.coins.setLocalPosition(this.coinsLocalPosition), this.buy = this.entity.findByName("Buy"), this.buyText = this.buy.findByPath("SkinsBuyButton/Text").element, this.buyOverride = this.entity.findByName("BuyOverride"), this.buyOverrideText = this.buyOverride.findByPath("SkinsBuyButton/Text").element, this.characterData = void 0, this.achievementData = void 0, this.itemCost = 1e3, this.progressElement = this.requirement.findByName("Progress").element, this.fill = this.requirement.findByName("Fill"), this.descriptionElement = this.requirement.findByName("Description").element, this.content = this.entity.findByPath("Mask/Content"), this.contentPosition = new pc.Vec3, this.contentLocalPosition = (new pc.Vec3).copy(this.content.getLocalPosition()), this.lastY = 0, this.deltaY = 0, this.heartsElement = this.entity.findByPath("Hearts/Text").element, this.BuildSkinButtons(), this.on("enable", this.onEnable, this), this.on("disable", this.onDisable, this), this.onEnable()
}, SkinsPanelScript.prototype.onEnable = function() {
    Debug.Log("[SkinsPanelScript] onEnable()."), this.owned = Game.user.unlockedCharacters, this.equipped = this.preview = Game.user.character, this.app.on("Interface:PreviewSkin", this.PreviewSkin, this), this.app.on("Interface:SelectSkin", this.SelectSkin, this), this.app.on("Interface:UnlockSkin", this.UnlockSkin, this), this.app.on("Interface:UpdateCoins", this.UpdateCoins, this), this.app.on("SkinsPanel:UpdateNewUnlocks", this.UpdateNewUnlocks, this), this.app.on("SkinsPanel:UpdateNewTags", this.UpdateNewTags, this), this.app.mouse.on(pc.EVENT_MOUSEWHEEL, this.onMouseWheel, this), this.UpdateHearts(), this.UpdateCoins(), this.PreviewSkin(this.equipped), this.SetupContentScrolling()
}, SkinsPanelScript.prototype.onDisable = function() {
    Debug.Log("[SkinsPanelScript] onDisable(). Check if we need to revert back to character..."), this.app.off("Interface:PreviewSkin", this.PreviewSkin, this), this.app.off("Interface:SelectSkin", this.SelectSkin, this), this.app.off("Interface:UnlockSkin", this.UnlockSkin, this), this.app.off("Interface:UpdateCoins", this.UpdateCoins, this), this.app.off("SkinsPanel:UpdateNewUnlocks", this.UpdateNewUnlocks, this), this.app.off("SkinsPanel:UpdateNewTags", this.UpdateNewTags, this), this.app.mouse.off(pc.EVENT_MOUSEWHEEL, this.onMouseWheel, this), this.preview !== Game.user.character && this.BuildPlayer(this.equipped), this.ClearContentScrolling()
}, SkinsPanelScript.prototype.UpdateHearts = function() {
    Debug.Log("[LeaderboardPanelScript] UpdateHearts().");
    var e = Game.user.hearts;
    this.heartsElement.text = e.toString()
}, SkinsPanelScript.prototype.BuildSkinButtons = function() {
    for (var e, t = this.entity.findByPath("Mask/Content"), i = this.entity.findByPath("Mask/Content/DynamicButton"), n = (new pc.Vec3).copy(i.getLocalPosition()), s = Data.availablePlayerCharacters.length, a = new pc.Vec3, o = new pc.Vec3, h = 0, r = [0, 210, 420], c = [0, 48, 96], l = 0, p = ["ChibiBlue", "ChibiGreen", "ChibiRed"], d = 0; d < s; d++) {
        (e = this.entity.findByPath("Mask/Content/DynamicButton").clone()).name = "Skin" + (d + 1) + "Button", e.enabled = !0, e.reparent(t, t.children.length), a = new pc.Vec3(r[h], c[h], 0), o.copy(n).add(a), e.setLocalPosition(o), 3 === ++h && (h = 0, n.y -= 200);
        var u = Data.availablePlayerCharacters[d].includes("Chibi"),
            S = u ? "ChibiWhite" : Data.availablePlayerCharacters[d];
        u && (e.findByName("Icon").element.color = Game.palette[p[l]], l++), e.findByName("Icon").element.sprite = this.app.assets.find(S, "sprite").resource, this.UpdateNewUnlocks(d + 1, S), this.UpdateNewTags(d + 1, S)
    }
}, SkinsPanelScript.prototype.UpdateNewUnlocks = function(e, t, i) {
    void 0 === i && (i = !1);
    var n = this.entity.findByPath("Mask/Content/Skin" + e + "Button");
    i && Game.user.newUnlockedCharacters.indexOf(t) > -1 && Game.user.newUnlockedCharacters.splice(Game.user.newUnlockedCharacters.indexOf(t), 1), n.findByName("NewUnlock").enabled = Game.user.newUnlockedCharacters.includes(t)
}, SkinsPanelScript.prototype.UpdateNewTags = function(e, t, i) {
    void 0 === i && (i = !1);
    var n = this.entity.findByPath("Mask/Content/Skin" + e + "Button");
    i && Game.user.newTags.indexOf(t) > -1 && Game.user.newTags.splice(Game.user.newTags.indexOf(t), 1), n.findByName("NewTag").enabled = Game.user.newTags.includes(t)
}, SkinsPanelScript.prototype.BuildPlayer = function(e) {
    var t = (new pc.Vec3).copy(Players.mainPlayer.startPosition);
    Players.mainPlayer.Destroy();
    var i = Game.user.startCloneCount + Game.user.bonusCloneCount,
        n = Players.BuildPlayer(Game.user.name, Game.user.rank, i, e, t);
    Cameras.SetTarget(n.character)
}, SkinsPanelScript.prototype.PreviewSkin = function(e) {
    this.preview = e;
    var t = this.owned.indexOf(e) > -1;
    Debug.Log("[SkinsPanelScript] UpdateSkin owned skin: " + e + ", was: " + t), t ? (this.selected.enabled = e === this.equipped, this.select.enabled = e !== this.equipped, this.requirement.enabled = !1, this.coins.enabled = !0, this.buy.enabled = !1, this.buyOverride.enabled = !1) : (this.characterData = Data.characterData[this.preview], this.achievementData = Game.user.GetAchievementData(this.characterData.achievement), this.UpdateInformation(), this.selected.enabled = !1, this.select.enabled = !1, this.requirement.enabled = !0, this.coins.enabled = !0, this.requirement.enabled = !Data.IsSkinBuyable(this.preview), this.buy.enabled = Data.IsSkinBuyable(this.preview), this.buyOverride.enabled = !!Data.allowBuyableSkins);
    for (var i = this.content.children.length, n = 0; n < i; ++n) {
        var s = this.content.children[n].name.split("Button", 1)[0],
            a = parseInt(s.split("Skin")[1]) - 1;
        if (a >= Data.availablePlayerCharacters.length) return;
        var o = Data.availablePlayerCharacters[a],
            h = this.owned.indexOf(o) > -1;
        this.content.children[n].element.color = h ? new pc.Color(.8, .8, .8) : new pc.Color(.5, .5, .5), this.content.children[n].button.inactiveColor = this.content.children[n].element.color
    }
    this.BuildPlayer(this.preview), this.UpdateTempTexts()
}, SkinsPanelScript.prototype.UpdateInformation = function() {
    this.itemCost = this.characterData.price, this.buyText.text = this.itemCost.toString(), this.buyOverrideText.text = this.itemCost.toString(), this.progressElement.text = this.achievementData.progress.toString() + "/" + this.achievementData.limit.toString(), this.fill.setLocalScale(this.achievementData.progress / this.achievementData.limit, 1, 1), this.descriptionElement.text = this.achievementData.descriptionKey
}, SkinsPanelScript.prototype.SelectSkin = function() {
    Debug.Log("[SkinsPanelScript] SelectSkin equipped skin: " + this.equipped), this.equipped = this.preview, Game.user.character = this.equipped, Game.user.SaveData(), this.UpdateTempTexts()
}, SkinsPanelScript.prototype.UnlockSkin = function() {
    -1 === this.owned.indexOf(this.preview) ? Game.user.coins >= this.itemCost ? (Audio.sound.play("LevelUp"), Interface.Fade("FadeFromWhite"), this.owned.push(this.preview), Game.user.UpdateCoins(-Data.characterData[this.preview].price), xFBInstant.LogEvent("Item_Bought", 1, this.preview), Debug.Log("[SkinsPanelScript] UnlockSkin unlocked skin: " + this.preview), this.PreviewSkin(this.preview)) : (Audio.sound.play("Back"), Interface.Fade("FadeFromBlack")) : Debug.Log("[SkinsPanelScript] UnlockSkin skin: " + this.preview + " was already unlocked.")
}, SkinsPanelScript.prototype.UpdateTempTexts = function() {
    for (var e = "", t = 0; t < this.owned.length; ++t) e += 0 === t ? this.owned[t] : ", " + this.owned[t];
    this.ownedSkinsTemp.text = "Owned skins: " + e, this.equippedSkinTemp.text = "Equipped skin: " + this.equipped, this.previewSkinTemp.text = "Preview skin: " + this.preview
}, SkinsPanelScript.prototype.UpdateCoins = function() {
    this.entity.findByPath("Coins/Text").element.text = Game.user.coins.toString()
}, SkinsPanelScript.prototype.onMouseWheel = function(e) {
    e.wheel < 0 ? this.speed = -30 : this.speed = 30
}, SkinsPanelScript.prototype.SetupContentScrolling = function() {
    this.app.touch && (this.content.element.on(pc.EVENT_TOUCHMOVE, this.onTouchMove, this), this.content.element.on(pc.EVENT_TOUCHSTART, this.onTouchStart, this), this.content.element.on(pc.EVENT_TOUCHEND, this.onTouchEnd, this)), this.content.element.on(pc.EVENT_MOUSEMOVE, this.onTouchMove, this), this.content.element.on(pc.EVENT_MOUSEDOWN, this.onTouchStart, this), this.content.element.on(pc.EVENT_MOUSEUP, this.onTouchEnd, this), this.moveAllowed = !1, this.startY = 0, this.startTime = 0, this.endTime = 0, this.velocity = 0, this.speed = 0, this.multiplier = pc.platform.mobile ? 3 : 1;
    for (var e = new pc.Vec4(1, 1, 1, 1).scale(-40), t = this.content.children.length, i = 0; i < t; ++i) this.content.children[i].button.hitPadding.copy(e)
}, SkinsPanelScript.prototype.ClearContentScrolling = function() {
    this.content.element.off(pc.EVENT_TOUCHMOVE, this.onTouchMove, this), this.content.element.off(pc.EVENT_TOUCHSTART, this.onTouchStart, this), this.content.element.off(pc.EVENT_TOUCHEND, this.onTouchEnd, this), this.content.element.off(pc.EVENT_MOUSEMOVE, this.onTouchMove, this), this.content.element.off(pc.EVENT_MOUSEDOWN, this.onTouchStart, this), this.content.element.off(pc.EVENT_MOUSEUP, this.onTouchEnd, this), this.content.setLocalPosition(this.contentLocalPosition)
}, SkinsPanelScript.prototype.onTouchStart = function(e) {
    this.moveAllowed = !0, this.lastY = e.y, this.startY = e.y, this.startTime = Date.now()
}, SkinsPanelScript.prototype.onTouchEnd = function(e) {
    this.moveAllowed = !1, this.endTime = Date.now(), this.velocity = (this.lastY - this.startY) / (this.endTime - this.startTime), Math.abs(this.velocity) < 1 && (this.velocity = 0), this.speed = 0;
    for (var t = this.content.children.length, i = 0; i < t; ++i) this.content.children[i].button.active = !0
}, SkinsPanelScript.prototype.onTouchMove = function(e) {
    if (this.moveAllowed) {
        for (var t = this.content.children.length, i = 0; i < t; ++i);
        this.deltaY = this.lastY - e.y, this.lastY = e.y, this.OffsetContent(this.deltaY * this.multiplier)
    }
}, SkinsPanelScript.prototype.OffsetContent = function(e) {
    this.contentPosition.copy(this.content.getLocalPosition());
    var t = this.contentPosition.y + e;
    t = pc.math.clamp(t, -600, 550), this.contentPosition.y = t, this.content.setLocalPosition(this.contentPosition)
}, SkinsPanelScript.prototype.update = function(e) {
    0 !== this.speed && (this.OffsetContent(-1 * this.speed), this.speed *= .9)
};
var GameOverPanelScript = pc.createScript("GameOverPanelScript");
GameOverPanelScript.prototype.initialize = function() {
    this.coinsEl = this.entity.findByPath("GetCoins/RewardVideoGetCoinsButton/Text").element, this.on("enable", this.onEnable, this), this.on("disable", this.onDisable, this), this.onEnable()
}, GameOverPanelScript.prototype.onEnable = function() {
    this.coinsEl.text = "x" + Data.gameOverCoins.toString();
    var e = Players.mainPlayer;
    this.entity.findByPath("Rank/Text").element.text = "#" + e.rank, this.entity.findByPath("Rank/Text/Text").element.text = "#" + e.rank, void 0 === e.killedBy ? (this.entity.findByPath("Opponent/Name").element.text = "CPU - Cheat", this.entity.findByPath("Opponent/Name").element.color = Game.palette.red) : (this.entity.findByPath("Opponent/Name").element.text = e.killedBy.name, this.entity.findByPath("Opponent/Name").element.color = e.killedBy.color), Interface.PlayTween("GameOverPanel/Header"), Audio.sound.play("Killed")
};
var CloneEffectScript = pc.createScript("CloneEffectScript");
CloneEffectScript.prototype.Initialize = function(t) {
    this.material = this.app.assets.find("CloneEffect_Material").resource.clone(), this.material.name = t.name + "CloneEffect_Material", this.material.diffuse.set(t.color.r, t.color.g, t.color.b);
    for (var i = 0; i < this.entity.model.meshInstances.length; ++i) this.entity.model.meshInstances[i].material = this.material;
    this.duration = 0, this.sourceDuration = .3, this.on("enable", this.onEnable, this), this.on("disable", this.onDisable, this), this.onEnable()
}, CloneEffectScript.prototype.update = function(t) {
    this.duration = pc.math.clamp(this.duration + t, 0, this.sourceDuration), this.material.opacity = pc.math.lerp(1, 0, this.duration / this.sourceDuration), this.duration === this.sourceDuration && (this.entity.enabled = !1), this.material.update()
}, CloneEffectScript.prototype.onEnable = function() {
    this.material.opacity = 1, this.duration = 0
}, CloneEffectScript.prototype.onDisable = function() {}, CloneEffectScript.prototype.Show = function(t) {
    this.entity.enabled = !0, this.entity.setPosition(t)
};
var Target = pc.createScript("TargetScript");
Target.prototype.Initialize = function(t) {
    this.playerData = t;
    var e = new pc.Vec2(720, 1280).scale(.5),
        i = (new pc.Vec2).copy(e),
        n = 64;
    this.screenTop = new pc.Vec4(-i.x + n, i.y - n, i.x - n, i.y - n), this.screenLeft = new pc.Vec4(-i.x + n, i.y - n, -i.x + n, -i.y + n), this.screenBottom = new pc.Vec4(-i.x + n, -i.y + n, i.x - n, -i.y + n), this.screenRight = new pc.Vec4(i.x - n, i.y - n, i.x - n, -i.y + n), this.screenCenter = new pc.Vec2(0, 0), this.screenRadius = e.lengthSq() + 100, this.screenEdge = new pc.Vec4, this.playerLocation = new pc.Vec3, this.targetLocation = new pc.Vec3, this.targetDirection = new pc.Vec3, this.targetDirectionScreenSpace = new pc.Vec2, this.targetLine = new pc.Vec4, this.targetIcons = this.entity.parent, this.targetIcon = this.entity, this.cloneCountTextElement = this.entity.findByPath("Count/Value").element, this.cloneCountTextElement.text = "0", this.pivot = this.entity.findByName("Pivot"), this.pivot.findByName("Arrow").element.color = this.playerData.color, this.count = this.entity.findByName("Count"), this.count.element.color = this.playerData.color, this.countValueElement = this.count.findByName("Value").element, this.showing = !0
}, Target.prototype.update = function(t) {
    this.playerData.isInside ? this.showing && this.Show(!1) : (this.showing || this.Show(!0), this.playerLocation.copy(Players.mainPlayer.character.getLocalPosition()), this.UpdateTargetIcon(this.playerData.character))
}, Target.prototype.Show = function(t) {
    this.pivot.enabled = t, this.count.enabled = t, this.showing = t
}, Target.prototype.UpdateTargetIcon = function(t) {
    this.countValueElement.text = this.playerData.cloneCount.toString();
    var e = this.GetScreenBorderPosition(t);
    this.entity.setLocalPosition(e.x, e.y, 0);
    var i = this.ToEuler(this.targetDirection.x, -this.targetDirection.z);
    this.pivot.setLocalEulerAngles(0, 0, i)
}, Target.prototype.GetScreenBorderPosition = function(t) {
    this.targetLocation = t.getLocalPosition(), this.targetDirection.sub2(this.playerLocation, this.targetLocation), this.targetDirection.normalize(), this.targetDirectionScreenSpace.set(this.targetDirection.x * this.screenRadius, this.targetDirection.z * this.screenRadius * -1), this.targetLine.set(this.screenCenter.x, this.screenCenter.y, this.targetDirectionScreenSpace.x, this.targetDirectionScreenSpace.y);
    var e = new pc.Vec2,
        i = new pc.Vec2;
    return this.targetDirectionScreenSpace.x >= 0 ? this.targetDirectionScreenSpace.y >= 0 ? (1, !1 !== (e = this.LineSegmentsIntersect(this.screenTop, this.targetLine)) ? i = e : !1 !== (e = this.LineSegmentsIntersect(this.screenRight, this.targetLine)) && (i = e)) : (2, !1 !== (e = this.LineSegmentsIntersect(this.screenBottom, this.targetLine)) ? i = e : !1 !== (e = this.LineSegmentsIntersect(this.screenRight, this.targetLine)) && (i = e)) : this.targetDirectionScreenSpace.y >= 0 ? (4, !1 !== (e = this.LineSegmentsIntersect(this.screenTop, this.targetLine)) ? i = e : !1 !== (e = this.LineSegmentsIntersect(this.screenLeft, this.targetLine)) && (i = e)) : (3, !1 !== (e = this.LineSegmentsIntersect(this.screenBottom, this.targetLine)) ? i = e : !1 !== (e = this.LineSegmentsIntersect(this.screenLeft, this.targetLine)) && (i = e)), i
}, Target.prototype.LineSegmentsIntersect = function(t, e) {
    var i = t.x,
        n = t.y,
        r = t.z,
        s = t.w,
        c = e.x,
        a = e.y,
        o = e.z,
        h = e.w;
    if (i === r && n === s || c === o && a === h) return !1;
    var g = (h - a) * (r - i) - (o - c) * (s - n);
    if (0 === g) return !1;
    var p = ((o - c) * (n - a) - (h - a) * (i - c)) / g,
        y = ((r - i) * (n - a) - (s - n) * (i - c)) / g;
    if (p < 0 || p > 1 || y < 0 || y > 1) return !1;
    var l = i + p * (r - i),
        u = n + p * (s - n);
    return new pc.Vec2(l, u)
}, Target.prototype.ToEuler = function(t, e) {
    var i = 180 * Math.atan(e / t) / Math.PI;
    return t < 0 && (i += 180), (90 + i) % 360
};
var InviteFriendsPanelScript = pc.createScript("InviteFriendsPanelScript");
InviteFriendsPanelScript.prototype.initialize = function() {
    this.on("enable", this.onEnable, this), this.onEnable()
}, InviteFriendsPanelScript.prototype.onEnable = function() {
    Audio.sound.play("Results"), Interface.PlayTween(this.entity.name + "/Window")
};
var GiftPanelScript = pc.createScript("GiftPanelScript");
GiftPanelScript.prototype.initialize = function() {
    this.valueEl = this.entity.findByPath("Window/Gift/Shadow/Value").element, this.shadowEl = this.entity.findByPath("Window/Gift/Shadow").element, this.on("enable", this.onEnable, this), this.onEnable()
}, GiftPanelScript.prototype.onEnable = function() {
    this.valueEl.text = "x" + Data.giftCoins.toString(), this.shadowEl.text = "x" + Data.giftCoins.toString(), Audio.sound.play("Results"), Interface.PlayTween(this.entity.name + "/Window")
};
var UnlockedSkinPanelScript = pc.createScript("UnlockedSkinPanelScript");
UnlockedSkinPanelScript.prototype.initialize = function() {
    this.iconElement = this.entity.findByPath("Window/Skin/Icon").element, this.latestUnlock = "", this.on("enable", this.onEnable, this), this.onEnable()
}, UnlockedSkinPanelScript.prototype.onEnable = function() {
    this.latestUnlock = Game.user.newUnlocks[0], this.iconElement.sprite = this.app.assets.find(this.latestUnlock, "sprite").resource, Game.user.newUnlocks.splice(0, 1), Interface.PlayTween(this.entity.name + "/Window"), Audio.sound.play("Results")
};
var RankUpPanelScript = pc.createScript("RankUpPanelScript");
RankUpPanelScript.prototype.initialize = function() {
    this.rankElement = this.entity.findByPath("Window/Rank/Value").element, this.latestRank = 0, this.on("enable", this.onEnable, this), this.onEnable()
}, RankUpPanelScript.prototype.onEnable = function() {
    this.latestRank = Game.user.newRanks[0], this.rankElement.text = this.latestRank.toString(), Game.user.newRanks.splice(0, 1), Interface.PlayTween(this.entity.name + "/Window"), Audio.sound.play("Results")
};

function AdUnitData(e, a, t) {
    this.name = e, this.id = a, this.type = t, this.isPreloaded = !1, this.timeStamp = 0, this.code = "", this.ad = null, AdUnitData.prototype.Reward = function() {
        switch (xFBInstant.LogEvent("RewardedVideo_Reward", 1, this.name), this.name) {
            case "10+StartBoost":
                Interface.Fade("FadeFromWhite"), Audio.sound.play("LevelUp"), Audio.sound.play("PickUp"), Players.mainPlayer.AddClones(10, !0), Game.user.bonusCloneCount += 10, xFBInstant.LogEvent("Boost_Received");
                break;
            case "DoubleCoinGift":
                Interface.Fade("FadeFromWhite"), Audio.sound.play("LevelUp"), Audio.sound.play("Select"), Game.user.UpdateCoins(2 * Data.giftCoins), Game.user.firstTime = !1, Game.user.ResetGift(), Game.user.SaveData(), pc.app.fire("Interface:ShowMessage", "Coins x" + (2 * Data.giftCoins).toString() + "!"), Interface.SetPanelActive("GiftPanel", !1), xFBInstant.LogEvent("GiftDouble_Received");
                break;
            case "GameOverCoins":
                Interface.Fade("FadeFromWhite"), Audio.sound.play("LevelUp"), Audio.sound.play("PickUp"), Game.user.UpdateCoins(Data.gameOverCoins), Game.user.SaveData(), pc.app.fire("Interface:ShowMessage", "Coins x" + Data.gameOverCoins.toString() + "!"), xFBInstant.LogEvent("Coins_Received");
                break;
            case "DoubleXP":
                Interface.Fade("FadeFromWhite"), Audio.sound.play("LevelUp"), Audio.sound.play("PickUp"), Game.user.UpdateStars(Players.mainPlayer), Game.user.SaveData();
                var e = Game.user.GetRewardedStars(Players.mainPlayer);
                pc.app.fire("Interface:ShowMessage", e + " Stars added!"), xFBInstant.LogEvent("DoubleXP_Received");
                break;
            case "ContinueBoost":
                Game.user.sessionGamesPlayed = 0
        }
    }, AdUnitData.prototype.Failure = function() {
        switch (xFBInstant.LogEvent("RewardedVideo_Failed", 1, this.name), this.name) {
            case "10+StartBoost":
                break;
            case "DoubleCoinGift":
                Interface.SetPanelActive("GiftPanel", !1)
        }
    }
}
var HeartReceivedPanelScript = pc.createScript("HeartReceivedPanelScript");
HeartReceivedPanelScript.prototype.initialize = function() {
    this.on("enable", this.onEnable, this), this.onEnable()
}, HeartReceivedPanelScript.prototype.onEnable = function(e) {
    Interface.PlayTween(this.entity.name + "/Window"), Audio.sound.play("Results")
};

function Rect(t, i, o) {
    this.position = (new pc.Vec3).copy(t), this.width = i, this.height = o, this.topLeft = (new pc.Vec3).set(this.position.x + .5 * i, 0, this.position.z + .5 * o), this.topRight = (new pc.Vec3).set(this.position.x - .5 * i, 0, this.position.z + .5 * o), this.bottomLeft = (new pc.Vec3).set(this.position.x + .5 * i, 0, this.position.z - .5 * o), this.bottomRight = (new pc.Vec3).set(this.position.x - .5 * i, 0, this.position.z - .5 * o), Rect.prototype.IsInside = function(t) {
        return this.topLeft.x >= t.x && t.x >= this.topRight.x && t.z <= this.topLeft.z && t.z >= this.bottomLeft.z
    }
}
var Achievements = pc.createScript("Achievements");
Achievements.prototype.initialize = function() {}, Achievements.prototype.update = function(e) {};

function WaypointData(t, i) {
    this.waypoint = t, this.range = 5, this.rangeSqr = this.range * this.range, this.available = !0, this.position = (new pc.Vec3).copy(this.waypoint.getPosition()), this.direction = new pc.Vec3, this.distance = 0, this.north = [], this.south = [], this.west = [], this.east = [], this.threshold = .995, WaypointData.prototype.UpdateDirections = function(t) {
        this.north = [];
        for (var i, o = t.length, s = new pc.Vec3, e = new pc.Vec3, n = 0; n < o; n++) i = t[n], this.waypoint !== i && (e.copy(this.waypoint.getPosition()).sub(i.getPosition()).normalize(), s.copy(this.waypoint.forward), s.dot(e).toFixed(4) >= this.threshold && this.north.push(i), s.copy(this.waypoint.forward).scale(-1), s.dot(e).toFixed(4) >= this.threshold && this.south.push(i), s.copy(this.waypoint.right), s.dot(e).toFixed(4) >= this.threshold && this.west.push(i), s.copy(this.waypoint.right).scale(-1), s.dot(e).toFixed(4) >= this.threshold && this.east.push(i))
    }, WaypointData.prototype.Debug = function() {
        for (var t = new pc.Color(1, 0, 0), i = new pc.Color(1, .5, .5), o = new pc.Color(.5, 1, .5), s = new pc.Color(0, 1, 0), e = 0; e < this.north.length; e++) pc.app.renderLine(this.waypoint.getPosition(), this.north[e].getPosition(), t);
        for (e = 0; e < this.south.length; e++) pc.app.renderLine(this.waypoint.getPosition(), this.south[e].getPosition(), i);
        for (e = 0; e < this.west.length; e++) pc.app.renderLine(this.waypoint.getPosition(), this.west[e].getPosition(), o);
        for (e = 0; e < this.east.length; e++) pc.app.renderLine(this.waypoint.getPosition(), this.east[e].getPosition(), s)
    }, this.UpdateDirections(i), WaypointData.prototype.InRange = function(t) {
        return this.distance = this.direction.copy(this.position).sub(t).lengthSq(), this.distance <= this.rangeSqr
    }
}
var RenderLayerTotexture = pc.createScript("renderLayerTotexture");
RenderLayerTotexture.attributes.add("layerName", {
    type: "string"
}), RenderLayerTotexture.prototype.initialize = function() {
    this.on("enable", this.onEnable, this), this.on("disable", this.onDisable, this), this.onEnable()
}, RenderLayerTotexture.prototype.onEnable = function() {
    this.colorBuffer = new pc.Texture(this.app.graphicsDevice, {
        width: .5 * window.innerWidth,
        height: .5 * window.innerHeight,
        format: pc.PIXELFORMAT_R8_G8_B8,
        autoMipmap: !1
    }), this.renderTarget = new pc.RenderTarget(this.app.graphicsDevice, this.colorBuffer, {
        depth: !0,
        samples: 2
    }), this.layer = this.app.scene.layers.getLayerByName(this.layerName), this.layer.renderTarget = this.renderTarget, this.entity.element.texture = this.layer.renderTarget.colorBuffer
}, RenderLayerTotexture.prototype.onDisable = function() {
    this.renderTarget && this.renderTarget.destroy(), this.layer && (this.layer.renderTarget = void 0)
};
var LoadTextAssetScript = pc.createScript("LoadTextAssetScript");
LoadTextAssetScript.attributes.add("text", {
    type: "asset"
}), LoadTextAssetScript.prototype.initialize = function() {
    this.entity.element.text = this.text.resource
}, LoadTextAssetScript.prototype.update = function(t) {};
var Time = pc.createScript("Time");
Time.prototype.initialize = function() {
    this.deltaTime = 0, this.smoothDeltaTime = 1 / 60, this.previousSmoothDeltaTime = this.smoothDeltaTime, this.f = .2, Time = this
}, Time.prototype.update = function(t) {
    this.deltaTime = t, this.smoothDeltaTime = this.f * Time.deltaTime + (1 - this.f) * this.previousSmoothDeltaTime, this.previousSmoothDeltaTime = this.smoothDeltaTime
};
var ContinuePanelScript = pc.createScript("ContinuePanelScript");
ContinuePanelScript.prototype.initialize = function() {
    ShowYaBanner();
    this.time = 0, this.timeText = this.entity.findByPath("Timer/Text").element, this.timeShadowText = this.entity.findByPath("Timer/Text/Text").element, this.reviveBonusText = this.entity.findByPath("ContinuePaidButton/Text").element, this.paidButton = this.entity.findByPath("ContinuePaidButton"), this.adInformation = this.entity.findByPath("AdInformation"), this.rewardedVideoInfo = this.entity.findByPath("AdInformation/RewardedVideo"), this.coinsInfo = this.entity.findByPath("AdInformation/Coins"), this.coinsInfoText = this.entity.findByPath("AdInformation/Coins/Name").element, this.on("enable", this.onEnable, this), this.on("disable", this.onDisable, this), this.onEnable()
}, ContinuePanelScript.prototype.onEnable = function() {
    
}, ContinuePanelScript.prototype.onDisable = function() {}, ContinuePanelScript.prototype.update = function(t) {
    this.time = Math.max(0, this.time - t);
    var e = (0 | this.time).toString();
    this.timeText.text = this.timeShadowText.text = e, 0 === this.time && (Game.GameOver("Killed"), xFBInstant.LogEvent("Revive_TimeUp"))
};
var ReleaseNotesPanelScript = pc.createScript("ReleaseNotesPanelScript");
ReleaseNotesPanelScript.prototype.initialize = function() {
    this.resetButton = this.entity.findByPath("Window/ResetProgressButton"), this.resetButton.enabled = !1, this.tweenScale = this.entity.findByName("Window").script.tweenScale, this.on("enable", this.onEnable, this), this.on("disable", this.onDisable, this), this.onEnable()
}, ReleaseNotesPanelScript.prototype.onEnable = function() {
    this.tweenScale.reset(), this.app.keyboard.on(pc.EVENT_KEYDOWN, this.OnKeyDown, this)
}, ReleaseNotesPanelScript.prototype.onDisable = function() {
    this.app.keyboard.off(pc.EVENT_KEYDOWN, this.OnKeyDown, this)
}, ReleaseNotesPanelScript.prototype.OnKeyDown = function(e) {
    e.key === pc.KEY_0 && (this.resetButton.enabled = !this.resetButton.enabled)
};
var MiniclipInstantGamePanelScript = pc.createScript("MiniclipInstantGamePanelScript");
MiniclipInstantGamePanelScript.prototype.initialize = function() {
    this.on("enable", this.onEnable, this), this.onEnable()
}, MiniclipInstantGamePanelScript.prototype.onEnable = function(n) {
    Interface.PlayTween(this.entity.name + "/Window"), Audio.sound.play("Results")
}, MiniclipInstantGamePanelScript.prototype.update = function(n) {};