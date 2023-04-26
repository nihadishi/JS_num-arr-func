const numbers = [10, 4, 100, -5, 54, 2];
let sum = 0;
for (let index = 0; index < numbers.length; index++) {
    sum += numbers[index]**3;
    
}
console.log(sum);