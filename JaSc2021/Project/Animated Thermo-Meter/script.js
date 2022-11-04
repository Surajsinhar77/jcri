// Animation Therometer

var getThermo = () =>{
    const temp = document.getElementById('temp');
    temp.innerHTML = "&#xf2cb";
    temp.style.color = "yellow";

    // setInterval(() => { 
        setTimeout(()=>{
            temp.innerHTML = "&#xf2ca";
            temp.style.color = "yellow";
        },1000)
        setTimeout(()=>{
            temp.innerHTML = "&#xf2c9";
            temp.style.color = "rgba(255, 166, 0, 0.675)";
        },2000)
        setTimeout(()=>{
            temp.innerHTML = "&#xf2c8";
            temp.style.color = "orange";                                                                
        },3000)
        setTimeout(()=>{
            temp.innerHTML = "&#xf2c7";
            temp.style.color = "red";
        },4000)
        
    // },1000)
} 
getThermo()
setInterval(()=>{
    getThermo()
},5000)      
