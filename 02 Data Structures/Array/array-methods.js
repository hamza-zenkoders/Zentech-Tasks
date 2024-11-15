let arr = [1, 2, 3, 4];

// push()
arr.push(4);
console.log(arr); 


// pop()
let lastElement = arr.pop();
console.log(arr);
console.log(lastElement);


// shift()
let firstElement = arr.shift();
console.log(arr);
console.log(firstElement); 


// unshift()
arr.unshift(0);
console.log(arr);


// forEach()
arr.forEach((element) => {
  console.log(element);
});


// map()
let doubled = arr.map((num) => num * 2);
console.log(doubled);


// filter()
let evenNumbers = arr.filter((num) => num % 2 === 0);
console.log(evenNumbers);


// reduce()
let sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum);


// includes()
console.log(arr.includes(2));


// indexOf()
console.log(arr.indexOf(2));
