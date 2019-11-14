const isObject = require('../utils/is-object')

const defaultTableStyle = 'border-spacing: 0 0; border-color: #808080; border-collapse: collapse;'
const defaultTdStyle = 'border: 1px solid #2d2d2d; padding: 3px;'
const defaultTdKeyStyle = 'background: #F6F4F0; ' + defaultTdStyle
const defaultThStyle = 'background: #F6F4F0;' + defaultTdStyle
const defaultTrStyle = ''

function ensureSemicolon (style) {
  if (typeof style === 'string' && style.length > 0 && style[style.length -1] !== ';') {
    return style + ';'
  }
  return style
}

function getTableStyle(tableStyle, tableDepth) {
  return `${tableDepth > 1 ? 'width: 100%;' : ''}${tableStyle}`.replace(/\n\s*/g, '')
}

function getTdStyle (tdStyle, tdKeyStyle, isKey) {
  return `${isKey  && tdKeyStyle ? `${ensureSemicolon(tdKeyStyle)}` : ''}${tdStyle}`.replace(/\n\s*/g, '')
}

function getThStyle (thStyle) {
  return `${thStyle}`.replace(/\n\s*/g, '')
}

function tableToHtml (fields, rows, tableDepth, {
  tableStyle = defaultTableStyle,
  trStyle = defaultTrStyle,
  thStyle = defaultThStyle,
  tdKeyStyle = defaultTdKeyStyle,
  tdStyle = defaultTdStyle,
  formatCell,
} = {}) {
  return `<table cellspacing="0" style="${getTableStyle(tableStyle, tableDepth)}">
  <thead>${fields
    .filter(f => !f.startsWith('$_'))
    .map(f => `<th style="${getThStyle(thStyle)}">${f}</th>`)
    .join('')}</thead>
  <tbody>${rows
    .map(row => {
      let tds = ''
      for (let i = 0; i < row.length; i++) {
        const v = row[i] || ''
        if (isObject(v)) {
          tds += `<td style="${getTdStyle(tdStyle, tdKeyStyle, v.isKey)}">${
            typeof formatCell === 'function' ? formatCell(v.value, v.isKey) : v.value
          }</td>`
        } else {
          tds += `<td style="${getTdStyle(tdStyle)}">${v}</td>`
        }
      }
      return `<tr style="${trStyle}">${tds}</tr>`
    })
    .join('')}</tbody>
</table>`
}

module.exports = tableToHtml
