function isPalindrome(word) {
  // Write your algorithm here
// I need to create a function called isPalindrome
// It checks if a given word reads the same forwards and backwards, like "mom" or "racecar". 
// If the word is the same, 
// It should return true; otherwise, return false. 
// Only lowercase words with letters are considered, and we don't need to worry about spaces or special characters.

// WRITE YOUR TEST CASE
  // Check if this file is the main module being executed
if (require.main === module) {
  // If so, execute these test cases

  // Test case 1: Palindrome word "racecar"
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log(""); // Adding a blank line for readability

  // Test case 2: Palindrome word "mom"
  console.log("Expecting: true");
  console.log("=>", isPalindrome("mom"));

  console.log(""); // Adding a blank line for readability
  
  // Test case 3: Non-palindrome word "hello"
  console.log("Expecting: false");
  console.log("=>", isPalindrome("hello"));

  console.log(""); // Adding a blank line for readability

  // Test case 4: Non-palindrome word "robot"
  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}}

/* 
  Add your pseudocode here

  reverse the input word(string)
if the word reversed is the same as the input
  return true
else
  return false

*/

/*
  Add written explanation of your solution here

  The isPalindrome function takes a word as input and checks if the word reads the same forwards and backwards, like "mom" or "racecar".

To achieve this:

- We first reverse the input word using an appropriate method.
- Then, we compare the reversed word with the original word.
- If the reversed word is the same as the original word, we return true, indicating that the word is a palindrome.
- Otherwise, if the reversed word is different from the original word, we return false, indicating that the word is not a palindrome.
*/

function reverseString(word) {
  // create an array from the input string and split it into an array of characters
  const wordArray = word.split("");
  // reverse the array
  const reversedWordArray = wordArray.reverse();
  // create a string from the reversed array
  const reversedWord = reversedWordArray.join("");
  // return the reversed string
  return reversedWord;
}

// function isPalindrome(word) {
//   // reverse the input string
//   const reversedWord = reverseString(word);
//   // if the reversed string is the same as the input
//   if (word === reversedWord) {
//     return true;
//   } else {
//     return false;
//   }
// }

// make it clean (Part of code we can clean up is the if/else statement. Since === will evaluate to either true or false)
function isPalindrome(word) {
  // reverse the input string
  const reversedWord = reverseString(word);
  // compare the reversed string to the input
  return word === reversedWord;
}

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("dad"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}
//  Export the isPalindrome function from the current module
module.exports = isPalindrome;
