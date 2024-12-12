export const calculatePoints = (price) => {
    if (price > 100) {
      return 2 * (price - 100) + 1 * 50;
    } else if (price > 50) {
      return 1 * (price - 50);
    }
    return 0;
  };
  
  export const aggregateMonthlyRewards = (transactions) => {
    return transactions.reduce((acc, { customerId, name, date, price }) => {
      const points = calculatePoints(price);
      const [year, month] = date.split('-');
      const key = `${customerId}-${month}-${year}`;
  
      if (!acc[key]) {
        acc[key] = { customerId, name, month, year, points: 0 };
      }
      acc[key].points += points;
  
      return acc;
    }, {});
  };
  
  export const calculateTotalRewards = (monthlyRewards) => {
    return Object.values(monthlyRewards).reduce((acc, { customerId, name, points }) => {
      if (!acc[customerId]) {
        acc[customerId] = { name, points: 0 };
      }
      acc[customerId].points += points;
      return acc;
    }, {});
  };
  