// class user{
//     constructor(username,email,paasword){
//         this.username=username;
//         this.email=email;
//         this.paasword=paasword;
//     }

// encryptPassword(){
//     return`${this.paasword}abc`
// }
// changeUsername(){
//     return `${this.username.toUpperCase()}`
// }
// }
// const P1=new user("adil","Adil@fb.com","1234")
// console.log(P1.encryptPassword());
// console.log(P1.changeUsername());

// behind the scene
 function User(username,email,paasword){
    this.username=username;
    this.email=email
    this.paasword=paasword;
 }
 User.prototype.encryptPassword=function(){
    return `${this.paasword}abc`
 }
 User.prototype.changeUsername=function(){
    return `${this.username.toUpperCase()}`
 }

 const P2=new User("shiba","shiba@apple","143")
 console.log(P2.encryptPassword());
 console.log(P2.changeUsername());