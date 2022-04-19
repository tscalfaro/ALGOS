function hasSingleCycle(array) {
    // Write your code here.
      const numOfIndexes = array.length;
      const visited = new Array(numOfIndexes).fill(false);
      return cycleCatcher(array, numOfIndexes, visited)
      
  }
  
  function cycleCatcher(array, numOfIndexes, visited) {
      let idxToMove = 0;
      for(let i = 0; i < numOfIndexes; i++){
          const jump = array[idxToMove];
          idxToMove = (idxToMove + jump) % numOfIndexes
          if(idxToMove < 0) idxToMove = idxToMove + numOfIndexes
          visited[idxToMove] = true;
      }
      console.log(visited)
      return visited.every(visit => visit !== undefined && visit)
  }