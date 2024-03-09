// return
// retorna um valor e termina função

function soma(a,b){
    return (a + b)
}
console.log(soma(1,5))

// function falaFrase(comeco){
//     function falaResto(resto){
//         return comeco + ' ' + resto
//     }
//     return falaResto
// }
// const fala = falaFrase('Olá')
// const resto = fala('mundo!')
// console.log(resto)
function criaMultiplicador(multiplicador){
    // function multiplicacao(n){
    //     return n * multiplicador
    // }
    // return multiplicacao

    return function (n){
        return n * multiplicador
    }
}

const duplica = criaMultiplicador(2)
const triplica = criaMultiplicador(3)
const quadriplica = criaMultiplicador(4)

console.log(duplica(32))
console.log(triplica(32))