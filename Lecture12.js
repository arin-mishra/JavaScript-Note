// console.log("One");

// function hello(){
//     console.log("Hello World");
// }

// setTimeout(hello, 10000);

// setTimeout(() =>{
//     console.log("setTimeout Function h");
// }, 10000);

// console.log("One");


//Callback Function

// function sum(a, b){
//     console.log(a + b);
// }

// function calculator(a, b, sumCallback){
//     sumCallback(a, b);
// }

// calculator(1,2,sum);

     //Also

// calculator(1,2,(a, b) => {
//     console.log(a + b);
// });



// function getData(dataId){
//     setTimeout(() => {
//         console.log("data",dataId);
//     }, 10000);
// }


// function getData2(dataId2){
//     setTimeout(() => {
//         console.log("data1", dataId2)
//     }, 8000);

//     setTimeout(() => {
//         console.log("data2", dataId2)
//     }, 10000);

//     setTimeout(() => {
//         console.log("data3", dataId2)
//     }, 12000)
// }

        //OR

// function getData(dataId, getNextData){
//     setTimeout(()=>{
//         console.log("data",dataId);
//         if(getNextData){
//             getNextData();
//         }
//     }, 2000);
// }



// //Callback Hell
// getData(1, () => {
//     console.log("getting data 2");
//     getData(2, () => {
//         console.log("getting data 3");
//         getData(3, ()=>{
//             console.log("getting data 4");
//             getData(4);
//         });
//     });
// });


//Promises : Solution to callback hell



// let promise = new Promise((resolve, reject) => {
//     console.log("I am a promise");
//     reject("Some error occurred");
// });



function getData(dataId, getNextData){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data", dataId);
            resolve("Succed");
            // reject("error");
            if (getNextData){
                getNextData();
            }
        }, 5000);
    });
};


// //Promise Chaining
// getData(1)
//     .then((res) => {
//         return getData(2);
//     })
//     .then((res) => {
//         return getData(3);
//     })
//     .then((res) => {
//         console.log(res);
//     });







// const getPromise = () => {
//     return new Promise((resolve, reject) => {
//         console.log("I am a Promise");
//         // resolve("Succes");
//         reject("Error aa gaya")
//     });
// };

// let promise = getPromise();

// promise.then((res) =>{
//     console.log("Promise Fulfilled", res);
// });

// promise.catch((err) => {
//     console.log("Rejected", err);
// })



// function asyncFunction1(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Some data");
//             resolve("success");
//         }, 4000);
//     });
// };


// function asyncFunction2(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Some data");
//             resolve("success");
//         }, 4000);
//     });
// };

// console.log("fetching data 1....");
// asyncFunction1().then((res) => {
//     console.log(res);
//     console.log("fetching data 2....");
//     asyncFunction2().then((res) => {
//     console.log(res);
// });
// });



// async Function

// function api(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Weather Data");
//             resolve(200);
//         }, 2000);
//     });
// };

// async function getWeatherData(){
//     await api(); //1st
//     await api(); //2nd
// }


// async function getAllData(){
//     await getData(1);
//     await getData(2);
//     await getData(3);
//     await getData(4);
// }

//IIFE FUNCTIONS


(async function getAllData(){
    await getData(1);
    await getData(2);
    await getData(3);
    await getData(4);
})();


