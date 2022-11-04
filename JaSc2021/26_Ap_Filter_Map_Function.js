// Filter is use for get the data As Element 
// But the map can give As a boolean value in the result of the Given Comparesion expression     

// const arry01 = [1,4,9,16,25];

// let newArry01= arry01.filter((element,index,array)=>{
//     // console.log(element);
//     return element > 9

// })

// let newArry01= arry01.map((element,index,array)=>{
//         // console.log(element);
//         return element > 9
    
// })

// console.log(arry01);
// console.log(newArry01);


// MAP CHAIN EFFECT
// Q1. Find only those element which are multiply by 2 and the result is greater than the 10 ?

const ar00 = [2,3,4,6,8];

// BY MAP METHOD 
let newArr02 = ar00.map((CurrElement)=>{
    return CurrElement*2;
}).filter((element)=>{
    console.log("Current Element* 2 = " +element);
    return element> 10;
})

// BY FILTER METHOD
// let newArr02 = ar00.filter((CurrElement)=>{
//     return CurrElement*2 > 10;
// })
console.log(newArr02);