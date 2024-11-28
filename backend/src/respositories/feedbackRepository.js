const Feedback = require("../models/Feedback");

const createFeedback = async (feedbackData) => {
  const response = new Feedback(feedbackData);
  return await response.save();
};

const fetchFeedbackByMockId = async (mockId) => {
  const response = Feedback.find({ mockIdRef: mockId });
  return response;
};

module.exports = { createFeedback, fetchFeedbackByMockId };
