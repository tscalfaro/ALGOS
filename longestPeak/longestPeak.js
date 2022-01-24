//THE PROMPT - GIVEN AN ARRAY OF INTS, FIND THE LONGEST PEAK. PEAK IS DEFINED BY STRICTLY HAVING LOWER TO THE LEFT AND LOWER TO THE RIGHT I.E [ 0, 1 , 0] THE PEAK IS CONTINUED IN LENGTH UNTIL THE DOWN TRENDS ARE BROKEN.

//MY SCRATCH
// - Left -> Right one time through the array
// - Assume each int is a possible peak,
// - Check that it fits the definition of a peak or not
// - Count how long the peak is and store it if longer than the longestPeak. 
// - return longestPeak

//MY SOLUTION
//SPACE 0(1) TIME O(N)

function longestPeak(array) {
    // Write your code here.
      let longestPeakLen = 0;
      let i = 1;
      
      while (i < array.length - 1) {
          let isPeak = array[i - 1] < array[i] && array[i] > array[i+1];
          if (!isPeak){
              i += 1;
              continue;
          }
          leftIdx = i -2;
          while(leftIdx >= 0 && array[leftIdx] < array[leftIdx + 1]){
              leftIdx -= 1;
          }
          
          rightIdx = i+2;
          while(rightIdx < array.length && array[rightIdx] < array[rightIdx - 1]){
              rightIdx += 1;
          }
          let currentPeakLen = rightIdx - leftIdx - 1;
          longestPeakLen = Math.max(currentPeakLen, longestPeakLen)
          i = rightIdx
      }
      return longestPeakLen;
  }
  