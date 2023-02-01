prompt('WHAT IS YOUR NAME? ')
prompt('WHAT IS THIER NAME? ')

let loveScore = Math.floor(Math.random() * 100) + 1;
console.log(loveScore)

if (loveScore > 70){
    alert(`Your Lovescore is ${loveScore}%. You both love each other like God loves Man.`);
}
else if (loveScore > 30 && loveScore <= 70){
  alert(`Your Lovescore is ${loveScore}%. You both love yourself like water and oil.`)
}
else {
    alert(`Your Lovescore is ${loveScore}. You both not love yourself`)
}