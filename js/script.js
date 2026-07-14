// ===== CLASSES PADRÃO =====
import { Operacoes } from "./classes/Operacoes.js";
import { Calculadora } from "./classes/Calculadora.js";

// ===== FUNÇÕES DE ARMAZENAMENTO DE VALORES =====
import * as slots from "./utils/forSlots.js";

// ===== FUNÇÃO DE LIMPEZA =====
import { allClear } from "./utils/clearOp.js";

const operacoes = new Operacoes();
const calc = new Calculadora();

const display = document.getElementById("display");
const botoes = document.querySelector(".botoes")

botoes.addEventListener("click", (event) => {
    const alvo = event.target;
    const op = calc.currentOperation;

    if (alvo.tagName === 'BUTTON') {

        if (alvo.className === "ac") {
            allClear(calc, display);
        }

        if (alvo.className === "c") {
            display.value = '';
        }


        if (alvo.className === "numero") {
            display.value += alvo.dataset.valor;
        }

        if (alvo.className === "operacao" && calc.currentOperation && alvo.dataset.operacao) {
            calc.currentOperation = alvo.dataset.operacao;
            display.value = '';
        } else if (alvo.className === "operacao" && alvo.dataset.operacao) {
            calc.currentOperation = alvo.dataset.operacao;
            slots.storeA(calc, display.value);
            display.value = '';
        }

        if (alvo.dataset.res) {
            slots.storeB(calc, display.value);
            
            const resultado = operacoes[op](calc.slotA, calc.slotB);

            display.value = resultado;
            calc.lastValue = resultado;
        }

        console.log(calc)
    }

});
