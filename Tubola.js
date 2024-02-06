let h1 = document.getElementById("displayNumber");
function displayNumber()
{
    let number = generateNumber();
    h1.innerHTML=number;
}

function generateNumber()
{
    let number =Math.floor(Math.random()*100);
    
    if(number>=1 && number <=90 && number!=undefined)
    {
        console.log(number);
        return number;
    }    
    else{
        console.log(number);
        generateNumber();
    }
    
}

