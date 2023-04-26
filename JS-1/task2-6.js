let clientsEstimations = [];
let i=0, five=5;
while(five>0){
let askClientToGiveEstimation = prompt("How do you rate our coffee shop from 1 to 10?");
if(askClientToGiveEstimation>=1 && askClientToGiveEstimation<=10){
    clientsEstimations[i] = askClientToGiveEstimation;
    i++;
}
five--;
}
let greaterThan = clientsEstimations.filter(number => number>5);
let smallerThan = clientsEstimations.filter(number => number<=5);
console.log(`+ feedback is ${greaterThan.length}`);
console.log(`- feedback is ${smallerThan.length}`);