var TCell = require("./t-cell.js");

class InheritedStretchCell extends TCell{
	constructor(text, width, height) {
		super(text);
		this.width = width;
		this.height = height;
	}

	minWidth() {
		return Math.max(this.width, super.minWidth());
	}

	maxHeight() {
		return Math.max(this.height, super.minHeight());
	}

	draw(width, height) {
		return super.draw(width, height);
	}
}

module.exports = InheritedStretchCell
