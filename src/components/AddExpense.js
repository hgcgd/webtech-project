// frontend/src/components/AddExpense.js
import React, { useState } from 'react';
import axios from 'axios';

const AddExpense = ({ onAdd }) => {
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newExpense = { title, amount: parseFloat(amount) };
        const response = await axios.post('http://localhost:5000/api/expenses', newExpense);
        onAdd(response.data);
        setTitle('');
        setAmount('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Expense Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
            />
            <input
                type="number"
                placeholder="Amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                required
            />
            <button type="submit">Add Expense</button>
        </form>
    );
};

export default AddExpense;
