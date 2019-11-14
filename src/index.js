const objectToArray = require('./lib/object-to-array')
const arrayToTable = require('./lib/array-to-table')
const isObject = require('./utils/is-object')

/**
 * Convert Json to <table />
 * 
 * @param {Object|Array} json
 * @param {Object} options
 * @param {String} [options.tableStyle] <table/> Style
 * @param {String} [options.trStyle] <tr/> Style
 * @param {String} [options.thStyle] <th/> Style
 * @param {String} [options.tdStyle] <td/> Style
 * @param {String} [options.tdKeyStyle] <td/> Key Style
 * @param {Function} [options.formatCell] Cell Value Format Function
 */
function jsonToTableHtmlString (json, options) {
  let arr = isObject(json) ? objectToArray(json) : json

  if (!Array.isArray(arr)) {
    arr = []
  }

  return arrayToTable(arr, options)
}

module.exports = {
  jsonToTableHtmlString,
}

