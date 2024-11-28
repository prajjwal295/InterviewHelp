const Interview = require("../models/MockInterview");

const createInterview = async (interviewData) => {
  const interview = new Interview(interviewData);
  return await interview.save();
};

const fetchAllInterviews = async () => {
  return await Interview.find();
};

const fetchInterviewsByUser = async (createdBy) => {
  return await Interview.find({ createdBy });
};

module.exports = {
  createInterview,
  fetchAllInterviews,
  fetchInterviewsByUser,
};
