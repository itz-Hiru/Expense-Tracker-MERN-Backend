const jwt = require("jsonwebtoken");
const User = require("../models/User.model");

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "1h" });
};

exports.registerUser = async (req, res) => {
  const { fullName, email, password, profileImageURL } = req.body;

  if (!fullName || !email || !password) {
    return res
      .status(404)
      .json({ message: "All feilds are required to register!" });
  }

  try {
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res
        .status(404)
        .json({ message: "User already exists in this email!" });
    }

    const user = await User.create({
      fullName,
      email,
      password,
      profileImageURL,
    });
    res.status(200).json({
      id: user._id,
      user,
      token: generateToken(user._id),
    });
  } catch (e) {
    res.status(500).json({ message: "Error while registering user ", error: e.message });
  }
};

exports.loginUser = async (req, res) => {};

exports.getUserInfo = async (req, res) => {};
