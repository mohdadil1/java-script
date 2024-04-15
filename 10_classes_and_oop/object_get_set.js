const User={
    _email:'h@hv.com',
    _password:'abc',
    get email(){
        return this._email.toUpperCase()
    },
    set email(value){
        this._email=value
    }
}
const dil=Object.create(User)
console.log(dil.email);