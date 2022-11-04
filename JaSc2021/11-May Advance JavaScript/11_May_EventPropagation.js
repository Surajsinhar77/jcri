// javaScript for the Event Propagation
const  outerBt  =  document.querySelector('.outer_box');
const  innerBt  =  document.querySelector('.inner_box');



// 1. Bubbling propagation  (By Default)
// **The flow of event ouccring in  bubbling is from  ( Inner to outter )


// outerBt.addEventListener('click',()=>{
//     alert('i am the outer box')
// })

// innerBt.addEventListener('click',()=>{
//     alert('i am the inner box')
// })


// 2. Capturing propagation
// **The flow of event ouccring in  bubbling is from  ( Outter to Inner )
// outerBt.addEventListener('click',()=>{
//     alert('i am the outer box')
// },true)
// // **To chanage the Bubble propagation to Capturing Propagation we must use THIRD parameter in the addEventlistner(true) if we change true to false then it's Bubbling
// innerBt.addEventListener('click',()=>{
//     alert('i am the inner box')
// })


//3. To stop propagation
// **In the propation is stop after propagation run  
outerBt.addEventListener('click',()=>{
    alert('i am the outer box')
})

innerBt.addEventListener('click',()=>{
    alert('i am the inner box')
    event.stopPropagation();    // use on this in which you are going to click

})