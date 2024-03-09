//IIFE - Imidiately invoked function expression

(function(idade,peso){ // isola as funções e todo o código dentro do escopo global
    const nome = "Felipe"
    const sobrenome = 'Carneiro'
    console.log(nome)

    function criaNome(nome){
        return nome + ' ' + sobrenome
    }
    function falaNome(){
        console.log(criaNome('Felipe'))
    }
    falaNome()
    console.log(idade,peso)
}(20,176))

const nome = 'Luiz'