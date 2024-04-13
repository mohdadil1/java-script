class User{
    constructor(username){
        this.username=username;
    }
    logMe(){
        console.log(`username is ${this.username}`);
    }
    static createId(){
        return "123";
    }
}
const p1=new User("Adil")
 p1.logMe()
console.log( p1.createId());

class Teacher extends User{
    constructor(username,email){
        super(username)
        this.email=email
    }
}
const P2=new Teacher("Dil","adil@yahoo")
P2.logMe()
console.log(P2.createId());