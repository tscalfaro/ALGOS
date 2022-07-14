//PROMPT - Given an array of integers between 1 and n, n being the length of the array, write a function that return the first integer that appears more than once. you should return the first instance and first integer that came in the order of the array. You should not mutate the array. Your function should return -1 if no duplicates are found.


//SPACE || TIME  O(N) || O(N)

//MY SOLUTION
function firstDuplicateValue(array) {
    // Write your code here.
    let tracker = {}
    
    for (let i = 0; i < array.length; i++) {
      if (array[i] in tracker){
        return array[tracker[array[i]]]
      } else {
        tracker[array[i]] = i;
      }
    }
    return -1;
  }