const path = require('path')
const fs = require('fs')

const files = fs
  .readdirSync(path.join(__dirname, '.'))
  .filter(file => file !== 'index.js')

module.exports = files.map(file => require(`./${file}`)).join('')