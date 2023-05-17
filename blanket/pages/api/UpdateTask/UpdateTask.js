const { MongoClient, ObjectId } = require("mongodb");
require("dotenv").config();
const { MONGO_URI } = process.env;
const options = { useNewUrlParser: true, useUnifiedTopology: true };

const deleteTask = async (req, res) => {
  const { taskId } = req.query;
  const client = new MongoClient(MONGO_URI, options);
  await client.connect();
  const db = client.db("todolist");
  const result = await db
    .collection("todos")
    .deleteOne({ _id: new ObjectId(taskId) });
  client.close();
  result.deletedCount === 1
    ? res.status(200).json({ message: "Task successfully deleted" })
    : res.status(400).json({ message: "Something went wrong" });
};

export default deleteTask;
