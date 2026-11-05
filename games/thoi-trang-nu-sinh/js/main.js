var game = new Phaser.Game(504, 800, Phaser.AUTO, 'gameContainer');
var Main = {
   music:null,
   shutterOn:[true],
   selectionFlag:[0,0,0,0],
   annaFlag:[1,1,1,1,1,1,1,1,1,1,1],
   annaAlpha:[0,0,1,0,0,0,0,0,0,1,1,0,0],

    rapunzelFlag:[1,1,1,1,1,1,1,1,1,1,1],
   rapunzelAlpha:[0,0,1,0,0,0,0,0,0,1,1,0,0],

   arielFlag:[1,1,1,1,1,1,1,1,1,1,1],
   arielAlpha:[0,0,1,0,0,0,0,0,0,1,1,0,0],

   elsaFlag:[1,1,1,1,1,1,1,1,1,1,1],
   elsaAlpha:[0,0,1,0,0,0,0,0,0,1,1,0,0],
   lightArr:[2],
};

Main.boot = function() {};
Main.boot.prototype = {
   preload: function(){
      game.stage.backgroundColor = '#b8175f';
    game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
			game.scale.pageAlignVertically = true;
			game.scale.pageAlignHorizontally = true;
            game.stage.disableVisibilityChange = true;
            game.scale.refresh();
            game.renderer.renderSession.roundPixels = true;

            game.scale.setResizeCallback(this.gameResized, this);

            game.load.image('loading', 'assets/prebar.png');
	    game.load.image('prelogo', 'assets/prebg_logo.png');
            game.load.image('barover', 'assets/barover.png');
            
            
           
            game.load.onFileComplete.add(this.fileLoadFun, this);  
   },
   gameResized: function(manager, bounds){
      var xpos = window.innerWidth - (window.innerWidth / game.width);
             var scale = Math.min(window.innerWidth / game.width, window.innerHeight / game.height);
             manager.setUserScale(scale, scale, 0, 0);
             game.scale.pageAlignHorizontally = true;
   },
   fileLoadFun: function(progress, cacheKey, success, totalLoaded, totalFiles){
      if (progress == 100) {
               game.load.onFileComplete.removeAll();
            game.state.start('preloader');   
            }
   }
}
Main.preloader = function(){};

Main.preloader.prototype = {
   init:function()
   {
      this.progressbar;
      this.check = 10;
      this.bgbtn;  
      this.progress;
	  this.prelogo;
   },
   preload:function(){
   this.progress = game.add.text(game.world.centerX,500,"LOADING: 0%",{font:"bold 22px Arial",fill: "#ffffff",align: "center"});
            this.progress.anchor.setTo(0.5)
			this.prelogo = game.add.sprite((game.width/2)-100, (game.height/2)-100, 'prelogo');

            this.prelogo.inputEnabled = true
            this.prelogo.input.useHandCursor = true;
            this.prelogo.events.onInputUp.add(this.openLink, this);
             
             game.load.crossOrigin='*';
             game.load.audio('music', ['assets/music.mp3']);
             game.load.spritesheet('soundicon', 'assets/soundicon.png',72,77);
             game.load.image('logo', 'assets/logo.png');
             game.load.spritesheet('effects', 'assets/effects.png',141,134);
             game.load.spritesheet('effectssd', 'assets/efftes012.png',367,335);

             game.load.image('morebtn','assets/buttons/morebtn.png');
             game.load.image('playbtn','assets/buttons/playbtn.png');
             game.load.image('resetbtn','assets/buttons/resetbtn.png');
             game.load.image('donebtn','assets/buttons/donebtn.png');
             game.load.image('nextbtn','assets/buttons/nextbtn.png');
             game.load.image('shutterbg','assets/shutterbg.jpg');
             
             game.load.image('tbg','assets/title/tbg.png');
             game.load.image('text','assets/title/text.png');
             game.load.image('book1','assets/title/book1.png');
             game.load.image('brush','assets/title/brush.png');
             game.load.image('cutter','assets/title/cutter.png');
             game.load.image('devider','assets/title/devider.png');
             game.load.image('frame1','assets/title/frame1.png');
             game.load.image('note','assets/title/note.png');
             game.load.image('pcap','assets/title/pcap.png');
             game.load.image('pen','assets/title/pen.png');
             game.load.image('pen2','assets/title/pen2.png');
             game.load.image('pencil','assets/title/pencil.png');
             game.load.image('set_square','assets/title/set_square.png');
             game.load.image('skale','assets/title/skale.png');
             game.load.image('text_0001','assets/title/text_0001.png');
             game.load.image('text_0002','assets/title/text_0002.png');
             game.load.image('text1','assets/title/text1.png');
             game.load.image('watch','assets/title/watch.png');
             game.load.image('sbg1','assets/title/sbg1.jpg');
             game.load.image('sbg2','assets/title/sbg2.png');
             game.load.image('shouse','assets/title/shouse.png');
             game.load.image('bus','assets/title/bus.png');
             game.load.image('dtext','assets/title/dtext.png');

             game.load.image('front','assets/intro/front.png');
             game.load.image('ibg','assets/intro/ibg.png');
             game.load.image('popup1','assets/intro/popup1.png');
             game.load.image('popup2','assets/intro/popup2.png');
             game.load.image('ianna','assets/intro/ianna.png');
             game.load.image('ielsa','assets/intro/ielsa.png');

             game.load.image('light','assets/selection/light.png');
             game.load.image('sbg','assets/selection/sbg.png');
             for(i=1;i<=2;i++){
             game.load.image('sanna'+i,'assets/selection/sanna'+i+'.png');
             game.load.image('sariel'+i,'assets/selection/sariel'+i+'.png');
             game.load.image('selsa'+i,'assets/selection/selsa'+i+'.png');
             game.load.image('srapunzel'+i,'assets/selection/srapunzel'+i+'.png');

             }

             game.load.image('shelf','assets/anna/shelf.png');
             game.load.image('fbtn','assets/anna/fbtn.png');
             game.load.image('bar','assets/anna/bar.png');
             game.load.image('cuboard','assets/anna/cuboard.png');
             game.load.image('hanger','assets/anna/hanger.png');

             game.load.image('ndoll','assets/anna/ndoll.png');
             game.load.image('ahand','assets/anna/ahand.png');
             game.load.image('afinger','assets/anna/afinger.png');
             game.load.image('ahead','assets/anna/ahead.png');
             game.load.image('abody','assets/anna/abody.png');
             game.load.spritesheet('aeyeblink', 'assets/anna/aeyeblink.png',75,20,9);

             game.load.image('rbody','assets/rapunzel/rbody.png');
             game.load.image('rfinger','assets/rapunzel/rfinger.png');
             game.load.image('rfinger2','assets/rapunzel/rfinger2.png');
             game.load.image('rhand','assets/rapunzel/rhand.png');
             game.load.image('rhead','assets/rapunzel/rhead.png');
             game.load.spritesheet('reyeblink', 'assets/rapunzel/reyeblink.png',81,39,9);

             game.load.image('arbody','assets/ariel/arbody.png');
             game.load.image('arfinger','assets/ariel/arfinger.png');
             game.load.image('arhand','assets/ariel/arhand.png');
             game.load.image('arhead','assets/ariel/arhead.png');
             game.load.spritesheet('areyeblink', 'assets/ariel/areyeblink.png',72,23,9);

             game.load.image('efdress3','assets/elsa/efdress3.png');
             game.load.image('efdress4','assets/elsa/efdress4.png');
             game.load.image('ebody','assets/elsa/ebody.png');
             game.load.image('ehand','assets/elsa/ehand.png');
             game.load.image('ehead','assets/elsa/ehead.png');
             game.load.spritesheet('eyeblink', 'assets/elsa/eyeblink.png',77,25,9);

             game.load.spritesheet('Anna', 'assets/title/Anna.png',253,700,13);
             game.load.spritesheet('Ariel', 'assets/title/Ariel.png',239,708,13);
             game.load.spritesheet('Elsa', 'assets/title/Elsa.png',253,700,13);
             game.load.spritesheet('Rapunzel', 'assets/title/Rapunzel.png',281,725,13);



             for(i=1;i<=7;i++){
             game.load.image('ashoe000'+i,'assets/anna/ashoe000'+i+'.png');
             game.load.image('asicon'+i,'assets/anna/asicon'+i+'.png');

             game.load.image('rshoe000'+i,'assets/rapunzel/rshoe000'+i+'.png');
             game.load.image('rsicon'+i,'assets/rapunzel/rsicon'+i+'.png');

              game.load.image('arshoe000'+i,'assets/ariel/arshoe000'+i+'.png');
             game.load.image('arsicon'+i,'assets/ariel/arsicon'+i+'.png');

              game.load.image('eshoe000'+i,'assets/elsa/eshoe000'+i+'.png');
             game.load.image('esicon'+i,'assets/elsa/esicon'+i+'.png');
             if(i<=4){
             game.load.image('adress000'+i,'assets/anna/adress000'+i+'.png');
             game.load.image('adicon'+i,'assets/anna/adicon000'+i+'.png');

             game.load.image('rdress000'+i,'assets/rapunzel/rdress000'+i+'.png');
             game.load.image('rdicon'+i,'assets/rapunzel/rdicon000'+i+'.png');

             game.load.image('ardress000'+i,'assets/ariel/ardress000'+i+'.png');
             game.load.image('ardicon'+i,'assets/ariel/ardicon000'+i+'.png');

              game.load.image('edress000'+i,'assets/elsa/edress000'+i+'.png');
             game.load.image('edicon'+i,'assets/elsa/edicon000'+i+'.png');
            }
             if(i<=2){
             game.load.image('abook000'+i,'assets/anna/abook000'+i+'.png');
             game.load.image('inner'+i,'assets/anna/inner'+i+'.png');
             game.load.image('aglass000'+i,'assets/anna/aglass000'+i+'.png');
             game.load.image('awatch000'+i,'assets/anna/awatch000'+i+'.png');
             game.load.image('aphone000'+i,'assets/anna/aphone000'+i+'.png');

             game.load.image('rphone000'+i,'assets/rapunzel/rphone000'+i+'.png');
             game.load.image('rglass000'+i,'assets/rapunzel/rglass000'+i+'.png');
             game.load.image('rwatch000'+i,'assets/rapunzel/rwatch000'+i+'.png');
             game.load.image('rbook000'+i,'assets/rapunzel/rbook000'+i+'.png');

              game.load.image('arphone000'+i,'assets/ariel/arphone000'+i+'.png');
             game.load.image('arglass000'+i,'assets/ariel/arglass000'+i+'.png');
             game.load.image('arwatch000'+i,'assets/ariel/arwatch000'+i+'.png');
             game.load.image('arbook000'+i,'assets/ariel/arbook000'+i+'.png');

              game.load.image('ephone000'+i,'assets/elsa/ephone000'+i+'.png');
             game.load.image('eglass000'+i,'assets/elsa/eglass000'+i+'.png');
             game.load.image('ewatch000'+i,'assets/elsa/ewatch000'+i+'.png');
             game.load.image('ebook000'+i,'assets/elsa/ebook000'+i+'.png');
             }
             if(i<=3){
             game.load.image('bbag000'+i,'assets/anna/bbag000'+i+'.png');
             game.load.image('fbag000'+i,'assets/anna/fbag000'+i+'.png');
             game.load.image('abotom000'+i,'assets/anna/abotom000'+i+'.png');
             game.load.image('atop000'+i,'assets/anna/atop000'+i+'.png');
             game.load.image('ticon'+i,'assets/anna/ticon000'+i+'.png');

             game.load.image('rbag000'+i,'assets/rapunzel/rbag000'+i+'.png');
             game.load.image('rfbag000'+i,'assets/rapunzel/rfbag000'+i+'.png');
             game.load.image('rbotom000'+i,'assets/rapunzel/rbotom000'+i+'.png');
             game.load.image('rtop000'+i,'assets/rapunzel/rtop000'+i+'.png');
             game.load.image('rticon'+i,'assets/rapunzel/rticon000'+i+'.png');

              game.load.image('arbag000'+i,'assets/ariel/arbag000'+i+'.png');
             game.load.image('arfbag000'+i,'assets/ariel/arfbag000'+i+'.png');
             game.load.image('arbotom000'+i,'assets/ariel/arbotom000'+i+'.png');
             game.load.image('artop000'+i,'assets/ariel/artop000'+i+'.png');
             game.load.image('articon'+i,'assets/ariel/articon000'+i+'.png');

              game.load.image('ebag000'+i,'assets/elsa/ebag000'+i+'.png');
             game.load.image('efbag000'+i,'assets/elsa/efbag000'+i+'.png');
             game.load.image('ebotom000'+i,'assets/elsa/ebotom000'+i+'.png');
             game.load.image('etop000'+i,'assets/elsa/etop000'+i+'.png');
             game.load.image('eticon'+i,'assets/elsa/eticon000'+i+'.png');
             }
             	if(i<=5){
             game.load.image('abhair000'+i,'assets/anna/abhair000'+i+'.png');
             game.load.image('afhair000'+i,'assets/anna/afhair000'+i+'.png');
             game.load.image('ahicon'+i,'assets/anna/ahicon'+i+'.png');

             game.load.image('rbhair000'+i,'assets/rapunzel/rbhair000'+i+'.png');
             game.load.image('rfhair000'+i,'assets/rapunzel/rfhair000'+i+'.png');
             game.load.image('rhicon'+i,'assets/rapunzel/rhicon'+i+'.png');

              game.load.image('arbhair000'+i,'assets/ariel/arbhair000'+i+'.png');
             game.load.image('arfhair000'+i,'assets/ariel/arfhair000'+i+'.png');
             game.load.image('arhicon'+i,'assets/ariel/arhicon'+i+'.png');

             game.load.image('ebhair000'+i,'assets/elsa/ebhair000'+i+'.png');
             game.load.image('efhair000'+i,'assets/elsa/efhair000'+i+'.png');
             game.load.image('ehicon'+i,'assets/elsa/ehicon'+i+'.png');
             }
             if(i<=6){
             game.load.image('achain000'+i,'assets/anna/achain000'+i+'.png');
             game.load.image('aear_ring000'+i,'assets/anna/aear_ring000'+i+'.png');
             game.load.image('arear_ring000'+i,'assets/anna/arear_ring000'+i+'.png');
             game.load.image('dicon'+i,'assets/anna/dicon'+i+'.png');
            
             game.load.image('rlear_ring000'+i,'assets/rapunzel/rlear_ring000'+i+'.png');
             game.load.image('rrear_ring000'+i,'assets/rapunzel/rrear_ring000'+i+'.png');
             game.load.image('rchain000'+i,'assets/rapunzel/rchain000'+i+'.png');

              game.load.image('alrear_ring000'+i,'assets/ariel/alrear_ring000'+i+'.png');
             game.load.image('arrear_ring000'+i,'assets/ariel/arrear_ring000'+i+'.png');
             game.load.image('archain000'+i,'assets/ariel/archain000'+i+'.png');

              game.load.image('lear_ring000'+i,'assets/elsa/lear_ring000'+i+'.png');
             game.load.image('rear_ring000'+i,'assets/elsa/rear_ring000'+i+'.png');
             game.load.image('echain000'+i,'assets/elsa/echain000'+i+'.png');
             }

             }

            for(i=0;i<RelatedGames.length; i++)
            {
            game.load.image('thumb_'+i, RelatedGames[i]["thumb"]);
            }
            game.load.image('Tump_frame','assets/Tump_frame.png');  

             //LLLLL
             game.load.onFileComplete.add(this.fileLoadFunPre, this);
             
		  
   },
   fileLoadFunPre:function(progress, cacheKey, success, totalLoaded, totalFiles){
      this.progress.setText('LOADING: '+parseInt(progress)+'%');                      
         if (progress == 100) {
               game.load.onFileComplete.removeAll();
               //AAAAAA
               game.state.start('title');  
            }
   },
   openLink:function(){
      CreateLinksInGame("Disney-Princess-School-Fashion","loading","logo");
   }
}
Main.title = function(){}

Main.title.prototype = {
    create:function(){
      if (Main.music == null) {
               Main.music = game.add.audio('music',0.5,true);
               Main.music.play();
            };
        this.levelGroup = game.add.group();
        this.bg = game.add.sprite(0,0,'tbg');
        this.levelGroup.add(this.bg);

        this.Elsa = game.add.sprite(-175.25,380,'Elsa');
        this.Elsa.anchor.setTo(0.5);
        this.Elsa.scale.setTo(0.9);
        this.Elsa.animations.add('Elsa');
        this.Elsa.animations.play('Elsa',10,true);

        this.Ariel = game.add.sprite(-175.25,380,'Ariel');
        this.Ariel.anchor.setTo(0.5);
        this.Ariel.scale.setTo(0.9);

        this.Anna = game.add.sprite(-175.25,380,'Anna');
        this.Anna.anchor.setTo(0.5);
        this.Anna.scale.setTo(0.9);

        this.Rapunzel = game.add.sprite(-175.25,380,'Rapunzel');
        this.Rapunzel.anchor.setTo(0.5);
        this.Rapunzel.scale.setTo(0.9);
        

        game.add.tween(this.Elsa).to({x:340},2400,Phaser.Easing.Quadratic.Out,true).onComplete.add(function(){
        this.Elsa.animations.stop();

        },this);
        game.time.events.add(500,function(){
        	this.Ariel.animations.add('Ariel');
        this.Ariel.animations.play('Ariel',10,true);
        	game.add.tween(this.Ariel).to({x:120},1700,'Linear',true).onComplete.add(function(){
        this.Ariel.animations.stop();
        game.time.events.add(700,function(){
         this.titlefun();
        },this);
        },this);
        },this)
        


         /*this.argroup = game.add.group();


        this.arbag1 = game.add.sprite(375.25,282.95,'arbag000'+Main.arielFlag[3]);
        this.arbag1.anchor.setTo(0.5);
        // this.arbag1.alpha=Main.arielAlpha[3];
        this.argroup.add(this.arbag1);

       this.arbhair1 = game.add.sprite(379.5,190.05,'arbhair000'+Main.arielFlag[10]);
        this.arbhair1.anchor.setTo(0.5);
        this.argroup.add(this.arbhair1);

        this.arbody = game.add.sprite(356.85,459.45,'arbody');
        this.arbody.anchor.setTo(0.5);
        this.argroup.add(this.arbody);

         this.inner1 = game.add.sprite(384,341,'inner1');
         this.inner1.anchor.setTo(0.5);
         this.inner1.alpha=Main.arielAlpha[11];
        this.argroup.add(this.inner1);

        this.inner2 = game.add.sprite(382,343.95,'inner2');
         this.inner2.anchor.setTo(0.5);
        this.inner2.alpha=Main.arielAlpha[12];
        this.argroup.add(this.inner2);

        this.arshoe1 = game.add.sprite(346.95,663.85,'arshoe000'+Main.arielFlag[9]);
        this.arshoe1.anchor.setTo(0.5);
        // this.arshoe1.alpha=Main.arielAlpha[9];
        this.argroup.add(this.arshoe1);

        this.ardress1 = game.add.sprite(388.25,366.5,'ardress000'+Main.arielFlag[2]);
        this.ardress1.anchor.setTo(0.5);
        // this.ardress1.alpha=Main.arielAlpha[2];
        this.argroup.add(this.ardress1);

        this.artop1 = game.add.sprite(376.55,280.7,'artop000'+Main.arielFlag[0]);
        this.artop1.anchor.setTo(0.5);
        this.artop1.alpha=Main.arielAlpha[0];
        this.argroup.add(this.artop1);

        this.arbotom1 = game.add.sprite(378,442,'arbotom000'+Main.arielFlag[1]);
        this.arbotom1.anchor.setTo(0.5);
        this.arbotom1.alpha=Main.arielAlpha[1];
        this.argroup.add(this.arbotom1);

        

        this.arfbag1 = game.add.sprite(376.6,264.5,'arfbag000'+Main.arielFlag[3]);
        this.arfbag1.anchor.setTo(0.5);
        // this.arfbag1.alpha=Main.arielAlpha[3];
        this.argroup.add(this.arfbag1);

        this.archain1 = game.add.sprite(379.75,242.5,'archain000'+Main.arielFlag[8]);
        this.archain1.anchor.setTo(0.5);
        // this.archain1.alpha=Main.arielAlpha[8];
        this.argroup.add(this.archain1);

        this.arhand = game.add.sprite(389.6,395.25,'arhand');
        this.arhand.anchor.setTo(0.5);
        this.argroup.add(this.arhand);

        this.arbook1 = game.add.sprite(324.95,476.55,'arbook000'+Main.arielFlag[4]);
        this.arbook1.anchor.setTo(0.5);
        // this.arbook1.alpha=Main.arielAlpha[4];
        this.argroup.add(this.arbook1);

         this.arphone1 = game.add.sprite(325.85,460.8,'arphone000'+Main.arielFlag[5]);
        this.arphone1.anchor.setTo(0.5);
        // this.arphone1.alpha=Main.arielAlpha[5];
        this.argroup.add(this.arphone1);

        this.arfinger = game.add.sprite(318.2,458.55,'arfinger');
        this.arfinger.anchor.setTo(0.5);
        this.argroup.add(this.arfinger);
        
         this.arwatch1 = game.add.sprite(317.3,406.9,'arwatch000'+Main.arielFlag[6]);
        this.arwatch1.anchor.setTo(0.5);
        // this.arwatch1.alpha=Main.arielAlpha[6];
        this.argroup.add(this.arwatch1);

        

        

       
        

        
          this.arhead = game.add.sprite(382.9,140.1,'arhead');
        this.arhead.anchor.setTo(0.5);
        this.argroup.add(this.arhead);

         this.areyeblink = game.add.sprite(382.9,148.65,'areyeblink');
         this.areyeblink.anchor.setTo(0.5);       
         this.areyeblink.animations.add('areyeblink').onComplete.add(function(){
          this.areyeblink.frame = 0;
        },this);
         this.areyeblink.animations.play('areyeblink',10,false);
         game.time.events.loop(3000,this.updateyeblink3,this);        
         this.argroup.add(this.areyeblink);
        

          this.arfhair1 = game.add.sprite(381.1,183.75,'arfhair000'+Main.arielFlag[10]);
        this.arfhair1.anchor.setTo(0.5);
        this.argroup.add(this.arfhair1);

         this.alrear_ring1 = game.add.sprite(383.8,168.85,'alrear_ring000'+Main.arielFlag[8]);
        this.alrear_ring1.anchor.setTo(0.5);
        // this.alrear_ring1.alpha=Main.arielAlpha[8];
        this.argroup.add(this.alrear_ring1);

        this.arrear_ring1 = game.add.sprite(383.8,168.85,'arrear_ring000'+Main.arielFlag[8]);
        this.arrear_ring1.anchor.setTo(0.5);
        // this.arrear_ring1.alpha=Main.arielAlpha[8];
        this.argroup.add(this.arrear_ring1);

        this.arglass1 = game.add.sprite(384.25,150.45,'arglass000'+Main.arielFlag[7]);
        this.arglass1.anchor.setTo(0.5);
        // this.arglass1.alpha=Main.arielAlpha[7];
        this.argroup.add(this.arglass1);*/


        /* this.egroup = game.add.group();

         

        this.ebag1 = game.add.sprite(382.9,327.05,'ebag000'+Main.elsaFlag[3]);
        this.ebag1.anchor.setTo(0.5);
        // this.ebag1.alpha=Main.elsaAlpha[3];
        this.egroup.add(this.ebag1);

       this.ebhair1 = game.add.sprite(378.5,201.9,'ebhair000'+Main.elsaFlag[10]);
        this.ebhair1.anchor.setTo(0.5);
        this.egroup.add(this.ebhair1);

        this.ebody = game.add.sprite(361.15,471.9,'ebody');
        this.ebody.anchor.setTo(0.5);
        this.egroup.add(this.ebody);

         this.inner1 = game.add.sprite(390,350,'inner1');
         this.inner1.anchor.setTo(0.5);
         this.inner1.alpha=Main.elsaAlpha[11];
        this.egroup.add(this.inner1);

        this.inner2 = game.add.sprite(391,343.95,'inner2');
         this.inner2.anchor.setTo(0.5);
        this.inner2.alpha=Main.elsaAlpha[12];
        this.egroup.add(this.inner2);

        this.eshoe1 = game.add.sprite(351.45,560.25,'eshoe000'+Main.elsaFlag[9]);
        this.eshoe1.anchor.setTo(0.5);
        // this.eshoe1.alpha=Main.elsaAlpha[9];
        this.egroup.add(this.eshoe1);

        this.edress1 = game.add.sprite(388.25,366.5,'edress000'+Main.elsaFlag[2]);
        this.edress1.anchor.setTo(0.5);
        // this.edress1.alpha=Main.elsaAlpha[2];
        this.egroup.add(this.edress1);

      

        this.ebotom1 = game.add.sprite(408,534,'ebotom000'+Main.elsaFlag[1]);
        this.ebotom1.anchor.setTo(0.5);
        this.ebotom1.alpha=Main.elsaAlpha[1];
        this.egroup.add(this.ebotom1);

         this.ebook1 = game.add.sprite(335.25,450.15,'ebook000'+Main.elsaFlag[4]);
        this.ebook1.anchor.setTo(0.5);
        // this.ebook1.alpha=Main.elsaAlpha[4];
        this.egroup.add(this.ebook1);

         this.ephone1 = game.add.sprite(327.85,446.45,'ephone000'+Main.elsaFlag[5]);
        this.ephone1.anchor.setTo(0.5);
        // this.ephone1.alpha=Main.elsaAlpha[5];
        this.egroup.add(this.ephone1);

        this.efbag1 = game.add.sprite(387.5,308.55,'efbag000'+Main.elsaFlag[3]);
        this.efbag1.anchor.setTo(0.5);
        // this.efbag1.alpha=Main.elsaAlpha[3];
        this.egroup.add(this.efbag1);

        this.ehand = game.add.sprite(395.45,408.05,'ehand');
        this.ehand.anchor.setTo(0.5);
        this.egroup.add(this.ehand);

        this.etop1 = game.add.sprite(388.9,333.1,'etop000'+Main.elsaFlag[0]);
        this.etop1.anchor.setTo(0.5);
        this.etop1.alpha=Main.elsaAlpha[0];
        this.egroup.add(this.etop1);

       

        this.efbag2 = game.add.sprite(387.5,308.55,'efbag000'+Main.elsaFlag[3]);
        this.efbag2.anchor.setTo(0.5);
        // this.efbag2.alpha=Main.elsaAlpha[3];
        this.efbag2.visible=false;
        this.egroup.add(this.efbag2);

        this.brect = game.add.graphics(333,200);
        this.brect.beginFill(0x000000,0.5);
        this.brect.drawRect(0,0,111,190);
        this.efbag2.mask = this.brect;
        this.egroup.add(this.brect);


        this.echain1 = game.add.sprite(372.7,273.85,'echain000'+Main.elsaFlag[8]);
        this.echain1.anchor.setTo(0.5);
        // this.echain1.alpha=Main.elsaAlpha[8];
        this.egroup.add(this.echain1);

        this.ehead = game.add.sprite(386.15,154,'ehead');
        this.ehead.anchor.setTo(0.5);
        this.egroup.add(this.ehead);

         this.eyeblink = game.add.sprite(385.7,159.55,'eyeblink');
         this.eyeblink.anchor.setTo(0.5);       
         this.eyeblink.animations.add('eyeblink').onComplete.add(function(){
          this.eyeblink.frame = 0;
        },this);
         this.eyeblink.animations.play('eyeblink',10,false);
         game.time.events.loop(3000,this.updateyeblink4,this);        
         this.egroup.add(this.eyeblink);


         this.efhair1 = game.add.sprite(378.5,205,'efhair000'+Main.elsaFlag[10]);
        this.efhair1.anchor.setTo(0.5);
        this.egroup.add(this.efhair1);

         this.eglass1 = game.add.sprite(391.7,329.85,'eglass000'+Main.elsaFlag[7]);
        this.eglass1.anchor.setTo(0.5);
        // this.eglass1.alpha=Main.elsaAlpha[7];
        this.egroup.add(this.eglass1);

         this.ewatch1 = game.add.sprite(321.8,426.55,'ewatch000'+Main.elsaFlag[6]);
        this.ewatch1.anchor.setTo(0.5);
        // this.ewatch1.alpha=Main.elsaAlpha[6];
        this.egroup.add(this.ewatch1);

        

         this.lear_ring1 = game.add.sprite(386.6,185.5,'lear_ring000'+Main.elsaFlag[8]);
        this.lear_ring1.anchor.setTo(0.5);
        // this.lear_ring1.alpha=Main.elsaAlpha[8];
        this.egroup.add(this.lear_ring1);

        this.rear_ring1 = game.add.sprite(386.6,185.5,'rear_ring000'+Main.elsaFlag[8]);
        this.rear_ring1.anchor.setTo(0.5);
        // this.rear_ring1.alpha=Main.elsaAlpha[8];
        this.egroup.add(this.rear_ring1);*/


      /* this.rgroup = game.add.group();


        this.rbag1 = game.add.sprite(363.3,284.8,'rbag000'+Main.rapunzelFlag[3]);
        this.rbag1.anchor.setTo(0.5);
        // this.rbag1.alpha=Main.rapunzelAlpha[3];
        this.rgroup.add(this.rbag1);

       this.rbhair1 = game.add.sprite(372.3,185.8,'rbhair000'+Main.rapunzelFlag[10]);
        this.rbhair1.anchor.setTo(0.5);
        this.rgroup.add(this.rbhair1);

        this.rbody = game.add.sprite(341.5,481.45,'rbody');
        this.rbody.anchor.setTo(0.5);
        this.rgroup.add(this.rbody);

         this.inner1 = game.add.sprite(372,347,'inner1');
         this.inner1.anchor.setTo(0.5);
         this.inner1.alpha=Main.rapunzelAlpha[11];
        this.rgroup.add(this.inner1);

        this.inner2 = game.add.sprite(373,343.95,'inner2');
         this.inner2.anchor.setTo(0.5);
        this.inner2.alpha=Main.rapunzelAlpha[12];
        this.rgroup.add(this.inner2);

        this.rshoe1 = game.add.sprite(331.05,698.05,'rshoe000'+Main.rapunzelFlag[9]);
        this.rshoe1.anchor.setTo(0.5);
        this.rshoe1.alpha=Main.rapunzelAlpha[9];
        this.rgroup.add(this.rshoe1);

        this.rdress1 = game.add.sprite(371.85,458.15,'rdress000'+Main.rapunzelFlag[2]);
        this.rdress1.anchor.setTo(0.5);
        // this.rdress1.alpha=Main.rapunzelAlpha[2];
        this.rgroup.add(this.rdress1);

        this.rtop1 = game.add.sprite(362,300,'rtop000'+Main.rapunzelFlag[0]);
        this.rtop1.anchor.setTo(0.5);
        this.rtop1.alpha=Main.rapunzelAlpha[0];
        this.rgroup.add(this.rtop1);

        this.rbotom1 = game.add.sprite(350,540,'rbotom000'+Main.rapunzelFlag[1]);
        this.rbotom1.anchor.setTo(0.5);
        this.rbotom1.scale.setTo(0.98);
        this.rbotom1.alpha=Main.rapunzelAlpha[1];
        this.rgroup.add(this.rbotom1);

        

         this.rfbag1 = game.add.sprite(365.7,288.15,'rfbag000'+Main.rapunzelFlag[3]);
        this.rfbag1.anchor.setTo(0.5);
        // this.rfbag1.alpha=Main.rapunzelAlpha[3];
        this.rgroup.add(this.rfbag1);

         this.rhand = game.add.sprite(376.15,418.3,'rhand');
        this.rhand.anchor.setTo(0.5);
        this.rgroup.add(this.rhand);

         this.rphone1 = game.add.sprite(315.85,480.95,'rphone000'+Main.rapunzelFlag[5]);
        this.rphone1.anchor.setTo(0.5);
        // this.rphone1.alpha=Main.rapunzelAlpha[5];
        this.rgroup.add(this.rphone1);
        
         this.rwatch1 = game.add.sprite(297.3,427.3,'rwatch000'+Main.rapunzelFlag[6]);
        this.rwatch1.anchor.setTo(0.5);
        // this.rwatch1.alpha=Main.rapunzelAlpha[6];
        this.rgroup.add(this.rwatch1);

        this.rfinger = game.add.sprite(300.65,476.7,'rfinger');
        this.rfinger.anchor.setTo(0.5);
        this.rgroup.add(this.rfinger);

        this.rbook1 = game.add.sprite(461.65,504.7,'rbook000'+Main.rapunzelFlag[4]);
        this.rbook1.anchor.setTo(0.5);
        // this.rbook1.alpha=Main.rapunzelAlpha[4];
        this.rgroup.add(this.rbook1);

        this.rfinger2 = game.add.sprite(448.8,476.2,'rfinger2');
        this.rfinger2.anchor.setTo(0.5);
        this.rgroup.add(this.rfinger2);
        

        
          this.rhead = game.add.sprite(364.75,148,'rhead');
        this.rhead.anchor.setTo(0.5);
        this.rgroup.add(this.rhead);

         this.reyeblink = game.add.sprite(365.5,145,'reyeblink');
         this.reyeblink.anchor.setTo(0.5);       
         this.reyeblink.animations.add('reyeblink').onComplete.add(function(){
          this.reyeblink.frame = 0;
        },this);
         this.reyeblink.animations.play('reyeblink',10,false);
         game.time.events.loop(3000,this.updateyeblink2,this);        
         this.rgroup.add(this.reyeblink);
        

        this.rchain1 = game.add.sprite(362.85,244.45,'rchain000'+Main.rapunzelFlag[8]);
        this.rchain1.anchor.setTo(0.5);
        // this.rchain1.alpha=Main.rapunzelAlpha[8];
        this.rgroup.add(this.rchain1);

       
       


        this.rglass1 = game.add.sprite(366,153.25,'rglass000'+Main.rapunzelFlag[7]);
        this.rglass1.anchor.setTo(0.5);
        // this.rglass1.alpha=Main.rapunzelAlpha[7];
        this.rgroup.add(this.rglass1);

        this.rfhair1 = game.add.sprite(369,185.8,'rfhair000'+Main.rapunzelFlag[10]);
        this.rfhair1.anchor.setTo(0.5);
        this.rgroup.add(this.rfhair1);

         this.rlear_ring1 = game.add.sprite(367,182.2,'rlear_ring000'+Main.rapunzelFlag[8]);
        this.rlear_ring1.anchor.setTo(0.5);
        // this.rlear_ring1.alpha=Main.rapunzelAlpha[8];
        this.rgroup.add(this.rlear_ring1);

        this.rrear_ring1 = game.add.sprite(367,182.2,'rrear_ring000'+Main.rapunzelFlag[8]);
        this.rrear_ring1.anchor.setTo(0.5);
        // this.rrear_ring1.alpha=Main.rapunzelAlpha[8];
        this.rgroup.add(this.rrear_ring1);*/


        /*this.agroup = game.add.group();

        this.bbag1 = game.add.sprite(382.05,281.55,'bbag000'+Main.annaFlag[3]);
        this.bbag1.anchor.setTo(0.5);
        // this.bbag1.alpha=Main.annaAlpha[3];
        this.agroup.add(this.bbag1);

         this.abhair1 = game.add.sprite(371.75,198.1,'abhair000'+Main.annaFlag[10]);
         this.abhair1.anchor.setTo(0.5);
        this.agroup.add(this.abhair1);

        this.abody = game.add.sprite(348.05,470.75,'abody');
         this.abody.anchor.setTo(0.5);
        this.agroup.add(this.abody);

         this.inner1 = game.add.sprite(377.6,343.95,'inner1');
         this.inner1.anchor.setTo(0.5);
         this.inner1.alpha=Main.annaAlpha[11];
        this.agroup.add(this.inner1);

        this.inner2 = game.add.sprite(377.6,343.95,'inner2');
         this.inner2.anchor.setTo(0.5);
         this.inner2.alpha=Main.annaAlpha[12];
        this.agroup.add(this.inner2);

        this.ashoe1 = game.add.sprite(337.95,680.1,'ashoe000'+Main.annaFlag[9]);
        this.ashoe1.anchor.setTo(0.5);
        // this.ashoe1.alpha=Main.annaAlpha[9];
        this.agroup.add(this.ashoe1);

        this.adress1 = game.add.sprite(380.2,369.75,'adress000'+Main.annaFlag[2]);
        this.adress1.anchor.setTo(0.5);
        // this.adress1.alpha=Main.annaAlpha[2];
        this.agroup.add(this.adress1);

        

        this.atop1 = game.add.sprite(366.9,301.25,'atop000'+Main.annaFlag[0]);
        this.atop1.anchor.setTo(0.5);
        this.atop1.alpha=Main.annaAlpha[0];
        this.agroup.add(this.atop1);

        this.abotom1 = game.add.sprite(379.35,435.85,'abotom000'+Main.annaFlag[1]);
        this.abotom1.anchor.setTo(0.5);
        this.abotom1.scale.setTo(0.95);
        this.abotom1.alpha=Main.annaAlpha[1];
        this.agroup.add(this.abotom1);


         this.fbag1 = game.add.sprite(369.2,273.3,'fbag000'+Main.annaFlag[3]);
        this.fbag1.anchor.setTo(0.5);
        // this.fbag1.alpha=Main.annaAlpha[3];
        this.agroup.add(this.fbag1);

        this.achain1 = game.add.sprite(370.55,249,'achain000'+Main.annaFlag[8]);
        this.achain1.anchor.setTo(0.5);
        // this.achain1.alpha=Main.annaAlpha[8];
        this.agroup.add(this.achain1);

        this.ahand = game.add.sprite(381.6,405.1,'ahand');
        this.ahand.anchor.setTo(0.5);
        this.agroup.add(this.ahand);

        this.abook1 = game.add.sprite(309.95,482.2,'abook000'+Main.annaFlag[4]);
        this.abook1.anchor.setTo(0.5);
        // this.abook1.alpha=Main.annaAlpha[4];
        this.agroup.add(this.abook1);

        this.aphone1 = game.add.sprite(316.4,473.05,'aphone000'+Main.annaFlag[5]);
        this.aphone1.anchor.setTo(0.5);
        // this.aphone1.alpha=Main.annaAlpha[5];
        this.agroup.add(this.aphone1);

        this.afinger = game.add.sprite(308.55,470.75,'afinger');
        this.afinger.anchor.setTo(0.5);
        this.agroup.add(this.afinger);

         this.awatch1 = game.add.sprite(308.1,420.25,'awatch000'+Main.annaFlag[6]);
        this.awatch1.anchor.setTo(0.5);
        // this.awatch1.alpha=Main.annaAlpha[6];
        this.agroup.add(this.awatch1);

         this.ahead = game.add.sprite(373.3,150.7,'ahead');
        this.ahead.anchor.setTo(0.5);
        this.agroup.add(this.ahead);

         this.aeyeblink = game.add.sprite(371.45,155.75,'aeyeblink');
         this.aeyeblink.anchor.setTo(0.5);       
         this.aeyeblink.animations.add('aeyeblink').onComplete.add(function(){
          this.aeyeblink.frame = 0;
        },this);
         this.aeyeblink.animations.play('aeyeblink',10,false);
         game.time.events.loop(3000,this.updateyeblink1,this);        
         this.agroup.add(this.aeyeblink);

        

        

        this.afhair1 = game.add.sprite(371.75,199.1,'afhair000'+Main.annaFlag[10]);
        this.afhair1.anchor.setTo(0.5);
        this.agroup.add(this.afhair1);

        this.aear_ring1 = game.add.sprite(371.95,175.95,'aear_ring000'+Main.annaFlag[8]);
        this.aear_ring1.anchor.setTo(0.5);
        // this.aear_ring1.alpha=Main.annaAlpha[8];
        this.agroup.add(this.aear_ring1);

        this.arear_ring1 = game.add.sprite(371.95,175.95,'arear_ring000'+Main.annaFlag[8]);
        this.arear_ring1.anchor.setTo(0.5);
        // this.arear_ring1.alpha=Main.annaAlpha[8];
        this.agroup.add(this.arear_ring1);

        this.aglass1 = game.add.sprite(371.95,158.05,'aglass000'+Main.annaFlag[7]);
        this.aglass1.anchor.setTo(0.5);
        // this.aglass1.alpha=Main.annaAlpha[7];
        this.agroup.add(this.aglass1);*/


       /* this.egroup.scale.setTo(0.8);
        this.egroup.x=-230;
        this.egroup.y=64;

        this.argroup.scale.setTo(0.8);
        this.argroup.x=-130;
        this.argroup.y=63;

        this.rgroup.scale.setTo(0.8);
        this.rgroup.scale.x=-this.rgroup.scale.x;
        this.rgroup.x=620;
        this.rgroup.y=56;

        this.agroup.scale.setTo(0.8);
        this.agroup.scale.x=-this.agroup.scale.x;
        this.agroup.x=720;
        this.agroup.y=65;*/

        /* game.time.events.loop(1900,function(){

       this.randomId1 = game.rnd.integerInRange(1,4);
       this.randomId2 = game.rnd.integerInRange(1,3);
       this.randomId3 = game.rnd.integerInRange(1,2);
           
   this.bbag1.loadTexture('bbag000'+this.randomId2);
   this.abhair1.loadTexture('abhair000'+this.randomId1);
   this.ashoe1.loadTexture('ashoe000'+this.randomId1);
   this.adress1.loadTexture('adress000'+this.randomId1);
   this.fbag1.loadTexture('fbag000'+this.randomId2);
   this.achain1.loadTexture('achain000'+this.randomId1);
   this.abook1.loadTexture('abook000'+this.randomId3);
   this.aphone1.loadTexture('aphone000'+this.randomId3);
   this.awatch1.loadTexture('awatch000'+this.randomId3);
   this.aear_ring1.loadTexture('aear_ring000'+this.randomId1);
   this.arear_ring1.loadTexture('arear_ring000'+this.randomId1);
   this.aglass1.loadTexture('aglass000'+this.randomId3);
   this.afhair1.loadTexture('afhair000'+this.randomId1);

   if(this.randomId1==1||this.randomId1==2){
            	this.aear_ring1.visible=false;
            	this.arear_ring1.visible=false;
            }
            if(this.randomId1==3){
            	this.aear_ring1.visible=true;
            	this.arear_ring1.visible=true;
            }
            if(this.randomId1==4){
            	this.aear_ring1.visible=false;
            	this.arear_ring1.visible=true;
            }
            if(this.randomId1==5){
            	this.aear_ring1.visible=true;
            	this.arear_ring1.visible=true;
            }
   
         },this);

          game.time.events.loop(1900,function(){

       this.randomId1 = game.rnd.integerInRange(1,4);
       this.randomId2 = game.rnd.integerInRange(1,3);
       this.randomId3 = game.rnd.integerInRange(1,2);
           
   this.ebag1.loadTexture('ebag000'+this.randomId2);
   this.ebhair1.loadTexture('ebhair000'+this.randomId1);
   this.eshoe1.loadTexture('eshoe000'+this.randomId1);
   this.edress1.loadTexture('edress000'+this.randomId1);
   this.efbag1.loadTexture('efbag000'+this.randomId2);
   this.echain1.loadTexture('echain000'+this.randomId1);
   this.ebook1.loadTexture('ebook000'+this.randomId3);
   this.ephone1.loadTexture('ephone000'+this.randomId3);
   this.ewatch1.loadTexture('ewatch000'+this.randomId3);
   this.rear_ring1.loadTexture('rear_ring000'+this.randomId1);
   this.lear_ring1.loadTexture('lear_ring000'+this.randomId1);
   this.eglass1.loadTexture('eglass000'+this.randomId3);
   this.efhair1.loadTexture('efhair000'+this.randomId1);

       if(this.randomId1==1||this.randomId1==3||this.randomId1==5){
        this.rear_ring1.visible=false;
        this.lear_ring1.visible=false;
  
         }
         if(this.randomId1==2){
        this.rear_ring1.visible=false;
        this.lear_ring1.visible=true;
  
         }
         if(this.randomId1==4){
        this.rear_ring1.visible=false;
        this.lear_ring1.visible=true;
  
         }
   
         },this);


          game.time.events.loop(1900,function(){

       this.randomId1 = game.rnd.integerInRange(1,4);
       this.randomId2 = game.rnd.integerInRange(1,3);
       this.randomId3 = game.rnd.integerInRange(1,2);
           
   this.rbag1.loadTexture('rbag000'+this.randomId2);
   this.rbhair1.loadTexture('rbhair000'+this.randomId1);
   this.rshoe1.loadTexture('rshoe000'+this.randomId1);
   this.rdress1.loadTexture('rdress000'+this.randomId1);
   this.rfbag1.loadTexture('rfbag000'+this.randomId2);
   this.rchain1.loadTexture('rchain000'+this.randomId1);
   this.rbook1.loadTexture('rbook000'+this.randomId3);
   this.rphone1.loadTexture('rphone000'+this.randomId3);
   this.rwatch1.loadTexture('rwatch000'+this.randomId3);
   this.rrear_ring1.loadTexture('rrear_ring000'+this.randomId1);
   this.rlear_ring1.loadTexture('rlear_ring000'+this.randomId1);
   this.rglass1.loadTexture('rglass000'+this.randomId3);
   this.rfhair1.loadTexture('rfhair000'+this.randomId1);

     if(this.randomId1==1){
        this.rrear_ring1.visible=false;
        this.rlear_ring1.visible=true;
  
         }
         if(this.randomId1==3||this.randomId1==2){
        this.rrear_ring1.visible=true;
        this.rlear_ring1.visible=true;
  
         }
         if(this.randomId1==4||this.randomId1==5){
        this.rrear_ring1.visible=true;
        this.rlear_ring1.visible=false;
  
         }
   
         },this);

           game.time.events.loop(1900,function(){

       this.randomId1 = game.rnd.integerInRange(1,4);
       this.randomId2 = game.rnd.integerInRange(1,3);
       this.randomId3 = game.rnd.integerInRange(1,2);
           
   this.arbag1.loadTexture('arbag000'+this.randomId2);
   this.arbhair1.loadTexture('arbhair000'+this.randomId1);
   this.arshoe1.loadTexture('arshoe000'+this.randomId1);
   this.ardress1.loadTexture('ardress000'+this.randomId1);
   this.arfbag1.loadTexture('arfbag000'+this.randomId2);
   this.archain1.loadTexture('archain000'+this.randomId1);
   this.arbook1.loadTexture('arbook000'+this.randomId3);
   this.arphone1.loadTexture('arphone000'+this.randomId3);
   this.arwatch1.loadTexture('arwatch000'+this.randomId3);
   this.arrear_ring1.loadTexture('arrear_ring000'+this.randomId1);
   this.alrear_ring1.loadTexture('alrear_ring000'+this.randomId1);
   this.arglass1.loadTexture('arglass000'+this.randomId3);
   this.arfhair1.loadTexture('arfhair000'+this.randomId1);

      if(this.randomId1==1){
        this.arrear_ring1.visible=false;
        this.alrear_ring1.visible=true;
  
         }
         if(this.randomId1==3||this.randomId1==2||this.randomId1==4){
        this.arrear_ring1.visible=true;
        this.alrear_ring1.visible=true;
  
         }
         if(this.randomId1==5){
        this.arrear_ring1.visible=false;
        this.alrear_ring1.visible=true;
  
         }
   
         },this);*/

         this.tgroup = game.add.group();

        this.skale1 = game.add.sprite(122.5,544.5,'skale');
        this.skale1.anchor.setTo(0.5);
        this.tgroup.add(this.skale1);

         this.book1 = game.add.sprite(69.5,532,'book1');
        this.book1.anchor.setTo(0.5);
        this.tgroup.add(this.book1);

         this.frame1 = game.add.sprite(251.5,400.5,'frame1');
        this.frame1.anchor.setTo(0.5);
        this.tgroup.add(this.frame1);

        this.set_square = game.add.sprite(368,329.5,'set_square');
        this.set_square.anchor.setTo(0.5);
        this.tgroup.add(this.set_square);

        this.pcap = game.add.sprite(104,528,'pcap');
        this.pcap.anchor.setTo(0.5);
        this.tgroup.add(this.pcap);

        this.pen = game.add.sprite(279.5,327.5,'pen');
        this.pen.anchor.setTo(0.5);
        this.tgroup.add(this.pen);

        this.cutter = game.add.sprite(317.5,321.5,'cutter');
        this.cutter.anchor.setTo(0.5);
        this.tgroup.add(this.cutter);

        this.pen2 = game.add.sprite(457,536.5,'pen2');
        this.pen2.anchor.setTo(0.5);
        this.tgroup.add(this.pen2);

         this.note = game.add.sprite(371.5,527.5,'note');
        this.note.anchor.setTo(0.5);
        this.tgroup.add(this.note);

         this.pencil = game.add.sprite(123,540.5,'pencil');
        this.pencil.anchor.setTo(0.5);
        this.tgroup.add(this.pencil);

         this.devider = game.add.sprite(175.5,532.5,'devider');
        this.devider.anchor.setTo(0.5);
        this.tgroup.add(this.devider);

        this.watch = game.add.sprite(144.5,301.5,'watch');
        this.watch.anchor.setTo(0.5);
        this.tgroup.add(this.watch);

        this.text1 = game.add.sprite(-256.5,464.5,'text1');
        this.text1.anchor.setTo(0.5);
        this.tgroup.add(this.text1);

         this.text_1 = game.add.sprite(257,391,'text_0001');
        this.text_1.anchor.setTo(0.5);
        this.tgroup.add(this.text_1);

        this.text_2 = game.add.sprite(257,391,'text_0002');
        this.text_2.anchor.setTo(0.5);
        this.tgroup.add(this.text_2);

         this.brush = game.add.sprite(131,386,'brush');
        this.brush.anchor.setTo(0.5);
        this.tgroup.add(this.brush);

        /* this.brush = game.add.sprite(332.5,534.5,'brush');
        this.brush.anchor.setTo(0.5);*/

        this.tsquare = game.add.graphics(-350,350);
        this.tsquare.beginFill(0x000000,0.5);
        this.tsquare.drawRect(0,0,370,80);
         this.text_2.mask = this.tsquare;
        this.tgroup.add(this.tsquare);

         this.tgroup.y=150;

          /*this.mcnt1=0;

       this.mcir = game.add.graphics(0,0);
        this.mcir.beginFill(0x666666,0.1);
        this.mcir.drawRect(0,0,800,600);
        this.mcir.inputEnabled=true;
        this.mcir.events.onInputDown.add(function(){
            this.mcnt1++;
          this['xcnt'+this.mcnt1]=game.input.activePointer.x;
          this['ycnt'+this.mcnt1]=game.input.activePointer.y;
        this['dummy'+this.mcnt1] = game.add.sprite(game.input.activePointer.x,game.input.activePointer.y,'brush');
        this['dummy'+this.mcnt1].anchor.setTo(0.5);
        // this['dummy'+this.mcnt1].scale.setTo(0.6);
       if(this.mcnt1>1){
        this['dummy'+(this.mcnt1-1)].visible=false;
       }
        console.log(this['xcnt'+this.mcnt1]+':'+this['ycnt'+this.mcnt1]);
        //console.log(this['ycnt'+this.mcnt1]);

        },this);*/
        
        game.add.tween(this.tsquare).to({x:70},1100,Phaser.Easing.Quadratic.Out,true);
        game.add.tween(this.brush).to({x:501,y:391},1000,Phaser.Easing.Quadratic.Out,true).onComplete.add(function(){
          game.add.tween(this.brush).to({x:332.5,y:534.5},700,Phaser.Easing.Quadratic.Out,true).onComplete.add(function(){
         game.add.tween(this.brush).to({angle:15},700,Phaser.Easing.Linear.Out,true,0,-1).yoyo(100,true);
         game.add.tween(this.text1).to({x:256.5},700,Phaser.Easing.Elastic.Out,true);
         game.add.tween(this.text_2.scale).to({x:1.05,y:1.05},700,Phaser.Easing.Linear.Out,true,0,-1).yoyo(100,true);
         this.text_1.visible=false;
        },this);
        },this);
        
        this.morebtn = game.add.sprite(75.55,749.55,'morebtn');
         this.morebtn.anchor.setTo(0.5);
         this.morebtn.inputEnabled = true;
         this.morebtn.input.useHandCursor = true;
         this.morebtn.events.onInputUp.add(this.moreLink, this);
         this.morebtn.events.onInputOver.add(this.btnOver, this);
         this.morebtn.events.onInputOut.add(this.btnOut, this);
         //this.levelGroup.add(this.morebtn);
         this.playbtn = game.add.sprite(431.4,749.2,'playbtn');
         this.playbtn.anchor.setTo(0.5);
         this.playbtn.inputEnabled = true;
         this.playbtn.input.useHandCursor = true;
         this.playbtn.events.onInputUp.add(this.enterRoom, this);
         this.playbtn.events.onInputOver.add(this.btnOver, this);
         this.playbtn.events.onInputOut.add(this.btnOut, this);
         //this.levelGroup.add(this.playbtn);
         
         game.add.tween(this.skale1.anchor).to({x:1.05,y:1.05},700,Phaser.Easing.Linear.Out,true,0,-1).yoyo(100,true);
         game.add.tween(this.book1.anchor).to({x:0.02,y:1.05},700,Phaser.Easing.Linear.Out,true,0,-1).yoyo(100,true);
         game.add.tween(this.frame1.scale).to({x:1.05,y:1.05},700,Phaser.Easing.Linear.Out,true,0,-1).yoyo(100,true);
         game.add.tween(this.set_square).to({angle:15},700,Phaser.Easing.Linear.Out,true,0,-1).yoyo(100,true);
         game.add.tween(this.pcap.scale).to({x:1.05,y:1.05},700,Phaser.Easing.Linear.Out,true,0,-1).yoyo(100,true);
         game.add.tween(this.pen.scale).to({x:1.05,y:1.05},700,Phaser.Easing.Linear.Out,true,0,-1).yoyo(100,true);
         game.add.tween(this.note.scale).to({x:1.05,y:1.05},700,Phaser.Easing.Linear.Out,true,0,-1).yoyo(100,true);
         game.add.tween(this.cutter).to({rotation:1},700,Phaser.Easing.Linear.Out,true,0,-1).yoyo(100,true);
         game.add.tween(this.pen2.scale).to({x:1.05,y:1.05},700,Phaser.Easing.Linear.Out,true,0,-1).yoyo(100,true);
         game.add.tween(this.pencil.scale).to({x:1.05,y:1.05},700,Phaser.Easing.Linear.Out,true,0,-1).yoyo(100,true);
         game.add.tween(this.devider.scale).to({x:1.05,y:1.05},700,Phaser.Easing.Linear.Out,true,0,-1).yoyo(100,true);
         game.add.tween(this.text1.scale).to({x:1.05,y:1.05},700,Phaser.Easing.Linear.Out,true,0,-1).yoyo(100,true);
         game.add.tween(this.watch).to({angle:15},500,Phaser.Easing.Linear.Out,true,0,-1).yoyo(100,true);
        
         this.logoVar = game.add.sprite(5, 5, 'logo');
         this.logoVar.scale.setTo(0.8);
         this.logoVar.inputEnabled = true
         this.logoVar.input.useHandCursor = true;
         this.logoVar.events.onInputUp.add(this.openLink, this);
         
         this.musicButton = game.add.sprite(427,5,"soundicon");
         this.musicButton.scale.setTo(0.9);
         this.musicButton.inputEnabled = true
         this.musicButton.input.useHandCursor = true;
         this.musicButton.events.onInputUp.add(this.changemusic, this);
         if (!game.sound.mute) {
               this.musicButton.frame = 0;
            }else{
               this.musicButton.frame = 1;
            }
        },
changemusic:function()
         {
            if (!game.sound.mute) {
               this.musicButton.frame = 1;
               game.sound.mute = true;
            }else{
               this.musicButton.frame = 0;
               game.sound.mute = false;
            };
         },
         titlefun:function(){
             this.Elsa.animations.add('Elsa');
        this.Elsa.animations.play('Elsa',10,true);
         	 game.add.tween(this.Elsa).to({x:640},2400,Phaser.Easing.Quadratic.Out,true).onComplete.add(function(){
        this.Elsa.animations.stop();
        this.Elsa.x=-175;

        },this);
        game.time.events.add(500,function(){
        	this.Ariel.animations.add('Ariel');
        this.Ariel.animations.play('Ariel',10,true);
        	game.add.tween(this.Ariel).to({x:640},1700,'Linear',true).onComplete.add(function(){
        this.Ariel.animations.stop();
        this.Elsa.x=-175;
        this.Ariel.x=-175;
         // this.titlefun();
         this.Anna.animations.add('Anna');
        this.Anna.animations.play('Anna',10,true);
         	 game.add.tween(this.Anna).to({x:340},2400,Phaser.Easing.Quadratic.Out,true).onComplete.add(function(){
        this.Anna.animations.stop();

        },this);
        game.time.events.add(500,function(){
        	this.Rapunzel.animations.add('Rapunzel');
        this.Rapunzel.animations.play('Rapunzel',10,true);
        	game.add.tween(this.Rapunzel).to({x:120},1700,'Linear',true).onComplete.add(function(){
        this.Rapunzel.animations.stop();
        game.time.events.add(800,function(){
         this.titlefun2();
        },this);
        },this);
        },this);
        },this);
        },this);
        
         },
          titlefun2:function(){
          this.Anna.animations.add('Anna');
        this.Anna.animations.play('Anna',10,true);
         	 game.add.tween(this.Anna).to({x:640},2400,Phaser.Easing.Quadratic.Out,true).onComplete.add(function(){
        this.Anna.animations.stop();
        this.Anna.x=-175;

        },this);
        game.time.events.add(500,function(){
        	this.Rapunzel.animations.add('Rapunzel');
        this.Rapunzel.animations.play('Rapunzel',10,true);
        	game.add.tween(this.Rapunzel).to({x:640},1700,'Linear',true).onComplete.add(function(){
        this.Rapunzel.animations.stop();
        this.Anna.x=-175;
        this.Rapunzel.x=-175;
         // this.titlefun();
         this.Elsa.animations.add('Elsa');
        this.Elsa.animations.play('Elsa',10,true);
         	 game.add.tween(this.Elsa).to({x:340},2400,Phaser.Easing.Quadratic.Out,true).onComplete.add(function(){
        this.Elsa.animations.stop();

        },this);
        game.time.events.add(500,function(){
        	this.Ariel.animations.add('Ariel');
        this.Ariel.animations.play('Ariel',10,true);
        	game.add.tween(this.Ariel).to({x:120},1700,'Linear',true).onComplete.add(function(){
        this.Ariel.animations.stop();
        game.time.events.add(800,function(){
         this.titlefun();
        },this);
        },this);
        },this);
        },this);
        },this);
        
         },
          updateyeblink4:function(){
          this.eyeblink.play('eyeblink',10,false);
        },
         updateyeblink1:function(){
          this.aeyeblink.play('aeyeblink',10,false);
        },
         updateyeblink2:function(){
          this.reyeblink.play('reyeblink',10,false);
        },
        updateyeblink3:function(){
          this.areyeblink.play('areyeblink',10,false);
        },
openLink:function()
{
   CreateLinksInGame("Disney-Princess-School-Fashion","menu","logo");
},
moreLink:function()
{
   CreateLinksInGame("Disney-Princess-School-Fashion","menu","more");
},
btnOver:function(items){
  items.scale.setTo(items.scale.x+0.05);
      effectVar = game.add.sprite(items.x-30,items.y-80,'effects'); 
   effectVar.anchor.setTo(0.5);
   effectVar.scale.setTo(2);
   effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
   effectVar.animations.play('glitter', 30, false);
   },
btnOut:function(items){
     items.scale.setTo(items.scale.x-0.05);

   },
removeGlitter:function(evt){
      evt.kill(); 
},
enterRoom:function(){
   game.state.start('intro');   
   },
}

