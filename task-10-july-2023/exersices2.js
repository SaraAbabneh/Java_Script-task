/* 1. Write a JavaScript program that returns rate as text
less than 50 return ==> Fail
equal or between 50 and 59 ===> E
equal or between 60 and 69 ===> D
equal or between 70 and 79 ===> C
equal or between 80 and 89 ===> B
equal or between 90 and 100 ===> A
*/

let mark = parseInt(prompt("Enter the Mark"));
if (mark<50) {
    console.log("Fail");
  
}else if (mark<=59){
    console.log("E");

}else if (mark<=69){
    console.log("D");

}else if (mark<=79){
    console.log("C");

}else if (mark<90){
    console.log("B");
}else{
    console.log("A");
};

