function saymyname(){
    console.log("a");
    console.log("d");
    console.log("i");
    console.log("l");

}
//saymyname()
function addTwoNumbers(number1,number2){
    console.log(number1+number2);
    return number1+number2
}
const result=addTwoNumbers(2,null)
// console.log(result);
function loginUserMessage(username="sam") {
    if (!username) {
        console.log("please enter a username");
        return
        
    }
    return `${username} just logged In`
}
console.log(loginUserMessage("Adil"));
function calculatedCarPrice(...num1) {
    return num1
    
}
console.log(calculatedCarPrice(200,400,500));
const user={

    username:"Adil",
    price:199
}
function handelobject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}
//handelobject(user)
handelobject({
    username:"sam",
    price:399
})
const myNewArray=[200,400,100,600]
function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue([200,400,500,1000]));