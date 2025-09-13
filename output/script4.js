const userDetails = (id, user) => {
    console.log(id, user.name, user.age);
};
userDetails(123, { name: "John", age: 30 });
//function structutre
let userDetail;
userDetail = (id, userInfo) => {
    console.log(`ID is ${id} and name is ${userInfo.name} and age is ${userInfo.age}`);
};
userDetail(456, { name: "Alice", age: 25 });
export {};
