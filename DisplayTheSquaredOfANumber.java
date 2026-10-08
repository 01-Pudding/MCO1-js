package Activity1.java;
import java.util.Scanner;

public class DisplayTheSquaredOfANumber {
    public static void main(String [] args){
        Scanner Raven = new Scanner(System.in);
        System.out.print("Enter a number: ");
        int num = Raven.nextInt();
        int square = num * num;
        System.out.println("The square of " + num + " is " +  square);
    }
    
}