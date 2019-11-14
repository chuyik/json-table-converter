const { jsonToTableHtmlString } = require('../src')

const json = [
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
  
  it('should convert json to table', () => {
    expect(jsonToTableHtmlString(json)).toMatchSnapshot()
  })

  })
})
