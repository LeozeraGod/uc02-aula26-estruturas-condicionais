// if / else if 
// se/ senão se 

const numeroMes = Number(prompt('INFORME O NÚMERO DO MÊS: '))

// Verifica se o numeroMes for 1, então o mês é janeiro 
// Senão, verifica se numeroMes for 2, então o mês é Fevereiro
// Senão, verifica se numeroMes for 3, então o mês é Março

let nomeMes
let ano = 2024

// if (numeroMes === 1) {
//     nomeMes = "JANEIRO" 
// }else if (numeroMes === 2) {
//     nomeMes = "FEVEREIRO"
// }else if (numeroMes === 3) {
//     nomeMes = "MARÇO"
// }else if (numeroMes === 4) {
//     nomeMes = "ABRIL"
// }else if (numeroMes === 5) {
//     nomeMes = "MAIO"
// }else if (numeroMes === 6) {
//     nomeMes = "JUNHO"
// }else if (numeroMes === 7) {
//     nomeMes = "JULHO"
// }else if (numeroMes === 8) {
//     nomeMes = "AGOSTO"
// }else if (numeroMes === 9) {
//     nomeMes = "SETEMBRO"
// }else if (numeroMes === 10) {
//     nomeMes = "OUTUBRO"
// }else if (numeroMes === 11) {
//     nomeMes = "NOVEMBRO"
// }else if (numeroMes === 12) {
//     nomeMes = "DEZEMBRO"
// }else {
//     nomeMes = "MÊS INVÁLIDO"
// }





//SWITCH CASE 

switch (numeroMes) {
    case 1: nomeMes = "JANEIRO" 
        break;
    case 2: nomeMes = "FEVEREIRO" 
        break;
    case 3: nomeMes = "MARÇO" 
        break;
    case 4: nomeMes = "ABRIL" 
        break;
    case 5: nomeMes = "MAIO" 
        break;
    case 6: nomeMes = "JUNHO" 
        break;
    case 7: nomeMes = "JULHO" 
        break;
    case 8: nomeMes = "AGOSTO" 
        break;
    case 9: nomeMes = "SETEMBRO" 
        break;
    case 10: nomeMes = "OUTUBRO" 
        break;
    case 11: nomeMes = "NOVEMBRO" 
        break;
    case 12: nomeMes = "DEZEMBRO" 
        break;
    
    default: nomeMes = "MES INVALIDO"
    break;
}

const elementoMensagem = document.createTextNode("h1")

elementoMensagem.textContent = nomeMes + ' ' + ano

document.body.appendChild(elementoMensagem)