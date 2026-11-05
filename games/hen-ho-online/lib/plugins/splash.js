ig.module(
    'plugins.splash'
)

.requires(
    'impact.input',
    'impact.image',
    'impact.game',
    'plugins.button'
)

.defines(function() {
    SplashWin = ig.Game.extend({
        gggLink:"",
        logo:null,
        logoURL:"media/credits/ggg_new.png",
        timer: new ig.Timer(),
        flag:false,

        init: function(){
            this.timer.reset();
            ig.input.initMouse();
            ig.input.bind( ig.KEY.MOUSE1, 'click');
            ig.global.gggLogoURL = "";
            //console.log("flag a")
        },

        getGGGLogo:function() {
            if (ig.global.useAPI == true) {
                var t = GameAPI.Branding.getLogo();
                ig.global.gggLink = t.link;
                ig.global.gggLogoURL = t.image;
            } else {
                ig.global.gggLink = "http://localhost";
                ig.global.gggLogoURL = this.logoURL;
            }

            this.gggLink = ig.global.gggLink;
            this.logo = new ig.Image(ig.global.gggLogoURL);

           // console.log("gggLink : " + t.link)
        },

        update: function(){
           // console.log("flag b")
            if( ig.input.pressed('click') && ig.global.APIready == true && this.flag && this.gggLink != "") {
               this.openLink(this.gggLink)
            }

            if (ig.global.APIready != undefined && ig.global.APIready == true && !this.flag) {
                this.timer.reset();
                this.getGGGLogo();
                this.flag = true;
            }

            if(Math.round(this.timer.delta()) > 3 && ig.global.APIready == true && this.flag && this.gggLink != ""){
                ig.system.setGame(MainMenuWin);
            }
        },

        draw: function(){
            //this.background.draw(0,0);
            //this.icon.draw(ig.system.width/2-32, ig.system.height/3);
            if (this.logo)
                this.logo.draw(ig.system.width/2-this.logo.width/2, ig.system.height/2 - this.logo.height/2);
        },

        openLink:function(href) { 
            if( navigator.userAgent.match(/Android/i)
            || navigator.userAgent.match(/webOS/i)
            || navigator.userAgent.match(/iPhone/i)
            || navigator.userAgent.match(/iPad/i)
            || navigator.userAgent.match(/iPod/i))
            {
                var link = document.createElement('a');
                link.setAttribute('href', href);
                link.setAttribute('target','_blank');
                var clickevent = document.createEvent('Event');
                clickevent.initEvent('click', true, false);
                link.dispatchEvent(clickevent);
                return false;
            }
            
            
        },
    });
})