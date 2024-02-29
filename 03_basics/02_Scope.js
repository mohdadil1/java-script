let a= 300

if (true) {
    let a=10
const b=20
console.log("INNER",a);
}


// console.log(a);
//console.log(b);
//console.log(c);
//nested scope
function one() {
    const username="Adil"
    function two(){
        const website="youtube"
        console.log(username);
    }
    // console.log(website);
    // two()
}
//one()
if (true) {
    const username="Adil"
    if (username==="Adil") {
        const website="youtube"
        console.log(username+website);
    }
    // console.log(website);
}
// console.log(username);
// ++++++++++++++++++++++++++++++interesting+++++++++++++++++++++++++
addone(5)
function addone(num) {
    return num+1
    
}

addtwo(5)
const addtwo=function(num){
    return num+2
}