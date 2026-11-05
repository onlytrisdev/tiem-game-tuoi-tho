let currentLevel = 0;
let moneyCount = 0;


const arenasRange = {
	twoArenasMinChance: 0.2,
	threeArenasMinChance: 0,
	midSizeMinChance: 0.5,
	maxSizeMinChance: 0,
	levelMid: 10,
	twoArenasMidChance: 0.7,
	threeArenasMidChance: 0.2,
	midSizeMidChance: 0.5,
	maxSizeMidChance: 0.3,
	levelMax: 100,
	twoArenasMaxChance: 0.95,
	threeArenasMaxChance: 0.9,
	midSizeMaxChance: 0.5,
	maxSizeMaxChance: 0.5
}


// FOOD SETTINGS
let foodDropDelay = 1000;
const foodValue = [1, 5, 10, 50];
const foodValueChances = [0.18, 0.04, 0.01];
const foodValueColor = [0x76FF03, 0x00E5FF, 0xFF4081, 0xE040FB];
const foodDist = 0.8;
// COIN SETTINGS
const enemiesLifeValue = [50, 200];
const coinValue = [1, 5, 10];
// LOST LIVES SETTINGS
const lostLivesDelay = 1150;
// ENEMIES SETTINGS
const enemiesLives = [];
// BRIDGE BONUS SETTINGS
const chancesForDouble = 0.3;
const livesChances = [1, 10];
// BASIC BONUS SETTINGS
const basicBonusChance = 0.3;
const basicBonusDelay = 5020;
// VIDEO BONUS SETTINGS
const videoBonusChance = 0.3;
const videoBonusDelay = 5030;
// BOMB SETTINGS
const bombDelay = 6200;
// HERO SETTINGS
let chosenHero = 0;
let heroData = [
	// Leo Nerd 0
	{
		currentLives: 1,
		currentColor: 0,
		maxSpeed: 2,
		currentSpeed: 1,
		currentMagnet: 1,
		maxMagnet: 2,
		currentPower: 1,
		maxPower: 2,
		speedPrice: [0, 5, 20, 50, 100, 250, 500],
		powerPrice: [0, 5, 20, 50, 100, 250, 500],
		magnetPrice: [0, 5, 20, 50, 100, 250, 500],
		levelBlock: -1,
		price: { type: "coins", sum: 0 },
		colorPrice: [{ type: "coins", sum: 0 }, { type: "ads", sum: 1 }, { type: "coins", sum: 3 }, { type: "coins", sum: 5 }, { type: "coins", sum: 7 }]
	},
	// Clown 2
	{
		currentLives: 1,
		currentColor: 0,
		maxSpeed: 3,
		currentSpeed: 1,
		currentMagnet: 1,
		maxMagnet: 3,
		currentPower: 1,
		maxPower: 2,
		speedPrice: [0, 5, 20, 50, 100, 250, 500],
		powerPrice: [0, 5, 20, 50, 100, 250, 500],
		magnetPrice: [0, 5, 20, 50, 100, 250, 500],
		levelBlock: -1,
		price: { type: "coins", sum: 30 },
		colorPrice: [{ type: "coins", sum: 0 }, { type: "ads", sum: 1 }, { type: "coins", sum: 5 }, { type: "coins", sum: 7 }, { type: "coins", sum: 10 }]
	},
	// Bear 3
	{
		currentLives: 1,
		currentColor: 0,
		maxSpeed: 2,
		currentSpeed: 1,
		currentMagnet: 1,
		maxMagnet: 3,
		currentPower: 2,
		maxPower: 4,
		speedPrice: [0, 5, 20, 50, 100, 250, 500],
		powerPrice: [0, 5, 20, 50, 100, 250, 500],
		magnetPrice: [0, 5, 20, 50, 100, 250, 500],
		levelBlock: -1,
		price: { type: "ads", sum: 3 },
		colorPrice: [{ type: "coins", sum: 0 }, { type: "ads", sum: 1 }, { type: "coins", sum: 5 }, { type: "coins", sum: 7 }, { type: "coins", sum: 10 }]
	},
	// Spiderman 11
	{
		currentLives: 3,
		currentColor: 0,
		maxSpeed: 6,
		currentSpeed: 3,
		currentMagnet: 3,
		maxMagnet: 6,
		currentPower: 3,
		maxPower: 6,
		speedPrice: [0, 5, 20, 50, 100, 250, 500],
		powerPrice: [0, 5, 20, 50, 100, 250, 500],
		magnetPrice: [0, 5, 20, 50, 100, 250, 500],
		levelBlock: 35,
		price: { type: "coins", sum: 500 },
		colorPrice: [{ type: "coins", sum: 0 }, { type: "ads", sum: 3 }, { type: "coins", sum: 30 }, { type: "coins", sum: 60 }, { type: "coins", sum: 100 }]
	},
	// John 6
	{
		currentLives: 2,
		currentColor: 0,
		maxSpeed: 4,
		currentSpeed: 2,
		currentMagnet: 1,
		maxMagnet: 3,
		currentPower: 2,
		maxPower: 5,
		speedPrice: [0, 5, 20, 50, 100, 250, 500],
		powerPrice: [0, 5, 20, 50, 100, 250, 500],
		magnetPrice: [0, 5, 20, 50, 100, 250, 500],
		levelBlock: 10,
		price: { type: "coins", sum: 120 },
		colorPrice: [{ type: "coins", sum: 0 }, { type: "ads", sum: 2 }, { type: "coins", sum: 10 }, { type: "coins", sum: 20 }, { type: "coins", sum: 30 }]
	},
	// Simpson 4
	{
		currentLives: 1,
		currentColor: 0,
		maxSpeed: 3,
		currentSpeed: 1,
		currentMagnet: 2,
		maxMagnet: 4,
		currentPower: 1,
		maxPower: 3,
		speedPrice: [0, 5, 20, 50, 100, 250, 500],
		powerPrice: [0, 5, 20, 50, 100, 250, 500],
		magnetPrice: [0, 5, 20, 50, 100, 250, 500],
		levelBlock: -1,
		price: { type: "coins", sum: 50 },
		colorPrice: [{ type: "coins", sum: 0 }, { type: "ads", sum: 1 }, { type: "coins", sum: 7 }, { type: "coins", sum: 10 }, { type: "coins", sum: 15 }]
	},
	// Hulk 1
	{
		currentLives: 1,
		currentColor: 0,
		maxSpeed: 2,
		currentSpeed: 1,
		currentMagnet: 1,
		maxMagnet: 2,
		currentPower: 1,
		maxPower: 3,
		speedPrice: [0, 5],
		powerPrice: [0, 5, 20],
		magnetPrice: [0, 5],
		speedPrice: [0, 5, 20, 50, 100, 250, 500],
		powerPrice: [0, 5, 20, 50, 100, 250, 500],
		magnetPrice: [0, 5, 20, 50, 100, 250, 500],
		levelBlock: -1,
		price: { type: "coins", sum: 10 },
		colorPrice: [{ type: "coins", sum: 0 }, { type: "ads", sum: 1 }, { type: "coins", sum: 3 }, { type: "coins", sum: 5 }, { type: "coins", sum: 7 }]
	},
	// Clone 8
	{
		currentLives: 2,
		currentColor: 0,
		maxSpeed: 4,
		currentSpeed: 2,
		currentMagnet: 1,
		maxMagnet: 4,
		currentPower: 3,
		maxPower: 5,
		speedPrice: [0, 5, 20, 50, 100, 250, 500],
		powerPrice: [0, 5, 20, 50, 100, 250, 500],
		magnetPrice: [0, 5, 20, 50, 100, 250, 500],
		levelBlock: 15,
		price: { type: "coins", sum: 200 },
		colorPrice: [{ type: "coins", sum: 0 }, { type: "ads", sum: 2 }, { type: "coins", sum: 10 }, { type: "coins", sum: 20 }, { type: "coins", sum: 30 }]
	},
	// Unicorn 10
	{
		currentLives: 2,
		currentColor: 0,
		maxSpeed: 6,
		currentSpeed: 3,
		currentMagnet: 3,
		maxMagnet: 6,
		currentPower: 2,
		maxPower: 5,
		speedPrice: [0, 5, 20, 50, 100, 250, 500],
		powerPrice: [0, 5, 20, 50, 100, 250, 500],
		magnetPrice: [0, 5, 20, 50, 100, 250, 500],
		levelBlock: 30,
		price: { type: "coins", sum: 350 },
		colorPrice: [{ type: "coins", sum: 0 }, { type: "ads", sum: 2 }, { type: "coins", sum: 20 }, { type: "coins", sum: 40 }, { type: "coins", sum: 60 }]
	},
	// Mario 7
	{
		currentLives: 2,
		currentColor: 0,
		maxSpeed: 4,
		currentSpeed: 2,
		currentMagnet: 2,
		maxMagnet: 5,
		currentPower: 2,
		maxPower: 4,
		speedPrice: [0, 5, 20, 50, 100, 250, 500],
		powerPrice: [0, 5, 20, 50, 100, 250, 500],
		magnetPrice: [0, 5, 20, 50, 100, 250, 500],
		levelBlock: 10,
		price: { type: "ads", sum: 5 },
		colorPrice: [{ type: "coins", sum: 0 }, { type: "ads", sum: 2 }, { type: "coins", sum: 10 }, { type: "coins", sum: 20 }, { type: "coins", sum: 30 }]
	},
	// Knight 12
	{
    currentLives: 3,
    currentColor: 0,
    maxSpeed: 6,
    currentSpeed: 3,
    currentMagnet: 3,
    maxMagnet: 6,
    currentPower: 4,
    maxPower: 7,
    speedPrice: [0, 5, 20, 50, 100, 250, 500],
    powerPrice: [0, 5, 20, 50, 100, 250, 500],
    magnetPrice: [0, 5, 20, 50, 100, 250, 500],
    levelBlock: 40,
    price: { type: "coins", sum: 700 },
    colorPrice: [{ type: "coins", sum: 0 }, { type: "ads", sum: 3 }, { type: "coins", sum: 40 }, { type: "coins", sum: 100 }, { type: "coins", sum: 160 }]
	},
	// Joker 9
	{
		currentLives: 2,
		currentColor: 0,
		maxSpeed: 5,
		currentSpeed: 2,
		currentMagnet: 3,
		maxMagnet: 5,
		currentPower: 3,
		maxPower: 5,
		speedPrice: [0, 5, 20, 50, 100, 250, 500],
		powerPrice: [0, 5, 20, 50, 100, 250, 500],
		magnetPrice: [0, 5, 20, 50, 100, 250, 500],
		levelBlock: 20,
		price: { type: "coins", sum: 250 },
		colorPrice: [{ type: "coins", sum: 0 }, { type: "ads", sum: 2 }, { type: "coins", sum: 15 }, { type: "coins", sum: 25 }, { type: "coins", sum: 40 }]
	},
	// Iron Man 13
	{
		currentLives: 3,
		currentColor: 0,
		maxSpeed: 7,
		currentSpeed: 4,
		currentMagnet: 3,
		maxMagnet: 6,
		currentPower: 5,
		maxPower: 7,
		speedPrice: [0, 5, 20, 50, 100, 250, 500],
		powerPrice: [0, 5, 20, 50, 100, 250, 500],
		magnetPrice: [0, 5, 20, 50, 100, 250, 500],
		levelBlock: 50,
		price: { type: "coins", sum: 1000 },
		colorPrice: [{ type: "coins", sum: 0 }, { type: "ads", sum: 3 }, { type: "coins", sum: 100 }, { type: "coins", sum: 200 }, { type: "coins", sum: 300 }]
	},
	// Sheriff 5
	{
		currentLives: 1,
		currentColor: 0,
		maxSpeed: 4,
		currentSpeed: 2,
		currentMagnet: 1,
		maxMagnet: 3,
		currentPower: 2,
	  maxPower: 4,
	  speedPrice: [0, 5, 20, 50, 100, 250, 500],
	  powerPrice: [0, 5, 20, 50, 100, 250, 500],
	  magnetPrice: [0, 5, 20, 50, 100, 250, 500],
	  levelBlock: -1,
		price: { type: "coins", sum: 80 },
		colorPrice: [{ type: "coins", sum: 0 }, { type: "ads", sum: 1 }, { type: "coins", sum: 7 }, { type: "coins", sum: 10 }, { type: "coins", sum: 15 }]
	},
	// Robot 14
	{
		currentLives: 3,
		currentColor: 0,
		maxSpeed: 7,
		currentSpeed: 5,
		currentMagnet: 5,
		maxMagnet: 7,
		currentPower: 6,
	  maxPower: 7,
	  speedPrice: [0, 5, 20, 50, 100, 250, 500],
	  powerPrice: [0, 5, 20, 50, 100, 250, 500],
	  magnetPrice: [0, 5, 20, 50, 100, 250, 500],
	  levelBlock: 70,
		price: { type: "coins", sum: 1500 },
		colorPrice: [{ type: "coins", sum: 0 }, { type: "ads", sum: 3 }, { type: "coins", sum: 200 }, { type: "coins", sum: 350 }, { type: "coins", sum: 500 }]
	}
];

