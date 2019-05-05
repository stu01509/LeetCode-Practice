
public class ReverseString {

    public static void main(String[] args) {
        char s[] = new char[]{'h', 'e', 'l', 'l', 'o'};
        ReverseStringSolution solution = new ReverseStringSolution();
        solution.reverseString(s);
    }

}

class ReverseStringSolution {
    public void reverseString(char[] s) {
        int halfLen = s.length / 2;
        for (int i = 0; i < halfLen; i++) {
            char temp = s[i];
            s[i] = s[s.length - (1 + i)];
            s[s.length - (1 + i)] = temp;
        }

        System.out.println(new String(s));
    }
}
