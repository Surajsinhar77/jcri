// Default parameter
// In dafault parameter is that perameter which is already set in the perameter of the function if you gave two argument in calling of function then the that two values is get and invoke the values from the function. 

function addt(a,b=3){
    return a+b;
}                        // if u don't gave 2 argument then the default parameter is invoke 
                         // Here the default perameter is 'b=3' in the peremeter of the     function addt()
console.log(addt(6));


// step 2
function addt(a,b=3){
    return a+b;            // Here the default parameter is also assign but if given argument is complate for both parameter  then the Given is worked    
}

console.log(addt(6,2));