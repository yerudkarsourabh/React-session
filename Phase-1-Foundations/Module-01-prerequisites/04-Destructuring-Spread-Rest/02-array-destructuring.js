const rgb = [255, 200, 0];
console.log(rgb[0]); // 255
console.log(rgb[1]); // 200
console.log(rgb[2]); // 0

//Basic array destructuring
const [red, green, blue] = rgb;
console.log("Destructured red:", red); // 255
console.log("Destructured green:", green); // 200
console.log("Destructured blue:", blue); // 0


//Skipping elements
const [r, , b] = rgb;
console.log("Destructured r:", r); // 255
console.log("Destructured b:", b); // 0

//Rest operator
const [r1, ...rest] = rgb;
console.log("Destructured r1:", r1); // 255
console.log("Rest of the array:", rest); // [200, 0]


//Default values
const [r2, g2, b2, a = 1] = rgb;
console.log("Destructured r2:", r2); // 255
console.log("Destructured g2:", g2); // 200
console.log("Destructured b2:", b2); // 0
console.log("Destructured a (default):", a); // 1


//Swapping variables
let x = 1;
let y = 2;
console.log("Before swapping: x =", x, ", y =", y); // Before swapping: x = 1 , y = 2
[x, y] = [y, x];
console.log("After swapping: x =", x, ", y =", y); // After swapping: x = 2 , y = 1
