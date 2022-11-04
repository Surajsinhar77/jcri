const button = document.querySelector("#nxtbtn");
const jokediv = document.querySelector("#joke");

// Method 1: By Promise
// const getJoke = () => {

//     setHeader = {
//         headers: {
//         Accept: "application/json",
//         },
//     };
//     fetch("https://icanhazdadjoke.com/", setHeader)
//         .then((res) => res.json())
//         .then((data) => {
//         jokediv.innerHTML = data.joke+'😆';
//         })
//         .catch((error) => {
//         jokediv.innerHTML = error;
//         });

// }
// getJoke()
// button.addEventListener("click", getJoke);

// Method 2: async await
const getJoke = async () => {
    try{
        setHeader = {
            headers: {
            Accept: "application/json",
            },
        };

        let res = await fetch("https://icanhazdadjoke.com/", setHeader)
        let data = await res.json();
        jokediv.innerHTML = data.joke+'😆';
    }catch(error){
        jokediv.innerHTML = error;
    }
}
getJoke()

button.addEventListener('click',getJoke)





// .concat(emoje+emoje)