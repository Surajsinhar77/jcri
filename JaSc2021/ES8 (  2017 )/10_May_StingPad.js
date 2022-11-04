// StringPad

// To make Space
var Name = "Suraj";
console.log(Name.padStart(10));   // Space in Start String 
console.log(Name.padEnd(10));   // Space in End of String 


// To reduse Space
var Name2 = "    Suraj  ";
console.log(Name2);
console.log(Name2.trim().length);           //to remove Space
console.log(Name2.trimStart().length);         //to remove Space to Start
console.log(Name2.trimEnd().length);           //to remove Space to End