const heroOrder = [0, 6, 1, 2, 5, 13, 4, 9, 7, 11, 8, 3, 10, 12, 14];
let currentHero = heroOrder.indexOf(chosenHero);
// TEXT SETTINGS

const gameTitle = [["РАБОЧЕЕ", "НАЗВАНИЕ"], ["WORKING", "TITLE"]];
const startButtonText = ["ИГРАТЬ", "PLAY"];
const goLevelButtonText = ["УРОВЕНЬ", "LEVEL"];
const heroName = [
	["БОТАН", "NERD"],
	["КЛОУН", "CLOWN"],
	["ФРЕДДИ", "FREDDY"],
	["ЖУКМЭН", "BUGMAN"],
	["ДЖОН", "JOHN"],
	["ГОМЕР", "HOMER"],
	["МОНСТР", "MONSTER"],
	["КЛОН", "CLONE"],
	["ХЕППИ", "HAPPY"],
	["ПАНИНИ", "PANINI"],
	["РЫЦАРЬ", "KNIGHT"],
	["ДЖОКЕР", "JOKER"],
	["СТАРК", "STARK"],
	["ШЕРИФ", "SHERIFF"],
	["МЕХА", "MECHA"]
];
const clearedText = [["АРЕНА", "ЗАЧИЩЕНА"], ["ARENA", "CLEARED"]];
const winText = ["ПОБЕДА!", "VICTORY!"];
const failText = ["ПРОИГРАЛ", "FAIL"];
const dieText = ["УПС!", "OOPS!"];
const losingCoinsText = ["ТЫ ТЕРЯЕШЬ", "YOU ARE LOSING"];
const saveCoinsButtonText = ["СОХРАНИТЬ", "SAVE COINS"];
const saveMoneyText = ["ЗАТО ЗАРАБОТАЛ", "BUT YOU GOT"];
const noMoneyText = [["НЕДОСТАТОЧНО", "МОНЕТ"], ["NOT ENOUGH", "COINS"]];
const levelBlockText = [["БУДЕТ ДОСТУПЕН", "НА УРОВНЕ"], ["AVAILABLE", "AT LEVEL"]];
const stopSign = ["СТОП", "STOP"];
const hintText_1 = [["СОБИРАЙ КРИСТАЛЛЫ", "И ДУШИ ВРАГОВ, ЧТОБЫ", "СТАТЬ БОЛЬШЕ И СИЛЬНЕЕ"], ["COLLECT GEMS AND SOULS", "OF ENEMIES TO BE", "BIGGER AND STRONGER"]];
const hintText_2 = [["СОБИРАЙ МОНЕТЫ, ЧТОБЫ", "УЛУЧШАТЬ И ПОКУПАТЬ", "НОВЫХ ПЕРСОНАЖЕЙ"], ["COLLECT COINS TO", "UPGRADE YOUR CHARACTER", "AND UNLOCK NEW SKINS"]];
const orText = ["ИЛИ", "OR"];
let currentLang = 1;
const userLang = navigator.language || navigator.userLanguage; 
if (userLang == "ru" || userLang == "uk" || userLang == "be") {
	//currentLang = 0;
}
let levelData = { numberOfArenas: 0, size: [], numberOfBridges: [], bridgeBonus: [], setting: 0, color: 0 };


