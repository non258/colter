const fs = require('fs')
const os = require('os')
const settings = require('../settings')


function get_dircolors_settings() {
  try
  {
    let file = fs.readFileSync(`${os.homedir()}/${settings.rc}/${settings.colorrc}`)
    return file.toString()
  }
  catch(e)
  {
    const execSync = require('child_process').execSync
    const set =  execSync('dircolors -p').toString()
    fs.writeFile(`${os.homedir()}/${settings.rc}/${settings.colorrc}`, set, (err) => {})
    return set
  }
}

module.exports = get_dircolors_settings
