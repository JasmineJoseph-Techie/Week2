
 // Home Assignment: Array Method Implementation

// 1. push() - Add elements to the end
let numbers1 = [10, 20, 30];
numbers1.push(40);
console.log("Push:", numbers1);

// 2. pop() - Remove the last element
let numbers2 = [10, 20, 30];
numbers2.pop();
console.log("Pop:", numbers2);

// 3. shift() - Remove the first element
let numbers3 = [10, 20, 30];
numbers3.shift();
console.log("Shift:", numbers3);

// 4. unshift() - Add an element at the beginning
let numbers4 = [10, 20, 30];
numbers4.unshift(5);
console.log("Unshift:", numbers4);

// 5. includes() - Check if an element exists
let numbers5 = [10, 20, 30];
console.log("Includes:", numbers5.includes(20));

// 6. indexOf() - Find the index position
let numbers6 = [10, 20, 30];
console.log("IndexOf:", numbers6.indexOf(30));

// 7. join() - Convert array into string
let numbers7 = [10, 20, 30];
console.log("Join:", numbers7.join("-"));

// 8. reverse() - Reverse the array
let numbers8 = [10, 20, 30];
numbers8.reverse();
console.log("Reverse:", numbers8);

// 9. sort() - Sort the array in ascending order
let numbers9 = [30, 10, 20];
numbers9.sort((a, b) => a - b);
console.log("Sort:", numbers9);
