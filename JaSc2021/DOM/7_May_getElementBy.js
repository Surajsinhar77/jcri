// Get the element by id and class

// By id 
var idElement  =  document.getElementById("name of id");
idElement.style.color= "red";
// idElement.style.fontSize ="23px"
// idElement."any css or html your want change or add";

// By Class  // class can more than one 
var idElement  =  document.getElementsByClassName("name of class");
idElement.style.color= "red";
// idElement.style.fontSize ="23px"
// idElement."any css or html your want change or add";

// By Tag Name
var idElement  =  document.getElementsByTagName("name of tag ex: p,h1,div...");
idElement.style.color= "red";
// idElement.style.fontSize ="23px"
// idElement."any css or html your want change or add";

// By Name
var idElement  =  document.getElementsByName("name of name");
// <p name="para" > My name </p>
idElement.style.color= "red";
// idElement.style.fontSize ="23px"
// idElement."any css or html your want change or add";

// Quary Selector to getElement (It's only work on onlu one element of same class )
var eleByQuarSec = document.querySelector('.NameOfClass OR #name of id');
console.log(eleByQueSec);

// Quary SelectorAll to getElement (It give they are )
var eleByQuarSec = document.querySelectorAll('.NameOfClass OR #name of id OR tagname');
console.log(eleByQueSec);