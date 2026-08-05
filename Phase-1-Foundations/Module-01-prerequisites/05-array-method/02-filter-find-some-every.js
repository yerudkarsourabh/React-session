const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const products = [
    {id: 1, name: "Laptop", price: 1000, category: "Electronics" },
    {id: 2, name: "Phone", price: 500, category: "Electronics" },
    {id: 3, name: "Shirt", price: 30, category: "Clothing" },
    {id: 4, name: "Shoes", price: 80, category: "Clothing" },
    {id: 5, name: "Book", price: 20, category: "Books" },
];

//filter

const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // Output: [2, 4, 6, 8, 10]

const expensiveProducts = products.filter(product => product.price > 100);
console.log(expensiveProducts); // Output: [{id: 1, name: "Laptop", price: 1000, category: "Electronics"}]

//find
const firstEvenNumber = numbers.find(num => num % 2 === 0);
console.log(firstEvenNumber); // Output: 2

const firstExpensiveProduct = products.find(product => product.price > 100);
console.log(firstExpensiveProduct); // Output: {id: 1, name: "Laptop", price: 1000, category: "Electronics"}


//findIndex
const firstEvenNumberIndex = numbers.findIndex(num => num % 2 === 0);
console.log(firstEvenNumberIndex); // Output: 1

const firstExpensiveProductIndex = products.findIndex(product => product.price > 100);
console.log(firstExpensiveProductIndex); // Output: 0

//some
const hasEvenNumber = numbers.some(num => num % 2 === 0);
console.log(hasEvenNumber); // Output: true

const hasExpensiveProduct = products.some(product => product.price > 100);
console.log(hasExpensiveProduct); // Output: true

//every
const allEvenNumbers = numbers.every(num => num % 2 === 0);
console.log(allEvenNumbers); // Output: false

const allExpensiveProducts = products.every(product => product.price > 100);
console.log(allExpensiveProducts); // Output: false
