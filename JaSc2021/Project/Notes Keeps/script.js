const addNoteBtn = document.querySelector('#add');

const AddNoteFunc = (text = "") => {
    const note = document.createElement('div');
    note.classList.add('note');
    // note
    const  Htmldata = `  
    <div class="operation">
            <button class="edit"> <i class="fas fa-edit"></i> </button>
            <button class="delete"> <i class="fas fa-trash-alt"></i> </button>
        </div>  
            <div class="main ${text ?  "" : "hidden"}"></div>
            <textarea class="${text ?  "hidden" : ""}"></textarea> `;

    note.insertAdjacentHTML('afterbegin',Htmldata);
    console.log(note);

    // getting Refrence
    const getEdit = note.querySelector('.edit');
    const getDlt = note.querySelector('.delete');
    const getMain = note.querySelector('.main');
    const getTextarea = note.querySelector('textarea');

    // to Remove the element of html 
    

    getEdit.addEventListener('click',()=>{
        getMain.classList.toggle('hidden')
        getTextarea.classList.toggle('hidden')
    })

    getTextarea.addEventListener('change',(elent)=>{
        const Value = event.target.value
        getMain.innerHTML = Value;
    })

    const dltFunc = () => {
        note.remove()
    }
    getDlt.addEventListener('click', dltFunc )



    // adding or Appending Element to the html page
    document.body.appendChild(note);    
    
} 
addNoteBtn.addEventListener('click',()=> AddNoteFunc());


