const assert = require('power-assert')
const fs = require('fs-extra')

async function assertThrowsAsync(fn, regExp) {
  let f = () => {}
  try {
    await fn()
  } catch(e) {
    f = () => {throw e}
  } finally {
    assert.throws(f, regExp)
  }
}

function ensureDir (dir) {
  try {
    fs.mkdirSync(dir)
  } catch (e) {
    if (e && e.errno === -17) return
    throw e
  }
}

function resetDir (dir) {
  // eslint-disable-next-line no-empty
  try { fs.removeSync(dir) } catch (e) {}
  ensureDir(dir)
}

module.exports = {
  assertThrowsAsync,
  ensureDir,
  resetDir,
}