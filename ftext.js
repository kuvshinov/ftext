function FText() {

	this.fade = function(id, text) {
		var container = document.getElementById(id);
		if (typeof text != 'string') {
			text = container.textContent;
			container.textContent = '';
		}
		var cursor = createCursor();
		container.appendChild(cursor);
		var i = 0;
		var loop = setInterval(function() {
			var ch = document.createTextNode(text.charAt(i));
			container.insertBefore(ch, cursor);
			if (i < text.length) i++;
			else clearInterval(loop);
		}, 100);
		
	};

	function createCursor() {
		var cursor = document.createElement('span');
		var innerText = document.createTextNode('|');
		var classAttr = document.createAttribute('class');
		classAttr.value = 'blink-cursor';
		cursor.setAttributeNode(classAttr);
		cursor.appendChild(innerText);
		return cursor;
	}

};

var fText = new FText();