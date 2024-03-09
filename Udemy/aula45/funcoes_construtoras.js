// Função Construtora -> Objetos
// Função Fábrica -> Objetos
// São moldes para criar objetos
// Construtora - começa com letra maiúscula e precisa do new para chamar a função

function Pessoa(nome,sobrenome){
    //Privada
    const id = 123456
    //Privado
    const metodoInterno = () => {

    }
    
    this.nome = nome
    this.sobrenome = sobrenome

    this.metodo = function(){
        console.log(this.nome + ': Sou um método')
    }
}

const p1 = new Pessoa('Felipe', 'Carneiro')
const p2 = new Pessoa('Felipe', 'Oliveira')
p1.metodo()