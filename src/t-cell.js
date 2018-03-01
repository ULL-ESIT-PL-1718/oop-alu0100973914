
/**
 * Represents a table cell which content is left-aligned
 */
class TCell {

	/**
	 * Constructs a new TCell with the given string as it's content.
   * 
	 * @param {String} text Content of the new cell.
	 */
	constructor(text) {
    this.text = text.toString().split("\n");
  }
	
	/**
	 * Returns a string representing this cell with the given width and height.
	 *
	 * @param {Number} width Width of the cell to be drawn.
	 * @param {Number} height Height of the cell to be drawn.
	 * @return {String} Cell represented as a String.
	 */
  draw(width, height) {
    return this.getContent(width, height);
  };
	
	/**
	 * Returns an Array of String compound by the text given to the constructor.
	 *
	 * @param {Number} width Width of each String of the Array returned.
	 * @param {Number} height Amount of Strings stored in the Array returned.
	 * @return {Array<String>} Array containing the strings.
	 */
  getContent(width, height) {
    var result = [];
    for (var i = 0; i < height; i++) {
      var line = this.text[i] || "";
      result.push(line + " ".repeat(width - line.length));
    }

    return result;
  }
	
	/**
	 * Returns the width of the cell.
	 *
	 * @return {Number} Width.
	 */
  minWidth() {
    return this.text.reduce(function(width, line) {
      return Math.max(width, line.length);
    }, 0);
  }

	/**
	 * Returns the height of the cell.
	 *
	 * @return {Number} Height.
	 */
  minHeight() {
    return this.text.length;
  };
}

const { addMapClass, findClass } = require('./registry-class.js');

addMapClass('String', TCell);
addMapClass('TCell', TCell);

module.exports = TCell
