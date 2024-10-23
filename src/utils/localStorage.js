export const persistExpenses = (expenses) => {
    localStorage.setItem('expenses', JSON.stringify(expenses));
  };
  
  export const persistBalance = (balance) => {
    localStorage.setItem('walletBalance', balance);
  };
  
  export const getExpenses = () => {
    const storedExpenses = localStorage.getItem('expenses');
    return storedExpenses ? JSON.parse(storedExpenses) : [];
  };
  
  export const getBalance = () => {
    return parseFloat(localStorage.getItem('walletBalance'));
  };
  