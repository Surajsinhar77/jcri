// Date amd time (get and set method)

// There are three way to get date and time
// 1.  new Date();                // World time
// 2.  new Date().toLocalString;  // Convert to local time
// 3.  new Date().toString;       // Convert to standard times

// 4.  Date.now();                // Give milesecond Value
// 5.  new Date(Year,Month,Day,Hours,Minutes,Second,MileSecond).toString();
// 6.  new Date("2019 January 1 12:12:12"); // Date in string
// 7.  new Date(mileSecond)   // from 1 jan 1970

// 1. 
var DandT =  new Date();                       // World Time Watch
console.log(DandT);

// 2.
var DateAndT =  new Date().toLocaleString();  // To Get in Local way of time 
console.log(DateAndT);

// 3.
var DateAndTime =  new Date()    // Standard Time zone 
console.log(DateAndTime.toString());
console.log(DateAndTime+"");    // String also

// 4.
// In this watch the time the Start from the 1 jan 1970 UTC
var TimeNow  = Date.now();  // It count mileSecond from 1 jan 1070
console.log(TimeNow);       //In milesecond 

// 5.
// User Date and Time  // max 7 argument, min argument (2 Year and month)
//                Date(Year,Month,Day,Hours,Minute,Second,MileSecond)
var userDT =  new Date(2012,2,31,6,30,0,0).toString();
console.log("5. "+userDT);

// 6.
// *DATA STRING METHOD** 
var dTString =  new Date("2019 Jan 1 12:12:12"); 
console.log("6. "+dTString.toLocaleString()); //gives exact date in numeric of  the given String

// 7.
// Conversion of (Example 4)  mileSecond in actual date 
let actualDate =  new Date(TimeNow) 
console.log("7. "+actualDate.toLocaleString());

// 8.
// To get only Time
console.log(actualDate.toLocaleTimeString());

// 9.
// To get only Date
console.log(actualDate.toLocaleDateString());
