const pessoas = [
    {id:3,nome:'Felipe'},
    {id:2,nome:'Luiz'},
    {id:1,nome:'Maria'}
]

// const novasPessoas = {}

// for(const pessoa of pessoas){
//     const {id} = pessoa
//     novasPessoas[id] = {...pessoa}
// }

const novasPessoas = new Map()

for(const pessoa of pessoas){
    const {id} = pessoa
    novasPessoas.set(id,{...pessoas})
}

console.log(novasPessoas.get(2))