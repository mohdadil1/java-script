// /for- each loop
const coding=["js","rubby","java","python","cpp"]

// coding.forEach( function (item){
// console.log(item);
// })
// coding.forEach((val)=>{
//     console.log(val);
// })
// function printMe(item){
//     console.log(item);
// }
// coding.forEach(printMe)
// coding.forEach((item,index,arr)=>{
//     console.log(item,index,arr);

// })
const myCodzing=[
    {
    languageName:"Javascript",
    languageFileName:"js"
},
{
    languageName:"Java",
    languageFileName:"java"
},
{
    languageName:"python",
    languageFileName:"py"
},

]
myCodzing.forEach((item)=>{
    console.log(item.languageName);
})