Main.intro = function(){}

Main.intro.prototype = {
    create:function(){
      this.levelGroup = game.add.group();
      this.introbg = game.add.sprite(0,0,'ibg');
      this.levelGroup.add(this.introbg);

         this.ielsa = game.add.sprite(350.65,459.55,'ielsa');
         this.ielsa.anchor.setTo(0.5);

         this.ianna = game.add.sprite(110.3,456,'ianna');
         this.ianna.anchor.setTo(0.5);

          this.front = game.add.sprite(243.4,683.3,'front');
          this.front.anchor.setTo(0.5);
         

         this.morebtn = game.add.sprite(75,740,'morebtn');
         this.morebtn.anchor.setTo(0.5);
         this.morebtn.scale.setTo(0);
         this.morebtn.inputEnabled = true;
         this.morebtn.input.useHandCursor = true;
         this.morebtn.events.onInputUp.add(this.moreLink, this);
         this.morebtn.events.onInputOver.add(this.btnOver, this);
         this.morebtn.events.onInputOut.add(this.btnOut, this);
         //this.levelGroup.add(this.morebtn);
         this.playbtn = game.add.sprite(430,740,'nextbtn');
         this.playbtn.anchor.setTo(0.5);
         this.playbtn.scale.setTo(0);
         this.playbtn.inputEnabled = true;
         this.playbtn.input.useHandCursor = true;
         this.playbtn.events.onInputUp.add(this.enterRoom, this);
         this.playbtn.events.onInputOver.add(this.btnOver, this);
         this.playbtn.events.onInputOut.add(this.btnOut, this);
         //this.levelGroup.add(this.playbtn);
         
         this.popup1 = game.add.sprite(260,102,'popup1');
         this.popup1.anchor.setTo(0.5);
         this.popup1.scale.setTo(0);
         //this.levelGroup.add(this.popup1);
         
         this.popup2 = game.add.sprite(260,120,'popup2');
         this.popup2.anchor.setTo(0.5);
         this.popup2.scale.setTo(0);
        // this.levelGroup.add(this.popup2);
         
         /*this.popup3 = game.add.sprite(220,150,'popup3');
         this.popup3.anchor.setTo(0.5);
         this.popup3.scale.setTo(0);
        // this.levelGroup.add(this.popup3);*/

        this.nextbtn = game.add.sprite(430,740,'nextbtn');
         this.nextbtn.anchor.setTo(0.5);
         this.nextbtn.scale.setTo(0);
         // this.nextbtn.inputEnabled = true;
         // this.nextbtn.input.useHandCursor = true;
         this.nextbtn.events.onInputUp.add(this.enterRoom1, this);
         this.nextbtn.events.onInputOver.add(this.btnOver, this);
         this.nextbtn.events.onInputOut.add(this.btnOut, this);
         
      
     if (Main.shutterOn[0]) {
         this.shutter1 = game.add.sprite(0,0,'sbg1');
         this.shutter2 = game.add.sprite(252,596,'sbg2');
         this.shutter2.anchor.setTo(0.5);
         this.shouse = game.add.sprite(252,307.5,'shouse');
         this.shouse.anchor.setTo(0.5);
         this.bus1 = game.add.sprite(252,444,'bus');
         this.bus1.anchor.setTo(0.5);
          this.dtext1 = game.add.sprite(247.5,430,'dtext');
         this.dtext1.anchor.setTo(0.5);
         game.world.bringToTop(this.nextbtn);
          game.add.tween(this.nextbtn.scale).to({x:1,y:1}, 500, Phaser.Easing.Quadratic.Out, true).onComplete.add(function(){
           this.nextbtn.inputEnabled = true;
         this.nextbtn.input.useHandCursor = true;
         },this);
        }

         

        
      
         this.logoVar = game.add.sprite(5, 5, 'logo');
         this.logoVar.scale.setTo(0.8);
         this.logoVar.inputEnabled = true
         this.logoVar.input.useHandCursor = true;
         this.logoVar.events.onInputUp.add(this.openLink, this);
         
         this.musicButton = game.add.sprite(427,5,"soundicon");
         this.musicButton.scale.setTo(0.9);
         this.musicButton.inputEnabled = true
         this.musicButton.input.useHandCursor = true;
         this.musicButton.events.onInputUp.add(this.changemusic, this);
         if (!game.sound.mute) {
               this.musicButton.frame = 0;
            }else{
               this.musicButton.frame = 1;
            }
            
      
        
      },
startPopUp:function()
{
   game.add.tween(this.popup1.scale).to({x:1, y:1}, 700, Phaser.Easing.Quadratic.Out, true).onComplete.add(this.bringPopUp2, this);
},
bringPopUp2:function(){
   game.add.tween(this.popup1).to({alpha:0}, 700, Phaser.Easing.Quadratic.Out, true, 2000);
   game.add.tween(this.popup2.scale).to({x:1, y:1}, 700, Phaser.Easing.Quadratic.Out, true, 2500).onComplete.add(this.bringBottons, this);
},
bringPopUp3:function(){
   game.add.tween(this.popup2).to({alpha:0}, 700, Phaser.Easing.Quadratic.Out, true, 2000)
   game.add.tween(this.popup3.scale).to({x:1, y:1}, 700, Phaser.Easing.Quadratic.Out, true, 2500).onComplete.add(this.bringBottons, this);
   },
bringBottons:function(){
   game.add.tween(this.morebtn.scale).to({x:1, y:1}, 700, Phaser.Easing.Quadratic.Out, true);
   game.add.tween(this.playbtn.scale).to({x:1, y:1}, 700, Phaser.Easing.Quadratic.Out, true);
   },
   enterRoom1:function(){
	 game.add.tween(this.nextbtn.scale).to({x:0,y:0}, 500, Phaser.Easing.Quadratic.Out, true).onComplete.add(function(){
	 	this.nextbtn.visible=false;
	 },this);
     game.add.tween(this.dtext1.scale).to({x:0,y:0}, 500, Phaser.Easing.Quadratic.Out, true).onComplete.add(function(){
     game.add.tween(this.bus1).to({x:-250}, 500, Phaser.Easing.Quadratic.Out, true).onComplete.add(function(){
          this.bus1.visible=false;
          this.bus1.x=750;
          game.add.tween(this.shouse).to({y:-850}, 1000, Phaser.Easing.Quadratic.Out, true);
         game.add.tween(this.shutter2).to({y:1500}, 1000, Phaser.Easing.Quadratic.Out, true);
         game.add.tween(this.shutter1).to({y:-850}, 1000, Phaser.Easing.Quadratic.Out, true).onComplete.add(this.startPopUp,this);
         },this);
         },this);
   
   },
changemusic:function()
         {
            if (!game.sound.mute) {
               this.musicButton.frame = 1;
               game.sound.mute = true;
            }else{
               this.musicButton.frame = 0;
               game.sound.mute = false;
            };
         },
openLink:function()
{
   CreateLinksInGame("Disney-Princess-School-Fashion","game","logo");
},
moreLink:function(){
   CreateLinksInGame("Disney-Princess-School-Fashion","game","morebutton");
},
btnOver:function(items){
  items.scale.setTo(items.scale.x+0.05);
      effectVar = game.add.sprite(items.x-30,items.y-80,'effects'); 
   effectVar.anchor.setTo(0.5);
   effectVar.scale.setTo(2);
   effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
   effectVar.animations.play('glitter', 30, false);
   },
btnOut:function(items){
     items.scale.setTo(items.scale.x-0.05);

   },
removeGlitter:function(evt)
{
          evt.kill();  
},

enterRoom:function(){
  game.add.tween(this.shouse).to({y:307.5}, 1000, Phaser.Easing.Quadratic.Out, true);
         game.add.tween(this.shutter2).to({y:596}, 1000, Phaser.Easing.Quadratic.Out, true);
         game.add.tween(this.shutter1).to({y:0}, 1000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function(){
          this.bus1.visible=true;
         game.add.tween(this.bus1).to({x:252}, 500, Phaser.Easing.Quadratic.Out, true).onComplete.add(function(){
         game.add.tween(this.dtext1.scale).to({x:1,y:1}, 500, Phaser.Easing.Quadratic.Out, true).onComplete.add(function(){
   game.state.start('selection_screen');   
         },this);
         },this);
         },this);
   
   },
}

Main.selection_screen = function(){}

