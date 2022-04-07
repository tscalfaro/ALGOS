//THE PROMPT
//GIVEN AN INPUT ARRAY I.E [1, 3, 5, 7, 3, 9] RETURN A PAIR OF INTEGERS THAT IS THE SMALLEST START AND END OF A SUBARRAY THAT CAN BE SORTED TO MAKE THE ENTIRE ARRAY SORTED. I.E OUTPUT = [2, 4]

//SPACE || TIME  ||| O(1) || O(N) WHERE N IS THE SIZE OF THE INPUT ARRAY
function subarraySort(array) {
    // Write your code here.
      let first = Infinity;
      let last = -Infinity;
      let count = 0;
      
      
      for (const num of array) {
          if(outOfOrder(count, num , array)){
              first = Math.min(first, num)
              last = Math.max(last, num)
          }
          count++;
      }
      if (first === Infinity) return [-1, -1]
      console.log(first, last)
      let subArrayLeftIdx = 0;
      while(first >= array[subArrayLeftIdx]) subArrayLeftIdx++;
      
      let subArrayRightIdx = array.length - 1
      while(last <= array[subArrayRightIdx]) subArrayRightIdx--;
      
      return [subArrayLeftIdx, subArrayRightIdx]
  }
  
  function outOfOrder(i, num, array){
      if (i === 0) return num > array[i + 1]
      if (i === array.length -1) return num < array[i - 1]
      return num > array[i + 1] || num < array[i - 1]
  }