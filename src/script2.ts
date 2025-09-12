let a;
a = 5;
a = "hello";
console.log(a);

let b: string;
b = "Faysal";
b = 10; // Error: Type 'number' is not assignable to type 'string'.
console.log(b);

let arr : string[] = [];
arr.push("Faysal");
arr.push(10); // Error: Argument of type 'number' is not assignable to parameter of type 'string'.
console.log(arr);

let obj : {
    name : string,
    age : number,
    isMarried : boolean,
}
obj = {
    name : "Faysal",
    age : 25,
    isMarried : false,
}
console.log(obj);

//dynamic type
let anyType : any;
anyType = 5;
anyType = "hello";
console.log(anyType);

let arr2 : any[] = [];
arr2.push(5);
arr2.push("hello");
arr2.push(true);
console.log(arr2);