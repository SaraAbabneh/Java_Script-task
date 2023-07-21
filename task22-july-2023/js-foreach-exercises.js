/*
 * Exercise 1:
 * Write a function called doubleValues which accepts an array and returns a new array with all the values in the array passed to the function doubled
 *
 * Test Case:
 *    Test Case 1: doubleValues([1,2,3])
 *    Test Case 2: doubleValues([5,1,2,3,10])
 *
 * Result:
 * Test Case 1:  [2,4,6]
 * Test Case 2: [10,2,4,6,20]
 *
 *
 */

/********************************************************************************** */

// let arr1=[1,2,3];
// let arr2=[5,1,2,3,10];

// function doubleValues(arr){
//    //Your Code Here
//   let Arr=[]
//   let doubel=arr.forEach(ele => {

//     Arr.push(ele * 2);

//   });

//   console.log(Arr);

// }
// doubleValues(arr1);

/*
 * Exercise 2:
 * Write a function called onlyEvenValues which accepts an array and returns a new array with only the even values in the array passed to the function
 *
 * Test Cases:
 *   onlyEvenValues([1,2,3])
 *   onlyEvenValues([5,1,2,3,10])
 *
 * Result:
 *  Test Case 1:  [2]
 *  Test Case 2: [2,10]
 */
/********************************************************************** */

// let arr1=[1,2,3];
// let arr2=[5,1,2,3,10];
// function onlyEvenValues(arr)

// {

//     //Your Code Here
//     let even_array=[];
//      arr.forEach(ele=> {

//       if(ele %2 ==0){
//         even_array.push(ele);
//       }
//     })

//     console.log(even_array);

// }
// onlyEvenValues(arr2)

/*
 * Exercise 3:
 * Write a function called showFirstAndLast which accepts an array of strings and returns a new array with only the first and last character of each string.
 *
 * Test Case:
 *   Test Case 1: showFirstAndLast(['colt','matt', 'tim', 'udemy'])
 *   Test Case 2 :showFirstAndLast(['hi', 'goodbye', 'smile'])
 *
 * Result:
 * Test Case 1: ["ct", "mt", "tm", "uy"]
 * Test Case 2: ['hi', 'ge', 'se']
 *
 */

/********************************************************************************* */

// let arr1=['colt','matt', 'tim', 'udemy'];

// function showFirstAndLast(arr) {
//   let result = [];
//   arr.forEach(function(str) {
//     // console.log(str);
//     result.push(str[0] + str[str.length - 1]);
//   });
//   return result;
// }

// console.log(showFirstAndLast(arr1))

/*
 * Exercise 4:
 * Write a function called addKeyAndValue which accepts an array of objects, a key, and a value and returns the array passed
 * to the function with the new key and value added for each object
 *
 * Test Cases:
 *   Test Case :addKeyAndValue([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'title', 'instructor')
 *
 * Result:
 *   [{name: 'Elie', title:'instructor'}, {name: 'Tim', title:'instructor'}, {name: 'Matt', title:'instructor'}, {name: 'Colt', title:'instructor'}]
 *
 */

/*********************************************************************************** */

// let result = addKeyAndValue (
//   [{ name: 'Elie'},
//   { name: 'Tim' },
//   { name: 'Matt' },
//   { name: 'Colt' }]
//  , 'title', 'instructor');

// function addKeyAndValue(arr,key,value){
//     //Your Code Here
//     console.log(key,value);

//       arr.forEach(function(obj) {
//         // console.log("obj ",obj);//{ name: 'Elie'}
//         // console.log("value",value);//instructor
//         // console.log("key",key);//title
//         // console.log("obj[key]",value);

//         obj[key] = value;
//       });
//       return arr;

// }
// console.log(result);

/*
 * Exercise 5:
 * Write a function called vowelCount which accepts a string and returns an object with the keys as the vowel and the
 * values as the number of times the vowel appears in the string. This function should be case insensitive so a lowercase letter and uppercase letter should count
 *
 * Test Cases 1: vowelCount('Elie') // {e:2,i:1};
 * Test Cases 2:  vowelCount('Tim') // {i:1};
 * Test Cases 3:  vowelCount('Matt') // {a:1})
 * Test Cases 4:  vowelCount('hmmm') // {};
 * Test Cases 5:  vowelCount('I Am awesome and so are you') // {i: 1, a: 4, e: 3, o: 3, u: 1};
 *
 *
 * Result:
 * Test Cases 1: {e:2,i:1};
 * Test Cases 2: {i:1};
 * Test Cases 3: {a:1})
 * Test Cases 4: {};
 * Test Cases 5: {i: 1, a: 4, e: 3, o: 3, u: 1};
 *
 */
/**************************************************************** */

// let str = 'Elie';

// function vowelCount(str) {
//   let vowels = ['a', 'e', 'i', 'o', 'u'];
//   let count = 0;

//   str.toLowerCase().split('').forEach(function(char) {
//     if (vowels.includes(char)) {
//       count++;
//     }
//   });

//   return count;
// }

// console.log( vowelCount(str))

// The reason we use a Set for vowels is because it provides constant time complexity for the has() method, meaning it can quickly check if an element exists in the set.
// This is beneficial when checking for vowels in the string because the has() method works efficiently, even for large sets.

// If we were to use an array instead of a Set, we would need to use the includes() method to check if a character is a vowel,
//  which has linear time complexity. This means that the time it takes to check for vowels would increase linearly with the length of the array.
// As a result, using a Set is a more efficient approach for checking if a character is a vowel.
