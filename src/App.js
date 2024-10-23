import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import AddExpenseForm from './components/AddExpenseForm';
import ExpenseList from './components/ExpenseList';
import ExpenseSummary from './components/ExpenseSummary';
import IncomeForm from './components/IncomeForm';
import { persistExpenses, persistBalance, getExpenses, getBalance } from './utils/localStorage';

const App = () => {
  const [expenses, setExpenses] = useState(getExpenses());
  const [walletBalance, setWalletBalance] = useState(getBalance() || 5000);

  useEffect(() => {
    persistExpenses(expenses);
  }, [expenses]);

  useEffect(() => {
    persistBalance(walletBalance);
  }, [walletBalance]);

  const addExpense = (expense) => {
    if (walletBalance < expense.amount) {
      alert("You cannot spend more than your available wallet balance!");
      return;
    }
    setExpenses([...expenses, expense]);
    setWalletBalance(walletBalance - expense.amount);
  };

  const addIncome = (amount) => {
    setWalletBalance(walletBalance + amount);
  };

  const deleteExpense = (index) => {
    const updatedExpenses = expenses.filter((_, i) => i !== index);
    setExpenses(updatedExpenses);
  };

  return (
    <div className="app">
      <Header walletBalance={walletBalance} />
      <IncomeForm addIncome={addIncome} />
      <AddExpenseForm addExpense={addExpense} />
      <ExpenseList expenses={expenses} deleteExpense={deleteExpense} />
      <ExpenseSummary expenses={expenses} />
    </div>
  );
};

export default App;
