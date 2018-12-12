const objectToArray = require('./lib/object-to-array')
const arrayToTable = require('./lib/array-to-table')

const { isPlainObject } = require('lodash')

/**
 * Convert Json to <Table />
 * 
 * @param {Object|Array} json
 * @param {Object} options
 * @param {String} [options.tableStyle] <Table/> Style
 * @param {String} [options.trStyle] <TR/> Style
 * @param {String} [options.tdStyle] <TD/> Style
 * @param {String} [options.tdKeyStyle] <TD/> Key Style
 */
function convertJsonToTable (json, options) {
  let arr = isPlainObject(json) ? objectToArray(json) : json

  if (!Array.isArray(arr)) {
    arr = []
  }

  return arrayToTable(arr, options)
}

module.exports = {
  convertJsonToTable,
}

