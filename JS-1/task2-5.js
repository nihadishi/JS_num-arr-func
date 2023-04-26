const coffees = ['Latte', 'Cappuccino', 'Americano'];
const prices = [1.5, 1, 2];
prices.forEach(element => {
    prices[prices.indexOf(element)] = element + 0.5;
});
for (let index = 0; index < coffees.length; index++) {
    alert(`${coffees[index]} is ${prices[index]} euro now.`);
    
}