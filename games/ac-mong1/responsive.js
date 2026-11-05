var canvas = document.querySelector('#openfl-content canvas');
var ratio = canvas.width / canvas.height;

var originalWidth = canvas.width;
var originalHeight = canvas.height;
var newWidth;
var newHeight;

window.addEventListener("load", resizeCanvas);
window.addEventListener("resize", resizeCanvas);

function resizeCanvas(){
	canvas.style.removeProperty("width"); canvas.style.removeProperty("height");
	console.log(ratio);
if(window.innerWidth >= originalWidth){
		console.log("not greater than original");
		newWidth = window.innerWidth;
	}
	else{
		newWidth = window.innerWidth;
	} 
	
	if(Math.floor(newWidth / ratio) > window.innerHeight){
		newHeight = window.innerHeight;
		newWidth = Math.floor(newHeight * ratio);
	}
	else {
		newHeight = Math.floor(newWidth / ratio);
	}
	canvas.style.width = newWidth + "px";
	canvas.style.height = newHeight + "px";
}

