const { MongoClient } = require("mongodb");
require("dotenv").config();
const { MONGO_URI } = process.env;
const options = { useNewUrlParser: true, useUnifiedTopology: true };

const setTask = async (req, res) => {
  const { task } = req.body;
  const client = new MongoClient(MONGO_URI, options);
  await client.connect();
  const db = client.db("todolist");
  const createTask = await db.collection("todos").insertOne({ task: task });
  client.close();
  createTask
    ? res.status(201).json({ message: "Task successfully added" })
    : res.status(400).json({ message: "Something went wrong" });
};

export default setTask;
