import mongoose from "mongoose";
const taskSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "todoNewPrac", required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  status: { type: String, enum: ["pending", "in-progress", "completed"], default: "pending" },
},{timestamps: true});
export default mongoose.model("tasksNewTodo", taskSchema);