const authRepository = require("../respositories/AuthRepository");

const signup = async (formData) => {
  const { userName, userEmail, password } = formData;

  if (!userName) {
    throw new Error("username is required.");
  }
  if (!userEmail) {
    throw new Error("email is required.");
  }
  if (!password) {
    throw new Error("password is required.");
  }

  const response = await authRepository.signupUser(formData);
  return response;
};

const login = async (userEmail, password) => {
  if (!userEmail) {
    throw new Error("email is required.");
  }
  if (!password) {
    throw new Error("password is required.");
  }

  const response = await authRepository.loginUsser(userEmail, password);
  return response;
};

module.exports = { signup, login };
