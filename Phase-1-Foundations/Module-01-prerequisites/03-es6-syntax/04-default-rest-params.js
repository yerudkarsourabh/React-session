//Default parameter
function greet(name, greeting = "Hello") {
    return `${greeting}, ${name}!`;
}
console.log(greet("Alice")); // Output: Hello, Alice!
console.log(greet("Bob", "Hi")); // Output: Hi, Bob!

//Rest parameter
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}   
console.log(sum(1, 2, 3)); // Output: 6
console.log(sum(4, 5, 6, 7)); // Output: 22

function greetAll(greeting, ...names) {
    return `${greeting}, ${names.join(", ")}!`;
}
console.log(greetAll("Hello", "Alice", "Bob", "Charlie")); // Output: Hello, Alice, Bob, Charlie!
console.log(greetAll("Hi", "David", "Eve")); // Output: Hi, David, Eve!