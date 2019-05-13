const fs = require('fs')
const os = require('os')
const settings = require('../settings')
const path = `${os.homedir()}/${settings.rc}/${settings.color_template}`

function get() {
  try {
    return JSON.parse(fs.readFileSync(path).toString())
  } catch {
    const opt = { bold: false, italic: false }
    const default_template = {
      red: { color: '#f00', options: opt },
      green: { color: '#0f0', options: opt },
      blue: { color: '#00f', options: opt },
      yellow: { color: '#ff0', options: opt },
    }

    fs.writeFile(path, JSON.stringify(default_template), err => {})
    return default_template
  }
}

function save(template) {
  fs.writeFile(path, JSON.stringify(template, null, '  '), err => {})
}

module.exports = {
  get,
  save,
}
