"use strict"
function calculateCartPrice(...num1){
return num1
}
// console.log(calculateCartPrice(2,200,300))
// Return mulitple value with help of rest operator
const user={
    name:'iqbal',
    price:199,
}
function handleObject(anyobject){
    console.log(`user name is ${anyobject.name} and price is ${anyobject.price}`);
}
handleObject(user)
const myArray=[200,400,100,600]
function returnSecondValue(getArray){
    return getArray[1]
}
// console.log(returnSecondValue(myArray));// same as 
// console.log(returnSecondValue([100,200,300,400]));