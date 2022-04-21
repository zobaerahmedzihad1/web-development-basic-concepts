const { MongoClient, ServerApiVersion } = require("mongodb");
const express = require("express");
const cors = require("cors");
const res = require("express/lib/response");
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

async function run() {
  try {
    await client.connect();
    const userCollection = client.db("foodExpress").collection("user");

    app.post("/user", (req, res) => {
      const user = req.body;
      console.log(user);
      res.send({ status: "success." });
    });
  } finally {
    // await client.close()
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("I Am from the server.");
});

app.listen(port, () => {
  console.log("listening From ", port);
});
