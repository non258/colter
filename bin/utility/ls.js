const spawn = require('child_process').spawn
function ls(dir) {
  spawn('ls', [dir, '--color'], {stdio:'inherit'});
}
module.exports = ls