Main.selection_screen.prototype = {
    create:function(){
        this.levelGroup = game.add.group();
        this.introbg = game.add.sprite(0,0,'sbg');
        this.levelGroup.add(this.introbg);


        this.select1 = game.add.sprite(195,455,'selsa1');
        this.select1.anchor.setTo(0.5);
        if(Main.selectionFlag[0]==0){
        //this.select1.inputEnabled = false;
        //this.select1.input.useHandCursor = true;
        this.select1.events.onInputOver.add(this.btnOver, this);
        this.select1.events.onInputOut.add(this.btnOut, this);
     
       this.select1.events.onInputDown.add(function(){
        this.select1.inputEnabled = false;
        this.select2.inputEnabled = false;
       // this.select3.inputEnabled = false;
       Main.selectionFlag[0]=1;
      // Main.selectionFlag3[0]=1;
       //Main.finalcnt[0]=1;
       //Main.shuttersound.play();
       this.select1.inputEnabled = false;
       this.select2.inputEnabled = false;
      // this.select3.inputEnabled = false;
       Main.lightArr[0]=3;

              // Main.shuttersound.play();
       
         game.add.tween(this.shouse).to({y:307.5}, 1000, Phaser.Easing.Quadratic.Out, true);
         game.add.tween(this.shutter2).to({y:596}, 1000, Phaser.Easing.Quadratic.Out, true);
         game.add.tween(this.shutter1).to({y:0}, 1000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function(){
          this.bus1.visible=true;
         game.add.tween(this.bus1).to({x:252}, 500, Phaser.Easing.Quadratic.Out, true).onComplete.add(function(){
         game.add.tween(this.dtext1.scale).to({x:1,y:1}, 500, Phaser.Easing.Quadratic.Out, true).onComplete.add(function(){
   game.state.start('elsa_screen');   
         },this);
         },this);
         },this);
                 
            },this);
       }else{
         this.select1.loadTexture('selsa2');
       }
         this.levelGroup.add(this.select1);

         this.select2 = game.add.sprite(70.4,431.65,'sanna1');
        this.select2.anchor.setTo(0.5);
        if(Main.selectionFlag[1]==0){
        //this.select2.inputEnabled = false;
        //this.select2.input.useHandCursor = true;
        this.select2.events.onInputOver.add(this.btnOver, this);
        this.select2.events.onInputOut.add(this.btnOut, this);
     
       this.select2.events.onInputDown.add(function(){
        this.select2.inputEnabled = false;
        this.select2.inputEnabled = false;
       // this.select3.inputEnabled = false;
       Main.selectionFlag[1]=1;
      // Main.selectionFlag3[0]=1;
       //Main.finalcnt[0]=1;
       //Main.shuttersound.play();
       this.select2.inputEnabled = false;
       this.select1.inputEnabled = false;
      // this.select3.inputEnabled = false;

              // Main.shuttersound.play();

         game.add.tween(this.shouse).to({y:307.5}, 1000, Phaser.Easing.Quadratic.Out, true);
         game.add.tween(this.shutter2).to({y:596}, 1000, Phaser.Easing.Quadratic.Out, true);
         game.add.tween(this.shutter1).to({y:0}, 1000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function(){
          this.bus1.visible=true;
         game.add.tween(this.bus1).to({x:252}, 500, Phaser.Easing.Quadratic.Out, true).onComplete.add(function(){
         game.add.tween(this.dtext1.scale).to({x:1,y:1}, 500, Phaser.Easing.Quadratic.Out, true).onComplete.add(function(){
   game.state.start('anna_screen');   
         },this);
         },this);
         },this);
                 
            },this);
       }else{
         this.select2.loadTexture('sanna2');
       }
         this.levelGroup.add(this.select1);

          this.select3 = game.add.sprite(324.1,451.5,'sariel1');
        this.select3.anchor.setTo(0.5);
        if(Main.selectionFlag[2]==0){
        //this.select3.inputEnabled = false;
        //this.select3.input.useHandCursor = true;
        this.select3.events.onInputOver.add(this.btnOver, this);
        this.select3.events.onInputOut.add(this.btnOut, this);
     
       this.select3.events.onInputDown.add(function(){
        this.select3.inputEnabled = false;
        this.select3.inputEnabled = false;
       // this.select3.inputEnabled = false;
       Main.selectionFlag[2]=1;
      // Main.selectionFlag3[0]=1;
       //Main.finalcnt[0]=1;
       //Main.shuttersound.play();
       this.select3.inputEnabled = false;
       this.select1.inputEnabled = false;
      // this.select3.inputEnabled = false;

       Main.lightArr[0]=4;
              // Main.shuttersound.play();
      

        game.add.tween(this.shouse).to({y:307.5}, 1000, Phaser.Easing.Quadratic.Out, true);
         game.add.tween(this.shutter2).to({y:596}, 1000, Phaser.Easing.Quadratic.Out, true);
         game.add.tween(this.shutter1).to({y:0}, 1000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function(){
          this.bus1.visible=true;
         game.add.tween(this.bus1).to({x:252}, 500, Phaser.Easing.Quadratic.Out, true).onComplete.add(function(){
         game.add.tween(this.dtext1.scale).to({x:1,y:1}, 500, Phaser.Easing.Quadratic.Out, true).onComplete.add(function(){
   game.state.start('ariel_screen');   
         },this);
         },this);
         },this);
                 
            },this);
       }else{
         this.select3.loadTexture('sariel2');
       }
         this.levelGroup.add(this.select1);

          this.select4 = game.add.sprite(416.6,460.3,'srapunzel1');
        this.select4.anchor.setTo(0.5);
        if(Main.selectionFlag[3]==0){
        //this.select4.inputEnabled = false;
        //this.select4.input.useHandCursor = true;
        this.select4.events.onInputOver.add(this.btnOver, this);
        this.select4.events.onInputOut.add(this.btnOut, this);
     
       this.select4.events.onInputDown.add(function(){
        this.select4.inputEnabled = false;
        this.select4.inputEnabled = false;
       // this.select4.inputEnabled = false;
       Main.selectionFlag[3]=1;
      // Main.selectionFlag3[0]=1;
       //Main.finalcnt[0]=1;
       //Main.shuttersound.play();
       this.select4.inputEnabled = false;
       this.select1.inputEnabled = false;
      // this.select4.inputEnabled = false;

              // Main.shuttersound.play();
        Main.lightArr[0]=1;
        
         game.add.tween(this.shouse).to({y:307.5}, 1000, Phaser.Easing.Quadratic.Out, true);
         game.add.tween(this.shutter2).to({y:596}, 1000, Phaser.Easing.Quadratic.Out, true);
         game.add.tween(this.shutter1).to({y:0}, 1000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function(){
          this.bus1.visible=true;
         game.add.tween(this.bus1).to({x:252}, 500, Phaser.Easing.Quadratic.Out, true).onComplete.add(function(){
         game.add.tween(this.dtext1.scale).to({x:1,y:1}, 500, Phaser.Easing.Quadratic.Out, true).onComplete.add(function(){
   game.state.start('rapunzel_screen');   
         },this);
         },this);
         },this);
                 
            },this);
       }else{
         this.select4.loadTexture('srapunzel2');
       }
         this.levelGroup.add(this.select1);

         this.light1 = game.add.sprite(255,128.65,'light');
         this.light1.anchor.setTo(0.5);
         this.light1.alpha =0;

         this.light2 = game.add.sprite(370,128.65,'light');
         this.light2.anchor.setTo(0.5);
         this.light2.alpha =0;
         
         this.light3 = game.add.sprite(487,128.65,'light');
         this.light3.anchor.setTo(0.5);
         this.light3.alpha =0;

         this.light4 = game.add.sprite(590,128.65,'light');
         this.light4.anchor.setTo(0.5);
         this.light4.alpha =0;
        
         this.front = game.add.sprite(243.4,683.3,'front');
         this.front.anchor.setTo(0.5);

         this.morebtn = game.add.sprite(75,740,'morebtn');
         this.morebtn.anchor.setTo(0.5);
         // this.morebtn.scale.setTo(0);
         this.morebtn.inputEnabled = true;
         this.morebtn.input.useHandCursor = true;
         this.morebtn.events.onInputUp.add(this.moreLink, this);
         this.morebtn.events.onInputOver.add(this.btnOver, this);
         this.morebtn.events.onInputOut.add(this.btnOut, this);
         //this.levelGroup.add(this.morebtn);

         this.nextbtn = game.add.sprite(430,740,'nextbtn');
         this.nextbtn.anchor.setTo(0.5);
         this.nextbtn.scale.setTo(0);
         // this.nextbtn.inputEnabled = true;
         // this.nextbtn.input.useHandCursor = true;
         this.nextbtn.events.onInputUp.add(this.enterRoom1, this);
         this.nextbtn.events.onInputOver.add(this.btnOver, this);
         this.nextbtn.events.onInputOut.add(this.btnOut, this);

         if (Main.shutterOn[0]) {
         this.shutter1 = game.add.sprite(0,0,'sbg1');
          this.shutter2 = game.add.sprite(252,596,'sbg2');
         this.shutter2.anchor.setTo(0.5);
         this.shouse = game.add.sprite(252,307.5,'shouse');
         this.shouse.anchor.setTo(0.5);
         this.bus1 = game.add.sprite(252,444,'bus');
         this.bus1.anchor.setTo(0.5);
          this.dtext1 = game.add.sprite(247.5,430,'dtext');
         this.dtext1.anchor.setTo(0.5);
         game.world.bringToTop(this.nextbtn);
          game.add.tween(this.nextbtn.scale).to({x:1,y:1}, 500, Phaser.Easing.Quadratic.Out, true).onComplete.add(function(){
           this.nextbtn.inputEnabled = true;
         this.nextbtn.input.useHandCursor = true;
         },this);
        }
        
         this.lightCount=0;
        
         this.logoVar = game.add.sprite(5, 5, 'logo');
         this.logoVar.scale.setTo(0.8);
         this.logoVar.inputEnabled = true
         this.logoVar.input.useHandCursor = true;
         this.logoVar.events.onInputUp.add(this.openLink, this);
         
         this.musicButton = game.add.sprite(427,5,"soundicon");
         this.musicButton.scale.setTo(0.9);
         this.musicButton.inputEnabled = true
         this.musicButton.input.useHandCursor = true;
         this.musicButton.events.onInputUp.add(this.changemusic, this);
         if (!game.sound.mute) {
               this.musicButton.frame = 0;
            }else{
               this.musicButton.frame = 1;
            }
        },
changemusic:function()
         {
            if (!game.sound.mute) {
               this.musicButton.frame = 1;
               game.sound.mute = true;
            }else{
               this.musicButton.frame = 0;
               game.sound.mute = false;
            };
         },
        enterRoom1:function(){
     game.add.tween(this.nextbtn.scale).to({x:0,y:0}, 500, Phaser.Easing.Quadratic.Out, true).onComplete.add(function(){
        this.nextbtn.visible=false;
     },this);
     game.add.tween(this.dtext1.scale).to({x:0,y:0}, 500, Phaser.Easing.Quadratic.Out, true).onComplete.add(function(){
     game.add.tween(this.bus1).to({x:-250}, 500, Phaser.Easing.Quadratic.Out, true).onComplete.add(function(){
          this.bus1.visible=false;
          this.bus1.x=750;
          game.add.tween(this.shouse).to({y:-850}, 1000, Phaser.Easing.Quadratic.Out, true);
         game.add.tween(this.shutter2).to({y:1500}, 1000, Phaser.Easing.Quadratic.Out, true);
         game.add.tween(this.shutter1).to({y:-850}, 1000, Phaser.Easing.Quadratic.Out, true).onComplete.add(this.lightFlash,this);
         },this);
         },this);
   
   },
 lightFlash:function()
{
   if (this.lightCount<25) {
  this.lightCount++;
  // Main.lightArr[0] = this.randomId;
  if(Main.lightArr[0]==2){
  this.randomId = game.rnd.integerInRange(1,  4);
         
this.light1.alpha = 0;
  this.light2.alpha = 0;
  this.light3.alpha = 0;
  this.light4.alpha = 0;
 if(this.lightCount<25){
  this['light'+this.randomId].alpha = 1;
}
  this.time.events.add(Phaser.Timer.SECOND * 0.1,this.lightFlash, this); 
  }
  if(Main.lightArr[0]==3){

  this.randomId = game.rnd.integerInRange(1,  3);
         
this.light1.alpha = 0;
  this.light2.alpha = 0;
  this.light3.alpha = 0;
  this.light4.alpha = 0;
 if(this.lightCount<25){
  if(this.randomId==1){
  this.light1.alpha = 1;
  }
  if(this.randomId==2){
  this.light3.alpha = 1;
  }
  if(this.randomId==3){
  this.light4.alpha = 1;
  }
}
  this.time.events.add(Phaser.Timer.SECOND * 0.1,this.lightFlash, this); 
  }

  if(Main.lightArr[0]==4){

  this.randomId = game.rnd.integerInRange(1,  2);
        this.light1.alpha = 0;
  this.light2.alpha = 0;
  this.light3.alpha = 0;
  this.light4.alpha = 0;
if(this.lightCount<25){
  if(this.randomId==1){
  this.light1.alpha = 1;
  }
  if(this.randomId==2){
  this.light4.alpha = 1;
  }
  
}
  this.time.events.add(Phaser.Timer.SECOND * 0.1,this.lightFlash, this); 

         
  }
   if(Main.lightArr[0]==1){

        this.select2.loadTexture('sanna2');
        this.select2.inputEnabled = true;
        this.select2.input.useHandCursor = true;
         
  }

  
   
   if (this.lightCount == 25) {
    this['light'+Main.lightArr[0]].alpha = 1;
      //game.add.tween(this['cup'+this.randomId]).to({alpha:1}, 1000, Phaser.Easing.Quadratic.Out, true).onComplete.add(this.medalsFun, this);
      //this.medalsFun();
      if(Main.lightArr[0]==1){
      	this.select2.loadTexture('sanna2');
        this.select2.inputEnabled = true;
        this.select2.input.useHandCursor = true;
      }
      if(Main.lightArr[0]==2){
      	this.select1.loadTexture('selsa2');
        this.select1.inputEnabled = true;
        this.select1.input.useHandCursor = true;
      }
      if(Main.lightArr[0]==3){
      	this.select3.loadTexture('sariel2');
        this.select3.inputEnabled = true;
        this.select3.input.useHandCursor = true;
      }
      if(Main.lightArr[0]==4){
      	this.select4.loadTexture('srapunzel2');
        this.select4.inputEnabled = true;
        this.select4.input.useHandCursor = true;
      }
   }
   }
   },
   medalsFun:function()
{
    /*this.snow1.start(false, 3000, 50);
    this.snow2.start(false, 3000, 50);
    this.snow3.start(false, 3000, 50);
    this.snow4.start(false, 3000, 50);*/

   this['light'+Main.lightArr[0]].kill();
   //this.crown1.play('crown1play', 30, true);
   /*this['cup'+Main.lightArr[0]].animations.play('cup',10, false).onComplete.add(function(){
    game.add.tween(this['congrats'+Main.lightArr[0]].scale).to({x:1,y:1}, 1000, Phaser.Easing.Quadratic.Out, true).onComplete.add(this.bringPopUp2, this);

   },this);*/
     

   var array = [1, 4];
   var index = array.indexOf(Main.lightArr[0]);
      if (index > -1) {
    array.splice(index, 1);
}
   array = this.shuffle(array);
   /*/this['medal'+Main.lightArr[0]].frame = 0;
   //this['medal'+array[0]].frame = 1;
   //this['medal'+array[1]].frame = 2;
   this.paperFallCount = 0;
   this.paperFallCount2 = 0;
   this.paperFallCount3 = 0;
   //game.add.tween(this['medal'+array[0]]).to({alpha:1}, 1000, Phaser.Easing.Quadratic.Out, true);
   //game.add.tween(this['medal'+array[1]]).to({alpha:1}, 1000, Phaser.Easing.Quadratic.Out, true);
   //game.add.tween(this['medal'+Main.lightArr[0]]).to({alpha:1}, 1000, Phaser.Easing.Quadratic.Out, true);
   
   this.time.events.add(Phaser.Timer.SECOND * 0.1,this.paperFall, this);
   this.time.events.add(Phaser.Timer.SECOND * 0.1,this.paperFall2, this);
   this.time.events.add(Phaser.Timer.SECOND * 0.1,this.paperFall3, this);*/
},
shuffle:function(array)
{
   var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
},
openLink:function()
{
   CreateLinksInGame("Disney-Princess-School-Fashion","game","logo");
},
moreLink:function()
{
   CreateLinksInGame("Disney-Princess-School-Fashion","game","more");
},
btnOver:function(items){
  items.scale.setTo(items.scale.x+0.05);
      effectVar = game.add.sprite(items.x-30,items.y-80,'effects'); 
   effectVar.anchor.setTo(0.5);
   effectVar.scale.setTo(2);
   effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
   effectVar.animations.play('glitter', 30, false);
   },
btnOut:function(items){
     items.scale.setTo(items.scale.x-0.05);

   },
removeGlitter:function(evt){
      evt.kill(); 
      },
}


Main.anna_screen = function(){}

Main.anna_screen.prototype = {
    create:function(){
      this.anai=[0,0,0,0,0,0,0,0,0,0,0];
        this.levelGroup = game.add.group();
        this.introbg = game.add.sprite(0,0,'ibg');
        this.levelGroup.add(this.introbg);


         this.cuboard1 = game.add.sprite(134,374.85,'cuboard');
         this.cuboard1.anchor.setTo(0.5);

         this.icongp2 = game.add.group();

         this.bar1 = game.add.sprite(134.5,238.85,'bar');
         this.bar1.anchor.setTo(0.5);
         this.icongp2.add(this.bar1);

         this.bar2 = game.add.sprite(134.5,376.85,'bar');
         this.bar2.anchor.setTo(0.5);
         this.icongp2.add(this.bar2);

        var hangerx=[67.7,129,193.7];
        var hangery=[240.25,240.25,240.25];

        var ticonx=[63,127.45,192.3];
        var ticony=[298,298,295];

        for(i=1;i<=3;i++){
          this['hanger'+i] = game.add.sprite(hangerx[i-1],hangery[i-1],'hanger');
          this['hanger'+i].anchor.setTo(0.5);
          this['ticon'+i] = game.add.sprite(ticonx[i-1],ticony[i-1],'ticon'+i);
          this['ticon'+i].anchor.setTo(0.5);
          this['ticon'+i].id=i;
          this['ticon'+i].cnt=1;
          this['ticon'+i].inputEnabled=true;
          this['ticon'+i].input.useHandCursor=true;
          this['ticon'+i].input.pixelPerfectClick=true;
          //this['ticon'+i].events.onInputOver.add(this.btnOver, this);
         // this['ticon'+i].events.onInputOut.add(this.btnOut, this);
        this['ticon'+i].events.onInputDown.add(this.changefun, this);
            this.icongp2.add(this['hanger'+i]);
            this.icongp2.add(this['ticon'+i]);
        }

        var hanger2x=[68.2,147.05,211.9];
        var hanger2y=[377.4,377.4,377.4];

        var biconx=[67.45,143,210];
        var bicony=[433,431,430];

        for(i=1;i<=3;i++){
          this['hanger'+i] = game.add.sprite(hanger2x[i-1],hanger2y[i-1],'hanger');
          this['hanger'+i].anchor.setTo(0.5);
          this['bicon'+i] = game.add.sprite(biconx[i-1],bicony[i-1],'abotom000'+i);
          this['bicon'+i].anchor.setTo(0.5);
          this['bicon'+i].scale.setTo(0.6);
          this['bicon'+i].id=i;
          this['bicon'+i].cnt=2;
          this['bicon'+i].inputEnabled=true;
          this['bicon'+i].input.useHandCursor=true;
          this['bicon'+i].input.pixelPerfectClick=true;
          //this['bicon'+i].events.onInputOver.add(this.btnOver, this);
         // this['bicon'+i].events.onInputOut.add(this.btnOut, this);
        this['bicon'+i].events.onInputDown.add(this.changefun, this);
            this.icongp2.add(this['hanger'+i]);
            this.icongp2.add(this['bicon'+i]);
        }

       this.icongp2.visible = false;


         this.icongp1 = game.add.group();
         this.icongp3 = game.add.group();

         this.bar1 = game.add.sprite(134.5,238.85,'bar');
         this.bar1.anchor.setTo(0.5);
         this.icongp1.add(this.bar1);

         this.bar1 = game.add.sprite(134.5,238.85,'bar');
         this.bar1.anchor.setTo(0.5);
         this.icongp3.add(this.bar1);

        var hanger3x=[67.7,130.5,186.85,128.55];
        var hanger3y=[240.25,236.9,236.9,237.15];

        var adiconx=[66.75,133.3,188.35,132];
        var adicony=[338,340,340,340];

        for(i=1;i<=4;i++){
          this['hanger'+i] = game.add.sprite(hanger3x[i-1],hanger3y[i-1],'hanger');
          this['hanger'+i].anchor.setTo(0.5);
          this['adicon'+i] = game.add.sprite(adiconx[i-1],adicony[i-1],'adicon'+i);
          this['adicon'+i].anchor.setTo(0.5);
          this['adicon'+i].id=i;
          this['adicon'+i].cnt=3;
          this['adicon'+i].inputEnabled=true;
          this['adicon'+i].input.useHandCursor=true;
          this['adicon'+i].input.pixelPerfectClick=true;
          //this['adicon'+i].events.onInputOver.add(this.btnOver, this);
         // this['adicon'+i].events.onInputOut.add(this.btnOut, this);
        this['adicon'+i].events.onInputDown.add(this.changefun, this);
        if(i<=3){
            this.icongp1.add(this['hanger'+i]);
            this.icongp1.add(this['adicon'+i]);
          }else{
             this.icongp3.add(this['hanger'+i]);
            this.icongp3.add(this['adicon'+i]);
          }
        }
        //this.icongp1.visible = false;
        this.icongp3.visible = false;

        /*this.icongp4 = game.add.group();

         this.shelf1 = game.add.sprite(134,335.85,'shelf');
         this.shelf1.anchor.setTo(0.5);
         this.icongp4.add(this.shelf1);

         this.shelf2 = game.add.sprite(134,472.85,'shelf');
         this.shelf2.anchor.setTo(0.5);
         this.icongp4.add(this.shelf2);

        var bbiconx=[131.9,131.3,136.3];
        var bbicony=[267.25,412,559.65];

        for(i=1;i<=3;i++){
          this['bbicon'+i] = game.add.sprite(bbiconx[i-1],bbicony[i-1],'bbag000'+i);
          this['bbicon'+i].anchor.setTo(0.5);
          this['bbicon'+i].scale.setTo(0.7);
          this['bbicon'+i].id=i;
          this['bbicon'+i].cnt=4;
          this['bbicon'+i].inputEnabled=true;
          this['bbicon'+i].input.useHandCursor=true;
          //this['bbicon'+i].events.onInputOver.add(this.btnOver, this);
         // this['bbicon'+i].events.onInputOut.add(this.btnOut, this);
        this['bbicon'+i].events.onInputDown.add(this.changefun, this);
            this.icongp4.add(this['bbicon'+i]);
        }

        this.icongp4.visible = false;*/

         this.icongp5 = game.add.group();

         this.shelf1 = game.add.sprite(134,335.85,'shelf');
         this.shelf1.anchor.setTo(0.5);
         this.icongp5.add(this.shelf1);

         this.shelf2 = game.add.sprite(134,472.85,'shelf');
         this.shelf2.anchor.setTo(0.5);
         this.icongp5.add(this.shelf2);

        var bkiconx=[69,134.45,136.3];
        var bkicony=[301.55,299.95,559.65];

        for(i=1;i<=2;i++){
          this['bkicon'+i] = game.add.sprite(bkiconx[i-1],bkicony[i-1],'abook000'+i);
          this['bkicon'+i].anchor.setTo(0.5);
          this['bkicon'+i].id=i;
          this['bkicon'+i].cnt=5;
          this['bkicon'+i].inputEnabled=true;
          this['bkicon'+i].input.useHandCursor=true;
          //this['bkicon'+i].events.onInputOver.add(this.btnOver, this);
         // this['bkicon'+i].events.onInputOut.add(this.btnOut, this);
        this['bkicon'+i].events.onInputDown.add(this.changefun, this);
            this.icongp5.add(this['bkicon'+i]);
        }

        var phiconx=[212.75,65,136.3];
        var phicony=[312,447.25,559.65];

        for(i=1;i<=2;i++){
          this['phicon'+i] = game.add.sprite(phiconx[i-1],phicony[i-1],'aphone000'+i);
          this['phicon'+i].anchor.setTo(0.5);
          this['phicon'+i].angle=-32;
          this['phicon'+i].id=i;
          this['phicon'+i].cnt=6;
          this['phicon'+i].inputEnabled=true;
          this['phicon'+i].input.useHandCursor=true;
          //this['phicon'+i].events.onInputOver.add(this.btnOver, this);
         // this['phicon'+i].events.onInputOut.add(this.btnOut, this);
        this['phicon'+i].events.onInputDown.add(this.changefun, this);
            this.icongp5.add(this['phicon'+i]);
        }

        var wiconx=[127.5,188.45,136.3];
        var wicony=[458.15,458.15,559.65];

        for(i=1;i<=2;i++){
          this['wicon'+i] = game.add.sprite(wiconx[i-1],wicony[i-1],'awatch000'+i);
          this['wicon'+i].anchor.setTo(0.5);
          this['wicon'+i].scale.setTo(1.3);
          // this['wicon'+i].angle=-32;
          this['wicon'+i].id=i;
          this['wicon'+i].cnt=7;
          this['wicon'+i].inputEnabled=true;
          this['wicon'+i].input.useHandCursor=true;
          //this['wicon'+i].events.onInputOver.add(this.btnOver, this);
         // this['wicon'+i].events.onInputOut.add(this.btnOut, this);
        this['wicon'+i].events.onInputDown.add(this.changefun, this);
            this.icongp5.add(this['wicon'+i]);
        }

        var giconx=[80.5,184.45];
        var gicony=[594.1,594.1];

        for(i=1;i<=2;i++){
          this['gicon'+i] = game.add.sprite(giconx[i-1],gicony[i-1],'aglass000'+i);
          this['gicon'+i].anchor.setTo(0.5);
          // this['gicon'+i].angle=-32;
          this['gicon'+i].id=i;
          this['gicon'+i].cnt=8;
          this['gicon'+i].inputEnabled=true;
          this['gicon'+i].input.useHandCursor=true;
          //this['gicon'+i].events.onInputOver.add(this.btnOver, this);
         // this['gicon'+i].events.onInputOut.add(this.btnOut, this);
        this['gicon'+i].events.onInputDown.add(this.changefun, this);
            this.icongp5.add(this['gicon'+i]);
        }

        this.icongp5.visible = false;

        this.icongp6 = game.add.group();

         this.shelf1 = game.add.sprite(134,335.85,'shelf');
         this.shelf1.anchor.setTo(0.5);
         this.icongp6.add(this.shelf1);

         this.shelf2 = game.add.sprite(134,472.85,'shelf');
         this.shelf2.anchor.setTo(0.5);
         this.icongp6.add(this.shelf2);

        var eiconx=[84,187,81,193,80,187];
        var eicony=[268,267.65,410,410,552,551];

        var eicon2x=[82,187,78,190.45,78,185];
        var eicon2y=[268,267.65,410,410,552,551];

        var ciconx=[82,187,78,190.75,77.3,183.8];
        var cicony=[307.5,306,453,452,591,593];

        var ndollx=[80.15,184.6,77.2,189.65,76.35,183.3];
        var ndolly=[269.2,269.2,414.95,414.95,554.3,554.3];

        for(i=1;i<=6;i++){
          this['ndoll'+i] = game.add.sprite(ndollx[i-1],ndolly[i-1],'ndoll');
          this['ndoll'+i].anchor.setTo(0.5);
          this['eicon'+i] = game.add.sprite(eiconx[i-1],eicony[i-1],'aear_ring000'+i);
          this['eicon'+i].anchor.setTo(0.5);
          this['eicon'+i].scale.setTo(0.56);
          this['reicon'+i] = game.add.sprite(eicon2x[i-1],eicon2y[i-1],'arear_ring000'+i);
          this['reicon'+i].anchor.setTo(0.5);
          this['reicon'+i].scale.setTo(0.56);
          this['cicon'+i] = game.add.sprite(ciconx[i-1],cicony[i-1],'achain000'+i);
          this['cicon'+i].anchor.setTo(0.5);
          this['cicon'+i].scale.setTo(0.62);
          this['ndoll'+i].id=i;
          this['ndoll'+i].cnt=9;
          this['ndoll'+i].inputEnabled=true;
          this['ndoll'+i].input.useHandCursor=true;
          //this['ndoll'+i].events.onInputOver.add(this.btnOver, this);
         // this['ndoll'+i].events.onInputOut.add(this.btnOut, this);
        this['ndoll'+i].events.onInputDown.add(this.changefun, this);
            this.icongp6.add(this['ndoll'+i]);
            this.icongp6.add(this['eicon'+i]);
            this.icongp6.add(this['reicon'+i]);
            this.icongp6.add(this['cicon'+i]);
        }

        this.icongp6.visible = false;

         this.icongp7 = game.add.group();

         this.shelf1 = game.add.sprite(134,335.85,'shelf');
         this.shelf1.anchor.setTo(0.5);
         this.icongp7.add(this.shelf1);

         this.shelf2 = game.add.sprite(134,472.85,'shelf');
         this.shelf2.anchor.setTo(0.5);
         this.icongp7.add(this.shelf2);

        var asiconx=[64.95,137.95,207.95,86.95,162.95,91.95,167.95];
        var asicony=[271.35,271.65,271.65,459.45,455.6,592,592.05];

        for(i=1;i<=7;i++){
          this['asicon'+i] = game.add.sprite(asiconx[i-1],asicony[i-1],'asicon'+i);
          this['asicon'+i].anchor.setTo(0.5);
          this['asicon'+i].id=i;
          this['asicon'+i].cnt=10;
          this['asicon'+i].inputEnabled=true;
          this['asicon'+i].input.useHandCursor=true;
          //this['asicon'+i].events.onInputOver.add(this.btnOver, this);
         // this['asicon'+i].events.onInputOut.add(this.btnOut, this);
        this['asicon'+i].events.onInputDown.add(this.changefun, this);
            this.icongp7.add(this['asicon'+i]);
          }
        this.icongp7.visible = false;

        this.icongp8 = game.add.group();

         this.bar1 = game.add.sprite(134.5,212.85,'bar');
         this.bar1.anchor.setTo(0.5);
         this.icongp8.add(this.bar1);

         this.bar2 = game.add.sprite(134.5,336.85,'bar');
         this.bar2.anchor.setTo(0.5);
         this.icongp8.add(this.bar2);

         this.bar3 = game.add.sprite(134.5,482.85,'bar');
         this.bar3.anchor.setTo(0.5);
         this.icongp8.add(this.bar3);

        
          var ahiconx=[131.9,68.75,184.25,74.75,187.75,91.95,167.95];
        var ahicony=[254.4,379.7,379.7,524.85,524.85,592,592.05];

        for(i=1;i<=5;i++){
          this['ahicon'+i] = game.add.sprite(ahiconx[i-1],ahicony[i-1],'ahicon'+i);
          this['ahicon'+i].anchor.setTo(0.5);
          this['ahicon'+i].id=i;
          this['ahicon'+i].cnt=11;
          this['ahicon'+i].inputEnabled=true;
          this['ahicon'+i].input.useHandCursor=true;
          //this['ahicon'+i].events.onInputOver.add(this.btnOver, this);
         // this['ahicon'+i].events.onInputOut.add(this.btnOut, this);
        this['ahicon'+i].events.onInputDown.add(this.changefun, this);
            this.icongp8.add(this['ahicon'+i]);
          }

         this.icongp8.visible = false;

          this.igroup1 = game.add.group();
          this.igroup2 = game.add.group();


        var diconx=[52.4,141.35,230,52.4,141.35,141.35/*230*/];
        var dicony=[146,111.65,140.35,146,111.65,111.65/*140.35*/];

        for(i=1;i<=6;i++){
          this['dicon'+i] = game.add.sprite(diconx[i-1],dicony[i-1],'dicon'+i);
          this['dicon'+i].anchor.setTo(0.5);
          this['dicon'+i].id=i;
          this['dicon'+i].cnt=1;
          if(i>1){
          this['dicon'+i].inputEnabled=true;
          this['dicon'+i].input.useHandCursor=true;
          }
           if(i==5){
          this['dicon'+i].visible=false;
          }
          this['dicon'+i].events.onInputOver.add(this.btnOver, this);
         this['dicon'+i].events.onInputOut.add(this.btnOut, this);
        this['dicon'+i].events.onInputDown.add(this.groupfun, this);
        if(i<=3){
            this.igroup1.add(this['dicon'+i]);
          }
          if(i>3){
            this.igroup2.add(this['dicon'+i]);
          }
          }
        this.igroup2.visible = false;

        this.fbtn1 = game.add.sprite(240.95,60,'fbtn');
         this.fbtn1.anchor.setTo(0.5);
         this.fbtn1.scale.setTo(0.8);
         this.fbtn1.inputEnabled = true;
         this.fbtn1.input.useHandCursor = true;
         this.fbtn1.events.onInputDown.add(function(){
         this.fbtn1.visible = false;
         this.bcbtn1.visible = true;
         this.igroup1.visible = false;
         this.igroup2.visible = true;

         },this);

         this.bcbtn1 = game.add.sprite(240.95,60,'fbtn');
         this.bcbtn1.anchor.setTo(0.5);
         this.bcbtn1.scale.setTo(0.8);
         this.bcbtn1.visible = false;
         this.bcbtn1.scale.x=-this.bcbtn1.scale.x;
         this.bcbtn1.inputEnabled = true;
         this.bcbtn1.input.useHandCursor = true;
         this.bcbtn1.events.onInputDown.add(function(){
         this.bcbtn1.visible = false;
         this.fbtn1.visible = true;
         this.igroup2.visible = false;
         this.igroup1.visible = true;

         },this);

         this.cnt1=1;

         this.fbtn2 = game.add.sprite(210.95,670,'fbtn');
         this.fbtn2.anchor.setTo(0.5);
         this.fbtn2.scale.setTo(0.8);
         this.fbtn2.inputEnabled = true;
         this.fbtn2.input.useHandCursor = true;
         this.fbtn2.events.onInputDown.add(function(){
          this.cnt1++;
          this['icongp'+this.cnt1].visible=true;
          this['icongp'+(this.cnt1-1)].visible=false;
            this.bcbtn2.visible=true;
          if(this.cnt1==3){
            this.fbtn2.visible=false;
          }
        

         },this);

         this.bcbtn2 = game.add.sprite(70,670,'fbtn');
         this.bcbtn2.anchor.setTo(0.5);
         this.bcbtn2.scale.setTo(0.8);
         this.bcbtn2.visible = false;
         this.bcbtn2.scale.x=-this.bcbtn2.scale.x;
         this.bcbtn2.inputEnabled = true;
         this.bcbtn2.input.useHandCursor = true;
         this.bcbtn2.events.onInputDown.add(function(){
          this.cnt1--;
          this['icongp'+this.cnt1].visible=true;
          this['icongp'+(this.cnt1+1)].visible=false;
            this.fbtn2.visible=true;
          if(this.cnt1==1){
            this.bcbtn2.visible=false;
          }

         },this);

         /*this.rect1 = game.add.graphics(0,0);
         this.rect1.beginFill(0x000000,0.6);
         this.rect1.drawRect(0,0,504,800);*/

        this.agroup = game.add.group();

       /* this.bbag1 = game.add.sprite(382.05,281.55,'bbag000'+Main.annaFlag[3]);
        this.bbag1.anchor.setTo(0.5);
        this.bbag1.alpha=Main.annaAlpha[3];
        this.agroup.add(this.bbag1);*/

         this.abhair1 = game.add.sprite(371.75,198.1,'abhair000'+Main.annaFlag[10]);
         this.abhair1.anchor.setTo(0.5);
        this.agroup.add(this.abhair1);

        this.abody = game.add.sprite(348.05,470.75,'abody');
         this.abody.anchor.setTo(0.5);
        this.agroup.add(this.abody);

         this.inner1 = game.add.sprite(377.6,343.95,'inner1');
         this.inner1.anchor.setTo(0.5);
         this.inner1.alpha=Main.annaAlpha[11];
        this.agroup.add(this.inner1);

        this.inner2 = game.add.sprite(377.6,343.95,'inner2');
         this.inner2.anchor.setTo(0.5);
         this.inner2.alpha=Main.annaAlpha[12];
        this.agroup.add(this.inner2);

        this.ashoe1 = game.add.sprite(337.95,680.1,'ashoe000'+Main.annaFlag[9]);
        this.ashoe1.anchor.setTo(0.5);
        this.ashoe1.alpha=Main.annaAlpha[9];
        this.agroup.add(this.ashoe1);

        this.adress1 = game.add.sprite(380.2,369.75,'adress000'+Main.annaFlag[2]);
        this.adress1.anchor.setTo(0.5);
        this.adress1.alpha=Main.annaAlpha[2];
        this.agroup.add(this.adress1);

         this.atop1 = game.add.sprite(366.9,301.25,'atop000'+Main.annaFlag[0]);
        this.atop1.anchor.setTo(0.5);
        this.atop1.alpha=Main.annaAlpha[0];
        this.agroup.add(this.atop1);

        this.abotom1 = game.add.sprite(379.35,435.85,'abotom000'+Main.annaFlag[1]);
        this.abotom1.anchor.setTo(0.5);
        this.abotom1.scale.setTo(0.98);
        this.abotom1.alpha=Main.annaAlpha[1];
        this.agroup.add(this.abotom1);

       

        

        /*this.atop1.x=371.45;
        this.atop1.y=295.8;

        this.atop2.x=366.9;
        this.atop2.y=302.25;


        this.abotom1.x=384.35;
        this.abotom1.y=435.85;

        this.abotom2.x=377.45;
        this.abotom2.y=442.75;

        this.abotom3.x=377.45;
        this.abotom3.y=442.75;
       


        */

         /*this.fbag1 = game.add.sprite(369.2,273.3,'fbag000'+Main.annaFlag[3]);
        this.fbag1.anchor.setTo(0.5);
        this.fbag1.alpha=Main.annaAlpha[3];
        this.agroup.add(this.fbag1);*/

        this.achain1 = game.add.sprite(372.55,234,'achain000'+Main.annaFlag[8]);
        this.achain1.anchor.setTo(0.5);
        this.achain1.alpha=Main.annaAlpha[8];
        this.agroup.add(this.achain1);

        this.ahand = game.add.sprite(381.6,405.1,'ahand');
        this.ahand.anchor.setTo(0.5);
        this.agroup.add(this.ahand);

        this.abook1 = game.add.sprite(309.95,485.2,'abook000'+Main.annaFlag[4]);
        this.abook1.anchor.setTo(0.5);
        this.abook1.angle=-90;
        this.abook1.alpha=Main.annaAlpha[4];
        this.agroup.add(this.abook1);

        this.aphone1 = game.add.sprite(316.4,475.05,'aphone000'+Main.annaFlag[5]);
        this.aphone1.anchor.setTo(0.5);
        this.aphone1.scale.setTo(1.2);
        this.aphone1.alpha=Main.annaAlpha[5];
        this.agroup.add(this.aphone1);

        this.afinger = game.add.sprite(308.55,470.75,'afinger');
        this.afinger.anchor.setTo(0.5);
        this.agroup.add(this.afinger);

         this.awatch1 = game.add.sprite(308.1,420.25,'awatch000'+Main.annaFlag[6]);
        this.awatch1.anchor.setTo(0.5);
        this.awatch1.alpha=Main.annaAlpha[6];
        this.agroup.add(this.awatch1);

         this.ahead = game.add.sprite(373.3,150.7,'ahead');
        this.ahead.anchor.setTo(0.5);
        this.agroup.add(this.ahead);

         this.aeyeblink = game.add.sprite(371.45,155.75,'aeyeblink');
         this.aeyeblink.anchor.setTo(0.5);       
         this.aeyeblink.animations.add('aeyeblink').onComplete.add(function(){
          this.aeyeblink.frame = 0;
        },this);
         this.aeyeblink.animations.play('aeyeblink',10,false);
         game.time.events.loop(3000,this.updateyeblink1,this);        
         this.agroup.add(this.aeyeblink);

        

        

        this.afhair1 = game.add.sprite(371.75,199.1,'afhair000'+Main.annaFlag[10]);
        this.afhair1.anchor.setTo(0.5);
        this.agroup.add(this.afhair1);

        /*this.rect = game.add.graphics(0,0);
        this.rect.beginFill(0x000000,0.5);
        this.rect.drawRect(0,0,504,800);
        this.agroup.add(this.rect);*/

        this.aear_ring1 = game.add.sprite(375,172,'aear_ring000'+Main.annaFlag[8]);
        this.aear_ring1.anchor.setTo(0.5);
        this.aear_ring1.alpha=Main.annaAlpha[8];
        this.agroup.add(this.aear_ring1);

        this.arear_ring1 = game.add.sprite(375,173,'arear_ring000'+Main.annaFlag[8]);
        this.arear_ring1.anchor.setTo(0.5);
        this.arear_ring1.alpha=Main.annaAlpha[8];
        this.agroup.add(this.arear_ring1);

        this.aglass1 = game.add.sprite(371.95,158.05,'aglass000'+Main.annaFlag[7]);
        this.aglass1.anchor.setTo(0.5);
        this.aglass1.alpha=Main.annaAlpha[7];
        this.agroup.add(this.aglass1);




         this.morebtn = game.add.sprite(57,752,'morebtn');
         this.morebtn.anchor.setTo(0.5);
         this.morebtn.scale.setTo(0.8); 
         this.morebtn.inputEnabled = true;
         this.morebtn.input.useHandCursor = true;
         this.morebtn.events.onInputUp.add(this.moreLink, this);
         this.morebtn.events.onInputOver.add(this.btnOver, this);
         this.morebtn.events.onInputOut.add(this.btnOut, this);
         //this.levelGroup.add(this.morebtn);
         this.playbtn = game.add.sprite(430,740,'donebtn');
         this.playbtn.anchor.setTo(0.5);
         this.playbtn.scale.setTo(0);
         this.playbtn.inputEnabled = true;
         this.playbtn.input.useHandCursor = true;
        this.playbtn.events.onInputUp.add(this.enterRoom, this);
         this.playbtn.events.onInputOver.add(this.btnOver, this);
         this.playbtn.events.onInputOut.add(this.btnOut, this);

         this.nextbtn = game.add.sprite(430,740,'nextbtn');
         this.nextbtn.anchor.setTo(0.5);
         this.nextbtn.scale.setTo(0);
         // this.nextbtn.inputEnabled = true;
         // this.nextbtn.input.useHandCursor = true;
         this.nextbtn.events.onInputUp.add(this.enterRoom1, this);
         this.nextbtn.events.onInputOver.add(this.btnOver, this);
         this.nextbtn.events.onInputOut.add(this.btnOut, this);

         if (Main.shutterOn[0]) {
         this.shutter1 = game.add.sprite(0,0,'sbg1');
          this.shutter2 = game.add.sprite(252,596,'sbg2');
         this.shutter2.anchor.setTo(0.5);
         this.shouse = game.add.sprite(252,307.5,'shouse');
         this.shouse.anchor.setTo(0.5);
         this.bus1 = game.add.sprite(252,444,'bus');
         this.bus1.anchor.setTo(0.5);
          this.dtext1 = game.add.sprite(247.5,430,'dtext');
         this.dtext1.anchor.setTo(0.5);
         game.world.bringToTop(this.nextbtn);
          game.add.tween(this.nextbtn.scale).to({x:1,y:1}, 500, Phaser.Easing.Quadratic.Out, true).onComplete.add(function(){
           this.nextbtn.inputEnabled = true;
         this.nextbtn.input.useHandCursor = true;
         },this);
        }
        
         this.lightCount=0;
        
         this.logoVar = game.add.sprite(5, 5, 'logo');
         this.logoVar.scale.setTo(0.8);
         this.logoVar.inputEnabled = true
         this.logoVar.input.useHandCursor = true;
         this.logoVar.events.onInputUp.add(this.openLink, this);
         
         this.musicButton = game.add.sprite(427,5,"soundicon");
         this.musicButton.scale.setTo(0.9);
         this.musicButton.inputEnabled = true
         this.musicButton.input.useHandCursor = true;
         this.musicButton.events.onInputUp.add(this.changemusic, this);
         if (!game.sound.mute) {
               this.musicButton.frame = 0;
            }else{
               this.musicButton.frame = 1;
            }
            this.effectFlag=[this.atop1,this.abotom1,this.adress1,this.fbag1,this.abook1,this.aphone1,this.awatch1,this.aglass1,this.aear_ring1,this.ashoe1,this.aglass1,this.afhair1];
        },
changemusic:function()
         {
            if (!game.sound.mute) {
               this.musicButton.frame = 1;
               game.sound.mute = true;
            }else{
               this.musicButton.frame = 0;
               game.sound.mute = false;
            };
         },
        enterRoom1:function(){
     game.add.tween(this.nextbtn.scale).to({x:0,y:0}, 500, Phaser.Easing.Quadratic.Out, true).onComplete.add(function(){
        this.nextbtn.visible=false;
     },this);
     game.add.tween(this.dtext1.scale).to({x:0,y:0}, 500, Phaser.Easing.Quadratic.Out, true).onComplete.add(function(){
     game.add.tween(this.bus1).to({x:-250}, 500, Phaser.Easing.Quadratic.Out, true).onComplete.add(function(){
          this.bus1.visible=false;
          this.bus1.x=750;
          game.add.tween(this.shouse).to({y:-850}, 1000, Phaser.Easing.Quadratic.Out, true);
         game.add.tween(this.shutter2).to({y:1500}, 1000, Phaser.Easing.Quadratic.Out, true);
         game.add.tween(this.shutter1).to({y:-850}, 1000, Phaser.Easing.Quadratic.Out, true);//.onComplete.add(this.startPopUp,this);
         },this);
         },this);
   
   },
           updateyeblink1:function(){
          this.aeyeblink.play('aeyeblink',10,false);
        },
        changefun:function(evt){
         this.anai[evt.cnt-1]=1;
          if(evt.cnt==1){

            this.atop1.alpha=1;
            this.abotom1.alpha=1;
            this.adress1.alpha=0;
           
       
            Main.annaAlpha[2]=0;
            Main.annaAlpha[1]=1;
            Main.annaAlpha[0]=1;
            /* if(evt.id==1){
        this.atop1.x=371.45;
        this.atop1.y=295.8;
        }*/
         if(evt.id==2||evt.id==3||evt.id==1){
        this.atop1.x=366.9;
        this.atop1.y=302.25;
        }
            this.atop1.loadTexture('atop000'+evt.id);
            Main.annaFlag[0]=evt.id;
          }
          if(evt.cnt==2){
            this.atop1.alpha=1;
            this.abotom1.alpha=1;
            this.adress1.alpha=0;
            
            Main.annaAlpha[2]=0;
            Main.annaAlpha[1]=1;
            Main.annaAlpha[0]=1;
             
            this.abotom1.loadTexture('abotom000'+evt.id);
            Main.annaFlag[1]=evt.id;
          }

          if(evt.cnt==3){
            this.adress1.alpha=1;
            this.atop1.alpha=0;
            this.abotom1.alpha=0;
           
            
            Main.annaAlpha[2]=1;
            Main.annaAlpha[0]=0;
            Main.annaAlpha[1]=0;
             
            this.adress1.loadTexture('adress000'+evt.id);
            Main.annaFlag[2]=evt.id;
          }

          if(evt.cnt==4){
            
            this.bbag1.alpha=1;
            this.fbag1.alpha=1;
            Main.annaAlpha[3]=1;
            this.bbag1.loadTexture('bbag000'+evt.id);
            this.fbag1.loadTexture('fbag000'+evt.id);
            Main.annaFlag[3]=evt.id;
          }

           if(evt.cnt==5){
            
            this.abook1.alpha=1;
            this.aphone1.alpha=0;
            Main.annaAlpha[5]=0;
            Main.annaAlpha[4]=1;
            this.abook1.loadTexture('abook000'+evt.id);
            Main.annaFlag[4]=evt.id;
          }
          if(evt.cnt==6){
            
            this.abook1.alpha=0;
            this.aphone1.alpha=1;
            Main.annaAlpha[4]=0;
            Main.annaAlpha[5]=1;
            this.aphone1.loadTexture('aphone000'+evt.id);
            Main.annaFlag[5]=evt.id;
          }

          if(evt.cnt==7){
            
            this.awatch1.alpha=1;
            Main.annaAlpha[6]=1;
            this.awatch1.loadTexture('awatch000'+evt.id);
            Main.annaFlag[6]=evt.id;
          }

          if(evt.cnt==8){
            
            this.aglass1.alpha=1;
            Main.annaAlpha[7]=1;
            this.aglass1.loadTexture('aglass000'+evt.id);
            Main.annaFlag[7]=evt.id;
          }

          if(evt.cnt==9){

          	if(Main.annaFlag[10]==1||Main.annaFlag[10]==2){
            	this.aear_ring1.visible=false;
            	this.arear_ring1.visible=false;
            }
            if(Main.annaFlag[10]==3){
            	this.aear_ring1.visible=true;
            	this.arear_ring1.visible=true;
            }
            if(Main.annaFlag[10]==4){
            	this.aear_ring1.visible=false;
            	this.arear_ring1.visible=true;
            }
            if(Main.annaFlag[10]==5){
            	this.aear_ring1.visible=true;
            	this.arear_ring1.visible=true;
            }
            
            this.achain1.alpha=1;
            this.aear_ring1.alpha=1;
            this.arear_ring1.alpha=1;
            Main.annaAlpha[8]=1;
            this.aear_ring1.loadTexture('aear_ring000'+evt.id);
            this.arear_ring1.loadTexture('arear_ring000'+evt.id);
            this.achain1.loadTexture('achain000'+evt.id);
            Main.annaFlag[8]=evt.id;
            
          }

           if(evt.cnt==10){
            
            this.ashoe1.alpha=1;
            Main.annaAlpha[9]=1;
            this.ashoe1.loadTexture('ashoe000'+evt.id);
            Main.annaFlag[9]=evt.id;
          }

           if(evt.cnt==11){
            
            this.abhair1.alpha=1;
            this.afhair1.alpha=1;
            Main.annaAlpha[10]=1;
            this.abhair1.loadTexture('abhair000'+evt.id);
            this.afhair1.loadTexture('afhair000'+evt.id);
            Main.annaFlag[10]=evt.id;
            if(Main.annaFlag[10]==1||Main.annaFlag[10]==2){
            	this.aear_ring1.visible=false;
            	this.arear_ring1.visible=false;
            }
            if(Main.annaFlag[10]==3){
            	this.aear_ring1.visible=true;
            	this.arear_ring1.visible=true;
            }
            if(Main.annaFlag[10]==4){
            	this.aear_ring1.visible=false;
            	this.arear_ring1.visible=true;
            }
            if(Main.annaFlag[10]==5){
            	this.aear_ring1.visible=true;
            	this.arear_ring1.visible=true;
            }
          }

           //if(this.anai.indexOf(0)<0){
         game.add.tween(this.playbtn.scale).to({x:0.8,y:0.8},800,Phaser.Easing.Elastic.Out,true);
       //}

        effectssd = game.add.sprite(this.effectFlag[evt.cnt-1].worldPosition.x,this.effectFlag[evt.cnt-1].worldPosition.y,'effectssd');
        effectssd.anchor.setTo(0.5);
        effectssd.animations.add('effectssd');
        effectssd.animations.play('effectssd',20,false).onComplete.add(function(evt){
          evt.destroy();
        },this);
         

        },
        groupfun:function(evt){
        if(evt.id==1){
          this.cnt1=1;
          this.dicon1.inputEnabled=false;
          	this.dicon1.input.useHandCursor=false;
          this.fbtn2.visible=true;
          this.bcbtn2.visible=false;
          this.icongp1.visible=true;
          this.icongp2.visible=false;
          this.icongp3.visible=false;
          //this.icongp4.visible=false;
          this.icongp5.visible=false;
          this.icongp6.visible=false;
          this.icongp7.visible=false;
          this.icongp8.visible=false;
        }
        if(evt.id==2){
        	this.dicon1.inputEnabled=true;
          	this.dicon1.input.useHandCursor=true;
          this.fbtn2.visible=false;
          this.bcbtn2.visible=false;
          this.icongp1.visible=false;
          this.icongp2.visible=false;
          this.icongp3.visible=false;
         // this.icongp4.visible=false;
          this.icongp5.visible=false;
          this.icongp6.visible=false;
          this.icongp7.visible=false;
          this.icongp8.visible=true;
        }
        if(evt.id==3){
        	this.dicon1.inputEnabled=true;
          	this.dicon1.input.useHandCursor=true;
          this.fbtn2.visible=false;
          this.bcbtn2.visible=false;
          this.icongp1.visible=false;
          this.icongp2.visible=false;
          this.icongp3.visible=false;
         // this.icongp4.visible=false;
          this.icongp5.visible=false;
          this.icongp6.visible=false;
          this.icongp7.visible=true;
          this.icongp8.visible=false;
        }
        if(evt.id==4){
        	this.dicon1.inputEnabled=true;
          	this.dicon1.input.useHandCursor=true;
          this.fbtn2.visible=false;
          this.bcbtn2.visible=false;
          this.icongp1.visible=false;
          this.icongp2.visible=false;
          this.icongp3.visible=false;
         // this.icongp4.visible=false;
          this.icongp5.visible=false;
          this.icongp6.visible=true;
          this.icongp7.visible=false;
          this.icongp8.visible=false;
        }
        if(evt.id==5){
        	this.dicon1.inputEnabled=true;
          	this.dicon1.input.useHandCursor=true;
          this.fbtn2.visible=false;
          this.bcbtn2.visible=false;
          this.icongp1.visible=false;
          this.icongp2.visible=false;
          this.icongp3.visible=false;
         // this.icongp4.visible=true;
          this.icongp5.visible=false;
          this.icongp6.visible=false;
          this.icongp7.visible=false;
          this.icongp8.visible=false;
        }
        if(evt.id==6){
        	this.dicon1.inputEnabled=true;
          	this.dicon1.input.useHandCursor=true;
          this.fbtn2.visible=false;
          this.bcbtn2.visible=false;
          this.icongp1.visible=false;
          this.icongp2.visible=false;
          this.icongp3.visible=false;
          //this.icongp4.visible=false;
          this.icongp5.visible=true;
          this.icongp6.visible=false;
          this.icongp7.visible=false;
          this.icongp8.visible=false;
        }
        },
openLink:function()
{
   CreateLinksInGame("Disney-Princess-School-Fashion","game","logo");
},
moreLink:function()
{
   CreateLinksInGame("Disney-Princess-School-Fashion","game","more");
},
btnOver:function(items){
  items.scale.setTo(items.scale.x+0.05);
      effectVar = game.add.sprite(items.x-30,items.y-80,'effects'); 
   effectVar.anchor.setTo(0.5);
   effectVar.scale.setTo(2);
   effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
   effectVar.animations.play('glitter', 30, false);
   },
btnOut:function(items){
     items.scale.setTo(items.scale.x-0.05);

   },
removeGlitter:function(evt){
      evt.kill(); 
      },
      enterRoom:function(){
  game.add.tween(this.shouse).to({y:307.5}, 1000, Phaser.Easing.Quadratic.Out, true);
         game.add.tween(this.shutter2).to({y:596}, 1000, Phaser.Easing.Quadratic.Out, true);
         game.add.tween(this.shutter1).to({y:0}, 1000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function(){
          this.bus1.visible=true;
         game.add.tween(this.bus1).to({x:252}, 500, Phaser.Easing.Quadratic.Out, true).onComplete.add(function(){
         game.add.tween(this.dtext1.scale).to({x:1,y:1}, 500, Phaser.Easing.Quadratic.Out, true).onComplete.add(function(){
   if(Main.selectionFlag[0]==1&&Main.selectionFlag[1]==1&&Main.selectionFlag[2]==1&&Main.selectionFlag[3]==1){
    game.state.start('finascreen');
   }else{
   game.state.start('selection_screen');
   }   
         },this);
         },this);
         },this);
   
   },
}

