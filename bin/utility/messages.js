const chalk = require('chalk')

function decorator(defines) {
  Object.keys(defines).forEach(def => {
    let color = defines[def]
    defines[def] = message => {
      console.log(color(`${def}: ${message}`))
    }
  })
  return defines
}

const error = chalk.ansi256(160).bold   // red
const warning = chalk.ansi256(190).bold // yellow
const success = chalk.ansi256(46).bold  // green

module.exports = decorator({
  error,
  warning,
  success,
})
