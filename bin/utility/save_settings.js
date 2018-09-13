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

function save_settings(dircolors_settings_json) {
  writeFile(`${os.homedir()}/${settings.rc}/${settings.colorrc}`, dircolors_settings_json)
}

module.exports = save_settings
