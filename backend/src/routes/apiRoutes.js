const express = require("express");
const router = express.Router();
const interviewRouter = require("./Interview");
const feedbackRouter = require("./Feedback");
const authRouter = require("./Auth");

router.use("/interviews", interviewRouter);

router.use("/feedbacks", feedbackRouter);

router.use("/auth", authRouter);

module.exports = router;
