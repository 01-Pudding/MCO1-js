import java.util.Scanner;

public class HighestNumber{
  public static void main(String [] args){
    Scanner input = new Scanner(System.in);
    
    System.out.print("Enter the first nunber: ");
    int num1 = input.nextInt();
    System.out.print("Enter the second number: ");
    int num2 = input.nextInt();
    System.out.print("Enter the third number: ");
    int num3 = input.nextInt();
    System.out.print("Enter the fourth number: ");
    int num4 = input.nextInt();
    System.out.print("Enter the fifth number: ");
    int num5 = input.nextInt();
    
    if (num1>nun2){
    System.out.println("The first number is larger! ");
    }
    else if (num2>num3){
    System.out.println("The second number is larger! ");
    }
    else if (num3>num4){
    System.out.println("The third number is larger! ");
    }
    else if (num4>num5){
    System.out.println("The fourth number is larger! ");
    }
    else if (num5>num1){
    System.out.println("The fifth number is larger! ");
    }
  }
}