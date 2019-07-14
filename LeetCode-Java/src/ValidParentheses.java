import java.util.Stack;

public class ValidParentheses {

    public static void main(String[] args) {
        ValidParenthesesSolution solution = new ValidParenthesesSolution();
        System.out.println(solution.isValid("()"));
        System.out.println(solution.isValid("({})"));
        System.out.println(solution.isValid("({}"));
    }
}

class ValidParenthesesSolution {
    public boolean isValid(String s) {
        if (s == null || s.length() == 0) return true;
        Stack<Character> charStack = new Stack<>();

        for (int i = 0; i < s.length(); i++) {
            char c = s.charAt(i);

            if (c == '(' || c == '[' || c == '{') {
                charStack.push(c);
            } else {
                if (charStack.size() == 0) return false;
                char oldC = charStack.pop();
                if (oldC == '(' && c != ')') {
                    return false;
                } else if (oldC == '[' && c != ']') {
                    return false;
                } else if (oldC == '{' && c != '}') {
                    return false;
                }
            }
        }
        return charStack.size() == 0;
    }
}
