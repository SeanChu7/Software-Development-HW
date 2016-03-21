var allotedDelegatecount = [44, 24, 35, 53, 53, 32, 66, 102, 91, 77, 38, 67, 222, 16, 95, 33, 51, 25, 25, 127, 34, 198, 135, 64, 104, 141, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var stateName = ["Iowa", "New Hampshire", "Nevada","South Carolina", "Alabama", "Arkansas", "Colorado", "Georgia", "Massachusetts", "Minnesota", "Oklahoma", "Tennessee", "Texas", "Vermont", "Virginia", "Kansas", "Louisiana", "Nebraska", "Maine", "Michigan", "Mississippi", "Florida", "Illinois", "Missouri", "North Carolina", "Ohio", "Arizona", "Idaho", "Utah", "Alaska", "Hawaii", "Washington", "Wisconsin", "Wyoming", "New York", "Connecticut", "Delaware", "Maryland", "Pennslyvania", "Rhode Island", "Indiana", "West Virginia", "Kentucky", "Oregon", "California", "Montana", "New Jersey", "New Mexico", "North Dakota", "South Dakota", "Washington D.C"];
var unallotedDelegatecount = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 85, 27, 37, 20, 34, 118, 96, 18, 291, 70, 31, 118, 210, 33, 92, 37, 61, 74, 546, 27, 142, 43, 23, 25, 45];

var info = [];
var setArray = function() {
	for (var i = 0; i < stateName.length; i++) {
		var data = [allotedDelegatecount[i],stateName[i],unallotedDelegatecount[i]];
		info.push(data);
	}
}
var makeChart = function() {
	d3.selectAll("div")
		.data(info)
		.enter()
		.append("div")
		.attr("class", "chart")
		.style("width",function(d){return (d[0] + d[2])*10 + "px"}) //Set the length in proportion to delegates
		.text(function(d){return d[1] + " " + (d[0] + d[2])}) //Set text to name + delegates
		.style("background-color",function(d){if (d[2] == 0){return "blue"} else {return "red"}})
}

setArray();
makeChart(); 