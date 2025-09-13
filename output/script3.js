let myFunc;
myFunc = () => {
    console.log("Hello");
};
const myFunc2 = (a, b) => {
    console.log(`Hello ${a} and ${b}`);
};
myFunc2("Alice", "Bob");
myFunc2("Alice", 5); // Error: Argument of type 'number' is not assignable to parameter of type 'string'.
const myFunc3 = (a, b) => {
    return a + b; // Error: Type 'string' is not assignable to type 'number'
};
console.log(myFunc3("Alice", "Bob"));
export {};
