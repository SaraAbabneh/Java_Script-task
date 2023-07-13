/*
1
Write a function named tellFortune that:
takes 4 arguments: number of children,
partner's name, geographic location, job title.
outputs your fortune to the screen like so:
"You will be a X in Y, and married to Z with N kids."

Ex: tellFortune('software engineer', 'Jordan', 'Alice', 3);
=> "You will be a software engineer in Jordan, and married to Alice with 3 kids."
*/
// function tellFortune (job_title, geographic_location,partner_name,number_of_children){

//   console.log(`You will be a ${job_title} in ${geographic_location} , and married to ${partner_name} with ${number_of_children} kids.`)
// }


// let job_title = prompt("Enter the sjob_title:");
// let geographic_location=prompt("Enter the geographic_location:");
// let partner_name=prompt("Enter the partner_name:");
// let number_of_children=prompt("Enter the number_of_children");
// tellFortune( job_title, geographic_location, partner_name, number_of_children);







/*
2
Write a function named calculateDogAge that:
takes 1 argument: your puppy's age.
calculates your dog's age based on the conversion
rate of 1 human year to 7 dog years.
outputs the result to the screen like so:
"Your doggie is NN years old in dog years!"

Ex: calculateDogAge(1);
=> "Your doggie is 7 years old in dog years!"
*/


// function calculateDogAge(your_puppy_age){
//   let age=your_puppy_age*7

//   console.log(`Your doggie is ${age} years old in dog years!`)
// }

// let your_puppy_age = prompt("Enter the your_puppy_age:");
// calculateDogAge(your_puppy_age);



/*
3
Write a function named calculateSupply that:
takes 2 arguments: age, amount per day.
calculates the amount consumed for rest of the life (based on a constant max age 100).
outputs the result to the screen like so:
"You will need NN to last you until the ripe old age of X"

Ex: calculateSupply(30, 3);
=> 'You will need 76650 cups of tea to last you until the ripe old age of 100;
*/

// function calculateSupply(age, amount_per_day) {
//   let the_amount_consume= age*365*amount_per_day;
//   console.log(`You will need ${the_amount_consume} cups of tea to last you until the ripe old age of 100.`)
// }

// let age = prompt("Enter the age:");
// let amount_per_day = prompt("Enter the amount_per_day:");
// calculateSupply(age , amount_per_day)



/*
4
Write a function called greet that:
takes 1 argument: name.
and it will return hello + name

Ex: greet("Adam")
=> "Hello Adam"
*/


// function greet (name){
//   return("Hello"+ name);

// }
// let  name = prompt("Enter  name:");
// console.log(greet(name));



/*
5
what is the error:
function double(cat) {
  return 2 * x;
}



function double(7) {
  return 2 * 7;
}

function double('7') {
  return 2 * 'x';
}
*/




function double(cat) {
  return 2 * cat;
}



function double(s7) {
  return 2 * 7;
}

function double(r7) {
  return 2 * r7;
}




/*
6
fix these functions:
func double1(x {
  return 2 * x ;
}

functiondouble2 x)
return 2 * x;
}

function (x) double3 {
  return 2 * x;

*/



function double1(x) {
  return 2 * x ;
}

function double2 (x){
return 2 * x;
}

function double3 (x)  {
  return 2 * x;
}

/*
7
Write a function called cube that:
accept 1 parameter and calculate the cube of this number

Ex: cube(4)
=> 64
*/


// function cube(length) {
//   return length**3 ;
// }
// let  length = prompt("Enter  length:");
// console.log(cube(length));


/*
8
Write a function called multiply that:
accept 2 parameters and calculate the multiply of these 2 numbers

Ex: multiply(3,4)
=> 12
Ex: multiply(5,4)
=> 20
*/


// function multiply(num1,num2){
//   return num1*num2;
// }
// let  num1 = prompt("Enter  number 1:");
// let  num2 = prompt("Enter  number 2:");

// console.log(multiply(num1,num2) )



/*
9
Write a function called canIGetADrivingLicense that:
accept 1 parameter represent the age
and if the age greater than or equal to 20 return "yes you can"
otherwise return "please come back after X years to get one"

Ex: canIGetADrivingLicense(21)
=> "yes you can"

Ex: canIGetADrivingLicense(17)
=> "please come back after 3 years to get one"

Ex: canIGetADrivingLicense(20)
=> "yes you can"

*/



