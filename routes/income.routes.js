const express = require("express");
const {
  addIncome,
  getAllIncomes,
  deleteIncome,
  downloadIncomesExcel,
} = require("../controllers/income.controller");
const { protect } = require("../middleware/auth.middleware");

const router = express.Router();

router.post("/add", protect, addIncome);
router.get("/get", protect, getAllIncomes);
router.delete("/delete/:id", protect, deleteIncome);
router.get("/get/download", protect, downloadIncomesExcel);

module.exports = router;
