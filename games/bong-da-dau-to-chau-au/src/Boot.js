var firstRunLandscape;
var waitForPortrait = false;
var boot = function(game){};
boot.prototype = {

    init: function () {


    },
	preload: function(){

     if (this.game.device.desktop)
        {
            this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
            this.scale.setMinMax(512, 320, 1024, 640);
            this.scale.pageAlignHorizontally = true;
            this.scale.pageAlignVertically = true;
        }
        else
        {
            firstRunLandscape = game.scale.isGameLandscape;
            this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
            this.game.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL;
            this.scale.setResizeCallback(this.gameResized, this);
            this.scale.setMinMax(410, 256, 1024, 640);
            this.scale.pageAlignHorizontally = true;
            this.scale.pageAlignVertically = true;
            this.scale.forceOrientation(true, false);
        
            this.scale.enterIncorrectOrientation.add(this.enterIncorrectOrientation, this);
            this.scale.leaveIncorrectOrientation.add(this.leaveIncorrectOrientation, this);
    
        }

		this.load.image('bg', 'img/background.jpg');
		this.load.image('loading-background', 'img/loading-background.png');
		this.load.image('loading-progress', 'img/loading-progress.png');
    this.load.text('textFix', 'textForIE.json');
	},
	create: function(){
		    
        game.renderer.renderSession.roundPixels = true;
          game.renderer.autoResize = true;
        this.stage.disableVisibilityChange = true;
        game.forceSingleUpdate = true;
        game.fpsProblemNotifier.add(handleFpsProblem, this);function handleFpsProblem() {// modify the game desired fps to match the current suggested 
          fpsgame.time.desiredFps = game.time.suggestedFps;
        }

        Phaser.Text.prototype.defuzz = function () { 
            var _this = this;
           // Window.setImmediate(function () { 
                var dx = Math.round(_this.worldPosition.x) - _this.worldPosition.x;
                var dy = Math.round(_this.worldPosition.y) - _this.worldPosition.y;                
                _this.x += dx;               
                _this.y += dy;            
            //});        
        };
        var issueXLS = false;
        try {
          var a = new Uint8Array(1);
          
         } catch(e) { 

           issueXLS = true;
           console.log("IE issue");
         }
       
		  

        if(!issueXLS){
          var url = "text.xls";
          var oReq = new XMLHttpRequest();
          oReq.open("GET", url, true);
          oReq.responseType = "arraybuffer";

          oReq.onload = function(e) {
            var arraybuffer = oReq.response;
            var data = new Uint8Array(arraybuffer);
            var arr = new Array();
            for(var i = 0; i != data.length; ++i) arr[i] = String.fromCharCode(data[i]);
            var bstr = arr.join("");
            var workbook = XLS.read(bstr, {type:"binary"});
            var workbook = to_json(workbook);
            game.textJSON = workbook.Feuil1;

            //console.log(JSON.stringify(game.textJSON));
          
          }

          oReq.send();
          
          function to_json(workbook) {
            var result = {};
            workbook.SheetNames.forEach(function(sheetName) {
              var roa = XLS.utils.sheet_to_row_object_array(workbook.Sheets[sheetName]);
              if(roa.length > 0){
                result[sheetName] = roa;
              }
            });
            return result;
          }
      }else{

          var jsonData = JSON.parse(game.cache.getText('textFix'));
          game.textJSON = jsonData;
      }
         

        game.langue = "EN";
     
    		this.game.state.start('Preload');
      
    
	},

 
	enterIncorrectOrientation: function () {
    if(!game.device.desktop)
      document.getElementById('orientation').style.display = 'block';
  },

  leaveIncorrectOrientation: function () {
    if(!game.device.desktop){
      if(!firstRunLandscape){
        
        waitForPortrait =true;
        document.getElementById('orientation').style.display = 'none';
        game.time.events.add(Phaser.Timer.SECOND * 0.1, function () {
          this.gameResized();
          game.time.events.add(Phaser.Timer.SECOND * 0.2, function () {
               this.gameResized();
          }, this);
          game.time.events.add(Phaser.Timer.SECOND * 0.4, function () {
               this.gameResized();
          }, this);
          game.time.events.add(Phaser.Timer.SECOND * 1, function () {
               this.gameResized();
          }, this);
            game.time.events.add(Phaser.Timer.SECOND * 1.4, function () {
               this.gameResized();
          }, this);
        }, this);
          firstRunLandscape = false;
      }
      else{
         document.getElementById('orientation').style.display = 'none';

      }
      
    }
  },

   gameResized: function (){
     
      if(waitForPortrait){

          console.log(window.innerWidth +  "  " + window.innerHeight);
        var gameRatio = window.innerWidth / window.innerHeight;
        if (window.innerWidth >  window.innerHeight) {
          waitForPortrait = false;
          
           var targetWidth = 1024; 
          var targetHeight = 640; 
          var deviceRatio = (window.innerWidth/window.innerHeight); 
          var newRatio = (targetHeight/targetWidth)*deviceRatio; 
          var newWidth = targetWidth*newRatio;
        
          game.width = Math.ceil(newWidth);
          game.height = targetHeight;
          game.renderer.resize(game.width,game.height);
          this.scale.setGameSize(Math.ceil(newWidth), targetHeight);
          console.log(game.width+" "+game.height);
          game.state.start('Boot');

          document.getElementById('orientation').style.display = 'none';

        }
      }
    }

  };