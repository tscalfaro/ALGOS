package findClosestValueInBst;

import java.util.*;

//MY ANSWER
class Program {
  public static int findClosestValueInBst(BST tree, int target) {
    // Write your code here.
     return findClosestValueInBst(tree, target, tree.value);
  }
    //Refactored this func after looking at answer, instead of naming it differently, kept same name. Adding the extra arg is as good as a name change.
	public static int findClosestValueInBst(BST tree, int target, int closest){
		 
		if (tree == null) return closest;
      if (Math.abs(target - tree.value) < Math.abs(target - closest))
          closest = tree.value;
      
      if (tree.value < target){
          return findClosestValueInBst(tree.right, target, closest);
      } else if (tree.value > target){
          return findClosestValueInBst(tree.left, target, closest);
      } else 
          return closest;
	}

  static class BST {
    public int value;
    public BST left;
    public BST right;

    public BST(int value) {
      this.value = value;
    }
  }
}
