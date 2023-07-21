/*
Instructions: 
 - You should solve all these questions using .map() function 
*/

/*
 * Exercise 1:
 *
 * Make an array of numbers that are doubles of the first array
 *
 * Test Case:
 *
 * console.log(doubleNumbers([2, 5, 100]));
 *
 * Result:
 * [4, 10, 200]
 */

// let arr = [2, 5, 100];
// function doubleNumbers(arr){
//   // your code here
//   let doubel_arr =arr.map(function(element,index,array){
//     return element = element*2
//   })
//   console.log(doubel_arr);
// }
// doubleNumbers(arr)

/************************************************************************************** */
/*
 * Exercise 2 :
 *
 * Take an array of numbers and make them strings
 *
 * Test Case:
 *
 * console.log(stringItUp([2, 5, 100]));
 *
 * Result:
 * ["2", "5", "100"]
 */

/********************************************************************************** */

// let arr = [2, 5, 100];
// function stringItUp(arr){
//   // your code here
//  let convert=arr.map(function (ele,ind,arr){
//   return (""+ele)

//  })

//  console.log(convert)
// }
// stringItUp(arr)

/*
 * Exercise 3:
 *
 * Capitalize each of an array of names
 *
 * Test Case:
 *
 * console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"]));
 *
 * Result:
 *  ["John", "Jacob", "Jingleheimer", "Schmidt"]
 */

/*********************************************************************************************** */

// let arr=["john", "JACOB", "jinGleHeimer", "schmidt"]
// function capitalizeNames(arr){
//   // your code here

//   let convertedArr = arr.map(function(ele) {

//    console.log( toCapitalize(ele));
//   });

//   function toCapitalize(str) {
//     // console.log(str)

//     return str.replace(/\b\w/g, function(match) {
//       // console.log(match);
//       return match.toUpperCase();
//     });
//   }
// }
// capitalizeNames(arr);

/*
 * Exercise 4:
 *
 * Make an array of strings of the names
 *
 * Test Case:
 *
 * console.log(namesOnly([
 *   {
 *       name: "Angelina Jolie",
 *       age: 80
 *   },
 *   {
 *       name: "Eric Jones",
 *       age: 2
 *   },
 *   {
 *       name: "Paris Hilton",
 *       age: 5
 *   },
 *   {
 *       name: "Kayne West",
 *       age: 16
 *   },
 *   {
 *       name: "Bob Ziroll",
 *       age: 100
 *   }
 *   ]));
 *
 * Result:
 *  ["Angelina Jolie", "Eric Jones", "Paris Hilton", "Kayne West", "Bob Ziroll"]
 */

/************************************************************************************ */
// let arr=[
//     {
//          name: "Angelina Jolie",
//          age: 80
//      },
//      {
//          name: "Eric Jones",
//          age: 2
//      },
//      {
//          name: "Paris Hilton",
//          age: 5
//      },
//      {
//          name: "Kayne West",
//          age: 16
//      },
//      {
//          name: "Bob Ziroll",
//          age: 100
//      }
//      ]

// function namesOnly(arr){
//   // your code here
//   let get_name=arr.map(function(ele){
//     // console.log(ele.name)
//     return ele.name

//   })
// console.log(get_name)

// }
// namesOnly(arr)

/*
 * Exercise 5:
 *
 * Make an array of strings of the names saying whether or not they can go to The Matrix
 *
 * Test Case:
 *
 * console.log(makeStrings([
 *    {
 *       name: "Angelina Jolie",
 *       age: 80
 *   },
 *   {
 *       name: "Eric Jones",
 *       age: 2
 *   },
 *   {
 *       name: "Paris Hilton",
 *       age: 5
 *   },
 *   {
 *       name: "Kayne West",
 *       age: 16
 *   },
 *   {
 *       name: "Bob Ziroll",
 *       age: 100
 *   }
 * ]));
 *
 * Result:
 *
 * ["Angelina Jolie can go to The Matrix",
 * "Eric Jones is under age!!",
 * "Paris Hilton is under age!!",
 * "Kayne West is under age!!",
 * "Bob Ziroll can go to The Matrix"]
 *  ["John", "Jacob", "Jingleheimer", "Schmidt"]
 */

//   /***************************************************************************** */

// let arr=[
//       {
//          name: "Angelina Jolie",
//          age: 80
//      },
//      {
//          name: "Eric Jones",
//          age: 2
//      },
//      {
//          name: "Paris Hilton",
//          age: 5
//      },
//      {
//          name: "Kayne West",
//          age: 16
//      },
//      {
//          name: "Bob Ziroll",
//          age: 100
//      }
//    ]

// function makeStrings(arr){
//   // your code here

//   let go=arr.map(function(ele){
//     // console.log(ele.age)
//     if(ele.age>20){
//       // console.log(ele)
//       // console.log(ele.name)
//       console.log(`${ele.name} can go to The Matrix`)
//     }
//     else{
//       console.log(`${ele.name}  is under age!!`)
//     }

//   })

