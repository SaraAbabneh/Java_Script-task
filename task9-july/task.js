

let x = 250 ;
/*
create variable Calculate the value of zakat for x ,If you know the percentage of zakat = 2.5 %; 

*/

let zakat = (x*2.5) /100;
console.log(zakat);


/*
Array Tasks : 
1
Correct the syntax error
 [ 1,7  9  45, ]

 ["Str" "alex","moh"

 'the','fox' 'over' lazy, 'dog',  ]

*/

[ 1,7 , 9 , 45 ]

 ["Str" ,"alex","moh",'the','fox over' ,'lazy', 'dog' ];


/*
2
What the index of "Banana","Tomato"*/
var fruits=["Tomato","Banana","Watermelon"]

fruits.indexOf("Banana");
fruits.indexOf("Tomato");



/*
3
Create an array represents your:
1- Favorite Food (2)
2- Favorite Sport (3)
3- Favorite Movie (2)
*/
 let my_Favorite_Food=["Tomato","Banana","Watermelon"];
 let my_Favorite_Sport=['Tennis','Basketball','Volleyball'];
 let my_Favorite_Movie=['The Vampire Diaries','the walker'];


/*
4
Create a Variable to return the first element in an array 
Ex: firstOfArray([1,4,5]) => 1
Ex: firstOfArray(["t","u","g","x"]) => "t"
*/
var first_Of_Array = [1,4,5];
var first_element = first_Of_Array[0];
console.log("first_element  " ,first_element);


var first_Of_Array2 = ["t","u","g","x"];
var first_element_2 = first_Of_Array2[0];
console.log("first_element_2" ,first_element_2);






/*
5
Create a Variable to return the lastOfArray element in an array 

Ex: lastOfArray([1,4,5]) => 5
Ex: lastOfArray(["t","u","g","x"]) => "x"


*/


var first_Of_Array = [1,4,5];
console.log(first_Of_Array);


var first_Of_Array2 = ["t","u","g","x"];

let last_element = first_Of_Array[(first_Of_Array.length)-1];
let last_element_2 = first_Of_Array2[(first_Of_Array2.length)-1];

console.log("last_element " ,last_element );
console.log("last_element " ,last_element_2 );


/*
6
Using console make this array to be like this one (push, unshift, shift, pop)

var array = [0,5,7,9]
=> [1,3,4,6,8,9,10]

*/
var array = [0, 5, 7, 9];

array.shift(0);
array.shift(0);
array.shift(0);
console.log(array);
array.push(10);
console.log(array);
array.unshift(1,3,4,6,8);
console.log(array);






/*
7
Using the console try to figure out what the thing thats (push, unshift, shift, pop) return to you
*/
var array2 = [5,9,-7,3.5];
var lenght_arry = array2.length;
array2.push(10,5);
console.log(array2);
console.log("lenght_arry =",lenght_arry);
console.log(".........unshift.............");

var array_unshift = [5,9,-7,3.5];
var lenght_array_unshift = array_unshift.length;
array2.unshift(10,11,12);
console.log(array_unshift);
console.log("lenght_array_unshift ",lenght_array_unshift);
console.log("..........shift............");

var array_shift = [5,9,-7,3.5];
array_shift.shift(2);
var lenght_array_shift = array_shift.length;
console.log(array_shift);
console.log("lenght_array_shift  ",lenght_array_shift);
console.log("........pop..............");

var array_pop = [5,9,-7,3.5];
var lenght_array_pop = array_pop.length;
array2.pop(2);
console.log(array_pop);
console.log( "lenght_array_pop ",lenght_array_pop);
console.log("......................");











/*
8.
Write a JavaScript program to sort the items of an array.
Sample array : var arr1 = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];
Sample Output : -4,-3,1,2,3,5,6,7,8
*/

var arr1 = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];
arr1.sort();
arr1[0]=-4;
arr1[1]=-3;
console.log(arr1);





