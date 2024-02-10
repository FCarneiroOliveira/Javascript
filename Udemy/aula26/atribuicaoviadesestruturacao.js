
// ...rest(pega o resto)  /   ...spread (espalha)
// const numeros = [10, 20, 30, 40, 50, 60, 70, 80, 90];
// const [primeiro,,terceiro,,cinco] = numeros;
// console.log(primeiro,terceiro,cinco)

// const numeros = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
// const [,[,,seis]] = numeros
// console.log(seis)

// const numeros = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
// const [lista1,lista2,lista3] = numeros
// console.log(lista3[2])

const pessoa = {
    nome: 'Felipe',
    sobrenome: 'Carneiro',
    idade: 20,
    endereco:{
        rua: 'Antônio Seabra',
        numero: 333
    }
};      // mudando o nome da váriavel
const {nome: teste , sobrenome, idade, endereco:{rua: r,numero},endereco} = pessoa;

console.log(r,numero, endereco)