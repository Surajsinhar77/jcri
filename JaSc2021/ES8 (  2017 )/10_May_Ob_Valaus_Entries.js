// Object Methods

// Object.values(name of the object)
var newOb = {
    Good : "bad",
    day :"night",
    smooth : "rough",
}

console.log(Object.values(newOb));                 //   To get all the Values of object
console.log(Object.keys(newOb));                   //   To get all the keys of the object
var getdata = Object.entries(newOb);               //   To get all entries in the object
console.log(Object.fromEntries(getdata));          //   To get the data in object form 

//  *** NOTE: THIS ALL THE METHOD GIVE OR RETURN THE VALUES IN THE ARRAY