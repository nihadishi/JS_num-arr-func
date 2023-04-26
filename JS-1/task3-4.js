let ttrue=0;
let ffalse=0;
let ttotal=0;
const checkQuestionAnswer = (question, answer) => {
    ttotal++;
    alert(`Question: ${question}`);
    // console. log(`Answer: ${answer}`);
    let answ = prompt("Your answer:");
    if(answ == answer){
        alert("Your answer is correct");
        ttrue++;
    }
    else{
        alert("Your answer is incorrects");
        ffalse++;
    }
}
 
checkQuestionAnswer('Is the watermelon a fruit or a berry?', 'A berry');
checkQuestionAnswer('How many teeth does an average adult have?', '32');
checkQuestionAnswer('What is the name of the smallest bird in the world?', 'Hummingbird');
alert(`You had total ${ttotal} questions and you answered ${ttrue} question correctly, but you had ${ffalse} mistakes `);


