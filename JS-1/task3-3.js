let divisors = [];
let i=0;
getDivisors(prompt());



function getDivisors(numb){
    if(isNaN(numb) || numb<=0){
        alert("number must be an integer and greater than zero!");
    }
    else{
        for (let index = 1; index <=numb; index++) {
            if(numb%index==0)
            divisors[i++] = index;
            
        }
        console.log(divisors.length);
        console.log(divisors);
    }
}