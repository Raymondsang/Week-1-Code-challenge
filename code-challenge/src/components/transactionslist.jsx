import React from 'react';

const transactionlist = ({ transactions }) => {
  return (
    <div>
      <h2>Transaction List</h2>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Description</th>
            <th>Category</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
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

export default transactionlist;