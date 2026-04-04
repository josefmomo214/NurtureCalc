const express = require('express')
const path = require('path')
const fs = require('fs')
const app = express()

const STATIC_DIR = '/home/u212839088/domains/nurturecalc.com/public_html'

app.use((req, res, next) => {
  const urlPath = req.path.endsWith('/') ? req.path : req.path + '/'
  const indexPath = path.join(STATIC_DIR, urlPath, 'index.html')
  if (fs.existsSync(indexPath)) {
    return res.sendFile(indexPath)
  }
  const directPath = path.join(STATIC_DIR, req.path)
  if (fs.existsSync(directPath) && fs.statSync(directPath).isFile()) {
    return res.sendFile(directPath)
  }
  next()
})

app.use(express.static(STATIC_DIR))

const port = process.env.PORT || 3000
app.listen(port, () => console.log('Server running on port ' + port))
