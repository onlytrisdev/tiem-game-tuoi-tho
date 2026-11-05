function CLevelSettings(){
    
    var _aNuggetPos;
    var _aNuggetInfo;
    var _aMalusPos;
    var _aLevelTarget;
    
    this._init = function(){
        _aNuggetPos = new Array();
        _aNuggetInfo = new Array();
        _aMalusPos = new Array();
        
        //LEVEL 1
        var aNuggets = [{x:100,y:470},{x:350,y:250},{x:450,y:350},{x:550,y:550},{x:770,y:600},{x:850,y:460},{x:950,y:680}];
        _aNuggetPos.push(aNuggets);
        var aInfos = [{type:1,scale:1},{type:2,scale:0.5},{type:2,scale:0.5},{type:2,scale:0.6},{type:3,scale:0.4},{type:3,scale:0.7},{type:4,scale:1}];
        _aNuggetInfo.push(aInfos);
        var aMalus = [{x:650,y:400}];
        _aMalusPos.push(aMalus);
        
        //LEVEL 2
        aNuggets = [{x:760,y:580},{x:80,y:350},{x:450,y:380},{x:150,y:550},{x:960,y:600},{x:580,y:680},{x:880,y:370}];
        _aNuggetPos.push(aNuggets);
        aInfos = [{type:1,scale:0.5},{type:2,scale:0.6},{type:2,scale:0.4},{type:2,scale:0.3},{type:3,scale:1},{type:3,scale:0.7},{type:4,scale:0.8}];
        _aNuggetInfo.push(aInfos);
        aMalus = [{x:320,y:400}];
        _aMalusPos.push(aMalus);
        
        //LEVEL 3
        aNuggets = [{x:660,y:350},{x:480,y:300},{x:250,y:390},{x:50,y:450},{x:200,y:550},{x:900,y:500},{x:750,y:650}];
        _aNuggetPos.push(aNuggets);
        aInfos = [{type:1,scale:0.5},{type:2,scale:0.6},{type:2,scale:0.4},{type:2,scale:0.3},{type:3,scale:1},{type:3,scale:0.7},{type:4,scale:0.8}];
        _aNuggetInfo.push(aInfos);
        aMalus = [{x:850,y:300}];
        _aMalusPos.push(aMalus);
        
        //LEVEL 4
        aNuggets = [{x:460,y:550},{x:280,y:600},{x:650,y:390},{x:750,y:450},{x:900,y:550},{x:950,y:300},{x:750,y:650}];
        _aNuggetPos.push(aNuggets);
        aInfos = [{type:1,scale:0.5},{type:2,scale:0.6},{type:2,scale:0.4},{type:2,scale:0.3},{type:3,scale:1},{type:3,scale:0.7},{type:4,scale:0.8}];
        _aNuggetInfo.push(aInfos);
        aMalus = [{x:400,y:500}];
        _aMalusPos.push(aMalus);
        
        
        //INIT ALL LEVEL TARGET
        _aLevelTarget = new Array();
        
        //TARGET LEVEL 1
        _aLevelTarget.push(2000);
        //TARGET LEVEL 2
        _aLevelTarget.push(7000);
        //TARGET LEVEL 3
        _aLevelTarget.push(11000);
        //TARGET LEVEL 4
        _aLevelTarget.push(15000);
    };
    
    this.getNuggetPosInLevel = function(iLevel){
        return _aNuggetPos[iLevel-1];
    };
    
    this.getNuggetInfoInLevel = function(iLevel){
        return _aNuggetInfo[iLevel-1];
    };

    this.getMalusPosInLevel = function(iLevel){
        return _aMalusPos[iLevel-1];
    };
    
    this.getLevelTarget = function(iLevel){
        return _aLevelTarget[iLevel-1];
    };
    
    this.getNumLevels = function(){
        return _aLevelTarget.length;
    };

    this._init();
}