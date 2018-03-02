
/**
 * Represents a table cell which wraps another
 */
class StretchCell {
	/**
	 * Constructs a new StretchCell with the given string as the content
	 * of the wrapped cell.
	 *
	 * @param {Objet} inner Wrapped cell.
	 * @param {Number} width Width of the StretchCell.
	 * @param {Number} height Height of the StretchCell.
	 */
	constructor(inner, width, height) {
		this.inner = inner;
		this.width = width || 10;
		this.height = height || 2;
	}

  /**
	 * Returns the width of the cell.
	 *
	 * @return {Number} Width.
	 */
	minWidth() {
		return Math.max(this.width, this.inner.minWidth());
	}

	/**
	 * Returns the height of the cell.
	 * 
	 * @return {Number} Height.
	 */
	minHeight() {
		return Math.max(this.height, this.inner.minHeight());
	}

  /**
	 * Returns a string representing this cell with the given width and height.
	 *
	 * @param {Number} width Width of the cell to be drawn.
	 * @param {Number} height Height of the cell to be drawn.
	 * @return {String} Cell represented as a String.
	 */
	draw(width, height) {
		return this.inner.draw(width, height);
	}
}

const { addMapClass, findClass } = require('./registry-class.js');

addMapClass('StretchCell', StretchCell);

module.exports = StretchCell
