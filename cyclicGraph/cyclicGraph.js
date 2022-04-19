function cycleInGraph(edges) {
    // Write your code here.
      const numOfVerticees = edges.length;
      const visited = new Array(numOfVerticees).fill(false);
      const currentlyInStack = new Array(numOfVerticees).fill(false);
      
      for(let node = 0; node < numOfVerticees; node++){
          if (visited[node]) continue;
          
          const containsCycle = isNodeInCycle(node, edges, visited, currentlyInStack);
          if(containsCycle) return true;
      }
    return false;
  }
  
  function isNodeInCycle(node, edges, visited, currentlyInStack){
      visited[node] = true;
      currentlyInStack[node] = true;
      
      const neighbors = edges[node]
      for(const neighbor of neighbors) {
          if(!visited[neighbor]) {
              const containsCycle = isNodeInCycle(neighbor, edges, visited, currentlyInStack);
              if (containsCycle) return true;
          } else if (currentlyInStack[neighbor]) {
              return true;
          }
      }
      
      currentlyInStack[node] = false;
      return false;
  }
  