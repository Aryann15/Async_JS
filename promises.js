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

// function setTimeoutPromise(duration) {
//     return new Promise((resolve, reject) => {
//       setTimeout(resolve, duration);
//     });
//   }

// async function doStuff(){
//     await setTimeoutPromise(250)
//     console.log("1")
//     await setTimeoutPromise(2000)
//     console.log("2")
// }

// doStuff()

// function setTimeoutPromise(duration) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(`ypu waited ${duration}`);
//     }, duration);
//   });
// }

// async function doStuff() {
//   const message = await setTimeoutPromise(250);
//   console.log("message");
//   console.log("1");
//   const message2 = await setTimeoutPromise(2000);
//   console.log("message2");
//   console.log("2");
// }

// doStuff();

//usinf try and catch here

// async function doStuff() {
//   try{
//     const message = await setTimeoutPromise(250);
//     console.log("message");
//     console.log("1");
//     const message2 = await setTimeoutPromise(2000);
//     console.log("message2");
//     console.log("2");
//   } catch(error){
//     console.error("error")
//   }
//   }

//   doStuff();

// assignment()

// function getValueWithDelay(value,delay){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             resolve(value)
//         }, delay);
//     })
// }

// function getValueWithDelayError(value,delay){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             reject("error")
//         }, delay);
//     })
// }

// async function assignment(){
//     try{
//         const val =await getValueWithDelay(10,1000)
//         console.log(val)
//     } catch(e){
//         console.error(e)
//     }  finally{                   //executes no matter what
//         console.log("finally")
//     }
// }

//fetch

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//      console.log(data.map(user =>user.name))
//   });

//async await version

// async function api(){
//     try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/users")\
//     const user = await response.json()
//     if(response.ok) //checks if the response is true of false
//     {console.log(users.map(user=>user.name))
//     }
//     else{
//         console.log("FAILURE")
//     } }catch (e){
//     console.log("error")   //catch when to display error when we might enconter internet issues
//     }}
//     api()

//send data to the server

// async function api() {
//   const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },

//     body: JSON.stringify({
//       title: "NEW POST",
//     }),
//   });
//   const post = await response.json();
//   console.log(post);
// }
// api();

const URL = "https://jsonplaceholder.typicode.com/comments?postId=1";

async function doStuff() {
  const response = await fetch(URL);
  const data = await response.json();
  console.log(data);
}

fetch(URL)
  .then(res => res.json())
  .then(comments => {
    console.log(comments);
  });
