const mongoose = require("mongoose");

const feedbackSchema = mongoose.Schema({
  mockIdRef: {
    type: mongoose.Schema.Types.String,
    required: true,
    ref: "Interview"  
  },
  question: {
    type: String,
    required: true
  },
  correctAns: {
    type: String,
    required: true
  },
  userAns: {
    type: String,
    required: true
  },
  feedback: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    required: true
  },
  userEmail: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model("Feedback", feedbackSchema);
