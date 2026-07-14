export function zero(display) {
    display.value = 'HEREGE!';

    const botoes = document.querySelectorAll(".botoes button");
    const calc = document.querySelector('.calculadora')

    const som = new Audio('../assets/audio/wtf_boom.mp3');

    const boom = document.createElement('img');
    boom.classList.add('boom')
    boom.setAttribute('src', '../assets/images/explosion.gif');
    boom.style.width = '100%';
    boom.style.height = '100%';

    const warning = document.createElement('div');
    warning.classList.add('warning');

    const h3 = document.createElement('h3');
    h3.innerText = 'VOCÊ EXPLODIU SUA WEBCASIO';

    const p = document.createElement('p');
    p.innerText = 'Clique aqui para receber uma nova';

    const refresh = document.createElement('button');
    refresh.classList.add('order');
    refresh.setAttribute('onclick', 'window.location.reload()')

    warning.appendChild(h3);

    botoes.forEach(botao => {
        botao.disabled = true;
    });

    setTimeout(() => {
        som.play();

        setTimeout(() => {
            calc.style.display = 'none';
            document.body.appendChild(boom);
            document.body.appendChild(warning);

            setTimeout(() => {
                warning.appendChild(p);
                warning.appendChild(refresh);
            }, 4000);

        }, 1850);
    }, 3500);
}