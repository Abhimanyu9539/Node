const express = require("express");

const app = express();

const PORT = 3000;

const friends = [
  {
    id: 0,
    name: "Sir Albert",
  },
  {
    id: 1,
    name: "Sir Issac Newton",
  },
];

app.use((req, res, next) => {
  const start = Date.now();

  next();
  // actions go after here
  const delta = Date.now() - start;
  console.log(`${req.method} ${req.url} ${delta}ms`);
});

app.use(express.json());

app.post("/friends", (req, res) => {
  if (!req.body.name) {
    return res.status(400).json({
      error: "missing friend name",
    });
  }
  const newFriend = {
    id: friends.length,
    name: req.body.name
    
  };

  friends.push(newFriend);
  res.json(friends);
});

app.get("/friends", (req, res) => {
  res.json(friends);
});

app.get("/friends/:friendid", (req, res) => {
  const friendId = Number(req.params.friendid);
  const friend = friends[friendId];

  if (friend) {
    res.status(200).json(friend);
  } else {
    res.status(404).json({
      error: "Friend does not exist.",
    });
  }
});

app.get("/messages", (req, res) => {
  res.send("Hello Albert");
});

app.post("/messages", (req, res) => {
  console.log("Updating messages");
});

app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`);
});