Main.rapunzel_screen = function(){}

Main.rapunzel_screen.prototype = {
    create:function(){
      this.anai=[0,0,0,0,0,0,0,0,0,0,0];
         this.levelGroup = game.add.group();
         this.introbg = game.add.sprite(0,0,'ibg');
         this.levelGroup.add(this.introbg);


         this.cuboard1 = game.add.sprite(134,374.85,'cuboard');
         this.cuboard1.anchor.setTo(0.5);

         this.icongp2 = game.add.group();

         this.bar1 = game.add.sprite(134.5,238.85,'bar');
         this.bar1.anchor.setTo(0.5);
         this.icongp2.add(this.bar1);

         this.bar2 = game.add.sprite(134.5,376.85,'bar');
         this.bar2.anchor.setTo(0.5);
         this.icongp2.add(this.bar2);

        var hangerx=[67.7,129,193.7];
        var hangery=[240.25,240.25,240.25];

        var ticonx=[65.85,127,193];
        var ticony=[300,300,300];

        for(i=1;i<=3;i++){
          this['hanger'+i] = game.add.sprite(hangerx[i-1],hangery[i-1],'hanger');
          this['hanger'+i].anchor.setTo(0.5);
          this['ticon'+i] = game.add.sprite(ticonx[i-1],ticony[i-1],'rticon'+i);
          this['ticon'+i].anchor.setTo(0.5);
          this['ticon'+i].id=i;
          this['ticon'+i].cnt=1;
          this['ticon'+i].inputEnabled=true;
          this['ticon'+i].input.useHandCursor=true;
          this['ticon'+i].input.pixelPerfectClick=true;
          //this['ticon'+i].events.onInputOver.add(this.btnOver, this);
         // this['ticon'+i].events.onInputOut.add(this.btnOut, this);
          this['ticon'+i].events.onInputDown.add(this.changefun, this);
            this.icongp2.add(this['hanger'+i]);
            this.icongp2.add(this['ticon'+i]);
        }

        var hanger2x=[68.2,147.05,211.9];
        var hanger2y=[377.4,377.4,377.4];

        var biconx=[47,128,195];
        var bicony=[487,487,487];

        for(i=1;i<=3;i++){
          this['hanger'+i] = game.add.sprite(hanger2x[i-1],hanger2y[i-1],'hanger');
          this['hanger'+i].anchor.setTo(0.5);
          this['bicon'+i] = game.add.sprite(biconx[i-1],bicony[i-1],'rbotom000'+i);
          this['bicon'+i].anchor.setTo(0.5);
          this['bicon'+i].scale.setTo(0.6);
          this['bicon'+i].id=i;
          this['bicon'+i].cnt=2;
          this['bicon'+i].inputEnabled=true;
          this['bicon'+i].input.useHandCursor=true;
          this['bicon'+i].input.pixelPerfectClick=true;
          //this['bicon'+i].events.onInputOver.add(this.btnOver, this);
          //this['bicon'+i].events.onInputOut.add(this.btnOut, this);
          this['bicon'+i].events.onInputDown.add(this.changefun, this);
            this.icongp2.add(this['hanger'+i]);
            this.icongp2.add(this['bicon'+i]);
        }

         

      this.icongp2.visible = false;


         this.icongp1 = game.add.group();
         this.icongp3 = game.add.group();

         this.bar1 = game.add.sprite(134.5,238.85,'bar');
         this.bar1.anchor.setTo(0.5);
         this.icongp1.add(this.bar1);

         this.bar1 = game.add.sprite(134.5,238.85,'bar');
         this.bar1.anchor.setTo(0.5);
         this.icongp3.add(this.bar1);

        var hanger3x=[67.7,130.5,186.85,128.55];
        var hanger3y=[240.25,236.9,236.9,237.15];

        var adiconx=[77,141,197,141];
        var adicony=[359,359,355,361];

        for(i=1;i<=4;i++){
          this['hanger'+i] = game.add.sprite(hanger3x[i-1],hanger3y[i-1],'hanger');
          this['hanger'+i].anchor.setTo(0.5);
          this['adicon'+i] = game.add.sprite(adiconx[i-1],adicony[i-1],'rdicon'+i);
          this['adicon'+i].anchor.setTo(0.5);
          this['adicon'+i].id=i;
          this['adicon'+i].cnt=3;
          this['adicon'+i].inputEnabled=true;
          this['adicon'+i].input.useHandCursor=true;
          this['adicon'+i].input.pixelPerfectClick=true;
          //this['adicon'+i].events.onInputOver.add(this.btnOver, this);
         // this['adicon'+i].events.onInputOut.add(this.btnOut, this);
        this['adicon'+i].events.onInputDown.add(this.changefun, this);
        if(i<=3){
            this.icongp1.add(this['hanger'+i]);
            this.icongp1.add(this['adicon'+i]);
          }else{
             this.icongp3.add(this['hanger'+i]);
            this.icongp3.add(this['adicon'+i]);
          }
        }

        
       // this.icongp1.visible = false;
        this.icongp3.visible = false;

        /*this.icongp4 = game.add.group();

         this.shelf1 = game.add.sprite(134,335.85,'shelf');
         this.shelf1.anchor.setTo(0.5);
         this.icongp4.add(this.shelf1);

         this.shelf2 = game.add.sprite(134,472.85,'shelf');
         this.shelf2.anchor.setTo(0.5);
         this.icongp4.add(this.shelf2);

        var bbiconx=[131.9,131.3,136.3];
        var bbicony=[275,423,559.65];

        for(i=1;i<=3;i++){
          this['bbicon'+i] = game.add.sprite(bbiconx[i-1],bbicony[i-1],'rbag000'+i);
          this['bbicon'+i].anchor.setTo(0.5);
          this['bbicon'+i].scale.setTo(0.5);
          this['bbicon'+i].id=i;
          this['bbicon'+i].cnt=4;
          this['bbicon'+i].inputEnabled=true;
          this['bbicon'+i].input.useHandCursor=true;
          //this['bbicon'+i].events.onInputOver.add(this.btnOver, this);
         // this['bbicon'+i].events.onInputOut.add(this.btnOut, this);
        this['bbicon'+i].events.onInputDown.add(this.changefun, this);
            this.icongp4.add(this['bbicon'+i]);
        }

        this.icongp4.visible = false;*/

         this.icongp5 = game.add.group();

         this.shelf1 = game.add.sprite(134,335.85,'shelf');
         this.shelf1.anchor.setTo(0.5);
         this.icongp5.add(this.shelf1);

         this.shelf2 = game.add.sprite(134,472.85,'shelf');
         this.shelf2.anchor.setTo(0.5);
         this.icongp5.add(this.shelf2);

        var bkiconx=[69,146,136.3];
        var bkicony=[315,314,559.65];

        for(i=1;i<=2;i++){
          this['bkicon'+i] = game.add.sprite(bkiconx[i-1],bkicony[i-1],'rbook000'+i);
          this['bkicon'+i].anchor.setTo(0.5);
          this['bkicon'+i].scale.setTo(0.9);
          this['bkicon'+i].id=i;
          this['bkicon'+i].cnt=5;
          this['bkicon'+i].angle=47;
          this['bkicon'+i].inputEnabled=true;
          this['bkicon'+i].input.useHandCursor=true;
          //this['bkicon'+i].events.onInputOver.add(this.btnOver, this);
         // this['bkicon'+i].events.onInputOut.add(this.btnOut, this);
        this['bkicon'+i].events.onInputDown.add(this.changefun, this);
            this.icongp5.add(this['bkicon'+i]);
        }

        var phiconx=[212.75,65,136.3];
        var phicony=[312,447.25,559.65];

        for(i=1;i<=2;i++){
          this['phicon'+i] = game.add.sprite(phiconx[i-1],phicony[i-1],'rphone000'+i);
          this['phicon'+i].anchor.setTo(0.5);
          this['phicon'+i].angle=-25;
          this['phicon'+i].id=i;
          this['phicon'+i].cnt=6;
          this['phicon'+i].inputEnabled=true;
          this['phicon'+i].input.useHandCursor=true;
          //this['phicon'+i].events.onInputOver.add(this.btnOver, this);
         // this['phicon'+i].events.onInputOut.add(this.btnOut, this);
        this['phicon'+i].events.onInputDown.add(this.changefun, this);
            this.icongp5.add(this['phicon'+i]);
        }

        var wiconx=[127.5,188.45,136.3];
        var wicony=[458.15,458.15,559.65];

        for(i=1;i<=2;i++){
          this['wicon'+i] = game.add.sprite(wiconx[i-1],wicony[i-1],'rwatch000'+i);
          this['wicon'+i].anchor.setTo(0.5);
          this['wicon'+i].scale.setTo(1.3);
          // this['wicon'+i].angle=-32;
          this['wicon'+i].id=i;
          this['wicon'+i].cnt=7;
          this['wicon'+i].inputEnabled=true;
          this['wicon'+i].input.useHandCursor=true;
          //this['wicon'+i].events.onInputOver.add(this.btnOver, this);
         // this['wicon'+i].events.onInputOut.add(this.btnOut, this);
        this['wicon'+i].events.onInputDown.add(this.changefun, this);
            this.icongp5.add(this['wicon'+i]);
        }

        var giconx=[80.5,184.45];
        var gicony=[594.1,594.1];

        for(i=1;i<=2;i++){
          this['gicon'+i] = game.add.sprite(giconx[i-1],gicony[i-1],'rglass000'+i);
          this['gicon'+i].anchor.setTo(0.5);
          // this['gicon'+i].angle=-32;
          this['gicon'+i].id=i;
          this['gicon'+i].cnt=8;
          this['gicon'+i].inputEnabled=true;
          this['gicon'+i].input.useHandCursor=true;
          //this['gicon'+i].events.onInputOver.add(this.btnOver, this);
         // this['gicon'+i].events.onInputOut.add(this.btnOut, this);
        this['gicon'+i].events.onInputDown.add(this.changefun, this);
            this.icongp5.add(this['gicon'+i]);
        }

        this.icongp5.visible = false;

        this.icongp6 = game.add.group();

         this.shelf1 = game.add.sprite(134,335.85,'shelf');
         this.shelf1.anchor.setTo(0.5);
         this.icongp6.add(this.shelf1);

         this.shelf2 = game.add.sprite(134,472.85,'shelf');
         this.shelf2.anchor.setTo(0.5);
         this.icongp6.add(this.shelf2);

        var eiconx=[81,184,77.5,188.8,76,183.6];
        var eicony=[267,267,412,411,550,548];

        var eicon2x=[84,187,80,193,80,186];
        var eicon2y=[267,268,414,413,552.65,551];

        var ciconx=[86,188,82,195,82,188.7];
        var cicony=[309,305,453,453.65,594,594];

        var ndollx=[80.15,184.6,77.2,189.65,76.35,183.3];
        var ndolly=[269.2,269.2,414.95,414.95,554.3,554.3];

        for(i=1;i<=6;i++){
          this['ndoll'+i] = game.add.sprite(ndollx[i-1],ndolly[i-1],'ndoll');
          this['ndoll'+i].anchor.setTo(0.5);
          this['eicon'+i] = game.add.sprite(eiconx[i-1],eicony[i-1],'rlear_ring000'+i);
          this['eicon'+i].anchor.setTo(0.5);
          this['eicon'+i].scale.setTo(0.6);
          this['reicon'+i] = game.add.sprite(eicon2x[i-1],eicon2y[i-1],'rrear_ring000'+i);
          this['reicon'+i].anchor.setTo(0.5);
          this['reicon'+i].scale.setTo(0.6);
          this['cicon'+i] = game.add.sprite(ciconx[i-1],cicony[i-1],'rchain000'+i);
          this['cicon'+i].anchor.setTo(0.5);
          this['cicon'+i].scale.setTo(0.62);
          this['ndoll'+i].id=i;
          this['ndoll'+i].cnt=9;
          this['ndoll'+i].inputEnabled=true;
          this['ndoll'+i].input.useHandCursor=true;
          //this['ndoll'+i].events.onInputOver.add(this.btnOver, this);
         // this['ndoll'+i].events.onInputOut.add(this.btnOut, this);
        this['ndoll'+i].events.onInputDown.add(this.changefun, this);
            this.icongp6.add(this['ndoll'+i]);
            this.icongp6.add(this['eicon'+i]);
            this.icongp6.add(this['reicon'+i]);
            this.icongp6.add(this['cicon'+i]);
        }

       this.icongp6.visible = false;

         this.icongp7 = game.add.group();

         this.shelf1 = game.add.sprite(134,335.85,'shelf');
         this.shelf1.anchor.setTo(0.5);
         this.icongp7.add(this.shelf1);

         this.shelf2 = game.add.sprite(134,472.85,'shelf');
         this.shelf2.anchor.setTo(0.5);
         this.icongp7.add(this.shelf2);

        var asiconx=[64.95,137.95,207.95,86.95,162.95,91.95,167.95];
        var asicony=[271.35,271.65,271.65,459.45,455.6,592,592.05];

        for(i=1;i<=7;i++){
          this['asicon'+i] = game.add.sprite(asiconx[i-1],asicony[i-1],'rsicon'+i);
          this['asicon'+i].anchor.setTo(0.5);
          this['asicon'+i].id=i;
          this['asicon'+i].cnt=10;
          this['asicon'+i].inputEnabled=true;
          this['asicon'+i].input.useHandCursor=true;
          //this['asicon'+i].events.onInputOver.add(this.btnOver, this);
         // this['asicon'+i].events.onInputOut.add(this.btnOut, this);
        this['asicon'+i].events.onInputDown.add(this.changefun, this);
            this.icongp7.add(this['asicon'+i]);
          }
        this.icongp7.visible = false;

        this.icongp8 = game.add.group();

         this.bar1 = game.add.sprite(134.5,212.85,'bar');
         this.bar1.anchor.setTo(0.5);
         this.icongp8.add(this.bar1);

         this.bar2 = game.add.sprite(134.5,336.85,'bar');
         this.bar2.anchor.setTo(0.5);
         this.icongp8.add(this.bar2);

         this.bar3 = game.add.sprite(134.5,482.85,'bar');
         this.bar3.anchor.setTo(0.5);
         this.icongp8.add(this.bar3);

        
          var ahiconx=[131.9,68.75,184.25,74.75,187.75,91.95,167.95];
        var ahicony=[254.4,379.7,379.7,524.85,524.85,592,592.05];

        for(i=1;i<=5;i++){
          this['ahicon'+i] = game.add.sprite(ahiconx[i-1],ahicony[i-1],'rhicon'+i);
          this['ahicon'+i].anchor.setTo(0.5);
          this['ahicon'+i].id=i;
          this['ahicon'+i].cnt=11;
          this['ahicon'+i].inputEnabled=true;
          this['ahicon'+i].input.useHandCursor=true;
          //this['ahicon'+i].events.onInputOver.add(this.btnOver, this);
         // this['ahicon'+i].events.onInputOut.add(this.btnOut, this);
        this['ahicon'+i].events.onInputDown.add(this.changefun, this);
            this.icongp8.add(this['ahicon'+i]);
          }

         this.icongp8.visible = false;

          this.igroup1 = game.add.group();
          this.igroup2 = game.add.group();


        var diconx=[52.4,141.35,230,52.4,141.35,141.35/*230*/];
        var dicony=[146,111.65,140.35,146,111.65,111.65/*140.35*/];

        for(i=1;i<=6;i++){
          this['dicon'+i] = game.add.sprite(diconx[i-1],dicony[i-1],'dicon'+i);
          this['dicon'+i].anchor.setTo(0.5);
          this['dicon'+i].id=i;
          this['dicon'+i].cnt=1;
          if(i>1){
          this['dicon'+i].inputEnabled=true;
          this['dicon'+i].input.useHandCursor=true;
         }
         if(i==5){
          this['dicon'+i].visible=false;
          }
          this['dicon'+i].events.onInputOver.add(this.btnOver, this);
         this['dicon'+i].events.onInputOut.add(this.btnOut, this);
        this['dicon'+i].events.onInputDown.add(this.groupfun, this);
        if(i<=3){
            this.igroup1.add(this['dicon'+i]);
          }
          if(i>3){
            this.igroup2.add(this['dicon'+i]);
          }
          }
        this.igroup2.visible = false;

        this.fbtn1 = game.add.sprite(240.95,60,'fbtn');
         this.fbtn1.anchor.setTo(0.5);
         this.fbtn1.scale.setTo(0.8);
         this.fbtn1.inputEnabled = true;
         this.fbtn1.input.useHandCursor = true;
         this.fbtn1.events.onInputDown.add(function(){
         this.fbtn1.visible = false;
         this.bcbtn1.visible = true;
         this.igroup1.visible = false;
         this.igroup2.visible = true;

         },this);

         this.bcbtn1 = game.add.sprite(240.95,60,'fbtn');
         this.bcbtn1.anchor.setTo(0.5);
         this.bcbtn1.scale.setTo(0.8);
         this.bcbtn1.visible = false;
         this.bcbtn1.scale.x=-this.bcbtn1.scale.x;
         this.bcbtn1.inputEnabled = true;
         this.bcbtn1.input.useHandCursor = true;
         this.bcbtn1.events.onInputDown.add(function(){
         this.bcbtn1.visible = false;
         this.fbtn1.visible = true;
         this.igroup2.visible = false;
         this.igroup1.visible = true;

         },this);

         this.cnt1=1;

         this.fbtn2 = game.add.sprite(210.95,670,'fbtn');
         this.fbtn2.anchor.setTo(0.5);
         this.fbtn2.scale.setTo(0.8);
         this.fbtn2.inputEnabled = true;
         this.fbtn2.input.useHandCursor = true;
         this.fbtn2.events.onInputDown.add(function(){
          this.cnt1++;
          this['icongp'+this.cnt1].visible=true;
          this['icongp'+(this.cnt1-1)].visible=false;
            this.bcbtn2.visible=true;
          if(this.cnt1==3){
            this.fbtn2.visible=false;
          }
        

         },this);

         this.bcbtn2 = game.add.sprite(70,670,'fbtn');
         this.bcbtn2.anchor.setTo(0.5);
         this.bcbtn2.scale.setTo(0.8);
         this.bcbtn2.visible = false;
         this.bcbtn2.scale.x=-this.bcbtn2.scale.x;
         this.bcbtn2.inputEnabled = true;
         this.bcbtn2.input.useHandCursor = true;
         this.bcbtn2.events.onInputDown.add(function(){
          this.cnt1--;
          this['icongp'+this.cnt1].visible=true;
          this['icongp'+(this.cnt1+1)].visible=false;
            this.fbtn2.visible=true;
          if(this.cnt1==1){
            this.bcbtn2.visible=false;
          }

         },this);

        this.rgroup = game.add.group();


        /*this.rbag1 = game.add.sprite(363.3,284.8,'rbag000'+Main.rapunzelFlag[3]);
        this.rbag1.anchor.setTo(0.5);
        this.rbag1.alpha=Main.rapunzelAlpha[3];
        this.rgroup.add(this.rbag1);*/

       this.rbhair1 = game.add.sprite(372.3,185.8,'rbhair000'+Main.rapunzelFlag[10]);
        this.rbhair1.anchor.setTo(0.5);
        this.rgroup.add(this.rbhair1);

        this.rbody = game.add.sprite(341.5,481.45,'rbody');
        this.rbody.anchor.setTo(0.5);
        this.rgroup.add(this.rbody);

         this.inner1 = game.add.sprite(372,347,'inner1');
         this.inner1.anchor.setTo(0.5);
         this.inner1.alpha=Main.rapunzelAlpha[11];
        this.rgroup.add(this.inner1);

        this.inner2 = game.add.sprite(373,343.95,'inner2');
         this.inner2.anchor.setTo(0.5);
        this.inner2.alpha=Main.rapunzelAlpha[12];
        this.rgroup.add(this.inner2);

        this.rshoe1 = game.add.sprite(331.05,698.05,'rshoe000'+Main.rapunzelFlag[9]);
        this.rshoe1.anchor.setTo(0.5);
        this.rshoe1.alpha=Main.rapunzelAlpha[9];
        this.rgroup.add(this.rshoe1);

        

        this.rdress1 = game.add.sprite(384,398,'rdress000'+Main.rapunzelFlag[2]);
        this.rdress1.anchor.setTo(0.5);
        this.rdress1.alpha=Main.rapunzelAlpha[2];
        this.rgroup.add(this.rdress1);

        


        this.rbotom1 = game.add.sprite(352,530,'rbotom000'+Main.rapunzelFlag[1]);
        this.rbotom1.anchor.setTo(0.5);
        this.rbotom1.scale.setTo(0.98);
        this.rbotom1.alpha=Main.rapunzelAlpha[1];
        this.rgroup.add(this.rbotom1);

         this.rhand = game.add.sprite(376.15,418.3,'rhand');
        this.rhand.anchor.setTo(0.5);
        this.rgroup.add(this.rhand);

        this.rtop1 = game.add.sprite(369,312.35,'rtop000'+Main.rapunzelFlag[0]);
        this.rtop1.anchor.setTo(0.5);
        this.rtop1.alpha=Main.rapunzelAlpha[0];
        this.rgroup.add(this.rtop1);

        this.rchain1 = game.add.sprite(373,236.45,'rchain000'+Main.rapunzelFlag[8]);
        this.rchain1.anchor.setTo(0.5);
        this.rchain1.alpha=Main.rapunzelAlpha[8];
        this.rgroup.add(this.rchain1);



        /* this.rfbag1 = game.add.sprite(365.7,288.15,'rfbag000'+Main.rapunzelFlag[3]);
        this.rfbag1.anchor.setTo(0.5);
        this.rfbag1.alpha=Main.rapunzelAlpha[3];
        this.rgroup.add(this.rfbag1);*/

        
         this.rphone1 = game.add.sprite(315.85,480.95,'rphone000'+Main.rapunzelFlag[5]);
        this.rphone1.anchor.setTo(0.5);
        this.rphone1.scale.setTo(1.2);
        this.rphone1.alpha=Main.rapunzelAlpha[5];
        this.rgroup.add(this.rphone1);
        
         this.rwatch1 = game.add.sprite(297.3,427.3,'rwatch000'+Main.rapunzelFlag[6]);
        this.rwatch1.anchor.setTo(0.5);
        this.rwatch1.alpha=Main.rapunzelAlpha[6];
        this.rgroup.add(this.rwatch1);

        this.rfinger = game.add.sprite(300.5,476.7,'rfinger');
        this.rfinger.anchor.setTo(0.5);
        this.rgroup.add(this.rfinger);

        this.rbook1 = game.add.sprite(461.65,504.7,'rbook000'+Main.rapunzelFlag[4]);
        this.rbook1.anchor.setTo(0.5);
        this.rbook1.alpha=Main.rapunzelAlpha[4];
        this.rgroup.add(this.rbook1);

        this.rfinger2 = game.add.sprite(448.8,476.2,'rfinger2');
        this.rfinger2.anchor.setTo(0.5);
        this.rgroup.add(this.rfinger2);
        

        
          this.rhead = game.add.sprite(364.75,148,'rhead');
        this.rhead.anchor.setTo(0.5);
        this.rgroup.add(this.rhead);

         this.reyeblink = game.add.sprite(365.5,145,'reyeblink');
         this.reyeblink.anchor.setTo(0.5);       
         this.reyeblink.animations.add('reyeblink').onComplete.add(function(){
          this.reyeblink.frame = 0;
        },this);
         this.reyeblink.animations.play('reyeblink',10,false);
         game.time.events.loop(3000,this.updateyeblink2,this);        
         this.rgroup.add(this.reyeblink);
        

        

       
       


        this.rglass1 = game.add.sprite(366,153.25,'rglass000'+Main.rapunzelFlag[7]);
        this.rglass1.anchor.setTo(0.5);
        this.rglass1.alpha=Main.rapunzelAlpha[7];
        this.rgroup.add(this.rglass1);

        this.rfhair1 = game.add.sprite(369,185.8,'rfhair000'+Main.rapunzelFlag[10]);
        this.rfhair1.anchor.setTo(0.5);
        this.rgroup.add(this.rfhair1);

         this.rlear_ring1 = game.add.sprite(366,169.2,'rlear_ring000'+Main.rapunzelFlag[8]);
        this.rlear_ring1.anchor.setTo(0.5);
        this.rlear_ring1.alpha=Main.rapunzelAlpha[8];
        this.rgroup.add(this.rlear_ring1);

        this.rrear_ring1 = game.add.sprite(366,171.2,'rrear_ring000'+Main.rapunzelFlag[8]);
        this.rrear_ring1.anchor.setTo(0.5);
        this.rrear_ring1.alpha=Main.rapunzelAlpha[8];
        this.rgroup.add(this.rrear_ring1);

        /*

        

        this.atop1.x=362;
        this.atop1.y=300;

        this.atop2.x=366.9;
        this.atop2.y=302.25;


        this.rbotom1.x=350;
        this.rbotom1.y=537;

        this.rbotom2.x=377.45;
        this.rbotom2.y=442.75;

        this.rbotom3.x=377.45;
        this.rbotom3.y=442.75;
       


        */

         /*this.mcnt1=0;

       this.mcir = game.add.graphics(0,0);
        this.mcir.beginFill(0x666666,0.1);
        this.mcir.drawRect(0,0,800,600);
        this.mcir.inputEnabled=true;
        this.mcir.events.onInputDown.add(function(){
            this.mcnt1++;
          this['xcnt'+this.mcnt1]=game.input.activePointer.x;
          this['ycnt'+this.mcnt1]=game.input.activePointer.y;
        this['dummy'+this.mcnt1] = game.add.sprite(game.input.activePointer.x,game.input.activePointer.y,'rbotom0001');
        this['dummy'+this.mcnt1].anchor.setTo(0.5);
        // this['dummy'+this.mcnt1].scale.setTo(0.6);
       if(this.mcnt1>1){
        this['dummy'+(this.mcnt1-1)].visible=false;
       }
        console.log(this['xcnt'+this.mcnt1]+':'+this['ycnt'+this.mcnt1]);
        //console.log(this['ycnt'+this.mcnt1]);

        },this);*/

          this.rgroup.x=20;


         this.morebtn = game.add.sprite(57,752,'morebtn');
         this.morebtn.anchor.setTo(0.5);
         this.morebtn.scale.setTo(0.8); 
         this.morebtn.inputEnabled = true;
         this.morebtn.input.useHandCursor = true;
         this.morebtn.events.onInputUp.add(this.moreLink, this);
         this.morebtn.events.onInputOver.add(this.btnOver, this);
         this.morebtn.events.onInputOut.add(this.btnOut, this);
         //this.levelGroup.add(this.morebtn);
         this.playbtn = game.add.sprite(430,740,'donebtn');
         this.playbtn.anchor.setTo(0.5);
         this.playbtn.scale.setTo(0);
         this.playbtn.inputEnabled = true;
         this.playbtn.input.useHandCursor = true;
        this.playbtn.events.onInputUp.add(this.enterRoom, this);
         this.playbtn.events.onInputOver.add(this.btnOver, this);
         this.playbtn.events.onInputOut.add(this.btnOut, this);

         this.nextbtn = game.add.sprite(430,740,'nextbtn');
         this.nextbtn.anchor.setTo(0.5);
         this.nextbtn.scale.setTo(0);
         // this.nextbtn.inputEnabled = true;
         // this.nextbtn.input.useHandCursor = true;
         this.nextbtn.events.onInputUp.add(this.enterRoom1, this);
         this.nextbtn.events.onInputOver.add(this.btnOver, this);
         this.nextbtn.events.onInputOut.add(this.btnOut, this);

        if (Main.shutterOn[0]) {
         this.shutter1 = game.add.sprite(0,0,'sbg1');
          this.shutter2 = game.add.sprite(252,596,'sbg2');
         this.shutter2.anchor.setTo(0.5);
         this.shouse = game.add.sprite(252,307.5,'shouse');
         this.shouse.anchor.setTo(0.5);
         this.bus1 = game.add.sprite(252,444,'bus');
         this.bus1.anchor.setTo(0.5);
          this.dtext1 = game.add.sprite(247.5,430,'dtext');
         this.dtext1.anchor.setTo(0.5);
         game.world.bringToTop(this.nextbtn);
          game.add.tween(this.nextbtn.scale).to({x:1,y:1}, 500, Phaser.Easing.Quadratic.Out, true).onComplete.add(function(){
           this.nextbtn.inputEnabled = true;
         this.nextbtn.input.useHandCursor = true;
         },this);
        }
        
         this.lightCount=0;
        
         this.logoVar = game.add.sprite(5, 5, 'logo');
         this.logoVar.scale.setTo(0.8);
         this.logoVar.inputEnabled = true
         this.logoVar.input.useHandCursor = true;
         this.logoVar.events.onInputUp.add(this.openLink, this);
         
         this.musicButton = game.add.sprite(427,5,"soundicon");
         this.musicButton.scale.setTo(0.9);
         this.musicButton.inputEnabled = true
         this.musicButton.input.useHandCursor = true;
         this.musicButton.events.onInputUp.add(this.changemusic, this);
         if (!game.sound.mute) {
               this.musicButton.frame = 0;
            }else{
               this.musicButton.frame = 1;
            }
            this.effectFlag=[this.rtop1,this.rbotom1,this.rdress1,this.rbag1,this.rbook1,this.rphone1,this.rwatch1,this.rglass1,this.rrear_ring1,this.rshoe1,this.rglass1,this.rfhair1];
        },
changemusic:function()
         {
            if (!game.sound.mute) {
               this.musicButton.frame = 1;
               game.sound.mute = true;
            }else{
               this.musicButton.frame = 0;
               game.sound.mute = false;
            };
         },
        enterRoom1:function(){
     game.add.tween(this.nextbtn.scale).to({x:0,y:0}, 500, Phaser.Easing.Quadratic.Out, true).onComplete.add(function(){
        this.nextbtn.visible=false;
     },this);
     game.add.tween(this.dtext1.scale).to({x:0,y:0}, 500, Phaser.Easing.Quadratic.Out, true).onComplete.add(function(){
     game.add.tween(this.bus1).to({x:-250}, 500, Phaser.Easing.Quadratic.Out, true).onComplete.add(function(){
          this.bus1.visible=false;
          this.bus1.x=750;
          game.add.tween(this.shouse).to({y:-850}, 1000, Phaser.Easing.Quadratic.Out, true);
         game.add.tween(this.shutter2).to({y:1500}, 1000, Phaser.Easing.Quadratic.Out, true);
         game.add.tween(this.shutter1).to({y:-850}, 1000, Phaser.Easing.Quadratic.Out, true);//.onComplete.add(this.startPopUp,this);
         },this);
         },this);
   
   },
           updateyeblink2:function(){
          this.reyeblink.play('reyeblink',10,false);
        },
        changefun:function(evt){
         this.anai[evt.cnt-1]=1;
          if(evt.cnt==1){
            this.rbotom1.alpha=1;
            this.rtop1.alpha=1;
            this.rdress1.alpha=0;
           
            // Main.rapunzelAlpha[11]=0;
            Main.rapunzelAlpha[2]=0;
            Main.rapunzelAlpha[0]=1;
            Main.rapunzelAlpha[1]=1;
            
            this.rtop1.loadTexture('rtop000'+evt.id);
            Main.rapunzelFlag[0]=evt.id;

             if(Main.rapunzelFlag[0]==3||Main.rapunzelFlag[0]==1){
        	this.rtop1.x=369;
        	this.rtop1.y=315.35;
        }else{
        this.rtop1.x=371;
        	this.rtop1.y=315.35;	
        }
          }
          if(evt.cnt==2){
            this.rbotom1.alpha=1;
            this.rtop1.alpha=1;
            this.rdress1.alpha=0;
           
            Main.rapunzelAlpha[2]=0;
            Main.rapunzelAlpha[1]=1;
            Main.rapunzelAlpha[0]=1;
             
            this.rbotom1.loadTexture('rbotom000'+evt.id);
            Main.rapunzelFlag[1]=evt.id;
          }

          if(evt.cnt==3){
            this.rdress1.alpha=1;
            this.rtop1.alpha=0;
            this.rbotom1.alpha=0;
            // this.inner1.alpha=0;
            // this.inner2.alpha=0;
            // Main.rapunzelAlpha[11]=0;
            // Main.rapunzelAlpha[12]=0;
            
            Main.rapunzelAlpha[2]=1;
            Main.rapunzelAlpha[0]=0;
            Main.rapunzelAlpha[1]=0;
             
            this.rdress1.loadTexture('rdress000'+evt.id);
            Main.rapunzelFlag[2]=evt.id;
          }

          if(evt.cnt==4){
            
            this.rbag1.alpha=1;
            this.rfbag1.alpha=1;
            Main.rapunzelAlpha[3]=1;
            this.rbag1.loadTexture('rbag000'+evt.id);
            this.rfbag1.loadTexture('rfbag000'+evt.id);
            Main.rapunzelFlag[3]=evt.id;
          }

           if(evt.cnt==5){
            
            this.rphone1.alpha=0;
            this.rbook1.alpha=1;
            Main.rapunzelAlpha[5]=0;
            Main.rapunzelAlpha[4]=1;
            this.rbook1.loadTexture('rbook000'+evt.id);
            Main.rapunzelFlag[4]=evt.id;
          }
          if(evt.cnt==6){
            
            this.rbook1.alpha=0;
            this.rphone1.alpha=1;
            Main.rapunzelAlpha[4]=0;
            Main.rapunzelAlpha[5]=1;
            this.rphone1.loadTexture('rphone000'+evt.id);
            Main.rapunzelFlag[5]=evt.id;
          }

          if(evt.cnt==7){
            
            this.rwatch1.alpha=1;
            Main.rapunzelAlpha[6]=1;
            this.rwatch1.loadTexture('rwatch000'+evt.id);
            Main.rapunzelFlag[6]=evt.id;
          }

          if(evt.cnt==8){
            
            this.rglass1.alpha=1;
            Main.rapunzelAlpha[7]=1;
            this.rglass1.loadTexture('rglass000'+evt.id);
            Main.rapunzelFlag[7]=evt.id;
          }

          if(evt.cnt==9){

            
            
            this.rchain1.alpha=1;
            this.rlear_ring1.alpha=1;
            this.rrear_ring1.alpha=1;
            Main.rapunzelAlpha[8]=1;
            this.rlear_ring1.loadTexture('rlear_ring000'+evt.id);
            this.rrear_ring1.loadTexture('rrear_ring000'+evt.id);
            this.rchain1.loadTexture('rchain000'+evt.id);
            Main.rapunzelFlag[8]=evt.id;

              if(Main.rapunzelFlag[10]==1){
        this.rrear_ring1.visible=false;
        this.rlear_ring1.visible=true;
  
         }
         if(Main.rapunzelFlag[10]==3||Main.rapunzelFlag[10]==2){
        this.rrear_ring1.visible=true;
        this.rlear_ring1.visible=true;
  
         }
         if(Main.rapunzelFlag[10]==4||Main.rapunzelFlag[10]==5){
        this.rrear_ring1.visible=true;
        this.rlear_ring1.visible=false;
  
         }


          }

           if(evt.cnt==10){
            
            this.rshoe1.alpha=1;
            Main.rapunzelAlpha[9]=1;
            this.rshoe1.loadTexture('rshoe000'+evt.id);
            Main.rapunzelFlag[9]=evt.id;
          }

           if(evt.cnt==11){


            
            this.rbhair1.alpha=1;
            this.rfhair1.alpha=1;
            Main.rapunzelAlpha[10]=1;
            this.rbhair1.loadTexture('rbhair000'+evt.id);
            this.rfhair1.loadTexture('rfhair000'+evt.id);
            Main.rapunzelFlag[10]=evt.id;
             if(Main.rapunzelFlag[10]==1){
        this.rrear_ring1.visible=false;
        this.rlear_ring1.visible=true;
  
         }
         if(Main.rapunzelFlag[10]==3||Main.rapunzelFlag[10]==2){
        this.rrear_ring1.visible=true;
        this.rlear_ring1.visible=true;
  
         }
         if(Main.rapunzelFlag[10]==4||Main.rapunzelFlag[10]==5){
        this.rrear_ring1.visible=true;
        this.rlear_ring1.visible=false;
  
         }
          }

           //if(this.anai.indexOf(0)<0){
         game.add.tween(this.playbtn.scale).to({x:0.8,y:0.8},800,Phaser.Easing.Elastic.Out,true);
       //}

        effectssd = game.add.sprite(this.effectFlag[evt.cnt-1].worldPosition.x,this.effectFlag[evt.cnt-1].worldPosition.y,'effectssd');
        effectssd.anchor.setTo(0.5);
        effectssd.animations.add('effectssd');
        effectssd.animations.play('effectssd',20,false).onComplete.add(function(evt){
          evt.destroy();
        },this);
         

        },
        groupfun:function(evt){
        if(evt.id==1){
          this.cnt1=1;
          this.dicon1.inputEnabled=false;
          this.dicon1.input.useHandCursor=false;
          this.fbtn2.visible=true;
          this.bcbtn2.visible=false;
          this.icongp1.visible=true;
          this.icongp2.visible=false;
          this.icongp3.visible=false;
          //this.icongp4.visible=false;
          this.icongp5.visible=false;
          this.icongp6.visible=false;
          this.icongp7.visible=false;
          this.icongp8.visible=false;
        }
        if(evt.id==2){
        	this.dicon1.inputEnabled=true;
          	this.dicon1.input.useHandCursor=true;
          this.fbtn2.visible=false;
          this.bcbtn2.visible=false;
          this.icongp1.visible=false;
          this.icongp2.visible=false;
          this.icongp3.visible=false;
          //this.icongp4.visible=false;
          this.icongp5.visible=false;
          this.icongp6.visible=false;
          this.icongp7.visible=false;
          this.icongp8.visible=true;
        }
        if(evt.id==3){
        	this.dicon1.inputEnabled=true;
          	this.dicon1.input.useHandCursor=true;
          this.fbtn2.visible=false;
          this.bcbtn2.visible=false;
          this.icongp1.visible=false;
          this.icongp2.visible=false;
          this.icongp3.visible=false;
         // this.icongp4.visible=false;
          this.icongp5.visible=false;
          this.icongp6.visible=false;
          this.icongp7.visible=true;
          this.icongp8.visible=false;
        }
        if(evt.id==4){
        	this.dicon1.inputEnabled=true;
          	this.dicon1.input.useHandCursor=true;
          this.fbtn2.visible=false;
          this.bcbtn2.visible=false;
          this.icongp1.visible=false;
          this.icongp2.visible=false;
          this.icongp3.visible=false;
         // this.icongp4.visible=false;
          this.icongp5.visible=false;
          this.icongp6.visible=true;
          this.icongp7.visible=false;
          this.icongp8.visible=false;
        }
        if(evt.id==5){
        	this.dicon1.inputEnabled=true;
          	this.dicon1.input.useHandCursor=true;
          this.fbtn2.visible=false;
          this.bcbtn2.visible=false;
          this.icongp1.visible=false;
          this.icongp2.visible=false;
          this.icongp3.visible=false;
          //this.icongp4.visible=true;
          this.icongp5.visible=false;
          this.icongp6.visible=false;
          this.icongp7.visible=false;
          this.icongp8.visible=false;
        }
        if(evt.id==6){
        	this.dicon1.inputEnabled=true;
          	this.dicon1.input.useHandCursor=true;
          this.fbtn2.visible=false;
          this.bcbtn2.visible=false;
          this.icongp1.visible=false;
          this.icongp2.visible=false;
          this.icongp3.visible=false;
          //this.icongp4.visible=false;
          this.icongp5.visible=true;
          this.icongp6.visible=false;
          this.icongp7.visible=false;
          this.icongp8.visible=false;
        }
        },
openLink:function()
{
   CreateLinksInGame("Disney-Princess-School-Fashion","game","logo");
},
moreLink:function()
{
   CreateLinksInGame("Disney-Princess-School-Fashion","game","more");
},
btnOver:function(items){
  items.scale.setTo(items.scale.x+0.05);
      effectVar = game.add.sprite(items.x-30,items.y-80,'effects'); 
   effectVar.anchor.setTo(0.5);
   effectVar.scale.setTo(2);
   effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
   effectVar.animations.play('glitter', 30, false);
   },
btnOut:function(items){
     items.scale.setTo(items.scale.x-0.05);

   },
removeGlitter:function(evt){
      evt.kill(); 
      },
       enterRoom:function(){
   game.add.tween(this.shouse).to({y:307.5}, 1000, Phaser.Easing.Quadratic.Out, true);
         game.add.tween(this.shutter2).to({y:596}, 1000, Phaser.Easing.Quadratic.Out, true);
         game.add.tween(this.shutter1).to({y:0}, 1000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function(){
          this.bus1.visible=true;
         game.add.tween(this.bus1).to({x:252}, 500, Phaser.Easing.Quadratic.Out, true).onComplete.add(function(){
         game.add.tween(this.dtext1.scale).to({x:1,y:1}, 500, Phaser.Easing.Quadratic.Out, true).onComplete.add(function(){
   if(Main.selectionFlag[0]==1&&Main.selectionFlag[1]==1&&Main.selectionFlag[2]==1&&Main.selectionFlag[3]==1){
    game.state.start('finascreen');
   }else{
   game.state.start('selection_screen');
   }   
         },this);
         },this);
         },this);
   
   },
}

