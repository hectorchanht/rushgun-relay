// Minimal Gun relay for rushgun (https://rushgun.vercel.app).
// Browsers connect to https://<this-host>/gun and sync posts in real time.
const http = require('http');
const Gun = require('gun');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('rushgun relay is alive\n');
});

Gun({ web: server });

const port = process.env.PORT || 8080;
server.listen(port, () => console.log(`rushgun relay listening on ${port}`));
