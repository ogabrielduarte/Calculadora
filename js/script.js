// ===== CLASSES PADRÃO =====

import { Operacoes } from "./classes/Operacoes.js";
import { Calculadora } from "./classes/Calculadora.js";

// ===== FUNÇÕES DE ARMAZENAMENTO DE VALORES =====
import * as slots from "./utils/forSlots.js";

//
import { zero } from "./utils/zero.js";

// ===== FUNÇÃO DE LIMPEZA =====
import { allClear } from "./utils/clearOp.js";

const operacoes = new Operacoes();
const calc = new Calculadora();

const display = document.getElementById("display");
const botoes = document.querySelector(".botoes");

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

        if (alvo.className === "numero" && calc.lastRes) {
            allClear(calc, display);
            calc.lastRes = false
        } else if (alvo.className === "numero") {
            display.value += alvo.dataset.valor;
        }

        if (alvo.className === "operacao" && calc.currentOperation && alvo.dataset.operacao) {
            calc.currentOperation = alvo.dataset.operacao;
            calc.lastRes = false;
            display.value = '';
        } else if (alvo.className === "operacao" && alvo.dataset.operacao) {
            calc.currentOperation = alvo.dataset.operacao;
            calc.lastRes = false;
            slots.storeA(calc, display.value);
            display.value = '';
        }

        if (alvo.dataset.res && calc.lastValue) {
            const resultado = operacoes[op](calc.lastValue, calc.slotB);

            display.value = resultado;
            calc.lastValue = resultado;

        } else if (alvo.dataset.res) {

            slots.storeB(calc, display.value);

            if (alvo.dataset.res && calc.slotB === 0 && calc.currentOperation === 'razao') {
                zero(display);
            } else {
                let val;
                if (calc.lastValue) {
                    val = calc.lastValue;
                } else {
                    val = calc.slotA;
                }

                const resultado = operacoes[op](val, calc.slotB);

                display.value = resultado;
                calc.lastValue = resultado;
                calc.lastRes = true
            }
        }

        console.log(calc)
    }

});
