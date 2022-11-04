// Array in javaScript

var myfriend = ["rahul","ravi","rohan","himashu"];
// console.log(myfriend[0]);
// myfriend[3] = "himashu"; 
// console.log(myfriend);

// loop-1 for loop
for(i=0 ; i<=3; i++){console.log(myfriend[i]);}

// loop-2 for Loop
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

// var stdDetail =  ['Suraj','Mail','26','Breilly'];

// for (let x1 in stdDetail){
//     console.log(stdDetail[x1]);
// }


//  Serchimg of an Array 
// var stdDetail =  ['Suraj','Mail','26','Breilly'];
// stdDetail.indexOf('Mail');


var stdDetail =  ['Suraj','Mail','26','Breilly'];

console.log(stdDetail.indexOf('26'));        // It's the finding of index of paticaluar data in array 
stdDetail.push('Invertis','university')      // Enter more than one values (added in last)

// stdDetail.sort();                              // for arranging the array in orders 
// stdDetail.reverse();                           // for reversing an array
console.log(stdDetail);
stdDetail.unshift("kela");                     // To add in first
console.log(stdDetail);
stdDetail.pop();                                // pop() => To remove from last element
console.log(stdDetail);
stdDetail.shift();                              //  shift() => To remove in first
stdDetail[3]="delhi";                           //  To update in array
console.log(stdDetail);

//  Splice() Method


const month =  ['jan','march','April','june','july'];

// Q1. Sol...  Add Dec at the end
month.splice(month.length,0,'Dec');
console.log(month);

// Q2. Sol...  Return of splice
var Rut= month.splice(0,0);
console.log(Rut);

// Q3. Sol...  Update the march
month.splice(1,1,'March')
console.log(month);

// Q4. Sol...  Delect june in Array
month.splice(3,1)
console.log(month);
