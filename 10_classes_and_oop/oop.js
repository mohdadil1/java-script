// object Literals

const user={
    Username:'Mohd Adil',
    loginCount:8,
    signedIn:true,
    getUserDetails:function(){
        // console.log('Got user details from databse');
        // console.log(this.Username);
        console.log(this);
    }
}
// console.log(user.Username);
// console.log(user.getUserDetails());
// console.log(this);

// constructor function

function User(Username,loginCount,isLoggedIn){
    this.Username=Username;
    this.loginCount=loginCount;
    this.signedIn=isLoggedIn;
    this.greeting=function(){
        console.log(`Welcome ${this.Username}`);
    }
    return this;
}
const userOne=new User('Mohd',10,true);
const userTwo=new User('Adil',12,false)
console.log(userOne.constructor);
// console.log(userTwo);
