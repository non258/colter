const fs = require('fs');
const os = require('os')
const settings = require('../settings.js')

fs.readFile(`${os.homedir()}/${settings.rc}/coloersetting.json`, "utf-8", function (err, text) {
  console.log(text)
  let setting_json = JSON.parse(text)
  console.log(setting_json)
})

