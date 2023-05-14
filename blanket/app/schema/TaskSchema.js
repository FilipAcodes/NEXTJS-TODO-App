import mongoose from "mongoose";

let Task;

const taskSchema = new mongoose.Schema({
  task: {
    type: String,
    required: true,
  },
});

export function getModel() {
  if (!Task) {
    Task = mongoose.model("Task", taskSchema);
  }
  return Task;
}

export default taskSchema;
