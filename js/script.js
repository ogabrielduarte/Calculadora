const display = document.querySelector('.display');
const botoes = document.querySelector('.botoes');

let a = 0,
    b = 0,
    operadorSelecionado = null;

let estado = false;

const operacoes = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
    '/': (a, b) => a / b,
}

function calcular(a, b, operador) {
    return operacoes[operador](a, b)
}

botoes.addEventListener('click', (event) => {
    const valorBotao = event.target.dataset.valor;

    if (event.target.classList.contains('numero')) {
        if (estado) {
            display.value = valorBotao;
            estado = false;
        } else {
            display.value += valorBotao;
        }
    } else if (event.target.classList.contains('ac') || event.target.classList.contains('c')) {
        display.value = ''
    } else if (event.target.classList.contains('operacao')) {
        let valorAtual = Number(display.value);

        if (a != 0 && operadorSelecionado != null) {
            a = calcular(a, valorAtual, operador);
            display.value = a;
        } else {
            a = valorAtual;
        }

        operadorSelecionado = valorBotao;
        estado = true;
    }
})