Main.ariel_screen = function(){}

Main.ariel_screen.prototype = {
    create:function(){
      this.anai=[0,0,0,0,0,0,0,0,0,0,0];
         this.levelGroup = game.add.group();
         this.introbg = game.add.sprite(0,0,'ibg');
         this.levelGroup.add(this.introbg);


         this.cuboard1 = game.add.sprite(134,374.85,'cuboard');
         this.cuboard1.anchor.setTo(0.5);

         this.icongp2 = game.add.group();

         this.bar1 = game.add.sprite(134.5,238.85,'bar');
         this.bar1.anchor.setTo(0.5);
         this.icongp2.add(this.bar1);

         this.bar2 = game.add.sprite(134.5,376.85,'bar');
         this.bar2.anchor.setTo(0.5);
         this.icongp2.add(this.bar2);

        var hangerx=[67.7,129,193.7];
        var hangery=[240.25,240.25,240.25];

        var ticonx=[65.85,127,193];
        var ticony=[292,290,291];

        for(i=1;i<=3;i++){
          this['hanger'+i] = game.add.sprite(hangerx[i-1],hangery[i-1],'hanger');
          this['hanger'+i].anchor.setTo(0.5);
          this['ticon'+i] = game.add.sprite(ticonx[i-1],ticony[i-1],'articon'+i);
          this['ticon'+i].anchor.setTo(0.5);
          this['ticon'+i].id=i;
          this['ticon'+i].cnt=1;
          this['ticon'+i].inputEnabled=true;
          this['ticon'+i].input.useHandCursor=true;
          this['ticon'+i].input.pixelPerfectClick=true;
          //this['ticon'+i].events.onInputOver.add(this.btnOver, this);
         // this['ticon'+i].events.onInputOut.add(this.btnOut, this);
        this['ticon'+i].events.onInputDown.add(this.changefun, this);
            this.icongp2.add(this['hanger'+i]);
            this.icongp2.add(this['ticon'+i]);
        }

        var hanger2x=[68.2,147.05,211.9];
        var hanger2y=[377.4,377.4,377.4];

        var biconx=[57,134,204];
        var bicony=[438,435,438];

        for(i=1;i<=3;i++){
          this['hanger'+i] = game.add.sprite(hanger2x[i-1],hanger2y[i-1],'hanger');
          this['hanger'+i].anchor.setTo(0.5);
          this['bicon'+i] = game.add.sprite(biconx[i-1],bicony[i-1],'arbotom000'+i);
          this['bicon'+i].anchor.setTo(0.5);
          this['bicon'+i].scale.setTo(0.6);
          this['bicon'+i].id=i;
          this['bicon'+i].cnt=2;
          this['bicon'+i].inputEnabled=true;
          this['bicon'+i].input.useHandCursor=true;
          this['bicon'+i].input.pixelPerfectClick=true;
          //this['bicon'+i].events.onInputOver.add(this.btnOver, this);
         // this['bicon'+i].events.onInputOut.add(this.btnOut, this);
        this['bicon'+i].events.onInputDown.add(this.changefun, this);
            this.icongp2.add(this['hanger'+i]);
            this.icongp2.add(this['bicon'+i]);
        }

         

      this.icongp2.visible = false;


         this.icongp1 = game.add.group();
         this.icongp3 = game.add.group();

         this.bar1 = game.add.sprite(134.5,238.85,'bar');
         this.bar1.anchor.setTo(0.5);
         this.icongp1.add(this.bar1);

         this.bar1 = game.add.sprite(134.5,238.85,'bar');
         this.bar1.anchor.setTo(0.5);
         this.icongp3.add(this.bar1);

        var hanger3x=[67.7,130.5,186.85,128.55];
        var hanger3y=[240.25,236.9,236.9,237.15];

        var adiconx=[75,139,195,138];
        var adicony=[335,331,330,358];

        for(i=1;i<=4;i++){
          this['hanger'+i] = game.add.sprite(hanger3x[i-1],hanger3y[i-1],'hanger');
          this['hanger'+i].anchor.setTo(0.5);
          this['adicon'+i] = game.add.sprite(adiconx[i-1],adicony[i-1],'ardicon'+i);
          this['adicon'+i].anchor.setTo(0.5);
          this['adicon'+i].id=i;
          this['adicon'+i].cnt=3;
          this['adicon'+i].inputEnabled=true;
          this['adicon'+i].input.useHandCursor=true;
          this['adicon'+i].input.pixelPerfectClick=true;
          //this['adicon'+i].events.onInputOver.add(this.btnOver, this);
         // this['adicon'+i].events.onInputOut.add(this.btnOut, this);
         this['adicon'+i].events.onInputDown.add(this.changefun, this);
        if(i<=3){
            this.icongp1.add(this['hanger'+i]);
            this.icongp1.add(this['adicon'+i]);
          }else{
             this.icongp3.add(this['hanger'+i]);
            this.icongp3.add(this['adicon'+i]);
          }
        }

        
        //this.icongp1.visible = false;
        this.icongp3.visible = false;

        /*this.icongp4 = game.add.group();

         this.shelf1 = game.add.sprite(134,335.85,'shelf');
         this.shelf1.anchor.setTo(0.5);
         this.icongp4.add(this.shelf1);

         this.shelf2 = game.add.sprite(134,472.85,'shelf');
         this.shelf2.anchor.setTo(0.5);
         this.icongp4.add(this.shelf2);

        var bbiconx=[131.9,131.3,136.3];
        var bbicony=[275,423,559.65];

        for(i=1;i<=3;i++){
          this['bbicon'+i] = game.add.sprite(bbiconx[i-1],bbicony[i-1],'arbag000'+i);
          this['bbicon'+i].anchor.setTo(0.5);
          this['bbicon'+i].scale.setTo(0.5);
          this['bbicon'+i].id=i;
          this['bbicon'+i].cnt=4;
          this['bbicon'+i].inputEnabled=true;
          this['bbicon'+i].input.useHandCursor=true;
          //this['bbicon'+i].events.onInputOver.add(this.btnOver, this);
         // this['bbicon'+i].events.onInputOut.add(this.btnOut, this);
        this['bbicon'+i].events.onInputDown.add(this.changefun, this);
            this.icongp4.add(this['bbicon'+i]);
        }

        this.icongp4.visible = false;*/

         this.icongp5 = game.add.group();

         this.shelf1 = game.add.sprite(134,335.85,'shelf');
         this.shelf1.anchor.setTo(0.5);
         this.icongp5.add(this.shelf1);

         this.shelf2 = game.add.sprite(134,472.85,'shelf');
         this.shelf2.anchor.setTo(0.5);
         this.icongp5.add(this.shelf2);

        var bkiconx=[66,130,136.3];
        var bkicony=[311,309,559.65];

        for(i=1;i<=2;i++){
          this['bkicon'+i] = game.add.sprite(bkiconx[i-1],bkicony[i-1],'arbook000'+i);
          this['bkicon'+i].anchor.setTo(0.5);
          this['bkicon'+i].scale.setTo(0.9);
          this['bkicon'+i].id=i;
          this['bkicon'+i].cnt=5;
          this['bkicon'+i].angle=0;
          this['bkicon'+i].inputEnabled=true;
          this['bkicon'+i].input.useHandCursor=true;
          //this['bkicon'+i].events.onInputOver.add(this.btnOver, this);
         // this['bkicon'+i].events.onInputOut.add(this.btnOut, this);
        this['bkicon'+i].events.onInputDown.add(this.changefun, this);
            this.icongp5.add(this['bkicon'+i]);
        }

        var phiconx=[212.75,65,136.3];
        var phicony=[312,447.25,559.65];

        for(i=1;i<=2;i++){
          this['phicon'+i] = game.add.sprite(phiconx[i-1],phicony[i-1],'arphone000'+i);
          this['phicon'+i].anchor.setTo(0.5);
          this['phicon'+i].angle=-35;
          this['phicon'+i].id=i;
          this['phicon'+i].cnt=6;
          this['phicon'+i].inputEnabled=true;
          this['phicon'+i].input.useHandCursor=true;
          //this['phicon'+i].events.onInputOver.add(this.btnOver, this);
         // this['phicon'+i].events.onInputOut.add(this.btnOut, this);
        this['phicon'+i].events.onInputDown.add(this.changefun, this);
            this.icongp5.add(this['phicon'+i]);
        }

        var wiconx=[127.5,188.45,136.3];
        var wicony=[458.15,458.15,559.65];

        for(i=1;i<=2;i++){
          this['wicon'+i] = game.add.sprite(wiconx[i-1],wicony[i-1],'arwatch000'+i);
          this['wicon'+i].anchor.setTo(0.5);
          this['wicon'+i].scale.setTo(1.3);
          // this['wicon'+i].angle=-32;
          this['wicon'+i].id=i;
          this['wicon'+i].cnt=7;
          this['wicon'+i].inputEnabled=true;
          this['wicon'+i].input.useHandCursor=true;
          //this['wicon'+i].events.onInputOver.add(this.btnOver, this);
         // this['wicon'+i].events.onInputOut.add(this.btnOut, this);
        this['wicon'+i].events.onInputDown.add(this.changefun, this);
            this.icongp5.add(this['wicon'+i]);
        }

        var giconx=[80.5,184.45];
        var gicony=[594.1,594.1];

        for(i=1;i<=2;i++){
          this['gicon'+i] = game.add.sprite(giconx[i-1],gicony[i-1],'arglass000'+i);
          this['gicon'+i].anchor.setTo(0.5);
          // this['gicon'+i].angle=-32;
          this['gicon'+i].id=i;
          this['gicon'+i].cnt=8;
          this['gicon'+i].inputEnabled=true;
          this['gicon'+i].input.useHandCursor=true;
          //this['gicon'+i].events.onInputOver.add(this.btnOver, this);
         // this['gicon'+i].events.onInputOut.add(this.btnOut, this);
        this['gicon'+i].events.onInputDown.add(this.changefun, this);
            this.icongp5.add(this['gicon'+i]);
        }

        this.icongp5.visible = false;

        this.icongp6 = game.add.group();

         this.shelf1 = game.add.sprite(134,335.85,'shelf');
         this.shelf1.anchor.setTo(0.5);
         this.icongp6.add(this.shelf1);

         this.shelf2 = game.add.sprite(134,472.85,'shelf');
         this.shelf2.anchor.setTo(0.5);
         this.icongp6.add(this.shelf2);

        var eiconx=[83,187,81,193,78.8,186.5];
        var eicony=[262,265,411,412,550,548];

        var eicon2x=[81,184.5,78.5,188.45,77,184];
        var eicon2y=[262,265,413,412,550,548];

        var ciconx=[82,186,79,191,77.3,184];
        var cicony=[302,303,448,450,588,590];

        var ndollx=[80.15,184.6,77.2,189.65,76.35,183.3];
        var ndolly=[269.2,269.2,414.95,414.95,554.3,554.3];

        for(i=1;i<=6;i++){
          this['ndoll'+i] = game.add.sprite(ndollx[i-1],ndolly[i-1],'ndoll');
          this['ndoll'+i].anchor.setTo(0.5);
          this['eicon'+i] = game.add.sprite(eiconx[i-1],eicony[i-1],'alrear_ring000'+i);
          this['eicon'+i].anchor.setTo(0.5);
          this['eicon'+i].scale.setTo(0.56);
          this['reicon'+i] = game.add.sprite(eicon2x[i-1],eicon2y[i-1],'arrear_ring000'+i);
          this['reicon'+i].anchor.setTo(0.5);
          this['reicon'+i].scale.setTo(0.56);
          this['cicon'+i] = game.add.sprite(ciconx[i-1],cicony[i-1],'archain000'+i);
          this['cicon'+i].anchor.setTo(0.5);
          this['cicon'+i].scale.setTo(0.62);
          this['ndoll'+i].id=i;
          this['ndoll'+i].cnt=9;
          this['ndoll'+i].inputEnabled=true;
          this['ndoll'+i].input.useHandCursor=true;
          //this['ndoll'+i].events.onInputOver.add(this.btnOver, this);
         // this['ndoll'+i].events.onInputOut.add(this.btnOut, this);
        this['ndoll'+i].events.onInputDown.add(this.changefun, this);
            this.icongp6.add(this['ndoll'+i]);
            this.icongp6.add(this['eicon'+i]);
            this.icongp6.add(this['reicon'+i]);
            this.icongp6.add(this['cicon'+i]);
        }

        this.icongp6.visible = false;

         this.icongp7 = game.add.group();

         this.shelf1 = game.add.sprite(134,335.85,'shelf');
         this.shelf1.anchor.setTo(0.5);
         this.icongp7.add(this.shelf1);

         this.shelf2 = game.add.sprite(134,472.85,'shelf');
         this.shelf2.anchor.setTo(0.5);
         this.icongp7.add(this.shelf2);

        var asiconx=[64.95,137.95,207.95,86.95,162.95,91.95,167.95];
        var asicony=[271.35,271.65,271.65,459.45,455.6,592,592.05];

        for(i=1;i<=7;i++){
          this['asicon'+i] = game.add.sprite(asiconx[i-1],asicony[i-1],'arsicon'+i);
          this['asicon'+i].anchor.setTo(0.5);
          this['asicon'+i].id=i;
          this['asicon'+i].cnt=10;
          this['asicon'+i].inputEnabled=true;
          this['asicon'+i].input.useHandCursor=true;
          //this['asicon'+i].events.onInputOver.add(this.btnOver, this);
         // this['asicon'+i].events.onInputOut.add(this.btnOut, this);
        this['asicon'+i].events.onInputDown.add(this.changefun, this);
            this.icongp7.add(this['asicon'+i]);
          }
        this.icongp7.visible = false;

        this.icongp8 = game.add.group();

         this.bar1 = game.add.sprite(134.5,212.85,'bar');
         this.bar1.anchor.setTo(0.5);
         this.icongp8.add(this.bar1);

         this.bar2 = game.add.sprite(134.5,336.85,'bar');
         this.bar2.anchor.setTo(0.5);
         this.icongp8.add(this.bar2);

         this.bar3 = game.add.sprite(134.5,482.85,'bar');
         this.bar3.anchor.setTo(0.5);
         this.icongp8.add(this.bar3);

        
          var ahiconx=[131.9,68.75,184.25,74.75,187.75,91.95,167.95];
        var ahicony=[254.4,379.7,379.7,524.85,524.85,592,592.05];

        for(i=1;i<=5;i++){
          this['ahicon'+i] = game.add.sprite(ahiconx[i-1],ahicony[i-1],'arhicon'+i);
          this['ahicon'+i].anchor.setTo(0.5);
          this['ahicon'+i].id=i;
          this['ahicon'+i].cnt=11;
          this['ahicon'+i].inputEnabled=true;
          this['ahicon'+i].input.useHandCursor=true;
          //this['ahicon'+i].events.onInputOver.add(this.btnOver, this);
         // this['ahicon'+i].events.onInputOut.add(this.btnOut, this);
          this['ahicon'+i].events.onInputDown.add(this.changefun, this);
            this.icongp8.add(this['ahicon'+i]);
          }

         this.icongp8.visible = false;

          this.igroup1 = game.add.group();
          this.igroup2 = game.add.group();


        var diconx=[52.4,141.35,230,52.4,141.35,141.35/*230*/];
        var dicony=[146,111.65,140.35,146,111.65,111.65/*140.35*/];

        for(i=1;i<=6;i++){
          this['dicon'+i] = game.add.sprite(diconx[i-1],dicony[i-1],'dicon'+i);
          this['dicon'+i].anchor.setTo(0.5);
          this['dicon'+i].id=i;
          this['dicon'+i].cnt=1;
          if(i>1){
          this['dicon'+i].inputEnabled=true;
          this['dicon'+i].input.useHandCursor=true;
           }
           if(i==5){
          this['dicon'+i].visible=false;
           }
          this['dicon'+i].events.onInputOver.add(this.btnOver, this);
         this['dicon'+i].events.onInputOut.add(this.btnOut, this);
        this['dicon'+i].events.onInputDown.add(this.groupfun, this);
        if(i<=3){
            this.igroup1.add(this['dicon'+i]);
          }
          if(i>3){
            this.igroup2.add(this['dicon'+i]);
          }
          }
        this.igroup2.visible = false;

        this.fbtn1 = game.add.sprite(240.95,60,'fbtn');
         this.fbtn1.anchor.setTo(0.5);
         this.fbtn1.scale.setTo(0.8);
         this.fbtn1.inputEnabled = true;
         this.fbtn1.input.useHandCursor = true;
         this.fbtn1.events.onInputDown.add(function(){
         this.fbtn1.visible = false;
         this.bcbtn1.visible = true;
         this.igroup1.visible = false;
         this.igroup2.visible = true;

         },this);

         this.bcbtn1 = game.add.sprite(240.95,60,'fbtn');
         this.bcbtn1.anchor.setTo(0.5);
         this.bcbtn1.scale.setTo(0.8);
         this.bcbtn1.visible = false;
         this.bcbtn1.scale.x=-this.bcbtn1.scale.x;
         this.bcbtn1.inputEnabled = true;
         this.bcbtn1.input.useHandCursor = true;
         this.bcbtn1.events.onInputDown.add(function(){
         this.bcbtn1.visible = false;
         this.fbtn1.visible = true;
         this.igroup2.visible = false;
         this.igroup1.visible = true;

         },this);

         this.cnt1=1;

         this.fbtn2 = game.add.sprite(210.95,670,'fbtn');
         this.fbtn2.anchor.setTo(0.5);
         this.fbtn2.scale.setTo(0.8);
         this.fbtn2.inputEnabled = true;
         this.fbtn2.input.useHandCursor = true;
         this.fbtn2.events.onInputDown.add(function(){
          this.cnt1++;
          this['icongp'+this.cnt1].visible=true;
          this['icongp'+(this.cnt1-1)].visible=false;
            this.bcbtn2.visible=true;
          if(this.cnt1==3){
            this.fbtn2.visible=false;
          }
        

         },this);

         this.bcbtn2 = game.add.sprite(70,670,'fbtn');
         this.bcbtn2.anchor.setTo(0.5);
         this.bcbtn2.scale.setTo(0.8);
         this.bcbtn2.visible = false;
         this.bcbtn2.scale.x=-this.bcbtn2.scale.x;
         this.bcbtn2.inputEnabled = true;
         this.bcbtn2.input.useHandCursor = true;
         this.bcbtn2.events.onInputDown.add(function(){
          this.cnt1--;
          this['icongp'+this.cnt1].visible=true;
          this['icongp'+(this.cnt1+1)].visible=false;
            this.fbtn2.visible=true;
          if(this.cnt1==1){
            this.bcbtn2.visible=false;
          }

         },this);

        this.argroup = game.add.group();


        /*this.arbag1 = game.add.sprite(375.25,282.95,'arbag000'+Main.arielFlag[3]);
        this.arbag1.anchor.setTo(0.5);
        this.arbag1.alpha=Main.arielAlpha[3];
        this.argroup.add(this.arbag1);*/

       this.arbhair1 = game.add.sprite(381.5,193.05,'arbhair000'+Main.arielFlag[10]);
        this.arbhair1.anchor.setTo(0.5);
        this.argroup.add(this.arbhair1);

        this.arbody = game.add.sprite(356.85,459.45,'arbody');
        this.arbody.anchor.setTo(0.5);
        this.argroup.add(this.arbody);

         this.inner1 = game.add.sprite(384,341,'inner1');
         this.inner1.anchor.setTo(0.5);
         this.inner1.alpha=Main.arielAlpha[11];
        this.argroup.add(this.inner1);

        this.inner2 = game.add.sprite(382,343.95,'inner2');
         this.inner2.anchor.setTo(0.5);
        this.inner2.alpha=Main.arielAlpha[12];
        this.argroup.add(this.inner2);

        this.arshoe1 = game.add.sprite(346.95,663.85,'arshoe000'+Main.arielFlag[9]);
        this.arshoe1.anchor.setTo(0.5);
        this.arshoe1.alpha=Main.arielAlpha[9];
        this.argroup.add(this.arshoe1);

        this.ardress1 = game.add.sprite(391,366.5,'ardress000'+Main.arielFlag[2]);
        this.ardress1.anchor.setTo(0.5);
        this.ardress1.alpha=Main.arielAlpha[2];
        this.argroup.add(this.ardress1);

        this.artop1 = game.add.sprite(377.55,292,'artop000'+Main.arielFlag[0]);
        this.artop1.anchor.setTo(0.5);
        this.artop1.alpha=Main.arielAlpha[0];
        this.argroup.add(this.artop1);

        this.arbotom1 = game.add.sprite(377,435,'arbotom000'+Main.arielFlag[1]);
        this.arbotom1.anchor.setTo(0.5);
        this.arbotom1.alpha=Main.arielAlpha[1];
        this.argroup.add(this.arbotom1);

        

        /*this.arfbag1 = game.add.sprite(376.6,264.5,'arfbag000'+Main.arielFlag[3]);
        this.arfbag1.anchor.setTo(0.5);
        this.arfbag1.alpha=Main.arielAlpha[3];
        this.argroup.add(this.arfbag1);*/

        this.archain1 = game.add.sprite(379.75,222.5,'archain000'+Main.arielFlag[8]);
        this.archain1.anchor.setTo(0.5);
        this.archain1.alpha=Main.arielAlpha[8];
        this.argroup.add(this.archain1);

        this.arhand = game.add.sprite(389.6,395.25,'arhand');
        this.arhand.anchor.setTo(0.5);
        this.argroup.add(this.arhand);

        this.arbook1 = game.add.sprite(324.95,470,'arbook000'+Main.arielFlag[4]);
        this.arbook1.anchor.setTo(0.5);
        this.arbook1.angle=-90;
        this.arbook1.alpha=Main.arielAlpha[4];
        this.argroup.add(this.arbook1);

         this.arphone1 = game.add.sprite(325.85,460.8,'arphone000'+Main.arielFlag[5]);
        this.arphone1.anchor.setTo(0.5);
        this.arphone1.scale.setTo(1.3);
        this.arphone1.alpha=Main.arielAlpha[5];
        this.argroup.add(this.arphone1);

        this.arfinger = game.add.sprite(318.2,458.55,'arfinger');
        this.arfinger.anchor.setTo(0.5);
        this.argroup.add(this.arfinger);
        
         this.arwatch1 = game.add.sprite(317.3,406.9,'arwatch000'+Main.arielFlag[6]);
        this.arwatch1.anchor.setTo(0.5);
        this.arwatch1.alpha=Main.arielAlpha[6];
        this.argroup.add(this.arwatch1);

        
          this.arhead = game.add.sprite(382.9,140.1,'arhead');
        this.arhead.anchor.setTo(0.5);
        this.argroup.add(this.arhead);

         this.areyeblink = game.add.sprite(382.9,148.65,'areyeblink');
         this.areyeblink.anchor.setTo(0.5);       
         this.areyeblink.animations.add('areyeblink').onComplete.add(function(){
          this.areyeblink.frame = 0;
        },this);
         this.areyeblink.animations.play('areyeblink',10,false);
         game.time.events.loop(3000,this.updateyeblink3,this);        
         this.argroup.add(this.areyeblink);
        

          this.arfhair1 = game.add.sprite(383.1,188.75,'arfhair000'+Main.arielFlag[10]);
        this.arfhair1.anchor.setTo(0.5);
        this.argroup.add(this.arfhair1);

         this.alrear_ring1 = game.add.sprite(383.8,162.85,'alrear_ring000'+Main.arielFlag[8]);
        this.alrear_ring1.anchor.setTo(0.5);
        this.alrear_ring1.alpha=Main.arielAlpha[8];
        this.argroup.add(this.alrear_ring1);

        this.arrear_ring1 = game.add.sprite(383.8,162.85,'arrear_ring000'+Main.arielFlag[8]);
        this.arrear_ring1.anchor.setTo(0.5);
        this.arrear_ring1.alpha=Main.arielAlpha[8];
        this.argroup.add(this.arrear_ring1);

        this.arglass1 = game.add.sprite(384.25,150.45,'arglass000'+Main.arielFlag[7]);
        this.arglass1.anchor.setTo(0.5);
        this.arglass1.alpha=Main.arielAlpha[7];
        this.argroup.add(this.arglass1);

        /*

        

        this.atop1.x=362;
        this.atop1.y=300;

        this.atop2.x=366.9;
        this.atop2.y=302.25;


        this.rbotom1.x=350;
        this.rbotom1.y=537;

        this.rbotom2.x=377.45;
        this.rbotom2.y=442.75;

        this.rbotom3.x=377.45;
        this.rbotom3.y=442.75;
       


        */

         /*this.mcnt1=0;

       this.mcir = game.add.graphics(0,0);
        this.mcir.beginFill(0x666666,0.1);
        this.mcir.drawRect(0,0,800,600);
        this.mcir.inputEnabled=true;
        this.mcir.events.onInputDown.add(function(){
            this.mcnt1++;
          this['xcnt'+this.mcnt1]=game.input.activePointer.x;
          this['ycnt'+this.mcnt1]=game.input.activePointer.y;
        this['dummy'+this.mcnt1] = game.add.sprite(game.input.activePointer.x,game.input.activePointer.y,'rbotom0001');
        this['dummy'+this.mcnt1].anchor.setTo(0.5);
        // this['dummy'+this.mcnt1].scale.setTo(0.6);
       if(this.mcnt1>1){
        this['dummy'+(this.mcnt1-1)].visible=false;
       }
        console.log(this['xcnt'+this.mcnt1]+':'+this['ycnt'+this.mcnt1]);
        //console.log(this['ycnt'+this.mcnt1]);

        },this);*/




         this.morebtn = game.add.sprite(57,752,'morebtn');
         this.morebtn.anchor.setTo(0.5);
         this.morebtn.scale.setTo(0.8); 
         this.morebtn.inputEnabled = true;
         this.morebtn.input.useHandCursor = true;
         this.morebtn.events.onInputUp.add(this.moreLink, this);
         this.morebtn.events.onInputOver.add(this.btnOver, this);
         this.morebtn.events.onInputOut.add(this.btnOut, this);
         //this.levelGroup.add(this.morebtn);
         this.playbtn = game.add.sprite(430,740,'donebtn');
         this.playbtn.anchor.setTo(0.5);
         this.playbtn.scale.setTo(0);
         this.playbtn.inputEnabled = true;
         this.playbtn.input.useHandCursor = true;
        this.playbtn.events.onInputUp.add(this.enterRoom, this);
         this.playbtn.events.onInputOver.add(this.btnOver, this);
         this.playbtn.events.onInputOut.add(this.btnOut, this);

         this.nextbtn = game.add.sprite(430,740,'nextbtn');
         this.nextbtn.anchor.setTo(0.5);
         this.nextbtn.scale.setTo(0);
         // this.nextbtn.inputEnabled = true;
         // this.nextbtn.input.useHandCursor = true;
         this.nextbtn.events.onInputUp.add(this.enterRoom1, this);
         this.nextbtn.events.onInputOver.add(this.btnOver, this);
         this.nextbtn.events.onInputOut.add(this.btnOut, this);

         if (Main.shutterOn[0]) {
         this.shutter1 = game.add.sprite(0,0,'sbg1');
          this.shutter2 = game.add.sprite(252,596,'sbg2');
         this.shutter2.anchor.setTo(0.5);
         this.shouse = game.add.sprite(252,307.5,'shouse');
         this.shouse.anchor.setTo(0.5);
         this.bus1 = game.add.sprite(252,444,'bus');
         this.bus1.anchor.setTo(0.5);
          this.dtext1 = game.add.sprite(247.5,430,'dtext');
         this.dtext1.anchor.setTo(0.5);
         game.world.bringToTop(this.nextbtn);
          game.add.tween(this.nextbtn.scale).to({x:1,y:1}, 500, Phaser.Easing.Quadratic.Out, true).onComplete.add(function(){
           this.nextbtn.inputEnabled = true;
         this.nextbtn.input.useHandCursor = true;
         },this);
        }
        
         this.lightCount=0;
        
         this.logoVar = game.add.sprite(5, 5, 'logo');
         this.logoVar.scale.setTo(0.8);
         this.logoVar.inputEnabled = true
         this.logoVar.input.useHandCursor = true;
         this.logoVar.events.onInputUp.add(this.openLink, this);
         
         this.musicButton = game.add.sprite(427,5,"soundicon");
         this.musicButton.scale.setTo(0.9);
         this.musicButton.inputEnabled = true
         this.musicButton.input.useHandCursor = true;
         this.musicButton.events.onInputUp.add(this.changemusic, this);
         if (!game.sound.mute) {
               this.musicButton.frame = 0;
            }else{
               this.musicButton.frame = 1;
            }
            this.effectFlag=[this.artop1,this.arbotom1,this.ardress1,this.arbag1,this.arbook1,this.arphone1,this.arwatch1,this.arglass1,this.arrear_ring1,this.arshoe1,this.arglass1,this.arfhair1];
        },
changemusic:function()
         {
            if (!game.sound.mute) {
               this.musicButton.frame = 1;
               game.sound.mute = true;
            }else{
               this.musicButton.frame = 0;
               game.sound.mute = false;
            };
         },
        enterRoom1:function(){
     game.add.tween(this.nextbtn.scale).to({x:0,y:0}, 500, Phaser.Easing.Quadratic.Out, true).onComplete.add(function(){
        this.nextbtn.visible=false;
     },this);
     game.add.tween(this.dtext1.scale).to({x:0,y:0}, 500, Phaser.Easing.Quadratic.Out, true).onComplete.add(function(){
     game.add.tween(this.bus1).to({x:-250}, 500, Phaser.Easing.Quadratic.Out, true).onComplete.add(function(){
          this.bus1.visible=false;
          this.bus1.x=750;
          game.add.tween(this.shouse).to({y:-850}, 1000, Phaser.Easing.Quadratic.Out, true);
         game.add.tween(this.shutter2).to({y:1500}, 1000, Phaser.Easing.Quadratic.Out, true);
         game.add.tween(this.shutter1).to({y:-850}, 1000, Phaser.Easing.Quadratic.Out, true);//.onComplete.add(this.startPopUp,this);
         },this);
         },this);
   
   },
           updateyeblink3:function(){
          this.areyeblink.play('areyeblink',10,false);
        },
        changefun:function(evt){
         this.anai[evt.cnt-1]=1;
          if(evt.cnt==1){
            this.artop1.alpha=1;
            this.arbotom1.alpha=1;
            this.ardress1.alpha=0;
           
            Main.arielAlpha[2]=0;
            Main.arielAlpha[0]=1;
            Main.arielAlpha[1]=1;
            
            this.artop1.loadTexture('artop000'+evt.id);
            Main.arielFlag[0]=evt.id;
          }
          if(evt.cnt==2){
            this.artop1.alpha=1;
            this.arbotom1.alpha=1;
            this.ardress1.alpha=0;
            
            Main.arielAlpha[2]=0;
            Main.arielAlpha[0]=1;
            Main.arielAlpha[1]=1;
             
            this.arbotom1.loadTexture('arbotom000'+evt.id);
            Main.arielFlag[1]=evt.id;
          }

          if(evt.cnt==3){
            this.ardress1.alpha=1;
            this.artop1.alpha=0;
            this.arbotom1.alpha=0;
            this.inner1.alpha=0;
            this.inner2.alpha=0;
            Main.arielAlpha[11]=0;
            Main.arielAlpha[12]=0;
            
            Main.arielAlpha[2]=1;
            Main.arielAlpha[0]=0;
            Main.arielAlpha[1]=0;
             
            this.ardress1.loadTexture('ardress000'+evt.id);
            Main.arielFlag[2]=evt.id;
          }

          if(evt.cnt==4){
            
            this.arbag1.alpha=1;
            this.arfbag1.alpha=1;
            Main.arielAlpha[3]=1;
            this.arbag1.loadTexture('arbag000'+evt.id);
            this.arfbag1.loadTexture('arfbag000'+evt.id);
            Main.arielFlag[3]=evt.id;
          }

           if(evt.cnt==5){
            
            this.arphone1.alpha=0;
            this.arbook1.alpha=1;
            Main.arielAlpha[5]=0;
            Main.arielAlpha[4]=1;
            this.arbook1.loadTexture('arbook000'+evt.id);
            Main.arielFlag[4]=evt.id;
          }
          if(evt.cnt==6){
            
            this.arbook1.alpha=0;
            this.arphone1.alpha=1;
            Main.arielAlpha[4]=0;
            Main.arielAlpha[5]=1;
            this.arphone1.loadTexture('arphone000'+evt.id);
            Main.arielFlag[5]=evt.id;
          }

          if(evt.cnt==7){
            
            this.arwatch1.alpha=1;
            Main.arielAlpha[6]=1;
            this.arwatch1.loadTexture('arwatch000'+evt.id);
            Main.arielFlag[6]=evt.id;
          }

          if(evt.cnt==8){
            
            this.arglass1.alpha=1;
            Main.arielAlpha[7]=1;
            this.arglass1.loadTexture('arglass000'+evt.id);
            Main.arielFlag[7]=evt.id;
          }

          if(evt.cnt==9){

            if(Main.arielFlag[10]==1){
        this.arrear_ring1.visible=false;
        this.alrear_ring1.visible=true;
  
         }
         if(Main.arielFlag[10]==3||Main.arielFlag[10]==2||Main.arielFlag[10]==4){
        this.arrear_ring1.visible=true;
        this.alrear_ring1.visible=true;
  
         }
         if(Main.arielFlag[10]==5){
        this.arrear_ring1.visible=false;
        this.alrear_ring1.visible=true;
  
         }
            
            this.archain1.alpha=1;
            this.alrear_ring1.alpha=1;
            this.arrear_ring1.alpha=1;
            Main.arielAlpha[8]=1;
            this.alrear_ring1.loadTexture('alrear_ring000'+evt.id);
            this.arrear_ring1.loadTexture('arrear_ring000'+evt.id);
            this.archain1.loadTexture('archain000'+evt.id);
            Main.arielFlag[8]=evt.id;


          }

           if(evt.cnt==10){
            
            this.arshoe1.alpha=1;
            Main.arielAlpha[9]=1;
            this.arshoe1.loadTexture('arshoe000'+evt.id);
            Main.arielFlag[9]=evt.id;
          }

           if(evt.cnt==11){


            
            this.arbhair1.alpha=1;
            this.arfhair1.alpha=1;
            Main.arielAlpha[10]=1;
            this.arbhair1.loadTexture('arbhair000'+evt.id);
            this.arfhair1.loadTexture('arfhair000'+evt.id);
            Main.arielFlag[10]=evt.id;
              if(Main.arielFlag[10]==1){
        this.arrear_ring1.visible=false;
        this.alrear_ring1.visible=true;
  
         }
         if(Main.arielFlag[10]==3||Main.arielFlag[10]==2||Main.arielFlag[10]==4){
        this.arrear_ring1.visible=true;
        this.alrear_ring1.visible=true;
  
         }
         if(Main.arielFlag[10]==5){
        this.arrear_ring1.visible=false;
        this.alrear_ring1.visible=true;
  
         }
          }

           //if(this.anai.indexOf(0)<0){
         game.add.tween(this.playbtn.scale).to({x:0.8,y:0.8},800,Phaser.Easing.Elastic.Out,true);
       //}

        effectssd = game.add.sprite(this.effectFlag[evt.cnt-1].worldPosition.x,this.effectFlag[evt.cnt-1].worldPosition.y,'effectssd');
        effectssd.anchor.setTo(0.5);
        effectssd.animations.add('effectssd');
        effectssd.animations.play('effectssd',20,false).onComplete.add(function(evt){
          evt.destroy();
        },this);
         

        },
        groupfun:function(evt){
        if(evt.id==1){
        	this.dicon1.inputEnabled=false;
          	this.dicon1.input.useHandCursor=false;
          this.cnt1=1;
          this.fbtn2.visible=true;
          this.bcbtn2.visible=false;
          this.icongp1.visible=true;
          this.icongp2.visible=false;
          this.icongp3.visible=false;
         // this.icongp4.visible=false;
          this.icongp5.visible=false;
          this.icongp6.visible=false;
          this.icongp7.visible=false;
          this.icongp8.visible=false;
        }
        if(evt.id==2){
        	this.dicon1.inputEnabled=true;
          	this.dicon1.input.useHandCursor=true;
          this.fbtn2.visible=false;
          this.bcbtn2.visible=false;
          this.icongp1.visible=false;
          this.icongp2.visible=false;
          this.icongp3.visible=false;
         // this.icongp4.visible=false;
          this.icongp5.visible=false;
          this.icongp6.visible=false;
          this.icongp7.visible=false;
          this.icongp8.visible=true;
        }
        if(evt.id==3){
        	this.dicon1.inputEnabled=true;
          	this.dicon1.input.useHandCursor=true;
          this.fbtn2.visible=false;
          this.bcbtn2.visible=false;
          this.icongp1.visible=false;
          this.icongp2.visible=false;
          this.icongp3.visible=false;
         // this.icongp4.visible=false;
          this.icongp5.visible=false;
          this.icongp6.visible=false;
          this.icongp7.visible=true;
          this.icongp8.visible=false;
        }
        if(evt.id==4){
        	this.dicon1.inputEnabled=true;
          	this.dicon1.input.useHandCursor=true;
          this.fbtn2.visible=false;
          this.bcbtn2.visible=false;
          this.icongp1.visible=false;
          this.icongp2.visible=false;
          this.icongp3.visible=false;
        //  this.icongp4.visible=false;
          this.icongp5.visible=false;
          this.icongp6.visible=true;
          this.icongp7.visible=false;
          this.icongp8.visible=false;
        }
        if(evt.id==5){
        	this.dicon1.inputEnabled=true;
          	this.dicon1.input.useHandCursor=true;
          this.fbtn2.visible=false;
          this.bcbtn2.visible=false;
          this.icongp1.visible=false;
          this.icongp2.visible=false;
          this.icongp3.visible=false;
         // this.icongp4.visible=true;
          this.icongp5.visible=false;
          this.icongp6.visible=false;
          this.icongp7.visible=false;
          this.icongp8.visible=false;
        }
        if(evt.id==6){
        	this.dicon1.inputEnabled=true;
          	this.dicon1.input.useHandCursor=true;
          this.fbtn2.visible=false;
          this.bcbtn2.visible=false;
          this.icongp1.visible=false;
          this.icongp2.visible=false;
          this.icongp3.visible=false;
         // this.icongp4.visible=false;
          this.icongp5.visible=true;
          this.icongp6.visible=false;
          this.icongp7.visible=false;
          this.icongp8.visible=false;
        }
        },
openLink:function()
{
   CreateLinksInGame("Disney-Princess-School-Fashion","game","logo");
},
moreLink:function()
{
   CreateLinksInGame("Disney-Princess-School-Fashion","game","more");
},
btnOver:function(items){
  items.scale.setTo(items.scale.x+0.05);
      effectVar = game.add.sprite(items.x-30,items.y-80,'effects'); 
   effectVar.anchor.setTo(0.5);
   effectVar.scale.setTo(2);
   effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
   effectVar.animations.play('glitter', 30, false);
   },
btnOut:function(items){
     items.scale.setTo(items.scale.x-0.05);

   },
removeGlitter:function(evt){
      evt.kill(); 
      },
       enterRoom:function(){
  game.add.tween(this.shouse).to({y:307.5}, 1000, Phaser.Easing.Quadratic.Out, true);
         game.add.tween(this.shutter2).to({y:596}, 1000, Phaser.Easing.Quadratic.Out, true);
         game.add.tween(this.shutter1).to({y:0}, 1000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function(){
          this.bus1.visible=true;
         game.add.tween(this.bus1).to({x:252}, 500, Phaser.Easing.Quadratic.Out, true).onComplete.add(function(){
         game.add.tween(this.dtext1.scale).to({x:1,y:1}, 500, Phaser.Easing.Quadratic.Out, true).onComplete.add(function(){
   if(Main.selectionFlag[0]==1&&Main.selectionFlag[1]==1&&Main.selectionFlag[2]==1&&Main.selectionFlag[3]==1){
    game.state.start('finascreen');
   }else{
   game.state.start('selection_screen');
   }   
         },this);
         },this);
         },this);
   
   },
}

