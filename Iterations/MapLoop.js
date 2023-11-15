
// MAP => Return New Array 
const myNumbers=[1,2,3,4,5,6,7,8,9,10]
//  const newNums=myNumbers.map((num)=>num+5)

//  console.log(newNums);
 // now solve on foreach

//  const newNumsForEach=[]
//  myNumbers.forEach((num)=>{
//     if(num>0){
//         newNumsForEach.push(num+5)
//     }
//  })
//  console.log(newNumsForEach);

//*************************continue *****/


// Chaining E.G map()=>map()=>filter()

// const newNums=myNumbers
//               .map((num1)=>num1*10)
//               .map((num2)=>num2+1)
// console.log(newNums);
// // OutPut => num1 => 1*10 then num2=>10+1 =11 chaining exmple

const newNums=myNumbers
              .map((num1)=>num1*10)
              .map((num2)=>num2+1)
              .filter((num3)=>num3>=40)
console.log(newNums);
// OutPut => num1 [] then num2 [] after filter then give value true 

