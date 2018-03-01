var TCell = require("./t-cell.js");
var RCell = require("./r-cell.js");
var UnderlinedCell = require("./underlined-cell.js");
var StretchCell = require("./stretch-cell.js");
var InheritedStretchCell = require("./inherited-stretch-cell.js");

const { addMapClass, findClass } = require('./registry-class.js');

/**
 * Represents a table compound by different kind of cells
 */
class DTable {
	/*
	 * Constructs a new table.
	 */
  constructor () {}

	/**
	 * Returns the table represented as a string.
	 *
	 * @param {Array<Object>} data Data of the table.
	 * @return {String} Table represented as a string.
	 */
  drawAllTable(data) {
    return this.drawTable(this.dataTable(data))
  }

  /**
	 * Returns the table represented as a string.
	 *
	 * @return {String} Table represented as a string.
	 */
  drawTable(rows) {
    var heights = this.rowHeights(rows);
    var widths = this.colWidths(rows);

    function drawLine(blocks, lineNo) {
      return blocks.map(function(block) {
        return block[lineNo];
      }).join(" ");
    }

    function drawRow(row, rowNum) {
      var blocks = row.map(function(cell, colNum) {
        return cell.draw(widths[colNum], heights[rowNum]);
      });
      return blocks[0].map(function(_, lineNo) {
        return drawLine(blocks, lineNo);
      }).join("\n");
    }

    return rows.map(drawRow).join("\n");
  }

	/**
	 * Initializes the content of the table.
	 * @param {Array<Object>} data Initial data.
	 * @return {Array<Object> Table
	 */
  dataTable(data) {
    var keys = Object.keys(data[0]);
    var headers = keys.map(function(name) {
      return new UnderlinedCell(name);
    });
    var body = data.map(function(row) {
      return keys.map(function(name) {
        var value = row[name];
				var {currClass, params} = findClass(value);
				return new currClass(...params);
      });
    });
    return [headers].concat(body);
  }

	/**
	 * Returns the minimum number of rows needed by the table to represent it's data.
	 *
	 * @param {Array<String>} rows Data.
	 * @return {Number} Rows needed.
	 */
  rowHeights(rows) {
    return rows.map(function(row) {
      return row.reduce(function(max, cell) {
        return Math.max(max, cell.minHeight());
      }, 0);
    });
  }

  /**
	 * Returns the minimum number of rows needed by the table to represent it's data.
	 *
	 * @param {Array<String>} rows Data.
	 * @return {Number} Columns needed.
	 */
  colWidths(rows) {
    return rows[0].map(function(_, i) {
      return rows.reduce(function(max, row) {
        return Math.max(max, row[i].minWidth());
      }, 0);
    });
  }
}

module.exports = DTable
