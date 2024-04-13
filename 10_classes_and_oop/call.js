function SetUsername(username){
    // complex calculation Db call
    this.username=username;
    console.log("called");
}
function createUser(username,email,password){
    SetUsername.call(this,username)
    this.email=email;
    this.password=password;
}

const user= new createUser("Adil","Adil@gmail.com","123456")
console.log(user);