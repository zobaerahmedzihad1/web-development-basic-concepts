const express = require("express");
const app = express();
const port = process.env.PORT || 4700;

app.get("/", (req, res) => {
  res.send("I am from backend.");
});

const friends = [
  { id: 1, name: "masum", phone: "0124535717" },
  { id: 2, name: "sahin", phone: "0124563214" },
  { id: 3, name: "bellal", phone: "012456698" },
  { id: 4, name: "shiplu", phone: "012456564" },
  { id: 5, name: "shiplu", phone: "012456832" },
];

app.get("/friends", (req, res) => {
  res.send(friends);
});

app.get("/friend/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const friend = friends.find((friend) => friend.id === id);
  res.send(friend);
});

app.listen(port, () => {
  console.log("Listening from ", port);
});
