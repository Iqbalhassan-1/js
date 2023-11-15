// foreach loop
// high order function
const coding=["js","rubi","java","python","cpp"]
// pass to foreach callback fn
// coding.forEach( function(value){
// console.log(value);
// })

// Arrow Function Use =>
// coding.forEach((value)=>{
//     console.log(value);
// })

// now use function and pass that function into foreach they will give the result same as above
// function print(value){
//     console.log(value);
// }
// coding.forEach(print)

// get more value like index and full array
// coding.forEach((item,index,arr)=>{
//     console.log(index,item,arr);
// })
const codingLanguage=[
    {
    name:'Js',
    fullName:"Javascript"
},
{
    name:'Py',
    fullName:"Python"
},
]
codingLanguage.forEach((val)=>{
    console.log(`${val.name} the fullName is ${val.fullName}`);
})