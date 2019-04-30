$(document).ready(function() {

	$("#go-btn").on('click', function() {
		// alert("Event handling from jQuery");
		var p1 = $("#rand1");
		p1.animate({
			opacity: 0.25,
			left: "+=50"
		});
	});
	
	$("#go-btn2").on('click', function() {
		// alert("Event handling from jQuery");
		var p2 = $(".rand2");
		p2.animate({
			opacity: 0.25,
			left: "+=50",
			height: "toggle"
		}, 5000, function() {
			$(this).append("<br />Done");
		});
	});
	
	$("#go-btn3").on('click', function() {
		// alert("Event handling from jQuery");
		var p3 = $(".rand3");
		p3.animate({
			width: ["toggle", "swing"]
		}, 5000);
	});
	
	$("#go-btn4").on('click', function() {
		// alert("Event handling from jQuery");
		var p4 = $(".rand4");
		p4.animate({
			height: "toggle",
			width: "toggle"
		}, {
			duration: 5000,
			specialEasing: {
				width: "linear",
				height: "swing"
			}
		});
	});
	
	$("#go-btn5").on('click', function() {
		// alert("Event handling from jQuery");
		$(".rand4").stop();
	});
});
