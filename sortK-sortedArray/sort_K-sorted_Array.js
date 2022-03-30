//THE PROMPT
// GIVEN A NON-NEGATIVE INTEGER, K, AND A K-SORTED ARRAY (NO ELEMENT IS MORE THE K SPOTS AWAY FROM ITS SORTED PLACE) SORT THE ARRAY AND RETURN IT. 
//NOTE: THIS IS TO BE FASTER THAN THE .SORT() METHOD NLOG(N)


//SPACE | TIME ||| O(K) | O(NLOG(K))  WHERE N IS THE NUMBER OF ELEMENTS IN THE ARRAY AND K IS THE NUMBER OF POSITIONS AWAY EACH IS.

function sortKSortedArray(array, k) {
    // Write your code here.
      const minHeapKElements = new MinHeap(array.slice(0, Math.min(k+1, array.length)))
      
      let nextIndexToInsertElement = 0;
      
      for(let idx = k + 1; idx < array.length; idx++){
          const minElement = minHeapKElements.remove();
          array[nextIndexToInsertElement] = minElement;
          nextIndexToInsertElement++;
          const currentElement = array[idx]
          minHeapKElements.insert(currentElement)
      }
      
      while(!minHeapKElements.isEmpty()) {
          const minElement = minHeapKElements.remove();
          array[nextIndexToInsertElement] = minElement;
          nextIndexToInsertElement++;
      }
    return array;
  }
  
  //THIS IS A MINHEAP CLASS TO HELP WITH THE SOLVING OF THE ORIGINAL PROBLEM.

  
  class MinHeap {
      constructor(array){
          this.heap = this.buildHeap(array)
      }
      
      isEmpty(){
          return this.heap.length === 0;
      }
      
      buildHeap(array) {
          const firstParentIdx = Math.floor((array.length - 2) / 2);
          for (let currentIdx = firstParentIdx; currentIdx >= 0; currentIdx--){
              this.siftDown(currentIdx, array.length - 1, array)
          }
          return array;
      }
      
      siftDown(currentIdx, endIdx, heap){
          let childOneIdx = currentIdx * 2 +1;
          while (childOneIdx <= endIdx) {
              const childTwoIdx = currentIdx * 2 + 2 <= endIdx ? currentIdx * 2 + 2 : -1
              let idxToSwap;
              if (childTwoIdx !== -1 && heap[childTwoIdx] < heap[childOneIdx]) {
                  idxToSwap = childTwoIdx;
              } else {
                  idxToSwap = childOneIdx;
              }
              if (heap[idxToSwap] < heap[currentIdx]) {
                  this.swap(currentIdx, idxToSwap, heap);
                  currentIdx = idxToSwap;
                  childOneIdx = currentIdx * 2 + 1;
              } else {
                  return;
              }
          }
      }
      
      siftUp(currentIdx, heap) {
          let parentIdx = Math.floor((currentIdx - 1) / 2)
          while (currentIdx > 0 && heap[currentIdx] < heap[parentIdx]) {
              this.swap(currentIdx, parentIdx, heap)
              currentIdx = parentIdx;
              parentIdx = Math.floor((currentIdx -1) / 2)
          }
      }
      
      peek(){
          return this.heap[0]
      }
      
      remove(){
          this.swap(0, this.heap.length - 1, this.heap)
          const valueToRemove = this.heap.pop();
          this.siftDown(0, this.heap.length -1, this.heap)
          return valueToRemove
      }
      
      insert(value) {
          this.heap.push(value);
          this.siftUp(this.heap.length -1, this.heap);
      }
      
      swap(i, j, heap) {
          const temp = heap[j]
          heap[j] = heap[i]
          heap[i] = temp
      }
      
  }