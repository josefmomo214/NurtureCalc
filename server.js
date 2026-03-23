const express = require('express');
const path = require('path');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');

const app = express();
const PORT = process.env.PORT || 3000;

// Security headers middleware
app.use(helmet({
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
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // max 100 requests per IP per window
  message: 'Too many requests, please try again later.',
  standardHeaders: true,
  legacyHeaders: false
});
app.use(limiter);

if (process.env.NODE_ENV === 'production') {
  app.use((req, res, next) => {
    if (req.headers['x-forwarded-proto'] !== 'https') {
      return res.redirect(301, 'https://' + req.hostname + req.url);
    }
    next();
  });
}

// Serve static assets from public/
app.use(express.static(path.join(__dirname, 'public')));

// Serve root level files
app.get('/robots.txt', (req, res) => {
  res.sendFile(path.join(__dirname, 'robots.txt'));
});
app.get('/sitemap.xml', (req, res) => {
  res.sendFile(path.join(__dirname, 'sitemap.xml'));
});

// Serve HTML pages without .html extension in the URL
app.use(express.static(path.join(__dirname, 'views'), { extensions: ['html'] }));
// Allow direct mapping for the root index
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// 404 handler for unmatched routes
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

app.listen(PORT, () => {
  console.log(`NurtureCalc server is running on port ${PORT}`);
});
