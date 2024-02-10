function getDiaST(diaS){
    let diaSTexto;
    switch (diaS){
        case 0:
            diaSTexto = 'Domingo'
            break;
        case 1:
            diaSTexto = 'Segunda'
            break;
        case 2:
            diaSTexto = 'Terça'
            break;
        case 3:
            diaSTexto = 'Quarta'
            break;
        case 4:
            diaSTexto = 'Quinta'
            break;
        case 5:
            diaSTexto = 'Sexta'
            break;
        case 6:
            diaSTexto = 'Sábado'
            break;
        default:
            diaSTexto = '';
    }
    return diaSTexto
}

const data = new Date('1987-04 00:00');
const diaS= data.getDay();
const diaST =getDiaST(diaS)


console.log(diaST)