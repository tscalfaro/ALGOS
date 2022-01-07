//SAME PROMPT, NOW DONE IN JAVA

//MY ANSWER
import java.util.*;

class Program {

  public int nonConstructibleChange(int[] coins) {
    // Write your code here.
		int answer = 0;
		if(coins.length == 0) return 1;
		Arrays.sort(coins);
		for(int i = 0; i < coins.length; i++){
			if (coins[i] > answer + 1) return answer + 1;
			
			answer += coins[i];
		}
		System.out.println(coins[0]);
    return answer += 1;
  }
	
}