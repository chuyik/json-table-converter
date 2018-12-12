const objectToArray = require('./lib/object-to-array')
const arrayToTable = require('./lib/array-to-table')

const { isPlainObject } = require('lodash')

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

