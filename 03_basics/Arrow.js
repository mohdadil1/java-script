const user={
    username:"Adil",
    price:999,
    welcomeMessage:function(){
        console.log(`${this.username},welcome to website`);
        console.log(this);
    }

}
// user.welcomeMessage()
// user.username="sam"
// user.welcomeMessage()
// console.log(this);
// function chai(){
//     let username="Adil"
//     console.log(this.username);
// }
// chai()
const chai=()=>{
    let username="Adil"
    console.log(this);

}

// chai()
//implicit return
// const addTwo=(num1,num2)=>{
//     return num1+num2
// }
// explicit return
// const addTwo=(num1,num2)=> num1+num2
// const addTwo=(num1,num2)=> (num1+num2)
// object return
const addTwo=(num1,num2)=> ({username:"Adil"})
console.log(addTwo(3,4))