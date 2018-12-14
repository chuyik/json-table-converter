const isObject = require('../utils/is-object')
const objectToArray = require('./object-to-array')
const tableToHtml = require('./table-to-html')

function arrayToTable (array, options) {
  function _recur(arr, tableDepth = 1) {
    let fieldSet = new Set()
    for (let i = 0; i < arr.length; i++) {
      const item = arr[i]
      if (isObject(item)) {
        Object.keys(item).forEach(i => fieldSet.add(i))
      } else if (Array.isArray(item)) {
        return _recur(item, tableDepth + 1)
      }
    }
    
    let fields = Array.from(fieldSet)
    let rows = arr.map(() => [])
    for (let i = 0; i < arr.length; i++) {
      const item = arr[i]
      if (isObject(item)) {
        for (let j = 0; j < fields.length; j++) {
          let value = item[fields[j]]
          if (Array.isArray(value)) {
            rows[i][j] = _recur(value, tableDepth + 1)
          } else if (isObject(value)) {
            rows[i][j] = _recur(objectToArray(value), tableDepth + 1)
          } else {
            rows[i][j] = { isKey: fields[j] === '$_key', value }
          }
        }
      } else {
        rows[i][fields.length] = { isKey: false, value: item }
      }
    }
    
    return tableToHtml(fields, rows, tableDepth, options)
  }

  return _recur(array)
}

module.exports = arrayToTable