// DOM is a Document object Model
// To get Element in js as Children

//                                   ------DIAGRAM-----


/*                                   Window
                                        |
                                ---------------------
                                |                   |
                            DOM(document)      BOM(Browser Object Model)
                                |                   |
                                |
                                HTML
                                |
                        ------------------
                        |                 |
                        BODY              HEAD
                        |                 |
                        |                 |
                    Other Element         Title And Others

*/

// example 
// body    [Grand Parent]
// div.... [Parent]
        // <div>...... </div> [Child]   [firstElementChild] of  [Parent Div]
        // <div>...... </div> [Child]
        // <div>...... </div> [Child]
//   </div>
var one = document.body.firstElementChild.firstElementChild; // this wat we can get element
one.style.colour = "red";                                    // and this way we can change property 


// Quary Selector to get element 
var eleByQuarSec = document.querySelector('.NameOfClass');
console.log(eleByQueSec);


// To get parent element here we have
// 1.   .parentElement
// 2.   .parentNode

// var parentElem = document.body.parentElement
// var parentElem = document.body.parentNode

// To get sibling elemet 

        // Next Element Sibling (include only tags)
        var green = document.body.firstElementChild.firstElementChild.nextElementSibling;
        green.style.color = "yellow";
        var blue = document.body.firstElementChild.firstElementChild.nextElementSibling.nextElementSibling;
        blue.style.color = "blue";

        // Previous element Sibling   (include only tags)
        var green = document.body.firstElementChild.firstElementChild.previousElementSibling;
        
        
        // Next Sibling  (include { Space,enter,text also })
        var green = document.body.firstElementChild.firstElementChild.nextSibling;

        // previous Sibling  (include { Space,enter,text also })
        var green = document.body.firstElementChild.firstElementChild.previousSibling;


    // GET ELEMENT BY ID

        var idElement =  document.getElementById('id name');
        idElement.innerHTML ="any things you want to put here" 

    // GET ELEMENT BY CLASSS NAME 

        var classElement = document.getElementsByClassName("name of class");
        classElement.innerHTML = "any things"