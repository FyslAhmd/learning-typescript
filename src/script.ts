console.log("Faysal");
const country = "I love Bangladesh";
console.log(country);

let playerName = "Faysal";
console.log(playerName);

playerName = 34;  //error -> playerName should be string
// console.log(playerName);

let age;
age = 25;
console.log(age);

age = "Twenty five";
console.log(age);

function multiply(a: number, b: number) {
  return a * b;
}
console.log(multiply(2, 3));
console.log(multiply('Faysal', 3)); // error -> a should be number

let fruits = ["Apple", "Banana", "Orange"];
fruits.push("Mango");
fruits.push(25); //error -> fruits should be string array

console.log(fruits);

let person = {
    name: "Faysal",
    age: 25,
    isStudent: true
}
person.name = 34; // error -> name should be string
person.country = "Bangladesh"; // error -> country is not defined in person object
console.log(person);