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

const arr = ["Apple", "Banana", "Mango"];

// Test case
console.log(elementExists(arr, "Banana")); // True
console.log(elementExists(arr, "banana")); // case Sensitive --- so False
