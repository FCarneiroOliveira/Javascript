const nome = 'Felipe'
export const sobrenome = 'Carneiro'
 
function soma(x,y){ // padrão
    return x + y
}
export class Pessoa{
    constructor(nome,sobrenome){
        this.nome = nome
        this.sobrenome = sobrenome
    }
}

export default (x, y) => x * y;

export {nome,soma}