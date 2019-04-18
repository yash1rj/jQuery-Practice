$(document).ready(function() {
	
	// own version of jQuery
	// yQuery("my-selector").addClass("MYNEWCLASS");
	// yQuery(".my-selector").addClass("MYNEWCLASS");
	// yQuery("#site-title").addClass("siteClass");
	
	// find method
	$('#main').find('p').addClass("HAAH");
	
	//first and last
	console.log($(".profile-submenu a").first().text());
	console.log($(".profile-submenu a").last().text());
	
	// prevent default context menu
	$(document).on('contextmenu', function() {
		return false;
	});
	
	$(document).on('click', function() {
		return false;
	});
	
	/*
	// determining mouse click button
	$(document).on('mousedown', function(ev) {
		ev.preventDefault();
		
		switch(ev.which) {
			case 1:
				console.log("Clicked left mouse button");
				$('#context').fadeOut();
				break;
			case 2:
				console.log("Clicked middle mouse button");
				$('#context').fadeOut();
				break;
			case 3:
				$('.hidden').removeClass('shown'); //rehide if previously being shown
				
				if($(ev.target).is('img')) {
					$('.saveimg, .newtab').addClass('shown');
				}
				else if($(ev.target).is('a')) {
					$('.newtab').addClass('shown');
				}
				
				console.log("Clicked right mouse button");
				console.log(ev.pageX, ev.pageY);
				
				$('#context').css({
					top: ev.pageY, 
					left: ev.pageX
				});
				
				$('#context').fadeIn();
				break;
		}
		
		console.log(ev.which); // returns which mouse button is clicked
	});
	*/
	
	// prevent default
	$('[href="https://google.com"]').on('click', function(e) {
		
		console.log("linking to google?");
		e.preventDefault();
		// return false; //same as above
		// If we return true, normal functionality will occur
		
	});
	
	$('[data-trigger="dropdown"]').on('mouseenter', function() {
		
		var submenu = $(this).parent().find('.profile-submenu');
		// submenu.addClass('active');
		submenu.fadeIn(300);
		
		$('.profile-menu').on('mouseleave', function() {
			
			// submenu.removeClass('active');
			submenu.fadeOut(300);
			
		});
		
	});
	
	$('#prepend, #append, #replace').on('click', function(evnt) {
		
		//prevent form action
		evnt.preventDefault();
		
		// console.log(event);
		var el = $(evnt.currentTarget);
		var action = el.attr('id');
		var content = $('.txt').val();
		
		if(action == "prepend") {
			console.log("Prepending...");
			$('#main').prepend(content);
		}
		else if(action == "append") {
			console.log("Appending...");
			$('#main').append(content);
		}
		else if(action == "replace") {
			console.log("Replacing...");
			$('#main').html(content);
		}
		
		$('.txt').val(""); // reverting textarea content to placeholder after performing the above functions
		
	});
	
	
	//focus in and out
	$('.txt').focusin(function() {
		console.log("Focused in on textarea");
	});
	
	$('.txt').focusout(function() {
		console.log("Loosing focus on textarea");
	});
	
	/*
	window.hasAt = 0;
	window.hasDot = 0;
	
	$('input[name=email]').on('keyup', function() {
		
		if($(this).val().indexOf('@') > -1) {
			hasAt++;
		}
		if($(this).val().indexOf('.') > -1) {
			hasDot++;
		}
	});
	
	if((window.hasAt > 1) && (window.hasDot > 1)) {
		console.log("VALID");
		$('.status').html("VALID");
	}
	else {
		$('.status').html("INVALID");
	}
	*/
	
	$('input[name=email]').on('focusout', function() {
		if($(this).val().indexOf('@') > -1 && $(this).val().indexOf('.') > -1) {
			$('.status').html("VALID email");
		}
		else {
			$('.status').html("INVALID email");
		}
	});
	
	//contains selector
	$('p:contains("Lorem")').html("This had Lorem in it. It still has.");
	
	//is selector
	if($(':contains("Lorem")').is("p")) {
		console.log("Lorem is in p tag");
	}
	
	//hasClass selector
	if($(':contains("Lorem")').hasClass('my-selector')) {
		console.log("Lorem is in my-selector class");
	}
	else {
		console.log("Some other class");
	}
	
	//each method
	$('p').each(function() {
		console.log($(this).text());
	});
	
	console.log($('p').text()); // same as above but prints together all the p tag contents
	
	//callback
	function printThis(el) {
		console.log($(this).text());
	}
	
	$('p').each(printThis);
	
	function printThat(el) {
		console.log($(this).val());
	}
	
	$('input').focusout(printThat);
	
	//css
	$('input').css({
		background: '#f00',
		padding: '10px',
		borderColor: 'black',
		'border-style': 'dotted'
	});
	
});
