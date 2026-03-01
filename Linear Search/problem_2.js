// Question 2: Check If Element Exists
// Goal: Return true if the element exists in the array
//       Return false if the element does NOT exist

const elementExists = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return true;
    }
  }
  return false;
};

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 56, 45, 7, 86, 57];

// Test case
console.log(elementExists(arr, 7)); // true
console.log(elementExists(arr, 100)); // false
