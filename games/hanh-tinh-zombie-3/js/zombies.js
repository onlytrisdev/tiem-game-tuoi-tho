var _$_bd00 = ["Assets", "DefineMinion", "prototype", "push", "FindAsset", "length", "Id", "Instantiate", "Motions", "ResumeEvt", "Spritesheet", "animations", "keys", "/", "split", "Name", "", "Speed", "HP", "AttackMode", "melee", "AttackRate", "Damage", "Coins", "MoveMotionSpeed", "HitOffsetX", "HitHeight", "bald", "wife", "skater", "kamikaze", "copter", "rasta", "foot", "wolf", "backpack", "old", "punk", "girl", "swat", "ranged", "crow", "bum", "fireman", "mutant", "hood", "rocket", "hulk", "scientist", "StunTime", "Ranged", "RangedBegin", "RangedStop", "RangedRate", "OffsetY", "OffsetBarX", "OffsetBarY", "InCache", "Cached", "AddToCache", "Basement", "IterateMotions", "RemoveFromCache", "destroy", "MotionSprite", "id", "sequence", "AnimatedSprite", "Asset", "Root", "Container", "addChild", "x", "y", "zIndex", "RangedActive", "random", "Shadow", "Sprite", "set", "anchor", "MotionId", "Motion", "HPMax", "Alive", "Moving", "Hit", "Active", "Target", "barricade", "HitX1", "HitY1", "HitY2", "HBarBg", "ZombieHBarBg", "GUI", "alpha", "HBar", "ZombieHBar", "ShowHealthBar", "width", "round", "HideHealthBar", "motion", "Easing", "Spawn", "SetTrajectoryTo", "w", "MoveMotion", "P2", "sqrt", "Dir", "Pulse", "MeleeAttack", "BarricadeAlive", "KamikazeExplosion", "hero", "RangedAttack", "StopMoving", "Idle", "ResumeMoving", "evt", "Clock", "AttackMotion", "InflictDamage", "ElectricCharge1", "TEX", "GetBarricadeTarget", "Play", "SpeakerAttack", "ScientistCharge", "CrowProjectile", "LayerZombies", "ExplosionAir1", "sortChildren", "explosion2", "DamageToBarricade", "DamageToHero", "Die", "LayerLaser", "ChargeFX", "LaserCharge", "ScientistLaser", "laser-charge", "LaserTarget", "Laser", "angle", "Anim", "scale", "ScientistImpact", "Destroy", "laser-impact", "LaserExp", "type", "crowmagic", "ZombieAttack", "RayCast", "IsWithinX", "x2y", "IsPointNear", "AreaDamage", "ApplyDamage", "BulletHit", "ZombieDeath", "HitMotion", "DieMotion", "UnitKilled", "PlayMotion", "animationSpeed", "loop", "play", "Pause", "stop", "Resume", "idle", "walk", "attack", "onComplete", "hit", "BackFromHit", "cancel", "ResumeInvasion", "die", "FadeOutSoon", "FadeOut", "active", "removeChild", "LayerBlood", "FadeOutSome", "IterateNextMotion", "atan2", "X0", "Y0", "MoveDX", "cos", "MoveDY", "sin", "ElectricBolt", "tint", "rotation", "PI", "MoveSome", "Impact", "MagicBullet", "MagicImpact"];

function LibMinions() {
    this[_$_bd00[0]] = []
}
LibMinions[_$_bd00[2]][_$_bd00[1]] = function(_0x22EE7, _0x22F1E) {
    let _0x22EB0 = new MinionAsset(_0x22EE7, _0x22F1E);
    this[_$_bd00[0]][_$_bd00[3]](_0x22EB0);
    return _0x22EB0
};
LibMinions[_$_bd00[2]][_$_bd00[4]] = function(_0x22EE7) {
    for (let _0x22C8A = 0; _0x22C8A < this[_$_bd00[0]][_$_bd00[5]]; _0x22C8A++) {
        if (this[_$_bd00[0]][_0x22C8A][_$_bd00[6]] === _0x22EE7) {
            return this[_$_bd00[0]][_0x22C8A]
        }
    };
    return null
};
LibMinions[_$_bd00[2]][_$_bd00[7]] = function(_0x22EE7, _0x23257, _0x232FC) {
    let _0x22EB0 = this[_$_bd00[4]](_0x22EE7);
    if (_0x22EB0 == null) {
        return null
    };
    return new GameMinion(_0x22EB0, _0x23257, _0x232FC)
};

