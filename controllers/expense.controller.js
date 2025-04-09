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

exports.getAllExpenses = async (req, res) => {
  const userId = req.user.id;

  try {
    const expense = await Expense.find({ userId }).sort({ date: -1 });
    res.status(200).json(expense);
  } catch (e) {
    res
      .status(500)
      .json({ message: "Error while getting expenses ", error: e.message });
  }
};

exports.deleteExpense = async (req, res) => {
  try {
    await Expense.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Expense deleted successfully" });
  } catch (e) {
    res
      .status(500)
      .json({ message: "Error while deleting expense ", error: e.message });
  }
};

exports.downloadExpensesExcel = async (req, res) => {
  const userId = req.user.id;

  try {
    const expenses = await Expense.find({ userId }).sort({ date: -1 });
    const data = expenses.map((item) => ({
      Source: item.source,
      Amount: item.amount,
      Date: item.date,
    }));

    const wb = xlsx.utils.book_new();
    const ws = xlsx.utils.json_to_sheet(data);

    xlsx.utils.book_append_sheet(wb, ws, "Expense");
    xlsx.writeFile(wb, "Expense Details.xlsx");

    res.download("Expense Details.xlsx");
  } catch (e) {
    res.status(500).json({
      message: "Error while downloading excel sheet ",
      error: e.message,
    });
  }
};
