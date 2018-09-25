const chalk = require("chalk")
function create_color (color) {
  if (color == undefined) {
    return undefined
  }

  let rgb = color.match(/^rgb\( *(\d+), *(\d+), *(\d+) *\)$/)
  if (rgb) {
    return chalk.rgb(rgb[1], rgb[2], rgb[3])
  }

  let hex = color.match(/#?([0-9a-f]+)/)
  if (color[0] != '#') {
    return chalk.hex("#" + hex[1])
  }

  // more
}

module.exports = create_color