Main.elsa_screen = function(){}

Main.elsa_screen.prototype = {
    create:function(){
         this.anai=[0,0,0,0,0,0,0,0,0,0,0];
         this.levelGroup = game.add.group();
         this.introbg = game.add.sprite(0,0,'ibg');
         this.levelGroup.add(this.introbg);


         this.cuboard1 = game.add.sprite(134,374.85,'cuboard');
         this.cuboard1.anchor.setTo(0.5);

         this.icongp2 = game.add.group();

         this.bar1 = game.add.sprite(134.5,238.85,'bar');
         this.bar1.anchor.setTo(0.5);
         this.icongp2.add(this.bar1);

         this.bar2 = game.add.sprite(134.5,376.85,'bar');
         this.bar2.anchor.setTo(0.5);
         this.icongp2.add(this.bar2);

        var hangerx=[67.7,129,193.7];
        var hangery=[240.25,240.25,240.25];

        var ticonx=[69,132,200];
        var ticony=[298,308,298];

        for(i=1;i<=3;i++){
          this['hanger'+i] = game.add.sprite(hangerx[i-1],hangery[i-1],'hanger');
          this['hanger'+i].anchor.setTo(0.5);
          if(i==3){
          this['hanger'+i].scale.x=0.8;
          }
          this['ticon'+i] = game.add.sprite(ticonx[i-1],ticony[i-1],'eticon'+i);
          this['ticon'+i].anchor.setTo(0.5);
          if(i==2){
          this['ticon'+i].scale.setTo(0.6);
          }
          this['ticon'+i].id=i;
          this['ticon'+i].cnt=1;
          this['ticon'+i].inputEnabled=true;
          this['ticon'+i].input.useHandCursor=true;
          //this['ticon'+i].events.onInputOver.add(this.btnOver, this);
         // this['ticon'+i].events.onInputOut.add(this.btnOut, this);
        this['ticon'+i].events.onInputDown.add(this.changefun, this);
            this.icongp2.add(this['hanger'+i]);
            this.icongp2.add(this['ticon'+i]);
        }

        var hanger2x=[68.2,147.05,211.9];
        var hanger2y=[377.4,377.4,377.4];

        var biconx=[58,140,205];
        var bicony=[483,483,483];

        for(i=1;i<=3;i++){
          this['hanger'+i] = game.add.sprite(hanger2x[i-1],hanger2y[i-1],'hanger');
          this['hanger'+i].anchor.setTo(0.5);
          this['bicon'+i] = game.add.sprite(biconx[i-1],bicony[i-1],'ebotom000'+i);
          this['bicon'+i].anchor.setTo(0.5);
          this['bicon'+i].scale.setTo(0.6);
          this['bicon'+i].scale.x=-this['bicon'+i].scale.x;
          this['bicon'+i].id=i;
          this['bicon'+i].cnt=2;
          this['bicon'+i].inputEnabled=true;
          this['bicon'+i].input.useHandCursor=true;
          this['bicon'+i].input.pixelPerfectClick=true;
          //this['bicon'+i].events.onInputOver.add(this.btnOver, this);
         // this['bicon'+i].events.onInputOut.add(this.btnOut, this);
        this['bicon'+i].events.onInputDown.add(this.changefun, this);
            this.icongp2.add(this['hanger'+i]);
            this.icongp2.add(this['bicon'+i]);
        }

       

      this.icongp2.visible = false;




         this.icongp1 = game.add.group();
         this.icongp3 = game.add.group();

         this.bar1 = game.add.sprite(134.5,238.85,'bar');
         this.bar1.anchor.setTo(0.5);
         this.icongp1.add(this.bar1);

         this.bar1 = game.add.sprite(134.5,238.85,'bar');
         this.bar1.anchor.setTo(0.5);
         this.icongp3.add(this.bar1);

        var hanger3x=[67.7,130.5,186.85,128.55];
        var hanger3y=[240.25,236.9,236.9,237.15];

        var adiconx=[70,135,188,138];
        var adicony=[335,334,331,334];

        for(i=1;i<=4;i++){
          this['hanger'+i] = game.add.sprite(hanger3x[i-1],hanger3y[i-1],'hanger');
          this['hanger'+i].anchor.setTo(0.5);
          this['adicon'+i] = game.add.sprite(adiconx[i-1],adicony[i-1],'edicon'+i);
          this['adicon'+i].anchor.setTo(0.5);
          this['adicon'+i].id=i;
          this['adicon'+i].cnt=3;
          this['adicon'+i].inputEnabled=true;
          this['adicon'+i].input.useHandCursor=true;
          this['adicon'+i].input.pixelPerfectClick=true;
          //this['adicon'+i].events.onInputOver.add(this.btnOver, this);
         // this['adicon'+i].events.onInputOut.add(this.btnOut, this);
         this['adicon'+i].events.onInputDown.add(this.changefun, this);
        if(i<=3){
            this.icongp1.add(this['hanger'+i]);
            this.icongp1.add(this['adicon'+i]);
          }else{
             this.icongp3.add(this['hanger'+i]);
            this.icongp3.add(this['adicon'+i]);
          }
        }

        
        //this.icongp1.visible = false;
        this.icongp3.visible = false;

        /*this.icongp4 = game.add.group();

         this.shelf1 = game.add.sprite(134,335.85,'shelf');
         this.shelf1.anchor.setTo(0.5);
         this.icongp4.add(this.shelf1);

         this.shelf2 = game.add.sprite(134,472.85,'shelf');
         this.shelf2.anchor.setTo(0.5);
         this.icongp4.add(this.shelf2);

        var bbiconx=[131.9,131.3,136.3];
        var bbicony=[275,423,559.65];

        for(i=1;i<=3;i++){
          this['bbicon'+i] = game.add.sprite(bbiconx[i-1],bbicony[i-1],'ebag000'+i);
          this['bbicon'+i].anchor.setTo(0.5);
          this['bbicon'+i].scale.setTo(0.5);
          this['bbicon'+i].id=i;
          this['bbicon'+i].cnt=4;
          this['bbicon'+i].inputEnabled=true;
          this['bbicon'+i].input.useHandCursor=true;
          //this['bbicon'+i].events.onInputOver.add(this.btnOver, this);
         // this['bbicon'+i].events.onInputOut.add(this.btnOut, this);
        this['bbicon'+i].events.onInputDown.add(this.changefun, this);
            this.icongp4.add(this['bbicon'+i]);
        }

        this.icongp4.visible = false;*/

         this.icongp5 = game.add.group();

         this.shelf1 = game.add.sprite(134,335.85,'shelf');
         this.shelf1.anchor.setTo(0.5);
         this.icongp5.add(this.shelf1);

         this.shelf2 = game.add.sprite(134,472.85,'shelf');
         this.shelf2.anchor.setTo(0.5);
         this.icongp5.add(this.shelf2);

        var bkiconx=[66,130,136.3];
        var bkicony=[315,314,559.65];

        for(i=1;i<=2;i++){
          this['bkicon'+i] = game.add.sprite(bkiconx[i-1],bkicony[i-1],'ebook000'+i);
          this['bkicon'+i].anchor.setTo(0.5);
          this['bkicon'+i].scale.setTo(0.9);
          this['bkicon'+i].id=i;
          this['bkicon'+i].cnt=5;
          this['bkicon'+i].angle=80;
          this['bkicon'+i].inputEnabled=true;
          this['bkicon'+i].input.useHandCursor=true;
          //this['bkicon'+i].events.onInputOver.add(this.btnOver, this);
         // this['bkicon'+i].events.onInputOut.add(this.btnOut, this);
        this['bkicon'+i].events.onInputDown.add(this.changefun, this);
            this.icongp5.add(this['bkicon'+i]);
        }

        var phiconx=[208,65,136.3];
        var phicony=[306,445,559.65];

        for(i=1;i<=2;i++){
          this['phicon'+i] = game.add.sprite(phiconx[i-1],phicony[i-1],'ephone000'+i);
          this['phicon'+i].anchor.setTo(0.5);
          this['phicon'+i].angle=30;
          this['phicon'+i].id=i;
          this['phicon'+i].cnt=6;
          this['phicon'+i].inputEnabled=true;
          this['phicon'+i].input.useHandCursor=true;
          //this['phicon'+i].events.onInputOver.add(this.btnOver, this);
         // this['phicon'+i].events.onInputOut.add(this.btnOut, this);
        this['phicon'+i].events.onInputDown.add(this.changefun, this);
            this.icongp5.add(this['phicon'+i]);
        }

        var wiconx=[127.5,188.45,136.3];
        var wicony=[458.15,458.15,559.65];

        for(i=1;i<=2;i++){
          this['wicon'+i] = game.add.sprite(wiconx[i-1],wicony[i-1],'ewatch000'+i);
          this['wicon'+i].anchor.setTo(0.5);
          this['wicon'+i].scale.setTo(1.3);
          // this['wicon'+i].angle=-32;
          this['wicon'+i].id=i;
          this['wicon'+i].cnt=7;
          this['wicon'+i].inputEnabled=true;
          this['wicon'+i].input.useHandCursor=true;
          //this['wicon'+i].events.onInputOver.add(this.btnOver, this);
         // this['wicon'+i].events.onInputOut.add(this.btnOut, this);
        this['wicon'+i].events.onInputDown.add(this.changefun, this);
            this.icongp5.add(this['wicon'+i]);
        }

        var giconx=[80.5,184.45];
        var gicony=[770,770];

        for(i=1;i<=2;i++){
          this['gicon'+i] = game.add.sprite(giconx[i-1],gicony[i-1],'eglass000'+i);
          this['gicon'+i].anchor.setTo(0.5);
          // this['gicon'+i].angle=-32;
          this['gicon'+i].id=i;
          this['gicon'+i].cnt=8;
          this['gicon'+i].inputEnabled=true;
          this['gicon'+i].input.useHandCursor=true;
          //this['gicon'+i].events.onInputOver.add(this.btnOver, this);
         // this['gicon'+i].events.onInputOut.add(this.btnOut, this);
        this['gicon'+i].events.onInputDown.add(this.changefun, this);
            this.icongp5.add(this['gicon'+i]);
        }

        this.icongp5.visible = false;

        this.icongp6 = game.add.group();

         this.shelf1 = game.add.sprite(134,335.85,'shelf');
         this.shelf1.anchor.setTo(0.5);
         this.icongp6.add(this.shelf1);

         this.shelf2 = game.add.sprite(134,472.85,'shelf');
         this.shelf2.anchor.setTo(0.5);
         this.icongp6.add(this.shelf2);

        var eiconx=[83,187,80,191,78.8,186.5];
        var eicony=[266,266,412,414,552.65,552];

        var eicon2x=[81,184.5,77,190,77,184];
        var eicon2y=[266,266,412,414,552.65,552];

        var ciconx=[81,183,77.5,191,77,184];
        var cicony=[310,318,455,456,598,594];

        var ndollx=[80.15,184.6,77.2,189.65,76.35,183.3];
        var ndolly=[269.2,269.2,414.95,414.95,554.3,554.3];

        for(i=1;i<=6;i++){
          this['ndoll'+i] = game.add.sprite(ndollx[i-1],ndolly[i-1],'ndoll');
          this['ndoll'+i].anchor.setTo(0.5);
          this['eicon'+i] = game.add.sprite(eiconx[i-1],eicony[i-1],'lear_ring000'+i);
          this['eicon'+i].anchor.setTo(0.5);
          this['eicon'+i].scale.setTo(0.56);
          this['reicon'+i] = game.add.sprite(eicon2x[i-1],eicon2y[i-1],'rear_ring000'+i);
          this['reicon'+i].anchor.setTo(0.5);
          this['reicon'+i].scale.setTo(0.56);
          this['cicon'+i] = game.add.sprite(ciconx[i-1],cicony[i-1],'echain000'+i);
          this['cicon'+i].anchor.setTo(0.5);
          this['cicon'+i].scale.setTo(0.62);
          this['ndoll'+i].id=i;
          this['ndoll'+i].cnt=9;
          this['ndoll'+i].inputEnabled=true;
          this['ndoll'+i].input.useHandCursor=true;
          //this['ndoll'+i].events.onInputOver.add(this.btnOver, this);
         // this['ndoll'+i].events.onInputOut.add(this.btnOut, this);
        this['ndoll'+i].events.onInputDown.add(this.changefun, this);
            this.icongp6.add(this['ndoll'+i]);
            this.icongp6.add(this['eicon'+i]);
            this.icongp6.add(this['reicon'+i]);
            this.icongp6.add(this['cicon'+i]);
        }

        this.icongp6.visible = false;

         this.icongp7 = game.add.group();

         this.shelf1 = game.add.sprite(134,335.85,'shelf');
         this.shelf1.anchor.setTo(0.5);
         this.icongp7.add(this.shelf1);

         this.shelf2 = game.add.sprite(134,472.85,'shelf');
         this.shelf2.anchor.setTo(0.5);
         this.icongp7.add(this.shelf2);

        var asiconx=[64.95,137.95,207.95,86.95,162.95,91.95,167.95];
        var asicony=[271.35,271.65,313,410,440,592,592.05];

        for(i=1;i<=7;i++){
          this['asicon'+i] = game.add.sprite(asiconx[i-1],asicony[i-1],'esicon'+i);
          this['asicon'+i].anchor.setTo(0.5);
          this['asicon'+i].id=i;
          this['asicon'+i].cnt=10;
          this['asicon'+i].inputEnabled=true;
          this['asicon'+i].input.useHandCursor=true;
          //this['asicon'+i].events.onInputOver.add(this.btnOver, this);
         // this['asicon'+i].events.onInputOut.add(this.btnOut, this);
        this['asicon'+i].events.onInputDown.add(this.changefun, this);
            this.icongp7.add(this['asicon'+i]);
          }
        this.icongp7.visible = false;

        this.icongp8 = game.add.group();

         this.bar1 = game.add.sprite(134.5,212.85,'bar');
         this.bar1.anchor.setTo(0.5);
         this.icongp8.add(this.bar1);

         this.bar2 = game.add.sprite(134.5,336.85,'bar');
         this.bar2.anchor.setTo(0.5);
         this.icongp8.add(this.bar2);

         this.bar3 = game.add.sprite(134.5,482.85,'bar');
         this.bar3.anchor.setTo(0.5);
         this.icongp8.add(this.bar3);

        
          var ahiconx=[131.9,68.75,184.25,74.75,187.75,91.95,167.95];
        var ahicony=[254.4,379.7,379.7,524.85,524.85,592,592.05];

        for(i=1;i<=5;i++){
          this['ahicon'+i] = game.add.sprite(ahiconx[i-1],ahicony[i-1],'ehicon'+i);
          this['ahicon'+i].anchor.setTo(0.5);
          this['ahicon'+i].id=i;
          this['ahicon'+i].cnt=11;
          this['ahicon'+i].inputEnabled=true;
          this['ahicon'+i].input.useHandCursor=true;
          //this['ahicon'+i].events.onInputOver.add(this.btnOver, this);
         // this['ahicon'+i].events.onInputOut.add(this.btnOut, this);
        this['ahicon'+i].events.onInputDown.add(this.changefun, this);
            this.icongp8.add(this['ahicon'+i]);
          }

         this.icongp8.visible = false;

          this.igroup1 = game.add.group();
          this.igroup2 = game.add.group();


        var diconx=[52.4,141.35,230,52.4,141.35,141.35/*230*/];
        var dicony=[146,111.65,140.35,146,111.65,111.65/*140.35*/];

        for(i=1;i<=6;i++){
          this['dicon'+i] = game.add.sprite(diconx[i-1],dicony[i-1],'dicon'+i);
          this['dicon'+i].anchor.setTo(0.5);
          this['dicon'+i].id=i;
          this['dicon'+i].cnt=1;
          if(i>1){
          this['dicon'+i].inputEnabled=true;
          this['dicon'+i].input.useHandCursor=true;
           }
           if(i==5){
          this['dicon'+i].visible=false;
          }
          this['dicon'+i].events.onInputOver.add(this.btnOver, this);
         this['dicon'+i].events.onInputOut.add(this.btnOut, this);
        this['dicon'+i].events.onInputDown.add(this.groupfun, this);
        if(i<=3){
            this.igroup1.add(this['dicon'+i]);
          }
          if(i>3){
            this.igroup2.add(this['dicon'+i]);
          }
          }
        this.igroup2.visible = false;

        this.fbtn1 = game.add.sprite(240.95,60,'fbtn');
         this.fbtn1.anchor.setTo(0.5);
         this.fbtn1.scale.setTo(0.8);
         this.fbtn1.inputEnabled = true;
         this.fbtn1.input.useHandCursor = true;
         this.fbtn1.events.onInputDown.add(function(){
         this.fbtn1.visible = false;
         this.bcbtn1.visible = true;
         this.igroup1.visible = false;
         this.igroup2.visible = true;

         },this);

         this.bcbtn1 = game.add.sprite(240.95,60,'fbtn');
         this.bcbtn1.anchor.setTo(0.5);
         this.bcbtn1.scale.setTo(0.8);
         this.bcbtn1.visible = false;
         this.bcbtn1.scale.x=-this.bcbtn1.scale.x;
         this.bcbtn1.inputEnabled = true;
         this.bcbtn1.input.useHandCursor = true;
         this.bcbtn1.events.onInputDown.add(function(){
         this.bcbtn1.visible = false;
         this.fbtn1.visible = true;
         this.igroup2.visible = false;
         this.igroup1.visible = true;

         },this);

         this.cnt1=1;

         this.fbtn2 = game.add.sprite(210.95,670,'fbtn');
         this.fbtn2.anchor.setTo(0.5);
         this.fbtn2.scale.setTo(0.8);
         this.fbtn2.inputEnabled = true;
         this.fbtn2.input.useHandCursor = true;
         this.fbtn2.events.onInputDown.add(function(){
          this.cnt1++;
          this['icongp'+this.cnt1].visible=true;
          this['icongp'+(this.cnt1-1)].visible=false;
            this.bcbtn2.visible=true;
          if(this.cnt1==3){
            this.fbtn2.visible=false;
          }
        

         },this);

         this.bcbtn2 = game.add.sprite(70,670,'fbtn');
         this.bcbtn2.anchor.setTo(0.5);
         this.bcbtn2.scale.setTo(0.8);
         this.bcbtn2.visible = false;
         this.bcbtn2.scale.x=-this.bcbtn2.scale.x;
         this.bcbtn2.inputEnabled = true;
         this.bcbtn2.input.useHandCursor = true;
         this.bcbtn2.events.onInputDown.add(function(){
          this.cnt1--;
          this['icongp'+this.cnt1].visible=true;
          this['icongp'+(this.cnt1+1)].visible=false;
            this.fbtn2.visible=true;
          if(this.cnt1==1){
            this.bcbtn2.visible=false;
          }

         },this);

        this.egroup = game.add.group();


        /*this.ebag1 = game.add.sprite(382.9,327.05,'ebag000'+Main.elsaFlag[3]);
        this.ebag1.anchor.setTo(0.5);
        this.ebag1.alpha=Main.elsaAlpha[3];
        this.egroup.add(this.ebag1);*/

       this.ebhair1 = game.add.sprite(378.5,205,'ebhair000'+Main.elsaFlag[10]);
        this.ebhair1.anchor.setTo(0.5);
        this.egroup.add(this.ebhair1);

        this.ebody = game.add.sprite(361.15,471.9,'ebody');
        this.ebody.anchor.setTo(0.5);
        this.egroup.add(this.ebody);

         this.inner1 = game.add.sprite(390,350,'inner1');
         this.inner1.anchor.setTo(0.5);
         this.inner1.alpha=Main.elsaAlpha[11];
        this.egroup.add(this.inner1);

        this.inner2 = game.add.sprite(391,343.95,'inner2');
         this.inner2.anchor.setTo(0.5);
        this.inner2.alpha=Main.elsaAlpha[12];
        this.egroup.add(this.inner2);

        this.eshoe1 = game.add.sprite(350.7,556,'eshoe000'+Main.elsaFlag[9]);
        this.eshoe1.anchor.setTo(0.5);
        this.eshoe1.alpha=Main.elsaAlpha[9];
        this.egroup.add(this.eshoe1);

        this.edress1 = game.add.sprite(388.25,366.5,'edress000'+Main.elsaFlag[2]);
        this.edress1.anchor.setTo(0.5);
        this.edress1.alpha=Main.elsaAlpha[2];
        this.egroup.add(this.edress1);

      

        this.ebotom1 = game.add.sprite(408,534,'ebotom000'+Main.elsaFlag[1]);
        this.ebotom1.anchor.setTo(0.5);
        this.ebotom1.alpha=Main.elsaAlpha[1];
        this.egroup.add(this.ebotom1);

         this.ebook1 = game.add.sprite(335.25,450.15,'ebook000'+Main.elsaFlag[4]);
        this.ebook1.anchor.setTo(0.5);
        this.ebook1.alpha=Main.elsaAlpha[4];
        this.egroup.add(this.ebook1);

        this.ephone1 = game.add.sprite(327.85,446.45,'ephone000'+Main.elsaFlag[5]);
        this.ephone1.anchor.setTo(0.5);
        this.ephone1.scale.setTo(1.2);
        this.ephone1.alpha=Main.elsaAlpha[5];
        this.egroup.add(this.ephone1);

       /* this.efbag1 = game.add.sprite(387.5,308.55,'efbag000'+Main.elsaFlag[3]);
        this.efbag1.anchor.setTo(0.5);
        this.efbag1.alpha=Main.elsaAlpha[3];
        this.egroup.add(this.efbag1);*/

        this.ehand = game.add.sprite(393,408.05,'ehand');
        this.ehand.anchor.setTo(0.5);
        this.egroup.add(this.ehand);

        this.efdress4 = game.add.sprite(388.25,366.5,'efdress4');
        this.efdress4.anchor.setTo(0.5);
        this.efdress4.visible=false;
        this.egroup.add(this.efdress4);

        this.etop1 = game.add.sprite(388.9,333.1,'etop000'+Main.elsaFlag[0]);
        this.etop1.anchor.setTo(0.5);
        this.etop1.alpha=Main.elsaAlpha[0];
        this.egroup.add(this.etop1);

        
        /*this.efbag2 = game.add.sprite(387.5,308.55,'efbag000'+Main.elsaFlag[3]);
        this.efbag2.anchor.setTo(0.5);
        this.efbag2.alpha=Main.elsaAlpha[3];
        this.efbag2.visible=false;
        this.egroup.add(this.efbag2);*/

        /*this.brect = game.add.graphics(333,200);
        this.brect.beginFill(0x000000,0.5);
        this.brect.drawRect(0,0,111,190);
        this.efbag2.mask = this.brect;
        this.egroup.add(this.brect);*/

        this.efdress3 = game.add.sprite(388.9,333.1,'efdress3');
        this.efdress3.anchor.setTo(0.5);
        this.efdress3.visible=false;
        this.efdress3.alpha=Main.elsaAlpha[0];
        this.egroup.add(this.efdress3);

        
        this.echain1 = game.add.sprite(383,240,'echain000'+Main.elsaFlag[8]);
        this.echain1.anchor.setTo(0.5);
        this.echain1.alpha=Main.elsaAlpha[8];
        this.egroup.add(this.echain1);

        this.ehead = game.add.sprite(386.15,154,'ehead');
        this.ehead.anchor.setTo(0.5);
        this.egroup.add(this.ehead);

         this.eyeblink = game.add.sprite(385.7,159.55,'eyeblink');
         this.eyeblink.anchor.setTo(0.5);       
         this.eyeblink.animations.add('eyeblink').onComplete.add(function(){
          this.eyeblink.frame = 0;
        },this);
         this.eyeblink.animations.play('eyeblink',10,false);
         game.time.events.loop(3000,this.updateyeblink4,this);        
         this.egroup.add(this.eyeblink);

         this.lear_ring2 = game.add.sprite(386.6,185.5,'lear_ring000'+Main.elsaFlag[8]);
        this.lear_ring2.anchor.setTo(0.5);
        this.lear_ring2.alpha=Main.elsaAlpha[8];
        this.lear_ring2.visible=false;
        this.egroup.add(this.lear_ring2);
       

        this.efhair1 = game.add.sprite(380,205,'efhair000'+Main.elsaFlag[10]);
        this.efhair1.anchor.setTo(0.5);
        this.egroup.add(this.efhair1);

         this.eglass1 = game.add.sprite(391.7,329.85,'eglass000'+Main.elsaFlag[7]);
        this.eglass1.anchor.setTo(0.5);
        this.eglass1.alpha=Main.elsaAlpha[7];
        this.egroup.add(this.eglass1);

        this.ewatch1 = game.add.sprite(321.8,426.55,'ewatch000'+Main.elsaFlag[6]);
        this.ewatch1.anchor.setTo(0.5);
        this.ewatch1.alpha=Main.elsaAlpha[6];
        this.egroup.add(this.ewatch1);

        
        this.lear_ring1 = game.add.sprite(386.6,185.5,'lear_ring000'+Main.elsaFlag[8]);
        this.lear_ring1.anchor.setTo(0.5);
        this.lear_ring1.alpha=Main.elsaAlpha[8];
        this.egroup.add(this.lear_ring1);

        this.rear_ring1 = game.add.sprite(386.6,185.5,'rear_ring000'+Main.elsaFlag[8]);
        this.rear_ring1.anchor.setTo(0.5);
        this.rear_ring1.alpha=Main.elsaAlpha[8];
        this.egroup.add(this.rear_ring1);

       

        /*

        

        this.atop1.x=362;
        this.atop1.y=300;

        this.atop2.x=366.9;
        this.atop2.y=302.25;


        this.rbotom1.x=350;
        this.rbotom1.y=537;

        this.rbotom2.x=377.45;
        this.rbotom2.y=442.75;

        this.rbotom3.x=377.45;
        this.rbotom3.y=442.75;
       


        */

         /*this.mcnt1=0;

       this.mcir = game.add.graphics(0,0);
        this.mcir.beginFill(0x666666,0.1);
        this.mcir.drawRect(0,0,800,600);
        this.mcir.inputEnabled=true;
        this.mcir.events.onInputDown.add(function(){
            this.mcnt1++;
          this['xcnt'+this.mcnt1]=game.input.activePointer.x;
          this['ycnt'+this.mcnt1]=game.input.activePointer.y;
        this['dummy'+this.mcnt1] = game.add.sprite(game.input.activePointer.x,game.input.activePointer.y,'rbotom0001');
        this['dummy'+this.mcnt1].anchor.setTo(0.5);
        // this['dummy'+this.mcnt1].scale.setTo(0.6);
       if(this.mcnt1>1){
        this['dummy'+(this.mcnt1-1)].visible=false;
       }
        console.log(this['xcnt'+this.mcnt1]+':'+this['ycnt'+this.mcnt1]);
        //console.log(this['ycnt'+this.mcnt1]);

        },this);*/




         this.morebtn = game.add.sprite(57,752,'morebtn');
         this.morebtn.anchor.setTo(0.5);
         this.morebtn.scale.setTo(0.8); 
         this.morebtn.inputEnabled = true;
         this.morebtn.input.useHandCursor = true;
         this.morebtn.events.onInputUp.add(this.moreLink, this);
         this.morebtn.events.onInputOver.add(this.btnOver, this);
         this.morebtn.events.onInputOut.add(this.btnOut, this);
         //this.levelGroup.add(this.morebtn);
         this.playbtn = game.add.sprite(430,740,'donebtn');
         this.playbtn.anchor.setTo(0.5);
         this.playbtn.scale.setTo(0);
         this.playbtn.inputEnabled = true;
         this.playbtn.input.useHandCursor = true;
        this.playbtn.events.onInputUp.add(this.enterRoom, this);
         this.playbtn.events.onInputOver.add(this.btnOver, this);
         this.playbtn.events.onInputOut.add(this.btnOut, this);

         this.nextbtn = game.add.sprite(430,740,'nextbtn');
         this.nextbtn.anchor.setTo(0.5);
         this.nextbtn.scale.setTo(0);
         // this.nextbtn.inputEnabled = true;
         // this.nextbtn.input.useHandCursor = true;
         this.nextbtn.events.onInputUp.add(this.enterRoom1, this);
         this.nextbtn.events.onInputOver.add(this.btnOver, this);
         this.nextbtn.events.onInputOut.add(this.btnOut, this);

        if (Main.shutterOn[0]) {
         this.shutter1 = game.add.sprite(0,0,'sbg1');
          this.shutter2 = game.add.sprite(252,596,'sbg2');
         this.shutter2.anchor.setTo(0.5);
         this.shouse = game.add.sprite(252,307.5,'shouse');
         this.shouse.anchor.setTo(0.5);
         this.bus1 = game.add.sprite(252,444,'bus');
         this.bus1.anchor.setTo(0.5);
          this.dtext1 = game.add.sprite(247.5,430,'dtext');
         this.dtext1.anchor.setTo(0.5);
         game.world.bringToTop(this.nextbtn);
          game.add.tween(this.nextbtn.scale).to({x:1,y:1}, 500, Phaser.Easing.Quadratic.Out, true).onComplete.add(function(){
           this.nextbtn.inputEnabled = true;
         this.nextbtn.input.useHandCursor = true;
         },this);
        }
        
         this.lightCount=0;
        
         this.logoVar = game.add.sprite(5, 5, 'logo');
         this.logoVar.scale.setTo(0.8);
         this.logoVar.inputEnabled = true
         this.logoVar.input.useHandCursor = true;
         this.logoVar.events.onInputUp.add(this.openLink, this);
         
         this.musicButton = game.add.sprite(427,5,"soundicon");
         this.musicButton.scale.setTo(0.9);
         this.musicButton.inputEnabled = true
         this.musicButton.input.useHandCursor = true;
         this.musicButton.events.onInputUp.add(this.changemusic, this);
         if (!game.sound.mute) {
               this.musicButton.frame = 0;
            }else{
               this.musicButton.frame = 1;
            }
            this.effectFlag=[this.etop1,this.ebotom1,this.edress1,this.ebag1,this.ebook1,this.ephone1,this.ewatch1,this.eglass1,this.rear_ring1,this.eshoe1,this.eglass1,this.efhair1];
        },
changemusic:function()
         {
            if (!game.sound.mute) {
               this.musicButton.frame = 1;
               game.sound.mute = true;
            }else{
               this.musicButton.frame = 0;
               game.sound.mute = false;
            };
         },
        enterRoom1:function(){
     game.add.tween(this.nextbtn.scale).to({x:0,y:0}, 500, Phaser.Easing.Quadratic.Out, true).onComplete.add(function(){
        this.nextbtn.visible=false;
     },this);
     game.add.tween(this.dtext1.scale).to({x:0,y:0}, 500, Phaser.Easing.Quadratic.Out, true).onComplete.add(function(){
     game.add.tween(this.bus1).to({x:-250}, 500, Phaser.Easing.Quadratic.Out, true).onComplete.add(function(){
          this.bus1.visible=false;
          this.bus1.x=750;
          game.add.tween(this.shouse).to({y:-850}, 1000, Phaser.Easing.Quadratic.Out, true);
         game.add.tween(this.shutter2).to({y:1500}, 1000, Phaser.Easing.Quadratic.Out, true);
         game.add.tween(this.shutter1).to({y:-850}, 1000, Phaser.Easing.Quadratic.Out, true);//.onComplete.add(this.startPopUp,this);
         },this);
         },this);
   
   },
           updateyeblink4:function(){
          this.eyeblink.play('eyeblink',10,false);
        },
        changefun:function(evt){
         this.anai[evt.cnt-1]=1;
          if(evt.cnt==1){
            this.etop1.alpha=1;
            this.ebotom1.alpha=1;
            this.edress1.alpha=0;
           
            Main.elsaAlpha[2]=0;
            Main.elsaAlpha[0]=1;
            Main.elsaAlpha[1]=1;

           /* if(Main.elsaAlpha[0]==1){
        // this.efbag1.visible=false;
        this.efbag2.visible=true;
        }*/
            
            this.etop1.loadTexture('etop000'+evt.id);
            Main.elsaFlag[0]=evt.id;

             if(Main.elsaFlag[0]==3&&Main.elsaAlpha[0]==1){
            this.efdress3.alpha=1;
            	this.efdress3.visible=true;
            }else{
            	this.efdress3.visible=false;
            this.efdress3.alpha=0;
            }

            if(Main.elsaFlag[2]==3&&Main.elsaAlpha[2]==1){
              this.efdress4.visible=true;
            }else{
              this.efdress4.visible=false;
            }

             effectssd = game.add.sprite(this.etop1.x,this.etop1.y,'effectssd');
        effectssd.anchor.setTo(0.5);
        effectssd.animations.add('effectssd');
        effectssd.animations.play('effectssd',20,false).onComplete.add(function(evt){
          evt.destroy();
        },this);
          }
          if(evt.cnt==2){
            this.etop1.alpha=1;
            this.ebotom1.alpha=1;
            this.edress1.alpha=0;
            
            Main.elsaAlpha[2]=0;
            Main.elsaAlpha[0]=1;
            Main.elsaAlpha[1]=1;

            if(Main.elsaFlag[0]==3&&Main.elsaAlpha[0]==1){
            this.efdress3.alpha=1;
            	this.efdress3.visible=true;
            }else{
            	this.efdress3.visible=false;
            this.efdress3.alpha=0;
            }

            if(Main.elsaFlag[2]==3&&Main.elsaAlpha[2]==1){
              this.efdress4.visible=true;
            }else{
              this.efdress4.visible=false;
            }

            /* if(Main.elsaAlpha[0]==1){
        // this.efbag1.visible=false;
         this.efbag2.visible=true;
        }*/
             
            this.ebotom1.loadTexture('ebotom000'+evt.id);
            Main.elsaFlag[1]=evt.id;

            effectssd = game.add.sprite(this.ebotom1.x,this.ebotom1.y,'effectssd');
        effectssd.anchor.setTo(0.5);
        effectssd.animations.add('effectssd');
        effectssd.animations.play('effectssd',20,false).onComplete.add(function(evt){
          evt.destroy();
        },this);
          }

          if(evt.cnt==3){
            this.edress1.alpha=1;
            this.etop1.alpha=0;
            this.ebotom1.alpha=0;
            
            
            Main.elsaAlpha[2]=1;
            Main.elsaAlpha[0]=0;
            Main.elsaAlpha[1]=0;

            /* if(Main.elsaAlpha[0]==0){
        // this.efbag1.visible=true;
        this.efbag2.visible=false;
        }*/
             
            this.edress1.loadTexture('edress000'+evt.id);
            Main.elsaFlag[2]=evt.id;

            if(Main.elsaFlag[2]==3&&Main.elsaAlpha[2]==1){
              this.efdress4.visible=true;
            }else{
              this.efdress4.visible=false;
            }

             if(Main.elsaFlag[0]==3&&Main.elsaAlpha[0]==1){
            this.efdress3.alpha=1;
            	this.efdress3.visible=true;
            }else{
            	this.efdress3.visible=false;
            this.efdress3.alpha=0;
            }

            effectssd = game.add.sprite(this.edress1.x,this.edress1.y,'effectssd');
        effectssd.anchor.setTo(0.5);
        effectssd.animations.add('effectssd');
        effectssd.animations.play('effectssd',20,false).onComplete.add(function(evt){
          evt.destroy();
        },this);
          }

          if(evt.cnt==4){
            
            this.efbag2.alpha=1;
            this.ebag1.alpha=1;
            this.efbag1.alpha=1;
            Main.elsaAlpha[3]=1;

            if(Main.elsaAlpha[0]==1){
        // this.efbag1.visible=false;
        this.efbag2.visible=true;
        }else{
          // this.efbag1.visible=true;
        this.efbag2.visible=false;
        }
            this.ebag1.loadTexture('ebag000'+evt.id);
            this.efbag1.loadTexture('efbag000'+evt.id);
            this.efbag2.loadTexture('efbag000'+evt.id);
            Main.elsaFlag[3]=evt.id;

            effectssd = game.add.sprite(this.ebag1.x,this.ebag1.y,'effectssd');
        effectssd.anchor.setTo(0.5);
        effectssd.animations.add('effectssd');
        effectssd.animations.play('effectssd',20,false).onComplete.add(function(evt){
          evt.destroy();
        },this);
          }

           if(evt.cnt==5){
            
            this.ephone1.alpha=0;
            this.ebook1.alpha=1;
            Main.elsaAlpha[5]=0;
            Main.elsaAlpha[4]=1;
            this.ebook1.loadTexture('ebook000'+evt.id);
            Main.elsaFlag[4]=evt.id;

            effectssd = game.add.sprite(this.ebook1.x,this.ebook1.y,'effectssd');
        effectssd.anchor.setTo(0.5);
        effectssd.animations.add('effectssd');
        effectssd.animations.play('effectssd',20,false).onComplete.add(function(evt){
          evt.destroy();
        },this);
          }
          if(evt.cnt==6){
            
            this.ebook1.alpha=0;
            this.ephone1.alpha=1;
            Main.elsaAlpha[4]=0;
            Main.elsaAlpha[5]=1;
            this.ephone1.loadTexture('ephone000'+evt.id);
            Main.elsaFlag[5]=evt.id;

            effectssd = game.add.sprite(this.ephone1.x,this.ephone1.y,'effectssd');
        effectssd.anchor.setTo(0.5);
        effectssd.animations.add('effectssd');
        effectssd.animations.play('effectssd',20,false).onComplete.add(function(evt){
          evt.destroy();
        },this);
          }

          if(evt.cnt==7){
            
            this.ewatch1.alpha=1;
            Main.elsaAlpha[6]=1;
            this.ewatch1.loadTexture('ewatch000'+evt.id);
            Main.elsaFlag[6]=evt.id;

             effectssd = game.add.sprite(this.ewatch1.x,this.ewatch1.y,'effectssd');
        effectssd.anchor.setTo(0.5);
        effectssd.animations.add('effectssd');
        effectssd.animations.play('effectssd',20,false).onComplete.add(function(evt){
          evt.destroy();
        },this);
          }

          if(evt.cnt==8){
            
            this.eglass1.alpha=1;
            Main.elsaAlpha[7]=1;
            this.eglass1.loadTexture('eglass000'+evt.id);
            Main.elsaFlag[7]=evt.id;

             effectssd = game.add.sprite(this.eglass1.x,this.eglass1.y-150,'effectssd');
        effectssd.anchor.setTo(0.5);
        effectssd.animations.add('effectssd');
        effectssd.animations.play('effectssd',20,false).onComplete.add(function(evt){
          evt.destroy();
        },this);
          }

          if(evt.cnt==9){

              if(Main.elsaFlag[10]==1||Main.elsaFlag[10]==3||Main.elsaFlag[10]==5){
        this.rear_ring1.visible=false;
        this.lear_ring1.visible=false;
        this.lear_ring2.visible=false;
  
         }
         if(Main.elsaFlag[10]==2){
        this.rear_ring1.visible=false;
        this.lear_ring1.visible=true;
        this.lear_ring2.visible=false;
  
         }
         if(Main.elsaFlag[10]==4){
        this.rear_ring1.visible=false;
        this.lear_ring1.visible=false;
        this.lear_ring2.visible=true;
         }
            
            this.echain1.alpha=1;
            this.lear_ring2.alpha=1;
            this.lear_ring1.alpha=1;
            this.rear_ring1.alpha=1;
            Main.elsaAlpha[8]=1;
            this.lear_ring2.loadTexture('lear_ring000'+evt.id);
            this.lear_ring1.loadTexture('lear_ring000'+evt.id);
            this.rear_ring1.loadTexture('rear_ring000'+evt.id);
            this.echain1.loadTexture('echain000'+evt.id);
            Main.elsaFlag[8]=evt.id;

            effectssd = game.add.sprite(this.lear_ring1.x,this.lear_ring1.y,'effectssd');
        effectssd.anchor.setTo(0.5);
        effectssd.animations.add('effectssd');
        effectssd.animations.play('effectssd',20,false).onComplete.add(function(evt){
          evt.destroy();
        },this);


          }

           if(evt.cnt==10){
            
            this.eshoe1.alpha=1;
            Main.elsaAlpha[9]=1;
            this.eshoe1.loadTexture('eshoe000'+evt.id);
            Main.elsaFlag[9]=evt.id;

             effectssd = game.add.sprite(this.eshoe1.x,this.eshoe1.y+100,'effectssd');
        effectssd.anchor.setTo(0.5);
        effectssd.animations.add('effectssd');
        effectssd.animations.play('effectssd',20,false).onComplete.add(function(evt){
          evt.destroy();
        },this);
          }

           if(evt.cnt==11){


            
            this.ebhair1.alpha=1;
            this.efhair1.alpha=1;
            Main.elsaAlpha[10]=1;
            this.ebhair1.loadTexture('ebhair000'+evt.id);
            this.efhair1.loadTexture('efhair000'+evt.id);
            Main.elsaFlag[10]=evt.id;
              if(Main.elsaFlag[10]==1||Main.elsaFlag[10]==3||Main.elsaFlag[10]==5){
        this.rear_ring1.visible=false;
        this.lear_ring1.visible=false;
        this.lear_ring2.visible=false;
  
         }
         if(Main.elsaFlag[10]==2){
        this.rear_ring1.visible=false;
        this.lear_ring1.visible=true;
        this.lear_ring2.visible=false;
  
         }
         if(Main.elsaFlag[10]==4){
        this.rear_ring1.visible=false;
        this.lear_ring1.visible=false;
        this.lear_ring2.visible=true;
         }

         effectssd = game.add.sprite(this.efhair1.x,this.efhair1.y,'effectssd');
        effectssd.anchor.setTo(0.5);
        effectssd.animations.add('effectssd');
        effectssd.animations.play('effectssd',20,false).onComplete.add(function(evt){
          evt.destroy();
        },this);
        
          }

           //if(this.anai.indexOf(0)<0){
         game.add.tween(this.playbtn.scale).to({x:0.8,y:0.8},800,Phaser.Easing.Elastic.Out,true);
      // }

       /* effectssd = game.add.sprite(this.effectFlag[evt.cnt-1].worldPosition.x,this.effectFlag[evt.cnt-1].worldPosition.y,'effectssd');
        effectssd.anchor.setTo(0.5);
        effectssd.animations.add('effectssd');
        effectssd.animations.play('effectssd',20,false).onComplete.add(function(evt){
          evt.destroy();
        },this);*/
         

        },
        groupfun:function(evt){
        if(evt.id==1){
          this.cnt1=1;
          this.dicon1.inputEnabled=false;
          	this.dicon1.input.useHandCursor=false;
          this.fbtn2.visible=true;
          this.bcbtn2.visible=false;
          this.icongp1.visible=true;
          this.icongp2.visible=false;
          this.icongp3.visible=false;
          //this.icongp4.visible=false;
          this.icongp5.visible=false;
          this.icongp6.visible=false;
          this.icongp7.visible=false;
          this.icongp8.visible=false;
        }
        if(evt.id==2){
        	this.dicon1.inputEnabled=true;
          	this.dicon1.input.useHandCursor=true;
          this.fbtn2.visible=false;
          this.bcbtn2.visible=false;
          this.icongp1.visible=false;
          this.icongp2.visible=false;
          this.icongp3.visible=false;
         // this.icongp4.visible=false;
          this.icongp5.visible=false;
          this.icongp6.visible=false;
          this.icongp7.visible=false;
          this.icongp8.visible=true;
        }
        if(evt.id==3){
        	this.dicon1.inputEnabled=true;
          	this.dicon1.input.useHandCursor=true;
          this.fbtn2.visible=false;
          this.bcbtn2.visible=false;
          this.icongp1.visible=false;
          this.icongp2.visible=false;
          this.icongp3.visible=false;
          //this.icongp4.visible=false;
          this.icongp5.visible=false;
          this.icongp6.visible=false;
          this.icongp7.visible=true;
          this.icongp8.visible=false;
        }
        if(evt.id==4){
        	this.dicon1.inputEnabled=true;
          	this.dicon1.input.useHandCursor=true;
          this.fbtn2.visible=false;
          this.bcbtn2.visible=false;
          this.icongp1.visible=false;
          this.icongp2.visible=false;
          this.icongp3.visible=false;
          //this.icongp4.visible=false;
          this.icongp5.visible=false;
          this.icongp6.visible=true;
          this.icongp7.visible=false;
          this.icongp8.visible=false;
        }
        if(evt.id==5){
        	this.dicon1.inputEnabled=true;
          	this.dicon1.input.useHandCursor=true;
          this.fbtn2.visible=false;
          this.bcbtn2.visible=false;
          this.icongp1.visible=false;
          this.icongp2.visible=false;
          this.icongp3.visible=false;
         // this.icongp4.visible=true;
          this.icongp5.visible=false;
          this.icongp6.visible=false;
          this.icongp7.visible=false;
          this.icongp8.visible=false;
        }
        if(evt.id==6){
        	this.dicon1.inputEnabled=true;
          	this.dicon1.input.useHandCursor=true;
          this.fbtn2.visible=false;
          this.bcbtn2.visible=false;
          this.icongp1.visible=false;
          this.icongp2.visible=false;
          this.icongp3.visible=false;
          //this.icongp4.visible=false;
          this.icongp5.visible=true;
          this.icongp6.visible=false;
          this.icongp7.visible=false;
          this.icongp8.visible=false;
        }
        },
openLink:function()
{
   CreateLinksInGame("Disney-Princess-School-Fashion","game","logo");
},
moreLink:function()
{
   CreateLinksInGame("Disney-Princess-School-Fashion","game","more");
},
btnOver:function(items){
  items.scale.setTo(items.scale.x+0.05);
      effectVar = game.add.sprite(items.x-30,items.y-80,'effects'); 
   effectVar.anchor.setTo(0.5);
   effectVar.scale.setTo(2);
   effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
   effectVar.animations.play('glitter', 30, false);
   },
btnOut:function(items){
     items.scale.setTo(items.scale.x-0.05);

   },
removeGlitter:function(evt){
      evt.kill(); 
      },
       enterRoom:function(){
   game.add.tween(this.shouse).to({y:307.5}, 1000, Phaser.Easing.Quadratic.Out, true);
         game.add.tween(this.shutter2).to({y:596}, 1000, Phaser.Easing.Quadratic.Out, true);
         game.add.tween(this.shutter1).to({y:0}, 1000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function(){
          this.bus1.visible=true;
         game.add.tween(this.bus1).to({x:252}, 500, Phaser.Easing.Quadratic.Out, true).onComplete.add(function(){
         game.add.tween(this.dtext1.scale).to({x:1,y:1}, 500, Phaser.Easing.Quadratic.Out, true).onComplete.add(function(){
   if(Main.selectionFlag[0]==1&&Main.selectionFlag[1]==1&&Main.selectionFlag[2]==1&&Main.selectionFlag[3]==1){
    game.state.start('finascreen');
   }else{
   game.state.start('selection_screen');
   }   
         },this);
         },this);
         },this);
   
   },
}

