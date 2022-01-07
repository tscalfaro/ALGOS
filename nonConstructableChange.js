//THE PROMPT
//Find the lowest change that can be given back, given an array of coins. The lowest for a coins array that is empty would be 1. coins = [1, 1, 2], solution 4.

// My Answer

function nonConstructibleChange(coins) {
    // Write your code here.
      let answer = 0;
      coins.sort((a,b) => a - b)
          .map(coin => {
          if (coin > answer + 1) return answer + 1;
          
          answer += coin;
      })
    return answer + 1;
  }

  //ALGO EXPERTS ANSWER
  function nonConstructibleChange(coins) {
    // Write your code here.
      let answer = 0;
      coins.sort((a,b) => a - b)
          .map(coin => {
          if (coin > answer + 1) return answer + 1;
          
          answer += coin;
      })
    return answer + 1;
  }