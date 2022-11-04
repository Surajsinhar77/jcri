// Object Literals
// This is like a data type which store data in the form of keys and values 
// in the Object literal you can store Function() also
// See the Given Below.


// Method 1
var bioData ={
    Name : 'Suraj Sinha',
    myAge : '24',
    myNickname: "surya",
    getdata : ()=>{
        console.log(`My name is ${bioData.Name} and my age is ${bioData.myAge}`);
    }
}

// Method 2
// bioData.getdata();
// var bioData ={
//     Name : 'Suraj Sinha',
//     myAge : '24',
//     myNickname: "surya",
//     getdata(){
//         console.log(`My name is ${bioData.Name} and my age is ${bioData.myAge}`);
//     }
// }

// bioData.getdata();



// Onject in Object

var bioData2 ={
    Name : {
        myRname : "Suraj Sinha"
        ,myrealAge : 27,
    },
    myAge : '24',
    myNickname: "surya",
    getdata(){
        console.log(`My name is ${bioData.Name} and my age is ${bioData.myAge}`);
    }
}

// This is how to get the data from object in object
console.log(bioData2.Name.myRname);
