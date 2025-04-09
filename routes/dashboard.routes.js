const express = require("express");
const { protect } = require("../middleware/auth.middleware");
const { getDashboardData } = require("../controllers/dashboard.controller");

const router = express.Router();

router.get("/data", protect, getDashboardData);

module.exports = router;
