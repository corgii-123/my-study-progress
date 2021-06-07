const fs = require('fs-extra')
const dest = './backend/frontend'
fs.removeSync(dest)
fs.moveSync('./dist', dest)