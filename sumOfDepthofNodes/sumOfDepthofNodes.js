//THE PROMPT
//GIVEN A BINARY TREE, RETURN THE SUM OF THE DEPTH OF EACH NODE. 


//MY ANSWER
// O(N) TIME | O(H) SPACE WHERE H IS THE HEIGHT OF THE TREE
function nodeDepths(root, depth = 0) {
    // Write your code here.
  
      if (root === null) return 0;
      return depth + nodeDepths(root.left, depth + 1) + nodeDepths(root.right, depth + 1)
  }
  
  // This is the class of the input binary tree.
  class BinaryTree {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  