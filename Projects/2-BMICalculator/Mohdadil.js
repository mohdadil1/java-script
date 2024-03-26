const from=document.querySelector('form');
addEventListener('submit',function(e){
    e.preventDefault();
    const height=parseInt(document.querySelector('#Height').value);
    const weight=parseInt(document.querySelector('#Weight').value);
    const result=document.querySelector('#results');
    if(height===" "||height<0||isNaN(height)){
        result.innerHTML=`Please enter a valid height ${height}`;
    }
    else if(weight===''||weight<0||isNaN(weight)){
        result.innerHTML=`Please enter a valid weight ${weight}`;
    }
    else{
        const bmi=(weight/((height*height)/10000)).toFixed(2);
        if(bmi<18.6){
         result.innerHTML=`<span>${bmi}</br>Under weight</span>`;
        }
        else if (bmi>18.6 && bmi<=24.9){
        result.innerHTML=`<span>${bmi}</br>Normal</span>`;
        }
        else{
            result.innerHTML=`<span> ${bmi}</br>Over weight</span>`;
        }
    }

});
