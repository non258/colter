#!/usr/bin/env node
const argv = require('argv')
const package = require('../package.json')

argv.info(`Usage: colter [pattern] [color]`)

argv.option([
{
  name: 'init',
  type: 'bool',
  description: '初期処理を行います',
  example: "'colter --init' write to rcfile"
}, {
  name: 'reset',
  type: 'bool',
  description: '色を初期状態に戻します',
  example: "'colter --reset'"
}
])

argv.version(package.version)

module.exports = argv
