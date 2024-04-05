//Artimetic Operator

let a=5;
let b=3;

console.log("a =",a, "& b =",b);
console.log("a + b = ", a+b);
console.log("a - b", a-b);
console.log("a * b =", a*b);
console.log("a / b", a/b);
console.log("a % b", a%b);
console.log("a ** b", a**b)

//Uniary Operator

console.log("++a =", ++a);
console.log("a++ =", a++);
console.log("a = ",a);

console.log("--a = ", --a);
console.log("a-- = ", a--);
console.log("a = ",a);


//Assignment Operators in JS

let c=5;

console.log("c = ",c);
console.log("c = c + 4 or c+=4 = ",c+=4);
console.log("Now c =",c);
console.log("c = c - 4 or c-=4 = ",c-=4);
console.log("Now c =",c);
console.log("c = c * 4 or c*=4 = ",c*=4);
console.log("Now c =",c);
console.log("c = c % 4 or c%=4 = ",c%=4);
console.log("Now c =",c);
console.log("c = c ** 4 or c**=4 = ",c**=4);
console.log("Now c =",c);

//Comparison Operator
console.log("Comparison Operator")

let d=7
let e=8

console.log("d = ",d,"e = ",e);
console.log("Does d == e :", d==e);
console.log("Does d != e :", d!=e);

//=== and !== are used when we have to even compare the data types also
console.log("d > e :",d>e);
console.log("d >= e :",d>=e);
console.log("d < e :",d<e);
console.log("d <= e :",d<=e);

//Logical Operator
console.log("Logical Operator: It tells about true or false")
console.log("&& --> and , || --> or , ! --> not")

//Conditional Statements

let age=25;

if(age > 18){
    console.log("You can vote");
}

if(age<18){
    console.log("You CANNOT vote");
}

let mode="dark";
let color;

if (mode === "dark"){
    color = "black";
}

if (mode === "light"){
    color="white"
}

console.log(color)



if (mode === "dark"){
    color = "black";
} else{
    color="white"
}

console.log(color)


let num=54;

if (num % 2 === 0){
    console.log(num, "is even");
} else{
    console.log(num, "is odd")
}
//Tersary Operator

age = 45;

let result = age>= 18 ? "adult": "not adult";

console.log(result);

result = age>= 18 ? console.log("adult"): console.log("not adult");

//Assignment One

let multiple = prompt("Enter a Number : ");

if (multiple % 5 ===0) {
    console.log(multiple, "is multiple of 5")
} else{
    console.log(multiple, "is not multiple of 5")
}

//Assignment Two

let score = prompt("Enter total marks of a particular subject :")

if (score >= 90 && score<= 100){
    console.log("Grade: A");
} else if(score>=70 && score<90){
    console.log("Grade: B");
}else if(score>=60 && score<70){
    console.log("Grade: C");
}else if(score>=50 && score<60){
    console.log("Grade: B");
}else{
    console.log("Grade: F")
}

alert("Thank You useful inputs")