// frontend/src/App.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from './components/Navbar';
import AddExpense from './components/AddExpense';
import ExpenseList from './components/ExpenseList';
import './App.css';

const App = () => {
    const [expenses, setExpenses] = useState([]);

    const fetchExpenses = async () => {
        const response = await axios.get('http://localhost:5000/api/expenses');
        setExpenses(response.data);
    };

    useEffect(() => {
        fetchExpenses();
    }, []);

    const handleAddExpense = (newExpense) => {
        setExpenses([...expenses, newExpense]);
    };

    return (
        <div>
            <Navbar />
            <AddExpense onAdd={handleAddExpense} />
            <ExpenseList expenses={expenses} />
        </div>
    );
};

export default App;
