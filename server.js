const express = require('express')
const path = require('path')
const fs = require('fs')
const { execSync } = require('child_process')
const app = express()

const STATIC_DIR = path.join(__dirname, 'out')

if (!fs.existsSync(STATIC_DIR)) {
  console.log('Building Next.js...')
  try {
    const npmPath = '/opt/alt/alt-nodejs22/root/usr/bin/npm'
    const env = {
      ...process.env,
      PATH: `/opt/alt/alt-nodejs22/root/usr/bin:${process.env.PATH}`,
      NODE_ENV: 'production'
    }
    // Fix permissions on node_modules/.bin
    try {
      execSync(`chmod -R +x ${path.join(__dirname, 'node_modules/.bin')}`, { env })
      console.log('Permissions fixed')
    } catch (e) {
      console.log('chmod failed:', e.message)
    }
    const result = execSync(`${npmPath} run build 2>&1`, {
      cwd: __dirname,
      env,
      encoding: 'utf8',
      maxBuffer: 10 * 1024 * 1024
    })
    console.log('Build output:', result)
    console.log('Build complete!')
  } catch (e) {
    console.error('Build failed:', e.message)
    console.error('Full output:', e.stdout)
  }
}

// Fix static directory references on startup
const correctHome = path.join(__dirname, 'out', 'index.html')
const deployedHome = path.join(STATIC_DIR, 'index.html')
if (fs.existsSync(correctHome)) {
  fs.copyFileSync(correctHome, deployedHome)
  console.log('Homepage fixed from out/index.html')
}

// Explicitly serve homepage
app.get('/', (req, res) => {
  const homePage = path.join(STATIC_DIR, 'index.html')
  if (fs.existsSync(homePage)) {
    return res.sendFile(homePage)
  }
  res.status(404).send('Homepage not found')
})

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

app.use((req, res) => {
  const notFound = path.join(STATIC_DIR, '404.html')
  if (fs.existsSync(notFound)) return res.status(404).sendFile(notFound)
  res.status(404).send('Page not found')
})

const port = process.env.PORT || 3000
app.listen(port, () => console.log('Server running on port ' + port))
