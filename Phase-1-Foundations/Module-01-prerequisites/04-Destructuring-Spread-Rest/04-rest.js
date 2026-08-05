const props = {
  variant: "primary",
  size: "medium",
  disabled: false,
  onClick: () => {
    console.log("Button clicked");
  } 
};

const{variant, size, ...restProps} = props;
console.log("Variant:", variant); // Output: primary
console.log("Size:", size);// Output: medium
console.log("Rest of the properties:", restProps); // Output: { disabled: false, onClick: [Function: onClick] }

//react use case example
// function Button({ variant, size, ...rest }) {
//     return (
//         <button variant={variant} size={size} {...rest}>
//             Click me
//         </button>
//     );
// }

//Function
function sum(a, b, ...numbers) {
  let total = a + b;
    return numbers.reduce((acc, curr) => acc + curr, total); 
}

console.log("Sum of 1, 2, 3, 4:", sum(1, 2, 3, 4));

//arrays
const numbers = [1, 2, 3, 4, 5];
const [first, second, ...restNumbers] = numbers;
console.log("First:", first); // 1
console.log("Second:", second); // 2
console.log("Rest of the numbers:", restNumbers); // [3, 4, 5]
