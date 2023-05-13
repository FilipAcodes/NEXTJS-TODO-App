require("dotenv").config();
const { MONGO_URI } = process.env;
const { MongoClient } = require("mongodb");
const options = { useNewUrlParser: true, useUnifiedTopology: true };

const createAList = async (req, res) => {
  const { todo } = req.params;
  const client = new MongoClient(MONGO_URI, options);
  await client.connect();
  console.log("Connected to MongoDB.");
  const db = client.db("todolist");
  const addtodo = await db.collection("newtodo").insertOne({ newtodo: todo });
  console.log("New todo item created:", addtodo);
  client.close();
  return addtodo ? addtodo : "an error has occurred";
};

module.exports = { createAList };
