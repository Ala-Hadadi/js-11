// * ==================================2=====================================

/*
 todo: 1. Take the object from question 1  
 todo: 2. put all the values into an array with 2 ways that you’ve learned
*/
const obj = { number: 6043, age: 21, pt: 96 };
const values = Object.values(obj);

console.log(values);

/////////////////////////////////////////////
const { number, age, pt } = obj;
const final = [number, age, pt];
console.log(final);

/////////////////////////////////////////////
const values2 = [];
for (let key in obj) {
  values2.push(obj[key]);
}

console.log(values2); 
