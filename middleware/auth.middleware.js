const jwt = require("jsonwebtoken");
const User = require("../models/User.model");

exports.protect = async (req, res, next) => {
  let token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res
      .status(404)
      .json({ message: "Not authorized, couldn't found the token" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decoded.id).select("-password");
    next();
  } catch (e) {
    res
      .status(500)
      .json({ message: "Error while searching token ", error: e.message });
  }
};
