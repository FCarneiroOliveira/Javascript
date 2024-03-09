const paragrafos = document.querySelector('.paragrafos')
const ps = paragrafos.querySelectorAll('p')

const estiloBody = getComputedStyle(document.body);
const bgColor = estiloBody.backgroundColor;

for (let p of ps){
    p.style.backgroundColor = bgColor;
    p.style.color = '#FFFFFF';
}