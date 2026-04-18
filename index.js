const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('<h1>My Cloud Game 🎮</h1><p>It works!</p>');
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log('Server running on port ' + PORT);
});
