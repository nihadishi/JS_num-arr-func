let clientName = prompt("Enter Name");
let purs = prompt("Purs:");
let lastpursh;

if(purs>=100){
    lastpursh = purs*9/10;
}
if(purs>=100){
    lastpursh = purs*9/10;
}
if(purs>=300){
    lastpursh = purs*8/10;
}
if(purs>=500){
    lastpursh = purs*7/10;
}
console.log(`Total: ${lastpursh}`);

let allPursh = prompt("additional purs: ") + lastpursh;