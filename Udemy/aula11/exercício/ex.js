const num1 = Number(prompt('Digite um número'));
const titulo = document.getElementById('titulo');
const texto = document.getElementById('texto');

titulo.innerHTML = num1;
texto.innerHTML = '';
texto.innerHTML = `<p> Raiz Quadrada: ${num1 ** 0.5}.</p>`;
texto.innerHTML += `<p> ${num1}  é inteiro? ${Number.isInteger(num1)}.</p>`;
texto.innerHTML += `<p> É  NaN: ${Number.isNaN(num1)}.</p>`;
texto.innerHTML += `<p> Arredondando para baixo: ${Math.floor(num1)}.</p>`;
texto.innerHTML += `<p> Arredondando para cima:${Math.ceil(num1)}.</p>`;
texto.innerHTML += `<p> Com duas casas decimais: ${num1.toFixed(2)}.</p>`;