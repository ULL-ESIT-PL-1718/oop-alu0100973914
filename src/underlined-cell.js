var TCell = require("./t-cell.js");

/**
 * Represents a table cell which content is left-aligned and underlined
 */
class UnderlinedCell extends TCell {

	/**
	 * Constructs a new UnderlinedCell with the given string as it's content.
	 * 
	 * @param {String} text Content of the new cell.
	 */
  constructor(inner) {
    super(inner);
  }

	/**
	 * Returns a string representing this cell with the given width and height.
	 *
	 * @param {Number} width Width of the cell to be drawn.
	 * @param {Number} height Height of the cell to be drawn.
	 * @return {String} Cell represented as a String.
	 */
  draw (width, height) {
    return this.getContent(width, height)
            .concat(["-".repeat(width)]);
  }
}

const { addMapClass, findClass } = require('./registry-class.js');

addMapClass('UnderlinedCell', UnderlinedCell);

module.exports = UnderlinedCell
