// Fat Arrow Function
// 1. In fat arrow function first we have to define function then after we can call it 
//    but in the normal we can call also first and then define function 


// This is the way to write the fat Arrow Function
// Variable function_name = (parameters) =>{}
        const sum = (a,b) =>{
            return ` the sum of two num is ${a+b} (1)`;
        }

                  // function calling is same as Other function 


    // Normal Function

function sum1(a,b){
    return ` the sum of two num is ${res=a+b} (2)`;
} 


//  this is also a fat arrow function for one line of code
const func2 = (a,b) => `the sum of two num is ${a+b}`;
console.log(func2(2,3));
