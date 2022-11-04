const counters = document.querySelectorAll(".counter");

counters.forEach((getCounter) => {
    
    getCounter.innerHTML = 0;
    function increment(){

        const getCountdata = +getCounter.getAttribute("data-need");
        console.log(getCountdata);
        
        const one = +getCounter.innerHTML;
        const inc = getCountdata/100;
        console.log(inc);

        if(+one < getCountdata){
            getCounter.innerHTML = `${Math.round(one+inc)}`;
            setTimeout(increment,10) 
        }else{
            getCounter.innerHTML = getCountdata;
            
        }
    }
    increment()
});
