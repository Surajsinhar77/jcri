const form = document.querySelector('.form');
const Selectone = document.querySelector('#Selectone');

const Userdata = () =>{
    const useD = document.querySelector('#userdata').value;
    console.log(useD);

    const  getTempValues = () =>{
        const valueOne = document.querySelector('#Selectone').value;
        if(valueOne=="cel"){
            document.querySelector('.result').innerHTML =(useD-32)*5/9;
        }else{
            document.querySelector('.result').innerHTML =(useD*9/5)+32;
        }
    }

    Selectone.addEventListener('change',getTempValues)

    event.preventDefault();
};



form.addEventListener('submit',Userdata)