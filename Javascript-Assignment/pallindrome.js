function isPalindrome(str) {
  const len = str.length; // Get the length of the string
  for (let i = 0; i < Math.floor(len / 2); i++) {
    if (str[i] !== str[len - 1 - i]) {
      return false; // If characters don't match, it's not a palindrome
    }
  }
  return true; // If all characters matched, it's a palindrome
}

// Example usage:
const testString = "madam";
console.log(`Is "${testString}" a palindrome?`, isPalindrome(testString)); // Output: true

const testString2 = "hello";
console.log(`Is "${testString2}" a palindrome?`, isPalindrome(testString2)); // Output: false
