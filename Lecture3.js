//Loops

//for loop
for (let count=1; count<=10; count++){
    console.log("Arin Mishra")
}

console.log("for-loop has ended")



let sum=0;
for(let i=1; i<=5; i++){
    sum = sum + i;
}

console.log("Sum of first 5 natural number is", sum)
console.log("for-loop has ended")



for(let a = 1; a<=5; a++){
    console.log("i = ",a);
}
console.log("for-loop has ended")


//While loop

b = 1;
while(b <= 5){
    console.log("b = ",b);
    b++;
}
console.log("while loop has ended");

c=1;
while(c <= 10){
    console.log("Arin Mishra");
    c++;
}
console.log("while loop has ended");


//Do while loop


let d = 20;
do{
    console.log("Apna College");
    d ++;
} while(d <= 10);
console.log("do-while loop has ended")

let e = 1;
do{
    console.log("Counting from 1 to 5 through do-while loop", e);
    e++
} while(e <= 10);
console.log("do-while loop has ended")



//for-of loop: can't be used for objects

let naam = "Arin Mishra"

let size = 0
for (let letters of naam){
    console.log("letters = ", letters);
    size++;
}

console.log("String Size = ", size);
console.log("for-of loop has ended")


//for-in loop: can be used for objects

let student = {
    name: "Rahul Kumar",
    age: 20,
    cgpa: 7.5,
    isPass: true,
};

for (let i in student){
    console.log(i)
}

for (let key in student){
    console.log("key = ",key, "value = ", student[key]);
}


//Practice Question 1 : print all the whole numbers till 100


for (let whole=0; whole<=100; whole++){
    console.log(whole)
}

for (let whole=0; whole<=100; whole=whole + 2){
    console.log(whole)
}

for(let num = 0; num<=100; num++){
    if(num % 2 !== 0){
        console.log("num =",num)
    }
}

//Practice Question 1 :correct number guess game

let gameNum = 25;

let userNum = prompt("Guess the game number: ")

while(userNum != gameNum){
    userNum = prompt("WRONG NUMBER. Guess the number again: ")
}
console.log("PERFECT RIGHT ANSWER!!!")


//STRINGS

str = "Kya bolta bantai";
console.log("Length of 'Kya bolta bantai' is :",str.length);
console.log(str[2]);

//Template Literals

let specialString = `This is a template literal`;
console.log(specialString);
console.log(typeof specialString);

    //df bw simple string and template literals

let obj = {
    item : "Pen",
    price : 10,
}

console.log("The cost of", obj.item,"is", obj.price, "rupees");
let output = `The cost of ${obj.item} is ${obj.price} rupees`;
console.log(output);

    //Escape Character --> \n
    //tab space --> \t

let rapper = "Talha\nAnjum"
console.log(rapper);
console.log(rapper.length);

//String Methods

let School = "Raj Kumar";
let newSchool = School.toUpperCase();
console.log(School);
console.log(newSchool);


// Practice Question 3: 

let user = prompt("Enter the name for username: ");
username = "@" + user + user.length;

console.log(username)