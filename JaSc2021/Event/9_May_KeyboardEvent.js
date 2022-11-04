// Keyboard Events
// 1. onkeypress
// 2. onkeydown
// 3. onkeyup

// 1. onekeypress
// event.key = the the key which you pressed
// event.code = the code of the that key is : Key+the key which u press

// keyPress = () =>{
//     document.getElementById('getKeyCode').innerHTML = `The user press key  '${event.key.toUpperCase()}' and the code of the key is '${event.code.toUpperCase()}'`
//     console.log(event.key);
//     console.log(event.code);
//     console.log(event);
// }

// 2. onekeyup
// if key is not pressed  then the key is : up : 
var getEle = document.getElementById('inputBox');
getEle.onkeyup = () =>{
    document.getElementById('getKeyCode').innerHTML = 'Key is Up';
}

// 3. onekeydown
// if key is pressed  then the key is : down : 
var getEle = document.getElementById('inputBox');
getEle.onkeydown = () =>{
    document.getElementById('getKeyCode').innerHTML = 'Key is Down';
}