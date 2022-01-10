//Given an int n, return the nth entry of the fib sequence.

//MY ANSWER
// O(N) | O(N)
function getNthFib(n, sum = 0) {
    // Write your code here.
      if (n === 1) return 0;
      if (n === 2) return 1;
      if (n > 2) return getNthFib(n-1, sum) + getNthFib(n-2, sum) 
  }