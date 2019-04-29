import java.util.*;

public class TwoSum {

    public static void main(String[] args) {
        TwoSumSolution solution = new TwoSumSolution();
        int nums[] = new int[]{3, 3};
        int target = 6;
        System.out.println(Arrays.toString(solution.twoSum(nums, target)));
    }

}

class TwoSumSolution {
    public int[] twoSum(int[] nums, int target) {
        Map<Integer, Integer> numsMap = new HashMap();

        for (int i = 0; i < nums.length; i++) {
            int subNum = target - nums[i];
            if (numsMap.containsKey(subNum)) {
                return new int[]{numsMap.get(subNum), i};
            } else {
                numsMap.put(nums[i], i);
            }
        }
        return new int[2];
    }
}
