class LinkedList {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  //MY ANSWER
  // O(1) SPACE | O(N) TIME
  function removeDuplicatesFromLinkedList(linkedList) {
    // Write your code here.
      let node = linkedList;
      while (node !== null){
          let nextNode = node.next;
          while(nextNode !== null && nextNode.value === node.value) {
                  nextNode = nextNode.next;
              } 
          node.next = nextNode;
          node = node.next;
          }
          
    return linkedList;
  }