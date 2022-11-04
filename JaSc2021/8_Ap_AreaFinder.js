

var area = "rectrangle";
var r = 5,l = 3,b = 6,h = 6; 
const pi = 3.14;

if (area == "circle"){
    console.log("The Area of the circle is :"+ pi*r*r);
}
else if(area == "rectrangle"){
    console.log("The Area of the rectrangle is :"+ l*b);
}
else if(area == "triangle"){
    console.log("The Area of the triangle is :"+ (b*h)/2);
}else{
    console.log("Please enter valid entry");
}

// Switch case 

switch (area) 
{
    case "circle":
        console.log("The Area of the circle is :"+ pi*r*r);
        break;
    case "triangle":
        console.log("The Area of the triangle is :"+ (b*h)/2);
        break;
    case "rectrangle":
        console.log("The Area of the rectrangle is :"+ l*b);
        break;
    default:
        console.log("please enter valid entry");
        break;
}