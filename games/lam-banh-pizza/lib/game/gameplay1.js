ig.module('game.gameplay1')

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
	gameplay1 = ig.Game.extend({
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
			this.status_over= 0;
			
			this.ctr= 0;
			this.ctr_hour= 0; this.ctr_minute= 3; this.ctr_second= 0;
			this.ctr_anim= 0;
			this.step= 1;
			this.grab = null;
			this.next_grab = null;
			this.bahan_active = null;
			this.arrowX_bahan= [415,230,80,70,560,200,500];
			this.arrowY_bahan= [80,80,260,80,90,150,-50];
			//Create BG
			this.mBg= this.spawnEntity(Bg_noclick, 0, 0, 
				{animSheet: new ig.AnimationSheet("media/bg_game1.png", 700,525)});
			this.mBg.addAnim("idle",1,[0]);
			//=====Alat
			nama_file= ["talenan","parutan","knife"];
			sizeX= [326,106,76];
			sizeY= [157,179,179];
			posX= [265,490,600];
			posY= [335,30,335];
			i=0;for (i=0;i<nama_file.length;i++){
				this[nama_file[i]]= this.spawnEntity(Bg, posX[i], posY[i], 
					{	size:{x:sizeX[i], y:sizeY[i]},
						animSheet: new ig.AnimationSheet("media/"+nama_file[i]+".png", sizeX[i], sizeY[i]),
						onMouseUp:function(){
							ig.game.clickAlat(this);
						}
					});
				this[nama_file[i]].addAnim("idle",1,[0]);
			}
			//=====Bahan
			nama_file= ["meat","paprika","jamur","bawang","keju","sosis","corn"];
			n_anim= [2,3,5,2,1,3,2];
			sizeXY= [{x:196,y:128}, {x:165,y:141}, {x:135,y:91}, {x:169,y:126}, 
					{x:178,y:132}, {x:194,y:139}, {x:201,y:148}];
			posXY= [
				{x:340,y:200},
				{x:180,y:190},
				{x:155,y:293},
				{x:10,y:210},
				{x:10,y:280},
				{x:10,y:365},
				{x:495,y:185}
			];
			i=0;for (i=0;i<7;i++){
				this[nama_file[i]]= this.spawnEntity(Bg, posXY[i].x, posXY[i].y, 
					{	size:{x:sizeXY[i].x, y:sizeXY[i].y},
						onMouseUp:function(){
							ig.game.clickBahan(this);
						}
					});
				this[nama_file[i]].max_anim= n_anim[i];
				this[nama_file[i]].pos_anim= 1;
				j=0; for(j=1;j<=n_anim[i];j++){
					this[nama_file[i]].animSheet= new ig.AnimationSheet("media/"+nama_file[i]+j+".png", sizeXY[i].x, sizeXY[i].y);
					this[nama_file[i]].addAnim(j,1,[0]);
				}
			}
			//=====Animasi Bahan
			n_anim= [8,20,2,24,24,13,9];
			sizeXY= [{x:232,y:128},{x:221,y:164},{x:168,y:63},{x:184,y:147},{x:262,y:325},{x:238,y:76},{x:132,y:250}];
			posXY= [
				{x:335,y:340},
				{x:325,y:320},
				{x:340,y:370},
				{x:305,y:330},
				{x:300,y:145},
				{x:300,y:365},
				{x:360,y:210}
			];
			i=0;for (i=0;i<7;i++){
				this["anim_"+nama_file[i]]= this.spawnEntity(Bg, 700+ posXY[i].x, posXY[i].y, 
					{	size:{x:sizeXY[i].x, y:sizeXY[i].y},
						onMouseUp:function(){
							ig.game.clickAnim(this);
						}
					});
				j=0; for(j=0;j<=n_anim[i];j++){
					this["anim_"+nama_file[i]].animSheet= new ig.AnimationSheet("media/anim_"+nama_file[i]+j+".png", sizeXY[i].x, sizeXY[i].y);
					this["anim_"+nama_file[i]].addAnim(j,1,[0]);
				}
				this["anim_"+nama_file[i]].pos_anim= 0;
				this["anim_"+nama_file[i]].max_anim= n_anim[i];
			}
			//=====
			this.arrow= this.spawnEntity(Bg_noclick, 700, 0, 
				{	ctr:0,
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
                     
					ig.system.setGame(gameplay2);
				}
			});
			this.btNext.addAnim("idle",1,[0]);
			//=====
			createSound(600,10,88,76);
			createLogo(10,10);
			//=====
			// load the resources
			ig.ready = true;
			// Start the custom preloader with the captured resources
			this.loader = new IntermediateLoader2( null, ig.resources, this.onPreloaded );
			this.loader.load();
			//GameAPI.GameBreak.request(ig.game.fnPause, ig.game.fnResume);
		},

		draw:function() {
			if (this.loader == null) {this.parent();}
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
					this.next_grab= this.meat;
				}else if (this.step==2){
					this.next_grab= this.paprika;
				}else if (this.step==3){
					this.next_grab= this.sosis;
				}else if (this.step==4){
					this.next_grab= this.bawang;
				}else if (this.step==5){
					this.next_grab= this.corn;
				}else if (this.step==6){
					this.next_grab= this.jamur;
				}else if (this.step==7){
					this.next_grab= this.parutan;
				}
				this.bahan_active= this.next_grab;
				this.mode= 99;
			}else if (this.mode==1){
				this.ctr++;
				if (this.ctr>=60){
					this.ctr= 0;
					if (this.step<8){
						this.mode= 0;
					}else{
						this.btNext.pos.x-= 700;
						this.mode= 99;
					}
					
				}
			}
		},

		clickBahan:function(thisku){
			if (this.next_grab != thisku)return;
			if (thisku==this.meat || thisku==this.paprika || thisku==this.sosis || thisku==this.bawang ||
				thisku==this.corn || thisku==this.jamur || thisku==this.keju) {
				//if (this.step!=1)return;
				this.grab= thisku;
				this.arrow.pos.x= 390;
				this.arrow.pos.y= 250;
				if (thisku==this.keju){
					this.next_grab= this.anim_keju;
				}else{
					this.next_grab= this.talenan;	
				}
			}
		},

		clickAlat:function(thisku){
            if ((this.arrow.pos.x < 1250)){
			if (this.next_grab != thisku)return;
			if (thisku==this.talenan){
				if (this.grab==null)return;
				if (this.grab==this.meat){
					this.anim_meat.pos.x-= 700;
				}else if (this.grab==this.paprika){
					this.anim_paprika.pos.x-= 700;
				}else if (this.grab==this.sosis){
					this.anim_sosis.pos.x-= 700;
				}else if (this.grab==this.bawang){
					this.anim_bawang.pos.x-= 700;
				}else if (this.grab==this.corn){
					this.anim_corn.pos.x-= 700;
				}else if (this.grab==this.jamur){
					this.anim_jamur.pos.x-= 700;
				}else if (this.grab==this.parutan){
					this.anim_keju.pos.x-= 700;
				}
				if (this.grab.pos_anim<this.grab.max_anim){
					this.grab.pos_anim++;
					this.grab.currentAnim= this.grab.anims[this.grab.pos_anim].rewind();
				}else{
					this.grab.currentAnim.alpha= 0;
				}

				if (this.grab==this.parutan){
					this.arrow.pos.x= 100;
					this.arrow.pos.y= 180;
					this.next_grab= this.keju;
				}else{
					this.arrow.pos.x= 575;
					this.arrow.pos.y= 200;
					this.next_grab= this.knife;
				}
			}else if (thisku==this.knife || thisku==this.keju){
				this.arrow.pos.x+= 700;
				thisku.pos.x+= 700;
				this.grab= thisku;
			}else if (thisku==this.parutan){
				//this.arrow.pos.x+= 700;
				//thisku.pos.x+= 700;
				this.grab= thisku;
				this.arrow.pos.x= 390;
				this.arrow.pos.y= 250;
				this.next_grab= this.talenan;
			}}
		},

		clickAnim:function(thisku){
			if (this.step==7){
				if (this.grab==this.keju){
					if (this.arrow.pos.x<700)this.arrow.pos.x+=700;
					this.keju.pos.x+= 700;
					thisku.pos_anim++;
					if (thisku.pos_anim<=thisku.max_anim){
						thisku.currentAnim= thisku.anims[thisku.pos_anim].rewind();
					}else{
						this.mode= 1;
						this.step++;
					}
				}
			}else{
				if (this.grab!=this.knife)return;
				thisku.pos_anim++;
				if (thisku.pos_anim>thisku.max_anim){
					if (this.bahan_active.currentAnim.alpha==0){
						this.mode= 1;
						this.step++;
					}else{
						this.arrow.pos.x= this.arrowX_bahan[this.step-1];
						this.arrow.pos.y= this.arrowY_bahan[this.step-1];
						this.next_grab= this.bahan_active;
					}
					this.grab.pos.x-= 700;
					thisku.pos_anim= 0;
					thisku.pos.x+= 700;
				}
				thisku.currentAnim= thisku.anims[thisku.pos_anim].rewind();
			}
		},

		fnPause:function(){},
		fnResume:function(){},
		onPreloaded:function() {console.log("gameplay1");}
	});
});