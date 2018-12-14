const isObject = require('../utils/is-object')

function objectToArray (json) {
  if (isObject(json)) {
    let arr = []
    for (let key in json) {
      arr.push({ $_key: key, $_value: objectToArray(json[key]) })
    }
    return arr
  } else if (Array.isArray(json)) {
    let arr = []
    for (let item of json) {
      if (isObject(json)) {
        arr.push(objectToArray(json))
      } else {
        arr.push(item)
      }
    }
    return arr
  }
  return json
}

module.exports = objectToArray
