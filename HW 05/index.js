var DallotedDelegatecount = [53,16,6,75,32,475,66,55,21,20,214,
102,7,25,23,156,83,44,33,55,51,25,95,91,130,77,36,71,
21,25,35,24,126,34,247,107,18,6,143,38,
61,189,60,24,53,20,67,222,33,16,7,95,101,29,86,14];
var stateName = ["Alabama","Alaska","American Samoa","Arizona","Arkansas",
"California","Colorado","Connecticut","Delaware","District of Columbia",
"Florida","Georgia","Guam","Hawaii","Idaho","Illinois","Indiana","Iowa",
"Kansas","Kentucky","Louisiana","Maine","Maryland","Massachusetts",
"Michigan","Minnesota","Mississippi","Missouri","Montana","Nebraska",
"Nevada","New Hampshire","New Jersey", "New Mexico","New York","North Carolina",
"North Dakota","Northern Marianas","Ohio","Oklahoma","Oregon",
"Pennsylvania","Puerto Rico","Rhode Island","South Carolina",
"South Dakota","Tennessee","Texas","Utah","Vermont","Virgin Islands",
"Virginia","Washington","West Virginia","Wisconsin","Wyoming"];
var DunallotedDelegatecount = [7,4,5,10,5,73,12,16,10,26,32,15,5,
10,4,26,9,8,4,5,8,5,23,25,17,16,5,13,6,5,8,8,
16,9,44,14,5,5,17,4,13,21,7,9,6,5,8,29,4,10,5,14,17,8,10,4];
var RallotedDelegatecount = [50,28,0,58,40,172,37,28,16,19,99,76,0,19,32,69,57,30,40,46,46,
23,38,42,59,38,40,52,27,36,30,23,51,24,95,72,0,9,66,43,28,17,23,19,50,29,
58,155,40,16,6,49,44,34,42,26];
var RunallotedDelegatecount= [0,0,9,0,0,0,0,0,0,0,0,0,9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,28,0,0,0,0,54,0,0,0,0,0,0,0,0,3,0,0,0,0,3];
var info = [];
var isDem = true;

var x = d3.scale.linear()
    		.domain([0, 475])
    		.range([0, 1000]);
var setArray = function() {
	for (var i = 0; i < stateName.length; i++) {
		var data = [DallotedDelegatecount[i],stateName[i],DunallotedDelegatecount[i]];
		info.push(data);
	}
};
var setRarray = function() {
	for (var i = 0; i < stateName.length; i++) {
		var data = [RallotedDelegatecount[i],stateName[i],RunallotedDelegatecount[i]];
		info.push(data);
	}
};
setArray();
var makeChart = d3.selectAll("div")
		.data(info);

makeChart.enter()
	.append("p")
	.text(function(d){return d[1]});

makeChart.append("div")
	 .attr("class", "charta")
	 .style("width",function(d){return x(d[0]) + "px"}) //Set the length in proportion to delegates
	 .text(function(d){return (d[0])}) //Set text to name + delegates	
	 .style("background-color","red");

makeChart.append("div")
	 .attr("class","chartu")
	 .style("width",function(d){return x(d[2]) + "px"})
	 .text(function(d){return d[2]})
	 .style("background-color", "blue");

var editAlloted = function() {
	d3.selectAll(".charta")
		.data(info)
		.transition(20000)
		.style("width",function(d){return x(d[0]) + "px"}) //Set the length in proportion to delegates
		.text(function(d){return (d[0])}) //Set text to name + delegates
		.style("background-color","red")
};
var editunAlloted = function() {
	d3.selectAll(".chartu")
		.data(info)
		.transition(20000)
		.style("width",function(d){return x(d[2]) + "px"}) //Set the length in proportion to delegates
		.text(function(d){return (d[2])}) //Set text to name + delegates
		.style("background-color", "blue")
};

var swap = function() {
	if (isDem) {
		info = [];
		isDem = false;
		setRarray();
		editAlloted();
		editunAlloted();
		document.getElementById("total").innerHTML = "Total Delegate Count: 2358";
		document.getElementById("alloted").innerHTML = "Alloted Delegates: 1412";
		document.getElementById("unalloted").innerHTML = "Unalloted Delegates: 946";
		document.getElementById("party").innerHTML = "Republican Primary";
	}
	else {
		info =[];
		isDem = true;
		setArray();
		editAlloted();
		editunAlloted();
		document.getElementById("total").innerHTML = "Total Delegate Count: 3961";
		document.getElementById("alloted").innerHTML = "Alotted Delegates: 1964";
		document.getElementById("unalloted").innerHTML = "Unalloted Delegates: 1997";
		document.getElementById("party").innerHTML = "Democratic Primary";
	}
}

var button = document.getElementById("switch");
button.addEventListener("click", swap);
