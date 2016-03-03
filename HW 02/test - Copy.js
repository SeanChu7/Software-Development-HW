var c = document.getElementById("slate");
var ctx = c.getContext("2d");
var clearbutton = document.getElementById("clear");
var start = document.getElementById("start");
var stop = document.getElementById("stop");

ctx.fillStyle = "#ff0000";
var radius = 0;
var expand = true;
var stopit = false;
var drawC = function() {
    if (stopit){
    }
    else {
        ctx.clearRect(0,0,c.width,c.height);
        ctx.beginPath();
        ctx.arc(c.width/2,c.height/2,radius,0,2*Math.PI);
        ctx.fill();
        if (radius > 250) {
            expand = false;
        }
        if (radius < 1) {
            expand = true;
        }
        if (expand) {
            radius+=1;
        }
        else {
            radius-=1;
        }
        window.requestAnimationFrame(drawC);
    }
}

var stopdraw = function() {
    stopit = true;
}
var clear = function(e) {
	e.preventDefault();
	ctx.clearRect(0,0,c.width,c.height);
    expand = true;
    radius = 0;
    stopit = false;
}
start.addEventListener("click",drawC);
stop.addEventListener("click", stopdraw);
clearbutton.addEventListener("click", clear);
