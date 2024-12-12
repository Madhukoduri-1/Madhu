import React from 'react';
import PropTypes from 'prop-types';

const MonthlyRewardsTable = ({ monthlyRewards }) => (
  <table>
    <thead>
      <tr>
        <th>Customer ID</th>
        <th>Name</th>
        <th>Month</th>
        <th>Year</th>
        <th>Reward Points</th>
      </tr>
    </thead>
    <tbody>
      {Object.values(monthlyRewards).map(({ customerId, name, month, year, points }) => (
        <tr key={`${customerId}-${month}-${year}`}>
          <td>{customerId}</td>
          <td>{name}</td>
          <td>{month}</td>
          <td>{year}</td>
          <td>{points}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

MonthlyRewardsTable.propTypes = {
  monthlyRewards: PropTypes.object.isRequired,
};

export default MonthlyRewardsTable;