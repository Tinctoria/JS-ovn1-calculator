// Hämtat alla element vi kommer använda i variabler. 
const inp1=document.getElementById("input1"); // värde 1 
const inp2=document.getElementById("input2"); // värde 2
const inp3=document.getElementById("input3"); // Summa

const plus = document.getElementById("click");
const minus = document.getElementById("click2");
const delat = document.getElementById("click3");
const multi = document.getElementById("click4");
const tecken =document.getElementById("tecken");

// funktion som kallas på när någon tryckt på knappen. 
function clickedPlus(){ //funktion för plusknappen
    const value1=input1.value;
    const value2=input2.value; 
    
    let sum=parseInt(value1)+parseInt(value2); 
    
    inp3.value=sum;
    tecken.textContent="+";
}
function clickedMinus(){ //funktion för minusknappen
    const value1=input1.value;
    const value2=input2.value; 
    
    let sum=parseInt(value1)-parseInt(value2); 
    
    inp3.value=sum;
    tecken.textContent="-";
}

function clickedDelat(){ //funktion för delatmedknappen
    const value1=input1.value;
    const value2=input2.value; 
   
    let sum=parseInt(value1)/parseInt(value2); 
    
    inp3.value=sum;
    tecken.textContent="/";
}
function clickedMulti(){ //funktion för multiplikationsknappen
    const value1=input1.value;
    const value2=input2.value; 

    let sum=parseInt(value1)*parseInt(value2); 
    
    inp3.value=sum;
    tecken.textContent="*";
}
 
/* här lägger vi till en "lyssnare" på knappen som lyssnar på
"click" eller "onclick" eventet. (ett inbyggt event i Javascript). 
Vi skickar även in våran "whenClicked" funktion. */ 
plus.addEventListener("click", clickedPlus);
minus.addEventListener("click", clickedMinus);
delat.addEventListener("click", clickedDelat);
multi.addEventListener("click", clickedMulti);
