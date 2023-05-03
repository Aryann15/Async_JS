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

setTimeout(()=>{
    console.log("1")
    setTimeout(()=>{
        console.log("2")
        setTimeout(()=>{
            console.log("3")
        },3000)
    },2000)
},1000)