//permitive
//7 types : String,Number,Boolean,null,undefined,Symbol,BigInt

const score=100
const scoreValue=100.3
const IsLogged=false
const outSide=undefined
let userEmail;
const id=Symbol('123')
const anotherId=Symbol('123')
//console.log(id==anotherId);
const bigNumber=34554357664356754n

//Reference(Non primitive)
//Array,Object,Function
const heros=["shaktiman","naagraj","doga"]
let myObj={
    name:"Adil",
    age:26
}
const myFunction=function(){
    console.log("Hello World");
}
//console.log(typeof bigNumber);

//****************************************** */
//Stack(Primitive),Heap (Non-Primitive)
//in stack we get a copy of value
//in heap we get a reference of value
let myName="mohdAdil"
let anotherName=myName
anotherName="dil"
console.log(myName);
console.log(anotherName);
let user1={
    email:"user@google.com",
    upiId:"mohdadil@paytm"

}
let user2=user1
user2.email="adil@gmail.com"
console.log(user1.email);
console.log(user2.email);