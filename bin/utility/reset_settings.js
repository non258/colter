const fs = require('fs')
const os = require('os')
const settings = require('../settings')


function reset_settings() {
  try
  {
    fs.unlinkSync(`${os.homedir()}/${settings.rc}/${settings.colorrc}`)
  }
  catch(e) { }
}

module.exports = reset_settings
