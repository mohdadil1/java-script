const randomColor = function () {
    const hex = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
  };
let intervaalid;
const start=function(){
    if(!intervaalid){
       intervaalid= setInterval(changeBgcolor,1000);
    }
    function changeBgcolor(){
        document.body.style.backgroundColor =randomColor();
        console.log("Adil");
    }

}
const stop=function(){
    clearInterval(intervaalid);
    intervaalid=null;
}  
document.querySelector('#start').addEventListener('click',start);
document.querySelector('#stop').addEventListener('click',stop);


