// Create a function called valuesArray that accept an object
// and return an array have the values inside this object

// let inputObject = { firstName: "Moh", age: 24, movies: [1, 5, "string"] };

// function valuesArray(obj) {
//     return Object.values(obj);
//   }

//   console.log( valuesArray(inputObject));

/********************************************************************************************** */
//Create a function called objectLength that accept an object
// and return the number of keys inside this object

// let inputObject = { a: 1, b: 2, c: 3, d: 4 };
// function objectLength(obj) {
//     const keysArray = Object.keys(obj);
//     return keysArray.length;
//   }

//   console.log(objectLength(inputObject));

/****************************************************************************************** */
// Create a function called evenValue that accept an object
// and return a new object that have only the key/values if the value is even
// Ex: evenValue({a:1, b:2, c:3, d:4})

// const inputObject = { a: 1, b: 2, c: 3, d: 4 };
// function evenValue(obj) {
//     const evenObject = {};

//     for (const [key, value] of Object.entries(obj)) {
//         // console.log(key)
//       if (value % 2 === 0) {
//         evenObject[key] = value;
//         // console.log(evenObject[key])//2,4
//         // console.log(value)//2,4
//       }
//     }

//     return evenObject;
//   }

//   // Test the function

//  console.log (evenValue(inputObject));

/*********************************************************************** */
//  Create a function called longestKey  that accept an object
// and return the value inside the longest key
// Ex: evenValue({car:1, school:2, monster:3, alexMercer:4})=> 4

const inputObject = { car: 1, school: 2, monster: 3, alexMercer: 4 };

function longestKey(obj) {
  let longest = "";

  for (const key in obj) {
    // console.log(key)

    if (key.length > longest.length) {
      // console.log(key.length)
      longest = key;
    }
  }

  return obj[longest];
}

// Test the function

console.log(longestKey(inputObject));
