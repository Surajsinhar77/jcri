// this method and its work as refrence
// this is a refranve variable
// it's refrence is changing due to it's position


console.log(this);  // here it's refrence is window object because it is placed at the global object


// here also it's refrence is window object because is only refer the objects and window is a object if go to the inspect and write "typeof(window)"
function myFunc(){
    console.log(this);
}


// this method does work with object Ans. yes it does because it's object
var bioData = {
    Name : 'Suraj Sinha',
    myAge : '24',
    myNickname: "surya",
    getdata(){
        console.log(`My name is ${this.Name} and my age is ${this.myAge}`);
    }
}
bioData.getdata()

// But this does not work with the fat arrow function  
var bioData2 = {
    Name : 'Suraj Sinha',
    myAge : '24',
    myNickname: "surya",
    getdata:()=>{
        console.log(`My name is ${this.Name} and my age is ${this.myAge}`);
    }
}
bioData2.getdata()
