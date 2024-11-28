const express = require("express");
const router = express.Router();
const {createFeedback,fetchFeedbackByMockId} = require("../controllers/FeedbackController")


router.post("/",createFeedback);

router.get("/",fetchFeedbackByMockId);



module.exports = router ;