function MinionAsset(_0x22EE7, _0x22F1E) {
    this[_$_bd00[6]] = _0x22EE7;
    this[_$_bd00[8]] = [];
    this[_$_bd00[9]] = null;
    this[_$_bd00[10]] = _0x22F1E;
    let _0x262E5 = Object[_$_bd00[12]](_0x22F1E[_$_bd00[11]]);
    for (let _0x22C8A = 0; _0x22C8A < _0x262E5[_$_bd00[5]]; _0x22C8A++) {
        let _0x23D15 = _0x262E5[_0x22C8A];
        let _0x26088 = _0x23D15[_$_bd00[14]](_$_bd00[13]);
        let _0x22EE7 = _0x26088[_0x26088[_$_bd00[5]] - 1];
        let _0x25336 = {
            id: _0x22EE7,
            sequence: _0x22F1E[_$_bd00[11]][_0x23D15]
        };
        this[_$_bd00[8]][_$_bd00[3]](_0x25336)
    };
    this[_$_bd00[15]] = _$_bd00[16];
    this[_$_bd00[17]] = 100;
    this[_$_bd00[18]] = 100;
    this[_$_bd00[19]] = _$_bd00[20];
    this[_$_bd00[21]] = 1.5;
    this[_$_bd00[22]] = 10;
    this[_$_bd00[23]] = 10;
    this[_$_bd00[24]] = 0.2;
    this[_$_bd00[25]] = 0;
    this[_$_bd00[26]] = 200;
    let _0x2631C = 0.5;
    let _0x262AE = 0.2;
    switch (_0x22EE7) {
        case _$_bd00[27]:
            this[_$_bd00[17]] = 110;
            _0x262AE = 0.2;
            this[_$_bd00[18]] = 100;
            _0x2631C = 0.50;
            this[_$_bd00[26]] = 170;
            this[_$_bd00[19]] = _$_bd00[20];
            this[_$_bd00[22]] = 15;
            this[_$_bd00[23]] = 15;
            this[_$_bd00[25]] = -50;
            break;
        case _$_bd00[28]:
            this[_$_bd00[17]] = 140;
            _0x262AE = 0.2;
            this[_$_bd00[18]] = 120;
            _0x2631C = 0.50;
            this[_$_bd00[26]] = 175;
            this[_$_bd00[19]] = _$_bd00[20];
            this[_$_bd00[22]] = 15;
            this[_$_bd00[23]] = 15;
            this[_$_bd00[25]] = -20;
            break;
        case _$_bd00[29]:
            this[_$_bd00[17]] = 150;
            _0x262AE = 0.3;
            this[_$_bd00[18]] = 180;
            _0x2631C = 0.50;
            this[_$_bd00[26]] = 180;
            this[_$_bd00[19]] = _$_bd00[20];
            this[_$_bd00[22]] = 20;
            this[_$_bd00[23]] = 15;
            this[_$_bd00[25]] = -30;
            break;
        case _$_bd00[31]:
            this[_$_bd00[17]] = 300;
            _0x262AE = 0.2;
            this[_$_bd00[18]] = 140;
            _0x2631C = 0.30;
            this[_$_bd00[26]] = 110;
            this[_$_bd00[19]] = _$_bd00[30];
            this[_$_bd00[22]] = 100;
            this[_$_bd00[23]] = 20;
            this[_$_bd00[25]] = -80;
            break;
        case _$_bd00[32]:
            this[_$_bd00[17]] = 120;
            _0x262AE = 0.2;
            this[_$_bd00[18]] = 160;
            _0x2631C = 0.50;
            this[_$_bd00[26]] = 165;
            this[_$_bd00[19]] = _$_bd00[20];
            this[_$_bd00[22]] = 15;
            this[_$_bd00[23]] = 20;
            this[_$_bd00[25]] = -10;
            break;
        case _$_bd00[33]:
            this[_$_bd00[17]] = 160;
            _0x262AE = 0.3;
            this[_$_bd00[18]] = 500;
            _0x2631C = 0.50;
            this[_$_bd00[26]] = 190;
            this[_$_bd00[19]] = _$_bd00[20];
            this[_$_bd00[22]] = 30;
            this[_$_bd00[23]] = 20;
            this[_$_bd00[25]] = -30;
            break;
        case _$_bd00[34]:
            this[_$_bd00[17]] = 450;
            _0x262AE = 0.3;
            this[_$_bd00[18]] = 200;
            _0x2631C = 0.30;
            this[_$_bd00[26]] = 90;
            this[_$_bd00[19]] = _$_bd00[20];
            this[_$_bd00[22]] = 25;
            this[_$_bd00[23]] = 20;
            this[_$_bd00[25]] = -30;
            break;
        case _$_bd00[35]:
            this[_$_bd00[17]] = 150;
            _0x262AE = 0.3;
            this[_$_bd00[18]] = 400;
            _0x2631C = 0.50;
            this[_$_bd00[26]] = 185;
            this[_$_bd00[19]] = _$_bd00[20];
            this[_$_bd00[22]] = 25;
            this[_$_bd00[23]] = 20;
            this[_$_bd00[25]] = -20;
            break;
        case _$_bd00[36]:
            this[_$_bd00[17]] = 300;
            _0x262AE = 0.3;
            this[_$_bd00[18]] = 60;
            _0x2631C = 0.30;
            this[_$_bd00[26]] = 160;
            this[_$_bd00[19]] = _$_bd00[20];
            this[_$_bd00[22]] = 20;
            this[_$_bd00[23]] = 15;
            this[_$_bd00[25]] = -20;
            break;
        case _$_bd00[37]:
            this[_$_bd00[17]] = 160;
            _0x262AE = 0.3;
            this[_$_bd00[18]] = 300;
            _0x2631C = 0.50;
            this[_$_bd00[26]] = 165;
            this[_$_bd00[19]] = _$_bd00[20];
            this[_$_bd00[22]] = 50;
            this[_$_bd00[23]] = 15;
            this[_$_bd00[25]] = -20;
            break;
        case _$_bd00[38]:
            this[_$_bd00[17]] = 120;
            _0x262AE = 0.2;
            this[_$_bd00[18]] = 120;
            _0x2631C = 0.50;
            this[_$_bd00[26]] = 165;
            this[_$_bd00[19]] = _$_bd00[20];
            this[_$_bd00[22]] = 15;
            this[_$_bd00[23]] = 15;
            this[_$_bd00[25]] = -20;
            break;
        case _$_bd00[39]:
            this[_$_bd00[17]] = 120;
            _0x262AE = 0.2;
            this[_$_bd00[18]] = 1200;
            _0x2631C = 0.50;
            this[_$_bd00[26]] = 185;
            this[_$_bd00[19]] = _$_bd00[20];
            this[_$_bd00[22]] = 60;
            this[_$_bd00[23]] = 25;
            this[_$_bd00[25]] = -30;
            break;
        case _$_bd00[41]:
            this[_$_bd00[17]] = 180;
            _0x262AE = 0.2;
            this[_$_bd00[18]] = 200;
            _0x2631C = 0.50;
            this[_$_bd00[26]] = 160;
            this[_$_bd00[19]] = _$_bd00[40];
            this[_$_bd00[22]] = 25;
            this[_$_bd00[23]] = 20;
            this[_$_bd00[25]] = -20;
            break;
        case _$_bd00[42]:
            this[_$_bd00[17]] = 120;
            _0x262AE = 0.2;
            this[_$_bd00[18]] = 220;
            _0x2631C = 0.50;
            this[_$_bd00[26]] = 160;
            this[_$_bd00[19]] = _$_bd00[20];
            this[_$_bd00[22]] = 25;
            this[_$_bd00[23]] = 20;
            this[_$_bd00[25]] = -20;
            break;
        case _$_bd00[43]:
            this[_$_bd00[17]] = 140;
            _0x262AE = 0.2;
            this[_$_bd00[18]] = 700;
            _0x2631C = 0.50;
            this[_$_bd00[26]] = 185;
            this[_$_bd00[19]] = _$_bd00[20];
            this[_$_bd00[22]] = 80;
            this[_$_bd00[23]] = 25;
            this[_$_bd00[25]] = -20;
            break;
        case _$_bd00[44]:
            this[_$_bd00[17]] = 550;
            _0x262AE = 0.3;
            this[_$_bd00[18]] = 300;
            _0x2631C = 0.30;
            this[_$_bd00[26]] = 120;
            this[_$_bd00[19]] = _$_bd00[20];
            this[_$_bd00[22]] = 40;
            this[_$_bd00[23]] = 20;
            this[_$_bd00[25]] = -50;
            break;
        case _$_bd00[45]:
            this[_$_bd00[17]] = 160;
            _0x262AE = 0.35;
            this[_$_bd00[18]] = 350;
            _0x2631C = 0.50;
            this[_$_bd00[26]] = 185;
            this[_$_bd00[19]] = _$_bd00[20];
            this[_$_bd00[22]] = 30;
            this[_$_bd00[23]] = 15;
            this[_$_bd00[25]] = -20;
            break;
        case _$_bd00[46]:
            this[_$_bd00[17]] = 400;
            _0x262AE = 0.2;
            this[_$_bd00[18]] = 300;
            _0x2631C = 0.30;
            this[_$_bd00[26]] = 180;
            this[_$_bd00[19]] = _$_bd00[30];
            this[_$_bd00[22]] = 100;
            this[_$_bd00[23]] = 20;
            this[_$_bd00[25]] = -60;
            break;
        case _$_bd00[47]:
            this[_$_bd00[17]] = 110;
            _0x262AE = 0.25;
            this[_$_bd00[18]] = 2000;
            _0x2631C = 0.50;
            this[_$_bd00[26]] = 200;
            this[_$_bd00[19]] = _$_bd00[20];
            this[_$_bd00[22]] = 120;
            this[_$_bd00[23]] = 30;
            this[_$_bd00[25]] = -20;
            break;
        case _$_bd00[48]:
            this[_$_bd00[17]] = 110;
            _0x262AE = 0.2;
            this[_$_bd00[18]] = 500;
            _0x2631C = 0.50;
            this[_$_bd00[26]] = 165;
            this[_$_bd00[19]] = _$_bd00[20];
            this[_$_bd00[22]] = 150;
            this[_$_bd00[23]] = 30;
            this[_$_bd00[25]] = -20;
            break
    };
    this[_$_bd00[24]] = _0x262AE;
    this[_$_bd00[49]] = _0x2631C;
    switch (_0x22EE7) {
        case _$_bd00[34]:
            this[_$_bd00[21]] = 0;
            break;
        case _$_bd00[44]:
            this[_$_bd00[21]] = 0;
            break
    };
    this[_$_bd00[50]] = false;
    this[_$_bd00[51]] = 0;
    this[_$_bd00[52]] = false;
    this[_$_bd00[53]] = 0;
    switch (_0x22EE7) {
        case _$_bd00[32]:
            this[_$_bd00[50]] = true;
            this[_$_bd00[51]] = 500;
            this[_$_bd00[52]] = false;
            this[_$_bd00[53]] = 2.5;
            break;
        case _$_bd00[42]:
            this[_$_bd00[50]] = true;
            this[_$_bd00[51]] = 450;
            this[_$_bd00[52]] = false;
            this[_$_bd00[53]] = 2.0;
            break;
        case _$_bd00[41]:
            this[_$_bd00[50]] = true;
            this[_$_bd00[51]] = 550;
            this[_$_bd00[52]] = true;
            this[_$_bd00[53]] = 2.5;
            break;
        case _$_bd00[48]:
            this[_$_bd00[50]] = true;
            this[_$_bd00[51]] = 475;
            this[_$_bd00[52]] = true;
            this[_$_bd00[53]] = 6.0;
            break
    };
    this[_$_bd00[54]] = 0;
    switch (_0x22EE7) {
        case _$_bd00[31]:
            this[_$_bd00[54]] = -150;
            break;
        case _$_bd00[41]:
            this[_$_bd00[54]] = -150;
            break;
        case _$_bd00[46]:
            this[_$_bd00[54]] = -150;
            break
    };
    this[_$_bd00[55]] = 0;
    this[_$_bd00[56]] = -200;
    switch (_0x22EE7) {
        case _$_bd00[27]:
            this[_$_bd00[55]] = -20;
            break;
        case _$_bd00[28]:
            this[_$_bd00[55]] = 20;
            break;
        case _$_bd00[31]:
            this[_$_bd00[55]] = -20;
            break;
        case _$_bd00[38]:
            this[_$_bd00[55]] = 20;
            break;
        case _$_bd00[34]:
            this[_$_bd00[56]] = -120;
            break;
        case _$_bd00[35]:
            this[_$_bd00[56]] = -230;
            break;
        case _$_bd00[37]:
            this[_$_bd00[56]] = -215;
            break;
        case _$_bd00[39]:
            this[_$_bd00[56]] = -220;
            break;
        case _$_bd00[43]:
            this[_$_bd00[56]] = -220;
            break;
        case _$_bd00[44]:
            this[_$_bd00[56]] = -140;
            break;
        case _$_bd00[47]:
            this[_$_bd00[56]] = -240;
            break;
        case _$_bd00[48]:
            this[_$_bd00[56]] = -315;
            break;
        case _$_bd00[41]:
            this[_$_bd00[56]] = -250;
            break
    };
    this[_$_bd00[57]] = false;
    this[_$_bd00[58]] = null
}
MinionAsset[_$_bd00[2]][_$_bd00[59]] = function() {
    if (this[_$_bd00[57]]) {
        return
    };
    this[_$_bd00[57]] = true;
    this[_$_bd00[58]] = new GameMinion(this, GAME[_$_bd00[60]], 1);
    this[_$_bd00[58]][_$_bd00[61]]()
};
MinionAsset[_$_bd00[2]][_$_bd00[62]] = function() {
    if (!this[_$_bd00[57]]) {
        return
    };
    this[_$_bd00[57]] = false;
    this[_$_bd00[58]][_$_bd00[63]]();
    this[_$_bd00[58]] = null
};
MinionAsset[_$_bd00[2]][_$_bd00[64]] = function(_0x22EE7) {
    let _0x25336 = null;
    for (let _0x22C8A = 0; _0x22C8A < this[_$_bd00[8]][_$_bd00[5]]; _0x22C8A++) {
        if (this[_$_bd00[8]][_0x22C8A][_$_bd00[65]] === _0x22EE7) {
            _0x25336 = this[_$_bd00[8]][_0x22C8A]
        }
    };
    if (_0x25336 == null) {
        return null
    };
    return new PIXI[_$_bd00[67]](_0x25336[_$_bd00[66]])
};

