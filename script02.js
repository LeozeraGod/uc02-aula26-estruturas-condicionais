const comando = prompt("Informe o Comando para a lampada (ligar/desligar): ")

const elementoImagem = document.createElement("img")

switch (comando.toLowerCase()) {

    case "ligar": 
        elementoImagem.src = "./assets/on.png"
    break;
    case "Desligar":
            elementoImagem.src = "./assets/off.png"

    break;
    default:
        break;
}