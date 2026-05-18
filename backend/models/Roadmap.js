const mongoose = require("mongoose");

const roadmapSchema = new mongoose.Schema({

  goal: {
    type: String,
    required: true,
  },

  level: {
    type: String,
    required: true,
  },

  hours: {
    type: Number,
    required: true,
  },

  roadmap: [
    {
      title: String,
      completed: Boolean,
    },
  ],

});

module.exports = mongoose.model(
  "Roadmap",
  roadmapSchema
);
