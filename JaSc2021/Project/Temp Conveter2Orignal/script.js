
const btnSubmit = document.querySelector('.form');

const getTemp = () =>{
    const userData = document.getElementById('userdata').value;
    console.log(userData);

    const getSelection = document.getElementById('Selectone');
    const valuegeting  = Selectone.options[getSelection.selectedIndex].value;
    console.log(valuegeting);

    if(valuegeting=="cel"){
        const result = document.querySelector('.result');
        const res = Math.round((userData-32)*5/9);
        result.innerHTML = `${res} °Celsius`
        
    }else{
        const result = document.querySelector('.result');
        const res = Math.round((userData*9/5)+32);
        result.innerHTML = `${res} °Fahrenheit`
    }

    event.preventDefault();
}




btnSubmit.addEventListener('submit',getTemp)