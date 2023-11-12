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