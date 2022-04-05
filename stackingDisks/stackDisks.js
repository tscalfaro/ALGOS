//THE PROMPT
//GIVEN AN ARRAY OF ARRAYS REPRESENTING DISKS [WIDTH, DEPTH, HEIGHT] RETURN THE LARGEST HEIGHT ABLE TO BE CREATED BY STACKING STRICTLY SMALLER DISKS ON TOP OF EACH OTHER. I.E [[1, 2, 3], [3, 2, 2], [2, 1, 1,]] OUTPUT [[2, 1, 1] , [3, 2, 2]]

// SPACE || TIME ||| O(N) || O(N^2)
function diskStacking(disks) {
    // Write your code here.
disks.sort((a, b) => { return a[2] - b[2]})
const heights = disks.map(disk => disk[2])
const sequences = new Array(disks.length)
let maxHeightIdx = 0;
for (let i = 1; i < disks.length; i++) {
  const currentDisk = disks[i];
  for (let j=0; j < i; j++){
      const otherDisk = disks[j]
      if(validDimensions(otherDisk, currentDisk)) {
          if (heights[i] <= currentDisk[2] + heights[j]){
              heights[i] = currentDisk[2] + heights[j]
              sequences[i] = j
          }
      }
  }
  if (heights[i] >= heights[maxHeightIdx]) maxHeightIdx = i;
}
return buildDiskStacker(disks, sequences, maxHeightIdx)
}

function buildDiskStacker(array, sequences, currentIdx) {
const sequence = [];
while (currentIdx !== undefined) {
  sequence.unshift(array[currentIdx])
  currentIdx = sequences[currentIdx]
}

return sequence
}

function validDimensions (disk1, disk2){
return disk1[0] < disk2[0] && disk1[1] < disk2[1] && disk1[2] < disk2[2]
}