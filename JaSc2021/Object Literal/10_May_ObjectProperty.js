// **Object Propertys

// **No need to write key and value in object if the key and value is same
let FirstName = "Suraj";
let LastName  =  "Sinha";

// **norrmal Object 
// const biodata = {
//     FirstName : FirstName,
//     LastName : LastName 
// }

// **Object Property
const biodata = {
    FirstName,
    LastName 
}

console.log(biodata.FirstName);


// **Dynamic Property

var Name = 'suraj'; 
const biodata = {
    [Name] : 'this is my name',
    LName : 'my title',
    234 : 'kasie ho app log'
}

console.log(biodata.Name);
