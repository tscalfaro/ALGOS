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