function StorageHandler(app)
{this.app=app;this.savepoint=null;this.getItem();}
StorageHandler.prototype.getLegacyData=function()
{var data=window.localStorage.getItem("data");if(data)
{data=JSON.parse(data);this.legacyLevel=data.gameData.levelNum;this.legacySavepoint=data.gameData.resetPointId;}}
StorageHandler.prototype.getItem=function()
{var data=window.localStorage.getItem("Prime_Empire_V2");data=JSON.parse(data);this.savepoint=data;return data;}
StorageHandler.prototype.setItem=function(data)
{if(window.localStorage.getItem("data"))
{window.localStorage.removeItem("data");}
data=JSON.stringify(data);window.localStorage.setItem("Prime_Empire_V2",data);this.savepoint=data;}
StorageHandler.prototype.removeItem=function()
{window.localStorage.removeItem("Prime_Empire_V2");this.savepoint=null;}