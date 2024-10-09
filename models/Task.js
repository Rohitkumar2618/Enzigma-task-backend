const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema(
  {
    assignedTo: {
      type: String,
      required: [true, "Assigned user is required"],
      trim: true,
    },
    status: {
      type: String,
      enum: ["Completed", "In Progress", "Not Started"],
      default: "Not Started",
    },
    dueDate: {
      type: Date,
      required: [true, "Due date is required"],
    },
    priority: {
      type: String,
      enum: ["Low", "Normal", "High"],
      default: "Normal",
    },
    comments: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true, // createdAt and updatedAt fields
  }
);

const Task = mongoose.model("Task", TaskSchema);

module.exports = Task;
