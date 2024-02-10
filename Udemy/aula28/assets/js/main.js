const elementos = [
    {tag:'p', texto:'Qualquer texto meu chapa.'},
    {tag:'div', texto:'Pii Pópó póropó Pii pópó póropó.'},
    {tag:'section', texto:'Caneta Azul.'},
    {tag:'footer', texto:'Cabeça Branca é um cidadão de bem!'}
]
const container = document.querySelector('.container')
const div = document.createElement('div');


for (let i =0; i < elementos.length;i++){;
    let {tag, texto} = elementos[i];
    let elemento = document.createElement(tag);
    div.appendChild(elemento)
    elemento.innerText = texto;
}

container.appendChild(div)