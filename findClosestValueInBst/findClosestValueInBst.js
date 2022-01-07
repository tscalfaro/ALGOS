//THE PROMPT


//MY ANSWER
//SPACE TIME O(n) | O(n)
function findClosestValueInBst(tree, target, closest = Infinity) {
    // Write your code here.
      if (tree === null) return closest;
      if (Math.abs(target - tree.value) < Math.abs(target - closest))
          closest = tree.value;
      
      if (tree.value < target){
          return findClosestValueInBst(tree.right, target, closest)
      } else if (tree.value > target){
          return findClosestValueInBst(tree.left, target, closest)
      } else 
          return closest;
  }
  
  // This is the class of the input tree. Do not edit.
  class BST {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }

  