import { connectMongoDB } from "../../app/libs/MongoConnect";
import { getModel } from "../../app/schema/TaskSchema";

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).send({ msg: "Only GET requests are allowed" });
  }
  try {
    await connectMongoDB();
    const Task = getModel();
    const tasks = await Task.find();
    res.status(200).send(tasks);
  } catch (error) {
    console.log(error);
    res.status(400).send({ error, msg: "Something went wrong..." });
  }
}
