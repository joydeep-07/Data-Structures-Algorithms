// Question 1: Find Element Index
// Goal: Return the index of the target number in the array.
// If the target is not found, return -1.

function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}

const arr = [1, 2, 3, 4, 5, 9, 7, 8, 5, 4];

// Example usage:
const result = linearSearch(arr, 0);

// Print result
if (result !== -1) {
  console.log("Element found at index:", result);
} else {
  console.log("Element not found");
}
