//Arrays

let marks = [97,56,59,65,99];
console.log(marks);
console.log(marks.length);


let heroes = ["Ironman","Spiderman","Captain America","Hulk","Hawkeye"]
console.log(heroes)
console.log(typeof heroes)

marks[2] = 52;
console.log(marks)  //But this does not work in string array because it is immutable

//looping over an array

for(let idx = 0; idx<heroes.length; idx++){
    console.log(heroes[idx]);
}

for(let idx = 1; idx <= heroes.length; idx++){
    console.log(heroes[idx - 1]);
}

//for-of loop

for(let hero of heroes){
    console.log(hero);
}

cities = ["Delhi","Shahjahanpur","Mumbai","Sitapur","Rampur"];

for (let city of cities){
    console.log(city);
    console.log(city.toUpperCase());
}

let classMarks =[85,97,44,37,76,60];



//Practice Question 1 : Average of elements of Array

marks = [85,95,44,37,76,60];
sum = 0;
for(let val of marks){
    sum += val;
}

console.log(sum/marks.length);

//Practice Question 2: 10% off

let items = [250,645,300,900,50];

let i = 0;
for(let val of items){
    console.log(`value at index ${i} = ${val}`);
    
    let offer = val / 10;
    items[i] = items[i] - offer;
    console.log(`value after offer = ${items[i]}`);
    i++;
}

for (let kuchToh = 0; i < items.length;i++){
    let offer = items[kuchToh] / 10;
    items[kuchToh] -= offer
}
console.log(items);




let arr = [1,2,3,4,5,6,7]
arr.splice(2,2,101,102);
//Add elements
arr.splice(2,0,101);
//Delete Element
arr.splice(3,1)

//Practice Questions
let companies = ["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"]
console.log(companies);
companies.splice(0,1);
console.log(companies);
companies.unshift("Uber","amazon");
console.log(companies);
companies.push("Amazon");
console.log(companies);