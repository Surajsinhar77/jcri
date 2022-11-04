//  Synchronouse javaScript
// Video : Time : 13:05 ##

sync = () =>{
    console.log("I am the no 2 ");
}
sync2 = () =>{
    console.log("i am the no 1");
    sync()
    console.log("i am the no 3");
}
sync2()


//  Asynchronouse javaScript
aSync = () =>{
    setTimeout(()=>{
        console.log("I am the no 2 ");
    },2000)
}
aSync2 = () =>{
    console.log("i am the no 1");
    aSync()
    console.log("i am the no 3");
}
aSync2()
// in Asynchronouse javaScript the aSync2() function is not wait for the aSync() function to execute and then me   



