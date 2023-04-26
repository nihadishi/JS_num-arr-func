const goals = [8, 1, 1, 3, 2, -1, 5];
let sumAll = 0;
console.log(`The most scoring match aws at ${goals.indexOf(Math.max(...goals))}. There were ${Math.max(...goals)} scored in it.  `);
if (Math.min(...goals)>0) {
    console.log(`The most unsuccessful matches were under the ${goals.indexOf(Math.min(...goals))}. There were ${Math.min(...goals)} score.`);
    for (let index = 0; index < goals.length; index++) {
        sumAll += goals[index];
        
    }
    console.log(`The total number of goals for the season is equal to ${sumAll}. `);
    alert(`There were automatic defeats: No `);

}
else{
    alert(`There were automatic defeats: Yes `);
}

sumAll=0;
for (let index = 0; index < goals.length; index++) {
    sumAll += goals[index];
}
console.log(`Average: ${sumAll/length}`);
let sortGoals = goals.sort;
console.log(sortGoals);