function home(){
    window.location="index.html";
}
function temp(){
    window.location="temperature.html";
}

function t(){
let tinput= document.getElementById('tinput');
var tresult= document.getElementById('tresult');
var tinputType = document.getElementById('tinput-type');
var tresultType = document.getElementById('tresult-type');
var tinputTypeValue,tresultTypeValue;

tinput.addEventListener('keyup',myResult);
tinputType.addEventListener("change",myResult);
tresultType.addEventListener("change",myResult);

tinputTypeValue =  tinputType.value;
tresultTypeValue = tresultType.value;


function myResult(){
    
    tinputTypeValue =  tinputType.value;
    tresultTypeValue = tresultType.value;

     if(tinputTypeValue==='far'&& tresultTypeValue==='kel'){
        tresult.value= ((Number(tinput.value)-32)/1.8) +273.15;
     }
      else if(tinputTypeValue==='far'&& tresultTypeValue==='far'){
        tresult.value= Number(tinput.value);
     }
     else if(tinputTypeValue==='far'&& tresultTypeValue==='cel'){
        tresult.value= (Number(tinput.value)-32)*(5/9);
     }



     if(tinputTypeValue==='cel'&& tresultTypeValue==='far'){
        tresult.value=(Number(tinput.value)*1.8 )+ 32;
     }
      else if(tinputTypeValue==='cel'&& tresultTypeValue==='cel'){
        tresult.value= Number(tinput.value);
     }
     else if(tinputTypeValue==='cel'&& tresultTypeValue==='kel'){
        tresult.value= Number(tinput.value)+273.15;
     }
    

     if(tinputTypeValue==='kel'&& tresultTypeValue==='cel'){
        tresult.value= Number(tinput.value)-273.15;
     }
      else if(tinputTypeValue==='kel'&& tresultTypeValue==='far'){
        tresult.value=(( Number(tinput.value)-273.15)*1.8)+32;
     }
     else if(tinputTypeValue==='kel'&& tresultTypeValue==='kel'){
        tresult.value= Number(tinput.value);
     }
     
}}