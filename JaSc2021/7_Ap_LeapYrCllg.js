// var year = 2017;
    // document.getElementById("year").

    function getLeapYear(){
    
    var year = document.getElementById("year").value;
    // document.getElementById("ans").innerHTML = x;

        // var x = document.getElementById("year").required=true;

        if(0!=Number(year)){
            
            if (year%4==0 && (year%100 !=0)){
                // console.log("It is leap Year");
                document.getElementById("ans").innerHTML= "It is Leap year"
                // document.write("It is Leap year");
                }
                else
                {
                // console.log("It is not leap Year");
                document.getElementById("ans").innerHTML = "It is not Leap year"
                // document.write("It is Leap year");
                }   
            
        }
    else
    {
        // document.getElementById("ans").innerHTML ="please enter valid data ";
        alert("Please Enter valid data");
        // alert(Number(year));
        
    }
}



// getLeapYear()

    // function myfunt(){
    //     // var a =  document.getElementById("year").required;
    //     var year = document.getElementById("year").value;
            
    //     // document.getElementById("ans").innerHTML = year;
        
    //     // if(year==null){
    //         // document.getElementById("ans").innerHTML = "please enter valid data ";
    //     // }
    //     // else{
    //         if (year%4==0 && (year%100 !=0)){
    //             document.getElementById("ans").innerHTML= "It is Leap year";
    //         }
    //         else{
    //             document.getElementById("ans").innerHTML = "It is not Leap year";
    //         }
    //     // }
    // }