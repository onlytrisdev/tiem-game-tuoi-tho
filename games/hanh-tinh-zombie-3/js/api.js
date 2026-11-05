var _$_40b3 = ["localdata", "progress", "", "get", "totalCoins", "tc", "getInt", "barricadeLevel", "bl", "hammerInStock", "tutorial", "api-tutorial", "hcustomized", "api-hcustomized", "HeroCustomized", "prototype", "set", "TutorialCompleted", "addCoins", "toString", "getTotalCoins", "addHammer", "getHammersInStock", "upgradeBarricade", "getBarricadeLevel", "loadInventory", "api-ammo", "|", "split", "length", ",", "SetAmmo", "EquippedWeapons", "equippedweapons", "revolver", "FindAsset", "IsWeaponEquipped", "id", "push", "saveProgress", "concat", "getProgress", "getLastLevelUnlocked", "saveAmmo", "Assets", "Locked", "Stock", "Ammo", "EquipWeapon", "saveEquippedWeapons"];

function GameAPI() {
    this[_$_40b3[0]] = new GameLocalData();
    this[_$_40b3[1]] = parseProgress(this[_$_40b3[0]][_$_40b3[3]](_$_40b3[1], _$_40b3[2]));
    this[_$_40b3[4]] = this[_$_40b3[0]][_$_40b3[6]](_$_40b3[5], 0);
    this[_$_40b3[7]] = this[_$_40b3[0]][_$_40b3[6]](_$_40b3[8], 1);
    this[_$_40b3[9]] = this[_$_40b3[0]][_$_40b3[6]](_$_40b3[9], 0);
    this[_$_40b3[10]] = this[_$_40b3[0]][_$_40b3[6]](_$_40b3[11], 0);
    this[_$_40b3[12]] = this[_$_40b3[0]][_$_40b3[6]](_$_40b3[13], 0)
}
GameAPI[_$_40b3[15]][_$_40b3[14]] = function() {
    this[_$_40b3[0]][_$_40b3[16]](_$_40b3[13], 1)
};
GameAPI[_$_40b3[15]][_$_40b3[17]] = function() {
    this[_$_40b3[0]][_$_40b3[16]](_$_40b3[11], 1);
    this[_$_40b3[10]] = 1
};
GameAPI[_$_40b3[15]][_$_40b3[18]] = function(_0x22BE5) {
    this[_$_40b3[4]] += _0x22BE5;
    this[_$_40b3[0]][_$_40b3[16]](_$_40b3[5], this[_$_40b3[4]][_$_40b3[19]]())
};
GameAPI[_$_40b3[15]][_$_40b3[20]] = function() {
    return this[_$_40b3[4]]
};
GameAPI[_$_40b3[15]][_$_40b3[21]] = function(_0x22BE5) {
    this[_$_40b3[9]] += _0x22BE5;
    this[_$_40b3[0]][_$_40b3[16]](_$_40b3[9], this[_$_40b3[9]][_$_40b3[19]]())
};
GameAPI[_$_40b3[15]][_$_40b3[22]] = function() {
    return this[_$_40b3[9]]
};
GameAPI[_$_40b3[15]][_$_40b3[23]] = function(_0x22C1C) {
    this[_$_40b3[18]](-_0x22C1C);
    this[_$_40b3[7]]++;
    this[_$_40b3[0]][_$_40b3[16]](_$_40b3[8], this[_$_40b3[7]][_$_40b3[19]]())
};
GameAPI[_$_40b3[15]][_$_40b3[24]] = function() {
    return this[_$_40b3[7]]
};
GameAPI[_$_40b3[15]][_$_40b3[25]] = function() {
    let _0x22C53 = this[_$_40b3[0]][_$_40b3[3]](_$_40b3[26], _$_40b3[2]);
    let _0x22CC1 = _0x22C53[_$_40b3[28]](_$_40b3[27]);
    for (let _0x22C8A = 0; _0x22C8A < _0x22CC1[_$_40b3[29]]; _0x22C8A++) {
        let _0x22CF8 = _0x22CC1[_0x22C8A][_$_40b3[28]](_$_40b3[30]);
        if (_0x22CF8[_$_40b3[29]] > 1) {
            ARSENAL[_$_40b3[31]](_0x22CF8[0], _0x22CF8[1])
        }
    };
    this[_$_40b3[32]] = parseEquippedWeapons(this[_$_40b3[0]][_$_40b3[3]](_$_40b3[33], _$_40b3[2]));
    if (this[_$_40b3[32]][1] == null) {
        this[_$_40b3[32]][1] = ARSENAL[_$_40b3[35]](_$_40b3[34])
    }
};
GameAPI[_$_40b3[15]][_$_40b3[36]] = function(_0x22EE7) {
    for (let _0x22C8A = 1; _0x22C8A <= 3; _0x22C8A++) {
        if (this[_$_40b3[32]][_0x22C8A] != null) {
            if (this[_$_40b3[32]][_0x22C8A][_$_40b3[37]] === _0x22EE7) {
                return true
            }
        }
    };
    return false
};

