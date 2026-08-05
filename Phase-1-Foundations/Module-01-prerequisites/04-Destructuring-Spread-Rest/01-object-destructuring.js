const user = {
  name: "John Doe",
  age: 30,
  address: {
    street: "123 Main St",
    city: "Anytown",
    country: "USA"
  }
};

console.log("Dot notation:", user.name); // Output: John Doe
console.log("Bracket notation:", user["age"]); // Output: 30

//Basic object destructuring
const { name, age, address } = user;
console.log("Destructured name:", name); // Output: John Doe
console.log("Destructured age:", age); // Output: 30
console.log("Destructured address:", address); // Output: { street: "123 Main St", city: "Anytown", country: "USA" }

//Nested object destructuring
const {street, city, country} = user.address;
console.log("Destructured street:", street);  // Output: 123 Main St

const { address: { street, city, country } } = user;
console.log("Destructured street:", street); // Output: 123 Main St
console.log("Destructured city:", city);// Output: Anytown
console.log("Destructured country:", country); // Output: USA

//Rename(property:newName)
const { name: fullName, age: userAge } = user;
console.log("Renamed fullName:", fullName);
console.log("Renamed userAge:", userAge);

//Default values(use only when the property is undefined)
const { name: userName, gender = "Not specified" } = user;
console.log("User name:", userName); // Output: John Doe
console.log("User gender:", gender); // Output: Not specified

//Function parameter destructuring
function displayUserInfo(userobj) {
  return `Name: ${userobj.name}, Age: ${userobj.age}, Address: ${userobj.address.street}, ${userobj.address.city}, ${userobj.address.country}`;
}
console.log(displayUserInfo(user)); // Output: Name: John Doe, Age: 30, Address: 123 Main St, Anytown, USA


function displayUserInfoDestructured({ name, age, address: { street, city, country } }) {
  return `Name: ${name}, Age: ${age}, Address: ${street}, ${city}, ${country}`;
}
console.log(displayUserInfoDestructured(user)); // Output: Name: John Doe, Age: 30, Address: 123 Main St, Anytown, USA