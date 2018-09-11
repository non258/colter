const fs = require('fs');
const os = require('os')
const settings = require('../settings')

//ファイルの書き込み関数
function writeFile(path, data) {
  fs.writeFile(path, data, function (err) {
    if (err) {
        throw err;
    }
  });
}

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
}

module.exports = mkcolor_settings
