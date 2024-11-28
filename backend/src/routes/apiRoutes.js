const express = require("express");
const router = express.Router();
const interviewRouter = require("./Interview");
const feedbackRouter = require("./Feedback");


router.use("/interviews",interviewRouter);


router.use("/feedbacks",feedbackRouter);



module.exports = router ;