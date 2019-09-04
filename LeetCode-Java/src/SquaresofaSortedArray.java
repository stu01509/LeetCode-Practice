import java.util.Arrays;

public class SquaresofaSortedArray {

    public static void main(String[] args) {
        int[] num = {-4, -1, 0, 3, 10};
        SquaresofaSortedArraySolution solution = new SquaresofaSortedArraySolution();
        System.out.println(Arrays.toString(solution.sortedSquares(num)));
    }
}

class SquaresofaSortedArraySolution {
    public int[] sortedSquares(int[] A) {
        for (int i = 0; i < A.length; i++) {
            A[i] = A[i] * A[i];
        }
        Arrays.sort(A);
        return A;
    }
}
