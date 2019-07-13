import java.util.Arrays;

public class LongestCommonPrefix {

    public static void main(String[] args) {
        String[] arr1 = {"flower","flow","flight"};
        String[] arr2 = {"abc","abd","acd"};
        LongestCommonPrefixSolution solution = new LongestCommonPrefixSolution();
        System.out.println(solution.longestCommonPrefix(arr1));
        System.out.println(solution.longestCommonPrefix(arr2));
    }
}

class LongestCommonPrefixSolution {
    public String longestCommonPrefix(String[] strs) {
        if (strs == null || strs.length == 0) return "";
        Arrays.sort(strs);
        String first = strs[0];
        String last = strs[strs.length - 1];

        while (last.indexOf(first) != 0) {
            first = first.substring(0, first.length() - 1);
        }
        return first;
    }
}
