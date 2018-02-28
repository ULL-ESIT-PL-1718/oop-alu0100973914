
/**
 * Represents a table cell which wraps another
 */
class StretchCell {
	/**
	 * Constructs a new StretchCell with the given string as the content
	 * of the wrapped cell.
	 *
	 * @param {String} text Content of the wrapped cell.
	 * @param {Number} width Width of the StretchCell.
	 * @param {Number} height Height of the StretchCell.
	 */
	constructor(inner, width, height) {
		this.inner = inner;
		this.width = width;
		this.height = height;
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

module.exports = StretchCell
