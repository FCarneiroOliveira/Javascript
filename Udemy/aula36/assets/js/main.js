const itarefa = document.querySelector('.itarefa')
const btntarefa = document.querySelector('.btntarefa')
const tarefas = document.querySelector('.tarefas')

function criaLi() {
    const li = document.createElement('li')
    return li
}
itarefa.addEventListener('keypress', function (e) {
    if (e.keyCode === 13) {
        if (!itarefa.value) return;
        criaTarefa(itarefa.value)
    }
})

function limpaI(){
    itarefa.value = ''
    itarefa.focus()
}

function criaBtnApagar(li){
    li.innerText += ' '
    const btnApagar =  document.createElement('button')
    btnApagar.innerText = 'Apagar'
    btnApagar.setAttribute('class','apagar')
    li.appendChild(btnApagar)
}

function criaTarefa(textoInpunt) {
    const li = criaLi()
    li.innerHTML = textoInpunt
    tarefas.appendChild(li)
    limpaI()
    criaBtnApagar(li)
    salvarTarefa()
}

btntarefa.addEventListener('click', function (e) {
    if (!itarefa.value) return;
    criaTarefa(itarefa.value)
})

document.addEventListener('click', function(e){
    const elem = e.target
    if(elem.classList.contains('apagar')){
        elem.parentElement.remove()
        salvarTarefa()
    }
})

function salvarTarefa(){
    const liTarefas = tarefas.querySelectorAll('li')
    const listaTarefas = [];

    for(let tarefa of liTarefas){
        let textoTarefa = tarefa.innerText
        textoTarefa = textoTarefa.replace('Apagar','').trim()
        listaTarefas.push(textoTarefa)
    }
    const  tarefasJson = JSON.stringify(listaTarefas);
    localStorage.setItem('tarefas', tarefasJson)

}

function recarregouPagina(){
    const tarefas = localStorage.getItem('tarefas')
    const listaTarefas = JSON.parse(tarefas)

    for(let tarefa of listaTarefas){
        criaTarefa(tarefa)
    }
}

recarregouPagina()