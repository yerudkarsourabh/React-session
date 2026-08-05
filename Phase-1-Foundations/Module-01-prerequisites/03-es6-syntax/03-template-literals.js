// interpolation with ${}
const name = "John";
const age = 30;
console.log("My name is " + name + " and I am " + age + " years old."); // Output: My name is John and I am 30 years old.
console.log(`My name is ${name} and I am ${age} years old.`); // Output: My name is John and I am 30 years old.

//Expression evaluation
const amount = 1000;
const discount = 0.1;
console.log(`The final price after discount is ${amount - (amount * discount)}`); // Output: The final price after discount is 900

// multiline strings
const message = `This is a 
multiline
string.`;
console.log(message); 
// Output: This is a 
// multiline
// string.

// Ternary operator
const isLoggedIn = true;
console.log(`User is ${isLoggedIn ? "logged in" : "not logged in"}`); // Output: User is logged in