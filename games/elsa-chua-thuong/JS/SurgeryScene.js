var SurgeryScene = cc.Scene.extend(
{
    ctor:function() {
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

        this.processCounter=0;

        this.process_tool=1;
        this.move_tool=0;

        this.isRoundIndicationShow=false;

        this.isTouchOn=false;
        this.scheduleOnce(function(){this.setTouchEnable();},1.0,"setTouchEnable");

        this.bg = cc.Sprite.create("RES/SS/bg.png");
        this.bg.setPosition(cc.p(252,400));
        this.bg.setScale(1.0);
        this.addChild(this.bg);
       
        this.createMainMenu();  
        
        this.setUpSurgeryScene();

        this.bg_1 = cc.Sprite.create("RES/SS/bg_1.png");
        this.bg_1.setPosition(cc.p(252,400));
        this.bg_1.setScale(1.0);
        this.addChild(this.bg_1,10);
       

        this.prt_Sparkle = cc.ParticleSystem.create(res_comman.sparkle_1_plist);
        this.prt_Sparkle.setScale(1.0);
        this.prt_Sparkle.stopSystem();
        this.addChild(this.prt_Sparkle);
        this.prt_Sparkle.setLocalZOrder(50);

        this.scheduleOnce(function(){this.SurgerySceneEnteryEffect();},0.1,"SurgerySceneEnteryEffect");
    },
    SurgerySceneEnteryEffect:function()
    {
        this.tool_1.runAction(cc.Sequence.create(cc.DelayTime.create(0.15),cc.EaseBackOut.create(cc.ScaleTo.create(0.3,1.0))));
        this.tool_1.runAction(cc.RepeatForever.create(cc.Sequence.create(cc.ScaleTo.create(0.3,1.05),cc.DelayTime.create(0.1),cc.ScaleTo.create(0.3,1.0))));
        this.tool_2.runAction(cc.Sequence.create(cc.DelayTime.create(0.25),cc.EaseBackOut.create(cc.ScaleTo.create(0.3,1.0))));
    },
    setUpSurgeryScene:function()
    {
        this.Layer_surgery_view=cc.Layer.create();
        this.Layer_surgery_view.setPosition(cc.p(0,0));
        this.addChild(this.Layer_surgery_view);
        this.Layer_surgery_view.setLocalZOrder(1);

        this.leg = cc.Sprite.create("RES/SS/leg.png");
        this.leg.setPosition(cc.p(252,400));
        this.leg.setScale(1.0);
        this.Layer_surgery_view.addChild(this.leg);

        this.skirt = cc.Sprite.create("RES/SS/skirt.png");
        this.skirt.setPosition(cc.p(252,400));
        this.skirt.setScale(1.0);
        this.Layer_surgery_view.addChild(this.skirt);

        //Bottom Panel...
        this.Bottom_panel = cc.Sprite.create("RES/SS/panel.png");
        this.Bottom_panel.setPosition(252,100);
        this.Bottom_panel.setScale(1.0);
        this.Layer_surgery_view.addChild(this.Bottom_panel);

        this.dummy_image = cc.Sprite.create(res_panel_com.dummy_img);
        this.dummy_image.setPosition(800,370);
        this.dummy_image.setScale(0.2);
        this.Layer_surgery_view.addChild(this.dummy_image);
        this.dummy_image.setOpacity(0);

        //tool_1...
        this.tool_1 = cc.Sprite.create("RES/SS/tool_1.png");
        this.tool_1.setPosition(160,90);
        this.tool_1.setScale(0.0);
        this.addChild(this.tool_1,2);

        this.tool_1_1 = cc.Sprite.create("RES/SS/tool_1_1.png");
        this.tool_1_1.setPosition(252,400);
        this.tool_1_1.setScale(0.0);
        this.addChild(this.tool_1_1,2);

        this.tool_1_round_indicator = [];
        this.tool_1_hand_indicator = [];

        for(var i=1;i<=1;i++)
        {
            this.tool_1_round_indicator[i] = cc.Sprite.create(res_panel_com.indicator_img);
            this.tool_1_round_indicator[i].setScaleX(10.0);
            this.tool_1_round_indicator[i].setScaleY(3.0);
            this.tool_1_round_indicator[i].setColor(cc.color(255,0,0));
            this.addChild(this.tool_1_round_indicator[i],-20);
            this.tool_1_round_indicator[i].setPosition(cc.p(25000,25000));
           
            this.tool_1_hand_indicator[i] = cc.Sprite.create(res_panel_com.arrow_ind_img);
            this.tool_1_hand_indicator[i].setScale(1.0);
            this.addChild(this.tool_1_hand_indicator[i],10);
            this.tool_1_hand_indicator[i].setPosition(cc.p(25000,25000));
        }

        //tool_2...
        this.tool_2 = cc.Sprite.create("RES/SS/tool_2.png");
        this.tool_2.setPosition(350,120);
        this.tool_2.setScale(0.0);
        this.addChild(this.tool_2,2);

        this.tool_2_1 = cc.Sprite.create("RES/SS/tool_2_1.png");
        this.tool_2_1.setPosition(350,120);
        this.tool_2_1.setScale(0.0);
        this.addChild(this.tool_2_1,2);

        this.tool_2_2_1 = cc.Sprite.create("RES/SS/tool_2_2_1.png");
        this.tool_2_2_1.setPosition(252,400);
        this.tool_2_2_1.setScale(0.0);
        this.addChild(this.tool_2_2_1,2);

        this.tool_2_3 = cc.Sprite.create("RES/SS/tool_2_3.png");
        this.tool_2_3.setPosition(350,120);
        this.tool_2_3.setScale(0.0);
        this.addChild(this.tool_2_3,2);

        this.tool_2_round_indicator = [];
        this.tool_2_hand_indicator = [];

        for(var i=1;i<=1;i++)
        {
            this.tool_2_round_indicator[i] = cc.Sprite.create(res_panel_com.indicator_img);
            this.tool_2_round_indicator[i].setScale(1.0);
            this.tool_2_round_indicator[i].setColor(cc.color(255,0,0));
            this.addChild(this.tool_2_round_indicator[i],-20);
            this.tool_2_round_indicator[i].setPosition(cc.p(25000,25000));
           
            this.tool_2_hand_indicator[i] = cc.Sprite.create(res_panel_com.arrow_ind_img);
            this.tool_2_hand_indicator[i].setScale(1.0);
            this.addChild(this.tool_2_hand_indicator[i],10);
            this.tool_2_hand_indicator[i].setPosition(cc.p(25000,25000));
        }

        //tool_3...
        this.tool_3 = cc.Sprite.create("RES/SS/tool_3.png");
        this.tool_3.setPosition(160,90);
        this.tool_3.setScale(0.0);
        this.addChild(this.tool_3,2);

        this.tool_3_1_1 = cc.Sprite.create("RES/SS/tool_3_1_1.png");
        this.tool_3_1_1.setPosition(160,90);
        this.tool_3_1_1.setScale(0.0);
        this.addChild(this.tool_3_1_1,2);

        this.tool_3_2_1 = cc.Sprite.create("RES/SS/tool_3_2_1.png");
        this.tool_3_2_1.setPosition(160,90);
        this.tool_3_2_1.setScale(0.0);
        this.addChild(this.tool_3_2_1,2);

        this.tool_3_3_ = [];

        for(var i=1;i<=2;i++)
        {
            this.tool_3_3_[i] = cc.Sprite.create("RES/SS/tool_3_3_"+i+".png");
            this.tool_3_3_[i].setScale(1.0);
            this.addChild(this.tool_3_3_[i],3);
        }

        this.tool_3_3_[1].setPosition(cc.p(135,410));
        this.tool_3_3_[2].setPosition(cc.p(385,420));

        this.tool_3_round_indicator = [];
        this.tool_3_hand_indicator = [];

        for(var i=1;i<=2;i++)
        {
            this.tool_3_round_indicator[i] = cc.Sprite.create(res_panel_com.indicator_img);
            this.tool_3_round_indicator[i].setScale(1.0);
            this.tool_3_round_indicator[i].setColor(cc.color(255,0,0));
            this.addChild(this.tool_3_round_indicator[i],-20);
            this.tool_3_round_indicator[i].setPosition(cc.p(25000,25000));
           
            this.tool_3_hand_indicator[i] = cc.Sprite.create(res_panel_com.arrow_ind_img);
            this.tool_3_hand_indicator[i].setScale(1.0);
            this.addChild(this.tool_3_hand_indicator[i],10);
            this.tool_3_hand_indicator[i].setPosition(cc.p(25000,25000));
        }

        //tool_4...
        this.tool_4 = cc.Sprite.create("RES/SS/tool_4.png");
        this.tool_4.setPosition(350,90);
        this.tool_4.setScale(0.0);
        this.addChild(this.tool_4,2);

        this.tool_4_1 = cc.Sprite.create("RES/SS/tool_4_1.png");
        this.tool_4_1.setPosition(350,90);
        this.tool_4_1.setScale(0.0);
        this.addChild(this.tool_4_1,2);

        this.tool_4_2 = cc.Sprite.create("RES/SS/tool_4_2.png");
        this.tool_4_2.setPosition(350,90);
        this.tool_4_2.setScale(0.0);
        this.addChild(this.tool_4_2,2);

        this.tool_4_3_ = [];

        for(var i=1;i<=4;i++)
        {
            this.tool_4_3_[i] = cc.Sprite.create("RES/SS/tool_4_3_"+i+".png");
            this.tool_4_3_[i].setScale(1.0);
            this.addChild(this.tool_4_3_[i],2);
        }

        this.tool_4_3_[1].setPosition(cc.p(130,480));
        this.tool_4_3_[2].setPosition(cc.p(383,477));
        this.tool_4_3_[3].setPosition(cc.p(359,494));
        this.tool_4_3_[4].setPosition(cc.p(358,435));

        this.tool_4_round_indicator = [];
        this.tool_4_hand_indicator = [];

        for(var i=1;i<=2;i++)
        {
            this.tool_4_round_indicator[i] = cc.Sprite.create(res_panel_com.indicator_img);
            this.tool_4_round_indicator[i].setScale(3.0);
            this.tool_4_round_indicator[i].setColor(cc.color(255,0,0));
            this.addChild(this.tool_4_round_indicator[i],-20);
            this.tool_4_round_indicator[i].setPosition(cc.p(25000,25000));
           
            this.tool_4_hand_indicator[i] = cc.Sprite.create(res_panel_com.arrow_ind_img);
            this.tool_4_hand_indicator[i].setScale(1.0);
            this.addChild(this.tool_4_hand_indicator[i],10);
            this.tool_4_hand_indicator[i].setPosition(cc.p(25000,25000));

        }

        //tool_5...
        this.tool_5 = cc.Sprite.create("RES/SS/tool_5.png");
        this.tool_5.setPosition(150,90);
        this.tool_5.setScale(0.0);
        this.addChild(this.tool_5,2);

        this.tool_5_1_1 = cc.Sprite.create("RES/SS/tool_5_1_1.png");
        this.tool_5_1_1.setPosition(150,90);
        this.tool_5_1_1.setScale(0.0);
        this.addChild(this.tool_5_1_1,2);

        this.tool_5_2_ = [];

        for(var i=1;i<=2;i++)
        {
            this.tool_5_2_[i] = cc.Sprite.create("RES/SS/tool_5_2.png");
            this.tool_5_2_[i].setScale(0.0);
            this.addChild(this.tool_5_2_[i],3);
        }
        this.tool_5_2_[1].setPosition(cc.p(99,492));
        this.tool_5_2_[2].setPosition(cc.p(132,572));

        this.tool_5_3_ = [];

        for(var i=1;i<=2;i++)
        {
            this.tool_5_3_[i] = cc.Sprite.create("RES/SS/tool_5_3_"+i+".png");
            this.tool_5_3_[i].setScale(1.0);
            this.addChild(this.tool_5_3_[i],2);
        }
        this.tool_5_3_[1].setPosition(cc.p(98,489));
        this.tool_5_3_[2].setPosition(cc.p(133,573));

        this.tool_5_4 = cc.Sprite.create("RES/SS/tool_5_4.png");
        this.tool_5_4.setPosition(252,400);
        this.tool_5_4.setScale(0.0);
        this.addChild(this.tool_5_4,2);

        this.tool_5_round_indicator = [];
        this.tool_5_hand_indicator = [];

        this.tool_55_round_indicator = [];
        this.tool_55_hand_indicator = [];

        for(var i=1;i<=2;i++)
        {
            this.tool_5_round_indicator[i] = cc.Sprite.create(res_panel_com.indicator_img);
            this.tool_5_round_indicator[i].setScale(1.0);
            this.tool_5_round_indicator[i].setColor(cc.color(255,0,0));
            this.addChild(this.tool_5_round_indicator[i],-20);
            this.tool_5_round_indicator[i].setPosition(cc.p(25000,25000));
           
            this.tool_5_hand_indicator[i] = cc.Sprite.create(res_panel_com.arrow_ind_img);
            this.tool_5_hand_indicator[i].setScale(1.0);
            this.addChild(this.tool_5_hand_indicator[i],10);
            this.tool_5_hand_indicator[i].setPosition(cc.p(25000,25000));

            this.tool_55_round_indicator[i] = cc.Sprite.create(res_panel_com.indicator_img);
            this.tool_55_round_indicator[i].setScale(1.0);
            this.tool_55_round_indicator[i].setColor(cc.color(255,0,0));
            this.addChild(this.tool_55_round_indicator[i],-20);
            this.tool_55_round_indicator[i].setPosition(cc.p(25000,25000));
           
            this.tool_55_hand_indicator[i] = cc.Sprite.create(res_panel_com.arrow_ind_img);
            this.tool_55_hand_indicator[i].setScale(1.0);
            this.addChild(this.tool_55_hand_indicator[i],10);
            this.tool_55_hand_indicator[i].setPosition(cc.p(25000,25000));
        }

        //tool_6...
        this.tool_6 = cc.Sprite.create("RES/SS/tool_6.png");
        this.tool_6.setPosition(350,100);
        this.tool_6.setScale(0.0);
        this.addChild(this.tool_6,2);

        this.tool_6_1 = cc.Sprite.create("RES/SS/tool_6_1.png");
        this.tool_6_1.setPosition(252,400);
        this.tool_6_1.setScale(0.0);
        this.addChild(this.tool_6_1,3);

        this.tool_6_2_ = [];

        for(var i=1;i<=3;i++)
        {
            this.tool_6_2_[i] = cc.Sprite.create("RES/SS/tool_6_2_"+i+".png");
            this.tool_6_2_[i].setScale(0.0);
            this.tool_6_2_[i].setPosition(cc.p(252,400));
            this.addChild(this.tool_6_2_[i],3);
        }

        this.tool_6_3_ = [];

        for(var i=1;i<=3;i++)
        {
            this.tool_6_3_[i] = cc.Sprite.create("RES/SS/tool_6_3_"+i+".png");
            this.tool_6_3_[i].setScale(0.0);
            this.tool_6_3_[i].setPosition(cc.p(252,400));
            this.addChild(this.tool_6_3_[i],3);
        }

        this.tool_6_4 = cc.Sprite.create("RES/SS/tool_6_4.png");
        this.tool_6_4.setPosition(252,400);
        this.tool_6_4.setScale(0.0);
        this.addChild(this.tool_6_4,3);

        this.tool_6_5 = cc.Sprite.create("RES/SS/tool_6_5.png");
        this.tool_6_5.setPosition(122,440);
        this.tool_6_5.setScale(0.0);
        this.addChild(this.tool_6_5,3);

        this.tool_6_6_ = [];

        for(var i=1;i<=3;i++)
        {
            this.tool_6_6_[i] = cc.Sprite.create("RES/SS/tool_6_6_"+i+".png");
            this.tool_6_6_[i].setScale(0.0);
            this.addChild(this.tool_6_6_[i],3);
        }
        this.tool_6_6_[1].setPosition(cc.p(110,490));
        this.tool_6_6_[2].setPosition(cc.p(167,447));
        this.tool_6_6_[3].setPosition(cc.p(115,398));

        this.tool_6_round_indicator = [];
        this.tool_6_hand_indicator = [];

        this.tool_66_round_indicator = [];
        this.tool_66_hand_indicator = [];

        for(var i=1;i<=3;i++)
        {
            if(i==1)
            {
                this.tool_6_round_indicator[i] = cc.Sprite.create(res_panel_com.indicator_img);
                this.tool_6_round_indicator[i].setScale(1.0);
                this.tool_6_round_indicator[i].setColor(cc.color(255,0,0));
                this.addChild(this.tool_6_round_indicator[i],-20);
                this.tool_6_round_indicator[i].setPosition(cc.p(25000,25000));
               
                this.tool_6_hand_indicator[i] = cc.Sprite.create(res_panel_com.arrow_ind_img);
                this.tool_6_hand_indicator[i].setScale(1.0);
                this.addChild(this.tool_6_hand_indicator[i],10);
                this.tool_6_hand_indicator[i].setPosition(cc.p(25000,25000));
                this.tool_6_hand_indicator[i].setRotation(180);
            }
           
            this.tool_66_round_indicator[i] = cc.Sprite.create(res_panel_com.indicator_img);
            this.tool_66_round_indicator[i].setScale(0.5);
            this.tool_66_round_indicator[i].setColor(cc.color(255,0,0));
            this.addChild(this.tool_66_round_indicator[i],-20);
            this.tool_66_round_indicator[i].setPosition(cc.p(25000,25000));
           
            this.tool_66_hand_indicator[i] = cc.Sprite.create(res_panel_com.arrow_ind_img);
            this.tool_66_hand_indicator[i].setScale(1.0);
            this.addChild(this.tool_66_hand_indicator[i],10);
            this.tool_66_hand_indicator[i].setPosition(cc.p(25000,25000));
            this.tool_66_hand_indicator[i].setRotation(180);
        }

        //tool_7...
        this.tool_7 = cc.Sprite.create("RES/SS/tool_7.png");
        this.tool_7.setPosition(180,110);
        this.tool_7.setScale(0.0);
        this.addChild(this.tool_7,2);

        this.tool_7_1 = cc.Sprite.create("RES/SS/tool_7_1.png");
        this.tool_7_1.setPosition(170,90);
        this.tool_7_1.setScale(0.0);
        this.addChild(this.tool_7_1,3);

        this.tool_7_2 = cc.Sprite.create("RES/SS/tool_7_2.png");
        this.tool_7_2.setPosition(150,90);
        this.tool_7_2.setScale(0.0);
        this.addChild(this.tool_7_2,3);

        this.tool_7_4_1 = cc.Sprite.create("RES/SS/tool_7_4_1.png");
        this.tool_7_4_1.setPosition(252,400);
        this.tool_7_4_1.setScale(0.0);
        this.addChild(this.tool_7_4_1,3);

        this.tool_7_round_indicator = [];
        this.tool_7_hand_indicator = [];

        for(var i=1;i<=1;i++)
        {
            this.tool_7_round_indicator[i] = cc.Sprite.create(res_panel_com.indicator_img);
            this.tool_7_round_indicator[i].setScale(1.0);
            this.tool_7_round_indicator[i].setColor(cc.color(255,0,0));
            this.addChild(this.tool_7_round_indicator[i],-20);
            this.tool_7_round_indicator[i].setPosition(cc.p(25000,25000));
           
            this.tool_7_hand_indicator[i] = cc.Sprite.create(res_panel_com.arrow_ind_img);
            this.tool_7_hand_indicator[i].setScale(1.0);
            this.addChild(this.tool_7_hand_indicator[i],10);
            this.tool_7_hand_indicator[i].setPosition(cc.p(25000,25000));
        }

         //tool_8...
        this.tool_8 = cc.Sprite.create("RES/SS/tool_8.png");
        this.tool_8.setPosition(350,80);
        this.tool_8.setScale(0.0);
        this.addChild(this.tool_8,2);

        this.tool_8_3 = cc.Sprite.create("RES/SS/tool_8_3.png");
        this.tool_8_3.setPosition(cc.p(350,80));
        this.tool_8_3.setScale(0.0);
        this.addChild(this.tool_8_3,2);

        this.tool_8_1 = cc.Sprite.create("RES/SS/tool_8_1.png");
        this.tool_8_1.setPosition(cc.p(355,485));
        this.tool_8_1.setScale(1.0);
        this.addChild(this.tool_8_1,2);

        this.tool_8_2_1 = cc.Sprite.create("RES/SS/tool_8_2_1.png");
        this.tool_8_2_1.setPosition(cc.p(250,403));
        this.tool_8_2_1.setScale(0.0);
        this.addChild(this.tool_8_2_1,3);

        this.tool_8_round_indicator = [];
        this.tool_8_hand_indicator = [];

        for(var i=1;i<=1;i++)
        {
            this.tool_8_round_indicator[i] = cc.Sprite.create(res_panel_com.indicator_img);
            this.tool_8_round_indicator[i].setScale(1.0);
            this.tool_8_round_indicator[i].setColor(cc.color(255,0,0));
            this.addChild(this.tool_8_round_indicator[i],-20);
            this.tool_8_round_indicator[i].setPosition(cc.p(25000,25000));
           
            this.tool_8_hand_indicator[i] = cc.Sprite.create(res_panel_com.arrow_ind_img);
            this.tool_8_hand_indicator[i].setScale(1.0);
            this.addChild(this.tool_8_hand_indicator[i],10);
            this.tool_8_hand_indicator[i].setPosition(cc.p(25000,25000));
        }

        //tool_9...
        this.tool_9 = cc.Sprite.create("RES/SS/tool_9.png");
        this.tool_9.setPosition(170,90);
        this.tool_9.setScale(0.0);
        this.addChild(this.tool_9,2);

        this.tool_9_1 = cc.Sprite.create("RES/SS/tool_9_1.png");
        this.tool_9_1.setPosition(cc.p(170,90));
        this.tool_9_1.setScale(0.0);
        this.addChild(this.tool_9_1,2);

        this.tool_9_round_indicator = [];
        this.tool_9_hand_indicator = [];

        for(var i=1;i<=1;i++)
        {
            this.tool_9_round_indicator[i] = cc.Sprite.create(res_panel_com.indicator_img);
            this.tool_9_round_indicator[i].setScale(1.0);
            this.tool_9_round_indicator[i].setColor(cc.color(255,0,0));
            this.addChild(this.tool_9_round_indicator[i],-20);
            this.tool_9_round_indicator[i].setPosition(cc.p(25000,25000));
           
            this.tool_9_hand_indicator[i] = cc.Sprite.create(res_panel_com.arrow_ind_img);
            this.tool_9_hand_indicator[i].setScale(1.0);
            this.addChild(this.tool_9_hand_indicator[i],10);
            this.tool_9_hand_indicator[i].setPosition(cc.p(25000,25000));
        }

        

        //tool_10...
        this.tool_10 = cc.Sprite.create("RES/SS/tool_10.png");
        this.tool_10.setPosition(360,90);
        this.tool_10.setScale(0.0);
        this.addChild(this.tool_10,2);

        this.tool_10_1 = cc.Sprite.create("RES/SS/tool_10_1.png");
        this.tool_10_1.setPosition(360,90);
        this.tool_10_1.setScale(0.0);
        this.addChild(this.tool_10_1,2);

        this.tool_10_2 = cc.Sprite.create("RES/SS/tool_10_2.png");
        this.tool_10_2.setPosition(252,400);
        this.tool_10_2.setScale(0.0);
        this.addChild(this.tool_10_2,3);

        this.tool_10_3_1 = cc.Sprite.create("RES/SS/tool_10_3_1.png");
        this.tool_10_3_1.setPosition(252,400);
        this.tool_10_3_1.setScale(0.0);
        this.addChild(this.tool_10_3_1,3);

        this.tool_10_round_indicator = [];
        this.tool_10_hand_indicator = [];

        for(var i=1;i<=1;i++)
        {
            this.tool_10_round_indicator[i] = cc.Sprite.create(res_panel_com.indicator_img);
            this.tool_10_round_indicator[i].setScale(1.0);
            this.tool_10_round_indicator[i].setColor(cc.color(255,0,0));
            this.addChild(this.tool_10_round_indicator[i],-20);
            this.tool_10_round_indicator[i].setPosition(cc.p(25000,25000));
           
            this.tool_10_hand_indicator[i] = cc.Sprite.create(res_panel_com.arrow_ind_img);
            this.tool_10_hand_indicator[i].setScale(1.0);
            this.addChild(this.tool_10_hand_indicator[i],10);
            this.tool_10_hand_indicator[i].setPosition(cc.p(25000,25000));
        }

        //Clock...
        this.clock = cc.Sprite.create("RES/SS/clock_1.png");
        this.clock.setPosition(252,400);
        this.clock.setScale(0.0);
        this.addChild(this.clock,5);


         //Surgery_view_btn_next...
        this.Surgery_view_btn_next = cc.MenuItemImage.create(
            res_panel_com.btn_next,
            res_panel_com.btn_next,
            this.SurgeryViewButtonClick,this);
        this.Surgery_view_btn_next.setScale(0.0);
        this.Surgery_view_btn_next.setTag(101);
        this.Surgery_view_btn_next.setPosition(cc.p(460,40));      
       
        this.Surgery_view_btn_next_menu = cc.Menu.create(this.Surgery_view_btn_next);
        this.Surgery_view_btn_next_menu.setPosition(cc.p(0,0));
        this.addChild(this.Surgery_view_btn_next_menu,5);

        this.prt_surgery_view= cc.ParticleSystem.create(res_comman.sparkle_2_plist);
        this.prt_surgery_view.setScale(1.0);
        this.prt_surgery_view.stopSystem();
        this.addChild(this.prt_surgery_view,50);
    },
    SurgeryViewParticle:function()
    {
        this.prt_surgery_view.resetSystem();
    },
    SurgeryViewButtonClick:function(sender)
    {
        if (this.isTouchOn==false){return;}

        sender.stopAllActions();
        sender.runAction(cc.Sequence.create(cc.ScaleTo.create(0.0,1.0),cc.ScaleTo.create(0.2,0.9),cc.ScaleTo.create(0.2,1.0)));

        if(sender.getTag()==101)
        {
        	// this.white_bg.runAction(cc.Sequence.create(cc.DelayTime.create(0.1),cc.FadeIn.create(0.5,255),cc.DelayTime.create(1.0),cc.FadeOut.create(1.0,0)));   
            this.scheduleOnce(function(){this.SurgeryViewExitEffect();},0.1,"SurgeryViewExitEffect");
        }      
    },
    SurgeryViewExitEffect:function()
    {
        // this.Layer_bath_view.runAction(cc.EaseBackOut.create(cc.MoveTo.create(0.1,cc.p(-650,0))));

        this.Surgery_view_btn_next.stopAllActions();
        this.Surgery_view_btn_next.runAction(cc.Sequence.create(cc.DelayTime.create(0.5),cc.EaseBackIn.create(cc.ScaleTo.create(0.0,0.0))));
        
        this.scheduleOnce(function(){this.onNextScene();},0.1,"onNextScene");
    },
    setTouchEnable:function()
    {
        this.isTouchOn=true;
    },
    ShowRoundIndication:function()
    {
        if(this.move_tool==1 && this.isRoundIndicationShow==false)
        {
            this.tool_1_round_indicator[1].setPosition(cc.p(252,720));
                 
            this.tool_1_hand_indicator[1].setRotation(50);     
            this.tool_1_hand_indicator[1].setPosition(cc.p(400,580));
            this.tool_1_hand_indicator[1].runAction(cc.RepeatForever.create(cc.Sequence.create(cc.MoveTo.create(0.3,cc.p(410,570)),cc.MoveTo.create(0.3,cc.p(400,580)))));
        }
        else if(this.move_tool==2 && this.isRoundIndicationShow==false)
        {
            this.tool_2_round_indicator[1].setPosition(cc.p(320,530));
                  
            this.tool_2_hand_indicator[1].setPosition(cc.p(420,530));
            this.tool_2_hand_indicator[1].runAction(cc.RepeatForever.create(cc.Sequence.create(cc.MoveTo.create(0.3,cc.p(410,530)),cc.MoveTo.create(0.3,cc.p(420,530)))));
        }
        else if(this.move_tool==3 && this.isRoundIndicationShow==false)
        {
            this.tool_3_round_indicator[1].setScaleX(3.0);
            this.tool_3_round_indicator[1].setScaleY(1.0);
            this.tool_3_round_indicator[1].setPosition(cc.p(135,410));
            this.tool_3_round_indicator[2].setPosition(cc.p(385,420));
             
            this.tool_3_hand_indicator[1].setPosition(cc.p(270,400));
            this.tool_3_hand_indicator[1].runAction(cc.RepeatForever.create(cc.Sequence.create(cc.MoveTo.create(0.3,cc.p(280,400)),cc.MoveTo.create(0.3,cc.p(270,400)))));
                   
            this.tool_3_hand_indicator[2].setScale(0.0);
            this.tool_3_hand_indicator[2].setRotation(180);
            this.tool_3_hand_indicator[2].setPosition(cc.p(265,420));
            this.tool_3_hand_indicator[2].runAction(cc.RepeatForever.create(cc.Sequence.create(cc.MoveTo.create(0.3,cc.p(275,420)),cc.MoveTo.create(0.3,cc.p(265,420)))));
        }
        else if(this.move_tool==4 && this.isRoundIndicationShow==false)
        {
            this.tool_4_round_indicator[1].setPosition(cc.p(140,470));
            this.tool_4_round_indicator[2].setPosition(cc.p(383,470));
            
            this.tool_4_hand_indicator[1].setPosition(cc.p(250,450));
            this.tool_4_hand_indicator[1].runAction(cc.RepeatForever.create(cc.Sequence.create(cc.MoveTo.create(0.3,cc.p(240,450)),cc.MoveTo.create(0.3,cc.p(250,450)))));
                   
            this.tool_4_hand_indicator[2].setScale(0.0);
            this.tool_4_hand_indicator[2].setRotation(180);
            this.tool_4_hand_indicator[2].setPosition(cc.p(260,420));
            this.tool_4_hand_indicator[2].runAction(cc.RepeatForever.create(cc.Sequence.create(cc.MoveTo.create(0.3,cc.p(250,420)),cc.MoveTo.create(0.3,cc.p(260,420)))));
        }
        else if(this.move_tool==5 && this.isRoundIndicationShow==false)
        {
            this.tool_5_round_indicator[1].setPosition(cc.p(100,490));
            this.tool_5_round_indicator[2].setPosition(cc.p(130,570));
            
            this.tool_5_hand_indicator[1].setPosition(cc.p(200,490));
            this.tool_5_hand_indicator[1].runAction(cc.RepeatForever.create(cc.Sequence.create(cc.MoveTo.create(0.3,cc.p(190,490)),cc.MoveTo.create(0.3,cc.p(200,490)))));
                   
            this.tool_5_hand_indicator[2].setScale(0.0);
            this.tool_5_hand_indicator[2].setPosition(cc.p(230,570));
            this.tool_5_hand_indicator[2].runAction(cc.RepeatForever.create(cc.Sequence.create(cc.MoveTo.create(0.3,cc.p(220,570)),cc.MoveTo.create(0.3,cc.p(230,570)))));
        }
        else if(this.move_tool==55 && this.isRoundIndicationShow==false)
        {
            this.tool_55_round_indicator[1].setPosition(cc.p(100,490));
            this.tool_55_round_indicator[2].setPosition(cc.p(130,570));
            
            this.tool_55_hand_indicator[1].setPosition(cc.p(200,490));
            this.tool_55_hand_indicator[1].runAction(cc.RepeatForever.create(cc.Sequence.create(cc.MoveTo.create(0.3,cc.p(190,490)),cc.MoveTo.create(0.3,cc.p(200,490)))));
                   
            this.tool_55_hand_indicator[2].setScale(0.0);
            this.tool_55_hand_indicator[2].setPosition(cc.p(230,570));
            this.tool_55_hand_indicator[2].runAction(cc.RepeatForever.create(cc.Sequence.create(cc.MoveTo.create(0.3,cc.p(220,570)),cc.MoveTo.create(0.3,cc.p(230,570)))));
        }
        else if(this.move_tool==6 && this.isRoundIndicationShow==false)
        {
            this.tool_6_round_indicator[1].setPosition(cc.p(360,495));
            
            this.tool_6_hand_indicator[1].setPosition(cc.p(280,495));
            this.tool_6_hand_indicator[1].runAction(cc.RepeatForever.create(cc.Sequence.create(cc.MoveTo.create(0.3,cc.p(270,495)),cc.MoveTo.create(0.3,cc.p(280,495)))));
        }
        else if(this.move_tool==66 && this.isRoundIndicationShow==false)
        {
            this.tool_66_round_indicator[1].setPosition(cc.p(390,465));
          
            this.tool_66_hand_indicator[1].setPosition(cc.p(290,465));
            this.tool_66_hand_indicator[1].runAction(cc.RepeatForever.create(cc.Sequence.create(cc.MoveTo.create(0.3,cc.p(280,465)),cc.MoveTo.create(0.3,cc.p(290,465)))));
        }
        else if(this.move_tool==666 && this.isRoundIndicationShow==false)
        {
            this.tool_66_round_indicator[2].setPosition(cc.p(435,445));
            
            this.tool_66_hand_indicator[2].setPosition(cc.p(345,445));
            this.tool_66_hand_indicator[2].runAction(cc.RepeatForever.create(cc.Sequence.create(cc.MoveTo.create(0.3,cc.p(335,445)),cc.MoveTo.create(0.3,cc.p(345,445)))));
        }
        else if(this.move_tool==6666 && this.isRoundIndicationShow==false)
        {
            this.tool_66_round_indicator[3].setPosition(cc.p(390,405));
            
            this.tool_66_hand_indicator[3].setPosition(cc.p(290,405));
            this.tool_66_hand_indicator[3].runAction(cc.RepeatForever.create(cc.Sequence.create(cc.MoveTo.create(0.3,cc.p(280,405)),cc.MoveTo.create(0.3,cc.p(290,405)))));
        }
        else if(this.move_tool==7 && this.isRoundIndicationShow==false)
        {
            this.tool_7_round_indicator[1].setPosition(cc.p(332,460));
            
            this.tool_7_hand_indicator[1].setPosition(cc.p(430,460));
            this.tool_7_hand_indicator[1].runAction(cc.RepeatForever.create(cc.Sequence.create(cc.MoveTo.create(0.3,cc.p(420,460)),cc.MoveTo.create(0.3,cc.p(430,460)))));
        }
        else if(this.move_tool==8 && this.isRoundIndicationShow==false)
        {
            this.tool_8_round_indicator[1].setPosition(cc.p(359,527));
            
            this.tool_8_hand_indicator[1].setPosition(cc.p(450,525));
            this.tool_8_hand_indicator[1].runAction(cc.RepeatForever.create(cc.Sequence.create(cc.MoveTo.create(0.3,cc.p(440,525)),cc.MoveTo.create(0.3,cc.p(450,525)))));
        }
        else if(this.move_tool==9 && this.isRoundIndicationShow==false)
        {
            this.tool_9_round_indicator[1].setPosition(cc.p(145,495));
            
            this.tool_9_hand_indicator[1].setPosition(cc.p(245,495));
            this.tool_9_hand_indicator[1].runAction(cc.RepeatForever.create(cc.Sequence.create(cc.MoveTo.create(0.3,cc.p(255,495)),cc.MoveTo.create(0.3,cc.p(245,495)))));
        }
        else if(this.move_tool==10 && this.isRoundIndicationShow==false)
        {
            this.tool_10_round_indicator[1].setPosition(cc.p(360,490));
            
            this.tool_10_hand_indicator[1].setPosition(cc.p(450,490));
            this.tool_10_hand_indicator[1].runAction(cc.RepeatForever.create(cc.Sequence.create(cc.MoveTo.create(0.3,cc.p(440,490)),cc.MoveTo.create(0.3,cc.p(450,490)))));
        }
    },
    ToolRunningAction:function()
    {
        if(this.move_tool==1)
        {
            this.move_tool=0;
            this.process_tool=2;

            this.tool_1.setScale(1.0);
            this.tool_1.setOpacity(150);
            this.tool_1.setPosition(cc.p(160,90));
            this.isRoundIndicationShow=false;  

            this.tool_2.runAction(cc.RepeatForever.create(cc.Sequence.create(cc.ScaleTo.create(0.3,1.05),cc.DelayTime.create(0.1),cc.ScaleTo.create(0.3,1.0))));
        }
        else if(this.move_tool==2)
        {
            this.move_tool=0;
            this.process_tool=3;

            this.tool_2_2_1.setScale(0.0);
            this.tool_2_3.setScale(0.0);
            this.tool_2_3.setOpacity(150);
            this.tool_2_3.setPosition(cc.p(350,120));
            this.isRoundIndicationShow=false;

            this.tool_1.runAction(cc.Sequence.create(cc.DelayTime.create(0.10),cc.EaseBackOut.create(cc.ScaleTo.create(0.3,0.0))));
            this.tool_2.runAction(cc.Sequence.create(cc.DelayTime.create(0.20),cc.EaseBackOut.create(cc.ScaleTo.create(0.3,0.0))));

            this.tool_3.runAction(cc.Sequence.create(cc.DelayTime.create(0.15),cc.EaseBackOut.create(cc.ScaleTo.create(0.3,1.0))));
            this.tool_3_1_1.runAction(cc.Sequence.create(cc.DelayTime.create(0.15),cc.EaseBackOut.create(cc.ScaleTo.create(0.3,1.0))));
            this.tool_3_1_1.runAction(cc.RepeatForever.create(cc.Sequence.create(cc.ScaleTo.create(0.3,1.05),cc.DelayTime.create(0.1),cc.ScaleTo.create(0.3,1.0))));
            this.tool_4.runAction(cc.Sequence.create(cc.DelayTime.create(0.25),cc.EaseBackOut.create(cc.ScaleTo.create(0.3,1.0))));
            this.tool_4_1.runAction(cc.Sequence.create(cc.DelayTime.create(0.25),cc.EaseBackOut.create(cc.ScaleTo.create(0.3,1.0))));  
        }
        else if(this.move_tool==3)
        {
            this.move_tool=0;
            this.process_tool=4;

            this.tool_3_2_1.setScale(0.0);
            this.tool_3.setScale(1.0);
            this.tool_3_1_1.setTexture("RES/SS/tool_3_1_2.png");
            this.tool_3_1_1.setScale(1.0);

            this.tool_3.setOpacity(150);
            this.tool_3_1_1.setOpacity(150);
            this.tool_3.setPosition(160,90);
            this.tool_3_1_1.setPosition(160,90);
            this.isRoundIndicationShow=false; 

            this.tool_4_1.runAction(cc.RepeatForever.create(cc.Sequence.create(cc.ScaleTo.create(0.3,1.05),cc.DelayTime.create(0.1),cc.ScaleTo.create(0.3,1.0))));
        }
        else if(this.move_tool==4)
        {
            this.move_tool=0;
            this.process_tool=5;

            this.tool_4_2.setScale(0.0);
            this.tool_4.setScale(1.0);
            this.tool_4_1.setScale(1.0);

            this.tool_4.setOpacity(150);
            this.tool_4_1.setOpacity(150);
            this.tool_4.setPosition(350,90);
            this.tool_4_1.setPosition(350,90);
            this.isRoundIndicationShow=false; 

            this.tool_3.runAction(cc.Sequence.create(cc.DelayTime.create(0.10),cc.EaseBackOut.create(cc.ScaleTo.create(0.3,0.0))));
            this.tool_3_1_1.runAction(cc.Sequence.create(cc.DelayTime.create(0.10),cc.EaseBackOut.create(cc.ScaleTo.create(0.3,0.0))));
            this.tool_4.runAction(cc.Sequence.create(cc.DelayTime.create(0.20),cc.EaseBackOut.create(cc.ScaleTo.create(0.3,0.0))));
            this.tool_4_1.runAction(cc.Sequence.create(cc.DelayTime.create(0.20),cc.EaseBackOut.create(cc.ScaleTo.create(0.3,0.0))));

            this.tool_5.runAction(cc.Sequence.create(cc.DelayTime.create(0.15),cc.EaseBackOut.create(cc.ScaleTo.create(0.3,1.0))));
            this.tool_5.runAction(cc.RepeatForever.create(cc.Sequence.create(cc.ScaleTo.create(0.3,1.05),cc.DelayTime.create(0.1),cc.ScaleTo.create(0.3,1.0))));
            this.tool_6.runAction(cc.Sequence.create(cc.DelayTime.create(0.25),cc.EaseBackOut.create(cc.ScaleTo.create(0.3,1.0))));
        }
        else if(this.move_tool==5)
        {
            this.move_tool=0;
            this.process_tool=55;

            this.tool_5_1_1.setScale(0.0);
            this.tool_5.setScale(1.0);
            this.tool_5.setScale(1.0);
            this.tool_5_4.setScale(1.0);
 
            this.tool_5.setOpacity(150);
            this.tool_5.setPosition(150,90);
            this.isRoundIndicationShow=false; 
        }
        else if(this.move_tool==55)
        {
            this.move_tool=0;
            this.process_tool=6;

            this.tool_5_4.setScale(0.0);

            this.isRoundIndicationShow=false; 

            this.tool_6.runAction(cc.RepeatForever.create(cc.Sequence.create(cc.ScaleTo.create(0.3,1.05),cc.DelayTime.create(0.1),cc.ScaleTo.create(0.3,1.0))));
        }
        else if(this.move_tool==60)
        {
            this.move_tool=0;
            this.process_tool=66;
            this.isRoundIndicationShow=false; 

            this.tool_6_6_[1].runAction(cc.RepeatForever.create(cc.Sequence.create(cc.ScaleTo.create(0.3,1.05),cc.DelayTime.create(0.1),cc.ScaleTo.create(0.3,1.0))));
        }
        else if(this.move_tool==660)
        {
            this.move_tool=0;
            this.process_tool=666;
            this.isRoundIndicationShow=false; 

            this.tool_6_6_[2].runAction(cc.RepeatForever.create(cc.Sequence.create(cc.ScaleTo.create(0.3,1.05),cc.DelayTime.create(0.1),cc.ScaleTo.create(0.3,1.0))));
        }
        else if(this.move_tool==6660)
        {
            this.move_tool=0;
            this.process_tool=6666;
            this.isRoundIndicationShow=false; 

            this.tool_6_6_[3].runAction(cc.RepeatForever.create(cc.Sequence.create(cc.ScaleTo.create(0.3,1.05),cc.DelayTime.create(0.1),cc.ScaleTo.create(0.3,1.0))));
        }
        else if(this.move_tool==66660)
        {
            this.move_tool=0;
            this.process_tool=7;

            this.tool_6.setOpacity(150);
            this.tool_6.setScale(1.0);
            this.tool_6.setPosition(350,100);

            this.tool_6_1.setScale(0.0);
            this.tool_6_4.setScale(0.0);
            this.tool_6_5.setScale(0.0);
            for(var i=1;i<=3;i++)
            {
                this.tool_6_2_[i].setScale(0.0);
                this.tool_6_3_[i].setScale(0.0);
                this.tool_6_6_[i].setScale(0.0);
            }  

            this.isRoundIndicationShow=false; 

            this.tool_5.runAction(cc.Sequence.create(cc.DelayTime.create(0.10),cc.EaseBackOut.create(cc.ScaleTo.create(0.3,0.0))));
            this.tool_6.runAction(cc.Sequence.create(cc.DelayTime.create(0.20),cc.EaseBackOut.create(cc.ScaleTo.create(0.3,0.0))));
           
            this.tool_7.runAction(cc.Sequence.create(cc.DelayTime.create(0.15),cc.EaseBackOut.create(cc.ScaleTo.create(0.3,1.0))));
            this.tool_7_1.runAction(cc.Sequence.create(cc.DelayTime.create(0.15),cc.EaseBackOut.create(cc.ScaleTo.create(0.3,1.0))));
            this.tool_7_1.runAction(cc.RepeatForever.create(cc.Sequence.create(cc.ScaleTo.create(0.3,1.05),cc.DelayTime.create(0.1),cc.ScaleTo.create(0.3,1.0))));
            this.tool_8.runAction(cc.Sequence.create(cc.DelayTime.create(0.25),cc.EaseBackOut.create(cc.ScaleTo.create(0.3,1.0))));
            this.tool_8_3.runAction(cc.Sequence.create(cc.DelayTime.create(0.25),cc.EaseBackOut.create(cc.ScaleTo.create(0.3,1.0))));
        }
        else if(this.move_tool==7)
        {
            this.move_tool=0;
            this.process_tool=8;

            this.tool_7_2.setScale(0.0);
            this.tool_7_1.setTexture("RES/SS/tool_7_3.png");
            this.tool_7_1.setScale(1.0);

            this.tool_7.setOpacity(150);
            this.tool_7_1.setOpacity(150);
            this.tool_3.setPosition(180,110);
            this.tool_3_1_1.setPosition(170,90);
            this.isRoundIndicationShow=false; 

            this.tool_8_3.runAction(cc.RepeatForever.create(cc.Sequence.create(cc.ScaleTo.create(0.3,1.05),cc.DelayTime.create(0.1),cc.ScaleTo.create(0.3,1.0))));
        }
        else if(this.move_tool==8)
        {
            this.move_tool=0;
            this.process_tool=9;

            this.tool_8.setScale(1.0);
            this.tool_8_3.setScale(1.0);
            this.tool_8.setOpacity(150);
            this.tool_8_3.setOpacity(150);
            this.tool_8.setPosition(350,80);
            this.tool_8_3.setPosition(170,90);

            this.isRoundIndicationShow=false; 

            this.tool_7.runAction(cc.Sequence.create(cc.DelayTime.create(0.10),cc.EaseBackOut.create(cc.ScaleTo.create(0.3,0.0))));
            this.tool_7_1.runAction(cc.Sequence.create(cc.DelayTime.create(0.10),cc.EaseBackOut.create(cc.ScaleTo.create(0.3,0.0))));
            this.tool_8.runAction(cc.Sequence.create(cc.DelayTime.create(0.20),cc.EaseBackOut.create(cc.ScaleTo.create(0.3,0.0))));
            this.tool_8_3.runAction(cc.Sequence.create(cc.DelayTime.create(0.20),cc.EaseBackOut.create(cc.ScaleTo.create(0.3,0.0))));

            this.tool_9.runAction(cc.Sequence.create(cc.DelayTime.create(0.15),cc.EaseBackOut.create(cc.ScaleTo.create(0.3,1.0))));
            this.tool_9.runAction(cc.RepeatForever.create(cc.Sequence.create(cc.ScaleTo.create(0.3,1.05),cc.DelayTime.create(0.1),cc.ScaleTo.create(0.3,1.0))));
            this.tool_10.runAction(cc.Sequence.create(cc.DelayTime.create(0.25),cc.EaseBackOut.create(cc.ScaleTo.create(0.3,1.0))));
        }
        else if(this.move_tool==99)
        {
            this.move_tool=0;
            this.process_tool=10;

            this.tool_9_1.setLocalZOrder(3);
            this.isRoundIndicationShow=false; 

            this.tool_10.runAction(cc.RepeatForever.create(cc.Sequence.create(cc.ScaleTo.create(0.3,1.05),cc.DelayTime.create(0.1),cc.ScaleTo.create(0.3,1.0))));
        }
        else if(this.move_tool==100)
        {
            this.move_tool=0;
            this.process_tool=11;

            this.tool_10.setScale(1.0);
            this.tool_10.setOpacity(150);
            this.tool_10.setPosition(360,90);
            this.isRoundIndicationShow=false; 

            this.clock.setScale(1.0);
            this.clock_animation = cc.Animation.create();
            this.clock_animation.addSpriteFrameWithFile("RES/SS/clock_1.png");
            this.clock_animation.addSpriteFrameWithFile("RES/SS/clock_2.png");
            this.clock_animation.addSpriteFrameWithFile("RES/SS/clock_3.png");
            this.clock_animation.addSpriteFrameWithFile("RES/SS/clock_4.png");
            this.clock_animation.addSpriteFrameWithFile("RES/SS/clock_1.png");
            this.clock_animation.setDelayPerUnit(0.5);
            this.clock.runAction(cc.Animate.create(this.clock_animation));

            this.clock.runAction(cc.Sequence.create(cc.DelayTime.create(2.7),cc.EaseBackOut.create(cc.ScaleTo.create(0.0,0.0))));
            this.tool_10.runAction(cc.Sequence.create(cc.DelayTime.create(2.7),cc.EaseBackOut.create(cc.ScaleTo.create(0.0,0.0))));
            this.tool_10_1.runAction(cc.Sequence.create(cc.DelayTime.create(2.7),cc.EaseBackOut.create(cc.ScaleTo.create(0.0,0.0))));
            this.tool_10_2.runAction(cc.Sequence.create(cc.DelayTime.create(2.7),cc.EaseBackOut.create(cc.ScaleTo.create(0.0,0.0))));
            this.tool_8_2_1.runAction(cc.Sequence.create(cc.DelayTime.create(2.7),cc.EaseBackOut.create(cc.ScaleTo.create(0.0,0.0))));
            this.tool_9_1.runAction(cc.Sequence.create(cc.DelayTime.create(2.7),cc.EaseBackOut.create(cc.ScaleTo.create(0.0,0.0))));
            this.Bottom_panel.runAction(cc.Sequence.create(cc.DelayTime.create(2.7),cc.EaseBackOut.create(cc.ScaleTo.create(0.0,0.0))));
       
            this.Surgery_view_btn_next.stopAllActions();
            this.Surgery_view_btn_next.runAction(cc.Sequence.create(cc.DelayTime.create(2.7),cc.EaseBackOut.create(cc.ScaleTo.create(0.3,1.0))));
        }
    },
    onTouchBegan:function(touch, event)
    {
        var tp = touch.getLocation();
        var self = event.getCurrentTarget();
        self.startLocation = tp;
        // self.tool_1.setPosition(tp);
        //console.log('onTouchBegan:' + tp.x.toFixed(2) + ','  + tp.y.toFixed(2));

        if(self.isTouchOn==false)
        {
            return;
        }

        if(cc.rectContainsPoint(self.tool_1.getBoundingBox(),tp) && self.process_tool==1 && self.tool_1.getOpacity()==255 && self.tool_1.getNumberOfRunningActions()==1)
        {
            self.move_tool=1;
            self.tool_1.stopAllActions();
            self.tool_1.setScale(1.0);
            self.dummy_image.setScale(1.0);
            self.tool_1.setPosition(tp.x,tp.y);
            self.dummy_image.setPosition(tp.x,tp.y);
            self.tool_1.setLocalZOrder(10);
            self.ShowRoundIndication(self.move_tool); 
            self.isRoundIndicationShow=true;    
        } 
        else if(cc.rectContainsPoint(self.tool_2.getBoundingBox(),tp) && self.process_tool==2 && self.tool_2.getOpacity()==255 && self.tool_2.getNumberOfRunningActions()==1)
        {
            self.move_tool=2;
            self.tool_2.stopAllActions();
            self.tool_2.setScale(0.0);
            self.tool_2_1.setScale(1.0);
            self.dummy_image.setScale(0.3);
            self.tool_2_1.setPosition(tp.x,tp.y);
            self.dummy_image.setPosition(tp.x+40,tp.y+100);
            self.tool_2_1.setLocalZOrder(10);
            self.ShowRoundIndication(self.move_tool); 
            self.isRoundIndicationShow=true;    
        } 
        else if(cc.rectContainsPoint(self.tool_3_1_1.getBoundingBox(),tp) && self.process_tool==3 && self.tool_3_1_1.getOpacity()==255 && self.tool_3_1_1.getNumberOfRunningActions()==1)
        {
            self.move_tool=3;
            self.tool_3_1_1.stopAllActions();
            self.tool_3_1_1.setScale(0.0);
            self.tool_3_2_1.setScale(1.0);
            self.dummy_image.setScale(0.5);
            self.tool_3_2_1.setPosition(tp.x,tp.y);
            self.dummy_image.setPosition(tp.x-40,tp.y+50);
            self.tool_3_2_1.setLocalZOrder(10);
            self.ShowRoundIndication(self.move_tool); 
            self.isRoundIndicationShow=true;    
        } 
        else if(cc.rectContainsPoint(self.tool_4_1.getBoundingBox(),tp) && self.process_tool==4 && self.tool_4_1.getOpacity()==255 && self.tool_4_1.getNumberOfRunningActions()==1)
        {
            self.move_tool=4;
            self.tool_4_1.stopAllActions();
            self.tool_4_1.setScale(1.0);
            self.dummy_image.setScale(0.5);
            self.tool_4_1.setPosition(tp.x,tp.y);
            self.dummy_image.setPosition(tp.x-40,tp.y+50);
            self.tool_4_1.setLocalZOrder(10);
            self.ShowRoundIndication(self.move_tool); 
            self.isRoundIndicationShow=true;    
        } 
        else if(cc.rectContainsPoint(self.tool_5.getBoundingBox(),tp) && self.process_tool==5 && self.tool_5.getOpacity()==255 && self.tool_5.getNumberOfRunningActions()==1)
        {
            self.move_tool=5;
            self.tool_5.stopAllActions();
            self.tool_5.setScale(0.0);
            self.tool_5_1_1.setScale(1.0);
            self.dummy_image.setScale(0.3);
            self.tool_5_1_1.setPosition(tp.x,tp.y);
            self.dummy_image.setPosition(tp.x,tp.y+50);
            self.tool_5_1_1.setLocalZOrder(10);
            self.ShowRoundIndication(self.move_tool); 
            self.isRoundIndicationShow=true;    
        } 
        else if(cc.rectContainsPoint(self.tool_5_4.getBoundingBox(),tp) && self.process_tool==55 && self.tool_5_4.getOpacity()==255)
        {
            self.move_tool=55;
            self.tool_5_4.stopAllActions();
            self.tool_5_4.setScale(1.0);
            self.dummy_image.setScale(1.0);
            self.tool_5_4.setPosition(tp.x,tp.y);
            self.dummy_image.setPosition(tp.x,tp.y);
            self.tool_5_4.setLocalZOrder(10);
            self.ShowRoundIndication(self.move_tool); 
            self.isRoundIndicationShow=true;    
        }   
        else if(cc.rectContainsPoint(self.tool_6.getBoundingBox(),tp) && self.process_tool==6 && self.tool_6.getOpacity()==255 && self.tool_6.getNumberOfRunningActions()==1)
        {
            self.move_tool=6;
            self.tool_6.stopAllActions();
            self.tool_6.setScale(1.0);
            self.dummy_image.setScale(0.5);
            self.tool_6.setPosition(tp.x,tp.y);
            self.dummy_image.setPosition(tp.x,tp.y);
            self.tool_6.setLocalZOrder(10);
            self.ShowRoundIndication(self.move_tool); 
            self.isRoundIndicationShow=true;    
        }
        else if(cc.rectContainsPoint(self.tool_6_6_[1].getBoundingBox(),tp) && self.process_tool==66 && self.tool_6_6_[1].getOpacity()==255 && self.tool_6_6_[1].getNumberOfRunningActions()==1)
        {
            self.move_tool=66;
            self.tool_6_6_[1].stopAllActions();
            self.tool_6_6_[1].setScale(1.0);
            self.dummy_image.setScale(0.5);
            self.tool_6_6_[1].setPosition(tp.x,tp.y);
            self.dummy_image.setPosition(tp.x,tp.y);
            self.tool_6_6_[1].setLocalZOrder(10);
            self.ShowRoundIndication(self.move_tool); 
            self.isRoundIndicationShow=true;    
        } 
        else if(cc.rectContainsPoint(self.tool_6_6_[2].getBoundingBox(),tp) && self.process_tool==666 && self.tool_6_6_[2].getOpacity()==255 && self.tool_6_6_[2].getNumberOfRunningActions()==1)
        {
            self.move_tool=666;
            self.tool_6_6_[2].stopAllActions();
            self.tool_6_6_[2].setScale(1.0);
            self.dummy_image.setScale(0.5);
            self.tool_6_6_[2].setPosition(tp.x,tp.y);
            self.dummy_image.setPosition(tp.x,tp.y);
            self.tool_6_6_[2].setLocalZOrder(10);
            self.ShowRoundIndication(self.move_tool); 
            self.isRoundIndicationShow=true;    
        } 
        else if(cc.rectContainsPoint(self.tool_6_6_[3].getBoundingBox(),tp) && self.process_tool==6666 && self.tool_6_6_[3].getOpacity()==255 && self.tool_6_6_[3].getNumberOfRunningActions()==1)
        {
            self.move_tool=6666;
            self.tool_6_6_[3].stopAllActions();
            self.tool_6_6_[3].setScale(1.0);
            self.dummy_image.setScale(0.5);
            self.tool_6_6_[3].setPosition(tp.x,tp.y);
            self.dummy_image.setPosition(tp.x,tp.y);
            self.tool_6_6_[3].setLocalZOrder(10);
            self.ShowRoundIndication(self.move_tool); 
            self.isRoundIndicationShow=true;    
        }  
        else if(cc.rectContainsPoint(self.tool_7_1.getBoundingBox(),tp) && self.process_tool==7 && self.tool_7_1.getOpacity()==255 && self.tool_7_1.getNumberOfRunningActions()==1)
        {
            self.move_tool=7;
            self.tool_7_1.stopAllActions();
            self.tool_7_1.setScale(0.0);
            self.tool_7_2.setScale(1.0);
            self.dummy_image.setScale(0.3);
            self.tool_7_2.setPosition(tp.x,tp.y);
            self.dummy_image.setPosition(tp.x,tp.y+120);
            self.tool_7_2.setLocalZOrder(10);
            self.ShowRoundIndication(self.move_tool); 
            self.isRoundIndicationShow=true;    
        } 
        else if(cc.rectContainsPoint(self.tool_8_3.getBoundingBox(),tp) && self.process_tool==8 && self.tool_8_3.getOpacity()==255 && self.tool_8_3.getNumberOfRunningActions()==1)
        {
            self.move_tool=8;
            self.tool_8_3.stopAllActions();
            self.tool_8_3.setScale(1.0);
            self.dummy_image.setScale(0.3);
            self.tool_8_3.setPosition(tp.x-50,tp.y);
            self.dummy_image.setPosition(tp.x-20,tp.y+30);
            self.tool_8_3.setLocalZOrder(10);
            self.ShowRoundIndication(self.move_tool); 
            self.isRoundIndicationShow=true;    
        }  
        else if(cc.rectContainsPoint(self.tool_9.getBoundingBox(),tp) && self.process_tool==9 && self.tool_9.getOpacity()==255 && self.tool_9.getNumberOfRunningActions()==1)
        {
            self.move_tool=9;
            self.tool_9.stopAllActions();
            self.tool_9.setScale(0.0);
            self.tool_9_1.setScale(1.0);
            self.dummy_image.setScale(0.5);
            self.tool_9_1.setPosition(tp.x,tp.y);
            self.dummy_image.setPosition(tp.x,tp.y);
            self.tool_9_1.setLocalZOrder(10);
            self.ShowRoundIndication(self.move_tool); 
            self.isRoundIndicationShow=true;    
        }    
        else if(cc.rectContainsPoint(self.tool_10.getBoundingBox(),tp) && self.process_tool==10 && self.tool_10.getOpacity()==255 && self.tool_10.getNumberOfRunningActions()==1)
        {
            self.move_tool=10;
            self.tool_10.stopAllActions();
            self.tool_10.setScale(0.0);
            self.tool_10_1.setScale(1.0);
            self.dummy_image.setScale(0.5);
            self.tool_10_1.setPosition(tp.x,tp.y);
            self.dummy_image.setPosition(tp.x,tp.y);
            self.tool_10_1.setLocalZOrder(10);
            self.ShowRoundIndication(self.move_tool); 
            self.isRoundIndicationShow=true;    
        }    
        return true;
    },
    onTouchMoved:function(touch, event) 
    {
        var tp = touch.getLocation();
        var self = event.getCurrentTarget();
        // self.tool_8_2_1.setPosition(tp);
        // console.log('onTouchBegan:' + tp.x.toFixed(2) + ','  + tp.y.toFixed(2));

        if(self.isTouchOn==false)
        {
            return;
        }

        if(self.move_tool==1)
        {
            self.tool_1.setPosition(tp.x,tp.y);
            self.dummy_image.setPosition(tp.x,tp.y);

            for(var i=1;i<=1;i++)
            {
                if(cc.rectIntersectsRect(self.dummy_image.getBoundingBox(),self.tool_1_round_indicator[i].getBoundingBox()) && self.tool_1_round_indicator[i].getOpacity()!=0 && self.tool_1_hand_indicator[i].getScale()==1.0)
                {
                    self.tool_1_1.setScale(1.0);

                    self.prt_surgery_view.setPosition(self.tool_1_round_indicator[i].getPosition());
                    self.scheduleOnce(function(){self.SurgeryViewParticle();},0.1,"SurgeryViewParticle");

                    self.tool_1_round_indicator[i].setOpacity(0);
                    self.tool_1_round_indicator[i].setScale(0.0);
                    self.tool_1_round_indicator[i].setPosition(cc.p(25000,25000));

                    self.tool_1_hand_indicator[i].setOpacity(0);
                    self.tool_1_hand_indicator[i].setScale(0.0);
                    self.tool_1_hand_indicator[i].setPosition(cc.p(25000,25000));
                
                    if(self.tool_1_round_indicator[1].getOpacity()==0)
                    {
                        self.scheduleOnce(function(){self.ToolRunningAction();},0.1,"ToolRunningAction");
                    }
                }
            }
        }
        else if(self.move_tool==2)
        {
            self.tool_2_1.setPosition(tp.x,tp.y);
            self.dummy_image.setPosition(tp.x+40,tp.y+100);

            for(var i=1;i<=1;i++)
            {
                if(cc.rectIntersectsRect(self.dummy_image.getBoundingBox(),self.tool_2_round_indicator[i].getBoundingBox()) && self.tool_2_round_indicator[i].getOpacity()!=0 && self.tool_2_hand_indicator[i].getScale()==1.0)
                {
                    self.tool_2_1.setScale(0.0);
                    self.tool_2_2_1.setScale(1.0);

                    self.isTouchOn=false;
                    self.scheduleOnce(function(){self.setTouchEnable();},1.6,"setTouchEnable");

                    self.tool_2_2_1_animation = cc.Animation.create();
                    self.tool_2_2_1_animation.addSpriteFrameWithFile("RES/SS/tool_2_2_1.png");
                    self.tool_2_2_1_animation.addSpriteFrameWithFile("RES/SS/tool_2_2_2.png");
                    self.tool_2_2_1_animation.addSpriteFrameWithFile("RES/SS/tool_2_2_3.png");
                    self.tool_2_2_1_animation.addSpriteFrameWithFile("RES/SS/tool_2_2_4.png");
                    self.tool_2_2_1_animation.addSpriteFrameWithFile("RES/SS/tool_2_2_5.png");
                    self.tool_2_2_1_animation.setDelayPerUnit(0.3);

                    self.tool_2_2_1.runAction(cc.Animate.create(self.tool_2_2_1_animation));
  
                    self.prt_surgery_view.setPosition(self.tool_2_round_indicator[i].getPosition());
                    self.scheduleOnce(function(){self.SurgeryViewParticle();},1.5,"SurgeryViewParticle");

                    self.tool_2_round_indicator[i].setOpacity(0);
                    self.tool_2_round_indicator[i].setScale(0.0);
                    self.tool_2_round_indicator[i].setPosition(cc.p(25000,25000));

                    self.tool_2_hand_indicator[i].setOpacity(0);
                    self.tool_2_hand_indicator[i].setScale(0.0);
                    self.tool_2_hand_indicator[i].setPosition(cc.p(25000,25000));      
                
                    if(self.tool_2_round_indicator[1].getOpacity()==0)
                    {
                        self.scheduleOnce(function(){self.ToolRunningAction();},1.6,"ToolRunningAction");
                    }
                }
            }
        }
        else if(self.move_tool==3)
        {
            self.tool_3_2_1.setPosition(tp.x,tp.y);
            self.dummy_image.setPosition(tp.x-40,tp.y+50);

            for(var i=1;i<=2;i++)
            {
                if(cc.rectIntersectsRect(self.dummy_image.getBoundingBox(),self.tool_3_round_indicator[i].getBoundingBox()) && self.tool_3_round_indicator[i].getOpacity()!=0 && self.tool_3_hand_indicator[i].getScale()==1.0)
                {
                    self.tool_3_3_[i].setOpacity(self.tool_3_3_[i].getOpacity()-3);
                    self.tool_3_round_indicator[i].setOpacity(self.tool_3_round_indicator[i].getOpacity()-3);

                    if(self.tool_3_3_[i].getOpacity()<=200)
                    {
                        self.tool_3_2_1.setTexture("RES/SS/tool_3_2_2.png");
                    }
                    if(self.tool_3_3_[i].getOpacity()<=170)
                    {
                        self.tool_3_2_1.setTexture("RES/SS/tool_3_2_3.png");
                    }
                    if(self.tool_3_3_[i].getOpacity()<=140)
                    {
                        self.tool_3_2_1.setTexture("RES/SS/tool_3_2_4.png");
                    }
                    if(self.tool_3_3_[i].getOpacity()<=100)
                    {
                        self.tool_3_2_1.setTexture("RES/SS/tool_3_2_5.png");
                    }
                    if(self.tool_3_3_[i].getOpacity()<=50)
                    {
                        self.tool_3_2_1.setTexture("RES/SS/tool_3_2_6.png");
                    }
                    if(self.tool_3_3_[i].getOpacity()==0)
                    {
                        self.tool_3_2_1.setTexture("RES/SS/tool_3_2_1.png");

                        self.prt_surgery_view.setPosition(self.tool_3_round_indicator[i].getPosition());
                        self.scheduleOnce(function(){self.SurgeryViewParticle();},0.1,"SurgeryViewParticle");

                        self.tool_3_round_indicator[i].setOpacity(0);
                        self.tool_3_round_indicator[i].setScale(0.0);
                        self.tool_3_round_indicator[i].setPosition(cc.p(25000,25000));

                        self.tool_3_hand_indicator[i].setOpacity(0);
                        self.tool_3_hand_indicator[i].setScale(0.0);
                        self.tool_3_hand_indicator[i].setPosition(cc.p(25000,25000)); 

                        if(i<2)
                        {
                            self.tool_3_hand_indicator[i+1].setScale(1.0);
                        }
                    }              
                
                    if(self.tool_3_round_indicator[1].getOpacity()==0 && self.tool_3_round_indicator[2].getOpacity()==0)
                    {
                        self.scheduleOnce(function(){self.ToolRunningAction();},0.1,"ToolRunningAction");
                    }
                }
            }
        }
        else if(self.move_tool==4)
        {
            self.tool_4_1.setPosition(tp.x,tp.y);
            self.dummy_image.setPosition(tp.x-40,tp.y+50);

            for(var i=1;i<=2;i++)
            {
                if(cc.rectIntersectsRect(self.dummy_image.getBoundingBox(),self.tool_4_round_indicator[i].getBoundingBox()) && self.tool_4_round_indicator[i].getOpacity()!=0 && self.tool_4_hand_indicator[i].getScaleY()==1.0)
                {                   
                    if(i==1)
                    {
                        self.tool_4_3_[i].setOpacity(self.tool_4_3_[i].getOpacity()-3);
                        self.tool_4_round_indicator[i].setOpacity(self.tool_4_round_indicator[i].getOpacity()-3);
                    }
                    if(i==2)
                    {
                        self.tool_4_3_[i].setOpacity(self.tool_4_3_[i].getOpacity()-3);
                        self.tool_4_3_[i+1].setOpacity(self.tool_4_3_[i].getOpacity()-3);
                        self.tool_4_3_[i+2].setOpacity(self.tool_4_3_[i].getOpacity()-3);
                        self.tool_4_round_indicator[i].setOpacity(self.tool_4_round_indicator[i].getOpacity()-3);
                    }
                   
                    if(self.tool_4_3_[i].getOpacity()==0)
                    {
                        if(i==1)
                        {
                            self.tool_4_3_[i].setOpacity(0.0);
                        }
                        if(i==2)
                        {
                            self.tool_4_3_[i].setOpacity(0.0);
                            self.tool_4_3_[i+1].setOpacity(0.0);
                            self.tool_4_3_[i+2].setOpacity(0.0);
                        }
                
                        self.prt_surgery_view.setPosition(self.tool_4_round_indicator[i].getPosition());
                        self.scheduleOnce(function(){self.SurgeryViewParticle();},0.1,"SurgeryViewParticle");

                        self.tool_4_round_indicator[i].setOpacity(0);
                        self.tool_4_round_indicator[i].setScale(0.0);
                        self.tool_4_round_indicator[i].setPosition(cc.p(25000,25000));

                        self.tool_4_hand_indicator[i].setOpacity(0);
                        self.tool_4_hand_indicator[i].setScale(0.0);
                        self.tool_4_hand_indicator[i].setPosition(cc.p(25000,25000)); 

                        if(i<2)
                        {
                            self.tool_4_hand_indicator[i+1].setScale(1.0);
                        }
                    }              
                
                    if(self.tool_4_round_indicator[1].getOpacity()==0 && self.tool_4_round_indicator[2].getOpacity()==0)
                    {
                        self.scheduleOnce(function(){self.ToolRunningAction();},0.1,"ToolRunningAction");
                    }
                }
            }
        }
        else if(self.move_tool==5)
        {
            self.tool_5_1_1.setPosition(tp.x,tp.y);
            self.dummy_image.setPosition(tp.x,tp.y+50);

            for(var i=1;i<=2;i++)
            {
                if(cc.rectIntersectsRect(self.dummy_image.getBoundingBox(),self.tool_5_round_indicator[i].getBoundingBox()) && self.tool_5_round_indicator[i].getOpacity()!=0 && self.tool_5_hand_indicator[i].getScaleY()==1.0)
                {         
                    self.isTouchOn=false;
                    self.scheduleOnce(function(){self.setTouchEnable();},1.0,"setTouchEnable");

                    self.tool_5_2_[i].runAction(cc.Sequence.create(cc.DelayTime.create(0.9),cc.ScaleTo.create(0.0,1.0)));

                    if(i==1)
                    {
                        self.tool_5_1_1.setPosition(cc.p(100,425));
                    }
                    if(i==2)
                    {
                        self.tool_5_1_1.setPosition(cc.p(135,495));        
                    }

                    self.tool_5_1_1_animation = cc.Animation.create();
                    self.tool_5_1_1_animation.addSpriteFrameWithFile("RES/SS/tool_5_1_1.png");
                    self.tool_5_1_1_animation.addSpriteFrameWithFile("RES/SS/tool_5_1_2.png");
                    self.tool_5_1_1_animation.addSpriteFrameWithFile("RES/SS/tool_5_1_3.png");
                    self.tool_5_1_1_animation.addSpriteFrameWithFile("RES/SS/tool_5_1_1.png");
                    self.tool_5_1_1_animation.setDelayPerUnit(0.3);
                    self.tool_5_1_1.runAction(cc.Animate.create(self.tool_5_1_1_animation));

                    self.prt_surgery_view.setPosition(self.tool_5_round_indicator[i].getPosition());
                    self.scheduleOnce(function(){self.SurgeryViewParticle();},0.9,"SurgeryViewParticle");

                    self.tool_5_round_indicator[i].setOpacity(0);
                    self.tool_5_round_indicator[i].setScale(0.0);
                    self.tool_5_round_indicator[i].setPosition(cc.p(25000,25000));

                    self.tool_5_hand_indicator[i].setOpacity(0);
                    self.tool_5_hand_indicator[i].setScale(0.0);
                    self.tool_5_hand_indicator[i].setPosition(cc.p(25000,25000)); 
                   
                    if(i<2)
                    {
                        self.tool_5_hand_indicator[i+1].runAction(cc.Sequence.create(cc.DelayTime.create(1.1),cc.ScaleTo.create(0.0,1.0)));
                    }
                                              
                    if(self.tool_5_round_indicator[1].getOpacity()==0 && self.tool_5_round_indicator[2].getOpacity()==0)
                    {
                        self.scheduleOnce(function(){self.ToolRunningAction();},1.1,"ToolRunningAction");
                    }
                }
            }
        }
        else if(self.move_tool==55)
        {
            self.tool_5_4.setPosition(tp.x,tp.y);
            self.dummy_image.setPosition(tp.x,tp.y);

            for(var i=1;i<=2;i++)
            {
                if(cc.rectIntersectsRect(self.dummy_image.getBoundingBox(),self.tool_55_round_indicator[i].getBoundingBox()) && self.tool_55_round_indicator[i].getOpacity()!=0 && self.tool_55_hand_indicator[i].getScaleY()==1.0)
                {         
                    self.tool_5_2_[i].setOpacity(self.tool_5_2_[i].getOpacity()-3);
                    self.tool_5_3_[i].setOpacity(self.tool_5_3_[i].getOpacity()-3);
                    self.tool_55_round_indicator[i].setOpacity(self.tool_55_round_indicator[i].getOpacity()-3);

                    if(self.tool_5_2_[i].getOpacity()<=0)
                    {
                        self.tool_5_2_[i].setOpacity(0);
                        self.tool_5_3_[i].setOpacity(0);

                        self.prt_surgery_view.setPosition(self.tool_55_round_indicator[i].getPosition());
                        self.scheduleOnce(function(){self.SurgeryViewParticle();},0.1,"SurgeryViewParticle");

                        self.tool_55_round_indicator[i].setOpacity(0);
                        self.tool_55_round_indicator[i].setScale(0.0);
                        self.tool_55_round_indicator[i].setPosition(cc.p(25000,25000));

                        self.tool_55_hand_indicator[i].setOpacity(0);
                        self.tool_55_hand_indicator[i].setScale(0.0);
                        self.tool_55_hand_indicator[i].setPosition(cc.p(25000,25000)); 

                        if(i<2)
                        {
                            self.tool_55_hand_indicator[i+1].runAction(cc.Sequence.create(cc.DelayTime.create(0.1),cc.ScaleTo.create(0.0,1.0)));
                        }
                    }                
                                              
                    if(self.tool_55_round_indicator[1].getOpacity()==0 && self.tool_55_round_indicator[2].getOpacity()==0)
                    {
                        self.scheduleOnce(function(){self.ToolRunningAction();},0.1,"ToolRunningAction");
                    }
                }
            }
        }
        else if(self.move_tool==6)
        {
            self.tool_6.setPosition(tp.x,tp.y);
            self.dummy_image.setPosition(tp.x,tp.y);

            for(var i=1;i<=1;i++)
            {
                if(cc.rectIntersectsRect(self.dummy_image.getBoundingBox(),self.tool_6_round_indicator[i].getBoundingBox()) && self.tool_6_round_indicator[i].getOpacity()!=0 && self.tool_6_hand_indicator[i].getScaleY()==1.0)
                {         
                    self.move_tool=60;

                    self.tool_6.setScale(0.0);
                    self.tool_6_1.setScale(1.0);
                    self.tool_6_5.setScale(1.0);

                    for(var j=1;j<=3;j++)
                    {
                        self.tool_6_2_[j].setScale(1.0);
                        self.tool_6_6_[j].setScale(1.0);
                    }
                    self.tool_6_round_indicator[i].setOpacity(0);
                    self.tool_6_round_indicator[i].setScale(0.0);
                    self.tool_6_round_indicator[i].setPosition(cc.p(25000,25000));

                    self.tool_6_hand_indicator[i].setOpacity(0);
                    self.tool_6_hand_indicator[i].setScale(0.0);
                    self.tool_6_hand_indicator[i].setPosition(cc.p(25000,25000)); 
                                                 
                    if(self.tool_6_round_indicator[1].getOpacity()==0)
                    {
                        self.scheduleOnce(function(){self.ToolRunningAction();},1.1,"ToolRunningAction");
                    }
                }
            }
        }
        else if(self.move_tool==66)
        {
            self.tool_6_6_[1].setPosition(tp.x,tp.y);
            self.dummy_image.setPosition(tp.x,tp.y);

            if(cc.rectIntersectsRect(self.dummy_image.getBoundingBox(),self.tool_66_round_indicator[1].getBoundingBox()) && self.tool_66_round_indicator[1].getOpacity()!=0 && self.tool_66_hand_indicator[1].getScaleY()==1.0)
            {         
                self.move_tool=660;
                self.tool_6_6_[1].setScale(0.0);
                self.tool_6_3_[1].setScale(1.0);

                self.prt_surgery_view.setPosition(self.tool_66_round_indicator[1].getPosition());
                self.scheduleOnce(function(){self.SurgeryViewParticle();},0.1,"SurgeryViewParticle");

                self.tool_66_round_indicator[1].setOpacity(0);
                self.tool_66_round_indicator[1].setScale(0.0);
                self.tool_66_round_indicator[1].setPosition(cc.p(25000,25000));

                self.tool_66_hand_indicator[1].setOpacity(0);
                self.tool_66_hand_indicator[1].setScale(0.0);
                self.tool_66_hand_indicator[1].setPosition(cc.p(25000,25000)); 
                   
                if(self.tool_66_round_indicator[1].getOpacity()==0)
                {
                    self.scheduleOnce(function(){self.ToolRunningAction();},0.1,"ToolRunningAction");
                }
            }
        }
        else if(self.move_tool==666)
        {
            self.tool_6_6_[2].setPosition(tp.x,tp.y);
            self.dummy_image.setPosition(tp.x,tp.y);

            if(cc.rectIntersectsRect(self.dummy_image.getBoundingBox(),self.tool_66_round_indicator[2].getBoundingBox()) && self.tool_66_round_indicator[2].getOpacity()!=0 && self.tool_66_hand_indicator[2].getScaleY()==1.0)
            {         
                self.move_tool=6660;
                self.tool_6_6_[2].setScale(0.0);
                self.tool_6_3_[2].setScale(1.0);

                self.prt_surgery_view.setPosition(self.tool_66_round_indicator[2].getPosition());
                self.scheduleOnce(function(){self.SurgeryViewParticle();},0.1,"SurgeryViewParticle");

                self.tool_66_round_indicator[2].setOpacity(0);
                self.tool_66_round_indicator[2].setScale(0.0);
                self.tool_66_round_indicator[2].setPosition(cc.p(25000,25000));

                self.tool_66_hand_indicator[2].setOpacity(0);
                self.tool_66_hand_indicator[2].setScale(0.0);
                self.tool_66_hand_indicator[2].setPosition(cc.p(25000,25000)); 
                   
                if(self.tool_66_round_indicator[2].getOpacity()==0)
                {
                    self.scheduleOnce(function(){self.ToolRunningAction();},0.1,"ToolRunningAction");
                }
            }
        }
        else if(self.move_tool==6666)
        {
            self.tool_6_6_[3].setPosition(tp.x,tp.y);
            self.dummy_image.setPosition(tp.x,tp.y);

            if(cc.rectIntersectsRect(self.dummy_image.getBoundingBox(),self.tool_66_round_indicator[3].getBoundingBox()) && self.tool_66_round_indicator[3].getOpacity()!=0 && self.tool_66_hand_indicator[3].getScaleY()==1.0)
            {         
                self.move_tool=66660;

                self.tool_6_6_[3].setScale(0.0);
                self.tool_6_3_[3].setScale(0.0);
                self.tool_6_4.setScale(1.0);

                self.prt_surgery_view.setPosition(self.tool_66_round_indicator[3].getPosition());
                self.scheduleOnce(function(){self.SurgeryViewParticle();},0.1,"SurgeryViewParticle");

                self.tool_66_round_indicator[3].setOpacity(0);
                self.tool_66_round_indicator[3].setScale(0.0);
                self.tool_66_round_indicator[3].setPosition(cc.p(25000,25000));

                self.tool_66_hand_indicator[3].setOpacity(0);
                self.tool_66_hand_indicator[3].setScale(0.0);
                self.tool_66_hand_indicator[3].setPosition(cc.p(25000,25000)); 
                   
                if(self.tool_66_round_indicator[3].getOpacity()==0)
                {
                    self.scheduleOnce(function(){self.ToolRunningAction();},1.0,"ToolRunningAction");
                }
            }
        }
        else if(self.move_tool==7)
        {
            self.tool_7_2.setPosition(tp.x,tp.y);
            self.dummy_image.setPosition(tp.x,tp.y+120);

            for(var i=1;i<=1;i++)
            {
                if(cc.rectIntersectsRect(self.dummy_image.getBoundingBox(),self.tool_7_round_indicator[i].getBoundingBox()) && self.tool_7_round_indicator[i].getOpacity()!=0 && self.tool_7_hand_indicator[i].getScale()==1.0)
                {
                    self.tool_7_2.setScale(0.0);

                    self.isTouchOn=false;
                    self.scheduleOnce(function(){self.setTouchEnable();},2.7,"setTouchEnable");

                    self.tool_7_4_1.setScale(1.0);
                    self.tool_7_4_1_animation = cc.Animation.create();
                    self.tool_7_4_1_animation.addSpriteFrameWithFile("RES/SS/tool_7_4_1.png");
                    self.tool_7_4_1_animation.addSpriteFrameWithFile("RES/SS/tool_7_4_2.png");
                    self.tool_7_4_1_animation.addSpriteFrameWithFile("RES/SS/tool_7_4_3.png");
                    self.tool_7_4_1_animation.addSpriteFrameWithFile("RES/SS/tool_7_4_4.png");
                    self.tool_7_4_1_animation.addSpriteFrameWithFile("RES/SS/tool_7_4_5.png");
                    self.tool_7_4_1_animation.addSpriteFrameWithFile("RES/SS/tool_7_4_6.png");
                    self.tool_7_4_1_animation.addSpriteFrameWithFile("RES/SS/tool_7_4_7.png");
                    self.tool_7_4_1_animation.addSpriteFrameWithFile("RES/SS/tool_7_4_8.png");
                    self.tool_7_4_1_animation.addSpriteFrameWithFile("RES/SS/tool_7_4_9.png");
                    self.tool_7_4_1_animation.setDelayPerUnit(0.3);
                    self.tool_7_4_1.runAction(cc.Animate.create(self.tool_7_4_1_animation));

                    self.prt_surgery_view.setPosition(self.tool_7_round_indicator[i].getPosition());
                    self.scheduleOnce(function(){self.SurgeryViewParticle();},2.4,"SurgeryViewParticle");

                    self.tool_7_round_indicator[i].setOpacity(0);
                    self.tool_7_round_indicator[i].setScale(0.0);
                    self.tool_7_round_indicator[i].setPosition(cc.p(25000,25000));

                    self.tool_7_hand_indicator[i].setOpacity(0);
                    self.tool_7_hand_indicator[i].setScale(0.0);
                    self.tool_7_hand_indicator[i].setPosition(cc.p(25000,25000));      
                
                    if(self.tool_7_round_indicator[1].getOpacity()==0)
                    {
                        self.scheduleOnce(function(){self.ToolRunningAction();},2.8,"ToolRunningAction");
                    }
                }
            }
        }
        else if(self.move_tool==8)
        {
            self.tool_8_3.setPosition(tp.x-50,tp.y);
            self.dummy_image.setPosition(tp.x-20,tp.y+30);

            for(var i=1;i<=1;i++)
            {
                if(cc.rectIntersectsRect(self.dummy_image.getBoundingBox(),self.tool_8_round_indicator[i].getBoundingBox()) && self.tool_8_round_indicator[i].getOpacity()!=0 && self.tool_8_hand_indicator[i].getScale()==1.0)
                {
                    self.tool_8_3.setScale(0.0);
                    self.tool_8_1.setScale(0.0);

                    self.isTouchOn=false;
                    self.scheduleOnce(function(){self.setTouchEnable();},3.6,"setTouchEnable");

                    self.tool_8_2_1.setScale(1.0);
                    self.tool_8_2_1_animation = cc.Animation.create();
                    self.tool_8_2_1_animation.addSpriteFrameWithFile("RES/SS/tool_8_2_1.png");
                    self.tool_8_2_1_animation.addSpriteFrameWithFile("RES/SS/tool_8_2_2.png");
                    self.tool_8_2_1_animation.addSpriteFrameWithFile("RES/SS/tool_8_2_3.png");
                    self.tool_8_2_1_animation.addSpriteFrameWithFile("RES/SS/tool_8_2_4.png");
                    self.tool_8_2_1_animation.addSpriteFrameWithFile("RES/SS/tool_8_2_5.png");
                    self.tool_8_2_1_animation.addSpriteFrameWithFile("RES/SS/tool_8_2_6.png");
                    self.tool_8_2_1_animation.addSpriteFrameWithFile("RES/SS/tool_8_2_7.png");
                    self.tool_8_2_1_animation.setDelayPerUnit(0.5);
                    self.tool_8_2_1.runAction(cc.Animate.create(self.tool_8_2_1_animation));

                    self.prt_surgery_view.setPosition(self.tool_8_round_indicator[i].getPosition());
                    self.scheduleOnce(function(){self.SurgeryViewParticle();},3.5,"SurgeryViewParticle");

                    self.tool_8_round_indicator[i].setOpacity(0);
                    self.tool_8_round_indicator[i].setScale(0.0);
                    self.tool_8_round_indicator[i].setPosition(cc.p(25000,25000));

                    self.tool_8_hand_indicator[i].setOpacity(0);
                    self.tool_8_hand_indicator[i].setScale(0.0);
                    self.tool_8_hand_indicator[i].setPosition(cc.p(25000,25000));      
                
                    if(self.tool_8_round_indicator[1].getOpacity()==0)
                    {
                        self.scheduleOnce(function(){self.ToolRunningAction();},3.6,"ToolRunningAction");
                    }
                }
            }
        }
        else if(self.move_tool==9)
        {
            self.tool_9_1.setPosition(tp.x,tp.y);
            self.dummy_image.setPosition(tp.x,tp.y);

            for(var i=1;i<=1;i++)
            {
                if(cc.rectIntersectsRect(self.dummy_image.getBoundingBox(),self.tool_9_round_indicator[i].getBoundingBox()) && self.tool_9_round_indicator[i].getOpacity()!=0 && self.tool_9_hand_indicator[i].getScale()==1.0)
                {
                    self.move_tool=99;
                    self.tool_9_1.setPosition(cc.p(140,495));

                    self.prt_surgery_view.setPosition(self.tool_9_round_indicator[i].getPosition());
                    self.scheduleOnce(function(){self.SurgeryViewParticle();},0.1,"SurgeryViewParticle");

                    self.tool_9_round_indicator[i].setOpacity(0);
                    self.tool_9_round_indicator[i].setScale(0.0);
                    self.tool_9_round_indicator[i].setPosition(cc.p(25000,25000));

                    self.tool_9_hand_indicator[i].setOpacity(0);
                    self.tool_9_hand_indicator[i].setScale(0.0);
                    self.tool_9_hand_indicator[i].setPosition(cc.p(25000,25000));      
                
                    if(self.tool_9_round_indicator[1].getOpacity()==0)
                    {
                        self.scheduleOnce(function(){self.ToolRunningAction();},0.1,"ToolRunningAction");
                    }
                }
            }
        }
        else if(self.move_tool==10)
        {
            self.tool_10_1.setPosition(tp.x,tp.y);
            self.dummy_image.setPosition(tp.x,tp.y);

            for(var i=1;i<=1;i++)
            {
                if(cc.rectIntersectsRect(self.dummy_image.getBoundingBox(),self.tool_10_round_indicator[i].getBoundingBox()) && self.tool_10_round_indicator[i].getOpacity()!=0 && self.tool_10_hand_indicator[i].getScale()==1.0)
                {
                    self.move_tool=100;

                    self.tool_10_1.setScale(0.0);

                    self.isTouchOn=false;
                    self.scheduleOnce(function(){self.setTouchEnable();},2.6,"setTouchEnable");

                    self.tool_10_3_1.setScale(1.0);
                    self.tool_10_3_1_animation = cc.Animation.create();
                    self.tool_10_3_1_animation.addSpriteFrameWithFile("RES/SS/tool_10_3_1.png");
                    self.tool_10_3_1_animation.addSpriteFrameWithFile("RES/SS/tool_10_3_2.png");
                    self.tool_10_3_1_animation.addSpriteFrameWithFile("RES/SS/tool_10_3_3.png");
                    self.tool_10_3_1_animation.addSpriteFrameWithFile("RES/SS/tool_10_3_4.png");
                    self.tool_10_3_1_animation.addSpriteFrameWithFile("RES/SS/tool_10_3_5.png");
                    self.tool_10_3_1_animation.setDelayPerUnit(0.5);
                    self.tool_10_3_1.runAction(cc.Animate.create(self.tool_10_3_1_animation));

                    self.tool_10_3_1.runAction(cc.Sequence.create(cc.DelayTime.create(2.5),cc.ScaleTo.create(0.0,0.0)));
                    self.tool_10_2.runAction(cc.Sequence.create(cc.DelayTime.create(2.5),cc.ScaleTo.create(0.0,1.0)));

                    self.prt_surgery_view.setPosition(self.tool_10_round_indicator[i].getPosition());
                    self.scheduleOnce(function(){self.SurgeryViewParticle();},2.5,"SurgeryViewParticle");

                    self.tool_10_round_indicator[i].setOpacity(0);
                    self.tool_10_round_indicator[i].setScale(0.0);
                    self.tool_10_round_indicator[i].setPosition(cc.p(25000,25000));

                    self.tool_10_hand_indicator[i].setOpacity(0);
                    self.tool_10_hand_indicator[i].setScale(0.0);
                    self.tool_10_hand_indicator[i].setPosition(cc.p(25000,25000));      
                
                    if(self.tool_10_round_indicator[1].getOpacity()==0)
                    {
                        self.scheduleOnce(function(){self.ToolRunningAction();},2.6,"ToolRunningAction");
                    }
                }
            }
        }
    },
    onTouchEnded:function(touch, event) 
    {
        var tp = touch.getLocation();
        var self = event.getCurrentTarget();
        // console.log('onTouchBegan:' + tp.x.toFixed(2) + ','  + tp.y.toFixed(2));
    },
    onMouseMove:function(event)
    {
        var tp = event.getLocation();
        var self = event.getCurrentTarget();
        // var tpItemPanel = self.Sidepanel.convertToNodeSpace(tp);
        // console.log('onMouseMove:' + tp.x.toFixed(2) + ','  + tp.y.toFixed(2));

        if(cc.rectContainsPoint(self.btn_more.getBoundingBox(),tp)  && self.btn_more.getScale()==1.0 && self.btn_more.getNumberOfRunningActions()==0 )
        {
        	self.prt_Sparkle.setPosition(self.btn_more.getPosition());
        	self.prt_Sparkle.resetSystem();
            self.btn_more.setScale(1.05);
            return;
        }
        else if(self.btn_more.getScale()==1.05 && !cc.rectContainsPoint(self.btn_more.getBoundingBox(),tp) && self.btn_more.getNumberOfRunningActions()==0)
        {
            self.btn_more.setScale(1.0);
            return;
        }
        else if(cc.rectContainsPoint(self.btn_replay.getBoundingBox(),tp)  && self.btn_replay.getScale()==1.0 && self.btn_replay.getNumberOfRunningActions()==0)
        {
        	self.prt_Sparkle.setPosition(self.btn_replay.getPosition());
        	self.prt_Sparkle.resetSystem();
            self.btn_replay.setScale(1.1);
            return;
        }
        else if(self.btn_replay.getScale()==1.1 && !cc.rectContainsPoint(self.btn_replay.getBoundingBox(),tp) && self.btn_replay.getNumberOfRunningActions()==0)
        {
            self.btn_replay.setScale(1.0);
            return;
        }
        else if(cc.rectContainsPoint(self.Surgery_view_btn_next.getBoundingBox(),tp)  && self.Surgery_view_btn_next.getScale()==1.0 && self.Surgery_view_btn_next.getNumberOfRunningActions()==0)
        {
            self.prt_Sparkle.setPosition(self.Surgery_view_btn_next.getPosition());
            self.prt_Sparkle.resetSystem();
            self.Surgery_view_btn_next.setScale(1.1);
            return;
        }
        else if(self.Surgery_view_btn_next.getScale()==1.1 && !cc.rectContainsPoint(self.Surgery_view_btn_next.getBoundingBox(),tp) && self.Surgery_view_btn_next.getNumberOfRunningActions()==0)
        {
            self.Surgery_view_btn_next.setScale(1.0);
            return;
        }
    },
    onMoreApp:function(sender)
    {
        //if (this.isTouchOn==false){return;}
    	if (sender.getTag()==101)
        {
            CreateLinksInGame(comman.GameId,'SurgeryScene','more');
        }
        else
        {
            CreateLinksInGame(comman.GameId,'SurgeryScene','logo');
        }
    },
    onRelatedGames:function(sender)
    {
        var mystring = RelatedGames[sender.getTag()]['name'];
        mystring=mystring.replace(/ /g , "-");
        CreateLinksInGame(comman.GameId,'SurgeryScene','relatedgames',RelatedGames[sender.getTag()]['id']);
    },
    onReplayButton:function(sender)
    {
        if (this.isTouchOn==false){return;}
        if (sender.getNumberOfRunningActions()==0)
        {
            sender.setEnabled(false);
            this.scheduleOnce(function(){this.onNextScene()},0.1);
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
        Complete_Level[0]=false;
        Complete_Level[1]=true;
        cc.director.runScene(ChooseScene.scene());
    },
    createMainMenu:function()
    {
        this.btn_bb_icon = cc.MenuItemImage.create(res_comman.bb_icon_3,res_comman.bb_icon_3,this.onMoreApp,this);
        this.btn_bb_icon.setAnchorPoint(cc.p(0.0,1.0));
        this.btn_bb_icon.setScale(0.8);
        this.btn_bb_icon.setPosition(cc.p(0,comman.winSize().height));

        this.btn_more = cc.MenuItemImage.create(
            res_panel_com.btn_more,
            res_panel_com.btn_more,
            this.onMoreApp,this);
        this.btn_more.setScale(1.0);
        this.btn_more.setTag(101);
        this.btn_more.setPosition(cc.p(comman.winSize().width-this.btn_more.getContentSize().width*+8.5,this.btn_more.getContentSize().height*0.6));      
        this.btn_more.runAction(cc.Sequence.create(cc.DelayTime.create(0.5),cc.MoveTo.create(0.5,cc.p(comman.winSize().width-this.btn_more.getContentSize().width*7.1,this.btn_more.getPositionY()))));
     
        this.btn_replay = cc.MenuItemImage.create(res_mainScene.btn_replay,res_mainScene.btn_replay,this.onReplayButton,this);
        this.btn_replay.setScale(1.0);
        this.btn_replay.setPosition(cc.p(comman.winSize().width-this.btn_replay.getContentSize().width*0.5,this.btn_replay.getContentSize().height*-1.5));

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

        var relatedTag=this.getRandomInt(0,RelatedGames.length-1);
        console.log("relat : "+relatedTag + res_resource[res_resource.length-RelatedGames.length+relatedTag]);
        this.btn_relatedGames = cc.MenuItemImage.create(res_comman.logo_bg,res_comman.logo_bg,this.onRelatedGames,this);
        this.btn_relatedGames.setScale(1.0);
        this.btn_relatedGames.setTag(relatedTag);
        this.btn_relatedGames.setPosition(cc.p(comman.winSize().width*0.5,15+this.btn_relatedGames.getContentSize().height*-1.5*this.btn_relatedGames.getScale()));

        this.relatedGames_Img=cc.Sprite.create(res_resource[res_resource.length-RelatedGames.length+relatedTag]);
        this.relatedGames_Img.setScale(175/this.relatedGames_Img.getContentSize().width);
        this.relatedGames_Img.setPosition(this.btn_relatedGames.getContentSize().width/2,this.btn_relatedGames.getContentSize().height/2);
        this.btn_relatedGames.addChild(this.relatedGames_Img);

        this.MainMenu = cc.Menu.create(this.btn_bb_icon,this.btn_more,this.btn_replay,this.btn_music,this.btn_relatedGames);
        this.MainMenu.setPosition(cc.p(0,0));
        this.addChild(this.MainMenu,15);
    },
    getRandomInt:function(min, max) 
    {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
});
SurgeryScene.scene = function() {
    var scene = new cc.Scene();
    var layer = new SurgeryScene();
    scene.addChild(layer);
    return scene;
}