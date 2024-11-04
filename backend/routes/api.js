// backend/routes/api.js
const express = require('express');
const router = express.Router();
const Expense = require('../models/expenseModel');

// Create expense
router.post('/expenses', async (req, res) => {
    const { title, amount, date } = req.body;
    const expense = new Expense({ title, amount, date });
    try {
        await expense.save();
        res.status(201).json(expense);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Get expenses
router.get('/expenses', async (req, res) => {
    try {
        const expenses = await Expense.find();
        res.status(200).json(expenses);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
