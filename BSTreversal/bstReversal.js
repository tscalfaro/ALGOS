function invertBinaryTree(tree) {
    // Write your code here.
      const queue = [tree];
      while(queue.length){
          const current = queue.shift();
          if(current === null) continue;
          leftToRight(current);
          queue.push(current.left)		
          queue.push(current.right)
      }
      return queue
  }
  
  function leftToRight(tree) {
      const left = tree.left;
      tree.left = tree.right;
      tree.right = left;
  }
  
  // This is the class of the input binary tree.
  class BinaryTree {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }