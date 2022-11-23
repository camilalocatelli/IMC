let alturaDigitada = null;
let massaDigitada = null;
let calculo = null;
let exibirIMC = null;
let exibirSituacao = null;
let exibirResultado = null;

let infoUsuario = {
    altura: null,
    massa: null
}

document.addEventListener("DOMContentLoaded", setup);

function setup() {
    alturaDigitada = document.getElementById("altura");
    massaDigitada = document.getElementById("massa");
    calculo = document.getElementById("calcular");
    exibirIMC = document.getElementById("exibeIMC");
    exibirSituacao = document.getElementById("exibeSituacao");
    exibirResultado = document.getElementById("resultado");

    alturaDigitada.addEventListener("change", () => infoUsuario.altura = Number(alturaDigitada.value));
    massaDigitada.addEventListener("change", () => infoUsuario.massa = Number(massaDigitada.value));
    calculo.addEventListener("click", () => {
        if (infoUsuario.altura != 0 && infoUsuario.massa != 0) {
        const valorIMC = (infoUsuario.massa / (infoUsuario.altura ** 2)).toFixed(2);
        const situacaoUsuario = testandoSituacao(valorIMC);

        exibirIMC.innerText = `${valorIMC} kg/m².`;
        exibirSituacao.innerText = `${situacaoUsuario}`;
        exibirResultado.hidden = 0;
        }
    });
}

function testandoSituacao(valorIMC) {
    let IMC = Number(valorIMC)

    switch (true) {
        case (IMC < 17):
            return "Muito abaixo do peso.";

        case (IMC < 18.5):
            return "Abaixo do peso."
        
        case (IMC < 25):
            return "Peso normal.";

        case (IMC < 30):
            return "Acima do peso.";

        case (IMC < 35):
            return "Obesidade.";

        case (IMC < 40):
            return "Obesidade severa.";

        case (IMC >= 40):
            return "Obesidade mórbida.";

        default:
            return "Erro! tente novamente.";
    }
}