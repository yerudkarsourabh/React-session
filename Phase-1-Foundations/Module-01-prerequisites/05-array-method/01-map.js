//map

const numbers = [1, 2, 3, 4, 5];

const doubled = numbers.map(function(num) {
  return num * 2;
});
console.log(doubled); // Output: [2, 4, 6, 8, 10]

//basic transformation using map

const squares = numbers.map(num => num * num);
console.log(squares); // Output: [1, 4, 9, 16, 25]

//transform with array of objects using map

const users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' }
];

const userNames = users.map(user => user.name.toUpperCase());
console.log(userNames); // Output: ['ALICE', 'BOB', 'CHARLIE']

//list items using map
const listItem  = numbers.map(num => `<li>${num}</li>`);
console.log(listItem); // Output: ['<li>1</li>', '<li>2</li>', '<li>3</li>', '<li>4</li>', '<li>5</li>']


//forEach

const resultForEach = numbers.forEach(num => console.log(num * 2)); // Output: 2, 4, 6, 8, 10
console.log(resultForEach); // Output: undefined (forEach does not return a new array)
