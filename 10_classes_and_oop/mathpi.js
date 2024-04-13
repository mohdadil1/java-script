// const descriptor= Object.getOwnPropertyDescriptor(Math,"PI")
// console.log(descriptor);

const mobile={
    name:"iphone",
    price:350000,
    isAvailable:true,
    ordermoble:function(){
        console.log("not possiable");
       }
}
console.log(Object.getOwnPropertyDescriptor(mobile,"name"));
 Object.defineProperty(mobile,"name",{
//     writable:false,
     enumerable:false
      
 })
// console.log(Object.getOwnPropertyDescriptor(mobile,"name"));

for (let [key,value] of Object.entries(mobile)) {
    if(typeof value !== "function")
    console.log(`${key}:${value}`);
    
}