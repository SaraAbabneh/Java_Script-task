// 1. Write a JS code to print numbers from 1 to 10


for (var i = 0; i <=10;i++)
{
   console.log("the number = ",i);
};


// /*2. Write a JS code to print Even numbers in arr :
//    var arr = [13,23,12,45,22,48,66,100]
// */

   var arr = [13,23,12,45,22,48,66,100]
   for (var i = 0; i <= arr.length; i++){

      if (arr[i]%2==0){
         console.log("The number =" , arr[i]);
      }
   };



/* 
3. Write a JS code to print a pattern using for loop

   1 
   1 2 
   1 2 3 
   1 2 3 4 
   1 2 3 4 5 
   1 2 3 4 5 6 
   1 2 3 4 5 6 7 
   1 2 3 4 5 6 7 8 

*/
var str="1";
for (var i =2; i<=9;i++){
   console.log( str);
   str +=`${i}`;

};
 /* 

 
 Check if a string contains the letter “y”. Print “yes” if it does and “no” if it does not.
let x = "don’t know why"
*/

let check="no";
let str2 = "dont know why";
for (let i = 0; i <= (str2.length)-1; i++) {
   
   if (str2[i]=="y" ){
      check="yes"
   }

}
console.log(check);

