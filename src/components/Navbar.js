// Navbar.js
import React from 'react';
import './Navbar.css';

function Navbar() {
    return (
        <nav className="navbar">
            <h1>Splitwise Clone</h1>
            <ul className="nav-links">
                <li><a href="#expenses">Expenses</a></li>
                <li><a href="#add-expense">Add Expense</a></li>
                <li><a href="#about">About</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;
