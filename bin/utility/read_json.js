const fs = require('fs')
const os = require('os')
const settings = require('../settings.js')

function read_settings_json () {
  let setting_json = JSON.parse(fs.readFileSync(`${os.homedir()}/${settings.rc}/${settings.colorrc}`, "utf-8"))
  console.log(setting_json)
  return setting_json
}

module.exports = read_settings_json
