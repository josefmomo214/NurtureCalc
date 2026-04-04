const express = require('express')
const path = require('path')
const fs = require('fs')
const { execSync } = require('child_process')
const app = express()

const STATIC_DIR = path.join(__dirname, 'out')

if (!fs.existsSync(STATIC_DIR)) {
  console.log('Building Next.js...')
  try {
    // Find npm path
    const npmPath = execSync('which npm || find /usr -name npm 2>/dev/null | head -1 || find /opt -name npm 2>/dev/null | head -1').toString().trim()
    console.log('npm found at:', npmPath)
    const nodePath = process.execPath
    console.log('node path:', nodePath)
    const nodeDir = path.dirname(nodePath)
    const env = {
      ...process.env,
      NODE_ENV: 'production',
      PATH: `${nodeDir}:${process.env.PATH}`
    }
    execSync(`${npmPath} run build`, {
      stdio: 'pipe',
      cwd: __dirname,
      env
    })
    console.log('Build complete!')
  } catch (e) {
    console.error('Build failed:', e.message)
    console.error('stderr:', e.stderr?.toString())
  }
}

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
