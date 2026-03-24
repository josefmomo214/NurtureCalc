const express = require('express');
const next = require('next');
const path = require('path');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');

const dev = process.env.NODE_ENV !== 'production';
const hostname = 'localhost';
const port = process.env.PORT || 3000;
const app = next({ dev, hostname, port });
const handle = app.getRequestHandler();

const server = express();

// Security headers configuration
server.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'none'"],
      scriptSrc: [
        "'self'",
        "https://pagead2.googlesyndication.com",
        "https://www.googletagmanager.com",
        "https://partner.googleadservices.com"
      ],
      styleSrc: [
        "'self'",
        "https://fonts.googleapis.com"
      ],
      fontSrc: [
        "'self'",
        "https://fonts.gstatic.com"
      ],
      imgSrc: [
        "'self'",
        "https://www.nurturecalc.com"
      ],
      frameSrc: [
        "https://googleads.g.doubleclick.net",
        "https://tpc.googlesyndication.com"
      ],
      frameAncestors: ["'none'"],
      objectSrc: ["'none'"],
      baseUri: ["'none'"],
      formAction: ["'self'"],
      connectSrc: ["'self'"]
    }
  },
  hsts: {
    maxAge: 31536000,
    includeSubDomains: true,
    preload: true
  },
  referrerPolicy: {
    policy: "strict-origin-when-cross-origin"
  }
}));

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: 'Too many requests, please try again later.',
  standardHeaders: true,
  legacyHeaders: false
});
server.use(limiter);

// Serve static assets from public/
server.use(express.static(path.join(__dirname, 'public')));

// Root level files
server.get('/robots.txt', (req, res) => {
  res.sendFile(path.join(__dirname, 'robots.txt'));
});
server.get('/sitemap.xml', (req, res) => {
  res.sendFile(path.join(__dirname, 'sitemap.xml'));
});

// Serve Legacy HTML pages without .html extension
server.use(express.static(path.join(__dirname, 'views'), { extensions: ['html'] }));

// Initialize Next.js separately
let nextReady = false;
app.prepare().then(() => {
  nextReady = true;
  console.log('> Next.js is ready');
}).catch(err => {
  console.error('> Next.js failed to prepare:', err);
});

// Handle all other routes with Next.js (if ready) or fallback
server.all('*', (req, res) => {
  if (nextReady) {
    return handle(req, res);
  } else {
    // Check if it's a legacy route that might have been missed
    // Otherwise show a "Starting up" message or 503 fallback
    res.status(503).send('Server is starting up, please refresh in a moment.');
  }
});

server.listen(port, (err) => {
  if (err) throw err;
  console.log(`> NurtureCalc server is running on port ${port}`);
});
