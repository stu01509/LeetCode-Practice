import java.util.Arrays;

public class ReverseInteger {

	public static void main(String[] args) {
		ReverseIntegerSolution solution = new ReverseIntegerSolution();
		System.out.println(solution.reverse(123));
		System.out.println(solution.reverse(120));
		System.out.println(solution.reverse(-2147483648));
	}
	
}

class ReverseIntegerSolution {
    public int reverse(int x) {
    	if (x == Integer.MIN_VALUE || x == Integer.MAX_VALUE) return 0;
    	int isNegative = x > 0 ? 1 : -1; 
        String numArr[] = (Math.abs(x) + "").split(""); 
        int halfLen = numArr.length / 2;
        
        for (int i = 0; i < halfLen; i++) {
        	String temp = numArr[i];
        	numArr[i] = numArr[numArr.length - (1 + i)];
        	numArr[numArr.length - (1 + i)] = temp;
        }
        
        String strNum = "";
        for (int i = 0; i < numArr.length; i++) {
        	strNum += numArr[i];
        }
        
        long result = Long.valueOf(strNum) * isNegative;
        if (result < Integer.MIN_VALUE || result > Integer.MAX_VALUE) return 0;
        return (int)result;
    }
}
