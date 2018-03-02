var TCell = require("./t-cell.js");

/**
 * Represents a table cell which wraps another. It's the same kind of cell that StretchCell but
 * it's implementation is slightly different.
 */
class InheritedStretchCell extends TCell{

  /**
	 * Constructs a new InheritedStretchCell with the given string as the content of
	 * the wrapped cell.
	 *
	 * @param {String} text Content of the wrapped cell.
	 * @param {Number} width Width of the InheritedStretchCell.
	 * @param {Number} height Height of the InheritedStretchCell.
	 */
	constructor(text, width, height) {
		super(text);
		this.width = width || 10;
		this.height = height || 2;
	}

  /**
	 * Returns the width of the cell.
	 *
	 * @return {Number} Width.
	 */
	minWidth() {
		return Math.max(this.width, super.minWidth());
	}

  /**
	 * Returns the height of the cell.
	 *
	 * @return {Number} Height.
	 */
	minHeight() {
		return Math.max(this.height, super.minHeight());
	}

  /**
	 * Returns a string representing this cell with the given width and height.
	 *
	 * @param {Number} width Width of the cell to be drawn.
	 * @param {Number} height Height of the cell to be drawn.
	 * @return {String} Cell represented as a String.
	 */
	draw(width, height) {
		return super.draw(width, height);
	}
}

const { addMapClass, findClass } = require('./registry-class.js');

addMapClass('InheritedStretchCell', InheritedStretchCell);

module.exports = InheritedStretchCell
