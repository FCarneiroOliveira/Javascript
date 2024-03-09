const nomes = ['Felipe','Maria','João']

//nome.splice(indice,deleta,adiciona1,adiciona2 etc)

const removido = nomes.splice(2,1) // removi o indice 2 do array e coloquei dentro da constante
nomes.splice(-1,1) // removi a maria de trás pra frente usando negativo
nomes.splice(1,0,'Carneiro') // adicionei o elemento - adiciona no indice indicado, mudando o indice dos demais se houver
nomes.splice(1,1,'Carneiro','de Oliveira') // removi o Carneiro e adicionei o 'Carneiro' e o 'de Oliveira'
console.log(nomes)