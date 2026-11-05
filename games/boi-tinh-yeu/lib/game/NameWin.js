ig.module(
  'game.NameWin'
)
.requires(
  'impact.game',
	'impact.font',
	'impact.sound',
	'impact.image',
	'impact.entity',
	'plugins.button',
	'plugins.tween',
	'plugins.bg'
)
.defines(function(){

	NameWin=ig.Game.extend({

		bgGame:null,
		keyboardBG:null,
        soundBtn:null,

        pauseState:false,

		drawFlag:false,

		next:null,
		back:null,
		q:null,
		w:null,
		e:null,
		r:null,
		t:null,
		y:null,
		u:null,
		i:null,
		o:null,
		p:null,
		z:null,
		a:null,
		s:null,d:null,f:null,
		g:null,h:null,j:null,k:null,
		x:null,c:null,v:null,b:null,
		n:null,m:null,l:null,
		spacebar:null,
		backspace:null,
		enter:null,
        arrow:null,

		textbox1:"",
		textbox2:"",
		idxText:1,

		font: new ig.Font( '', 27, null, null, '#D63162','center', 4, false, false, "#FFF387"),
		font2: new ig.Font( '', 27, null, null, '#D63162','center', 4, false, false, "#FFF387"),

		init:function()
		{
			ig.resources = [];
        	ig.ready = false;

        	dummyImages=[
        		new ig.Image("media/ingame-1bg.png"),
        		new ig.Image("media/keyboardbase.png"),
        		new ig.Image("media/nextbtn.png"),
        		new ig.Image("media/backbtn.png"),
        		new ig.Image("media/a.png"),new ig.Image("media/b.png"),new ig.Image("media/c.png"),new ig.Image("media/d.png"),new ig.Image("media/e.png"),
        		new ig.Image("media/f.png"),new ig.Image("media/g.png"),new ig.Image("media/h.png"),new ig.Image("media/i.png"),new ig.Image("media/j.png"),
        		new ig.Image("media/o.png"),new ig.Image("media/n.png"),new ig.Image("media/m.png"),new ig.Image("media/l.png"),new ig.Image("media/k.png"),
        		new ig.Image("media/p.png"),new ig.Image("media/q.png"),new ig.Image("media/r.png"),new ig.Image("media/s.png"),new ig.Image("media/t.png"),
        		new ig.Image("media/y.png"),new ig.Image("media/x.png"),new ig.Image("media/w.png"),new ig.Image("media/v.png"),new ig.Image("media/u.png"),
        		new ig.Image("media/z.png"),
        		new ig.Image("media/spacebar.png"),
        		new ig.Image("media/enter.png"),
        		new ig.Image("media/backspace.png"),
                new ig.Image("media/sound.png"),
                new ig.Image("media/okbtn.png"),
                new ig.Image("media/warning2.png")

        	]

        	ig.input.initMouse();
        	ig.input.bind( ig.KEY.MOUSE1, 'click');

        	

        	this.bgGame=this.spawnEntity
        	(
        		Bg,ig.getX(0),ig.getY(0),
        		{
        			animSheet:new ig.AnimationSheet("media/ingame-1bg.png",ig.getX(1024),ig.getY(768))
        		}
        	)
        	this.bgGame.zIndex=this.entities.length-1

        	this.keyboardBG=this.spawnEntity
        	(
        		Obj,ig.getX(0),ig.getY(574.3),
        		{
        			animSheet:new ig.AnimationSheet("media/keyboardbase.png",ig.getX(1024),ig.getY(194))
        		}
        	)
        	this.keyboardBG.zIndex=this.entities.length-1

            this.soundBtn=this.spawnEntity
            (
                Button,ig.getX(46.8),ig.getY(45.35),
                {
                    size:{x:ig.getX(50),y:ig.getY(50)},
                    animSheet:new ig.AnimationSheet("media/sound.png",ig.getX(50),ig.getY(50)),
                    pressedUp:function()
                    {
                        if (ig.game.pauseState==false)
                         {
                            ig.global.SOUND=!ig.global.SOUND
                        
                            if (ig.global.SOUND)
                             {
                                this.setState("idle")
                                ig.game.drawFlag=false
                                ig.global.BGM.play();
                             }
                             else if (!ig.global.SOUND)
                             {
                                this.setState("off")
                                ig.game.drawFlag=false
                                ig.global.BGM.pause();
                             }
                         }
                        
                    }
                }
            )
            this.soundBtn.zIndex=this.entities.length-1
            this.soundBtn.addAnim("off",1,[1])

            if (ig.global.SOUND==false)
             {
                this.soundBtn.setState("off")
             }

             this.arrow=this.spawnEntity
             (
                Obj,ig.getX(201.4),ig.getY(167.55),
                {
                    animSheet:new ig.AnimationSheet("media/arrow.png",ig.getX(42),ig.getY(55))
                }
            )
             this.arrow.zIndex=this.entities.length-1


//////////////////////////////////////////////////////////button2 keyboard////////////////////////////////////////////////
        	this.next=this.spawnEntity
        	(
        		Button,ig.getX(913.1),ig.getY(587.2),
        		{
        			size:{x:ig.getX(80),y:ig.getY(49)},
        			animSheet:new ig.AnimationSheet("media/nextbtn.png",ig.getX(80),ig.getY(49)),
        			pressedUp:function()
        			{
                        if (ig.game.pauseState==false)
                         {
                            //ke window/textbox selanjutnya
                            ig.game.idxText=2
                            this.setState("hidden")
                            ig.game.back.setState("idle")
                            ig.game.drawFlag=false
                         }
        				

        			}
        		}
        	)
        	this.next.zIndex=this.entities.length-1

        	this.back=this.spawnEntity
        	(
        		Button,ig.getX(913.1),ig.getY(644.65),
        		{
        			size:{x:ig.getX(80),y:ig.getY(49)},
        			animSheet:new ig.AnimationSheet("media/backbtn.png",ig.getX(80),ig.getY(49)),
        			pressedUp:function()
        			{
                        if (ig.game.pauseState==false)
                         {
                            //ke window/textbox sebelumnya
                            ig.game.idxText=1
                            this.setState("hidden")
                            ig.game.next.setState("idle")
                            ig.game.drawFlag=false
                         }
        				
        			}
        		}
        	)
        	this.back.zIndex=this.entities.length-1
        	this.back.setState("hidden")

        	this.q=this.spawnEntity
        	(
        		Button,ig.getX(29.3),ig.getY(587.2),
        		{
        			size:{x:ig.getX(80),y:ig.getY(49)},
        			animSheet:new ig.AnimationSheet("media/q.png",ig.getX(80),ig.getY(49)),
        			pressedUp:function()
        			{
                        if (ig.game.pauseState==false)
                         {
                            //nulis "q"
                            if (ig.game["textbox"+ig.game.idxText].length<10)
                             {
                                ig.game["textbox"+ig.game.idxText]=ig.game["textbox"+ig.game.idxText]+"Q"
                                ig.game.drawFlag=false
                             }
                         }
        				
        			}
        		}
        	)
        	this.q.zIndex=this.entities.length-1

        	this.w=this.spawnEntity
        	(
        		Button,ig.getX(117.75),ig.getY(587.2),
        		{
        			size:{x:ig.getX(80),y:ig.getY(49)},
        			animSheet:new ig.AnimationSheet("media/w.png",ig.getX(80),ig.getY(49)),
        			pressedUp:function()
        			{
                        if (ig.game.pauseState==false)
                         {
                            //nulis "W"
                            if (ig.game["textbox"+ig.game.idxText].length<10)
                             {
                                ig.game["textbox"+ig.game.idxText]=ig.game["textbox"+ig.game.idxText]+"W"
                                ig.game.drawFlag=false
                             }
                         }
        				
        			}
        		}
        	)
        	this.w.zIndex=this.entities.length-1

        	this.e=this.spawnEntity
        	(
        		Button,ig.getX(206.25),ig.getY(587.2),
        		{
        			size:{x:ig.getX(80),y:ig.getY(49)},
        			animSheet:new ig.AnimationSheet("media/e.png",ig.getX(80),ig.getY(49)),
        			pressedUp:function()
        			{
                        if (ig.game.pauseState==false)
                         {
                            //nulis "e"
                            if (ig.game["textbox"+ig.game.idxText].length<10)
                             {
                                ig.game["textbox"+ig.game.idxText]=ig.game["textbox"+ig.game.idxText]+"E"
                                ig.game.drawFlag=false
                             }
                         }
        				
        			}
        		}
        	)
        	this.e.zIndex=this.entities.length-1

        	this.r=this.spawnEntity
        	(
        		Button,ig.getX(294.7),ig.getY(587.2),
        		{
        			size:{x:ig.getX(80),y:ig.getY(49)},
        			animSheet:new ig.AnimationSheet("media/r.png",ig.getX(80),ig.getY(49)),
        			pressedUp:function()
        			{
                        if (ig.game.pauseState==false)
                         {
                            //nulis "r"
                            if (ig.game["textbox"+ig.game.idxText].length<10)
                             {
                                ig.game["textbox"+ig.game.idxText]=ig.game["textbox"+ig.game.idxText]+"R"
                                ig.game.drawFlag=false
                             }
                         }
        				
        			}
        		}
        	)
        	this.r.zIndex=this.entities.length-1

        	this.t=this.spawnEntity
        	(
        		Button,ig.getX(383.2),ig.getY(587.2),
        		{
        			size:{x:ig.getX(80),y:ig.getY(49)},
        			animSheet:new ig.AnimationSheet("media/t.png",ig.getX(80),ig.getY(49)),
        			pressedUp:function()
        			{
                        if (ig.game.pauseState==false)
                         {
                            //nulis "t"
                            if (ig.game["textbox"+ig.game.idxText].length<10)
                             {
                                ig.game["textbox"+ig.game.idxText]=ig.game["textbox"+ig.game.idxText]+"T"
                                ig.game.drawFlag=false
                             }
                         }
        				
        			}
        		}
        	)
        	this.t.zIndex=this.entities.length-1

        	this.y=this.spawnEntity
        	(
        		Button,ig.getX(471.65),ig.getY(587.2),
        		{
        			size:{x:ig.getX(80),y:ig.getY(49)},
        			animSheet:new ig.AnimationSheet("media/y.png",ig.getX(80),ig.getY(49)),
        			pressedUp:function()
        			{
                        if (ig.game.pauseState==false)
                         {
                            //nulis "y"
                            if (ig.game["textbox"+ig.game.idxText].length<10)
                             {
                                ig.game["textbox"+ig.game.idxText]=ig.game["textbox"+ig.game.idxText]+"Y"
                                ig.game.drawFlag=false
                             }
                         }
        				
        			}
        		}
        	)
        	this.y.zIndex=this.entities.length-1

        	this.u=this.spawnEntity
        	(
        		Button,ig.getX(560.15),ig.getY(587.2),
        		{
        			size:{x:ig.getX(80),y:ig.getY(49)},
        			animSheet:new ig.AnimationSheet("media/u.png",ig.getX(80),ig.getY(49)),
        			pressedUp:function()
        			{
                        if (ig.game.pauseState==false)
                         {
                            //nulis "u"
                            if (ig.game["textbox"+ig.game.idxText].length<10)
                             {
                                ig.game["textbox"+ig.game.idxText]=ig.game["textbox"+ig.game.idxText]+"U"
                                ig.game.drawFlag=false
                             }
                         }
        				
        			}
        		}
        	)
        	this.u.zIndex=this.entities.length-1

        	this.i=this.spawnEntity
        	(
        		Button,ig.getX(648.6),ig.getY(587.2),
        		{
        			size:{x:ig.getX(80),y:ig.getY(49)},
        			animSheet:new ig.AnimationSheet("media/i.png",ig.getX(80),ig.getY(49)),
        			pressedUp:function()
        			{
                        if (ig.game.pauseState==false)
                         {
                            //nulis "i"
                            if (ig.game["textbox"+ig.game.idxText].length<10)
                             {
                                ig.game["textbox"+ig.game.idxText]=ig.game["textbox"+ig.game.idxText]+"I"
                                ig.game.drawFlag=false
                             }
                         }
        				
        			}
        		}
        	)
        	this.i.zIndex=this.entities.length-1

        	this.o=this.spawnEntity
        	(
        		Button,ig.getX(737.1),ig.getY(587.2),
        		{
        			size:{x:ig.getX(80),y:ig.getY(49)},
        			animSheet:new ig.AnimationSheet("media/o.png",ig.getX(80),ig.getY(49)),
        			pressedUp:function()
        			{
                        if (ig.game.pauseState==false)
                         {
                            //nulis "o"
                            if (ig.game["textbox"+ig.game.idxText].length<10)
                             {
                                ig.game["textbox"+ig.game.idxText]=ig.game["textbox"+ig.game.idxText]+"O"
                                ig.game.drawFlag=false
                             }
                         }
        				
        			}
        		}
        	)
        	this.o.zIndex=this.entities.length-1

        	this.p=this.spawnEntity
        	(
        		Button,ig.getX(825.55),ig.getY(587.2),
        		{
        			size:{x:ig.getX(80),y:ig.getY(49)},
        			animSheet:new ig.AnimationSheet("media/p.png",ig.getX(80),ig.getY(49)),
        			pressedUp:function()
        			{
                        if (ig.game.pauseState==false)
                         {
                            //nulis "p"
                            if (ig.game["textbox"+ig.game.idxText].length<10)
                             {
                                ig.game["textbox"+ig.game.idxText]=ig.game["textbox"+ig.game.idxText]+"P"
                                ig.game.drawFlag=false
                             }
                         }
        				
        			}
        		}
        	)
        	this.p.zIndex=this.entities.length-1

        	this.z=this.spawnEntity
        	(
        		Button,ig.getX(29.3),ig.getY(644.65),
        		{
        			size:{x:ig.getX(80),y:ig.getY(49)},
        			animSheet:new ig.AnimationSheet("media/z.png",ig.getX(80),ig.getY(49)),
        			pressedUp:function()
        			{
                        if (ig.game.pauseState==false)
                         {
                            //nulis "z"
                            if (ig.game["textbox"+ig.game.idxText].length<10)
                             {
                                ig.game["textbox"+ig.game.idxText]=ig.game["textbox"+ig.game.idxText]+"Z"
                                ig.game.drawFlag=false
                             }
                         }
        				
        			}
        		}
        	)
        	this.z.zIndex=this.entities.length-1

        	this.a=this.spawnEntity
        	(
        		Button,ig.getX(116.9),ig.getY(644.65),
        		{
        			size:{x:ig.getX(80),y:ig.getY(49)},
        			animSheet:new ig.AnimationSheet("media/a.png",ig.getX(80),ig.getY(49)),
        			pressedUp:function()
        			{
                        if (ig.game.pauseState==false)
                         {
                            //nulis "a"
                            if (ig.game["textbox"+ig.game.idxText].length<10)
                             {
                                ig.game["textbox"+ig.game.idxText]=ig.game["textbox"+ig.game.idxText]+"A"
                                ig.game.drawFlag=false
                             }
                         }
        				
        			}
        		}
        	)
        	this.a.zIndex=this.entities.length-1

        	this.s=this.spawnEntity
        	(
        		Button,ig.getX(205.35),ig.getY(644.65),
        		{
        			size:{x:ig.getX(80),y:ig.getY(49)},
        			animSheet:new ig.AnimationSheet("media/s.png",ig.getX(80),ig.getY(49)),
        			pressedUp:function()
        			{
                        if (ig.game.pauseState==false)
                         {
                            //nulis "s"
                            if (ig.game["textbox"+ig.game.idxText].length<10)
                             {
                                ig.game["textbox"+ig.game.idxText]=ig.game["textbox"+ig.game.idxText]+"S"
                                ig.game.drawFlag=false
                             }
                         }
        				
        			}
        		}
        	)
        	this.s.zIndex=this.entities.length-1

        	this.d=this.spawnEntity
        	(
        		Button,ig.getX(293.85),ig.getY(644.65),
        		{
        			size:{x:ig.getX(80),y:ig.getY(49)},
        			animSheet:new ig.AnimationSheet("media/d.png",ig.getX(80),ig.getY(49)),
        			pressedUp:function()
        			{
                        if (ig.game.pauseState==false)
                         {
                            //nulis "d"
                            if (ig.game["textbox"+ig.game.idxText].length<10)
                             {
                                ig.game["textbox"+ig.game.idxText]=ig.game["textbox"+ig.game.idxText]+"D"
                                ig.game.drawFlag=false
                             }
                         }
        				
        			}
        		}
        	)
        	this.d.zIndex=this.entities.length-1

        	this.f=this.spawnEntity
        	(
        		Button,ig.getX(382.3),ig.getY(644.65),
        		{
        			size:{x:ig.getX(80),y:ig.getY(49)},
        			animSheet:new ig.AnimationSheet("media/f.png",ig.getX(80),ig.getY(49)),
        			pressedUp:function()
        			{
                        if (ig.game.pauseState==false)
                         {
                            //nulis "f"
                            if (ig.game["textbox"+ig.game.idxText].length<10)
                             {
                                ig.game["textbox"+ig.game.idxText]=ig.game["textbox"+ig.game.idxText]+"F"
                                ig.game.drawFlag=false
                             }
                         }
        				
        			}
        		}
        	)
        	this.f.zIndex=this.entities.length-1

        	this.g=this.spawnEntity
        	(
        		Button,ig.getX(470.8),ig.getY(644.65),
        		{
        			size:{x:ig.getX(80),y:ig.getY(49)},
        			animSheet:new ig.AnimationSheet("media/g.png",ig.getX(80),ig.getY(49)),
        			pressedUp:function()
        			{
                        if (ig.game.pauseState==false)
                         {
                            //nulis "g"
                            if (ig.game["textbox"+ig.game.idxText].length<10)
                             {
                                ig.game["textbox"+ig.game.idxText]=ig.game["textbox"+ig.game.idxText]+"G"
                                ig.game.drawFlag=false
                             }
                         }
        				
        			}
        		}
        	)
        	this.g.zIndex=this.entities.length-1

        	this.h=this.spawnEntity
        	(
        		Button,ig.getX(559.25),ig.getY(644.65),
        		{
        			size:{x:ig.getX(80),y:ig.getY(49)},
        			animSheet:new ig.AnimationSheet("media/h.png",ig.getX(80),ig.getY(49)),
        			pressedUp:function()
        			{
                        if (ig.game.pauseState==false)
                         {
                            //nulis "h"
                            if (ig.game["textbox"+ig.game.idxText].length<10)
                             {
                                ig.game["textbox"+ig.game.idxText]=ig.game["textbox"+ig.game.idxText]+"H"
                                ig.game.drawFlag=false
                             }
                         }
        				
        			}
        		}
        	)
        	this.h.zIndex=this.entities.length-1

        	this.j=this.spawnEntity
        	(
        		Button,ig.getX(647.75),ig.getY(644.65),
        		{
        			size:{x:ig.getX(80),y:ig.getY(49)},
        			animSheet:new ig.AnimationSheet("media/j.png",ig.getX(80),ig.getY(49)),
        			pressedUp:function()
        			{
                        if (ig.game.pauseState==false)
                         {
                            //nulis "j"
                            if (ig.game["textbox"+ig.game.idxText].length<10)
                             {
                                ig.game["textbox"+ig.game.idxText]=ig.game["textbox"+ig.game.idxText]+"J"
                                ig.game.drawFlag=false
                             }
                         }
        				
        			}
        		}
        	)
        	this.j.zIndex=this.entities.length-1

        	this.k=this.spawnEntity
        	(
        		Button,ig.getX(736.2),ig.getY(644.65),
        		{
        			size:{x:ig.getX(80),y:ig.getY(49)},
        			animSheet:new ig.AnimationSheet("media/k.png",ig.getX(80),ig.getY(49)),
        			pressedUp:function()
        			{
                        if (ig.game.pauseState==false)
                         {
                            //nulis "k"
                            if (ig.game["textbox"+ig.game.idxText].length<10)
                             {
                                ig.game["textbox"+ig.game.idxText]=ig.game["textbox"+ig.game.idxText]+"K"
                                ig.game.drawFlag=false
                             }
                         }
        				
        			}
        		}
        	)
        	this.k.zIndex=this.entities.length-1

        	this.x=this.spawnEntity
        	(
        		Button,ig.getX(29.3),ig.getY(702.05),
        		{
        			size:{x:ig.getX(80),y:ig.getY(49)},
        			animSheet:new ig.AnimationSheet("media/x.png",ig.getX(80),ig.getY(49)),
        			pressedUp:function()
        			{
                        if (ig.game.pauseState==false)
                         {
                            //nulis "x"
                            if (ig.game["textbox"+ig.game.idxText].length<10)
                             {
                                ig.game["textbox"+ig.game.idxText]=ig.game["textbox"+ig.game.idxText]+"X"
                                ig.game.drawFlag=false
                             }
                         }
        				
        			}
        		}
        	)
        	this.x.zIndex=this.entities.length-1

        	this.c=this.spawnEntity
        	(
        		Button,ig.getX(117.75),ig.getY(702.05),
        		{
        			size:{x:ig.getX(80),y:ig.getY(49)},
        			animSheet:new ig.AnimationSheet("media/c.png",ig.getX(80),ig.getY(49)),
        			pressedUp:function()
        			{
                        if (ig.game.pauseState==false)
                         {
                            //nulis "c"
                            if (ig.game["textbox"+ig.game.idxText].length<10)
                             {
                                ig.game["textbox"+ig.game.idxText]=ig.game["textbox"+ig.game.idxText]+"C"
                                ig.game.drawFlag=false
                             }
                         }
        				
        			}
        		}
        	)
        	this.c.zIndex=this.entities.length-1

        	this.v=this.spawnEntity
        	(
        		Button,ig.getX(206.25),ig.getY(702.05),
        		{
        			size:{x:ig.getX(80),y:ig.getY(49)},
        			animSheet:new ig.AnimationSheet("media/v.png",ig.getX(80),ig.getY(49)),
        			pressedUp:function()
        			{
                        if (ig.game.pauseState==false)
                         {
                            //nulis "v"
                            if (ig.game["textbox"+ig.game.idxText].length<10)
                             {
                                ig.game["textbox"+ig.game.idxText]=ig.game["textbox"+ig.game.idxText]+"V"
                                ig.game.drawFlag=false
                             }
                         }
        				
        			}
        		}
        	)
        	this.v.zIndex=this.entities.length-1

        	this.b=this.spawnEntity
        	(
        		Button,ig.getX(294.7),ig.getY(702.05),
        		{
        			size:{x:ig.getX(80),y:ig.getY(49)},
        			animSheet:new ig.AnimationSheet("media/b.png",ig.getX(80),ig.getY(49)),
        			pressedUp:function()
        			{
                        if (ig.game.pauseState==false)
                         {
                            //nulis "b"
                            if (ig.game["textbox"+ig.game.idxText].length<10)
                             {
                                ig.game["textbox"+ig.game.idxText]=ig.game["textbox"+ig.game.idxText]+"B"
                                ig.game.drawFlag=false
                             }
                         }
        				
        			}
        		}
        	)
        	this.b.zIndex=this.entities.length-1

        	this.n=this.spawnEntity
        	(
        		Button,ig.getX(383.2),ig.getY(702.05),
        		{
        			size:{x:ig.getX(80),y:ig.getY(49)},
        			animSheet:new ig.AnimationSheet("media/n.png",ig.getX(80),ig.getY(49)),
        			pressedUp:function()
        			{
                        if (ig.game.pauseState==false)
                         {
                            //nulis "n"
                            if (ig.game["textbox"+ig.game.idxText].length<10)
                             {
                                ig.game["textbox"+ig.game.idxText]=ig.game["textbox"+ig.game.idxText]+"N"
                                ig.game.drawFlag=false
                             }
                         }
        				
        			}
        		}
        	)
        	this.n.zIndex=this.entities.length-1

        	this.m=this.spawnEntity
        	(
        		Button,ig.getX(471.65),ig.getY(702.05),
        		{
        			size:{x:ig.getX(80),y:ig.getY(49)},
        			animSheet:new ig.AnimationSheet("media/m.png",ig.getX(80),ig.getY(49)),
        			pressedUp:function()
        			{
                        if (ig.game.pauseState==false)
                         {
                            //nulis "m"
                            if (ig.game["textbox"+ig.game.idxText].length<10)
                             {
                                ig.game["textbox"+ig.game.idxText]=ig.game["textbox"+ig.game.idxText]+"M"
                                ig.game.drawFlag=false
                             }
                         }
        				
        			}
        		}
        	)
        	this.m.zIndex=this.entities.length-1

        	this.l=this.spawnEntity
        	(
        		Button,ig.getX(560.15),ig.getY(702.05),
        		{
        			size:{x:ig.getX(80),y:ig.getY(49)},
        			animSheet:new ig.AnimationSheet("media/l.png",ig.getX(80),ig.getY(49)),
        			pressedUp:function()
        			{
                        if (ig.game.pauseState==false)
                         {
                            //nulis "l"
                            if (ig.game["textbox"+ig.game.idxText].length<10)
                             {
                                ig.game["textbox"+ig.game.idxText]=ig.game["textbox"+ig.game.idxText]+"L"
                                ig.game.drawFlag=false
                             }
                         }
        				
        			}
        		}
        	)
        	this.l.zIndex=this.entities.length-1

        	this.spacebar=this.spawnEntity
        	(
        		Button,ig.getX(647.75),ig.getY(702.05),
        		{
        			size:{x:ig.getX(257),y:ig.getY(49)},
        			animSheet:new ig.AnimationSheet("media/spacebar.png",ig.getX(257),ig.getY(49)),
        			pressedUp:function()
        			{
                        if (ig.game.pauseState==false)
                         {
                            //nulis "spacebar"
                            if (ig.game["textbox"+ig.game.idxText].length<10)
                             {
                                ig.game["textbox"+ig.game.idxText]=ig.game["textbox"+ig.game.idxText]+" "
                                ig.game.drawFlag=false
                             }
                         }
        				
        			}
        		}
        	)
        	this.spacebar.zIndex=this.entities.length-1

        	this.enter=this.spawnEntity
        	(
        		Button,ig.getX(913.1),ig.getY(702.05),
        		{
        			size:{x:ig.getX(80),y:ig.getY(49)},
        			animSheet:new ig.AnimationSheet("media/enter.png",ig.getX(80),ig.getY(49)),
        			pressedUp:function()
        			{
                        if (ig.game.pauseState==false)
                         {
                            //nulis "enter"
                            if (ig.game.idxText==1)
                             {
                                ig.game.idxText=2
                                ig.game.next.setState("hidden")
                                ig.game.back.setState("idle")
                                ig.game.drawFlag=false
                             }
                             else
                             {
                                if (ig.game.textbox1.length > 0 && ig.game.textbox2.length > 0)
                                 {
                                    ig.global.name1=ig.game.textbox1
                                    ig.global.name2=ig.game.textbox2
                                    ig.system.setGame(GameWin)
                                 }
                                
                                else
                                {
                                    ig.game.pauseState=true
                                    ig.game.warning=ig.game.spawnEntity
                                    (
                                        Obj,ig.getX(0),ig.getY(0),
                                        {
                                            animSheet:new ig.AnimationSheet("media/warning2.png",ig.getX(1024),ig.getY(768))
                                        }
                                    )
                                    ig.game.warning.zIndex=ig.game.entities.length-1
                                    
                                    ig.game.okbtn=ig.game.spawnEntity
                                    (
                                        Button,ig.getX(428.6),ig.getY(367.55),
                                        {
                                            size:{x:ig.getX(159),y:ig.getY(54)},
                                            animSheet:new ig.AnimationSheet("media/okbtn.png",ig.getX(159),ig.getY(54)),
                                            pressedUp:function()
                                            {
                                                
                                                ig.game.warning.kill()
                                                this.kill()
                                                ig.game.pauseState=false
                                                ig.game.drawFlag=false
                                            }
                                        }
                                    )
                                    ig.game.okbtn.zIndex=ig.game.entities.length-1

                                    ig.game.drawFlag=false
                                    
                                }
                             }
                         }

        			}
        		}
        	)
        	this.enter.zIndex=this.entities.length-1

        	this.backspace=this.spawnEntity
        	(
        		Button,ig.getX(824.6),ig.getY(644.65),
        		{
        			size:{x:ig.getX(80),y:ig.getY(49)},
        			animSheet:new ig.AnimationSheet("media/backspace.png",ig.getX(80),ig.getY(49)),
        			pressedUp:function()
        			{
                        if (ig.game.pauseState==false)
                        {
                            //nulis "backspace"
                            ig.game["textbox"+ig.game.idxText]=ig.game["textbox"+ig.game.idxText].slice(0,-1)
                            ig.game.drawFlag=false
                        }
        				
        			}
        		}
        	)
        	this.backspace.zIndex=this.entities.length-1


        	ig.game.sortEntitiesDeferred();

	        // load the resources
	        ig.ready = true;

	        // Start the custom preloader with the captured resources
	        this.loader = new IntermediateLoader( null, ig.resources );
	        this.loader.load();
		},


		draw:function()
		{
			if (this.loader == null)
	        {
	        	if(!this.drawFlag)
	        	{
	        		this.parent();
                    
	        		this.font.draw(this.textbox1,ig.getX(111.7),ig.getY(249))
                    this.font2.draw(this.textbox2,ig.getX(713),ig.getY(249))

                    if (this.pauseState)
                     {
                        this.warning.draw();
                        this.okbtn.draw();
                     }

	        		this.drawFlag=true;
	        	}
	          

	        }
		},

		update:function()
		{
			this.parent();
            if (this.idxText==1)
             {
                this.arrow.pos.x=ig.getX(201.4)
             }
             else if (this.idxText==2)
              {
                this.arrow.pos.x=ig.getX(786.35)
              }
	        
		},

	})
})