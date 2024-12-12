import React from 'react';
import PropTypes from 'prop-types';

const TransactionsTable = ({ transactions }) => (
  <table>
    <thead>
      <tr>
        <th>Transaction ID</th>
        <th>Customer Name</th>
        <th>Purchase Date</th>
        <th>Product Purchased</th>
        <th>Price</th>
        <th>Reward Points</th>
      </tr>
    </thead>
    <tbody>
      {transactions.map(({ id, name, date, product, price }) => (
        <tr key={id}>
          <td>{id}</td>
          <td>{name}</td>
          <td>{new Date(date).toLocaleDateString()}</td>
          <td>{product}</td>
          <td>${price.toFixed(2)}</td>
          
        </tr>
      ))}
    </tbody>
  </table>
);

TransactionsTable.propTypes = {
  transactions: PropTypes.array.isRequired,
};

export default TransactionsTable;