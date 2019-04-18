class yquery {
	constructor(el) {
		//extending functionality for checking the element passed is a class or id
		console.log(el);
		if(el.indexOf('.') > -1) {
			el = el.replace(".","");
			this.elements = document.getElementsByClassName(el);
		}
		else if(el.indexOf('#') > -1) {
			el = el.replace("#","");
			this.elements = [document.getElementById(el)];
		}
		else {
			this.elements = document;
		}
	}
	
	addClass(cl) {
		var count = 0;
		while(count < this.elements.length) {
			if(this.elements[count].className) {
				this.elements[count].className += " " + cl;
			}
			else {
				this.elements[count].className += cl;
			}
			count++;
		}
	}
}

function yQuery(el) {
	var elem = new yquery(el);
	return elem;
}
