import React from 'react';

const TransactionList = ({ transactions }) => {
  return (
    <div>
      <h2 className="transaction-list">Transaction List</h2>
      <table className="table">
        <thead className="thead">
          <tr>
            <th>Date</th>
            <th>Description</th>
            <th>Category</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody className="tbody">
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.date}</td>
              <td>{transaction.description}</td>
              <td>{transaction.category}</td>
              <td>{Number(transaction.amount).toFixed(2)}</td> 
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionList;