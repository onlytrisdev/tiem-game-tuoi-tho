//> GameAudio constructor
function GameAudio () {

    // Active status
    this.Active = false;

    // Clip library
    this.All = [];

    // Status
    this.Data  = new GameLocalData();
    this.Music = this.Data.get("api-audio-music", "y") === "y";
    this.Sound = this.Data.get("api-audio-sound", "y") === "y";

    // Ambient loop
    this.Ambient = null;

}


//> GameAudio.Init
GameAudio.prototype.Init = function() {

    // Ambient loop
    this.Ambient = this.LoadClip("ambient1", 0.5);
    this.Ambient.Type     = 1;
    this.Ambient.AutoPlay = true;
    this.Ambient.Looping  = true;


    // Stingers
    this.LoadClip("stinger-victory", 0.5);
    this.LoadClip("stinger-defeat", 0.5);


    // Weapons
    this.LoadClip("grenade-launcher", 0.5);
    //
    this.LoadClip("revolver-shot", 0.3);
    this.LoadClip("revolver-clipout", 0.3);
    this.LoadClip("revolver-clipin", 0.3);
    this.LoadClip("de-shot", 0.3);
    this.LoadClip("de-clipout", 0.3);
    this.LoadClip("de-clipin", 0.3);
    //
    this.LoadClip("shell-insert", 0.5);
    this.LoadClip("shotgun-shot", 0.5);
    this.LoadClip("shotgun-pump", 0.5);
    this.LoadClip("spas-shot", 0.5);
    this.LoadClip("spas-pump", 0.5);
    //
    this.LoadClip("ak47-shot", 0.5);
    this.LoadClip("ak47-clipout", 0.5);
    this.LoadClip("ak47-clipin", 0.5);
    this.LoadClip("mp5-shot", 0.5);
    this.LoadClip("mp5-clipout", 0.5);
    this.LoadClip("mp5-clipin", 0.5);
    this.LoadClip("m4-shot", 0.5);
    //
    this.LoadClip("shepherd-shot", 0.5);
    this.LoadClip("scout-shot", 0.5);
    this.LoadClip("hellblade-shot", 0.5);
    this.LoadClip("m249-shot", 0.5);
    this.LoadClip("hmg-shot", 0.5);

    // Explosions
    this.LoadClip("explosion1", 0.5);
    this.LoadClip("explosion2", 0.5);

    // Shell Ground
    this.ShellGround = new GameAudioCollection(200);
    this.ShellGround.AddClip("shell-ground1", 0.5);
    this.ShellGround.AddClip("shell-ground2", 0.5);
    this.ShellGround.AddClip("shell-ground3", 0.5);

    // Zombie Flesh
    this.ZombieFlesh = new GameAudioCollection(50);
    this.ZombieFlesh.AddClip("bullet-flesh1", 0.3);
    this.ZombieFlesh.AddClip("bullet-flesh2", 0.3);
    this.ZombieFlesh.AddClip("bullet-flesh3", 0.3);
    this.ZombieFlesh.AddClip("bullet-flesh4", 0.3);
    this.ZombieFlesh.AddClip("bullet-flesh5", 0.3);
    this.ZombieFlesh.AddClip("bullet-flesh6", 0.3);

    // Zombie Attack
    this.ZombieAttack = new GameAudioCollection(50);
    this.ZombieAttack.AddClip("zombie-attack1", 0.5);
    this.ZombieAttack.AddClip("zombie-attack2", 0.5);
    this.ZombieAttack.AddClip("zombie-attack3", 0.5);
    this.ZombieAttack.AddClip("zombie-attack4", 0.5);

    // Zombie Death
    this.ZombieDeath = new GameAudioCollection(50);
    this.ZombieDeath.AddClip("zombie-death1", 0.3);
    this.ZombieDeath.AddClip("zombie-death2", 0.3);
    this.ZombieDeath.AddClip("zombie-death3", 0.3);

    // Zombie Grunt
    this.ZombieGrunt = new GameAudioCollection(50);
    this.ZombieGrunt.AddClip("zombie-grunt1", 0.5);
    this.ZombieGrunt.AddClip("zombie-grunt2", 0.5);
    this.ZombieGrunt.AddClip("zombie-grunt3", 0.5);
    this.ZombieGrunt.AddClip("zombie-grunt4", 0.5);
    this.ZombieGrunt.AddClip("zombie-grunt5", 0.5);
    this.ZombieGrunt.AddClip("zombie-grunt6", 0.5);

    // Speaker attack
    this.SpeakerAttack = new GameAudioCollection(50);
    this.SpeakerAttack.AddClip("speakerattack1", 0.5);
    this.SpeakerAttack.AddClip("speakerattack2", 0.5);

    // Misc
    this.LoadClip("button", 0.3);
    this.LoadClip("equip", 0.5);
    this.LoadClip("error", 0.3);
    this.LoadClip("woodbreak", 0.5);
    this.LoadClip("laser-charge", 0.5);
    this.LoadClip("laser-impact", 0.5);
    this.LoadClip("crowmagic", 0.5);

    this.EarnCoin = new GameAudioCollection(50);
    this.EarnCoin.AddClip("earncoin", 0.8);
    this.SpendCoin = new GameAudioCollection(50);
    this.SpendCoin.AddClip("spendcoin", 0.5);
    this.CoinDrop = new GameAudioCollection(50);
    this.CoinDrop.AddClip("coindrop", 0.5);

}; // GameAudio.Init


