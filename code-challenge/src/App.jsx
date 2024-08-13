import { useState , useEffect} from 'react';
import transactionlist from "./components/transactionlist.jsx";
import transactionform from './components/transactionform.jsx';
import './App.css';

// The main component for fecthing transaction data 
function App() {
  const [transactions, setTransactions] = useState([]);
  const [search, setSearch] = useState('');

  // Fetch transactions data from my db.json
  useEffect(() => {
    fetch('http://localhost:3000/transactions')
      .then((response) => response.json())
      .then((data) => setTransactions(data))
      .catch((error) => console.error('Error fetching transactions:', error));
  }, []);

  // Addition of a new transaction
  const handleAddTransaction = (transaction) => {
    setTransactions([...transactions, { ...transaction, id: Date.now() }]);
  };

  // Filter transactions based on description 
  const filteredTransactions = transactions.filter((transaction) =>
    transaction.description.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="App">
      <h1>Bank of Flatiron</h1>
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