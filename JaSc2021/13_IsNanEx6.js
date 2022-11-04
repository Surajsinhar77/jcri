// NaN represent the TRUE value which is NOT a Number

var myName = "Suraj Sinha";
var myPhoneNo = 7055532539;

// console.log(isNaN(myPhoneNo));
// console.log(isNaN(myName));
// // console.log(c);

// console.log(isNaN(NaN));
// console.log(Number.isNaN(NaN));
// console.log(isNaN(NaN));

// var $first = 'Helo bro,';
// var _second = ' How are you?';
// console.log($first + _second);

// var 1var = 'kingsman';        // This is not valid variable 1var
// console.log(1var);     

// console.log(myPhoneNo);

var myPhoneNumber = "ytgjhg";                // Number is keyword in javaScript which is   
console.log(isNaN(myPhoneNumber));           // Use to make NaN (NOT A NUMBER) to a Number
console.log(Number.isNaN(myPhoneNumber));

if ( isNaN(myPhoneNumber) == true){
    console.log("Please enter the valid Phone No");
}
else{
    console.log(typeof(myPhoneNumber));
}
