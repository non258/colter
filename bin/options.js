#!/usr/bin/env node
let argv = require('argv');
let package = require('../package.json');

argv.info(`Usage: colter [pattern] [color]`)

argv.option([
{
  name: 'none',
  short:'n',
  type: 'string',
  description:'テスト表示',
  example: "'colter --none' or 'colter -n'"
},

{
  name: 'vvvv',
  short:'v',
  type: 'string',
  description:'バージョンの表示',
  example: "'colter --version' or 'colter -v'"
},

{
  name: 'init',
  type: 'bool',
  description: '初期処理を行います',
  example: "'colter --init' write to rcfile"
}
]);

argv.version(package.version);

module.exports = argv
