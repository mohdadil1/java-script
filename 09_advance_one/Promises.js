const promiseOne=new Promise(function(resolve,reject){
    // Do an async task
    // DB calls,Cryptography,Network
    setTimeout(function(){
        console.log("Async task complete");
        resolve()
    },1000)
})
promiseOne.then(function(){
    console.log("promise is consumed");
})
// Promise Two
new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    },1000)
}).then(function () {
    console.log("promise 2 consumed");
})
// Promise three
const promiseThree=new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"Adil",email:"Adil@gmail.com",PhoneNumber:"9559199866"})
    },1000)
})
promiseThree.then(function(user){
    console.log(user);
})
const promiseFour=new Promise(function(resolve,reject){
    setTimeout(()=>{
        let error=false;
        if(!error){
            resolve({username:"Mohd Adil",Password:"12345"})
        }
        else{
            reject(" Error Something went wrong")
        }
    },1000)
})
promiseFour.then((user)=>{
console.log(user);
return user.username;
}).then((username)=>{
console.log(username);
}).catch((err)=>{
    console.log(err);
}).finally(()=>console.log('The promise is resolved or rejected'))

const promiseFive=new Promise(function(resolve,reject){
    setTimeout(()=>{
        let error=true;
        if(!error){
            resolve({username:"JavaScript",Password:"12345"})
        }
        else{
            reject(" Error JS went wrong")
        }
    },1000)

})
async function consumedPromiseFive(){
    try{
        
    const response=await promiseFive
    console.log(response);
    }
    catch(error){
        console.log(error);
    }
}
consumedPromiseFive()
// async function getALLUsers(){
//     try{
//         const response= await fetch('https://jsonplaceholder.typicode.com/users')
//         const data=await response.json()
//         console.log(data);
//     }
//     catch(error){
//         console.log("E:",error);
//     }
// }
// getALLUsers()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json();
    
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>console.log(error));