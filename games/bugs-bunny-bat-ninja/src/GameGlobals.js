//--------------------------------------------------------------------------------------------------------------------------------------------------------

var gg = gg || {};

//--------------------------------------------------------------------------------------------------------------------------------------------------------

gg.startLevel = 0;

gg.useMaskPositioningTool = false;
gg.maskIndexToPosition = 0;

//used to position ninja on index 0
//when true, disables hiding of ninjas
gg.useNinjaPositioningTool = false;

//used to show rectangle overlays for mask rects
gg.showMaskRects = false;

//--------------------------------------------------------------------------------------------------------------------------------------------------------

gg.screen = {
    width: 1366,
    height: 768,
    center: {
        x: 683,
        y: 384
    }
};

//--------------------------------------------------------------------------------------------------------------------------------------------------------

gg.anchor = {
    topLeft: cc.p(0, gg.screen.height),
    top: cc.p(gg.screen.center.x, gg.screen.height),
    topRight: cc.p(gg.screen.width, gg.screen.height),
    left: cc.p(0, gg.screen.center.y),
    center: cc.p(gg.screen.center.x, gg.screen.center.y),
    right: cc.p(gg.screen.width, gg.screen.center.y),
    botLeft: cc.p(0, 0),
    bot: cc.p(gg.screen.center.x, 0),
    botRight: cc.p(gg.screen.width, 0)
};

//--------------------------------------------------------------------------------------------------------------------------------------------------------

gg.highScore = "prototype_nimbleNinjas_01";

//--------------------------------------------------------------------------------------------------------------------------------------------------------

gg.gameplay = {
    level: null,
    stage: null,
    spawnCounts: null,
    spawnCountIndex: null,
    goal: null,
    totalCounter: null,
    maxSpawn: 3,
    maxGoal: 60,
    day: {
        full: 60,
        nearEnd: 45,
        half: 30
    },
    tint: {
        day: cc.color(255, 255, 255),
        night: cc.color(88, 88, 128)
    },
    isFirstLevel: null
};

gg.resetGame = function() {
    gg.gameplay.isFirstLevel = true;
    gg.gameplay.level = 1;
    gg.gameplay.stage = gg.startLevel;
    gg.gameplay.spawnCounts = [1, 1];
    gg.gameplay.spawnCountIndex = 1;
    gg.gameplay.goal = 10;
    gg.gameplay.totalCounter = 0;
};

//--------------------------------------------------------------------------------------------------------------------------------------------------------

gg.character = {
    dialog: {
        start: [
            "clarence start",
            "sumo start",
            "jeff start"
        ],
        collect: [
            "clarence collect",
            "sumo collect",
            "jeff collect"
        ],
        warning: [
            "clarence warning",
            "sumo warning",
            "jeff warning"
        ]
    }
};

//--------------------------------------------------------------------------------------------------------------------------------------------------------

gg.lizard = {
    type: {
        holezard: 0,
        groundzard: 1,
        wallzard: 2
    },
    state: {
        showing: 0,
        scanning: 1,
        hiding: 2
    }
};

//--------------------------------------------------------------------------------------------------------------------------------------------------------

gg.puff = {
    pool: []
};

//--------------------------------------------------------------------------------------------------------------------------------------------------------

gg.cn_rank = {
    none: 0,
    poor: 1,
    ok: 2,
    good: 3,
    great: 4,
    outstanding: 5
};

//--------------------------------------------------------------------------------------------------------------------------------------------------------

gg.onMobile = false;

//--------------------------------------------------------------------------------------------------------------------------------------------------------