// function canIGetADrivingLicense(age) {
//   if (age>=20){
//   console.log ("yes you can");
//   }else if (age<20){
//     console.log(`please come back after ${20-age} years to get one`)
//   }

// }

// let  age = prompt("Enter  your age :");
// canIGetADrivingLicense (age);


/*
10
Write a function called sameLength
that accepts two strings as arguments,
and returns true if those strings have the same length, and false otherwise.

**hint: how we can know string length   Ex: : "tree".length   => 4

Ex: sameLength("tree","clue")
=> true

Ex: sameLength("tree","car")
=> false
*/




// function sameLength(str1, str2) {
//   if (str1.length === str2.length) {
//     console.log("true");
//   } else {
//     console.log("false");
//   }
// }

// sameLength("tree", "clue");





/*
11
Write a function called largerNubmer
that accept two numbers as arguments,
and return the first larger numbers

Ex: largerNubmer(5,6)
=> 6

Ex: largerNubmer(5,3)
=> 5
*/


// function largerNubmer(n1,n2) {

//   if (n1>n2) return n1;
//   else return n2;
// } 
// let   number1 = prompt("Enter   number 1 :");
// let   number2 = prompt("Enter  number 2 :");

// console.log(largerNubmer (number1 ,number2));




/*
12
Write a function called smallerNubmer
that accept three numbers as arguments,
and return the first smaller number

Ex: smallerNubmer(8,6,7)
=> 6

Ex: smallerNubmer(5,99,34)
=> 5

Ex: smallerNubmer(5,99,3)
=> 3

Ex: smallerNubmer(5,3,3)
=> 3

*/




// function smallerNubmer(num1,num2,num3)
// {
//   if((num1<num2)&&(num1<num3))
//     {
//       return num1;
    
//     }
//     else if((num2<num3)&&(num2<num1))
//     return num2;
//     else 
//     return num3;
  
// }   


// let num1 = parseInt(prompt("Enter the  number1:"));
// let num2 = parseInt(prompt("Enter the  number2:")); 
// let num3 = parseInt(prompt("Enter the  number3:")); 

// console.log(smallerNubmer (num1,num2,num3));





/*
13
Write a function called shorterString
that accept five string as an arguments,
and return the first shorter string

Ex: shorterString("air","school","car","by","github")
=> by

Ex: shorterString("air","tr","car","by","github")
=> tr

Ex: shorterString("by","tr","car","air","github")
=> by

Ex: shorterString("air","by","car","school","github")
=> by

Ex: shorterString("air","tr","by","car","github")
=> by

Ex: shorterString("air","tr","car","github","by")
=> by

*/



// function shorterString(str1, str2, str3, str4, str5) {
//   const strings = [str1, str2, str3, str4, str5]; 
//   let shortest = strings[0]; 
  
//   for (let i = 1; i < strings.length; i++) {
//     if (strings[i].length < shortest.length) {
//       shortest = strings[i]; 
//     }
//   }
  
//   return shortest;
// }

//  console.log(shorterString("air", "school", "car", "by", "github")); 





/*
14
Write a function called longerString
that accept four string as an arguments,
and return the first longer string

Ex: longerString("air","school","car","github")
=> school

Ex: longerString("air","schoo","car","github")
=> github

try all the cases (change the order of the longestString)
*/




function longestString(str1, str2, str3, str4) {
  const strings = [str1, str2, str3, str4]; 
  let longest = strings[0]; 
  
  for (let i = 1; i < strings.length; i++) {
    if (strings[i].length > longest.length) {
      longest = strings[i]; 
    }
  }
  
  return longest;
}

 console.log(longestString("air", "school", "car", "github")); 





/*
15
Write a function called isEven
that accept 1 argument as a number,
and return true if this number is even
and false if this number is odd

Ex: isEven(1)
=> false
Ex: isEven(2)
=> true

*/

// function isEven (number) {

//   if (number%2==0){
//     console.log("isEven");
//   }
//   else
//   console.log("isOdd");
// }

// let  number = prompt("Enter number  :");


// isEven(number);



