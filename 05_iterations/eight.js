// reduced method in Array
 const Array1=[1,2,3]
// const myTotal=Array1.reduce(function (acc,currval){
//     console.log(`acc:${acc} and curval:${currval}`);
//     return acc+currval
// }, 0)
const myTotal=Array1.reduce((acc,currval)=>acc+currval,0)
console.log(myTotal);

const shoppingCart=[
    {
        itemName:"js course",
        price:2999
    },
    {
        itemName:"python course",
        price:999
    },
    {
        itemName:"mobile dev course",
        price:5000
    },
    {
        itemName:"Data Scince",
        price:12000
    },
]

const priceToPay=shoppingCart.reduce((acc,item)=>acc+item.price,0)
console.log(priceToPay);