// }
// makeStrings(arr)

/*
 * Exercise 6:
 *
 * Make an array of the names in h1s, and the ages in h2s
 *
 * Test Case:
 *
 * console.log(readyToPutInTheDOM([
 *   {
 *       name: "Angelina Jolie",
 *       age: 80
 *   },
 *   {
 *       name: "Eric Jones",
 *       age: 2
 *   },
 *   {
 *       name: "Paris Hilton",
 *       age: 5
 *   },
 *   {
 *       name: "Kayne West",
 *       age: 16
 *   },
 *   {
 *       name: "Bob Ziroll",
 *       age: 100
 *   }
 * ]));
 *
 * Result:
 *
 * ["<h1>Angelina Jolie</h1><h2>80</h2>",
 * "<h1>Eric Jones</h1><h2>2</h2>",
 * "<h1>Paris Hilton</h1><h2>5</h2>",
 * "<h1>Kayne West</h1><h2>16</h2>",
 * "<h1>Bob Ziroll</h1><h2>100</h2>"]
 */

/************************************************************************************** */

// let arr=
// [
//      {
//          name: "Angelina Jolie",
//          age: 80
//      },
//      {
//          name: "Eric Jones",
//          age: 2
//      },
//      {
//          name: "Paris Hilton",
//          age: 5
//      },
//      {
//          name: "Kayne West",
//          age: 16
//      },
//      {
//          name: "Bob Ziroll",
//          age: 100
//      }
//    ]

// function readyToPutInTheDOM(arr){
//   // your code here
//   let array = [];
//   let rewrite = arr.map(function(ele){
//     // console.log(ele)

//     array += [
//       `<h1>${ele.name}</h1><h2>${ele.age}</h2>`,

//     ]

//   })

//   console.log(array)
// }
// readyToPutInTheDOM(arr)

/*
 * Exercise 7:
 * Write a function called doubleValues which accepts an array and returns a new array with all the values in the array passed to the function doubled
 *
 * Test Cases:
 *   Test Case 1:  doubleValues([1,2,3])
 *   Test Case 2:  doubleValues([1,-2,-3])
 *
 * Result:
 * Test Case 1: [2,4,6]
 * Test Case 2: [2,-4,-6]
 */
/***************************************************************************** */

// let arr1=[1,2,3];
// let arr2=[1,-2,-3];

// function doubleValues(arr){
//     // your code here

//     let mew_value= arr.map(function(ele){
//       // console.log(ele)

//       return(ele*=2);
//     })

//     return mew_value;

//   }
//   console.log(doubleValues(arr2))

/*
 * Exercise 8:
 * Write a function called valTimesIndex which accepts an array and returns a new array with each value multiplied by the index it is currently at in the array.
 *
 *
 * Test Cases :
 *   Test Case 1:  valTimesIndex([1,2,3])
 *   Test Case 2:  valTimesIndex([1,-2,-3])
 *
 * Result
 * Test Case 1: [0,2,6]
 * Test Case 2: [0,-2,-6]
 */

/************************************************************************************************** */
// let arr1=[1,2,3]
// let arr2=[1,-2,-3]

// function valTimesIndex(arr){
//    // your code here

//    let double = arr.map(function (ele,index){
//     console.log(ele)
//       return multiplied(ele,index)

//    })

//    function multiplied(ele,index) {
//     return ele*index;
//    }

//   return double;
// }

// console.log(valTimesIndex(arr2));

/*
 * Exercise 9:
 * Write a function called extractKey which accepts an array of objects and some key and returns a new array with the value
 * of that key in each object.
 *
 * Test Case:
 * extractKey([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'name')
 *
 * Result:
 * ['Elie', 'Tim', 'Matt', 'Colt']
 */

/*********************************************************************************************** */

// let arr=[{ name: 'Elie'} , { name: 'Tim'} , { name: 'Matt'} , { name: 'Colt'}]

// function extractKey ( arr,key ) {

//    // your code here
//    let Key_value=arr.map(function(ele){
//       return ele[key]
//    })

//    return Key_value

// }
// console.log(extractKey ( arr,'name' ))

/*
 * Exercise 10:
 * Write a function called extractFullName which accepts an array of objects and returns a new array with the value of the key with a name of "first" and the value of a key with the name of  "last" in each object, concatenated together with a space.
 *
 * Examples:
 * extractFullName([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia"}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele"}])
 * // ['Elie Schoppik', 'Tim Garcia', 'Matt Lane', 'Colt Steele']
 */

/**************************************************************************** */
//   let arr=[
//     {first: 'Elie', last:"Schoppik"},
//    {first: 'Tim', last:"Garcia"},
//    {first: 'Matt', last:"Lane"},
//    {first: 'Colt', last:"Steele"}]

//  function extractFullName(arr){
//     // your code here
//     let extract = arr.map(function (ele){
//       // console.log(ele.first)

//       return (ele.first + ' ' + ele.last)
//     })
//     return extract

//  }
//   console.log( extractFullName(arr))
