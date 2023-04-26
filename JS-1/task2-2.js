const peopleWaiting = ['Kristina', 'Oleg', 'Kirill', 'Maria', 'Svetlana', 'Artem', 'Gleb'];
console.log(peopleWaiting);
peopleWaiting.splice(0,2);
console.log(peopleWaiting);
console.log("they will soon have a lunch break");
peopleWaiting.splice(0,1);
console.log(peopleWaiting);

while(peopleWaiting.length>0){
    console.log(peopleWaiting[0]);
    peopleWaiting.splice(0,1);
    console.log(peopleWaiting);
}    
alert("name did not receive the package and left the queue");
