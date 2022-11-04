// Diffrence between VAR , let , Const;

// var   : variable can access any whare in whole program is scope is global variable
// let   : is use for local scope variable values Use in {} curley bracket
// const : Variable is can't be change or can't be assigne again 

var num1 = 5;
// let num2 = 6;
const num3 =8;

// console.log(num3);
{
    let num1 = 7;
    let num2 = 7;
    console.log(num1);
}
console.log(num1);
// console.log(num2);