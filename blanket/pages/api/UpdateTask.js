const { MongoClient, ObjectId } = require("mongodb");
require("dotenv").config();
const { MONGO_URI } = process.env;
const options = { useNewUrlParser: true, useUnifiedTopology: true };

const updateTask = async (req, res) => {
  const { taskId, task } = req.body;
  const client = new MongoClient(MONGO_URI, options);
  await client.connect();
  const db = client.db("todolist");
  const update = await db
    .collection("todos")
    .updateOne({ _id: new ObjectId(taskId) }, { $set: { task: task } });
  client.close();
  update.modifiedCount === 1
    ? res.status(200).json({ message: "Task successfully updated" })
    : res.status(400).json({ message: "Something went wrong" });
};

export default updateTask;
