const AuthServices = require("../services/AuthServices");
const {
  successResponse,
  createdResponse,
  notFoundResponse,
  errorResponse,
} = require("../utils/responseHandler");

exports.signup = async (req, res) => {
  console.log(req.body);
  try {
    const formData = req.body;

    console.log(formData);

    const response = await AuthServices.signup(formData);

    return createdResponse(res, response, "User Created Successfully");
  } catch (err) {
    return errorResponse(res, err.message, 400);
  }
};

exports.login = async (req, res) => {
  try {
    const { userEmail, password } = req.body;

    const response = await AuthServices.login(userEmail, password);

    return successResponse(res, response, "Login Successfully");
  } catch (err) {
    return errorResponse(res, err.message, 400);
  }
};
