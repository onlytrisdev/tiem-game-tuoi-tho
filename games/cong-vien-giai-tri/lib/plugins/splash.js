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
        logo: new ig.Image('media/logo.png'),
        timer: new ig.Timer(),

        init: function(){
            this.timer.reset();
            ig.input.initMouse();
            ig.input.bind( ig.KEY.MOUSE1, 'click');
        },

        update: function(){
            if( ig.input.pressed('click') ) {
               this.openLink("http://localhost")
            }

            if(Math.round(this.timer.delta()) > 3){
                ig.system.setGame(MainMenuWin);
            }
        },

        draw: function(){
            //this.background.draw(0,0);
            //this.icon.draw(ig.system.width/2-32, ig.system.height/3);
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
            else {
                
            }
        },
    });
})