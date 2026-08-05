// import {pi, add} from './utilities.js'; // Named imports
// import multiply from './utilities.js'; // Default import

import multiply, { pi, add } from './utilities.js'; // Importing both named and default exports

console.log("Value of pi:", pi); // Output: Value of pi: 3.14
console.log("Sum of 2 and 3:", add(2, 3));
console.log("Product of 2 and 3:", multiply(2, 3));