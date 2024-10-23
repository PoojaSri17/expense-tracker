import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, Legend } from 'recharts';

const BarChartComponent = ({ expenses }) => {
  // Prepare data for the bar chart
  const categoryData = expenses.reduce((acc, expense) => {
    const { category, amount } = expense;
    acc[category] = (acc[category] || 0) + amount;
    return acc;
  }, {});

  const data = Object.keys(categoryData).map((category) => ({
    name: category,
    amount: categoryData[category],
  }));

  return (
    <BarChart width={500} height={300} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="amount" fill="#82ca9d" />
    </BarChart>
  );
};

export default BarChartComponent;
