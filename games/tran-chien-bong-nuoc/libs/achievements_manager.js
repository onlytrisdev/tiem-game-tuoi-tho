const achievements_id = {
    'king_of_the_hill': 'f1da4aab-011c-4f22-b69c-61de3e74c324',
    'the_collector': 'de27c24e-69f8-4d97-93c5-ed44bb485d41',
    'the_warden': 'b793cb5e-35a1-4dc0-b4b9-0c4ae3cae736',
    'costume_master': 'c3a34710-f5da-4791-b86b-a9de325cfee5',
    'become_a_legend': '4e052aec-574e-45ae-9241-ffee8542a9b1',
    'unlimited_power': 'edc8052c-d229-4ac1-a5cd-8cec6faf5cdf',
};

let achievements_data = {
    'f1da4aab-011c-4f22-b69c-61de3e74c324': {//king_of_the_hill
        acquired: 0,
        required: 0
    },
    'de27c24e-69f8-4d97-93c5-ed44bb485d41': {//the_collector
        acquired: 0,
        required: 0
    },
    'b793cb5e-35a1-4dc0-b4b9-0c4ae3cae736': {//the_warden
        acquired: 0,
        required: 0
    },
    'c3a34710-f5da-4791-b86b-a9de325cfee5': {//costume_master
        acquired: 0,
        required: 0
    },
    '4e052aec-574e-45ae-9241-ffee8542a9b1': {//become_a_legend
        acquired: 0,
        required: 0
    },
    'edc8052c-d229-4ac1-a5cd-8cec6faf5cdf': {//unlimited_power
        acquired: 0,
        required: 0
    },
};

class AchivementsManager {
    constructor() { }

    init() {
        //window['PlayPromise'].then((sdk) => {
        //    sdk.achievements.forEach((achievement) => {
        //        const uuid = achievement.id;
        //        achievements_data[uuid].acquired = achievement.timesAcquired;
        //        achievements_data[uuid].required = achievement.timesRequired;
        //        console.log("achievement: ", uuid, achievement.name, achievement);    
        //    });
        //});
    }

    unlockAchievement(uuid) {
        //if (window['PlayPromise']) {
        //    window['PlayPromise'].then((sdk) => {
        //        sdk.unlockAchievement(uuid).then((achievement) => {
        //            console.log('Successfully unlocked achievement', achievement.name, achievement);
        //        });
        //    });
        //}
    }

    setAchievementProgress(uuid, progress) {
        //let DATA = achievements_data[uuid];
        //console.log("Achievement: " + this.getAchievementName(uuid) + " - (" + uuid + ")" + " progress: " + DATA.acquired + " / " + DATA.required);
        //
        //window['PlayPromise'].then((sdk) => {
        //       try {
        //        sdk.setAchievementProgress(uuid, progress);
        //        console.log('SDKManager.setAchievementProgress => ', uuid, progress);
        //    } catch (e) {
        //        console.warn('SDKManager.setAchievementProgress error => ', e);
        //        console.log(uuid);
        //    }
        //});
    }

    setWardenAchievementProgress(uuid, progress) {
        //let DATA = achievements_data[uuid];
        //console.log("Achievement: " + this.getAchievementName(uuid) + " - (" + uuid + ")" + " progress: " + DATA.acquired + " / " + DATA.required);
        //
        //let newProgress = DATA.acquired + progress;
        //
        //if (newProgress > DATA.required) {
        //    return;
        //}
        //
        //window['PlayPromise'].then((sdk) => {
        //    sdk.setAchievementProgress(uuid, newProgress).then((achievement) => {
        //        DATA.acquired = achievement.timesAcquired;
        //        DATA.required = achievement.timesRequired;
        //
        //        if (achievement.completed) {
        //            console.log('Successfully unlocked achievement', achievement.name, achievement);
        //        } else {
        //            console.log('Achievement progress, completed', achievement.timesAcquired, 'times of required', achievement.timesRequired)
        //        }
        //        console.log("Achievement " + uuid + " progress: " + DATA.acquired + " / " + DATA.required);
        //    });
        //});
    }

    getAchievementProgress(uuid) {
        //let DATA = achievements_data[uuid];
        //
        //window['PlayPromise'].then((sdk) => {
        //    sdk.getAchievementProgress(uuid).then((progress) => {
        //        DATA.acquired = progress;
        //        console.log('Progress for', id, ':', progress)
        //    });
        //});
    }

    getAchievementName(uuid) {
        for (let i in achievements_id) {
            if (uuid === achievements_id[i]) return i;
        }
        return "name not found";
    }
}

achievements_manager = new AchivementsManager();