module.exports = function(x,y) {
    return x * y
}

console.log(module.exports(2,2))



const path = require('path')

console.log(path.resolve(__dirname,'..','..','node')) // transforma o caminho do arquivo para qualuqe tipo de sistema ou servidor


console.log(__filename)// nome do arquivo atual , percorre desde a raiz
console.log(__dirname) // noma da pasta atual