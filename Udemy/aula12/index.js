const alunos = ['Luiz','Maria','Felipe'];
console.log(alunos[0])
console.log(alunos);
alunos[0] = 'Jojo'
alunos[3] = 'Todinho'
console.log(alunos)
console.log(alunos.length)
alunos.push('Luiza')
alunos.unshift('Letrel')
alunos.pop();
console.log(alunos)
delete alunos[1]
console.log(alunos)
console.log(alunos.slice(0,-2))
console.log(alunos instanceof Array)