import React from 'react';
import PropTypes from 'prop-types';

const TotalRewardsTable = ({ totalRewards }) => (
  <table>
    <thead>
      <tr>
        <th>Customer Name</th>
        <th>Total Reward Points</th>
      </tr>
    </thead>
    <tbody>
      {Object.values(totalRewards).map(({ name, points }) => (
        <tr key={name}>
          <td>{name}</td>
          <td>{points}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

TotalRewardsTable.propTypes = {
  totalRewards: PropTypes.object.isRequired,
};

export default TotalRewardsTable;