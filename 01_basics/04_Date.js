"use strict"
//DATEs => Declare into milliseconds 
let myDate=new Date() // date return type object instant date
// dates method
console.log(myDate.toString());
console.log(myDate.toDateString()); // dayName month year
console.log(myDate.toLocaleString()); // date / time

let myCreatedDate=new Date(2023,0,23) // months start from zero (0)
console.log(myCreatedDate.toDateString())
// Output Mon Jan 23 2023
// date with time 
// let myCreatedDateTime=new Date(2023,0,23,5,3)
// now month start from 01
// let myCreatedDateTime=new Date("2023-01-14")
// console.log(myCreatedDateTime.toLocaleString())
let myTimeStamp=Date.now() // give time into millisecond
// time convert into second

console.log(Math.floor(Date.now()/1000))  // Time => into Seconds
let newDate=new Date()
// console.log(newDate.getMonth()); // date => Month
// time date change into localestring
newDate.toLocaleString('default',{
    weekday:"long"
})
console.log(newDate);
