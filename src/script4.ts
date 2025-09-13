type myType = string | number;
type userType = { name: string; age: number };

const userDetails = (id: myType, user: userType) => {
  console.log(id, user.name, user.age);
};
userDetails(123, { name: "John", age: 30 });

