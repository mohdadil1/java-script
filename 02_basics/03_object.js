//object literals
const mySym=Symbol("key1")
const JsUser={
    name:"adil",
    "full name": "Mohd Adil",
    [mySym]:"mykey1",
    age:19,
    location:"Azamgarh",
    email:"Adilm925@gmail.com",
    isLogged:false,
    lastLogginDays:["Monday","Saturday"]
    
}
// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);
JsUser.email="mohdadil9555@gmail.com"
// console.log(JsUser);
// Object.freeze(JsUser)
JsUser.email="adil@gmil.com"
// console.log(JsUser);
JsUser.greeting=function(){
    console.log("Hello js user");
}
JsUser.greetingtwo=function(){
    console.log(`Hello js user, ${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingtwo());
