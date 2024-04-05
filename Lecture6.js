let h2 = document.querySelector("h2");
console.log(h2.innerText);

h2.innerText = h2.innerText + " from Apna College Students";

//pehle excess kiya fir concatinate kiya

let divs = document.querySelectorAll(".box");


// divs[0].innerText = "New Unique Value 1";
// divs[1].innerText = "New Unique Value 2";
// divs[2].innerText = "New Unique Value 3";

//Also

let idx = 1;
for (div of divs){
    div.innerText = `new unique value ${idx}`;
    idx++;
}