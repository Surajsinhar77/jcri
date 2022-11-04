// 1 = ["rahul","ravi","rohan","jaado"];
// var myfriend2 = [7,6,5,4];


// // for in loop
// for (let x in myfriend1){
//     console.log(myfriend1[x]);
// }


// for of loop
// var stdDetail =  ['Suraj','Mail','26','Breilly'];
// for (let x1 of stdDetail){
//     console.log(x1);            // To get Element from the loop
// }

// stdDetail.forEach(function(element, index, array){
//     console.log(element+' Index No: '+index);
//     // console.log(index);
//     // console.log(array);
// })



// for (i=0; i<stdDetail.length; i++ ){  // this is the same this forEach loop does eaisly 
//     console.log(stdDetail[i]+' Index :'+ [i] + ' Arrays => ' + stdDetail);  
// }

// console.log('The the lenght of the array is :'+stdDetail.length);
// console.log(`The the lenght of the array is :${stdDetail.length}`);

// stdDetail.forEach(function(element, index, array){
//     console.log(`${element} Index no : ${index} the array is : ${array}`);
// })

// stdDetail.forEach((element, index, array) =>{
//     console.log(`${element} Index no : ${index} The array is : ${array}`);
// })



// // fat arrow function 
// sub = (a,b)=>{
//     return `The Subtraction is : ${a-b}`;
// }
// console.log(sub(2,1));



// // aynomus function
// add = function(a,b){console.log(` The add is ${a+b}`);}
// add(4,5)

// Serching in Array
//  # Every method in array is gives a index value

// const stdDetail =  ['Suraj','Mail','26','Breilly'];

// console.log(stdDetail.indexOf('26'));        // It's the finding of index of paticaluar data in array 
// stdDetail.push('Invertis','university')      // Enter more than one values (added in last)

// // stdDetail.sort();                                   // for arranging the array in orders 
// // stdDetail.reverse();                               // for reversing an array
// console.log(stdDetail);
// stdDetail.unshift("kela");                          // To add in first
// console.log(stdDetail);
// stdDetail.pop();                                  // pop() => To remove from last element
// console.log(stdDetail);
// stdDetail.shift();                              //  shift() => To remove in first
// stdDetail[3]="delhi";                          //  To update in array
// console.log(stdDetail);

// variableName = name of the Array(SelectTheIndex,No_Of_Element to be Delect,'Element which u Want To added in that Index');

// const numArr = stdDetail.splice(2,2,"hello");   // adding "hello" in 2 index and delect 2 element

// console.log(stdDetail);
// console.log(typeof(numArr));

const month =  ['jan','march','April','june','july'];

// // Q1. Sol...  Add Dec at the end
// month.splice(month.length,0,'Dec');
// console.log(month);

// // Q2. Sol...   Return of splice
// var Rut= month.splice(0,0);
// console.log(Rut);

// Q3. Sol...  Update the march                 // If any Element is not present in array then 
                                                // the index of that array is (-1)
// var idx = month.indexOf("march"); 
// console.log(idx);
// if(idx!=-1){
//     month.splice(idx,1,'March')
// }
// console.log(month);

// Q4. Sol... Delect june in Array
// var idx = month.indexOf("june"); 
// console.log(idx);
// if(idx!=-1){
//     month.splice(idx,1)
// }
// console.log(month);

// let arr0 =  [25,36,49,64,81];

// for(let i=0; i<arr0.length; i++){
//     let a = arr0[i]*arr0[i];
//     console.log(`The Square Root of the ${arr0[i]} : ${a}`);
// }

// let  arr =  [2,3,4,6,8];

// for(let i=0; i<arr.length; i++){
//     let a = arr[i]*2;
//     if(a>10){
//         console.log(a);
//     }
// }

// var stdDetail =  ['Suraj','Mail','26','Breilly'];

// var rtn = stdDetail.forEach((element, index, array) =>{
//     console.log(`${element} Index no : ${index} The array is : ${array}`);
// })

// var rtn = stdDetail.forEach(function(element, index, array){
//     return console.log(`${element} Index no : ${index} The array is : ${array}`);
// })

// console.log(rtn);  // it's return the undefined

// var retn = arr.map((element, index,array)=>{
//     return retn>9;
// })
// // ` The multiplaction of ${element}*2  is : ${element*2}`
// console.log(typeof(retn))        // its return a object value
// console.log(retn);       



// const arry01 = [1,4,9,16,25];

// let newArry01= arry01.filter((element,index,array) => {
//     // console.log(element);
//     return element > 9
// })


// let newArry01= arry01.map((element,index,array)=>{
//         // console.log(element);
//         return element > 2
// })

// console.log(arry01);
// console.log(newArry01);


// console.log(newary02);
// console.log(arry01);

// Table
// i=1
// for(i=1;i<=10;i++){
//     console.log(`${13}*${i}=`+13*i);
// }

const ar00 = [2,3,4,6,8];

// let newArr02 = ar00.map((CurrElement)=>{
//     return CurrElement*2;
// }).filter((element)=>{
//     return element> 10
// }).reduce((accumulator,element)=> accumulator += element )

// let newArr02 = ar00.filter((CurrElement)=>{
//     return CurrElement*2 > 10;
// })
// console.log(newArr02);

