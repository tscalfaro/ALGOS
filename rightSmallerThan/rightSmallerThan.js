//MY SOLUTION
// TIME || SPACE  O(N^2) || O(N)
function rightSmallerThan(array) {
    // Write your code here.
    let counterArray = []
    for (let index = 0; index < array.length; index++) {
     counterArray.push(howManySmaller(array, index + 1, array[index])) 
    }
    return counterArray;
  }
  
  function howManySmaller(array, i, currValue){
    let count = 0;
    while(i < array.length){
      if(array[i] < currValue){
        count++
      }
      i++
    }
    return count;
  }