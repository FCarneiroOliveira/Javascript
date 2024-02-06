/*
FALSY
0
'' "" ``
null/undefined
NaN
 */
 
function oi(){
    return 'oi';
}
let vaiExecutar = 'J';

console.log(vaiExecutar && oi());


const corU = null;
const corP = corU || 'red';
console.log(corP)



const a = 0;
const b = null;
const c = false;
const d = false;
const e = NaN;
console.log(a || b || c || d || e)