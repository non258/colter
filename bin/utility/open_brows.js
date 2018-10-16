const opener = require("opener")

function open_brows(port) {
  opener(`http://localhost:${port}`)
}

module.exports = open_brows
