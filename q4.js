// ? 4. Change two or more values of this object .
// todo : one of the values that you change must be the skills property // example: ['python', 'css', 'js']

const obj2 = {
  id: "kd455",
  age: 24,
  username: "john2000",
  skills: ["html", "css", "js"],
};

//  !   Answer:
// const { id, age, username, skills } = obj2;

// const newObj = {
//   id: "newId",
//   age: 21,
//   username,
//   skills: ["python", "css", "js"],
// };

// console.log(newObj);

///////////////////////////////////// or

let { id, age, username, skills } = obj2;
age = 32;
obj2.age = age;
skills[2] = "C++";
console.log(obj2);
