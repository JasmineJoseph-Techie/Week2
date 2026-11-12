
function reverseString(str) {
    let characters = str.split("");
    let reverse = "";

    // Reverse the string using for loop
    for (let i = characters.length - 1; i >= 0; i--) {
        reverse = reverse + characters[i];
    }

    console.log("Original String:", str);
    console.log("Reversed String:", reverse);

    return reverse;
}

// Function to check palindrome
function checkPalindrome(str) {
    let reverse = reverseString(str);

    if (str === reverse) {
        return true;
    } else {
        return false;
    }
}

// Calling the function
console.log("Palindrome:", checkPalindrome("madam"));
console.log("Palindrome:", checkPalindrome("jasmine"));
console.log("Palindrome:", checkPalindrome("level"));
console.log("Palindrome:", checkPalindrome("hello"));
