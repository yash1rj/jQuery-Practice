$(document).ready(function() {
	var colArray = ["red", "blue", "black", "green", "#dddddd"];
	var index = 0;
	
	$("#go-btn").on('click', function() {
		// alert("Event handling from jQuery");
		var p1 = $(".rand1");
		p1.css("background-color", colArray[index]);
		index++;
	});
	
	$("#go-btn2").on('click', function() {
		// alert("Event handling from jQuery");
		var p2 = $(".rand2");
		p2.css("color", colArray[index]);
		index = (index+1)%colArray.length;
	});
	
	$("#go-btn3").on('click', function() {
		// alert("Event handling from jQuery");
		window.setInterval(function() {
			var p3 = $(".rand3");
			p3.css("background-color", colArray[index]);
			index = (index+1)%colArray.length;
		}, 500);
	});
	
	var curColor = "CCCCCC";
	var runner = null;
	$("#go-btn4").on('click', function() {
		// alert("Event handling from jQuery");
		runner = window.setInterval(function() {
			var p4 = $(".rand4");
			p4.css("background-color", "#" + curColor);
			curColor = (parseInt(curColor, 16)+50)%2550;
			curColor = curColor.toString(16);
		}, 200);
	});
	
	$("#go-btn5").on('click', function() {
		// alert("Event handling from jQuery");
		if (runner != null) {
			window.clearInterval(runner);
		}
	});
});
