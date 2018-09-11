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

function mkcolor_settings() {
  fs.readFile("./dircolors.txt", "utf8", function (err, text) {
    let convert = {}
    if (text.endsWith("\n")) {
      text = text.slice(0, -1)
    }
    let colors_settings = text.split("\n")
    for (let i = 0; i < colors_settings.length; i++) {
      if (colors_settings[i].trim().match(/^(#|TERM)/) == null) {
        let tmp = colors_settings[i].split(" ")
        convert[tmp[0]] = tmp[1] 
      }
    }
    
    writeFile(`${os.homedir()}/${settings.rc}/${settings.colorrc}`, JSON.stringify(convert))
  });
}

module.exports = mkcolor_settings
