const xlsx = require("xlsx");
const Expense = require("../models/Expense.model");

exports.addExpense = async (req, res) => {
  const userId = req.user.id;

  try {
    const { icon, source, amount, date } = req.body;

    if (!source || !amount || !date) {
      return res
        .status(404)
        .json({ message: "All fields are required to add new expense!" });
    }
    const newExpense = new Expense({
      userId,
      icon,
      source,
      amount,
      date: new Date(date),
    });

    await newExpense.save();
    res.status(200).json(newExpense);
  } catch (e) {
    res
      .status(500)
      .json({ message: "Error while adding expense ", error: e.message });
  }
};

exports.getAllExpenses = async (req, res) => {};

exports.deleteExpense = async (req, res) => {};

exports.downloadExpensesExcel = async (req, res) => {};
