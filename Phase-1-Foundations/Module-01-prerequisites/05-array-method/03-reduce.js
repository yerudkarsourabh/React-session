const numbers = [1, 2, 3, 4, 5];

//reduce
const sum = numbers.reduce((accumulator, current) => accumulator + current, 0);
console.log(sum); // Output: 15


const cart = [
    { id: 1, name: "Laptop", price: 1000, quantity: 2 },
    { id: 2, name: "Phone", price: 500, quantity: 3 },
    { id: 3, name: "Shirt", price: 30, quantity: 5 },
];

const totalPrice = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
console.log(totalPrice); // Output: 3650