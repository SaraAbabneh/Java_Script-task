 //Write a JavaScript program to converts a specified number to an array of digits. 

//  function numberToDigitsArray(number) {
//     if (typeof number !== 'number') {
//       throw new Error('Input must be a number.');
//     }
//       const digitsArray = number.toString().split('').map(Number);
  
//     return digitsArray;
//   }
  
//   // Test the program
//   const number = 12345;
//  console.log(numberToDigitsArray(number));
// 
  

 // Write a JavaScript program to generate a random hexadecimal color code.

//  function getRandomHexColor() {
//     // Generate three random numbers between 0 and 255
//     const r = Math.floor(Math.random() * 256);
//     const g = Math.floor(Math.random() * 256);
//     const b = Math.floor(Math.random() * 256);
  
//     // Convert the RGB values to hexadecimal format
//     const hexColor = '#' + componentToHex(r) + componentToHex(g) + componentToHex(b);
  
//     return hexColor;
//   }
  
//   function componentToHex(component) {
//     const hex = component.toString(16);
//     return hex.length === 1 ? '0' + hex : hex;
//   }
  
//   // Test the program
//   const randomHexColor = getRandomHexColor();
//   console.log(randomHexColor); 
  
//write the code with another way 


// function stringToBytesLength(str) {
//     let bytesLength = 0;
  
//     for (let i = 0; i < str.length; i++) {
//       const charCode = str.charCodeAt(i);
  
//       // UTF-8 encoding: each character is represented by 1 to 4 bytes
//       if (charCode <= 0x7f) {
//         bytesLength += 1;
//       } else if (charCode <= 0x7ff) {
//         bytesLength += 2;
//       } else if (charCode <= 0xffff) {
//         bytesLength += 3;
//       } else {
//         bytesLength += 4;
//       }
//     }
  
//     return bytesLength;
//   }
  
//   // Test the program
//   const inputString = 'Hello, World!';
//   const lengthInBytes = stringToBytesLength(inputString);
//   console.log(lengthInBytes); // Output: length of the string in bytes, e.g., 13
  


// Write a JavaScript program to get a random number in the specified range.


function getRandomNumber(min, max) {

    const randomNumber = Math.random() * (max - min) + min;
  
    return randomNumber;
  }

  const minRange = 10;
  const maxRange = 15;
  const randomNum = getRandomNumber(minRange, maxRange);
  console.log(randomNum); 
