const { MongoClient, ServerApiVersion } = require("mongodb");
const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

// user : dbuser1
// password: kosHtiJLM0PJnfln

// middleware
app.use(cors());
app.use(express.json());

const uri =
  "mongodb+srv://dbuser1:kosHtiJLM0PJnfln@cluster0.w5uoe.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});
client.connect((err) => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  console.log("db connected.");
  client.close();
});

app.get("/", (req, res) => {
  res.send("I Am from the server.");
});

app.listen(port, () => {
  console.log("listening From ", port);
});
