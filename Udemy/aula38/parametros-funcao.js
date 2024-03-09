function funcao(a,b = 2){
    let total = 0
    for(let argumento of arguments){ // arguments sustenta todos os parâmetros enviados e não funciona com arrow functions
        total += argumento
    }
    console.log(total, a + b)
}

funcao(1,undefined,3,4,5) // JS não liga para os parâmetros enviados para funções sem parâmetros definidos

function obj ({nome,sobrenome,idade}){
    console.log(nome,sobrenome,idade)
}
let objt = {nome: 'Felipe', sobrenome: 'Carneiro', idade: 20}
obj(objt)


function array([valor1,valor2,valor3]){
    console.log(valor1,valor2,valor3)
}
array(['Felipe','Carneiro',20])


function conta(operador,acumulador,...numeros){
    for(let num of numeros){
      if(operador === '+')  acumulador += num
      if(operador === '-')  acumulador -= num
      if(operador === '*')  acumulador *= num
      if(operador === '/')  acumulador /= num
    }
      console.log(acumulador)
}
conta('+',0,20,30,40)