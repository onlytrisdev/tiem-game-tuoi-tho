ig.module(
	'plugins.myinput'
)

.requires(
	'impact.input'
)

.defines(function() {
	ig.Input.inject({
		touches:[],
		mousemove: function( event ) {
			var el = ig.system.canvas;
			var pos = {left: 0, top: 0};
			while( el != null ) {
				pos.left += el.offsetLeft;
				pos.top += el.offsetTop;
				el = el.offsetParent;
			}
			var tx = event.pageX;
			var ty = event.pageY;

			if( event.touches ) {
				for (var i = event.touches.length - 1; i >= 0; i--) {
					//event.touches[i]
					tx = event.touches[i].clientX;
					ty = event.touches[i].clientY;
					this.touches.push({x:0, y:0});
					
					this.touches[i].x = (tx - pos.left) / ig.system.scale * ig.system.realWidth/parseFloat(ig.system.canvas.style.width);
				    this.touches[i].y = (ty - pos.top) / ig.system.scale * ig.system.realHeight/parseFloat(ig.system.canvas.style.height);
				    //window.log("i : " + i + ", tx ty" + this.touches[i].x + "," + this.touches[i].y);
				};

			
				tx = event.touches[0].clientX;
				ty = event.touches[0].clientY;
				//window.log("aaa " + event.touches.length);
			}
			
			// HACK BUAT SCALING SUPAYA MOUSE X Y NYA BENAR KALAU DI SCALE
			//this.mouse.x = (tx - pos.left) / ig.system.scale * ig.system.realWidth/parseFloat(ig.system.canvas.style.width);
			//this.mouse.y = (ty - pos.top) / ig.system.scale * ig.system.realHeight/parseFloat(ig.system.canvas.style.height);
			// HACK BUAT SCALING SUPAYA MOUSE X Y NYA BENAR KALAU DI SCALE
			this.mouse.x = (tx - pos.left+ document.body.scrollLeft) / ig.system.scale * ig.system.realWidth/parseFloat(ig.system.canvas.style.width);
			this.mouse.y = (ty - pos.top + document.body.scrollTop) / ig.system.scale * ig.system.realHeight/parseFloat(ig.system.canvas.style.height);
			
			//window.log("mouse xy : " + this.mouse.x + "," + this.mouse.y + " - sx : " + ig.game.screen.x + " - sy : " + ig.game.screen.y
						//+ " - real wh : " + ig.system.realWidth + "," + ig.system.realHeight
					  //+ " - canvas wh : " + ig.system.canvas.style.width + "," + ig.system.canvas.style.height
			//);
		},
	
		
	});

});

