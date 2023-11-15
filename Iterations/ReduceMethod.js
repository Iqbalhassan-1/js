// Reduce Method
// give accumulator and current value 
// accumulator + currentvalue=result
// if initial value is 0 then in accumulator is 0 then current value add after iterate over all array and give the one result like :


// const array=[1,2,3]
// const OutPut=array.reduce(function(accumulator,currentvalue){console.log(`accumulator ${accumulator} currentavalue ${currentvalue}`);
//     return accumulator+currentvalue
// },0)
// console.log(OutPut);


// use arrowfunction 
// const array=[1,2,3,4,5]
// const initialValue=0;
// const OutPut=array.reduce((accumulator,currentvalue)=>{return accumulator+currentvalue},initialValue)
// console.log(OutPut);


// another axample shoppincart 

const productsList=[{
    name:'product1',
    price:100
},
{
    name:'product2',
    price:200
},{
    name:'product3',
    price:350
},{
    name:'product4',
    price:400
},]

const totalCart=productsList.reduce((acc,product)=>acc+product.price,0)
console.log(totalCart);