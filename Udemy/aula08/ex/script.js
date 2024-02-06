let varA = 'A';
let varB = 'B';
let varC = 'C';

const tempo = varA;
varA = varB;
varB = varC;
varC = tempo;
console.log(varA,varB,varC)