"use strict"
 // for loop
 let array=[1,2,3,4,6]
 for (let index = 0; index < array.length; index++) {
    const element = array[index];
    console.log(element)
 }
 // 1 - start from 0 index declare index
 // 2 - Then check the condition if true then go to inside for loop body 
 // 3 - Increment value of index++ then check the condition if true then go to inside body ...until false they will be iteration


 // 2nd example
 for (let i = 1; i < 10; i++) {
    // console.log(`outer Loop value : ${i}`);
    for (let j = 1; j < 10; j++) {
    // console.log(`Inner Loop value : ${j} and ${i}`);
    // console.log(i+ " * " +j+ " = " +i*j);
    }
 }

 