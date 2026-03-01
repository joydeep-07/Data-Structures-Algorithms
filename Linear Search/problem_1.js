// Question 1: Find Element Index
// Return the index of the target number.

function linearSearch(arr, target){
    for(let i = 0; i< arr.length; i++ ){
        if(arr[i] === target){
            return i;
        }else{
            console.log("Not found")
        }
    }
}

console.log(linearSearch([1,2,3,4,5,9,7,8,5,4],8));