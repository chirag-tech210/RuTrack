const express = require('express');
const Expense = require('../models/Expense');
const auth = require('../middleware/auth');

const router = express.Router();

// Create expense
router.post('/', auth, async (req, res) => {
  try {
    const { type, category, amount, date, note } = req.body;
    const expense = new Expense({
      user: req.user,
      type,
      category,
      amount,
      date,
      note
    });
    await expense.save();
    res.status(201).json(expense);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Get all expenses for user
router.get('/', auth, async (req, res) => {
  try {
    const expenses = await Expense.find({ user: req.user }).sort({ date: -1 });
    res.json(expenses);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Update expense
router.put('/:id', auth, async (req, res) => {
  try {
    const expense = await Expense.findOneAndUpdate(
      { _id: req.params.id, user: req.user },
      req.body,
      { new: true }
    );
    if (!expense) return res.status(404).json({ message: 'Expense not found' });
    res.json(expense);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Delete expense
router.delete('/:id', auth, async (req, res) => {
  try {
    const expense = await Expense.findOneAndDelete({ _id: req.params.id, user: req.user });
    if (!expense) return res.status(404).json({ message: 'Expense not found' });
    res.json({ message: 'Expense deleted' });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Get stats (monthly average, breakdown)
router.get('/stats/monthly', auth, async (req, res) => {
  try {
    const expenses = await Expense.find({ user: req.user });
    // Group by month and calculate average
    const stats = {};
    expenses.forEach(exp => {
      const month = new Date(exp.date).toLocaleString('default', { year: 'numeric', month: '2-digit' });
      if (!stats[month]) stats[month] = { total: 0, count: 0 };
      stats[month].total += exp.amount;
      stats[month].count++;
    });
    const monthly = Object.entries(stats).map(([month, { total, count }]) => ({
      month,
      average: count ? (total / count) : 0,
      total
    }));
    res.json({ monthly });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router; 