ig.module('game.gameplay3')

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
	gameplay3 = ig.Game.extend({
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
			this.step= 1;
            this.ctr_oven = 30;
			this.grab = null;
			this.next_grab = null;

			this.arrowX_bahan= [110,530,530,310,10];
			this.arrowY_bahan= [10,180,180,220,10];
			//Create BG
			this.mBg= this.spawnEntity(Bg_noclick, 0, 0, 
				{animSheet: new ig.AnimationSheet("media/bg_game1.png", 700,525)});
			this.mBg.addAnim("idle",1,[0]);
			//====
			nama_file= [
				"oven","loyang","talenan","bowl","adonan","roll"
			];
			sizeXY= [
				{x:435,y:213}, {x:227,y:152}, {x:326,y:157}, {x:265,y:197}, {x:266,y:214}, {x:113,y:215}
			];
			posXY= [
				{x:0,y:27}, {x:450,y:80}, {x:170,y:320}, {x:10,y:100}, {x:700+200,y:280}, {x:525,y:280}
			];
			i=0;for (i=0;i<nama_file.length;i++){
				this[nama_file[i]]= this.spawnEntity(Bg, posXY[i].x, posXY[i].y, 
					{	size:{x:sizeXY[i].x, y:sizeXY[i].y},
						onMouseUp:function(){
							ig.game.clickBahan(this);
						}
					});
				if (nama_file[i]=="oven"){
					this[nama_file[i]].animSheet= new ig.AnimationSheet("media/"+nama_file[i]+"_tutup.png", sizeXY[i].x, sizeXY[i].y);
					this[nama_file[i]].addAnim("tutup",1,[0]);
					this[nama_file[i]].animSheet= new ig.AnimationSheet("media/"+nama_file[i]+"_buka.png", sizeXY[i].x, sizeXY[i].y);
					this[nama_file[i]].addAnim("buka",1,[0]);
					this[nama_file[i]].animSheet= new ig.AnimationSheet("media/"+nama_file[i]+"_buka_isi.png", sizeXY[i].x, sizeXY[i].y);
					this[nama_file[i]].addAnim("buka_isi",1,[0]);
					this[nama_file[i]].animSheet= new ig.AnimationSheet("media/"+nama_file[i]+"_tutup_isi.png", sizeXY[i].x, sizeXY[i].y);
					this[nama_file[i]].addAnim("tutup_isi",1,[0]);
				}else {
					this[nama_file[i]].animSheet= new ig.AnimationSheet("media/"+nama_file[i]+".png", sizeXY[i].x, sizeXY[i].y);
					this[nama_file[i]].addAnim("idle",1,[0]);
					if (nama_file[i]=="loyang"){
						this[nama_file[i]].animSheet= new ig.AnimationSheet("media/"+nama_file[i]+"_full.png", sizeXY[i].x, sizeXY[i].y);
						this[nama_file[i]].addAnim("isi",1,[0]);
					}else if (nama_file[i]=="bowl"){
						this[nama_file[i]].animSheet= new ig.AnimationSheet("media/"+nama_file[i]+"_adonan.png", sizeXY[i].x, sizeXY[i].y);
						this[nama_file[i]].addAnim("adonan",1,[0]);
						this[nama_file[i]].currentAnim= this[nama_file[i]].anims["adonan"].rewind();
					}else if (nama_file[i]=="adonan"){
						this[nama_file[i]].animSheet= new ig.AnimationSheet("media/penyet_hor.png", 266, 214);
						this[nama_file[i]].addAnim("penyet_hor",0.033, [0,0,0,0,1,1,1,1,1,2,2,2,2,2,3,3,3,3,3,4,4,4,4,4,5,5,5,5,5,6,6,6,6,6,7,7,7,7,7,7,7,7,7,7,8,8,8,8,8,9,9,9,9,9,9], true);

						this[nama_file[i]].animSheet= new ig.AnimationSheet("media/penyet_ver.png", 297, 172);
						this[nama_file[i]].addAnim("penyet_ver",0.033, [0,0,0,0,1,1,1,1,1,2,2,2,2,2,3,3,3,3,3,4,4,4,4,4,5,5,5,5,5,6,6,6,6,6,7,7,7,7,7,8,8,8,8,8,9,9,9,9,9,9,10,10,10,10,10], true);
					}
				}
			}
			
			//=====
			this.btn_oven= this.spawnEntity(Bg, 380, 120, {
				size:{x:50, y:50},
				animSheet: new ig.AnimationSheet( 'media/big_box.png', 50, 50 ),
				onMouseUp:function(){
					ig.game.clickBahan(this);
				}
			});
			this.btn_oven.addAnim("idle",1,[0]);
			this.btn_oven.currentAnim.alpha= 0;

			//=====
			this.arrow= this.spawnEntity(Bg_noclick, 0, 0, {
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
			this.arrow.animSheet= new ig.AnimationSheet("media/arrow.png", 60, 128);
			this.arrow.addAnim("down",1,[0]);
			this.arrow.animSheet= new ig.AnimationSheet("media/arrow_kecil.png", 80, 76);
			this.arrow.addAnim("up_samping",1,[0]);
			this.arrow.animSheet= new ig.AnimationSheet("media/arrow_samping.png", 122, 111);
			this.arrow.addAnim("down_samping",1,[0]);
			//=====
			this.btNext= this.spawnEntity(Bg, 700+550, 450, {
				size:{x:132, y:63},
				animSheet: new ig.AnimationSheet( 'media/btn_next.png', 132, 63 ),
				onMouseUp:function(){
					ig.system.setGame(gameplay4);
                     
				}
			});
			this.btNext.addAnim("idle",1,[0]);
			//=====
			createSound(600,10,88,76);
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
			if (this.ctr_oven<10){
				this.fontTime.draw("0"+this.ctr_oven, 389, 105, ig.Font.ALIGN.LEFT);
			}else{
                if(this.ctr_oven < 20){
				this.fontTime.draw(this.ctr_oven, 389, 105, ig.Font.ALIGN.LEFT);}
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
				this.arrow.pos.x= this.arrowX_bahan[this.step-1];;
				this.arrow.pos.y= this.arrowY_bahan[this.step-1];
				if (this.step==1){
					this.next_grab= this.bowl;
				}else if (this.step==2 || this.step==3){
					this.next_grab= this.roll;
				}else if (this.step==4){
					this.next_grab= this.adonan;
				}else if (this.step==5){
					this.next_grab= this.oven;
					this.arrow.currentAnim= this.arrow.anims["down_samping"].rewind();
					this.bowl.pos.x-= 20;
					this.bowl.pos.y+= 125;
				}
				this.bahan_active= this.next_grab;
				this.mode= 99;
			}else if (this.mode==1){
				this.ctr_anim--;
				if (this.step==5){
					this.ctr_oven--;
				}
				if (this.ctr_anim<=0){
					if (this.step==2 || this.step==3){
						this.roll.pos.x-=700;
					}else if (this.step==5){
						this.oven.currentAnim= this.oven.anims["buka_isi"].rewind();
					}
					this.step++
					if (this.step<6){
						this.mode= 0;
					}else{
						this.btNext.pos.x-=700;
						this.mode= 99;
					}
				}
			}
		},

		clickBahan:function(thisku){
			if (this.step>5)return;
			if (this.ctr_anim>0)return;
			if (this.next_grab!=thisku)return;
			if (thisku==this.bowl){
				this.grab= thisku;
				this.arrow.pos.x= 310;
				this.arrow.pos.y= 220;
				this.next_grab= this.talenan;
			}else if (thisku==this.talenan){
				this.adonan.pos.x-=700;
				this.bowl.currentAnim= this.bowl.anims["idle"].rewind();
				this.ctr_anim=10;
				this.mode=1;
			}else if (thisku==this.roll){
				this.grab= thisku;
				this.arrow.pos.x= 310;
				this.arrow.pos.y= 220;
				this.next_grab= this.adonan;
			}else if (thisku==this.adonan){
				if (this.step==2 || this.step==3){
					this.arrow.pos.x+= 700;
					this.roll.pos.x+= 700;
					if (this.step==2){
						thisku.currentAnim= thisku.anims["penyet_hor"].rewind();
					}else{
						this.adonan.pos.x-= 27;
						this.adonan.pos.y+= 34;
						thisku.currentAnim= thisku.anims["penyet_ver"].rewind();
					}
					this.ctr_anim= 120;
					this.mode= 1;
				}else if (this.step==4){
					this.grab= thisku;
					this.arrow.pos.x= 540;
					this.arrow.pos.y= 10;
					this.next_grab= this.loyang;
				}
			}else if (thisku==this.loyang){
				this.grab= thisku;
				if (this.step==4){
					this.adonan.pos.x+= 700;
					thisku.currentAnim= thisku.anims["isi"].rewind();
					this.ctr_anim= 5;
					this.mode= 1;	
				}else if (this.step==5){
					this.arrow.currentAnim= this.arrow.anims["down_samping"].rewind();
					this.arrow.pos.x= 10;
					this.arrow.pos.y= 10;
					this.next_grab= this.oven;
				}
			}else if (thisku==this.oven){
				if (thisku.currentAnim==thisku.anims["tutup"]){
					thisku.currentAnim= thisku.anims["buka"].rewind();
					this.arrow.currentAnim= this.arrow.anims["down"].rewind();
					this.arrow.pos.x= 540;
					this.arrow.pos.y= 10;
					this.next_grab= this.loyang;
				}else if (thisku.currentAnim==thisku.anims["buka"]){
                    this.ctr_oven = 20;
					thisku.currentAnim= thisku.anims["tutup_isi"].rewind();
					this.loyang.currentAnim= this.loyang.anims["idle"].rewind();
					this.arrow.currentAnim= this.arrow.anims["up_samping"].rewind();
					this.arrow.pos.x= 410;
					this.arrow.pos.y= 150;
					this.next_grab= this.btn_oven;
				}
			}else if(thisku==this.btn_oven){
				this.arrow.pos.x+= 700;
				this.ctr_anim= 20;
				this.mode= 1;
			}
		},

		fnPause:function(){},
		fnResume:function(){},
		onPreloaded:function() {console.log("gameplay2");}
	});
});