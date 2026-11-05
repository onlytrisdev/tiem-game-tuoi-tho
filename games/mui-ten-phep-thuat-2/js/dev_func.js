"use strict";
//time in seconds from window.onload
//you can pause and continue the music
//pause_music(); , continue_music();
var time_playing = -1;
var adcnt = 0;
setInterval(function() {
    // adcnt++;
}, 999);

function on_window_load() {
    console.log("on_window_load");
}

function on_press_run() {
    console.log("on_press_run");
}

function on_press_continue() {
    LaggedAPI.GEvents.next();
}

function on_game_tick() {
    //console.log(time_playing);
}
//end game play , still hit the knights
function on_level_end() {
    console.log("on_level_end");
}
//ran out of arrows before a knight
function no_more_arrows() {
    // if(adcnt>30){
    //   LaggedAPI.APIAds.show('interstitial','arrow-fest','arrow-fest-game.png',function(response) {
    //     adcnt=-30;
    //   if(response.success) {
    //   console.log('ad done');
    //   }else {
    //   console.log('ad error, continue');
    //   }
    //   });
    // }
}
//defeated all knights, receive the number of wins
function on_win(wins) {
    var boardinfo = {};
    boardinfo.score = wins;
    boardinfo.board = "arrow_festgm_hsrdbd";
    // LaggedAPI.Scores.save(boardinfo, function(response) {
    //     if (response.success) {
    //         console.log('high score saved')
    //     } else {
    //         console.log(response.errormsg);
    //     }
    // });
    //win game
    var ach_numb = [];
    ach_numb.push("arrow_festgm_vja001");
    LaggedAPI.Achievements.save(ach_numb, function(response) {
        if (response.success) {
            console.log('achievement saved')
        } else {
            console.log(response.errormsg);
        }
    });
}