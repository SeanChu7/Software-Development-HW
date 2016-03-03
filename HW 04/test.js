var pic = document.getElementById("vimg");
var clearbutton = document.getElementById("clear");
var start = document.getElementById("start");
var stop = document.getElementById("stop");
var c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
var frameid;

var draw = function() {
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
start.addEventListener("click",draw);
stop.addEventListener("click",stopdraw);
clearbutton.addEventListener("click", clear);

