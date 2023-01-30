#include <stdio.h>
#include <math.h>
int main()
{
    int input_pos_num;  //declare integer input_pos_num that takes user input &  stores the number entered
    printf("Please enter a positive integer: "); // prompt user to enter  a positive number 
    scanf("%d", &input_pos_num); // store the positive integer entered  to the variable input_pos_num

    double sqr_root; // declare another variable that stores the square root 
    sqr_root =(double)sqrt(input_pos_num); // square root the positve integer entered 
    sqr_root =(double) round(sqr_root); // round off the  square root  value. (double) is for typecasting .

    int output_sqr_int; //declare integer to store  the output value 
    output_sqr_int =(int)(sqr_root*sqr_root); // square the rounded square root value

    printf("The closest integer having a whole number square root: %d\n", output_sqr_int); // display the value
    return 0;
    // i added a comment line (18)
}
