require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const Roadmap = require("./models/Roadmap");

const app = express();

// CORS SETTINGS
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://your-netlify-app.netlify.app",
    ],
    credentials: true,
  })
);

app.use(express.json());

// MONGODB CONNECTION
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((error) => console.log("MongoDB Error:", error));

// TEST ROUTE
app.get("/", (req, res) => {
  res.send("Backend Running");
});

// GENERATE ROADMAP
app.post("/generate-roadmap", async (req, res) => {
  try {
    const { goal, level, hours } = req.body;

    const roadmap = [
      {
        title: `Learn basics of ${goal}`,
        completed: false,
      },
      {
        title: `Practice projects in ${goal}`,
        completed: false,
      },
      {
        title: `Study advanced concepts of ${goal}`,
        completed: false,
      },
      {
        title: `Build real-world applications`,
        completed: false,
      },
      {
        title: `Prepare for interviews`,
        completed: false,
      },
    ];

    // SAVE TO MONGODB
    const newRoadmap = new Roadmap({
      goal,
      level,
      hours,
      roadmap,
    });

    await newRoadmap.save();

    console.log("Roadmap Saved");

    res.json(roadmap);

  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Server Error",
    });
  }
});

// PORT
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
