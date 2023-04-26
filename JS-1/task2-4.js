const coffees = ['Latte', 'Cappuccino', 'Americano'];

let userInput = prompt("Enter Cofee Name:");
if(coffees.includes(userInput)){
    userInputIndex = coffees.indexOf(userInput);
    alert(`Keep your favorite coffee coffee. It is ${userInputIndex+1}th most popular in our coffee shop`);
}
else{
    console.log("Unfortunately, this type of coffee is not available.");
}