/*
JS é baseado em protótipos para passar propriedades e méodos de um objeto para outro.

Definição de protótipo
Protótipo é o termo usado para se referir ao que foi criado pela primeira vez, servindo de modelo ou molde para futuras produções.

Todos os obejtos tem uma referência interna para um protótipo (__proto__) que vem da propriedade prototype da função construtora que foi usada para cria-lo. Quando tentamos acessar um membro de um objeto , primeiro o motor do JS vai tentar encontrar este membro no própio objeto e depois a cadeia de protótipos é usada até o topo (null) até encontrar (ou não) tal membro.
*/

function Pessoa(nome,sobrenome){
    this.nome = nome
    this.sobrenome = sobrenome
}
Pessoa.prototype.estouEmTodos = 'Estou em todos os objetos criados pela função Pessoa()'

Pessoa.prototype.nomeCompleto = function() {
    console.log(this.nome + ' ' + this.sobrenome)
}
const pessoa1 = new Pessoa('Felipe','Carneiro')
const data = new Date()
console.log(pessoa1.estouEmTodos)
pessoa1.nomeCompleto()