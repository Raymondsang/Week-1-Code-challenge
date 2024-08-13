import React, { useState } from 'react';
// This component contains a form for adding new transactions
function TransactionForm({ onAddTransaction }) {
  // State variables for form fields
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState('');

  // Handling  form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Call the function passed through props to add the new transaction
    onAddTransaction({
      date,
      description,
      category,
      amount: parseFloat(amount),
    });
    
    setDate('');
    setDescription('');
    setCategory('');
    setAmount('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        placeholder="Date (YYYY-MM-DD)"
        required
      />
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        required
      />
      <input
        type="text"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        placeholder="Category"
        required
      />
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Amount"
        required
      />
      <button type="submit">Add Transaction</button>
    </form>
  );
}

export default TransactionForm;