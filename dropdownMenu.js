$(document).ready(function() {
	
	// prevent default context menu
	$(document).on('contextmenu', function() {
		return false;
	});
	
	$(document).on('click', function() {
		return false;
	});
	
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
});
