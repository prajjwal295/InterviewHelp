const feedbackRepository = require("../respositories/feedbackRepository");

const createFeedback = async (formData) => {
  const { mockIdRef, question, correctAns, userAns, feedback, rating, userEmail } = formData;

  // Individual field checks
  if (!mockIdRef) {
    throw new Error("mockIdRef is required.");
  }
  if (!question) {
    throw new Error("question is required.");
  }
  if (!correctAns) {
    throw new Error("correctAns is required.");
  }
  if (!userAns) {
    throw new Error("userAns is required.");
  }
  if (!feedback) {
    throw new Error("feedback is required.");
  }
  if (!rating) {
    throw new Error("rating is required.");
  }
  if (!userEmail) {
    throw new Error("userEmail is required.");
  }

  // If all fields are valid, call repository to save feedback
  const response = await feedbackRepository.createFeedback(formData);
  return response;
};

const fetchFeedbackByMockId = async (mockId) => {
  if (!mockId) {
    throw new Error("mockId is required to fetch feedback.");
  }

  const response = await feedbackRepository.fetchFeedbackByMockId(mockId);
  return response;
};

module.exports = { createFeedback, fetchFeedbackByMockId };
