const box = document.querySelector('.box');

const add = document.querySelector('.add');
const remove = document.querySelector('.remove');
const toggel = document.querySelector('.toggel');
const add_all = document.querySelector('.add_all');
const remove_all = document.querySelector('.remove_all');

add.addEventListener('click',function (){
    box.classList.add('addBC')
})

remove.addEventListener('click',function (){
    box.classList.add('removeBC')
})

toggel.addEventListener('click',()=>{
    box.classList.toggle('addBC');
})
// toggel.addEventListener('click',()=>{
//     box.classList.('addBC');
// })
// toggel.addEventListener('click',()=>{
//     box.classList.toggle('addBC');
// })

