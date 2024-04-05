//Objects

const student ={
    fullName : "Arin Mishra",
    marks : 94.4,
    printMarks : function (){
        console.log("marks are :", this.marks());
    },
};


const employee = {
    calcTax(){
        consolelog("Tax rate is 10%");
    }
}

const karanArjun = {
    salary : 50000,
    calcTax(){
        console.log("Tax rate is 20%");
    }
};

const karanArjun2 = {
    salary : 50000,
};

const karanArjun3 = {
    salary : 50000,
};

const karanArjun4 = {
    salary : 50000,
};

karanArjun.__proto__ = employee;
karanArjun2.__proto__ = employee;
karanArjun3.__proto__ = employee;
karanArjun4.__proto__ = employee;


//Class

class ToyotaCar{
    constructor(model, mileage){
        console.log("Creating new object");
        this.modelh = model;
        this.mileageh = mileage; 
    }
    start(){
        console.log("Start");
    }

    stop(){
        console.log("Stop");
    }

    setBrand(brand){
        this.brandName = brand;
        this.brand = brand;
    }

    speed(kmh){
        this.velo = kmh;
    }
}

let fortuner = new ToyotaCar("new", 12);
fortuner.setBrand("fortuner");
fortuner.speed("35");


//Inheritance

class Parent{
    hello(){
        console.log("Hello World");
    }
}

class Child extends Parent{}

let obj = new Child();
// console.log(obj);




class Person {
    constructor(){
        console.log("Enter child constructor");
        this.species = "Homo sapiens";

    }
    eat(){
        console.log("Eat");
    }

    sleep(){
        console.log("Sleep");
    }

    work() {
        console.log("Mai to bhai thak gya");
    }
}

class Engineer extends Person {
    //direct constructor will not work
    constructor(branch){
        console.log("enter child constructor");
        super();    //to invole parent class constructor
        this.branch = branch
        console.log("Exit child constructor");
    }
    work(){
        console.log("Solve Problems, Build Projects!");
    }
}

class Doctor extends Person{
    work(){
        console.log("Operation karta hu")
    }
}


let Arin = new Engineer("Chemical Engineer");


//Practice Questions:

let data = "secret information";

class User {
    constructor(name,email){
        this.name = name;
        this.email = email;
    }

    viewData(){
        console.log("data = ", data);
    }
}

let student1 = new User("Ram","ram@gmail.com");
let student2 = new User("Shayam","shayam@gmail.com");

//Practice Question 2

class Admin extends User {

    constructor(name,email){
        super(name, email);
    }

    editData(){
        data = "some new value";
    }
}

let admin1 = new Admin("Admin","admin@gmail.com")


//Error Handling

let a = 5;
let b = 8;

console.log("a = ",a);
console.log("b = ",b);
console.log("a+b = ",a+b);
console.log("a+b = ",a+b);
try{
    console.log("a+b = ",a+c);  //error
} catch(err){
    console.log(err);
}
console.log("a+b = ",a+b);
console.log("a+b = ",a+b);
console.log("a+b = ",a+b);
console.log("a+b = ",a+b);
console.log("a+b = ",a+b);
