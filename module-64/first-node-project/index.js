const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 4700;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("I am from backend.");
});

const friends = [
  { id: 1, name: "masum", phone: "0124535717" },
  { id: 2, name: "sahin", phone: "0124563214" },
  { id: 3, name: "bellal", phone: "012456698" },
  { id: 4, name: "sahadat", phone: "012456564" },
  { id: 6, name: "sanaul", phone: "012456832" },
  { id: 7, name: "rabiul", phone: "012456832" },
  { id: 8, name: "salman", phone: "012456832" },
  { id: 9, name: "rakibul", phone: "012456832" },
];

app.get("/friends", (req, res) => {
  res.send(friends);
});

app.get("/friend/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const friend = friends.find((friend) => friend.id === id);
  res.send(friend);
});

app.post("/friends", (req, res) => {
  const friend = req.body;
  friend.id = friends.length + 2;
  friends.push(friend)
  res.send("friend")
});

app.listen(port, () => {
  console.log("Listening from ", port);
});
