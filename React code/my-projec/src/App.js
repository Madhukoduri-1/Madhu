import React, { useState, useEffect } from 'react';
import { fetchTransactions } from './data/mockApi';
import {
  aggregateMonthlyRewards,
  calculateTotalRewards,
} from './utils/rewardPointsCalculator';
import TransactionsTable from './components/TransactionsTable';
import MonthlyRewardsTable from './components/MonthlyRewardsTable';
import TotalRewardsTable from './components/TotalRewardsTable';
import LoadingIndicator from './components/LoadingIndicator';

const App = () => {
  const [transactions, setTransactions] = useState([]);
  const [monthlyRewards, setMonthlyRewards] = useState({});
  const [totalRewards, setTotalRewards] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchTransactions();
      setTransactions(data);

      const aggregated = aggregateMonthlyRewards(data);
      setMonthlyRewards(aggregated);

      const totals = calculateTotalRewards(aggregated);
      setTotalRewards(totals);
      setLoading(false);
    };

    fetchData();
  }, []);

  if (loading) return <LoadingIndicator />;

  return (
    <div>
      <h1>Customer Rewards Program</h1>
      <h2>Transactions</h2>
      <TransactionsTable transactions={transactions} />
      <h2>Monthly Rewards</h2>
      <MonthlyRewardsTable monthlyRewards={monthlyRewards} />
      <h2>Total Rewards</h2>
      <TotalRewardsTable totalRewards={totalRewards} />
    </div>
  );
};

export default App;
