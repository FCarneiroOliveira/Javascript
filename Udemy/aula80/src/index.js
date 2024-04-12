import multiplica, {nome as nomei,apelido,soma,Pessoa} from './modulo1' // importando padrão e os demais
// import * as meuModulo from './modulo1' // importa tudo
// import multiplica from './modulo1' // importando o padrão do arquivo
const nome = 'joão'

const p1 = new Pessoa('Luiz','Cardoso')
console.log(soma(5,2),nome,nomei)
console.log(p1)
console.log()
console.log(multiplica(3,3))