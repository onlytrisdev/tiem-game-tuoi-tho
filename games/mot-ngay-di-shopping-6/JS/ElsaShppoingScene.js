var ElsaShppoingScene = cc.Scene.extend(
{
    ctor:function() 
    {
        this._super();
        this.init();
    },
    onEnter:function()
    {
        this._super();  
        cc.eventManager.addListener(
        {
            event: cc.EventListener.TOUCH_ONE_BY_ONE,
            swallowTouches: true,
            onTouchBegan: this.onTouchBegan,
            onTouchMoved: this.onTouchMoved,
            onTouchEnded: this.onTouchEnded
        }, this);
        if( 'mouse' in cc.sys.capabilities )
        {
            cc.eventManager.addListener({
                event: cc.EventListener.MOUSE,
                onMouseMove:this.onMouseMove
            }, this);
        }
    },
    init:function () 
    {
        this._super();
        this.move_tool = null;

        this.isTouchOn=false;

        this.scheduleOnce(function(){this.setTouchEnable();},1.0,"setTouchEnable");

        this.bg = cc.Sprite.create(res_elsa_shopping.shopping_bg_img);
        this.bg.setPosition(comman.winSize().width/2,comman.winSize().height/2);
        this.bg.setScale(1.0);
        this.addChild(this.bg);

        this.bg_white = cc.Sprite.create(res_comman.bg_white);
        this.bg_white.setPosition(comman.winSize().width/2,comman.winSize().height/2);
        this.bg_white.setOpacity(0);
        this.addChild(this.bg_white,199);

        this.createMainMenu();

        this.setUpChar();

        this.createPanel();

        this.prt_Sparkle = cc.ParticleSystem.create(res_comman.sparkle_1_plist);
        this.prt_Sparkle.setScale(1.0);
        this.prt_Sparkle.stopSystem();
        this.addChild(this.prt_Sparkle,11);
    },
    createPanel:function()
    {  
        this.btn_next = cc.MenuItemImage.create(res_common_button.btn_next,res_common_button.btn_next,this.onNextClick,this);
        this.btn_next.setScale(1.0);
        this.btn_next.setTag(100);
        this.btn_next.setPosition(cc.p(comman.winSize().width-this.btn_next.getContentSize().width*-1.5,this.btn_next.getContentSize().height*7.0));
    
        this.btn_done = cc.MenuItemImage.create(res_common_button.btn_done,res_common_button.btn_done,this.onDoneClick,this);
        this.btn_done.setScale(1.0);
        this.btn_done.setTag(100);
        this.btn_done.setPosition(cc.p(comman.winSize().width-this.btn_done.getContentSize().width*-1.5,this.btn_done.getContentSize().height*0.6));

        this.iconMenu = cc.Menu.create(this.btn_next,this.btn_done);
        this.iconMenu.setPosition(cc.p(0,0));
        this.addChild(this.iconMenu,10);
    },
    onDoneClick:function(sender)
    {
        if (this.isTouchOn==false){return;}

        if(Complete_Level[1]==false && Complete_Level[2]==true) 
        {
            this.scheduleOnce(function(){this.onNextScene1()},0.1,"onNextScene1");
        }
        else
        {
            this.scheduleOnce(function(){this.onNextScene()},0.1,"onNextScene");
        }

    },
    onNextClick:function(sender)
    {
        if (this.isTouchOn==false){return;}
                  
    // this.Layer_item[RunningElsaCharItem].stopAllActions();
    // this.Layer_item[RunningElsaCharItem].runAction(cc.Sequence.create(cc.DelayTime.create(0.25),cc.EaseBackIn.create(cc.MoveTo.create(0.5,cc.p(800,this.Layer_item[RunningElsaCharItem].getPositionY())))));
        
        if(Complete_Level[1]==false && Complete_Level[2]==true) 
        {
            this.scheduleOnce(function(){this.onNextScene1()},0.1,"onNextScene1");
        }
        else
        {
            this.scheduleOnce(function(){this.onNextScene()},0.1,"onNextScene");
        }
    },
    setTouchEnable:function()
    {
        this.isTouchOn=true;
    },
    setUpChar:function()
    {
        this.Layer_char = cc.Layer.create();
        this.Layer_char.setPosition(cc.p(0,0));
        this.addChild(this.Layer_char);
        this.Layer_char.setScale(1.0);
        this.Layer_char.setLocalZOrder(1);
    
        this.cupboard = cc.Sprite.create("RES/SS/cupboard_"+RunningElsaCharItem+".png");
        this.cupboard.setPosition(cc.p(252,400));
        this.cupboard.setScale(1.0);
        this.Layer_char.addChild(this.cupboard);

        this.char_elsa_body = cc.Sprite.create(res_elsa_shopping.char_elsa_body_img);
        this.char_elsa_body.setPosition(cc.p(252,400));
        this.char_elsa_body.setScale(1.0);
        this.addChild(this.char_elsa_body,2);

        this.Layer_item = [];
        this.Cart_Layer_item = [];
        this.ch_thumb_item = [];
        this.ch_Small_thumb_item = [];
        this.cart_item = [];
        this.char_item_price_tag = [];
        this.char_item_price_tag_label = [];

        this.pos_char_thumb_item = [];
        this.pos_char_thumb_item[1] = [];
        this.pos_char_thumb_item[2] = [];
        this.pos_char_thumb_item[3] = [];
        this.pos_char_thumb_item[4] = [];

        this.pos_cart_item = [];
        this.pos_cart_item[1] = [];
        this.pos_cart_item[2] = [];
        this.pos_cart_item[3] = [];
        this.pos_cart_item[4] = [];

        this.pos_char_item_price_tag = [];
        this.pos_char_item_price_tag[1] = [];
        this.pos_char_item_price_tag[2] = [];
        this.pos_char_item_price_tag[3] = [];
        this.pos_char_item_price_tag[4] = [];

        this.char_item_price_tag_label_value = [];
        this.char_item_price_tag_label_value[1] = [];
        this.char_item_price_tag_label_value[2] = [];
        this.char_item_price_tag_label_value[3] = [];
        this.char_item_price_tag_label_value[4] = [];

        this.pos_char_thumb_item[1][1] = cc.p(35,590);
        this.pos_char_thumb_item[1][2] = cc.p(135,595);
        this.pos_char_thumb_item[1][3] = cc.p(235,600);
        this.pos_char_thumb_item[1][4] = cc.p(45,350);
        this.pos_char_thumb_item[1][5] = cc.p(150,355);
        this.pos_char_thumb_item[1][6] = cc.p(245,360);

        this.pos_char_thumb_item[2][1] = cc.p(75,630);
        this.pos_char_thumb_item[2][2] = cc.p(200,630);
        this.pos_char_thumb_item[2][3] = cc.p(75,470);
        this.pos_char_thumb_item[2][4] = cc.p(200,470);
        this.pos_char_thumb_item[2][5] = cc.p(75,320);
        this.pos_char_thumb_item[2][6] = cc.p(200,320);

        this.pos_char_thumb_item[3][1] = cc.p(75,640);
        this.pos_char_thumb_item[3][2] = cc.p(200,640);
        this.pos_char_thumb_item[3][3] = cc.p(75,480);
        this.pos_char_thumb_item[3][4] = cc.p(200,480);
        this.pos_char_thumb_item[3][5] = cc.p(75,320);
        this.pos_char_thumb_item[3][6] = cc.p(200,320);

        this.pos_char_thumb_item[4][1] = cc.p(75,640);
        this.pos_char_thumb_item[4][2] = cc.p(200,640);
        this.pos_char_thumb_item[4][3] = cc.p(75,480);
        this.pos_char_thumb_item[4][4] = cc.p(200,480);
        this.pos_char_thumb_item[4][5] = cc.p(75,320);
        this.pos_char_thumb_item[4][6] = cc.p(200,320);

        this.pos_cart_item[1][1] = cc.p(95,260);
        this.pos_cart_item[1][2] = cc.p(140,260);
        this.pos_cart_item[1][3] = cc.p(195,260);
        this.pos_cart_item[1][4] = cc.p(85,215);
        this.pos_cart_item[1][5] = cc.p(130,215);
        this.pos_cart_item[1][6] = cc.p(195,215);

        this.pos_cart_item[2][1] = cc.p(95,230);
        this.pos_cart_item[2][2] = cc.p(140,230);
        this.pos_cart_item[2][3] = cc.p(195,230);
        this.pos_cart_item[2][4] = cc.p(85,200);
        this.pos_cart_item[2][5] = cc.p(130,200);
        this.pos_cart_item[2][6] = cc.p(195,200);

        this.pos_cart_item[3][1] = cc.p(95,230);
        this.pos_cart_item[3][2] = cc.p(140,230);
        this.pos_cart_item[3][3] = cc.p(195,230);
        this.pos_cart_item[3][4] = cc.p(85,180);
        this.pos_cart_item[3][5] = cc.p(130,180);
        this.pos_cart_item[3][6] = cc.p(195,180);

        this.pos_cart_item[4][1] = cc.p(95,230);
        this.pos_cart_item[4][2] = cc.p(140,230);
        this.pos_cart_item[4][3] = cc.p(195,230);
        this.pos_cart_item[4][4] = cc.p(95,210);
        this.pos_cart_item[4][5] = cc.p(140,210);
        this.pos_cart_item[4][6] = cc.p(195,200);
        
        this.pos_char_item_price_tag[1][1] = cc.p(55,640);
        this.pos_char_item_price_tag[1][2] = cc.p(155,650);
        this.pos_char_item_price_tag[1][3] = cc.p(255,650);
        this.pos_char_item_price_tag[1][4] = cc.p(60,405);
        this.pos_char_item_price_tag[1][5] = cc.p(165,410);
        this.pos_char_item_price_tag[1][6] = cc.p(260,425);

        this.pos_char_item_price_tag[2][1] = cc.p(110,640);
        this.pos_char_item_price_tag[2][2] = cc.p(235,640);
        this.pos_char_item_price_tag[2][3] = cc.p(105,490);
        this.pos_char_item_price_tag[2][4] = cc.p(225,490);
        this.pos_char_item_price_tag[2][5] = cc.p(105,340);
        this.pos_char_item_price_tag[2][6] = cc.p(230,340);

        this.pos_char_item_price_tag[3][1] = cc.p(110,640);
        this.pos_char_item_price_tag[3][2] = cc.p(240,640);
        this.pos_char_item_price_tag[3][3] = cc.p(105,490);
        this.pos_char_item_price_tag[3][4] = cc.p(230,490);
        this.pos_char_item_price_tag[3][5] = cc.p(95,335);
        this.pos_char_item_price_tag[3][6] = cc.p(225,335);

        this.pos_char_item_price_tag[4][1] = cc.p(105,660);
        this.pos_char_item_price_tag[4][2] = cc.p(230,660);
        this.pos_char_item_price_tag[4][3] = cc.p(110,490);
        this.pos_char_item_price_tag[4][4] = cc.p(230,490);
        this.pos_char_item_price_tag[4][5] = cc.p(110,340);
        this.pos_char_item_price_tag[4][6] = cc.p(235,340);

        this.char_item_price_tag_label_value[1][1] = 1150;                
        this.char_item_price_tag_label_value[1][2] = 1250;
        this.char_item_price_tag_label_value[1][3] = 950;
        this.char_item_price_tag_label_value[1][4] = 1050;
        this.char_item_price_tag_label_value[1][5] = 1000;
        this.char_item_price_tag_label_value[1][6] = 1500;

        this.char_item_price_tag_label_value[2][1] = 950;
        this.char_item_price_tag_label_value[2][2] = 850;
        this.char_item_price_tag_label_value[2][3] = 750;
        this.char_item_price_tag_label_value[2][4] = 850;
        this.char_item_price_tag_label_value[2][5] = 950;
        this.char_item_price_tag_label_value[2][6] = 1000;

        this.char_item_price_tag_label_value[3][1] = 600;
        this.char_item_price_tag_label_value[3][2] = 650;
        this.char_item_price_tag_label_value[3][3] = 550;
        this.char_item_price_tag_label_value[3][4] = 750;
        this.char_item_price_tag_label_value[3][5] = 850;
        this.char_item_price_tag_label_value[3][6] = 800;

        this.char_item_price_tag_label_value[4][1] = 800;
        this.char_item_price_tag_label_value[4][2] = 900;
        this.char_item_price_tag_label_value[4][3] = 1000;
        this.char_item_price_tag_label_value[4][4] = 750;
        this.char_item_price_tag_label_value[4][5] = 1150;
        this.char_item_price_tag_label_value[4][6] = 1200;


        for (var i = RunningElsaCharItem; i <= RunningElsaCharItem; i++) 
        {
            this.ch_thumb_item[i]=[];
            this.ch_Small_thumb_item[i]=[];
            this.cart_item[i]=[];
            this.char_item_price_tag[i] = [];
            this.char_item_price_tag_label[i] = [];

            this.Layer_item[i] = cc.Layer.create();
            this.Layer_item[i].setPosition(cc.p(0,0));
            this.Layer_item[i].setScale(1.0);
            this.addChild(this.Layer_item[i]);

            this.Cart_Layer_item[i] = cc.Layer.create();
            this.Cart_Layer_item[i].setPosition(cc.p(0,0));
            this.Cart_Layer_item[i].setScale(1.0);
            this.addChild(this.Cart_Layer_item[i]);
      
            this.compeletedPart = 6;
            
            for (var j = 1; j <= 6; j++) 
            {
                this.ch_thumb_item[i][j] = cc.Sprite.create("RES/SS/ELSA/Char_thumb_item_"+i+"_"+j+".png");
                this.ch_thumb_item[i][j].setPosition(this.pos_char_thumb_item[i][j]);
                this.ch_thumb_item[i][j].setScale(0.0);
                this.Layer_item[i].addChild(this.ch_thumb_item[i][j]);
                this.Layer_item[i].setLocalZOrder(1);
                this.ch_thumb_item[i][j].setTag((i*100)+j);
      
                this.ch_Small_thumb_item[i][j] = cc.Sprite.create("RES/SS/ELSA/Cart_thumb_item_"+i+"_"+j+".png");
                this.ch_Small_thumb_item[i][j].setPosition(this.pos_char_thumb_item[i][j]);
                this.ch_Small_thumb_item[i][j].setScale(0.0);
                this.Layer_item[i].addChild(this.ch_Small_thumb_item[i][j]);

                this.cart_item[i][j] = cc.Sprite.create("RES/SS/ELSA/Cart_thumb_item_"+i+"_"+j+".png");
                this.cart_item[i][j].setPosition(this.pos_cart_item[i][j]);
                this.cart_item[i][j].setScale(0.0);
                this.Cart_Layer_item[i].addChild(this.cart_item[i][j]);
                this.Cart_Layer_item[i].setLocalZOrder(3);

                if(i==3)
                {
                    this.char_item_price_tag[i][j] = cc.Sprite.create("RES/COM/Price_Tag_Side.png");              
                }
                else
                {
                    this.char_item_price_tag[i][j] = cc.Sprite.create("RES/COM/price_tag.png");    
                }
                
                this.char_item_price_tag[i][j].setPosition(this.pos_char_item_price_tag[i][j]);
                this.char_item_price_tag[i][j].setScale(0.0);
                this.Layer_item[i].addChild(this.char_item_price_tag[i][j]);


                this.char_item_price_tag_label[i][j] = cc.LabelTTF.create("$"+this.char_item_price_tag_label_value[i][j],'oleoScriptSwashCaps_regular' , 15);
                // this.char_item_price_tag_label[i][j].setRotation(45);
                // if(i==3)
                // {
                //     this.char_item_price_tag_label[i][j].setRotation(0);
                // }
                this.char_item_price_tag_label[i][j].setScale(0.0);
                this.char_item_price_tag_label[i][j].setPosition(cc.p(this.pos_char_item_price_tag[i][j].x,this.pos_char_item_price_tag[i][j].y-10));
                this.Cart_Layer_item[i].addChild(this.char_item_price_tag_label[i][j]);
                
            }
        }

        for (var j = 1; j <= 6; j++) 
        {
            this.ch_thumb_item[RunningElsaCharItem][j].setScale(1.0);
            this.char_item_price_tag[RunningElsaCharItem][j].setScale(1.0);
            this.char_item_price_tag_label[RunningElsaCharItem][j].setScale(1.0);
        }

        this.cart_front = cc.Sprite.create(res_elsa_shopping.elsa_cart_front_img);
        this.cart_front.setPosition(cc.p(252,400));
        this.cart_front.setScale(1.0);
        this.addChild(this.cart_front,5);

        SelctedElsaItem[RunningElsaCharItem].push("RES/DS/C1/"+RunningElsaCharItem+"_0.png");
    },
    EnteryTotalCost:function()
    {
        this.Layer_total = cc.Layer.create();
        this.Layer_total.setPosition(cc.p(0,0));
        this.addChild(this.Layer_total);
        this.Layer_total.setScale(1.0);
        this.Layer_total.setLocalZOrder(5);

        this.Total_bg = cc.Sprite.create(res_elsa_shopping.elsa_total_shopping_cost_img);
        this.Total_bg.setPosition(cc.p(252,400));
        this.Total_bg.setScale(1.0);
        this.Layer_total.addChild(this.Total_bg);

        this.Total_dress_Price = cc.LabelTTF.create("$"+Elsa_Total_dress_Price_value,'oleoScriptSwashCaps_regular' , 20);
        this.Total_dress_Price.setScale(1.0);
        this.Total_dress_Price.setPosition(cc.p(380,610));
        this.Layer_total.addChild(this.Total_dress_Price);

        this.Total_hair_Price = cc.LabelTTF.create("$"+Elsa_Total_hair_Price_value,'oleoScriptSwashCaps_regular' , 20);
        this.Total_hair_Price.setScale(1.0);
        this.Total_hair_Price.setPosition(cc.p(380,515));
        this.Layer_total.addChild(this.Total_hair_Price);

        this.Total_headdecoration_Price = cc.LabelTTF.create("$"+Elsa_Total_headdecoration_Price_value,'oleoScriptSwashCaps_regular' , 20);
        this.Total_headdecoration_Price.setScale(1.0);
        this.Total_headdecoration_Price.setPosition(cc.p(380,410));
        this.Layer_total.addChild(this.Total_headdecoration_Price);

        this.Total_shoes_Price = cc.LabelTTF.create("$"+Elsa_Total_shoes_Price_value,'oleoScriptSwashCaps_regular' , 20);
        this.Total_shoes_Price.setScale(1.0);
        this.Total_shoes_Price.setPosition(cc.p(380,310));
        this.Layer_total.addChild(this.Total_shoes_Price);

        this.all_total_Price = cc.LabelTTF.create("$"+(Elsa_Total_dress_Price_value+Elsa_Total_hair_Price_value+Elsa_Total_shoes_Price_value+Elsa_Total_headdecoration_Price_value),'oleoScriptSwashCaps_regular' , 30);
        this.all_total_Price.setScale(1.0);
        this.all_total_Price.setPosition(cc.p(380,205));
        this.Layer_total.addChild(this.all_total_Price);
    },
    onTouchBegan:function(touch, event)
    {
        var tp = touch.getLocation();
        var self = event.getCurrentTarget();

        for (var j = 1; j <= 6; j++) 
        {
            if(cc.rectContainsPoint(self.ch_thumb_item[RunningElsaCharItem][j].getBoundingBox(),tp) && self.ch_thumb_item[RunningElsaCharItem][j].isVisible() == true && self.ch_thumb_item[RunningElsaCharItem][j].getNumberOfRunningActions() == 0 && self.ch_thumb_item[RunningElsaCharItem][j].getTag()!=1000)
            {
                self.ch_Small_thumb_item[RunningElsaCharItem][j].setLocalZOrder(10);
                self.char_item_price_tag_label[RunningElsaCharItem][j].setScale(0.0);
                self.char_item_price_tag[RunningElsaCharItem][j].setScale(0.0);
                self.ch_Small_thumb_item[RunningElsaCharItem][j].runAction(cc.Sequence.create(cc.ScaleTo.create(0.0,1.0),cc.EaseBackIn.create(cc.MoveTo.create(0.5,self.cart_item[RunningElsaCharItem][j].getPosition())),cc.ScaleTo.create(0.0,0.0)));
                self.cart_item[RunningElsaCharItem][j].runAction(cc.Sequence.create(cc.DelayTime.create(0.5),cc.ScaleTo.create(0.0,1.0)));
                self.ch_thumb_item[RunningElsaCharItem][j].setTag(1000);


                SelctedElsaItem[RunningElsaCharItem].push("RES/DS/C1/"+RunningElsaCharItem+"_"+j+".png");
                // console.log(SelctedElsaItem[RunningElsaCharItem].length);    
               
                if(RunningElsaCharItem==1)
                {
                    // Elsa_item_1_counter=Elsa_item_1_counter+1;
                    Elsa_Total_dress_Price_value = Elsa_Total_dress_Price_value+self.char_item_price_tag_label_value[RunningElsaCharItem][j];
                
                }
                if(RunningElsaCharItem==2)
                {
                    // Elsa_item_2_counter=Elsa_item_2_counter+1;
                    Elsa_Total_hair_Price_value = Elsa_Total_hair_Price_value+self.char_item_price_tag_label_value[RunningElsaCharItem][j];
                
                }
                if(RunningElsaCharItem==3)
                {
                    // Elsa_item_5_counter=Elsa_item_5_counter+1;
                    Elsa_Total_headdecoration_Price_value = Elsa_Total_headdecoration_Price_value+self.char_item_price_tag_label_value[RunningElsaCharItem][j];

                }
                if(RunningElsaCharItem==4)
                {
                    // Elsa_item_4_counter=Elsa_item_4_counter+1;
                    Elsa_Total_shoes_Price_value =Elsa_Total_shoes_Price_value+self.char_item_price_tag_label_value[RunningElsaCharItem][j];
               
                }
                
                // console.log("Total_dress_Price_value ="+ Elsa_Total_dress_Price_value);
                // console.log("Total_hair_Price_value ="+ Elsa_Total_hair_Price_value);
                // console.log("Total_ornaments_Price_value ="+ Elsa_Total_ornaments_Price_value);
                // console.log("Total_shoes_Price_value ="+ Elsa_Total_shoes_Price_value);
                // console.log("Total_headdecoration_Price_value ="+ Elsa_Total_headdecoration_Price_value);
                // console.log("Total ="+ (Elsa_Total_dress_Price_value+Elsa_Total_hair_Price_value+Elsa_Total_ornaments_Price_value+Elsa_Total_shoes_Price_value+Elsa_Total_headdecoration_Price_value));

                       
                self.compeletedPart--;

                if(self.compeletedPart == 2)
                {
                    if(RunningElsaCharItem==1)
                    {
                        self.btn_next.stopAllActions();
                        self.btn_next.setPosition(cc.p(comman.winSize().width-self.btn_next.getContentSize().width*-1.5,self.btn_next.getContentSize().height*8.5));
                        self.btn_next.runAction(cc.Sequence.create(cc.MoveTo.create(0.5,cc.p(comman.winSize().width*0.56,self.btn_next.getPositionY()))));
                    }
                    if(RunningElsaCharItem==2)
                    {
                        self.btn_next.stopAllActions();
                        self.btn_next.setPosition(cc.p(comman.winSize().width-self.btn_next.getContentSize().width*-1.5,self.btn_next.getContentSize().height*8.5));
                        self.btn_next.runAction(cc.Sequence.create(cc.MoveTo.create(0.5,cc.p(comman.winSize().width*0.56,self.btn_next.getPositionY()))));
                    }
                    if(RunningElsaCharItem==3)
                    {
                        self.btn_next.stopAllActions();
                        self.btn_next.setPosition(cc.p(comman.winSize().width-self.btn_next.getContentSize().width*-1.5,self.btn_next.getContentSize().height*8.5));
                        self.btn_next.runAction(cc.Sequence.create(cc.MoveTo.create(0.5,cc.p(comman.winSize().width*0.56,self.btn_next.getPositionY()))));
                    }
                    if(RunningElsaCharItem==4)
                    {
                        self.btn_done.stopAllActions();
                        self.btn_done.runAction(cc.Sequence.create(cc.MoveTo.create(0.5,cc.p(comman.winSize().width*0.91,self.btn_done.getPositionY()))));
                    }

                }
                break;
            }
        }

        return true;
    },
    onTouchMoved:function(touch, event) 
    {
        var tp = touch.getLocation();
        var self = event.getCurrentTarget();
        // self.pos_char_item_price_tag[1][1].setPosition(tp);
        // // self.ch_item[self.runningChar][self.itemTAG].setPosition(tp);
        // console.log('setPosition(cc.p(' + tp.x.toFixed(0) + ','  + tp.y.toFixed(0)+'));');
   
        if(self.move_tool != null)
        {
            self.move_tool.setPosition(tp);
            // console.log('No : '+self.move_tool.getTag()+' cc.p(' + tp.x.toFixed(0) + ','  + tp.y.toFixed(0)+')');
        }
    },
    onTouchEnded:function(touch, event) 
    {
        var tp = touch.getLocation();
        var self = event.getCurrentTarget();
        // console.log('setPosition(cc.p(' + tp.x.toFixed(0) + ','  + tp.y.toFixed(0)+'));');
        if(self.move_tool != null)
        {
            self.move_tool = null;
        }
    },
    onMouseMove:function(event)
    {
        var tp = event.getLocation();
        var self = event.getCurrentTarget();
        
        if(self.btn_next && cc.rectContainsPoint(self.btn_next.getBoundingBox(),tp)  && self.btn_next.getScale()==1.0 && self.btn_next.getNumberOfRunningActions()==0)
        {
            self.prt_Sparkle.setPosition(self.btn_next.getPosition());
            self.prt_Sparkle.resetSystem();
            self.btn_next.setScale(1.05);
            return;
        }
        else if(self.btn_next && self.btn_next.getScale()==1.05 && !cc.rectContainsPoint(self.btn_next.getBoundingBox(),tp) && self.btn_next.getNumberOfRunningActions()==0)
        {
            self.btn_next.setScale(1.0);
            return;
        }
        else if(self.btn_more && cc.rectContainsPoint(self.btn_more.getBoundingBox(),tp)  && self.btn_more.getScale()==1.0 && self.btn_more.getNumberOfRunningActions()==0)
        {
            self.prt_Sparkle.setPosition(self.btn_more.getPosition());
            self.prt_Sparkle.resetSystem();
            self.btn_more.setScale(1.1);
            return;
        }
        else if(self.btn_more && self.btn_more.getScale()==1.1 && !cc.rectContainsPoint(self.btn_more.getBoundingBox(),tp) && self.btn_more.getNumberOfRunningActions()==0)
        {
            self.btn_more.setScale(1.0);
            return;
        }
        else if(self.btn_done && cc.rectContainsPoint(self.btn_done.getBoundingBox(),tp)  && self.btn_done.getScale()==1.0 && self.btn_done.getNumberOfRunningActions()==0)
        {
            self.prt_Sparkle.setPosition(self.btn_done.getPosition());
            self.prt_Sparkle.resetSystem();
            self.btn_done.setScale(1.1);
            return;
        }
        else if(self.btn_done && self.btn_done.getScale()==1.1 && !cc.rectContainsPoint(self.btn_done.getBoundingBox(),tp) && self.btn_done.getNumberOfRunningActions()==0)
        {
            self.btn_done.setScale(1.0);
            return;
        }

        for (var i = RunningElsaCharItem; i <= RunningElsaCharItem; i++) 
        {           
            for (var j = 1; j <= 6; j++) 
            {
                if(self.ch_thumb_item[i][j] && cc.rectContainsPoint(self.ch_thumb_item[i][j].getBoundingBox(),tp)  && self.ch_thumb_item[i][j].getScale()==1.0 && self.ch_thumb_item[i][j].getNumberOfRunningActions()==0 && self.ch_thumb_item[i][j].getTag()!=1000)
                {
                    self.prt_Sparkle.setPosition(self.ch_thumb_item[i][j].getPosition());
                    self.prt_Sparkle.resetSystem();
                    self.ch_thumb_item[i][j].setScale(1.03);
                    return;
                }
                else if(self.ch_thumb_item[i][j] && self.ch_thumb_item[i][j].getScale()==1.03 && !cc.rectContainsPoint(self.ch_thumb_item[i][j].getBoundingBox(),tp) && self.ch_thumb_item[i][j].getNumberOfRunningActions()==0)
                {
                    self.ch_thumb_item[i][j].setScale(1.0);
                    return;
                }
            }
        }
    },
    onMoreApp:function(sender)
    {
        //if (this.isTouchOn==false){return;}
        if (sender.getTag()==101)
        {
            CreateLinksInGame(comman.GameId,'ElsaShppoingScene','more');
        }
        else
        {
            CreateLinksInGame(comman.GameId,'ElsaShppoingScene','logo');
        }
    },
    onMusicButton:function(sender)
    {
        if (sender.getNumberOfRunningActions()==0)
        {
            sender.stopAllActions();
            sender.runAction(cc.Sequence.create(cc.ScaleTo.create(0.0,1.0),cc.ScaleTo.create(0.2,0.9),cc.ScaleTo.create(0.2,1.0)));
            if (comman.isMusicEnable) 
            {
                sender.setNormalSpriteFrame(res_mainScene.btn_soundOff);
                sender.setSelectedSpriteFrame(res_mainScene.btn_soundOff);
                comman.setSoundEnabled(false);
            }
            else if (!comman.isMusicEnable) 
            {
                sender.setNormalSpriteFrame(res_mainScene.btn_soundOn);
                sender.setSelectedSpriteFrame(res_mainScene.btn_soundOn);
                comman.setSoundEnabled(true);
            }
        }
    },
    onNextScene:function(dt)
    {
        Complete_Elsa_Sub_Level[RunningElsaCharItem]=false;
        this.compeletedPart=0;
        if(Complete_Elsa_Sub_Level[1]==false && Complete_Elsa_Sub_Level[2]==false && Complete_Elsa_Sub_Level[3]==false && Complete_Elsa_Sub_Level[4]==false)
        {
            this.scheduleOnce(function(){this.EnteryTotalCost()},0.1,"EnteryTotalCost");
            Complete_Level[1]=false;
            Complete_Level[2]=true; 
        }
        else
        {
            RunningElsaCharItem=RunningElsaCharItem+1;
            cc.director.runScene(ElsaShppoingScene.scene());
        }
    },
    onNextScene1:function()
    {
        // for( var i=1;i<=5;i++)
        // {
        //     for(var j=0;j<=SelctedElsaItem[RunningElsaCharItem].length;j++)
        //     {
        //         console.log("Charcter Item["+i+"]["+j+"] :"+SelctedElsaItem[i][j]);
        //     }
        // }
        this.Layer_total.setScale(0.0);    
        cc.director.runScene(ChooseScene.scene());
    },
    createMainMenu:function()
    {
        this.btn_bb_icon = cc.MenuItemImage.create(res_comman.bb_icon_3,res_comman.bb_icon_3,this.onMoreApp,this);
        this.btn_bb_icon.setAnchorPoint(cc.p(0.0,1.0));
        this.btn_bb_icon.setScale(0.8);
        this.btn_bb_icon.setPosition(cc.p(0,comman.winSize().height));

        this.btn_more = cc.MenuItemImage.create(res_common_button.btn_more,res_common_button.btn_more,this.onMoreApp,this);
        this.btn_more.setScale(1.0);
        this.btn_more.setTag(101);
        this.btn_more.setPosition(cc.p(this.btn_more.getContentSize().width*0.6,this.btn_more.getContentSize().height*-1.0));
		this.btn_more.runAction(cc.Sequence.create(cc.DelayTime.create(0.0),cc.EaseBackOut.create(cc.MoveTo.create(0.5,cc.p(this.btn_more.getContentSize().width*0.6,this.btn_more.getContentSize().height*0.6)))));
       
        this.btn_music = cc.MenuItemImage.create(res_mainScene.btn_soundOn,res_mainScene.btn_soundOn,this.onMusicButton,this);
        this.btn_music.setScale(1.0);
        this.btn_music.setPosition(cc.p(comman.winSize().width-this.btn_music.getContentSize().width*0.5,comman.winSize().height-this.btn_music.getContentSize().height*0.5));

        if (!comman.isMusicEnable) 
        {
            this.btn_music.setNormalSpriteFrame(res_mainScene.btn_soundOff);
            this.btn_music.setSelectedSpriteFrame(res_mainScene.btn_soundOff);
        }
        else if (comman.isMusicEnable) 
        {
            this.btn_music.setNormalSpriteFrame(res_mainScene.btn_soundOn);
            this.btn_music.setSelectedSpriteFrame(res_mainScene.btn_soundOn);
        }
        this.MainMenu = cc.Menu.create(this.btn_bb_icon,this.btn_music,this.btn_more);
        this.MainMenu.setPosition(cc.p(0,0));
        this.addChild(this.MainMenu,4);
    },
    getRandomInt:function(min, max) 
    {

        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
});
ElsaShppoingScene.scene = function() {
    var scene = new cc.Scene();
    var layer = new ElsaShppoingScene();
    scene.addChild(layer);
    return scene;
}