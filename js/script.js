import { Operacoes } from "./classes/Operacoes.js";
import { Calculadora } from "./classes/Calculadora.js";
import * as slots from "./utils/forSlots.js";

const operacoes = new Operacoes();
const calc = new Calculadora();

const display = document.getElementById("display");
const botoes = document.querySelector(".botoes")

botoes.addEventListener("click", (event) => {
    const alvo = event.target;

    if (alvo.tagName === 'BUTTON') {

        if (alvo.className === "numero") {
            display.value += alvo.dataset.valor;
        }

        if (alvo.className === "operacao" && alvo.id !== "resultado") {
            display.removeAttribute("value");

            calc.currentOperation = alvo.dataset.operacao;

            if (calc.status) {
                slots.storeB(calc, display.value);
            }

            if (!calc.status) {
                slots.storeA(calc, display.value);
                calc.status = true;
            }

        }

        if (alvo.id === "resultado" && calc.slotA && calc.slotB) {
            const op = calc.currentOperation;

            display.value = operacoes[op](calc.slotA, calc.slotB);
        }

        console.log(calc)
    }
});
