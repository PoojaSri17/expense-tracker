import React from 'react';
import { PieChart, Pie, Cell, Tooltip } from 'recharts';

const PieChartComponent = ({ expenses }) => {
  // Prepare data for the pie chart
  const categoryData = expenses.reduce((acc, expense) => {
    const { category, amount } = expense;
    acc[category] = (acc[category] || 0) + amount;
    return acc;
  }, {});

  const data = Object.keys(categoryData).map((category) => ({
    name: category,
    value: categoryData[category],
  }));

  // Define colors for the pie chart
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#FF3377'];

  return (
    <PieChart width={400} height={400}>
      <Pie
        data={data}
        cx={200}
        cy={200}
        outerRadius={100}
        fill="#8884d8"
        label
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
    </PieChart>
  );
};

export default PieChartComponent;