Main.finascreen = function(){}

Main.finascreen.prototype = {
    create:function(){
      this.anai=[0,0,0,0,0,0,0,0,0,0,0];
         this.levelGroup = game.add.group();
         this.introbg = game.add.sprite(0,0,'tbg');
         this.levelGroup.add(this.introbg);


       

        
       this.argroup = game.add.group();


        /*this.arbag1 = game.add.sprite(375.25,282.95,'arbag000'+Main.arielFlag[3]);
        this.arbag1.anchor.setTo(0.5);
        this.arbag1.alpha=Main.arielAlpha[3];
        this.argroup.add(this.arbag1);*/

       this.arbhair1 = game.add.sprite(381.5,193.05,'arbhair000'+Main.arielFlag[10]);
        this.arbhair1.anchor.setTo(0.5);
        this.argroup.add(this.arbhair1);

        this.arbody = game.add.sprite(356.85,459.45,'arbody');
        this.arbody.anchor.setTo(0.5);
        this.argroup.add(this.arbody);

         this.inner1 = game.add.sprite(384,341,'inner1');
         this.inner1.anchor.setTo(0.5);
         this.inner1.alpha=Main.arielAlpha[11];
        this.argroup.add(this.inner1);

        this.inner2 = game.add.sprite(382,343.95,'inner2');
         this.inner2.anchor.setTo(0.5);
        this.inner2.alpha=Main.arielAlpha[12];
        this.argroup.add(this.inner2);

        this.arshoe1 = game.add.sprite(346.95,663.85,'arshoe000'+Main.arielFlag[9]);
        this.arshoe1.anchor.setTo(0.5);
        this.arshoe1.alpha=Main.arielAlpha[9];
        this.argroup.add(this.arshoe1);

        this.ardress1 = game.add.sprite(391,366.5,'ardress000'+Main.arielFlag[2]);
        this.ardress1.anchor.setTo(0.5);
        this.ardress1.alpha=Main.arielAlpha[2];
        this.argroup.add(this.ardress1);

        this.artop1 = game.add.sprite(377.55,292,'artop000'+Main.arielFlag[0]);
        this.artop1.anchor.setTo(0.5);
        this.artop1.alpha=Main.arielAlpha[0];
        this.argroup.add(this.artop1);

        this.arbotom1 = game.add.sprite(377,435,'arbotom000'+Main.arielFlag[1]);
        this.arbotom1.anchor.setTo(0.5);
        this.arbotom1.alpha=Main.arielAlpha[1];
        this.argroup.add(this.arbotom1);

        

        /*this.arfbag1 = game.add.sprite(376.6,264.5,'arfbag000'+Main.arielFlag[3]);
        this.arfbag1.anchor.setTo(0.5);
        this.arfbag1.alpha=Main.arielAlpha[3];
        this.argroup.add(this.arfbag1);*/

        this.archain1 = game.add.sprite(379.75,222.5,'archain000'+Main.arielFlag[8]);
        this.archain1.anchor.setTo(0.5);
        this.archain1.alpha=Main.arielAlpha[8];
        this.argroup.add(this.archain1);

        this.arhand = game.add.sprite(389.6,395.25,'arhand');
        this.arhand.anchor.setTo(0.5);
        this.argroup.add(this.arhand);

        this.arbook1 = game.add.sprite(324.95,470,'arbook000'+Main.arielFlag[4]);
        this.arbook1.anchor.setTo(0.5);
        this.arbook1.angle=-90;
        this.arbook1.alpha=Main.arielAlpha[4];
        this.argroup.add(this.arbook1);

         this.arphone1 = game.add.sprite(325.85,460.8,'arphone000'+Main.arielFlag[5]);
        this.arphone1.anchor.setTo(0.5);
        this.arphone1.scale.setTo(1.3);
        this.arphone1.alpha=Main.arielAlpha[5];
        this.argroup.add(this.arphone1);

        this.arfinger = game.add.sprite(318.2,458.55,'arfinger');
        this.arfinger.anchor.setTo(0.5);
        this.argroup.add(this.arfinger);
        
         this.arwatch1 = game.add.sprite(317.3,406.9,'arwatch000'+Main.arielFlag[6]);
        this.arwatch1.anchor.setTo(0.5);
        this.arwatch1.alpha=Main.arielAlpha[6];
        this.argroup.add(this.arwatch1);

        
          this.arhead = game.add.sprite(382.9,140.1,'arhead');
        this.arhead.anchor.setTo(0.5);
        this.argroup.add(this.arhead);

         this.areyeblink = game.add.sprite(382.9,148.65,'areyeblink');
         this.areyeblink.anchor.setTo(0.5);       
         this.areyeblink.animations.add('areyeblink').onComplete.add(function(){
          this.areyeblink.frame = 0;
        },this);
         this.areyeblink.animations.play('areyeblink',10,false);
         game.time.events.loop(3000,this.updateyeblink3,this);        
         this.argroup.add(this.areyeblink);
        

          this.arfhair1 = game.add.sprite(383.1,188.75,'arfhair000'+Main.arielFlag[10]);
        this.arfhair1.anchor.setTo(0.5);
        this.argroup.add(this.arfhair1);

         this.alrear_ring1 = game.add.sprite(383.8,162.85,'alrear_ring000'+Main.arielFlag[8]);
        this.alrear_ring1.anchor.setTo(0.5);
        this.alrear_ring1.alpha=Main.arielAlpha[8];
        this.argroup.add(this.alrear_ring1);

        this.arrear_ring1 = game.add.sprite(383.8,162.85,'arrear_ring000'+Main.arielFlag[8]);
        this.arrear_ring1.anchor.setTo(0.5);
        this.arrear_ring1.alpha=Main.arielAlpha[8];
        this.argroup.add(this.arrear_ring1);

        this.arglass1 = game.add.sprite(384.25,150.45,'arglass000'+Main.arielFlag[7]);
        this.arglass1.anchor.setTo(0.5);
        this.arglass1.alpha=Main.arielAlpha[7];
        this.argroup.add(this.arglass1);


         this.egroup = game.add.group();


        /*this.ebag1 = game.add.sprite(382.9,327.05,'ebag000'+Main.elsaFlag[3]);
        this.ebag1.anchor.setTo(0.5);
        this.ebag1.alpha=Main.elsaAlpha[3];
        this.egroup.add(this.ebag1);*/

       this.ebhair1 = game.add.sprite(378.5,205,'ebhair000'+Main.elsaFlag[10]);
        this.ebhair1.anchor.setTo(0.5);
        this.egroup.add(this.ebhair1);

        this.ebody = game.add.sprite(361.15,471.9,'ebody');
        this.ebody.anchor.setTo(0.5);
        this.egroup.add(this.ebody);

         this.inner1 = game.add.sprite(390,350,'inner1');
         this.inner1.anchor.setTo(0.5);
         this.inner1.alpha=Main.elsaAlpha[11];
        this.egroup.add(this.inner1);

        this.inner2 = game.add.sprite(391,343.95,'inner2');
         this.inner2.anchor.setTo(0.5);
        this.inner2.alpha=Main.elsaAlpha[12];
        this.egroup.add(this.inner2);

        this.eshoe1 = game.add.sprite(350.7,556,'eshoe000'+Main.elsaFlag[9]);
        this.eshoe1.anchor.setTo(0.5);
        this.eshoe1.alpha=Main.elsaAlpha[9];
        this.egroup.add(this.eshoe1);

        this.edress1 = game.add.sprite(388.25,366.5,'edress000'+Main.elsaFlag[2]);
        this.edress1.anchor.setTo(0.5);
        this.edress1.alpha=Main.elsaAlpha[2];
        this.egroup.add(this.edress1);

      

        this.ebotom1 = game.add.sprite(408,534,'ebotom000'+Main.elsaFlag[1]);
        this.ebotom1.anchor.setTo(0.5);
        this.ebotom1.alpha=Main.elsaAlpha[1];
        this.egroup.add(this.ebotom1);

         this.ebook1 = game.add.sprite(335.25,450.15,'ebook000'+Main.elsaFlag[4]);
        this.ebook1.anchor.setTo(0.5);
        this.ebook1.alpha=Main.elsaAlpha[4];
        this.egroup.add(this.ebook1);

        this.ephone1 = game.add.sprite(327.85,446.45,'ephone000'+Main.elsaFlag[5]);
        this.ephone1.anchor.setTo(0.5);
        this.ephone1.scale.setTo(1.2);
        this.ephone1.alpha=Main.elsaAlpha[5];
        this.egroup.add(this.ephone1);

       /* this.efbag1 = game.add.sprite(387.5,308.55,'efbag000'+Main.elsaFlag[3]);
        this.efbag1.anchor.setTo(0.5);
        this.efbag1.alpha=Main.elsaAlpha[3];
        this.egroup.add(this.efbag1);*/

        this.ehand = game.add.sprite(393,408.05,'ehand');
        this.ehand.anchor.setTo(0.5);
        this.egroup.add(this.ehand);

        this.efdress4 = game.add.sprite(388.25,366.5,'efdress4');
        this.efdress4.anchor.setTo(0.5);
        this.efdress4.visible=false;
        this.egroup.add(this.efdress4);

        this.etop1 = game.add.sprite(388.9,333.1,'etop000'+Main.elsaFlag[0]);
        this.etop1.anchor.setTo(0.5);
        this.etop1.alpha=Main.elsaAlpha[0];
        this.egroup.add(this.etop1);

        
        /*this.efbag2 = game.add.sprite(387.5,308.55,'efbag000'+Main.elsaFlag[3]);
        this.efbag2.anchor.setTo(0.5);
        this.efbag2.alpha=Main.elsaAlpha[3];
        this.efbag2.visible=false;
        this.egroup.add(this.efbag2);*/

        /*this.brect = game.add.graphics(333,200);
        this.brect.beginFill(0x000000,0.5);
        this.brect.drawRect(0,0,111,190);
        this.efbag2.mask = this.brect;
        this.egroup.add(this.brect);*/

        this.efdress3 = game.add.sprite(388.9,333.1,'efdress3');
        this.efdress3.anchor.setTo(0.5);
        this.efdress3.visible=false;
        this.efdress3.alpha=Main.elsaAlpha[0];
        this.egroup.add(this.efdress3);

        
        this.echain1 = game.add.sprite(383,240,'echain000'+Main.elsaFlag[8]);
        this.echain1.anchor.setTo(0.5);
        this.echain1.alpha=Main.elsaAlpha[8];
        this.egroup.add(this.echain1);

        this.ehead = game.add.sprite(386.15,154,'ehead');
        this.ehead.anchor.setTo(0.5);
        this.egroup.add(this.ehead);

         this.eyeblink = game.add.sprite(385.7,159.55,'eyeblink');
         this.eyeblink.anchor.setTo(0.5);       
         this.eyeblink.animations.add('eyeblink').onComplete.add(function(){
          this.eyeblink.frame = 0;
        },this);
         this.eyeblink.animations.play('eyeblink',10,false);
         game.time.events.loop(3100,this.updateyeblink4,this);        
         this.egroup.add(this.eyeblink);

         this.lear_ring2 = game.add.sprite(386.6,185.5,'lear_ring000'+Main.elsaFlag[8]);
        this.lear_ring2.anchor.setTo(0.5);
        this.lear_ring2.alpha=Main.elsaAlpha[8];
        this.lear_ring2.visible=false;
        this.egroup.add(this.lear_ring2);
       

        this.efhair1 = game.add.sprite(380,205,'efhair000'+Main.elsaFlag[10]);
        this.efhair1.anchor.setTo(0.5);
        this.egroup.add(this.efhair1);

         this.eglass1 = game.add.sprite(391.7,329.85,'eglass000'+Main.elsaFlag[7]);
        this.eglass1.anchor.setTo(0.5);
        this.eglass1.alpha=Main.elsaAlpha[7];
        this.egroup.add(this.eglass1);

        this.ewatch1 = game.add.sprite(321.8,426.55,'ewatch000'+Main.elsaFlag[6]);
        this.ewatch1.anchor.setTo(0.5);
        this.ewatch1.alpha=Main.elsaAlpha[6];
        this.egroup.add(this.ewatch1);

        
        this.lear_ring1 = game.add.sprite(386.6,185.5,'lear_ring000'+Main.elsaFlag[8]);
        this.lear_ring1.anchor.setTo(0.5);
        this.lear_ring1.alpha=Main.elsaAlpha[8];
        this.egroup.add(this.lear_ring1);

        this.rear_ring1 = game.add.sprite(386.6,185.5,'rear_ring000'+Main.elsaFlag[8]);
        this.rear_ring1.anchor.setTo(0.5);
        this.rear_ring1.alpha=Main.elsaAlpha[8];
        this.egroup.add(this.rear_ring1);


       this.rgroup = game.add.group();


        /*this.rbag1 = game.add.sprite(363.3,284.8,'rbag000'+Main.rapunzelFlag[3]);
        this.rbag1.anchor.setTo(0.5);
        this.rbag1.alpha=Main.rapunzelAlpha[3];
        this.rgroup.add(this.rbag1);*/

       this.rbhair1 = game.add.sprite(372.3,185.8,'rbhair000'+Main.rapunzelFlag[10]);
        this.rbhair1.anchor.setTo(0.5);
        this.rgroup.add(this.rbhair1);

        this.rbody = game.add.sprite(341.5,481.45,'rbody');
        this.rbody.anchor.setTo(0.5);
        this.rgroup.add(this.rbody);

         this.inner1 = game.add.sprite(372,347,'inner1');
         this.inner1.anchor.setTo(0.5);
         this.inner1.alpha=Main.rapunzelAlpha[11];
        this.rgroup.add(this.inner1);

        this.inner2 = game.add.sprite(373,343.95,'inner2');
         this.inner2.anchor.setTo(0.5);
        this.inner2.alpha=Main.rapunzelAlpha[12];
        this.rgroup.add(this.inner2);

        this.rshoe1 = game.add.sprite(331.05,698.05,'rshoe000'+Main.rapunzelFlag[9]);
        this.rshoe1.anchor.setTo(0.5);
        this.rshoe1.alpha=Main.rapunzelAlpha[9];
        this.rgroup.add(this.rshoe1);

       

        this.rdress1 = game.add.sprite(384,398,'rdress000'+Main.rapunzelFlag[2]);
        this.rdress1.anchor.setTo(0.5);
        this.rdress1.alpha=Main.rapunzelAlpha[2];
        this.rgroup.add(this.rdress1);

        this.rbotom1 = game.add.sprite(352,530,'rbotom000'+Main.rapunzelFlag[1]);
        this.rbotom1.anchor.setTo(0.5);
        this.rbotom1.scale.setTo(0.98);
        this.rbotom1.alpha=Main.rapunzelAlpha[1];
        this.rgroup.add(this.rbotom1);

         this.rhand = game.add.sprite(376.15,418.3,'rhand');
        this.rhand.anchor.setTo(0.5);
        this.rgroup.add(this.rhand);

        this.rtop1 = game.add.sprite(371,312.35,'rtop000'+Main.rapunzelFlag[0]);
        this.rtop1.anchor.setTo(0.5);
        this.rtop1.alpha=Main.rapunzelAlpha[0];
        this.rgroup.add(this.rtop1);
         
        this.rchain1 = game.add.sprite(373,236.45,'rchain000'+Main.rapunzelFlag[8]);
        this.rchain1.anchor.setTo(0.5);
        this.rchain1.alpha=Main.rapunzelAlpha[8];
        this.rgroup.add(this.rchain1);


        /* this.rfbag1 = game.add.sprite(365.7,288.15,'rfbag000'+Main.rapunzelFlag[3]);
        this.rfbag1.anchor.setTo(0.5);
        this.rfbag1.alpha=Main.rapunzelAlpha[3];
        this.rgroup.add(this.rfbag1);*/

        
         this.rphone1 = game.add.sprite(315.85,480.95,'rphone000'+Main.rapunzelFlag[5]);
        this.rphone1.anchor.setTo(0.5);
        this.rphone1.scale.setTo(1.2);
        this.rphone1.alpha=Main.rapunzelAlpha[5];
        this.rgroup.add(this.rphone1);
        
         this.rwatch1 = game.add.sprite(297.3,427.3,'rwatch000'+Main.rapunzelFlag[6]);
        this.rwatch1.anchor.setTo(0.5);
        this.rwatch1.alpha=Main.rapunzelAlpha[6];
        this.rgroup.add(this.rwatch1);

        this.rfinger = game.add.sprite(300.5,476.7,'rfinger');
        this.rfinger.anchor.setTo(0.5);
        this.rgroup.add(this.rfinger);

        this.rbook1 = game.add.sprite(461.65,504.7,'rbook000'+Main.rapunzelFlag[4]);
        this.rbook1.anchor.setTo(0.5);
        this.rbook1.alpha=Main.rapunzelAlpha[4];
        this.rgroup.add(this.rbook1);

        this.rfinger2 = game.add.sprite(448.8,476.2,'rfinger2');
        this.rfinger2.anchor.setTo(0.5);
        this.rgroup.add(this.rfinger2);
        
        
          this.rhead = game.add.sprite(364.75,148,'rhead');
        this.rhead.anchor.setTo(0.5);
        this.rgroup.add(this.rhead);

         this.reyeblink = game.add.sprite(365.5,145,'reyeblink');
         this.reyeblink.anchor.setTo(0.5);       
         this.reyeblink.animations.add('reyeblink').onComplete.add(function(){
          this.reyeblink.frame = 0;
        },this);
         this.reyeblink.animations.play('reyeblink',10,false);
         game.time.events.loop(2800,this.updateyeblink2,this);        
         this.rgroup.add(this.reyeblink);
        
        this.rglass1 = game.add.sprite(366,153.25,'rglass000'+Main.rapunzelFlag[7]);
        this.rglass1.anchor.setTo(0.5);
        this.rglass1.alpha=Main.rapunzelAlpha[7];
        this.rgroup.add(this.rglass1);

        this.rfhair1 = game.add.sprite(369,185.8,'rfhair000'+Main.rapunzelFlag[10]);
        this.rfhair1.anchor.setTo(0.5);
        this.rgroup.add(this.rfhair1);

         this.rlear_ring1 = game.add.sprite(366,169.2,'rlear_ring000'+Main.rapunzelFlag[8]);
        this.rlear_ring1.anchor.setTo(0.5);
        this.rlear_ring1.alpha=Main.rapunzelAlpha[8];
        this.rgroup.add(this.rlear_ring1);

        this.rrear_ring1 = game.add.sprite(366,171.2,'rrear_ring000'+Main.rapunzelFlag[8]);
        this.rrear_ring1.anchor.setTo(0.5);
        this.rrear_ring1.alpha=Main.rapunzelAlpha[8];
        this.rgroup.add(this.rrear_ring1);


         this.agroup = game.add.group();

       /* this.bbag1 = game.add.sprite(382.05,281.55,'bbag000'+Main.annaFlag[3]);
        this.bbag1.anchor.setTo(0.5);
        this.bbag1.alpha=Main.annaAlpha[3];
        this.agroup.add(this.bbag1);*/

         this.abhair1 = game.add.sprite(371.75,198.1,'abhair000'+Main.annaFlag[10]);
         this.abhair1.anchor.setTo(0.5);
        this.agroup.add(this.abhair1);

        this.abody = game.add.sprite(348.05,470.75,'abody');
         this.abody.anchor.setTo(0.5);
        this.agroup.add(this.abody);

         this.inner1 = game.add.sprite(377.6,343.95,'inner1');
         this.inner1.anchor.setTo(0.5);
         this.inner1.alpha=Main.annaAlpha[11];
        this.agroup.add(this.inner1);

        this.inner2 = game.add.sprite(377.6,343.95,'inner2');
         this.inner2.anchor.setTo(0.5);
         this.inner2.alpha=Main.annaAlpha[12];
        this.agroup.add(this.inner2);

        this.ashoe1 = game.add.sprite(337.95,680.1,'ashoe000'+Main.annaFlag[9]);
        this.ashoe1.anchor.setTo(0.5);
        this.ashoe1.alpha=Main.annaAlpha[9];
        this.agroup.add(this.ashoe1);

        this.adress1 = game.add.sprite(380.2,369.75,'adress000'+Main.annaFlag[2]);
        this.adress1.anchor.setTo(0.5);
        this.adress1.alpha=Main.annaAlpha[2];
        this.agroup.add(this.adress1);

        this.atop1 = game.add.sprite(366.9,301.25,'atop000'+Main.annaFlag[0]);
        this.atop1.anchor.setTo(0.5);
        this.atop1.alpha=Main.annaAlpha[0];
        this.agroup.add(this.atop1);

        this.abotom1 = game.add.sprite(379.35,435.85,'abotom000'+Main.annaFlag[1]);
        this.abotom1.anchor.setTo(0.5);
        this.abotom1.scale.setTo(0.98);
        this.abotom1.alpha=Main.annaAlpha[1];
        this.agroup.add(this.abotom1);

        


         /*this.fbag1 = game.add.sprite(369.2,273.3,'fbag000'+Main.annaFlag[3]);
        this.fbag1.anchor.setTo(0.5);
        this.fbag1.alpha=Main.annaAlpha[3];
        this.agroup.add(this.fbag1);*/

        this.achain1 = game.add.sprite(372.55,234,'achain000'+Main.annaFlag[8]);
        this.achain1.anchor.setTo(0.5);
        this.achain1.alpha=Main.annaAlpha[8];
        this.agroup.add(this.achain1);

        this.ahand = game.add.sprite(381.6,405.1,'ahand');
        this.ahand.anchor.setTo(0.5);
        this.agroup.add(this.ahand);

        this.abook1 = game.add.sprite(309.95,485.2,'abook000'+Main.annaFlag[4]);
        this.abook1.anchor.setTo(0.5);
        this.abook1.angle=-90;
        this.abook1.alpha=Main.annaAlpha[4];
        this.agroup.add(this.abook1);

        this.aphone1 = game.add.sprite(316.4,475.05,'aphone000'+Main.annaFlag[5]);
        this.aphone1.anchor.setTo(0.5);
        this.aphone1.scale.setTo(1.2);
        this.aphone1.alpha=Main.annaAlpha[5];
        this.agroup.add(this.aphone1);

        this.afinger = game.add.sprite(308.55,470.75,'afinger');
        this.afinger.anchor.setTo(0.5);
        this.agroup.add(this.afinger);

         this.awatch1 = game.add.sprite(308.1,420.25,'awatch000'+Main.annaFlag[6]);
        this.awatch1.anchor.setTo(0.5);
        this.awatch1.alpha=Main.annaAlpha[6];
        this.agroup.add(this.awatch1);

         this.ahead = game.add.sprite(373.3,150.7,'ahead');
        this.ahead.anchor.setTo(0.5);
        this.agroup.add(this.ahead);

         this.aeyeblink = game.add.sprite(371.45,155.75,'aeyeblink');
         this.aeyeblink.anchor.setTo(0.5);       
         this.aeyeblink.animations.add('aeyeblink').onComplete.add(function(){
          this.aeyeblink.frame = 0;
        },this);
         this.aeyeblink.animations.play('aeyeblink',10,false);
         game.time.events.loop(2700,this.updateyeblink1,this);        
         this.agroup.add(this.aeyeblink);

        this.afhair1 = game.add.sprite(371.75,199.1,'afhair000'+Main.annaFlag[10]);
        this.afhair1.anchor.setTo(0.5);
        this.agroup.add(this.afhair1);

        /*this.rect = game.add.graphics(0,0);
        this.rect.beginFill(0x000000,0.5);
        this.rect.drawRect(0,0,504,800);
        this.agroup.add(this.rect);*/

        this.aear_ring1 = game.add.sprite(375,172,'aear_ring000'+Main.annaFlag[8]);
        this.aear_ring1.anchor.setTo(0.5);
        this.aear_ring1.alpha=Main.annaAlpha[8];
        this.agroup.add(this.aear_ring1);

        this.arear_ring1 = game.add.sprite(375,173,'arear_ring000'+Main.annaFlag[8]);
        this.arear_ring1.anchor.setTo(0.5);
        this.arear_ring1.alpha=Main.annaAlpha[8];
        this.agroup.add(this.arear_ring1);

        this.aglass1 = game.add.sprite(371.95,158.05,'aglass000'+Main.annaFlag[7]);
        this.aglass1.anchor.setTo(0.5);
        this.aglass1.alpha=Main.annaAlpha[7];
        this.agroup.add(this.aglass1);



        this.egroup.scale.setTo(0.8);
        this.egroup.x=-630;
        this.egroup.y=52;

        this.argroup.scale.setTo(0.8);
        this.argroup.x=-530;
        this.argroup.y=63;

        this.rgroup.scale.setTo(0.8);
        this.rgroup.scale.x=-this.rgroup.scale.x;
        this.rgroup.x=1120;
        this.rgroup.y=56;

        this.agroup.scale.setTo(0.8);
        this.agroup.scale.x=-this.agroup.scale.x;
        this.agroup.x=1220;
        this.agroup.y=52;

        /* game.add.tween(this.argroup).to({x:-130},700,Phaser.Easing.Quadratic.Out,true).onComplete.add(function(){
          game.add.tween(this.rgroup).to({x:620},700,Phaser.Easing.Quadratic.Out,true).onComplete.add(function(){
          game.add.tween(this.egroup).to({x:-230},700,Phaser.Easing.Quadratic.Out,true).onComplete.add(function(){
          game.add.tween(this.agroup).to({x:720},700,Phaser.Easing.Quadratic.Out,true).onComplete.add(function(){
          
        },this);
        },this);
        },this);
        },this);*/

         if(Main.elsaFlag[2]==3&&Main.elsaAlpha[2]==1){
              this.efdress4.visible=true;
            }else{
              this.efdress4.visible=false;
            }


           if(Main.rapunzelFlag[0]==3){
        	this.rtop1.x=369;
        	this.rtop1.y=312.35;
        }else{
        this.rtop1.x=371;
        	this.rtop1.y=312.35;	
        }
        
    
         if(Main.annaFlag[0]==2||Main.annaFlag[0]==3||Main.annaFlag[0]==1){
        this.atop1.x=366.9;
        this.atop1.y=302.25;
        }

        

            

             if(Main.rapunzelFlag[10]==1){
        this.rrear_ring1.visible=false;
        this.rlear_ring1.visible=true;
  
         }
         if(Main.rapunzelFlag[10]==3||Main.rapunzelFlag[10]==2){
        this.rrear_ring1.visible=true;
        this.rlear_ring1.visible=true;
  
         }
         if(Main.rapunzelFlag[10]==4||Main.rapunzelFlag[10]==5){
        this.rrear_ring1.visible=true;
        this.rlear_ring1.visible=false;
  
         }


         if(Main.arielFlag[10]==1){
        this.arrear_ring1.visible=false;
        this.alrear_ring1.visible=true;
  
         }
         if(Main.arielFlag[10]==3||Main.arielFlag[10]==2||Main.arielFlag[10]==4){
        this.arrear_ring1.visible=true;
        this.alrear_ring1.visible=true;
  
         }
         if(Main.arielFlag[10]==5){
        this.arrear_ring1.visible=false;
        this.alrear_ring1.visible=true;
  
         }

         



    /* if(Main.elsaAlpha[0]==1){
        this.efbag1.visible=false;
        this.efbag2.visible=true;
        }else{
          this.efbag1.visible=true;
        this.efbag2.visible=false;
        }*/

         

          if(Main.elsaFlag[10]==1||Main.elsaFlag[10]==3||Main.elsaFlag[10]==5){
        this.rear_ring1.visible=false;
        this.lear_ring1.visible=false;
        this.lear_ring2.visible=false;
  
         }
         if(Main.elsaFlag[10]==2){
        this.rear_ring1.visible=false;
        this.lear_ring1.visible=true;
        this.lear_ring2.visible=false;
  
         }
         if(Main.elsaFlag[10]==4){
        this.rear_ring1.visible=false;
        this.lear_ring1.visible=false;
        this.lear_ring2.visible=true;
         }

         if(Main.elsaFlag[0]==3&&Main.elsaAlpha[0]==1){
            this.efdress3.alpha=1;
            	this.efdress3.visible=true;
            }else{
            	this.efdress3.visible=false;
            this.efdress3.alpha=0;
            }

         if(Main.annaFlag[10]==1||Main.annaFlag[10]==2){
            	this.aear_ring1.visible=false;
            	this.arear_ring1.visible=false;
            }
            if(Main.annaFlag[10]==3){
            	this.aear_ring1.visible=true;
            	this.arear_ring1.visible=true;
            }
            if(Main.annaFlag[10]==4){
            	this.aear_ring1.visible=false;
            	this.arear_ring1.visible=true;
            }
            if(Main.annaFlag[10]==5){
            	this.aear_ring1.visible=true;
            	this.arear_ring1.visible=true;
            }
       

            game.load.crossOrigin='*';
            this.randomId = game.rnd.integerInRange(0,  RelatedGames.length-1);
            this.thumbVar = game.add.sprite(160, 635, 'thumb_'+this.randomId);
            this.thumbVar.inputEnabled = true
            this.thumbVar.input.useHandCursor = true;
           this.thumbVar.events.onInputUp.add(this.thumbLink, this);
            this.thumbframeVar = game.add.sprite(158, 635, 'Tump_frame'); 
      this.thumbVar.height=this.thumbframeVar.height-2;
      this.thumbVar.width=this.thumbframeVar.width-2;
        
          this.thumbframeVar.scale.setTo(0);
          this.thumbVar.scale.setTo(0);



         this.morebtn = game.add.sprite(57,752,'morebtn');
         this.morebtn.anchor.setTo(0.5);
         this.morebtn.scale.setTo(0.8); 
         this.morebtn.inputEnabled = true;
         this.morebtn.input.useHandCursor = true;
         this.morebtn.events.onInputUp.add(this.moreLink, this);
         this.morebtn.events.onInputOver.add(this.btnOver, this);
         this.morebtn.events.onInputOut.add(this.btnOut, this);
         //this.levelGroup.add(this.morebtn);
         this.playbtn = game.add.sprite(430,752,'resetbtn');
         this.playbtn.anchor.setTo(0.5);
         this.playbtn.scale.setTo(0);
         this.playbtn.inputEnabled = true;
         this.playbtn.input.useHandCursor = true;
         this.playbtn.events.onInputUp.add(this.enterRoom, this);
         this.playbtn.events.onInputOver.add(this.btnOver, this);
         this.playbtn.events.onInputOut.add(this.btnOut, this);

         this.nextbtn = game.add.sprite(430,740,'nextbtn');
         this.nextbtn.anchor.setTo(0.5);
         this.nextbtn.scale.setTo(0);
         // this.nextbtn.inputEnabled = true;
         // this.nextbtn.input.useHandCursor = true;
         this.nextbtn.events.onInputUp.add(this.enterRoom1, this);
         this.nextbtn.events.onInputOver.add(this.btnOver, this);
         this.nextbtn.events.onInputOut.add(this.btnOut, this);

         if (Main.shutterOn[0]) {
         this.shutter1 = game.add.sprite(0,0,'sbg1');
          this.shutter2 = game.add.sprite(252,596,'sbg2');
         this.shutter2.anchor.setTo(0.5);
         this.shouse = game.add.sprite(252,307.5,'shouse');
         this.shouse.anchor.setTo(0.5);
         this.bus1 = game.add.sprite(252,444,'bus');
         this.bus1.anchor.setTo(0.5);
          this.dtext1 = game.add.sprite(247.5,430,'dtext');
         this.dtext1.anchor.setTo(0.5);
         game.world.bringToTop(this.nextbtn);
          game.add.tween(this.nextbtn.scale).to({x:1,y:1}, 500, Phaser.Easing.Quadratic.Out, true).onComplete.add(function(){
           this.nextbtn.inputEnabled = true;
         this.nextbtn.input.useHandCursor = true;
         },this);
        }

        /*if (Main.shutterOn[0]) {
         this.shutter1 = game.add.sprite(0,0,'sbg1');
         this.shouse = game.add.sprite(246.5,293.5,'shouse');
         this.shouse.anchor.setTo(0.5);
         this.shutter2 = game.add.sprite(256,715,'sbg2');
         this.shutter2.anchor.setTo(0.5);
         this.bus1 = game.add.sprite(247.5,391,'bus');
         this.bus1.anchor.setTo(0.5);
         game.add.tween(this.bus1.scale).to({x:0.2,y:0.2}, 500, Phaser.Easing.Quadratic.Out, true).onComplete.add(function(){
          this.bus1.visible=false;
          game.add.tween(this.shouse).to({y:1500}, 1000, Phaser.Easing.Quadratic.Out, true);
         game.add.tween(this.shutter2).to({y:1500}, 1000, Phaser.Easing.Quadratic.Out, true);
         game.add.tween(this.shutter1).to({y:-850}, 1000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function(){
         game.add.tween(this.argroup).to({x:-130},700,Phaser.Easing.Quadratic.Out,true).onComplete.add(function(){
          game.add.tween(this.rgroup).to({x:620},700,Phaser.Easing.Quadratic.Out,true).onComplete.add(function(){
          game.add.tween(this.egroup).to({x:-230},700,Phaser.Easing.Quadratic.Out,true).onComplete.add(function(){
          game.add.tween(this.agroup).to({x:720},700,Phaser.Easing.Quadratic.Out,true).onComplete.add(function(){
          game.add.tween(this.playbtn.scale).to({x:0.78,y:0.78}, 700, Phaser.Easing.Quadratic.Out, true);
          game.add.tween(this.thumbVar.scale).to({x:1,y:1}, 700, Phaser.Easing.Quadratic.Out, true);
          game.add.tween(this.thumbframeVar.scale).to({x:1,y:1}, 700, Phaser.Easing.Quadratic.Out, true);
        },this);
        },this);
        },this);
        },this);
         },this);
         },this);
        }*/
        
         this.lightCount=0;
        
         this.logoVar = game.add.sprite(5, 5, 'logo');
         this.logoVar.scale.setTo(0.8);
         this.logoVar.inputEnabled = true
         this.logoVar.input.useHandCursor = true;
         this.logoVar.events.onInputUp.add(this.openLink, this);
         
         this.musicButton = game.add.sprite(427,5,"soundicon");
         this.musicButton.scale.setTo(0.9);
         this.musicButton.inputEnabled = true
         this.musicButton.input.useHandCursor = true;
         this.musicButton.events.onInputUp.add(this.changemusic, this);
         if (!game.sound.mute) {
               this.musicButton.frame = 0;
            }else{
               this.musicButton.frame = 1;
            }
            this.effectFlag=[this.etop1,this.ebotom1,this.edress1,this.ebag1,this.ebook1,this.ephone1,this.ewatch1,this.eglass1,this.rear_ring1,this.eshoe1,this.eglass1,this.efhair1];
        },
changemusic:function()
         {
            if (!game.sound.mute) {
               this.musicButton.frame = 1;
               game.sound.mute = true;
            }else{
               this.musicButton.frame = 0;
               game.sound.mute = false;
            };
         },

         enterRoom1:function(){
	 game.add.tween(this.nextbtn.scale).to({x:0,y:0}, 500, Phaser.Easing.Quadratic.Out, true).onComplete.add(function(){
	 	this.nextbtn.visible=false;
	 },this);
    
         game.add.tween(this.dtext1.scale).to({x:0,y:0}, 500, Phaser.Easing.Quadratic.Out, true).onComplete.add(function(){
     game.add.tween(this.bus1).to({x:-250}, 500, Phaser.Easing.Quadratic.Out, true).onComplete.add(function(){
          this.bus1.visible=false;
          this.bus1.x=750;
          game.add.tween(this.shouse).to({y:-850}, 1000, Phaser.Easing.Quadratic.Out, true);
         game.add.tween(this.shutter2).to({y:1500}, 1000, Phaser.Easing.Quadratic.Out, true);
         game.add.tween(this.shutter1).to({y:-850}, 1000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function(){
         game.add.tween(this.argroup).to({x:-130},700,Phaser.Easing.Quadratic.Out,true).onComplete.add(function(){
          game.add.tween(this.rgroup).to({x:620},700,Phaser.Easing.Quadratic.Out,true).onComplete.add(function(){
          game.add.tween(this.egroup).to({x:-230},700,Phaser.Easing.Quadratic.Out,true).onComplete.add(function(){
          game.add.tween(this.agroup).to({x:720},700,Phaser.Easing.Quadratic.Out,true).onComplete.add(function(){
          game.add.tween(this.playbtn.scale).to({x:0.78,y:0.78}, 700, Phaser.Easing.Quadratic.Out, true);
          game.add.tween(this.thumbVar.scale).to({x:1,y:1}, 700, Phaser.Easing.Quadratic.Out, true);
          game.add.tween(this.thumbframeVar.scale).to({x:1,y:1}, 700, Phaser.Easing.Quadratic.Out, true);
        },this);
        },this);
        },this);
        },this);
         },this);
         },this);

         },this);
         //},this);
   
   },
                thumbLink:function()
{
   CreateLinksInGame("Disney-Princess-School-Fashion","gameover","thumb",RelatedGames[this.randomId]['id']);
},
   
           updateyeblink4:function(){
          this.eyeblink.play('eyeblink',10,false);
        },
         updateyeblink1:function(){
          this.aeyeblink.play('aeyeblink',10,false);
        },
         updateyeblink2:function(){
          this.reyeblink.play('reyeblink',10,false);
        },
        updateyeblink3:function(){
          this.areyeblink.play('areyeblink',10,false);
        },
        changefun:function(evt){
         this.anai[evt.cnt-1]=1;
          if(evt.cnt==1){
            this.etop1.alpha=1;
            this.edress1.alpha=0;
            if(Main.elsaAlpha[2]==1){
            this.inner2.alpha=1;
            Main.elsaAlpha[12]=1;
            }
            this.inner1.alpha=0;
            Main.elsaAlpha[11]=0;
            Main.elsaAlpha[2]=0;
            Main.elsaAlpha[0]=1;

            if(Main.elsaAlpha[0]==1){
        this.efbag1.visible=false;
        this.efbag2.visible=true;
        }else{
          this.efbag1.visible=true;
        this.efbag2.visible=false;
        }
            
            this.etop1.loadTexture('etop000'+evt.id);
            Main.elsaFlag[0]=evt.id;

             effectssd = game.add.sprite(this.etop1.x,this.etop1.y,'effectssd');
        effectssd.anchor.setTo(0.5);
        effectssd.animations.add('effectssd');
        effectssd.animations.play('effectssd',20,false).onComplete.add(function(evt){
          evt.destroy();
        },this);
          }
          if(evt.cnt==2){
            this.ebotom1.alpha=1;
            this.edress1.alpha=0;
            if(Main.elsaAlpha[2]==1){
            this.inner1.alpha=1;
            Main.elsaAlpha[11]=1;
            }
            Main.elsaAlpha[2]=0;
            Main.elsaAlpha[1]=1;
             
            this.ebotom1.loadTexture('ebotom000'+evt.id);
            Main.elsaFlag[1]=evt.id;

            effectssd = game.add.sprite(this.ebotom1.x,this.ebotom1.y,'effectssd');
        effectssd.anchor.setTo(0.5);
        effectssd.animations.add('effectssd');
        effectssd.animations.play('effectssd',20,false).onComplete.add(function(evt){
          evt.destroy();
        },this);
          }

          if(evt.cnt==3){
            this.edress1.alpha=1;
            this.etop1.alpha=0;
            this.ebotom1.alpha=0;
            this.inner1.alpha=0;
            this.inner2.alpha=0;
            Main.elsaAlpha[11]=0;
            Main.elsaAlpha[12]=0;
            
            Main.elsaAlpha[2]=1;
            Main.elsaAlpha[0]=0;
            Main.elsaAlpha[1]=0;
             
            this.edress1.loadTexture('edress000'+evt.id);
            Main.elsaFlag[2]=evt.id;

            effectssd = game.add.sprite(this.edress1.x,this.edress1.y,'effectssd');
        effectssd.anchor.setTo(0.5);
        effectssd.animations.add('effectssd');
        effectssd.animations.play('effectssd',20,false).onComplete.add(function(evt){
          evt.destroy();
        },this);
          }

          if(evt.cnt==4){
            
            this.ebag1.alpha=1;
            this.efbag1.alpha=1;
            Main.elsaAlpha[3]=1;

            if(Main.elsaAlpha[0]==1){
        this.efbag1.visible=false;
        this.efbag2.visible=true;
        }else{
          this.efbag1.visible=true;
        this.efbag2.visible=false;
        }
            this.ebag1.loadTexture('ebag000'+evt.id);
            this.efbag1.loadTexture('efbag000'+evt.id);
            Main.elsaFlag[3]=evt.id;

            effectssd = game.add.sprite(this.ebag1.x,this.ebag1.y,'effectssd');
        effectssd.anchor.setTo(0.5);
        effectssd.animations.add('effectssd');
        effectssd.animations.play('effectssd',20,false).onComplete.add(function(evt){
          evt.destroy();
        },this);
          }

           if(evt.cnt==5){
            
            this.ebook1.alpha=1;
            Main.elsaAlpha[4]=1;
            this.ebook1.loadTexture('ebook000'+evt.id);
            Main.elsaFlag[4]=evt.id;

            effectssd = game.add.sprite(this.ebook1.x,this.ebook1.y,'effectssd');
        effectssd.anchor.setTo(0.5);
        effectssd.animations.add('effectssd');
        effectssd.animations.play('effectssd',20,false).onComplete.add(function(evt){
          evt.destroy();
        },this);
          }
          if(evt.cnt==6){
            
            this.ephone1.alpha=1;
            Main.elsaAlpha[5]=1;
            this.ephone1.loadTexture('ephone000'+evt.id);
            Main.elsaFlag[5]=evt.id;

            effectssd = game.add.sprite(this.ephone1.x,this.ephone1.y,'effectssd');
        effectssd.anchor.setTo(0.5);
        effectssd.animations.add('effectssd');
        effectssd.animations.play('effectssd',20,false).onComplete.add(function(evt){
          evt.destroy();
        },this);
          }

          if(evt.cnt==7){
            
            this.ewatch1.alpha=1;
            Main.elsaAlpha[6]=1;
            this.ewatch1.loadTexture('ewatch000'+evt.id);
            Main.elsaFlag[6]=evt.id;

             effectssd = game.add.sprite(this.ewatch1.x,this.ewatch1.y,'effectssd');
        effectssd.anchor.setTo(0.5);
        effectssd.animations.add('effectssd');
        effectssd.animations.play('effectssd',20,false).onComplete.add(function(evt){
          evt.destroy();
        },this);
          }

          if(evt.cnt==8){
            
            this.eglass1.alpha=1;
            Main.elsaAlpha[7]=1;
            this.eglass1.loadTexture('eglass000'+evt.id);
            Main.elsaFlag[7]=evt.id;

             effectssd = game.add.sprite(this.eglass1.x,this.eglass1.y-150,'effectssd');
        effectssd.anchor.setTo(0.5);
        effectssd.animations.add('effectssd');
        effectssd.animations.play('effectssd',20,false).onComplete.add(function(evt){
          evt.destroy();
        },this);
          }

          if(evt.cnt==9){

              if(Main.elsaFlag[10]==1||Main.elsaFlag[10]==3||Main.elsaFlag[10]==5){
        this.rear_ring1.visible=false;
        this.lear_ring1.visible=false;
  
         }
         if(Main.elsaFlag[10]==2){
        this.rear_ring1.visible=false;
        this.lear_ring1.visible=true;
  
         }
         if(Main.elsaFlag[10]==4){
        this.rear_ring1.visible=false;
        this.lear_ring1.visible=true;
  
         }
            
            this.echain1.alpha=1;
            this.lear_ring1.alpha=1;
            this.rear_ring1.alpha=1;
            Main.elsaAlpha[8]=1;
            this.lear_ring1.loadTexture('lear_ring000'+evt.id);
            this.rear_ring1.loadTexture('rear_ring000'+evt.id);
            this.echain1.loadTexture('echain000'+evt.id);
            Main.elsaFlag[8]=evt.id;

            effectssd = game.add.sprite(this.lear_ring1.x,this.lear_ring1.y,'effectssd');
        effectssd.anchor.setTo(0.5);
        effectssd.animations.add('effectssd');
        effectssd.animations.play('effectssd',20,false).onComplete.add(function(evt){
          evt.destroy();
        },this);


          }

           if(evt.cnt==10){
            
            this.eshoe1.alpha=1;
            Main.elsaAlpha[9]=1;
            this.eshoe1.loadTexture('eshoe000'+evt.id);
            Main.elsaFlag[9]=evt.id;

             effectssd = game.add.sprite(this.eshoe1.x,this.eshoe1.y+100,'effectssd');
        effectssd.anchor.setTo(0.5);
        effectssd.animations.add('effectssd');
        effectssd.animations.play('effectssd',20,false).onComplete.add(function(evt){
          evt.destroy();
        },this);
          }

           if(evt.cnt==11){


            
            this.ebhair1.alpha=1;
            this.efhair1.alpha=1;
            Main.elsaAlpha[10]=1;
            this.ebhair1.loadTexture('ebhair000'+evt.id);
            this.efhair1.loadTexture('efhair000'+evt.id);
            Main.elsaFlag[10]=evt.id;
             if(Main.elsaFlag[10]==1||Main.elsaFlag[10]==3||Main.elsaFlag[10]==5){
        this.rear_ring1.visible=false;
        this.lear_ring1.visible=false;
  
         }
         if(Main.elsaFlag[10]==2){
        this.rear_ring1.visible=false;
        this.lear_ring1.visible=true;
  
         }
         if(Main.elsaFlag[10]==4){
        this.rear_ring1.visible=false;
        this.lear_ring1.visible=true;
  
         }

         effectssd = game.add.sprite(this.efhair1.x,this.efhair1.y,'effectssd');
        effectssd.anchor.setTo(0.5);
        effectssd.animations.add('effectssd');
        effectssd.animations.play('effectssd',20,false).onComplete.add(function(evt){
          evt.destroy();
        },this);
        
          }

           if(this.anai.indexOf(0)<0){
         game.add.tween(this.playbtn.scale).to({x:0.8,y:0.8},800,Phaser.Easing.Elastic.Out,true);
       }

       /* effectssd = game.add.sprite(this.effectFlag[evt.cnt-1].worldPosition.x,this.effectFlag[evt.cnt-1].worldPosition.y,'effectssd');
        effectssd.anchor.setTo(0.5);
        effectssd.animations.add('effectssd');
        effectssd.animations.play('effectssd',20,false).onComplete.add(function(evt){
          evt.destroy();
        },this);*/
         

        },
        groupfun:function(evt){
        if(evt.id==1){
          this.cnt1=1;
          this.fbtn2.visible=true;
          this.bcbtn2.visible=false;
          this.icongp1.visible=true;
          this.icongp2.visible=false;
          this.icongp3.visible=false;
          this.icongp4.visible=false;
          this.icongp5.visible=false;
          this.icongp6.visible=false;
          this.icongp7.visible=false;
          this.icongp8.visible=false;
        }
        if(evt.id==2){
          this.fbtn2.visible=false;
          this.bcbtn2.visible=false;
          this.icongp1.visible=false;
          this.icongp2.visible=false;
          this.icongp3.visible=false;
          this.icongp4.visible=false;
          this.icongp5.visible=false;
          this.icongp6.visible=false;
          this.icongp7.visible=false;
          this.icongp8.visible=true;
        }
        if(evt.id==3){
          this.fbtn2.visible=false;
          this.bcbtn2.visible=false;
          this.icongp1.visible=false;
          this.icongp2.visible=false;
          this.icongp3.visible=false;
          this.icongp4.visible=false;
          this.icongp5.visible=false;
          this.icongp6.visible=false;
          this.icongp7.visible=true;
          this.icongp8.visible=false;
        }
        if(evt.id==4){
          this.fbtn2.visible=false;
          this.bcbtn2.visible=false;
          this.icongp1.visible=false;
          this.icongp2.visible=false;
          this.icongp3.visible=false;
          this.icongp4.visible=false;
          this.icongp5.visible=false;
          this.icongp6.visible=true;
          this.icongp7.visible=false;
          this.icongp8.visible=false;
        }
        if(evt.id==5){
          this.fbtn2.visible=false;
          this.bcbtn2.visible=false;
          this.icongp1.visible=false;
          this.icongp2.visible=false;
          this.icongp3.visible=false;
          this.icongp4.visible=true;
          this.icongp5.visible=false;
          this.icongp6.visible=false;
          this.icongp7.visible=false;
          this.icongp8.visible=false;
        }
        if(evt.id==6){
          this.fbtn2.visible=false;
          this.bcbtn2.visible=false;
          this.icongp1.visible=false;
          this.icongp2.visible=false;
          this.icongp3.visible=false;
          this.icongp4.visible=false;
          this.icongp5.visible=true;
          this.icongp6.visible=false;
          this.icongp7.visible=false;
          this.icongp8.visible=false;
        }
        },
openLink:function()
{
   CreateLinksInGame("Disney-Princess-School-Fashion","game","logo");
},
moreLink:function()
{
   CreateLinksInGame("Disney-Princess-School-Fashion","game","more");
},
btnOver:function(items){
  items.scale.setTo(items.scale.x+0.05);
      effectVar = game.add.sprite(items.x-30,items.y-80,'effects'); 
   effectVar.anchor.setTo(0.5);
   effectVar.scale.setTo(2);
   effectVar.animations.add('glitter').onComplete.add(this.removeGlitter, this);
   effectVar.animations.play('glitter', 30, false);
   },
btnOut:function(items){
     items.scale.setTo(items.scale.x-0.05);

   },
removeGlitter:function(evt){
      evt.kill(); 
      },
       enterRoom:function(){
        Main.selectionFlag=[0,0,0,0];
   Main.annaFlag=[1,1,1,1,1,1,1,1,1,1,1];
   Main.annaAlpha=[0,0,1,0,0,0,0,0,0,1,1,0,0];

    Main.rapunzelFlag=[1,1,1,1,1,1,1,1,1,1,1];
   Main.rapunzelAlpha=[0,0,1,0,0,0,0,0,0,1,1,0,0];

   Main.arielFlag=[1,1,1,1,1,1,1,1,1,1,1];
   Main.arielAlpha=[0,0,1,0,0,0,0,0,0,1,1,0,0];

   Main.elsaFlag=[1,1,1,1,1,1,1,1,1,1,1];
   Main.elsaAlpha=[0,0,1,0,0,0,0,0,0,1,1,0,0];
   Main.lightArr=[2];
    game.add.tween(this.shouse).to({y:307.5}, 1000, Phaser.Easing.Quadratic.Out, true);
         game.add.tween(this.shutter2).to({y:596}, 1000, Phaser.Easing.Quadratic.Out, true);
         game.add.tween(this.shutter1).to({y:0}, 1000, Phaser.Easing.Quadratic.Out, true).onComplete.add(function(){
          this.bus1.visible=true;
         game.add.tween(this.bus1).to({x:252}, 500, Phaser.Easing.Quadratic.Out, true).onComplete.add(function(){
         game.add.tween(this.dtext1.scale).to({x:1,y:1}, 500, Phaser.Easing.Quadratic.Out, true).onComplete.add(function(){
   
   game.state.start('intro');
         },this);
         },this);
         },this);
   
   },
}

game.state.add('boot', Main.boot);
game.state.add('preloader', Main.preloader);
game.state.add('title', Main.title);
game.state.add('intro', Main.intro);
game.state.add('selection_screen', Main.selection_screen);
game.state.add('anna_screen', Main.anna_screen);
game.state.add('rapunzel_screen', Main.rapunzel_screen);
game.state.add('ariel_screen', Main.ariel_screen);
game.state.add('elsa_screen', Main.elsa_screen);
game.state.add('finascreen', Main.finascreen);

game.state.start('boot');