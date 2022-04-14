function minimumWaitingTime(queries) {
    // Write your code here.
      if(queries.length === 1) return 0;
      
      queries.sort((a, b) => a - b);
      console.log(queries)
      let count = 0;
      let waitTimes = []
      while(count < queries.length){
          if (count === 0){ 
              waitTimes.push(0)
              count++
          }else { 
              waitTimes.push(queries[count-1] + waitTimes[count -1])
              console.log(waitTimes)
              count++
          }
          
      }
      let minWaitTime = waitTimes.reduce((a,b) => {return a+b;})
    return minWaitTime;
  }