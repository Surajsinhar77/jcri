// String Methods

// Size Of String 
var Name =  "Suraj Sinha"
var NameLength = Name.length;
console.log(NameLength);

// Index Of String 
var bioData = "My name is Suraj";
console.log(bioData.indexOf("name"));

// console.log(bioData.replace());


// Slice Method in the String  // Slice mean cutting the string in small peace 
// Example 1:
var bioData = "My name is Suraj";
var splData = bioData.slice(bioData.indexOf("name"),bioData.search("is")) ;

console.log(splData);
console.log(splData.length);

// Example 2:
var myAge =  "i am 23 year old"

var x =  myAge.search("year"); 
console.log("Starting index of year is : "+x);
var SpData = myAge.slice(x,12);
console.log(SpData);
console.log("length of the year: "+SpData.length);

//  Example 3: Negative argument 
//  The nagative argument is decreasing from the last index
var one  = "we are the best"
var two =  one.length;
console.log(two);
var prnt = one.slice(0,-4)
console.log(prnt);


// Challange only print 280 letter

let newVar = " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque aliquid iusto architecto ab aut ut temporibus veritatis amet natus eaque dolor magnam iure sapiente doloribus, labore modi nemo ipsa quibusdam odit alias corporis nobis laudantium, assumenda accusamus tempore ratione eum, veniam architecto pariatur quos? Atque eaque sed quam quo quis tenetur. Error sint earum totam optio. "

console.log(newVar.length);
var readAble = newVar.slice(0,280)
console.log(readAble);
console.log(readAble.length);


// Substring method  it' s can use negative values
var one  = "we are the best"
var res = one.substring(6)
console.log(res);

// Substr : it can run also on nagative values
// Exaample 1:
var one  = "we are the best"
var res2 = one.substr(-6)  
console.log(res2);

// Example 2:
var one  = "we are the best"
var res3 = one.substr(0,5)
console.log(res3);


// replace( search for , replacing data  ) 
var res =  myAge.replace("apple","pineapple")
console.log(res);
