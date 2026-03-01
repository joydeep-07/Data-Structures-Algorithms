// Question 3: Count Occurrences
// Return how many times a target number appears in the array.

const countOccurence = (arr, target) => {
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      count++;
    }
  }
  return count;
};


let arr = [1, 2, 1, 4, 1];

// Usage
console.log(countOccurence(arr, 1));
