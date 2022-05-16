function bubbleSort(array) {
    // Write your code here.
      let isSorted = false;
      let counter = 0;
      while(!isSorted) {
          isSorted = true;
          for (let i = 0; i < array.length - 1 - counter; i++) {
              if (array[i] > array[i + 1]){
                  swap(array, i, i+1)
                  isSorted = false;
              }
          }
      }
      return array
  }
  
  function swap(array, i, j) {
      let temp = array[i];
      array[i] = array[j];
      array[j] = temp
  }