// Clouser place in which any function is stored it's Data 

outer = (x)=>{
    let b = 3;
    inner = ()=>{
        return x+b;
    }
    return inner;
}
let getVal = outer(2);
console.dir(getVal);

// console.dir(getVal());  // If You want to run here

// run this code on browser colsole and cheak the clouser