/* 1. Write a JavaScript program that accept two integers and
 * display the larger.Go to the editor */
/******* Start Your Code *********/

let num1 = parseInt(prompt("Enter the first number:"));
let num2 = parseInt(prompt("Enter the second number:"));

if (num1 > num2) {
  document.getElementById("result").innerHTML = "The larger number is " + num1;
} else if (num2 > num1) {
  document.getElementById("result").innerHTML = "The larger number is " + num2;
} else {
  document.getElementById("result").innerHTML = "Both numbers are equal.";
}


 
 /******* End Your Code ********* */

/* 2. Write a JavaScript conditional statement to find the sign
 of product of three numbers. Display an alert box with the 
 specified sign. Go to the editor 
Sample numbers : 3, -7, 2 
Output : The sign is - */
/******* Start Your Code *********/


alert("Write a JavaScript conditional statement to find the sign of product of three numbers. Display an alert box with the  specified sign.");
alert("go");

let num3 = parseInt(prompt("Enter the first number:"));
let num4 = parseInt(prompt("Enter the second number:")); 
let num5 = parseInt(prompt("Enter the thired number:")); 

if((num3*num4*num5)<0) {
  alert("The sign is -");
}
else {
  alert("The sign is +");
}


 /******* End Your Code ********* */

/* 3. Write a JavaScript conditional statement to sort three numbers. Display an alert box to show the result. Go to the editor 
Sample numbers : 0, -1, 4 
Output : 4, 0, -1 */
/******* Start Your Code *********/

let num6 = parseInt(prompt("Enter the 6 number:"));
let num7 = parseInt(prompt("Enter the 7 number:")); 
let num8 = parseInt(prompt("Enter the 8 number:")); 

let Output ="";
if((num6>num7)&&(num6>num8)){
  if(num7>num8){
    Output=num6 +" "+num7+" "+num8;
  }else{
    Output=num6+" "+num8+" "+num7;
  }
}
else if((num7>num6)&&(num7>num8)){
  if(num6>num8){
    Output=num7 + " "+num6 +" "+ num8;
  }else{
    Output=num7 +" "+ num8 +" "+ num6;
  }

}else if((num8>num6)&&(num8>num7)){
  if(num6>num7){
    Output =num8 +" "+num6+" " +num7;
  }else{
    Output =num8+" " +" "+num7+" " +num6;
  }
}
  document.write(Output);

 /******* End Your Code ********* */


/*4. Write a JavaScript conditional statement to find the largest of five numbers. 
Display an alert box to show the result. Go to the editor 
Sample numbers : -5, -2, -6, 0, -1 
Output : 0 */

/******* Start Your Code *********/

let a = parseInt(prompt("Enter the first number:"));
let b = parseInt(prompt("Enter the second number:"));
let c = parseInt(prompt("Enter the third number:"));
let d = parseInt(prompt("Enter the fourth number:"));
let e = parseInt(prompt("Enter the fifth number:"));

let arr = [a, b, c, d, e];
let largest = arr[0];

for (let i = 1; i <= (arr.length)-1; i++) {
  if (arr[i] > largest) {
    largest = arr[i];
  }
}

console.log("The largest number =", largest);

 /******* End Your Code ********* */

 /* 5.Write the if statement to display "Hello World" if x is greater than y, otherwise alert "Goodbye".*/
/******* Start Your Code *********/

let X = parseInt(prompt("Enter X")); 
let Y = parseInt(prompt("Enter Y"));

if(X>Y){
  document.write("Hello World");
}
else{
  alert("Goodbye");
};


  
 /******* End Your Code ********* */



