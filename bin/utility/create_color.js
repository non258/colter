const chalk = require('chalk')
function create_color (color) {
  if (color == undefined) {
    return undefined
  }

  let rgb = color.match(/^rgb[^a-zA-Z0-9]? *(\d+)[., ] *(\d+)[., ] *(\d+) *[^a-zA-Z]?$/)
  if (rgb) {
    return chalk.rgb(rgb[1], rgb[2], rgb[3])
  }

  let template = {
    red: [255, 0, 0],
    green: [0, 255, 0],
    blue: [0, 0, 255],
    yellow: [255, 255, 0],
  }
  let template_color = template[color]
  if (template_color != undefined) {
    return chalk.rgb(template_color[0], template_color[1], template_color[2])
  }

  let hex = color.match(/^#?([0-9a-f]+)$/)
  if (hex) {
    return chalk.hex("#" + hex[1])
  }

  // more
}

module.exports = create_color
