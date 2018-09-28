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
  name: 'ls',
  short: 'l',
  type: 'string',
  description: '設定適用後のlsを試します',
  example: "'colter --ls=<path>', 'colter -l <path>'"
}
])

argv.version(package.version)

module.exports = argv
