//THE PROMPT
//GIVEN A MATRIX [[1, 0, 0 ,1, 0], [1, 0, 1, 0, 1], ... ] WHERE 1'S INDICATE PART OF A RIVER AND 0'S A PART OF LAND. ANY ADJACENT 1'S INDICATE A CONNECTED RIVER, HORIZONTAL & VERTICAL, NOT DIAGNALLY.  RETURN THE LENGTHS OF ALL RIVERS [1, 2, 2, 2, 5] 


//SPACE || TIME   ||||  O(WH)  ||  O(WH)
let currentRiverSize = 0;
const nodesToExplore = [[i, j]];
while (nodesToExplore.length) {
    const currentNode = nodesToExplore.pop();
    i = currentNode[0];
    j = currentNode[1];
    if (visited[i][j]) continue;
    visited[i][j] = true;
    if (matrix[i][j] === 0) continue;
    currentRiverSize++;
    const unvisitedNeighbors = getUnvisitedNeighbors(i, j, matrix, visited);
    for (const neighbor of unvisitedNeighbors) {
        nodesToExplore.push(neighbor);
    }
}
if (currentRiverSize > 0) sizes.push(currentRiverSize);
}

function getUnvisitedNeighbors(i, j, matrix, visited) {
const unvisitedNeighbors = [];
if (i > 0 && !visited[i - 1][j]) unvisitedNeighbors.push([i - 1, j]);
if (i < matrix.length -1 && !visited[i + 1][j]) unvisitedNeighbors.push([i + 1, j])
if (j > 0 && !visited[i][j - 1]) unvisitedNeighbors.push([i, j - 1])
if (j < matrix[0].length - 1 && !visited[i][j + 1]) unvisitedNeighbors.push([i, j + 1])
return unvisitedNeighbors;
}