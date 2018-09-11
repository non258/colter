const fs = require('fs');
const os = require('os')
const settings = require('../settings')

function mkcolor_settings(dircolors_settings) {
  let convert = {}
  if (dircolors_settings.endsWith("\n")) {
    dircolors_settings = dircolors_settings.slice(0, -1)
  }
  let colors_settings = dircolors_settings.split("\n")
  for (let i = 0; i < colors_settings.length; i++) {
    if (colors_settings[i].trim().match(/^(#|TERM)/) == null) {
      let tmp = colors_settings[i].split(" ")
      convert[tmp[0]] = tmp[1] 
    }
  }
  return convert
}

module.exports = mkcolor_settings
