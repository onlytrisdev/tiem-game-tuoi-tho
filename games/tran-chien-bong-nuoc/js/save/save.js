//import { CHEATS } from "../config/gameplay.js";
let saveName = "craighydroassault";

class SaveData {
    constructor() {
        this.sfx = 0;
        this.music = 0;
        this.gold = 0;
        this.levelGold = 0;
        this.highscore = 0;
        this.score = 0;
        this.tutorial = false;
        this.collectorGold = 0;

        //costumes
        this.school = 0;
        this.adventure = 0;
        this.lab = 0;
        this.super = 0;
        this.raincoat = 0;
        this.ace = 0;

        //power-ups
        this.health = 0;
        this.hose = 0;
        this.bucket = 0;
        this.balloon = 0;

        this.maxScore = 999999;
        this.maxGold = 999999;

        this.powerAchievement = 0;
        this.costumeAchievement = 0;

        this.bucketBool = false;
        this.hoseBool = false;
        this.balloonBool = false;

        this.saveData = {
            totalPlayerCoins: 0,
            tutorialized: false,
            allTimeHighScore: 0
        };
    }

    load() {

        console.log("TRYING TO LOAD");
        try{
            if (typeof (Storage) !== 'undefined' && (typeof window.localStorage !== 'undefined')) {
                var saveData = window.localStorage.getItem(saveName);
    
                if (saveData) {
                    saveData = JSON.parse(saveData);
                    this.saveData.totalPlayerCoins = saveData.totalPlayerCoins;
                    this.saveData.allTimeHighScore = saveData.allTimeHighScore;
                    this.saveData.tutorialized = saveData.tutorialized;
                    this.getSaveDataHighScore();
                    this.getSaveDataCoins();
                    console.log("Loaded");
                }
                else {
                    console.log("Nothing to load");
                }
            } else {
                console.log('local storage is not available on this browser')
            }
        }
        catch(e){
            console.log('local storage is not available on this browser')
        }
        
        var totalPlayerCoins = this.saveData.totalPlayerCoins
        if (totalPlayerCoins === null || totalPlayerCoins === undefined || isNaN(totalPlayerCoins)) {
            this.saveData.totalPlayerCoins = 0;
        }

        var tutorialized = this.saveData.tutorialized
        if (tutorialized === null || tutorialized === undefined || isNaN(tutorialized)) {
            this.saveData.tutorialized = false;
        }

    }

    save() {
        this.setSaveDataCoins();
        
        try{
            if (typeof (Storage) !== 'undefined' && (typeof window.localStorage !== 'undefined')) {
                window.localStorage.setItem(saveName, JSON.stringify(this.saveData));
            } else {
                console.log('local storage is not available on this browser')
            }
        }
        catch(e){
            console.log('local storage is not available on this browser')
        }

    }

    initSession() { 
        this.levelGold = 0;
        this.score = 0;
    }

    finishSession() {

        // TODO
        this.addGold(this.levelGold);
        this.levelGold = 0;

        //this.setSDKState();

        this.addHighScore(this.score);
        this.score = 0;
    }

    addLevelGold(value) {
        this.levelGold += value;
        if (this.levelGold > this.maxGold) {
            this.levelGold = this.maxGold;
        }
    }

    addCollectorGold(value) {
        this.collectorGold += value;
        if(this.collectorGold < 301)
        {
            achievements_manager.setAchievementProgress(achievements_id.the_collector, this.collectorGold);
        }
    }

    addGold(value) {
        this.gold += value;
        if (this.gold > this.maxGold) {
            this.gold = this.maxGold;
        }
        this.levelGold = 0;
        //this.save();
    }

    removeGold(value) {
        this.gold -= value;
        if (this.gold < 0) {
            this.gold = 0;
        }
        //this.save();
    }

    addScore(value) {
        this.score += value;
        if (this.score > this.maxScore) {
            this.score = this.maxScore;
        }
        globalsignal.emit(ge.UPDATE_INGAME_UI, { score: this.score });
    }

