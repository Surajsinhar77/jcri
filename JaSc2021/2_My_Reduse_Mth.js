// In reduse function accumulator can store already a previousaly a value (Example no 2)

const ar00 = [2,3,4,6,8,];

// Example No 1
// var sum = ar00.reduce((accumulator,element)=> {
//     return accumulator += element;
// });

// Example No 2
var sum = ar00.reduce((accumulator,element)=> {
    return accumulator += element;
},5);

console.log(sum);