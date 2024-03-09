// Declaração de função (Function hoisting( ou seja a função pode se chamada antes da sua declaração))
falaOi()
function falaOi(){
    console.log('Oi')
}

// First-class objects (funções são objetos de primeira classe)
// Function Expression
const souUmDado = function(){
    console.log('Sou um dado!')
}
souUmDado()

function executaFuncao(funcao){
    funcao()
}

executaFuncao(souUmDado) // recebe uma função como parâmetro


// Arrow Function

const funcaoArrow = () => {
    console.log('Sou uma função Arrow')
}

funcaoArrow()

// Dentro de um objeto

const obj = {
    falar: function(){
        console.log('Estou dentro de um objeto!')
    }
}
obj.falar()