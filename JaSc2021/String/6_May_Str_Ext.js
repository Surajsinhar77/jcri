// String 

// *charAt(index of the string) to get chacter
var str1 =  "hello world";
var str2 = str1.charAt(2);
console.log(str2);


// *charCodeAt(index of the char )  // It give an uniCode of char
var res =  str1.charCodeAt(6);
console.log(res); 

// Find the uniCode of the last char 
var lastCharIdx = str1.length;
console.log("length of the sentance "+lastCharIdx);
var lastChUnCd = str1.charCodeAt(lastCharIdx-1);     //last char index is length -1  
console.log("the UniCode of the last char is (d) is :"+lastChUnCd);


// Access property [] this line array
var name0 = "Suraj Sinha";
var name1 = name0[1];
console.log(name1);

// Other Method 
// 1. toUpperCase()
// 2. toLowerCase()

// Example
let name3 = name0.toUpperCase(); 
console.log(name3);
let name4 = name0.toLowerCase(); 
console.log(name4);

// concat method
var fanme = "Suraj";
var lname = "Sinha";
var fullname =  fanme.concat(lname); // concat method  to join two string 
console.log(fullname);  

// *trim()  
// this is use to remove the white space of side of the strinf

var wish = "                 good      morning              ";
console.log(wish.trim());

// *split() method to convert the string into the array 
var str01 = "a,b,c / ,d,f,h";
console.log(str01.split(","));
console.log(str01.split(" "));
console.log(str01.split("/"));
// it split the the string in element of by giving the symbol