
// creating an object
let person = {
  name: "John",
  age: 30,
  job: "Developer",
};

console.log(person);


// creating an object using new
let employee = new Object();
employee.name = 'John';
employee.age = 30;
employee.job = 'Developer';
console.log(employee);


// Accessing properties
console.log(person.name);
console.log(person['age']); 


// Updating properties
person.job = 'Developer'; 
person.age = 31;     
console.log(person); 


// deleting properties
delete person.job; 
console.log(person); 


// object destructuring
let { name, age } = person;
console.log(name); 
console.log(age);  


// Object.keys()
let keys = Object.keys(person);
console.log(keys);


// Object.values()
let values = Object.values(person);
console.log(values);


// Object.entries()
let entries = Object.entries(person);
console.log(entries); 