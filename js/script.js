const display = document.querySelector('.display');
const botoes = document.querySelector('.botoes');

botoes.addEventListener('click', (event) => {
    const valorBotao = event.target.dataset.valor;

    if (event.target.tagName == 'BUTTON') {
        display.value += valorBotao;
    }
})
