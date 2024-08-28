import java.util.*;
import java.util.stream.*;

public class MapPractice {
    static void mapPractice() {   
        Map<String, Integer> practiceMap = new HashMap<>();
        practiceMap.put("User12", 12398);
        practiceMap.put("User13", 5);
        practiceMap.put("", 45);
        practiceMap.put("NotaUser", 5789);
        practiceMap.put("User14", 321078);
        practiceMap.put(null, 4372);

        Map<String, Long> output = practiceMap.entrySet()
            .stream()
            .filter(e -> e.getKey() != null && !e.getKey().isEmpty())
            .collect(Collectors.toMap(
                Map.Entry::getKey,
                e -> Long.valueOf(e.getValue())));

        System.out.println(practiceMap.toString());
        System.out.println(output.toString());
    }

    public static List<List<String>> groupAnagrams(String[] strs) {
        // Implement the logic here
        return Arrays.stream(strs)
                .collect(Collectors.groupingBy(
                    str -> {
                        char[] chars = str.toCharArray();
                        Arrays.sort(chars);
                        return new String(chars);
                    }
                )).values()
                .stream()
                .collect(Collectors.toList());          
    }

    public static Map<Character, Long> characterFrequency(String str) {
        // Implement the logic here
        return str.chars() // String to IntStream of chars
                .mapToObj(c -> (char) c) // Cast IntStream back to chars
                .filter(e -> e != ' ') // Filter whitespace
                .collect(Collectors.groupingBy(
                    c -> c, //Group by character
                    Collectors.counting() //Count occurences
                ));
                
    }

    public static void main(String args[]){
        //String[] input = {"eat", "tea", "tan", "ate", "nat", "bat"};
        //List<List<String>> result = groupAnagrams(input);
        //System.out.println(result);

        //mapPractice();

        String input = "hello world this is a bigger string with %%% and && and 7980";
        Map<Character, Long> result = characterFrequency(input);
        System.out.println(result);
    }
}