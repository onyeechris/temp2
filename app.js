const http = require('http');
const server = http.createServer((req, res) => {
  // console.log(req);
  if (req.url == '/') {
    // res.write('Welcome to our home page');
    res.end('Welcome to our home page');
  }
  if (req.url == '/about') {
    // res.write('Welcome to our home page');
    res.end('Here is our story');
  }
  res.end('<h1> Wrong page</h1>');
});
server.listen(5000);
