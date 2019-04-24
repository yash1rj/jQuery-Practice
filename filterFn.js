$(document).ready(function() {
	
	$("#one").on('click', function() {
		var boxes = $("input");
		// applying css class "red" to checked check-boxes'
		boxes.filter(":checked").parent().addClass("red");
	});
	
	$("#two").on('click', function() {
		var labels = $("label input").parent();
		labels.filter(function (index) {
			// "o" character present in text of checkbox input the border input
			if($(this).text().indexOf("o") != -1) {
				return true;
			}
			else {
				$(this).append("<span style='color: brown'>Does not contain letter 'o'</span>");
				return false;
			}
		}).addClass("bord");
	});
	
	$("#three").on('click', function() {
		var lb = $("label input");
		var cd = lb.filter(function (index) {
			if ($(this).filter(":checked").length > 0) {
				return true;
			}
		});
		lb.parent().css("float","left");
		cd.parent().css("float","right");
	});
	
});
