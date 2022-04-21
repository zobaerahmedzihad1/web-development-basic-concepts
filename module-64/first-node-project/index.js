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

    // read data from mongodb database.
    app.get("/users", async (req, res) => {
      const query = {};
      const cursor = userCollection.find(query);
      const users = await cursor.toArray();
      res.send(users);
    });

    // receive data from client side.
    app.post("/user", async (req, res) => {
      const user = req.body;
      console.log(user);
      // send data to mongodb.
      const result = await userCollection.insertOne(user);
      console.log(`Data was inserted to mongodb ${result.insertedId}`);

      res.send(result);
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
