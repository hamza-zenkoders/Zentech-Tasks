
// creating a set
let numbers = new Set([1, 2, 3, 4]);
console.log(numbers); 


// add()
numbers.add(1);
numbers.add(2);
console.log(numbers); // Set { 1, 2 }


// has()
console.log(numbers.has(2)); 
console.log(numbers.has(4)); 


// delete()
numbers.delete(2);
console.log(numbers); 


// clear()
numbers.clear();
console.log(numbers);


// forEach() with Set
numbers.forEach((value) => {
  console.log(value); 
});


// size()
console.log(numbers.size);


// converting Set to Array
let numbersArray = Array.from(numbers);
console.log(numbersArray); 


// Set from String
let str = 'aabbccddeeff';
let uniqueChars = new Set(str);
console.log(uniqueChars);