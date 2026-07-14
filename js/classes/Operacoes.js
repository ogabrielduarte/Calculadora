export class Operacoes {
    soma(a, b) {
        return a + b;
    }

    subtracao(a, b) {
        return a - b;
    }

    produto(a, b) {
        return a * b;
    }

    razao(a, b) {
        const res = a / b;
        const split = res.toString().split('.')

        if(split[1].length > 10) {
            return (`${res.toFixed(9)}...`);
        }

        return res;
    }
}
