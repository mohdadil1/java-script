class User{
constructor(username){
    this.username=username;
}
logMe(){
    console.log(`Username is ${this.username}`);
}
}
class Teacher extends User{
    constructor(username,email,password){
        super(username)
        this.email=email;
        this.password=password;
    }
    addCourse(){
        console.log(`Course is added  by ${this.username}`);
    }

}

const P1=new Teacher('Adil',"adil@gmail.com","1234")
P1.logMe()
P1.addCourse()
const P2=new User("shiba")
P2.logMe()
console.log(P1===P2);
console.log(P1 instanceof Teacher);
