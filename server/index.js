const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("MongoDB connected successfully!");
  })
  .catch((error) => {
    console.error("MongoDB connection failed:", error.message);
  });

// Test Route
app.get("/", (req, res) => {
  res.json({
    message: "ToolBorrow API is running!",
  });
});

// Start Server
app.listen(PORT, () => {
  console.log(`ToolBorrow server running on http://localhost:${PORT}`);
});