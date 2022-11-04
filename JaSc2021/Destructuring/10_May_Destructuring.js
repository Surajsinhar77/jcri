// **Destructuring

// **Destructuring array
// const biodata = ['Suraj','Sinha',27,'Bareilly'];

// **This is the normal way to get single data from the array
// console.log(biodata[0]);
// console.log(biodata[1]);
// console.log(biodata[2]);
// console.log(biodata[3]);

// **Destructuring in array
// let getData = [fname,lname,myAge,place] = biodata;
// console.log(fname);



// Destructuring Object

const  bioData2 = {
    fname : 'Suraj',
    lname : 'Sinha',
    myAge : 25,
    mystatus : 'Student',
}

// **normal way of get data from the object is like this:
console.log(bioData2.lname);

// **Destructuring in Object
getData2 = {fname,lname,myAge,mystatus} = bioData2;
console.log(fname);

