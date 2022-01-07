package branchSumsOfBinaryTree;

import java.util.*;

//MY ANSWER
//SPACE | TIME O(n) | O(n)
class Program {
  // This is the class of the input root. Do not edit it.
  public static class BinaryTree {
    int value;
    BinaryTree left;
    BinaryTree right;

    BinaryTree(int value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }

  public static List<Integer> branchSums(BinaryTree root) {
    // Write your code here.
		ArrayList<Integer> sums = new ArrayList<Integer>();
		branchSumsHelper(root, sums, 0);
    return sums;
  }
	
	public static void branchSumsHelper(BinaryTree root, ArrayList<Integer> sums, int runningTally){
		if (root == null) return;
		if (root.right == null && root.left == null){
			runningTally += root.value;
			sums.add(runningTally);
			return;
		}
		runningTally += root.value;
		branchSumsHelper(root.left, sums, runningTally);
		branchSumsHelper(root.right, sums, runningTally);
	}
}
