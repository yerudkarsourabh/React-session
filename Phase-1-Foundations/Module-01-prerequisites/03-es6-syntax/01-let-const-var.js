// ---const---(Cannot be reassigned)
const pi = 3.14;
// pi = 3.14159; // This will throw an error because pi is a constant

// ---let---(Can be reassigned)
let radius = 5;
radius = 10; // This is valid because radius is declared with let
console.log(radius); // Output: 10

//block scope example
{
    const message = "Hello, World!";
    console.log("inside block:", message); // Output: Hello, World!
}
//console.log("outside block:", message); // This will throw an error because message is not defined outside the block

function testScope() {
    if (true) {
    let localVariable = "I am local to this function";
    console.log(localVariable); // Output: I am local to this function
    }
    return localVariable; // This will throw an error because localVariable is not defined outside the if block
}
//console.log(localVariable); // This will throw an error because localVariable is not defined in this scope
//console.log(testScope()); // This will throw an error because localVariable is not accessible here

// var pollutes the globel object in non-module scripts. It is not block scoped and can be redeclared and updated.

var x =1;
console.log(x); // Output: 1
console.log(window.x); // Output: 1 (in browsers, var creates a property on the global object)

//Rule of thumb: Use const by default, use let if you need to reassign, and avoid using var unless you have a specific reason to do so.