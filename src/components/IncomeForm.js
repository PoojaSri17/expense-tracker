import React, { useState } from 'react';

const IncomeForm = ({ addIncome }) => {
  const [income, setIncome] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addIncome(parseFloat(income));
    setIncome('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="number"
        placeholder="Add Balance"
        value={income}
        onChange={(e) => setIncome(e.target.value)}
        required
      />
      <button type="submit">Add Income</button>
    </form>
  );
};

export default IncomeForm;
