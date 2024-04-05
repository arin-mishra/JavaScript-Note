let btn1 = document.querySelector("#btn1");

// btn1.onclick = () => {
//     console.log("btn1 was clicked");
//     let a = 25;
//     a++;
//     console.log(a);
// };

// btn1.onclick = (e) => {
//     console.log("btn1 was clicked");
//     let a = 25;
//     a++;
//     console.log(a);
//     console.log(e)
// };


btn1.addEventListener("click", (evt) => {
    console.log("btn1 was clicked -- Handler 1");
    console.log(evt);
    console.log(evt.type);
});

btn1.addEventListener("click", () => {
    console.log("btn1 was clicked -- Handler 2");
});


const handler3 = () => {
    console.log("btn1 was clicked -- Handler 3");
};

btn1.addEventListener("click", handler3);

btn1.addEventListener("click", () => {
    console.log("btn1 was clicked -- Handler 4");
});

btn1.removeEventListener("click", handler3);




let modeBtn = document.querySelector(".mode");

let currMode = "light";

modeBtn.addEventListener("click", () => {
    if (currMode == "light"){
        currMode = "dark";
        document.querySelector("body").classList.add("dark");
        document.querySelector("body").classList.remove("light");
    }else{
        currMode = "light";
        document.querySelector("body").classList.add("light");
        document.querySelector("body").classList.remove("dark");
    }

    console.log(currMode);
});