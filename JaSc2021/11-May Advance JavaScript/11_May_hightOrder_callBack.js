// High order and Callback Function

add = (a,b)=>{
    return a+b;
}

sub = (a,b)=>{
    return Math.round(a-b);
    
}

multi = (a,b)=>{
    return Math.round(a*b);
    
}

function Cal(oprater,x,y){
        return oprater(x,y)  // now add Oprater pass refrence of it self and then pass the refrance variable aslo Example 2.
}

var x=3;
var rtn = Cal(multi,x,4)

console.log(rtn);
x = rtn;



// Example 2.
//  Refrance variabe is treat same as function  FUNCTION NAME IS REFrence variable OF THE FUNCTION
// function helo(x) {
//     console.log("hellon ji "+x);
// }

// function helo2(op,x){
//     console.log(op(x));
// }
// helo2(helo,2)