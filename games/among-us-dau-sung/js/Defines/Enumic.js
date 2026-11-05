/**
* 泛型定义
*/
/**
* 当前对象的状态
*/
var EnumScene;
(function (EnumScene) {
    //加载
    EnumScene[EnumScene["None"] = 0] = "None";
    EnumScene[EnumScene["LoadingScene"] = 1] = "LoadingScene";
    EnumScene[EnumScene["LobbyScene"] = 2] = "LobbyScene";
    EnumScene[EnumScene["SelectedScene"] = 3] = "SelectedScene";
    EnumScene[EnumScene["GameScene"] = 4] = "GameScene";
})(EnumScene || (EnumScene = {}));
var EnemyPropertiesStatus;
(function (EnemyPropertiesStatus) {
    EnemyPropertiesStatus[EnemyPropertiesStatus["None"] = 0] = "None";
    EnemyPropertiesStatus[EnemyPropertiesStatus["ON"] = 1] = "ON";
    EnemyPropertiesStatus[EnemyPropertiesStatus["OUT"] = 2] = "OUT";
})(EnemyPropertiesStatus || (EnemyPropertiesStatus = {}));
var EnemyStatus;
(function (EnemyStatus) {
    EnemyStatus[EnemyStatus["WaitFire"] = 0] = "WaitFire";
    EnemyStatus[EnemyStatus["Firing"] = 1] = "Firing";
    EnemyStatus[EnemyStatus["Dead"] = 2] = "Dead";
})(EnemyStatus || (EnemyStatus = {}));
