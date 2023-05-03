//better version of callback
//just like a real life promise
//syntax 

const promise = new Promise ((resolve,reject)=>{
    const sum =1+1
    if (sum === 2)
    {resolve('success')
    }else {
        reject('Error')
    }
})


promise.then(message=>{
    console.log(message)
}).catch(message =>{
    console.error(message)
})

//resolve and reject are functions