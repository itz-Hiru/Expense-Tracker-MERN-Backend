const express = require("express");
const {
  registerUser,
  loginUser,
  getUserInfo,
} = require("../controllers/auth.controller");
const upload = require("../middleware/upload.middleware");
const { protect } = require("../middleware/auth.middleware");

const router = express.Router();

router.post("/register", registerUser);

router.post("/upload-image", upload.single("image"), (req, res) => {
  if (!req.file) {
    return res.status(404).json("No files choosen for update!");
  }

  const imageURL = `${req.protocol}://${req.get("host")}/uploads/${
    req.file.filename
  }`;
  res.status(200).json({ imageURL });
});

router.post("/login", loginUser);

router.get("/getUser", protect, getUserInfo);

module.exports = router;
