//PROMPT
//return true or false when given a linked list to see if it's values are a palindrome, e.g [0. 1. 0]
//a list of 1 is true.


//MY ANSWER -- will refactor.
//O(NLOGN) O(N)
class LinkedList {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  function linkedListPalindrome(head) {
    // Write your code here.
      let arrayOfValues = [];
      while(head){
          arrayOfValues.push(head.value);
          head = head.next;
      }
      if(arrayOfValues.length === 1) return true
      let i = arrayOfValues.length -1;
      for(let j = 0; j < arrayOfValues.length/2; j++){
          if(arrayOfValues[i] === arrayOfValues[j]){
              i--
          }
          else return false;
      }
    return true;
  }