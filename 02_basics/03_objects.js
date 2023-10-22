'use strict'
// const tinderUser=new Object() // single ton-object
const tinderUser={}
tinderUser.id="123abc"
tinderUser.name="ali"
tinderUser.isLogin=false
//  console.log("hello",tinderUser); // store into all key value into variables
const regularUser={
    email:'khan@gmail.com',
    fullName:{
        userFullName:{
            firstName:"iqbal",
            lastName:'hassan'
        }
    }
}
// console.log(regularUser.fullName.userFullName.firstName);
const obj1={
    1:"a",
    2:'b',
    3:"c"
}
const obj2={
    4:"a",
    5:'b',
    6:"c"
}
// const obj3=Object.assign({},obj1,obj2)// store all objects values into one object var
const obj3={...obj1,...obj2} // another example
// if check the property of object true or false then use 
console.log(tinderUser.hasOwnProperty("name"))
// check the key inside object ? true/false return
// console.log(obj3);