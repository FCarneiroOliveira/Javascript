function relogio() {

    function Csegundos(segundos) {
        const data = new Date(segundos * 1000);
        return data.toLocaleTimeString('pt-BR', {
            timeZone: 'UTC'
        })
    }

    const relogio = document.querySelector('.relogio')
    const iniciar = document.querySelector('.iniciar')
    const pausar = document.querySelector('.pausar')
    const limpar = document.querySelector('.limpar')
    let segundos = 0
    let timer

    function iniciaRelogio() {
        timer = setInterval(function () {
            segundos++
            relogio.innerHTML = Csegundos(segundos)
        }, 1000)
    }

    document.addEventListener('click', function (e) {
        const elem = e.target
        if (elem.classList.contains('limpar')) {
            relogio.classList.remove('pausado')
            clearInterval(timer)
            relogio.innerHTML = '00:00:00'
            segundos = 0
        }
        if (elem.classList.contains('iniciar')) {
            relogio.classList.remove('pausado')
            clearInterval(timer)
            iniciaRelogio();
        }
        if (elem.classList.contains('pausar')) {
            relogio.classList.add('pausado')
            clearInterval(timer)
        }
    })
}
relogio()