
// const treHoras = 60 * 60 * 4 * 1000
// const data = new Date(0 + treHoras);
//const data = new Date(2019,3,20,15,14,27,500);  ano-mes-dia-hora-minuto-segundo-ms
// const data = new Date('2019-04-20 20:20:59')
// console.log('Dia',data.getDate());
// console.log('Mês',data.getMonth()); // mes começa do zero
// console.log('Ano',data.getFullYear());
// console.log('Hora',data.getHours());
// console.log('Minuto',data.getMinutes());
// console.log('Segundo',data.getSeconds());
// console.log('ms',data.getMilliseconds());
// console.log('Dia semana',data.getDay()); // 0 - domingo  6-sábado
// console.log(data.toString())
function zeroEsquerda(num){
    return num >= 10 ? num: `0${num}`
}
function formatData(data){
    const dia = zeroEsquerda(data.getDate())
    const mes = zeroEsquerda(data.getMonth() + 1)
    const ano = zeroEsquerda(data.getFullYear())
    const hora = zeroEsquerda(data.getHours())
    const minuto = zeroEsquerda(data.getMinutes())
    const segundo = zeroEsquerda(data.getSeconds())

    return `${dia}/${mes}/${ano} ${hora}:${minuto}:${segundo}`
}
const data = new Date()
const dataBrasil = formatData(data)
console.log(dataBrasil)
