
 // Home Assignment: Sum of Array Elements

// Function to calculate the sum of array elements
function calculateSum(numbers) {

    // Declare a variable to store the sum
    let sum = 0;

    // Loop through the array
    for (let i = 0; i < numbers.length; i++) {
        sum = sum + numbers[i];
    }

    // Return the total sum
    return sum;
}

// Create an array with numeric values
let numbers = [10, 20, 30, 40, 50];

// Call the function
let total = calculateSum(numbers);

// Print the final sum
console.log("Array Elements:", numbers);
console.log("Total Sum:", total);
