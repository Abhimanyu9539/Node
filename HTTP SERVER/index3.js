const { json } = require("express");
const http = require("http");
const PORT = 3000;

const server = http.createServer();

const friends = [
  {
    id: 1,
    name: "Sir Issac Newton",
  },
  {
    id: 2,
    name: "Nikola Tesla",
  },
  {
    id: 3,
    name: "Albert Einstein",
  },
];
server.on("request", (req, res) => {
  const items = req.url.split("/");
  if (req.method === "POST" && items[1] === 'friends'){
    req.on('data', (data) =>{
        const friend = data.toString();
        console.log("Request: ",friend);
        friends.push(JSON.parse(friend));
        
    }); 
    req.pipe(res); 
  }
  
  else if ( req.method === "GET" && items[1] === "friends") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");

    if (items.length === 3) {
      const friendsIndex = Number(items[2]);
      res.end(JSON.stringify(friends[friendsIndex]));
    } else {
      res.end(JSON.stringify(friends));
    }

    res.end(JSON.stringify());
  } else if (req.method === "GET" && items[1] === "messages") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<body>");
    res.write("<ul>");
    res.write("<li> First list item </li>");
    res.write("<li> Second list item</li> ");
    res.write("<li> Third list item</li> ");
    res.write("</html>");
    res.write("</body>");
    res.write("</ul>");
    res.end();
  } else {
    res.statusCode = 404;
    res.end();
  }
});
server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
}); //Localhost  => 127.0.0.1
