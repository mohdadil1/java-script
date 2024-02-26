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