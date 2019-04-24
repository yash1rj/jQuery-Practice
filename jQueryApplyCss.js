$(document).ready(function() {
	$("#go-btn-p").click(function() {
		$("p").css("background-color","yellow");
	});
	
	$("#go-btn-span").click(function() {
		$("span:even").css({"background-color":"#fd8000","font-size":"200%"});
	});
	
	$("#SHift1").on('click', function() {
		$(".shift").css("margin-left","50px");
	});
	
	$("#SHift2").on('click', function() {
		var list = $(".shift");
		for(var i=0; i < list.length; i++) {
			$(list[i]).css("margin-left",i*50+"px");
		}
	});
	
	// same as above
	$("#SHift3").on('click', function() {
		var list = $(".shift");
		list.each(function (i) {
			$(this).css("margin-left",i*50+"px");
		});
	});
	
	// same as above
	$("#SHift4").on('click', function() {
		var list = $(".shift");
		list.each(function (i, item) {
			$(item).css("margin-left",i*50+"px");
		});
	});
});
