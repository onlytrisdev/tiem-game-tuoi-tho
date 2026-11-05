var Chars = [
  {name: 'po', hitbox:[82, 108, 314, 398], jumpfactor:0.75, snd:{intro:'po_yell1', lose:'Po_WhereAmI', win:'Po_MyFistHungersForJustics' }},
  {name: 'shifu', hitbox:[35, 25, 216, 175], reach:0.35, snd:{intro:'Po_Name_MasterShifu', lose:'Shifu_Perfect', win:'Shifu_YouNeedMoreFerocity' }},
  {name: 'meimei', hitbox:[0, 0, 400, 460], locked: false, reach:0.2, snd:{intro:'MeiMei_CmonMeiMeiYouCanDoThis', lose:'MeiMei_PandaPause', win:'MeiMei_Beautiful' }},
  {name: 'tigress', hitbox:[88, 64, 271, 328], reach:0.45, jumpfactor: 0.75, snd:{intro:'Po_Name_Tigress', lose:'Tigress_OhThatIsIt', win:'Tigress_YoureADisgraceToKungFu' }},
  {name: 'kai', hitbox:[217,131,476,550], locked: true, reach:0.25, snd:{intro:'kai_letsdo', win:'kai_win' }},
  {name: 'viper', hitbox:[0, 0, 260, 150], slide:0.875, hop:2, reach: 0.3, snd:{intro:'Po_Name_Viper', win:'Viper_StayDown' }},
  {name: 'mantis', hitbox:[0, 0, 98, 86], hop:25, hopx:7, snd:{intro:'Po_Name_Mantis_poor', win:'Mantis_Laugh' }},
  {name: 'monkey', hitbox:[279, 261, 175, 259], locked: false, snd:{intro:'Po_Name_Monkey', lose:'Monkey_PoWouldWantUsToRemainStrong' }},
  {name: 'crane', hitbox:[160, 84, 145, 360], reach:1.0, snd:{intro:'Po_Name_Crane_decent', lose:'Crane_ThatsImpossible', win:'Crane_YouDontBelongHere' }},
];
var CharName = function(c) { return Local.Text['char_' + Chars[c].name]; }

var Tournament = [
  {char:8,bg:0},
  {char:7,bg:1},
  {char:6,bg:1},
  {char:5,bg:2},
  {char:3,bg:3,unlock:0},
  {char:2,bg:4,unlock:1},
  {char:1,bg:4,unlock:1},
  {char:0,bg:5,unlock:2},
  {char:4,bg:5,unlock:3},
];
