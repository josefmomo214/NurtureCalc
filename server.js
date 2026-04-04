const express = require('express')
const path = require('path')
const fs = require('fs')
const app = express()

// Try multiple possible locations for the out/ folder
const possibleDirs = [
  path.join(__dirname, 'out'),
  path.join(__dirname, '../out'),
  path.join(__dirname, 'public_html'),
  path.join(__dirname, '../public_html'),
  path.join(process.cwd(), 'out'),
]

let STATIC_DIR = null
for (const dir of possibleDirs) {
  if (fs.existsSync(dir)) {
    STATIC_DIR = dir
    console.log('Serving static files from:', dir)
    break
  }
}

if (!STATIC_DIR) {
  console.error('Could not find static files directory!')
  console.log('__dirname:', __dirname)
  console.log('process.cwd():', process.cwd())
  console.log('Directories checked:', possibleDirs)
}

app.use((req, res, next) => {
  if (!STATIC_DIR) return next()
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

if (STATIC_DIR) {
  app.use(express.static(STATIC_DIR))
}

app.get('*', (req, res) => {
  res.status(404).send('Static directory not found. Check runtime logs.')
})

const port = process.env.PORT || 3000
app.listen(port, () => console.log('Server running on port ' + port))
