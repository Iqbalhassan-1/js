"use strict"
let score =33; // number
let newScore ="33abc"; // string

//console.log(typeof(newScore));

let valueInNumber=Number(newScore) // convert string to number use Number
//console.log(typeof(valueInNumber));
//console.log(valueInNumber); // Result bcz 33abc =>  you NaN

// convert string to number
// "33" => 33
// "33abc" => NaN
// true => 1 ; False => 0;

// convert number ,string to boolean
// let isLogginIn=1;
let isLogginIn=""; 
let isBoolean=Boolean(isLogginIn)
//console.log(isBoolean); // result true bcz 1 
 // number,string to boolean 
 // 1 => true 
 // 0 => false 
 // "" => false
 // "something" => true

 // any thing convert to string now 
 let someNumber=33;
 let stringNumber=String(someNumber)
console.log(typeof stringNumber);