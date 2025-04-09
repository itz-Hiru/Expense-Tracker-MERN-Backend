const express = require("express");
const {
  addExpense,
  getAllExpenses,
  deleteExpense,
  downloadExpensesExcel,
} = require("../controllers/expense.controller");
const { protect } = require("../middleware/auth.middleware");

const router = express.Router();

router.post("/add", protect, addExpense);
router.get("/get", protect, getAllExpenses);
router.delete("/delete/:id", protect, deleteExpense);
router.get("/get/download", protect, downloadExpensesExcel);

module.exports = router;
