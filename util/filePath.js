const path = require('node:path')

module.exports = fileName => `${path.join(__dirname, `../views/${fileName}.html`)}`