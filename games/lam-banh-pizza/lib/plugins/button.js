// A Button Entity for Impact.js
// Has 4 States:
// * hidden - Not shown
// * idle - just sitting there
// * active - someone is pushing on it
// * deactive - shown, but not usable

// And 3 Events
// * pressedDown - activated when pressed Down
// * pressed - constantly fires when pressing
// * pressedUp - activated when button released

// Can render Text. Should explain itself.

// Use like you want to, just don't blame me for anything.

ig.module('plugins.button')

.requires(
  'plugins.myentity',
  'impact.entity'
)

.defines(function() {

  Button = MyEntity.extend({
  	//type:ig.Entity.TYPE.B,
  	ignorePause:true,
  	
    size: { x: 80, y: 40 },
    
    text: [],
    textPos: { x: 5, y: 5 },
    textAlign: ig.Font.ALIGN.CENTER,
    textMode:"landscape",
    
    font: null,
    
    state: 'idle',
    
    _oldPressed: false,
    _startedIn: false,

    init: function( x, y, settings ) {
      this.parent( x, y, settings );
      this.autoFireMouseDown = true;
      this.autoFireMouseUp = true;
      this.autoFireMousePressed = true;
      
      this.addAnim( 'idle', 1, [0] );
      this.addAnim( 'hover', 1, [1] );
      this.addAnim( 'active', 1, [2] );
      
      if ( this.text.length > 0 && this.font === null ) {
        this.font = ig.game.font || new ig.Font( 'media/adlib_18.font.png' );
      }

      this.shadowOptions.shadowOffsetX = typeof(this.shadowOptions.shadowOffsetX) == "undefined" ? 4 : this.shadowOptions.shadowOffsetX;
      this.shadowOptions.shadowOffsetY = typeof(this.shadowOptions.shadowOffsetY) == "undefined" ? 4 : this.shadowOptions.shadowOffsetY;
      this.shadowOptions.shadowBlur = typeof(this.shadowOptions.shadowBlur) == "undefined" ? 0 : this.shadowOptions.shadowBlur;
      this.shadowOptions.shadowColor = typeof this.shadowOptions.shadowColor == "undefined" ?"#000000": this.shadowOptions.shadowColor ;
      //this.shadowOptions.shadowColor = "#000000FF";
      //console.log("bbbb " + typeof(this.shadowOptions.shadowColor) + " color : " + this.shadowOptions.shadowColor + " - blur " + this.shadowOptions.shadowBlur);
    },

    onMouseDown:function() {
      //this.setState( 'active' );
      this.pressedDown();
    },

    onMouseUp:function() {
      this.setState( 'idle' );
      //this.pressedUp();
    },

    onMousePressed:function() {
     // this.setState( 'active' );
      this.pressed();
    },

    update: function() {
      if ( this.state !== 'hidden' ) {
        this.parent();
        this.fireMouseUp();
        return;


        // ga dipake yang bawah ini
        /*
        var _clicked = ig.input.state( 'click' );
        
        //log("clicked : " + _clicked)
        
        if ( !this._oldPressed && this._inButton() ) {
          this._startedIn = true;
        }
        
        if ( this._startedIn && this.state !== 'deactive' && this._inButton() ) {
          if ( _clicked && !this._oldPressed ) { // down
            //this.setState( 'active' );
            this.pressedDown();
            ig.game._firstTime = true;
          }
          else if ( _clicked ) { // pressed
            //this.setState( 'active' );
            this.pressed();
          }
          else if ( this._oldPressed ) { // up
            this.setState( 'idle' );
            this.pressedUp();
          }
          else { // hover
          	//this.setState( 'hover' );
          }
        }
        else if ( this.state === 'active' || this.state == 'hover' ) {
          this.setState( 'idle' );
        }

        if ( this._oldPressed && !_clicked ) {
          this._startedIn = false;
        }

        this._oldPressed = _clicked;
      }

      //this.parent();
      //this.tweenMe();
     // console.log("kuda1 " + this.tweens.length);
     this.parent();
     */
      }
    },
    
    draw: function() {
      if ( this.state !== 'hidden' ) {
        if (this.shadowOptions.shadowBlur != 0) {
              //onsole.log("aaaaa " + this.shadowOptions.shadowColor + " y : " + this.shadowOptions.shadowOffsetX + " - blur " + this.shadowOptions.shadowBlur);
                var ctx = ig.system.context;
                ctx.shadowOffsetX   = this.shadowOptions.shadowOffsetX;
                ctx.shadowOffsetY   = this.shadowOptions.shadowOffsetY;
                ctx.shadowBlur      = this.shadowOptions.shadowBlur;
                ctx.shadowColor     = this.shadowOptions.shadowColor;
                //ctx.shadowColor     = "#00FF00FF";
                //ctx.shadowColor     = "#000000";
        }

        this.parent();

				if (this.textMode == "portrait") {
	        for ( var i = 0; i < this.text.length; i++ ) {
	          this.font.draw(
	            this.text[i],
	            this.pos.x + this.textPos.x - ig.game.screen.x,
	            this.pos.y + ((this.font.height + 2) * i) + this.textPos.y - ig.game.screen.y,
	            this.textAlign
	          );
	        }
	     	} else {
	     		
				if (this.text && this.font)
	          this.font.draw(
	            this.text,
	            this.pos.x + this.textPos.x - ig.game.screen.x,
	            this.pos.y + this.textPos.y - ig.game.screen.y,
	            this.textAlign
	          );
	          
	     	} 

         if (this.shadowOptions.shadowBlur != 0) {
                var ctx = ig.system.context;
                ctx.shadowOffsetX = 0;
                ctx.shadowOffsetY = 0;
                ctx.shadowBlur = 0;
            }
      }
    },
    
    setState: function( s ) {
      this.state = s;
      
      if ( this.state !== 'hidden' ) {
        this.currentAnim = this.anims[ this.state ];
      }
    },
    
    pressedDown: function() {},
    pressed: function() {},
    pressedUp: function() {},
    
    _inButton: function() {
      return ig.input.mouse.x + ig.game.screen.x > this.pos.x &&
             ig.input.mouse.x + ig.game.screen.x < this.pos.x + this.size.x &&
             ig.input.mouse.y + ig.game.screen.y > this.pos.y &&
             ig.input.mouse.y + ig.game.screen.y < this.pos.y + this.size.y;
    }
  });

});