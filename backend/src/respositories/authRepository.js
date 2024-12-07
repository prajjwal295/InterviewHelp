const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const signupUser = async (FormData) => {
  const { userName, userEmail, password } = FormData;
  const existUser = await User.findOne({ email: userEmail });

  if (existUser) {
    throw new Error("Email is already in use");
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await User.create({
    username: userName,
    email: userEmail,
    password: hashedPassword,
  });

  return user;
};

const loginUsser = async (userEmail, password) => {
  const user = await User.findOne({ email: userEmail });
  if (!user) throw new Error("The email is not in use");

  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) throw new Error("Password is not Correcct");
  else {
    const payload = {
      email: user.email,
      id: user._id,
      isAdmin: user.isAdmin,
    };
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: "2h",
    });

    user.token = token;
    user.password = undefined;

    const options = {
      expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
      httpOnly: true,
    };

    return {
      success: true,
      token,
      user,
      message: "Login success",
    };
  }
};

module.exports = { loginUsser, signupUser };
