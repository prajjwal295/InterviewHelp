const feedbackService = require("../services/feedbackService");
const { 
  successResponse, 
  createdResponse, 
  notFoundResponse, 
  errorResponse 
} = require("../utils/responseHandler");

const createFeedback = async (req, res) => {
  try {
    const feedbackData = req.body.formData;

    const response = await feedbackService.createFeedback(feedbackData);

    return createdResponse(res, response, "Feedback created successfully");
  } catch (error) {
    return errorResponse(res, error.message, 400);
  }
};

const fetchFeedbackByMockId = async (req, res) => {

    console.log(req);

  try {
    const { mockId } = req.params;

    const response = await feedbackService.fetchFeedbackByMockId(mockId);

    if (!response || response.length === 0) {
      return notFoundResponse(res, "No feedback found for the provided mockId");
    }
    return successResponse(res, response, "Feedback fetched successfully");
  } catch (error) {

    return errorResponse(res, error.message, 400);
  }
};

module.exports = { createFeedback, fetchFeedbackByMockId };
