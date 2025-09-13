let myFunc: Function;
myFunc = () => {
  console.log("Hello");
};

const myFunc2 = (a: string, b: string) => {
  console.log(`Hello ${a} and ${b}`);
};
myFunc2("Alice", "Bob");
myFunc2("Alice", 5); // Error: Argument of type 'number' is not assignable to parameter of type 'string'.

const myFunc3 = (a: string, b: string) : number => {
  return a + b; // Error: Type 'string' is not assignable to type 'number'
};
console.log(myFunc3("Alice", "Bob"));

