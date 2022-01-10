//PROMPT
// Given a special array return its product Sum. eg. [1, [1], [[1]]] = 1 + 2 * 1 + 3 * 1;

//MY ANSWER
// O(N * # OF SPECIAL ARRAYS) SPACE | O(N) TIME
function productSum(array, depth = 1) {
    // Write your code here.
      let sum = 0;
      for(const elem of array){
          if(Array.isArray(elem)){
              sum += productSum(elem, depth + 1)
          } else {
              sum += elem
          }
      }
      return sum * depth;
  }