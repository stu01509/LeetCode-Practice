
public class ToLowerCase {

    public static void main(String[] args) {
        ToLowerCaseSolution solution = new ToLowerCaseSolution();
        System.out.println(solution.toLowerCase("Heelo"));
    }

}

class ToLowerCaseSolution {
    public String toLowerCase(String str) {
        String lowerCase = "";
        for (int i = 0; i < str.length(); i++) {

            int ascii = Integer.valueOf(str.charAt(i));

            if (65 <= ascii && ascii <= 90) {

                lowerCase += ((char) (ascii + 32));
            } else {
                lowerCase += ((char) (ascii));
            }

        }
        return lowerCase;
    }
}