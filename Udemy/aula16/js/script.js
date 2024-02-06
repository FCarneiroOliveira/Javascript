function meuEscopo(){
    const form = document.querySelector('.form');
    const res = document.querySelector('.res');
    const pessoas = [];

    function recebeForm(evento){
        evento.preventDefault();
        const nome = form.querySelector('.nome')
        const sn = form.querySelector('.sn')
        const peso = form.querySelector('.peso')
        const altura = form.querySelector('.altura')

         pessoas.push = {
            nome : nome.value,
            sn : sn.value,
            peso : peso.value,
            altura : altura.value
        }

        res.innerHTML += `<p>${nome.value} ${sn.value} ${peso.value}KG ${altura.value}m</p>`
    };

    form.addEventListener('submit', recebeForm);












 //   form.onsubmit = function (evento) {
 //       evento.preventDefault();
 //   };
}
meuEscopo();