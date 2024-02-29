// Imediately Invoked Function Expression (IIFE)
(function chai(){
    // named IIFE
    console.log("DB CONNECTED");
})();
((name)=>{
    // unamed IIFE
     console.log(`DB CONNECTED TWO ${name}`);
})("Adil")



