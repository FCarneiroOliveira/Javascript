// const nome = ['Felipe','Carneiro']
// iterar os valores e não o indice
// for (let valor of nome){
//     console.log(valor)
// }

// nome.forEach(function(valor, indice){
//     console.log(valor, indice)
//  }
// )

const pessoa = {
    nome : 'Felipe',
    idade: 20
}

for (let i in pessoa){
    console.log(i, pessoa[i])
}

// for clássicos com iteráveis (raay ou strings)
// for in - retorna o indice ou chave(string,array ou objetos)
// for of - retorna o valor em si (string,array ou objetos)