// var sum = ar00.reduce((accumulator,element)=> {
//     return accumulator += element;
// });

// var sum = ar00.reduce((accumulator,element)=> {
//     return accumulator += element;
// },5);

// console.log(sum);

// const arry  = [
//     ["one","two"],
//     ["three","four"],
//     ["five","six"],
//     ["siven","eight"]
// ]

// var ArFlaten = arry.reduce((accum,CurEle)=>{
//     return accum.concat(CurEle);
// })
// console.log(arry);
// console.log(ArFlaten);








// int Age4 = 34;

// var age = "six";
// var age2 = 45;

// var Name = "alka"; 
// var Name = 675; 

// var gender = true;

// var ary = [2,3,4,5,6];

// // printf()
// // system.out.println()
// console.log("alka Ji")


// var age3 = "four";


// int
// Boolean
// String
// array 

// var x = null;

// console.log();

// var Youname = true;

// console.log( typeof(Youname)     );

// typeof(Youname)

// var a=6,b=4

// var sum = a+b
// var sub = a-b
// var mult = a*b
// var div = a/b
// var modlus = a%b

// console.log(sum)
// console.log(sub)
// console.log(mult)
// console.log(div)
// console.log(modlus)

// Now we  if and else 


// if (6 < 4){
//     console.log("u r amazing");
// }
// else{
//     console.log("u are not amazing");
// }



// if (age > 18){
//     console.log("u can ");
// }
// else{
//     console.log("u cannot drive car");
// }

// var age = 16

// if (age > 18){
//     console.log("frooti");
// }
// else if(age < 15){
//     console.log("Amul Milk");
// }
// else{
//     console.log("Water");
// }

// var marks = 2;

// switch(marks){
//     case 1: console.log("very good");
//     break;

//     case 2 : console.log("good"); 
//     break;

//     case 3:  console.log("pass"); 
//     break;

//     case 4 : console.log("fail");
//     break;
// }


// var weeKday = 3;

// switch (weeKday) {
//     case 1:
//     console.log("Monday");
//         break;

//     case 2:
//     console.log("Tuesday");
//         break;

//     case 3:
//     console.log("Wednesday");
//         break;

//     case 4:
//     console.log("Thrusday");
//         break;

//     case 5:
//     console.log("Friday");
//         break;

//     case 6:
//     console.log("Saturday");
//         break;

//     default:
//     console.log("Sunday");
//         break;
// }

// var myAge =  "apple , banana ,mango"

// let res = myAge.slice(0,-4) ;
// let res1 = myAge.substring(4,-4) ;
// // let res2 = myAge.substr(0,-5) ;
// let res2 = myAge.substr(-5) ;

// console.log(res);
// console.log(res1);
// console.log(res2);

// var one  = "we are the best"
// var res2 = one.substr(one.length) 
// var res3 =  one.slice(0,res2);
// console.log(res3);
// console.log(res2);

// var TimeNow  = Date.now();  // It count mileSecond from 1 jan 1070
// console.log("4. "+TimeNow);

// let actualDate =  new Date() 
// // let actualDate2 =  new Date();

// console.log(""+actualDate);
// // console.log("7. "+actualDate2);

// var DandT =  new Date();                       // World Time Watch
// console.log(DandT);

// console.log(Math.random()*10);
// var userData = 28;

// const Celsius = (userData) =>{
//     return (userData-32)*5/9;
// }
// const Fahrenhei = (userData) =>{
//     return (userData*9/5)+32;
// }

// console.log(Celsius(userData));

// console.log( Fahrenhei(userData)  );

// valueone = "cel";
// console.log(valueone=="cel");


// var text = "";


// console.log( text ?  );




// var  grobal 
// let   local var 
// const 


// let num3 = 13

// num3 = 15   //  changing


// console.log(num3)


// for ( i =0 ;i<3 ;i++){
//     console.log(i)
// }

// string 


// let Name = "B"

// // console.log(Name)


// if (Name == "A" ){
//     console.log(" Suraj is Donkey ")
// }
// else{
//     console.log(" Reetu is Donkey ")
// }


// 

// for (i=0 ;i <= 4 ; i++){
//     console.log(arr[i])
// }




// data type 

// number 
// string 
// Object
// Array

// function func(){
//     
// }


// func()


// Regular Expression

// function func(){

//     var str = "visit W3School3";
//     var patt = /w3school3/i;
//     var result = str.match(patt);
//     return result
// }


// var store = func()

// console.log(store)

// var  A = "Reetu";
// var B=  /ritu\w;

// var res = A.match(B);
// console.log(res);


// let cnDPass =  /[A-Z]\s[a-z]/;
// let userData = "SURAJ kumar";
// let res =  cnDPass.test(userData)
// console.log(res);



// var input = document.getElementById('Name').value;
// console.log(input)



// UserName / id  =  10
// password       =   17 or !@#$%^&*()_+ or uppercase 1 or lowercase 1  

// regular expression
// let userdata = "Reetu123";  // user data


// let regEPX  = /[A-Za-z0-9]+/;  // reg Ep 
let userPASS = "Zebronic@123"
let regPAss = /^[A-Z]+^[@]^[a-z]^[0-9]([A-z]){0-12}/


let res = regPAss.test(userPASS)
console.log(res)
// let res =  regEPX.test(userdata)
// console.log(res)

