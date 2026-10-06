// Minimal Gun relay for rushgun (https://rushgun.vercel.app).
// Browsers connect to https://<this-host>/gun and sync posts in real time.
const http = require('http');
const Gun = require('gun');

const server = http.createServer((req, res) => {
  // GET /export -> full in-memory graph as JSON. Used for one-time
  // migration to the Cloudflare relay (openmic-relay GUN_IMPORT_URL).
  // The graph on a public relay is world-readable over the Gun protocol
  // anyway; this just makes bulk export practical. Remove after migration.
  if (req.url === '/export') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify((gun._ && gun._.graph) || {}));
    return;
  }
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('rushgun relay is alive\n');
});

const gun = Gun({ web: server });

const port = process.env.PORT || 8080;
server.listen(port, () => console.log(`rushgun relay listening on ${port}`));
