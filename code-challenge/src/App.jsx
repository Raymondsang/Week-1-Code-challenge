import { useState, useEffect } from 'react';
import TransactionList from './components/TransactionList.jsx';
import TransactionForm from './components/TransactionForm.jsx';
import './App.css';

// The main component for fetching transaction data 
function App() {
  const [transactions, setTransactions] = useState([]);
  const [search, setSearch] = useState('');

  // Fetch transactions data from my db.json
  useEffect(() => {
    fetch('json-server --watch db.json')
      .then((response) => response.json())
      .then((data) => setTransactions(data))
      .catch((error) => console.error('Error fetching transactions:', error));
  }, []);

  // Addition of a new transaction
  const handleAddTransaction = (transaction) => {
    // Assuming a POST request would be needed here
    fetch('json-server --watch db.json', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ...transaction, id: Date.now() }),
    })
    .then((response) => response.json())
    .then((newTransaction) => {
      setTransactions([...transactions, newTransaction]);
    })
    .catch((error) => console.error('Error adding transaction:', error));
  };

  // Filter transactions based on description 
  const filteredTransactions = transactions.filter((transaction) =>
    transaction.description.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="App">
      <h1 className="heading">Bank of Flatiron</h1>
      <TransactionForm onAddTransaction={handleAddTransaction} />
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search by description"
      />
      <TransactionList transactions={filteredTransactions} />
    </div>
  );
}

export default App;
