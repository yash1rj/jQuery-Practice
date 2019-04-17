function alertMe() {
	alert("Event handling from JS");
}

$(document).ready(function() {
	alert("Loaded");
	
	document.getElementById("div1").innerHTML = "This is text through JS";
	$("#div1").html("This is text through jQuery");
	
	document.getElementsByClassName("my-input")[0].value = "Value of i/p through JS";
	$(".my-input").val("Value of i/p through jQuery");
	
	var el = document.getElementById("div2");
	console.log("el in Vanilla JS: ",el);
	console.log("el in jQuery: ",$(el));
	
	document.getElementById("go-btn2").addEventListener('click', alertMe);
	$("#go-btn").on('click', function() {
		alert("Event handling from jQuery");
	});
	
	document.getElementById("go-btn4").addEventListener('mouseover', alertMe);
	$("#go-btn3").hover(function() {
		console.log("Event handling on hover from jQuery");
	});
	
	$("#go-btn5").on('mouseenter',function() {
		console.log("Event handling on mouseenter from jQuery");
	});
	$("#go-btn5").on('mouseleave',function() {
		console.log("Event handling on mouseleave from jQuery");
	});
	
	$("#go-btn6").on('mousedown',function() {
		console.log("Event handling on mousedown from jQuery");
	});
	$("#go-btn6").on('mouseup',function() {
		console.log("Event handling on mouseup from jQuery");
	});
	
});
