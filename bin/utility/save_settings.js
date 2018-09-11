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

function save_settings(convert) {
  writeFile(`${os.homedir()}/${settings.rc}/${settings.colorrc}`, JSON.stringify(convert))
}

module.exports = save_settings
