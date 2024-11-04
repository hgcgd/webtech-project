// frontend/src/components/ExpenseList.js
import React from 'react';

const ExpenseList = ({ expenses }) => {
    return (
        <ul>
            {expenses.map((expense) => (
                <li key={expense._id}>
                    {expense.title}: ${expense.amount.toFixed(2)}
                </li>
            ))}
        </ul>
    );
};

export default ExpenseList;
