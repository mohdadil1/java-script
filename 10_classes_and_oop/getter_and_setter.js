class User{
    constructor(email,password){
        this.email=email
        this.password=password
    }
   get password(){
    return this._password.toUpperCase()
   }
   get email(){
    return this._email.toUpperCase()
   }

   set password(value){
    this._password=value.toUpperCase()
   }
   set email( value){
    this._email=value
   }
}

const adil= new User("adil@fb","abc")
console.log(adil.password);