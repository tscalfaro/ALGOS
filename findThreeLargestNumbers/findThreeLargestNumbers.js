//GIVEN AN INPUT ARRAY OF NUMBERS, RETURN THE THREE LARGEST NUMBERS WITHOUT SORTING THE ARRAY


function findThreeLargestNumbers(array) {
    // Write your code here.
      let biggest = -Infinity;
      let secondBiggest = -Infinity;
      let thirdBiggest = -Infinity;
      
      for (let i = 0; i < array.length; i++) {
          if (array[i] > biggest){ 
              thirdBiggest = secondBiggest;
              secondBiggest = biggest;
              biggest = array[i]
          } else if (array[i] > secondBiggest) {
              thirdBiggest = secondBiggest;
              secondBiggest = array[i]
          } else if (array[i] > thirdBiggest) {
              thirdBiggest = array[i]
          }
      }
      return [thirdBiggest, secondBiggest, biggest]
      
  }