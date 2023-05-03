//better version of callback
//just like a real life promise
//syntax

// const promise = new Promise ((resolve,reject)=>{
//     const sum =1+1
//     if (sum === 2)
//     {resolve('success')
//     }else {
//         reject('Error')
//     }
// })

// promise.then(message=>{
//     console.log(message)
// }).catch(message =>{
//     console.error(message)
// })

// resolve and reject are functions

//Async now

// setTimeoutPromise(2000).then(()=>{
// console.log("here")
// })

// function setTimeoutPromise(duration){
//     return new Promise((resolve,reject) => {
//         setTimeout(resolve,duration)
//     })
// }

//callback hells= complex code

// setTimeout(()=>{
//     console.log("1")
//     setTimeout(()=>{
//         console.log("2")
//         setTimeout(()=>{
//             console.log("3")
//         },3000)
//     },2000)
// },1000)

//how promises can solve callback hell

// setTimeoutPromise(1000)
//   .then(() => {
//     console.log("1");
//     return setTimeoutPromise(2000);
//   })
//   .then(() => {
//     console.log("2");
//     return setTimeoutPromise(3000);
//   })
//   .then(() => {
//     console.log("3");
//   });

// function setTimeoutPromise(duration) {
//   return new Promise((resolve, reject) => {
//     setTimeout(resolve, duration);
//   });
// }

// Create a promise version of addevent Listener

// const button = document.querySelector("button");

// addEventListenerPromise(button, "click").then((e) => {
//   console.log(e);
//   console.log("clicked");
// });

// function addEventListenerPromise(element, method) {
//   return new Promise((resolve, reject) => {
//     element.addEventListener(method, resolve);
//   }  );
// }





// ASYNC & AWAIT



function setTimeoutPromise(duration) {
    return new Promise((resolve, reject) => {
      setTimeout(resolve, duration);
    });
  }

async function doStuff(){
    await setTimeoutPromise(250)
    console.log("1")
    await setTimeoutPromise(2000)
    console.log("2")
} 


doStuff()