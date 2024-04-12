// fetch('pessoas.json').then(resposta => resposta.json()).then(json => carregaNaPagina(json))

// Agora fazendo o mesmo que o fetch, só que usando o axios

axios('pessoas.json').then(resposta => carregaNaPagina(resposta.data))

function carregaNaPagina(json){
    const table = document.createElement('table')
    let th = document.createElement('th')
        th.innerText = 'Nome'
    table.appendChild(th)
     th = document.createElement('th')
        th.innerText = 'Idade'
    table.appendChild(th)
     th = document.createElement('th')
        th.innerText = 'Sexo'
    table.appendChild(th)
    for(let pessoa of json){
        const tr = document.createElement('tr')

        let td = document.createElement('td')
        
        td.innerHTML = pessoa.nome
      
        tr.appendChild(td)

         td = document.createElement('td')
         th = document.createElement('th')
        td.innerHTML = pessoa.idade
        tr.appendChild(td)
         td = document.createElement('td')
         th = document.createElement('th')
        td.innerHTML = pessoa.sexo
        tr.appendChild(td)

        table.appendChild(tr)
    }
const resultado = document.querySelector('.resultado')
resultado.appendChild(table)

}