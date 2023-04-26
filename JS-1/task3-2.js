let getSumOfNumbers = Number(prompt());
let sumOdd=0;
let sumEven=0;
let sumAll=0;
getOdd(getSumOfNumbers);
getEven(getSumOfNumbers);
getAll(getSumOfNumbers);

function getOdd(getSumOfNumbers) {
    for (let index = 0; index <= getSumOfNumbers; index++) {
        if(index%2==1){
           sumOdd+=index;
        }
    }
    console.log(`Number: ${getSumOfNumbers}, Odd Sum ${sumOdd}`);
}
function getEven(getSumOfNumbers) {
    for (let index = 0; index <= getSumOfNumbers; index++) {
        if(index%2==0){
           sumEven+=index;
        }
    }
    console.log(`Number: ${getSumOfNumbers}, Even Sum ${sumEven}`);
}
function getAll(getSumOfNumbers) {
    for (let index = 0; index < getSumOfNumbers; index++) {
           sumAll+=index;
    }
    console.log(`Number: ${getSumOfNumbers}, All Sum ${sumAll}`);
}