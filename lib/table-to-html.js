const isObject = require('../utils/is-object')

function getTableStyle(tableStyle, tableDepth) {
  return `
  border-spacing: 0 0;
  border-color: #808080;
  border-collapse: collapse;
  ${tableDepth > 1 ? 'width: 100%;' : ''}
  ${tableStyle || ''}`
}

function getTdStyle (tdStyle, tdKeyStyle, isKey) {
  return `
  ${isKey ? 'background: #F6F4F0;' + (tdKeyStyle || '') : ''}
  ${tdStyle || ''}
  `
}

function tableToHtml (fields, rows, tableDepth, { tableStyle, trStyle, tdKeyStyle, tdStyle } = {}) {
  return `<table
    border="1"
    cellpadding="3"
    cellspacing="0"
    style="${getTableStyle(tableStyle, tableDepth)}}">
  <thead>${fields
    .filter(f => !f.startsWith('$_'))
    .map(f => `<th style="background: #F6F4F0">${f}</th>`)
    .join('')}</thead>
  <tbody>${rows
    .map(row => {
      let tds = ''
      for (let i = 0; i < row.length; i++) {
        const v = row[i] || ''
        if (isObject(v))
          tds += `<td style="${getTdStyle(tdStyle, tdKeyStyle, v.isKey)}">${
            v.value
          }</td>`
        else tds += `<td style="${getTdStyle(tdStyle)}">${v}</td>`
      }
      return `<tr style="${trStyle || ''}">${tds}</tr>`
    })
    .join('')}</tbody>
  </table>`
}

module.exports = tableToHtml
