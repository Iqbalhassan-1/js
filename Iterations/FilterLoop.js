// const coding=['js',"cpp","java"]

// const values=coding.forEach((item)=>{
//     console.log(item);
// })
// console.log(values); // foreach return value is undefined 

// Filter => Return New Array 
const myNums=[1,2,3,4,5,6,7,8,9,10]
// const greaterThanFour=myNums.filter( (num)=>num>4)
// const greaterThanFour=myNums.filter( (num)=>{
// return num >4
// })
// because start scope {} use Return inside scope
// console.log(greaterThanFour);

// now use foreach for this let's start
// const newNums=[]
// myNums.forEach((num)=>{
//     if(num>4){
//         newNums.push(num)
//     }
// })
// console.log(newNums);

const books= [{
    title:'Book One',
    genre:'Fiction',
    publish:1981,
},
{   title:'Book Two',
    genre:'Non-fiction',
    publish:1992
}]
const userBooks=books.filter((book)=>book.genre==="Fiction")
// give the into userBooks where the result true or match filter

const giveThePublish=books.filter((bk)=>{return bk.publish>=1982})
console.log(userBooks,giveThePublish);
// use return because scope {} use 