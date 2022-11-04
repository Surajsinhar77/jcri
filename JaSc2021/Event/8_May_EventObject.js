// Event Object
// Event Object is the Parent Object of event Object

// example: mouseEvent , focuseEvent , keyboardEvent

// Now from HTMl

// Event objects to get event Information of that event

const EvenInfo  = document.getElementById("btnEvnt"); 
eventFunc = () =>{
    alert("abhi mai event info dakhunga");
    console.log(event);
    console.log(event.target);
    console.log(event.type);
}
EvenInfo.addEventListener('click',eventFunc);

