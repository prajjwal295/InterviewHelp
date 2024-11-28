const express = require("express");
const router = express.Router();
const {
  createInterview,
  fetchAllInterviews,
  fetchInterviewsByUser,
} = require("../controllers/InterviewController");

// Create a new interview (POST /interviews)
router.post("/", createInterview);

// Fetch all interviews (GET /interviews)
router.get("/", fetchAllInterviews);

// Fetch interviews filtered by `createdBy` (GET /interviews?createdBy=:createdBy)
router.get("/", fetchInterviewsByUser);

module.exports = router;
