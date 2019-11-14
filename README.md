JSON To Table
========

A JavaScript library to convert JSON data to Table.

# Feature

- Convert JSON To &lt;table /&gt;

# Usage

```bash
npm install json-table-converter
```

# API
## jsonToTableHtmlString(json, options)
Convert Json to &lt;table /&gt;

| Param | Type | Description |
| --- | --- | --- |
| json | <code>Object</code> \| <code>Array</code> |  |
| options | <code>Object</code> |  |
| [options.tableStyle] | <code>String</code> | &lt;table/&gt; Style |
| [options.trStyle] | <code>String</code> | &lt;tr/&gt; Style |
| [options.thStyle] | <code>String</code> | &lt;th/&gt; Style |
| [options.tdStyle] | <code>String</code> | &lt;td/&gt; Style |
| [options.tdKeyStyle] | <code>String</code> | &lt;td/&gt; Key Style |
| [options.formatCell] | <code>Function</code> | Cell Value Format Function |

### API Flow Example

<img src="https://storage.360buyimg.com/mtd/home/artboard-1-1544598367579.jpg" alt="flow">

### Demo
```js
const { jsonToTableHtmlString } = require('json-table-converter')
const html = jsonToTableHtmlString(json, {
  tableStyle: string, // <table/> Style
  trStyle: string,    // <tr/> Style
  thStyle: string,    // <th/> Style
  tdStyle: string,    // <td/> Style
  tdKeyStyle: string, // <td/> Key Style
  sortRows: (cellValue, isKeyCell) => newCellValue,
})
```

# Donation

If you find this project useful, you can buy us a cup of coffee:    

<a href="https://www.paypal.me/chuyik" target="blank">
<img width="200" src="https://storage.360buyimg.com/mtd/home/donate_paypal_min1495016435786.png" alt="">
</a><br>     

<img width="650" src="https://storage.360buyimg.com/mtd/home/donate_cn1495017701926.png" alt="">

# Contributors
[![chuyik](https://avatars2.githubusercontent.com/u/6262943?v=3&s=120)](https://github.com/chuyik) |
:---:|
[chuyik](https://github.com/chuyik) |