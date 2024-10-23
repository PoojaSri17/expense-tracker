import React from 'react';
import PieChart from '../charts/PieChart';
import BarChart from '../charts/BarChart';

const ExpenseSummary = ({ expenses }) => {
  return (
    <div>
      <h2>Expense Summary</h2>
      <PieChart expenses={expenses} />
      <BarChart expenses={expenses} />
    </div>
  );
};

export default ExpenseSummary;
