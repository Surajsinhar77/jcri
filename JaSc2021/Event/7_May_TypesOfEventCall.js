// Their are $ ways Of the calling Event Function 

// <!-- First way to calling event Function (Inline) -->
// <div class="row">
// <button class="btn1" onclick="alert('I am the fisrt way')" >Click me</button>
// </div><br>


// Second way of calling function
Eventfunc = () => {
    alert("I am the second way of calling Event function");
};

// <!-- Third way of calling Event  -->
const thirdOne = document.querySelector(".btn3");
// const thirdOne = document.querySelector(".btn3");
// console.log(thirdOne);
thirdOne.onclick = () => {
    alert("i am the thisrt way of calling function");
};

// fourth way of calling function
const fourthOne = document.querySelector(".btn4");
fourthOne.addEventListener("click", () => {
    alert(" here i am  the last and latest one");
});

// addEventListener can run two function or more than 2 at one time
// addEventListener doesn't overide the function again
