/* eslint-disable @typescript-eslint/no-var-requires */
const express = require('express');
const next = require('next');
const http = require('http');
/* eslint-enable @typescript-eslint/no-var-requires */

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const nextApp = next({ dev });
const handle = nextApp.getRequestHandler();

nextApp.prepare().then(() => {
  const app = express();

  app.get('*', (req, res) => {
    return handle(req, res);
  });

  const server = http.createServer(app);

  server.listen(port, err => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
