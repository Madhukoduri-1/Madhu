export const fetchTransactions = async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          { id: 1, customerId: 101, name: 'John Doe', date: '2023-12-15', product: 'Laptop', price: 120.5 },
          { id: 2, customerId: 102, name: 'Jane Smith', date: '2023-12-20', product: 'Phone', price: 80 },
          { id: 3, customerId: 101, name: 'John Doe', date: '2024-01-10', product: 'Tablet', price: 150 },
          { id: 4, customerId: 103, name: 'Emily Davis', date: '2024-01-25', product: 'Monitor', price: 200 },
          { id: 5, customerId: 102, name: 'Jane Smith', date: '2024-02-05', product: 'Keyboard', price: 55.3 },
        ]);
      }, 1000);
    });
  };