//THE PROMPT
//Given an array of numbers and pi to a certain digit, create a function that will return the number of spaces needed to be added in order to get all the numbers included. I.E. input: pi = "3141" numbers = ["3", "1", "4", "1"] output = 3. If no number of spaces exist your function should return -1



function numbersInPi(pi, numbers) {
    // Write your code here. 
      const favNumbers = {}
      for (var num of numbers ){
          favNumbers[num] = true;
      }
      
      const cache = {};
      for(let i = 0; i < pi.length - 1; i++){
          getMinSpaces(pi, favNumbers, cache, i)
      }
      return cache[0] === Infinity ? -1 : cache[0]
  }
  
  function getMinSpaces(pi, numTable, cache, idx){
      if (idx === pi.length) return -1;
      if (idx in cache) return cache[idx];
      let minSpaces = Infinity;
      for(let i = idx; i < pi.length; i++){
          const prefix = pi.slice(idx, i + 1);
          if(prefix in numTable){
              const minSpaceSuffix = getMinSpaces(pi, numTable, cache, i + 1)
              minSpaces = Math.min(minSpaceSuffix + 1, minSpaces )
          }
      }
      cache[idx] = minSpaces;
      return cache[idx];
  }
  