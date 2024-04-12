import geraSenha from "./geradores";


const resultado = document.querySelector('.resultado')
const qtdN = document.getElementById('qn')
const Amaius = document.getElementById('Amaius')
const Aminus = document.getElementById('Aminus')
const Anum = document.getElementById('Anum')
const Asimb = document.getElementById('Asimb')
const btn = document.querySelector('.gerar-senha')

export default () => {
   btn.addEventListener('click', () => {
    resultado.innerHTML = gera()
   })
}

function gera(){
    const senha = geraSenha(
        qtdN.value,
        Amaius.checked,
        Aminus.checked,
        Anum.checked,
        Asimb.checked,
    )

    return senha || 'Nada Selecionado'
}
