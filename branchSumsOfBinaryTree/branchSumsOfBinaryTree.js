//THE PROMPT
//GIVEN A BINARY TREE, RETURN AN ARRAY OF THE SUMS OF THE BRANCHES OF THE BINARY TREE.


//MY ANSWER
//SPACE | TIME O(N) | O(N)
class BinaryTree {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  function branchSums(root) {
    // Write your code here.
      let sums = []
      branchSumsHelper(root, sums, 0)
      return sums;
  }
  
  function branchSumsHelper(root, sums, runningTally){
      if (!root) return
      if (!root.right && !root.left ){
          runningTally += root.value;
          sums.push(runningTally);
          return;
      }
      runningTally += root.value;
      branchSumsHelper(root.left, sums, runningTally)
    branchSumsHelper(root.right, sums, runningTally)
      
  }