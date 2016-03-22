var DallotedDelegatecount = [44, 24, 35, 53, 53, 32, 66, 102, 91, 77, 38, 67, 222, 16, 95, 33, 51, 25, 25, 127, 34, 198, 135, 64, 104, 141, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var stateName = ["Iowa", "New Hampshire", "Nevada","South Carolina", "Alabama", "Arkansas", "Colorado", "Georgia", "Massachusetts", "Minnesota", "Oklahoma", "Tennessee", "Texas", "Vermont", "Virginia", "Kansas", "Louisiana", "Nebraska", "Maine", "Michigan", "Mississippi", "Florida", "Illinois", "Missouri", "North Carolina", "Ohio", "Arizona", "Idaho", "Utah", "Alaska", "Hawaii", "Washington", "Wisconsin", "Wyoming", "New York", "Connecticut", "Delaware", "Maryland", "Pennslyvania", "Rhode Island", "Indiana", "West Virginia", "Kentucky", "Oregon", "California", "Montana", "New Jersey", "New Mexico", "North Dakota", "South Dakota", "Washington D.C"];
var DunallotedDelegatecount = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 85, 27, 37, 20, 34, 118, 96, 18, 291, 70, 31, 118, 210, 33, 92, 37, 61, 74, 546, 27, 142, 43, 23, 25, 45];
var RallotedDelegatecount = [23, 20, 28, 50, 50,40, 0, 76, 42, 38, 40, 58, 155, 16, 46, 40, 41, 0, 23, 59, 37, 99, 67, 40, 71, 66, 0, 32, 0, 28, 19, 0, 0, 11, 0, 0, 0, 0, 0, 0, 0, 0, 46, 0, 0, 0, 0, 0, 0, 0, 19]
var RunallotedDelegatecount= [0, 0, 0, 0, 0, 0,37,0,0,0,0,0,0,0,0,0,0, 36,0, 0, 0, 0, 0,0,0,0,58,0,40,0,0,44,42,0,95,28,16,38,71,19,57,34,0, 28,172,27, 51, 24,28, 29,0]
var info = [];
var isDem = true;

var x = d3.scale.linear()
    		.domain([0, 546])
    		.range([0, 500]);
var setArray = function() {
	for (var i = 0; i < stateName.length; i++) {
		var data = [DallotedDelegatecount[i],stateName[i],DunallotedDelegatecount[i]];
		info.push(data);
	}
}
var setRarray = function() {
	for (var i = 0; i < stateName.length; i++) {
		var data = [RallotedDelegatecount[i],stateName[i],RunallotedDelegatecount[i]];
		info.push(data);
	}
}
var makeChart = function() {
	d3.selectAll("div")
		.data(info)
		.enter()
		.append("p")
		.text(function(d){return d[1]})
		.append("div")
		.attr("class", "chart")
		.style("width",function(d){return x(d[0] + d[2]) + "px"}) //Set the length in proportion to delegates
		.text(function(d){return (d[0] + d[2])}) //Set text to name + delegates	
		.style("background-color",function(d){if (d[0] == 0){return "red"} return "blue"})
}
var editChart = function() {
	d3.selectAll("div")
		.data(info)
		.transition(20000)
		.style("width",function(d){return x(d[0] + d[2]) + "px"}) //Set the length in proportion to delegates
		.text(function(d){return (d[0] + d[2])}) //Set text to name + delegates
		.style("background-color",function(d){if (d[0] == 0){return "red"} return "blue"})
}
var swap = function() {
	if (isDem) {
		info = [];
		isDem = false;
		setRarray();
		editChart();
		document.getElementById("total").innerHTML = "Total Delegate Count: 2358";
		document.getElementById("alloted").innerHTML = "Alloted Delegates: 1412";
		document.getElementById("unalloted").innerHTML = "Unalloted Delegates: 946";
		document.getElementById("party").innerHTML = "Republican Primary";
	}
	else {
		info =[];
		isDem = true;
		setArray();
		editChart();
		document.getElementById("total").innerHTML = "Total Delegate Count: 3961";
		document.getElementById("alloted").innerHTML = "Alotted Delegates: 1964";
		document.getElementById("unalloted").innerHTML = "Unalloted Delegates: 1997";
		document.getElementById("party").innerHTML = "Democratic Primary";
	}
}
setArray();
makeChart(); 

var button = document.getElementById("switch");
button.addEventListener("click", swap);
