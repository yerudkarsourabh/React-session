// Tranditional function
function add(a, b) {
  return a + b;
}
console.log(add(2, 3)); // Output: 5

// Arrow function
const add2 = (a, b) => {
    return a + b;
}
console.log(add2(2, 3)); // Output: 5

// Arrow function with implicit return
const add3 = (a, b) => a + b;
console.log(add3(2, 3)); // Output: 5

//Arrow function with explicit return and multiple lines
const add4 = (a, b) => {
    a = a + 10;
    b = b + 10;
    return a + b;
}
console.log(add4(2, 3)); // Output: 25

const user = ()=>({
    name: "John Doe",
    age: 30
});
console.log("user",user()); // Output: { name: 'John Doe', age: 30 }

const counter={
    count: 0,
    incrementNormal(){
        setTimeout(function(){
            this.count++;
            console.log("Normal function:",this.count); // Output: NaN (this refers to the global object)
        },0);
    },
    incrementArrow(){
        setTimeout(()=>{
            this.count++;
            console.log("Arrow function:",this.count); // Output: 1 (this refers to the counter object)
        },0);
    }
}

counter.incrementNormal();
counter.incrementArrow();
