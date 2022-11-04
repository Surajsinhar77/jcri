const turnOn = document.querySelector('.turnOn');
const turnoff = document.querySelector('.turnoff');
const lightImg = document.getElementById('light'); 

turnOn.addEventListener('click',()=>{
    lightImg.src = './img/pic_bulbon.gif'
    turnOn.style.backgroundColor = 'yellow';
    turnOn.style.border = '1.5px solid black';
})

turnoff.addEventListener('click',()=>{
    lightImg.src = './img/pic_bulboff.gif'
    turnOn.style.backgroundColor = '#EFEFEF';
    turnOn.style.border = '1.5px solid black';

})
