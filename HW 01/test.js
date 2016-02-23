var c = document.getElementById("slate");
var ctx = c.getContext("2d");
var button = document.getElementById("clear");

ctx.fillStyle = "#ff0000";
var first = true;
var x = 0;
var y = 0;
var crtCirc = function(e) {
    e.preventDefault();
    if (first){
    	ctx.beginPath();
    	ctx.arc(e.offsetX,e.offsetY,15,0,2*Math.PI);
    	ctx.fill();
        x = e.offsetX;
	y = e.offsetY;
        first = false;
    }
    else {
	ctx.beginPath();
        ctx.moveTo(x,y);
        ctx.lineTo(e.offsetX,e.offsetY);
	ctx.stroke();
	ctx.beginPath();
    	ctx.arc(e.offsetX,e.offsetY,15,0,2*Math.PI);
	ctx.arc(x,y,15,0,2*Math.PI);
    	ctx.fill();
	x = e.offsetX;
	y = e.offsetY;
   }
}

var clear = function(e) {
	e.preventDefault();
	ctx.clearRect(0,0,500,500);
	first=true;		
}
c.addEventListener("click",crtCirc);
button.addEventListener("click", clear);
