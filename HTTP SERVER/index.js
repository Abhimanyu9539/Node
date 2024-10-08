const http = require("http");
const PORT = 3000;

const server = http.createServer();

server.on("request", (req, res) => {
  if (req.url === "/friends") {
    // res.writeHead(200, {
    //   "Content-Type": "application/json",
    // });
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(
      JSON.stringify({
        id: 1,
        name: "Sir Issac Newton",
      })
    );
  } else if (req.url === '/messages'){
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<body>');
    res.write('<ul>');
    res.write('<li> First list item </li>');
    res.write('<li> Second list item</li> ');
    res.write('<li> Third list item</li> ');
    res.write('</html>');
    res.write('</body>');
    res.write('</ul>');
    res.end();
  } else {
    res.statusCode = 404;
    res.end();
  }
});
server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
}); //Localhost  => 127.0.0.1
