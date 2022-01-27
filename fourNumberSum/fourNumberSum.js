
//SCRATCH
// -CREATE HASH TABLE OF PAIR SUMS
// -ITERATE THROUGH ARRAY 2 DEEP
// -FIND SUM OF PAIR AND IF DIFFERENCE WITH TARGET IN HASH TABLE ADD ALL PAIRS TO QUADS SOLUTION
// -GO THROUGH NUMBERS BEFORE CURRENT INDEX AND ADD ADDITIONAL UNIQUE PAIRS
// RETURN QUADS ARRAY



//MY ANSWER
// SPACE O(N^2) | TIME AVG, O(N^2) WORST, O(N^3)
function fourNumberSum(array, targetSum) {
    // Write your code here.
      array = array.sort((a, b) => (a - b))
      let allPairSums = {};
      let quads = []
      for(let i = 1; i < array.length - 1; i++){
          for(let j = i + 1; j < array.length; j++){
              let currentSum = array[i] + array[j]
              let difference = targetSum - currentSum;
              if (difference in allPairSums) {
                  for(const pair of allPairSums[difference]){
                      quads.push(pair.concat([array[i], array[j]]))
                  }
              }
          }
          for(let k = 0; k < i; k++){
              let currentSum = array[i] + array[k]
              if(!(allPairSums[currentSum])){
                  allPairSums[currentSum] = [[array[k], array[i]]]
              } else {
                  allPairSums[currentSum].push([array[k], array[i]])
              }
          }
      }
      return quads;
  }