import React from 'react';

const Header = ({ walletBalance }) => {
  return (
    <header className="header">
      <h1>Expense Tracker</h1>
      <h2>Wallet Balance: ₹{walletBalance}</h2>
    </header>
  );
};

export default Header;