function GameMinion(_0x22EB0, _0x23257, _0x232FC) {
    this[_$_bd00[6]] = _0x22EB0[_$_bd00[6]];
    this[_$_bd00[68]] = _0x22EB0;
    this[_$_bd00[69]] = new PIXI[_$_bd00[70]]();
    _0x23257[_$_bd00[71]](this[_$_bd00[69]]);
    this[_$_bd00[69]][_$_bd00[72]] = 0;
    this[_$_bd00[69]][_$_bd00[73]] = 0;
    this[_$_bd00[69]][_$_bd00[74]] = _0x232FC;
    this[_$_bd00[74]] = _0x232FC;
    this[_$_bd00[75]] = false;
    this[_$_bd00[50]] = _0x22EB0[_$_bd00[50]];
    this[_$_bd00[51]] = _0x22EB0[_$_bd00[51]];
    this[_$_bd00[52]] = _0x22EB0[_$_bd00[52]];
    this[_$_bd00[53]] = _0x22EB0[_$_bd00[53]];
    if (this[_$_bd00[50]]) {
        this[_$_bd00[51]] = this[_$_bd00[51]] - 50 + (Math[_$_bd00[76]]() * 100)
    };
    this[_$_bd00[77]] = new PIXI[_$_bd00[78]](TEX[_$_bd00[77]]);
    this[_$_bd00[77]][_$_bd00[80]][_$_bd00[79]](0.5, 0.5);
    this[_$_bd00[77]][_$_bd00[72]] = 0;
    this[_$_bd00[77]][_$_bd00[73]] = 0;
    this[_$_bd00[69]][_$_bd00[71]](this[_$_bd00[77]]);
    this[_$_bd00[81]] = _$_bd00[16];
    this[_$_bd00[82]] = null;
    this[_$_bd00[17]] = _0x22EB0[_$_bd00[17]];
    this[_$_bd00[18]] = _0x22EB0[_$_bd00[18]];
    this[_$_bd00[83]] = _0x22EB0[_$_bd00[18]];
    this[_$_bd00[19]] = _0x22EB0[_$_bd00[19]];
    this[_$_bd00[21]] = _0x22EB0[_$_bd00[21]];
    this[_$_bd00[22]] = _0x22EB0[_$_bd00[22]];
    this[_$_bd00[49]] = _0x22EB0[_$_bd00[49]];
    this[_$_bd00[84]] = true;
    this[_$_bd00[85]] = true;
    this[_$_bd00[86]] = false;
    this[_$_bd00[87]] = true;
    this[_$_bd00[54]] = _0x22EB0[_$_bd00[54]];
    this[_$_bd00[55]] = _0x22EB0[_$_bd00[55]];
    this[_$_bd00[56]] = _0x22EB0[_$_bd00[56]];
    this[_$_bd00[25]] = _0x22EB0[_$_bd00[25]];
    this[_$_bd00[88]] = _$_bd00[89];
    this[_$_bd00[90]] = -100;
    this[_$_bd00[91]] = this[_$_bd00[54]] - _0x22EB0[_$_bd00[26]];
    this[_$_bd00[92]] = this[_$_bd00[54]];
    this[_$_bd00[93]] = new PIXI[_$_bd00[78]](TEX[_$_bd00[95]][_$_bd00[94]]);
    this[_$_bd00[93]][_$_bd00[72]] = this[_$_bd00[55]] - 50;
    this[_$_bd00[93]][_$_bd00[73]] = this[_$_bd00[54]] + this[_$_bd00[56]];
    this[_$_bd00[93]][_$_bd00[96]] = 0;
    this[_$_bd00[69]][_$_bd00[71]](this[_$_bd00[93]]);
    this[_$_bd00[97]] = new PIXI[_$_bd00[78]](TEX[_$_bd00[95]][_$_bd00[98]]);
    this[_$_bd00[97]][_$_bd00[72]] = this[_$_bd00[55]] - 48;
    this[_$_bd00[97]][_$_bd00[73]] = this[_$_bd00[54]] + this[_$_bd00[56]] + 2;
    this[_$_bd00[97]][_$_bd00[96]] = 0;
    this[_$_bd00[69]][_$_bd00[71]](this[_$_bd00[97]])
}
GameMinion[_$_bd00[2]][_$_bd00[99]] = function() {
    this[_$_bd00[97]][_$_bd00[100]] = Math[_$_bd00[101]](98 * (this[_$_bd00[18]] / this[_$_bd00[83]]));
    this[_$_bd00[97]][_$_bd00[96]] = 1;
    this[_$_bd00[93]][_$_bd00[96]] = 1;
    GAME[_$_bd00[104]][_$_bd00[103]](easing_linear, this, this[_$_bd00[102]], 1, 0, 1)
};
GameMinion[_$_bd00[2]][_$_bd00[102]] = function(_0x23A81, _0x23AB8) {
    this[_$_bd00[97]][_$_bd00[96]] = _0x23A81;
    this[_$_bd00[93]][_$_bd00[96]] = _0x23A81
};
GameMinion[_$_bd00[2]][_$_bd00[105]] = function(_0x253A4, _0x253DB, _0x25412) {
    this[_$_bd00[69]][_$_bd00[72]] = _0x253A4[_$_bd00[72]];
    this[_$_bd00[69]][_$_bd00[73]] = _0x253A4[_$_bd00[73]];
    this[_$_bd00[106]](_0x253DB);
    if (this[_$_bd00[50]]) {
        this[_$_bd00[51]] = _0x25412[_$_bd00[107]] - this[_$_bd00[51]]
    };
    this[_$_bd00[108]]()
};
GameMinion[_$_bd00[2]][_$_bd00[106]] = function(_0x253DB) {
    this[_$_bd00[109]] = _0x253DB;
    let _0x23CA7 = _0x253DB[_$_bd00[72]] - this[_$_bd00[69]][_$_bd00[72]];
    let _0x23E28 = _0x253DB[_$_bd00[73]] - this[_$_bd00[69]][_$_bd00[73]];
    let _0x23711 = Math[_$_bd00[110]]((_0x23CA7 * _0x23CA7) + (_0x23E28 * _0x23E28));
    this[_$_bd00[111]] = {
        x: _0x23CA7 / _0x23711,
        y: _0x23E28 / _0x23711
    }
};
GameMinion[_$_bd00[2]][_$_bd00[112]] = function(_0x23590) {
    if (!this[_$_bd00[87]]) {
        return
    };
    if (!this[_$_bd00[84]]) {
        return
    };
    if (this[_$_bd00[85]] && !this[_$_bd00[86]]) {
        this[_$_bd00[69]][_$_bd00[72]] += this[_$_bd00[17]] * _0x23590 * this[_$_bd00[111]][_$_bd00[72]];
        this[_$_bd00[69]][_$_bd00[73]] += this[_$_bd00[17]] * _0x23590 * this[_$_bd00[111]][_$_bd00[73]];
        if (this[_$_bd00[69]][_$_bd00[72]] <= this[_$_bd00[109]][_$_bd00[72]]) {
            this[_$_bd00[85]] = false;
            if (this[_$_bd00[19]] === _$_bd00[20]) {
                this[_$_bd00[113]]()
            };
            if (this[_$_bd00[19]] === _$_bd00[30]) {
                if (BATTLE[_$_bd00[114]]) {
                    this[_$_bd00[115]]()
                } else {
                    if (this[_$_bd00[88]] === _$_bd00[89]) {
                        this[_$_bd00[85]] = true;
                        this[_$_bd00[88]] = _$_bd00[116];
                        this[_$_bd00[109]][_$_bd00[72]] = HERO[_$_bd00[69]][_$_bd00[72]] + 130
                    } else {
                        this[_$_bd00[115]]()
                    }
                }
            }
        };
        if (this[_$_bd00[50]] && !this[_$_bd00[75]]) {
            if (this[_$_bd00[69]][_$_bd00[72]] < this[_$_bd00[51]] && this[_$_bd00[69]][_$_bd00[72]] > 700) {
                this[_$_bd00[75]] = true;
                this[_$_bd00[117]]();
                if (this[_$_bd00[52]]) {
                    this[_$_bd00[85]] = false
                }
            }
        };
        if (this[_$_bd00[50]] && this[_$_bd00[75]]) {
            if (this[_$_bd00[69]][_$_bd00[72]] < 700) {
                this[_$_bd00[75]] = false
            }
        }
    }
};
GameMinion[_$_bd00[2]][_$_bd00[118]] = function() {
    if (!this[_$_bd00[84]]) {
        return
    };
    this[_$_bd00[85]] = false;
    if (!this[_$_bd00[86]]) {
        this[_$_bd00[119]]()
    }
};
GameMinion[_$_bd00[2]][_$_bd00[120]] = function() {
    if (!this[_$_bd00[84]]) {
        return
    };
    this[_$_bd00[85]] = true;
    if (!this[_$_bd00[86]]) {
        this[_$_bd00[108]]()
    }
};
GameMinion[_$_bd00[2]][_$_bd00[113]] = function() {
    if (!this[_$_bd00[84]]) {
        return
    };
    if (this[_$_bd00[86]]) {
        GAME[_$_bd00[122]][_$_bd00[121]](0.2, this, this[_$_bd00[113]]);
        return
    };
    if (!BATTLE[_$_bd00[114]] && this[_$_bd00[88]] === _$_bd00[89]) {
        this[_$_bd00[88]] = _$_bd00[116];
        this[_$_bd00[85]] = true;
        this[_$_bd00[106]]({
            x: HERO[_$_bd00[72]] + 150,
            y: HERO[_$_bd00[73]]
        });
        this[_$_bd00[108]]();
        return
    };
    this[_$_bd00[123]]();
    GAME[_$_bd00[122]][_$_bd00[121]](0.5, this, this[_$_bd00[124]]);
    let _0x237B6 = this[_$_bd00[21]] - 1 + (Math[_$_bd00[76]]() * 2);
    if (_0x237B6 < 0.5) {
        _0x237B6 = 0.5
    };
    GAME[_$_bd00[122]][_$_bd00[121]](_0x237B6, this, this[_$_bd00[113]])
};
GameMinion[_$_bd00[2]][_$_bd00[117]] = function() {
    if (!this[_$_bd00[84]]) {
        return
    };
    if (!this[_$_bd00[75]]) {
        return
    };
    if (this[_$_bd00[86]]) {
        GAME[_$_bd00[122]][_$_bd00[121]](0.2, this, this[_$_bd00[117]]);
        return
    };
    if (this[_$_bd00[6]] === _$_bd00[32]) {
        new GameFX(FX[_$_bd00[126]][_$_bd00[125]], 0.3, -90, -100, this[_$_bd00[69]], 1, 1, false);
        let _0x248AF = this[_$_bd00[69]][_$_bd00[72]] - 90;
        let _0x2396E = this[_$_bd00[69]][_$_bd00[73]] - 100;
        let _0x2404E = BATTLE[_$_bd00[127]](_0x2396E);
        new ElectricBolt(_0x248AF, _0x2396E, _0x2404E, this[_$_bd00[69]][_$_bd00[74]] + 1, 0xFCF44F, this[_$_bd00[68]][_$_bd00[22]]);
        AUDIO[_$_bd00[129]][_$_bd00[128]]()
    };
    if (this[_$_bd00[6]] === _$_bd00[42]) {
        new GameFX(FX[_$_bd00[126]][_$_bd00[125]], 0.3, -90, -100, this[_$_bd00[69]], 1, 1, false);
        let _0x248AF = this[_$_bd00[69]][_$_bd00[72]] - 90;
        let _0x2396E = this[_$_bd00[69]][_$_bd00[73]] - 100;
        let _0x2404E = BATTLE[_$_bd00[127]](_0x2396E);
        new ElectricBolt(_0x248AF, _0x2396E, _0x2404E, this[_$_bd00[69]][_$_bd00[74]] + 1, 0xFCF44F, this[_$_bd00[68]][_$_bd00[22]]);
        AUDIO[_$_bd00[129]][_$_bd00[128]]()
    };
    if (this[_$_bd00[6]] === _$_bd00[48]) {
        this[_$_bd00[119]]();
        GAME[_$_bd00[122]][_$_bd00[121]](1, this, this[_$_bd00[130]]);
        return
    };
    if (this[_$_bd00[6]] === _$_bd00[41]) {
        this[_$_bd00[123]]();
        GAME[_$_bd00[122]][_$_bd00[121]](0.3, this, this[_$_bd00[131]]);
        return
    };
    let _0x237B6 = this[_$_bd00[53]] - 1 + (Math[_$_bd00[76]]() * 2);
    GAME[_$_bd00[122]][_$_bd00[121]](_0x237B6, this, this[_$_bd00[117]])
};
GameMinion[_$_bd00[2]][_$_bd00[115]] = function() {
    if (!this[_$_bd00[84]]) {
        return
    };
    FX[_$_bd00[133]](this[_$_bd00[69]][_$_bd00[72]], this[_$_bd00[69]][_$_bd00[73]] + this[_$_bd00[54]], BATTLE[_$_bd00[132]], this[_$_bd00[69]][_$_bd00[74]] + 1);
    BATTLE[_$_bd00[132]][_$_bd00[134]]();
    AUDIO[_$_bd00[128]](_$_bd00[135]);
    if (this[_$_bd00[88]] === _$_bd00[89]) {
        BATTLE[_$_bd00[136]](this[_$_bd00[22]])
    } else {
        BATTLE[_$_bd00[137]](this[_$_bd00[22]])
    };
    this[_$_bd00[138]]()
};
GameMinion[_$_bd00[2]][_$_bd00[130]] = function() {
    if (!this[_$_bd00[84]]) {
        return
    };
    if (this[_$_bd00[86]]) {
        GAME[_$_bd00[122]][_$_bd00[121]](0.2, this, this[_$_bd00[130]]);
        return
    };
    if (this[_$_bd00[139]] != null) {
        this[_$_bd00[139]][_$_bd00[63]]()
    };
    this[_$_bd00[139]] = new PIXI[_$_bd00[70]]();
    this[_$_bd00[139]][_$_bd00[72]] = 35;
    this[_$_bd00[139]][_$_bd00[73]] = -210;
    this[_$_bd00[69]][_$_bd00[71]](this[_$_bd00[139]]);
    this[_$_bd00[140]] = new GameFX(FX[_$_bd00[126]][_$_bd00[141]], 0.2, 35, -205, this[_$_bd00[69]], 1, 2, true);
    GAME[_$_bd00[122]][_$_bd00[121]](1, this, this[_$_bd00[142]]);
    AUDIO[_$_bd00[128]](_$_bd00[143])
};
GameMinion[_$_bd00[2]][_$_bd00[142]] = function() {
    if (!this[_$_bd00[84]]) {
        return
    };
    if (this[_$_bd00[86]]) {
        GAME[_$_bd00[122]][_$_bd00[121]](0.2, this, this[_$_bd00[142]]);
        return
    };
    this[_$_bd00[144]] = BATTLE[_$_bd00[127]](this[_$_bd00[69]][_$_bd00[73]] - 205);
    this[_$_bd00[144]][_$_bd00[73]] = this[_$_bd00[69]][_$_bd00[73]] - 205;
    let _0x25601 = this[_$_bd00[69]][_$_bd00[72]] + 35 - this[_$_bd00[144]][_$_bd00[72]];
    let _0x255CA = new GameFX(FX[_$_bd00[126]][_$_bd00[145]], 0.2, 0, 0, this[_$_bd00[139]], 1, 1, false);
    _0x255CA[_$_bd00[147]][_$_bd00[146]] = 90;
    _0x255CA[_$_bd00[147]][_$_bd00[148]][_$_bd00[72]] = 1;
    _0x255CA[_$_bd00[147]][_$_bd00[148]][_$_bd00[73]] = _0x25601 / 285;
    GAME[_$_bd00[122]][_$_bd00[121]](0.3, this, this[_$_bd00[149]]);
    GAME[_$_bd00[122]][_$_bd00[121]](1.2, this[_$_bd00[140]], this[_$_bd00[140]][_$_bd00[150]]);
    let _0x237B6 = this[_$_bd00[53]] - 1 + (Math[_$_bd00[76]]() * 2);
    if (_0x237B6 < 0.5) {
        _0x237B6 = 0.5
    };
    GAME[_$_bd00[122]][_$_bd00[121]](_0x237B6, this, this[_$_bd00[117]]);
    AUDIO[_$_bd00[128]](_$_bd00[151])
};
GameMinion[_$_bd00[2]][_$_bd00[149]] = function() {
    let _0x232FC = Math[_$_bd00[101]](this[_$_bd00[144]][_$_bd00[73]]);
    new GameFX(FX[_$_bd00[126]][_$_bd00[152]], 0.2, this[_$_bd00[144]][_$_bd00[72]], this[_$_bd00[144]][_$_bd00[73]], BATTLE[_$_bd00[132]], _0x232FC, 2, false);
    BATTLE[_$_bd00[132]][_$_bd00[134]]();
    if (this[_$_bd00[144]][_$_bd00[153]] === _$_bd00[89]) {
        BATTLE[_$_bd00[136]](this[_$_bd00[22]])
    };
    if (this[_$_bd00[144]][_$_bd00[153]] === _$_bd00[116]) {
        BATTLE[_$_bd00[137]](this[_$_bd00[22]])
    }
};
GameMinion[_$_bd00[2]][_$_bd00[131]] = function() {
    if (!this[_$_bd00[84]]) {
        return
    };
    if (this[_$_bd00[86]]) {
        GAME[_$_bd00[122]][_$_bd00[121]](0.5, this, this[_$_bd00[117]]);
        return
    };
    let _0x248AF = this[_$_bd00[69]][_$_bd00[72]] - 90;
    let _0x2396E = this[_$_bd00[69]][_$_bd00[73]] + this[_$_bd00[54]] - 30;
    let _0x2404E = BATTLE[_$_bd00[127]](_0x2396E);
    new MagicBolt(_0x248AF, _0x2396E, _0x2404E, this[_$_bd00[69]][_$_bd00[74]] + 1, this[_$_bd00[68]][_$_bd00[22]]);
    AUDIO[_$_bd00[128]](_$_bd00[154]);
    let _0x237B6 = this[_$_bd00[53]] - 1 + (Math[_$_bd00[76]]() * 2);
    GAME[_$_bd00[122]][_$_bd00[121]](_0x237B6, this, this[_$_bd00[117]])
};
GameMinion[_$_bd00[2]][_$_bd00[124]] = function() {
    if (!this[_$_bd00[84]]) {
        return
    };
    if (this[_$_bd00[86]]) {
        return
    };
    if (this[_$_bd00[88]] === _$_bd00[89]) {
        BATTLE[_$_bd00[136]](this[_$_bd00[22]])
    };
    if (this[_$_bd00[88]] === _$_bd00[116]) {
        BATTLE[_$_bd00[137]](this[_$_bd00[22]])
    };
    AUDIO[_$_bd00[155]][_$_bd00[128]]()
};
GameMinion[_$_bd00[2]][_$_bd00[156]] = function(_0x24017) {
    if (!this[_$_bd00[84]]) {
        return null
    };
    let _0x248AF = this[_$_bd00[69]][_$_bd00[72]] + this[_$_bd00[90]];
    if (!_0x24017[_$_bd00[157]](_0x248AF)) {
        return null
    };
    let _0x24387 = _0x24017[_$_bd00[158]](this[_$_bd00[69]][_$_bd00[72]] + this[_$_bd00[25]]);
    let _0x2396E = this[_$_bd00[69]][_$_bd00[73]] + this[_$_bd00[91]];
    let _0x239A5 = this[_$_bd00[69]][_$_bd00[73]] + this[_$_bd00[92]];
    if (_0x24387 >= _0x2396E && _0x24387 <= _0x239A5) {
        return {
            x: this[_$_bd00[69]][_$_bd00[72]] + this[_$_bd00[25]],
            y: _0x24387,
            unit: this
        }
    };
    return null
};
GameMinion[_$_bd00[2]][_$_bd00[159]] = function(_0x23B94) {
    if (!this[_$_bd00[84]]) {
        return false
    };
    let _0x248AF = this[_$_bd00[69]][_$_bd00[72]] + this[_$_bd00[25]] - 80;
    let _0x248E6 = this[_$_bd00[69]][_$_bd00[72]] + this[_$_bd00[25]] + 80;
    let _0x2396E = this[_$_bd00[69]][_$_bd00[73]] + this[_$_bd00[91]];
    let _0x239A5 = this[_$_bd00[69]][_$_bd00[73]] + this[_$_bd00[92]];
    if (_0x23B94[_$_bd00[72]] >= _0x248AF && _0x23B94[_$_bd00[72]] <= _0x248E6 && _0x23B94[_$_bd00[73]] >= _0x2396E && _0x23B94[_$_bd00[73]] <= _0x239A5) {
        return true
    };
    return false
};
GameMinion[_$_bd00[2]][_$_bd00[160]] = function(_0x2328E, _0x232C5, _0x23FE0, _0x23B26) {
    if (!this[_$_bd00[84]]) {
        return
    };
    let _0x24A9E = this[_$_bd00[69]][_$_bd00[72]];
    let _0x24AD5 = this[_$_bd00[69]][_$_bd00[73]] - ((this[_$_bd00[92]] - this[_$_bd00[91]]) * 0.5);
    let _0x23CA7 = _0x2328E - _0x24A9E;
    let _0x23E28 = _0x232C5 - _0x24AD5;
    let _0x23711 = Math[_$_bd00[110]]((_0x23CA7 * _0x23CA7) + (_0x23E28 * _0x23E28));
    if (_0x23711 <= _0x23FE0) {
        this[_$_bd00[161]](_0x23B26)
    }
};
GameMinion[_$_bd00[2]][_$_bd00[162]] = function(_0x23B26) {
    if (!this[_$_bd00[84]]) {
        return
    };
    this[_$_bd00[161]](_0x23B26)
};
GameMinion[_$_bd00[2]][_$_bd00[161]] = function(_0x23B26) {
    this[_$_bd00[18]] -= _0x23B26;
    if (this[_$_bd00[18]] <= 0) {
        this[_$_bd00[138]]();
        AUDIO[_$_bd00[163]][_$_bd00[128]]()
    } else {
        this[_$_bd00[99]]();
        this[_$_bd00[86]] = true;
        this[_$_bd00[164]]()
    }
};
GameMinion[_$_bd00[2]][_$_bd00[138]] = function(_0x23B26) {
    if (!this[_$_bd00[84]]) {
        return
    };
    this[_$_bd00[84]] = false;
    this[_$_bd00[165]]();
    BATTLE[_$_bd00[166]](this);
    this[_$_bd00[77]][_$_bd00[63]]();
    this[_$_bd00[77]] = null;
    if (this[_$_bd00[140]] != null) {
        this[_$_bd00[140]][_$_bd00[150]]();
        this[_$_bd00[140]] = null
    }
};
GameMinion[_$_bd00[2]][_$_bd00[167]] = function(_0x256A6, _0x2566F, _0x249F9) {
    if (this[_$_bd00[81]] === _0x256A6) {
        return
    };
    if (this[_$_bd00[82]] != null) {
        this[_$_bd00[82]][_$_bd00[63]]({
            children: true,
            texture: false
        });
        this[_$_bd00[82]] = null
    };
    this[_$_bd00[81]] = _0x256A6;
    this[_$_bd00[82]] = this[_$_bd00[68]][_$_bd00[64]](_0x256A6);
    if (this[_$_bd00[82]] != null) {
        this[_$_bd00[69]][_$_bd00[71]](this[_$_bd00[82]]);
        this[_$_bd00[82]][_$_bd00[72]] = 0;
        this[_$_bd00[82]][_$_bd00[73]] = this[_$_bd00[54]];
        this[_$_bd00[82]][_$_bd00[168]] = _0x249F9;
        this[_$_bd00[82]][_$_bd00[169]] = _0x2566F;
        this[_$_bd00[82]][_$_bd00[170]]()
    }
};
GameMinion[_$_bd00[2]][_$_bd00[171]] = function() {
    if (this[_$_bd00[82]] != null) {
        this[_$_bd00[82]][_$_bd00[172]]()
    }
};
GameMinion[_$_bd00[2]][_$_bd00[173]] = function() {
    if (this[_$_bd00[82]] != null) {
        this[_$_bd00[82]][_$_bd00[170]]()
    }
};
GameMinion[_$_bd00[2]][_$_bd00[119]] = function() {
    this[_$_bd00[167]](_$_bd00[174], true, 0.2)
};
GameMinion[_$_bd00[2]][_$_bd00[108]] = function() {
    this[_$_bd00[167]](_$_bd00[175], true, this[_$_bd00[68]][_$_bd00[24]])
};
GameMinion[_$_bd00[2]][_$_bd00[123]] = function() {
    this[_$_bd00[167]](_$_bd00[176], false, 0.2);
    this[_$_bd00[82]][_$_bd00[177]] = () => {
        this[_$_bd00[119]]()
    }
};
GameMinion[_$_bd00[2]][_$_bd00[164]] = function() {
    this[_$_bd00[167]](_$_bd00[178], false, 0.2);
    this[_$_bd00[82]][_$_bd00[177]] = () => {
        this[_$_bd00[179]]()
    };
    if (this[_$_bd00[9]] != null) {
        this[_$_bd00[9]][_$_bd00[180]]();
        this[_$_bd00[9]] = null
    }
};
GameMinion[_$_bd00[2]][_$_bd00[179]] = function() {
    this[_$_bd00[119]]();
    this[_$_bd00[9]] = GAME[_$_bd00[122]][_$_bd00[121]](this[_$_bd00[49]], this, this[_$_bd00[181]])
};
GameMinion[_$_bd00[2]][_$_bd00[181]] = function() {
    if (!this[_$_bd00[84]]) {
        return
    };
    this[_$_bd00[86]] = false;
    if (this[_$_bd00[85]]) {
        this[_$_bd00[108]]()
    };
    this[_$_bd00[9]] = null
};
GameMinion[_$_bd00[2]][_$_bd00[165]] = function() {
    this[_$_bd00[167]](_$_bd00[182], false, 0.2);
    this[_$_bd00[82]][_$_bd00[177]] = () => {
        this[_$_bd00[183]]()
    }
};
GameMinion[_$_bd00[2]][_$_bd00[183]] = function() {
    if (!this[_$_bd00[87]]) {
        return
    };
    if (this[_$_bd00[6]] === _$_bd00[41] || this[_$_bd00[6]] === _$_bd00[31] || this[_$_bd00[6]] === _$_bd00[46]) {
        this[_$_bd00[63]]()
    } else {
        GAME[_$_bd00[122]][_$_bd00[121]](3, this, this[_$_bd00[184]]);
        if (BATTLE[_$_bd00[185]]) {
            BATTLE[_$_bd00[132]][_$_bd00[186]](this[_$_bd00[69]]);
            BATTLE[_$_bd00[187]][_$_bd00[71]](this[_$_bd00[69]])
        }
    }
};
GameMinion[_$_bd00[2]][_$_bd00[184]] = function() {
    if (!this[_$_bd00[87]]) {
        return
    };
    GAME[_$_bd00[104]][_$_bd00[103]](easing_linear, this, this[_$_bd00[188]], 1, 0, 3)
};
GameMinion[_$_bd00[2]][_$_bd00[188]] = function(_0x23A81, _0x23AB8) {
    if (!this[_$_bd00[87]]) {
        return
    };
    if (this[_$_bd00[82]] != null) {
        this[_$_bd00[82]][_$_bd00[96]] = _0x23A81;
        if (_0x23AB8) {
            this[_$_bd00[63]]()
        }
    }
};
GameMinion[_$_bd00[2]][_$_bd00[61]] = function() {
    GAME[_$_bd00[122]][_$_bd00[121]](0.1, this, this[_$_bd00[189]], 0)
};
GameMinion[_$_bd00[2]][_$_bd00[189]] = function(_0x23748) {
    _0x23748 = Number(_0x23748) + 1;
    switch (_0x23748) {
        case 1:
            this[_$_bd00[167]](_$_bd00[174], false, 0.2);
            break;
        case 2:
            this[_$_bd00[167]](_$_bd00[175], false, 0.2);
            break;
        case 3:
            this[_$_bd00[167]](_$_bd00[176], false, 0.2);
            break;
        case 4:
            this[_$_bd00[167]](_$_bd00[178], false, 0.2);
            break;
        case 5:
            this[_$_bd00[167]](_$_bd00[182], false, 0.2);
            break
    };
    if (_0x23748 < 5) {
        GAME[_$_bd00[122]][_$_bd00[121]](0.2, this, this[_$_bd00[189]], _0x23748)
    }
};
GameMinion[_$_bd00[2]][_$_bd00[63]] = function() {
    if (!this[_$_bd00[87]]) {
        return
    };
    this[_$_bd00[87]] = false;
    this[_$_bd00[84]] = false;
    if (this[_$_bd00[69]] != null) {
        this[_$_bd00[69]][_$_bd00[63]]({
            children: true
        })
    };
    this[_$_bd00[69]] = null;
    this[_$_bd00[82]] = null;
    this[_$_bd00[77]] = null
};

