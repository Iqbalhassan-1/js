const userEmail="khan@gmail.com"
if(userEmail){
    console.log("login");
}else{
    console.log("No Email");
}
 
// Falsy Values =>
// 1:false
// 2:0,
// 3:-0,
// 4:BigInt 0n,
// 5:"",
// 6:null,
// 7:undefined,
// 8:Nan

// Truthy Values =>
// 1:"0" => Inside string then true
// 2:"false" => truthy value bcz inside the string
// 3:" " => truthy space inside string
// 4:[] => true empty array 
// 5:{} => true empty object
// 6:function(){} => truthy empty function 

// Nullish Coalescing Operator (??) => working on null undefined
 
// let val1;
// val1=5??10 
// val1=null ?? 10 // means agr value null hai to 10 assign krlu
// val1=undefined??15 // same above
// val1=null??10??20
// console.log(val1)

// Terniary Operator
// condition ?true:false
const iceTeaPrice=100
iceTeaPrice <= 80 ? console.log("true"): console.log("false");;