const xlsx = require("xlsx");
const Income = require("../models/Income.model");

exports.addIncome = async (req, res) => {
  const userId = req.user.id;

  try {
    const { icon, source, amount, date } = req.body;

    if (!source || !amount || !date) {
      return res
        .status(404)
        .json({ message: "All fields are required to add new income!" });
    }
    const newIncome = new Income({
      userId,
      icon,
      source,
      amount,
      date: new Date(date),
    });

    await newIncome.save();
    res.status(200).json(newIncome);
  } catch (e) {
    res
      .status(500)
      .json({ message: "Error while adding income ", error: e.message });
  }
};

exports.getAllIncomes = async (req, res) => {
  const userId = req.user.id;

  try {
    const income = await Income.find({ userId }).sort({ date: -1 });
    res.status(200).json(income);
  } catch (e) {
    res
      .status(500)
      .json({ message: "Error while getting incomes ", error: e.message });
  }
};

exports.deleteIncome = async (req, res) => {
  try {
    await Income.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Income deleted successfully" });
  } catch (e) {
    res
      .status(500)
      .json({ message: "Error while deleting income ", error: e.message });
  }
};

exports.downloadIncomesExcel = async (req, res) => {
  const userId = req.user.id;

  try {
    const incomes = await Income.find({ userId }).sort({ date: -1 });
    const data = incomes.map((item) => ({
      Source: item.source,
      Amount: item.amount,
      Date: item.date,
    }));

    const wb = xlsx.utils.book_new();
    const ws = xlsx.utils.json_to_sheet(data);

    xlsx.utils.book_append_sheet(wb, ws, "Income");
    xlsx.writeFile(wb, "Income Details.xlsx");

    res.download("Income Details.xlsx");
  } catch (e) {
    res.status(500).json({
      message: "Error while downloading excel sheet ",
      error: e.message,
    });
  }
};
