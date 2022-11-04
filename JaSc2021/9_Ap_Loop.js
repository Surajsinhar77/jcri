//  While Loop
//  console.log("suraj Sinha");
//  Every loop have atleast 1 condution and one incrementation

//  WHILE
// var i = 0;
// while(i<=7){
//     console.log("suraj");
//     i++;
// }

// DO WHILE
// do{
//     console.log("helo ji");
//     i++
// }while(false)

// // FOR LOOP
// for(i=1; i<=5; i++){
//     console.log("helo ji 2");
// }

// table for 8,9, 12,15;

// for(let i=8;i<=80;i=i+8)
// {
//     console.log(i);
//     if(i==80){
//         console.log("\t");
//         for(let j=9;j<=90;j=j+9)
//         {
//             console.log(j);
//             if(j==90){
//                 console.log("\t");
//                 for(let k=12;k<=120;k=k+12)
//                 {
//                     console.log(k);
//                     if(k==120){
//                         console.log("\t");
//                         for(let l=15;l<=150;l=l+15){
//                             console.log(l);
//                             if(k==150){
//                                 break;
//                             }
//                         }
//                     }
//                 }
//             }
//         }
//     }
// }


//  ====================================================================================
//      Table which you want |?|

var x = 7;
var i;
for(i=x;i<=x*10;i=i+x)
{
    console.log(i);
}


//                   Loops           


// loop-1               For loop
var myfriend = ["rahul","ravi","rohan","himashu"];

for(i=0 ; i<=3; i++){console.log(myfriend[i]);}

// loop-2               For Loop
for(i=0 ; i<=myfriend.length; i++){       //myfriend.lenght is property
                                          // to find length of a array
    if (myfriend[i]=="ravi"){
        console.log('\n'+myfriend[i]);
        console.log('\n'+myfriend.length);
        
    }
}

var myfriend1 = ["rahul","ravi","rohan","jaado"];
console.log(myfriend1.length);
for(i=0; i<myfriend1.length; i++)
    {   
        console.log(myfriend1[i]);
    }


var myfriend1 = ["rahul","ravi","rohan","jaado"];
var myfriend2 = [7,6,5,4];

// for in loop
for (let x in myfriend1){
    console.log(myfriend1[x]);
}

var stdDetail =  ['Suraj','Mail','26','Breilly'];

for (let x1 in stdDetail){
    console.log(x1);          // for in loop is use to the the index of the loop
}

// for of Loop

for (let x1 of stdDetail){
    console.log(x1);            // To get Element from the loop
}

// forEach loop   : They return Undefined

stdDetail.forEach(function(element, index, array){       
    console.log(`${element} Index no : ${index} The array is : ${array}`);
})


// forEach using fat arrow function    : They return Undefined

stdDetail.forEach((element, index, array) =>{
    console.log(`${element} Index no : ${index} The array is : ${array}`);
})


const arry01 = [1,4,9,16,25];

arry01.map((element,index,array)=>{
    if(element>9){
        console.log(element);
    }
})