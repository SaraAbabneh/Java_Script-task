console.log('Here is : ', 'Reduce & Filter') 

//Using Reduce 1 -5
var persons = [
  { name: { first: 'John', last: 'Hob' }, age: 35 },
  { name: { first: 'Alex', last: 'Mercer' }, age: 25 },
  { name: { first: 'Alice', last: 'Zaheer' }, age: 24 },
  { name: { first: 'Zues', last: 'Odin' }, age: 55 },
  { name: { first: 'Soso', last: 'Al-Amora' }, age: 67 }
];

//************************************************************************* */
/*
1
Using the varabile persons
Create a function called avgAge
that accept an array
and return average age of this array

Ex: avgAge(persons) => 41.2
*/

// console.log(persons[0].age);
 
// function avgAge(persons) {
 
//   let sumOfAges = persons.reduce(function(accumulator, currentValue) {
//     return accumulator + currentValue.age;
//   }, 0);

//   let averageAge = sumOfAges / persons.length;

//   return averageAge;
// }
// console.log(avgAge(persons));

/*
2
Using the varabile persons
Create a function called longestName
that accept an array
and return the longerst full name

Ex: longestName(persons) => 'Soso Al-Amora'
*/
//******************************************************************* */

// // console.log(persons[0].name.first);
// let longest_name=persons[0].name.first + persons[0].name.last
// // console.log(longest_name.length);
// function longestName(persons) {
  
//  let longest =persons.reduce(function(accumulator, currentValue) {
//   let first_name=accumulator.name.first + accumulator.name.last
//   let sec_name=currentValue.name.first + currentValue.name.last
//   return (first_name.length > sec_name.length) ? accumulator : currentValue

 
//  },persons[0])

//  return longest.name.first + longest.name.last
// };
// longestName(persons)

// console.log(longestName(persons)); 



/*
3
Create a function called maxNumber
that accept an array
and return max number

Ex: maxNumber([1,2,4,9]) => 9
*/

// let Numbers=[1,2,4,9]
// function maxNumber(Numbers){
//   let max_Number = Numbers.reduce(function(accumulator, currentValue){
//     return accumulator>currentValue ? accumulator : currentValue


//   },)

//   return max_Number;

// }
// console.log(maxNumber(Numbers))



/*
4
Create a function called repeatChar
that accept a string and char
and return number times that this char repeat inside the string

Ex: repeatChar("hello world",w) => 1
*/

//***************************************************************************** */
// function repeatChar(string, char) {
//   let counter=0
//   let count = string.split("").reduce(function(accumulator, currentValue) {
 
//     if (accumulator==char||currentValue==char) {
//       counter++
//     }
//   },);

//   return counter;
// }

// let str = "hello world";
// let char = "o";

// console.log(repeatChar(str, char)); 


/*
5
Create a function called usAndNumberBeetweenUs
that accept two numbers
and return array of these two numbers and the numbers between them

Ex: usAndNumberBeetweenUs(2,5) => [2,3,4,5]
*/


//********************************************************************************** */
// function usAndNumberBeetweenUs(A,B) {
//   let arr=[A,B];
//   let new_arr=[];
//   let add_bet=arr.reduce(function(accumulator, currentValue) {
    
//     let length= currentValue-accumulator;
//     for(i=0;i<length;i++){
//       new_arr[i]=accumulator+(i+1);
//     }

//   },)

//   console.log(new_arr);
//   new_arr.unshift(A);
//   console.log(new_arr);
// }

// usAndNumberBeetweenUs(-1,6)


//Filter 6 - 11
/*
6
Create a function called evenOnly
that accept an array
and return an array of even number only

Ex: evenOnly([1,8,6,4]) => [8,6,4]
*/
//*********************************************************************** */
// let arr =[1,8,6,4]
// function evenOnly(arr){

//   let even_arr= arr.filter(function(num) {
//     return num%2==0;
    
//   })
//   console.log(even_arr)

// };
// evenOnly(arr)



/*
7
Create a function called multiFour
that accept an array
and return an array of these number that is a mutiply by 4

Ex: multiFour([1,8,6,4]) => [8,4]
*/
//*************************************************************************************** */

// let arr = [1,8,6,4];
// function multiFour(arr){

//   let multi4 = arr.filter (function(num){

//     return num%4==0;

//   })
//   console.log(multi4)
// };
// multiFour(arr);





/*
8
**this question not that easy mybe you will need to use two function inside each other

Create a function called containChar
that accept an array of string
and return an array of these string that contain this char

Ex: containChar(["hello","world"],w) => ["world"]
Ex: containChar(["hello","world"],l) => ["hello","world"]
*/

//********************************************************************************************************** */
 
//   let arr_str=["hello","world","lana"]
//  let w="o"

// //  console.log(arr_str[0])
// function containChar (arr,w){
//   let check = arr.filter (function(singel){
//     // console.log(singel)
//     let flag=0

    
//     // console.log(`singel  = ${singel}`)
//     let inner_check= singel.split("").filter(function(inner_singel){
//       // console.log(`inner_check  = ${inner_singel}`)
      
//       if(inner_singel==w){
//         flag=1;
//       }else{
//         // console.log("not include")
//       }
      

//     })
    
//    if(flag==1){
//     return singel
//    }
//     console.log("**********************************************************")
    

//   })
  
//   console.log(check)
//  }

//  containChar (arr_str,w)




/*
9
Create a function called evenIndexOddLength
that accept an array of strings
and return an array that have the string with odd length in even index

var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: evenIndexOddLength(strings) => ["madrasa"]
*/
/**************************************************************************************** */

// var strings = ["alex", "mercer", "madrasa", "rashed2", "emad", "hala"];

// function evenIndexOddLength(strings) {
//   let result = strings.filter(function(string, index) {
//     return index % 2 === 0 && string.length % 2 !== 0;
//   });

//   return result;
// }

// let filteredStrings = evenIndexOddLength(strings);
// console.log(filteredStrings);







/*
10
Using the varabile persons
Create a function called olderThan
that accept an array and number
and return the person that have age older than this number

Ex: olderThan(persons,56) => [{ name: { first: 'Soso', last: 'Al-Amora' }, age: 67 }]
*/
/************************************************************************************* */

// function olderThan(persons,ch_age) {
// let check =persons.filter(function(ele){
//     if(ele.age > ch_age){
//       console.log(ele)
//     }
//     })

// }

// olderThan(persons,56);




/*
11
Create a function called shorterThan
that accept an array of strings and a number
and return the shorter string than the number

var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: shorterThan(strings,5) => ["alex","emad","hala"]
*/

/**************************************************************************** */

// var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
// function shorterThan(strings,num){
//   let check=strings.filter(function(ele){
//     if (ele.length<num)
//     console.log(ele)
  

//   })

// }
// shorterThan(strings,5)

// if you finish the exercises review the material of the week and help your classmate
