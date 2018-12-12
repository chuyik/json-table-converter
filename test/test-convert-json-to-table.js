const path = require('path')
const { jsonToTableHtmlString } = require('../')
const { resetDir } = require('./_helper')

let tmpDir = path.join(__dirname, 'tmp')

let json = [
  {
    cacheKey: 'API_CACHE',
    report: {
      total: 2,
      topRecords: [
        {
          count: 1,
          uid: 'id-000000000000000001',
          username: 'chu',
        },
        {
          count: 2,
          uid: 'id-000000000000000002',
          username: 'yik',
        },
        'not-an-object',
      ],
    },
    date: '2018-07-30',
  },
]

describe('jsonToTableHtmlString()', () => {
  before(() => resetDir(tmpDir))
  
  it('should convert json to table', () => {
    let file = path.join(tmpDir, 'table.html')

    require('fs').writeFileSync(
      file,
      jsonToTableHtmlString(json)
    )
  })
})
