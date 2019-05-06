const chalk = require('chalk')
function create_color (color, options) {
  if (color == undefined) {
    return undefined
  }

  let ch = chalk;
  if (options.bold) {
    ch = ch.bold;
  }
  if (options.italic) {
    ch = ch.italic;
  }

  let rgb = color.match(/^rgb[^a-zA-Z0-9]? *(\d+)[., ] *(\d+)[., ] *(\d+) *[^a-zA-Z]?$/)
  if (rgb) {
    return ch.rgb(rgb[1], rgb[2], rgb[3])
  }

  let template = {
    red: [255, 0, 0],
    green: [0, 255, 0],
    blue: [0, 0, 255],
    yellow: [255, 255, 0],
  }
  let template_color = template[color]
  if (template_color != undefined) {
    return ch.rgb(template_color[0], template_color[1], template_color[2])
  }

  let hex = color.match(/^#?([0-9a-fA-F]+)$/)
  if (hex) {
    return ch.hex("#" + hex[1])
  }

  // more
}

module.exports = create_color
