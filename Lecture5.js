function myFunction(){
    console.log("Welcome to Apna College")
    console.log("We are learning JS :)")
}

function newFunction(msg){  //Parameter
    console.log(msg);
}

newFunction("My name is Arin Mishra");  //Argument


function sum(x , y){
    console.log(x  + y);
}

function add(x, y){
    s = x + y;
    return s;
}

let val = add(3,4);
console.log(val);

const arrowSum = (a, b) => {
    console.log(a + b);
}

const arrowMulti = (a, b) => {
    console.log(a*b);
}

function Multi(a,b){
    console.log(a*b);
}


//Practice Question :

function countVowels(str){
    let count = 0;
    for(const char of str) {
        if (
            char ==="a" ||
            char === "e"||
            char ==="i" ||
            char ==="o" ||
            char==="u"
        ) {
            count++;
        }
    } 

    return count;
}



const countVow = (str) => {
    let count = 0;
    for(const char of str) {
        if (
            char ==="a" ||
            char ==="e"||
            char ==="i" ||
            char ==="o" ||
            char==="u"
        ) {
            count++;
        }
    } 

    return count;
}



//forEach

let arr2 = ["Powayam","Shahjahanpur","Uttar Pradesh"];

arr2.forEach((val, idx, arr2) => {
    console.log(val, idx, arr2);
});



let squroot = [1,2,3,4,5];
squroot.forEach((number) => {
    console.log(number**2)
});


//Map

squroot.map((val) => {
    console.log(val);
});


//filter

let arr3 = [1,2,3,4,5,6,7];

let evenArr = arr3.filter((val) => {
    return val % 2 === 0;
});
console.log(evenArr)


//Reduce

let arr4 = [1,2,3,4];

const output = arr4.reduce((res, curr) => {
    return res + curr;
});
console.log(output);

const bigger = arr4.reduce((prev, curr) => {
    return prev > curr ? prev : curr;
});
console.log(bigger);



//Practice Questions

let marks = [45,65,68,35,98,91,87,97];
let result = [];

marks.map((nintyPlus) => {
    if (nintyPlus > 90){
        result.push(nintyPlus)
    }
});

console.log(result);



let nintyPlusArray = marks.filter((nintyPlus) => {
    return nintyPlus > 90;
});
console.log(nintyPlusArray);

//Practice Question Part 2

n = prompt("Enter the value n :");
let arr = [];

for (let i = 1; i<=n; i++){
    arr[i-1] = i;
}

let sigma = arr.reduce((res, curr) =>{
    return res + curr;
});

let delta = arr.reduce((res, curr) =>{
    return res * curr;
});

console.log(sigma);
console.log(delta);