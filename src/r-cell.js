var TCell = require("./t-cell.js");

/**
 * Represents a table cell which content is right-aligned
 */
class RCell extends TCell {
	/**
	 * Constructs a new RCell with the given string as it's content.
	 *  
	 * @param {String} text Content of the new cell.
	 */
  constructor(text) {
    super(text);
  }

	/**
	 * Returns a string representing this cell with the given width and height.
	 *
	 * @param {Number} width Width of the cell to be drawn.
	 * @param {Number} height Height of the cell to be drawn.
	 * @return {String} Cell represented as a String.
	 */
  draw(width, height) {
    var result = [];
    for (var i = 0; i < height; i++) {
      var line = this.text[i] || "";
      result.push(" ".repeat(width - line.length) + line);
    }
    return result;
  }
}

const { addMapClass, findClass } = require('./registry-class.js');

addMapClass('Number', RCell);
addMapClass('RCell', RCell);

module.exports = RCell
