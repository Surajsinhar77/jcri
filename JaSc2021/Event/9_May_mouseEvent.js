// Mouse Events

var gtElement = document.getElementById('mouseEvnt');


// ===================== { onmouseup and onmousedown } ===============
// BY onmouse function 
gtElement.onmousedown = function () {gtElement.style.color= 'yellow'}
gtElement.onmouseup = function () {gtElement.style.color= 'orange'}

// // By Event Listener
// gtElement.addEventListener('mouseup' ,()=>{gtElement.style.color= 'orange'} )
// gtElement.addEventListener('mousedown' ,()=>{gtElement.style.color= 'yellow'} )

// =================== { onmouseover and onmouseleave } =====================
// gtElement.onmouseover = function () {gtElement.style.color= 'yellow'}
// gtElement.onmouseleave = function () {gtElement.style.color= 'white'}

// =================== { onmousemove and onmouseout } =====================
// // work same as above
// gtElement.onmousemove = function () {gtElement.style.color= 'black'}
// gtElement.onmouseout = function () {gtElement.style.color= 'white'}

// ==================={ onmouseenter }=======================================
// gtElement.onmouseenter = function () {gtElement.style.color= 'grey'}
// same as and move and over


