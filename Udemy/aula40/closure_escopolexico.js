function retornaFuncao(nome){ // closure é a habilidade da função acessaar o escopo léxico 
    return function(){
        return nome
    }
}

const funcao = retornaFuncao('Felipe');
console.dir(funcao()) // dir a mesma coisa que log