// Currying function
// Defination......
// curring is a technique of evaluating function with multiple argument, into sequance of the function with single qrgument.

// In other words, when a function, instead of taking all argument of one time, takes the first one and return new function which takes the third one, and so forth, until all arguments have been fulfilled. 

// I have to add this all argument

// Example 1
function sum (a){
    return function(b){
        return function(c){
            console.log(a+b+c);
        }
    }
}

// Example 2  // Fat Arrow Function
// sum = (a) => {return (b) => {return (c) => console.log(a+b+c);}}    //With retun use

// Example 3 One line of code
sum = (a) => (b) => (c) => console.log(a+b+c);   //Without retun use 
// If one line of code is here then we don't need to use Currly bracket and return keyword 

sum(3)(5)(8);