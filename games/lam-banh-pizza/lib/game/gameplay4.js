ig.module('game.gameplay4')

.requires(
	'impact.game',
	'impact.font',
	'impact.sound',
	'impact.image',
	'impact.entity',
	'plugins.button',
	'plugins.tween',
	'plugins.myentity',
	'plugins.bg',
	'plugins.bg_noclick'
)

.defines(function() {
	gameplay4 = ig.Game.extend({
		adsShownFlag:false,
		fontScore: new ig.Font( '', 15, 70, 1, '#FFFFFF','center', 4, false, false, "#FFFFFF"),
		fontTime: new ig.Font( '', 24, 130, 1, '#FFFFFF','center', 4, false, false, "#FFFFFF"),
		fontNotes: new ig.Font( '', 16, 500, 0, '#000000','center', 4, false, false, "#000000"),
		init:function() {
			ig.resources = [];
			ig.ready = false;

			dummyImages = [];

			ig.input.initMouse();
			ig.input.bind( ig.KEY.MOUSE1, 'click');
			this.mode= 0;
			this.ctr_anim= 0;
			this.status_over= 0;
			this.grab = null;

			ig.global.stickers= [];
			//Create BG
			this.mBg= this.spawnEntity(Bg_noclick, 0, 0, 
				{animSheet: new ig.AnimationSheet("media/bg_game4.png", 700,525)});
			this.mBg.addAnim("idle",1,[0]);
			//====
			nama_file= [
				"bowl_bombay","bowl_keju","bowl_jamur","bowl_paprika","bowl_sosis","bowl_daging","bowl_jagung",
				"pizza"
			];
			sizeXY= [
				{x:126,y:100}, {x:126,y:100}, {x:126,y:100}, {x:126,y:100}, {x:126,y:100}, {x:126,y:100}, {x:126,y:100},
				{x:389,y:338}
			];
			posXY= [
				{x:12,y:289}, {x:27,y:162}, {x:112,y:50}, {x:257,y:25}, {x:406,y:33}, {x:531,y:85}, {x:562,y:214},
				{x:162, y:149}
			];
			list_stick= [
				{nama:"bombay",x:78,y:72},
				{nama:"keju",x:125,y:119},
				{nama:"jamur",x:60,y:56},
				{nama:"paprika",x:38,y:70},
				{nama:"sosis",x:69,y:61},
				{nama:"daging",x:43,y:37},
				{nama:"jagung",x:87,y:95}
			];
			i=0;for (i=0;i<nama_file.length;i++){
				this[nama_file[i]]= this.spawnEntity(Bg, posXY[i].x, posXY[i].y, 
					{	size:{x:sizeXY[i].x, y:sizeXY[i].y},
						onMouseUp:function(){
							ig.game.clickSticker(this);
						}
					});
				this[nama_file[i]].animSheet= new ig.AnimationSheet("media/"+nama_file[i]+".png", sizeXY[i].x, sizeXY[i].y);
				this[nama_file[i]].addAnim("idle",1,[0]);
				if (nama_file[i]!="pizza"){
					this[nama_file[i]].sticker= list_stick[i];
				}
			}
			//====
			this.arrow= this.spawnEntity(Bg_noclick, 700, 0, {
				ctr:0,
				dy:1,
				dx:1,
				update:function(){
					this.ctr++;
					this.pos.y+=this.dy;
					if (this.currentAnim!=this.anims["down"]){
						this.pos.x+=this.dx;
					}
					if (this.ctr>=15){
						this.ctr=0;
						this.dy=-(this.dy);
						this.dx=-(this.dx);
					}
				}
			});
			this.arrow.animSheet= new ig.AnimationSheet("media/arrow_kecil.png", 80, 76);
			this.arrow.addAnim("up_samping",1,[0]);
			//=====
			this.btnDone= this.spawnEntity(Bg, 550, 450, {
				size:{x:132, y:63},
				animSheet: new ig.AnimationSheet( 'media/btn_done.png', 132, 63 ),
				onMouseUp:function(){
					 
					ig.system.setGame(gameend);
					console.log("Level Complete");
				}
			});
			this.btnDone.addAnim("idle",1,[0]);
			//=====
			createSound(10,425,88,76);
			createLogo(10,10);
			// load the resources
			ig.ready = true;
			// Start the custom preloader with the captured resources
			this.loader = new IntermediateLoader2( null, ig.resources, this.onPreloaded );
			this.loader.load();
			//GameAPI.GameBreak.request(ig.game.fnPause, ig.game.fnResume);
		},

		draw:function() {
			if (this.loader == null) {
				this.parent();
			}
		},

		update:function() {
			if (this.loader==null){
				if (this.adsShownFlag==false) {
					//GameAPI.GameBreak.request(ig.game.fnPause, ig.game.fnResume);
					this.adsShownFlag = true;
				}
				
			}
			this.parent();
			if (this.mode==0){
				
			}
		},

		clickSticker:function(thisku){
			if (thisku==this.pizza){
				if (this.grab==null)return;
				pos_x= ig.input.mouse.x-(this.grab.sticker.x/2);
				pos_y= ig.input.mouse.y-(this.grab.sticker.y/2);
                if (( pos_x < (475 - 10)) && ( pos_x > (this.pizza.pos.x + 10)) && (pos_y < (435 - 10)) && (pos_y > (this.pizza.pos.y))) {
				var temp= this.spawnEntity(Bg_noclick, pos_x, pos_y);
				temp.animSheet= new ig.AnimationSheet("media/stick_"+this.grab.sticker.nama+".png", this.grab.sticker.x, this.grab.sticker.y);
				temp.addAnim("idle",1,[0]);
				ig.global.stickers.push(this.grab.sticker);
				ig.global.posisiX.push(pos_x - this.pizza.pos.x);
				ig.global.posisiY.push(pos_y - this.pizza.pos.y);
                }
			}else{

				this.grab= thisku;
				this.arrow.pos.x= thisku.pos.x+75;
				this.arrow.pos.y= thisku.pos.y+50;
			}
		},

		fnPause:function(){},
		fnResume:function(){},
		onPreloaded:function() {console.log("gameplay2");}
	});
});