function parseProgress(_0x25BCE) {
    let _0x26579 = [];
    let _0x22CC1 = _0x25BCE[_$_40b3[28]](_$_40b3[30]);
    for (let _0x22C8A = 0; _0x22C8A < 60; _0x22C8A++) {
        if (_0x22C8A < _0x22CC1[_$_40b3[29]]) {
            _0x26579[_$_40b3[38]](parseInt(_0x22CC1[_0x22C8A]))
        } else {
            if (_0x22C8A === 0) {
                _0x26579[_$_40b3[38]](-1)
            } else {
                _0x26579[_$_40b3[38]](-2)
            }
        }
    };
    return _0x26579
}
GameAPI[_$_40b3[15]][_$_40b3[39]] = function(_0x22F55, _0x22FC3) {
    let _0x22F8C = _$_40b3[2];
    let _0x22FFA;
    for (let _0x22C8A = 0; _0x22C8A < 60; _0x22C8A++) {
        if (_0x22F55 == _0x22C8A) {
            this[_$_40b3[1]][_0x22C8A] = _0x22FC3;
            if (_0x22C8A < 59) {
                if (this[_$_40b3[1]][_0x22C8A + 1] == -2) {
                    this[_$_40b3[1]][_0x22C8A + 1] = -1
                }
            }
        };
        _0x22F8C = _0x22F8C[_$_40b3[40]](this[_$_40b3[1]][_0x22C8A][_$_40b3[19]]());
        if (_0x22C8A < 59) {
            _0x22F8C = _0x22F8C[_$_40b3[40]](_$_40b3[30])
        }
    };
    this[_$_40b3[0]][_$_40b3[16]](_$_40b3[1], _0x22F8C)
};
GameAPI[_$_40b3[15]][_$_40b3[41]] = function(_0x22F55) {
    for (let _0x22C8A = 0; _0x22C8A < 60; _0x22C8A++) {
        if (_0x22F55 == _0x22C8A) {
            return this[_$_40b3[1]][_0x22C8A]
        }
    }
};
GameAPI[_$_40b3[15]][_$_40b3[42]] = function() {
    let _0x23031 = 0;
    if (this[_$_40b3[1]] != null) {
        for (let _0x22C8A = 0; _0x22C8A < this[_$_40b3[1]][_$_40b3[29]]; _0x22C8A++) {
            if (this[_$_40b3[1]][_0x22C8A] > -2) {
                _0x23031 = _0x22C8A
            } else {
                break
            }
        }
    };
    return _0x23031
};
GameAPI[_$_40b3[15]][_$_40b3[43]] = function() {
    let _0x231B2 = _$_40b3[2];
    let _0x2317B = false;
    for (let _0x22C8A = 0; _0x22C8A < ARSENAL[_$_40b3[44]][_$_40b3[29]]; _0x22C8A++) {
        let _0x23220 = ARSENAL[_$_40b3[44]][_0x22C8A];
        if (!_0x23220[_$_40b3[45]]) {
            let _0x231E9 = _0x23220[_$_40b3[46]] + _0x23220[_$_40b3[47]];
            _0x231B2 += _0x23220[_$_40b3[37]] + _$_40b3[30] + _0x231E9 + _$_40b3[27]
        }
    };
    this[_$_40b3[0]][_$_40b3[16]](_$_40b3[26], _0x231B2)
};

function parseEquippedWeapons(_0x25BCE) {
    let _0x26542 = [null, null, null, null];
    let _0x22CC1 = _0x25BCE[_$_40b3[28]](_$_40b3[30]);
    for (let _0x22C8A = 0; _0x22C8A < _0x22CC1[_$_40b3[29]]; _0x22C8A++) {
        if (_0x22CC1[_0x22C8A][_$_40b3[29]] > 0) {
            _0x26542[_0x22C8A] = ARSENAL[_$_40b3[35]](_0x22CC1[_0x22C8A])
        }
    };
    return _0x26542
}
GameAPI[_$_40b3[15]][_$_40b3[48]] = function(_0x23220, _0x233A1) {
    this[_$_40b3[32]][_0x233A1] = _0x23220;
    for (let _0x22C8A = 1; _0x22C8A <= 3; _0x22C8A++) {
        if (this[_$_40b3[32]][_0x22C8A] === _0x23220 && _0x22C8A !== _0x233A1) {
            this[_$_40b3[32]][_0x22C8A] = null
        }
    };
    this[_$_40b3[49]]()
};
GameAPI[_$_40b3[15]][_$_40b3[49]] = function() {
    let _0x233D8 = _$_40b3[2];
    for (let _0x22C8A = 0; _0x22C8A < this[_$_40b3[32]][_$_40b3[29]]; _0x22C8A++) {
        if (this[_$_40b3[32]][_0x22C8A] != null) {
            _0x233D8 = _0x233D8[_$_40b3[40]](this[_$_40b3[32]][_0x22C8A][_$_40b3[37]])
        };
        _0x233D8 = _0x233D8[_$_40b3[40]](_$_40b3[30])
    };
    this[_$_40b3[0]][_$_40b3[16]](_$_40b3[33], _0x233D8)
}