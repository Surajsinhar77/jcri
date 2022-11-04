// Spread Oprator of the object
// must be diffrent keys name
var bioData ={
    Name : 'Suraj Sinha',
    myAge : '24',
    myNickname: "surya"
}

var bioDataP2 ={
    Name2 : 'Vikee Sinha',
    myAge2 : '17',
    myNickname2 : "Vikee",
    ...bioData
}

console.log(bioDataP2);
