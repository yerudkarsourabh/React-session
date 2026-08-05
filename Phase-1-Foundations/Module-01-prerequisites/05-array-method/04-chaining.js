const orders = [
  { id: 1, name: 'Laptop', amount: 25000, quantity: 2, status: 'completed' },
  { id: 2, name: 'Phone', amount: 1000, quantity: 3, status: 'pending' },
  { id: 3, name: 'Shirt', amount: 300, quantity: 1, status: 'completed' },
  { id: 4, name: 'Book', amount: 150, quantity: 2, status: 'pending' },
];

//calculate paid amount using reduce and filter
const paidAmount = orders
  .filter(order => order.status === 'completed')
  .reduce((total, order) => total + (order.amount * order.quantity), 0);
console.log(paidAmount); // Output: 50000