//Arrays

//combining arrays
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const combinedArray = [...arr1, ...arr2];
console.log("Combined Array:", combinedArray); // [1, 2, 3, 4, 5, 6]

//copying arrays
const originalArray = [1, 2, 3];
const copiedArray = originalArray;
copiedArray[0] = 10; // Modifying the copied array
console.log("Original Array:", originalArray); // [10, 2, 3]
console.log("Copied Array:", copiedArray); // [10, 2, 3]

const originalArray2 = [1, 2, 3];
const copiedArray2 = [...originalArray2];
console.log("Original Array 2:", originalArray2); // [1, 2, 3]
console.log("Copied Array 2:", copiedArray2); // [1, 2, 3]

//Insert elements into an array
const arr3 = [1, 2, 3];
const newArr = [0, ...arr3, 4];
console.log("New Array:", newArr); // [0, 1, 2, 3, 4]

//Objects

//combining objects
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

const combinedObj = { ...obj1, ...obj2 };
console.log("Combined Object:", combinedObj); // { a: 1, b: 2, c: 3, d: 4 }

//copying objects
const originalObj = { a: 1, b: 2 };
const copiedObj = { ...originalObj };
copiedObj.a = 10;
console.log("Original Object:", originalObj); // { a: 1, b: 2 }
console.log("Copied Object:", copiedObj); // { a: 10, b: 2 }

//Insert properties into an object
const obj3 = { a: 1, b: 2 };
const newObj = { ...obj3, c: 3 };
console.log("New Object:", newObj); // { a: 1, b: 2, c: 3 }