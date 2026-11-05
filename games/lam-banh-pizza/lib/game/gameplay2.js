ig.module('game.gameplay2')

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
	gameplay2 = ig.Game.extend({
		adsShownFlag:false,
		fontScore: new ig.Font( '', 15, 70, 1, '#FFFFFF','center', 4, false, false, "#FFFFFF"),
		fontTime: new ig.Font( '', 24, 130, 1, '#000000','center', 4, false, false, "#000000"),
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
			this.grab = null;
			this.next_grab = null;

			this.arrowX_bahan= [465,445,445,445,200,613,20,200];
			this.arrowY_bahan= [30,360,360,360,360,50,-10,360];
			//Create BG
			this.mBg= this.spawnEntity(Bg_noclick, 0, 0, 
				{animSheet: new ig.AnimationSheet("media/bg_game1.png", 700,525)});
			this.mBg.addAnim("idle",1,[0]);
			//====
			nama_file= [
				"tepung","air","selada","sugar",
				"salt","ragi","bowl",
				"sendok","woodspoon"];
			//n_anim= [2,3,5,2,1,3,2];
			sizeXY= [
				{x:162,y:180}, {x:91,y:325}, {x:70,y:248}, {x:58,y:123}, 
				{x:58,y:123}, {x:75,y:141}, {x:265,y:197}, 
				{x:213,y:34}, {x:268,y:48}];
			posXY= [
				{x:412,y:150}, {x:600,y:100}, {x:15,y:120}, {x:90,y:330},
				{x:15,y:380}, {x:580,y:350}, {x:220,y:282},
				{x:360,y:475}, {x:90,y:465}
			];
			i=0;for (i=0;i<nama_file.length;i++){
				this[nama_file[i]]= this.spawnEntity(Bg, posXY[i].x, posXY[i].y, 
					{	size:{x:sizeXY[i].x, y:sizeXY[i].y},
						onMouseUp:function(){
							ig.game.clickBahan(this);
						}
					});
				this[nama_file[i]].animSheet= new ig.AnimationSheet("media/"+nama_file[i]+".png", sizeXY[i].x, sizeXY[i].y);
				this[nama_file[i]].addAnim("idle",1,[0]);
				if (nama_file[i]=="bowl"){
					this[nama_file[i]].animSheet= new ig.AnimationSheet( 'media/bowl_tepung.png', 355, 369 );
					this[nama_file[i]].addAnim("bowl_tepung", 0.033, [0,0,0,0,1,1,1,1,1,2,2,2,2,2,3,3,3,3,3,4,4,4,4,4,5,5,5,5,5,6,6,6,6,6,7,7,7,7,7,8,8,8,8,8,9,9,9,9,9,10,10,10,10,10,11,11,11,11,11,11], true);

					this[nama_file[i]].animSheet= new ig.AnimationSheet( 'media/bowl_aduk1.png', 352, 394 );
					this[nama_file[i]].addAnim("bowl_aduk1", 0.033, [0,0,0,0,1,1,1,1,1,2,2,2,2,2,3,3,3,3,3,4,4,4,4,4,5,5,5,5,5,6,6,6,6,6,7,7,7,7,7,7], true);

					this[nama_file[i]].animSheet= new ig.AnimationSheet( 'media/bowl_air.png', 496, 317 );
					this[nama_file[i]].addAnim("bowl_air", 0.033, [0,0,0,0,1,1,1,1,1,2,2,2,2,2,3,3,3,3,3,4,4,4,4,4,5,5,5,5,5,6,6,6,6,6,7,7,7,7,7,8,8,8,8,8,9,9,9,9,9,10,10,10,10,10,11,11,11,11,11,12,12,12,12,12,12], true);

					this[nama_file[i]].animSheet= new ig.AnimationSheet( 'media/bowl_minyak.png', 368, 305 );
					this[nama_file[i]].addAnim("bowl_minyak", 0.033, [0,0,0,0,1,1,1,1,1,2,2,2,2,2,3,3,3,3,3,4,4,4,4,4,5,5,5,5,5,6,6,6,6,6,7,7,7,7,7,8,8,8,8,8,9,9,9,9,9,10,10,10,10,10,11,11,11,11,11,11], true);

					this[nama_file[i]].animSheet= new ig.AnimationSheet( 'media/bowl_aduk2.png', 352, 394 );
					this[nama_file[i]].addAnim("bowl_aduk2", 0.033, [0,0,0,0,1,1,1,1,1,2,2,2,2,2,3,3,3,3,3,4,4,4,4,4,5,5,5,5,5,5], true);

					this[nama_file[i]].animSheet= new ig.AnimationSheet( 'media/bowl_ragi.png', 265, 197 );
					this[nama_file[i]].addAnim("bowl_ragi", 0.033, [0]);

					this[nama_file[i]].animSheet= new ig.AnimationSheet( 'media/bowl_sugar.png', 265, 197 );
					this[nama_file[i]].addAnim("bowl_sugar", 0.033, [0]);

					this[nama_file[i]].animSheet= new ig.AnimationSheet( 'media/bowl_salt.png', 265, 197 );
					this[nama_file[i]].addAnim("bowl_salt", 0.033, [0]);
				}else if (nama_file[i]=="sendok"){
					this[nama_file[i]].animSheet= new ig.AnimationSheet("media/"+nama_file[i]+"1.png", sizeXY[i].x, sizeXY[i].y);
					this[nama_file[i]].addAnim("1",1,[0]);
					this[nama_file[i]].animSheet= new ig.AnimationSheet("media/"+nama_file[i]+"2.png", sizeXY[i].x, sizeXY[i].y);
					this[nama_file[i]].addAnim("2",1,[0]);
				}else if (nama_file[i]=="tepung" || nama_file[i]=="selada" || nama_file[i]=="air"){
					this[nama_file[i]].animSheet= new ig.AnimationSheet("media/"+nama_file[i]+"_empty.png", sizeXY[i].x, sizeXY[i].y);
					this[nama_file[i]].addAnim("_empty",1,[0]);
				}
			}
			
			//=====
			this.sh_bowl= this.spawnEntity(Bg, 220, 282, {
				size:{x:265, y:197},
				animSheet: new ig.AnimationSheet( 'media/big_box.png', 265, 197 ),
				onMouseUp:function(){
					ig.game.clickBahan(this);
				}
			});
			this.sh_bowl.addAnim("idle",1,[0]);
			this.sh_bowl.currentAnim.alpha= 0;

			//=====
			this.arrow= this.spawnEntity(Bg_noclick, 700, 0, {
				ctr:0,
				dy:1,
				update:function(){
					this.ctr++;
					this.pos.y+=this.dy;
					if (this.ctr>=15){
						this.ctr=0;
						this.dy=-(this.dy);
					}
				}
			});
			this.arrow.animSheet= new ig.AnimationSheet("media/arrow.png", 60, 128);
			this.arrow.addAnim("idle",1,[0]);
			//=====
			this.btNext= this.spawnEntity(Bg, 700+550, 450, {
				size:{x:132, y:63},
				animSheet: new ig.AnimationSheet( 'media/btn_next.png', 132, 63 ),
				onMouseUp:function(){
                     
					ig.system.setGame(gameplay3);
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
			//this.fontNotes.draw(this.strNotes, 20, 20, ig.Font.ALIGN.LEFT);
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
					this.next_grab= this.tepung;
				}else if (this.step==2 || this.step==3 || this.step==4){
					this.next_grab= this.sendok;					
				}else if (this.step==5 || this.step==8){
					this.next_grab= this.woodspoon;
				}else if (this.step==6){
					this.next_grab= this.air;
				}else if (this.step==7){
					this.next_grab= this.selada;
				}
				this.bahan_active= this.next_grab;
				this.mode= 99;
			}else if (this.mode==1){
				this.ctr_anim--;
				if (this.ctr_anim<=0){
					if (this.step==1 || (this.step>=5 && this.step<=8)){
						this.grab.pos.x-= 700;
					}
					this.step++
					if (this.step<9){
						this.mode= 0;
					}else{
						this.btNext.pos.x-=700;
						this.mode= 99;
					}
					
				}
			}
		},

		clickBahan:function(thisku){
			if (this.step>=9)return;
			if (this.ctr_anim>0)return;
			if (this.next_grab!=thisku)return;
			if (thisku==this.sh_bowl){
				this.arrow.pos.x+= 700;
				if (this.grab==this.tepung){
					this.bowl.pos.y-= 173;
					this.bowl.currentAnim= this.bowl.anims["bowl_tepung"].rewind();
					this.tepung.pos.x+= 700;
					this.tepung.currentAnim= this.tepung.anims["_empty"].rewind();
					this.ctr_anim= 120;
				}else if (this.grab==this.ragi || this.grab==this.sugar || this.grab==this.salt){
					if (this.grab==this.ragi){
						this.bowl.pos.y+= 173;
						this.bowl.currentAnim= this.bowl.anims["bowl_ragi"].rewind();
					}else if (this.grab==this.sugar){
						this.bowl.currentAnim= this.bowl.anims["bowl_sugar"].rewind();
					}else{
						this.bowl.currentAnim= this.bowl.anims["bowl_salt"].rewind();
					}
					this.sendok.currentAnim= this.sendok.anims["idle"].rewind();
					this.ctr_anim= 10;
				}else if (this.grab==this.woodspoon){
					if (this.step==5){
						this.bowl.pos.x-= 43;
						this.bowl.pos.y-= 198;
						this.bowl.currentAnim= this.bowl.anims["bowl_aduk1"].rewind();
					}else{
						this.bowl.pos.x+= 61;
						this.bowl.pos.y-= 89;
						this.bowl.currentAnim= this.bowl.anims["bowl_aduk2"].rewind();
					}
					this.woodspoon.pos.x+= 700;
					this.ctr_anim= 120;
				}else if (this.grab==this.air){
					this.bowl.pos.x+= 43;
					this.bowl.pos.y+= 77;
					this.bowl.currentAnim= this.bowl.anims["bowl_air"].rewind();
					this.air.pos.x+= 700;
					this.air.currentAnim= this.air.anims["_empty"].rewind();
					this.ctr_anim= 120;
				}else if (this.grab==this.selada){
					this.bowl.pos.x-= 104;
					this.bowl.pos.y+= 12;
					this.bowl.currentAnim= this.bowl.anims["bowl_minyak"].rewind();
					this.selada.pos.x+= 700;
					this.selada.currentAnim= this.selada.anims["_empty"].rewind();
					this.ctr_anim= 120;
				}
				this.mode= 1;
			}else if (
					thisku==this.tepung || thisku==this.ragi || thisku==this.sugar || thisku==this.salt ||
					thisku==this.woodspoon || thisku==this.air || thisku==this.selada
					){
				this.grab= thisku;
				this.arrow.pos.x= 320;
				this.arrow.pos.y= 160;
				this.next_grab= this.sh_bowl;
				if (thisku==this.ragi){
					this.sendok.currentAnim= this.sendok.anims["1"].rewind();
				}else if (thisku==this.sugar || thisku==this.salt){
					this.sendok.currentAnim= this.sendok.anims["2"].rewind();
				}
			}else if (thisku==this.sendok){
				this.grab= thisku;
				if (this.step==2){
					this.arrow.pos.x= 585;
					this.arrow.pos.y= 225;
					this.next_grab= this.ragi;
				}else if (this.step==3){
					this.arrow.pos.x= 90;
					this.arrow.pos.y= 200;
					this.next_grab= this.sugar;
				}else if (this.step==4){
					this.arrow.pos.x= 15;
					this.arrow.pos.y= 250;
					this.next_grab= this.salt;
				}
			}else if (thisku==this.ragi){

			}
		},

		fnPause:function(){},
		fnResume:function(){},
		onPreloaded:function() {console.log("gameplay2");}
	});
});