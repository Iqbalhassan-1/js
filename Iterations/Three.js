// array specific loop

// for of
// ["","",""]
// [{},{},{},{}]
const arr=[1,2,3,4,5]
// object => kis chez ki oper loop lagana hai
// string array object 
// show each value => result 
// for (const num of object) {
    
// }
for (const num of arr) {
    // console.log(num);
 }

 const greetings="Hello World!"
 for(const greet of greetings){
    // console.log(greet);
 }

 // Maps show =>object hold key-value pairs unique value collecting
 // Not changing the order if you enter two times same value enter
const map=new Map()
map.set('Pak',"Pakistan")
map.set('Afg',"Afghanistan")
map.set('Fra',"France")
map.set('Pak',"Pakistan")

// console.log(map);

for (const [key,value] of map) {
    // console.log(key,":->" ,value);
}

const myObject={
    game1:"Gta",
    game2:"IGI",
}
// for (const [key,value] of myObject) {
//     console.log(key,value);
// }

