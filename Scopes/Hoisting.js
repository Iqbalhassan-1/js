"use strict"
function one(){
    // closure 
    // when child function access the parent function variable called closure
    const userName="iqbal";
    function two(){
        const website="youtube";
        console.log(userName);
    }
    // console.log(website);
    two()
}
// one()
// Intresting 
console.log(add(5)) // function before call no error functiin decleration 
function add(num){
    return num+1
}
// function expression 
// after function declare then function call otherwise error
const addTwo=function (num){
    return num+2
}
addTwo(4)