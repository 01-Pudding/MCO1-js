import java.util.Scanner;

public class MCO{
  public static void main(String [] args){
    Scanner raven = new Scanner(System.in);
    
    System.out.print("Enter an integer: ");
    int num = raven.nextInt();
    
    if(num > 0){
    System.out.println("The number is Positive! ");
    }
    else if (num < 0){
    System.out.println("The number is Negative! ");
    }
    else{
   System.out.println("The number is Zero! ");
    }
  }
}