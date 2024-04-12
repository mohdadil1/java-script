let myName="Adil       "
console.log(myName.trueLength);

let myHeros=["thor","spiderman"]

let heroPower={
    thor:"hammer",
    spiderman:"sling",
    getSpiderPower:function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}
Object.prototype.Adil=function(){
    console.log(`Adil is present in all object`);
}
Array.prototype.heyAdil=function(){
    console.log(`Adil says hello`);
}

// heroPower.Adil()
// myHeros.heyAdil()
// heroPower.heyAdil()
// inhertiance
const user={
    name:"Adil",
    email:"Adil@google.com"
}

const Student={
    goClass:true
}
const classRoom={
    isAvailable:false
}
const TeacherSupport={
    teachingSubject:'JavaScript',
    fullTime:true,
    __proto__:classRoom
}
Student.__proto__=user;

// modern syntax

Object.setPrototypeOf(classRoom,Student)
let anotherUsername="ShibaAndAdil          "
String.prototype.trueLength=function(){
     console.log(`${this}`);
    // console.log(`${this.name}`);
    console.log(`True length is ${this.trim().length}`);
}
anotherUsername.trueLength()
"Adil".trueLength()
"Shiba".trueLength()