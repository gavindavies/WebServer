const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  let today = new Date();
  let date = today.toLocaleDateString();
  let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();;

  let obj = {
    Name: "Time and Date server",
    Date: date,
    Time: time
  }

  res.end(JSON.stringify(obj))

});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});