import dotenv from "dotenv";
dotenv.config();
import taskSchema from "../models/taskSchema.js";

// create a new task
export const createTask = async (req, res) => {
  const { title, description } = req.body;
  const userId = req.userId;
  console.log(req.body);
  if (!userId || !title || !description) {
    return res.status(400).json({ message: "All fields are required" });
  }
  try {
    const existingTask = await taskSchema.findOne({ userId, title });

    if (existingTask) {
      return res
        .status(400)
        .json({ message: "Task with this title already exists" });
    }
    const newTask = new taskSchema({
      userId,
      title,
      description,
    });
    await newTask.save();
    return res.status(201).json({
      success: true,
      message: "Task created successfully",
      task: newTask,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: `Server error ${error.message}`,
    });
  }
};

export const getTasks = async (req, res) => {
  const userId = req.userId;
  try {
    const tasks = await taskSchema.find({ userId });
    console.log(`tasks fetched for userId ${userId}: and tasks are :${tasks}`);
    return res.status(200).json({
      success: true,
      tasks,
    });
  } catch (error) {
    console.log(`Error fetching tasks: ${error.message}`);
    return res.status(500).json({
      success: false,
      message: `Server error ${error.message}`,
    });
  }
};
