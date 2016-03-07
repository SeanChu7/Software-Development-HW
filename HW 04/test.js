var pic = document.getElementById("vimg");
var clearbutton = document.getElementById("clear");
var start = document.getElementById("start");
var startbounce = document.getElementById("Startb");
var stop = document.getElementById("stop");
var c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
var frameid;

var bounceC = function() {
	var radius = 5;
	var xcor = 250;
	var ycor = 150;
	var xchange = 1;
	var ychange = 1;
	var animate = function() {
		//if you reach width limits
		if (xcor + radius == 500 || xcor - radius == 0){
			xchange = xchange * -1;
		}
		//if you reach height limits
		if (ycor + radius == 300 || ycor - radius == 0){
			ychange = ychange * -1;
		}
		c.setAttribute( "cx", xcor + xchange );
		c.setAttribute( "cy", ycor + ychange );
		c.setAttribute( "r", radius );
		c.setAttribute( "fill", "red" );
		c.setAttribute( "stroke", "black" );
		pic.appendChild(c);
		xcor += xchange;
		ycor += ychange;
	};
	frameid = setInterval(animate,10);
}
var expandC = function() {
	var radius = 5;
	var expand = true;
	var animate = function() {
		if (expand) {
			radius +=1;
		}
		else {
			radius -=1;
		}
		if (radius > 150) {
			expand = false;
		}
		else if (radius == 0) {
			expand = true;
		}
		c.setAttribute( "cx", 250 );
		c.setAttribute( "cy", 150 );
		c.setAttribute( "r", radius );
		c.setAttribute( "fill", "red" );
		c.setAttribute( "stroke", "black" );
		pic.appendChild(c);
	};
	frameid = setInterval(animate,10);
}
	
		
var stopdraw = function() {
	clearInterval(frameid);
	}
var clear = function(e) {
	e.preventDefault();
	pic.removeChild(c);
}
start.addEventListener("click",expandC);
startbounce.addEventListener("click",bounceC);
stop.addEventListener("click",stopdraw);
clearbutton.addEventListener("click", clear);

