const {spawn, execSync} = require('child_process')
const os = require('os')
const settings = require('../settings')

function ls(dir) {
  let result = execSync(`dircolors ${os.homedir()}/${settings.rc}/${settings.colorrc}`).toString()
  result = result.match(/^LS_COLORS='(.*)';\n/)

  const env = Object.create(process.env)
  env.LS_COLORS = result[1]
  spawn('ls', [dir, '--color'], {stdio:'inherit', env: env})
}
module.exports = ls