function ElectricBolt(_0x248AF, _0x2396E, _0x2404E, _0x25DF4, _0x25DBD, _0x23B26) {
    this[_$_bd00[22]] = _0x23B26;
    this[_$_bd00[88]] = _0x2404E;
    let _0x23CA7 = _0x2404E[_$_bd00[72]] - _0x248AF;
    let _0x23E28 = _0x2404E[_$_bd00[73]] - _0x2396E;
    let _0x23FA9 = Math[_$_bd00[190]](_0x23E28, _0x23CA7);
    let _0x23711 = Math[_$_bd00[110]]((_0x23CA7 * _0x23CA7) + (_0x23E28 * _0x23E28)) - 100;
    let _0x25D86 = _0x23711 / 2000;
    this[_$_bd00[191]] = _0x248AF;
    this[_$_bd00[192]] = _0x2396E;
    this[_$_bd00[193]] = Math[_$_bd00[194]](_0x23FA9) * _0x23711;
    this[_$_bd00[195]] = Math[_$_bd00[196]](_0x23FA9) * _0x23711;
    this[_$_bd00[147]] = new PIXI[_$_bd00[67]](FX[_$_bd00[126]][_$_bd00[197]]);
    this[_$_bd00[147]][_$_bd00[74]] = _0x25DF4;
    this[_$_bd00[147]][_$_bd00[72]] = _0x248AF;
    this[_$_bd00[147]][_$_bd00[73]] = _0x2396E;
    this[_$_bd00[147]][_$_bd00[169]] = false;
    this[_$_bd00[147]][_$_bd00[148]][_$_bd00[79]](1.5, 1.5);
    this[_$_bd00[147]][_$_bd00[198]] = _0x25DBD;
    this[_$_bd00[147]][_$_bd00[199]] = _0x23FA9 - (Math[_$_bd00[200]] * 0.5);
    let _0x2310D = 0.6 - _0x25D86;
    this[_$_bd00[147]][_$_bd00[168]] = 0.2 + (0.25 * _0x2310D);
    this[_$_bd00[147]][_$_bd00[170]]();
    BATTLE[_$_bd00[132]][_$_bd00[71]](this[_$_bd00[147]]);
    BATTLE[_$_bd00[132]][_$_bd00[134]]();
    GAME[_$_bd00[104]][_$_bd00[103]](easing_linear, this, this[_$_bd00[201]], 0, 1, _0x25D86);
    this[_$_bd00[147]][_$_bd00[177]] = () => {
        this[_$_bd00[202]]()
    }
}
ElectricBolt[_$_bd00[2]][_$_bd00[201]] = function(_0x25895, _0x23AB8) {
    if (this[_$_bd00[147]] != null) {
        this[_$_bd00[147]][_$_bd00[72]] = this[_$_bd00[191]] + (this[_$_bd00[193]] * _0x25895);
        this[_$_bd00[147]][_$_bd00[73]] = this[_$_bd00[192]] + (this[_$_bd00[195]] * _0x25895)
    }
};
ElectricBolt[_$_bd00[2]][_$_bd00[202]] = function() {
    if (this[_$_bd00[88]][_$_bd00[153]] === _$_bd00[89]) {
        BATTLE[_$_bd00[136]](this[_$_bd00[22]])
    } else {
        BATTLE[_$_bd00[137]](this[_$_bd00[22]])
    };
    this[_$_bd00[147]][_$_bd00[63]]();
    this[_$_bd00[147]] = null
};

