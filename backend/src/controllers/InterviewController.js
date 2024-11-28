const interviewService = require("../services/interviewService");
const {
  successResponse,
  createdResponse,
  notFoundResponse,
  errorResponse,
} = require("../utils/responseHandler");

const createInterview = async (req, res) => {
  try {
    const interview = await interviewService.createInterview(req.body.formData);
    return createdResponse(res, interview, "Interview created successfully!");
  } catch (error) {
    console.error("Error creating interview:", error.message);
    return errorResponse(res, error.message || "Could not create the interview.", 400);
  }
};

const fetchAllInterviews = async (req, res) => {
  try {
    const interviews = await interviewService.fetchAllInterviews();
    return successResponse(res, interviews, "Interviews fetched successfully!");
  } catch (error) {
    console.error("Error fetching interviews:", error.message);
    return errorResponse(res, "Internal server error. Could not fetch interviews.");
  }
};

const fetchInterviewsByUser = async (req, res) => {
  try {
    const { createdBy } = req.params;
    const interviews = await interviewService.fetchInterviewsByUser(createdBy);
    return successResponse(res, interviews, "Interviews fetched successfully!");
  } catch (error) {
    console.error("Error fetching interviews by createdBy:", error.message);
    if (error.message === "No interviews found for the given 'createdBy' value.") {
      return notFoundResponse(res, error.message);
    }
    return errorResponse(res, error.message || "Could not fetch interviews by createdBy.", 400);
  }
};

module.exports = {
  createInterview,
  fetchAllInterviews,
  fetchInterviewsByUser,
};
