//API -> Application Programming Interface

const URL = "https://catfact.ninja/fact";
const factPara = document.querySelector("#fact");
const btn = document.querySelector("#btn");




const getFacts = async()=>{
    console.log("getting data ....")
    let response = await fetch(URL);
    console.log(response);
    let data = await response.json();
    factPara.innerText = data[0].text;
};


btn.addEventListener("click", getFacts);