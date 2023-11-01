"use strict"
// How to execute code ?
// Executation Context ?
// Call Stack ?
// => Javascript Execuation Context => Means  how to run the the file or execute.
// JavascriptFile => 1 => Global Executation Context=>This 
// Global Executation Context 
// Function Executation Context
// Eval Executation Context (Not Important)

// File=> 1 phase Memory Creation Phase => FOR VAR +/- MEMORY allocate


// Example :
 let val=10;
 let val2=5;
 function addNum(num1,num2){
    let total=num1+num2
    return total
 }
 let result1=addNum(2,3)

 // 1 => Global Execution allocate into this
 // 2 => Memory Phase all variable collect function 
  val1=>undefined;
  val2=>undefined;
  addNum=>defination // function
  result1=>undefined 
  // this is first cycle
// 3 => Executation Phase
val=>10;
val=>5; 
// function skip
addNum => // new variable enviroment +executation thread // generate box where we can execute again memory phase and executation phase for function like this 
// MemoryPhase Func =>.
val=>undefined,
val2=>undefined
total=>undefined
// execuation phase Func =>
// num1=> allocate value e.g 10
// num2=> allocate value e.g 5
// total=> allocate value e.g 15 return to global execuation phase or context (1) and after that for function where they can generate box can be delete after return value of function
result1 => 15 


//**********Call Stack */
// 1 => Global Execution =>{
Lifo // LAST IN FIRST OUT IN CALL STACK 
[ONE(),TWO(),THREE()] => First Out THREE(),TWO()  THEN ONE ()
}


