type myType = string | number;
type userType = { name: string; age: number };

const userDetails = (id: myType, user: userType) => {
  console.log(id, user.name, user.age);
};
userDetails(123, { name: "John", age: 30 });


//function structutre
let userDetail : (id:myType, user: userType) => void;

userDetail = (id: myType,userInfo:userType) => {
    console.log(`ID is ${id} and name is ${userInfo.name} and age is ${userInfo.age}`);
}
userDetail(456, {name: "Alice", age: 25});