const userEmail=[]
if(userEmail){
    console.log("got user email");

}else{
    console.log("Dont have user email");
}
//falsy value
// flase,0,-0,Bignt 0n,"",null,undefined,NaN
// truthy value
// "0",'false'," ",[],{},function(){}
if(userEmail.length===0){
  console.log("Array is Empty");
}
const emptyobj={}
if (Object.keys(emptyobj).length===0) {
    console.log("object is empty");
    
}

// NUllish Coalescing Operator(??):null undefined

let val1;
//val1=5?? 10
// val1=null??10
// val1=undefined?? 15
val1=null?? 10??20
console.log(val1);

// terniary Operator
// condition? true: false
const iceTeaPrice=100
iceTeaPrice>=80? console.log("less than 80"): console.log("more than 80");