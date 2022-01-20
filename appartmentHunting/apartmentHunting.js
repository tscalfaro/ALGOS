//THE PROMPT
//WRITE A FUNCTION THAT TAKES IN A LIST OF CONTIGUOUS BLOCKS ON A SPECIFIC STREET AND LIST OF YOUR REQUIRED BUILDINGS && RETURNS THE LOCATIONS (INDEX) OF THE BLOCK THAT'S MOST OPTIMAL FOR YOUR NEEDS

// //BLOCKS = [
//     {
//         GYM: false,
//         SCHOOL: true,
//         STORE: true,
//     },
//     {
//         GYM: TRUE,
//         SCHOOL: false,
//         STORE: false,
//     },
//     {
//         GYM: false,
//         SCHOOL: FALSE,
//         STORE: true,
//     }
// ]
//REQS = ["GYM", "SCHOOL", "STORE"]
//RETURNS INDEX TWO, IT IS THE SHORTEST DISTANCE TO ALL REQUIRED BUILDINGS.



//MY ANSWER
//SPACE O(BR) || TIME O(BR) WHERE B=# OF BLOCKS AND R=# OF REQS
//THIS VERSION OF THE SOLUTION IS A TRADEOFF IN SPACE FOR A PERFORMANCE BOOST IN TIME. DEPENDING ON THE NEEDS OF THE CLIENT, YOU WOULD CHOOSE WHICH SOLUTION. THE OTHER SOLUTION IS NESTED FOR LOOPS RESULTING IN A TIME OF O(B^2R) AND SPACE O(B)
function apartmentHunting(blocks, reqs) {
      let minDistancesFromBlocks = reqs.map(req => getMinDistances(blocks, req))
      let maxDistancesAtBlocks = getMaxDistancesAtBlocks(blocks, minDistancesFromBlocks)
      return getIdxAtMinValue(maxDistancesAtBlocks)
  }
  
  function getMinDistances(blocks, req){
      let minDistances = new Array(blocks.length)
      let closestReqIdx = Infinity;
      //GO THROUGH BLOCKS LEFT -> RIGHT, FIND MIN DISTANCE TO REQ 
      for (let i = 0; i < blocks.length; i++){
          if (blocks[i][req]) closestReqIdx = i;
          minDistances[i] = distanceBetween(i, closestReqIdx);
      }
      //NOW GO THROUGH BLOCKS RIGHT -> LEFT, ADJUST THOSE NUMBERS IF THERE IS A SMALLER DISTANCE
      for (let i = blocks.length - 1; i >= 0; i--){
          if (blocks[i][req]) closestReqIdx = i;
          minDistances[i] = Math.min(minDistances[i], distanceBetween(i, closestReqIdx));
      }
      return minDistances
  }
  
  function distanceBetween(a, b){
      return Math.abs(a - b)
  }
  
  //ex. of input 
  //[0,  1,  0,  1,  0]
  //[1,  0,  0,  1,  2]
  //[1,  0,  1,  2,  3]

  //HOW WE ARE TRYING TO REPRESENT EACH
//   [0, 1, 1] -columns
//   [1, 0, 0]
//   etc.
  //THEN FIND MAX

  function getMaxDistancesAtBlocks(blocks, minDistancesFromBlocks) {
      let maxDistancesAtBlocks = new Array(blocks.length)
      for(let i = 0; i < blocks.length; i++){
          let minDistancesAtBlock = minDistancesFromBlocks.map(distances => distances[i]);
          maxDistancesAtBlocks[i] = Math.max(...minDistancesAtBlock)
      }
      return maxDistancesAtBlocks
  }
      
  function getIdxAtMinValue (array) {
      let idxAtMinValue = 0;
      let minValue = Infinity;
      for( let i = 0; i < array.length; i++){
          let currentValue = array[i]
          if( currentValue < minValue){
              minValue = currentValue
              idxAtMinValue = i
          }
      }
      return idxAtMinValue
  }