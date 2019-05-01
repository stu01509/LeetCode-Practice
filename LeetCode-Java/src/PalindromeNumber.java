public class PalindromeNumber {

    public static void main(String[] args) {
        PalindromeNumberSolution solution = new PalindromeNumberSolution();
        System.out.println(solution.isPalindrome(9));
        System.out.println(solution.isPalindrome(1000021));

    }

}

class PalindromeNumberSolution {
    public boolean isPalindrome(int x) {
        boolean isPalindrome = false;
        if (x < 0) isPalindrome = false;
        if (x >= 0 && x < 10) isPalindrome = true;
        String numArr[] = (x + "").split("");
        for (int i = 0; i < numArr.length / 2; i++) {
            if (numArr[i].equals(numArr[numArr.length - (1 + i)])) {
                isPalindrome = true;
            } else {
                return false;
            }
        }
        return isPalindrome;
    }
}