    addHighScore(value) {
        if (value > this.highscore) {
            this.highscore = value;
            if (this.highscore > this.maxScore) {
                this.highscore = this.maxScore;
            }
            this.setSaveDataHighScore();
        }
    }

    getSaveDataCoins() {
        console.log('reading GOLD:');
        this.gold = this.saveData.totalPlayerCoins;
    }

    setSaveDataCoins() {
        this.saveData.totalPlayerCoins = this.gold;
    }

    getSaveDataTutorial() {
        console.log('reading TUTORIAL:');
        this.tutorial = this.saveData.tutorialized;
    }

    setSaveDataTutorial() {
        this.saveData.tutorialized = this.tutorial;
    }

    getSaveDataHighScore() {
        console.log('reading HIGHSCORE:');
        this.highscore = this.saveData.allTimeHighScore;
    }

    setSaveDataHighScore() {
        console.log('setting HIGHSCORE:', this.highscore);
        if (this.highscore > this.saveData.allTimeHighScore) {
            this.saveData.allTimeHighScore = this.highscore;
            this.save();
        }
    }

    setItemUse(name) {
        console.log("SET ITEM USE");

        switch(name) 
        {
            case "bucket":
                //this.setSDKState();
                console.log("BUCKET SET ITEM USE 2");
                if(!this.bucketBool)
                {
                    this.bucketBool = true;
                    this.powerAchievement++;
                    console.log(this.powerAchievement);
                    achievements_manager.setAchievementProgress(achievements_id.unlimited_power, this.powerAchievement);
                }
                break;
            case "hose":
                //this.setSDKState();
                console.log("HOSE SET ITEM USE 2");
                if(!this.hoseBool)
                {
                    this.hoseBool = true;
                    this.powerAchievement++;
                    console.log(this.powerAchievement);
                    achievements_manager.setAchievementProgress(achievements_id.unlimited_power, this.powerAchievement);
                }
                break;
            case "balloon":
                //this.setSDKState();
                console.log("BALLOON SET ITEM USE 2");
                if(!this.balloonBool)
                {
                    this.balloonBool = true;
                    this.powerAchievement++;
                    console.log(this.powerAchievement);
                    achievements_manager.setAchievementProgress(achievements_id.unlimited_power, this.powerAchievement);
                }
                break;
            default:

                break;
        }
    }

    setCostumeUse(name) 
    {
            switch(name) 
            {
                case "school":
                    if(this.school < 1)
                    {
                        this.costumeAchievement++
                        achievements_manager.setAchievementProgress(achievements_id.costume_master, this.costumeAchievement);
                        this.school = 1;
                    }
                    
                    break;
                case "adventure":
                    if(this.adventure < 1)
                    {
                        this.costumeAchievement++
                        achievements_manager.setAchievementProgress(achievements_id.costume_master, this.costumeAchievement);
                        this.adventure = 1;
                    }
                    break;
                case "lab":
                    if(this.lab < 1)
                    {
                        this.costumeAchievement++
                        achievements_manager.setAchievementProgress(achievements_id.costume_master, this.costumeAchievement);
                        this.lab = 1;
                    }
                    break;
                case "super":
                    if(this.super < 1)
                    {
                        this.costumeAchievement++
                        achievements_manager.setAchievementProgress(achievements_id.costume_master, this.costumeAchievement);
                        this.super = 1;
                    }
                    break;
                case "raincoat":
                    if(this.raincoat < 1)
                    {
                        this.costumeAchievement++
                        achievements_manager.setAchievementProgress(achievements_id.costume_master, this.costumeAchievement);
                        this.raincoat = 1;
                    }
                    break;
                case "ace":
                    if(this.ace < 1)
                    {
                        this.costumeAchievement++
                        achievements_manager.setAchievementProgress(achievements_id.costume_master, this.costumeAchievement);
                        this.ace = 1;
                    }
                    break;
                default:

                    break;   
        }   
    }   

    isValid(value) {
        return value !== null && value !== undefined;
    }
}
