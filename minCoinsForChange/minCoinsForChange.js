// SPACE | TIME   O(N) | O(N*D) 


function minNumberOfCoinsForChange(n, denoms) {
    // Write your code here.
  
    const answer = getMinCoins(n, denoms);
    
    if (answer === Infinity) return -1;
    
    return answer;
    
  }
  
  const getMinCoins = (amount, coins, cache = {}) => {
    if(amount < 0) return Infinity;
    if(amount === 0) return 0;
    if(amount in cache) return cache[amount];
  
    let minCoins = Infinity;
  
    for(const coin of coins) {
      const change = 1 + getMinCoins(amount - coin, coins, cache);
      minCoins = Math.min(minCoins, change);
    }
  
    cache[amount] = minCoins;
  
    return minCoins;
  }