'use strict'
// singleTon
// Object.create
// symbol => into object get
const mysym=Symbol("key2")
// object literals
const jsUser={name:"iqbal",age:22,location:"Swat",email:"iqbal@gmail.com",isLoggedIn:false,lastLoginDays:["Monday","Tuesday"],
[mysym]:"myKey1",
"full name":"iqbal hassan"}
console.log(jsUser.email) // 1 => get value from object
console.log(jsUser["email"]); // 2 => get value from object with help of key
console.log(jsUser[mysym]); // get symbol value
console.log(jsUser["full name"]) // get value => 3
// now how to change the value or override 
jsUser.email="iqbalhassan123@gmail.com"
// now object => Freeze means after does not value changeble or override  ex
// Object.freeze(jsUser)
// jsUser.email="iqbal321@gmail.com" // Not update bcz freeze
jsUser.greeting=function(){
    console.log(`hello function ${this["full name"]}`);
}

console.log(jsUser.greeting());