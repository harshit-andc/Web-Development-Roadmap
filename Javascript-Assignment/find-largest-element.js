function findLargestElement(arr) {
  if (arr.length === 0) return undefined; // Handle empty array
  let largest = arr[0]; // Assume first element is the largest
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i]; // Update largest if current element is bigger
    }
  }
  return largest;
}

// Example usage:
const numbers = [3, 5, 7, 2, 8];
console.log("Largest element:", findLargestElement(numbers)); // Output: 8