/*



/*
17
Write a function called positive
that accept 1 argument as a number,
and return the positive version of the number passed

Ex: positive(4)
=> 4
Ex: positive(-5)
=> 5

*/

// function positive (number) {

//   if (number>0){
//     return number;
//   }
//   else
//   return (number*(-1));
// }

// let  number = prompt("Enter number  :");


// console.log(positive(number));




/*
18
Write a function called fullName
that accept two parameters, firstName and lastName,
and returns the firstName and lastName concatenated
together with a space in between.

Ex: fullName("Adam","McCallen")
=> "Adam McCallen"
Ex: fullName("Alex", "Mercer")
=> "Alex Mercer"
*/

// function fullName(firstName,  lastName)
// {
//   console.log(firstName+" "+lastName);
// }
//   let   firstName = prompt("Enter  firstName :");
//  let   lastName = prompt("Enter  lastName:");

//  fullName(firstName, lastName);



/*
19
Write a function called average
that takes five numbers as inputs
and returns the average of those numbers.

Ex: average(1,2,3,4,5)
=> 3

Ex: average(5,7,9,3,5)
=> 5.8

*/


// function  average(n1, n2, n3, n4, n5){
//   let avg =(n1+n2+n3+n4+n5)/5;
//   return avg;
// }

//  let num1 = parseInt(prompt("Enter the  number1:"));
//  let num2 = parseInt(prompt("Enter the  number2:")); 
//  let num3 = parseInt(prompt("Enter the  number3:")); 
//  let num4 = parseInt(prompt("Enter the  number4:")); 
//  let num5 = parseInt(prompt("Enter the  number5:")); 

//  console.log(average(num1, num2, num3, num4, num5));






/*
20
Write a function called randomNumber
that didnt takes any parameter
and returns a random number between 0-1
** hint: you can seacrh using MDN

Ex: randomNumber()
=> 0.2278

Ex: randomNumber()
=> 0.475

*/
// function randomNumber() {
//   return Math.random();
// }

// console.log(randomNumber()); 



/*
21
Write a function called randomBetweenNumbers
that takes 2 parameters
and returns a random number between them
** hint: you can seacrh using MDN

Ex: randomBetweenNumbers(1,8)
=> 7.5412

Ex: randomBetweenNumbers(3,100)
=> 23

*/


// function randomBetweenNumbers(min, max) {
//   return Math.random() * (max - min) + min;
// }


// let num1 =Number (prompt("Enter the  number4:")); 
// let num2 = Number (prompt("Enter the  number5:"));
// console.log(randomBetweenNumbers(num1, num2)); 



/*
22
Write a function called scoreInUniversty
that takes 1 parameters
and returns the alpabet in the unevirsty
A => 95-100
B => 85-94
C => 70-84
D=> 50-69
F=> 0-49

Ex: scoreInUniversty(96)
=> "A"

Ex: scoreInUniversty(3)
=> "F"

Ex: scoreInUniversty(71)
=> "C"
*/



// function scoreInUniversty(mark){
// if (mark<49) {
//     console.log("F");
  
// }else if (mark<=69){
//     console.log("D");

// }else if (mark<=84){
//     console.log("C");

// }else if (mark<=94){
//     console.log("C");

// }else if (mark<=100){
//     console.log("A");
// };
// }

// let mark = parseInt(prompt("Enter the Mark"));
// scoreInUniversty(mark);







/*
23
Write a function called counter
that will returns a number bigger
than the one that returnd before
and start from 0

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: counter()
=> 3

*/


// let count = 0;
// function counter() {
//   count++; 
//   return count; 
// }

// console.log(counter()); 



/*
24
Write a function called resetCounter
that will reset the previuos function
and return the number before reset and
a string say that the counter reset

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: counter()
=> 3

Ex: resetCounter()
=> 3 and the counter reset now

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: resetCounter()
=> 2 and the counter reset now

Ex: counter()
=> 1
*/


let count = 0; 

function counter() {
  count++; 
  return count; 
}

function resetCounter() {
  const previousCount = count; 
  count = 0; 
  return {
    previousCount: previousCount,
    message: "The counter has been reset."
  };
}


console.log(counter()); 
console.log(counter());
console.log(counter()); 
console.log(counter()); 

console.log(resetCounter()); 
console.log(counter()); 
