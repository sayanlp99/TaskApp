import java.util.*;
class number_Nature{
	public static void main(String[] args) {
		int number;
		System.out.print("Enter number: ");
		number = input();
		if(check(number)){
			find_Nature(number);
		}
		else{
			System.out.println("Terminating program");
		}
	}

	static int input(){
		int temp;
		Scanner o = new Scanner(System.in);
		temp = o.nextInt();
		return temp;
	}

	static boolean check(int num){
		if (num >= 0 && num <= 500 ) {
			System.out.println("Valid number");
			return true;
		}
		else{
			System.out.println("In-valid number");
			return false;
		}
	}

	static void find_Nature(int num){
		int temp = num;
		System.out.print("Abundant Number: ");
		if (getSumOfProperDivisors(num) > num) {
			System.out.println("Yes");
		}
		else{
			System.out.println("No");
		}
		System.out.print("Deficit Number: ");
		if (getSumOfProperDivisors(num) < num) {
			System.out.println("Yes");
		}
		else{
			System.out.println("No");
		}
		System.out.print("Perfect Number: ");
		if (getSumOfProperDivisors(num) == num) {
			System.out.println("Yes");
		}
		else{
			System.out.println("No");
		}
	}

	static int getSumOfProperDivisors(int n){  
	    int sum = 0;  
	    for (int i=1; i<=Math.sqrt(n); i++)  {  
	        if (n%i==0)  {  
	            if (n/i == i)  
	                sum = sum + i;  
	            else{  
	                sum = sum + i;  
	                sum = sum + (n / i);  
	            }  
	        }  
	    }  
	    sum = sum - n;  
	    return sum;  
	}  
}