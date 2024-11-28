const interviewRepository = require("../respositories/interviewRepository");

const createInterview = async (formData) => {
  const { jsonMockResp, jobPosition, jobDescription, jobExperience, createdBy } = formData;

  if (!jsonMockResp || !jobPosition || !jobDescription || !jobExperience || !createdBy) {
    throw new Error(
      "All fields are required: jsonMockResp, jobPosition, jobDescription, jobExperience, createdBy."
    );
  }

  return await interviewRepository.createInterview(formData);
};

const fetchAllInterviews = async () => {
  return await interviewRepository.fetchAllInterviews();
};

const fetchInterviewsByUser = async (createdBy) => {
  if (!createdBy) {
    throw new Error("The 'createdBy' parameter is required.");
  }

  const interviews = await interviewRepository.fetchInterviewsByUser(createdBy);
  if (interviews.length === 0) {
    throw new Error("No interviews found for the given 'createdBy' value.");
  }

  return interviews;
};

module.exports = {
  createInterview,
  fetchAllInterviews,
  fetchInterviewsByUser,
};
