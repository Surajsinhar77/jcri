// In this the 3d aaaray is converting in the 1d array 

// Example 1
const arry = [
    ["one","two"],
    ["three","four"],
    ["five","six"],
    ["siven",["eight",["nine","ten"]]]
]

// Reduce Function help to short the data  
var ArFlaten = arry.reduce((accum,CurEle)=>{
    return accum.concat(CurEle);
})
console.log(arry);
console.log(ArFlaten);

// second method For Flaten an a Array  this method can do ferther 
console.log(arry.flat(Infinity));
