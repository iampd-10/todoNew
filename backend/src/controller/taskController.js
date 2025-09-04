import dotenv from "dotenv";
dotenv.config();
import taskSchema from "../models/taskSchema.js";


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

export const getbyId = async (req, res) => {
  const userId = req.userId;
  const taskId = req.params.id;
  try {
    const task = await taskSchema.findOne({ _id: taskId, userId });
    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }
    return res.status(200).json({ success: true, task });
  } catch (error) {
    return res.status(500).json({ message: `Server error ${error.message}` });
  }
};

export const getByName = async (req, res) => {
  const userId = req.userId;
  const title = req.params.title;
  try {
    const task = await taskSchema.findOne({ title: title, userId });
    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }
    return res.status(200).json({ success: true, task });
  } catch (error) {
    return res.status(500).json({ message: `Server error ${error.message}` });
  }
};
export const updateTask = async (req, res) => {
  const userId = req.userId;
  const taskId = req.params.id;
  const { title, description } = req.body;
  try {
    const task = await taskSchema.findOneAndUpdate(
      { _id: taskId, userId },
      { title, description },
      { new: true }
    );
    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }
    return res.status(200).json({ success: true, task });
  } catch (error) {
    return res.status(500).json({ message: `Server error ${error.message}` });
  }
};

export const updateByField = async (req, res) => {
  const userId = req.userId;
  const taskId = req.params.id;
  const { field, value } = req.body;
  const allowedFields = ["title", "description", "status"];
  if (!allowedFields.includes(field)) {
    return res.status(400).json({ message: "Invalid field" });
  }
  try {
    const task = await taskSchema.findOneAndUpdate(
      {
        _id: taskId,
        userId,
      },
      { [field]: value },
      { new: true }
    );
    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }
    return res.status(200).json({ success: true, task });
  } catch (error) {
    return res.status(500).json({ message: `Server error ${error.message}` });
  }
};

export const deleteTask = async (req, res) => {
  const userId = req.userId;
  const taskId = req.params.id;
  try {
    const task = await taskSchema.findOneAndDelete({ _id: taskId, userId });
    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }
    return res
      .status(200)
      .json({ success: true, message: "Task deleted successfully" });
  } catch (error) {
    return res.status(500).json({ message: `Server error ${error.message}` });
  }
};
