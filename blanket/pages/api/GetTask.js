const { MongoClient } = require("mongodb");
require("dotenv").config();
const { MONGO_URI } = process.env;
const options = { useNewUrlParser: true, useUnifiedTopology: true };

const getTask = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);
  await client.connect();
  const db = client.db("todolist");
  const findTasks = await db.collection("todos").find().toArray();
  client.close();
  findTasks
    ? res
        .status(201)
        .json({ data: findTasks, message: "Tasks successfully retrieved" })
    : res.status(400).json({ message: "Something went wrong" });
};

export default getTask;
