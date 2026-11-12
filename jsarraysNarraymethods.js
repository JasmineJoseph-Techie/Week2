
 // JavaScript Arrays and Array Methods

// 1. Creating an Array
let fruits = ["Apple", "Orange", "Mango"];
console.log("Fruits:", fruits);


// 2. push() - Adds element at the end
let numbers1 = [10, 20, 30];
numbers1.push(40);
console.log("Push:", numbers1);


// 3. pop() - Removes last element
let numbers2 = [10, 20, 30];
numbers2.pop();
console.log("Pop:", numbers2);


// 4. shift() - Removes first element
let numbers3 = [10, 20, 30];
numbers3.shift();
console.log("Shift:", numbers3);


// 5. unshift() - Adds element at the beginning
let numbers4 = [10, 20, 30];
numbers4.unshift(5);
console.log("Unshift:", numbers4);


// 6. includes() - Checks if element exists
let numbers5 = [10, 20, 30];
console.log("Includes:", numbers5.includes(20));


// 7. indexOf() - Finds index position
let numbers6 = [10, 20, 30];
console.log("IndexOf:", numbers6.indexOf(30));


// 8. join() - Converts array into string
let numbers7 = [10, 20, 30];
console.log("Join:", numbers7.join("-"));


// 9. reverse() - Reverses the array
let numbers8 = [10, 20, 30];
console.log("Reverse:", numbers8.reverse());


// 10. sort() - Sorts numbers in ascending order
let numbers9 = [30, 10, 20];
console.log("Sort:", numbers9.sort((a, b) => a - b));


// 11. slice() - Returns selected elements
let numbers10 = [10, 20, 30, 40, 50];
console.log("Slice:", numbers10.slice(1, 4));


// 12. splice() - Removes elements
let numbers11 = [10, 20, 30, 40];
numbers11.splice(1, 2);
console.log("Splice:", numbers11);
