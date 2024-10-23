import React from 'react';

const ExpenseList = ({ expenses, deleteExpense }) => {
  return (
    <ul>
      {expenses.map((expense, index) => (
        <li key={index}>
          {expense.title} - ₹{expense.amount} - {expense.category} - {expense.date}
          <button onClick={() => deleteExpense(index)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default ExpenseList;
