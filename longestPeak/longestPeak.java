import java.util.*;

class Program {
  public static int longestPeak(int[] array) {
    // Write your code here.
		int longestPeakLen = 0;
		int i = 1;
		
		while (i < array.length - 1){
			boolean isPeak = array[i] > array[i - 1] && array[i] > array[i + 1];
			if (!isPeak) {
				i += 1;
				continue;
			}
			int leftIdx = i - 2;
			while (leftIdx >= 0 && array[leftIdx] < array[leftIdx + 1]) {
				leftIdx -= 1;
			}
			
			int rightIdx = i + 2;
			while (rightIdx < array.length && array[rightIdx] < array[rightIdx - 1] ) {
				rightIdx += 1;
			}
			int currentPeakLen = rightIdx - leftIdx - 1;
			if ( currentPeakLen > longestPeakLen) {
				longestPeakLen = currentPeakLen;
			}
			i = rightIdx;
		}
		return longestPeakLen;
    
  }
}