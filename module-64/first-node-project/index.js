const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
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

    // get users
    app.get("/user", async (req, res) => {
      const query = {};
      const cursor = userCollection.find(query);
      const users = await cursor.toArray();
      res.send(users);
    });

    // post: add new a user.
    app.post("/user", async (req, res) => {
      const newUser = req.body;
      console.log(newUser);
      // send data to mongodb.
      const result = await userCollection.insertOne(newUser);
      console.log(`Data was inserted to mongodb ${result.insertedId}`);
      res.send(result);
    });

    // Delete user.

    app.delete("/user/:id", (req, res) => {
      const id = req.params.id;
      const query = { _id: ObjectId(id) };
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
