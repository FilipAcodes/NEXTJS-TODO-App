import { connectMongoDB } from "../../app/libs/MongoConnect";
import { getModel } from "../../app/schema/TaskSchema";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).send({ msg: "Only POST requests are allowed" });
  }

  const Task = getModel();

  const { task } = req.body;
  try {
    await connectMongoDB();
    Task.create({ task }).then((data) => {
      res.status(201).send(data);
    });
  } catch (error) {
    console.log(error);
    res.status(400).send({ error, msg: "Something went wrong..." });
  }
}
