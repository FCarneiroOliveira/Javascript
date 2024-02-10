function getDiaST(diaS){ // primeiro método
    let diaSTexto;
    switch (diaS){
        case 0:
            diaSTexto = 'Domingo'
            break;
        case 1:
            diaSTexto = 'Segunda-feira'
            break;
        case 2:
            diaSTexto = 'Terça-feira'
            break;
        case 3:
            diaSTexto = 'Quarta-feira'
            break;
        case 4:
            diaSTexto = 'Quinta-feira'
            break;
        case 5:
            diaSTexto = 'Sexta-feira'
            break;
        case 6:
            diaSTexto = 'Sábado'
            break;
        default:
            diaSTexto = '';
    }
    return diaSTexto
}
function getNM(numeroMes){ // método mais rápido
    const meses = ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro']
    return meses[numeroMes];
}
function zeroEsquerda(num){
    return num >= 10 ? num: `0${num}`
}
function criaData(data){
    const diaSemana = data.getDay();
    const numeroMes = data.getMonth();

    const nomeDia = getDiaST(diaSemana);
    const nomeMes = getNM(numeroMes)

    return `${nomeDia}, ${data.getDate()} de ${nomeMes} de ${data.getFullYear()} ${zeroEsquerda(data.getHours())}:${zeroEsquerda(data.getMinutes())}`
}
const data = new Date();
let h = document.querySelector('.container h1')
h.innerHTML = criaData(data)

// OUTRA SOLUÇÃO
// Resolvendo o problema inteiro usando o toLocaleDateString
//  let h = document.querySelector('.container h1');
//  const data = new Date();
//  const opc = {
//     dateStyle: 'full'
//  };
//  h.innerHTML = data.toLocaleDateString('pt-BR',opc);

