public class IntegertoRoman {

    public static void main(String[] args) {
        IntegertoRomanSolution solution = new IntegertoRomanSolution();
        System.out.println(solution.intToRoman((3)));
        System.out.println(solution.intToRoman((4)));
        System.out.println(solution.intToRoman((9)));
        System.out.println(solution.intToRoman((58)));
        System.out.println(solution.intToRoman((1994)));
    }

}

class IntegertoRomanSolution {
    public String intToRoman(int num) {
        String one[] = new String[]{"", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"};
        String ten[] = new String[]{"", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"};
        String hun[] = new String[]{"", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM" };
        String tho[] = new String[]{"", "M", "MM", "MMM"};
        return tho[num / 1000] + hun[num % 1000 / 100] + ten[num % 100 / 10] + one[num % 10];
    }
}
