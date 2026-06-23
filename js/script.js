import { Operacoes } from "./classes/Operacoes.js";
import { Calculadora } from "./classes/Calculadora.js";
import * as forSlots from "./utils/forSlots.js";

const operacoes = new Operacoes();
const calc = new Calculadora();

const display = document.getElementById("display");
const botoes = document.querySelector(".botoes");

botoes.addEventListener("click", (event) => {
    console.log(calc)
    const alvo = event.target;

    if (alvo.tagName === 'BUTTON') {
        display.dataset.state = "active"

        if (alvo.className === "numero" && display.dataset.state === "active") {
            display.value += alvo.dataset.valor;
        }

        if (alvo.className === "operacao") {
            const op = alvo.dataset.operacao;

            calc.currentOperation = alvo.dataset.operacao;

            if(!calc.slotA) {
                forSlots.storeA(calc, display.value);
            }

            if(calc.slotA && !calc.slotB) {
                forSlots.storeB(calc, display.value);
            }

        }
    }
});


