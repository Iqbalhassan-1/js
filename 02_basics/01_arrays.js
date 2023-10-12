"use strict"
// array
// Array => object
// Array => resizable add more elements
// Array => store collection multiple item under a single variable
const myArr=[0,1,2,3,4,5]
// access value from array start from 0 index 
// deep copy => don't share the same reference
// shallow copy => share the same reference

// Declare array or create array
const myHeros=['iqbal','hassan']

const myArr2=new Array(1,2,3,4,5)
// console.log(myArr2[0]);
// Array Methods ******
// 1 => Push
// myArr.push(10) // value push or add at end of array => myArr
// 2 => Pop
// myArr.pop() // last value remove from last index
// 3 => Unshift()
// myArr.unshift(12) // value add to 0 index 
// 4 => Shift()
myArr.shift() // value remove from 0 index
// 5 => includes()
myArr.includes(2) // return true or false
// 6 => indexOf()
myArr.indexOf(5) // give the value index which index the element will be store
// 7 => join() 
const newArr=myArr.join() // join all elements and return value or type as string the all elements

// 8 => slice()
const originalArray=[0,1,2,3,4,5,6]
// first value remove from array when enter one value
// const sliceArray=originalArray.slice(2,3) //start ***** end
// console.log("A",originalArray);
// console.log("B",sliceArray);
const spliceArray=originalArray.splice(2,3) //start ***** end
// splice remove the element also from original array 
// slice remove the element but not affected the parent or original array
console.log("c",originalArray);
console.log("D",spliceArray);

