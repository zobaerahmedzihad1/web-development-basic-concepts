const express = require("express");
const app = express();
const port = process.env.PORT || 4700;

app.get("/", (req, res) => {
  res.send("I am from backend.");
});

app.get("/friend", (req, res) => {
  res.send("See all my friends.");
});

app.listen(port, () => {
  console.log("Listening from ", port);
});
