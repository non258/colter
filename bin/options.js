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
}, {
  name: 'reset',
  type: 'bool',
  description: '色を初期状態に戻します',
  example: "'colter --reset'"
}, {
  name: 'var',
  type: 'bool',
  description: '色に名前を付けておきます',
  example: "'colter --var orange fa0'"
}, {
  name: 'bold',
  type: 'bool',
  description: '太字を指定します',
  example: "'colter DIR red --bold'"
}, {
  name: 'italic',
  type: 'bool',
  description: '斜体を指定します',
  example: "'colter DIR red --italic'"
}
])

argv.version(package.version)

module.exports = argv
