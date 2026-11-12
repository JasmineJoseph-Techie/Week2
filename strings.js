
 // Example 1: Find the length of the last word

function lengthOfLastWord(s) {
    let words = s.split(" ");
    let lastWord = words[words.length - 1];

    return lastWord.length;
}

console.log("Example 1:");
console.log(lengthOfLastWord("Hello World"));


// Example 2: Find the length of the last word after trimming

function lengthOfLastWordTrim(s) {
    let trimmedString = s.trim();
    let words = trimmedString.split(" ");
    let lastWord = words[words.length - 1];

    return lastWord.length;
}

console.log("Example 2:");
console.log(lengthOfLastWordTrim(" fly me to the moon "));


// Example 3: Check if two strings are anagrams

function isAnagram(str1, str2) {

    // Remove spaces and convert to lowercase
    let word1 = str1.toLowerCase().replaceAll(" ", "");
    let word2 = str2.toLowerCase().replaceAll(" ", "");

    // Sort the characters
    let sorted1 = word1.split("").sort().join("");
    let sorted2 = word2.split("").sort().join("");

    // Compare the strings
    if (sorted1 === sorted2) {
        return true;
    } else {
        return false;
    }
}

console.log("Example 3:");
console.log(isAnagram("listen", "silent"));
console.log(isAnagram("hello", "world"));
