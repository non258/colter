const chalk = require('chalk')
const color_template = require('./color_template')

function add_option(ch, options) {
  if (options.bold) {
    ch = ch.bold;
  }
  if (options.italic) {
    ch = ch.italic;
  }
  return ch
}

function create_color (color, options) {
  if (color == undefined) {
    return undefined
  }

  let rgb = color.match(/^rgb[^a-zA-Z0-9]? *(\d+)[., ] *(\d+)[., ] *(\d+) *[^a-zA-Z]?$/)
  if (rgb) {
    return add_option(chalk.rgb(rgb[1], rgb[2], rgb[3]), options)
  }

  const template = color_template.get()[color]
  if (template != undefined) {
    const chalk_color = create_color(template.color, template.options)
    return add_option(chalk_color, options)
  }

  let hex = color.match(/^#?([0-9a-fA-F]+)$/)
  if (hex) {
    return add_option(chalk.hex("#" + hex[1]), options)
  }

  // more
}

module.exports = create_color
