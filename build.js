const fs = require('fs-extra')
const dest = './backend/dist'
fs.copy('./dist', dest, { clobber: true }, (err) => {
  if (err) {
    return console.log(err)
  }
  fs.remove('./dist')
})
fs.remove('./backend/frontend')