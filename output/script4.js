const userDetails = (id, user) => {
    console.log(id, user.name, user.age);
};
userDetails(123, { name: "John", age: 30 });
export {};
