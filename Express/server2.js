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
