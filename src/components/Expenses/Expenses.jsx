import React, { useState } from "react";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpenseItem from "./ExpenseItem";
import './Expenses.css';
function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState('2020');

    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
    };

    const filteredExpenses = props.items.filter(expense => expense.date.getFullYear().toString() === filteredYear);

    let expensesContent = <p>No expenses found.</p>;
    if(filteredExpenses.length > 0) {
        expensesContent = filteredExpenses.map(expense => (      // {[ <Card /> , <Card />]}
            <ExpenseItem
                key={expense.id}
                title={expense.title} 
                amount={expense.amount} 
                date={expense.date} 
            />
            ))
    }

    return (
        <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
            {expensesContent}
        </Card>
    );
}

export default Expenses;