//> GameAudio.LoadClip
GameAudio.prototype.LoadClip = function(id, volume) {

    let clip = new GameAudioClip(id, volume);
    this.All.push(clip);
    return clip;

};


//> GameAudio.Find
GameAudio.prototype.Find = function(id) {

    for (let i=0; i<this.All.length; i++) {
        if (this.All[i].id === id) {
            return this.All[i];
        }
    }
    return null;

};


//> GameAudio.Play
GameAudio.prototype.Play = function(id) {

    if (id === "") {return;}
    let clip = this.Find(id);
    if (clip != null) {
        clip.Play();
    }

};


//> GameAudio.EnableMusic
GameAudio.prototype.EnableMusic = function(enable) {

    this.Music = enable;
    if (this.Music) {this.Data.set("api-audio-music", "y");}
    else            {this.Data.set("api-audio-music", "n");}

    // Ambient loop
    if (this.Ambient != null) {
        if (this.Music && this.Active) {
            this.Ambient.Loop();
        } else {
            this.Ambient.Stop();
        }
    }

};


//> GameAudio.EnableSound
GameAudio.prototype.EnableSound = function(enable) {

    this.Sound = enable;
    if (this.Sound) {this.Data.set("api-audio-sound", "y");}
    else            {this.Data.set("api-audio-sound", "n");}

};


//> GameAudio.SetActive
GameAudio.prototype.SetActive = function(active) {

    // Active status
    this.Active = active;

    // Ambient loop
    if (this.Ambient != null) {
        if (this.Music && this.Active) {
            this.Ambient.Loop();
        } else {
            this.Ambient.Stop();
        }
    }

};


//> GameAudioClip constructor
function GameAudioClip (id, volume) {

    // #id
    this.id = id;

    // Status
    this.Loaded  = false;
    this.Error   = false;
    this.Playing = false;
    this.SoundId = 0;

    // Setup
    this.Type     = 0;        // 0:sound 1:music
    this.AutoPlay = false;
    this.Looping  = false;

    // Source
    let source = ["audio/" + id + ".webm", "audio/" + id + ".mp3"];

    // Howl sound object
    let options = {src:source, autoplay:false, loop:false, volume:volume};
    options.onload      = () => {this.OnLoad();};
    options.onloaderror = () => {this.OnLoadError();};
    options.onunlock    = () => {this.OnUnlock();};
    this.HSound = new Howl(options);

}


//> GameAudioClip.OnLoad
GameAudioClip.prototype.OnLoad = function() {

    // Status
    this.Loaded = true;

    // Auto play?
    if (this.AutoPlay) {
        if (this.Looping) {
            this.Loop();
        } else {
            this.Play();
        }
    }

};


//> GameAudioClip.OnLoadError
GameAudioClip.prototype.OnLoadError = function() {

    console.log("GameAudioClip.OnLoadError");
    this.Error = true;

};


//> GameAudioClip.OnUnlock
GameAudioClip.prototype.OnUnlock = function() {



};


//> GameAudioClip.Play
GameAudioClip.prototype.Play = function() {

    if (!AUDIO.Active) {return;}
    //
    if (this.Type === 0 && !AUDIO.Sound) {return;}
    if (this.Type === 1 && !AUDIO.Music) {return;}
    //
    if (this.Loaded) {
        this.SoundId = this.HSound.play();
        this.Playing = true;
    }

};


//> GameAudioClip.Loop
GameAudioClip.prototype.Loop = function() {

    if (!AUDIO.Active) {return;}
    //
    if (this.Type === 0 && !AUDIO.Sound) {return;}
    if (this.Type === 1 && !AUDIO.Music) {return;}
    //
    if (this.Loaded) {
        this.SoundId = this.HSound.play();
        this.HSound.loop(true,this.SoundId);
        this.Playing = true;
    }

};


//> GameAudioClip.Stop
GameAudioClip.prototype.Stop = function() {

    if (this.Playing) {
        this.HSound.stop(this.SoundId);
    }

};


//> GameAudioCollection constructor
function GameAudioCollection (mindelay) {

    this.Clips    = [];
    this.MinDelay = mindelay;
    this.LastTime = 0;

}


//> GameAudioCollection.Play
GameAudioCollection.prototype.AddClip = function(id, volume) {

    let clip = new GameAudioClip(id, volume);
    this.Clips.push(clip);
    return clip;

};


//> GameAudioCollection.Play
GameAudioCollection.prototype.Play = function() {

    let d = new Date();
    let t = d.getTime();
    if (t > this.LastTime + this.MinDelay) {
        let i = Math.floor(Math.random() * this.Clips.length);
        if (i < this.Clips.length) {
            this.Clips[i].Play();
            this.LastTime = t;
        }
    }

};