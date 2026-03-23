import express from 'express';
import next from 'next';
import path from 'path';
import { fileURLToPath } from 'url';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dev = process.env.NODE_ENV !== 'production';
const hostname = 'localhost';
const port = process.env.PORT || 3000;
const app = next({ dev, hostname, port });
const handle = app.getRequestHandler();

app.prepare().then(() => {
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
  
  // Handle all other routes with Next.js
  server.all('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://${hostname}:${port}`);
  });
});