function MagicBolt(_0x248AF, _0x2396E, _0x2404E, _0x25DF4, _0x23B26) {
    this[_$_bd00[22]] = _0x23B26;
    this[_$_bd00[88]] = _0x2404E;
    let _0x23CA7 = _0x2404E[_$_bd00[72]] - _0x248AF;
    let _0x23E28 = _0x2404E[_$_bd00[73]] - _0x2396E;
    let _0x23FA9 = Math[_$_bd00[190]](_0x23E28, _0x23CA7);
    let _0x23711 = Math[_$_bd00[110]]((_0x23CA7 * _0x23CA7) + (_0x23E28 * _0x23E28)) - 300;
    let _0x25D86 = _0x23711 / 1200;
    this[_$_bd00[191]] = _0x248AF;
    this[_$_bd00[192]] = _0x2396E;
    this[_$_bd00[193]] = Math[_$_bd00[194]](_0x23FA9) * _0x23711;
    this[_$_bd00[195]] = Math[_$_bd00[196]](_0x23FA9) * _0x23711;
    this[_$_bd00[147]] = new PIXI[_$_bd00[67]](FX[_$_bd00[126]][_$_bd00[203]]);
    this[_$_bd00[147]][_$_bd00[74]] = _0x25DF4;
    this[_$_bd00[147]][_$_bd00[72]] = _0x248AF;
    this[_$_bd00[147]][_$_bd00[73]] = _0x2396E;
    this[_$_bd00[147]][_$_bd00[169]] = false;
    this[_$_bd00[147]][_$_bd00[148]][_$_bd00[79]](1.5, 1.5);
    this[_$_bd00[147]][_$_bd00[199]] = _0x23FA9;
    let _0x2310D = 0.6 - _0x25D86;
    this[_$_bd00[147]][_$_bd00[168]] = 0.15 + (0.20 * _0x2310D);
    this[_$_bd00[147]][_$_bd00[170]]();
    BATTLE[_$_bd00[132]][_$_bd00[71]](this[_$_bd00[147]]);
    BATTLE[_$_bd00[132]][_$_bd00[134]]();
    GAME[_$_bd00[104]][_$_bd00[103]](easing_linear, this, this[_$_bd00[201]], 0, 1, _0x25D86);
    this[_$_bd00[147]][_$_bd00[177]] = () => {
        this[_$_bd00[202]]()
    }
}
MagicBolt[_$_bd00[2]][_$_bd00[201]] = function(_0x25895, _0x23AB8) {
    if (this[_$_bd00[147]] != null) {
        this[_$_bd00[147]][_$_bd00[72]] = this[_$_bd00[191]] + (this[_$_bd00[193]] * _0x25895);
        this[_$_bd00[147]][_$_bd00[73]] = this[_$_bd00[192]] + (this[_$_bd00[195]] * _0x25895)
    }
};
MagicBolt[_$_bd00[2]][_$_bd00[202]] = function() {
    let _0x232FC = Math[_$_bd00[101]](this[_$_bd00[88]][_$_bd00[73]]);
    new GameFX(FX[_$_bd00[126]][_$_bd00[204]], 0.2, this[_$_bd00[88]][_$_bd00[72]], this[_$_bd00[88]][_$_bd00[73]], BATTLE[_$_bd00[132]], _0x232FC, 0.75, false);
    BATTLE[_$_bd00[132]][_$_bd00[134]]();
    if (this[_$_bd00[88]][_$_bd00[153]] === _$_bd00[89]) {
        BATTLE[_$_bd00[136]](this[_$_bd00[22]])
    } else {
        BATTLE[_$_bd00[137]](this[_$_bd00[22]])
    };
    this[_$_bd00[147]][_$_bd00[63]]();
    this[_$_bd00[147]] = null
}