let saveData = { currentLevel: currentLevel, moneyCount: moneyCount, heroData: heroData, levelData: levelData };


//if (localStorage.getItem('savedLevel') !== null) currentLevel = +localStorage.getItem('savedLevel');
//if (localStorage.getItem('savedMoney') !== null) moneyCount = +localStorage.getItem('savedMoney');
//if (localStorage.getItem('savedData') !== null) heroData = JSON.parse(localStorage.getItem('savedData'))
//if (localStorage.getItem('savedLevelData') !== null) levelData = JSON.parse(localStorage.getItem('savedLevelData'))


const soundData = {
	"resources": [
	  "atlas\\audio.ogg",
	  "atlas\\audio.mp3"
	],
	"spritemap": {
	  "1": {
		"start": 9,
		"end": 9.484875283446712,
		"loop": false
	  },
	  "2": {
		"start": 44,
		"end": 44.14800453514739,
		"loop": false
	  },
	  "3": {
		"start": 55,
		"end": 55.34560090702948,
		"loop": false
	  },
	  "4": {
		"start": 57,
		"end": 57.18412698412698,
		"loop": false
	  },
	  "5": {
		"start": 61,
		"end": 61.17131519274376,
		"loop": false
	  },
	  "6": {
		"start": 65,
		"end": 65.20414965986394,
		"loop": false
	  },
	  "7": {
		"start": 69,
		"end": 69.21861678004535,
		"loop": false
	  },
	  "8": {
		"start": 71,
		"end": 72.00002267573696,
		"loop": false
	  },
	  "9": {
		"start": 74,
		"end": 74.24022675736961,
		"loop": false
	  },
	  "10": {
		"start": 11,
		"end": 13.170861678004535,
		"loop": false
	  },
	  "11": {
		"start": 15,
		"end": 16.949410430839002,
		"loop": false
	  },
	  "12": {
		"start": 18,
		"end": 19.343718820861678,
		"loop": false
	  },
	  "13": {
		"start": 21,
		"end": 22.343718820861678,
		"loop": false
	  },
	  "14": {
		"start": 24,
		"end": 25.343718820861678,
		"loop": false
	  },
	  "15": {
		"start": 27,
		"end": 27.296439909297053,
		"loop": false
	  },
	  "16": {
		"start": 29,
		"end": 30.57764172335601,
		"loop": false
	  },
	  "17": {
		"start": 32,
		"end": 34.56666666666667,
		"loop": false
	  },
	  "18": {
		"start": 36,
		"end": 36.24575963718821,
		"loop": false
	  },
	  "19": {
		"start": 38,
		"end": 42.3,
		"loop": false
	  },
	  "20": {
		"start": 0,
		"end": 4.597551020408163,
		"loop": false
	  },
	  "21": {
		"start": 46,
		"end": 48.333333333333336,
		"loop": false
	  },
	  "22": {
		"start": 6,
		"end": 7.898730158730158,
		"loop": false
	  },
	  "23": {
		"start": 50,
		"end": 51.699410430839,
		"loop": false
	  },
	  "24": {
		"start": 53,
		"end": 53.314467120181405,
		"loop": false
	  },
	  "5_1": {
		"start": 59,
		"end": 59.4518820861678,
		"loop": false
	  },
	  "6_1": {
		"start": 63,
		"end": 63.72303854875283,
		"loop": false
	  },
	  "7_1": {
		"start": 67,
		"end": 67.4292970521542,
		"loop": false
	  },
	  "game #2": {
		"start": 76,
		"end": 140,
		"loop": true
	  },
	  "menu #1": {
		"start": 141,
		"end": 171.54546485260772,
		"loop": true
	  },
	  "u1": {
		"start": 173,
		"end": 175.00002267573697,
		"loop": false
	  },
	  "u2": {
		"start": 177,
		"end": 178.43333333333334,
		"loop": false
	  },
	  "u3": {
		"start": 180,
		"end": 181.2,
		"loop": false
	  },
	  "u4": {
		"start": 183,
		"end": 183.5,
		"loop": false
	  },
	  "u5": {
		"start": 185,
		"end": 185.3534693877551,
		"loop": false
	  },
	  "u6": {
		"start": 187,
		"end": 187.5,
		"loop": false
	  },
	  "u7": {
		"start": 189,
		"end": 190,
		"loop": false
	  }
	}
}
const sprite = {};
for (let key in soundData.spritemap)
{
  sprite[key] = [
    Math.ceil(soundData.spritemap[key].start * 1000),
    Math.ceil((soundData.spritemap[key].end - soundData.spritemap[key].start) * 1000),
    soundData.spritemap[key].loop,
  ];
}